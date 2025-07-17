---
title: 项目三：商业数据
sidebar_position: 73
date: 2022-08-05
tags: [商业数据]
---

## 实时数据流

```jsx
前端埋点（浏览器）
   ↓  HTTP POST / Image beacon / JS SDK
网关服务 / 伏羲日志接收服务（如 Nginx + Lua、Node proxy、Agent 等）
   ↓
Kafka（标准埋点入口，格式通常为 JSON / CSV）
   ↓
Flink / Spark Streaming 等（处理、清洗、聚合、分流）
   ↓
落地存储（ClickHouse / Elasticsearch / HDFS / Hive / OLAP）
```

1. **数据源头：**前端埋点 SDK 上报数据；
2. **数据采集：**伏羲日志平台，统一采集埋点数据；
    - 伏羲发送 Kafka 消息，但不是直接原始 JSON，转为了 CSV 格式的 Kafka 消息；
        - 节省 Kafka 存储和贷款开销：CSV 更紧凑，字节数比 JSON 小很多（不带字段名）；
        - Kafka 设计为高吞吐顺序写入的消息系统，使用结构扁平、紧凑的格式可以极大减少 I/O 和网络消耗
3. **数据处理：**Flink 数据处理，订阅 Kafka 消息，CSV → JSON 格式化处理，处理后再次发送 Kafka 消息；
    - 上传 jar 包，在星河实时计算平台，运行这个 Flink 任务。
    - 实时任务，使用 Java 编写的 Flink Job，从 Kafka topic 中消费数据；
    - 将 CSV 数据解析为结构化对象，转换为 JSON 格式字符串；
4. **数据转发：**Flink 处理数据后，通过 Flink 的 KafkaSink 将 JSON 写入到另一个 Kafka topic；
5. **数据入库：**星河平台，支持 Kafka 数据接入服务，自动同步到 ClickHouse；
    - 配置 Kafka topic → ClickHouse 表的字段映射；
    - JSON 格式数据就会被实时落地到 ClickHouse 表中；
    - ClickHouse 是通过 ClickHouse Kafka Engine 存储数据的；

如果是落到 es 数据库中：

1. 数据源头、数据采集：流程不变
2. 数据入库：无需 Flink 做数据格式处理，直觉通过 Logstash 入库操作，格式化 CSV。

### 后端订单数据

1. **数据产生：**前端调用 order/buy 下单统一接口，下单订单信息同步至商业后端；
2. **实时转发：**商业后端扣费成功，订单信息通过 kafka 同步至数仓；
3. **数据推送：**数仓信息同步后，通过 kafka 再次发送数据；
4. **数据入库：**
    1. 离线：每日 8.30 定时任务，从云窗获取昨日订单数据：
        - 服务器调云窗 API，将查询 sql 传递给云窗，云窗在查询到结果后返回数据。
    2. 实时：商业产品管理平台订阅数据，落表到 mongodb；

### 商业产品 source 数据

1. **数据产生：**数据源是各商业产品的页面曝光埋点；
2. **数据获取：**
    1. 每日 10 点定时任务，服务器拿着所有项目的曝光埋点 id，去查这些曝光埋点的昨日数据；
    2. 获得埋点数据后，匹配本地数据库，是否有新增 source；
    3. 如果有新增，则登记该 source；

### **服务器日志数据**

1. **数据源头：**性能 / 异常 sdk 上报数据；
2. **数据保存：**Node.js 服务器中，使用 bunyan 将数据保存在本地日志文件中；
3. **日志收割：**接入公司 Kafka 日志实时采集服务，将日志收割并实时转发；
4. **数据入库：**数据实时落库
    - 云 DB 系统：Kafka 数据接入，通过 Logstash 落库到 es 中；
    - 星河：Kafka 数据接入，落库到 ck 中；

### Kafka 使用结构

**Topic（主题）**：用于组织消息流。

-   name：主题名，唯一；
-   partitions: 分区数，决定并发度和吞吐；
    -   每个 partitions 独立维护一个 offset；
-   retention_ms：数据保留时间（3 天）；

**Producer（生产者）**：用于发送消息的客户端；

-   bootstrap.servers：Kafka 集群地址列表
-   其他：压缩方法、失败重试次数、发送前等待时间、批量发送时大小

**Consumer（消费者）**：用于从 Kafka 消费消息的客户端

-   group_id：消费组 ID，用于协调分区和 offset 管理；
    -   Kafka 将 offset 与 group_id + topic + partition 关联
-   offset：新消费者如何选择 offset 起点；
-   fetch_min_bytes：拉取的最小数据量；
-   max_poll_records：每次 poll 拉取的最大消息数；

**如果两个消费者使用不同的 group_id：**

-   每个 group 会独立维护自己的 offset
-   同一个 partition 中的数据会分别提供给两个组
-   A 消费了不会影响 B，两者都能完整消费所有数据。

**如果两个消费者的 group_id 相同：**

-   一个 partition 只能被 group 内的 一个 consumer 消费；
-   多个消费者之间是竞争关系，不是顺序；

**Kafka 的消息删除机制**

Kafka 删除消息是基于 topic 的 保留策略（retention policy），而不是是否被消费。

不关心数据是否被所有 group 消费完，它只关心消息在 topic 中是否达到了保留时间或大小的阈值。

-   Kafka 是日志系统，不是 MQ（严格意义的消息队列），数据存在磁盘上是“追加日志”，不做消费者的强依赖管理
-   方法一 默认策略：按照时间、按照大小到达阈值，自动清理旧数据；
-   方法二 日志压缩模式：滚动更新，只保留固定量的日志总数；

## 权限管理

RBAC（基于角色的访问控制）权限管理系统

1. **数据模型设计**：
    - User：用户实体、Role：角色实体、Permission：权限实体
    - 用户和角色是多对多关系，角色和权限也是多对多关系
2. **核心组件**：
    - PermissionModule：权限模块，注册相关实体和服务
    - PermissionGuard：权限守卫，负责权限验证
    - PermissionService：提供权限管理相关功能
3. 基础内容：
    - 使用 session 存储用户认证信息；
    - 需要验证的接口增加装饰器：`@SetMetadata('grant-permission', ['权限名称'])`
    - PermissionGuard 守卫在请求处理前进行权限验证：
        1. 获取路由上标记的权限名称，获取 session 中的用户信息；
        2. 根据用户信息，查询所属角色，根据角色，查询具体权限；
        3. 匹配当前接口权限是否拥有，拥有则继续执行接口逻辑，否则返回无权限。

还有一个 **ACL（基于访问控制表）**

-   相比角色控制，相当于直接对每个用户定义可以访问的接口和操作权限，少了角色层。
-   缺点：角色可批量管理，减少接入成本；人员变动时，仅需调整角色即可。

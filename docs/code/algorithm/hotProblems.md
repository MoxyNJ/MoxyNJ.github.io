## 42. 接雨水

- [42. 接雨水](https://leetcode.cn/problems/trapping-rain-water/)
- 0616，hard，answer
- 暴力解、动态规划、栈、巧解

#### 方法一：暴力解｜按行遍历

复杂度：

- 时间复杂度：如果最大的高度是 *m*，height总个数是 *n*，那么就是 *O(m∗n)*;
- 空间复杂度：*O(1)*；

解析：

- 计算出一个 container，就加入到总水量 sum 中。

![rainwatertrap](images/hotProblems.assets/rainwatertrap.png)

思路：遍历每一层高度（1～3）然后计算这一层的储水量：

- container 记录每一个水坑，
- 当计算好一个 container 时（左右都有高于它的挡板），就把 container 加到 sum 总水量中，并重置 container。

通过第一层举例，高度 i = 1，j 从 0～height.length：

- 左侧 `[0, 2]` 位置，用 flag 排除，只有当 (`height[j] >= i`) 时，找到了第一个左侧的挡板，flag 设置为 true，才开始统计雨水量。
- 右侧 `[10,11]` 位置，用 container 添加的时机排除，开始统计雨水量后，每当遇到一个新的挡板。这个挡板既是左侧 container 的挡板，圈成一个水坑，也是右侧 container 的挡板，开始圈一个新的水坑。所以遇到一个新的挡板，表明左侧的 container 已经圈出来，把当前 container 的值加到总量 sum 中。然后重置 container = 0。
  - 最后一个水坑 height.length - 2 位置，因为没有右挡板，所以统计的 container 并没有添加到 sum 中，而是作废了。

```js
var trap = function (height) {
  let max = 0;  // 获取最大高度
  height.forEach(item => max = Math.max(item, max));
  let sum = 0;

  for (let i = 1; i <= max; i++) {
    let container = 0;  // 遇到第二个边界，就把当前池子的水加入sum中，防止最右侧不构成一个池子
    let flag = false;
    for (let j = 0; j < height.length; j++) {
      if (flag && height[j] < i) container++;
      else if (height[j] >= i) {
        sum += container;
        container = 0;
        flag = true;
      }
    }
  }
  return sum
};
```



#### 方法二：动态规划｜按列遍历

复杂度：

- 时间复杂度：height 总个数是 *n*，有 3 次 for 循环，那么就是 *O(n)*;
- 空间复杂度：二维 dp 数组的长度为 n，每个成员又是一个长度为 2 的子数组，所以总空间为 2n，得 *O(n)*；

解题思路：

![rainwatertrap](images/hotProblems.assets/rainwatertrap.png)

当要计算某一列 i 的水量时，只需要有该列左侧 / 右侧的最高高度即可。

情况一：

![542754f4431d93141920185252aee31664a96dd17285b92dfe390e9e977bebb1-image](images/hotProblems.assets/542754f4431d93141920185252aee31664a96dd17285b92dfe390e9e977bebb1-image.png)

比如上图中，正在求的列 i 左侧最高墙，就是 i - 1；右侧最高墙是 i + 3。那么高度 i 的储水量，就是左右两侧高墙的较低高度 - i 的高度

```js
const container = Math.min(左侧高墙, 右侧高墙) - height[i];
```

情况二：

![19a50c8f4125c01349ad32d069f564b51fbb4347fd91eae079b6ec1a46c1ccee-image](images/hotProblems.assets/19a50c8f4125c01349ad32d069f564b51fbb4347fd91eae079b6ec1a46c1ccee-image.png)

如果当前列的高度高于左侧强高度，则不存在任何储水。如上图，那么按照上面 container 公式计算出结果就小于 0，这时只需要在每次添加总水量 sum 时，判断一下 container 是否大于 0 即可：

```js
const container = Math.min(左侧高墙, 右侧高墙) - height[i];
if (container > 0) sum += container;
```

求左侧 / 右侧最高高度：

- 这里我隐隐感觉到要动态规划，但是还是没理性的分析出来。

动态规划的雏形就是递归，找到最小子问题，找到 base case。

这里的 base case ：

- 当 1 判断储水量时，也就是 i = 1 时，左侧最高墙就是 height[0]；
- 当 height.length - 2 判断储水量时，i = height.length - 2 时，右侧最高墙就是 height[height.length - 1]；

递归：

- 当 2 判断储水量时，也就是 i = 2 时，左侧最高墙就是 ：`Math.max( i-1的高度，i-1的左侧最高高度)`；
- 右边同理。

所以就找到了动态规划的状态转移方程

1. 定义 `dp[i][j]`
   - `dp[i][0]` 表示当 i 为判断容器时，它左侧的最高高度；
   - `dp[i][1]` 表示当 i 为判断容器时，它右侧的最高高度；

2. 定义状态转移方程

```js
// 状态转移方程 (初始化)：i 的范围从[1,height.length-1]，左右两段肯定不能作为容器。

// 从左往后遍历，求左侧最高高度
for (let i = 1; i < height.length - 1; i++)
  dp[i][0] = Math.max(dp[i - 1][0], height[i - 1]);

// 从后往前遍历，求右侧最高高度
for (let i = height.length - 2; i > 0; i--) 
  dp[i][1] = Math.max(dp[i + 1][1], height[i + 1]);
```

有了 dp，然后在 for 循环遍历一遍 height，求出每一个高度的储水量：

```js
var trap = function (height) {
  // dp[i][0] // i 位置的左侧最高高度
  // dp[i][1] // i 位置的右侧最高高度
  const dp = Array.from(new Array(height.length), () => new Array(2).fill(0));
  let sum = 0;
  
  // 状态转移方程 (初始化)：i 的范围从[1,height.length-1]，左右两段肯定不能作为容器。
  for (let i = 1; i < height.length - 1; i++)
    dp[i][0] = Math.max(dp[i - 1][0], height[i - 1]);

  for (let i = height.length - 2; i > 0; i--) 
    dp[i][1] = Math.max(dp[i + 1][1], height[i + 1]);
  
  for (let i = 1; i < height.length - 1; i++) {
    const container = Math.min(dp[i][0], dp[i][1]) - height[i];
    if (container > 0) sum += container;
  }
  return sum;
};
```



#### 方法三：栈



![37fccd915f959c2046ffc1ab2b0a1e4d921869337d8d5d4aa218886ab0bf7c8a-image](images/hotProblems.assets/37fccd915f959c2046ffc1ab2b0a1e4d921869337d8d5d4aa218886ab0bf7c8a-image.png)

栈结构的思路如下：

- 想象为括号匹配，栈内维护一个递减序列，
- while 循环，如果当前高度 `height[i]` 大于栈顶元素，那么就说明 `height[i]` 应该是一个水池的右边界。那么就用 while 循环，把栈内所有当前高度是右边界的水池计算掉：
  - 栈顶元素取出，作为 bottom（水池底端）；
  - 现在要找水池的左边界，在栈内。
    - 此时要额外判断，如果栈内已经没有任何元素了，说明没有左边界，此时跳过 while 循环。（上图中 height[0]、height[1]）
  - 左边界就是当前栈顶元素（上面已经取出了 bottom）；
  - 计算 distance 水池的宽度：左右两个墙之间的距离 - 1：右边（`i`） - 左边（栈顶：`stack[stack.length - 1]`）。
  - 计算左右两边的较低边，min
  - 计算水池的容量，并加到 sum 中，水池容量：` (side - height[bottom]) * distance`。
- 当 while 循环结束，表明栈内已经没有水坑了（栈内为空，或者栈内的高度都大于当前元素 height[i]），那么这时候就把当前元素 push 到栈内。

```js
var trap = function (height) {
  const len = height.length;
  const stack = []; // 栈内一定是一个递减序列, 保存index
  let sum = 0;

  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] >= height[stack[stack.length - 1]]) {
      // 出栈
      const bottom = stack.pop();
      if (!stack.length) break;
      let distance = i - stack[stack.length - 1] - 1; //两堵墙之前的距离。
      const side = Math.min(height[i], height[stack[stack.length - 1]]);
      sum += (side - height[bottom]) * distance;
    }
    stack.push(i);
  }
  return sum
};
```



## 6. Z 字形变换

- [6. Z 字形变换](https://leetcode.cn/problems/zigzag-conversion/)
- 0623，mid，normal
- 字符串

#### 方法一：二维数组

自己的方法太差，直接 **忽略** 吧。

从 numRows == 1, 2, 3, 4 找到规律。可以建立一个二维数组，按列递增把每一个字符串添加其中：

```js
//-- 示例 2 --//
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I
```

如果 numRows === 4 时，可以发现周期 t 有如下规律：

- 第 0 列，二位数组的所有位置都被填满， t = numRows - 1；
- 第 1 列，二位数组的 `arr[1][numRows - 2]` 也就是 `arr[1][t]` 被填入字符，t = numRows - 2；
- 第 2 列，二位数组的 `arr[2][numRows - 3]` 也就是 `arr[1][t]` 被填入字符，t = numRows - 3； 
- 第 3 列，二位数组的所有位置都被填满， t 重制为 numRows - 1；

如此循环，直到 s 中所有字符填入其中即可。

```js
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  // 建立二维数组，row = numRows
  const arr = Array.from(new Array(numRows), () => []);
  let char = 0;  // 字符
  let j = 0;     // 数组的列
  let t = numRows - 1;  // 周期：numRows - 1
  while (char < s.length) {
    // 全列都要写入
    if (t === numRows - 1) {
      for (let i = 0; i < numRows; i++) {
        arr[i][j] = s[char];
        char++;
      }
    } else {
      // 一列只有一个写入
      arr[t][j] = s[char];
      char++;
    }
    // 初始化：下一次循环
    t = t === 1 ? numRows - 1 : t - 1;
    j++;
  }
  // 输出: 扁平化 + 拼接 -- flat、foreach、filter等,遍历时会过滤空值。
  return arr.flat().join("");
};
```

#### 方法二：一维数组

事实上，结果要返回上题中二维数组的扁平化内容：

```js
//-- 示例 2 --//
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
[
  P     I    N
  A   L S  I G
	Y A   H R
	P     I
]

// 调整为一维数组 
dict = [str0, str1, str2, str3]
// str0 = "PIN"
// str1 = "ALSIG"
// str2 = "YAHR"
// str3 = "PI"
```

不是一个二维数组，而是 4 个一维数组也可以，不需要建立二位数组，也不需要中间有空余位置，满足 'z' 的形状，因为最终输出的字符串并不需要这些额外的信息。

- 重点：

如果 numRows 为 4， 依次放入 s 中的成员时，一维数组 dict 下标的变化是这样的：0, 1, 2, 3, 2, 1, 0 ... 在 [0, numRows - 1] 之间往返。

所以，用 flag 表明下标 i 应当 +1，还是 -1：

- 当 i == 0 时，下一步 i 应当累加，flag 设置为 +1；
- 当 i == numRows - 1时，下一步 i 应当累减，flag 设置为 -1；

```js
var convert = function (s, numRows) {
  if (numRows < 2) return s; // 一行直接返回

  const dict = Array.from(new Array(numRows), () => "");
  let i = 0;  // dict 下标
  let flag = -1;

  for (const char of s) {
    dict[i] += char;
    // i 遍历到头/尾，就重制flag
    if (i === 0 || i === numRows - 1) flag = -flag;
    i += flag;
  }
  return dict.join('');
};
```


















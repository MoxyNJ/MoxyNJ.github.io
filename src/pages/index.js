import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Hero from '../components/Hero';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Ninjee的前端篮子 - 记录前端学习笔记、算法题解和项目经验">
      <main>
        <Hero />
      </main>
    </Layout>
  );
} 
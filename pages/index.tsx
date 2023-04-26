import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <header className={styles.header}>
        <canvas id={styles.animationCanvas}></canvas>
      </header>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;

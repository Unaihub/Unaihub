import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { dynamicGridTypography } from "dynamicGridTypography";

import styles from "../styles/dynamicGridTypography.module.scss";

const IndexPage = () => {
  React.useEffect(() => {
    dynamicGridTypography();
  }, []);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <header className={styles.header}>
        <canvas id="animationCanvas"></canvas>
      </header>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;

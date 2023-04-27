import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

// Import the AnimatedTextGrid component
import AnimatedTextGrid from "../src/components/AnimatedTextGrid";

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <header>
        <canvas></canvas>
      </header>
      {/* Add the AnimatedTextGrid component */}
      <AnimatedTextGrid text="UNAIHUB" />
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;

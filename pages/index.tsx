// pages/index.tsx
import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import AnimatedTextGrid from "../src/components/AnimatedTextGrid";

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      {/* The header containing the canvas */}
      <header>
        <canvas></canvas>
      </header>

      {/* Add the AnimatedTextGrid component, which will be centered and cover the entire page */}
      <AnimatedTextGrid text="UNAIHUB" />

      {/* 
        Wrap the other content in a separate div and set its position to "relative" 
        and zIndex to 0 to ensure it's placed below the AnimatedTextGrid component.
        If you want this content to be visible after the animation, you can modify the
        zIndex and background-color properties of the AnimatedTextGrid component accordingly.
      */}
      <div style={{ position: "relative", zIndex: 0 }}>
        <h1>Hello Next.js 👋</h1>
        <p>
          <Link href="/about">About</Link>
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;

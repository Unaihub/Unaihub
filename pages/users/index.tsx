import React from "react";
import Head from "next/head";
import AnimatedTextGrid from "../src/components/AnimatedTextGrid";

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>UNAIHUB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Add the AnimatedTextGrid component */}
        return (
        <Layout>
          <AnimatedTextGrid text="UNAIHUB" />
          // ... other components and content
        </Layout>
        );
      </main>

      <footer></footer>
    </div>
  );
};

export default IndexPage;

// Import required modules and components
import React from "react";
import Head from "next/head";
import AnimatedTextGrid from "../src/components/AnimatedTextGrid";
import styles from "../styles/AnimatedTextGrid.module.scss";

// IndexPage component
const IndexPage = () => {
  return (
    <>
      {/* 
        Use the Head component to update the title of the page and set the viewport
        for responsive design
      */}
      <Head>
        <title>Home | UNAIHUB</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* 
        Wrap the AnimatedTextGrid component in a div with the styles.animatedTextGrid
        className to apply the correct styling to the landing page
      */}
      <div className={styles.animatedTextGrid}>
        <AnimatedTextGrid text="UNAIHUB" />
      </div>
    </>
  );
};

// Export the IndexPage component as the default export
export default IndexPage;

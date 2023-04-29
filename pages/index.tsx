import React from "react";
import Head from "next/head";
import AnimatedTextGrid from "../src/components/AnimatedTextGrid";
import styles from "../styles/AnimatedTextGrid.module.scss";

// Constants for app name and slogan
const appName = "UNAIHUB";
const slogan = "Your AI Hub";

// IndexPage component for the landing page
const IndexPage = () => {
  return (
    <>
      {/* 
        The Head component is used to update the title of the page and set the viewport
        for responsive design
      */}
      <Head>
        <title>Home | UNAIHUB</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* 
        The AnimatedTextGrid component is wrapped in a div with the styles.animatedTextGrid
        className to apply the correct styling to the landing page
      */}
      <div className={styles.animatedTextGrid}>
        {/* 
          Pass the combined app name and slogan as the text prop for the AnimatedTextGrid
          component to display the animated text
        */}
        <AnimatedTextGrid text={`${appName} - ${slogan}`} />
      </div>
    </>
  );
};

// Export the IndexPage component as the default export
export default IndexPage;

import Head from "next/head";
import styles from "./layout.module.css";
export const siteTitle = "SpaceX Launch Information";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta
          content="Get all the launch information for SpaceX programs"
          name="description"
        />

        <meta content={siteTitle} name="og:title" />

        <meta content="summary_large_image" name="twitter:card" />
      </Head>

      <header className={styles.header}>
        <div>SpaceX Launch Programs</div>
      </header>

      <main>{children}</main>

      <footer style={{ textAlign: "center", fontWeight: "bolder" }}>
        Developed By: Abhishek Tyagi
      </footer>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { testImg } from "assets";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Blog</title>
        <meta name="description" content="Next Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src={`${testImg.src}`} alt="test" width={500} height={500} />
      <main className={styles.main}></main>
    </>
  );
}

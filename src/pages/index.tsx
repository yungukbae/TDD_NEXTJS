import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { LinkBtn } from "@/component";
import fs from "fs";
import path from "path";
import { testImg } from "assets";
import { prefix } from "@/config/config";

interface Props {
  posts: Array<string>;
}

export default function Home({ posts }: Props) {
  console.log(prefix);
  console.log(testImg.src);
  return (
    <>
      <Head>
        <title>Next Blog</title>
        <meta name="description" content="Next Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={`${prefix}${testImg.src}`}
        alt="test"
        width={500}
        height={500}
      />
      <main className={styles.main}>
        {posts.map((v) => (
          <LinkBtn key={v} url={`/${v}`} text={v} />
        ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("__posts"));
  const posts = files.map((v) => v.split(".")[0]);
  return {
    props: { posts },
  };
}

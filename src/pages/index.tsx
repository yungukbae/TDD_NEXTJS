import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { LinkBtn } from "@/component";
import fs from "fs";
import path from "path";

interface Props {
  posts: Array<string>;
}

export default function Home({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Next Blog</title>
        <meta name="description" content="Next Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

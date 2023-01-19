import fs from "fs";
import { GetStaticProps } from "next";
import path from "path";
import { read } from "to-vfile";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
const FILES = fs.readdirSync(path.join("__posts"));

const id = ({ innerHTML }: { innerHTML: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: innerHTML }}></div>;
};

export async function getStaticPaths() {
  const posts = FILES.map((v) => v.split(".")[0]);
  const paths = posts.map((v) => {
    return { params: { id: v } };
  });

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string };
  const post = FILES.filter((v) => v.split(".")[0] === id)[0];
  const vFile = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(await read(`__posts/${post}`));
  const innerHTML = vFile.value as string;

  return {
    props: { innerHTML },
  };
};

export default id;

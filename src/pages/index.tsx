import Head from "next/head";
import { useEffect, useReducer, useRef } from "react";

const initialCount = [{ task: "first task", isChecked: false }];

export interface ActionType {
  task: string;
  isChecked: boolean;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Blog</title>
        <meta name="description" content="Next Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-slate-500 h-screen pt-48"></div>
    </>
  );
}

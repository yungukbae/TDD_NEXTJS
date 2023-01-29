import Head from "next/head";
import { useReducer, useRef } from "react";

const initialCount = [{ task: "first task", isChecked: false }];

interface ActionType {
  task: string;
  isChecked: boolean;
}

export default function Home() {
  const isRef = useRef<HTMLInputElement>(null);
  const [task, setTask] = useReducer(
    (prev: ActionType[], action: ActionType) => {
      return [...prev, action];
    },
    initialCount
  );

  const handleInput = () => {
    if (isRef.current) {
      setTask({ task: isRef.current.value, isChecked: false });
      isRef.current.value = "";
    }
  };

  return (
    <>
      <Head>
        <title>Next Blog</title>
        <meta name="description" content="Next Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-slate-500 h-screen pt-48">
        <div className="mx-auto w-60 ">
          <div className="w-60 bg-gray-400 rounded-lg text-center mb-8">
            Todo List
          </div>
          <div>
            <input
              type="text"
              className="w-60 rounded-lg mb-2"
              ref={isRef}
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  handleInput();
                }
              }}
            />
            <hr className="mb-5" />
          </div>
          <div>
            {task.map((v, i) => {
              return (
                <div
                  key={i}
                  className="bg-gray-200 rounded-lg flex justify-between px-5"
                >
                  <div className="truncate">{v.task}</div>
                  <input type="checkbox" defaultChecked={v.isChecked} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

import Head from "next/head";
import { useReducer, useRef } from "react";
import Item from "./item";

const initialCount = [{ task: "first task", isChecked: false }];

export interface ActionType {
  task: string;
  isChecked: boolean;
}

export default function Home() {
  const isRef = useRef<HTMLInputElement>(null);
  const [task, setTask] = useReducer(
    (prev: ActionType[], action: ActionType) => {
      const change = prev.filter((x) => x.task !== action.task);
      return [...change, action];
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
            {task.map((item) => {
              return <Item key={item.task} item={item} handleCheck={setTask} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

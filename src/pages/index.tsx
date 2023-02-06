import Head from "next/head";
import { useEffect, useReducer, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
interface Prev {
  id: string;
  task: string;
  check: boolean;
}
interface ActionType extends Prev {
  type: "add" | "del" | "mod";
}

const initReducer = [{ id: "test", task: "first task", check: false }];

const reducer = (prev: Prev[], action: ActionType) => {
  const type = action.type;
  switch (type) {
    case "add":
      return [...prev, action];
    case "del": {
      const nextArr = prev.filter((x) => x.id !== action.id);
      return nextArr;
    }
    case "mod": {
      const mod = prev.map((x) => {
        if (x.id === action.id) {
          return action;
        } else {
          return x;
        }
      });
      return mod;
    }
    default:
      return prev;
  }
};

export default function Home(props: any) {
  const [task, dispatch] = useReducer(reducer, initReducer);
  const isRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // handleGetReviews();
    console.log(props);
  }, [props]);

  const handleTask = (body: ActionType) => {
    dispatch(body);
    if (isRef.current && body.type === "add") {
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
      <div className="flex flex-col items-center bg-slate-500 h-screen pt-48 ">
        <div>
          <input type="text" ref={isRef} />
          <button
            name="addBtn"
            onClick={() =>
              handleTask({
                type: "add",
                task: isRef.current!.value,
                id: uuidv4(),
                check: false,
              })
            }
          >
            addBtn
          </button>
        </div>
        <div className="flex flex-col">
          {task.map((row) => {
            return (
              <div key={row.id} className={"flex flex-row "}>
                <div className={row.check ? "line-through" : ""}>
                  {row.task}
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="taskCheckBox"
                    defaultChecked={row.check}
                    onClick={() =>
                      handleTask({
                        type: "mod",
                        task: row.task,
                        id: row.id,
                        check: !row.check,
                      })
                    }
                  />
                </div>
                <div>
                  <button
                    name="delBtn"
                    onClick={() =>
                      handleTask({
                        type: "del",
                        task: row.task,
                        id: row.id,
                        check: row.check,
                      })
                    }
                  >
                    del
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Server-side requests are mocked by `mocks/server.ts`.
  const res = await fetch("https://test.com/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "test@test.com",
      password: "string",
    }),
  });
  const book = await res.json();
  const token = await fetch("https://test.com/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refreshToken: book[0].refreshToken,
    }),
  });
  console.log("token:", await token.json());

  return {
    props: {
      book,
    },
  };
}

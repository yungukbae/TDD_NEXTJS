import Head from "next/head";

export default function Home() {
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
            <input type="text" className="w-60 rounded-lg mb-2" />
            <hr className="mb-5" />
          </div>
          <div>
            <div className="bg-gray-200 rounded-lg flex justify-between px-5">
              <div className="truncate">first task</div>
              <input type="checkbox" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Nicolas: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#fafa6e] to-[#2a4858]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Hi, I'm <span className="text-[hsl(255,100%,70%)]">Nicolas</span>
          </h1>
        <Link href="/">
            <p className="text-blue-600 text-5xl font-bold">Go to homepage</p>
        </Link>
        </div>

      </main>

    </>
  );
};

export default Nicolas;

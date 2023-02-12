import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import LoginHero from "../components/loginHero";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <LoginHero></LoginHero>
      </main>
    </>
  );
};

export default Home;

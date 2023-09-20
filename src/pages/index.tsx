import { NextPage } from "next";
import { useState, useEffect} from "react";
import Head from "next/head";
import Link from "next/link";
import MouseCircle from "../components/mouseCircle";
import Header from "../components/header";
import Cursor from "../components/Cursor";
import { useTheme } from '../contexts/ThemeContext'

const Home: NextPage = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      {/* <Cursor /> */}
      <MouseCircle />

      <Head>
        <title>Nicolas Liu</title>
        <meta name="description" content="Nicolas Liu's Personal Website" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🤠</text></svg>"/>
      </Head>
      {/* <Header></Header> */}
      <main className="flex h-[vh] min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight  sm:text-[5rem]">
          👋 Hi,  I&apos;m <span className="text-[hsl(280,100%,70%)]">Nicolas</span>
          </h1>
          <button onClick={toggleTheme} className="hoverable">
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>

        </div>
      </main>
      
      {/* <div id="mouse-circle"></div> */}
    </>
  );
};

export default Home;

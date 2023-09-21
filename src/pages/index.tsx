import { NextPage } from "next";
import { useState, useEffect} from "react";
import Head from "next/head";
import Link from "next/link";
import MouseCircle from "../components/mouseCircle";
import Header from "../components/header";
import Cursor from "../components/Cursor";
import { useTheme } from '../contexts/ThemeContext'
import Image from "next/image";

import { Inter } from '@next/font/google';

const inter = Inter(
  { 
    subsets: ['latin'],
    weight: ['400', '700', '800'],
  }
)

const Home: NextPage = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className={inter.className}>
        {/* <Cursor /> */}
        <MouseCircle />

        <Head>
          <title>Nicolas Liu</title>
          <meta name="description" content="Nicolas Liu's Personal Website" />
          <link rel="icon" href="/b.png"/>
        </Head>
        {/* <Header></Header> */}
        <main className="flex h-[vh] min-h-screen flex-col items-center justify-center">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
              <div className="flex items-center gap-3">  {/* <-- Add this div */}
                <Image src="/wave.png" width={100} height={100} alt="Waving Hand"></Image>
                Hi, I&apos;m <span className="text-[hsl(280,100%,70%)]">Nicolas</span>
              </div>
            </h1>

            <button onClick={toggleTheme} className="hoverable">
              Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>

          </div>
        </main>
        
        {/* <div id="mouse-circle"></div> */}
      </div>
    </>
  );
};

export default Home;

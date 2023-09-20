import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import MouseCircle from "../components/mouseCircle";
import Cursor from "../components/Cursor";

const Home: NextPage = () => {
  return (
    <>
      {/* <Cursor /> */}
      <MouseCircle />

      <Head>
        <title>Nicolas Liu</title>
        <meta name="description" content="Nicolas Liu's Personal Website" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🤠</text></svg>"/>
      </Head>
      <main className="flex h-[vh] min-h-screen flex-col items-center justify-center bg-[#FAF9F6]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
          👋 Hi,  I&apos;m <span className="text-[hsl(280,100%,70%)]">Nicolas</span>
          </h1>
        </div>
      </main>
      
      {/* <div id="mouse-circle"></div> */}
    </>
  );
};

export default Home;

import Head from "next/head";
import HomePage from "../components/organisms/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>product</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <main>
        <HomePage />
      </main>
    </div>
  );
}

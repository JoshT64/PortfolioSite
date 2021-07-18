import Head from 'next/head';
import Header from '../components/header';
import Body from '../components/body';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>
        <title>Joshua Toney🤓</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col w-full flex-1 px-20 text-center leading-10 mt-24">
        <Body />
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t self-end">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by JOSHCOIN
        </a>
      </footer>
    </div>
  );
}

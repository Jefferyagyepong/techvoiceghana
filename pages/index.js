import Head from "next/head";

import { Inter } from "next/font/google";
import Posts from "@/components/Posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech Voice Ghana</title>
        <meta property="og:title" content="Tech Voice Ghana" />
        <meta property="og:type" content="blog website" />
        <meta property="og:url" content="https://techvoicegh.vercel.app" />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="google-adsense-account" content="ca-pub-2474265697377160"/>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jeffery Agyepong" />
        <meta name="description" content="Blogger" />
        <meta
          name="keywords"
          content="Blogger, Technology, News, Web Development, Ghana,"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="google-site-verification"
          content="HIhs3rvT7a6WD274_Txl6lfu3opycY_McRAFvT2-oBw"
        />
      </Head>
      <main>
        <Header/>
        <Posts />
        <Footer/>
      </main>
    </>
  );
}

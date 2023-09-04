import TwSizeIndicator from "@components/TwSizeIndicator";
import config from "@config/config.json";
import { Head, Html, Main, NextScript } from "next/document";
import Script from 'next/script'

const Document = () => {
  // destructuring items from config object
  const { favicon } = config.site;
  return (
    <Html lang="en">
      <Head>
        {/* Adsense */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1722804840732560" crossorigin="anonymous"></script>
        {/* Google analytics */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-EQ1G07P5BZ"></script>

        {/* favicon */}
        <link rel="shortcut icon" href={favicon} />
        {/* theme meta */}

        <meta name="theme-name" content="geeky-nextjs" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
      </Head>
      <body>
        <Main />
        <TwSizeIndicator />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

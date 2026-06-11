import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0f1729" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="color-scheme" content="dark" />
      <style>{`
        nav { backdrop-filter: blur(0); }
        @supports (backdrop-filter: blur(12px)) {
          nav { backdrop-filter: blur(12px); }
        }
      `}</style>
    </Head>
  );
}

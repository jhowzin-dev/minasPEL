import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      {/* Viewport and theme for iOS Safari */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      {/* Allow both light and dark schemes */}
      <meta name="color-scheme" content="light" />
      {/* Fallback for backdrop-filter on older iOS */}
      <style>{`
        nav { backdrop-filter: blur(0); }
        @supports (backdrop-filter: blur(12px)) {
          nav { backdrop-filter: blur(12px); }
        }
      `}</style>
    </Head>
  );
}

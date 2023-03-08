export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style>{`
        * {
          font-family: sans-serif;
        }
      `}</style>
      Textos em todas as páginas
      <Component {...pageProps} />
    </>
  );
}

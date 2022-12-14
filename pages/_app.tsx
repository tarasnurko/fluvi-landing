import "@/styles/globals.css";
import "@/styles/variables.css";
import type { AppProps } from "next/app";

import { Roboto } from "@next/font/google";

const roboto = Roboto({ weight: ["400", "500", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
        button {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

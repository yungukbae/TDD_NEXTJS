import { prefix } from "@/config/config";
import { PrefixContext } from "@/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrefixContext.Provider value={prefix}>
      <Component {...pageProps} />;
    </PrefixContext.Provider>
  );
}

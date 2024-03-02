import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <>
    <SessionProvider session={pageProps.session}>
      <SWRConfig
        value={{
          fetcher: async (...args) => {
            const response = await fetch(...args);
            if (!response.ok) {
              throw new Error(`Request with ${JSON.stringify(args)} failed.`);
            }
            return await response.json();
          },
        }}
      >
        <GlobalStyle />
        <Component {...pageProps} />
        <Layout />
      </SWRConfig>
      </SessionProvider>
    </>
  );
}

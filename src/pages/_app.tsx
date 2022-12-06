import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/global.css";
import { MovieContext } from "../context/movies";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MovieContext>
        <Component {...pageProps} />
      </MovieContext>
    </ChakraProvider>
  );
}

import "@/styles/globals.css";
import "@/styles/app.css";
import "@/styles/Header.module.css";
import "@/styles/Footer.module.css";
import "@/styles/Contact.module.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

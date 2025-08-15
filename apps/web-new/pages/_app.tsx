import "../styles/globals.css";
import "@/assets/styles/global.css"
import "@/index.css"
import { useEffect } from "react";
import type { AppProps } from "next/app";
import {ThemeProvider} from "@/components/themecontext";
import "@/assets/styles/antd-menu.css"
import "@/assets/styles/content.module.css"
import "@/assets/styles/header.module.css"
import "@/assets/styles/Layout.module.css"



export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', saved);
  }, []);
  return(
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
    );
}

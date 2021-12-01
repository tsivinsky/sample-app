import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Hamburger, Navbar, Sidebar } from "../components";
import "../scss/style.scss";

export default function App({ Component, pageProps, router }: AppProps) {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    setShowSidebar(false);
  }, [router.pathname]);

  return (
    <>
      <Hamburger
        className="hamburger"
        onClick={() => setShowSidebar((state) => !state)}
      />
      <Sidebar show={showSidebar} />
      <div id="page">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

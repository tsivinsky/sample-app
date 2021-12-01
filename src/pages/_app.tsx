import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Hamburger, Modal, Navbar, Sidebar } from "../components";
import "../scss/style.scss";

export default function App({ Component, pageProps, router }: AppProps) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowSidebar(false);
  }, [router.pathname]);

  return (
    <>
      {showModal && <Modal onClose={() => setShowModal((state) => !state)} />}
      <Hamburger
        className="hamburger"
        onClick={() => setShowSidebar((state) => !state)}
      />
      <Sidebar show={showSidebar} />
      <div id="page">
        <Navbar onButtonClick={() => setShowModal((state) => !state)} />
        <Component {...pageProps} />
      </div>
    </>
  );
}

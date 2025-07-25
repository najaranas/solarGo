import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Layout({ children }) {
  const [navStatus, setNavStatus] = useState("");
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <>
      <Header setNavStatus={setNavStatus} />
      <MobileMenu navStatus={navStatus} setNavStatus={setNavStatus} />

      {children}
      <Banner />
      <Footer />
    </>
  );
}

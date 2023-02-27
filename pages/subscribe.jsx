import Link from "next/link";
import React from "react";
import HeaderComponet from "../components/Header";
import Layout from "../components/Layout";
import Preguntas from "../components/Preguntas";

import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const Subscribe = () => {
  return (
    <Layout>
      <HeaderComponet textbutton={"Models"} href={"/"} />
      <section className="infoSubs">
        <div className="preguntas">
          <Preguntas />
        </div>
      </section>
      <section className="">
        <div className="buttonContainer">
          <Link className="button" href={"/registeringallery"}>
            ¡Promote yourself on our page!
          </Link>
        </div>
      </section>
      <section className="redIcons">
        <div className="iconsContainer">
          <Link
            href={"https://www.facebook.com/profile.php?id=100090267054732"}
            className="icon"
          >
            <FaFacebook />
          </Link>
          <Link
            href={"https://www.instagram.com/onlymodelscolombian/"}
            className="icon"
          >
            <FaInstagram />
          </Link>
          <Link href={""} className="icon">
            <FaTelegram />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Subscribe;

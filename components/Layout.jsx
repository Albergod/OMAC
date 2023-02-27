import Head from "next/head";
import Image from "next/image";
import React from "react";
import { generateImg } from "../utils/generateImg";

const Layout = ({ children }) => {
  return (
    <>
      <div className="main">
        <Head>
          <title>OnlyModelsAgency | OMA</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <HeaderComponet textbutton={textbutton} href={href} /> */}
        {children}
        <footer>
          <div className="footerdiv">
            <div className="footerContent">
              <Image
                src={generateImg("logo")}
                alt="logo"
                width={100}
                height={100}
              />
              <p>Copyright © 2023 OnlyModels. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;

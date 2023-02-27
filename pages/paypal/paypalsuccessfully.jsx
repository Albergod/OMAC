import Link from "next/link";
import React from "react";
import HeaderComponet from "../../components/Header";
import Layout from "../../components/Layout";
import { useHookContext } from "../../context/useContext";

const paysuccessfully = () => {
  const { changeShowBg } = useHookContext();
  changeShowBg(false);

  return (
    <>
      <Layout>
        <HeaderComponet textbutton={"Models"} href={"/"} />
        <div className="pay_content">
          <div className="messagecontainer">
            <div className="message">
              <div className="title">
                <h1
                  style={{
                    borderBottom: "1px solid black",
                    marginBottom: "1rem",
                  }}
                >
                  ¡The payment was successful!
                </h1>
              </div>
              <div className="parrapho">
                <p>
                  Now you can provide other links to our team so that can
                  register them in your profile.
                  <br />
                  We will be contacting you through WhatsApp to be able to
                  corroborate that you have actually purchased our service
                  premium.
                  <br />
                  <br />
                  We will also make sure to promote more intensively your
                  profiles.
                  <br />
                  <br />
                  ¡Thank you very much for the purchase!
                </p>
                <Link href={"/"} style={{ color: "blue" }}>
                  ¡I want to see my profile!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default paysuccessfully;

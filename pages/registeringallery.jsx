import React, { useEffect } from "react";
import FormGallery from "../components/FormGallery";
import HeaderComponet from "../components/Header";
import Layout from "../components/Layout";
import ExpandableCard from "../utils/expandibleCart";
import { toast, ToastContainer } from "react-toastify";
import { useHookContext } from "../context/useContext";

const registeringallery = () => {
  const { errors, emptyErrors } = useHookContext();

  useEffect(() => {
    if (errors)
      toast(errors, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    emptyErrors("");
  }, [errors]);

  return (
    <>
      <Layout>
        <HeaderComponet href={"/subscribe"} textbutton={"Back"} />
        <div className="note">
          <ExpandableCard title={"Note: "}>
            <p style={{ padding: "auto 5rem" }} className="p-note">
              We give our customers the opportunity to try our service
              completely free of charge. This will allow you to assess whether
              our service meets your expectations and whether you like it or
              not. We believe it is important to give you the opportunity to
              experience and see for yourself the quality of our service before
              making a purchase decision.
              <br />
              <br />
              If you're already trying our free service and want to upgrade to
              our payment service, you do not need to fill in the form. When
              making the purchase you are given specific permissions to the
              client so that you can communicate with our team of customer
              service.
              <br />
              <br />
              We request the permission of all your social networks for what it
              is It is important that you provide us with the most relevant ones
              (example: onlyfans, instagram, tiktok, etc). with this what we
              want is that you have more time to create content and we We take
              care of promoting your profile through our brand.
            </p>
          </ExpandableCard>
        </div>
        <div className="FormContainer">
          <div className="backgroundForm">
            <h2>JOIN US</h2>
            <div className="formDiv">
              <div className="formContent">
                <FormGallery />
              </div>
            </div>
          </div>
        </div>
        <ToastContainer limit={1} />
      </Layout>
    </>
  );
};

export default registeringallery;

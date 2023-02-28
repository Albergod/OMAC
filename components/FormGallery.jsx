import React, { useState } from "react";
import { SiPaypal } from "react-icons/si";
import { useHookContext } from "../context/useContext";
import { FORMFETCH } from "../utils/formFecth";
import { FORMSUBMIT } from "../utils/FormSubmit";
import { UPLOADPHOTO } from "../utils/uploadPhoto";

const FormGallery = () => {
  const [data, setData] = useState({});
  const [image, setImage] = useState([]);
  const [checked, setCheked] = useState({
    test_service: true,
  });

  const { showError } = useHookContext();

  const getData = (e) => {
    const { name, value, pattern } = e.target;
    let regEx = new RegExp(pattern);
    if (name === "email") {
      if (!regEx.exec(value)) return showError("Invalid email");
    }
    setData({
      ...data,
      [name]: value,
    });
  };

  const checkHandle = (e) => {
    const { id, checked } = e.target;
    setCheked({ [id]: checked });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (image.length <= 0) return alert("Provide a picture");
      data["modelImage"] = image[0].name;

      const res = await FORMFETCH(data);
      showError(res);

      if (res === "Register_successfully") {
        await UPLOADPHOTO(image);
        // await FORMSUBMIT(data);
        alert(
          `Now you have a profile in our gallery, we will work together to make your accounts grow, we will contact you through our WhatsApp account.
           Look for your profile in our gallery!`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      data["pay"] = true;

      const response = await fetch(
        "https://omas.onrender.com/api/paypal/pay",
        // "http://localhost:7000/api/paypal/pay",
        {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (result.link) return (window.location.href = result.link);
      if (!result.ok) {
        const error = result.message;
        throw error;
      } else {
        await FORMSUBMIT(data);
      }
    } catch (error) {
      showError(error);
    }
  };

  return (
    <>
      <form
      // onSubmit={handleSubmit}
      //   action="https://formsubmit.co/onlymodelsagencycontact@gmail.com"
      //   method="POST"
      >
        <label htmlFor="nickname">Nickname</label>
        <input
          type="text"
          placeholder="nickname"
          name="nickname"
          onChange={getData}
          required
        />
        <label htmlFor="email">Email to contact</label>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={getData}
          pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
          required
        />
        <label htmlFor="Phonenumber">Phone number</label>
        <input
          type="number"
          placeholder="Phone number(include your country code)"
          name="Phonenumber"
          onChange={getData}
          required
        />
        <label htmlFor="onlyfanslink">Onlyfans link</label>
        <input
          type="text"
          placeholder="Onlyfans link"
          name="onlyfanslink"
          onChange={getData}
          required
        />
        <label htmlFor="instagramlink">Instagram Link</label>
        <input
          type="text"
          placeholder="Instagram link"
          name="instagramlink"
          onChange={getData}
          required
        />

        <label htmlFor="tiktoklink">Tiktok Link</label>
        <input
          type="text"
          placeholder="tiktok link"
          name="tiktoklink"
          onChange={getData}
          required
        />
        <label htmlFor="nacionality">Nacionality</label>
        <input
          type="text"
          placeholder="Nacionality"
          name="nacionality"
          onChange={getData}
          required
        />
        <label htmlFor="">Profile Image</label>
        <input
          type="file"
          name="modelImage"
          onChange={(e) => {
            setImage(e.target.files);
          }}
        />
        <div className="checkboxses">
          <div>
            <label htmlFor="test service">Test Service</label>
            <input
              type="radio"
              name="service"
              id="test_service"
              onChange={checkHandle}
              defaultChecked={checked.test_service}
            />
          </div>
          <div>
            <label htmlFor="purchase service">Premium service</label>
            <input
              type="radio"
              name="service"
              id="purchase_service"
              onChange={checkHandle}
            />
          </div>
        </div>
        {checked.test_service == true ? (
          <button type="submit" className="submitButton" onClick={handleSubmit}>
            Start Free
          </button>
        ) : checked.purchase_service == true ? (
          <button
            type="submit"
            className="paypalButton"
            onClick={handlePayment}
          >
            <SiPaypal />
          </button>
        ) : (
          ""
        )}
      </form>
    </>
  );
};

export default FormGallery;

import axios from "axios";
import React, { useEffect, useState } from "react";

import HeaderComponet from "../../components/Header";
import Layout from "../../components/Layout";
import { Profile } from "../../components/Profile";

const ModelProfile = ({ model }) => {
  const [modeldata, setModeldata] = useState([]);

  useEffect(() => {
    setModeldata(model);
  }, [model]);

  return (
    <Layout>
      <HeaderComponet textbutton={"Back"} href={"/"} />
      <Profile data={modeldata} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const idModel = context.params.id;
  const response = await axios.get(
    "https://omas.onrender.com/api/models/getone/" + idModel
    // "http://localhost:7000/api/models/getone/" + idModel
  );
  const model = await response.data;
  return {
    props: {
      model,
    },
  };
}

export default ModelProfile;

import CardsModels from "../components/CardsModels";
import HeaderComponet from "../components/Header";
import Layout from "../components/Layout";
import axios from "axios";
import { useEffect } from "react";
import { useHookContext } from "../context/useContext";

function Home({ models }) {
  const { emptyErrors } = useHookContext();
  useEffect(() => {
    emptyErrors();
  });
  return (
    <>
      <Layout>
        <HeaderComponet href={"/subscribe"} textbutton={"Join Us!"} />
        <main className="">
          <CardsModels modelData={models} />
        </main>
      </Layout>
      {/* <ToastContainer /> */}
    </>
  );
}
export default Home;

export async function getServerSideProps() {
  const response = await axios.get(
    "https://omas.onrender.com/api/models/all"
    // "http://localhost:7000/api/models/all"
  );

  const models = await response.data;
  return {
    props: {
      models,
    },
  };
}

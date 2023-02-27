import Link from "next/link";

import { SOCIALMEDIALOGOS } from "../utils/socialMediaLogos";

const Cards = ({ data }) => {
  return (
    <>
      {data.length === 0 ? (
        <p style={{ textAlign: "center" }}>"No models yet"</p>
      ) : (
        data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="card_image">
                <img src={`uploads/${item.modelImage}`} alt="model" />
              </div>
              <div className="modelDetail">
                <Link href={`models/${item.id}`}>
                  <p href="#">{item.nickname}</p>
                </Link>

                <SOCIALMEDIALOGOS link={item} />
                <Link href={`models/${item.id}`}>
                  <button>Subscribe</button>
                </Link>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

// export async function  getStaticsProps() {
//   const response = await axios.get("http://localhost:4000/api/models/all");
//   const models = await response.data;

//   return {
//     props: { models },
//   };
// }

export default Cards;

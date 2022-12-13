import { CardItem } from "../CardItem/";
import { products } from "../../services/dataList";

import "./Cards.scss";

const Cards = () => {
  console.log(process.env.PUBLIC_URL);
  return (
    <div className="cards">
      {products.map((el) => (
        <div className="card">
          <CardItem
            key={el.id}
            imageName={el.img}
            title={el.name}
            description={el.description}
            price={el.price}
            weight={Number(el.price)}
          />
        </div>
      ))}
    </div>
  );
};

export { Cards };

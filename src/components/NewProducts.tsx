import React from "react";
import ProductCard from "@/components/ProductCard";

const productsData = [
  {
    img: "/keyboard-1.jpg",
    title: "Keyboard",
    desc: "KeyBored 65% Keyboard - Black",
    rating: 4,
    price: "79.00",
  },
  {
    img: "/keyboard-2.jpg",
    title: "Keyboard",
    desc: "KeyBored 65% Keyboard - Orange and Blue",
    rating: 5,
    price: "49.00",
  },
  {
    img: "/keyboard-3.jpg",
    title: "Keyboard",
    desc: "KeyBored v2.0 Keyboard Yellow and Blue",
    rating: 3,
    price: "119.00",
  },
  {
    img: "/keycaps-1.jpg",
    title: "Keycaps",
    desc: "Sakura Keycaps",
    rating: 4,
    price: "25.00",
  },
  {
    img: "/keycaps-2.jpg",
    title: "Keycaps",
    desc: "Rising Sun Keycaps",
    rating: 3,
    price: "19.00",
  },
  {
    img: "/keycaps-3.jpg",
    title: "Keycaps",
    desc: "Minimal Keycaps",
    rating: 4,
    price: "15.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4"> New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-col-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;

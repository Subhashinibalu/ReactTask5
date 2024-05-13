import React, { createContext, useState } from "react";
import Cart from "./Components/Cart";

export const mycontext = createContext("");

const App = () => {
  let products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple,",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://tse4.mm.bing.net/th?id=OIP.yOL8tQyAqFuKHMWKaw-9mwHaHa&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.mWatu9S_TYn1uNfXCZIc1gHaHa&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.uB7ZQ8SJ8FdDf25uU_CFywHaHa&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.QVJIr_hf9bbu9NTZxF-aEAHaF6&pid=Api&P=0&h=180",
        "https://tse1.mm.bing.net/th?id=OIP.M71mXu7kyV4yF_3zXvKXoAHaHq&pid=Api&P=0&h=180",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip,",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://tse2.mm.bing.net/th?id=OIP.41PIYYJF0fXJzTJ5X2DzswHaHa&pid=Api&P=0&h=180",
        "https://tse1.mm.bing.net/th?id=OIP.E5jl2uUTKwqFecU0cqLz1AHaHa&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIP._sorhVgVo6QVEmNneAZsfwHaJG&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.lochyvMcAayefCqjuf0cagHaHa&pid=Api&P=0&h=180",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe,",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: [
        "https://tse3.mm.bing.net/th?id=OIP.3w0NOFrOpAJTuq6FPZdMowHaHa&pid=Api&P=0&h=180",
      ],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021,",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: [
        "https://tse4.mm.bing.net/th?id=OIP.22XNbC5Fz3U7YT-4Pn1fXgHaJ3&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.cpo6t9nz4c83mMa2pUk1UAHaHa&pid=Api&P=0&h=180",
        "https://tse1.mm.bing.net/th?id=OIP.A935OsPrskoYUs80XykcXwHaHa&pid=Api&P=0&h=180",
        "https://tse1.mm.bing.net/th?id=OIP.vZq8lzpq-V56ztoS0DiO-wHaFO&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.de2YcdAfvQ5CSlIIxqU9oQHaHa&pid=Api&P=0&h=180",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK,",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://tse4.mm.bing.net/th?id=OIP.RKJLiz2VlR3m2X4DXJRPbwHaHa&pid=Api&P=0&h=180",
        "https://tse1.mm.bing.net/th?id=OIP.N09wBo-NAYi_2LnheBoZDAHaJ4&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.rw25dKVMHPZyq8bhtDFpxwHaHa&pid=Api&P=0&h=180",
      ],
    },
  ];

  const [data, setData] = useState(products);
  return (
    <>
      <mycontext.Provider value={[data, setData]}>
        <Cart />
      </mycontext.Provider>
    </>
  );
};

export default App;

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const productsData = [
  { id: 1, name: "fridge", category: "electronics", price: 100 },
  { id: 2, name: "shirt", category: "clothing", price: 30 },
  { id: 3, name: "laptop", category: "electronics", price: 300 },
  { id: 4, name: "jacket", category: "clothing", price: 80 },
];

const Product = () => {
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("all");

  const filteredProducts = productsData.filter((product) => {
    const isCategoryMatch = category === "all" || product.category === category;
    const isPriceMatch =
      price === "all" ||
      (price === "low" && product.price <= 50) ||
      (price === "high" && product.price > 50);

    return isCategoryMatch && isPriceMatch;
  });

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category:
        </label>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price:
        </label>
        <select
          onChange={(e) => setPrice(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="all">All</option>
          <option value="low">Below $50</option>
          <option value="high">Above $50</option>
        </select>
      </div>

      <div>
        {filteredProducts.map((product) => (
          <div key={product.id} className=" p-4">
            <div className="bg-gray-200">
              <h2 className="text-xl">{product.name}</h2>
              <p className=" text-lg">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

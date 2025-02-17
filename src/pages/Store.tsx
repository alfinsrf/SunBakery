import { useState } from "react";
import { CartProvider } from "../context/CartContext";
import Menu from "../components/Menu";
import Header from "../components/Header";

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <CartProvider>
      <Header
        onCategoryChange={handleSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <Menu selectedCategory={selectedCategory} />
    </CartProvider>
  );
};

export default Store;

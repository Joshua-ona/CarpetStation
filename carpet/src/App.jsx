import { useState } from "react";
import Header from "./Header";
import CategoryFilter from "./CategoryFilter";
import ProductGrid from "./ProductGrid";
import Modal from "./Modal";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  const [category, setCategory] = useState("Wall to Wall");
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <Header />
      <CategoryFilter setCategory={setCategory} />
      <ProductGrid category={category} setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modal image={selectedImage} close={() => setSelectedImage(null)} />
      )}
      <Footer/>
    </div>
  );
}
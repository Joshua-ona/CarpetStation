import { useState } from "react";

const categories = ["Wall-to-Wall", "Centre Carpets", "Grass Carpet", "Corridor Carpets"];

export default function CategoryFilter({ setCategory }) {
  const [active, setActive] = useState(null); // ✅ move inside

  const handleClick = (cat) => {
    setActive(cat);       // track clicked button
    setCategory(cat);     // your existing logic
  };

  return (
    <div className="categories">
      {categories.map((cat) => (
        <button
          key={cat}
          className={active === cat ? "active" : ""}
          onClick={() => handleClick(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
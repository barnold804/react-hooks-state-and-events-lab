import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [filter, setFilter] = useState("All")

  let itemsList = filter === "All" ? items : items.filter(state => state.category === filter);

  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

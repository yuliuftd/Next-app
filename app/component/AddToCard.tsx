"use client";
import React from "react";

const AddToCard = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => console.log("clicked")}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCard;

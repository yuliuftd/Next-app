"use client";
import React from "react";

const ShowButton = () => {
  return (
    <button
      className="btn btn-primary"
      //  load lodash libraries after click
      onClick={async () => {
        const _ = (await import("lodash")).default;
      }}
    >
      show
    </button>
  );
};

export default ShowButton;

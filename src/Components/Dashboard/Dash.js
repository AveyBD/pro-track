import React from "react";

const Dash = () => {
  const chk = document.getElementById("chk");

  chk.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });

  return <div></div>;
};

export default Dash;

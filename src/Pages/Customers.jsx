import React from "react";

const Customers = () => {
  return (
    <div className="grid md:grid-cols-3	">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          {/* <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            class="rounded-xl"
          /> */}
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">User 1</h2>

          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          {/* <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            class="rounded-xl"
          /> */}
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">User 2</h2>

          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">User 13</h2>

          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;

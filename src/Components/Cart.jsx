import React, { useContext } from "react";
import { mycontext } from "../App";

const Cart = () => {
  const [data, setData] = useContext(mycontext);

  const totalPrice = data.reduce(
    (total, data) => total + data.price * (data.quantity || 1),
    0
  );

  const add = (id, quantity, price, stock) => {
    setData((cart) => {
      return cart.map((element) => {
        if (element.id === id && stock > 1) {
          return {
            ...element,
            quantity: element.quantity + 1 || quantity + 1,
            productPrice:
              element.productPrice + element.price ||
              element.price + element.price,
            stock: element.stock - 1,
          };
        }
        return element;
      });
    });
  };

  const remove = (id, quantity, price) => {
    setData((cart) => {
      return cart.map((element) => {
        if (element.id === id && quantity > 1) {
          return {
            ...element,
            quantity: element.quantity - 1 || quantity - 1,
            productPrice:
              element.productPrice - element.price ||
              element.price - element.price,
            stock: element.stock + 1,
          };
        }
        return element;
      });
    });
  };
  const deleteProduct = (id) => {
    setData(data.filter((element) => element.id !== id));
  };

  return (
    <>
      <div className="container bg-secondary-subtle  ">
        <div className="row  d-flex justify-content-center align-items-center m-5 p-4">
          {data.map((element, index) => {
            return (
              <div key={index}>
                <div
                  className="row  mt-1 bg-secondary-subtle"
                  style={{ height: "15%" }}
                >
                  <div
                    className="card mb-3 bg-secondary-subtle border-0 "
                    style={{ width: "100%" }}
                  >
                    <div className="row g-0 d-flex justify-content-between ">
                      <div className="col-lg-2 col-sm-6 col-md-6 ">
                        
                        <img src={element.images[0]} alt=
                        {element.title} />
                      </div>
                      <div className="col-lg-4 col-sm-4 col-md-6  ">
                        <h4 className="card-title  fw-bolder mt-2 ">
                          {element.title}
                        </h4>
                        <p className="card-text mt-3 fw-bold ">Details</p>
                        <p className="card-text small  ">
                          {element.description} has the rating of{" "}
                          {element.rating} stars
                        </p>
                      </div>
                      <div className="col-lg-5 col-sm-7 col-md-6">
                        <div className="row float-end mt-1  ">
                          <p>
                            <button
                              className="btn"
                              onClick={() =>
                                remove(
                                  element.id,
                                  element.quantity || 1,
                                  element.price
                                )
                              }
                            >
                              -
                            </button>
                            {element.quantity || 1}
                            <button
                              className="btn"
                              onClick={() =>
                                add(
                                  element.id,
                                  element.quantity || 1,
                                  element.price,
                                  element.stock
                                )
                              }
                            >
                              +
                            </button>
                            <span className="ms-5 fw-bold ">
                              ${element.productPrice || element.price}.00
                            </span>
                          </p>
                          <br />
                          <button
                            className="btn text-danger ms-3 mt-4"
                            onClick={() => deleteProduct(element.id)}
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
          <div className="d-flex justify-content-between">
            <p className="text-secondary ">SUBTOTAL:</p>
            <p className="fw-bold">${totalPrice}.00</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-secondary ">SHIPPING:</p>
            <p className="fw-bold">FREE</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p className="fw-bold">TOTAL:</p>
            <p className="fw-bold">${totalPrice}.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

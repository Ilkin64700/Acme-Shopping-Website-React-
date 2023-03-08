import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const CommerceCart = ({
  closeCart,
  hideLightbox,
  commerceCartItems,
  handleRemoveFromCart,
}) => {
  const total = (items) =>
    items?.reduce((acc, item) => item.quantity * item.price, 0);

  const [inputVal, setInputVal] = useState(1);

  return (
    <div onClick={() => closeCart()} className="cart-overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`cart-container lightbox ${
          hideLightbox ? "hide-lightbox" : ""
        }`}
      >
        <div className="cart-header">
          <h4>Your Cart</h4>
          <a onClick={() => closeCart()}>
            <IoMdClose className="closebutton" />
          </a>
        </div>
        <div className="cart-form">
          <form>
            <div className="cart-productlist">
              {commerceCartItems?.length > 0 ? (
                commerceCartItems?.map((item, index) => {
                  return (
                    <div className="cartitem">
                      <div className="cartimage">
                        <img src={item.backgroundimagepath} alt="" />
                        <div className="cartinfo">
                          <div className="cartitle">{item.title}</div>
                          <div>$ {item.price}.00 USD</div>
                          <a onClick={() => handleRemoveFromCart(item.id)}>
                            Remove
                          </a>
                        </div>
                        
                      </div>
                      <input
                          type="number"
                          value={inputVal}
                          onChange={(e) => setInputVal(e.target.value)}
                        />
                    </div>
                  );
                })
              ) : (
                <div className="noiitemsfound">No items found.</div>
              )}
            </div>
            <div className="cart-footer">
              <div className="cart-totalsum">
                <div>SubTotal</div>
                <div className="sum">$ {total(commerceCartItems)}.00 USD</div>
              </div>
              <div className="checkout">
                <a>Continue to Checkout</a>
              </div>
            </div>
            <div className="nullproduct"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommerceCart;

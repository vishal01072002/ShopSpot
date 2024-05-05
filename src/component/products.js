import React from 'react';

function product() {
  return (
    <section id="product1" className="section-p1">
      <h2>Featured Products</h2>
      <p>Summer Collection New Modern Design</p>
      <div className="pro-container">
        {/* Product 1 */}
        <div className="pro">
          <img src="https://i.postimg.cc/kg9YYbTn/f1.jpg" alt="" />
          <div className="des">
            <span>adidas</span>
            <h5>Carton Astronault Tshirts</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>$78</h4>
          </div>
          <a href=""><i className="fal fa-shopping-cart cart"></i></a>
        </div>

        {/* Product 2 */}
        <div className="pro">
          <img src="https://i.postimg.cc/2yhT2kvb/f2.jpg" alt="" />
          <div className="des">
            <span>adidas</span>
            <h5>Carton Leave Tshirts</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>$78</h4>
          </div>
          <a href=""><i className="fal fa-shopping-cart cart"></i></a>
        </div>

        {/* Add more products here */}

      </div>
    </section>
  );
}

export default product;

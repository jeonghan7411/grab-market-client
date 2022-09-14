import "./index.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://f5c3b144-5ec3-4a12-a6e3-b40503cf8b37.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);

  return (
    <div>
      {" "}
      <div class="header">
        <div class="header-area">
          <img src="/images/icons/logo.png" alt="" />
        </div>
      </div>
      <div class="body">
        <div class="banner">
          <img src="/images/banners/banner1.png" alt="" />
        </div>
        <h1>판매되는 상품들</h1>
        <div class="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <Link className="product-link" to={`/products/${index}`}>
                  <div>
                    <img
                      src={product.imageUrl}
                      className="product-img"
                      alt=""
                    />
                  </div>
                  <div className="products-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}원</span>
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="images/icons/avatar.png"
                        alt=""
                      />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div class="footer"></div>
    </div>
  );
}

export default MainPage;

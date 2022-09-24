import "./index.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get("http://localhost:8080/products/ ")
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []); //[] 값을 비워두게 되면 한번, 처음 렌더링에만 호출됨

  return (
    <div>
      {" "}
      <div class="banner">
        <img src="/images/banners/banner1.png" alt="" />
      </div>
      <h1>판매되는 상품들</h1>
      <div class="product-list">
        {products.map(function (product, index) {
          return (
            <div className="product-card">
              <Link className="product-link" to={`/products/${product.id}`}>
                <div>
                  <img src={product.imageUrl} className="product-img" alt="" />
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
  );
}

export default MainPage;

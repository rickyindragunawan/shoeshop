import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import ProductScreen from "./screens/ProductScreen";
import Homescreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import OrdersScreen from "./screens/OrdersScreen";
import ProfileScreen from "./screens/ProfileScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Homescreen />} />
            <Route path="product" element={<App />}>
              <Route path=":productId" element={<ProductScreen />} />
              <Route
                index
                element={
                  <div className="flex mt-20 justify-center items-center">
                    <p>Untuk melihat produk, masukkan id produk!</p>
                  </div>
                }
              />
            </Route>
            <Route path="cart" element={<CartScreen />}></Route>
            <Route path="orders" element={<OrdersScreen />}></Route>
            <Route path="profile" element={<ProfileScreen />}></Route>
            <Route
              path="*"
              element={
                <div className="flex mt-20 justify-center items-center">
                  <p>Tidak ada apa apa disini kawan</p>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

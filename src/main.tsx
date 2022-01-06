/*
 * @Author: zoie.lai
 * @Date: 2022-01-01 15:24:12
 * @LastEditor: zoie.lai
 * @LastEditTime: 2022-01-06 17:28:12
 */
import React from "react";
import { ConfigProvider } from "antd";
import "./styles/index.less";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./common/style/frame.module.less";
import App from "./pages/App";

ReactDOM.render(
  <BrowserRouter>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

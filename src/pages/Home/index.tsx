/*
 * @Author: zoie.lai
 * @Date: 2022-01-01 15:36:42
 * @LastEditor: zoie.lai
 * @LastEditTime: 2022-01-06 16:45:14
 */
import React from "react";
import styles from "./index.module.less";
const Home = () => {
  const contents = [
    {
      id: 1,
      text: "研发",
    },
    {
      id: 2,
      text: "运维",
    },
    {
      id: 3,
      text: "测试",
    },
    {
      id: 4,
      text: "业务",
    },
  ];
  return (
    <div>
      {contents.map((item) => {
        return (
          <li key={item.id} className={styles.box}>
            {item.text}
          </li>
        );
      })}
    </div>
  );
};

export default Home;

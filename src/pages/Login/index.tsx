/*
 * @Author: zoie.lai
 * @Date: 2022-01-06 16:46:31
 * @LastEditor: zoie.lai
 * @LastEditTime: 2022-01-06 17:10:23
 */
import { Fragment } from "react";
import { Button, Form, Input, Checkbox } from "antd";
import styles from "./index.module.less";
const Login = () => {
  return (
    <Fragment>
      <h2 className={styles.head}>Login page</h2>
      <main>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </main>
    </Fragment>
  );
};
export default Login;

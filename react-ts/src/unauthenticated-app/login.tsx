import { FormEvent } from "react";
import { useAuth } from "../context/auth-context";
import { Form, Input, Button } from "antd";
import { LongButton } from "unauthenticated-app/index";

export const LoginScreen = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { login, user } = useAuth();
  // const login = (param: { username: string; password: string }) => {
  //   fetch(`${apiUrl}/register`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(param),
  //   }).then(async (response) => {
  //     if (response.ok) {
  //     }
  //   });
  // };

  //   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     const username = (event.currentTarget.elements[0] as HTMLInputElement)
  //       .value;
  //     const password = (event.currentTarget.elements[1] as HTMLInputElement)
  //       .value;
  //     login({ username, password });
  //   };
  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      {user ? <div>登录成功，用户名： {user?.name}</div> : null}
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder={"用户名"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder={"密码"} type="password" id={"password"} />
      </Form.Item>
      <LongButton
        htmlType={"submit"}
        type={"primary"}
        style={{ marginBottom: "10px" }}
      >
        登录
      </LongButton>
    </Form>
  );
};

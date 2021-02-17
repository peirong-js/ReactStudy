import React from "react";
import { ProjectListScreen } from "./screens/projectaList";
import { useAuth } from "context/auth-context";
import styled from "@emotion/styled";
import { ReactComponent as SoftwareLogo } from "./assets/software-logo.svg";
import { Row } from "./components/lib";
import { Dropdown, Menu, Button } from "antd";

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();
  return (
    // <div>
    //   <button onClick={logout}>登出</button>
    //   <ProjectListScreen />
    // </div>
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key={"logout"}>
                  <Button type={"link"} onClick={logout}>
                    登出
                  </Button>
                </Menu.Item>
              </Menu>
            }
          >
            <Button type={"link"} onClick={(e) => e.preventDefault()}>
              Hi, {user?.name}
            </Button>
          </Dropdown>
        </HeaderRight>
      </Header>
      {/* <Nav>nav</Nav> */}
      <Main>
        <ProjectListScreen />
      </Main>
      {/* <Aside>aside</Aside>
      <Footer>footer</Footer> */}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  /* grid-template-columns: 20rem 1fr 20rem; */
  /* grid-template-areas:
    "header header header"
    "main main main"; */
  height: 100vh;
  /* grid-gap: 10rem; */
`;

// grid-area 用来给grid子元素起名字
const Header = styled(Row)`
  /* grid-area: header; */
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main`
  /* grid-area: main; */
`;
// const Nav = styled.nav`
//   grid-area: nav;
// `;
// const Aside = styled.aside`
//   grid-area: aside;
// `;
// const Footer = styled.footer`
//   grid-area: footer;
// `;

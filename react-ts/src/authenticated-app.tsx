import React, { useState } from "react";
import { ProjectListScreen } from "./screens/projectaList";
import { useAuth } from "context/auth-context";
import styled from "@emotion/styled";
import { ReactComponent as SoftwareLogo } from "./assets/software-logo.svg";
import { ButtonNoPadding, Row } from "./components/lib";
import { Dropdown, Menu, Button } from "antd";
import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { ProjectScreen } from "./screens/project";
import { resetRoute } from "./utils";
import { ProjectModal } from "./screens/projectaList/project-modal";
import { ProjectPopover } from "components/project-popover";

export const AuthenticatedApp = () => {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  return (
    // <div>
    //   <button onClick={logout}>登出</button>
    //   <ProjectListScreen />
    // </div>
    <Container>
      <PageHeader />
      {/* <Nav>nav</Nav> */}
      <Button onClick={() => setProjectModalOpen(true)}>打开</Button>
      <Main>
        {/* <ProjectListScreen /> */}
        <Router>
          <Routes>
            <Route path={"/projects"} element={<ProjectListScreen />}></Route>
            <Route
              path={"/projects/:projectId/*"}
              element={<ProjectScreen />}
            ></Route>
            <Navigate to={"/projects"} />
          </Routes>
        </Router>
      </Main>
      <ProjectModal
        projectModalOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />
      {/* <Aside>aside</Aside>
      <Footer>footer</Footer> */}
    </Container>
  );
};

const PageHeader = () => {
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        {/* <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} /> */}
        <ButtonNoPadding type={"link"} onClick={resetRoute}>
          <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />{" "}
        </ButtonNoPadding>
        <ProjectPopover />
        <span>用户</span>
      </HeaderLeft>
      <HeaderRight>
        <User />
      </HeaderRight>
    </Header>
  );
};

const User = () => {
  const { logout, user } = useAuth();
  return (
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

import { useState, useEffect } from "react";
import { SearchPanel } from "./searchPanel";
import { List } from "./list";
import { useHttp } from "../../utils/http";
import { cleanObj, useMount, useDebounce } from "../../utils";
import qs from "qs";
import styled from "@emotion/styled";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);

  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const client = useHttp();

  const debouncedParam = useDebounce(params, 200);
  useEffect(() => {
    client("projects", { data: cleanObj(debouncedParam) }).then(setList);
    // fetch(`${apiUrl}/projects?${qs.stringify(cleanObj(debouncedParam))}`).then(
    //   async (res) => {
    //     if (res.ok) {
    //       setList(await res.json());
    //     }
    //   }
    // );
  }, [debouncedParam]);
  useMount(() => {
    client("users").then(setUsers);
    // fetch(`${apiUrl}/users`).then(async (res) => {
    //   if (res.ok) {
    //     setUsers(await res.json());
    //   }
    // });
  });
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel params={params} setParams={setParams} users={users} />
      <List list={list} users={users} />
    </Container>
  );
};
const Container = styled.div`
  padding: 3.2rem;
`;

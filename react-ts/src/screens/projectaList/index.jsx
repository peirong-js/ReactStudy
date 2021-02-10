import { useState, useEffect } from "react";
import { SearchPanel } from "./searchPanel";
import { List } from "./list";
import { cleanObj } from "../../utils";
import qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);

  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObj(params))}`).then(
      async (res) => {
        if (res.ok) {
          setList(await res.json());
        }
      }
    );
  }, [params]);
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  }, []);
  return (
    <div>
      <SearchPanel
        params={params}
        setParams={setParams}
        users={users}
        setUsers={setUsers}
      />
      <List list={list} users={users} />
    </div>
  );
};

import { useState, useEffect } from "react";
import { SearchPanel } from "./searchPanel";
import { List } from "./list";
import { cleanObj, useMount, useDebounce } from "../../utils";
import qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);

  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);

  const debouncedParam = useDebounce(params, 200);
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObj(debouncedParam))}`).then(
      async (res) => {
        if (res.ok) {
          setList(await res.json());
        }
      }
    );
  }, [debouncedParam]);
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });
  return (
    <div>
      <SearchPanel params={params} setParams={setParams} users={users} />
      <List list={list} users={users} />
    </div>
  );
};

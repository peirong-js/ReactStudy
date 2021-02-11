export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}
interface SearchPanelProps {
  users: User[];
  params: {
    name: string;
    personId: string;
  };
  setParams: (params: SearchPanelProps["params"]) => void;
}

export const SearchPanel = ({ users, params, setParams }: SearchPanelProps) => {
  // const [params, setParams] = useState({
  //   name: "",
  //   personId: "",
  // });

  // const [users, setUsers] = useState([]);
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   fetch("").then(async (res) => {
  //     if (res.ok) {
  //       setList(await res.json());
  //     }
  //   });
  // }, [params]);

  return (
    <form>
      <div>
        <input
          type="text"
          value={params.name}
          onChange={(evt) =>
            setParams({
              ...params,
              name: evt.target.value,
            })
          }
        />
        <select
          value={params.personId}
          onChange={(evt) =>
            setParams({ ...params, personId: evt.target.value })
          }
        >
          <option value={""}>负责人</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

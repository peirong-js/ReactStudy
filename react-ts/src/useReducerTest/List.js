import { useContext } from "react";
import { AppContext } from "./store";

function Counter() {
  const {
    books: { list },
  } = useContext(AppContext);
  //   console.log(context);
  console.log(list);
  return (
    <div>
      <h1>books列表数据{list.length === 0 ? list.length : list[0].name}</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;

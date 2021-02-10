import { useContext, useState } from "react";
import { AppContext } from "./store";

function Counter() {
  const { addBookAction } = useContext(AppContext);
  const [name, setName] = useState("");
  //   console.log(context);
  return (
    <div>
      <ul>
        <li>
          <input onChange={(e) => setName(e.target.value)} />
        </li>
        <li>
          <button
            onClick={() => {
              console.log(name);
              addBookAction({
                id: Date.now(),
                name,
              });
            }}
          >
            保存
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Counter;

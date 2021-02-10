import { useContext } from "react";
import { AppContext } from "./store";

function Counter() {
  const { books, addAction } = useContext(AppContext);
  console.log(useContext(AppContext));
  //   console.log(context);
  return (
    <div>
      <h1>计数器 {books.count}</h1>
      <button onClick={() => addAction()}>plus</button>
    </div>
  );
}

export default Counter;

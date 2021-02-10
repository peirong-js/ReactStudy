import { createContext, useReducer } from "react";
import bookReducer from "./store/Book";

export const AppContext = createContext();
const { Provider } = AppContext;

// function reducer(state, action) {
//   switch (action.type) {
//     case "COUNT_ADD":
//       return { ...state, count: state.count + 1 };
//     default:
//       return state;
//   }
// }

function Store(props) {
  //   const [books, dispatch] = useReducer(reducer, {
  //     list: [],
  //     count: 1,
  //   });

  //   const addAction = () => {
  //     dispatch({
  //       type: "COUNT_ADD",
  //     });
  //   };
  const { book, addBookCountAction, addBookAction } = bookReducer();
  return (
    <Provider
      value={{ books: book, addAction: addBookCountAction, addBookAction }}
    >
      {props.children}
    </Provider>
  );
}

export default Store;

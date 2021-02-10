import { useReducer } from "react";

function Book() {
  const [book, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "COUNT_ADD":
          return { ...state, count: state.count + 1 };
        case "BOOK_ADD":
          return { ...state, list: [action.payload, ...state.list] };
        default:
          return state;
      }
    },
    {
      count: 1,
      list: [],
    }
  );
  const addBookCountAction = () => {
    dispatch({
      type: "COUNT_ADD",
    });
  };

  const addBookAction = (book) => {
    dispatch({
      type: "BOOK_ADD",
      payload: book,
    });
  };

  return { book, addBookCountAction, addBookAction };
}

export default Book;

import React, { createContext, useReducer } from "react";
import { reducer } from './reducer';

export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [articles, dispatch] = useReducer(reducer, [
    { id: 1, title: "post 1", body: "Lorem ipsum dolor sit amet. " },
    { id: 2, title: "post 2", body: "Lorem ipsum dolor sit amet. " },
  ]);

  return (
    <ArticleContext.Provider value={{ articles, dispatch }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;

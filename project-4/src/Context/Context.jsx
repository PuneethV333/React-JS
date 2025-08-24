import React, { createContext, useEffect, useState } from 'react';

export const ContextData = createContext();

const Context = ({ children }) => {
  const [task, setTask] = useState(() => {
  try {
    const rawTodos = localStorage.getItem('todo list');
    // Reject invalid stored values
    if (!rawTodos || rawTodos === "undefined") return [];
    return JSON.parse(rawTodos);
  } catch (err) {
    // Fallback for malformed JSON
    return [];
  }
});


  useEffect(() => {
    localStorage.setItem("todo list", JSON.stringify(task));
  }, [task]);

  return (
    <ContextData.Provider value={{ task, setTask:setTask }}>
      {children}
    </ContextData.Provider>
  );
};

export default Context;

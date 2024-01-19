import axios from "axios";
import React, { useEffect, useState } from "react";
import { TodoItem as Item } from "../TodoItem";

const TodoList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function renderUsers() {
    return users.map(({ name, id }) => <Item key={id} name={name} />);
  }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => setUsers(data))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p>Идет загрузка</p>;
  }
  if (!users.length) {
    return <p>Данных нет </p>;
  }

  return (
    <>
      <ul>{renderUsers()}</ul>
    </>
  );
};
export default TodoList;

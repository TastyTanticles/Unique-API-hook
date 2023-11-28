/* eslint-disable react/jsx-key */
import useFetch from "../useFetch/useFetch";
import './Todos.css'
export default function TodoFetch() {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const { data, error } = useFetch(url);

  const slice = data.slice(0, 10);
  return (
    <>
      <h1>This Is Todos</h1>
<div className="todo">
      {data.length > 0 ? (
        slice.map((items) => (
          <div className="singleTodo">
            <p>Todo: {items.title}</p>
          </div>
        ))
      ) : (
        <div>
          <p>{error}</p>
        </div>
      )}

</div>
    </>
  );
}

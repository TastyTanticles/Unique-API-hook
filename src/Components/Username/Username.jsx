/* eslint-disable react/jsx-key */
import useFetch from "../useFetch/useFetch";
import "./Username.css";

export default function Username() {

  const url = "https://jsonplaceholder.typicode.com/users";

  const { data, error } = useFetch(url);

  return (
    <>
      <h1>These are Names</h1>
      <div className="name">
        {data.length > 0 ? (
          data.map((items) => (
            <div className="singleName">
              <p>Name: {items.name}</p>
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

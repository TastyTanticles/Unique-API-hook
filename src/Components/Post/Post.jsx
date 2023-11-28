import "./Post.css";
import useFetch from "../useFetch/useFetch";
export default function Post() {

  const url = "https://jsonplaceholder.typicode.com/posts";

  const { data, error } = useFetch(url);

  const slice = data.slice(0, 15);
  // console.log(slice);
  return (
    <>
      <h1>This Is Post</h1>
      <div className="post">
        {data.length > 0 ? (
          slice.map((items) => (
            <div className="singlePost">
              <p>Title: {items.title}</p>
              <p className="post">Post: {items.body}</p>
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

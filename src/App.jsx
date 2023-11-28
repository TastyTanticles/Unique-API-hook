import "./App.css";
// import Post from "./Components/Post";
// import Username from "./Components/Username";
import TodoFetch from "./Components/Todos/TodoFetch";
// import useFetch from "./Components/useFetch/useFetch";
import Username from "./Components/Username/Username";
import Post from './Components/Post/Post';

export default function App() {
  return (
    <>
      <Username />
      <TodoFetch />
      <Post/>
    </>
  );
}

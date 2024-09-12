import { useState } from "react"
import { Link } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { boardsState } from "../atom/atom";
//first page
const Boards = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [boards, setBoards] = useRecoilState(boardsState);

  const hadleAddBoard = (e) => {
    e.preventDefault();
    const newBoard = {
      id: boards.length+1,
      title,
      content
    };
    setBoards([...boards, newBoard]);
    setTitle("");
    setContent("");
  }

  return (
  <div>
    <h1>Post Board</h1>
    <form onSubmit={hadleAddBoard}>
    <input
      type="text"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}/>
      <br/><br/>
    <textarea
      type="text"
      placeholder="Content"
      value={content}
      onChange={(e) => setContent(e.target.value)}>
    </textarea>
    <button type="submit">Add</button>
  </form>
  <hr/>
    <h2>Boards List</h2>
    <ul>
      {boards.map((board) =>{ 
      console.log(board )
      return(
        <li key={board.id}>
          <Link to={`/boards/${board.id}`}>{board.title}</Link>
        </li>
      )})}
    </ul>
    </div>
  );
}

export default Boards
import { useState } from "react"

const Board = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [add, setAdd] = useState("");

  

  return <div>
    <input onChange={setTitle}/>
    <input onChange={setContent}/>
    <button onClick={setAdd}>Add</button>
  </div>
}

export default Board
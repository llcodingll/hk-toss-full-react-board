import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

//detail page
const Details = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const board = boards.find((p) => p.id === parseInt(id));

    const [edit, setEdit] = useState(false);
    const [updateTitle, setUpdateTitle] = useState(board.title);
    const [updateContent, setUpdateContent] = useState(board.content);

    const deleteHadler = () => {
        setBoards(boards.filter((p) => p.id !== board.id));
        navigate(`/`);
    };

    const updateHadler = () => {
        setBoards(
            boards.map((p) =>
            p.id === board.id ? {...p, title: updateTitle, content: updateContent} : p)
        );
        setEdit(false);
    };

    if(!board) {
        return <div>Can not find Board.</div>;
    }
    
    return (
        <div>
            {edit ? (
                <div>
                    <input
                    type="text"
                    value={updateTitle}                
                    onChange={(e) => setUpdateTitle(e.target.value)}
                    />
                    <textarea
                    value={updateContent}
                    onChange={(e) => setUpdateContent(e.target.value)}
                    ></textarea>
                    <button onClick={updateHadler}>Update Complete</button>
                </div>
            ) : (
                <div>
                    <h1>{board.title}</h1>
                    <p>{board.content}</p>
                    <button onClick={()=> setEdit(true)}>Edit</button>
                    <button onClick={deleteHadler}>Delete</button>
                </div>
            )}
       </div>
    );
}
export default Details
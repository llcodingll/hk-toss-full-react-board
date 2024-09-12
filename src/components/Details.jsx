import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { boardsState } from "../atom/atom";
import { Container, Typography, TextField, Button, Card } from "@mui/material";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [boards, setBoards] = useRecoilState(boardsState);

  const board = boards.find((p) => p.id === parseInt(id));

  const [edit, setEdit] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(board?.title || "");
  const [updateContent, setUpdateContent] = useState(board?.content || "");

  if (!board) {
    return (
      <Container>
        <Typography variant="h6" sx={{ color: "#555" }}>
          Board not found
        </Typography>
      </Container>
    );
  }

  const deleteHandler = () => {
    setBoards(boards.filter((p) => p.id !== board.id));
    navigate("/");
  };

  const updateHandler = () => {
    setBoards(
      boards.map((p) =>
        p.id === board.id ? { ...p, title: updateTitle, content: updateContent } : p
      )
    );
    setEdit(false);
    navigate("/");
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 5, padding: 3, backgroundColor: '#f2f4f8', borderRadius: 3 }}>
      {edit ? (
        <Card sx={{ padding: 4, boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)', borderRadius: 3, backgroundColor: "#ffffff" }}>
          <TextField
            label="Title"
            value={updateTitle}
            onChange={(e) => setUpdateTitle(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{ backgroundColor: "#f9f9f9", borderRadius: 1 }}
          />
          <TextField
            label="Content"
            value={updateContent}
            onChange={(e) => setUpdateContent(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            variant="outlined"
            sx={{ backgroundColor: "#f9f9f9", borderRadius: 1 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={updateHandler}
            sx={{
              marginTop: 3,
              borderRadius: 10,
              padding: '10px 28px',
              backgroundColor: "#007aff",
              textTransform: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              "&:hover": { backgroundColor: "#005bb5", transform: 'translateY(-2px)', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)' }
            }}
          >
            Update Complete
          </Button>
        </Card>
      ) : (
        <Card sx={{ padding: 4, boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)', borderRadius: 3, backgroundColor: "#ffffff" }}>
          <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ color: "#004d73" }}>
            {board.title}
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "#555" }}>
            {board.content}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setEdit(true)}
            sx={{
              marginRight: 2,
              borderRadius: 10,
              padding: '10px 28px',
              backgroundColor: "#007aff",
              textTransform: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              "&:hover": { backgroundColor: "#005bb5", transform: 'translateY(-2px)', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)' }
            }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={deleteHandler}
            sx={{
              borderRadius: 10,
              padding: '10px 28px',
              backgroundColor: "#d8a89e", // 부드러운 살구색
              color: "primary", // 글자색
              textTransform: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              "&:hover": { 
                backgroundColor: "#d99d8f", // 호버 시 색상
                color: "primary", // 글자색
                transform: 'translateY(-2px)', 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' 
              }
            }}
          >
            Delete
          </Button>
        </Card>
      )}
    </Container>
  );
};

export default Details;

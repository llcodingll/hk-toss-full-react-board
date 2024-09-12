import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { boardsState } from "../atom/atom";
import { Container, Typography, TextField, Button, Card, List, ListItem, ListItemText } from "@mui/material";
import { keyframes } from '@mui/system';

// 부드러운 Fade-In 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Boards = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [boards, setBoards] = useRecoilState(boardsState);

  const handleAddBoard = (e) => {
    e.preventDefault();
    const newBoard = { id: boards.length + 1, title, content };
    setBoards([...boards, newBoard]);
    setTitle("");
    setContent("");
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4, backgroundColor: "#f2f4f8", padding: 4, borderRadius: 3 }}>
      {/* Post Board Section */}
      <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ color: '#004d73' }}>
        Post Board
      </Typography>
      <Card sx={{ padding: 3, boxShadow: 2, marginBottom: 4, borderRadius: 2, backgroundColor: "#ffffff" }}>
        <form onSubmit={handleAddBoard}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{ backgroundColor: "#f9f9f9", borderRadius: 1 }}
          />
          <TextField
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            variant="outlined"
            sx={{ backgroundColor: "#f9f9f9", borderRadius: 1 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              marginTop: 3,
              borderRadius: 10,
              padding: '10px 28px',
              backgroundColor: "#0078a8",
              textTransform: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              "&:hover": { backgroundColor: "#005f82", transform: 'translateY(-2px)', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)' }
            }}
          >
            Add
          </Button>
        </form>
      </Card>

      {/* Boards List Section */}
      <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ color: '#004d73' }}>
        Boards List
      </Typography>
      <List sx={{ backgroundColor: '#ffffff', borderRadius: 2, padding: 2 }}>
        {boards.map((board, index) => (
          <ListItem
            key={board.id}
            component={Link}
            to={`/boards/${board.id}`}
            sx={{
              marginBottom: 2,
              padding: 2,
              borderRadius: 2,
              boxShadow: 1,
              animation: `${fadeIn} 0.6s ease-in-out`,
              animationDelay: `${index * 0.1}s`,
              transition: "transform 0.2s ease, background-color 0.2s ease",
              "&:hover": { 
                backgroundColor: "#f0d1bc", // 호버 시 부드러운 살구색 배경
                transform: "scale(1.02)",
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <ListItemText
              primary={<Typography variant="h6" fontWeight="bold" sx={{ color: "#0078a8" }}>{board.title}</Typography>}
              secondary={board.content}
              sx={{ color: "#777" }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Boards;

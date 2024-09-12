import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Button, Card } from "@mui/material";
import { login } from "../api/auth";

const Login = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({ id: "", password: "" });
    const [err, setErr] = useState("");

    const onChange = (e) => {
        const { id, value } = e.target;
        setState({ ...state, [id]: value });
    };

    const onSubmit = async () => {
        setErr("")
        try {
            const data = await login(state); // 서버 요청
            localStorage.setItem("uid", data.id);
            navigate("/");
        } catch (error) {
            const data = error.response.data;
            setErr(data);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ marginTop: 5, padding: 3, backgroundColor: '#f2f4f8', borderRadius: 3 }}>
            <Card sx={{ padding: 4, boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)', borderRadius: 3, backgroundColor: "#ffffff" }}>
                <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ color: "#004d73", marginBottom: 3 }}>
                    Login
                </Typography>
                <Typography variant="h6" sx={{ color: "#d32f2f", marginBottom: 2 }}>
                    {err}
                </Typography>
                <TextField
                    id="id"
                    label="ID"
                    value={state.id}
                    onChange={onChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    sx={{ backgroundColor: "#f9f9f9", borderRadius: 1 }}
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    value={state.password}
                    onChange={onChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    sx={{ backgroundColor: "#f9f9f9", borderRadius: 1 }}
                />
                <Button
                    onClick={onSubmit}
                    variant="contained"
                    color="primary"
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
                    Login
                </Button>
            </Card>
        </Container>
    );
};

export default Login;

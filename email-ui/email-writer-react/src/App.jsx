import { Box, Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography, Paper} from "@mui/material";
import axios from "axios";
import { useState } from "react";
function App() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("/api/email/generate", {
     emailContent,tone
        });
      
      setGeneratedReply(response.data?.reply || response.data);
    } catch (error) {
      setError(error?.response?.data?.message || "Failed to generate Email Reply");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight={600} gutterBottom align="center">
          Email Reply Generator
        </Typography>

        <Box sx={{ mt: 3 }}>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            label="Original Email Content"
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{ mb: 3 }}
          />

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Tone (Optional)</InputLabel>
            <Select
              value={tone}
              label="Tone (Optional)"
              onChange={(e) => setTone(e.target.value)}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            fullWidth
            sx={{ py: 1.5, fontWeight: 600 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Generate Reply"}
          </Button>
        </Box>

        {error && (
          <Typography color="error" sx={{ mt: 3, textAlign: "center" }}>
            {error}
          </Typography>
        )}

        {generatedReply && (
          <Box sx={{ mt: 5 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Generated Reply
            </Typography>

            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              value={generatedReply}
              inputProps={{ readOnly: true }}
            />

            <Button
              variant="outlined"
              fullWidth
              sx={{ mt: 2, py: 1.2, fontWeight: 600 }}
              onClick={() => navigator.clipboard.writeText(generatedReply)}
            >
              Copy to Clipboard
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default App;
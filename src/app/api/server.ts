import app from "./index";

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Express API running on http://localhost:${PORT}`);
});
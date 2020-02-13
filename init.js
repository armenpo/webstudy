import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const handleListening = () => {
  console.log(`☑️ Listening Server PORT${PORT}`);
};

app.listen(PORT, handleListening);

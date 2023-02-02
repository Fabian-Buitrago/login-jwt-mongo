import { PORT } from "./src/config/server.config.js";
import app from "./src/app.js";

app.listen(PORT);
console.log(`Server running on port ${PORT}`);

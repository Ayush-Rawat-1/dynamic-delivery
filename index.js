import { app } from "./routes/delivery.js";
import "./swaggerConfig.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

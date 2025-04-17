import express from "express";
import tarefaRoutes from "./routes/tarefaRoutes.js";
import CollectionRouter from "./routes/collectionRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());
const port = 4000;

app.use(express.json());
app.use("/tarefas", tarefaRoutes);
app.use("/colecoes", CollectionRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

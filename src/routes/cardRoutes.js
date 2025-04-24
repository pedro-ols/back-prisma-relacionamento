import express from "express";
import CardController from "../controllers/cardController.js";

const cardRouter = express.Router();

// Rotas de cartas
// GET /colecoes - Listar todas as cartas
cardRouter.get("/", CardController.getAllCards);

// GET /personagens/:id - Obter uma coleções pelo ID
cardRouter.get("/:id", CardController.getCardById);

// POST /personagens - Criar uma nova coleção
// cardRouter.post("/", CardController.createcard);

// PUT /personagens/:id - Atualizar uma coleção
// cardRouter.put("/:id", CardController.updatecard);

// DELETE /personagens/:id - Remover uma coleção
// cardRouter.delete("/:id", CardController.deletecard);

export default cardRouter;

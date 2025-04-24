import express from "express";
import CardController from "../controllers/cardController.js";

const cardRouter = express.Router();

// Rotas de cartas
// GET /colecoes - Listar todas as cartas
cardRouter.get("/", CardController.getAllCards);

// GET /personagens/:id - Obter uma coleções pelo ID
cardRouter.get("/:id", CardController.getCardById);

// POST /personagens - Criar uma nova coleção
cardRouter.post("/", CardController.createCard);

// PUT /personagens/:id - Atualizar uma coleção
cardRouter.put("/:id", CardController.updateCard);

// DELETE /personagens/:id - Remover uma coleção
cardRouter.delete("/:id", CardController.deleteCard);

export default cardRouter;

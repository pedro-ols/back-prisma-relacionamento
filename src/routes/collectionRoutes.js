import express from "express";
import CollectionController from "../controllers/collectionController.js";

const collectionRouter = express.Router();

// Rotas de Coleções
// GET /colecoes - Listar todas as coleções
collectionRouter.get("/", CollectionController.getAllCollections);

// GET /personagens/:id - Obter uma coleções pelo ID
collectionRouter.get("/:id", CollectionController.getCollectionById);

// POST /personagens - Criar uma nova coleção
collectionRouter.post("/", CollectionController.createCollection);

// PUT /personagens/:id - Atualizar uma coleção
collectionRouter.put("/:id", CollectionController.updateCollection);

// DELETE /personagens/:id - Remover uma coleção
collectionRouter.delete("/:id", CollectionController.deleteCollection);

export default collectionRouter;

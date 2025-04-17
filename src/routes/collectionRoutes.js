import express from "express";
import CollectionController from "../controllers/tarefaController.js";

const collectionRouter = express.Router();

collectionRouter.get("/", CollectionController.getAll);
// router.post("/", CollectionController.create);
// router.put("/:id", CollectionController.update;
// router.delete("/:id", CollectionController.delete);

export default collectionRouter;

import express from "express";
import CollectionController from "../controllers/collectionController.js";

const collectionRouter = express.Router();

collectionRouter.get("/", CollectionController.getAll);
collectionRouter.post("/", CollectionController.create);
// router.put("/:id", CollectionController.update;
// router.delete("/:id", CollectionController.delete);

export default collectionRouter;

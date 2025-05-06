import express from 'express'

import authRouter from "./auth.routes.js"
import animesRouter from "./animeRoutes.js"
import personagemRouter from "./personagemRoutes.js"
import collectionRouter from "./collectionRoutes.js"
import cardRouter from "./cardRoutes.js"

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use("/auth", authRouter);
router.use("/colecoes", collectionRouter);
router.use("/cartas", cardRouter);

router.use(authMiddleware)
router.use("/animes", animesRouter);
router.use("/personagens", personagemRouter);

export default router;
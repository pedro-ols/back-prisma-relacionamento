import CardModel from "../models/cardModel.js";

class CardController {
  // GET /cards
  async getAllCards(req, res) {
    try {
      const cards = await CardModel.findAll();
      res.json(cards);
    } catch (error) {
      console.error("Erro ao buscar as cartas:", error);
      res.status(500).json({ error: "Erro ao buscar as cartas" });
    }
  }

  // GET /api/colecoes/:id
  async getCollectionById(req, res) {
    try {
      const { id } = req.params;

      const colecao = await CollectionModel.findById(id);

      if (!colecao) {
        return res.status(404).json({ error: "Coleção não encontrada." });
      }

      res.json(colecao);
    } catch (error) {
      console.error("Erro ao buscar coleção:", error);
      res.status(500).json({ error: "Erro ao buscar coleção." });
    }
  }

  // POST /api/colecoes
  async createCollection(req, res) {
    try {
      // Validação básica
      const {name, description, releaseYear} = req.body;

      // Verifica se todos os campos da coleção foram fornecidos
      if (!name || !releaseYear) {
        return res
          .status(400)
          .json({ error: "Os campos de name e releaseYear são obrigatórios" });
      }

      // Criar a nova coleção
      const newCollection = await CollectionModel.create(name, description, releaseYear);

      if (!newCollection) {
        return res.status(400).json({ error: "Erro ao criar coleção" });
      }

      res.status(201).json(newCollection);
    } catch (error) {
      console.error("Erro ao criar coleção:", error);
      res.status(500).json({ error: "Erro ao criar coleção" });
    }
  }

  // PUT /api/colecoes/:id
  async updateCollection(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        description,
        releaseYear,
      } = req.body;

      // Atualizar a coleção
      const updatedCollection = await CollectionModel.update(
        id,
        name,
        description,
        releaseYear,
      );

      if (!updatedCollection) {
        return res.status(404).json({ error: "Coleção não encontrada" });
      }

      res.json(updatedCollection);
    } catch (error) {
      console.error("Erro ao atualizar coleção:", error);
      res.status(500).json({ error: "Erro ao atualizar coleção." });
    }
  }

  // DELETE /api/personagens/:id
  async deleteCollection(req, res) {
    try {
      const { id } = req.params;

      // Remover a coleção
      const result = await CollectionModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Coleção não encontrada" });
      }
      return res.status(200).json({ message: "Coleção deletada com sucesso."});

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover coleção:", error);
      res.status(500).json({ error: "Erro ao remover coleção" });
    }
  }
}

export default new CardController();

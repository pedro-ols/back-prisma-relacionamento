import CollectionModel from "../models/collectionModel.js";

class CollectionController {
  getAll = async (req, res) => {
    try {
      const colecoes = await CollectionModel.getAll();
      res.json(colecoes);
    } catch (error) {
      console.error("Erro ao buscar as coleções", error);
      res.status(500).json({ error: "Erro ao buscar coleções" });
    }
  };

  create = async (req, res) => {
    try {
      const { name, description, releaseYear } = req.body;
      if (!name || !releaseYear) {
        return res
          .status(400)
          .json({
            erro: "Os campos de nome e ano de lançamento são obrigatórios",
          });
      }

      const newCollection = await CollectionModel.create(
        name,
        description,
        releaseYear
      );

      if (!newCollection) {
        return res.status(400).json({ erro: "Erro ao criar coleção" });
      }

      res.status(201).json(newCollection);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar coleção" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { concluida, descricao } = req.body;

    try {
      const tarefaAtualizada = await tarefaModel.update(
        Number(id),
        concluida,
        descricao
      );

      if (!tarefaAtualizada) {
        return res.status(404).json({ erro: "Tarefa não encontrada!" });
      }

      res.json(tarefaAtualizada);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar tarefa!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await tarefaModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
      }

      res.status(200).send({ message: "Tarefa deletada com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir tarefa!" });
    }
  };
}

export default new CollectionController();

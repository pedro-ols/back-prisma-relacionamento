import CollectionModel from "../models/collectionModel.js";

class CollectionController {
  getAll = async (req, res) => {
    try {
      const colecoes = await CollectionModel.getAll();
      res.json(colecoes);
    } catch (error) {
      console.error("Erro ao buscar as coleções" ,error);
      res.status(500).json({ error: "Erro ao buscar coleções" });
    }
  };

  create = async (req, res) => {
    const { descricao } = req.body;
    // const descricao = req.body.descricao;
    try {
      if (!descricao) {
        return res.status(400).json({ erro: "Descrição é obrigatória" });
      }

      const novacoleection = await tarefaModel.create(descricao);
      res.status(201).json(novaTarefa);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar tarefa" });
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

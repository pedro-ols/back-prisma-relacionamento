import prisma from "../../prisma/client.js";

class CollectionModel {
  async findAll() {
    const colecoes = await prisma.collection.findMany({
      orderBy: { createdAt: "desc" },
    });

    console.log(colecoes);

    return colecoes;
  }

  create = async (descricao) => {
    return await prisma.task.create({
      data: {
        descricao,
      },
    });
  };

  update = async (id, concluida, descricao) => {
    try {
      const collection = await prisma.task.update({
        where: { id },
        data: {
          concluida: concluida !== undefined ? concluida : true,
          descricao,
        },
      });

      return collection;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const collectionDeletada = await prisma.task.delete({
        where: { id },
      });

      return collectionDeletada;
    } catch (error) {
      console.log("Erro ao deletar a collection!", error);
      throw error;
    }
  };
}
export default new CollectionModel();

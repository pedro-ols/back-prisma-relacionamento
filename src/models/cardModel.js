import prisma from "../../prisma/prisma.js";

class CardModel {
  // Obter todas as cartas
  async findAll() {
    const cards = await prisma.card.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        collection: true,
      }
    });

    console.log(cards);

    return cards;
  }

  // Obter uma carta pelo ID
  async findById(id) {
    const colecao = await prisma.collection.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        cards: true,
      },
    });

    return colecao;
  }

  // Criar um novo personagem
  async create(name, description, releaseYear) {
    const newCollection = await prisma.collection.create({
      data: {name, description, releaseYear},
    });

    return newCollection;
  }

  // Atualizar um personagem
  async update(
    id,
    name,
    description,
    releaseYear
  ) {
    const collection = await this.findById(id);

    if (!collection) {
      return null;
    }

    // Atualize o personagem existente com os novos dados
    
    if (name !== undefined) {
      name = name;
    }
    if (description !== undefined) {
      description = description;
    }
    if (releaseYear !== undefined) {
      releaseYear = releaseYear;
    }

    const updatedCollection = await prisma.collection.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        description,
        releaseYear
      }
    });

    return updatedCollection;
  }

  // Remover uma coleção
  async delete(id) {
    const colecao = await this.findById(id);

    if (!colecao) {
      return null;
    }

    await prisma.collection.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new CardModel();

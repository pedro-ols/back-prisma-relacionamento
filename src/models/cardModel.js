import prisma from "../../prisma/prisma.js";

class CardModel {
  // Obter todas as cartas
  async findAll(raridade, ataque, pagina, limite) {
    if(Number(pagina) < 1){
      pagina = 1
    }
    if(Number(limite) < 1 || Number(limite) > 100){
      limite = 10
    }

    const skip = (Number(pagina) - 1) * Number(limite)

    const where = {}

    if (raridade){
      where.rarity = raridade
    };
    if (ataque){
      where.attackPoints = Number(ataque)
    };
    const cards = await prisma.card.findMany({
      skip,
      take: Number(limite),
      where,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        collection: {
          select: {
            name: true,
            description: true,
            releaseYear: true,
          },
        },
      },
    });

    const totalGeral = await prisma.card.count({ where });
    const totalExibidos = cards.length
    return { totalExibidos, totalGeral, cards, };
  }

  // Obter uma carta pelo ID
  async findById(id) {
    const card = await prisma.card.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        collection: {
          select: {
            name: true,
            description: true,
            releaseYear: true,
          },
        },
      },
    });

    return card;

  }

  // Criar um novo personagem
  async create(
    name,
    rarity,
    attackPoints,
    defensePoints,
    imageUrl,
    collectionId
  ) {
    const newCard = await prisma.card.create({
      data: {
        name,
        rarity,
        attackPoints,
        defensePoints,
        imageUrl,
        collectionId,
      },
    });

    return newCard;
  }

  // Atualizar uma carta
  async update(
    name,
    rarity,
    attackPoints,
    defensePoints,
    imageUrl,
    collectionId,
    id
  ) {
    console.log(name, rarity, attackPoints, defensePoints, imageUrl, collectionId, id);
    const card = await this.findById(id);

    if (!card) {
      return null;
    }

    // Atualize a carta existente com os novos dados

    const updatedCard = await prisma.card.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        rarity,
        attackPoints,
        defensePoints,
        imageUrl,
        collectionId: Number(collectionId),
      },
    });

    return updatedCard;
  }

  // Remover uma carta
  async delete(id) {
    const card = await this.findById(id);

    if (!card) {
      return null;
    }

    await prisma.card.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new CardModel();

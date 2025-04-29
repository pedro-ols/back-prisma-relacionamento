import prisma from "../../prisma/prisma.js"

class UserModel {
    async findAll() {
        const users = await prisma.user.findMany();

        return users;
    }

    async findById(id) {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        });

        return user;
    }

    async create(data) {
        const user = await prisma.user.create({
            data,
        });

        return user;
    }

    async update(id, data) {
        const user = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data
        });

        return user;
    }

    async delete(id) {
        await prisma.user.delete({
            where: {
                id: Number(id)
            }
        });

        return true;
    }
}

export default new UserModel()
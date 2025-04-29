import UserModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

class AuthController {
    async getAllUsers(req, res) {
        try {
            const users = await UserModel.findAll();
            res.json(users);
        } catch (error) {
            console.error("Erro ao listar usuários:", error);
            res.status(500).json({ error: "Erro ao listar usuários" });
        }
    }

    async register(req, res) {
        try {
            const { name, email, password } = req.body;

            if(!name || !email || !password) {
                return res.status(400).json({ error: "Os campos de nome, email e senha são obrigatórios" });
            } 

            const userExists = await UserModel.findByEmail(email);
            if(userExists) {                                  
                return res.status(400).json({ error: "Email já está cadastrado" });
            } 

            const hashedPassword = await bcrypt.hash(password, 10);

            const data = {
                name,
                email,
                password: hashedPassword
            };

            const user = await UserModel.create(data);
            return res.status(201).json({ message: "Usuário cadastrado com sucesso", user });
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            res.status(500).json({ error: "Erro ao cadastrar usuário" });
        }
    }
}

export default new AuthController();
import User from "../models/userModels.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class authController{

    //Criar usuário

    static userRegister = async(req, res) => {
        const {email} = req.body;

        const possibleUser = await User.findOne({email});

        if(possibleUser){
            return res.status(400).send({error: "Usuário já cadastrado!"});
        }

        const user = await User.create(req.body);
        user.password = undefined;

        return res.status(200).send({user});
    }

    //Login

    static login = async (req,res) => {
        const {email, password} = req.body;

        const user = await User.findOne({email}).select("+password");

        if(!user)
            return res.status(400).send({error: "Usuário não encontrado"});

        if(password != user.password){
            return res.status(400).send({error: "Usuário não encontrado "})
        }
       

        //Criação de token
        user.password = undefined
        return res.send(
            {
                user,
                token: this.generateToken({id: user.id})
            }
        )
    }

    static generateToken(user){
        return jwt.sign({id: user.id, name: user.name }, process.env.API_SECRET, {expiresIn: 86400})
    }

    //Encontrar usuario

    static userGetAll = async(req, res) => {
        User.find(function (err, users) {
            if(err){
                res.status(500).send({message: err.message})
            }
                res.status(200).send(users)
        })
    }

    static userGet = async (req, res) => {
        const{email, password} = req.body
        try{
            const userFound = await User.findOne({email}).select("+password")
            if (userFound) {
                res.status(200).json({
                    message: `O ${userFound.name} foi encontrado`
                })
        }
        } catch (e) {
            res.status(500).json({
                message: `Nao foi encontrado`
            })
        }
    }

    //Atualizar usuário

    static userUpdate = async(req,res) => {
        const {email, name, sobrenome, password, cep, celular} = req.body;

        let user = await User.findOneAndUpdate({email, name, sobrenome, password, cep, celular}).select("+password");

        let oldUser = user
        let update = req.body
        let newUser = {...oldUser, ...update}
        user = newUser

        return res.send(user) 
    }

    //Deletar usuário

    static userDelete = async(req, res) => {
        const {email, password} = req.body;

        let user = await User.findOne({email}).select("+password");

        if(!user){
            return res.status(400).send({error: "Usuário não encontrado"});
        }else if(password != user.password){
            return res.status(400).send({error: "Usuário nao encontrado"})
        }else{
            user.deleteOne(user)
            return res.send("Usuário deletado com sucesso!")
        }
    }
}

export default authController;
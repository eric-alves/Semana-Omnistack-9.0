//Index: listagem completa
//Show: Listagem com Pesquisa
//Store: Criar uma sessão
//Update: Atualizar uma sessão
//Destroy: Deletar uma sessão

const User = require('../models/User');

module.exports = {
    // Async indica q o metodo é assincrono
    // necessario para o comando await
    async store(req, res) {
        // Desestruturação: Usado quando temos
        // const email = req.body.email
        const { email } = req.body;

        // Await força o programa aguardar este comando ser
        // executado por completo
        let user = await User.findOne({ email: email });

        if(!user){
            user = await User.create({email});
        }

        return res.json(user);
    }
};
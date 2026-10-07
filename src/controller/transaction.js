import app from "../Index.js";

const transactionController = (app) => {

    app.get("/transactions", async (res, req) => {
        try {
            const resposta = await () //função do modal, mais especifico

            res.status(resposta.status).json({
                "usuarios": resposta.dados,
                "total" : resposta.total,
                "erro" : false
            })
        } catch (error) {
            res.status(500).json({
                "mensagem": error.mensagem,
                "error": true
            });
        }
    });

}
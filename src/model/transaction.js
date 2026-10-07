const modalTransaction = {

    pegaUsuarios : async ()=>{
        try {
            const dados = await (); // busca no dao que la ss se conecta no banco.
            return {
                "dados" : dados,
                "total" : dados.length,
                "status" : 200
            }
            
        } catch (error) {
            throw error
        }
    },
}
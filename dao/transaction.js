

const usuarioDAO = {

    pegaTodosUsuarios : ()=>{
        return new Promise((resolve, reject)=>{
            db.all('SELECT * FROM USUARIOS',(erro, linhas)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve(linhas)
                }
            })
        })

    },
}
/* ARQUIVO RESPONSAVEL PELAS ROTAS */

const express = require('express')
const routes = express.Router()

/* PODE SER USADA 4 OPERAÇÕES
                                - BUSCAR DADOS - GET
                                - INSERIR DADOS - POST
                                - MODIFICAR DADOS - PUT
                                - DELETAR DADOS - DELETE */
                                
let db = [
    {'1':{Nome:'Miguel 1',Idade: '20',sexo: 'M', Endereço: 'Presidente Dutra - Rua Ângelo Romano, 186 - Presidente Dutra - CEP 14060-680 - Telefone: 3622-4437 - Responsável: Ana Paula Usso Demunari'}},
    {'2':{Nome:'Arthur 2',Idade: '28',sexo: 'F', Endereço: 'Vila Mariana - Rua Itu, 1.120 - Vila Carvalho - CEP 14075-090 - Telefone: (16) 3626-7423 - Responsável: Simone Afonso Silva de Oliveira'}},
    {'3':{Nome:'Gael 3',Idade: '36',sexo: 'M', Endereço: 'Cynira Saud Said - Rua Pedro Colino, nº 271 - Res. Léo Gomes de Moraes - CEP - 14079-044 - Telefone: 3628-0030 - Responsável: Marly Aparecida Pereira'}},
    {'4':{Nome:'Heitor 4',Idade: '44',sexo: 'F', Endereço: 'Maria Nilde Mascellani - Rua Cruz e Souza, 3.100 - Parque Ribeirão Preto - CEP 14031-560 - Telefone: 3637-6224 - Responsável: Claudete Rotondo Pizetti'}},
    {'5':{Nome:'Theo 5',Idade: '50',sexo: 'M', Endereço: 'Marincek - Rua Roberto Michellin, 95 - Antônio Marincek - CEP 14061-190 - Telefone: 3622-6828 - Responsável: Marisa Marchetti'}},
    {'6':{Nome:'Davi 6',Idade: '56',sexo: 'M', Endereço: 'SAICA - Rua Genoveva Onofre Barban, 851 - casas 1, 2 e 3 - Responsável: Maria Aparecida de Souza - Telefones: 3975-8922 e 3639-7490'}},
    {'7':{Nome:'Gabriel 7',Idade: '62',sexo: 'F', Endereço: 'EDUCAJOVEM - Fundação Educandário “Cel. Quito Junqueira” - Av. Cavalheiro Paschoal Innecchi, 500, Jardim Independência. - Telefone: (16) 3627-1800'}},
    {'8':{Nome:'Bernardo 8',Idade: '60',sexo: 'M', Endereço: 'Cynira Saud Said - Rua Pedro Colino, nº 271 - Res. Léo Gomes de Moraes - CEP - 14079-044 - Telefone: 3628-0030 - Responsável: Marly Aparecida Pereira'}},
    {'9':{Nome:'Samuel 9',Idade: '68',sexo: 'F', Endereço: 'Marincek - Rua Roberto Michellin, 95 - Antônio Marincek - CEP 14061-190 - Telefone: 3622-6828 - Responsável: Marisa Marchetti'}},
    {'10':{Nome:'João Miguel 10',Idade: '76',sexo: 'F', Endereço: 'Vila Mariana - Rua Itu, 1.120 - Vila Carvalho - CEP 14075-090 - Telefone: (16) 3626-7423 - Responsável: Simone Afonso Silva de Oliveira'}},
    ]


    /* BUSCAR DADOS*/
    routes.get('/', function(req, res) {
        res.json(db);
    });

    /* INSERIR DADOS*/
    routes.post('/add', function (req, res) {
        const body = req.body

        if(!body)
            return res.status(400).end()

        db.push(body)
            return res.json(body)
    })    

    routes.delete('/:id', (req, res) =>{
        const id = req.params.id

        let newDB = db.filter(item =>{
            if(!item[id])
                return item
        })

        db = newDB

        return res.send(newDB)
    })

module.exports = routes
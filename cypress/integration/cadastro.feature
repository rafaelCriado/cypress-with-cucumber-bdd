#language: pt
@cadastro
Funcionalidade: Realizar cadastro de novo entregador
Eu como usuário do Buger Eats
Desejo cadastrar-me como entregador
Para que possa desfrutar das funcionalidades deste tipo de usuário
 
Esquema do Cenário: Realizar cadastro de novo entregador com sucesso
    Dado usuario na pagina inicial do sistema
    Então o texto "Seja um parceiro entregador pela Buger Eats" estará visivel
    Quando opta por realizar o cadastro
    E preenche o nome "Rafael Criado"
    E preenche o cep
    E seleciona o metodo de entrega "<metodo>"
    E anexo arquivo "imagem.png"
    Exemplos:
    | metodo |
    | Bicicleta |
    | Moto |
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import * as actions from "../../common/actions";
import * as element from "../../support/locators/cadastro";
 
Given(/^usuario na pagina inicial do sistema$/, () => {
  actions.navigation().visitBugerEats()
});

When(/^o texto "([^"]*)" estará visivel$/, (texto) => {
    actions.element().validarTexto(element.cadastro.textoPaginaInicial, texto)
});

When(/^opta por realizar o cadastro$/, () => {
    actions.element().clique(element.cadastro.btnCadastrar)
});

When(/^preenche o nome "([^"]*)"$/, (nome) => {
    actions.element().digite(element.cadastro.fieldNome, nome)
});

When(/^preenche o cep$/, () => {
    actions.element().digite(element.cadastro.fieldCep, '15503-022')
    actions.element().clique(element.cadastro.btnBuscarCep)
});

When(/^seleciona o metodo de entrega "([^"]*)"$/, (elemento) => {
    actions.element().clicarElementoContendoTexto(element.cadastro.metodoEntrega, elemento)
});

When(/^anexo arquivo "([^"]*)"$/, (arquivo) => {
    actions.element().anexarArquivo(element.cadastro.importaCNH, arquivo)
});


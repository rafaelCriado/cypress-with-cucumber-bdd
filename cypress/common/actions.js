const { Strings } = require("./strings");
function navigation() {
  function visitBugerEats() {
    cy.visit(Strings.url.paginaInicial)
  }
  return {
    visitBugerEats
  };
}

function element() {

    function clique(elemento) {
        cy.get(elemento).click()
    }

    function clicarElementoContendoTexto(elemento, texto) {
        cy.get(elemento).contains(texto).click()
    }

    function digite(elemento,valor) {
        cy.get(elemento).type(valor)
    }

    function anexarArquivo(elemento, arquivo) {
        cy.get(elemento).attachFile(arquivo)
    }

    function validarTexto(elemento, texto){
      cy.get(elemento).should('contain.text', texto);
    }

    return {
      clique,
      digite,
      clicarElementoContendoTexto,
      anexarArquivo,
      validarTexto
    };
  }
module.exports = {
    navigation: navigation,
    element: element,
};

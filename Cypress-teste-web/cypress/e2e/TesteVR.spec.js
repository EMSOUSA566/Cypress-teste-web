/// <reference types="cypress" />

describe('Acessar a home do portal web (www.vr.com.br)', () => {
  beforeEach(() => {
    cy.visit('https://www.vr.com.br')
  })

  it('realizando teste após acessar site', () => {
    //  Clicar no botão "Compre online" para navegar até a loja
    
    //  código para que ele remova atributo "Target" que estava fazendo essa função de abrir uma nova aba
      cy.get("#novo-ofereca-vr > div > div > div.modal-body > div.left-side > a.vr-button.vr-button--primary").invoke("removeAttr", "target").click({ force: true });

    //  para trabalhar na tela que chama ao clicar no botão compra online
      cy.get('button#sc_terms-consent').click()
      cy.contains('Bem-vindo(a) à Loja VR!',{timeout:2000})
      cy.get('button.close-button').click()

      // Selecionar a opção "Cartões VR
      cy.get('#btn-selecionar-modalidade-avulso').click()
      cy.contains('Cartões VR',{timeout:1000})

      // Adicionar uma quantidade aleatória de cartões do produto "Auto
      cy.get(':nth-child(4) > .lojavr-style-c-hCAcEO > .lojavr-style-c-kSMoRY').scrollIntoView()
      cy.get('#produto-auto-quantidade').type('2')

      // Digitar um valor de crédito aleatório para o produto "Auto"
      cy.get('#produto-auto-valor').type('2000')

      // Clicar no botão "Adicionar ao carrinho"
      cy.get('#btn-adicionar-carrinho-auto').click()

      // Validar que produto foi adicionado ao carrinho com sucesso
      cy.contains('Seguir para o carrinho',{timeout:1000})
      cy.get('#btn-meu-carrinho > .fa-light').click()
      cy.contains('Meu carrinho',{timeout:1000})
      cy.contains('Auto')
      cy.contains('R$ 20,00')
  
  })
})

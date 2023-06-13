describe('Testes na Home', () => {
  it('Abre a página', () => {
    
    cy.visit('/')
  
  })



  it('Abre a página index', () => {
      
    cy.visit('/index.html')

  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Titulo da Pagina', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('.titulo-pagina').should('have.text', 'Sapataria do Arnaldo');
    cy.get('.titulo-pagina').should('have.class', 'titulo-pagina');
    cy.get('.titulo-pagina').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Subtitulo da Pagina', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('.subtitulo-pagina').should('have.text', 'Desde 1940 consertando o seu sapato');
    cy.get('.subtitulo-pagina').should('have.class', 'subtitulo-pagina');
    cy.get('.subtitulo-pagina').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Rodapé da Pagina', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('.rodape').should('have.text', '\n        \n          Rua Forte do Leme, 52\n          Jardim Santa Adélia\n          São Paulo - SP\n          (11) 3214-5678\n        \n      ');
    cy.get('.rodape').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Cabeçalho da Pagina', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('.menu').should('have.class', 'menu');
    cy.get('.menu').should('be.visible');
    cy.get('.menu').should('have.text', '\n    \n        \n        \n          \n            Home\n            Sobre Nós\n            Catálogo\n            Contato\n          \n        \n    ');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('texto da Pagina', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('article > :nth-child(3)').should('have.text', '\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque animi culpa mollitia suscipit distinctio\n            dicta soluta quod laudantium ipsa quisquam quibusdam voluptas, adipisci, nihil magni accusamus illo provident\n            aliquam?\n          ');
    cy.get('article > :nth-child(3)').should('have.class', 'paragrafo-artigo');
    cy.get('article > :nth-child(3)').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
})
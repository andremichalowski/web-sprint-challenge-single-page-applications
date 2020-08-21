describe('Pizza Form Tests', () => {
  beforeEach( () => {
      cy.visit('http://localhost:3001/pizza');
  })
  it('Form functionality', () => {
      //Name
      cy.get('[data-cy = name]').type("Andre").should('have.value','Andre');
      //Box
      cy.get('[data-cy = special]').type("Extra Cheese").should('have.value',"Extra Cheese");
      //Toppings
      cy.get('[data-cy = pepperoni]').check().should('be.checked');
      cy.get('[data-cy = mushroom]').check().should('be.checked');
      cy.get('[data-cy = onion]').check().should('be.checked');
      cy.get('[data-cy = sausage]').check().should('be.checked');
      //Submit
      cy.get('[data-cy = submit]').click();
      //Drop down
      cy.get('[data-cy = size]').select("Small").should('have.value','Small');
  });
})
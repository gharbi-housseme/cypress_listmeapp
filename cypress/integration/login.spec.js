/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://app-dev.listmeapp.co/login')
    })
  
    it('hass a title', () => {
      cy.contains('EVENTS MADE SIMPLE');
      expect(2).to.equal(2);
  
    })
  
    it('add an existant user', () => { 
      cy.contains('Register').click();
      cy.url().should('include', 'register');
      cy.get('input[name=email]').type('hello@h.com');
      cy.get('input[name=password]').type('AZERTY');
      cy.get('button[type=submit]').click(); 
      cy.contains('email is already registered with ListMe business, try another!') 
    })
})
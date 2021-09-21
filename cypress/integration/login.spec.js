/// <reference types="cypress" />
import Chance from 'chance';
// Chance is a minimalist generator of random strings
const chance = new Chance()

describe('login listmeapp', () => {
    beforeEach(() => {
      cy.visit('https://app-dev.listmeapp.co/login')
    })
    // test the login request status
    it('test login request', () => { 
        cy.request("/login").then((response) => {
            expect(response.status).to.eq(200);
            expect(response).to.have.property("headers");
        });
    })
    // create a new user then navigate to the home page and click on logout button
    // then login with the user created 
    it('login with an existant', () => { 
        const email = chance.email();
        cy.contains('Register').click();
        cy.url().should('include', 'register');
        cy.get('input[name=email]').type(email);
        cy.get('input[name=password]').type('test');
        cy.get('button[type=submit]').click();
        cy.get('.navbar-burger').click();
        cy.get('.logout-text').click();
        cy.url().should('include', 'login');
        cy.get('input[name=email]').type(email);
        cy.get('input[name=password]').type('test');
        cy.get('.sc-jTzLTM').click();
        cy.pause();
    })
  
    // try to login with an unexistant user
    it('login with an unexistant user', () => { 
      cy.url().should('include', 'login');
      cy.get('input[name=email]').type(chance.email());
      cy.get('input[name=password]').type('AZERTY');
      cy.get('.sc-jTzLTM').click(); 
      cy.contains('Sorry, your username or password was incorrect.') 
    })
})
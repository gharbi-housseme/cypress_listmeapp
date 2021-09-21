/// <reference types="cypress" />
import Chance from 'chance';
// Chance is a minimalist generator of random strings
const chance = new Chance()

describe('login listmeapp', () => {
    beforeEach(() => {
      cy.visit('https://app-dev.listmeapp.co/login')
    })
  
    it('hass a title', () => {
      cy.contains('EVENTS MADE SIMPLE');  
    })

    // test if it create a new user and navigate to the home page
    it('add a new user', () => { 
        cy.contains('Register').click();
        cy.url().should('include', 'register');
        cy.get('input[name=email]').type(chance.email());
        cy.get('input[name=password]').type('aaaaaaa');
        cy.get('button[type=submit]').click();
        cy.url().should('include', 'settings'); 
        cy.pause();
    })
  
    // test the behavior when we try to create a new user with an existant email
    it('add an existant user', () => { 
      cy.contains('Register').click();
      cy.url().should('include', 'register');
      cy.get('input[name=email]').type('hello@h.com');
      cy.get('input[name=password]').type('AZERTY');
      cy.get('button[type=submit]').click(); 
      cy.contains('email is already registered with ListMe business, try another!') 
    })
})
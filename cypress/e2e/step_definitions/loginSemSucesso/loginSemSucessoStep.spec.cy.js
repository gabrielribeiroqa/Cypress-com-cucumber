
/// <reference types="cypress" />

import loginPage from "../../../support/pages/loginPage"
console.log("loginPage module:", loginPage)

import { Given, When, Then, } from "cypress-cucumber-preprocessor/steps"

beforeEach(() => {
    cy.visit('/')
    cy.clearCookies()
})

Given('Que acesso a aplicacao', () => {

})

When('Tento logar com usuario {string} preenchido corretamente e senha vazia {string}', (usuario, senha) => {

        senha = senha === '<null>' ? null : senha;
        cy.login(usuario, senha)
        loginPage.botaoEntrar()
        loginPage.validarMensagemSenhaObrigatoria()
        cy.screenshot()
        cy.reload()     
})

When('Tento logar com usuario vazio {string}e senha {string} preenchida corretamente', (usuario, senha) => {

        usuario = usuario === '<null>' ? null : usuario
        cy.login(usuario, senha)
        loginPage.botaoEntrar()
        loginPage.validarMensagemUsuarioObrigatorio()
        cy.screenshot()
        cy.reload()
        
    })
 
When('Tento logar com usuario {string} preenchido corretamente e senha incorreta {string}', (usuario, senhaIncorreta) => {
	
    senhaIncorreta = senhaIncorreta === '<null>' ? null : senhaIncorreta;
    cy.login(usuario, 'TESTEabc123')
    loginPage.botaoEntrar()
    loginPage.validarMensagemSenhaIncorreta()
    cy.screenshot()
    cy.reload() 
});


When('Tento logar com usuario incorreto {string}e senha {string} preenchida corretamente', (usuarioIncorreto, senha) => {

    usuarioIncorreto = usuarioIncorreto === '<null>' ? null : usuarioIncorreto
    cy.login('TESTE', senha)
    loginPage.botaoEntrar()
    loginPage.validarMensagemUsuarioIncorretoeSenhaCorreta()
    cy.screenshot()
    cy.reload()
    
});


Then('Não consigo fazer login na aplicação', () => {
	
});



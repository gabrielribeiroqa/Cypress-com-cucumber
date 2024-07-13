
/// <reference types="cypress" />


import loginPage from "../../../support/pages/LoginPage"

import { Given, When, Then, } from "cypress-cucumber-preprocessor/steps"

beforeEach(()=>{
    cy.visit('/')
})

Given('Que acesso a aplicacao', () => {
	return true;
})

When('Preencho as credenciais de login corretamente {string} e {string}', (usuario,senha) => {
    cy.login(usuario, senha)
    loginPage.botaoEntrar()
})


Then('Realizo o login com sucesso e verifico a mensagem corretamente', () => {
    loginPage.validarMensagemDeSucesso()
    cy.screenshot()
})







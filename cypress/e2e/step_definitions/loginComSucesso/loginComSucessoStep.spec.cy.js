
/// <reference types="cypress" />


import loginPage from "../../../support/pages/loginPage"

import { Given, When, Then, } from "cypress-cucumber-preprocessor/steps"

beforeEach(()=>{
    cy.visit('/')
})

/*
 Cenário: LOGIN COM SUCESSO
  Dado Que acesso a aplicacao
  Quando  Preencho as credenciais de login corretamente
  Entao  Realizo o login com sucesso
 
  Resultado Esperado: É para permitir fazer login 
*/

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







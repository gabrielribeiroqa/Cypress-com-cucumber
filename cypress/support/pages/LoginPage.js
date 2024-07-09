import Locators from "../locators/locators";

class Login {

    botaoEntrar() {
        cy.get(Locators.botaoLogin.botao).then(btnEntrar => {
            expect(btnEntrar).to.be.exist
            expect(btnEntrar).to.be.enabled
            expect(btnEntrar).to.be.visible
            expect(btnEntrar).to.contain('Entrar')
            cy.get(btnEntrar).click()

        })
    }

    validarMensagemDeSucesso() {
        cy.get(Locators.modalContent.modal)
            .invoke('text').then(mensagem => {
                expect(mensagem).to.equal('Suas credenciais são válidas :)')

            })
    }

    validarMensagemSenhaObrigatoria() {
        cy.get(Locators.popupErro.popup)
            .invoke('text').then(mensagem => {
                expect(mensagem).to.equal('Informe a sua senha secreta!')

            })
    }
    validarMensagemUsuarioObrigatorio() {
        cy.get(Locators.popupErro.popup)
            .invoke('text').then(mensagem => {
                expect(mensagem).to.equal('Informe o seu nome de usuário!')

            })
    }
    validarMensagemUsuarioeSenhaNaoExiste() {
        cy.get(Locators.popupErro.popup)
            .invoke('text').then(mensagem => {
                expect(mensagem).to.equal('Oops! Credenciais inválidas :(')

            })
    }
    validarMensagemSenhaIncorreta() {
        cy.get(Locators.popupErro.popup)
            .invoke('text').then(mensagem => {
                expect(mensagem).to.equal('Oops! Credenciais inválidas :(')

            })
    }
    validarMensagemUsuarioIncorretoeSenhaCorreta() {
        cy.get(Locators.popupErro.popup)
            .invoke('text').then(mensagem => {
                expect(mensagem).to.equal('Oops! Credenciais inválidas :(')

            })
    }
}


export default new Login();

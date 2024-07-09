@loginSemSucesso
Feature: Login Sem Sucesso

  Scenario Outline: LOGIN SEM SUCESSO
    Given Que acesso a aplicacao
    When Tento logar com usuario "<usuario>" preenchido corretamente e senha vazia "<null>"
    When Tento logar com usuario vazio "<null>"e senha "<senha>" preenchida corretamente
    When Tento logar com usuario "<usuario>" preenchido corretamente e senha incorreta "<senhaIncorreta>"
    When Tento logar com usuario incorreto "<usuarioIncorreto>"e senha "<senha>" preenchida corretamente
    Then Não consigo fazer login na aplicação

    Examples:
      | usuario | senha       | mensagem                       |
      | qa      | null        | Informe a sua senha secreta!   |
      | null    | xperience   | Informe o seu nome de usuário! |
      | qa      | TESTEabc123 | Oops! Credenciais inválidas :( |
      | TESTE   | xperience   | Oops! Credenciais inválidas :( |
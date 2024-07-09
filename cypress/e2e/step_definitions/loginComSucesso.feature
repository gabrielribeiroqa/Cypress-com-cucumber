@loginComSucesso
Feature: Login Com Sucesso

  Scenario Outline: LOGIN COM SUCESSO
    Given Que acesso a aplicacao
    When Preencho as credenciais de login corretamente "<usuario>" e "<senha>"
    Then Realizo o login com sucesso e verifico a mensagem corretamente

    Examples:
      | usuario | senha     | mensagem                        |
      | qa      | xperience | Suas credenciais são válidas :) |

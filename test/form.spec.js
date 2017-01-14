/**
 * Form check
 * @desc Verifica a existencia de todos os campos necessários para a
 * inserção correta dos dados.
 */
'use strict';

describe('Form Check', function() {
  it('Check os campos dos formularios', function() {

    // Entra noa URL onde o formulario está.
    browser.get('http://localhost:8080/app/#!/supriment/new');

    // Verifica a presença dos campos.
    expect(element(by.id('nome')).isPresent()).toBe(true);
    expect(element(by.id('tipo')).isPresent()).toBe(true);
    expect(element(by.id('validade')).isPresent()).toBe(true);
    expect(element(by.id('localizacao')).isPresent()).toBe(true);
  })
});

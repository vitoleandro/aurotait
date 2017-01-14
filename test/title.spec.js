/**
 * Title Page
 * @desc Verifica se o titulo da página está correto.
 */

'use strict';

describe('Aurora IT', function() {
  it('Check se possuimos um titulo', function() {
    // Acessa a URL na página inicial.
    browser.get('http://localhost:8080/app');

    // Verifica a se o titulo é o correto.
    expect(browser.getTitle()).toEqual('Aurora IT - Test');
  });
});

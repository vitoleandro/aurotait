describe('Aurora IT', function() {
  it('should have a title', function() {
    browser.get('http://localhost:8080/app');

    expect(browser.getTitle()).toEqual('Aurora IT - Test');
  });
});

describe('calculator homepage', function() {
  it('should have a title', function() {
    browser.get('index.html');
    expect(browser.getTitle()).toEqual('Calculator');
  });
});


describe('calculator operation', function() {
  it('should multiply 9 and 5', function() {
    browser.get('index.html');
    element(by.id('btn9')).click();
    element(by.id('btn*')).click();
    element(by.id('btn5')).click();
    element(by.id('btn=')).click();
    expect(element(by.id('eleResult')).getAttribute('value')).toEqual('45');
  });
});

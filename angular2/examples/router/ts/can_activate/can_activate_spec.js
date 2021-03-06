'use strict';var e2e_util_1 = require('angular2/src/testing/e2e_util');
function waitForElement(selector) {
    var EC = protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to be present on the dom.
    browser.wait(EC.presenceOf($(selector)), 20000);
}
describe('reuse example app', function () {
    afterEach(e2e_util_1.verifyNoBrowserErrors);
    var URL = 'angular2/examples/router/ts/can_activate/';
    it('should navigate to user 1', function () {
        browser.get(URL);
        waitForElement('home-cmp');
        element(by.css('#user-1-link')).click();
        waitForElement('control-panel-cmp');
        expect(browser.getCurrentUrl()).toMatch(/\/user-settings\/1$/);
        expect(element(by.css('control-panel-cmp')).getText()).toContain('Settings');
    });
    it('should not navigate to user 2', function () {
        browser.get(URL);
        waitForElement('home-cmp');
        element(by.css('#user-2-link')).click();
        waitForElement('home-cmp');
        expect(element(by.css('home-cmp')).getText()).toContain('Welcome Home!');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuX2FjdGl2YXRlX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9leGFtcGxlcy9yb3V0ZXIvdHMvY2FuX2FjdGl2YXRlL2Nhbl9hY3RpdmF0ZV9zcGVjLnRzIl0sIm5hbWVzIjpbIndhaXRGb3JFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQSx5QkFBb0MsK0JBQStCLENBQUMsQ0FBQTtBQUVwRSx3QkFBd0IsUUFBUTtJQUM5QkEsSUFBSUEsRUFBRUEsR0FBU0EsVUFBV0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQTtJQUM5Q0EsZ0VBQWdFQTtJQUNoRUEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7QUFDbERBLENBQUNBO0FBRUQsUUFBUSxDQUFDLG1CQUFtQixFQUFFO0lBRTVCLFNBQVMsQ0FBQyxnQ0FBcUIsQ0FBQyxDQUFDO0lBRWpDLElBQUksR0FBRyxHQUFHLDJDQUEyQyxDQUFDO0lBRXRELEVBQUUsQ0FBQywyQkFBMkIsRUFBRTtRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUzQixPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUUvRCxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9FLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtCQUErQixFQUFFO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTNCLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNFLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3ZlcmlmeU5vQnJvd3NlckVycm9yc30gZnJvbSAnYW5ndWxhcjIvc3JjL3Rlc3RpbmcvZTJlX3V0aWwnO1xuXG5mdW5jdGlvbiB3YWl0Rm9yRWxlbWVudChzZWxlY3Rvcikge1xuICB2YXIgRUMgPSAoPGFueT5wcm90cmFjdG9yKS5FeHBlY3RlZENvbmRpdGlvbnM7XG4gIC8vIFdhaXRzIGZvciB0aGUgZWxlbWVudCB3aXRoIGlkICdhYmMnIHRvIGJlIHByZXNlbnQgb24gdGhlIGRvbS5cbiAgYnJvd3Nlci53YWl0KEVDLnByZXNlbmNlT2YoJChzZWxlY3RvcikpLCAyMDAwMCk7XG59XG5cbmRlc2NyaWJlKCdyZXVzZSBleGFtcGxlIGFwcCcsIGZ1bmN0aW9uKCkge1xuXG4gIGFmdGVyRWFjaCh2ZXJpZnlOb0Jyb3dzZXJFcnJvcnMpO1xuXG4gIHZhciBVUkwgPSAnYW5ndWxhcjIvZXhhbXBsZXMvcm91dGVyL3RzL2Nhbl9hY3RpdmF0ZS8nO1xuXG4gIGl0KCdzaG91bGQgbmF2aWdhdGUgdG8gdXNlciAxJywgZnVuY3Rpb24oKSB7XG4gICAgYnJvd3Nlci5nZXQoVVJMKTtcbiAgICB3YWl0Rm9yRWxlbWVudCgnaG9tZS1jbXAnKTtcblxuICAgIGVsZW1lbnQoYnkuY3NzKCcjdXNlci0xLWxpbmsnKSkuY2xpY2soKTtcbiAgICB3YWl0Rm9yRWxlbWVudCgnY29udHJvbC1wYW5lbC1jbXAnKTtcbiAgICBleHBlY3QoYnJvd3Nlci5nZXRDdXJyZW50VXJsKCkpLnRvTWF0Y2goL1xcL3VzZXItc2V0dGluZ3NcXC8xJC8pO1xuXG4gICAgZXhwZWN0KGVsZW1lbnQoYnkuY3NzKCdjb250cm9sLXBhbmVsLWNtcCcpKS5nZXRUZXh0KCkpLnRvQ29udGFpbignU2V0dGluZ3MnKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBub3QgbmF2aWdhdGUgdG8gdXNlciAyJywgZnVuY3Rpb24oKSB7XG4gICAgYnJvd3Nlci5nZXQoVVJMKTtcbiAgICB3YWl0Rm9yRWxlbWVudCgnaG9tZS1jbXAnKTtcblxuICAgIGVsZW1lbnQoYnkuY3NzKCcjdXNlci0yLWxpbmsnKSkuY2xpY2soKTtcbiAgICB3YWl0Rm9yRWxlbWVudCgnaG9tZS1jbXAnKTtcblxuICAgIGV4cGVjdChlbGVtZW50KGJ5LmNzcygnaG9tZS1jbXAnKSkuZ2V0VGV4dCgpKS50b0NvbnRhaW4oJ1dlbGNvbWUgSG9tZSEnKTtcbiAgfSk7XG59KTtcbiJdfQ==
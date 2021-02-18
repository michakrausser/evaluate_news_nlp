import { checkForUrl } from "../src/client/js/urlChecker"


describe("Testing the urlChecker functionality", () => {

  test("Testing the urlChecker() function", () => {

    expect( checkForUrl ).toBeDefined();
    expect( checkForUrl( 'https://www.udacity.com/' ) ).toBe(true);

  })
});


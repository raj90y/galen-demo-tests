load("pages/LoginPage.js");
load("pages/MyDashBoardPage.js");

function loginAsTestUser(driver) {
    new WelcomePage(driver)
        .waitForIt()
        .clickLogin();

    new LoginPage(driver)
        .waitForIt()
        .loginAs(TEST_USER);

    return new MyDashBoardPage(driver).waitForIt();
}
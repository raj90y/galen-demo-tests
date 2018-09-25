load("init.js");
load("pages/LoginPage.js");
load("commons.js");

testOnAllDevices("My DashBoard page", "/", function (driver, device) {
    loginAsTestUser(driver);
    checkLayout(driver, "specs/myDashboardPage.gspec", device.tags);
});
load("WelcomePage.js");

this.LoginPage = $page("Login page", {
    username:       "input[id*='username']",
    password:       "input[id*='password']"
}, {
    loginButton:    "input[value='Login']",
    errorMessage: ".message-item",

    loginAs: loggedFunction ("Log in as ${_1.username} with password ${_1.password}", function(user) {
        this.username.typeText(user.username);
        this.password.typeText(user.password);
        this.loginButton.click();
    }),

});

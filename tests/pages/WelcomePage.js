importClass(org.openqa.selenium.interactions.Actions);

this.WelcomePage = $page("Welcome page", {
    login_box: ".login",
    loginButton: "button[class*='login-button']",

    hoverFirstMenuItem: loggedFunction ("Hover first menu item", function (){
        var actions = new Actions(this.driver);
        actions.moveToElement(this.findChild("xpath: //*[@id='menu']//li/a[1]")).perform();
    }),

    clickLogin: loggedFunction ("Click Login on welcome page", function (){
        this.loginButton.click();
    })

});

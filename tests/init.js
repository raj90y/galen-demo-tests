load("galen-bootstrap/galen-bootstrap.js");


var TEST_USER = {
    username: "",
    password: ""
};

$galen.settings.website = "";

$galen.registerDevice("mobile", inSingleBrowser("mobile emulation", "450x750", ["mobile"]));
// $galen.registerDevice("tablet", inSingleBrowser("tablet emulation", "600x700", ["tablet"]));
$galen.registerDevice("desktop", inSingleBrowser("desktop emulation", "1024x768", ["desktop"]));

(function (exports) {
    exports.TEST_USER = TEST_USER;
})(this);

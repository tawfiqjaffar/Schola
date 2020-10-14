module.exports = {
    "@tags": ["google"],
    "Demo test Google.com": function (browser) {
        browser
            .url("https://www.google.com/")
            .waitForElementVisible("body")
            .assert.titleContains("Google")
            .assert.visible("input[type=text]")
            .setValue('input[type="text"]', "Nightwatch.js")
            .click(
                "#tsf>div:nth-child(2)>div.A8SBwf.emcav>div.UUbT9>div.aajZCb>div.tfB0Bf>center>input.gNO89b"
            )
            .assert.visible("#rso>div:nth-child(1)>div>div.r>a>h3")
            .end();
    },
};

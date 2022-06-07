View("BonusSpinsInfoView", { POPUP_WIDTH: 440, POPUP_HEIGHT: 240, POPUP_BUTTON_WIDTH: 115, POPUP_BUTTON_HEIGHT: 50 }, function () {
    return {
        init: function (c) {
            function a() { e._background.setPosition(-b.paddingX, Device.isPortrait ? -Device.topOffset : 0); e._background.setSize(1280 + 2 * b.paddingX, d.height() / Device.scale + 2 * b.paddingY / Device.scale) } this._super(); this.setZIndex(5004); this._background = new View("bonusPopUpBackground"); this._background.setSize(1280, 720); this._popUp = new View("bonusPopUp", 420, 240); this._popUp.setSize(BonusSpinsInfoView.POPUP_WIDTH,
                BonusSpinsInfoView.POPUP_HEIGHT); this.popUpButton = new Button("bonusPopUpButton", 162, 170); this.popUpButton.setSize(BonusSpinsInfoView.POPUP_BUTTON_WIDTH, BonusSpinsInfoView.POPUP_BUTTON_HEIGHT); this._buttonText = new TextView("bonusPopUpButtonText", "", 0, 12); this._buttonText.setSize(BonusSpinsInfoView.POPUP_BUTTON_WIDTH, BonusSpinsInfoView.POPUP_BUTTON_HEIGHT); this._title = new TextView("bonusPopUpTitle", "", 0, 12); this._title.setSize(BonusSpinsInfoView.POPUP_WIDTH, 30); this._content = new TextView("bonusPopUpContent",
                    "", 0, 62); this._content.setSize(BonusSpinsInfoView.POPUP_WIDTH, 30); this.popUpButton.addChild(this._buttonText); this._popUp.addChild(this.popUpButton); this._popUp.addChild(this._title); this._popUp.addChild(this._content); this.addChild(this._background); this.addChild(this._popUp); var b = GameSettings.getInstance(), d = $(window), e = this; setTimeout(a, 0); d.on("resize", a)
        }, setBonusSpins: function (c) {
            var a = GameSettings.getInstance(); this._title.setText(a.localize("BonusSpinsInfoPopUpTitle")); this._content.setText(a.localize("BonusSpinsInfoPopUpContent").replace("{{remainingBonusSpins}}",
                c)); this._buttonText.setText(a.localize("BonusSpinsInfoPopUpButtonText"))
        }, setEndMessage: function (c, a, b, d) { this._title.setText(c); this._content.setText(a.replace("{{totalWinAmount}}", d)); this._buttonText.setText(b) }
    }
}());

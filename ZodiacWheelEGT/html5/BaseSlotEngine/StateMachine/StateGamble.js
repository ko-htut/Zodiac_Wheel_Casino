function StateGamble(a, b) {
    this.spin = function () { throw 'Invalid command "spin" in StateGamble!'; }; this.gamble = function () { b(StateMachineContext.STATE_WAITING_FOR_GAMBLE_RESULT); a.setWaitingForGambleResultVisualState(); a.sendGamble() }; this.jackpot = function () { throw 'Invalid command "jackpot" in StateGamble!'; }; this.collect = function () { b(StateMachineContext.STATE_WAITING_FOR_COLLECT_RESULT); a.hideGamble(); a.sendCollect() }; this.setResult = function () { throw 'Invalid command "setResult" in StateGamble!'; }; this.onResult =
        function () { throw 'Invalid command "onResult" in StateGamble!'; }; this.getState = function () { return StateMachineContext.STATE_GAMBLE }
};

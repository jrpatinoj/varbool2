basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Sad)
        basic.pause(100)
        basic.clearScreen()
    }
})

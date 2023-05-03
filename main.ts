let variable2 = 0
let variable1 = 0
input.onButtonPressed(Button.A, function () {
    variable2 = 2
    basic.showNumber(variable2)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable1 * variable2)
})
input.onButtonPressed(Button.B, function () {
    variable1 = 3
    basic.showNumber(variable2)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable1 + variable2)
})

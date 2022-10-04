input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onButtonPressed(Button.AB, function () {
    if (num < num2) {
        basic.showString("bloodlcot")
    } else if (num > num2) {
        basic.showString("bomboclot")
    }
})
input.onButtonPressed(Button.B, function () {
    num += -1
    basic.showNumber(num)
})
let num2 = 0
let num = 0
num = 0
num2 = randint(0, 20)
basic.forever(function () {
	
})

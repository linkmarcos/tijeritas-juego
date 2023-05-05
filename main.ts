let numero_02 = 0
input.onGesture(Gesture.Shake, function () {
    numero_02 = randint(0, 2)
    if (numero_02 == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (numero_02 == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
basic.forever(function () {
	
})

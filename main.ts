enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() >= 25) {
        sensors.DDMmotor(
        AnalogPin.P5,
        1,
        AnalogPin.P5,
        100
        )
    }
    if (input.temperature() <= 25 && input.temperature() >= 20) {
        sensors.DDMmotor(
        AnalogPin.P13,
        0.5,
        AnalogPin.P14,
        100
        )
    }
    if (input.temperature() <= 20) {
        sensors.DDMmotor(
        AnalogPin.P9,
        0,
        AnalogPin.P9,
        100
        )
    }
})

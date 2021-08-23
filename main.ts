input.onButtonPressed(Button.A, function () {
    radio.sendString("X")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(1000)
    basic.clearScreen()
    basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Sendereffekt += 1
    radio.setTransmitPower(Sendereffekt)
    basic.showNumber(Sendereffekt)
    basic.pause(500)
    basic.clearScreen()
})
let Sendereffekt = 0
radio.setGroup(12)
Sendereffekt = 0

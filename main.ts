radio.setTransmitPower(4);

radio.setFrequencyBand(7);

radio.setTransmitSerialNumber(true);

radio.setGroup(2)





let actualCode = 7;



input.onButtonPressed(Button.B, () => {

    basic.showNumber(actualCode, 200)

    basic.showString("", 0)

})



radio.onReceivedNumber((receivedNumber: number) => {



})




radio.onReceivedValue(function (name: string, value: number) {



})



/* radio.onReceivedNumber(function(receivedNumber: number) {

    const remotSerial = radio.receivedPacket(RadioPacketProperty.SerialNumber)

    console.logValue("BeaconId",receivedNumber + "\n\r" + remotSerial + "\n\r")

    

}) */



input.onButtonPressed(Button.A, function () {

    radio.sendNumber(7)



    basic.showLeds(`

    . . . . .

    . . . . .

    . . # . .

    . . . . .

    . . . . .

    `)

    basic.clearScreen()

})



let mySerial = (control.deviceSerialNumber())

/* console.logValue("serial", mySerial + "\n\r") */



radio.onReceivedValue(function (key: string, value: number) {

    if (mySerial === parseInt(key)) {

        console.logValue("nextCode", value)

    }

    if (key === "grp:") {

        console.logValue("nextGrp", value)

    }

})



input.onButtonPressed(Button.B, function () {



    radio.sendString("Mnau")

    basic.showLeds(`

    . . . . .

    . # . # .

    . . # . .

    . # . # .

    . . . . .

    `)

    basic.clearScreen()

})



radio.onReceivedString(function (receivedString: string) {

    console.logValue("string", receivedString + "\n\r")

})
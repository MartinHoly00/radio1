radio.setTransmitPower(4);
radio.setFrequencyBand(7);
radio.setTransmitSerialNumber(true);

radio.setGroup(1)

 let mySerial = (control.deviceSerialNumber())

console.logValue("serial", mySerial + "\n\r" ) 

let actualCode = 7;

input.onButtonPressed(Button.B, () => {

    basic.showNumber(actualCode, 200)

    basic.showString("", 0)

})

radio.onReceivedNumber((receivedNumber: number) => {
})
radio.onReceivedValue(function (name: string, value: number) {
})

radio.onReceivedNumber(function (receivedNumber: number) {

    const remotSerial = radio.receivedPacket(RadioPacketProperty.SerialNumber)

    console.logValue("BeaconId", receivedNumber + "\n\r" + remotSerial)
})

input.onButtonPressed(Button.A, function () {

    radio.sendNumber(7)
    basic.showNumber(1)
    basic.pause(100)
    basic.clearScreen()

})

radio.onReceivedValue(function (key: string, value: number) {
    if (mySerial === parseInt(key)){
        console.logValue("nextCode", value)
    }
    if(key === "grp"){
        console.logValue("newGrp",value)
    }
})
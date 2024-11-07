/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco Rocco Allegri
 * Created on: SOct 2024
 * This program ...
*/

basic.clearScreen()

let distanceToObject: number = 10
radio.setGroup(1)
basic.showIcon(IconNames.Happy)

while (true) 
{

    distanceToObject = sonar.ping
        (
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
        )
    basic.showNumber(distanceToObject)

    radio.onReceivedString(function (receivedString) 
    {
        basic.clearScreen()
        basic.showString(receivedString)
        basic.showIcon(IconNames.Happy)
    })

    if (distanceToObject < 10) 
    {
        basic.showIcon(IconNames.Triangle)
        radio.sendString("Too close!")
        basic.showIcon(IconNames.Happy)   
    }
    
    else 
    {
        
    }

}

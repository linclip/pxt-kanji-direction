//kanji-direction

enum DirectionEnum {
    //% block="Up"
    Up,
    //% block="Down"
    Down,
    //% block="Left"
    Left,
    //% block="Right"
    Right,

    //% block="East"
    East,
    //% block="West"
    West,
    //% block="South"
    South,
    //% block="Noth"
    North,
}

const numDirection = [
    ["00100", "00111", "00100", "00100", "11111"],   //上
    ["11111", "00100", "00110", "00101", "00100"],   //下
    //["01011", "11100", "01011", "10010", "00111"],   //左
    ["01000", "11111", "01011", "10010", "00111"],   //左
    //["01011", "11100", "01000", "10111", "00111"],    //右
    ["01000", "11111", "01000", "10111", "00111"],    //右

    ["00100", "11111", "01110", "01110", "10101"],   //東
    ["11111", "01010", "11111", "10101", "11111"],   //西
    ["00100", "11111", "00100", "11011", "10101"],   //南
    ["01010", "11011", "01010", "11010", "01011"],   //北
    //["", "", "", "", ""],   //東
]


//% weight=100 color=#01dfd7 icon="" block="kanji Direction"
namespace kanjiDirection {

    /**
     * showDirection
     * @param direction , eg: DirectionEnum.Up
     */
    //% blockId=showDirection block="Show Direction %direction"
    export function showDirection(direction?: DirectionEnum): void {
        basic.clearScreen()
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                if ((numDirection[direction][y]).substr(x, 1) == "1") {
                    led.plot(x, y)
                }
            }
        }
    }


}

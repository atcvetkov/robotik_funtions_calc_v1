/**
 * math_operation
 * 
 * plus  -> +
 * 
 * minus -> -
 * 
 * mult  -> *
 * 
 * div   -> /
 */
function calc (math_operation: string, var_1: number, var_2: number) {
    if (math_operation == "plus") {
        basic.showNumber(var_1 + var_2)
    } else if (math_operation == "minus") {
        basic.showNumber(var_1 - var_2)
    } else if (math_operation == "mult") {
        basic.showNumber(var_1 * var_2)
    } else if (math_operation == "div") {
        basic.showNumber(var_1 / var_2)
    } else {
        basic.showString("Error!")
    }
}
basic.forever(function () {
    calc("plus", 1, 1)
})

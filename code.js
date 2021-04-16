function fiver(number) {
    //Guard Clause
    if (!Number.isInteger(number)) {
        return null
    }

    let isEven = number % 2 === 0;
    let isMultipleOfFive = number % 5 === 0;

    let output = null
    if (isEven) {
        output = "even"
    } else {
        output = "odd"
    }

    if (isMultipleOfFive) {
        output += "fiver"
    }

    return output
}

// Happy Cases
console.log(fiver(123) === "odd")
console.log(fiver(126) === "even")
console.log(fiver(125) === "oddfiver")
console.log(fiver(130) === "evenfiver")
console.log(fiver(-1) === "odd")
console.log(fiver(-2) === "even")
console.log(fiver(-5) === "oddfiver")
console.log(fiver(-10) === "evenfiver")


// Edge Cases
console.log(fiver("cat") === null)
console.log(fiver(NaN) === null)
console.log(fiver(undefined) === null)
console.log(fiver(null) === null)
console.log(fiver([]) === null)
console.log(fiver(2.3) === null)
console.log(fiver(2.4) === null)
console.log(fiver(Infinity) === null)
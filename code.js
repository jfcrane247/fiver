function isMultipleOf(num, modulus) {
    return num % modulus === 0
}

console.log(isMultipleOf(6, 2) === true);
console.log(isMultipleOf(3, 2) === false);
console.log(isMultipleOf(15, 5) === true);
console.log(isMultipleOf(17, 5) === false);


function fiver(number) {
    //Guard Clause
    if (!Number.isInteger(number)) {
        return null
    }

    let isEven = isMultipleOf(number, 2)
    let isMultipleOfFive = isMultipleOf(number, 5)

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




let strings1 = ["2", "acs", "howdy"]
let strings2 = ["2", "", "acs", "howdy", ""]

function validateArray(strings) {
    for (let i = 0; i < strings.length; i += 1) {
        let item = strings[i]

        if (item === "") {
            return false
        }
    }

    return true
}

console.log(validateArray(strings1) === true)
console.log(validateArray(strings2) === false)
function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(location = "go to the office") {
    return `This Monday, I will ${location}.`
}

function wrapAdjective(string){
    return function innerAdjective(adjective = "special") {
        return `You are ${string}${adjective}${string}!`
    }
}
const makers = ['VW', 'Peugeot', 'Renault']

function car (maker){
    let mission = `${maker} makes cars`
    return mission
}
messages=makers.map(car)
console.log(messages);
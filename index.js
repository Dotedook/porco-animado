arr = [{name: "bulbasauro", id: 11}, {name: "pikachu", id: 12}]





function reduce (arr){
    let acumulador = {}

    for(let i = 0; i < arr.length; i++){

        if(arr[i].id == 12){
            acumulador += 1
        }


    }

    return acumulador
}
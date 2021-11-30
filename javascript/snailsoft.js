function main(){

    let array = [1];
    let additions = [2, 3, 4, 5];
    array.push.apply(...additions);

    console.log(array);

}

main();
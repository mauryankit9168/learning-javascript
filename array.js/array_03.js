const fruit=["apple","mango","grapes"];
fruit[6]="santara";
// console.log(fruit);  //[ 'apple', 'mango', 'grapes', <3 empty items>, 'santara' ]

fruit.forEach((item ,index)=>{
    console.log(`${index}:${item}`);
});                                     /**
                                            0:apple
                                            1:mango
                                            2:grapes
                                            6:santara */

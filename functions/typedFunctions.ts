function addTwo (num:number): number{
    return num;
}

console.log(addTwo(5));


const add=(sum:number):string=>{
    return "sum"
}


const players = ["Ms Dhoni", "Virat Kohli","Ab De Villiers"];

const names:string[] = players.map((name):string=>{
    return `all players ${name}`
})

console.log(names);



const consoleError=(err:string):void=>{
    console.log(err);
    
}

// this method returning nothing so for good practice we should give the return type as void


const handleError=(err:string):never=>{
    throw new Error(err);
}

// this method never returns a value so we should give the return type as never
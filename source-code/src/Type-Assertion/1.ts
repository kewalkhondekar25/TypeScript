//type assertion - way to tell browser what type an existing variable is?

type Bird = {
    name: string;
};

let birdString = `{"name": "eagle"}`;
let dogString = `{"name":"pub"}`;

let birdObj = JSON.parse(birdString);
let dogObj = JSON.parse(dogString);

let birdResult = birdObj as Bird;
let dogResult = dogObj as Bird;
type Dog = {
    type: "dog";
    name: string;
    bark: () => void
};
type Cat = {
    type: "cat";
    name: string;
    meow: () => void
};

type Animal = Dog | Cat;

const makeSound = (animal: Animal): void => {
    if(animal.type === "dog"){
        animal.bark();
    }else{
        animal.meow();
    }
};

const makeSound2 = (animal: Animal): void => {
    if("bark" in animal){
        animal.bark();
    }else{
        animal.meow();
    }
};
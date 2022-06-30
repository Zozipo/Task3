class Human {
    constructor(name) {
        this.name = name;
    }
    Print() {
    console.log("Name : ",this.name)
    }
}


class Flat {
    constructor(num){
        this.num = num;
        this.humans = []
    }

    newHuman(name){
        let h = new Human(name)
        this.humans.push(h)
        return h;
    }
    get allHumans(){
        return this.humans
    }

    Print(){
        console.log("Flat num: ",this.num);
        this.humans.forEach(human => human.Print());
    }
}

class House {
    constructor(){
        this.flats = []
    }

    newFlat(num){
        let f = new Flat(num)
        this.flats.push(f)
        return f;
    }
    get allFlats(){
        return this.flats
    }

    Print(){
        this.flats.forEach(flat => flat.Print());
    }
}
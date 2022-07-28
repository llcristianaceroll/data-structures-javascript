// creating method push

class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index] 

    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
        
}

const myArray = new MyArray();

myArray.push("Cristan");

myArray.push("Acero");

console.log(myArray);
console.log(myArray.get(0));


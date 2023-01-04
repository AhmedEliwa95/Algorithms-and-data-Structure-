
class MyArray  {
  constructor(){
    this.length = 0;
    this.data = {};
  }
  get(index){
    return this.data[index]
  }
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }
  //// adding at the begining
  unshift(item){
    for(let i = this.length ; i>0 ; i--){
      this.data[i] = this.data[i-1]
    }
    this.data[0] = item
    this.length++;
  };
  //// removing form the begining;
  shift(){
    for (let i =  0 ; i < this.length-1 ; i++){
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length-1];
    this.length--
  };
  splice(index){
    let deleted = this.data[index]
    for (let i = index ; i < this.length-1 ; i++){
      this.data[i] = this.data[i+1];
    };
    delete this.data[this.length-1];
    this.length--
    return deleted;
  }
}

const newArray = new MyArray();
newArray.push(10);
newArray.push(20);
newArray.push(30);
newArray.push(40);
console.log(newArray)
newArray.splice(1);
// newArray.shift();
// newArray.unshift(1);
// newArray.pop()
// newArray.pop()


console.log(newArray)
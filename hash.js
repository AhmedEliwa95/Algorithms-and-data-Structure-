class HashTable{
  constructor(size){
    this.data = new Array(size)
  }
  _hash(key){
    let hash = 0 ;
    for(let i = 0 ; i < key.length; i++){
      hash = (hash + key.charCodeAt(i)*i)% this.data.length
    }
    return hash
  }
  
  set(key,value){
    const address = this._hash(key);
    if(!this.data[address]){
    this.data[address] = [[key,value]];
    }else{
      this.data[address].push([key,value])
    }
    return this.data;
  };
  
  get(key){
    const address = this._hash(key);
    // if(!this.data[address])return -1;
    // if(this.data[address].length ===1) return this.data[address]
    if(this.data[address]){
      for(let i = 0 ; i < this.data[address].length ; i++){
      let subArr = this.data[address][i]
        if(subArr[0]  === key) {
        return subArr
        }
      }
    }else{
    return null
    }
  };

  keys(){
    let result = [];
    let arr = this.data;
    ///arr:::>>[ , , [[],[]] ,[ [], [] ],  []]
    for(let i = 0 ; i < arr.length ; i++){
      let subArr = arr[i]
      if(!subArr){
        continue;
      }else{
        for(let j = 0 ; j < subArr.length ; j++){
          result.push(subArr[j][0])
        }
      }
    } return result;
  }

    values(){
    let result = [];
    let arr = this.data
    ///arr:::>>[ , , [[],[]] ,[ [], [] ],  []]
    for(let i = 0 ; i < arr.length ; i++){
      let subArr = arr[i]
      if(!subArr){
        continue;
      }else{
        for(let j = 0 ; j < subArr.length ; j++){
          result.push(subArr[j][1])
        }
      }
    } return result;
  }
  
}
const myHashTable = new HashTable(50);
// const meHashTable = new HashTable(2);
// console.log(myHashTable._hash('grapes'))
myHashTable.set('grapes',102555);
myHashTable.set('apples',100000);
myHashTable.set('mango',150);
myHashTable.set('guava',250);
myHashTable.set('avocado',1000);
myHashTable.set('oranges',500);
myHashTable.set('bananas',400);
console.log(myHashTable)
console.log(myHashTable.keys())
console.log(myHashTable.values())
console.log(myHashTable.get('guava'))

class List<T> {
  constructor(public list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

// 인스턴스 객체
const numberList = new List([1, 2, 3]);
console.log(numberList); //NumberList { list: [ 1, 2, 3 ] }

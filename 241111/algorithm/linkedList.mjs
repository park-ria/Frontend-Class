class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);

// node1.next = node2;
// node2.next = node3;

// console.log(node1.data); // 1
// console.log(node1.next.data); // 2
// console.log(node1.next.next.data); // 3
// node linkedList.mjs

class LinkedList {
  constructor() {
    // 생성자
    this.head = null;
    this.count = 0;
  }

  // 1. 연결리스트를 활용해서 UI로 모든 데이터를 출력하는 추상 자료형
  // printAll()
  printAll() {
    let currentNode = this.head;
    let text = "[";

    while (currentNode !== null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode !== null) {
        text += ", ";
      }
    }

    text += "]";
    console.log(text);
  }

  // 2. 연결리스트를 활용해서 UI에 출력중인 모든 데이터를 제거하는 추상자료형
  // clear()
  clear() {
    this.head = null;
    this.count = 0;
  }

  // 메서드 함수
  // 3. 연결리스트를 활용해서 특정 인덱스 값을 삽입하는 추상자료형
  // insertAt(index, data)
  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다!");
    }

    let newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.count++;
  }

  // 6. 연결리스트를 활용해서 마지막 인덱스 값을 추가하는 추상자료형
  // insertLast()
  insertLast(data) {
    this.insertAt(this.count, data);
  }

  // 4. 연결리스트를 활용해서 특정 인덱스값을 제거하는 추상자료형
  // deleteAt(index)
  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("제거할 수 없습니다!");
    }

    let currentNode = this.head;

    if (index === 0) {
      let deletedNode = this.head;
      this.head = this.head.next;
      this.count--;
      return deletedNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      let deletedNode = currentNode;
      currentNode.next = currentNode.next.next;
      this.count--;
      return deletedNode;
    }
  }

  // 5. 연결리스트를 활용해서 마지막 인덱스값을 제거하는 추상자료형
  // deleteLast()
  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  // 7. 연결리스트를 활용해서 특정 인덱스 값을 읽어오는 추상자료형
  // getNodeAt(index)
  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

export { Node, LinkedList };

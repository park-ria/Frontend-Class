class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    // 생성자
    this.head = null;
    this.tail = null;
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
      if (this.head !== null) {
        this.head.prev = newNode;
      }
      this.head = newNode;
    } else if (index === this.count) {
      newNode.next = null;
      newNode.prev = this.tail;
      this.tail.next = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      newNode.prev = currentNode;
      currentNode.next = newNode;
      newNode.next.prev = newNode;
    }

    if (newNode.next === null) {
      this.tail = newNode;
    }
    this.count++;
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
      if (this.head.next === null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }

      this.count--;
      return deletedNode;
    } else if (index === this.count - 1) {
      let deletedNode = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.count--;
      return deletedNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      let deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      currentNode.next.prev = currentNode;
      this.count--;
      return deletedNode;
    }
  }

  // 5. 연결리스트를 활용해서 마지막 인덱스값을 제거하는 추상자료형
  // deleteLast()
  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  // 6. 연결리스트를 활용해서 마지막 인덱스 값을 추가하는 추상자료형
  // insertLast()
  insertLast(data) {
    this.insertAt(this.count, data);
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

export { Node, DoublyLinkedList };

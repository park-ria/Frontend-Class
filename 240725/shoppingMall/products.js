const products = {
  data: [
    {
      id: Date.now(),
      name: "Cup",
      price: 9900,
      category: "life",
      img: "./img/cup.jpg",
    },
    {
      id: Date.now() + 1,
      name: "Mouse",
      price: 15000,
      category: "it",
      img: "./img/mouse.jpg",
    },
    {
      id: Date.now() + 2,
      name: "Keyboard",
      price: 21000,
      category: "it",
      img: "./img/keyboard.jpg",
    },
    {
      id: Date.now() + 3,
      name: "Book",
      price: 19900,
      category: "life",
      img: "./img/book.jpg",
    },
    {
      id: Date.now() + 4,
      name: "Pen",
      price: 1500,
      category: "book",
      img: "./img/pen.jpg",
    },
  ],
};

// 반드시 출력하겠다는 표시를 해줘야 함!!!!!!!!!!!!!!!!!!
export default products;

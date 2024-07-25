//import products from "./products.js";
//products.js에서 데이터를 가지고 오는데 products란 이름으로 가져온다.

const productInfo = "./products.json";
// 비동기방식 데이터 가져오는데 fetch가 강력
fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    let idCounter = Date.now();
    const products = {
      data: data.data.map((item) => ({
        ...item, // 기존 item 값 그대로 가져옴
        id: idCounter++,
      })),
      // 기존 배열에 id라는 값을 추가했기 때문에 앞에 소괄호 들어감!! 그냥 중괄호가 있으면 함수였을 텐데 함수가 아니라 객체형태임을 나타내므로 소괄호가 필요했음!!!!!!!!!!!!!!!!!
    };

    // Making Items
    const createItem = (product) => {
      const ul = document.querySelector("ul");

      const li = document.createElement("li");
      const img = document.createElement("img");
      const attr = document.createAttribute("src");
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const span = document.createElement("span");

      li.id = product.id;

      const price = new Intl.NumberFormat("ko-kr", {
        style: "currency",
        currency: "KRW",
      }).format(product.price);

      h3.className = "name";
      h3.innerText = product.name;

      span.className = "price";
      span.innerText = price;

      attr.value = product.img;
      img.setAttributeNode(attr);
      div.append(h3, span);
      li.append(img, div);
      ul.appendChild(li);
    };

    // Removing Items : 중복해서 쌓이는 아이템을 제거하기 위한 목적
    const removeItems = () => {
      const items = document.querySelectorAll("li");
      items.forEach((item) => {
        item.remove();
      });
    };

    // Importing Items
    const importData = () => {
      products.data.map((product) => {
        createItem(product);
      }); // 배열의 형태를 바꾸지 않고 인자 값으로 보내는 역할만 했으므로 중괄호 밖에 소괄호를 안썼음!!!
    };

    importData();

    // Button Events
    const newlisting = document.querySelector(".newlisting");
    const sortNew = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        // 오름차순
        // return a.id - b.id;

        // 내림차순
        return b.id - a.id;
      });

      // 기존 li 삭제
      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    newlisting.addEventListener("click", sortNew);

    // Ascending price
    const asceButton = document.querySelector(".ascending");
    const sortAsce = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return a.price - b.price;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    asceButton.addEventListener("click", sortAsce);

    // Descending price
    const descButton = document.querySelector(".descending");
    const sortDesc = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return b.price - a.price;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    descButton.addEventListener("click", sortDesc);

    // Search
    const searchBar = document.querySelector(".searchBar");
    searchBar.addEventListener("input", () => {
      const keyword = searchBar.value.toLowerCase(); // 소문자로 바꿈
      if (keyword === "") {
        removeItems();
        importData();
      } else {
        const filtered = products.data.filter((product) => {
          return product.name.toLowerCase().includes(keyword);
        }); //include 앞에 나온 객체가 있으면 true 없으면 false

        removeItems();

        filtered.forEach((product) => {
          createItem(product);
        });
      }
    }); //input은 어떤 값이 들어온다면

    // Select Event
    const select = document.querySelector("select");
    const selectCategory = (e) => {
      const selectedIndex = e.target.options.selectedIndex;
      const value = e.target.options[selectedIndex].value;
      const filtered = products.data.filter((product) => {
        //return product.category.includes(value);
        return product.category === value;
      });

      removeItems();

      filtered.forEach((product) => {
        createItem(product);
      });
    };

    select.addEventListener("change", selectCategory);
  })
  .catch((error) => {
    console.log(error);
  });

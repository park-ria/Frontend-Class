const productInfo =
  "https://my-json-server.typicode.com/park-ria/oliveyoung-fake/db";

fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    let idCounter = Date.now();
    const products = {
      data: data.data.map((item) => ({
        ...item,
        id: idCounter++,
      })),
    };

    const params = new URLSearchParams(window.location.search); //쿼리값을 찾아와서 사용할 수 있게 함 //params는 붕어빵 틀에서 나온 인스턴스가 됨 -> 객체가 됨
    const category = params.get("category");
    const name = params.get("name");
    const product = products.data.find(
      (product) => product.category === category && product.name === name
    );

    const price = new Intl.NumberFormat("ko-kr", {
      //style: "currency",
      currency: "KRW",
    }).format(product.price);

    if (product) {
      const productDetailDiv = document.querySelector("#product-detail");
      productDetailDiv.innerHTML = `
        <div class="product-category">
          <h3>현재 카테고리 ${product.category} > ${product.name}</h3>
        </div>
        <div class="product-img">
          <img src="${product.img}" alt="${product.name}" />
        </div>
        <div class="product-info">
          <h1>${product.name}</h1>
          <p>Price: ${price}원</p>
        </div>
        <button>장바구니 이동</button>
      `;
    } else {
      const productDetailDiv = document.querySelector("#product-detail");
      productDetailDiv.innerText = "존재하지 않는 상품입니다!";
    }
  })
  .catch((error) => {
    console.log(error);
  });

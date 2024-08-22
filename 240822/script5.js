// https://reqres.in/api/products/10
// 1. 위 URL주소를 참고해서 json 데이터를 XMLHttpRequest를 활용 후 웹브라우저 화면에 상품정보를 출력하세요!!!
// 2. UI는 자유

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/products/10");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const product = JSON.parse(xhr.responseText);
    //console.log(product);
    const result = document.querySelector("#result");
    document.body.style = `background:${product.data.color}`;
    result.innerHTML = `
        <p>상품명: ${product.data.name}</p>
        <p>생산년도 : ${product.data.year}</p>
        <p>상품색상 : ${product.data.color}</p>
    `;
  }
};

const orderButton = document.querySelector("#order");
const orderInfo = document.querySelector(".orderInfo");

orderButton.addEventListener("click", () => {
  const newH = document.createElement("h2");
  const title = document.querySelector(".desc > h2");
  const textNode = document.createTextNode(title.innerText);

  newH.style.fontSize = "2rem";
  newH.style.color = "crimson";

  const newImg = document.createElement("img");
  const srcNode = document.createAttribute("src");
  srcNode.value =
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ae86c36a-36db-4482-848e-a5a8a4562b97/%EC%A4%8C-%EB%B3%B4%EB%A9%94%EB%A1%9C-5-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-OE1fMsBo.png";

  newImg.setAttributeNode(srcNode);

  newH.appendChild(textNode);
  orderInfo.appendChild(newH);
  orderInfo.appendChild(newImg);
});

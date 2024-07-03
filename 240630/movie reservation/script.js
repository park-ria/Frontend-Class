// card image change
const items = document.querySelectorAll("#card_items li");
items.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateY(-20px)";
    item.style.transition = "all 0.3s";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateY(0)";
  });
});

// background image change
const bgImgs = ["bg0.jpg", "bg1.jpg", "bg2.jpeg", "bg3.jpg", "bg4.jpg"];
const bgImg = document.querySelector("#background_img");
bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(0,0,0,0.7)), url(./img/${bgImgs[0]})`;

const topContents = document.querySelector("#top_contents");
const contentTit = topContents.querySelector(".top_contents_title");
const contentDesc = topContents.querySelector(".top_contents_desc");

const cardItemsDetail = document.querySelectorAll(".card_items_detail");

fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const [firstData, ...otherData] = jsonData.data;

    contentTit.innerText = firstData.title;
    contentDesc.innerText = firstData.description;

    items.forEach((item, index) => {
      cardItemsDetail[index].querySelector("p").innerText =
        jsonData.data[index].name;
      cardItemsDetail[index].querySelector(".card_items_score").innerHTML =
        jsonData.data[index].score;
      cardItemsDetail[index].querySelector(".card_items_book").innerHTML =
        jsonData.data[index].book;

      item.addEventListener("click", (e) => {
        console.log(e);
        e.preventDefault();

        const { title, description } = jsonData.data[index];
        bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgb(0,0,0,0.7)), url(./img/${bgImgs[index]})`;
        contentTit.innerText = title;
        contentDesc.innerText = description;
      });
    });
  });

// drop detail nav
const gnbLi = document.querySelectorAll(".topNav > li");
gnbLi.forEach((li) => {
  li.addEventListener("mouseenter", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = lnb.scrollHeight + "px";
      lnb.style.opacity = "1";
      aTag.classList.add("active");
    }
  });

  li.addEventListener("mouseleave", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = 0;
      lnb.style.opacity = "1";
      aTag.classList.remove("active");
    }
  });
});

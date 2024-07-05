const changePhone1 = () => {
  const phone1Value = document.querySelector("#phone1").value;
  if (phone1Value.length === 3) {
    document.querySelector("#phone2").focus();
  }
};

const changePhone2 = () => {
  const phone2Value = document.querySelector("#phone2").value;
  if (phone2Value.length === 4) {
    document.querySelector("#phone3").focus();
  }
};

const changePhone3 = () => {
  const phone1Value = document.querySelector("#phone1").value;
  const phone2Value = document.querySelector("#phone2").value;
  const phone3Value = document.querySelector("#phone3").value;
  if (
    phone1Value.length === 3 &&
    phone2Value.length === 4 &&
    phone3Value.length === 4
  ) {
    document.querySelector("#token_button").removeAttribute("disabled");
  }
};

const getProduct = (searchQuery) => {
  return async (dispatch) => {
    //const searchQuery = query.get("q") || "";
    //const url = `http://localhost:3000/products?q=${searchQuery}`;
    const url = `https://my-json-server.typicode.com/park-ria/musinsamall/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    //setProductList(data);

    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
};

export const productAction = { getProduct };

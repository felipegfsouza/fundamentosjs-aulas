function sumNumbers() {
  let result = 1 + 1;
  if (result == 2) {
    successCallback();
  } else {
    errorCallback();
  }

  function successCallback() {
    console.log("deu certo 2 ");
  }

  // function errorCallback() {
  console.log("Opa deu ruim :(");
}

sumNumbers();

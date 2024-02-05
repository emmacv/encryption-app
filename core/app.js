const KEY = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};
/**
  - Debe funcionar solo con letras minúsculas
  - No deben ser utilizados letras con acentos ni caracteres especiales
  - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
 */
const encryptOrDecryptMessage = (event) => {
  event.preventDefault();
  const form = event.target;

  const { switch: switchButton, message } = form.elements;
  const { value: input } = message;

  if (switchButton.checked) encrypt(input);
  else decrypt(input);
};

const encrypt = (message) => {
  console.log(message);
};

const decrypt = () => {};

const verifyMessage = (message) => {
  console.log('message')
}

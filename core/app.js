const KEY = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

// Special thanks  to @JorgeLReyes for this regex
const REGEX_VALIDATION = /^[a-z\s.0-9]+$/;
const { "action-button": actionButton, message: messageArea } =
  document.forms["message-form"].elements;
const outputMessage = document.getElementById("output-text");
let lexicalError = false;

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

  (switchButton.checked ? encrypt : decrypt)(input);
};

const encrypt = (message) => {
  const result = message.split('').map(letter => KEY[letter] ?? letter).join('');

  outputMessage.value = result;
};

const decrypt = () => {};

const verifyMessage = (message) => {
  if (!REGEX_VALIDATION.test(message)) {
    actionButton.disabled = true;
    messageArea.classList.add("error");

    throw Error("Message not valid!");
  }

  actionButton.disabled = false;
  messageArea.classList.remove("error");
};

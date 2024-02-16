const KEY = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

// Special thanks to @JorgeLReyes for this regex
const REGEX_VALIDATION = /^[a-z\s.0-9]+$/;
const { "action-button": actionButton, message: messageArea } =
  document.forms["message-form"].elements;
const outputMessage = document.getElementById("output-text");
const noMessageArea = document.getElementsByClassName("section__no-input")[0];
const messageOutputArea = document.getElementsByClassName("section__message-output")[0];

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

  encryptDecryptMessage(input, switchButton.checked);
};

const encryptDecryptMessage = (message, shouldEncrypt) => {
  const result = Object.entries(KEY).reduce((curr, [key, value]) => {
    if (shouldEncrypt) return curr.replaceAll(key, value);

    return curr.replaceAll(new RegExp(`${value}`, "g"), key);
  }, message);

  outputMessage.value = result;

  noMessageArea.classList.add("is-hidden");
  messageOutputArea.classList.remove("is-hidden");
};

const verifyMessage = (message) => {
  if (REGEX_VALIDATION.test(message)) {
    actionButton.disabled = false;
    messageArea.classList.remove("error");

    return;
  }

  actionButton.disabled = true;

  if (message.length > 0) {
    console.log(message.length);
    messageArea.classList.add("error");

    throw Error("Message not valid!");
  }
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(outputMessage.value);
};

const moveOutputToMsgArea = () => {
  messageArea.value = outputMessage.value;
};

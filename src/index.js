import rosetta from "rosetta";

const i18n = rosetta({
  en: {
    hello: "Hello {{name}}!",
    nested: {
      key: "Value read from a nested object",
    },
  },
  es: {
    hello: "Hola {{name}}!",
    nested: {
      key: "Valor leído desde un objeto anidad",
    },
  },
  pl: {
    hello: "Witaj {{name}}!",
    nested: {
      key: "Wartość odczytany z zagnieżdzonego obiekt",
    },
  },
});

i18n.locale("en");

const header = document.createElement("div");

header.innerHTML = `<h1>${i18n.t("hello", { name: "Marcin" })}</h1><p>${i18n.t(
  "nested.key"
)}</p>`;

document.body.appendChild(header);

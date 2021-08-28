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

const header = document.createElement("div");

function displayTranslated(language) {
  i18n.locale(language);
  header.innerHTML = `<h1>${i18n.t("hello", {
    name: "Marcin",
  })}</h1><p>${i18n.t("nested.key")}</p>`;
}

displayTranslated("en");

const polish = document.createElement("button");
polish.innerHTML = "Polish";
polish.addEventListener("click", () => displayTranslated("pl"));

const spanish = document.createElement("button");
spanish.innerHTML = "Spanish";
spanish.addEventListener("click", () => displayTranslated("es"));

document.body.appendChild(header);
document.body.appendChild(polish);
document.body.appendChild(spanish);

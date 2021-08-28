import rosetta from "rosetta";

const availableLanguages = ["en", "es", "pl"];
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

function pickLanguage() {
  if (navigator?.languages && navigator.languages.length > 1) {
    for (let code of navigator.languages) {
      if (availableLanguages.includes(code.substr(0, 2))) {
        return code.substr(0, 2);
      }
    }
  }

  return availableLanguages[0];
}

const header = document.createElement("div");

function displayTranslated(language) {
  i18n.locale(language);
  header.innerHTML = `<h1>${i18n.t("hello", {
    name: "Marcin",
  })}</h1><p>${i18n.t("nested.key")}</p>`;
}

displayTranslated(pickLanguage());

const english = document.createElement("button");
english.innerHTML = "English";
english.addEventListener("click", () => displayTranslated("es"));

const polish = document.createElement("button");
polish.innerHTML = "Polish";
polish.addEventListener("click", () => displayTranslated("pl"));

const spanish = document.createElement("button");
spanish.innerHTML = "Spanish";
spanish.addEventListener("click", () => displayTranslated("es"));

document.body.appendChild(header);
document.body.appendChild(english);
document.body.appendChild(polish);
document.body.appendChild(spanish);

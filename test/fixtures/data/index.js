const data = {
  de: {
    text: "Hallo Welt!",
  },
  en: {
    text: "Hello World!",
  },
};

const dataWithMissingDeParts = {
  de: {
    text: "Hallo Welt!",
    array2: ["Hallo"],
    array3: ["Hallo", "Ho"],
    obj2: {
      text: "Hallo Welt!",
      array: ["Hallo"],
      obj: {
        text2: "Hallo Welt!",
      },
    },
  },
  en: {
    text: "Hello World!",
    text2: "Hello World!",
    array: ["Hello", "Hi"],
    array2: ["Hello", "Hi"],
    array3: ["Hello", "Hi"],
    obj: {
      text: "Hello World!",
      text2: "Hello World!",
      array: ["Hello", "Hi"],
      obj: {
        text: "Hello World!",
        text2: "Hello World!",
        array: ["Hello", "Hi"],
      },
    },
    obj2: {
      text: "Hello World!",
      text2: "Hello World!",
      array: ["Hello", "Hi"],
      obj: {
        text: "Hello World!",
        text2: "Hello World!",
        array: ["Hello", "Hi"],
      },
    },
  },
};

export { data, dataWithMissingDeParts };

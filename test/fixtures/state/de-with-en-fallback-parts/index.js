const deWithEnFallbackParts = {
  text: "Hallo Welt!",
  text2: "Hello World!",
  array: ["Hello", "Hi"],
  array2: ["Hallo"],
  array3: ["Hallo", "Ho"],
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
    text: "Hallo Welt!",
    text2: "Hello World!",
    array: ["Hallo"],
    obj: {
      text: "Hello World!",
      text2: "Hallo Welt!",
      array: ["Hello", "Hi"],
    },
  },
};

export { deWithEnFallbackParts };

import pkg from "./package.json";

const libName = pkg.name;

export default {
  dest: "./docs",
  files: "./docz/**/*.mdx",
  base: `/${libName}/`,
  menu: ["Introduction", "Installation", "Functions"],
};

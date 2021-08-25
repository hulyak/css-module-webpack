import styles from "./style.css";

console.log(styles);

const element = document.querySelector(".element");

element.innerHTML = `<div class="${styles.page}">
     <p class="${styles.text}">CSS Modules Webpack</p>
   </div>`;

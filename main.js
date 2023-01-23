const task = document.getElementById("task");
const button = document.querySelector("button");
const input = document.querySelector("input");
const form = document.querySelector("form");
const container = document.querySelector("section");





container.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "icon-trash icon":
      eo.target.parentElement.parentElement.remove();
      break;

      case "icon-angry2 icon":
        eo.target.style.display = "none";
        eo.target.parentElement.parentElement
          .getElementsByClassName("task-text")[0]
          .classList.add("finish");
    
        const haert = `   <span class="icon-heart icon"></span>    `;
        eo.target.parentElement.innerHTML += haert;
      break;

      case "icon-heart icon":
        eo.target.style.display = "none";
        eo.target.parentElement.parentElement
          .getElementsByClassName("task-text")[0]
          .classList.remove("finish");
    
        const angry2 = `   <span class="icon-angry2 icon"></span>    `;
        eo.target.parentElement.innerHTML += angry2;
      break;

      case "icon-star icon":
        eo.target.classList.add("starColor");
        container.prepend(eo.target.parentElement);
      break;

      case "icon-star icon starColor":
        eo.target.classList.remove("starColor");
        container.append(eo.target.parentElement);
      break;
  
    default:
      break;
  }
  
})

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const NewTask = `

  <div id="task" class="task">
      <span class="icon-star icon"></span>
      <p lang="ar" class="task-text">
        ${input.value}
      </p>
      <div>
        <span class="icon-trash icon"></span>
        <span class="icon-angry2 icon"></span>

      </div>
      </div>
  
  `;
  container.innerHTML += NewTask;

  input.value = "";
});

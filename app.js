const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover); // курсор мыши наведен на элемент при перетаскивании
  placeholder.addEventListener("dragenter", dragenter); // перетаскиваемый элемент достигает конечного элемента
  placeholder.addEventListener("dragleave", dragleave); // курсор мыши покидает пределы перетаскиваемого элемента
  placeholder.addEventListener("drop", dragdrop); // происходит drop элемента
}

item.addEventListener("dragstart", dragstart); // начинаем перетаскивать элемент
item.addEventListener("dragend", dragend); // заканчиваем перетаскивать элемент

function dragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0); // убираем ползунок из текущей колонки
}

function dragend(event) {
  event.target.classList.remove("hold", "hide"); // при отпускании добавляем ползунок
}

function dragover(event) {
  event.preventDefault(); // убираем стандартное поведение (иначе не отпустить ползунок)
}

function dragenter(event) {
  event.target.classList.add("hovered");
}

function dragleave(event) {
  event.target.classList.remove("hovered");
}

function dragdrop(event) {
  event.target.classList.remove("hovered");
  event.target.append(item); // добавляем ползунок в текущий placeholder
}

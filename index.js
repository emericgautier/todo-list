const form = document.querySelector("form");

// Add element
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // réccupérer ce qu'il y a de taper dans l'input, en récupérant l'ID
  console.log(item.value);
  // injecter la valeur dans le <ul>, en créant une balise <li>
  list.innerHTML += `<li>${item.value}</li>`;

  // remettre à zéro
  item.value = "";
});

// remove element
list.addEventListener("click", (e) => {
  //   console.log(e.target);
  //   e.target.remove();
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
});

// créer un form pour taper les todos

// Ajouter sur le dom ce qui est tapé dans l'input à la validation du form
// monInput.value (ce qui est tapé dans l'input)

// Supprimer un todo lorsque l'on click dessus (.remove())

// stocker dans le local storage la liste

// consulter le local storage au lancement de l'application pour rajouter les todos

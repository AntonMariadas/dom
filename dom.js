// 1ere étape récupérer un élement

// document.querySelectorAll() ==> récupère tout les éléments du selecteur
const paragraphes = document.querySelectorAll('.paragraphe');
console.log(paragraphes);

// document.querySelector() ==> récupère le premier élément du selecteur
const titre = document.querySelector('#titre-principal');
console.log(titre);

// 2ème: editer le contenu
titre.innerHTML = 'Hello world';

// 3ème: changer le style ou ajouter une classe
titre.style.backgroundColor = 'red';
titre.classList.add('vert');
titre.classList.remove('vert');

// 4ème: Events Listener
const actionClick = (event) => {
  console.log('click');
  const element = event.target;
  console.log(element);
  element.style.backgroundColor = 'blue';
  // element.remove()
}

titre.addEventListener('click', actionClick);
// VariableDeLElement.addEventListener(typeEvenement, functionAExecuter)


// for (const paragraphe of paragraphes) {
//   paragraphe.style.color = 'blue';
// }

// const changeCouleur = (element) => {
//   if (element.style.color === 'blue') {
//     element.style.color = 'red'
//   } else {
//     element.style.color = 'blue'
//   }
// }

// const alternerCouleur = (event) => {
//   const elementClique = event.target;
//   changeCouleur(elementClique);
// }

// titre.addEventListener("click", alternerCouleur);

// for (const paragraphe of paragraphes) {
//   paragraphe.addEventListener("click", alternerCouleur);
// }



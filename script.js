/*MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.*/

const teamMembers = [
  {
    name: "Wayne",
    surname: "Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela",
    surname: "Caroll",
    role: "Chief Editor",
    image: "../angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter",
    surname: "Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela",
    surname: "Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott",
    surname: "Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara",
    surname: "Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg ",
  },
];

/* 
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
 */

for (let i = 0; i < teamMembers.length; i++) {
  console.log(`Name: ${teamMembers[i].name} ${teamMembers[i].surname}`);
  console.log(`Role: ${teamMembers[i].role}`);
  console.log(`Image: ${teamMembers[i].image}`);
}

/*MILESTONE 2:

Stampare le stesse informazioni su DOM sottoforma di stringhe*/

const teamContainer = document.getElementById("team-container");

for (let i = 0; i < teamMembers.length; i++) {
  const memberDiv = document.createElement("div");
  memberDiv.innerHTML = `
    <img src="${teamMembers[i].image}">
    <h2>${teamMembers[i].name} ${teamMembers[i].surname}</h2>
    <p>${teamMembers[i].role}</p>
  `;
  teamContainer.appendChild(memberDiv);
}

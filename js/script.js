//Vado a creare la mia arrey con il nome,la professione e le immagini
const membriTeam = [
  {//indice 0
    name : 'Wayne',
    role : 'Chief Editor',
    img : 'img/angela-caroll-chief-editor.jpg'
  },
  {//indice 1
    name : 'Walter Gordon',
    role : 'Office Manager',
    img : 'img/barbara-ramos-graphic-designer.jpg'
  },
  {//indice 2
    name : 'Walter Gordon',
    role : 'Office Manager',
    img : 'img/walter-gordon-office-manager.jpg'
  },
  {//indice 3
    name : 'Angela Lopez',
    role : 'Social Media Manager',
    img : 'img/angela-lopez-social-media-manager.jpg'
  },
  {//indice 4
    name : 'Scott Estrada',
    role : 'Developer',
    img : 'img/scott-estrada-developer.jpg'
  },
  {//indice 5
    name : 'Barbara Ramos',
    role : 'Graphic Designer',
    img : 'img/barbara-ramos-graphic-designer.jpg'
  },

]
console.log(membriTeam) //Vado a stampare l'Array

for (i = 0; i < membriTeam.length; i++){
  let membro = membriTeam[1];

  for (let key in membro){

  }

  const teamContainer = document.querySelector(".team-container")
  let allCard = `<div class="team-card">
                  <div class="card-image">
                     <img src="${membro.img}" alt="Wayne Barnett" />
                  </div>
                  <div class="card-text">
                    <h3>${membro.name}</h3>
                    <p>${membro.role}</p>
                  </div>
                </div>`;

  teamContainer.innerHTML += allCard;
  console.log(membro.img)
  console.log(membro.name)
  console.log(membro.role)
}

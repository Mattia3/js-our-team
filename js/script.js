//Vado a creare la mia arrey con il nome,la professione e le immagini
const membriTeam = [
  {//indice 0
    name : 'Wayne Barnett',
    role : 'Founder & CEO',
    image : 'img/wayne-barnett-founder-ceo.jpg'
  },
  {//indice 1
    name : 'Angela Caroll',
    role : 'Chief Editor',
    image  : 'img/angela-caroll-chief-editor.jpg'
  },
  {//indice 2
    name : 'Walter Gordon',
    role : 'Office Manager',
    image : 'img/walter-gordon-office-manager.jpg'
  },
  {//indice 3
    name : 'Angela Lopez',
    role : 'Social Media Manager',
    image  : 'img/angela-lopez-social-media-manager.jpg'
  },
  {//indice 4
    name : 'Scott Estrada',
    role : 'Developer',
    image : 'img/scott-estrada-developer.jpg'
  }, 
  {//indice 5
    name : 'Barbara Ramos',
    role : 'Graphic Designer',
    image : 'img/barbara-ramos-graphic-designer.jpg'
  },

]
console.log(membriTeam) //Vado a stampare l'Array
const teamContainer = document.querySelector(".team-container")
for (i = 0; i < membriTeam.length; i++){
  let membro = membriTeam[i];

  for (let key in membro){

  }

  
  let allCard = `<div class="team-card">
                  <div class="card-image">
                     <img src="${membro.image}" alt="Wayne Barnett" />
                  </div>
                  <div class="card-text">
                    <h3>${membro.name}</h3>
                    <p>${membro.role}</p>
                  </div>
                </div>`;

  teamContainer.innerHTML += allCard;
  console.log(membro.image)
  console.log(membro.name)
  console.log(membro.role)
}

const buttonAdd = document.getElementById("addMemberButton")
let nameInput = document.getElementById("name")
let roleInput = document.getElementById("role")
let imgInput = document.getElementById("image")

buttonAdd.addEventListener("click", function(){
  nameInput.value
  roleInput.value
  imgInput.value
  
  let inputStart = `<div class="team-card">
  <div class="card-image">
     <img src="${imgInput.value}" alt="${imgInput.value}" />
  </div>
  <div class="card-text">
    <h3>${nameInput.value}</h3>
    <p>${roleInput.value}</p>
  </div>
</div>`;

teamContainer.innerHTML += inputStart;
console.log(nameInput)
console.log(imgInput)
console.log(roleInput)
})


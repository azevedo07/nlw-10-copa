function createGame(player1, hour, player2) {
  return `
    <li>
     <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
     <strong>${hour}</strong>
     <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#card").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("south-korea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("south-korea", "11:00", "portugal") +
      createGame("ghana", "11:00", "uruguay") +
      createGame("cameroon", "15:00", "brazil")
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("brazil", "08:00", "cameroon") +
      createGame("hungary", "13:00", "argentina") +
      createGame("colombia", "08:00", "japan")
  ) +
  createCard(
    "23/11", 
    "quarta",
    createGame("botswana", "10:00", "burundi")+
     createGame("honduras", "12:00", "antigua-and-barbuda")+
    createGame("cook-islands", "21:00", "kazakhstan")
  )
  
  

   

document.addEventListener('DOMContentLoaded',()=>{
  const cardArray = [
    {
      name: 'hashira',
      img: 'images/hashira.png'
    },
    {
      name: 'juvia',
      img: 'images/juvia.png'
    },
    {
      name: 'lucy',
      img: 'images/lucy.png'
    },
    {
      name: 'namikaze',
      img: 'images/namikaze.png'
    },
    {
      name: 'yagami',
      img: 'images/yagami.png'
    },
    {
      name: 'nezuko',
      img: 'images/nezuko.png'
    },
    {
      name: 'hashira',
      img: 'images/hashira.png'
    },
    {
      name: 'juvia',
      img: 'images/juvia.png'
    },
    {
      name: 'lucy',
      img: 'images/lucy.png'
    },
    {
      name: 'namikaze',
      img: 'images/namikaze.png'
    },
    {
      name: 'yagami',
      img: 'images/yagami.png'
    },
    {
      name: 'nezuko',
      img: 'images/nezuko.png'
    }
    
  ]
  cardArray.sort(()=>
    0.5-Math.random()
  )
  const grid = document.querySelector('.grid')
  const display=document.querySelector('#result');
  let cardChosen=[]
  let cardIdChosen=[];
  let cardsWon=[];
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }
  function isMatch(){
    const cards=document.querySelectorAll('img');
    const firstId=cardIdChosen[0];
    const secondId=cardIdChosen[1];
    if(firstId==secondId){
      alert("you choose the same card!Try Again");
      cards[firstId].setAttribute('src','images/blank.png');
      cards[secondId].setAttribute('src','images/blank.png');

    }else if(cardChosen[1]==cardChosen[0]){
      alert("you have found match "+cardChosen[0]+"!!!");
      cards[firstId].setAttribute('src','images/white.png');
      cards[secondId].setAttribute('src','images/white.png');
      cards[firstId].removeEventListener('click',flipCard);
      cards[secondId].removeEventListener('click',flipCard);
      cardsWon.push(cardChosen);

    }else{
      alert("Incorrect Match!Try Again");
      cards[firstId].setAttribute('src','images/blank.png');
      cards[secondId].setAttribute('src','images/blank.png');
    }
    display.textContent=cardsWon.length;
    if(cardsWon.length==cardArray.length/2){
      display.textContent="Congratulations you have found all the anime matches"
    }
    cardChosen=[];
    cardIdChosen=[];

  }
  function flipCard(){
    let cardId=this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardIdChosen.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardChosen.length==2){
      setTimeout(isMatch,500);
    }
    
  }
  createBoard();
})

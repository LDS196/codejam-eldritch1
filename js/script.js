import ancientsData from '../data/ancients.js';
//import difficulties from '../data/difficulties.js';
import greencardsData from '../data/mythicCards/green/index.js';
import browncardsData from '../data/mythicCards/brown/index.js';
import bluecardsData from '../data/mythicCards/blue/index.js';
//
//console.log(greencardsData)
//console.log(browncardsData)
//console.log(bluecardsData)

let numAcients;
 let playCardsSrc;
let playCards = [];

function getRandomArrayElement(arr){
   return arr[Math.floor(Math.random()*arr.length)]
};

 function repeat(arr1, arr, sum){
   let card;
   while( arr1.length < sum ){
      card = getRandomArrayElement(arr);
         
         if (!arr1.includes(card)){
            arr1.push(card);
           
         }
   }
 };
 function repeat1(arr1, arr, sum){
   
   while( arr1.length < sum ){
      const num = Math.floor(Math.random()*arr.length)
      arr1.push(arr[num])
      arr.splice(num, 1)
   }
 };

function shuffleCards(){
   playCards.splice(0, playCards.length);
const greenPlayCards = [];
const brownPlayCards = [];
const bluePlayCards = [];

const sumGreenCards = +ancientsData[numAcients].firstStage.greenCards + +ancientsData[numAcients].secondStage.greenCards + +ancientsData[numAcients].thirdStage.greenCards
const sumBrownCards = +ancientsData[numAcients].firstStage.brownCards + +ancientsData[numAcients].secondStage.brownCards + +ancientsData[numAcients].thirdStage.brownCards
const sumBlueCards = +ancientsData[numAcients].firstStage.blueCards + +ancientsData[numAcients].secondStage.blueCards + +ancientsData[numAcients].thirdStage.blueCards

console.log(sumGreenCards) 
console.log(sumBrownCards) 
console.log(sumBlueCards )


repeat(greenPlayCards, greencardsData, sumGreenCards);
repeat(brownPlayCards, browncardsData, sumBrownCards);
repeat(bluePlayCards, bluecardsData, sumBlueCards);

//
const sumFirstStageGreenCards = ancientsData[numAcients].firstStage.greenCards;
const sumFirstStageBrownCards = ancientsData[numAcients].firstStage.brownCards;
const sumFirstStageBlueCards = ancientsData[numAcients].firstStage.blueCards;

const firstStageGreen = [];
const firstStageBrown = [];
const firstStageBlue = [];

repeat1(firstStageGreen, greenPlayCards, sumFirstStageGreenCards);
repeat1(firstStageBrown, brownPlayCards, sumFirstStageBrownCards);
repeat1(firstStageBlue, bluePlayCards, sumFirstStageBlueCards);
//
const sumSecondStageGreenCards = ancientsData[numAcients].secondStage.greenCards;
const sumSecondStageBrownCards = ancientsData[numAcients].secondStage.brownCards;
const sumSecondStageBlueCards = ancientsData[numAcients].secondStage.blueCards;

const secondStageGreen = []
const secondStageBrown = []
const secondStageBlue = []

repeat1(secondStageGreen, greenPlayCards, sumSecondStageGreenCards);
repeat1(secondStageBrown, brownPlayCards, sumSecondStageBrownCards);
repeat1(secondStageBlue, bluePlayCards, sumSecondStageBlueCards);

//
const sumThirdStageGreenCards = ancientsData[numAcients].thirdStage.greenCards;
const sumThirdStageBrownCards = ancientsData[numAcients].thirdStage.brownCards;
const sumThirdStageBlueCards = ancientsData[numAcients].thirdStage.blueCards;

const thirdStageGreen = []
const thirdStageBrown = []
const thirdStageBlue = []
repeat1(thirdStageGreen, greenPlayCards, sumThirdStageGreenCards);
repeat1(thirdStageBrown, brownPlayCards, sumThirdStageBrownCards);
repeat1(thirdStageBlue, bluePlayCards, sumThirdStageBlueCards);


const firstStageCards = firstStageGreen.concat(firstStageBrown, firstStageBlue)
const secondStageCards = secondStageGreen.concat(secondStageBrown, secondStageBlue)
const thirdStageCards = thirdStageGreen.concat(thirdStageBrown, thirdStageBlue)

//

 const firstStageMix = firstStageCards.map(i =>[Math.random(), i]).sort().map(i => i[1]);
 const secondStageMix = secondStageCards.map(i =>[Math.random(), i]).sort().map(i => i[1]);
 const thirdStageMix = thirdStageCards.map(i =>[Math.random(), i]).sort().map(i => i[1]);

   playCards.splice(-1, 0, ...playCards.splice(-1, 1, firstStageMix))
   playCards.splice(-1, 0, ...playCards.splice(-1, 1, secondStageMix))
   playCards.splice(-1, 0, ...playCards.splice(-1, 1, thirdStageMix))
   playCardsSrc = firstStageMix.concat(secondStageMix, thirdStageMix)
currentCardPlay.src = " ";

treker();
};

const deck = document.querySelector('.deck');
const currentCardPlay  = document.querySelector('.current-card');

function showCard(){
   if ( playCards[0].length != 0){
   currentCardPlay.src = playCards[0][0].cardFace;
   playCards[0].splice(0, 1);
   treker();
   } else if (playCards[1].length != 0){
      currentCardPlay.src = playCards[1][0].cardFace;
      playCards[1].splice(0, 1);
      treker();
     
   } else if (playCards[2].length != 0){
      currentCardPlay.src = playCards[2][0].cardFace;
      //console.log(playCards[2])
      playCards[2].splice(0, 1);
      treker();
    
   } else deck.classList.remove('deck-active');
};
deck.addEventListener('click', showCard );
//
const ancientsImg = document.querySelectorAll('.ancients_img');
const difficultiesButton = document.querySelector('.difficulties_button');
const shuffleButton = document.querySelector('.shuffle_button');
/*
   ancientsImg.addEventListener('click', () => {
   ancientsImg.classList.add('ancients_img-active');
      difficultiesButton.classList.add('difficulties_button-active')
});
*/

ancientsImg.forEach(function(btn){
   btn.addEventListener('click', () => {
      btn.classList.add('ancients_img-active');
      difficultiesButton.classList.add('difficulties_button-active');
      if(btn.alt == 'Azathoth' ){
         numAcients = 0
      } else if (btn.alt == 'Cthulthu'){
         numAcients = 1
      } else if (btn.alt == 'IogSothoth'){
         numAcients = 2
      } else if  (btn.alt == 'ShubNiggurath'){
         numAcients = 3
      }
   });
})





difficultiesButton.addEventListener('click', () => {
   shuffleButton.classList.add('shuffle_button-active')
})

shuffleButton.addEventListener('click', () =>{
   shuffleCards();
   deck.classList.add('deck-active');
})

function treker(){
   const dot = document.querySelectorAll('.dot');
   dot[0].textContent = playCards[0].filter( card => card.color === 'green').length;
   dot[1].textContent = playCards[0].filter( card => card.color === 'brown').length;
   dot[2].textContent = playCards[0].filter( card => card.color === 'blue').length;

   dot[3].textContent = playCards[1].filter( card => card.color === 'green').length;
   dot[4].textContent = playCards[1].filter( card => card.color === 'brown').length;
   dot[5].textContent = playCards[1].filter( card => card.color === 'blue').length;

   dot[6].textContent = playCards[2].filter( card => card.color === 'green').length;
   dot[7].textContent = playCards[2].filter( card => card.color === 'brown').length;
   dot[8].textContent = playCards[2].filter( card => card.color === 'blue').length;
      
}

window.onload = () => {
  
  numbersLoop();
  clickOperator(sumcal,'+');
  clickOperator(divical,'/');
  clickOperator(mincal,'-');
  clickOperator(multical,'*');
  clickNumebr('decemelcal','.');


  ACcal.addEventListener('click', () => { calcu.value = ' ' })
  resultcal.addEventListener('click', () => { resultFunction()})
}

let stNumber;
let ndNumber;
let isStNumber = true;
let mathAction;
let siNdoperator = false;


function checkClicuNum() {

  if (isStNumber) { stNumber = calcu.value; }
  else {  ndNumber = calcu.value; calcu.value = ' '; calcu.value = ndNumber }

}

function clickOperator(operatorId, operatorAction) {
  operatorId.addEventListener('click', () => {checkClicuNum(); notNull(operatorAction)})
}

function notNull(operator){
  if(mathAction == null){
    
    mathAction = operator; calcu.value = operator; 
     isStNumber = false;
  }
  else {
    stNumber = resultFunction ();
    ndNumber = " "
    mathAction = operator;
  }
}

 function clickNumebr(numId, displayInput) {
  document.getElementById(numId).addEventListener("click", () => {
    calcu.value += displayInput;
    checkClicuNum();
  });
  
}

function numbersLoop(){
for (let i = 0; i < 10; i++) {
  clickNumebr('cal'+[i], [i]);
}
}

function resultFunction (){
  ndNumber = ndNumber.substr(1,);
  console.log(stNumber);
  console.log(mathAction);
  console.log(ndNumber);
  switch (mathAction) {
    case '+':
      calcu.value = +stNumber + +ndNumber
      break;
      case '-':
        calcu.value = +stNumber - +ndNumber
        break;
        case '/':
          calcu.value = +stNumber / +ndNumber
          break;
          case '*':
            calcu.value = +stNumber * +ndNumber
            break;
  
    default:
      break;
  }
}

















// // function messegeNum(num){
//     switch (num){

//         case 1:
//             messagebtn.innerHTML = 
//             break;
//         case 2:
//             messagebtn.innerHTML = 
//             break;
//         case 3:
//             messagebtn.innerHTML = 
//             break;
//         case 4:
//             messagebtn.innerHTML = 
//             break;
//         case 5:
//             messagebtn.innerHTML = 
//             break;
//         case 6:
//             messagebtn.innerHTML = 
//             break;
//         case 7:
//             messagebtn.innerHTML = 
//             break;
//         case 8:
//             messagebtn.innerHTML = 
//             break;
//             default:
//                 messagebtn.innerHTML = `n/v`
//     }
// }



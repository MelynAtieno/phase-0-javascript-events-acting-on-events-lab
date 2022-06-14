// Your code here
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

function moveDodgerRight(){
    const Rightside = dodger.style.left.replace("px", "")
    const left = parseInt(Rightside, 10)

    if (left>0){
        dodger.style.left = `${left+1}px`
    }
}
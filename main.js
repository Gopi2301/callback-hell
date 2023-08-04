import '/style.css';
const title= document.querySelector('.title');
const button=document.querySelector('.button');
let num = 10;

    function hell() {
      setTimeout(function() {
        less(num);
      }, 1000); // Delay of 1000ms (1 second)
    }

    function less(x) {
      num = num - 1;
      title.innerText = num;
      callBack(); // Call the callback function inside less()
    }

    function callBack() {
      if (num > 1) {
        hell();
      }
      if(num==1){
        title.innerText='Happy Independance Day🎉';
      }
      
    }

    // Call the callBack function to start the countdown
    // callBack();
button.addEventListener('click',callBack)

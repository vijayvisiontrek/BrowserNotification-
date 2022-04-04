let flag=0;
function messages(){

  let time =new Date().getHours();
  if( flag === 0){

    postMessage("Please Punch in !  ");
    flag =1;

  }else if(time === 17 && flag === 1){
    
    postMessage("Please Punch Out !  ");
  }

      setTimeout("messages()",3000);

}

messages();





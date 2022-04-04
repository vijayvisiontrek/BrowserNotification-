
'use strict';
var w;
function startWorker() {
   if(typeof(Worker) !== "undefined") {
      console.log("hello worker");
      if(typeof(w) == "undefined"){
        w=new Worker("serviceworker.js");
        w.onmessage = (e) =>{
            document.querySelector('#service-message').innerHTML= e.data;
           let notify= new Notification("NotiFication ----------------------------------------------------------------",{
             body: e.data,
             icon:'https://visiontrek.in/wp-content/uploads/2020/12/favicon-150x150.png'

        });

        setTimeout(()=>{
          notify.close();
        },5*1000);
        
      };

   }else{

    console.log("worker not Suporter")
   }

}
}

function stopWorker(){

    w.terminate();
    w=undefined;
}


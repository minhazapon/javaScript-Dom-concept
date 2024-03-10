

   
//    mousemove

   document.getElementById('post').addEventListener('mousemove', function(){


         console.log('event drag');


   })

  //focus

   document.getElementById('focus').addEventListener('focus', function(){

    console.log('focus the event');



   })


 // blur  

   document.getElementById('focus').addEventListener('blur', function(){

    console.log('focus the event');



   })


//    beshi use kora keydown



   
document.getElementById('focus').addEventListener('keydown', function(){

    console.log(event.target);



   })
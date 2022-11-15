document.getElementById("calculate").onclick = function(){
  
  
    let window_height = Number(document.getElementById("window_height").value);
 
    let window_width = Number(document.getElementById("window_width").value);
 
    let window_amount = Number(document.getElementById("window_amount").value);
 
 
    let wood = ((2 * window_width - 24) + 2 * window_height) / 100 * 2;
    
    let glass = (window_height - 10) * (window_width -10) / 10000;
 


    // Tulostetaan arvot;



    document.getElementById("wood").innerHTML = wood;
 
    document.getElementById("glass").innerHTML = glass;
 
 
     
 
 

 
 // Useampi ikkuna


 let woods = (((2 * window_width - 24) + 2 * window_height) / 100 * 2) * window_amount;
 

 let glasses = ((window_height - 10) * (window_width - 10) / 10000) * window_amount;


 document.getElementById("woods").innerHTML = woods;

 document.getElementById("glasses").innerHTML = glasses;


 // Lasin koko

       // small window
 if (glass < 0.5 ){

    document.getElementById("size").innerHTML = "small window";
return;

 }

     // medium window
     else if (glass >= 0.6 ){

        document.getElementById("size").innerHTML = "medium window";
    
        
          
     }




    // large window 
     if  (glass >= 1.6 ){

        document.getElementById("size").innerHTML = "large window";
    
        
          
     }



    // huge window

    if (glass >= 2.6 ){

        document.getElementById("size").innerHTML = "huge window";
    
        
          
     }
    
    

        // Error ilmoitukset
     
      const error4 = "Minimum height and width of window is 100cm.";

      const error1 = "Maximum height and width of window is 200cm.";

      const error2 = "No amount. 1 assumed.";

      const error3 = "No more than 10 equal size windows.";



     
    let errorMessageElement = document.getElementById("error");

    
    errorMessageElement.innerHTML = "";




    // jostain syystä arvo 50 ei toimi oikein (välillä toimii, välillä ei) ja 4-tunnin pähkäilyn ja kokeilun jälkeen en vieläkään keksinyt miksi jumittaa, joten vaihdon arvoksi 100


    if (window_height < 100 ){

        document.getElementById("error").innerHTML = error4;

    } 

    
    if (window_height > 200){
   
        document.getElementById("error").innerHTML = error1;


    }




   
    if (window_width < 100){
   
      document.getElementById("error").innerHTML = error4;
   
   
    } 


    if (window_width > 200){

        document.getElementById("error").innerHTML = error1;


    }

    
    if (window_amount > 10){

     document.getElementById("error").innerHTML = error3;


 }

   if (window_amount == ""){

     document.getElementById("error").innerHTML = error2;


 }






      

        




    
     }
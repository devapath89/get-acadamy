function isdateValid(dato){
    let isValidYear = checkyear(dato); 
    let isValidMonth = checkmonth(dato); 
    let isValidDay = checkday(dato); 
    let isValidDateDots = checkfordots(dato);
    let isDate10 =dateContains10(dato); 
    if(isValidDateDots && isValidDay && isDate10 && isValidMonth && isValidYear){
        return true;
    }else{
        return false; 
    }
 }
 
 function checkmonth(dato){
     let mnd = "";

     for (i=3; i<5; i++){ 
         mnd += dato.charAt(i); 
     }
     if(mnd > 0 && 
      mnd < 13 && mnd.length === 2){ 
       return true; //month is valid
     }
 }
 
 function checkday(dato){
     let year = "";
     let dag = "";
     let montIsFebruary = false;
     let mnd = "";
 
     for (i=3; i<5; i++){
         mnd += dato.charAt(i); //finner mnd-tallene
     }
     if(mnd === "02"){ //month is february
         montIsFebruary = true;
     }
     for (i=6; i<10; i++){  
         year += dato.charAt(i);
     }
     for (i=0; i<2; i++){ 
         dag += dato.charAt(i);
     }
     
     if(montIsFebruary && isLeapYear(year)){ // month s februar and its leapyear
         if(dag >= 1 && dag <= 29 && dag.length === 2){
             return true; //day is in february and is  valid.
         }
     }else if(montIsFebruary){ 
         if(dag >=1 && dag <=28){
             return true; 
            }
     }else{
         if(mnd === "01" || mnd === "03" || mnd === "05" || mnd === "07" || mnd === "08" || mnd === "10" ||mnd === "12" ){
             if (dag>=1 && dag <=31){
                 return true; // mnd er longMonth and day is between 1 og 31
             }
         }else if(!montIsFebruary){ 
             if (dag >=1 && dag <= 30){
                 return true; //mnd er shortMonth and day is between 1 og 30.  
             }
         }
     }
 
 }
 
 function checkyear(dato){
     let year = "";
     for (i=6; i<10; i++){  
         year += dato.charAt(i);
     }
     if(year.length === 4 && 
         year>= '0000' && 
         year<= '9999'){
             return true;
         }
 }
 
 function dateContains10(dato){
     if(dato.length === 10){
         return true;
     }  
 }
 function checkfordots(dato){
    if(
         dato.charAt(2) === "." &&
         dato.charAt(5) === "."
         ){  
         
         return true;
     }
     
 }
 
 function isLeapYear(year)
 {
   return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
 }
 
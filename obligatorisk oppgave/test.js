function isdateValid(date) {
    return lengthcheck (date)
    && checkyear (date)
    && dotchecker (date) 
    && checkmonth (date)
    && checkday (date)
   
}





function lengthcheck(date){
    return date.length==10;
}

function dotchecker (date) {
    return date [2] =='.' && date [5] =='.'
}

function checkyear (date) {
    var year =date.substr(6);
    return year.length ==4 && year >= '0000' && year <= '9999'
}
function checkmonth (date) {
    var month =date.substr(3,2)
   return month.length ==2 && month >= '01' && month <= '12'
}
function checkday (date){
    var day =date.substr(0,2)
    return day.length ==0 && day >= '01' && day <= '30'
}



// function isLeapYear(year)
// {
//   return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }
var marks=60;
switch(true){
    case marks>75 : result="A grade";
    break;
    case marks>60 : result="B grade";
    break;
    case marks>45 : result="C grade";
    break;  
    case marks>36 : result="D grade";
    break;
    default: result='fail'; 
}
console.log(result)


switch (day=4) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day)
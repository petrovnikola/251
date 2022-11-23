//1exs


var code = "de";
if(code == "en") {
    console.log("Hello World English");
}

 else if(code=="de") {
     console.log("Hallo Welt Deutschland ");
 }

 else{
    console.log("Error, Try Again");
 }



 //2exs


  var seasons = prompt("Please enter a month ");

 if (  seasons == "september" ||  seasons == "october" ||  seasons == "november") {
     console.log("The season is Autumn");
 }
 else if ( seasons == "december" ||   seasons == "january" ||  seasons == "february" ) {
     console.log("The season is Winter");
 }
 else if ( seasons == "march" ||  seasons == "april" || seasons == "may" ) {
     console.log("The season is Spring");
 }
 else if ( seasons == "june" || seasons == "july" ||  seasons == "august"  ) {
     console.log("The season is Summer");
 }
 else {
     console.error("Try again");
 }


//3exs  
var band_members_num = 3;

switch (band_members_num) {
    case 1:
        console.log("This band is a 1");
        break;

        case 2:
            console.log("This band is a 2");
            break;

         case 3:
            console.log("This band is a 3");
            break;

         case 4:
            console.log("This band is a 4");
            break;

        case 5:
            console.log("This band is a 5");
            break;

        default: console.log("Unknown music group");
};
// Persoonlijke gegevens

function topinfo() {
  
    
    var infoA           = document.getElementById("topA");
    var conA            = document.getElementById("divA");
    
    var infoB           = document.getElementById("topB");
    var conB            = document.getElementById("divB");
    
    var infoC           = document.getElementById("topC");
    var conC            = document.getElementById("divC");
    
    var infoD           = document.getElementById("topD");
    var conD            = document.getElementById("divD");
    
    var checkBox        = document.getElementById("topc");
    var text            = document.getElementById("topdiv");
    

  if (checkBox.checked == true){
    text.style.display  = "block";
    conA.style.display  = "none";
    conB.style.display  = "none";
    conC.style.display  = "none";
    conD.style.display  = "none";
      
    infoA.checked       = false;
    infoB.checked       = false;
    infoC.checked       = false;
    infoD.checked       = false;
    } 
    else {
    text.style.display  = "none";
    }
} 

// Persoonlijke presentatie

function topA() {
    
    var infotop         = document.getElementById("topc");
    var contop          = document.getElementById("topdiv");
    
    var infoB           = document.getElementById("topB");
    var conB            = document.getElementById("divB");

    var infoC           = document.getElementById("topC");
    var conC            = document.getElementById("divC");
    
    var infoD           = document.getElementById("topD");
    var conD            = document.getElementById("divD");
    
    var checkBox        = document.getElementById("topA");
    var text            = document.getElementById("divA");

    if (checkBox.checked == true){
    text.style.display  = "block";
    contop.style.display= "none";
    conB.style.display  = "none";
    conC.style.display  = "none";
    conD.style.display  = "none";
        
    infotop.checked     = false;
    infoB.checked       = false;
    infoC.checked       = false;
    infoD.checked       = false;
    }    
    else {
    text.style.display  = "none";
    } 
} 



// Global vars voor topB, BA, BB, BC

    var BAC             = document.getElementById("BA");
    var BBC             = document.getElementById("BB");
    var BCC             = document.getElementById("BC");

// Werk ervaring

function topB() {
    
    var BA              = document.getElementById("divBA");   
    var BB              = document.getElementById("divBB");
    var BC              = document.getElementById("divBC");
    
    var infotop         = document.getElementById("topc");
    var contop          = document.getElementById("topdiv");
    
    var infoA           = document.getElementById("topA");
    var conA            = document.getElementById("divA");
    
    var infoC           = document.getElementById("topC");
    var conC            = document.getElementById("divC");

    var infoD           = document.getElementById("topD");
    var conD            = document.getElementById("divD");
    
    var checkBox        = document.getElementById("topB");
    var text            = document.getElementById("divB");
    

  if (checkBox.checked == true){
    text.style.display  = "block";
    contop.style.display= "none";
    conA.style.display  = "none";
    conC.style.display  = "none";
    conD.style.display  = "none";
    BA.style.display    = "none";
    BB.style.display    = "none";
    BC.style.display    = "none";

    
    infotop.checked     = false;
    infoA.checked       = false;
    infoC.checked       = false;
    infoD.checked       = false;
    BAC.checked         = false;
    BBC.checked         = false;
    BCC.checked         = false;


  } else {
    text.style.display = "none";
  }
} 

//Algemeen medewerker
function BA() {

    var BB              = document.getElementById("divBB");
    var BC              = document.getElementById("divBC");
    var text            = document.getElementById("divBA");

  if (BAC.checked == true){
    text.style.display  = "block";
    BBC.checked         = false;
    BCC.checked         = false;
    BB.style.display    = "none";
    BC.style.display    = "none";
  } else {
    text.style.display  = "none";
  }
} 

//Helpdesk
function BB() {
    var BA              = document.getElementById("divBA");
    var BC              = document.getElementById("divBC"); 
    var text            = document.getElementById("divBB");

  if (BBC.checked == true){
    text.style.display  = "block";
    BA.style.display    = "none";
    BC.style.display    = "none";
      
    BAC.checked         = false;
    BCC.checked         = false;
  } 
    else {
    text.style.display  = "none";
  }
} 

//Netwerk beheer
function BC() {
  var BA                = document.getElementById("divBA");
  var BB                = document.getElementById("divBB");
  var text              = document.getElementById("divBC");

  if (BCC.checked == true){
    text.style.display  = "block";
    BA.style.display    = "none";
    BB.style.display    = "none";
      
    BAC.checked         = false;
    BBC.checked         = false;

  } else {
    text.style.display  = "none";
  }
} 

// Ervaring Hardware/Software

function topC() {

    var infotop         = document.getElementById("topc");
    var contop          = document.getElementById("topdiv");
    
    var infoA           = document.getElementById("topA");
    var conA            = document.getElementById("divA");
    
    var infoB           = document.getElementById("topB");
    var conB            = document.getElementById("divB");
    
    var infoD             = document.getElementById("topD");
    var conD              = document.getElementById("divD");
    
    var CAC             = document.getElementById("CA");
    var CA              = document.getElementById("divCA");
    
    var CBC             = document.getElementById("CB");
    var CB              = document.getElementById("divCB");
    
    var checkBox        = document.getElementById("topC");
    var text            = document.getElementById("divC");

  if (checkBox.checked == true){
    text.style.display  = "block";
    contop.style.display= "none";
    conA.style.display  = "none";
    conB.style.display  = "none";
    conD.style.display  = "none";
    CA.style.display    = "none";
    CB.style.display    = "none";

    infotop.checked     = false;
    infoA.checked       = false;
    infoB.checked       = false;
    infoD.checked       = false;
    CAC.checked         = false;
    CBC.checked         = false;

    
  } else {
    text.style.display  = "none";
  }
} 
//global vars Harware en Software

    var CAC             = document.getElementById("CA");
    var CBC             = document.getElementById("CB");

// Hardware

function CA() {
    var CB              = document.getElementById("divCB");
    var text            = document.getElementById("divCA");

  if (CAC.checked == true){
    text.style.display  = "block";
    CB.style.display    = "none";
    
    CBC.checked         = false;

  } else {
    text.style.display  = "none";
  }
} 

function CB() {
    var CA              = document.getElementById("divCA");
    var text            = document.getElementById("divCB");

  if (CBC.checked == true){
    text.style.display  = "block";
    CA.style.display    = "none";
    
    CAC.checked         = false;

  } else {
    text.style.display  = "none";
  }
} 


//wat wil ik leren

function topD() {

    var infotop         = document.getElementById("topc");
    var contop          = document.getElementById("topdiv");
    
    var infoA           = document.getElementById("topA");
    var conA            = document.getElementById("divA");
    
    var infoB           = document.getElementById("topB");
    var conB            = document.getElementById("divB");
    
    var infoC             = document.getElementById("topC");
    var conC              = document.getElementById("divC");
    
    var CAC             = document.getElementById("CA");
    var CA              = document.getElementById("divCA");
    
    var CBC             = document.getElementById("CB");
    var CB              = document.getElementById("divCB");
    
    var checkBox        = document.getElementById("topD");
    var text            = document.getElementById("divD");

  if (checkBox.checked == true){
    text.style.display  = "block";
    contop.style.display= "none";
    conA.style.display  = "none";
    conB.style.display  = "none";
    conC.style.display  = "none";
    CA.style.display    = "none";
    CB.style.display    = "none";

    
    infoA.checked       = false;
    infotop.checked     = false;
    infoB.checked       = false;
    infoC.checked       = false;
    CAC.checked         = false;
    CBC.checked         = false;

    
  } else {
    text.style.display  = "none";
  }
} 



//contact

function send(){
alert("dank voor het bericht hellaas werkt mij php nog niet dus dit bericht word nergens naar verzonden");	
}
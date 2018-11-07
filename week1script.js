function topinfo() {
  
    var checkBox = document.getElementById("topc");
    var infoA = document.getElementById("topA");
    var infoB = document.getElementById("topB")
    var text = document.getElementById("topdiv");

  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
} 

function topA() {
  
  var checkBox = document.getElementById("topA");
  
  var text = document.getElementById("divA");

  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
} 

    var BAC = document.getElementById("BA");
    var BBC = document.getElementById("BB");
    var BCC = document.getElementById("BC");

function topB() {
    
    var BA  = document.getElementById("divBA");   
    var BB  = document.getElementById("divBB");
    var BC  = document.getElementById("divBC");
    var checkBox = document.getElementById("topB");
    var text = document.getElementById("divB");

  if (checkBox.checked == true){
    text.style.display = "block";
    BAC.checked = false;
    BBC.checked = false;
    BCC.checked = false;
    BA.style.display = "none";
    BB.style.display = "none";
    BC.style.display = "none";
    
  } else {
    text.style.display = "none";
  }
} 

function BA() {

    var BB  = document.getElementById("divBB");
    var BC  = document.getElementById("divBC");
    var text = document.getElementById("divBA");

  if (BAC.checked == true){
    text.style.display = "block";
    BBC.checked = false;
    BCC.checked = false;
    BB.style.display = "none";
    BC.style.display = "none";
  } else {
    text.style.display = "none";
  }
} 

function BB() {
    var BA  = document.getElementById("divBA");
    var BC  = document.getElementById("divBC"); 
    var text = document.getElementById("divBB");

  if (BBC.checked == true){
    text.style.display = "block";
    BAC.checked = false;
    BCC.checked = false;
    BA.style.display = "none";
    BC.style.display = "none";
  } else {
    text.style.display = "none";
  }
} 

function BC() {
  var BA  = document.getElementById("divBA");
  var BB  = document.getElementById("divBB");
  var text = document.getElementById("divBC");

  if (BCC.checked == true){
    text.style.display = "block";
    BAC.checked = false;
    BBC.checked = false;
    BA.style.display = "none";
    BB.style.display = "none";
  } else {
    text.style.display = "none";
  }
} 




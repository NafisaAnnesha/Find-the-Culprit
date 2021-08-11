var collectedItem =0;
var item1 =0;
var item2 =0;
var item3 =0;
var item4 =0;
var chances =3;
var time = 0;
var correctAns = "10:20PM";
var item5 =0;
var item6 =0;
var loop1;
var playMusic = false;

function reset(){
   setText("list","0/4");
  setText("list2","0/4");
  collectedItem =0;
showElement("item1");
showElement("item2");
showElement("item3");
showElement("item4");
showElement("item5");
showElement("item6");
showElement("item7");
showElement("item8");
  setPosition("extraObject",70,300,50,60);
   item1 =0;
 item2 =0;
item3 =0;
item4 =0;
chances =3;
hideElement("blast");
hideElement("pass_code");
hideElement("passBtn");
setText("ans1","");
setChecked("opt_3", false);
hideElement("hint1");
hideElement("hint2");
hideElement("hint3");
hideElement("hint4");
hideElement("hint-2");
hideElement("tryAgain1");
setText ("pass_code","");
hideElement("tryAgain2");

item5 =0;
item6 =0;
setText("lives","3/3");
}

function buttons(){
  playSound("assets/06-BGM--06.mp3", false);
  playMusic = true;
  onEvent("startBtn", "click", function( ) {
    stopSound();
    playSound("assets/32.mp3", false);
  setScreen("screen1");
  showElement("story1");
setText("lives","3/3");
          showElement("nextBtn1");
  onEvent("soundBtn", "click", function( ) {
    if(playMusic){
      stopSound();
      playMusic = false;
      }
    else{ 
       playSound("assets/32.mp3", false);
       playMusic = true;
    }
  }
  
  
  
  
  );
  onEvent("soundBtn2", "click", function( ) {
     if(playMusic){
      stopSound();
      playMusic = false;
      }
    else{ 
       playSound("assets/32.mp3", false);
       playMusic = true;
    }
  });
  
   onEvent("soundBtn3", "click", function( ) {
     if(playMusic){
      stopSound();
      playMusic = false;
      }
    else{ 
       playSound("assets/16.mp3", false);
       playMusic = true;
    }
  });
   onEvent("soundBtn4", "click", function( ) {
     if(playMusic){
      stopSound();
      playMusic = false;
      }
    else{ 
       playSound("assets/16.mp3", false);
       playMusic = true;
    }
  });
     onEvent("soundBtn5", "click", function( ) {
     if(playMusic){
      stopSound();
      playMusic = false;
      }
    else{ 
       playSound("assets/25.mp3", false);
       playMusic = true;
    }
  });
     onEvent("soundBtn6", "click", function( ) {
     if(playMusic){
      stopSound();
      playMusic = false;
      }
    else{ 
       playSound("assets/25.mp3", false);
       playMusic = true;
    }
  });
  

});

onEvent("restartBtn", "click", function( ) {
   stopSound("assets/09.-Gentle-Rain.mp3");
  setScreen("welcome_screen");
  reset();
    
});
onEvent("tryAgain", "click", function( ) {
     hideElement("wrongAns");
     hideElement("tryAgain");
     setText("ans1","");
  });
  onEvent("tryAgain1", "click", function( ) {
     hideElement("wrongAns1");
   hideElement("tryAgain1");
  });  
 onEvent("tryAgain2", "click", function( ) {
   
    hideElement("blast");
     hideElement("tryAgain2");
     hideElement("pass_code");
     hideElement("passBtn");
     setText("pass_code","");
   
  });
  onEvent("startOver", "click", function( ) {
    setScreen("welcome_screen");
    reset();
  });
onEvent("conBtn", "click", function( ) {
    setScreen("screen6");
  });
  
  onEvent("c1", "click", function( ) {
      showElement("c-1");
       
    });
   onEvent("c2", "click", function( ) {
      showElement("c-2");
    }); 
    onEvent("c3", "click", function( ) {
      showElement("c-3");
    });  
 onEvent("c4", "click", function( ) {
      showElement("c-4");
  });
 onEvent("clue-1", "click", function( ) {
     showElement("clue1");
   });
 
 onEvent("clue-2", "click", function( ) {
     showElement("clue2");
   });
   onEvent("clue-3", "click", function( ) {
     showElement("clue3");
   });    
   onEvent("clue-4", "click", function( ) {
     showElement("clue4");
   });
  onEvent("bg1", "click", function( ) {
     hideElement("clue1");
      hideElement("clue2");
       hideElement("clue3");
        hideElement("clue4");
   });
onEvent("bg2", "click", function( ) {
       hideElement("c-1");
          hideElement("c-2");
           hideElement("c-3");
            hideElement("c-4");
    });
   onEvent("pic", "click", function( ) {
     item6= getChecked("pic");
     hideElement("hint-2");
      showElement("bigPic");
      showElement("dismiss");
    });
onEvent("dismiss", "click", function( ) {
      hideElement("bigPic");
      hideElement("dismiss");
    });
onEvent("nextBtn1", "click", function( ) {
          showElement("story2");
          showElement("conBtn1");
onEvent("conBtn1", "click", function( ) {
          hideElement("story1");
          hideElement("story2");
          hideElement("conBtn1");
          hideElement("nextBtn1");
        });        
  
});
}
function nextLevel(x){
if (collectedItem==1){
  setText("list","1/4");
  setText("list2","1/4");}  
else{if(collectedItem==2){
  setText("list","2/4");
   setText("list2","2/4");}
else{
  if(collectedItem==3){
    setText("list","3/4");
    setText("list2","3/4");
  }
  else{
    if (collectedItem == 4 ){
  setScreen(x);
      
    } }}

}
onEvent("submitBtn", "click", function( ) {
  if (getText("ans1")== correctAns || getText("ans1")=="10:20 PM") {
      setScreen("screen7");
        hideElement("wrongAns1");
          playSound("assets/category_human/character_calvin_ahh_1.mp3", false);
  }
  else{
    showElement("wrongAns");
      showElement("tryAgain");
      
    playSound("assets/category_human/character_calvin_no_1.mp3", false);}
});
  onEvent("submitBtn2", "click", function( ) {
  if (getChecked("opt_3")) {
  setScreen("screen3");
        hideElement("wrongAns1");
        reset();
        
  playSound("assets/category_human/character_calvin_ahh_1.mp3", false);
  }
  else{
    showElement("wrongAns1");
    showElement("tryAgain1");
     
   
   
  }
  
});
hideElement("hint.1");
hideElement("hint.2");
hideElement("hint.4");
hideElement("hint.3");
hideElement("hint-1");
  }
  
  //level 1
  function itemsFound (){
onEvent("item1", "click", function() {
item1 = hideElement("item1");
 playSound("assets/category_bell/quriky_trill_bling_positive.mp3", false);
collectedItem++;
nextLevel("screen2");
hideElement("hint1");
});
onEvent("item3", "click", function( ) {
 item3 = hideElement("item3");
hideElement("hint3");
 playSound("assets/category_bell/quriky_trill_bling_positive.mp3", false);
collectedItem++;
nextLevel("screen2");
});
onEvent("item2", "click", function( ) {
   
hideElement("hint2");
 item2 = hideElement("item2");
  playSound("assets/category_bell/quriky_trill_bling_positive.mp3", false);
 collectedItem++;
nextLevel("screen2");
});
onEvent("item4", "click", function( ) {
 item4= hideElement("item4");
  playSound("assets/category_bell/quriky_trill_bling_positive.mp3", false);
 collectedItem++;
nextLevel("screen2");
hideElement("hint4");

});
onEvent("extraObject", "click", function( ) {
   playSound("assets/category_accent/puzzle_game_accent_lock_01.mp3", false);
setPosition("extraObject", 60, 300, 45, 55);
    
});
//level 4
  onEvent("item5", "click", function() {
 item1 = hideElement("item5");
  playSound("assets/category_achievements/peaceful_win_1.mp3", false);
 collectedItem++;
 hideElement("hint.1");
 nextLevel("screen5");

});
onEvent("item6", "click", function( ) {
 item2 = hideElement("item6");
hideElement("hint.2");
 playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3", false);
collectedItem++;
nextLevel("screen5");
});
onEvent("item7", "click", function( ) {
item3 =hideElement("item7");
hideElement("hint.3");
 playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3", false);
 collectedItem++;

nextLevel("screen5");
});
onEvent("item8", "click", function( ) {
item4 =hideElement("item8");
playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3", false);
 collectedItem++;
 hideElement("hint.4");
nextLevel("screen5");
});
}
function lastLevel(){
onEvent("lock", "click", function( ) {
  item5 = "clicked";
  hideElement("hint-1");
 Timer();
 showElement("pass_code");
 showElement("passBtn");});

  onEvent("passBtn", "click", function( ) {
  
  if(getText("pass_code")!="082114"){
     chances--;
     setText("timer","");
   stopTimedLoop(loop1);
   setText("lives",chances+"/3");
    // console.log(chances);
    showElement("blast");
       if (chances == 0){
setScreen("screen4");
    stopSound();
}
else{
   playMusic = false;
   playSound("assets/category_explosion/8bit_explosion.mp3");
  showElement("tryAgain2");

}
  }
  else{
    stopSound("assets/32.mp3");
     stopSound("assets/16.mp3");
    setScreen("screen8");  
    playSound("assets/09.-Gentle-Rain.mp3", false);
  } 
});
  function Timer () {
    showElement("timer");
    time=30;
loop1 = timedLoop(1000, function() {
    time--;
    setText("timer",time);
    if (time==0){
     stopTimedLoop();
    setText("timer","");
       showElement("blast");
  chances--;
   setText("lives",chances+"/3");
  if (chances == 0){
setScreen("screen4");
    
}
else{
     playSound("assets/category_explosion/puzzle_game_break_magic_03.mp3");
  showElement("tryAgain2");
}
    }
  });

  }
   
}


function story(){
  setText("text1", "With the evidence it is confirmed that the Maylene was abducted");
onEvent("nxtBtn", "click", function( ) {
    setText("text1", "Use the evidence to find clues about the victim's whereabouts. Click on the evidence for details.");
    hideElement("nxtBtn");
  });
    onEvent("conBtn","click", function( ){
      setScreen("screen3");
      reset();
    });
}

function hints(btn){
onEvent(btn, "click", function( ) {
  hideElement(btn);
    if (item1 != hideElement("item1")){
      showElement("hint1");
      showElement("hint.1");
      showElement("item1"); }
    else{if(item2 != hideElement("item2")){
      showElement("hint2");
      showElement("hint.2");
      showElement("item2"); }
      else{if (item3 !=hideElement("item3")){
        showElement("hint3");
        showElement("hint.3");
        showElement("item3");
      }
      else{if(item4 != showElement("item4")){
        showElement("hint4");
        showElement("hint.4");
        showElement("item4");}
         } }
    }
    if (item5 != "clicked"){
      showElement("hint-1");
    }
    else{
      showElement("hint-2");
    }
  });
timedLoop(25000, function() {
showElement(btn) ; });
}
hints("hintBtn2");
hints("hintBtn");
hints ("hintBtn3");


   story();
  itemsFound();
lastLevel();

buttons ();
onEvent("welcome_screen", "click", function( ) {
	console.log("welcome_screen clicked!");
});

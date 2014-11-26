var Leap     = require("leapjs");
var keyboard = require('node_keyboard');

//Each var individually declared below so they refence different objects in memory. I.e work independantly.
//These vars log when a particular action / gesture last ran.
var last_fav    = new Date().getTime();
var last_swipe  = new Date().getTime();
var last_up     = new Date().getTime();
var last_down   = new Date().getTime();

var current_time;
var delay = 1000; //Number of milliseconds forced between each gesture.
    
var controller = Leap.loop({enableGestures: true}, function(frame){

    if(frame.valid && frame.gestures.length > 0){

        frame.gestures.forEach(function(gesture){

            switch (gesture.type){  
              case "circle":
                  current_time = new Date().getTime();

                  if(last_fav+delay < current_time){
                        keyboard.press(keyboard.Key_Numpad0);
                        keyboard.release(keyboard.Key_Numpad0);
                        console.log("Circle Gesture");
                        last_fav = new Date().getTime();
                    }
                break;
              
              case "swipe":
                  current_time = new Date().getTime();

                  if(last_swipe+delay < current_time){

                      //Classify swipe as either horizontal or vertical
                      var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);

                      //Classify as right-left or up-down
                      if(isHorizontal){
                          if(gesture.direction[0] > 0){
                              swipeDirection = "Swipe Right";
                              keyboard.press(keyboard.Key_Up);  //Key_Up keycode and Key_Right keycode are swapped in node_keyboard dependancy
                              keyboard.release(keyboard.Key_Up);//Key_Up keycode and Key_Right keycode are swapped in node_keyboard dependancy
                          } else {
                              swipeDirection = "Swipe Left";
                              keyboard.press(keyboard.Key_Left);
                              keyboard.release(keyboard.Key_Left);
                          }
                      } else { //vertical
                          if(gesture.direction[1] > 0){
                              swipeDirection = "Swipe Up";
                          } else {
                              swipeDirection = "Swipe Down";
                          }                  
                      }
                      console.log(swipeDirection);
                      last_swipe = new Date().getTime();
                    }
                break;
            }
        });
    }

    if(frame.pointables.length == 5){

        var pointable = frame.pointables;
        current_time = new Date().getTime();

        if(last_up+delay < current_time){
            if(pointable[0].direction[1] > 0.78 && pointable[1].direction[1] > 0.78 && pointable[2].direction[1] > 0.78 && pointable[3].direction[1] > 0.78 && pointable[4].direction[1] > 0.78 ){
                console.log("Up Vote"); 
                keyboard.press(keyboard.Key_NumpadAdd);
                keyboard.release(keyboard.Key_NumpadAdd);
                last_up = new Date().getTime();
            }
        }

        if(last_down+delay < current_time){
            if(pointable[0].direction[1] < -0.78 && pointable[1].direction[1] < -0.78 && pointable[2].direction[1] < -0.78 && pointable[3].direction[1] < -0.78 && pointable[4].direction[1] < -0.78 ){
                console.log("Down Vote"); 
                keyboard.press(keyboard.Key_NumpadSubtract);
                keyboard.release(keyboard.Key_NumpadSubtract);
                last_down = new Date().getTime();
            }
        }

    }
    
});
console.log('Leap Imgur Controller Running');
leap_imgur
==========

Hook up a Leap Motion sensor to fire specific keyboard keys to control browsing Imgur

## Overview
This is a proof of concept piece to get a Leap Motion sensor to fire specific keyboard keys on particular hand gestures. 
This could easily be repurposed for simple / similar leap motion gestures to fire other keyboard keys for other programs.

## Installation
You must have Node.JS installed. Then run the file leap.js through Node. This can then be left running in the background while you open your browser.
The dependency Node_Keyboard requires you run Node.JS in 32 not 64! 

## How to use / Gestures
Currently 5 gestures are recognised. Next, Last, Up Vote, Down Vote and Favourite. In all of the following gifs the right hand screen shows the Leap visualiser and the Node console. Watch the screen on the left to see the actions acted upon. The Leap Motion sensor is the tiny box in the lower left hand corner. 

###Next
Scroll to the next image by swiping from left to right
![alt tag](https://raw.githubusercontent.com/MaxGiting/leap_imgur/master/example_gestures/right_swipe.gif)

###Previous
Scroll to the previous image by swiping from right to left
![alt tag](https://raw.githubusercontent.com/MaxGiting/leap_imgur/master/example_gestures/left_swipe.gif)

###Up Vote
Up vote by holding a palm up / pointing all fingers up. Keep holding to remove the vote.
![alt tag](https://raw.githubusercontent.com/MaxGiting/leap_imgur/master/example_gestures/up_vote.gif)

###Down Vote
Down vote by holding a palm down / pointing all fingers down. Keep holding to remove the vote.
![alt tag](https://raw.githubusercontent.com/MaxGiting/leap_imgur/master/example_gestures/down_vote.gif)

###Favourite
Add the current images to your favourites by doing a circular motion.
![alt tag](https://raw.githubusercontent.com/MaxGiting/leap_imgur/master/example_gestures/favourite.gif)

## F.A.Q / Notes
###Gestures logged in the console, but keys do not trigger or different keys trigger.

If the gesture is logging in the console, but the key press doesn't seem to trigger it maybe that the wrong keycode is being sent.
The following links are very helpful in debugging. The JsFiddle allows you to quickly check what keycode a particular key on your keyboard fires.
While the next link lists the most common keycodes and what is expected.

http://jsfiddle.net/SLtFk/1/

http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

I did find that for the node_keyboard dependency the up and right arrow keycodes were wrongly swapped.

For imgur this is the keyboard I followed. But you could very easily repurpose this for any other keys that node_keyboard supports for other programs.

http://imgur.com/CcwAoKA


###I get a module error when running through Node

Node_Keyboard requires you run in 32 bit mode and not 64.

## ToDo
- Convert Up / Down Votes from palm up and palm down gestures to thumbs up and thumbs down.
- Possibly try to use a more fitting gesture for favouriting.

## License
Leap-Imgur - MIT

Node_Keyboard Dependancy - MIT (as of 20/11/2014) on NPM, but subject to change
https://www.npmjs.org/package/node_keyboard

LeapJS Dependancy - Apache-2.0 (as of 20/11/2014) on NPM, but subject to change
https://www.npmjs.org/package/leapjs
leap-imgur
==========

Hook up Leap Motion sensor to specific keyboard keys to control browsing Imgur

## Overview
This is a proof of concept piece to connect a Leap Motion sensor up to fire specific keyboard keys on particular hand gestures. 
This could easily be repurposed for simple / similar leap motion gestures to fire other keyboard keys for other programs.

## Installation
You must have Node.JS installed. Then run the file leap.js through Node. This can then be left running in the background while you open your browser.
The dependency Node_Keyboard requires you run Node.JS in 32 not 64! 

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

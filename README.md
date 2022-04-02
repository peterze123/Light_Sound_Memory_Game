# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Tianchu Ze**

Time spent: **10** hours spent in total

Link to project: https://glitch.com/edit/#!/maize-caterwauling-psychiatrist

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

##### color and sound when clicked: 
![](https://cdn.glitch.global/cdaa76b3-4e62-40fe-9f73-d1daa51f1ea7/color-sound.gif?v=1647415628859)

##### losing: 
![](https://cdn.glitch.global/cdaa76b3-4e62-40fe-9f73-d1daa51f1ea7/lost.gif?v=1647415634261)

##### start and stop button: 
![](https://cdn.glitch.global/cdaa76b3-4e62-40fe-9f73-d1daa51f1ea7/start-stop.gif?v=1647415636773)

##### winning: 
![](https://cdn.glitch.global/cdaa76b3-4e62-40fe-9f73-d1daa51f1ea7/win.gif?v=1648861640098)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

- Javascript MDN docs
- w3school css tutorial

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

- While I was implementing the speeding playback sound feature, my biggest challenge was understanding the tone-playing functions, notably playTone, the AudioContext objects, and setTimeout. Although the tutorial was straightforward on the code itself, I was unclear on what is o and g when I first saw playTone, until I realized that they are sound synthesizer objects in which are hoisted. I was also confused on the difference between onclick and onmousedown/up, in which is just that onclick detects the whole left clicking motion opposed to only down/up in either left/right click. From the official API docs, the AudioContext methods and button methods become clear to me, but as my goal is to find the right constant variable to fasten the playback sound each round I also have to understand the setTimeout function. Thus, I could determine how to alter clueHoldTime at playClueSequence. As the reference states, setTimeout is a scheduling function to call on the inputted function once the timer expires. Therefore, to implement a round-wise speeding feature, we have to decrease the delay for each iteration of the for loop in clueHoldTime, which would speed up the call for each playSingleSequence function.To achieve the speed up, I used the progress variable multiplied by twenty as an incrementing modifier. While the modification seems minimal, I repeatedly failed to find the right spot to insert the change. I initially did not go through each of the functions as the tutorial shows us the correct code to replicate. Therefore, I was stuck on how the toneplay functions work. To overcome the problem, I had to reread related references and time-consumingly retest many implemented features. In the end, this experience became an important lesson for me, as I have to understand the functionality of each of my lines on top of having the correct code. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

- While I had some experiences in javascript beforehand of the light-and-sound game, I still have many questions regarding web development after finishing the project, notably on version control. Since javascript is an interpreted language and used often for open source projects, in cases of a large project that involves multiple versions of javascript engine, what is the industrial standard in merging these code across different versions? On the other hand, do we just make sure that everyone works under the same engine and version with a virtual machine? However, if the project spans over a long range of time, how should one refactor the code, or do we even have to pay attention to the version differences?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

- Other than the mentioned optional features, I would like to add a hint feature that could aid the player once during the whole game and remind them what is the next button in the sequence. When I get to the last few rounds, I would always forget about one button in the middle of the sequence which can cost me the game. If I got a reminder on that connecting dot, many of the games could turn out differently. Thus, I believe the hint option is needed. There should only be one hint per game, as the player should use it only when necessary. In terms of the user interface, the hint button should appear after the current sequence finishes playing. When the hint option is clicked, the number for the next button in the sequence after your current guess shall be printed out, ignoring the case of the last button. 

## Interview Recording URL Link

[https://www.loom.com/share/2dd314e89b41414fa56df7277c41f02c](https://www.loom.com/share/2dd314e89b41414fa56df7277c41f02c)

## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

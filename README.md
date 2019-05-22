# CSS2therescue

![screen1](/assets/screen1.png)

## Assignment

Experiment with different css techniques unknown to you. Try them out and build some cool stuff!

In this readme I'm mentioning a couple of things that I thought where interesting.

## Limitations

For this assignment we where forced to work with some limitations to enhance our skills. Mine where the following:

### The use of only two colors

I used two colors to make a layout of this restaurant menu. I thought it was so difficult to do! There is not much variety when working with only two colors. To give my design more depth I've played with opacity and linear gradients. At the end I was so frustrated about only using two colors that I decided to implement a color picker element. Let the user determine their own colours!

###A responsive layout without mediaqueries

I was used working with a mix of flexbox and css grid. I started with a mobile design and worked that out, but then…. no mediaqueries! I did the following things to make it responsive without mediaqueries.

- every font size and line height is calculated according to the vw units of the screen.

  ```
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
  ```

  the calc function in css is super awesome. You can enter any equation and it will calc the outcome for you. In the above example I want the font size to be 16px on the lowest screensize. Which is 300 px. The biggest screensize is 24 px, which will occur at the largest screensize. The difference will be rendered to the screen.

- At the top of my css file I declare a variable called `--auto-grid-min-size: 16rem;`

  I had to change the markup of my html a little to let this work. But this is basically the code that makes it work.

  ```
  .auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
    grid-gap: 1rem;
  }
  ```

  the auto-grid container divides all my section into grid children. With a fixed minimum width.

  It then expands to fill remaining available space where it can, because we use a fractal unit (`1fr`) for its max width value. So by using 1fr as the max value for each item, we use a percentage of the remaining space for each item. The minmax makes sure the sizes are within the boundaries of the auto-grid-min-size and the 1fr

  ```
  .wrapper {
    max-width: 65rem;
    margin: 0 auto;
    padding: 0 1rem;
  }
  ```

  The wrapper has a max-width set so the acual layout is compatible for every screensize. On a large screen, the layout still has those fancy white-space margins on the side.

## Experiments

- **Color picker**

  The color picker required some javascript to set the chosen color to the local storage of the browser. Also, it was used to manipulate a css variable.

  `  --blue: #3D7AF7;`

  Is used as a base color. This variable gets changed on user input.

- **Border radius water animation**

  the water animation is a combination of a drop animation and a animation on the border radius. The drop itself is positioned absolute with a keyframe animation. The animation gets decreased on its `top` property. so it looks like its falling.

- **first letter property**

  I totally didn't knew about the `:first-letter` psuede selector. The first letter of a specific text element is available to its own styling. The firstletter psuede selector reminded me of my childhood Disney books in which the first letter of the story was styled differently then the rest of te text.

- **range slider clip path**

  Using A little bit of Javascript, it is possible to get the value of the slider. The JS is taking that value and then using it to manipulate a CSS variable declared in my :root.

  ```css
  --eyeVar: 0%;
  .eyeLeft {
      clip-path: ellipse(25% var(--eyeVar) at 50% 50%);
      background-color: var(--blue);
      height: 20vh;
      width: 15vw;
  }
  .eyeRight {
      height: 20vh;
      background-color: var(--blue);
      width: 15vw;
      clip-path: ellipse(25% var(--eyeVar) at 50% 50%);
  }
  ```

  The percentage in `—eyeVar` is used tot manipulate the clippath. That is why the clip path has a Var. This var draws the top point of the ellipse up and down. So when the slider's value is rising, so is the percentage of the —eyeVar. Making the ellipse open and close like eyes.

- **checkbox hack on Whut**

  The Whut link is actually a checkbox.  I've styled it as a regular text link. Using the checkbox as a link allows me to use it more as a toggle switch. When the checkbox is checked, some css rules become active. Allowing the card to rotate:

  ```
  input[type=checkbox]:checked ~ .quote-card .quote-card-inner  {
     transform: rotateY(180deg);
  }

  input[type=checkbox]:checked ~ .quote-card:focus .quote-card-inner  {
     transform: rotateY(180deg);
  }
  ```

- **rotating card**

  The card is made up of 3 divs. Stacked on top of each other by positioning them absolute.



### Things I would like to try out the next time

- The attr() function in css
- Explore more uses cases for the calc() functions
- It's possible to 'count' values in css. It would be cool to give that a try.
---
title: Canvas
---

You are an app inventor living in Podunka, IL, home to local folk singer Fiona Blueheart. Fiona recently released a new single called *Mustaches and Cat Eyes*. She decides to create a fun app to help promote her single.

Fiona is an avid user of App Inventor and has already made a rudimentary first version. Unfortunately, she needs to prepare for her upcoming tour and doesn't have time to finish it. Download the [MustachesAndCatEyes.aia]({{ site.baseurl }}/img/canvas/MustachesAndCatEyes.aia) file and [import the project into App Inventor](../import-project). After the imported project loads, the screen will look like this:

![]({{ site.baseurl }}/img/canvas/canvas-designer.png)

Run the app on your phone. Some blocks have already been added to this project. If you click the "Take picture" button, the `Camera` will take a picture and then set it as the background image of the `Canvas`. If you drag your finger across `Canvas`, black lines will be drawn (this happens regardless of whether you took a picture or not). However, this program is not yet complete! If you click on the Clear button, nothing happens. That means that you can't mess up when you're drawing the mustache, because you only have one chance to get it right!

<div class="exercise">
  <p>Add the blocks necessary to make it so that when the user clicks on the Clear button, whatever is drawn in the canvas is cleared.</p>
</div>

Now your user can try as many times as she likes to draw the perfect mustache. But how do we bestow cat eyes upon the subject of the photo?

<div class="exercise">
  <p>Add some blocks so that when the user touches the canvas, a cat emoji is drawn at the point where she touched. Feel free to use any of these emojis: 😸</p>

  <p class="hint">Emojis, despite being graphical in nature, still count as text.</p>

  <p class="hint">You should use the <code>Canvas.Touched</code> block. Although <code>Canvas.TouchDown</code> and <code>Canvas.TouchUp</code> would both basically work, only <code>Canvas.Touched</code> represents the act of the user pressing down and then lifting up their finger on the canvas.</p>
</div>

Fiona is pretty pleased that the Clear button works, but she tells you that there are a bunch of cat face emojis, and she wants to be able to choose which one to draw on the canvas.

<div class="exercise">
  <p>Add a <a href="http://ai2.appinventor.mit.edu/reference/components/userinterface.html#ListPicker">ListPicker</a> to your app that lets the user select which cat emoji should be drawn when they touch the canvas. For reference, here all the cat face emojis: 😸😹😺😻😼😽😾😿🙀.</p>

  <p class="hint">You won't need any of the yellow <code>when</code> blocks, and you only need to swap out one block in the Blocks interface.</p>
</div>

Fiona loves the new feature, and promptly sends you a picture of herself with a hearts cat for a right eye and a kissy cat for the left eye. But she tells you that you're not done yet, because she wants to be able to draw mustaches in other colors.

To solve the multicolor mustache problem, we need some kind of color picker widget. Unfortunately, such a widget doesn't exist in App Inventor. You can try implementing one on your own!

<div class="exercise">
  <p>Use a <code>ListPicker</code> to create a rudimentary color picker. For now, just allow the user to select the colors black, red, green, and blue. After you've selected a color, dragging on the Canvas should produce lines of that color.</p>

  <p class="hint">You'll need to use <code>else if</code> blocks.</p>
</div>

This is definitely a viable way to create a simple color picker, but if you wanted to support all 13 basic colors in App Inventor you'd end up with an `if block` that contains more than 70 blocks! If you did it as a procedure (making it more reusable), it would look something like [this]({{ site.baseurl }}/img/canvas/else-if-blocks.png).

As usual, there's a better way to do it. Download the [ColorPicker.aia]({{ site.baseurl }}/img/canvas/ColorPicker.aiai) file and import it into App Inventor. This project implements a color picker that was made in a less obvious way, but is easier to work with in the long run:

![]({{ site.baseurl }}/img/canvas/list-of-lists-blocks.png)

As you can see, it's a procedure whose distinguishing feature is that it uses a list of lists. Each sublist in the `pairs` list is actually a key-value pair. In other words, `pairs` is a lookup table. Conceptually, it's equivalent to a spreadsheet with two columns:

![]({{ site.baseurl }}/img/canvas/spreadsheet.png)

The `look up in pairs` block at the bottom of the procedure looks for a key (left column) and returns the corresponding value in the same row (right column). If the key is not found, then it returns whatever you put in the `notFound` slot (in this case it's a `black` color block).

So, this color picker seems decent enough, but it's in the wrong project. You could just rebuild it block-for-block in the Canvas project but that seems a bit laborious. This is the problem that the Backpack is designed to solve (you know, that thing in the upper right corner of the Blocks interface):

![]({{ site.baseurl }}/img/canvas/backpack.png)

Drag the `colorFromName` procedure block and the `ColorPicker.AfterPicking` block into the Backpack. Now, select My Projects from the menu and go back to the Canvas project. In Blocks, drag both blocks from the Backpack into your project. Run your app to make sure that you can draw with all those different colors.

Yay, Fiona is happy with her app and it's a big hit (at least among the residents of Podunka). One day, Aunt Polly calls you up and says that she wants to draw a beige mustache on her cockerdoodle and could you please add beige as a color choice. A few hours later, you get a text from Puddles the cockerdoodle requesting the addition of turquoise.

<div class="exercise">
  <p>Add beige and turquoise to the color picker. Note that neither of these colors is built-in.</p>

  <p class="hint">You can lookup RGB values for colors from <a href="http://www.w3schools.com/tags/ref_color_tryit.asp">this page</a>.</p>
</div>

Excellent! In this chapter, you learned about `Canvas`, using lists of lists as lookup tables, the Backpack feature, and how to use any color. You've taken another step closer to becoming Master of the Universe!

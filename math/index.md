---
title: Math
---

Now it's time to put some of the skills you acquired to tackle some basic math problems. Create a new project in App Inventor and name it "Math". Build the screen shown in the following image:

![]({{ base }}/img/math/math-screen.png)

<section class="exercise">
  <p>Add some behavior to your program to check that the user entered the correct answer and congratulate her if she did. If her answer wasn't correct, give her a note of encouragement.</p>
</section>

OK, that's not very interesting, right? Every player will solve the same math problem every time they use your app. Let's make it so that the two numbers are random. First, let's rearrange the screen like so:

![]({{ base }}/img/math/math-rearranged.png)

Now, go to the Blocks interface and add the following blocks to your program:

![]({{ base }}/img/math/math-blocks.png)

Run your app and observe that the numbers are different every time you refresh.

<section class="exercise">
  <p>Change the logic in your program so that when the user clicks the Submit button, her answer is checked against the value of <code>x + y</code>.</p>
</section>

<section class="exercise">
  <p>App Inventor has a lot of math-related blocks, so you can make the math problem as complex as you want. Change the math problem in your program to use a different math operator (e.g. divide, multiply, power).</p>
</section>

<section class="exercise">
  <p>Even the best of us can make occasional errors in our arithmetic. Show a different note of encouragement if the player's answer is off by 1, perhaps: "Your answer is not correct, but it's very close!"</p>

  <p class="hint">You will probably want to use a local variable, an <code>else if</code> block, and the <code>absolute</code> block.</p>
</section>

When it comes to math, there is much more than just numerical computations. We can also use make a randomized word problem! Create a new project called "Popejet" and make the screen look like this:

![]({{ base }}/math/popejet-designer.png)

The text is kinda long, so you might want to copy and paste it into App Inventor:

> Godzilla has returned, and she's beating the crap out of Tokyo (again)! Unluckily for Tokyo, there isn't anyone around to stop her, as Ultraman is on his honeymoon while Sailor Moon is still on maternity leave. The mayor of Tokyo, in desperation, calls up Pope Francis. Fortunately, his Holiness is prepared for just such an occasion, and immediately scrambles his Popejet, which has a maximum speed of [maxSpeed] km/hr and air-to-surface missiles capable of hitting targets [missileRange] km away. Assuming the distance between the Vatican and Tokyo is 9,850 km, how many minutes will it take for the Pope to get within targeting distance of Godzilla?

Note here that we didn't split up the description into separate labels. This would be awkward because of how long the description label needs to be to hold all that text. Instead, you can put the variable names inside square brackets, and just replace the variables with their values inside a `Screen1.Initialize` block:

![]({{ base }}/img/math/popejet-blocks.png)

<section class="exercise">
  <p>Add the logic in Blocks to check that the user submitted the correct answer to the problem. Keep this equation in mind as you figure out how to put together the blocks to compute the answer:
  <br>
  <code>maxSpeed * timeInHours - missileRange = 9850</code>
  </p>

  <p class="hint">To round to the nearest minute, you'll need to use the <code>round</code> block, found in the Math section.</p>
</section>

<section class="exercise">
  <p>Inside the <code>Screen1.Initialize</code> block you have a little bit of redundancy. Add a new procedure called <code>setDescriptionValue</code> that takes two parameters, <code>segment</code> and <code>replacement</code>, which can take the place of a <code>set DescriptionLabel.Text</code> block. It's not so bad in this program, but if you had a lot of variables in your description you would be very happy to have a procedure that does the heavy lifting for you!</p>
</section>

Congratulations, you've completed all of the core chapters in this tutorial. You can now do the other chapters in any order that you like, based on your own interest. You can also just start building your own puzzle hunt!

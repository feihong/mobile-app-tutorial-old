---
title: The Basics
---

Sign into [App Inventor](http://ai2.appinventor.mit.edu/) in your browser, then download this [lovely image]({{ site.baseurl }}/img/the-basics/marmoset.jpg) to your computer.

Follow the steps in the video below to create your first interface:

<iframe width="480" height="360" src="https://www.youtube.com/embed/Bz5FVfCF9uQ" frameborder="0" allowfullscreen></iframe>

To run the app on your phone, launch [MIT AI2 Companion](https://play.google.com/store/apps/details?id=edu.mit.appinventor.aicompanion3&hl=en):

<iframe width="480" height="360" src="https://www.youtube.com/embed/2ZNdSvvhT5M" frameborder="0" allowfullscreen></iframe>

<div class="note">
  <p>If you are using an emulator, you'll need to select <code>Connect > USB</code> from the menu instead.</p>
</div>

That's it! You should be able to see your app running now. It isn't much at the moment but we're just getting warmed up.

Right now there's no way for the user to interact with your program. Add a text box and some buttons to your interface:

<iframe width="480" height="360" src="https://www.youtube.com/embed/svSpSzWOyio" frameborder="0" allowfullscreen></iframe>

Notice how you renamed the text box from `TextBox1` to `AnswerTextBox1`. In general, you should give descriptive names to the widgets in your app that will interact with the user.

<div class="exercise">
  <p>Rename <code>Button1</code> to <code>SubmitButton</code>, <code>Button2</code> to <code>Hint1Button</code>, and <code>Button3</code> to <code>Hint2Button</code>.</p>
</div>

Right now nothing happens if you press the buttons. Let's give the user a hint if she presses the first hint button. We can do that by using the `Notifier` widget:

<iframe width="480" height="360" src="https://www.youtube.com/embed/Ypaul4tF0Jk" frameborder="0" allowfullscreen></iframe>

<div class="note">
  <p>The <code>Notifier</code> is not a component that is visible in your interface. However, you need to drag it onto the Screen because if you don't, it will not be available to use in the Blocks interface.</p>
</div>

Run the app again and see what happens. Congratulations, your mobile app is now interactive!

<div class="exercise">
  <p>Show a different hint when the other hint button is pressed. For the message, you could use: <i>My name rhymes with "big bee karma debt"</i>.</p>

  <p class="hint">You don't need to add a new <code>Notifier</code> component; you can just reuse the existing one.</p>
</div>

Now we need to add some behavior for when the user presses the Submit button. When that happens, we want to check if she entered the correct answer in the `TextBox`, and, if she did, we'll congratulate her. Here's how to do that:

<iframe width="480" height="360" src="https://www.youtube.com/embed/J6fclajz1v4" frameborder="0" allowfullscreen></iframe>

Now run it again. Yay, you're program is now fully functional! Wasn't that easy?

<div class="tip">
  <p>You might have noticed that all the components and blocks in App Inventor are quite "chatty". That is, they love to tell you what they are and how to use them. To get more information on a component in the Designer interface, click the question mark next to it. To get more information on a block in the Blocks interface, hover your mouse over it (although note that some blocks don't show any help text when you hover over them).</p>
</div>

Although the app works now, we haven't given any thought to layout. There's no reason all the widgets need to be vertically stacked. Many times we'll want to put widgets on the same row to save space or increase coherence. Here's how to do that with the `HorizontalArrangement` component:

<iframe width="480" height="360" src="https://www.youtube.com/embed/ZadTsaU_Mh4" frameborder="0" allowfullscreen></iframe>

<div class="exercise">
  <p>Use <code>HorizontalArrangement</code> to also put the two hint buttons side by side on their own row.</p>
</div>

Right now, the program only reacts if the user submits a correct answer, and does nothing if the answer isn't correct. That isn't very user-friendly! We can give a word of encouragement by adding an `else` block to our `if` block:

<iframe width="480" height="360" src="https://www.youtube.com/embed/wMhzAF4pIDA" frameborder="0" allowfullscreen></iframe>

Nice! But this program could still be a bit more friendly. For example, what if the player entered an answer that was technically correct, but not the answer we are looking for? For example, let's say that the player entered "marmoset". We may want to give her a specific message in that case to let her know that she's on the right track. We can do that using the `if else` block.

<iframe width="480" height="360" src="https://www.youtube.com/embed/QTg_A97xkJc" frameborder="0" allowfullscreen></iframe>

Run the app again and see what happens when you submit "marmoset" as your answer.

<div class="tip">
  <p>When adding blocks to your program, you can save time by duplicating existing blocks and then changing them slightly to suit your purposes.</p>
</div>

<div class="exercise">
  <p>App Inventor allows you to add as many <code>else if</code> blocks as you like. Add another two <code>else if</code> blocks that handle the cases of the player entering the words "animal" and "stuffed animal".</p>

  <p class="hint">Remember that the blue gear icon on an <code>if</code> block is used to open up a little window that allows you to drag more <code>else if</code> blocks inside the <code>if</code> block. To close the little window, simply click the blue gear again.</p>
</div>

Run your app and try submitting "pygmy marmoset " (note the extra space at the end). Your program doesn't accept it as the right answer! That's because computers are very exacting about input values; they don't understand the concept of "mostly correct". We can address this by using the `trim` block:

<iframe width="480" height="360" src="https://www.youtube.com/embed/ZVH3VW_5HOo" frameborder="0" allowfullscreen></iframe>

Now your app will accept the right answer, no matter how many spaces there are around it. Try entering "  pygmy marmoset   " (spaces on both sides) and verify that it works.

<div class="exercise">
  <p>A similar problem exists for uppercase/lowercase. Try entering "PYGMY MARMOSET" as your answer to see what we mean. Use the <code>upcase</code> block in the Text section to address this.</p>

  <p class="hint">Hint: The <code>upcase</code> block is a little weird, because once you've dragged it into your program you can click on the dropdown to convert it to the <code>downcase</code> block. The easiest way to complete the exercise, incidentally, is to use the <code>downcase</code> block.</p>
</div>


<div class="tip">
  <p>You may have noticed by now that the program running inside your phone doesn't always change when you update your blocks. That may be because the version of your program on your phone is lagging behind. You can force an update by clicking on the Designer button, then clicking on the Blocks button.</p>
</div>

Great, now our app is much more lenient with accepting correct answers. But what about the other conditions in our `if` block? For example, if you submit "   Marmoset   ",  you can see that your program doesn't yet do the right thing. Based only on what you've learned so far, your first instinct might be to apply the `trim` and `downcase` blocks to every `AnswerTextBox.Text` block. That will certainly work, but App Inventor gives you a better way: the `initialize local` block!

<iframe width="480" height="360" src="https://www.youtube.com/embed/0EvSiRYizS4" frameborder="0" allowfullscreen></iframe>

The `initialize local` block creates a variable with a name of your choosing (in the video we called it "answer"). A variable is just a block that has a name and can store a value. In the video above we created a variable called `answer` and initialized it with the value of `downcase[trim[AnswerTextBox.Text]]`. You should use a variable whenever you want to use the same value more than once.

<div class="exercise">
  <p>Replace the other <code>AnswerTextBox.Text</code> blocks with the <code>get answer</code> variable block.</p>
</div>

Your app is already pretty good, but now it's time to make it snazzy. Let's make your phone talk!

<iframe width="480" height="360" src="https://www.youtube.com/embed/YOHR-rvPEes" frameborder="0" allowfullscreen></iframe>

Run the app again. Voila, you now know how to make your phone say anything you want it to! (Please try to resist the urge to make it say swear words.)

<div class="tip">
  <p>App Inventor also allows you to use the keyboard to duplicate a block, which is quicker than the right-click method. Just select a block, and then perform a copy (<code>Ctrl/⌘-c</code>) followed by a paste (<code>Ctrl/⌘-v</code>).</p>
</div>

OK, but what if we want our program to talk every time the player submits an answer, regardless of whether her answer was right? Of course, you can achieve that by copying all the `call TextToSpeech1.Speak` blocks and then modifying them. But if you have a lot of `if else` blocks, that's a ton of extra work!

Fortunately, programming is all about working smarter, not harder. We can use a procedure to make it easier for us to add speech functionality:

<iframe width="480" height="360" src="https://www.youtube.com/embed/-HngAmkASag" frameborder="0" allowfullscreen></iframe>

A procedure is basically a custom block whose behavior is defined by you. After you define a procedure, you can use it in any other block, as if it was one of the blocks provided by default. You should use a procedure whenever you notice that your program has a repetitive structure.

<div class="exercise">
  <p>Replace the remaining <code>Notifier1.ShowAlert</code> blocks with <code>announce</code> blocks.</p>
</div>

Remember, variables are used to store values, while procedures are used to store other blocks. Often, a procedure comes with its own variables, which can be modified by adding or removing `input` blocks inside the procedure block. Don't worry, all of this will become more clear as we move forward.

Perhaps you've wondered to yourself what kind of person can create programs. Now you know the answer: You. Believe it or not, you now know 80% of what you need to know to work with App Inventor.

Next, let's play around with the [Camera](../camera).

---
title: QR Code
---

A QR code is similar to a barcode, and like a barcode, can encode all kinds of text. When making a puzzle hunt, you can stick QR codes in designated places so that players can scan them for clues, hints, directions, or any kind of information that you wish to share. In this tutorial, you will learn how to scan QR codes.

<div class="note">
  <p>You can learn about how to generate your own QR codes in the <a href="../server">Server</a> chapter.</p>
</div>

Download [QRCode.aia]({{ site.baseurl }}/img/qr-code/QRCode.aia) and [import it into App Inventor](../import-project). The screen should look like this:

![]({{ site.baseurl }}/img/qr-code/qr-code-interface.png)

Now drag a `BarcodeScanner` (from the Sensors section) into the screen, and make sure to uncheck the "UseExternalScanner" checkbox.

<div class="exercise">
  <p>Make it so that clicking the Scan button triggers a scan.</p>

  <p class="hint">If you get an error that says "Error 1501: Your device does not have a scanning application installed", it means you forgot to uncheck "UseExternalScanner".</p>
</div>

Run the app in your phone, and then use it to scan this QR code:

![]({{ site.baseurl }}/img/qr-code/hello.svg)

The `BarCodeScanner` component can convert any valid barcode or QR code to its underlying text. Sometimes this underlying text is actually the URL of a web page. For example, this one:

![]({{ site.baseurl }}/img/qr-code/maru-url.svg)

<div class="exercise">
  <p>Fix the app so that after you scan a QR code containing a URL, you can click the "Open web page" button to open the URL in the browser on your phone.</p>
</div>

Run the app and open the scanned URL in your phone's browser (or any app capable of opening a URL). Hooray! Now you can leave QR codes around the house so that your family members can scan them and get their daily dose of cat videos.

But wait, have you noticed that there's a bug in your program? See what happens if you scan the first QR code, then click the "Open web page" button.

<div class="exercise">
  <p>Fix the bug so that if you scan a QR code that doesn't convert to a URL, the "Open web page" button is disabled.</p>

  <p class="hint">All URLs start with "http".</p>

  <p class="hint">You'll have to use the <code>starts at</code> block. It might help to view the <a href="http://appinventor.mit.edu/explore/ai2/support/blocks/text.html#startsat">documentation on text blocks</a>.</p>
</div>

Excelsior! In this chapter, you learned about QR codes and how they can be used to direct users to Internet cat videos. You are one step closer to becoming Lord of the Infinite!

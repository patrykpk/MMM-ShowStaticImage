# Issues under development
## Problem 1:
While developing this module I had to test with quite a few different image sizes to make sure that everything was working correctly. 

Problem that occured under development of this module was that the header wasn't affected by resizing the image and that it retained the image's original width. This was a problem because if there was another module added in the same section the width would be affected by the previous one. This resulted in the header spanning over the whole width of the screen. An example of this can be seen beneath, where module div isn't affected by resizing the image.

<p align="center">
 <img width="397" height="160" src="https://user-images.githubusercontent.com/54407312/88849647-75f89800-d1ea-11ea-9993-a7f10cccd0ea.png">
 <img width="397" height="160" src="https://user-images.githubusercontent.com/54407312/88849719-94f72a00-d1ea-11ea-8341-a127cf55c0da.png"">
</p>

## Solution:
After trying several solutions I found out that scaling the image with percentages like 30% or 100% didn't really work and that I had to instead scale using pixels. Making a variable corresponding to the same scaling this way,

```javascript
var scaleFactor = this.config.imageScale;
var resizeImage = parseFloat(scaleFactor)/100*imageStatic.width;
imageStatic.setAttribute("width", `${resizeImage}px`);
```

Also this led to problems as I didn't really know Javascript that well and the image was simply missing at this point and I kept on getting 0 when returning the new width. In order to fix this the scaling had to be done within an ``onload Event`` to make sure that the image has loaded properly and that the initial width can be used. At this point I only had to use this new value by string formatting and this is something I spent way too long figuring out. Realizing that I couldn't simply use " or ' and instead had to wrap string within backtick ` made me facepalm on the spot as I'm used to coding in Python and this caught me off-guard.

___

## Problem 2:
Accesing variables and functions was somewhat confusing due to the way Modules are set up. When I wanted to use the ``default`` values everything worked correctly within the ``getDom`` function, when I instead wanted to use this same variable inside an ``onload Event`` it no longer worked. Similar behavior was seen for the case of my ``errorOccured`` function.

> "**Uncaught TypeError**: this.errorOccured is not a function at HTMLImageElement.imageStatic.onerror (MMM-ShowStaticImage.js:22)"

## Solution:
After some reading through possible cases and reading up on closure and lexical closure I found out that using ``function(){}`` didn't keep the scope of ``this`` and in order to fix this issue I had to either use arrow function ``() => {}`` or declare a new variable like ``const self/that = this;`` as it maintained the reference to the origianl ``this``. Both of these worked after testing them out and I stuck with the arrow function method for this module.
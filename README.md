# MMM-ShowStaticImage

Simple Module for [MagicMirror²](https://magicmirror.builders/) for displaying a static image that I wrote in order to get a better understanding on how Module Development works.

## Using this module
In order to use this module on your MagicMirror² you'll have to include it in your modules array inside ``config/congfig.js`` file:

```javascript
{
	module: "MMM-ShowStaticImage",
	position: "top_left",	
  
	config: {
		image: "ShowStaticImageTest.svg",
		imageScale: "100%"
	}
},
```
## Configuration Options
Properties listed below can be configured:

Configuration option | Description |
---|---
``image`` | Filename with extension has to be given as input. A testing file is included in **":file_folder:Images"** folder called <br> **":page_facing_up:ShowStaticImageTest.svg"** with explanation of use as shown above <br> **Default Value:** ``""`` (Empty String)
``imageScale`` | Scaling factor for the image, where 100% retains the original size of the image. <br> **Default Value:** ``100%``
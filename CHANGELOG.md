# Changelog for MMM-ShowStaticImage

## **2020-07-29**
### **Added**
* Markdown file including the changelog explaining changes made to this module (**``Changelog.md``**).
* Markdown file including issues encountered under the development of this module (**``Encountered-Issues.md``**)

### **Changed**
* Updated **``README.md``** file, now contains information on how to include this module on MagicMirror² and the configuration options.

## **2020-07-16**
### **Added**
* Displaying error message if no image path is given or if the image doesn't exist.

### **Changed**
* Default scaling has been changed from ``30%`` to ``100%``.

### **Bug Fixes**
* Resizing of the image also correctly scales the surrounding div.
* Modules placed below MMM-ShowStaticImage no longer span over the whole width of the screen (Includes header).

## **2020-07-12**
* Initial version of this module.
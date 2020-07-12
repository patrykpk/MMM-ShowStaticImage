/* Magic Mirror 
 * Module: MMM-ShowStaticImage
 * 
 * By Patryk Krzyzaniak (https://github.com/patrykpk)
 */

Module.register("MMM-ShowStaticImage", {
    defaults: {
            image: "",
            imageScale: "30%"
    },

    getDom: function(){
            var wrapper = document.createElement("div");
            var imageStatic = document.createElement("img");
            let imagePath = "modules/MMM-ShowStaticImage/images/";
            
            imageStatic.setAttribute("src", imagePath + this.config.image);
            imageStatic.setAttribute("width", this.config.imageScale);
            wrapper.appendChild(imageStatic);
            return wrapper;

    },
});
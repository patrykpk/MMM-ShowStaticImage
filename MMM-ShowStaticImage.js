/* Magic Mirror 
 * Module: MMM-ShowStaticImage
 * 
 * By Patryk Krzyzaniak (https://github.com/patrykpk)
 */

Module.register("MMM-ShowStaticImage", {
        defaults: {
                image: "",
                imageScale: "100%"
        },
        
        getDom: function(){
                var wrapper = document.createElement("div");
                
                var imageStatic = document.createElement("img");
                let imagePath = "modules/MMM-ShowStaticImage/images/";
                imageStatic.setAttribute("src", imagePath + this.config.image);
                
                imageStatic.onerror = () => {
                        wrapper.className = "small dimmed";
                        var errorMessage = this.errorOccured();
                        wrapper.innerHTML = errorMessage;
                };
                
                imageStatic.onload = () => {
                        var scaleFactor = this.config.imageScale;
                        var resizeImage = parseFloat(scaleFactor)/100*imageStatic.width;
                        imageStatic.setAttribute("width", `${resizeImage}px`);
                };        
                
                wrapper.appendChild(imageStatic);
                return wrapper;
        },
        
        errorOccured: function(){
                if (this.config.image === ""){
                        errorMsg = "Required paramter missing: No image path was given";
                }
                else{
                        errorMsg = "An error occured. Could not load this image.";
                }
                return errorMsg;
        }
});

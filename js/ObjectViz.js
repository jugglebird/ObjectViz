/**
 * Copyright (c) 2011 David Bruant
 * MIT Licence. (see LICENCE file at directory root)
 */

"use strict";

(function(global){
    
    global.ObjectViz = function(o){
        var canvas;
        
        // Empty previous work
        document.body.innerHTML = '';
        
        if(typeof o !== "object" && typeof o !== "function") 
            throw TypeError("What you want to visualize is not an object or a function. It's a "+ typeof o);
        
        while(o !== null){
            canvas = document.createElement('div');
            canvas.className = 'canvas';
            document.body.appendChild(canvas);
            
            global.ObjectOwnViz(o, canvas);
            o = Object.getPrototypeOf(o);
        }
    };
    
})(window);

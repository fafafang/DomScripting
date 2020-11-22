function addLoadEvent(func) {
   let oldOnload = window.onload;
   if (typeof oldOnload != "function") {
       window.onload = func;
   }
   else {
       window.onload = function() {
          oldOnload();
          func();
       }
   }
}
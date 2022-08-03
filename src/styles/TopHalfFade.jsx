
export function fadeOut(element) {
 if(!element){
   return;
 }
//  console.log("got this far!!")
 const topDistance = window.pageYOffset + 
 document.getElementById('routesFade').getBoundingClientRect().top;
//  console.log("top Distance is ", topDistance)
 
 let elementHeight = element.offsetHeight;
 // console.log("element height: ", elementHeight)
 let scrollTop = document.documentElement.scrollTop;
//  console.log("Scroll Top is ", scrollTop)
 let opacity = 1;
 
 if (scrollTop > topDistance) {
   opacity = 1 - (scrollTop - topDistance) / elementHeight;
   
 }

 if (opacity >= 0) {
   element.style.opacity = opacity;
  console.log("opacity is :", opacity);
 }

}




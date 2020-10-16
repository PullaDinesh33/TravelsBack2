// create the module and name it scotchApp
console.log("entering to js")    
var scotchApp = angular.module('RoutingApp',["ngRoute"]);

// configure our routes    
scotchApp.config(function($routeProvider) {  
    $routeProvider  
  
    // route for the home page    
       
.when("/manali", {  
  templateUrl:"assets/templates/manali.html"
})
.when("/manali1", {  
  templateUrl:"assets/templates/manali1.html"
})
.when("/default", {  
  templateUrl:"assets/templates/default.html"
})
.when("/map", {  
  templateUrl:"assets/templates/map.html"
})
.when("/review", {  
  templateUrl:"assets/templates/review.html"
})
    .otherwise({
        redirectTo: ''
    });
  
    
});  

console.log("hiii 152")

function popup(){
  console.log("hiii")
  prompt("Enter your review")
}
  


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}


console.log("123456")
function hideapp(){
    console.log("hideapp")
  }
  


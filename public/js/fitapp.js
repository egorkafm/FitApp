// https://www.w3schools.com/js/default.asp
// https://www.npmjs.com/package/vanilla-js-dom

(function() {



})();

// SELECTORS

// find parent
var headMenu = document.getElementById('head_menu');
// find children inside parent
var menuItems = headMenu.getElementsByTagName('li');
// get children quantity
var menuItemsQty = menuItems.length;

// show alert with items quantity
var $titlediv = document.getElementsByClassName("header__logo")[0],
title = $titlediv.innerHTML;

//alert(title);

// helper function (method)
var getElemStyle = function(elem, property) {
    return window.getComputedStyle(elem, null).getPropertyValue(property);
};
    //alert (getElemStyle($titlediv, "width"));

// EVENTS
// function that assigns click event to the menu item
var menuEvnt = function(elem) {
    elem.addEventListener('click', function(e) {
        var $th = this,
        url = $th.getAttribute("data-url");
        alert(url);
        // location.href = url;
    });
}; 

// CSS manipulation
// global variables
var currentColor, hoverColor = 'red';

// function that assigns hovering events to the menu item
var changeMenuItemColor = function(elem) {
    elem.addEventListener('mouseenter', function(e) {
        var $th = this,
        $anch = $th.getElementsByTagName('a')[0];
        // re-define global variable so it will be available for another function
        //currentColor = window.getComputedStyle($anch, null).getPropertyValue('color'); 
        currentColor = getElemStyle($anch, 'color');
        $anch.style.color = hoverColor;
    });
    elem.addEventListener('mouseleave', function(e) {
        var $th = this,
        $anch = $th.getElementsByTagName('a')[0];
        $anch.style.color = currentColor;
    });
};

// LOOPS
// go through menu items signing click events
for (var i = 0; i < menuItemsQty -1; i++) {
    changeMenuItemColor(menuItems[i]);
    menuEvnt(menuItems[i]);

};


// -------------------->>>
// for the GetApp button you have just one element,
// so you don't need to use loop 
// just add unique identifier for this element and find element using this identifier
// I have added class="getAppBtn"
var getAppButton = document.getElementsByClassName('getAppBtn')[0];
// after we get element we need assign Event to it
getAppButton.addEventListener('mouseenter', function() {
    var $th = this;
    // our currentColor variable is general and universal for each Event
    // every time we hover on any element we can use it to store current element color
    currentColor = getElemStyle($th, 'background-color');
    $th.style.background = 'black';
});
getAppButton.addEventListener('mouseleave', function() {
    var $th = this;
    $th.style.background = currentColor;
});
// and click Event
getAppButton.addEventListener('click', function() {
    var $th = this,
    // our data-url attribute is in the parent element,
    // so we have to get it first before we get the attribute value itself
    $parent = $th.parentNode,
    url = $parent.getAttribute('data-url');
    
    alert(url);
    // loction.href = url;
});





























// find parent
var contentLastItem = document.getElementById('contentMiddleFood');
// find children inside parent
var foodItems = contentLastItem.getElementsByClassName('content__middle-food');
// get children quantity
var foodItemsQty = foodItems.length;

var hovercontentMiddleFood = 'black';
var currenthovercontentMiddleFood = "white";
var hoverBorderColor = "red";

var changeMenuFoodItemColor = function(elem) {
    elem.addEventListener('mouseenter', function(e) {
        var $th = this,
        $anch = $th.getElementsByClassName('content__middle-food');
        // re-define global variable so it will be available for another function
        //currentColor = window.getComputedStyle($anch, null).getPropertyValue('color'); 
        currenthovercontentMiddleFood = getElemStyle($anch, 'color');
        $anch.style.background = hovercontentMiddleFood;
        $anch.style.border = hoverWriteColor;
    });
    elem.addEventListener('mouseleave', function(e) {
        var $th = this,
        $anch = $th.getElementsByClassName('content__middle-food');
        $anch.style.background = currentBackgroundColor;
        $anch.style.border = currentColor;
    });
};

for (var i = 0; i < foodItemsQty; i++) {
    changeMenuFoodItemColor(foodItems[i]);
    foodEvnt(foodItems[i]);

};
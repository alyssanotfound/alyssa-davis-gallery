console.log("Carousel + History API Test")

// getmetag
// magictag
// is there one for comments

var currentURL;
var currentIndex = 0;
var testArray = ["image-1", "image-2", "image-3", "image-4", "image-5", "image-6", "image-7", "image-8", "image-9", "image-10",
                 "image-11", "image-12", "image-13", "image-14", "image-15", "image-16", "image-17", "image-18", "image-19", "image-20",
                 "image-21", "image-22", "image-23", "image-24", "image-25", "image-26", "image-27", "image-28", "image-29", "image-30",
                 "image-31", "image-32", "image-33", "image-34", "image-35", "image-36", "image-37", "image-38", "image-39", "image-40",
                 "image-41", "image-42", "image-43", "image-44", "image-45", "image-46", "image-47", "image-48", "image-49", "image-50",
                 "image-51", "image-52", "image-53", "image-54", "image-55", "image-56", "image-57", "image-58", "image-59", "image-60",
                 "image-61", "image-62", "image-63", "image-64", "image-65", "image-66", "image-67", "image-68", "image-69", "image-70",
                 "image-71", "image-72", "image-73", "image-74", "image-75", "image-76", "image-77", "image-78", "image-79", "image-80",
                 "image-81", "image-82", "image-83", "image-84", "image-85", "image-86", "image-87", "image-88", "image-89", "image-90",
                 "image-91", "image-92", "image-93", "image-94", "image-95", "image-96", "image-97", "image-98", "image-99", "image-100",
                 "image-101", "image-102", "image-103", "image-104"];

var initialPage = true;

/////////////////////////////////
//  -- TRIGGER ON PAGE LOAD -- //
/////////////////////////////////

// GET CURRENT URL NAME
currentURL = window.location.hash.slice( 1 );
console.log("CURRENT-URL: " + currentURL);


// UPDATE CAROUSEL TO MATCH URL
for (i = 0; i < testArray.length; i++) {
  if (currentURL === testArray[i] || currentURL === "") {
    currentIndex = parseInt(i);
    console.log("current-index: ", currentIndex);
    $('.m-scooch').scooch('move', currentIndex + 1);
  }
}
updateURL();
updateText();
initialPage = false;



// CATCH CAROUSEL SLIDE EVENT
if (initialPage === false) {
  $( ".m-scooch" ).on( "afterSlide", function(previousIndex, newIndex) {
    currentIndex = (parseInt($('.m-active .m-caption ').text(), 10) - 1);
    console.log("CURRENT-INDEX: ", currentIndex);
    updateURL();
    updateText();
  });
}



/////////////////////////
// -- BUTTON EVENTS -- //
/////////////////////////

// PREV BUTTON
function prevBtnPress() {
  console.log("CURRENT-INDEX: ", currentIndex);
  if (currentIndex === 0) {
    // currentIndex = testArray.length - 1;
    currentIndex = 0;
  } else {
    currentIndex--;
  }
  updateURL();
  updateText();
}

// NEXT BUTTON
function nextBtnPress() {
  console.log("CURRENT-INDEX: ", currentIndex);
  if (currentIndex === testArray.length - 1) {
    currentIndex = testArray.length - 1;
  } else {
    currentIndex++;
  }
  updateURL();
  updateText();
}







//////////////////////
// CLICK UPDATE URL //
//////////////////////


// CLICK PREV BUTTON
$(".button-prev").click(function() {
  prevBtnPress();
});


// NEXT BUTTON
$(".button-next").click(function() {
  nextBtnPress();
});





//////////////////////
// -- ARROW KEYS -- //
//////////////////////


// PREV BUTTON
function clickPrevBtnPress() {
  console.log("clickPrevBtnPress");
  $(".button-prev").trigger("click");
}

// PREV BUTTON
function clickNextBtnPress() {
  console.log("clickNextBtnPress");
  $(".button-next").trigger("click");
}

$('html').keydown(function(e){
  switch (e.which) {
    case 37:
      console.log("Left 37 Key");
      setTimeout(clickPrevBtnPress(), 500);
      break;
    case 39:
      console.log("Right 39 Key");
      setTimeout(clickNextBtnPress(), 500);
      break;
  }
});


////////////////////////////
// -- UPDATE FUNCTIONS -- //
////////////////////////////

function updateURL() {
  history.pushState("", "", "#" + testArray[currentIndex]);
}

function updateText() {
  console.log("Update Text");
  $(".counter").empty();
  // console.log(currentIndex.toString() + "/" + (testArray.length - 1).toString());
  $(".counter").append((currentIndex + 1).toString() + "/" + (testArray.length - 1).toString());
  $(".gallery-text").empty();
  $( ".gallery-text" ).append( textInfo[currentIndex] );
}

console.log("Carousel + History API Test")

// getmetag
// magictag
// is there one for comments

var currentURL;
var currentIndex = 0;
var testArray = ["image-1", "image-2", "image-3", "image-4", "image-5", "image-6", "image-7", "image-8", "image-9", "image-10",
                 "image-11", "image-12", "image-13", "image-14", "image-15", "image-16", "image-17", "image-18", "image-19", 
                 "image-20"];

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
  $(".counter").append((currentIndex + 1).toString() + "/" + (testArray.length).toString());
  $(".gallery-text").empty();
  $( ".gallery-text" ).append( textInfo[currentIndex] );
}

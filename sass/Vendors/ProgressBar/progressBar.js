window.onscroll = function () {
    scrollFunction();
  };
  
  var progressEle = document.getElementById("about-us");
  var posProgress = progressEle.offsetTop;
  var intElemOffsetHeight = progressEle.clientHeight;
  
  function scrollFunction() {
    if (window.pageYOffset + intElemOffsetHeight >= posProgress) {
      progressEle.classList.add("progess-animate");
    } else {
      progressEle.classList.remove("progess-animate");
    }
  }
  
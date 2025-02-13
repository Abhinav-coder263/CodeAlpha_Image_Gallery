
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 6 || document.documentElement.scrollTop > 6) {
          document.getElementById("topBtn").style.display = "block";
      } else {
          document.getElementById("topBtn").style.display = "none";
      }
  }

  
  function goToTop() {
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
  }
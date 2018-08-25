window.addEventListener ("load", myMain, false);

function myMain (evt) {
  var jsInitChecktimer = setInterval (checkForJS_Finish, 111);

  function checkForJS_Finish () {
    var btn = $(".question-content .action-btn-base .action-btn-set a")
    if (btn.length == 1) {
        clearInterval (jsInitChecktimer);
        btn.clone().appendTo(btn.parent());
        btn.html('<i class="fa fa-youtube" aria-hidden="true"></i> Watch Solution')
        var search = $("h3").text()
        btn.attr("href", "https://www.youtube.com/results?search_query=leetcode%20" + search + "&utm_source=leetcode-chrome-extension")
        btn.attr("target", "_blank")
    }
  }
}

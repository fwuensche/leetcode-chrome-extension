window.addEventListener("load", mainFunction, false)

function mainFunction(evt) {
  var jsInitChecktimer = setInterval(implementUI, 111);

  function implementUI() {
    addYoutubeButton()
    improveDiscussLink()
  }

  function addYoutubeButton() {
    var btn = $(".question-content .action-btn-base .action-btn-set a")
    if (btn.length == 1) {
      clearInterval(jsInitChecktimer)
      btn.clone().appendTo(btn.parent())
      btn.html('<i class="fa fa-youtube" aria-hidden="true"></i> Watch Solution')
      var search = $("h3").text()
      btn.attr("href", "https://www.youtube.com/results?search_query=leetcode%20" + search + "&utm_source=leetcode-chrome-extension")
      btn.attr("target", "_blank")
    }
  }

  function improveDiscussLink() {
    var tag = $(".tab-view .tab-item .fa.fa-comments").parent()
    tag.on('click', function() {
      window.location = tag.attr('href') + "?orderBy=most_votes&query=python"
    })
  }
}

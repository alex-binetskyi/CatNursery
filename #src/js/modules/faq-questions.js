$(".faq__question").click(function(e) {
  var active_question = $(e.currentTarget);
  if ($(active_question).hasClass("faq__question--active")) {
    $(active_question).removeClass("faq__question--active");
    var active_text = $(active_question).siblings(".faq__text");
    $(active_text).removeClass("faq__text--show");
  } else {
    $(active_question).addClass("faq__question--active");
    var active_text = $(active_question).siblings(".faq__text");
    $(active_text).addClass("faq__text--show");
  }
});

$("ul li").each(function () {
  var alt = $(this).children("img").attr("alt");
  $(this).append(
    '<span class="top"><span class="title">韓國每食</span>' + alt + "</span>"
  );
});
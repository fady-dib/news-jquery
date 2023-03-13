$(document).ready(function () {
    $.ajax({
      url: "http://localhost:8080/news/get-news.php",
      dataType: "json",
      success: function (data) {
        let html = "";
        $.each(data.news, function (index, value) {
          html += '<div class="article">';
          html += "<h3>" + value.title + "</h3>";
          html += "<p class='description'>" + value.description + "</p>";
          html += "<p class='date'>" + value.date + "</p>";
          html += "</div>";
          html += "<hr>"
        });
        $(".content").html(html);
      },
    });
  });
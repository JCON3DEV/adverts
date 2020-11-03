$("[data-toggle=popover]").popover({
  // container: ".popover-block-container",
  html: true,
  trigger: "focus",
  content: function () {
    var content = $(this).attr("data-popover-content");
    return $(content).children(".popover-body").html();
  },
});

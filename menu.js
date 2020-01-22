jQuery(document).ready(function() {
  jQuery(".toggle-nav").click(function(e) {
    jQuery(this).toggleClass("active");
    console.log(this);
    jQuery(".mainNav ul").toggleClass("active");
    e.preventDefault();
  });
});

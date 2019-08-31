$.fn.scrollToSection = function() {
  const links = this;
  links.click(clickHandler);

  function clickHandler(e) {
    e.preventDefault();
    const sectionToScroll = $(e.target.hash);
    console.log(sectionToScroll.offset().top);

    $("html, body").animate(
      {
          scrollTop: sectionToScroll.offset().top
      },
      400
    );
  }
};

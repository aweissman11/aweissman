let scrollPos = 0;

export const scrollToSection = (sectionId) => {
  return (() => {
    let endpoint = document.querySelector('#' + sectionId);

    window.scrollTo({
      top: endpoint.offsetTop - 20,
      left: 0,
      behavior: 'smooth'
    });
  })
}

export const handleScrollHeader = (e) => {
  if ((document.body.getBoundingClientRect()).top > scrollPos) {
  } else {
  }
  // saves the new position for iteration.
  scrollPos = (document.body.getBoundingClientRect()).top;
}
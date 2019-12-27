export const setVisOnScroll = (id, [visToggle]) => {
  let fromTop = window.pageYOffset;
  let screenHeight = window.innerHeight;
  let element = document.querySelector('#' + id);
  let topOfElement = element ? element.offsetTop : 0;

  if ((screenHeight + fromTop) > topOfElement) {
    visToggle(true);
  }
}
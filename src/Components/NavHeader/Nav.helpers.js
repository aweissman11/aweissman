
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

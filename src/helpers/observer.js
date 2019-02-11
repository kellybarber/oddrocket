export default (nodes) => {
  const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('slide-in');
      } else {
        entry.target.classList.remove('slide-in');
      }
    });
  });
  for(const key in nodes) {
    const node = nodes[key];
    intersectionObserver.observe(node);
  }
}

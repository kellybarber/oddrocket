export default (nodes) => {
  const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        console.log('in the view');
      } else {
        console.log('out of view');
      }
    });
  });
  for(const key in nodes) {
    const node = nodes[key];
    intersectionObserver.observe(node);
  }
}

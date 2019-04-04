export default (nodes, enterAnimation) => {
  const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        enterAnimation(entry.target);
      }
    });
  });

  nodes.forEach(node => intersectionObserver.observe(node));
}

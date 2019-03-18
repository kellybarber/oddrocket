export default (nodes, enterAnimation, leaveAnimation) => {
  const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        enterAnimation(entry.target);
      } else {
        leaveAnimation(entry.target);
      }
    });
  });

  nodes.forEach(node => intersectionObserver.observe(node));
}

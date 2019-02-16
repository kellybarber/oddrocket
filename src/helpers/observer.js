export default (nodes, animation) => {
  const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add(animation);
      } else {
        entry.target.classList.remove(animation);
      }
    });
  });

  nodes.forEach(node => intersectionObserver.observe(node));
}

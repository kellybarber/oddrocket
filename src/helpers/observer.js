export const observer = (node, animation) => {
  const intersectionObserver = new IntersectionObserver(entry => {
    const [ target ] = entry;
    if (target.intersectionRatio > 0) console.log(target.intersectionRatio)

  });

  intersectionObserver.observe(node);
};

export const groupObserver = (nodes, animation) => {
  const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        animation(entry.target);
      }
    });
  });

  nodes.forEach(node => intersectionObserver.observe(node));
};


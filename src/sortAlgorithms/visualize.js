let delay = 0;

export function updateDiv(
  currentElement,
  backgroundColor,
  height
) {
  delay++
  window.setTimeout(() => {
    currentElement.style.backgroundColor = backgroundColor;
    currentElement.style.height = `${height*2}px`;
  }, (delay * 10));
}
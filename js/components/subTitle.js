export function getSubTitle(text) {
  const title = document.createElement("h2");
  title.classList.add("sub-title");
  title.textContent = text;

  return title;
}

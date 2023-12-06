export function getImg(address, description) {
  const img = document.createElement("img");
  img.classList.add("image");
  img.src = address;
  img.alt = description;

  return img;
}

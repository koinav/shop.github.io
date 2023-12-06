export function getDesc(text) {
  const desc = document.createElement("p");
  desc.classList.add("desc");
  desc.textContent = text;

  return desc;
}

export function getDesc1(text) {
  const desc1 = document.createElement("p");
  desc1.classList.add("desc1");
  desc1.textContent = text;

  return desc1;
}

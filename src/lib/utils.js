export function append(parent, el) {
  return parent.appendChild(el);
}

export function appendClass(parent, el) {
  el.classList.add('buttons');
  return parent.appendChild(el);
}

export function appendClassButton(parent, el, i) {
  el.classList.add(`earthquake${i}`);
  return parent.appendChild(el);
}

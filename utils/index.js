function $el (identity, parent) {
  parent = parent || document
  return parent.querySelector(identity)
}
function addEvent (target, event, callback, bubbing) {
  bubbing = bubbing === undefined ? 'false' : bubbing
  target.addEventListener(event, callback, bubbing)
}
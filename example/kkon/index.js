const box = document.querySelector('main');
const elms = box.querySelectorAll('span');
const windowWidth = document.body.clientWidth;
const windowHeight = document.body.clientHeight;
const elmSize = windowWidth / 10;
const range = windowHeight * 2;
const positions = ['top', 'left', 'right', 'bottom'];

box.style.height = windowHeight * 3 + 'px';
box.style.fontSize = elmSize + 'px';

const col = Array.prototype.map.call(elms, elm => {
  const style = elm.style;
  const pos = {};

  console.log(style.top);

  positions.forEach(item => {
    if (style[item] && style[item] !== '0px') {
      pos[item] = Number(style[item].match(/\d+/)[0]);
    }
  });

  return pos;
});
console.log(col);

window.addEventListener('scroll', function (e) {
  const out = window.scrollY;

  elms.forEach((item, i) => {
    const curStyle = col[i];
    for (const key in curStyle) {
      const n = 100 - out / range * 100;
      item.style[key] = (n < 0 ? 0 : n) + '%';
    }
  })
}, false)
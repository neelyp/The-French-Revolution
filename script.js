import data from './paragraphs.json' assert { type: 'json' };

const select = document.getElementById('paragraph');
const p = document.getElementById('text');

select.onchange = () => {
  const sel = select.value;

  // if (sel == 'd') {
  //   p.innerHTML = ' ';
  // } else {
  try {
    p.innerHTML = data[sel];
  } catch (err) {
    console.error(err);
    p.innerHTML = ' ';
  }
  // }
};

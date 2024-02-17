import data from './paragraphs.json' assert { type: 'json' };

const select = document.getElementById('paragraph');
const p = document.getElementById('text');
const img = document.getElementById('img-wrapper');

select.onchange = () => {
  const sel = select.value;

  try {
    p.innerHTML = data[sel].Paragraph;
    img.innerHTML = `<img src="${data[sel].img}" alt="${data[sel]}" style="height: 25%; width: 25%;" />`
  } catch (err) {
    console.error(err);
    p.innerHTML = ' ';
  }
};

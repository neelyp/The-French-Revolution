window.onload = async function () {
  const response = await fetch('./paragraphs.json');
  const data = await response.json();

  const select = document.querySelector('#paragraph');
  const p = document.querySelector('#text');
  const img = document.querySelector('#img-wrapper');
  const title = document.querySelector('#title');

  select.onchange = () => {
    const sel = select.value;

    try {
      p.innerHTML = data[sel].Paragraph;
      img.innerHTML = `<img src="${data[sel].img}" alt="${data[sel]}" style="height: 28%; width: 30%;" />`;

      title.innerHTML = select.options[select.selectedIndex].text;
    } catch (err) {
      console.error(err);
      p.innerHTML = ' ';
    }
  };
};

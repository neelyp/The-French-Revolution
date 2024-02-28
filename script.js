window.onload = async function () {
  const response = await fetch('./paragraphs.json');
  const data = await response.json();

  const queryString = window.location.search;
  const param = new URLSearchParams(queryString);
  const person = param.get('person');

  const select = document.querySelector('#paragraph');
  const p = document.querySelector('#text');
  const img = document.querySelector('#img-wrapper');
  const title = document.querySelector('#title');

  const values = [
    'Louis',
    'Marie',
    'Robespierre',
    'ROT',
    'Guillotine',
    'Storming',
    'Meeting',
    'Oath',
  ];

  const getParagraph = (sel) => {
    try {
      p.innerHTML = data[sel].Paragraph;
      img.innerHTML = `<img src="${data[sel].img}" alt="${data[sel]}" style="height: 20rem; width: 20rem;" />`;

      title.innerHTML = select.options[select.selectedIndex].text;
    } catch (err) {
      console.error(err);
      p.innerHTML = ' ';
    }
  };

  if (values.includes(person)) {
    getParagraph(person);
  }

  select.onchange = () => {
    param.set('person', select.value);
    getParagraph(select.value);
  };
};

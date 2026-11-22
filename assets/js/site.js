(() => {
  const grid = document.querySelector('#post-grid');
  const links = Array.from(document.querySelectorAll('[data-filter]'));
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll('[data-section]'));
  const label = document.querySelector('#listing-title');
  const count = document.querySelector('#visible-count');
  const empty = document.querySelector('#filter-empty');
  const titles = {all: '전체 글', feature: '특집기획', criticism: '비평', essay: '칼럼·에세이', review: '리뷰'};
  function update() {
    const key = location.hash.replace(/^#/, '');
    const selected = Object.hasOwn(titles, key) ? key : 'all';
    let visible = 0;
    cards.forEach(card => {
      const show = selected === 'all' || card.dataset.section === selected;
      card.hidden = !show;
      if (show) visible++;
    });
    links.forEach(link => {
      if (link.dataset.filter === selected) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    label.textContent = titles[selected];
    count.textContent = `${visible}편`;
    if (empty) empty.hidden = visible !== 0;
  }
  window.addEventListener('hashchange', update);
  update();
})();

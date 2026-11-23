(() => {
  const grid = document.querySelector('#post-grid');
  if (!grid) return;
  const links = Array.from(document.querySelectorAll('[data-filter]'));
  const cards = Array.from(grid.querySelectorAll('[data-section]'));
  const label = document.querySelector('#listing-title');
  const count = document.querySelector('#visible-count');
  const empty = document.querySelector('#filter-empty');
  const search = document.querySelector('#search-posts');
  const clear = document.querySelector('#clear-search');
  const titles = {all:'전체 글',feature:'특집기획',criticism:'비평',essay:'칼럼·에세이',review:'리뷰'};
  function update() {
    const key = location.hash.replace(/^#/, '');
    const section = Object.prototype.hasOwnProperty.call(titles,key) ? key : 'all';
    const tokens = (search?.value || '').toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    cards.forEach(card => {
      const data = (card.dataset.search || '').toLocaleLowerCase();
      const show = (section === 'all' || card.dataset.section === section) && tokens.every(token => data.includes(token));
      card.hidden = !show;
      if (show) visible++;
    });
    links.forEach(link => link.dataset.filter === section ? link.setAttribute('aria-current','page') : link.removeAttribute('aria-current'));
    label.textContent = titles[section];
    count.textContent = `${visible}편`;
    if (empty) empty.hidden = visible !== 0;
  }
  search?.addEventListener('input',update);
  clear?.addEventListener('click',()=>{search.value='';update();search.focus();});
  window.addEventListener('hashchange',update);
  update();
})();

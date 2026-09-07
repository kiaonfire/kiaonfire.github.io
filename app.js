
document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.local-nav');
  const menu=document.querySelector('.menu-button');
  if(nav&&menu){
    menu.addEventListener('click',()=>{
      const open=nav.classList.toggle('open');
      menu.setAttribute('aria-expanded',String(open));
    });
  }
  const search=document.querySelector('[data-quick-search]');
  const cards=[...document.querySelectorAll('[data-quick-card]')];
  if(search&&cards.length){
    search.addEventListener('input',()=>{
      const q=search.value.toLowerCase().trim();
      cards.forEach(c=>{c.hidden=!c.innerText.toLowerCase().includes(q);});
    });
  }
});

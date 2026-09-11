(function(){
  const root=document.documentElement;
  const key='inclusive-teaching-hub-design-option';
  function current(){ const d=root.getAttribute('data-design'); return (d==='2'||d==='3')?d:'1'; }
  function apply(n, announce){
    if(!['1','2','3'].includes(n)) n='1';
    root.setAttribute('data-design',n);
    try{ localStorage.setItem(key,n); }catch(e){}
    document.querySelectorAll('[data-design-option]').forEach(btn=>btn.setAttribute('aria-pressed', btn.dataset.designOption===n ? 'true':'false'));
    const st=document.getElementById('design-option-status'); if(st && announce) st.textContent='Option '+n+' selected.';
  }
  document.addEventListener('DOMContentLoaded',()=>{
    apply(current(),false);
    document.querySelectorAll('[data-design-option]').forEach(btn=>btn.addEventListener('click',()=>apply(btn.dataset.designOption,true)));
    const menu=document.querySelector('.menu-button'), nav=document.getElementById('hub-navigation');
    if(menu&&nav){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('is-open',!open);});}
  });
})();
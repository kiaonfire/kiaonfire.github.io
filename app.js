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
// Lightweight guidance-page reflection and action checklists.
(function(){
  const prefix='inclusive-teaching-hub-check:';
  function keyFor(box){ return prefix + box.dataset.checkKey; }
  function setStored(box, checked){ try{ localStorage.setItem(keyFor(box), checked ? '1' : '0'); }catch(e){} }
  function getStored(box){ try{ return localStorage.getItem(keyFor(box)) === '1'; }catch(e){ return false; } }
  function sameKeyBoxes(box){ return Array.from(document.querySelectorAll('[data-check-key="'+box.dataset.checkKey+'"]')); }
  function updateProgress(container){
    if(!container) return;
    const boxes=Array.from(container.querySelectorAll('input[type="checkbox"][data-check-key]'));
    const done=boxes.filter(b=>b.checked).length;
    const target=container.querySelector('.framework-checklist__progress');
    if(target) target.textContent=done+' of '+boxes.length+' checked';
  }
  function updateAllProgress(){ document.querySelectorAll('.framework-checklist').forEach(updateProgress); }
  document.addEventListener('DOMContentLoaded',()=>{
    const boxes=Array.from(document.querySelectorAll('input[type="checkbox"][data-check-key]'));
    boxes.forEach(box=>{ box.checked=getStored(box); });
    updateAllProgress();
    boxes.forEach(box=>box.addEventListener('change',()=>{
      sameKeyBoxes(box).forEach(peer=>{ peer.checked=box.checked; });
      setStored(box,box.checked);
      updateAllProgress();
    }));
    document.querySelectorAll('.checklist-reset').forEach(btn=>btn.addEventListener('click',()=>{
      const container=btn.closest('.framework-checklist');
      if(!container) return;
      container.querySelectorAll('input[type="checkbox"][data-check-key]').forEach(box=>{
        sameKeyBoxes(box).forEach(peer=>{ peer.checked=false; });
        setStored(box,false);
      });
      updateAllProgress();
    }));
  });
})();

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


// Drupal-style ITaLI navigation and prototype analytics helpers.
(function(){
  document.addEventListener('DOMContentLoaded',()=>{
    const b=document.querySelector('.uq-site-menu');
    const n=document.getElementById('uq-site-links');
    if(b&&n){b.addEventListener('click',()=>{const open=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!open));n.classList.toggle('is-open',!open);});}
    // Make the currently selected design available as a Clarity custom tag.
    const active=document.documentElement.getAttribute('data-design')||'1';
    if(typeof window.clarity==='function'){
      window.clarity('set','designOption','Option '+active);
      window.clarity('event','prototype_loaded_option_'+active);
    }
    document.querySelectorAll('[data-design-option]').forEach(btn=>btn.addEventListener('click',()=>{
      const n=btn.dataset.designOption;
      if(typeof window.clarity==='function'){
        window.clarity('set','designOption','Option '+n);
        window.clarity('event','design_option_'+n);
      }
    }));
  });
})();


// UQ-style local-navigation mobile toggle.
(function(){
  document.addEventListener('DOMContentLoaded',()=>{
    const b=document.querySelector('.uq-local-nav-toggle');
    const n=document.querySelector('.uq-local-nav');
    if(b&&n){
      b.addEventListener('click',()=>{
        const open=b.getAttribute('aria-expanded')==='true';
        b.setAttribute('aria-expanded',String(!open));
        n.classList.toggle('is-open',!open);
      });
    }
    const menu=document.querySelector('.uq-header__menu-toggle button');
    const mobile=document.getElementById('global-mobile-nav');
    if(menu&&mobile){
      menu.addEventListener('click',()=>{
        const open=menu.getAttribute('aria-expanded')==='true';
        menu.setAttribute('aria-expanded',String(!open));
        mobile.classList.toggle('is-open',!open);
      });
    }
  });
})();


// Copy-to-clipboard helpers for ready-to-adapt framework templates.
(function(){
  async function copyText(text){
    if(navigator.clipboard && window.isSecureContext){
      await navigator.clipboard.writeText(text);
      return;
    }
    const ta=document.createElement('textarea');
    ta.value=text;
    ta.setAttribute('readonly','');
    ta.style.position='fixed';
    ta.style.opacity='0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('[data-copy-target]').forEach(btn=>{
      btn.addEventListener('click',async()=>{
        const target=document.getElementById(btn.dataset.copyTarget);
        if(!target) return;
        const box=btn.closest('.outcome-template');
        const status=box ? box.querySelector('.outcome-copy-status') : null;
        try{
          await copyText(target.textContent.trim());
          if(status) status.textContent='Copied to clipboard.';
        }catch(e){
          if(status) status.textContent='Select the text and copy it manually.';
        }
      });
    });
  });
})();


// Inclusive learning outcomes: UQ-style accordion and copy helpers.
(function(){
  function setAccordionState(button, open){
    const contentId = button.getAttribute('aria-controls');
    const content = document.getElementById(contentId);
    if(!content) return;

    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    content.setAttribute('aria-hidden', open ? 'false' : 'true');
    content.classList.toggle('uq-accordion__content--active', open);

    const icon = button.querySelector('.learning-outcomes-accordion__icon');
    if(icon){
      icon.classList.toggle('uq-icon--standard--chevron-down', !open);
      icon.classList.toggle('uq-icon--standard--chevron-up', open);
    }
  }

  async function copyText(text){
    if(navigator.clipboard && window.isSecureContext){
      await navigator.clipboard.writeText(text);
      return;
    }
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly','');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }

  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.learning-outcomes-accordion .uq-accordion__toggle').forEach(function(button){
      button.addEventListener('click', function(){
        const open = button.getAttribute('aria-expanded') === 'true';
        setAccordionState(button, !open);
      });
    });

    document.querySelectorAll('.learning-outcomes-copy-button[data-copy-target]').forEach(function(button){
      button.addEventListener('click', async function(){
        const target = document.getElementById(button.dataset.copyTarget);
        if(!target) return;
        const status = button.parentElement.querySelector('.learning-outcomes-copy-status');
        try{
          await copyText(target.textContent.trim());
          if(status) status.textContent = 'Copied to clipboard.';
        }catch(e){
          if(status) status.textContent = 'Select the wording and copy it manually.';
        }
      });
    });
  });
})();

'use strict';
const $ = (selector) => document.querySelector(selector);
let pageIndex = 0;
let layoutFrame;
const arrow = '<path d="M1 1L8 5L1 9" fill="none" stroke="#aeb7c8" stroke-width="1.3"/>';

function headerFor(board) {
  const product = PRODUCTS[board.product];
  const type = board.type === 'wordings' ? 'de synthèse — Wordings' : board.type === 'navigation' ? '01 — Navigation' : '02 — Parcours';
  return `<div class="board-brand"><div class="board-brand-left"><img src="assets/okko.png" alt="OKKO"><span>Planche ${type}</span></div><div class="product">${product.logo ? `<img src="${product.logo}" alt="">` : ''}<span>${product.name}</span></div></div>
  <div class="board-heading"><h1>${board.title}</h1><p>${board.subtitle}</p></div>`;
}
function footerFor(board) {
  return `<div class="board-footer"><span>Étude comparative pour OKKO<br>${board.type === 'wordings' ? 'Libellés conservés et correspondances de rôle' : 'Libellés de l’interface en anglais, explications en français'}</span><span class="page-no">${PRODUCTS[board.product].name} / ${board.type === 'wordings' ? 'Synthèse' : board.type === 'navigation' ? '01' : '02'}</span></div>`;
}
function currentHash() {
  const route = location.hash.replace(/^#/, '') || 'xray/navigation';
  const index = BOARDS.findIndex(board => `${board.product}/${board.type}` === route);
  return index < 0 ? 0 : index;
}
function render() {
  pageIndex = currentHash();
  const board = BOARDS[pageIndex];
  const product = PRODUCTS[board.product];
  document.title = `${product.name} — ${board.type === 'wordings' ? 'Wordings' : board.type === 'navigation' ? 'Navigation' : 'Parcours'} | OKKO`;
  $('.tools').innerHTML = Object.entries(PRODUCTS).map(([key, item]) => `<a href="#${key}/${key === 'comparaison' ? 'wordings' : board.type === 'wordings' ? 'navigation' : board.type}" ${key === board.product ? 'aria-current="page"' : ''}>${item.name}</a>`).join('');
  const selectedTool = $('.tools a[aria-current="page"]');
  const toolsNav = $('.tools');
  if (selectedTool) toolsNav.scrollLeft = Math.max(0, selectedTool.offsetLeft - toolsNav.offsetLeft - (toolsNav.clientWidth - selectedTool.offsetWidth) / 2);
  $('.tabs').innerHTML = board.type === 'wordings' ? '<a href="#comparaison/wordings" aria-current="page">Wordings et navigation</a>' : ['navigation', 'parcours'].map((type, index) => `<a href="#${board.product}/${type}" ${type === board.type ? 'aria-current="page"' : ''}><b>0${index + 1}</b>${type === 'navigation' ? 'Navigation' : 'Parcours'}</a>`).join('');
  $('#context').textContent = product.context;
  $('#board').innerHTML = headerFor(board) + board.render() + footerFor(board);
  $('#board').classList.toggle('comparison-board', board.type === 'wordings');
  if (board.type === 'wordings') initComparison();
  const mobileBranches={'x-create':'Si le test n’existe pas','x-find':'Si le test existe déjà','x-pass':'Si le résultat est conforme','x-fail':'Si le résultat est en échec','e-investigate':'Si l’écart est un défaut','e-reference':'Si le changement est voulu'};
  for(const [id,text] of Object.entries(mobileBranches)){
    const element=document.getElementById(id);
    if(element){element.insertAdjacentHTML('afterbegin',`<div class="mobile-branch">${text}</div>`);element.removeAttribute('data-next')}
  }
  $('#page-count').textContent = `${String(pageIndex + 1).padStart(2, '0')} / ${String(BOARDS.length).padStart(2, '0')}`;
  $('#previous').disabled = pageIndex === 0;
  $('#next').disabled = pageIndex === BOARDS.length - 1;
  $('#board').setAttribute('aria-label', `${product.name} — ${board.type}`);
  if ($('#sources-dialog').open) $('#sources-dialog').close();
  window.scrollTo({top:0,behavior:'instant'});
  scheduleLayout();
  document.fonts.ready.then(scheduleLayout);
}
function changePage(delta) {
  const next = currentHash() + delta;
  if (next < 0 || next >= BOARDS.length) return;
  location.hash = `${BOARDS[next].product}/${BOARDS[next].type}`;
}
function scheduleLayout() {
  cancelAnimationFrame(layoutFrame);
  layoutFrame = requestAnimationFrame(drawConnectors);
}
function drawConnectors() {
  document.querySelectorAll('.flow').forEach((container, graphIndex) => {
    const svg = container.querySelector('.connectors');
    const bounds = container.getBoundingClientRect();
    if (getComputedStyle(svg).display === 'none' || !bounds.width) return;
    svg.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
    const markerId = `arrow-${graphIndex}`;
    const parts = [`<defs><marker id="${markerId}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">${arrow}</marker></defs>`];
    const box = (id) => {
      const rect = document.getElementById(id).getBoundingClientRect();
      return {x:rect.x-bounds.x, y:rect.y-bounds.y, w:rect.width, h:rect.height};
    };
    const port = (rect, side) => ({
      top:[rect.x+rect.w/2,rect.y-2], bottom:[rect.x+rect.w/2,rect.y+rect.h+3],
      left:[rect.x-2,rect.y+rect.h/2], right:[rect.x+rect.w+2,rect.y+rect.h/2]
    })[side];
    for (const link of JSON.parse(container.dataset.edges)) {
      const source = box(link.from), target = box(link.to);
      const sourceSide = link.fromSide || 'bottom';
      const targetSide = link.toSide || 'top';
      let [sx, sy] = port(source,sourceSide), [tx, ty] = port(target,targetSide);
      if(link.from==='c-review' && link.to==='c-open'){sx-=48;tx-=48}
      let path, labelX, labelY, anchor='middle';
      if ((sourceSide==='left'||sourceSide==='right') && (targetSide==='left'||targetSide==='right')) {
        const mx = (sx+tx)/2;
        path = `M${sx} ${sy}H${mx}V${ty}H${tx}`;
        labelX = mx; labelY = Math.min(sy,ty)-12;
      } else if (sourceSide==='left'||sourceSide==='right') {
        path = `M${sx} ${sy}H${tx}V${ty}`;
        labelX=(sx+tx)/2; labelY=sy-12;
      } else {
        const my = (sy+ty)/2;
        path = `M${sx} ${sy}V${my}H${tx}V${ty}`;
        if(Math.abs(sx-tx)<10){labelX=sx+12;labelY=my;anchor='start'}
        else {labelX=(sx+tx)/2;labelY=my-10}
      }
      parts.push(`<path d="${path}" fill="none" stroke="#aeb7c8" stroke-width="1.2" ${link.dashed?'stroke-dasharray="4 4"':''} marker-end="url(#${markerId})"/>`);
      if (link.label) {
        const horizontal = (sourceSide==='left'||sourceSide==='right') && (targetSide==='left'||targetSide==='right');
        const maxLength=horizontal?Math.max(7,Math.floor((Math.abs(tx-sx)-8)/5.6)):100;
        const lines=[];let line='';
        for(const word of link.label.split(' ')){if(line && (line+' '+word).length>maxLength){lines.push(line);line=word}else line+=(line?' ':'')+word}
        if(line)lines.push(line);
        parts.push(`<text class="edge-label" x="${labelX}" y="${labelY-(lines.length-1)*13}" text-anchor="${anchor}">${lines.map((text,i)=>`<tspan x="${labelX}" dy="${i?13:0}">${text}</tspan>`).join('')}</text>`);
      }
    }
    svg.innerHTML = parts.join('');
  });
}
function showSources() {
  const board=BOARDS[pageIndex], product=PRODUCTS[board.product];
  if (board.type === 'wordings') {
    $('#sources-content').innerHTML=comparisonSources();
    $('#sources-dialog').showModal();
    return;
  }
  $('#sources-content').innerHTML=`<h3>${product.name}</h3><p>${product.scope}</p><p>Les intitulés de produit sont conservés en anglais et les explications sont rédigées en français<br>Les parcours illustrent un cas de connexion, sans prétendre reproduire tous les écrans du produit</p>${product.findings?`<h3>Repères pour la comparaison</h3><ul>${product.findings.map(text=>`<li>${text}</li>`).join('')}</ul>`:''}<h3>Documentation officielle</h3><ul>${product.sources.map(([name,url])=>`<li><a href="${url}" target="_blank" rel="noopener noreferrer">${name} ↗</a></li>`).join('')}</ul><p>Les observations de la rubrique « Lecture comparative » sont une analyse de l’organisation documentée, pas les résultats d’une étude utilisateur</p><p>${product.basis || 'Reconstruction à partir des captures fournies et de la documentation officielle'}<br>Sources consultées le ${product.reviewedAt || '13 novembre 2026'}</p>`;
  $('#sources-dialog').showModal();
}
async function startPresentation() {
  document.body.classList.add('presenting');
  $('#exit-present').hidden=false;
  window.scrollTo({top:0,behavior:'instant'});
  try { if (document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen(); } catch { /* Le mode épuré fonctionne aussi sans autorisation plein écran */ }
  scheduleLayout();
}
async function stopPresentation() {
  document.body.classList.remove('presenting');
  $('#exit-present').hidden=true;
  if (document.fullscreenElement) await document.exitFullscreen();
  scheduleLayout();
}
$('#previous').addEventListener('click',()=>changePage(-1));
$('#next').addEventListener('click',()=>changePage(1));
$('#sources').addEventListener('click',showSources);
$('#close-sources').addEventListener('click',()=>$('#sources-dialog').close());
$('#sources-dialog').addEventListener('click',(event)=>{if(event.target===$('#sources-dialog')){const r=event.target.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)event.target.close()}});
$('#present').addEventListener('click',startPresentation);
$('#exit-present').addEventListener('click',stopPresentation);
$('#print').addEventListener('click',()=>window.print());
window.addEventListener('hashchange',render);
window.addEventListener('resize',scheduleLayout);
window.addEventListener('beforeprint',drawConnectors);
window.addEventListener('afterprint',scheduleLayout);
document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement){document.body.classList.remove('presenting');$('#exit-present').hidden=true;scheduleLayout()}});
document.addEventListener('keydown',(event)=>{
  if($('#sources-dialog').open || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || event.target.isContentEditable || event.ctrlKey || event.metaKey || event.altKey)return;
  if(event.target.closest('.wc-table-wrap'))return;
  if(event.key==='ArrowRight'){event.preventDefault();changePage(1)}
  if(event.key==='ArrowLeft'){event.preventDefault();changePage(-1)}
  if(event.key==='Escape' && document.body.classList.contains('presenting'))stopPresentation();
});
new ResizeObserver(scheduleLayout).observe($('#board'));
render();


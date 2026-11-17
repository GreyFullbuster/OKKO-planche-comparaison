const comparisonEscape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const comparisonName = key => key === 'okko' ? 'OKKO v3' : PRODUCTS[key].name;
const comparisonGroup = {concevoir:'Concevoir et organiser',contexte:'Préparer le contexte',executer:'Exécuter et relire'};
const comparisonNormal = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function comparisonSources() {
 return `<h3>Corpus de la comparaison</h3><p>Les 14 planches de ce document et les libellés du projet local OKKO v3, relus le 16 novembre 2026</p><p>Les correspondances sont une analyse de rôle : elles ne démontrent ni une identité de fonctionnement ni une équivalence de fonctionnalités</p><h3>Référence OKKO v3</h3><p>Libellés relevés dans le code de l’interface, sans recette de l’application ni modification du projet OKKO v3</p><ul><li>Barre latérale : sidebar.component.ts et sidebar.component.html</li><li>Types et actions : config/library.ts</li><li>Structure des ressources : models/library.model.ts</li><li>Création : library-collection.component.ts</li><li>Rôles de la bibliothèque : library-categories.component.ts</li><li>Actions : library-detail, library-case-inline, library-resource-diagram et workflow-scenario-group</li><li>Exécutions et bilans : runs, run-detail et test-reports</li></ul><p>Répertoire de référence : okko-v3-web/src/app<br>La visibilité de certains accès dépend du projet, des droits et de l’état des ressources</p><h3>Études et documentation</h3><ul>${[...COMPARE_TOOLS,'clarity'].map(key=>`<li><a href="#${key}/navigation">${comparisonEscape(PRODUCTS[key].name)} — ouvrir l’étude</a><br>${PRODUCTS[key].sources.slice(0,1).map(([title,url])=>`<a href="${comparisonEscape(url)}" target="_blank" rel="noopener noreferrer">${comparisonEscape(title)}</a>`).join('')}</li>`).join('')}</ul><p>Chaque étude conserve sa documentation détaillée dans Sources et périmètre</p>`;
}
PRODUCTS.comparaison = {name:'Comparaison',context:'Wordings et correspondances avec OKKO v3',scope:'Analyse transversale des planches et des libellés d’OKKO v3',sources:[],reviewedAt:'16 novembre 2026'};
BOARDS.push({product:'comparaison',type:'wordings',title:'Comparer les mots de la navigation',subtitle:'Les libellés des sept études, leur rôle et leur correspondance avec OKKO v3',render:()=>`
 <div class="wording-study">
 <div class="wc-intro"><div><span class="wc-kicker">Référence de la comparaison</span><h2>OKKO v3, tel qu’il est nommé aujourd’hui</h2><p>Le tableau rapproche les usages, pas seulement les mots — un même intitulé peut désigner des objets de tailles ou de rôles différents</p></div><div class="wc-stat"><strong>${new Set(WORDING_CATALOG.flatMap(r=>r.terms.map(t=>r.tool+':'+t))).size}</strong><span>libellés relevés<br>par outil</span></div></div>
 <section class="wc-okko" aria-label="Navigation de référence OKKO v3">
 <div><h3>Bibliothèque</h3><p>Cas de test<br>Scénarios<br>Workflows<br>Données de test<br>Consignes Okko</p></div>
 <div><h3>Exécutions</h3><p>En cours<br>Historique<br>Bilans</p><small>Bilans est un sous-accès de navigation — En cours et Historique sont des sections de page</small></div>
 <div><h3>Sources</h3><p>Analyse des sources<br>Changements</p><small>Analyse et préparation en amont des tests</small></div>
 <div><h3>Réglages du projet</h3><p>Général<br>Environnements et accès<br>Intégrations</p><small>Vue d’ensemble donne aussi accès à Planification</small></div>
 </section>
 <nav class="wc-jump" aria-label="Sections de la comparaison"><a href="#wc-matrix" data-wc-jump="wc-matrix">Tableau comparatif ↓</a><a href="#wc-cautions" data-wc-jump="wc-cautions">Différences de sens ↓</a><a href="#wc-inventory" data-wc-jump="wc-inventory">Inventaire des libellés ↓</a></nav>
 <section id="wc-matrix"><h2 class="section-title">La navigation, besoin par besoin</h2><p class="wc-caption">Les intitulés d’interface sont conservés — les explications précisent le rapprochement avec OKKO</p>
 <form class="wc-controls" role="search" aria-label="Filtrer les comparaisons">
 <label>Rechercher un terme<input id="wc-search" type="search" placeholder="Scenario, suite, résultat…" autocomplete="off"></label>
 <label>Comparer avec<select id="wc-tool"><option value="all">Tous les outils</option>${[...COMPARE_TOOLS,'clarity','okko'].map(key=>`<option value="${key}">${comparisonEscape(comparisonName(key))}</option>`).join('')}</select></label>
 <label>Besoin<select id="wc-group"><option value="all">Tous les besoins</option>${Object.entries(comparisonGroup).map(([key,title])=>`<option value="${key}">${title}</option>`).join('')}</select></label>
 <button type="button" id="wc-reset">Réinitialiser</button></form>
 <p id="wc-status" class="wc-status" role="status" aria-live="polite"></p><div id="wc-matrix-content"></div>
 </section>
 <section id="wc-cautions" class="support-section"><h2 class="section-title">Les différences de sens à expliquer en présentation</h2><div class="wc-cautions">
 <div><h3>Cas et étapes n’ont pas la même taille partout</h3><p>Un <strong>Cas de test OKKO</strong> peut contenir plusieurs actions<br>Il ne correspond donc pas forcément à une action élémentaire dans les autres outils</p></div>
 <div><h3>Scenario change de rôle</h3><p>OKKO compose des cas de test<br>CucumberStudio définit un comportement<br>SOAtest configure des tests dépendants dans une suite</p></div>
 <div><h3>Workflow n’est pas synonyme de suite</h3><p>OKKO porte un diagramme et peut regrouper des scénarios<br>Un groupe de cas Katalon, un Test Plan Xray et un parcours E2E Kusho répondent à des besoins voisins, avec des structures différentes</p></div>
 <div><h3>Valider, exécuter et produire un bilan</h3><p><strong>Valider</strong> dans la bibliothèque OKKO approuve une définition<br>Le résultat vient de l’exécution<br><strong>Bilans</strong> rassemble des résultats existants dans un document partageable</p></div>
 </div><p class="wc-analysis">Lecture comparative du corpus — les intitulés OKKO ci-dessus sont les intitulés actuels, pas des propositions de renommage</p></section>
 <section id="wc-clarity" class="support-section"><h2 class="section-title">Microsoft Clarity — vocabulaire d’observation</h2><div class="wc-table-wrap" tabindex="0" role="region" aria-label="Comparaison Clarity"><table class="wc-clarity-table"><thead><tr><th scope="col">Libellés relevés</th><th scope="col">Ce qu’ils désignent</th><th scope="col">Lien avec OKKO</th></tr></thead><tbody>
 <tr><th scope="row">Dashboard / Heatmaps</th><td>Indicateurs et interactions agrégées</td><td>Contexte d’investigation — pas un rapport de réussite des tests</td></tr>
 <tr><th scope="row">Recordings / Session / Player</th><td>Observation d’une visite enregistrée</td><td>Source d’un comportement à reproduire — pas une Exécution OKKO</td></tr>
 <tr><th scope="row">Filters / Segments</th><td>Sélection des visites et regroupement de critères</td><td>Recherche dans des observations — pas un Scénario ni un Workflow de test</td></tr>
 </tbody></table></div></section>
 <section id="wc-inventory" class="support-section"><h2 class="section-title">Inventaire des libellés et de leurs emplacements</h2><p class="wc-caption">Menus, objets, onglets, commandes, champs et statuts cités dans les planches — regroupés par contexte<br>Les noms descriptifs d’éditeurs sont signalés comme tels ; les titres éditoriaux de présentation sont exclus</p><div class="wc-inventory-actions"><button type="button" id="wc-expand">Tout déplier</button><button type="button" id="wc-collapse">Tout replier</button></div><div id="wc-inventory-content"></div></section>
 </div>`});

function initComparison() {
 const search=document.querySelector('#wc-search');
 if(!search)return;
 const tool=document.querySelector('#wc-tool'),group=document.querySelector('#wc-group');
 const esc=comparisonEscape;
 document.querySelector('.wc-controls').addEventListener('submit',event=>event.preventDefault());
 document.querySelector('#wc-expand').addEventListener('click',()=>document.querySelectorAll('.wc-catalog').forEach(el=>el.open=true));
 document.querySelector('#wc-collapse').addEventListener('click',()=>document.querySelectorAll('.wc-catalog').forEach(el=>el.open=false));
 function update() {
  const q=comparisonNormal(search.value.trim()),selected=tool.value;
  const columns=selected==='all'?COMPARE_TOOLS:COMPARE_TOOLS.includes(selected)?[selected]:[];
  const matches=text=>!q||comparisonNormal(text).includes(q);
  const rows=COMPARISON_ROWS.filter(row=>(group.value==='all'||row.group===group.value)&&matches([row.need,...row.okko,...columns.flatMap(key=>{const c=row.cells[COMPARE_TOOLS.indexOf(key)];return [c.term,c.note]})].join(' ')));
  const records=WORDING_CATALOG.filter(row=>(selected==='all'||row.tool===selected||row.tool==='okko')&&(group.value==='all'||row.group===group.value)&&matches([row.place,row.kind,...row.terms,row.okko,row.note].join(' ')));
  document.querySelector('#wc-status').textContent=`${selected==='clarity'?0:rows.length} besoins comparés — ${records.length} groupes de libellés dans l’inventaire`;
  const matrix=document.querySelector('#wc-matrix-content');
  if(selected==='clarity')matrix.innerHTML='<p class="wc-empty">Clarity est présenté dans le tableau d’observation ci-dessous — ses objets ne sont pas assimilés à des tests</p>';
  else if(!rows.length)matrix.innerHTML='<p class="wc-empty">Aucune correspondance pour cette recherche — essayer un autre terme ou réinitialiser les filtres</p>';
  else matrix.innerHTML=`<p class="wc-scroll-note">${columns.length>2?'Le tableau défile horizontalement si nécessaire — sélectionner un outil pour une comparaison ciblée':'Lecture ciblée avec OKKO v3'}</p><div class="wc-table-wrap" tabindex="0" role="region" aria-label="Tableau comparatif de navigation"><table class="wc-matrix ${columns.length>2?'wc-wide':''}"><caption>Correspondances de rôle avec OKKO v3</caption><thead><tr><th scope="col">Besoin de navigation</th><th scope="col" class="wc-okko-cell">OKKO v3</th>${columns.map(key=>`<th scope="col"><a href="#${key}/navigation">${esc(PRODUCTS[key].name)} ↗</a></th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr><th scope="row"><span>${comparisonGroup[row.group]}</span>${esc(row.need)}</th><td class="wc-okko-cell"><strong>${esc(row.okko[0])}</strong><p>${esc(row.okko[1])}</p></td>${columns.map(key=>{const c=row.cells[COMPARE_TOOLS.indexOf(key)];return `<td class="${c.relation==='absent'?'wc-absent':''}"><strong>${esc(c.term)}</strong>${c.note ? `<p>${esc(c.note)}</p>` : ''}</td>`}).join('')}</tr>`).join('')}</tbody></table></div>`;
  document.querySelector('#wc-clarity').hidden=!(selected==='all'||selected==='clarity');
  const keys=['okko',...COMPARE_TOOLS,'clarity'];
  document.querySelector('#wc-inventory-content').innerHTML=records.length?keys.map(key=>{
   const entries=records.filter(r=>r.tool===key);if(!entries.length)return '';
   const count=new Set(entries.flatMap(r=>r.terms)).size;
   return `<details class="wc-catalog" ${q||selected!=='all'||key==='okko'?'open':''}><summary><span>${esc(comparisonName(key))}</span><span>${count} libellés</span></summary><div class="wc-catalog-inner">${key!=='okko'?`<a class="wc-study-link" href="#${key}/navigation">Revenir à la planche de navigation ↗</a>`:''}<div class="wc-table-wrap" tabindex="0" role="region" aria-label="Libellés ${esc(comparisonName(key))}"><table class="wc-inventory-table"><thead><tr><th scope="col">Libellés relevés</th><th scope="col">Nature et emplacement</th><th scope="col">Correspondance avec OKKO</th></tr></thead><tbody>${entries.map(row=>`<tr><td><div class="wc-terms">${row.terms.map(term=>`<span>${esc(term)}</span>`).join('')}</div></td><td><strong>${esc(row.place)}</strong><p>${esc(row.kind)}</p></td><td><strong>${esc(row.okko)}</strong><p>${esc(row.note)}</p></td></tr>`).join('')}</tbody></table></div></div></details>`;
  }).join(''):'<p class="wc-empty">Aucun libellé trouvé dans l’inventaire</p>';
 }
 search.addEventListener('input',update);tool.addEventListener('change',update);group.addEventListener('change',update);
 document.querySelector('#wc-reset').addEventListener('click',()=>{search.value='';tool.value='all';group.value='all';update();search.focus()});
 document.querySelectorAll('[data-wc-jump]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();document.getElementById(link.dataset.wcJump).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}));
 update();
}



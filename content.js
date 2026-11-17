/* Planches initiales — les études complémentaires sont regroupées dans research.js */
const PRODUCTS = {
  xray: {name:'Xray Cloud', logo:'assets/xray.png', context:'Gestion des tests dans Jira', scope:'Xray Cloud — navigation documentée et exemple de test manuel dans Jira', sources:[
    ['Navigation et menus Xray','https://getxraydocs.atlassian.net/wiki/spaces/XRAYCLOUD/pages/44574837/Understanding+the+Interface'],
    ['Testing Board','https://getxraydocs.atlassian.net/wiki/spaces/XRAYCLOUD/pages/1193377803/Testing+Board'],
    ['Reporting Center','https://docs.getxray.app/space/XRAYCLOUD/338526916/Reporting+Center'],
    ['Organisation et exécution des tests','https://docs.getxray.app/space/XRAYCLOUD/44565291/How+to+implement+QA+in+your+projects'],
    ['Résultats et statuts','https://docs.getxray.app/space/XRAYCLOUD/44565101/Understanding+the+calculation+of+coverage+status+and+the+status+of+Tests'],
    ['Suivi des anomalies','https://docs.getxray.app/space/XRAYCLOUD/1027735560/Reporting+and+Tracking+Defects']
  ]},
  cucumber: {name:'CucumberStudio', logo:'assets/cucumber.svg', context:'Conception collaborative et tests manuels', scope:'CucumberStudio — projet avec Native features et exécution manuelle, distinct du framework Cucumber', sources:[
    ['Navigation et premier parcours','https://support.smartbear.com/cucumberstudio/docs/general-info/quick-start.html'],
    ['Action words','https://support.smartbear.com/cucumberstudio/docs/tests/action-words.html'],
    ['Génération des tests','https://support.smartbear.com/cucumberstudio/docs/tests/generate-tests.html'],
    ['Exécution et historique','https://support.smartbear.com/cucumberstudio/docs/tests/track-execution.html'],
    ['Intégration Jira','https://support.smartbear.com/cucumberstudio/docs/integrations/jira/index.html']
  ]},
  kusho: {name:'KushoAI', context:'API Testing — navigation de l’application Web', scope:'Espace API Testing de KushoAI — menus, pages de suites et panneau de détail des tests, avec les fonctions Enterprise identifiées', basis:'Relecture du 13 novembre 2026 à partir de la documentation et de ses captures officielles, sans session authentifiée dans le produit — la planche 01 reprend les libellés visibles dans ces captures', findings:[
    'Test Suite Details est le nom descriptif de la page dans la documentation — à l’écran, son titre est le nom de la suite et la liste est intitulée Tests',
    'Details déplie un panneau dans la liste — il ne mène pas à une page autonome Test Details',
    'Les captures affichent E2E Test Suites, Run All Tests et Assertions Results — certains textes de la documentation emploient aussi E2E Workflows, Run All et Assertion Results',
    'Les guides récents regroupent Using Payload et Using AI sous Add Tests — une capture plus ancienne montre deux boutons séparés',
    'Groups, E2E Test Suites et Dashboard sont documentés comme des fonctions Enterprise'
  ], sources:[
    ['Menu latéral et libellé E2E Test Suites — capture officielle','https://docs.kusho.ai/17-e2e/e2e-page.png'],
    ['Test Suites et création','https://docs.kusho.ai/2-test-suites/'],
    ['Import Documentation et création depuis un document','https://docs.kusho.ai/2-test-suites/import-doc/'],
    ['Test Suite Generation Status','https://docs.kusho.ai/15-staus-page/'],
    ['Contenu de la page de suite','https://docs.kusho.ai/3-test-suite-details/'],
    ['Barre d’actions récente et Run All Tests — capture officielle','https://docs.kusho.ai/10-adding-more-tests/add-tests-options.png'],
    ['Request, Response, Assertions et Assertions Results — capture officielle','https://docs.kusho.ai/3-test-suite-details/image-12.png'],
    ['Add Tests → Using Payload','https://docs.kusho.ai/10-adding-more-tests/using-payload/'],
    ['Add Tests → Using AI','https://docs.kusho.ai/10-adding-more-tests/using-ai/'],
    ['Functional et Security','https://docs.kusho.ai/2-test-suites/security/'],
    ['Define Test Data','https://docs.kusho.ai/6-editing-tests/define-test-data/'],
    ['Groups — périmètre Enterprise','https://docs.kusho.ai/13-groups/'],
    ['Create Group et navigation dans les groupes','https://docs.kusho.ai/13-groups/creating-groups/'],
    ['Recherche, menus de suites et Add to group','https://docs.kusho.ai/13-groups/add-remove-ts/'],
    ['Run Group et Go to test suite','https://docs.kusho.ai/13-groups/run-group/'],
    ['Manage Workspace → Environments','https://docs.kusho.ai/8-env-vars/creating-envs/'],
    ['Dashboard — périmètre Enterprise','https://docs.kusho.ai/6-dashboard/'],
    ['UI Testing — parcours distinct','https://docs.kusho.ai/19-ui-testing/'],
    ['Running tests','https://docs.kusho.ai/4-running-tests/'],
    ['Import cURL Command et génération asynchrone','https://docs.kusho.ai/2-test-suites/curl/'],
    ['Variables utilisées dans la requête','https://docs.kusho.ai/8-env-vars/using-vars-in-payload/'],
    ['Generate using AI puis Save and Run','https://docs.kusho.ai/5-assertions/generation-using-ai/'],
    ['Écrire et modifier les assertions','https://docs.kusho.ai/5-assertions/adding-custom-assertions/'],
    ['Assertions','https://docs.kusho.ai/5-assertions/'],
    ['Generate Report','https://docs.kusho.ai/9-reports/generating-report/'],
    ['E2E Test Suites et workflow builder','https://docs.kusho.ai/17-e2e/']
  ]},
  clarity: {name:'Microsoft Clarity', context:'Analyse des usages — regard complémentaire', scope:'Microsoft Clarity pour le Web — analyse comportementale, sans bibliothèque de cas de test ni session de validation manuelle', sources:[
    ['Présentation de Clarity','https://learn.microsoft.com/en-us/clarity/'],
    ['Recordings','https://learn.microsoft.com/en-us/clarity/session-recordings/recordings-overview'],
    ['Heatmaps','https://learn.microsoft.com/en-us/clarity/heatmaps-overview'],
    ['Filtres transversaux','https://learn.microsoft.com/en-us/clarity/filters/clarity-filters'],
    ['Segments','https://learn.microsoft.com/en-us/clarity/filters/clarity-segments'],
    ['Navigation des heatmaps vers les sessions','https://learn.microsoft.com/en-us/clarity/heatmaps/heatmaps-features'],
    ['Paramètres du projet','https://learn.microsoft.com/en-us/clarity/setup-and-installation/getting-started'],
    ['Gestion de l’équipe','https://learn.microsoft.com/en-us/clarity/setup-and-installation/team-management']
  ]}
};
function card({title,eyebrow='',subtitle='',items=[],lines=[],color='teal',extra='',className=''}){
  return `<article class="card ${color} ${className}">${eyebrow?`<div class="eyebrow">${eyebrow}</div>`:''}<h2>${title}</h2>${subtitle?`<p class="subtitle">${subtitle}</p>`:''}${items.length?`<dl>${items.map(([a,b])=>`<div><dt>${a}</dt><dd>${b}</dd></div>`).join('')}</dl>`:''}${lines.length?`<ul class="plain-list">${lines.map(t=>`<li>${t}</li>`).join('')}</ul>`:''}${extra}</article>`;
}
const intro=(title,text)=>`<div class="section-intro"><h2>${title}</h2><p>${text}</p></div>`;
const vocab=(items)=>`<section class="support-section"><h2 class="section-title">Vocabulaire de l’application</h2><div class="vocabulary">${items.map(([a,b])=>`<div><h3>${a}</h3><p>${b}</p></div>`).join('')}</div></section>`;
const example=(text='Connexion avec un compte actif',detail='Résultat attendu : accès à l’accueil après validation des identifiants')=>`<div class="example"><div class="label">Exemple suivi</div><h2>${text}</h2><p>${detail}</p></div>`;
const criteria=(items)=>`<section class="comparison"><h2 class="section-title">Lecture comparative</h2><p class="editorial">Analyse du parcours documenté — points d’appui et contraintes pour le testeur</p><div class="four-columns">${items.map(([a,b])=>`<div><h3>${a}</h3><p>${b}</p></div>`).join('')}</div></section>`;
function node(id,row,col,title,body,{step='',path='',type='card',color='teal',next=false}={}){
  const style=`grid-row:${row};grid-column:${col}`;
  return `<article id="${id}" class="flow-node ${type} ${color}" style="${style}" ${next?'data-next="true"':''}>${path?`<div class="eyebrow">${path}</div>`:''}${type==='decision'?title:`<h3>${step?`<span class="step">${step}</span>`:''}${title}</h3>${body?`<p>${body}</p>`:''}`}</article>`;
}
function flow(nodes,edges){return `<div class="flow" data-edges='${JSON.stringify(edges)}'><svg class="connectors" aria-hidden="true"></svg>${nodes.join('')}</div>`}
const edge=(from,to,label='',opts={})=>({from,to,label,...opts});
const branchSvg=`<svg class="map-branches" viewBox="0 0 1000 44" preserveAspectRatio="none" aria-hidden="true"><defs><marker id="branch-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M1 1L8 5L1 9"/></marker></defs><path d="M125 0V12H875"/><path d="M375 12V40" marker-end="url(#branch-arrow)"/><path d="M625 12V40" marker-end="url(#branch-arrow)"/><path d="M875 12V40" marker-end="url(#branch-arrow)"/></svg>`;

const BOARDS = [
{
  product:'xray',type:'navigation',title:'Navigation des tests — Xray Cloud',subtitle:'Dans Jira : Your Apps → Xray — Les accès aux écrans et aux objets de test',
  render:()=>`${intro('Organisation de la navigation','Le menu Xray donne accès aux trois vues détaillées à droite — les colonnes ne représentent pas une suite d’étapes')}
  <div class="nav-map"><div class="map-caption">Menu Xray</div>${branchSvg}<div class="four-columns nav-columns">
  ${card({title:'Menu Xray',eyebrow:'Point d’entrée',subtitle:'Accéder aux espaces de travail',color:'purple',items:[['Testing Board','Ouvrir l’espace de test du projet'],['Search','Rechercher les objets Xray dans Jira'],['Reporting Center','Accéder aux rapports'],['Test Case Importer','Importer des cas de test']],extra:'<p class="card-note">Getting Started et Configure Project accompagnent la prise en main</p>'})}
  ${card({title:'Testing Board',eyebrow:'Vue du projet',subtitle:'Organiser et retrouver les tests',items:[['Test Repository','Classer les tests dans des dossiers'],['Test Plans / Test Executions','Accéder aux plans et aux sessions'],['BDD Steps Library','Retrouver les étapes BDD'],['Manual Steps Library','Retrouver les étapes manuelles réutilisables']],extra:'<p class="card-note">Le Testing Board peut aussi être accessible depuis la navigation du projet Jira</p>'})}
  ${card({title:'Search',eyebrow:'Recherche d’objets',subtitle:'Ouvrir une recherche Jira ciblée',color:'orange',items:[['Search Tests','Retrouver un cas de test'],['Search Preconditions','Retrouver les préconditions'],['Search Test Sets','Retrouver les regroupements de tests'],['Search Test Plans','Retrouver les plans de test'],['Search Test Executions','Retrouver les sessions d’exécution']]})}
  ${card({title:'Reporting Center',eyebrow:'Rapports',subtitle:'Lire l’avancement et la couverture',color:'pink',items:[['Organization & Planning','Analyser l’organisation des tests'],['Execution','Suivre les résultats d’exécution'],['Coverage & Analytics','Examiner la couverture des exigences'],['Document Generator','Accéder aux modèles de documents']],extra:'<p class="card-note">Reporting Center doit être activé — les modèles du Document Generator nécessitent des droits d’administration</p>'})}
  </div></div>
  ${vocab([['Test','La définition réutilisable du cas'],['Test Set','Un regroupement de tests'],['Test Plan','Le périmètre prévu et son suivi'],['Test Execution','Une session contenant des tests'],['Test Run','L’exécution d’un test dans une session']])}
  <p class="inline-note"><strong>Deux manières de retrouver un même test</strong><br>Le Test Repository organise les tests en dossiers — Search retrouve les objets avec la recherche Jira</p>`
},
{
  product:'xray',type:'parcours',title:'Du cas de test au résultat',subtitle:'Xray Cloud — Créer ou retrouver un test, préparer son exécution et conserver son résultat',
  render:()=>`${example()}${intro('Un cas réutilisable, une exécution contextualisée','Le Test décrit le cas — le Test Execution porte la session — le Test Run contient le résultat du test dans cette session')}
  ${flow([
    node('x-choice',1,2,'Le test existe<br>déjà ?','',{type:'decision',next:true}),
    node('x-create',2,1,'Créer le test','Créer un <strong>Test</strong> de type Manual<br>Décrire les étapes et leurs résultats attendus',{path:'Test Repository ou création Jira',next:true}),
    node('x-find',2,3,'Retrouver le test','Rechercher le cas de connexion et ouvrir sa fiche<br>Le même Test peut être retrouvé depuis les dossiers',{path:'Search → Search Tests',color:'orange',next:true}),
    node('x-prepare',3,2,'Préparer la session','Créer ou choisir un <strong>Test Execution</strong> et y ajouter le Test<br>Renseigner le contexte de la session',{step:'1',path:'Test Execution',next:true}),
    node('x-plan',3,1,'Planifier si nécessaire','Un Test Plan regroupe le périmètre à suivre et peut servir à créer les Test Executions<br>Il reste facultatif dans ce parcours',{type:'note'}),
    node('x-objects',3,3,'Trois objets distincts','Test : le cas<br>Test Execution : la session<br>Test Run : l’exécution du cas',{type:'note'}),
    node('x-run',4,2,'Exécuter le test','Suivre les étapes et comparer le résultat observé à l’attendu<br>Saisir les identifiants et valider la connexion',{step:'2',path:'Test Execution → Tests → Execute',next:true}),
    node('x-context',4,1,'Garder le contexte','Les étapes, les preuves et le résultat sont consultables dans le contexte du Test Run',{type:'note'}),
    node('x-outcome',5,2,'Résultat conforme<br>à l’attendu ?','',{type:'decision',next:true}),
    node('x-pass',6,1,'Consigner la réussite','Renseigner le statut <strong>PASS</strong><br>Ajouter un commentaire ou une preuve utile',{step:'3',path:'Dans le Test Run',next:true}),
    node('x-fail',6,3,'Documenter l’échec','Renseigner le statut <strong>FAIL</strong><br>Décrire l’erreur et joindre une preuve<br>Créer ou lier une anomalie Jira',{step:'3',path:'Dans le Test Run',next:true}),
    node('x-review',7,2,'Relire le résultat','Retrouver le statut, les preuves et les anomalies associées<br>Conserver la trace de cette exécution',{step:'4',path:'Test Execution / Test Run'})
  ],[edge('x-choice','x-create','Non — le concevoir',{fromSide:'left'}),edge('x-choice','x-find','Oui — le retrouver',{fromSide:'right'}),edge('x-create','x-prepare'),edge('x-find','x-prepare'),edge('x-prepare','x-run','Ouvrir le Test Run'),edge('x-run','x-outcome'),edge('x-outcome','x-pass','Oui — réussite',{fromSide:'left'}),edge('x-outcome','x-fail','Non — échec',{fromSide:'right'}),edge('x-pass','x-review'),edge('x-fail','x-review')])}
  ${criteria([['Autonomie du testeur','Créer, retrouver et exécuter depuis l’environnement Jira'],['Effort de navigation','Passer de la définition à la session, puis au Test Run'],['Compréhension','Distinguer clairement Test, Test Execution et Test Run'],['Traçabilité du résultat','Relier le contexte, les preuves et l’anomalie à l’exécution']])}`
},
{
  product:'cucumber',type:'navigation',title:'Navigation des tests — CucumberStudio',subtitle:'Organisation des cas de test — Formulation, scénarios et actions réutilisables',
  render:()=>`${intro('Organisation de la navigation','Formulation → Native features → scénario, puis accès éventuel à une action réutilisée')}
  <div class="four-columns nav-columns chain-map">
  ${card({title:'Formulation',eyebrow:'Menu du projet',subtitle:'Entrée de conception des tests',color:'purple',items:[['Native features','Accéder aux dossiers et aux scénarios conçus dans CucumberStudio']],extra:'<p class="card-note">Cette planche décrit les Native features — les tests importés depuis un dépôt constituent un autre contexte</p>'})}
  ${card({title:'Native features',eyebrow:'Vue des dossiers et scénarios',subtitle:'Ouvrir un dossier ou un scénario',items:[['Subfolders','Naviguer dans les sous-dossiers'],['Scenarios','Lire les scénarios du dossier courant'],['Tags','Filtrer les éléments'],['Create','Créer un scénario dans Scenarios'],['Déplacer ou cloner','Réorganiser les éléments']]})}
  ${card({title:'Scenario',eyebrow:'Fiche du scénario',subtitle:'Écrire et organiser les étapes',color:'orange',items:[['Description / Tags','Documenter le cas et le retrouver'],['Test steps','Définir les étapes du scénario'],['Datatable','Ajouter plusieurs jeux de données'],['Add attachment','Joindre un fichier au scénario'],['Create action word','Créer une action réutilisable']]})}
  ${card({title:'Action word',eyebrow:'Fiche liée',subtitle:'Mutualiser une séquence d’étapes',color:'pink',items:[['Description / Tags','Documenter l’action réutilisable'],['Parameters','Définir les valeurs variables'],['Definition','Décrire les étapes de l’action'],['Used by','Retrouver les scénarios utilisateurs']],extra:'<p class="card-note">L’usage des Action words est facultatif — un scénario peut aussi contenir ses propres étapes</p>'})}
  </div><p class="optional-connection">Scenario → Action word : relation de réutilisation facultative</p>
  ${vocab([['Folder','Un dossier de classement'],['Scenario','La définition du comportement à tester'],['Action word','Une séquence d’étapes réutilisable'],['Datatable','Les jeux de données du scénario'],['Test','Une instance générée à partir du scénario']])}
  <p class="inline-note"><strong>Conception et exécution ont des entrées distinctes</strong><br>Formulation sert à concevoir les scénarios — Test runs permet de préparer et suivre leur exécution</p>`
},
{
  product:'cucumber',type:'parcours',title:'Du cas de test au résultat',subtitle:'CucumberStudio — Définir un scénario, sélectionner les tests et renseigner leur résultat',
  render:()=>`${example()}${intro('Un parcours entre formulation, session et résultats','Les tests sont générés à partir des scénarios, puis sélectionnés dans un Test run')}
  ${flow([
    node('c-scenario',1,1,'Préparer le scénario','Décrire la connexion et le résultat attendu<br>Réutiliser des Action words si nécessaire',{step:'1',path:'Formulation → Native features → Scenario',next:true}),
    node('c-generate',1,2,'Génération automatique','Sans Datatable : <strong>un scénario génère un test</strong><br>Avec plusieurs jeux de données : un test par jeu',{type:'generation'}),
    node('c-difference',1,3,'Ce que l’outil distingue','Scenario : le cas rédigé<br>Test : l’instance générée<br>Test run : la session<br><br>Le test généré ne se modifie pas directement',{type:'note'}),
    node('c-select',2,1,'Choisir le périmètre','Nommer la session<br>Choisir tous les tests ou une sélection, puis créer le Test run',{step:'2',path:'Test runs → Add new',next:true}),
    node('c-open',2,2,'Ouvrir le Test run','Retrouver la liste des tests de la session<br>Sélectionner le test de connexion',{step:'3',path:'Test runs → session créée',next:true}),
    node('c-execute',2,3,'Exécuter et renseigner','Suivre les instructions de connexion<br>Renseigner les statuts des étapes ou du test<br>Ajouter une description et une capture<br><span class="result-line"><span class="status">passed</span><span class="status fail">failed</span></span>',{step:'4',path:'Depuis la session → Resume test',next:true}),
    node('c-snapshot',3,1,'La définition peut évoluer','Le Test run conserve un instantané<br>Une modification du scénario ne change pas automatiquement la session<br>La synchronisation est une action explicite',{type:'note'}),
    node('c-review',3,2,'Relire le résultat','Retrouver le statut, la description, la date et l’auteur<br>Consulter l’historique des exécutions',{step:'5',path:'Résultats du test / Executions history'}),
    node('c-defect',4,3,'Suivre l’anomalie','Créer ou lier un ticket Jira au résultat d’échec<br>Cette action dépend de l’intégration configurée',{path:'Intégration Jira',color:'pink'})
  ],[edge('c-scenario','c-generate','',{fromSide:'right',toSide:'left',dashed:true}),edge('c-scenario','c-select','Ouvrir Test runs'),edge('c-select','c-open','Create',{fromSide:'right',toSide:'left'}),edge('c-open','c-execute','Resume test',{fromSide:'right',toSide:'left'}),edge('c-execute','c-review',''),edge('c-review','c-open','Reprendre',{fromSide:'top',toSide:'bottom',dashed:true}),edge('c-execute','c-defect','En cas d’échec',{dashed:true})])}
  ${criteria([['Autonomie du testeur','Rédiger le scénario puis effectuer une exécution manuelle'],['Effort de navigation','Passer de Formulation à Test runs et revenir dans la session'],['Compréhension','Distinguer la définition, le test généré et son résultat'],['Traçabilité du résultat','Relire les exécutions dans un instantané synchronisable']])}`
},
{
  product:'kusho',type:'navigation',title:'Navigation des tests — KushoAI',subtitle:'Espace API Testing — du menu latéral aux suites, à leurs tests et au détail d’une requête',
  render:()=>`<div class="kusho-study">
  ${intro('Organisation de la navigation','Ouvrir une suite depuis Test Suites, puis consulter ses tests et déplier leur détail dans la même page')}
  <div class="ks-context"><strong>API Testing</strong><span>Espace étudié</span><span class="ks-context-other">UI Testing ouvre un autre espace de test</span></div>
  <div class="ks-entry">
  ${card({title:'Menu latéral',eyebrow:'Navigation principale',color:'purple',items:[['Home','Accueil et raccourcis'],['Dashboard','Indicateurs d’activité — Enterprise'],['Test Suites','Liste des suites API'],['Test Suite Generation Status','Suivi des générations'],['Manage Workspace','Configuration de l’espace'],['Groups','Regroupements de suites — Enterprise'],['CI Integration','Exécution depuis les pipelines'],['E2E Test Suites','Enchaînements API — Enterprise']]})}
  <div class="ks-link"><span>Choisir<br>Test Suites</span><b aria-hidden="true">→</b></div>
  ${card({title:'Test Suites',eyebrow:'Page — liste des suites',subtitle:'Retrouver une suite pour une API',items:[['Search Test Suites...','Rechercher dans la liste'],['Create','Ouvrir les choix de création'],['Clic sur une ligne','Ouvrir la page de cette suite'],['Flèche de la ligne','Déplier les informations de l’API'],['Menu de la ligne','Add to group, Copy UUID, Edit tags, Delete Test Suite']],extra:'<p class="card-note">Une suite peut appartenir à plusieurs groupes</p>'})}
  </div>
  <div class="ks-open"><span>Depuis Test Suites — cliquer sur une suite</span><b aria-hidden="true">↓</b></div>
  <section class="card orange ks-suite" aria-labelledby="ks-suite-title">
  <div class="eyebrow">Écran — son titre affiché est le nom de la suite</div>
  <h2 id="ks-suite-title">Page de la suite</h2>
  <p class="subtitle">Appelée Test Suite Details dans la documentation</p>
  <div class="ks-suite-overview">
  <div><h3>API Details</h3><p>API de référence utilisée pour générer les tests de la suite</p><p><strong>Modifier cette référence déclenche une régénération des tests</strong></p></div>
  <div><h3>Functional / Security</h3><p>Choisir les tests fonctionnels ou de sécurité</p><h3>Filter Tests By Types</h3><p>Filtrer les tests par catégories</p></div>
  </div>
  <section class="ks-tests" aria-labelledby="ks-tests-title">
  <div class="eyebrow">Section — à l’intérieur de la page de suite</div><h3 id="ks-tests-title">Tests</h3>
  <div class="ks-action-grid">
  <div><h3>Environment / Variables</h3><p>Choisir le contexte et ses valeurs</p></div>
  <div><h3>Add Tests</h3><p>Using Payload : saisir une requête<br>Using AI : décrire le test souhaité</p></div>
  <div><h3>Generate Assertions</h3><p>Ajouter des contrôles de réponse</p></div>
  <div><h3>Generate Report</h3><p>Download Report ou Email Report</p></div>
  </div><p class="ks-caption">Autres accès : Workbench, Define Test Data et Pre Run Script</p>
  <div class="ks-list-tools"><div><h4>Search Tests...</h4><p>Rechercher dans les tests</p></div><div><h4>Run All Tests</h4><p>Exécuter les tests du périmètre filtré</p></div></div>
  <div class="ks-test-row"><span>Description d’un test</span><span>Run</span><strong>Details <span aria-hidden="true">⌄</span></strong></div>
  <section class="ks-detail" aria-labelledby="ks-detail-title">
  <div class="eyebrow">Panneau déplié sous la ligne du test — reste dans cette liste</div><h4 id="ks-detail-title">Details</h4>
  <div class="ks-detail-tabs">
  <div><h4>Request</h4><p>Requête de ce test, issue d’une variation de l’API de référence</p><p><strong>Éditer ici la requête du test affiché</strong></p></div>
  <div><h4>Response</h4><p>Réponse obtenue après exécution</p></div>
  <div><h4>Assertions</h4><p>Contrôles qui définissent la réussite de ce test</p></div>
  <div><h4>Assertions Results</h4><p>Résultat de chaque contrôle après exécution</p></div>
  </div><p class="ks-caption">Status et Time indiquent le code HTTP et la durée — cliquer de nouveau sur Details replie ce panneau</p>
  </section></section></section>
  <section class="support-section"><h2 class="section-title">Créer une suite et retrouver sa génération</h2>
  <div class="ks-create-flow">
  ${card({title:'Create',eyebrow:'Depuis Test Suites — fenêtre de choix',items:[['Enter API Details','Renseigner l’API manuellement'],['Import OpenAPI Specification','Importer une spécification'],['Import Postman Collection','Importer une collection'],['Import cURL Command','Coller une commande'],['Import Documentation','Extraire une API depuis un document']],extra:'<p class="card-note">Try Sample APIs permet de commencer avec un exemple</p>'})}
  <div class="ks-link"><span>Choisir<br>une entrée</span><b aria-hidden="true">→</b></div>
  ${card({title:'Configurer l’API',eyebrow:'Formulaire — selon le choix précédent',items:[['Saisie ou import','Fournir les données puis vérifier l’API retenue'],['Generate','Lancer la génération depuis les entrées API'],['Generate Tests From Documentation','Lancer après extraction et confirmation de l’API dans le parcours documentaire']],extra:'<p class="card-note">Cette étape produit les tests<br>Elle ne les exécute pas</p>'})}
  <div class="ks-link"><span>Suivre la<br>génération</span><b aria-hidden="true">→</b></div>
  ${card({title:'Test Suite Generation Status',eyebrow:'Page — accessible depuis le menu',color:'orange',items:[['Name / Status / Processed / Time Remaining','Suivre l’avancement de la génération'],['Refresh','Actualiser le suivi'],['Entrée completed','Ouvrir la suite dont les tests sont prêts']],extra:'<p class="card-note">La suite générée se retrouve aussi dans Test Suites</p>'})}
  </div></section>
  <section class="support-section"><h2 class="section-title">Autres entrées du menu liées aux tests</h2><div class="three-columns ks-other">
  ${card({title:'Groups',eyebrow:'Page — Enterprise',color:'purple',items:[['Create Group','Créer un regroupement de suites'],['Ouvrir un groupe','Retrouver ses suites'],['Run Group','Exécuter le groupe puis accéder à ses résultats']]})}
  ${card({title:'Manage Workspace',eyebrow:'Page — configuration',items:[['Environments','Créer les environnements de test'],['Create Environment / Variables','Configurer leurs valeurs'],['Members / API Keys','Gérer les accès et les clés de l’espace']]})}
  ${card({title:'E2E Test Suites',eyebrow:'Page — Enterprise',color:'pink',items:[['Create','Ouvrir la création d’un workflow'],['Enter New API / Select Existing API','Ajouter les API dans l’éditeur visuel'],['Execution Profile / Run / Run History','Choisir les cas, exécuter et relire les résultats']]})}
  </div></section>
  </div>`
},
{
  product:'kusho',type:'parcours',title:'Du cas de test au résultat',subtitle:'KushoAI — Générer les tests d’une API, contrôler une première réponse puis exécuter les assertions',
  render:()=>`<div class="kusho-journey">
  ${example('Connexion avec un compte actif — côté API','Attendu illustratif : les identifiants valides renvoient le code prévu et un jeton de connexion')}
  ${intro('Un parcours API avec génération d’assertions assistée','Exemple choisi : importer une commande cURL puis construire les contrôles à partir d’une réponse relue par le testeur')}
  <section class="kj-creation"><h2 class="section-title">Créer et retrouver la suite</h2>
  ${flow([
    node('kj-create',1,1,'Importer l’appel','Ouvrir <strong>Create → Import cURL Command</strong><br>Coller l’appel au service d’authentification',{step:'1',path:'API Testing → Test Suites',color:'purple',next:true}),
    node('kj-generate',1,2,'Générer les tests','Vérifier les informations importées puis cliquer sur <strong>Generate</strong><br>La génération prépare les cas et leurs requêtes',{step:'2',path:'Formulaire d’import cURL',next:true}),
    node('kj-open',1,3,'Ouvrir la suite prête','Suivre l’avancement puis ouvrir l’entrée <strong>completed</strong><br>La suite apparaît aussi dans Test Suites',{step:'3',path:'Test Suite Generation Status',next:false})
  ],[edge('kj-create','kj-generate','Configurer',{fromSide:'right',toSide:'left'}),edge('kj-generate','kj-open','Suivre',{fromSide:'right',toSide:'left'})])}
  <p class="kj-shortcut"><strong>Suite déjà disponible</strong> — l’ouvrir depuis Test Suites et reprendre à l’étape 4</p></section>
  <div class="kj-transfer"><span>Ouverture de la page portant le nom de la suite</span><b aria-hidden="true">↓</b></div>
  <section class="kj-workspace" aria-labelledby="kj-workspace-title">
  <div class="eyebrow">Même page de suite — section Tests et panneau Details</div><h2 id="kj-workspace-title">Préparer, exécuter et relire</h2>
  <div class="kj-prerequisites"><div><h3>Accès à l’API</h3><p>Le parcours Web utilise l’extension Chrome KushoAI ou un proxy local configuré pour joindre l’API</p></div><div><h3>Chemin illustré</h3><p>Les assertions sont proposées après un premier appel<br>Des assertions déjà définies peuvent être relues puis exécutées directement</p></div></div>
  ${flow([
    node('kj-prepare',1,1,'Préparer le cas valide','Choisir <strong>Environment</strong> et renseigner <strong>Variables</strong><br>Repérer le test de connexion valide puis contrôler sa requête',{step:'4',path:'Tests → Details → Request',next:true}),
    node('kj-first-run',1,2,'Faire un premier appel','Cliquer sur <strong>Run</strong> pour ce test<br>Sans assertions, une réponse reçue ne donne pas encore de verdict de validation',{step:'5',path:'Tests → Run',next:true}),
    node('kj-response',1,3,'Contrôler la réponse','Ouvrir <strong>Response</strong><br>Comparer le code et le jeton reçus à l’attendu métier avant de les utiliser comme référence',{step:'6',path:'Details → Response',next:false}),
    node('kj-correct',2,1,'Corriger avant de poursuivre','Examiner la requête, l’environnement et le comportement de l’API<br>Après correction, <strong>reprendre à l’étape 5</strong>',{path:'Si la réponse ne correspond pas à l’attendu',color:'orange'}),
    node('kj-assertions',2,3,'Construire les contrôles','Dans Assertions, cliquer sur <strong>Generate using AI</strong><br>Relire et compléter les propositions pour couvrir le code attendu et la présence du jeton',{step:'7',path:'Si la réponse est conforme → Details → Assertions',next:true}),
    node('kj-save-run',3,3,'Enregistrer et réexécuter','Cliquer sur <strong>Save and Run</strong><br>Les assertions sont enregistrées puis vérifiées sur la réponse du nouvel appel',{step:'8',path:'Details → Assertions → Save and Run',next:true}),
    node('kj-read',4,2,'Lire le verdict','Ouvrir <strong>Assertions Results</strong> pour examiner chaque contrôle<br>Relier le verdict Passed ou Failed à la réponse reçue',{step:'9',path:'Details → Response / Assertions Results',color:'pink',next:true}),
    node('kj-report',4,1,'Conserver le bilan','Ouvrir <strong>Generate Report</strong><br>Choisir <strong>Download Report</strong> pour le fichier HTML ou <strong>Email Report</strong> pour le transmettre',{step:'10',path:'Barre d’actions de la suite'})
  ],[edge('kj-prepare','kj-first-run','Run',{fromSide:'right',toSide:'left'}),edge('kj-first-run','kj-response','Response',{fromSide:'right',toSide:'left'}),edge('kj-response','kj-correct','À corriger'),edge('kj-response','kj-assertions','Conforme'),edge('kj-assertions','kj-save-run'),edge('kj-save-run','kj-read'),edge('kj-read','kj-report','Rapport',{fromSide:'left',toSide:'right'})])}
  <div class="kj-outcomes"><div><h3>Passed</h3><p>Les assertions définies réussissent</p></div><div><h3>Failed</h3><p>Au moins une assertion échoue<br>Revenir à Request ou Assertions, corriger puis réexécuter</p></div><div><h3>Vide / N/A</h3><p>Aucune assertion ne qualifie le test<br>Le code HTTP seul ne donne pas ce verdict</p></div></div>
  </section>
  <section class="support-section"><h2 class="section-title">Ce que ce parcours demande au testeur</h2><div class="three-columns kj-observations">
  ${card({title:'Valider la référence',eyebrow:'Point d’attention',color:'orange',lines:['Une réponse incorrecte peut produire des assertions trompeuses','Les contrôles proposés doivent être relus selon le besoin métier']})}
  ${card({title:'Maîtriser le périmètre',eyebrow:'Point d’attention',lines:['Run vise ici un seul test','Run All Tests tient compte du filtrage actif dans la liste']})}
  ${card({title:'Rester dans le contexte',eyebrow:'Point d’appui',color:'purple',lines:['La requête, la réponse et les contrôles restent accessibles dans Details','Generate Report produit un bilan téléchargeable ou transmissible']})}
  </div></section>
  ${criteria([['Autonomie du testeur','Partir d’un appel API existant, puis relire et compléter les assertions proposées'],['Effort de navigation','Passer du suivi de génération à la suite, puis travailler dans la même page'],['Compréhension','Distinguer génération des tests, premier appel et validation par assertions'],['Traçabilité du résultat','Lire le détail des contrôles et conserver un rapport de l’exécution']])}
  </div>`
},
{
  product:'clarity',type:'navigation',title:'Navigation d’analyse — Microsoft Clarity',subtitle:'Observer les usages réels d’un site — indicateurs, enregistrements de sessions et cartes de chaleur',
  render:()=>`<p class="clarity-warning">Clarity analyse des interactions observées — il ne gère pas de cas de test, de plans de test ou de statuts de validation</p>
  ${intro('Organisation de la navigation','Un projet donne accès aux vues d’analyse et à ses paramètres — chaque vue répond à une question différente')}
  <div class="four-columns nav-columns">
  ${card({title:'Dashboard',eyebrow:'Vue d’ensemble',subtitle:'Repérer un signal dans les usages',color:'purple',items:[['Indicateurs de fréquentation','Lire les sessions et les profils de visite'],['Signaux comportementaux','Repérer par exemple des clics répétés ou sans effet'],['Accès aux sessions','Approfondir un signal avec les enregistrements correspondants']]})}
  ${card({title:'Recordings',eyebrow:'Sessions individuelles',subtitle:'Comprendre ce qu’un visiteur a fait',items:[['Session list','Choisir un enregistrement'],['Player','Lire et parcourir la session'],['Événements de session','Situer les interactions dans leur contexte'],['Favoris et partage','Retrouver ou transmettre une session utile']]})}
  ${card({title:'Heatmaps',eyebrow:'Vue agrégée par page',subtitle:'Voir où se concentrent les interactions',color:'orange',items:[['Page ou groupe de pages','Choisir les URL à observer'],['Click maps','Examiner les zones cliquées'],['Scroll maps','Lire la profondeur de défilement'],['View recordings','Ouvrir les sessions liées aux clics sélectionnés']]})}
  ${card({title:'Settings',eyebrow:'Configuration du projet',subtitle:'Gérer la collecte et les accès',color:'pink',items:[['Installation','Configurer la collecte sur le site'],['Équipe','Gérer les membres du projet'],['Masquage','Définir les règles de masquage des contenus']],extra:'<p class="card-note">Les paramètres configurent le projet — ils ne constituent pas une étape du parcours d’analyse</p>'})}
  </div><div class="transverse"><h3>Filters et Segments — des commandes transversales</h3><p>Affiner la période, les pages et les profils dans Dashboard, Recordings ou Heatmaps<br>Enregistrer une combinaison de filtres comme segment pour la retrouver dans le projet</p></div>
  ${vocab([['Project','Le périmètre du site observé'],['Session','Une visite enregistrée'],['Recording','La restitution des interactions'],['Heatmap','Une synthèse des interactions sur une page'],['Segment','Une combinaison de filtres enregistrée']])}`
},
{
  product:'clarity',type:'parcours',title:'Du signal d’usage à l’observation',subtitle:'Microsoft Clarity — Repérer une difficulté, examiner les sessions et partager les éléments observés',
  render:()=>`${example('Comprendre une difficulté sur la page de connexion','Exemple d’investigation : observer des interactions inhabituelles après la validation du formulaire')}${intro('Un parcours d’investigation, sans verdict de test','L’analyse met en relation des signaux et des sessions — elle ne démontre pas à elle seule la cause du problème')}
  ${flow([
    node('m-scope',1,1,'Définir le périmètre','Choisir le projet, la période et la page de connexion<br>Appliquer les filtres utiles',{step:'1',path:'Projet → Filters',next:true}),
    node('m-signal',1,2,'Repérer un signal','Examiner les indicateurs et les interactions inhabituelles<br>Ouvrir les sessions correspondantes',{step:'2',path:'Dashboard',color:'purple',next:true}),
    node('m-session',1,3,'Observer une session','Lire l’enregistrement et situer les clics dans le parcours<br>Comparer l’action visible et la réaction de la page',{step:'3',path:'Recordings → Player',next:true}),
    node('m-heat',2,1,'Élargir l’observation','Examiner les clics et le défilement sur la page<br>Revenir aux sessions liées à une zone cliquée',{step:'4',path:'Heatmaps → View recordings',color:'orange',next:true}),
    node('m-link',2,2,'Conserver le périmètre','Les filtres compatibles sont conservés entre les vues<br>Un segment permet de retrouver la combinaison utilisée',{type:'note'}),
    node('m-share',3,2,'Partager le constat','Mettre une session en favori ou partager son lien<br>Décrire les interactions observées et leur contexte',{step:'5',path:'Recordings',next:true}),
    node('m-limits',3,3,'Ce que cela ne conclut pas','Un clic répété peut signaler une difficulté<br>Il ne prouve ni une anomalie technique ni l’échec d’un cas de test',{type:'note'}),
    node('m-test',4,2,'Reproduire et valider','Transformer l’observation en cas à reproduire<br>Vérifier le comportement dans un outil de test et suivre la correction',{path:'Suite proposée hors de Clarity',color:'pink'})
  ],[edge('m-scope','m-signal','',{fromSide:'right',toSide:'left'}),edge('m-signal','m-session','Voir les sessions',{fromSide:'right',toSide:'left'}),edge('m-session','m-heat','Compléter l’analyse'),edge('m-heat','m-share'),edge('m-share','m-test','Passage à la validation',{dashed:true})])}
  ${criteria([['Autonomie de l’analyste','Explorer des sessions déjà collectées'],['Effort de navigation','Passer entre les vues en conservant les filtres compatibles'],['Compréhension','Distinguer un signal, une observation et une preuve de défaut'],['Traçabilité du constat','Partager la session et son contexte, puis documenter la validation ailleurs']])}`
}
];

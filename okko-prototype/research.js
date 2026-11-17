/* Planches complémentaires — sources officielles consultées le 13 novembre 2026 */
Object.assign(PRODUCTS, {
  soatest:{name:'Parasoft SOAtest',context:'Perspective Parasoft SOAtest — application de bureau',scope:'Planches 01 et 02 : navigation et parcours SOAtest 2026.1 centrés sur la conception et la relecture des tests API dans le workbench Eclipse — les portails CTP et DTP ne sont pas représentés',reviewedAt:'16 novembre 2026',basis:'Planches 01 et 02 reconstruites à partir de la documentation SOAtest 2026.1 et de ses captures officielles, sans session dans l’application — certaines captures sont réutilisées par Parasoft entre versions',findings:[
    'Test Case Explorer et Quality Tasks sont des vues de la même fenêtre — leurs positions peuvent être réorganisées',
    'Editor View désigne la zone d’édition dans la documentation — les onglets affichent le nom du test ou de l’outil ouvert',
    'Traffic Viewer est un outil associé au test et ouvert dans un éditeur — ce n’est pas une rubrique principale de navigation',
    'Le double-clic ouvre la configuration, tandis que le clic droit donne accès aux commandes liées au nœud sélectionné',
    'Test Suite et Scenario correspondent à des modes d’exécution du regroupement — Scenario n’est pas un niveau obligatoire sous Test Suite'
  ],sources:[
    ['Ouvrir la perspective Parasoft SOAtest','https://docs.parasoft.com/display/SVC20261/The+SOAtest+Perspective'],
    ['Vues et zone d’édition — SOAtest 2026.1','https://docs.parasoft.com/display/SOA20261/Views+in+SOAtest'],
    ['Projets, fichiers .tst et suites','https://docs.parasoft.com/display/SOA20261/Adding+Projects+tst+files+and+Test+Suites'],
    ['Assistants de création et d’import','https://docs.parasoft.com/display/SOA20261/Wizards+for+Creating+Projects+.tst+Files+and+Tests'],
    ['Resource, Payload, HTTP Options et Misc','https://docs.parasoft.com/display/SOA20261/REST+Client'],
    ['JSON Assertor — onglets et Add Output','https://docs.parasoft.com/display/SOA20261/JSON+Assertor'],
    ['Ajouter un outil associé au test','https://docs.parasoft.com/display/SOA20261/Adding+Test+Outputs'],
    ['Création de tests et de sources de données — exemples de menus','https://docs.parasoft.com/display/SOA20261/Web+Functional+Testing'],
    ['Environments et Set as Active Environment','https://docs.parasoft.com/display/SOA20261/Configuring+Testing+in+Different+Environments'],
    ['Quality Tasks, Details et Traffic Viewer','https://docs.parasoft.com/display/SOA20261/Reviewing+Functional+Test+Results'],
    ['Traffic Viewer — Test Run et Save Traffic','https://docs.parasoft.com/display/SOA20261/Traffic+Viewer'],
    ['Test Using, Test Configurations et Test Progress','https://docs.parasoft.com/display/SOA20261/Testing+from+the+GUI'],
    ['Capture officielle — Test Case Explorer','https://docs.parasoft.com/download/attachments/327979037/12.png'],
    ['Capture officielle — Request et Response dans Traffic Viewer','https://docs.parasoft.com/download/attachments/327979762/soa-end-to-end-viewing-traffic1.png'],
    ['Création d’un REST Client dans une suite — exemple officiel','https://docs.parasoft.com/display/SOA20261/Using+Smart+Test+Templates+in+OAuth+2+0+Client+Credential+Flows']
  ]},
  keploy:{name:'Keploy',reviewedAt:'16 novembre 2026',context:'API Testing — suites et étapes / Integration Testing — captures et rejeu',scope:'Deux contextes distincts : API Testing dans la console Web, et Integration Testing par capture/rejeu — le parcours 02 porte sur le rejeu local de trafic enregistré',basis:'Planches 01 et 02 reconstruites à partir de la documentation et des captures officielles Keploy, sans session authentifiée ni exécution de Keploy — la planche 02 illustre le mode Integration Testing local documenté en novembre 2026, avec la console d’édition présentée comme une option',findings:[
    'Test Suites présente la liste des suites et étapes à gauche et le détail de la sélection à droite — Edit Test Step est une fenêtre superposée',
    'Les captures affichent Add New Test Suite, Add Suite et Edit Test Step — les guides emploient aussi Save, Edit Step ou Edit Test Suite',
    'Generation History concerne les générations, Run Reports concerne les exécutions — Accepted ne remplace pas le résultat d’une nouvelle exécution',
    'La capture Recordings affiche Use for AI Tests, alors que le texte du guide emploie Use AI for Tests',
    'Les sections API Testing et Integration Testing ont des objets et des accès distincts — la planche ne reproduit pas le sommaire du site de documentation',
    'Le flux local enregistre des test sets et des mocks — la documentation actuelle décrit un rejeu automatique après capture, distinct du rejeu lancé sur une version modifiée',
    'report affiche par défaut les échecs, tandis que report --summary fournit le bilan — le terminal donne aussi accès au rapport Web',
    'Les captures de Keploy Console affichent Mark Noise, Normalise et Re-Record — les modifications concernent le dernier rapport et se répercutent dans les fichiers locaux',
    'La console de relecture locale et la capture Kubernetes présentées sont documentées pour Enterprise / Self-Hosted Dedicated'
  ],sources:[
    ['Générateur de tests API','https://keploy.io/docs/running-keploy/api-test-generator/'],
    ['Add New Test Suite et ajout manuel','https://keploy.io/docs/running-keploy/api-testing-add-suite/'],
    ['Fenêtre Edit Test Step','https://keploy.io/docs/running-keploy/api-testing-edit-assertions/'],
    ['Menu de suite et Add Labels','https://keploy.io/docs/running-keploy/api-testing-adding-labels/'],
    ['Recherche et filtres des suites','https://keploy.io/docs/running-keploy/api-testing-filter-suites/'],
    ['Disposition de Test Suites et sélection des étapes','https://keploy.io/docs/running-keploy/review-and-improve-ai-generated-tests/'],
    ['Historique des générations','https://keploy.io/docs/running-keploy/api-testing-generation-history/'],
    ['Capture officielle — Add New Test Suite','https://keploy-devrel.s3.us-west-2.amazonaws.com/add-new-suite-1.png'],
    ['Capture officielle — Edit Test Step','https://keploy-devrel.s3.us-west-2.amazonaws.com/edit-assertions-1.png'],
    ['Capture officielle — menu de suite','https://keploy-devrel.s3.us-west-2.amazonaws.com/add-labels-1.png'],
    ['Capture officielle — Dashboard – Analytics','https://keploy-devrel.s3.us-west-2.amazonaws.com/keploy-api-dashboard.png'],
    ['Capture officielle — Recordings','https://keploy-devrel.s3.us-west-2.amazonaws.com/k8s-proxy/keploy_recordings_total.png'],
    ['Création de tests depuis les entrées API','https://keploy.io/docs/running-keploy/generate-api-tests-using-ai/'],
    ['Modification des suites et étapes','https://keploy.io/docs/running-keploy/api-testing-edit-suites/'],
    ['Lancement depuis Run Tests','https://keploy.io/docs/running-keploy/run-ai-generated-api-tests/'],
    ['Run Reports pour les suites API','https://keploy.io/docs/running-keploy/api-testing-run-report/'],
    ['Capture Kubernetes et page Recordings','https://keploy.io/docs/quickstart/k8s-proxy/'],
    ['Capture, rejeu automatique et rejeu local','https://keploy.io/docs/server/install/'],
    ['Commandes record, test, report et normalize','https://keploy.io/docs/running-keploy/cli-commands/'],
    ['Capture officielle — Expected, Actual et menu du cas','https://keploy-devrel.s3.us-west-2.amazonaws.com/docs/webp-s3/img/keploy-cloud/test-operations.webp'],
    ['Capture officielle — sélection des champs Noise','https://keploy-devrel.s3.us-west-2.amazonaws.com/docs/webp-s3/img/keploy-cloud/noise.webp'],
    ['Configuration des tests, mocks et champs variables','https://keploy.io/docs/running-keploy/configuration-file/'],
    ['Relecture locale avec Keploy Console','https://keploy.io/docs/keploy-cloud/keploy-console/']
  ]},
  katalon:{
    "name": "Katalon Studio",
    "context": "Application de bureau — conception et exécution automatisées",
    "reviewedAt": "16 novembre 2026",
    "scope": "Katalon Studio 11.x — projet de tests API, requêtes REST, cas automatisés, suites, collections et rapports locaux",
    "basis": "Planches relues à partir des guides et captures officiels consultés le 16 novembre 2026, sans session ouverte dans Katalon Studio — la navigation couvre les vues utiles aux tests API et le parcours illustre une connexion avec des contrôles définis par le testeur",
    "findings": [
        "Tests Explorer, les éditeurs et les vues d’exécution coexistent dans la même fenêtre — les flèches décrivent des accès et non des étapes obligatoires",
        "Test Case editor et Web Service editor sont les noms descriptifs des éditeurs dans la documentation — l’onglet de travail porte le nom de l’élément ouvert",
        "La capture de l’éditeur REST affiche HTTP Header, HTTP Body et Verification — les textes du guide utilisent aussi Request Header, Request Body et Verifications",
        "Le guide de suite écrit Add Test Case, mais sa capture montre le bouton Add qui ouvre Test Case Browser — ce sont ces libellés visibles qui figurent sur la planche 01",
        "Manual est une vue d’édition de tests automatisés — le cas peut être lancé seul, les suites et collections servent au regroupement",
        "Job Progress et Log Viewer sont présentés dans leur interface récente — une ancienne vue d’exécution reste documentée selon les réglages du projet",
        "Katalon True Platform apparaît dans des accès d’intégration de Studio — la navigation Web de la plateforme n’est pas détaillée sur cette planche",
        "La planche 02 choisit des contrôles dans Verification, réutilisés par le cas via WS.sendRequestAndVerify — Katalon permet aussi de placer les vérifications directement dans le cas",
        "POST /login, HTTP 200, token non vide et les noms des artefacts sont les choix illustratifs de ce scénario, pas un exemple livré avec Studio — les contrôles sont bloquants et le cas est ajouté à une suite pour son rapport"
    ],
    "sources": [
        [
            "Tests Explorer, éditeurs et vues",
            "https://docs.katalon.com/katalon-studio/get-started/workspace-settings/toolbars-and-views-in-katalon-studio"
        ],
        [
            "Édition des étapes dans Manual",
            "https://docs.katalon.com/katalon-studio/create-test-cases/generate-test-steps-in-katalon-studio-manual-view"
        ],
        [
            "Premier test API et création des objets",
            "https://docs.katalon.com/katalon-studio/create-test-cases/create-your-first-api-test-with-katalon-studio"
        ],
        [
            "Éditeur REST et panneau Response",
            "https://docs.katalon.com/katalon-studio/test-objects/api-test-objects/rest-request/restful-request"
        ],
        [
            "Onglets REST — capture officielle",
            "https://docs.katalon.com/64c5cf6d-0056-4da7-82d3-b526c9b412f7/restful-request-editor.png"
        ],
        [
            "Gestion des suites",
            "https://docs.katalon.com/katalon-studio/manage-test-artifacts/manage-test-suites-in-katalon-studio"
        ],
        [
            "Add et Test Case Browser — capture officielle",
            "https://docs.katalon.com/9965ebb0-22b2-11ed-9930-0242fe3e4a3f/KS-TDAP-837-add-test-case-to-TS.png"
        ],
        [
            "Collections, Test Suite Browser et paramètres",
            "https://docs.katalon.com/katalon-studio/manage-test-artifacts/manage-test-suite-collections-in-katalon-studio"
        ],
        [
            "Variables globales et profils",
            "https://docs.katalon.com/katalon-studio/data-driven-testing/global-variables-and-execution-profile"
        ],
        [
            "Rapports, Result et Show Test Case Details",
            "https://docs.katalon.com/katalon-studio/test-reports/view-test-reports/view-test-suite-and-test-suite-collection-reports-in-katalon-studio"
        ],
        [
            "Log Viewer et Console",
            "https://docs.katalon.com/katalon-studio/test-reports/view-test-reports/view-and-customize-execution-log-in-katalon-studio"
        ],
        [
            "Exécuter les tests dans Studio",
            "https://docs.katalon.com/katalon-studio/execute-tests/execute-tests-with-katalon-studio-overview"
        ],
        [
            "Verification, snippets et essai direct de la requête",
            "https://docs.katalon.com/katalon-studio/test-objects/api-test-objects/verification-snippets-in-katalon-studio"
        ],
        [
            "Send Request And Verify — réutiliser les contrôles de l’objet",
            "https://docs.katalon.com/katalon-studio/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-send-request-and-verify"
        ],
        [
            "Appeler une requête depuis Manual ou Script",
            "https://docs.katalon.com/katalon-studio/create-test-cases/using-web-services-in-a-test-case-in-katalon-studio"
        ],
        [
            "Stop on Failure et comportement des contrôles",
            "https://docs.katalon.com/katalon-studio/maintain-tests/configure-failure-handling-settings-in-katalon-studio"
        ]
    ]
}
});

const NEW_BOARDS = [
{
 product:'soatest',type:'navigation',title:'Navigation des tests — Parasoft SOAtest',subtitle:'SOAtest 2026.1 — application de bureau, vue centrée sur la conception et la relecture des tests API',
 render:()=>`<div class="soatest-study">
 ${intro('Organisation de la navigation','Une même fenêtre réunit l’explorateur, les éditeurs en onglets et les vues de résultat — leur disposition est personnalisable')}
 <div class="soa-entry"><strong>Parasoft SOAtest</strong><span>Window → Perspective → Open Perspective → Other → Parasoft SOAtest</span></div>
 <section class="soa-workbench" aria-label="Vues de la perspective SOAtest">
 <div class="soa-top">
 ${card({title:'Test Case Explorer',eyebrow:'Vue — arborescence des tests',color:'purple',subtitle:'Déplier les projets, fichiers et suites',extra:`
 <div class="soa-tree-label">Exemple de structure — noms illustratifs</div>
 <ul class="soa-tree"><li><strong>Projet de tests</strong><ul><li><strong>connexion.tst</strong><ul><li><strong>Test Suite: Connexion</strong><ul><li>Environments</li><li>Data Sources</li><li><strong>Test 1: REST Client</strong><ul><li>JSON Assertor</li><li>Traffic Viewer</li></ul></li></ul></li></ul></li></ul></li></ul>
 <p class="card-note">Les outils associés apparaissent sous le test auquel ils sont rattachés</p>
 <div class="soa-explorer-action"><h3>Double-clic sur un nœud</h3><p>Ouvrir sa configuration dans la zone d’édition</p></div>
 <div class="soa-explorer-action"><h3>Clic droit sur un nœud</h3><p>Afficher ses commandes de création ou de consultation</p></div>
 <div class="soa-explorer-action"><h3>Show in Tasks <span aria-hidden="true">↓</span></h3><p>Depuis le menu d’un test, retrouver ses messages dans Quality Tasks</p></div>`})}
 <div class="soa-open"><span>Double-clic<br>sur le test<br>ou l’outil</span><b aria-hidden="true">→</b></div>
 <section class="soa-editor" aria-labelledby="soa-editor-title"><div class="eyebrow">Zone centrale — Editor View dans la documentation</div><h2 id="soa-editor-title">Éditeurs en onglets</h2><p class="soa-editor-caption">Chaque onglet porte le nom du test ou de l’outil ouvert<br>Exemples de contenus selon la sélection</p>
 <div class="soa-editors-grid">
 ${card({title:'REST Client',eyebrow:'Configurer le test API',items:[['Resource','Service Definition, URL, Method, Path et Query'],['Payload','Corps de la requête et type de contenu'],['HTTP Options','Transport, sécurité, en-têtes et cookies'],['Misc','Codes HTTP acceptés et délai d’attente']]})}
 ${card({title:'JSON Assertor',eyebrow:'Configurer un outil de contrôle',items:[['Summary','Récapitulatif des assertions'],['Configuration','Ajouter ou modifier les contrôles'],['Expected JSON','Message de référence pour choisir les éléments']],extra:'<p class="card-note">Configuration → Add ouvre le choix du type d’assertion</p>'})}
 </div>
 ${card({title:'Traffic Viewer',eyebrow:'Éditeur d’un outil associé — après exécution',color:'pink',subtitle:'Double-clic sur le nœud Traffic Viewer du test',items:[['Test Run','Choisir le trafic d’une exécution disponible'],['Request / Response','Basculer entre la requête et la réponse'],['Save Traffic','Conserver le trafic avec le projet']],className:'soa-traffic'})}
 </section></div>
 <div class="soa-results">
 ${card({title:'Quality Tasks',eyebrow:'Vue — diagnostic des résultats',color:'orange',subtitle:'Retrouver les échecs et leurs causes possibles',items:[['Double-clic sur un message → Details','Ouvrir le détail de l’échec dans un onglet'],['Clic droit → Open Editor for Test','Revenir à l’éditeur du test concerné'],['Clic droit → Show Source in Test Case Explorer','Retrouver son nœud dans l’arborescence'],['Clic droit → View Associated Traffic','Ouvrir le trafic associé, lorsqu’il est disponible']]})}
 <div class="soa-monitoring">
 ${card({title:'Test Progress',eyebrow:'Vue — pendant et après l’exécution',color:'orange',lines:['Suivre l’avancement et le bilan','Rerun Tests relance les derniers tests exécutés']})}
 ${card({title:'Console',eyebrow:'Vue — messages d’exécution',color:'orange',lines:['Lire le résumé des tests exécutés, échoués et ignorés']})}
 </div></div></section>
 <section class="support-section"><h2 class="section-title">Créer et enrichir depuis l’arborescence</h2><div class="four-columns soa-commands">
 ${card({title:'Test (.tst) File',eyebrow:'Clic droit sur le projet',color:'purple',subtitle:'Add New → Test (.tst) File',lines:['Créer le fichier qui contiendra les suites et leurs tests'],extra:'<p class="card-note">Autre accès : File → New → Test (.tst) File</p>'})}
 ${card({title:'Test Suite',eyebrow:'Clic droit sur le nœud parent',color:'purple',subtitle:'Add New → Test Suite',lines:['Ajouter un regroupement dans le fichier'],extra:'<p class="card-note">L’assistant propose notamment OpenAPI/Swagger, WSDL ou un contenu vide</p>'})}
 ${card({title:'Test',eyebrow:'Clic droit sur la suite',subtitle:'Add New → Test',lines:['Choisir le type de test ou d’outil à ajouter']})}
 ${card({title:'Add Output',eyebrow:'Clic droit sur le test',subtitle:'Associer un outil à une sortie',lines:['Choisir les données à traiter puis l’outil, par exemple JSON Assertor'],extra:'<p class="card-note">Autre accès : Add Test or Output dans la barre d’outils</p>'})}
 </div></section>
 <section class="support-section"><h2 class="section-title">Données et contexte d’exécution</h2><div class="three-columns soa-settings">
 ${card({title:'Environments',eyebrow:'Branche de la suite',items:[['New Environment','Créer un ensemble de variables'],['Set as Active Environment','Activer l’environnement choisi par clic droit']]})}
 ${card({title:'Data Sources',eyebrow:'Données utilisées par les tests',items:[['Add New → Data Source','Ajouter une source depuis la suite'],['Double-clic sur la source','Ouvrir son éditeur de données']]})}
 ${card({title:'Test Configurations',eyebrow:'Menu Parasoft',items:[['Parasoft → Test Configurations','Configurer la manière d’exécuter les tests'],['Parasoft → Test Using','Choisir une configuration pour la sélection']]})}
 </div></section>
 ${vocab([['Perspective','Un agencement de vues dans la fenêtre'],['.tst','Un fichier contenant suites, tests et outils'],['Test Suite / Scenario','Tests indépendants ou tests liés par des dépendances'],['Client','L’outil qui envoie la requête'],['Output','Un outil associé qui traite une sortie du test']])}
 <p class="inline-note"><strong>Test Suite et Scenario désignent deux configurations de regroupement</strong><br>Scenario correspond à des tests dépendants, qui ne sont pas exécutables individuellement — il ne constitue pas un sous-niveau obligatoire de Test Suite</p>
 </div>`
},
{
 product:'soatest',type:'parcours',title:'Du cas de test au résultat',subtitle:'SOAtest 2026.1 — Construire un test API, définir sa réussite et diagnostiquer son résultat',
 render:()=>`<div class="soatest-journey">
 ${example('Connexion avec un compte actif — côté API','Exemple illustratif : une réponse HTTP 2xx et un champ token non vide dans le JSON reçu')}
 ${intro('Un appel API et ses contrôles associés','Le testeur configure REST Client et JSON Assertor — SOAtest exécute l’appel et calcule le résultat des contrôles')}
 <div class="sj-start"><strong>Point de départ</strong><p>Un projet ouvert, une suite dans un fichier .tst et un service de connexion accessible avec un compte de test actif</p></div>
 <div class="sj-design">
 ${flow([
   node('sj-create',1,1,'Ajouter le client','Dans <strong>Test Case Explorer</strong>, clic droit sur la suite → <strong>Add New → Test</strong><br>Choisir <strong>Standard Test → REST Client</strong>, puis <strong>Finish</strong>',{step:'1',path:'Suite → Add New → Test',color:'purple',next:true}),
   node('sj-request',1,2,'Configurer l’appel','<strong>Resource</strong> : Service Definition = None, Method = POST et URL du service<br><strong>Payload</strong> : contenu JSON avec les identifiants<br><strong>Misc</strong> : codes HTTP acceptés — ici, conserver les 2xx',{step:'2',path:'Éditeur REST Client',next:true}),
   node('sj-assert',1,3,'Définir le contrôle','Clic droit sur le client → <strong>Add Output</strong> : associer <strong>JSON Assertor</strong> au corps de la réponse<br>Dans <strong>Expected JSON</strong>, fournir un exemple contenant token<br><strong>Configuration → Add → Has Content Assertion</strong>, puis sélectionner token',{step:'3',path:'REST Client → Add Output → JSON Assertor'})
 ],[edge('sj-create','sj-request','Configurer',{fromSide:'right',toSide:'left'}),edge('sj-request','sj-assert','Contrôler',{fromSide:'right',toSide:'left'})])}
 <div class="sj-preparation">
 <div><h3>Les outils restent rattachés au test</h3><p>JSON Assertor contrôle la réponse du client pendant l’exécution<br>Le JSON fourni sert à sélectionner le champ — il ne simule pas la réponse du service</p></div>
 <div><h3>Préparer la relecture du trafic</h3><p>Vérifier la présence de Traffic Viewer sous le client<br>Si nécessaire : Add Output → Both → Traffic Object → Traffic Viewer</p></div>
 </div>
 <p class="sj-existing"><strong>Le test existe déjà ?</strong> Double-cliquer sur son nœud pour relire la requête et ses contrôles, puis passer à l’exécution</p>
 <div class="sj-transfer"><span>Enregistrer la configuration du test</span><b aria-hidden="true">↓</b></div>
 ${intro('Exécuter, lire le bilan, puis approfondir si nécessaire','Tout se déroule dans la même fenêtre : sélection dans l’explorateur, lancement, vues de résultat et retour aux éditeurs')}
 <div class="sj-execution">
 ${flow([
   node('sj-scope',1,1,'Choisir le bon périmètre','Le cas illustré utilise un appel indépendant<br>Un test peut être lancé seul si la suite autorise son exécution individuelle<br>Pour un Scenario avec dépendances, sélectionner le groupe',{type:'note'}),
   node('sj-run',1,2,'Exécuter et lire le bilan','Sélectionner la suite dans <strong>Test Case Explorer</strong><br><strong>Parasoft → Test Using</strong> : choisir une configuration d’exécution des tests fonctionnels<br>Lire le bilan dans <strong>Test Progress</strong> et les états dans l’explorateur',{step:'4',path:'Sélection → Parasoft → Test Using',color:'orange'}),
   node('sj-automatic',1,3,'La réussite est calculée','Le client accepte ici les codes HTTP 2xx et l’assertion exige un jeton non vide<br>Le testeur interprète le résultat produit par ces contrôles',{type:'note'}),
   node('sj-pass',2,1,'Constater la réussite','La coche verte dans <strong>Test Case Explorer</strong> indique un test réussi<br>Les contrôles configurés sont satisfaits — la validité du jeton pour un appel ultérieur demanderait un contrôle supplémentaire',{path:'Branche réussite — Test Case Explorer',color:'orange'}),
   node('sj-fail',2,3,'Comprendre l’échec','Dans <strong>Quality Tasks</strong>, double-cliquer sur le message<br>L’onglet <strong>Details</strong> précise le problème signalé<br>Distinguer une erreur d’appel d’un écart sur l’assertion',{step:'5',path:'Branche échec — Quality Tasks → Details',color:'orange',next:true}),
   node('sj-traffic',3,1,'Examiner l’échange','Double-cliquer sur <strong>Traffic Viewer</strong> sous le test<br>Choisir <strong>Test Run</strong>, puis lire <strong>Request / Response</strong><br><strong>Save Traffic</strong> conserve ces données après fermeture du projet',{path:'Consultation facultative après tout résultat',color:'pink'}),
   node('sj-correct',3,3,'Revenir à la cause','Dans <strong>Quality Tasks</strong>, clic droit sur le message → <strong>Open Editor for Test</strong><br>Ajuster la requête ou le contrôle si sa définition est en cause<br>Si le défaut vient du service, le faire corriger',{step:'6',path:'Quality Tasks → Open Editor for Test',next:true}),
   node('sj-repeat',4,2,'Relancer après correction','Dans <strong>Test Progress</strong>, <strong>Rerun Tests</strong> relance les derniers tests exécutés<br>Pour un autre périmètre, refaire la sélection et utiliser <strong>Parasoft → Test Using</strong><br><span class="sj-return"><span aria-hidden="true">↻</span> Retour à l’étape 4 pour lire le nouveau bilan</span>',{step:'7',path:'Test Progress → Rerun Tests',color:'orange'})
 ],[edge('sj-run','sj-pass','Réussite'),edge('sj-run','sj-fail','Échec'),edge('sj-pass','sj-traffic','Si besoin',{dashed:true}),edge('sj-fail','sj-traffic','Trafic si disponible',{dashed:true}),edge('sj-fail','sj-correct','Éditeur'),edge('sj-correct','sj-repeat','Après correction')])}
 </div>
 ${criteria([['Autonomie du testeur','Les éditeurs guident la configuration, mais il faut comprendre l’API et définir les contrôles attendus'],['Effort de navigation','Les vues restent dans la même fenêtre — le diagnostic demande de passer du message à l’éditeur ou au trafic'],['Compréhension','Le client envoie l’appel, l’assertion contrôle le JSON — un test réussi couvre ce qui a été configuré'],['Traçabilité du résultat','Le message désigne l’outil en échec et le trafic montre l’échange — Save Traffic assure sa conservation dans le projet']])}
 </div>`
},
{
 product:'keploy',type:'navigation',title:'Navigation des tests — Keploy',subtitle:'Console Web — suites API et édition des étapes, avec un accès distinct aux captures d’intégration',
 render:()=>`<div class="keploy-study">
 ${intro('Organisation de la navigation','API Testing organise les tests par application, suite et étape — les fenêtres de création, d’édition et de lancement s’ouvrent depuis cet espace')}
 <div class="kp-context"><strong>API Testing</strong><span>Sélecteur d’application → Test Suites</span></div>
 <div class="three-columns kp-entry">
 ${card({title:'Generate Tests',eyebrow:'Action — génération de tests',color:'purple',lines:['Fournir OpenAPI/Swagger, une collection Postman ou des commandes cURL','Générer des suites, puis les ouvrir avec View Test Suites'],extra:'<p class="card-note">Un agent local permet de joindre les API privées</p>'})}
 ${card({title:'Generation History',eyebrow:'Vue — historique de génération',color:'orange',items:[['Job ID','Retrouver une génération et ses entrées'],['Accepted / Rejected / Buggy','Examiner le classement des suites générées']],extra:'<p class="card-note">Cet historique décrit la génération, pas les exécutions ultérieures</p>'})}
 ${card({title:'Dashboard - Analytics',eyebrow:'Vue — synthèse de l’activité',color:'pink',lines:['Consulter l’activité des tests et la couverture des API','Lire les tendances et les indicateurs de l’application']})}
 </div>
 <div class="kp-transition"><span>Après génération → View Test Suites, ou accès direct à Test Suites</span><b aria-hidden="true">↓</b></div>
 <section class="kp-workspace" aria-labelledby="kp-suites-title"><div class="eyebrow">Espace de conception de l’application sélectionnée</div><h2 id="kp-suites-title">Test Suites</h2><p class="kp-caption">Une liste de suites et d’étapes à gauche, le contenu de l’étape sélectionnée à droite</p>
 <div class="kp-detail-grid">
 ${card({title:'Test Suites',eyebrow:'Panneau de gauche — liste',color:'teal',items:[['Suite → étape','Déplier une suite puis sélectionner l’appel à consulter'],['Filter Options','Filtrer par Status Code, HTTP Method ou Endpoint'],['Edit Suite','Modifier les informations de la suite depuis son menu'],['Add Labels','Classer la suite avec des labels depuis le même menu']],extra:'<p class="card-note">Le menu propose aussi Run Suite, Copy suite link et Delete Suite</p><p class="card-note">Un code HTTP 4xx ou 5xx est une valeur de réponse — sa conformité dépend du contrôle attendu</p>'})}
 <div class="kp-arrow"><span>Sélectionner<br>une étape</span><b aria-hidden="true">→</b></div>
 <div class="kp-step"><div class="eyebrow">Panneau de droite — contenu de la sélection</div><h3>Détail de l’étape</h3><div class="kp-step-fields"><div><h4>Request / Response</h4><p>Lire l’appel et la réponse, avec Headers et Body</p></div><div><h4>Assertions / Variables</h4><p>Consulter les contrôles et les valeurs utilisés par l’étape</p></div></div>
 <div class="kp-modal-link">Icône de modification → ouverture d’une fenêtre <span aria-hidden="true">↓</span></div>
 ${card({title:'Edit Test Step',eyebrow:'Fenêtre d’édition de l’étape',color:'pink',items:[['Request Details','Modifier méthode, URL, en-têtes et contenu'],['Variables','Définir les valeurs utilisées par l’étape'],['Assertions','Modifier les types de contrôles et les valeurs attendues']],extra:'<p class="card-note">Save Changes enregistre la modification — Cancel ferme la fenêtre sans la valider</p>',className:'kp-edit-modal'})}
 </div></div>
 <div class="kp-action-windows">
 <div class="kp-action-group"><p class="kp-modal-link">Bouton + dans Test Suites <span aria-hidden="true">↓</span></p>
 ${card({title:'Add New Test Suite',eyebrow:'Fenêtre de création',color:'purple',items:[['Suite Name / Description','Nommer et décrire la suite'],['Request Details / Assertions','Définir chaque étape et ses contrôles'],['Import Curl / Add Another Step','Importer un appel ou ajouter une étape']],extra:'<p class="card-note">Add Suite crée la suite — Cancel ferme la fenêtre</p>'})}</div>
 <div class="kp-action-group"><p class="kp-modal-link">Bouton Run Tests dans l’espace de suites <span aria-hidden="true">↓</span></p>
 ${card({title:'Run Tests',eyebrow:'Fenêtre de lancement',color:'orange',items:[['Endpoint','Définir l’API Endpoint URL pour l’exécution'],['Authentication','Renseigner l’authentification commune si nécessaire'],['Run Tests','Démarrer l’exécution du périmètre choisi']],extra:'<p class="card-note">View Test Run Report donne accès au rapport</p>'})}</div>
 </div></section>
 <div class="kp-transition"><span>View Test Run Report, ou accès direct à Run Reports dans la barre latérale</span><b aria-hidden="true">↓</b></div>
 ${card({title:'Run Reports',eyebrow:'Vue — résultats des exécutions API',color:'orange',items:[['Liste des rapports → Report ID','Choisir une exécution et lire son bilan'],['Suite → étape','Descendre dans les résultats pour examiner requête, réponse et écarts d’assertion'],['Filtres du rapport','Retrouver les résultats par statut, code HTTP, méthode ou endpoint']],className:'kp-reports'})}
 <section class="support-section kp-integration"><h2 class="section-title">Autre mode de test — Integration Testing</h2><p class="kp-caption">Capture et rejeu du trafic — le parcours Kubernetes ci-dessous est documenté pour Enterprise et Self-Hosted Dedicated</p>
 <div class="kp-capture-grid">
 ${card({title:'Clusters',eyebrow:'Vue — environnement Kubernetes',color:'purple',items:[['Connect New Cluster','Connecter un cluster puis installer le dispositif de capture'],['Cluster → pod','Choisir le service à enregistrer'],['Start Recording / Stop Recording','Démarrer puis arrêter la capture du trafic']]})}
 <div class="kp-arrow"><span>Retrouver<br>les captures</span><b aria-hidden="true">→</b></div>
 ${card({title:'Recordings',eyebrow:'Vue — cas enregistrés',items:[['Search test cases','Rechercher un cas dans la liste'],['Cas → Request / Response','Lire l’échange sélectionné, ses Headers et son Body'],['Use for AI Tests','Utiliser les captures pour générer des suites API supplémentaires']],extra:'<p class="card-note">La génération IA est une action supplémentaire à partir des captures</p>'})}
 </div>
 <div class="kp-local"><h3>Relecture d’un rejeu local — Keploy Console</h3><p>Après une exécution locale, lancer keploy console, sélectionner l’application et ouvrir son dernier rapport<br>Le dernier rapport permet d’ajuster les réponses attendues et les champs Noise dans les fichiers locaux — fonction documentée pour Enterprise et Self-Hosted Dedicated</p></div>
 </section>
 ${vocab([['Test Suite','En API Testing, une suite contenant une ou plusieurs étapes'],['Test Step','Un appel API avec ses variables et ses contrôles'],['Assertion','Une règle de validation de la réponse'],['Test set','Un ensemble de cas issus d’une capture d’intégration'],['Mock','Une réponse de dépendance capturée pour le rejeu']])}
 </div>`
},
{
 product:'keploy',type:'parcours',title:'Du cas de test au résultat',subtitle:'Keploy — Capturer une connexion de référence, rejouer le test et comprendre les écarts',
 render:()=>`<div class="keploy-journey">
 ${example('Connexion avec un compte actif — capture et rejeu API','Exemple illustratif : conserver le comportement d’une connexion reconnue correcte après une modification du service')}
 ${intro('Le cas de test vient d’un échange enregistré','Parcours Integration Testing en local — les requêtes et réponses capturées servent de référence au rejeu')}
 <div class="kjp-start"><strong>Point de départ</strong><p>Keploy installé et connecté à un compte, application démarrable et dépendances compatibles avec la capture<br>Le service et les données du compte de test sont disponibles pour enregistrer la connexion</p></div>
 <section class="kjp-capture">
 ${flow([
 node('kr-record',1,1,'Démarrer la capture','Lancer <strong>keploy record</strong> avec la commande de démarrage du service<br>Keploy démarre l’application et observe ses échanges',{step:'1',path:'Terminal → keploy record',color:'purple',next:true}),
 node('kr-connect',1,2,'Effectuer la connexion','Envoyer la requête avec les identifiants du compte actif depuis un client API ou le front<br>Terminer la capture avec <strong>Ctrl+C</strong>',{step:'2',path:'Application ou client API → appel de connexion',next:true}),
 node('kr-reference',1,3,'Examiner la capture','Le rejeu automatique vérifie la capture et détecte des champs variables, sauf s’il a été désactivé<br>Lire son bilan et vérifier que la réponse enregistrée correspond au comportement attendu',{step:'3',path:'Fin de record → rejeu automatique → bilan'})
 ],[edge('kr-record','kr-connect','Appeler',{fromSide:'right',toSide:'left'}),edge('kr-connect','kr-reference','Arrêter',{fromSide:'right',toSide:'left'})])}
 </section>
 <div class="kjp-artifacts"><div><h3>Test case → la référence</h3><p>Dans le test set : la requête entrante et la réponse reçue du service</p></div><div><h3>Mocks → les dépendances</h3><p>Les échanges capturés avec les dépendances servent à simuler leurs réponses au rejeu</p></div></div>
 <p class="kjp-reference-note"><strong>Un enregistrement ne constitue pas à lui seul une validation métier</strong><br>La réponse de référence doit représenter la connexion attendue avant de servir à détecter des régressions</p>
 <div class="kjp-transfer"><span>Le test set est conservé — la version du service peut évoluer</span><b aria-hidden="true">↓</b></div>
 ${intro('Rejouer puis interpréter le résultat','Le service est réellement exécuté — les dépendances prises en charge répondent à partir des mocks enregistrés')}
 <div class="kjp-replay">
 ${flow([
 node('kr-scope',1,1,'Ce qui est testé','Le rejeu vérifie le service avec les échanges de dépendances enregistrés<br>Il ne vérifie pas la disponibilité actuelle des services remplacés par des mocks',{type:'note'}),
 node('kr-test',1,2,'Rejouer sur la nouvelle version','Lancer <strong>keploy test</strong> avec la commande de démarrage du service<br>Choisir le test set avec <strong>-t</strong> si nécessaire<br>Keploy compare la réponse obtenue à la référence',{step:'4',path:'Terminal → keploy test',color:'orange',next:true}),
 node('kr-noise-note',1,3,'Les champs variables comptent','Un horodatage ou un jeton peut changer entre deux exécutions<br>Un champ exclu via <strong>Noise</strong> ne participe plus à cette comparaison',{type:'note'}),
 node('kr-report',2,2,'Lire le bilan et les écarts','<strong>keploy report --summary</strong> affiche les totaux<br><strong>keploy report</strong> détaille par défaut les échecs<br>Retrouver le test set, le cas et les différences de code HTTP, d’en-têtes ou de contenu',{step:'5',path:'Terminal → keploy report',color:'orange'}),
 node('kr-web',2,3,'Accès au rapport Web','Le terminal fournit aussi le lien du rapport envoyé au tableau de bord<br>La relecture et l’édition avec Keploy Console sont détaillées plus bas',{type:'note'}),
 node('kr-pass',3,1,'Constater la conformité','Le rejeu satisfait la comparaison configurée avec la référence<br>Le résultat vaut pour les échanges enregistrés et les champs effectivement comparés',{path:'Branche réussite — résultat du rejeu',color:'orange'}),
 node('kr-diagnose',3,3,'Identifier la cause','Examiner l’écart avant de modifier le test<br>Distinguer défaut du service, donnée variable et changement attendu<br>Contrôler aussi les mocks si un appel de dépendance ne peut pas être rejoué',{step:'6',path:'Branche échec — diagnostic',color:'pink'}),
 node('kr-defect',4,1,'Corriger le service','Si le comportement est incorrect, faire corriger l’application<br>Conserver la référence pour vérifier la correction',{path:'Si l’écart révèle une régression'}),
 node('kr-noise',4,2,'Ajuster la comparaison','Si seule une valeur sans enjeu fonctionnel varie, ajuster <strong>Noise</strong> dans le cas ou la configuration<br>Conserver les contrôles utiles à la connexion',{path:'Si l’écart vient d’une valeur variable'}),
 node('kr-update',4,3,'Faire évoluer la référence','Si le changement est validé, mettre à jour l’attendu ou refaire la capture<br><strong>keploy normalize</strong> reprend la réponse du rejeu ciblé — les échecs à risque élevé sont bloqués par défaut',{path:'Si le comportement attendu a changé',color:'purple'}),
 node('kr-repeat',5,2,'Relancer et relire','Relancer <strong>keploy test</strong> sur le périmètre concerné, puis consulter le nouveau rapport<br><span class="kjp-return"><span aria-hidden="true">↻</span> Retour à l’étape 4 avec la correction ou la référence révisée</span>',{step:'7',path:'Terminal → keploy test → keploy report',color:'orange'})
 ],[edge('kr-test','kr-report','Résultat'),edge('kr-report','kr-web','Lien Web',{fromSide:'right',toSide:'left',dashed:true}),edge('kr-report','kr-pass','Conforme'),edge('kr-report','kr-diagnose','Écart'),edge('kr-diagnose','kr-defect'),edge('kr-diagnose','kr-noise'),edge('kr-diagnose','kr-update'),edge('kr-defect','kr-repeat'),edge('kr-noise','kr-repeat'),edge('kr-update','kr-repeat')])}
 </div>
 <section class="support-section kjp-console"><h2 class="section-title">Option de relecture et d’édition — Keploy Console</h2><p class="kjp-console-scope">Fonction documentée pour Enterprise et Self-Hosted Dedicated — après une exécution locale</p>
 <div class="kjp-console-route"><strong>keploy console</strong><span aria-hidden="true">→</span><span>Choisir l’application</span><span aria-hidden="true">→</span><span>Ouvrir le dernier Test Run</span><span aria-hidden="true">→</span><span>Test Sets → cas → Expected / Actual</span></div>
 <div class="three-columns kjp-console-actions">
 ${card({title:'Mark Noise',eyebrow:'Menu du cas',lines:['Choisir les champs à ignorer dans la comparaison','La modification est répercutée dans le fichier de test local']})}
 ${card({title:'Normalise',eyebrow:'Menu du cas',color:'purple',lines:['Mettre à jour la réponse attendue à partir du résultat observé','Cette action change la référence du test']})}
 ${card({title:'Re-Record',eyebrow:'Menu du cas',color:'purple',lines:['Accéder à la reprise de l’enregistrement','Le menu propose aussi Ignore et Delete']})}
 </div><p class="kjp-console-note">Les modifications depuis la console portent sur le dernier rapport — un nouveau rejeu permet de vérifier leur effet</p></section>
 ${criteria([['Autonomie du testeur','La capture produit les cas sans les saisir, mais l’installation et le lancement du service demandent un environnement préparé'],['Effort de navigation','Le parcours local passe entre terminal, application et fichiers — le rapport Web offre un autre accès aux résultats'],['Compréhension','Distinguer réponse de référence, mocks et champs exclus — une capture peut aussi enregistrer un comportement incorrect'],['Traçabilité du résultat','Le rapport relie l’écart au test set et au cas — modifier la référence ou Noise change ce que le prochain rejeu vérifie']])}
 </div>`
},
{
 product:'katalon',type:'navigation',title:'Navigation des tests — Katalon Studio',subtitle:'Application de bureau — arborescence du projet, éditeurs de tests API et vues de résultat',
 render:()=>`<div class="katalon-study">
 ${intro('Organisation de la navigation','Une même fenêtre réunit Tests Explorer, les éditeurs en onglets et les vues de suivi — les flèches représentent des accès, pas une succession d’étapes')}
 <div class="kt-context"><strong>Katalon Studio</strong><span>Vue centrée sur les tests API — interface Studio 11.x</span></div>
 <section class="kt-workspace" aria-label="Arborescence et éditeurs de Katalon Studio">
 <aside class="kt-sidebar">
 ${card({title:'Tests Explorer',eyebrow:'Vue de gauche — projet ouvert',color:'purple',subtitle:'Branches utiles aux tests API',extra:`
 <ul class="kt-tree">
 <li><strong>Profiles</strong><span>Profils et variables globales</span></li>
 <li><strong>Test Cases <b aria-hidden="true">→</b></strong><span>Cas automatisés et dossiers</span></li>
 <li><strong>Object Repository <b aria-hidden="true">→</b></strong><span>Objets de requête réutilisables</span></li>
 <li><strong>Test Suites <b aria-hidden="true">→</b></strong><span>Suites et collections de suites dans la même branche</span></li>
 <li><strong>Data Files</strong><span>Jeux de données utilisés par les tests</span></li>
 <li><strong>Reports <b aria-hidden="true">↓</b></strong><span>Historique des rapports de suites et de collections</span></li>
 </ul>
 <div class="kt-inset"><h3>Double-clic sur un élément</h3><p>Ouvrir son contenu dans la zone d’édition</p></div>
 <div class="kt-explorer-extra"><h3>Autres branches du projet</h3><p>Checkpoints, Keywords, Test Listeners, Include et Plugins, selon le contenu du projet</p></div>`})}
 <div class="kt-side-note"><h3>Créer depuis l’arborescence</h3><p><strong>Object Repository → New → Web Service Request</strong><br>Choisir RESTful ou SOAP</p><p><strong>Test Cases → New → Test Case</strong><br>Créer un cas automatisé</p><p><strong>Test Suites → New</strong><br>Choisir Test Suite ou Test Suite Collection</p><span>Clic droit sur la branche concernée</span></div>
 </aside>
 <div class="kt-open"><span>Ouvrir<br>l’élément</span><b aria-hidden="true">→</b></div>
 <section class="kt-editors" aria-labelledby="kt-editors-title"><div class="eyebrow">Zone centrale — contenu de la sélection</div><h2 id="kt-editors-title">Éditeurs en onglets</h2><p class="kt-caption">L’onglet ouvert porte le nom de l’élément<br>Les titres ci-dessous désignent les types d’éditeurs décrits dans la documentation</p>
 <div class="kt-editor-grid">
 ${card({title:'Test Case editor',eyebrow:'Depuis Test Cases',items:[['Manual / Script','Deux vues du même cas : assembler des mots-clés ou éditer le code'],['Variables','Définir les paramètres propres au cas'],['Data binding','Associer les données utilisées par le cas'],['Integration / Properties','Consulter les liens d’intégration et les propriétés']],extra:'<div class="kt-inset"><h3>Manual est une vue de conception</h3><p>Les étapes restent exécutées automatiquement</p></div><p class="card-note">Dans Manual : Add ajoute une étape avec Keyword, Object, Input et Output</p>'})}
 ${card({title:'Web Service editor',eyebrow:'Depuis Object Repository — requête REST',color:'orange',items:[['Méthode, URL et Query Parameters','Définir l’appel et ses paramètres'],['Authorization / HTTP Header / HTTP Body','Configurer l’authentification, les en-têtes et le contenu'],['Validation / Verification','Valider le schéma et écrire les contrôles de réponse'],['Variables / Configuration','Paramétrer la requête et ses réglages']],extra:'<div class="kt-inset kt-response"><h3>Response</h3><p>Panneau associé après envoi : Body, Header, Verification Log et Validation Log</p></div><p class="card-note">Le menu d’envoi propose Test Request and Verify pour lancer la requête et ses vérifications</p>'})}
 ${card({title:'Test suite editor',eyebrow:'Depuis Test Suites — suite',color:'pink',items:[['Main','Composer la suite et configurer les cas à exécuter'],['Add → Test Case Browser','Ouvrir la sélection des cas existants à ajouter'],['Script','Définir les traitements de préparation et de fin'],['Integration / Analytics / Result','Liens externes, tendances récentes et résultat de la dernière exécution']],extra:'<p class="card-note">Run est aussi le nom de la case à cocher qui inclut un cas dans la suite — le lancement se fait depuis la barre d’outils</p>'})}
 ${card({title:'Test suite collection editor',eyebrow:'Depuis Test Suites — collection',color:'pink',items:[['Main → Add → Test Suite Browser','Ouvrir la sélection des suites à regrouper'],['Run with / Run configuration / Profile','Régler l’environnement et le profil de chaque suite'],['Run','Cocher les suites à inclure dans l’exécution'],['Result','Lire le bilan de la collection après exécution']],extra:'<p class="card-note">La collection permet de lancer plusieurs suites en séquence ou en parallèle</p>'})}
 </div></section></section>
 <section class="support-section"><h2 class="section-title">Données et lancement</h2><div class="three-columns kt-support">
 <div><h3>Profiles</h3><p>Ouvrir un profil pour définir ses variables globales dans Manual ou Script<br>Le sélecteur de la barre d’outils choisit le profil actif</p></div>
 <div><h3>Data Files → Data binding</h3><p>Préparer les jeux de données du projet puis les associer aux variables des tests à exécuter</p></div>
 <div><h3>Barre d’outils → Run</h3><p>Lancer le cas, la suite ou la collection active<br>Un cas peut s’exécuter seul, sans suite ni collection</p></div>
 </div></section>
 <section class="support-section"><h2 class="section-title">Suivi et résultats dans Studio</h2><p class="kt-caption">Les vues d’exécution complètent les éditeurs — Reports conserve les rapports générés pour les suites et les collections</p>
 <div class="kt-results">
 <div class="kt-live">
 ${card({title:'Job Progress',eyebrow:'Vue — avancement des exécutions',color:'orange',lines:['Suivre les exécutions, leur état et leur progression']})}
 ${card({title:'Log Viewer',eyebrow:'Vue — étapes exécutées',color:'orange',lines:['Déplier les étapes puis sélectionner celle à examiner','Lire les messages, les erreurs et le statut de chaque étape'],extra:'<p class="card-note">Console donne accès aux messages techniques d’exécution</p>'})}
 </div>
 ${card({title:'Result',eyebrow:'Onglet de la suite ou de la collection',color:'pink',subtitle:'Accès après exécution — historique dans Reports',items:[['Rapport de suite','Tableau des cas et itérations avec filtres Passed, Failed, Error, Incomplete et Skipped'],['Summary / Execution Settings / Execution Environment','Relire le bilan, les paramètres et le contexte de l’exécution']],extra:'<div class="kt-detail-link">Sélectionner une itération → Show Test Case Details <span aria-hidden="true">↓</span></div><div class="kt-inset kt-details"><h3>Panneau de détail du cas exécuté</h3><p><strong>Test Log</strong> : étapes et statuts<br><strong>Information</strong> : résumé de l’itération<br><strong>Integration</strong> : liens qTest ou Jira</p></div><p class="card-note">Dans le rapport d’une collection, Test Suite Details ouvre le rapport de la suite choisie</p>'})}
 </div></section>
 ${vocab([['Test Object','Un objet réutilisable, dont une requête API'],['Test Case','Une séquence d’actions et de vérifications'],['Test Suite','Un regroupement de cas à exécuter'],['Test Suite Collection','Un regroupement de suites'],['Execution Profile','Un ensemble de variables globales pour l’exécution']])}
 <p class="inline-note"><strong>Périmètre : navigation locale de Katalon Studio</strong><br>Katalon True Platform dispose d’accès d’intégration dans Studio — la navigation de cette plateforme Web est distincte et n’est pas détaillée ici</p>
 </div>`
},
{
 product:'katalon',type:'parcours',title:'Du cas de test au résultat',subtitle:'Katalon Studio — Concevoir un test API réutilisable, exécuter une suite et diagnostiquer son résultat',
 render:()=>`<div class="katalon-journey">
 ${example('Connexion avec un compte actif — côté API','Exemple illustratif : POST /login renvoie HTTP 200 et un champ token non vide dans la réponse JSON')}
 ${intro('Une requête réutilisable, appelée par un cas automatisé','Le testeur définit les contrôles — Studio envoie l’appel, exécute les vérifications et calcule le résultat')}
 <div class="ktj-start"><strong>Point de départ</strong><p>Un projet ouvert dans Studio, une API de connexion accessible et un compte de test actif<br>Les noms Connexion API et Connexion valide sont les noms choisis pour cet exemple</p></div>
 <section class="ktj-design" aria-label="Conception du test API">
 ${flow([
   node('ktj-request',1,1,'Configurer la requête','Clic droit sur <strong>Object Repository → New → Web Service Request</strong><br>Nommer l’objet <strong>Connexion API</strong> et choisir <strong>RESTful</strong><br>Définir POST et l’URL du service<br><strong>HTTP Header / HTTP Body</strong> : type de contenu JSON et identifiants du compte',{step:'1',path:'Object Repository → Web Service editor',color:'orange',next:true}),
   node('ktj-verify',1,2,'Définir la réussite','Dans <strong>Verification</strong>, ajouter le contrôle du code HTTP 200 et une assertion sur <strong>token non vide</strong><br>Les snippets fournissent des exemples de script à adapter<br>Prévoir des contrôles bloquants pour que leur échec fasse échouer le test',{step:'2',path:'Objet Connexion API → Verification',color:'orange',next:true}),
   node('ktj-case',1,3,'Appeler la requête et ses contrôles','Clic droit sur <strong>Test Cases → New → Test Case</strong><br>Nommer le cas <strong>Connexion valide</strong><br>Dans <strong>Script</strong>, appeler <strong>WS.sendRequestAndVerify</strong> avec l’objet Connexion API et <strong>STOP_ON_FAILURE</strong><br>Enregistrer le cas et l’objet',{step:'3',path:'Test Cases → Test Case editor → Script'})
 ],[edge('ktj-request','ktj-verify','Contrôles',{fromSide:'right',toSide:'left'}),edge('ktj-verify','ktj-case','Réutiliser',{fromSide:'right',toSide:'left'})])}
 <div class="ktj-design-notes">
 <div><h3>Essayer l’appel pendant la conception</h3><p>Depuis l’objet : menu <strong>Test Request → Test Request and Verify</strong><br>Lire le JSON dans <strong>Response → Body</strong> et les contrôles dans <strong>Verification Log</strong><br>Cet essai direct ne constitue pas le rapport de la suite</p></div>
 <div><h3>Le lien qui rend les contrôles réutilisables</h3><p><strong>Send Request And Verify</strong> envoie la requête et exécute son script Verification<br>Le cas peut aussi être assemblé dans <strong>Manual</strong> avec des mots-clés — il reste automatisé</p></div>
 </div></section>
 <p class="ktj-existing"><strong>Le cas existe déjà ?</strong> L’ouvrir dans Test Cases, relire son appel et les contrôles de l’objet référencé, puis préparer son exécution</p>
 <div class="ktj-transfer"><span>Le cas enregistré est prêt à être ajouté à une suite</span><b aria-hidden="true">↓</b></div>
 ${intro('Exécuter une suite, puis revenir à la cause d’un écart','Le parcours choisi utilise une suite pour regrouper les tests et conserver un rapport — un cas peut également s’exécuter seul')}
 <section class="ktj-execution" aria-label="Exécution, résultats et correction">
 ${flow([
   node('ktj-suite',1,1,'Composer la suite','Clic droit sur <strong>Test Suites → New → Test Suite</strong><br>Ouvrir <strong>Main → Add</strong><br>Dans <strong>Test Case Browser</strong>, sélectionner Connexion valide puis <strong>OK</strong><br>Laisser sa case <strong>Run</strong> cochée pour l’inclure',{step:'4',path:'Test Suites → Main → Add',color:'pink',next:true}),
   node('ktj-run',1,2,'Lancer l’exécution','Sélectionner la suite et le profil d’exécution approprié dans la barre d’outils, puis <strong>Run</strong><br><strong>Job Progress</strong> suit l’avancement<br><strong>Log Viewer</strong> détaille les étapes et leurs messages',{step:'5',path:'Barre d’outils → Run',color:'orange',next:true}),
   node('ktj-result',1,3,'Lire le rapport','Ouvrir <strong>Result</strong> dans l’éditeur de la suite<br>Repérer Connexion valide et son statut dans le tableau<br><strong>Summary</strong> présente le bilan<br><strong>Execution Settings / Execution Environment</strong> donnent le contexte',{step:'6',path:'Suite → Result',color:'pink'}),
   node('ktj-pass',2,1,'Constater la réussite','<strong>Passed</strong> indique que le cas a réussi avec les contrôles configurés<br>Ici : HTTP 200 et token non vide<br>La validité du jeton pour accéder à une autre ressource demanderait un contrôle supplémentaire',{path:'Branche réussite — Passed',color:'pink'}),
   node('ktj-status',2,2,'Un résultat calculé','Le testeur ne renseigne pas lui-même Passed ou Failed<br>Un statut <strong>Skipped</strong> correspond à un cas ignoré, pas à une réussite<br>Avec l’arrêt sur échec, les contrôles suivants peuvent ne pas avoir été exécutés',{type:'note'}),
   node('ktj-diagnose',2,3,'Examiner ce qui a échoué','Sélectionner l’itération → <strong>Show Test Case Details</strong><br>Dans <strong>Test Log</strong>, lire les étapes et messages<br>Distinguer un contrôle non satisfait d’une erreur d’appel ou d’une exécution interrompue<br><strong>Information</strong> précise le contexte de l’itération',{step:'7',path:'Failed, Error ou Incomplete → détail du cas',color:'pink',next:true}),
   node('ktj-history',3,1,'Retrouver une exécution passée','<strong>Reports</strong> conserve les rapports de suites et de collections dans des dossiers datés<br><strong>Result</strong> montre le résultat de la dernière exécution de la suite',{type:'note'}),
   node('ktj-shared',3,2,'Un objet peut servir à plusieurs cas','Modifier Connexion API ou son script Verification change ce que ses prochains appels testeront<br>Identifier les autres cas qui le réutilisent avant d’ajuster les contrôles',{type:'note'}),
   node('ktj-correct',3,3,'Corriger puis relancer','Revenir à <strong>Object Repository</strong> pour l’URL, le contenu ou les contrôles de l’objet<br>Revenir à <strong>Test Cases</strong> pour la logique d’appel<br>Si le défaut vient du service, le faire corriger<br>Enregistrer puis sélectionner à nouveau la suite et lancer <strong>Run</strong><span class="ktj-return"><span aria-hidden="true">↻</span> Retour à l’étape 5, puis lecture du nouveau Result</span>',{step:'8',path:'Éditeur concerné → enregistrer → Run',color:'teal'})
 ],[edge('ktj-suite','ktj-run','Lancer',{fromSide:'right',toSide:'left'}),edge('ktj-run','ktj-result','Rapport',{fromSide:'right',toSide:'left'}),edge('ktj-result','ktj-pass','Passed'),edge('ktj-result','ktj-diagnose','À diagnostiquer'),edge('ktj-diagnose','ktj-correct','Après diagnostic')])}
 </section>
 ${criteria([['Autonomie du testeur','Les éditeurs et snippets aident à démarrer — définir les assertions et adapter les scripts demande une compréhension de l’API'],['Effort de navigation','Tout reste dans Studio, mais le parcours passe par l’objet, le cas, la suite et le détail du résultat'],['Compréhension','Distinguer la requête, ses contrôles et le cas qui les appelle — un code HTTP 200 ne suffit pas à établir la réussite'],['Traçabilité du résultat','Le rapport relie le cas à ses étapes, messages et paramètres — Reports permet de retrouver les exécutions précédentes']])}
 </div>`
}
];
// Garder les outils de test ensemble et placer le regard complémentaire Clarity à la fin
const clarityBoards = BOARDS.splice(BOARDS.findIndex(board=>board.product==='clarity'));
BOARDS.push(...NEW_BOARDS,...clarityBoards);
const clarityProduct = PRODUCTS.clarity;
delete PRODUCTS.clarity;
PRODUCTS.clarity = clarityProduct;

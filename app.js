// ===== Données recopiées depuis les captures. Noeud : N(titre, grade, lignes, enfants, options)
// lignes : "!texte" = rouge (vacant) ; "texte|TAG" = pastille ; options : p = paires [gauche,droite] de part et d'autre du tronc, h = lien, c = "wide"
const GA="GF08 à GF10",GB="GF09 à GF12",GC="GF11 à GF14",G13="GF13 à GF15",G35="GF03 à GF05",G46="GF04 à GF06",G47="GF04 à GF07",G710="GF07 à GF10",G79="GF07 à GF09";
const N=(t,g,l,c,o)=>[t,g,l||[],c||[],o||{}];
const V=["!Vacant"],L="departement.html?d=";

const DADC=N("Département Acquisition et Développement des Compétences (DADC)",G13,["C00947 El Hadji Amadou CISSE"],[
 N("Chef de Service Gestion des Carrières et des Compétences",GC,V,[
  N("Chef d'Unité Mobilité du Personnel",GB,["M06997 Lamine Birama SARR"],[N("02 Assistants Mobilité du Personnel",GA,["M08553 Ousmane KANE"])]),
  N("Chef d'Unité Évaluation et Management des Performances du Personnel",GB,V,[N("02 Assistants Évaluation",GA,["M06674 Aminata FALL","!01 Poste vacant"])])]),
 N("Chef de Service Prévisions RH & Recrutement",GC,["C00839 Mafou BA"],[
  N("Chef d'Unité Statistique Structures & Prévisions RH",GB,["M07759 Adramé DIALLO"],[N("02 Assistants Statistiques & Prévisions RH",GA,["M07762 Ndeye Binta NDIAYE"])]),
  N("Chef d'Unité Recrutement",GB,["M07330 Bénédicta CARVALHO"],[N("03 Assistants Recrutement",GA,["!03 Postes vacants"])])]),
 N("Chef de Service Développement des Compétences",GC,["C00916 Khourédia Faye SECK"],[
  N("Expert Ingénierie Formation","GF11 à GF15",["C01086 Ousmane Mbèry NDIAYE"],[
   N("Chef d'Unité Réalisation des Formations",GB,["M06583 Mame Coumba T. SECK"],[N("02 Assistants Formation",GA,["M08448 Fatou Talibé B. A. SY","!01 Poste vacant"])]),
   N("Chef d'Unité Gestion des Stages et Relations Extérieures",GB,["M07423 Lucien Amadou DIOUF"],[N("02 Assistants Gestion des Stages",GA,["!02 Postes vacants"])])])])
],{p:[[null,N("Secrétaire",G79,V)]]});

const DRH=N("Direction des Ressources Humaines","GF14 à U1",["C00439 Ndèye Fatou SARR"],[
 N("Délégation Coordination Santé et Sécurité au Travail",G13,["C00825 Yacine Ndoumbé JOUGA"],[],{h:L+"dcsst"}),
 N("08 correspondants RH",GB,["C00840 Djiby GAYE|DPP","C00841 Alphonse Gaïky BAHOUM|DPC","C01079 Massamba Sall DIA|DRN","C01080 Thiané SIDIBE|DPR","M06620 Alassane Laurent DABO|DRCE","C01303 Aïssatou FALL|DRCO","C01307 Oury Marie Isabelle NDIAYE|DPE","C01337 Samba DIAW|DRS"],[
  N("08 Assistants RH",GA,["M08559 Mouhamadou Lamine DIENG|DPP","M07771 Dieynaba DIALLO|DPC","M07362 Diam Ba NDIAYE|DRN","M08025 Mouhamed El Bachir SALL|DPR","M08064 Bassirou YADE|DRCE","M08264 Mody Barka BA|DRCO","M08176 Khadidiatou CISSE|DPE","M08558 Mohamed KEITA|DRS"],[],{c:"wide"})],{c:"wide"}),
 N("Chef de Département Acquisition et Développement des Compétences",G13,["C00947 El Hadji Amadou CISSE"],[],{h:L+"dadc"}),
 N("Chef de Département Administration du Personnel et Rémunération",G13,["C00833 Abdou Sarr THIAW"],[],{h:L+"dapr"}),
 N("Chef de Cellule Affaires Sociales",G13,["C00663 Baye Ousmane NIANG"],[],{h:L+"das"}),
 N("Chef de Service Administration et Budget (SAB)",GC,["C00946 Gora DIABAYE"],[
  N("Chef d'Unité Administration, Gestion et Logistique",GB,["M06398 Kiné GUEYE"],[
   N("Pool Chauffeurs CAR (04)",G35,["M08005 Mbaye SENE","M08129 Cheikh Tidiane NDONG","M08545 Talla SENE","M08680 Lana NDIAYE"])
  ],{p:[[N("Assistant Comptable et Budget",GA,["M08426 Ndèye Fatou CORREA"]),N("Assistant Administration et Logistique",GA,["M08530 El Hadji Oumar NIASSE"])]]}),
  N("Chef d'Unité Statistiques et Suivi Plans d'Actions",GB,["M06728 Mariama Dalanda BARRY"],[
   N("02 Assistants Statistiques et Suivi Plans d'Actions",GA,["M06673 Fatoumata Moussou SEYDI","!01 Poste Vacant"])])])
],{p:[[N("Conseillers","GF11 à GF15",["C00661 Ousmane FALL","C00842 Coura Mariam WANE","C00905 Mouhamed Rassoul NDIATH"]),N("Assistance de direction",GA,["M05210 Rosalie DIOUF"])],
      [N("Agent de liaison",G35,["M06934 Mbaye Babacar BA"]),N("Chauffeur",G35,["M08570 Matar SAMB"])]]});

const DCH=N("Chauffeur Ambulacier",G46,[]);const ch=(m)=>N("Chauffeur Ambulacier",G46,[m]);
const DCSST=N("Déléguée de la Coordination Santé et Sécurité au Travail (DCSST)",G13,["C00825 Yacine Ndoumbé JOUGA"],[
 N("Chef de Département Santé et Service au Travail de Dakar 1",G13,V),
 N("Sage-Femme d'État",G710,["M06725 Fatou MBEGUERE"],[N("Aide Soignante",G47,["M05192 Marème SECK"])]),
 ch("M06442 Abdou Aziz KANDJI"),
 N("Chef de Département Santé et Service au Travail de Dakar 2",G13,["C01174 Ibrahima Louis Martin DIENG"],[
  N("Infirmier d'État Immeuble Keur Gorgui",G710,["M07725 Abdou Aziz NDIAYE"],[N("Infirmier Auxiliaire",G47,["M08585 Sanou NDIAYE"])]),
  ch("M06221 Thierno SAMBE"),
  N("Infirmier d'État Bel Air",G710,["M06574 Mounirou Abdoul KANE"],[N("Infirmier Auxiliaire",G47,["M08584 Thiané FALL"])])]),
 N("Infirmier Major avec Rang de Chef d'Unité",GB,["M06302 Babacar GAYE"],[N("Infirmier Auxiliaire",G47,["M06380 Fatou B. Rassoul NIASS"])]),
 N("Chef de Département Santé et Service au Travail de Dakar 3",G13,["C01263 Rodrigue J. Eymar COLY"],[
  N("Infirmier d'État Guédiawaye",G710,["M06623 Penda KANE"]),
  ch("M08411 Amadou Moctar LY"),
  N("Infirmier d'État Hann",G710,["M07702 El Hadji Abdou Aziz SARR"],[N("Infirmier Auxiliaire",G47,["M07672 Dieynaba COLY"])])]),
 N("Chef de Département Santé et Service au Travail de Dakar 4",G13,["C01097 El Hadji Malick DIOP"],[
  N("Infirmier d'État Mbao",G710,["M06707 Khady Thiam GUEYE"]),
  N("Infirmier d'État Cap des Biches",G710,["M05449 Moctar LY"],[N("Infirmier Auxiliaire",G47,["M06307 Fatime DIOUF"])]),
  ch("M06436 Serigne Abdou Lahat DIAW"),
  N("Infirmier d'État Rufisque",G710,["M08656 Papa Edou. Abdoulaye FALL"])])
],{p:[[null,N("Assistance de Délégation",GA,["M06609 Bintou DIAGNE"])]]});

const DAPR=N("Chef de Département Administration du Personnel et Rémunération",G13,["C00833 Abdou Sarr THIAW"],[
 N("Chef de Gestion Rémunération",GC,["C01232 Papa Mamadou NDIAYE"],[
  N("Chef d'Unité Traitement Salaires Cadres",GB,["C01228 Nansani KONATE"],[N("02 Assistants Traitement Salaires Cadres",GA,["M07823 Ibrahima NDIAYE","!01 Poste vacant"])]),
  N("Chef d'Unité Traitement Salaires Non Cadres",GB,["M07825 Abdou Aziz LO"],[N("03 Assistants Traitement Salaires Non Cadres",GA,["M07998 Mouhamet GAYE","!03 Postes vacants"])])
 ],{p:[[null,N("Secrétaire",G79,["M08266 Gnilane FAYE"])]]}),
 N("Chef de Service Administration du Personnel",GC,["C00906 Papa Mamadou NDAO"],[
  N("Chef d'Unité Administration du Personnel Cadres",GB,["C01231 Mame Fatma KANE"],[N("02 Assistants Administration Personnel Cadres",GA,["M06368 Fama GAYE","!01 Poste vacant"])]),
  N("Chef d'Unité Administration Personnel Non Cadres",GB,V,[N("02 Assistants Administration Personnel Non Cadres",GA,["M07758 El Hadji Oumar SALL","M07826 Aminata NDIAYE"])])
 ],{p:[[null,N("Secrétaire",G79,V)]]})
],{p:[[N("Assistance Archiviste",GA,["M07461 Awa DIOP"]),N("Secrétaire",G79,["M08274 Mame Diarra MBAYE"])]]});

const DAS=N("Chef de Département Affaires Sociales",G13,["C00663 Baye Ousmane NIANG"],[
 N("Chef de Service Actions Sociales et Relations Partenariales",GC,["C00886 Ndèye Anta NDOYE"],[
  N("Chef d'Unité Actions et Relations Sociales",GB,["M06746 Joseph Latyr THIAO"],[
   N("Assistant Avantages Sociaux",GA,["M08649 Adama El Bachir DIOP"]),N("Assistant Relations Sociales et Partenariales",GA,["M08681 Fanta SANOKO"])]),
  N("Chef d'Unité Cérémonies Religieuses et d'Activités Sportives, Socio-Éducatives",GB,["C01117 Senghane MBAYE"],[
   N("Assistant Activités Éducatives et Socio-Culturelles",GA,V),N("Assistant Cérémonies Religieuses",GA,V)])]),
 N("Chef de Service Prévention et Prise en Charge Psychosociale",GC,["C01179 Alioune THIOUNE"],[
  N("Chef d'Unité Prise en Charge Psychosociale",GB,V,[N("Assistant Prise en Charge Psychosociale",GA,["M08534 Ndèye Codou FALL"])]),
  N("Chef d'Unité Prévention Sociale",GB,V,[N("Assistant Prévention Sociale",GA,["M06730 Souaybou Lyon SANE"])])]),
 N("FOPES - Président Bureau Exécutif",null,["C00663 Baye Ousmane NIANG"],[
  N("Coordinateur Projets Économiques et Sociaux",GB,["C01230 Daouda BA"],[N("02 Assistants Projets Économiques et Sociaux",GA,["M07866 Mamadou DIOP","!01 Poste vacant"])]),
  N("Chef de Service Trésorerie",GC,["C01134 Kiné GUEYE"],[N("Chef d'Unité Comptabilité",GB,["M06087 Rokhaya NIANG"],[N("02 Assistants Comptables",GA,["M07865 Adama NDIAYE","!01 Poste vacant"])])])])
],{p:[[N("Secrétaire",G79,V),N("Assistance Comptable",GA,["M07999 El Hadji Mamadou SALL"])],
      [N("Agent Courrier",G35,V),N("Chauffeur",G35,V)],
      [N("Gérant IPM",GC,["C00907 Malick FALL"]),N("Trésorier Général IPM",GC,["C00909 Mamadou HANNE"])],
      [N("MUTAS"),null]]});

const DEPTS={
 dcsst:{nom:"Délégation Santé et Sécurité au Travail",sig:"DCSST",tree:DCSST},
 dapr:{nom:"Département Administration du Personnel et Rémunération",sig:"DAPR",tree:DAPR},
 das:{nom:"Département Affaires Sociales",sig:"DAS",tree:DAS},
 dadc:{nom:"Département Acquisition et Développement des Compétences",sig:"DADC",tree:DADC}
};

// ===== Rendu =====
const el=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e};
function box(n,cls,href){
 const b=el(href?"a":"div","box"+(cls?" "+cls:""));if(href)b.href=href;
 b.appendChild(el("b","",n[0]));
 if(n[1])b.appendChild(el("div","g",n[1]));
 // Tri par matricule (les lignes vacantes restent à la fin)
 [...(n[2]||[])].sort((x,y)=>(x[0]=="!")-(y[0]=="!")||(x[0]=="!"?0:x.localeCompare(y))).forEach(l=>{
  if(l[0]=="!"){b.appendChild(el("div","vac",l.slice(1)));return}
  const p=l.split("|"),d=el("div","nm",p[0]);if(p[1])d.appendChild(el("span","tg",p[1]));b.appendChild(d)});
 return b}
function li(n,root){
 const i=el("li"),o=n[4]||{};
 i.appendChild(box(n,(root?"root ":"")+(o.c||""),o.h));
 if(o.p){const p=el("div","pairs");
  o.p.forEach(r=>{const d=el("div","pr"+(r[0]?"":" nl")+(r[1]?"":" nr"));
   d.appendChild(r[0]?box(r[0]):el("span","ph"));d.appendChild(r[1]?box(r[1]):el("span","ph"));p.appendChild(d)});
  i.appendChild(p)}
 if(n[3].length){const u=el("ul");n[3].forEach(c=>u.appendChild(li(c)));i.appendChild(u)}
 return i}
function draw(target,n){
 const holder=el("div","fit"),t=el("div","tree"),u=el("ul");
 u.appendChild(li(n,true));t.appendChild(u);holder.appendChild(t);target.appendChild(holder);
 // Ajuste l'organigramme (réduit ou agrandi) pour qu'il tienne toujours entièrement dans la largeur disponible
 const fit=()=>{
  t.style.transform="none";holder.style.height="auto";
  const cw=holder.clientWidth,w=t.offsetWidth,h=t.offsetHeight;
  if(!cw||!w)return;
  const s=Math.min(cw/w,1.6);
  t.style.transform="translateX("+(cw-w*s)/2+"px) scale("+s+")";
  holder.style.height=Math.ceil(h*s)+"px"};
 fit();
 let r;addEventListener("resize",()=>{clearTimeout(r);r=setTimeout(fit,100)});
 addEventListener("orientationchange",()=>setTimeout(fit,250));
 addEventListener("load",fit);
 if(window.ResizeObserver)new ResizeObserver(()=>{clearTimeout(r);r=setTimeout(fit,100)}).observe(holder);
 if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit)}

const home=document.getElementById("drh");if(home)draw(home,DRH);
const page=document.getElementById("dept");
if(page){
 const k=new URLSearchParams(location.search).get("d"),d=DEPTS[k]||DEPTS.dadc;
 document.title=d.sig+" – Senelec RH";
 document.getElementById("dt").textContent=d.nom+" ("+d.sig+")";
 draw(page,d.tree)}

const nav=document.querySelector("nav");
nav.innerHTML='<a href="index.html">Accueil (DRH)</a>'+Object.keys(DEPTS).map(k=>`<a href="departement.html?d=${k}" data-k="${k}">${DEPTS[k].sig}</a>`).join("");
const cur=new URLSearchParams(location.search).get("d")||(page?"dadc":"");
nav.querySelectorAll("a").forEach(a=>{if(page?a.dataset.k===cur:!a.dataset.k)a.classList.add("on")});
document.getElementById("burger").onclick=()=>nav.classList.toggle("open");

const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.05});
document.querySelectorAll(".rv").forEach(x=>io.observe(x));

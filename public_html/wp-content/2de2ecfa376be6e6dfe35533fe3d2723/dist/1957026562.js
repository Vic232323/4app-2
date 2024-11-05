"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[4],{93:(e,t,n)=>{n.r(t),n.d(t,{apply:()=>k});var o=n(2834),i=n(6399),a=n(1714),r=n(9408);const s="Google Tag Manager",c="Matomo Tag Manager",l="gtm",d="mtm";function u(e,t){let n,o,i,{presetId:a,isGcm:r}=t,u=!1,g="";const p={events:!0,executeCodeWhenNoTagManagerConsentIsGiven:!0};let h=e||"none";switch("googleTagManagerWithGcm"!==h||r||(h="googleTagManager"),h){case"googleTagManager":case"googleTagManagerWithGcm":i=l,n="dataLayer",g=s,p.events="googleTagManagerWithGcm"!==h;break;case"matomoTagManager":i=d,n="_mtm",g=c;break;default:p.events=!1,p.executeCodeWhenNoTagManagerConsentIsGiven=!1}return n&&(o=()=>(window[n]=window[n]||[],window[n])),i&&a===i&&(u=!0,p.events=!1,p.executeCodeWhenNoTagManagerConsentIsGiven=!1),{getDataLayer:o,useManager:h,serviceIsManager:u,managerLabel:g,expectedManagerPresetId:i,features:p}}function g(e){let t,{decisionCookieName:n,setCookiesViaManager:o,isGcm:i,groups:a,type:s}=e;const{useManager:c}=u(o,{isGcm:i,presetId:""}),l=a.find((e=>{let{isEssential:t}=e;return t})),d={[l.id]:l.items.map((e=>{let{id:t}=e;return t}))};if("consent"===s){const e=(0,r.y)(n);!1!==e?t=e.consent:(console.warn("Something went wrong while reading the cookie, fallback to essentials only..."),t=d)}return"essentials"===s&&(t=d),{isManagerActive:"none"!==c,selectedGroups:t,iterateServices:async function(e){const n=a.map((e=>e.items.map((t=>[e,t])))).flat();n.sort(((e,t)=>e[1].executePriority-t[1].executePriority));for(const[a,c]of n){var r;const n="all"===s||(null==(r=t[a.id])?void 0:r.indexOf(c.id))>-1,l=u(o,{presetId:c.presetId,isGcm:i});await e(a,c,n,l)}}}}var p=n(7400),h=n(6145),m=n(7177),v=n(4766),C=n(729);var f=n(72),y=n(9179),b=n(6336);async function k(e){const t=[];await g(e).iterateServices((async(e,n,o)=>{o&&t.push({group:e,service:n})})),document.dispatchEvent(new CustomEvent(f.r,{detail:{services:t,triggeredByOtherTab:e.triggeredByOtherTab}})),await(0,o.G)();const{dataLayer:n,isManagerOptOut:r,services:s,ready:c}=await async function(e){const t=[],{isManagerActive:n,iterateServices:o}=g(e),{skipOptIn:i}=e;const r=[];return await o((async(e,o,s,c)=>{let{getDataLayer:l,serviceIsManager:d}=c;const{codeDynamics:u,codeOptIn:g,executeCodeOptInWhenNoTagManagerConsentIsGiven:h}=o;if(s){const s=n&&h,c="function"==typeof i&&i(o);s||c||!g||r.push((0,a.l)(g,u));const l={group:e,service:o};document.dispatchEvent(new CustomEvent(p.D,{detail:l})),t.push(l)}})),{isManagerOptOut:!1,dataLayer:undefined,services:t,ready:Promise.all(r)}}(e),{ready:l}=await async function(e,t,n){const o=[],{isManagerActive:i,iterateServices:r}=g(e);return t?(r(((e,n,o,i)=>{let{tagManagerOptInEventName:a}=n,{features:r}=i;o&&a&&r.events&&t.push({event:a})})),setTimeout((()=>r(((e,n,o,i)=>{let{tagManagerOptOutEventName:a}=n,{features:r}=i;!o&&a&&r.events&&t.push({event:a})}))),1e3)):i&&n&&await r((async(e,t,n)=>{let{codeDynamics:i,codeOptIn:r,executeCodeOptInWhenNoTagManagerConsentIsGiven:s}=t;n&&s&&o.push((0,a.l)(r,i))})),{ready:Promise.all(o)}}(e,n,r),d=Promise.all([c,l]);await(0,i.P)(),document.dispatchEvent(new CustomEvent(y.T,{detail:{services:s,ready:d}}));const{deleteHttpCookies:u,services:k,ready:D}=await async function(e,t){const n=[],{isManagerActive:o,iterateServices:i}=g(e),r=[],s=[];return await i((async(e,i,c)=>{const{id:l,codeDynamics:d,codeOptOut:u,deleteTechnicalDefinitionsAfterOptOut:g,isEmbeddingOnlyExternalResources:p,technicalDefinitions:f,executeCodeOptOutWhenNoTagManagerConsentIsGiven:y}=i;if(!c){const c=o&&y;(c&&t||!c)&&r.push((0,a.l)(u,d)),g&&!p&&(function(e,t){for(const{type:n,name:o}of e){const e=(0,v.t)(o,t);if("*"===e)continue;const i=new RegExp((0,C.Z)(e),"g");switch(n){case"http":for(const e of Object.keys(m.A.get()))i.test(e)&&m.A.remove(e);break;case"local":case"session":try{const e="local"===n?window.localStorage:window.sessionStorage;if(e)for(const t of Object.keys(e))if(i.test(t)){try{e.setItem(t,null)}catch(e){}let n=0;for(;e.getItem(t)&&n<100;)n++,e.removeItem(t)}}catch(e){continue}}}}(f,d),f.some((e=>{let{type:t}=e;return"http"===t}))&&s.push(l));const b={group:e,service:i};document.dispatchEvent(new CustomEvent(h.G,{detail:b})),n.push(b)}})),{services:n,ready:Promise.all(r),deleteHttpCookies:s}}(e,r);document.dispatchEvent(new CustomEvent(b.a,{detail:{services:k,deleteHttpCookies:u,ready:Promise.all([d,D])}}))}},6264:(e,t,n)=>{async function o(e,t){e.createdClientTime=(new Date).toISOString();const o=t.getConsentQueue();o.push(e),t.setConsentQueue(o);try{await t.getOption("persistConsent")(e,!0),t.setConsentQueue(t.getConsentQueue().filter((t=>{let{createdClientTime:n}=t;return e.createdClientTime!==n})))}catch(o){const{groups:i,decisionCookieName:a,tcfCookieName:r,gcmCookieName:s,failedConsentDocumentationHandling:c,revisionHash:l}=t.getOptions(),d="optimistic"===c,{decision:u,createdClientTime:g,tcfString:p,gcmConsent:h,buttonClicked:m}=e,v={consent:d?"all"===u?i.reduce(((e,t)=>(e[t.id]=t.items.map((e=>{let{id:t}=e;return t})),e)),{}):"essentials"===u?(0,n(5974).w)(i,!1):u:(0,n(5974).w)(i,!1),previousUuids:[],revision:l,uuid:g,created:new Date(g),buttonClicked:m};localStorage.setItem(a,JSON.stringify(v)),p&&localStorage.setItem(r,d?p:""),h&&localStorage.setItem(s,d?JSON.stringify(h):"[]")}}n.d(t,{persistWithQueueFallback:()=>o})},7724:(e,t,n)=>{function o(e,t){void 0===t&&(t=!1);const{decisionCookieName:i,tcfCookieName:a,gcmCookieName:r}=e.getOptions(),s=()=>{localStorage.removeItem(i),localStorage.removeItem(a),localStorage.removeItem(r),localStorage.removeItem(e.getConsentQueueName())},c=document.querySelector('a[href*="rcb-clear-current-cookie=1"]');if(null==c||c.addEventListener("click",s),e.isConsentQueueLocked()){const t=t=>{t.key!==e.getConsentQueueName(!0)||t.newValue||o(e)};return window.addEventListener("storage",t),()=>{window.removeEventListener("storage",t),null==c||c.removeEventListener("click",s)}}{let o,a=0;const r=async()=>{e.isConsentQueueLocked(!0);const t=e.getConsentQueue();let c=15e3;if(t.length>0){a++;try{const o=t.shift(),r=0===t.length||!n(7177).A.get(i),l=await e.getOption("persistConsent")(o,r),d=n(7177).A.get(i);d&&-1===d.indexOf(l)&&n(7177).A.set(i,d.replace(/^(.*?:.*?):/gm,`$1,${l}:`)),e.setConsentQueue(t),0===t.length&&s(),a=0,c=1500}catch(e){c=15*a*1e3}}o=setTimeout(r,c)};return e.isConsentQueueLocked(!0),o=setTimeout(r,t?0:15e3),()=>{e.isConsentQueueLocked(!1),clearTimeout(o),null==c||c.removeEventListener("click",s)}}}n.d(t,{retryPersistFromQueue:()=>o})},9558:(e,t,n)=>{n.r(t),n.d(t,{BannerHistorySelect:()=>o});const o=()=>{const e=(0,n(4094).Y)(),{Select:t}=(0,n(680).y)().extend(...n(5746).I),{set:o,consent:i,groups:a,tcf:r,isGcm:s,gcmConsent:c,lazyLoadedDataForSecondView:l,activeAction:d,history:u,fetchHistory:g,visible:p,i18n:{historyLabel:h,historyItemLoadError:m,historySelectNone:v}}=e,[C,f]=(0,n(7936).J0)(),[y,b]=(0,n(7936).J0)({consent:i,groups:a,tcf:r,gcmConsent:c,lazyLoadedDataForSecondView:l}),k=e=>{let{buttonClicked:t,tcf:n,gcmConsent:i,...a}=e;o({...a,isTcf:!!n,tcf:null,gcmConsent:[]})};(0,n(7936).vJ)((()=>{const e={consent:[],groups:[],gcmConsent:[],lazyLoadedDataForSecondView:void 0};if(C){const{context:t}=C;k(t||e)}else k(e)}),[C]);const D=(0,n(7936).li)(!1);(0,n(7936).vJ)((()=>{l&&!D.current&&"history"===d&&p&&(D.current=!0,async function(){const e=await g();b({consent:i,groups:a,tcf:r,gcmConsent:c,lazyLoadedDataForSecondView:l}),o({history:e}),f(e[0])}())}),[l,d,p]),(0,n(7936).vJ)((()=>{p||(D.current=!1)}),[p]),(0,n(7936).vJ)((()=>()=>k(y)),[]);const S=null==C?void 0:C.uuid;return(0,n(6425).FD)(n(7936).FK,{children:[h," ",(0,n(6425).Y)(t,{disabled:!(null==u?void 0:u.length),value:(null==C?void 0:C.id)||-1,onChange:e=>{const t=+e.target.value;for(const e of u){const{id:n}=e;if(n===t){f(e);break}}},children:(null==u?void 0:u.length)>0?u.map((e=>{let{id:t,isDoNotTrack:o,isUnblock:i,isForwarded:a,created:r}=e;return(0,n(6425).FD)("option",{value:t,children:[new Date(r).toLocaleString(document.documentElement.lang),o?" (Do Not Track)":"",i?" (Content Blocker)":"",a?" (Consent Forwarding)":""]},t)})):(0,n(6425).Y)("option",{value:-1,children:v})}),(0,n(6425).FD)("div",{style:{opacity:.5,marginTop:5},children:["UUID: ",S||"-"]}),!(null==C?void 0:C.context)&&(0,n(6425).Y)("div",{style:{fontWeight:"bold",marginTop:5},children:m})]})}},3353:(e,t,n)=>{n.r(t),n.d(t,{BannerGroupList:()=>v});var o=n(6425),i=n(4094),a=n(1801),r=n(4959),s=n(180),c=n(7936),l=n(9694);const d=e=>{let{group:{id:t,isEssential:n},cookie:a}=e;const{id:r}=a,s=(0,i.Y)(),{consent:d,activeAction:u}=s,g=n||"history"===u,p=n||((null==d?void 0:d[t])||[]).some((e=>e===r)),h=(0,c.hb)((e=>s.updateCookieChecked(t,r,e)),[s,t,r]);return(0,o.Y)(l.Cookie,{cookie:a,propertyListProps:{isEssentialGroup:n},checked:p,disabled:g,onToggle:h})};var u=n(5548);const g=e=>{let{group:t}=e;const n=(0,i.Y)(),{name:c,description:l,items:g}=t,{group:{headlineFontSize:p},individualTexts:{headline:h,showMore:m,hideMore:v}}=n,C=(0,a.C)(t);return(0,o.FD)(u.Y,{legend:`${h}: ${c}`,headline:(0,o.FD)(r.S,{...C,fontSize:p,children:[c," (",g.length,")"]}),children:[(0,o.Y)("span",{children:l}),!!g&&(0,o.Y)(s.X,{showMore:m,hideMore:v,bullets:!0,children:g.map((e=>(0,o.Y)(d,{group:t,cookie:e},e.id)))})]})};var p=n(5453),h=n(8700);const m=e=>{let{children:t}=e;const{GroupList:n}=(0,h.o)().extend(...p.C);return(0,o.Y)(n,{children:t})},v=()=>{const{groups:e}=(0,i.Y)(),t=e.filter((e=>{let{items:t}=e;return t.length}));return(0,o.Y)(m,{children:t.map((e=>(0,o.Y)(g,{group:e},e.id)))})}},3362:(e,t,n)=>{n.r(t),n.d(t,{BannerSticky:()=>o});const o=()=>null},9694:(e,t,n)=>{n.r(t),n.d(t,{Cookie:()=>Y});var o=n(6425),i=n(5922),a=n(4959),r=n(7936),s=n(4200),c=n(8700),l=n(5746),d=n(5453);const u=e=>{let{label:t,value:n,children:a,printValueAs:u,monospace:g}=e;const p=(0,c.o)(),{Link:h,CookieProperty:m}=p.extend(...l.I).extend(...d.C),v=(0,i.b)(),{i18n:{yes:C,no:f}}=v;let y="string"==typeof n&&n.startsWith("http")&&(0,s.g)(n)?(0,o.Y)(h,{href:n,target:"_blank",rel:"noopener noreferrer",children:n}):"string"==typeof n?"phone"===u?(0,o.Y)(h,{target:"_blank",href:`tel:${n.replace(/\s+/g,"")}`,children:n}):"mail"===u?(0,o.Y)(h,{target:"_blank",href:`mailto:${n}`,children:n}):(0,o.Y)("span",{dangerouslySetInnerHTML:{__html:n}}):n;return"boolean"===u&&(y=y?C:f),n||!1===n||"empty"===u?(0,o.FD)(r.FK,{children:[(0,o.FD)(m,{children:[t&&(0,o.FD)("strong",{children:[t,": "]}),(0,o.Y)("span",{role:"presentation",style:{fontFamily:g?"monospace":void 0},children:y})]}),(0,o.Y)(m,{children:!!a&&(0,o.Y)("div",{children:a})})]}):null};var g=n(1477),p=n(180);const h=e=>{let{expandable:t,children:n,labelModifications:a={}}=e;const{group:{detailsHideLessRelevant:s},i18n:{andSeparator:c,showLessRelevantDetails:l,hideLessRelevantDetails:d}}=(0,i.b)(),h=(0,r.li)(null),[m,v]=(0,r.J0)("");(0,r.vJ)((()=>{const{current:e}=h;if(e){const t=[...new Set([...e.querySelectorAll(":scope>div>strong")].map((e=>{const t=e.innerText.replace(/:?\s+$/,"");return a[t]||t})))];v((0,g.$D)(t,c))}}),[h.current,a]);const C=(0,r.hb)((e=>e.replace("%s",m)),[m]);return s&&t?(0,o.Y)("div",{"aria-hidden":!m,hidden:!m,children:(0,o.Y)(u,{value:(0,o.FD)(r.FK,{children:[(0,o.Y)("br",{}),(0,o.Y)(p.X,{showMore:C(l),hideMore:C(d),style:{fontStyle:"italic"},forceRender:!0,children:(0,o.FD)("div",{ref:h,children:[(0,o.Y)("br",{}),n]})})]})})}):n};var m=n(1917),v=n(5360);const C=e=>{let{mechanisms:t,...n}=e;const{screenReaderOnlyClass:a}=(0,c.o)(),s=(0,g.JY)(a),{iso3166OneAlpha2:l,predefinedDataProcessingInSafeCountriesLists:d,territorialLegalBasis:p,isDataProcessingInUnsafeCountries:h,i18n:{dataProcessingInThirdCountries:C,territorialLegalBasisArticles:{"dsg-switzerland":{dataProcessingInUnsafeCountries:f},"gdpr-eprivacy":{dataProcessingInUnsafeCountries:y}},safetyMechanisms:{label:b,eu:k,switzerland:D,adequacyDecision:S,contractualGuaranteeSccSubprocessors:w,standardContractualClauses:I,bindingCorporateRules:Y}}}=(0,i.b)(),{result:T,filter:M,isGdpr:P}=(0,m.F)({predefinedDataProcessingInSafeCountriesLists:d,territorialLegalBasis:p,isDataProcessingInUnsafeCountries:h,service:n}),O=Object.entries(T),L={A:S,"A-EU":`${S} (${k})`,"A-CH":`${S} (${D})`,B:I,C:w,D:p.length>1?"":P?y:f,"D-EU":y,"D-CH":f,E:Y},F=Object.keys(L).filter((e=>M((t=>t===e)).length>0)),x=t?t(F):F;return(0,o.FD)(r.FK,{children:[O.length>0&&(0,o.Y)(u,{label:C,value:(0,v.i)(O.map((e=>{let[t,n]=e;return(0,o.Y)("span",{dangerouslySetInnerHTML:{__html:s(n.map((e=>[e,L[e]])),l[t]??t)}},t)})),", ")}),x.length>0&&(0,o.Y)(u,{label:b,value:(0,v.i)(x.map((e=>(0,o.Y)("span",{dangerouslySetInnerHTML:{__html:L[e]?s([[e]],L[e]):e}},e))),", ")})]})};var f=n(5285),y=n(4349);const b=/(\r\n|\r|\n|<br[ ]?\/>)/g;var k=n(680);const D=e=>{let{type:t,isDisabled:n,isBold:r}=e;const{Cookie:s}=(0,k.y)().extend(...d.C),{activeAction:c,gcmConsent:l,updateGcmConsentTypeChecked:u,group:{descriptionFontSize:g},i18n:{gcm:{purposes:{[t]:p}}}}=(0,i.b)();return(0,o.Y)(s,{children:(0,o.Y)(a.S,{isChecked:l.indexOf(t)>-1,isDisabled:n||"history"===c,fontSize:g,onToggle:e=>u(t,e),children:(0,o.Y)("span",{style:{fontWeight:r?"bold":void 0},children:p})})})};var S=n(4766);const w=e=>{let{definitions:t,codeDynamics:n}=e;const{i18n:a}=(0,i.b)(),s=function(){const{i18n:{durationUnit:e}}=(0,i.b)();return(0,r.hb)(((t,n)=>(0,g.BP)(t,e.n1[n],e.nx[n])),[e])}(),c={http:{name:"HTTP Cookie",abbr:"HTTP",backgroundColor:"black"},local:{name:"Local Storage",abbr:"Local",backgroundColor:"#b3983c"},session:{name:"Session Storage",abbr:"Session",backgroundColor:"#3c99b3"},indexedDb:{name:"IndexedDB",abbr:"I-DB",backgroundColor:"#4ab33c"}};return null==t?void 0:t.map((e=>{let{children:t,type:i,name:r,host:l,duration:d,durationUnit:g,isSessionDuration:p,purpose:h}=e;var m;return(0,o.FD)(u,{label:a.technicalCookieName,monospace:!0,value:(0,S.t)(r,n),children:[(0,o.Y)(u,{label:a.type,value:(null==(m=c[i])?void 0:m.name)||i}),!!l&&(0,o.Y)(u,{label:a.host,value:l,monospace:!0}),(0,o.Y)(u,{label:a.duration,value:["local","indexedDb"].indexOf(i)>-1?a.noExpiration:p||"session"===i?"Session":s(d,g)}),t,(0,o.Y)(u,{label:a.purpose,value:h})]},`${i}-${r}-${l}`)}))},I=e=>{let{cookie:{purpose:t,isProviderCurrentWebsite:n,provider:a,providerContact:s={},providerPrivacyPolicyUrl:c,providerLegalNoticeUrl:l,legalBasis:d,dataProcessingInCountries:g,dataProcessingInCountriesSpecialTreatments:p,isEmbeddingOnlyExternalResources:v,technicalDefinitions:k,codeDynamics:S,googleConsentModeConsentTypes:I},isEssentialGroup:Y,isDisabled:T}=e;const{i18n:M,iso3166OneAlpha2:P,websiteOperator:O,isGcm:L,designVersion:F}=(0,i.b)(),{dataProcessingInUnsafeCountries:x,appropriateSafeguards:E}=function(e){let{dataProcessingInCountries:t,specialTreatments:n,tcf:o={internationalTransfers:!1,transferMechanisms:[]}}=e;const{designVersion:a,i18n:{safetyMechanisms:s,other:c},isDataProcessingInUnsafeCountries:l,dataProcessingInUnsafeCountriesSafeCountries:d,iso3166OneAlpha2:u}=(0,i.b)(),{internationalTransfers:g,transferMechanisms:p}=o;return{dataProcessingInUnsafeCountries:(0,r.Kr)((()=>l?(0,m.z)({dataProcessingInCountries:t,safeCountries:d,specialTreatments:n,isDisplay:!0}).map((e=>u[e]||e)):[]),[l,d,n,t,u]),appropriateSafeguards:(0,r.Kr)((()=>[...new Set([n.indexOf(f.ak.StandardContractualClauses)>-1&&s.standardContractualClauses,a>6&&g&&p.map((e=>{switch(e){case"SCCs":return s.standardContractualClauses;case"Adequacy decision":return s.adequacyDecision;case"BCRs":return s.bindingCorporateRules;case"Other":return c;default:return""}}))].flat().filter(Boolean))]),[n,g,p])}}({dataProcessingInCountries:g,specialTreatments:p}),{legalNotice:N,privacyPolicy:A,contactForm:U}=(0,y.s)(),G=(0,r.Kr)((()=>{if(n&&O){const{address:e,country:t,contactEmail:n,contactPhone:o}=O;return{provider:[e,P[t]||t].filter(Boolean).join(", "),contact:{email:n,phone:o,link:U},legalNoticeUrl:!1===N?"":N.url,privacyPolicyUrl:!1===A?"":A.url}}return{provider:a,contact:s,privacyPolicyUrl:c,legalNoticeUrl:l}}),[n,a,s,c,l,O,N,A,U]),B=(0,r.Kr)((()=>Object.values(G.contact).filter(Boolean).length>0),[G.contact]);return(0,o.FD)(r.FK,{children:[!!t&&(0,o.Y)(u,{label:M.purpose,value:(H=t,"string"==typeof H?H.split(b).map(((e,t)=>e.match(b)?(0,r.n)("br",{key:t}):e)):H)}),(0,o.Y)(u,{label:M.legalBasis,value:"legal-requirement"===d?M.legalRequirement:"legitimate-interest"===d||Y?M.legitimateInterest:M.consent}),L&&I.length>0&&(0,o.Y)(u,{label:M.gcm.dataProcessingInService,printValueAs:"empty",children:(0,o.Y)("div",{style:{display:"inline-block"},children:(0,o.Y)(u,{printValueAs:"empty",children:I.map((e=>(0,o.Y)(D,{type:e,isDisabled:T},e)))})})}),(0,o.Y)(u,{label:M.provider,value:G.provider,children:B&&(0,o.FD)(r.FK,{children:[(0,o.Y)(u,{label:M.providerContactPhone,value:G.contact.phone,printValueAs:"phone"}),(0,o.Y)(u,{label:M.providerContactEmail,value:G.contact.email,printValueAs:"mail"}),(0,o.Y)(u,{label:M.providerContactLink,value:G.contact.link})]})}),(0,o.Y)(u,{label:M.providerPrivacyPolicyUrl,value:G.privacyPolicyUrl}),(0,o.Y)(u,{label:M.providerLegalNoticeUrl,value:G.legalNoticeUrl}),F<10&&x.length>0&&(0,o.Y)(u,{label:M.dataProcessingInUnsafeCountries,value:x.join(", ")}),F<10&&E.length>0&&(0,o.Y)(u,{label:M.appropriateSafeguard,value:E.join(", ")}),(0,o.FD)(h,{expandable:F>9,labelModifications:{[M.technicalCookieName]:M.technicalCookieDefinitions},children:[F>9&&(0,o.Y)(C,{dataProcessingInCountries:g,dataProcessingInCountriesSpecialTreatments:p}),!v&&(0,o.Y)(w,{codeDynamics:S,definitions:k})]})]});var H},Y=e=>{let{cookie:t,checked:n,disabled:r,onToggle:s,propertyListProps:l={}}=e;const{Cookie:u}=(0,c.o)().extend(...d.C),{name:g}=t,{group:{descriptionFontSize:p}}=(0,i.b)();return(0,o.FD)(u,{children:[(0,o.Y)(a.S,{isChecked:n,isDisabled:r,fontSize:p,onToggle:s,children:(0,o.Y)("strong",{children:g})}),(0,o.Y)(I,{cookie:t,...l,isDisabled:!n})]})}},180:(e,t,n)=>{n.d(t,{X:()=>o});const o=e=>{let{onToggle:t,children:o,showMore:i,hideMore:a,bullets:r,forceRender:s,...c}=e;const{Link:l}=(0,n(8700).o)().extend(...n(5746).I),[d,u]=(0,n(7936).J0)(!1),g=(0,n(7140).p)();return(0,n(6425).FD)(n(7936).FK,{children:[r&&(0,n(6425).Y)(n(7936).FK,{children:"  •  "}),(0,n(6425).Y)(l,{href:"#",onClick:e=>{const n=!d;u(n),null==t||t(n),e.preventDefault()},...o?{"aria-expanded":d,"aria-controls":g}:{},...c,children:d?a:i}),o&&(0,n(6425).Y)("div",{hidden:!d,id:g,children:(d||s)&&o})]})}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.8.4/a729928ea91d26997c765d217013cf0e/banner-lite-banner-lazy.lite.js.map
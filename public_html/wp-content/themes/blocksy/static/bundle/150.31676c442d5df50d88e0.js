"use strict";(self.blocksyJsonP=self.blocksyJsonP||[]).push([[150],{7150:function(e,n,t){t.r(n),t.d(n,{mount:function(){return c}});var i=t(5277),o=t.n(i);const c=function(e,n){let{event:t}=n;if("pinterest"===e.dataset.network)return t.preventDefault(),void(window.PinUtils?window.PinUtils.pinAny():o()("https://assets.pinterest.com/js/pinit.js",(function(){setTimeout((function(){window.PinUtils.pinAny()}),300)})));if("clipboard"!==e.dataset.network)e.hasClickListener||(e.hasClickListener=!0,e.addEventListener("click",(function(n){n.preventDefault();const t=e.href;var i=null!=window.screenLeft?window.screenLeft:screen.left,o=null!=window.screenTop?window.screenTop:screen.top,c=(window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width)/2-300+i,l=(window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height)/2-250+o,r=window.open(t,"","scrollbars=yes, width=600, height=500, top="+l+", left="+c);window.focus&&r.focus()})));else{t.preventDefault();const n=window.location.href,i=e.querySelector(".ct-tooltip");let o="";if(i&&(o=i.innerHTML),navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(n),i&&(i.innerHTML=ct_localizations.clipboard_copied);else{const e=document.createElement("textarea");e.value=n,e.style.position="absolute",e.style.left="-999999px",document.body.prepend(e),e.select();try{document.execCommand("copy")}catch(e){console.error(e),i&&(i.innerHTML=ct_localizations.clipboard_failed)}finally{e.remove(),i&&(i.innerHTML=ct_localizations.clipboard_copied)}}setTimeout((function(){i&&(i.innerText=o)}),2e3)}}}}]);
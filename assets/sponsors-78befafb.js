System.register(["./chunk-vendor.js","./chunk-animate-on-scroll.js","./chunk-frameworks.js"],(function(t,e){"use strict";var s,o,n,r,i,a,c,u,l,d,p,h,g,f;return{setters:[function(t){s=t.a,o=t.o,n=t.r,r=t.f},function(t){i=t.s,a=t.a},function(t){c=t.c,u=t.N,l=t.aS,d=t.q,p=t.w,h=t.A,g=t.b0,f=t.b5}],execute:function(){function t(t,e){const s=document.querySelector("#preview-"+t.id);s.hidden=!e&&!s.hidden}function m(t,e){return t.filter((t=>t.getAttribute("data-dependency-id")===e))[0]}function y(t,e){t.textContent=e.toString();const s=t.closest(".js-sponsorable-dependency-usage-count-container");s&&(!function(t,e){const s=e.querySelector(".js-sponsorable-dependency-verb");s&&(s.textContent=1===t?s.getAttribute("data-singular"):s.getAttribute("data-plural"))}(e,s),s.hidden=!1)}async function b({currentTarget:t}){j(t,".js-sponsors-meet-the-team-search-modal"),j(t,".js-sponsors-featured-work-search-modal")}async function j(t,e){const s=t.querySelector(e);if(!s)return;await p();const o=s.querySelector(".js-sponsors-featured-item-selection-list");if(!o)return;const n=Array.from(o.querySelectorAll("input[type=checkbox]")),r=n.filter((t=>t.checked)).length,i=parseInt(o.getAttribute("data-featured-items-limit"),10);for(const u of n)u.disabled=r===i&&!u.checked;const a=s.querySelector(".js-sponsors-featured-items-remaining");if(!a)return;const c=i-r;a.textContent=c+" remaining",a.classList.toggle("color-text-danger",c<1)}s("click",".js-refresh-featured-accounts",(function({currentTarget:t}){!async function(t){const e=await c(document,t);document.querySelector(".js-featured-accounts").replaceWith(e)}(t.getAttribute("data-url"))})),s("change",".js-tier-suggestion",(({currentTarget:e})=>{t(e,!1),function(t){const e=document.querySelector(".js-tier-building-actions"),s=t.parentElement,o={price_in_cents:t.getAttribute("data-tier-monthly-price"),frequency:t.getAttribute("data-tier-frequency"),description:s.textContent.trim(),checked:t.checked},n=e.value?JSON.parse(e.value):[];n.push(o),e.value=JSON.stringify(n)}(e)})),s("click",".js-tier-suggestion-select-all",(({currentTarget:e})=>{!function(e,s){const o=document.querySelectorAll(".js-tier-suggestion");for(const n of o)n.getAttribute("data-tier-category")===s&&(n.checked=!0,t(n,!0))}(0,e.getAttribute("data-tier-category"))})),s("change",".js-waitlist-countries-select",(({currentTarget:t})=>{!function(t){const e=t.closest(".js-waitlist-countries-container").querySelector(".js-waitlist-country-unsupported-warning"),s=t.selectedOptions[0].closest("optgroup");if(!(s instanceof HTMLOptGroupElement))return;const o=t.getAttribute("data-supported-key");e&&(e.hidden=s.label===o)}(t)})),s("change",".js-waitlist-fiscal-host-select",(({currentTarget:t})=>{var e;e=t,document.querySelector(".js-sponsors-other-fiscal-host-inputs").hidden="other"!==e.selectedOptions[0].value,function(t){const e=document.querySelector(".js-sponsors-project-profile-fiscal-host-inputs"),s=""===t.selectedOptions[0].value;e.hidden=s}(t)})),s("change",".js-sponsors-required-input-trigger",(({currentTarget:t})=>{const e=t;if(""===e.value)return;const s=document.querySelectorAll(".js-sponsors-required-input-target");for(const o of s){const t=o.getAttribute("data-sponsors-trigger-values");t&&(o.required=t.includes(e.value))}})),o(".js-sponsorable-dependencies",(t=>{const e=t.getAttribute("data-url"),s=t.getAttribute("data-dependency-ids");JSON.parse(s).length<1||async function(t,e,s){const o=t.querySelector(".js-data-url-csrf");if(!o)return;const n=await fetch(s,{headers:{"Content-Type":"application/json",Accept:"application/json","Scoped-CSRF-Token":o.value,"X-Requested-With":"XMLHttpRequest"},method:"POST",mode:"same-origin",body:e});if(!n.ok)return;const r=await n.json(),i=Array.from(t.querySelectorAll(".js-sponsorable-dependency-usage-count"));for(const a in r){const t=m(i,a);t&&y(t,r[a]||0)}}(t,s,e)})),o(".js-loading-stripe-account-details",{add(t){!async function(t){const e=await l(t),s=d(document,await e.text());document.querySelector(".js-stripe-onboarding-container").replaceWith(s)}(t.getAttribute("data-url"))}}),s("change",".js-sponsors-dashboard-profile-form",b),s("reset",".js-sponsors-dashboard-profile-form",b),o(".js-sponsors-sortable-list",{async add(t){const{Sortable:s}=await e.import("./chunk-sortable-behavior.js");s.create(t,{animation:150,item:".js-sponsors-sortable-item",handle:".js-sponsors-sortable-item-handle",chosenClass:"is-dragging"})}});const v="Monthly amount you're aiming for:";async function S(t){const e=t,s=document.querySelector(".js-sponsors-goals-type-label"),o=document.querySelector(".js-sponsors-goal-target-preview"),n=document.querySelector(".js-sponsors-goal-target-progress-preview");let r;""===e.value.trim()?r="":s.textContent===v?r=`$${e.value} per month`:(r=e.value+" sponsor",parseInt(e.value)>1&&(r+="s")),n.textContent=r,s.textContent===v?o.textContent="earn "+r:o.textContent="have "+r,async function(t,e){const s=document.querySelector(".js-sponsors-goal-percentage-preview"),o=document.querySelector(".js-sponsors-goal-percentage-bar-preview");let n=0;const r=parseInt(t,10);if(r&&r>0){let t=0;if(e===v){const e=o.getAttribute("data-preview-current-value-sponsorships")||"0";t=parseInt(e,10)}else{const e=o.getAttribute("data-preview-current-value-sponsors")||"0";t=parseInt(e,10)}n=Math.floor(100*t/r),0===n&&t>0&&(n=1),n=Math.min(n,100)}s.textContent=n+"%",o.style.width=n+"%"}(e.value,s.textContent||"")}s("change",".js-sponsors-goals-radio-trigger",(async function({currentTarget:t}){var e;const s=t,o=document.querySelector(".js-sponsors-goals-radio-target");if(!o)return;o.hidden=!1;const n=o.querySelector(".js-sponsors-goals-type-label");if(n){const t=o.querySelector(".js-sponsors-goals-sponsorship-per-month-label"),r=o.querySelector(".js-sponsors-goals-sponsorship-currency-sign"),i=o.querySelector(".js-sponsors-goals-accept-public-sponsorship"),a=i.querySelector("input[type=checkbox]"),c=o.querySelector("button[type=submit]");"total_sponsors_count"===s.value?(n.textContent="Number of sponsors you're aiming for:",t.hidden=!0,r.hidden=!0,i.hidden=!0,a.required=!1):(n.textContent=v,t.hidden=!1,r.hidden=!1,i.hidden=!1,a.required=!0),c.disabled=!(null===(e=c.form)||void 0===e?void 0:e.checkValidity());S(document.querySelector(".js-sponsors-goal-target-input"))}}));!async function(){await u;const t=document.querySelector(".js-sponsors-goal-target-input");t&&t.addEventListener("input",(({target:t})=>S(t)));const e=document.querySelector(".js-sponsors-goal-description-input");e&&e.addEventListener("input",(({target:t})=>async function(t){const e=t,s=document.querySelector(".js-sponsors-goal-description-preview");""===e.value.trim()?s.textContent="No description yet":s.textContent=e.value}(t)))}();const q=Math.random,w=Math.cos,x=Math.sin,A=Math.PI,k=2*A,C=100,L=-.1;let T,$;const M=[],R=["#6a737d","#0366d6","#28a745","#ffd33d","#f66a0a","#6f42c1","#ea4aaa"];function E(){const t=Math.floor(Math.random()*R.length);return R[t]}const O=.1;const _=document.createElement("div");_.style.position="fixed",_.style.top="0",_.style.left="0",_.style.width="100%",_.style.height="0",_.style.overflow="visible",_.style.zIndex="9999";class Confetto{constructor(t){this.frame=0,this.outer=document.createElement("div"),this.inner=document.createElement("div"),this.outer.appendChild(this.inner),this.outer.style.position="absolute",this.outer.style.width=3+9*q()+"px",this.outer.style.height=3+9*q()+"px",this.inner.style.width="100%",this.inner.style.height="100%",this.inner.style.backgroundColor=t(),this.outer.style.perspective="50px",this.outer.style.transform=`rotate(${360*q()}deg)`,this.theta=360*q(),this.axis=`rotate3D(${w(360*q())},${w(360*q())},0,`,this.inner.style.transform=`${this.axis}${this.theta}deg)`,this.dTheta=.4+.29999999999999993*q(),this.x=window.innerWidth*q(),this.y=-100,this.dx=x(L+.2*q()),this.dy=.13+.18*q(),this.outer.style.left=this.x+"px",this.outer.style.top=this.y+"px",this.splineX=function(){const t=[O,.9];let e=.8;const s=[0,1];for(;e;){let o,n,r,i,a,c=e*q();for(o=0,n=t.length,e=0;o<n;o+=2){if(i=t[o],a=t[o+1],r=a-i,c<e+r){const t=c+i-e;s.push(t),c=t;break}e+=r}const u=c-O,l=c+O;for(o=t.length-1;o>0;o-=2)n=o-1,i=t[n],a=t[o],i>=u&&i<l?a>l?t[n]=l:t.splice(n,2):i<u&&a>u&&(a<=l?t[o]=u:t.splice(o,0,u,l));for(o=0,n=t.length,e=0;o<n;o+=2)e+=t[o+1]-t[o]}return s.sort()}(),this.splineY=[];const e=this.splineX.length-1;for(let s=1;s<e;++s)this.splineY[s]=C*q();this.splineY[0]=this.splineY[e]=C*q()}update(t,e){this.frame+=e,this.x+=this.dx*e,this.y+=this.dy*e,this.theta+=this.dTheta*e;let s=this.frame%7777/7777,o=0,n=1;for(;s>=this.splineX[n];)o=n++;const r=(i=this.splineY[o],a=this.splineY[n],c=(s-this.splineX[o])/(this.splineX[n]-this.splineX[o]),(1-w(A*c))/2*(a-i)+i);var i,a,c;return s*=k,this.inner.style.transform=`${this.axis}${this.theta}deg)`,this.outer.style.left=this.x+r*w(s)+"px",this.outer.style.top=this.y+r*x(s)+"px",this.y>t+C}}function I(t){const e=null==t?5e3:t;if(!$){document.body.appendChild(_);const t=()=>{const e=new Confetto(E);M.push(e),_.appendChild(e.outer),T=window.setTimeout(t,40*q())};let s;t();const o=t=>{const e=s?t-s:0;s=t;const n=window.innerHeight;for(let s=M.length-1;s>=0;--s)M[s].update(n,e)&&(_.removeChild(M[s].outer),M.splice(s,1));T||M.length?$=requestAnimationFrame(o):(document.body.removeChild(_),$=void 0)};window.setTimeout((function(){clearTimeout(T),T=void 0}),e),requestAnimationFrame(o)}}function N(t,e){const s=document.querySelector(".js-sponsorship-billing-details-dialog"),o=new URL(s.getAttribute("src"),window.location.origin),n=new URLSearchParams(o.search),r=n.get("return_to")||"",i=new URL(r,window.location.origin),a=new URLSearchParams(i.search),c=X("tier_id",a),u=X("editing",a),l=X("sponsor",a),d=X("amount",a),p=X("frequency",a),h=new URLSearchParams;h.set("privacy_level",t),h.set("email_opt_in",e),c&&h.set("tier_id",c),u&&h.set("editing",u),l&&h.set("sponsor",l),d&&h.set("amount",d),p&&h.set("frequency",p);const g=`${i.pathname}?${h.toString()}`,f=encodeURIComponent(g),m=new URL(g,window.location.origin);n.set("return_to",m.toString()),s.setAttribute("src",`${o.pathname}?return_to=${f}`)}function X(t,e){return new URLSearchParams(window.location.search).get(t)||e.get(t)}function U(t){t.hasAttribute("data-valid-payment-method")&&(t.disabled=!1,t.classList.remove("tooltipped","tooltipped-s","tooltipped-no-delay"))}s("change",".js-sponsorship-privacy-level",(function(t){const e=t.target.value,s=document.querySelector(".js-sponsorship-email-opt-in").checked?"on":"off";U(document.querySelector(".js-sponsorship-submit")),N(e,s)})),h(".js-sponsorship-custom-tier-description",(function(t){const e=t.currentTarget;if(e.value!==e.defaultValue){U(document.querySelector(".js-sponsorship-submit"))}})),s("change",".js-sponsorship-email-opt-in",(function(t){const e=t.target.checked?"on":"off",s=Array.from(document.querySelectorAll(".js-sponsorship-privacy-level")).find((t=>t.checked)),o=s?s.value:"public";U(document.querySelector(".js-sponsorship-submit")),N(o,e)})),o(".js-show-confetti-party",(function(t){I();const e=t.getAttribute("data-dismiss-url");if(e){const s=t.querySelector(".js-data-dismiss-url-csrf");fetch(e,{method:"POST",mode:"same-origin",headers:{"Scoped-CSRF-Token":s.value,"X-Requested-With":"XMLHttpRequest"}})}}));function P(t,e){t.classList.remove("status-indicator-success","status-indicator-loading","status-indicator-failed"),t.classList.add(e)}o(".js-sponsors-goals-impact",(function(t){!async function(t){const e=t.querySelector(".js-sponsors-goals-impact-progress-bar"),s=e.getAttribute("data-percentage-impact");await f(500),s&&(e.style.width=s+"%");const o=t.querySelector(".js-sponsors-goals-impact-heart");if(!o)return;await f(450),o.hidden=!1,o.classList.add("anim-scale-in");const n=o.querySelector(".sponsors-goals-heart-anim");await f(100),n.classList.add("is-active")}(t)})),o(".js-sponsors-account-switcher",(t=>{t.addEventListener("toggle",(({target:t})=>{t instanceof HTMLElement&&t.hasAttribute("open")&&g(t)}))})),n(".js-sponsors-enable-custom-tiers",(async function(t,e){const s=t.querySelector(".js-status-indicator");P(s,"status-indicator-loading");const o=t.querySelector(".js-sponsors-suggested-amount-toggle"),n=document.querySelector(".js-sponsors-suggested-amount-form"),r=n.querySelector(".js-sponsors-suggested-amount-group"),i=r.querySelector(".js-sponsors-suggested-amount-input");try{await e.text(),n.hidden=!o.checked,n.hidden&&(r.classList.remove("successed","errored"),i.classList.remove("is-autocheck-successful","is-autocheck-errored"),i.value=""),P(s,"status-indicator-success")}catch(a){P(s,"status-indicator-failed"),o&&(o.checked=!o.checked)}})),o(".js-tier-shared-parent auto-check.js-tier-pricing-check",(t=>{const e=t.closest(".js-tier-shared-parent").querySelector(".js-publish-tier-button");t.addEventListener("error",(()=>e.disabled=!0)),t.addEventListener("load",(()=>e.disabled=!1)),r(t.querySelector("input"),"input")})),h(".js-sponsors-custom-amount-input",(function(t){const e=t.target,s=parseInt(e.value,10),o=e.closest(".js-sponsors-custom-amount-container").querySelector(".js-sponsors-custom-amount-message"),n=JSON.parse(o.getAttribute("data-tier-minimums")).filter((t=>s>=t))[0];if(n){const t=o.getAttribute("data-prefix"),e=o.getAttribute("data-suffix");o.textContent=[t,"$"+n,e].join(" ")}else{const t=o.getAttribute("data-default");o.textContent=t}})),s("click",".js-sponsors-toggle-need-help",(function(t){const e=t.target.closest(".js-sponsors-show-hide-button"),s=e.getAttribute("data-shown-text"),o=e.getAttribute("data-hidden-text"),n=e.closest(".sponsors-need-help-details").hasAttribute("open");e.textContent=n?o:s,function(t,e){const s=t.getAttribute("data-hydro-click-payload");if(!s)return;const o=JSON.parse(s);o.payload.open=e,t.setAttribute("data-hydro-click-payload",JSON.stringify(o)),g(t)}(e,n)})),s("change",'.js-sponsors-newsletter-tiers input[type="checkbox"]',(function(t){const e=t.currentTarget.closest(".js-sponsors-newsletter-tiers"),s=e.querySelector(".js-sponsors-newsletter-tiers-default"),o=e.querySelector(".js-sponsors-newsletter-tiers-count"),n="0"===e.querySelector("[data-check-all-count]").textContent;s.hidden=!n,o.hidden=n})),o(".js-validate-at-least-one-checkbox-checked",(function(t){const e=t.getAttribute("data-none-checked-error-message"),s=t.querySelector(".js-survey-checkbox");s.required=!0,s.addEventListener("invalid",(function(){s.setCustomValidity(e)})),t.addEventListener("change",(function(){s.required=!1;const o=t.querySelector(".js-survey-checkbox:checked");s.setCustomValidity(o?"":e)}))}));function J(t){for(const e of t)if(e.isIntersecting){const t=Number(e.target.getAttribute("data-build-confetti-duration")||3e3),s=Number(e.target.getAttribute("data-build-confetti-delay")||0);window.setTimeout((()=>I(t)),s)}}o(".js-build-in-confetti",(t=>{if(i(t))return;const e=a(t);new IntersectionObserver(J,{rootMargin:`-${e.marginTop}% 0% -${e.marginBottom}% 0%`,threshold:e.threshold}).observe(t)}))}}}));
//# sourceMappingURL=sponsors-9bbe0886.js.map

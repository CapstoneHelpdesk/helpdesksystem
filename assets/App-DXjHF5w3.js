import{r as g,a as Wt,j as v}from"./index-b0CAuRCx.js";import{P as ce,u as Oe,c as ot,a as we,b as zt,d as J,e as Vt,D as Yt,S as Xt,f as de,g as Gt,h as Kt,i as qt,j as Ut,k as Zt,l as Jt}from"./DashboardAdmin-QtfNWQaT.js";const Re=768;function Qt(){const[e,t]=g.useState(void 0);return g.useEffect(()=>{const n=window.matchMedia(`(max-width: ${Re-1}px)`),o=()=>{t(window.innerWidth<Re)};return n.addEventListener("change",o),t(window.innerWidth<Re),()=>n.removeEventListener("change",o)},[]),!!e}const en=["top","right","bottom","left"],K=Math.min,H=Math.max,he=Math.round,ue=Math.floor,z=e=>({x:e,y:e}),tn={left:"right",right:"left",bottom:"top",top:"bottom"},nn={start:"end",end:"start"};function Te(e,t,n){return H(e,K(t,n))}function X(e,t){return typeof e=="function"?e(t):e}function G(e){return e.split("-")[0]}function ne(e){return e.split("-")[1]}function Le(e){return e==="x"?"y":"x"}function _e(e){return e==="y"?"height":"width"}function q(e){return["top","bottom"].includes(G(e))?"y":"x"}function ke(e){return Le(q(e))}function on(e,t,n){n===void 0&&(n=!1);const o=ne(e),r=ke(e),i=_e(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=ge(s)),[s,ge(s)]}function rn(e){const t=ge(e);return[Se(e),t,Se(t)]}function Se(e){return e.replace(/start|end/g,t=>nn[t])}function sn(e,t,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?i:s;default:return[]}}function cn(e,t,n,o){const r=ne(e);let i=sn(G(e),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),t&&(i=i.concat(i.map(Se)))),i}function ge(e){return e.replace(/left|right|bottom|top/g,t=>tn[t])}function an(e){return{top:0,right:0,bottom:0,left:0,...e}}function rt(e){return typeof e!="number"?an(e):{top:e,right:e,bottom:e,left:e}}function me(e){const{x:t,y:n,width:o,height:r}=e;return{width:o,height:r,top:n,left:t,right:t+o,bottom:n+r,x:t,y:n}}function Ke(e,t,n){let{reference:o,floating:r}=e;const i=q(t),s=ke(t),c=_e(s),a=G(t),l=i==="y",f=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,p=o[c]/2-r[c]/2;let d;switch(a){case"top":d={x:f,y:o.y-r.height};break;case"bottom":d={x:f,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:u};break;case"left":d={x:o.x-r.width,y:u};break;default:d={x:o.x,y:o.y}}switch(ne(t)){case"start":d[s]-=p*(n&&l?-1:1);break;case"end":d[s]+=p*(n&&l?-1:1);break}return d}const ln=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,c=i.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(t));let l=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:f,y:u}=Ke(l,o,a),p=o,d={},h=0;for(let m=0;m<c.length;m++){const{name:w,fn:x}=c[m],{x:y,y:b,data:A,reset:C}=await x({x:f,y:u,initialPlacement:o,placement:p,strategy:r,middlewareData:d,rects:l,platform:s,elements:{reference:e,floating:t}});f=y??f,u=b??u,d={...d,[w]:{...d[w],...A}},C&&h<=50&&(h++,typeof C=="object"&&(C.placement&&(p=C.placement),C.rects&&(l=C.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):C.rects),{x:f,y:u}=Ke(l,p,a)),m=-1)}return{x:f,y:u,placement:p,strategy:r,middlewareData:d}};async function ie(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:i,rects:s,elements:c,strategy:a}=e,{boundary:l="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:p=!1,padding:d=0}=X(t,e),h=rt(d),w=c[p?u==="floating"?"reference":"floating":u],x=me(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(w)))==null||n?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:l,rootBoundary:f,strategy:a})),y=u==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,b=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),A=await(i.isElement==null?void 0:i.isElement(b))?await(i.getScale==null?void 0:i.getScale(b))||{x:1,y:1}:{x:1,y:1},C=me(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:b,strategy:a}):y);return{top:(x.top-C.top+h.top)/A.y,bottom:(C.bottom-x.bottom+h.bottom)/A.y,left:(x.left-C.left+h.left)/A.x,right:(C.right-x.right+h.right)/A.x}}const fn=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:r,rects:i,platform:s,elements:c,middlewareData:a}=t,{element:l,padding:f=0}=X(e,t)||{};if(l==null)return{};const u=rt(f),p={x:n,y:o},d=ke(r),h=_e(d),m=await s.getDimensions(l),w=d==="y",x=w?"top":"left",y=w?"bottom":"right",b=w?"clientHeight":"clientWidth",A=i.reference[h]+i.reference[d]-p[d]-i.floating[h],C=p[d]-i.reference[d],E=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let P=E?E[b]:0;(!P||!await(s.isElement==null?void 0:s.isElement(E)))&&(P=c.floating[b]||i.floating[h]);const M=A/2-C/2,j=P/2-m[h]/2-1,L=K(u[x],j),k=K(u[y],j),N=L,T=P-m[h]-k,O=P/2-m[h]/2+M,I=Te(N,O,T),S=!a.arrow&&ne(r)!=null&&O!==I&&i.reference[h]/2-(O<N?L:k)-m[h]/2<0,D=S?O<N?O-N:O-T:0;return{[d]:p[d]+D,data:{[d]:I,centerOffset:O-I-D,...S&&{alignmentOffset:D}},reset:S}}}),un=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:r,middlewareData:i,rects:s,initialPlacement:c,platform:a,elements:l}=t,{mainAxis:f=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:m=!0,...w}=X(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const x=G(r),y=q(c),b=G(c)===c,A=await(a.isRTL==null?void 0:a.isRTL(l.floating)),C=p||(b||!m?[ge(c)]:rn(c)),E=h!=="none";!p&&E&&C.push(...cn(c,m,h,A));const P=[c,...C],M=await ie(t,w),j=[];let L=((o=i.flip)==null?void 0:o.overflows)||[];if(f&&j.push(M[x]),u){const O=on(r,s,A);j.push(M[O[0]],M[O[1]])}if(L=[...L,{placement:r,overflows:j}],!j.every(O=>O<=0)){var k,N;const O=(((k=i.flip)==null?void 0:k.index)||0)+1,I=P[O];if(I)return{data:{index:O,overflows:L},reset:{placement:I}};let S=(N=L.filter(D=>D.overflows[0]<=0).sort((D,R)=>D.overflows[1]-R.overflows[1])[0])==null?void 0:N.placement;if(!S)switch(d){case"bestFit":{var T;const D=(T=L.filter(R=>{if(E){const _=q(R.placement);return _===y||_==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(_=>_>0).reduce((_,W)=>_+W,0)]).sort((R,_)=>R[1]-_[1])[0])==null?void 0:T[0];D&&(S=D);break}case"initialPlacement":S=c;break}if(r!==S)return{reset:{placement:S}}}return{}}}};function qe(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Ue(e){return en.some(t=>e[t]>=0)}const dn=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:o="referenceHidden",...r}=X(e,t);switch(o){case"referenceHidden":{const i=await ie(t,{...r,elementContext:"reference"}),s=qe(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Ue(s)}}}case"escaped":{const i=await ie(t,{...r,altBoundary:!0}),s=qe(i,n.floating);return{data:{escapedOffsets:s,escaped:Ue(s)}}}default:return{}}}}};async function pn(e,t){const{placement:n,platform:o,elements:r}=e,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=G(n),c=ne(n),a=q(n)==="y",l=["left","top"].includes(s)?-1:1,f=i&&a?-1:1,u=X(t,e);let{mainAxis:p,crossAxis:d,alignmentAxis:h}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&typeof h=="number"&&(d=c==="end"?h*-1:h),a?{x:d*f,y:p*l}:{x:p*l,y:d*f}}const hn=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:r,y:i,placement:s,middlewareData:c}=t,a=await pn(t,e);return s===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:r+a.x,y:i+a.y,data:{...a,placement:s}}}}},gn=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:c={fn:w=>{let{x,y}=w;return{x,y}}},...a}=X(e,t),l={x:n,y:o},f=await ie(t,a),u=q(G(r)),p=Le(u);let d=l[p],h=l[u];if(i){const w=p==="y"?"top":"left",x=p==="y"?"bottom":"right",y=d+f[w],b=d-f[x];d=Te(y,d,b)}if(s){const w=u==="y"?"top":"left",x=u==="y"?"bottom":"right",y=h+f[w],b=h-f[x];h=Te(y,h,b)}const m=c.fn({...t,[p]:d,[u]:h});return{...m,data:{x:m.x-n,y:m.y-o,enabled:{[p]:i,[u]:s}}}}}},mn=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=t,{offset:c=0,mainAxis:a=!0,crossAxis:l=!0}=X(e,t),f={x:n,y:o},u=q(r),p=Le(u);let d=f[p],h=f[u];const m=X(c,t),w=typeof m=="number"?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(a){const b=p==="y"?"height":"width",A=i.reference[p]-i.floating[b]+w.mainAxis,C=i.reference[p]+i.reference[b]-w.mainAxis;d<A?d=A:d>C&&(d=C)}if(l){var x,y;const b=p==="y"?"width":"height",A=["top","left"].includes(G(r)),C=i.reference[u]-i.floating[b]+(A&&((x=s.offset)==null?void 0:x[u])||0)+(A?0:w.crossAxis),E=i.reference[u]+i.reference[b]+(A?0:((y=s.offset)==null?void 0:y[u])||0)-(A?w.crossAxis:0);h<C?h=C:h>E&&(h=E)}return{[p]:d,[u]:h}}}},xn=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,o;const{placement:r,rects:i,platform:s,elements:c}=t,{apply:a=()=>{},...l}=X(e,t),f=await ie(t,l),u=G(r),p=ne(r),d=q(r)==="y",{width:h,height:m}=i.floating;let w,x;u==="top"||u==="bottom"?(w=u,x=p===(await(s.isRTL==null?void 0:s.isRTL(c.floating))?"start":"end")?"left":"right"):(x=u,w=p==="end"?"top":"bottom");const y=m-f.top-f.bottom,b=h-f.left-f.right,A=K(m-f[w],y),C=K(h-f[x],b),E=!t.middlewareData.shift;let P=A,M=C;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(M=b),(o=t.middlewareData.shift)!=null&&o.enabled.y&&(P=y),E&&!p){const L=H(f.left,0),k=H(f.right,0),N=H(f.top,0),T=H(f.bottom,0);d?M=h-2*(L!==0||k!==0?L+k:H(f.left,f.right)):P=m-2*(N!==0||T!==0?N+T:H(f.top,f.bottom))}await a({...t,availableWidth:M,availableHeight:P});const j=await s.getDimensions(c.floating);return h!==j.width||m!==j.height?{reset:{rects:!0}}:{}}}};function ye(){return typeof window<"u"}function oe(e){return it(e)?(e.nodeName||"").toLowerCase():"#document"}function $(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Y(e){var t;return(t=(it(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function it(e){return ye()?e instanceof Node||e instanceof $(e).Node:!1}function B(e){return ye()?e instanceof Element||e instanceof $(e).Element:!1}function V(e){return ye()?e instanceof HTMLElement||e instanceof $(e).HTMLElement:!1}function Ze(e){return!ye()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof $(e).ShadowRoot}function ae(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=F(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function wn(e){return["table","td","th"].includes(oe(e))}function ve(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Ne(e){const t=je(),n=B(e)?F(e):e;return["transform","translate","scale","rotate","perspective"].some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function yn(e){let t=U(e);for(;V(t)&&!ee(t);){if(Ne(t))return t;if(ve(t))return null;t=U(t)}return null}function je(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ee(e){return["html","body","#document"].includes(oe(e))}function F(e){return $(e).getComputedStyle(e)}function be(e){return B(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function U(e){if(oe(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ze(e)&&e.host||Y(e);return Ze(t)?t.host:t}function st(e){const t=U(e);return ee(t)?e.ownerDocument?e.ownerDocument.body:e.body:V(t)&&ae(t)?t:st(t)}function se(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=st(e),i=r===((o=e.ownerDocument)==null?void 0:o.body),s=$(r);if(i){const c=De(s);return t.concat(s,s.visualViewport||[],ae(r)?r:[],c&&n?se(c):[])}return t.concat(r,se(r,[],n))}function De(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ct(e){const t=F(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=V(e),i=r?e.offsetWidth:n,s=r?e.offsetHeight:o,c=he(n)!==i||he(o)!==s;return c&&(n=i,o=s),{width:n,height:o,$:c}}function He(e){return B(e)?e:e.contextElement}function Q(e){const t=He(e);if(!V(t))return z(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:i}=ct(t);let s=(i?he(n.width):n.width)/o,c=(i?he(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const vn=z(0);function at(e){const t=$(e);return!je()||!t.visualViewport?vn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function bn(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==$(e)?!1:t}function Z(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=He(e);let s=z(1);t&&(o?B(o)&&(s=Q(o)):s=Q(e));const c=bn(i,n,o)?at(i):z(0);let a=(r.left+c.x)/s.x,l=(r.top+c.y)/s.y,f=r.width/s.x,u=r.height/s.y;if(i){const p=$(i),d=o&&B(o)?$(o):o;let h=p,m=De(h);for(;m&&o&&d!==h;){const w=Q(m),x=m.getBoundingClientRect(),y=F(m),b=x.left+(m.clientLeft+parseFloat(y.paddingLeft))*w.x,A=x.top+(m.clientTop+parseFloat(y.paddingTop))*w.y;a*=w.x,l*=w.y,f*=w.x,u*=w.y,a+=b,l+=A,h=$(m),m=De(h)}}return me({width:f,height:u,x:a,y:l})}function $e(e,t){const n=be(e).scrollLeft;return t?t.left+n:Z(Y(e)).left+n}function lt(e,t,n){n===void 0&&(n=!1);const o=e.getBoundingClientRect(),r=o.left+t.scrollLeft-(n?0:$e(e,o)),i=o.top+t.scrollTop;return{x:r,y:i}}function An(e){let{elements:t,rect:n,offsetParent:o,strategy:r}=e;const i=r==="fixed",s=Y(o),c=t?ve(t.floating):!1;if(o===s||c&&i)return n;let a={scrollLeft:0,scrollTop:0},l=z(1);const f=z(0),u=V(o);if((u||!u&&!i)&&((oe(o)!=="body"||ae(s))&&(a=be(o)),V(o))){const d=Z(o);l=Q(o),f.x=d.x+o.clientLeft,f.y=d.y+o.clientTop}const p=s&&!u&&!i?lt(s,a,!0):z(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-a.scrollLeft*l.x+f.x+p.x,y:n.y*l.y-a.scrollTop*l.y+f.y+p.y}}function Cn(e){return Array.from(e.getClientRects())}function Rn(e){const t=Y(e),n=be(e),o=e.ownerDocument.body,r=H(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=H(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+$e(e);const c=-n.scrollTop;return F(o).direction==="rtl"&&(s+=H(t.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:c}}function En(e,t){const n=$(e),o=Y(e),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,c=0,a=0;if(r){i=r.width,s=r.height;const l=je();(!l||l&&t==="fixed")&&(c=r.offsetLeft,a=r.offsetTop)}return{width:i,height:s,x:c,y:a}}function Pn(e,t){const n=Z(e,!0,t==="fixed"),o=n.top+e.clientTop,r=n.left+e.clientLeft,i=V(e)?Q(e):z(1),s=e.clientWidth*i.x,c=e.clientHeight*i.y,a=r*i.x,l=o*i.y;return{width:s,height:c,x:a,y:l}}function Je(e,t,n){let o;if(t==="viewport")o=En(e,n);else if(t==="document")o=Rn(Y(e));else if(B(t))o=Pn(t,n);else{const r=at(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return me(o)}function ft(e,t){const n=U(e);return n===t||!B(n)||ee(n)?!1:F(n).position==="fixed"||ft(n,t)}function On(e,t){const n=t.get(e);if(n)return n;let o=se(e,[],!1).filter(c=>B(c)&&oe(c)!=="body"),r=null;const i=F(e).position==="fixed";let s=i?U(e):e;for(;B(s)&&!ee(s);){const c=F(s),a=Ne(s);!a&&c.position==="fixed"&&(r=null),(i?!a&&!r:!a&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||ae(s)&&!a&&ft(e,s))?o=o.filter(f=>f!==s):r=c,s=U(s)}return t.set(e,o),o}function Tn(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const s=[...n==="clippingAncestors"?ve(t)?[]:On(t,this._c):[].concat(n),o],c=s[0],a=s.reduce((l,f)=>{const u=Je(t,f,r);return l.top=H(u.top,l.top),l.right=K(u.right,l.right),l.bottom=K(u.bottom,l.bottom),l.left=H(u.left,l.left),l},Je(t,c,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Sn(e){const{width:t,height:n}=ct(e);return{width:t,height:n}}function Dn(e,t,n){const o=V(t),r=Y(t),i=n==="fixed",s=Z(e,!0,i,t);let c={scrollLeft:0,scrollTop:0};const a=z(0);if(o||!o&&!i)if((oe(t)!=="body"||ae(r))&&(c=be(t)),o){const p=Z(t,!0,i,t);a.x=p.x+t.clientLeft,a.y=p.y+t.clientTop}else r&&(a.x=$e(r));const l=r&&!o&&!i?lt(r,c):z(0),f=s.left+c.scrollLeft-a.x-l.x,u=s.top+c.scrollTop-a.y-l.y;return{x:f,y:u,width:s.width,height:s.height}}function Ee(e){return F(e).position==="static"}function Qe(e,t){if(!V(e)||F(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Y(e)===n&&(n=n.ownerDocument.body),n}function ut(e,t){const n=$(e);if(ve(e))return n;if(!V(e)){let r=U(e);for(;r&&!ee(r);){if(B(r)&&!Ee(r))return r;r=U(r)}return n}let o=Qe(e,t);for(;o&&wn(o)&&Ee(o);)o=Qe(o,t);return o&&ee(o)&&Ee(o)&&!Ne(o)?n:o||yn(e)||n}const Mn=async function(e){const t=this.getOffsetParent||ut,n=this.getDimensions,o=await n(e.floating);return{reference:Dn(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Ln(e){return F(e).direction==="rtl"}const _n={convertOffsetParentRelativeRectToViewportRelativeRect:An,getDocumentElement:Y,getClippingRect:Tn,getOffsetParent:ut,getElementRects:Mn,getClientRects:Cn,getDimensions:Sn,getScale:Q,isElement:B,isRTL:Ln};function dt(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function kn(e,t){let n=null,o;const r=Y(e);function i(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function s(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),i();const l=e.getBoundingClientRect(),{left:f,top:u,width:p,height:d}=l;if(c||t(),!p||!d)return;const h=ue(u),m=ue(r.clientWidth-(f+p)),w=ue(r.clientHeight-(u+d)),x=ue(f),b={rootMargin:-h+"px "+-m+"px "+-w+"px "+-x+"px",threshold:H(0,K(1,a))||1};let A=!0;function C(E){const P=E[0].intersectionRatio;if(P!==a){if(!A)return s();P?s(!1,P):o=setTimeout(()=>{s(!1,1e-7)},1e3)}P===1&&!dt(l,e.getBoundingClientRect())&&s(),A=!1}try{n=new IntersectionObserver(C,{...b,root:r.ownerDocument})}catch{n=new IntersectionObserver(C,b)}n.observe(e)}return s(!0),i}function Nn(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,l=He(e),f=r||i?[...l?se(l):[],...se(t)]:[];f.forEach(x=>{r&&x.addEventListener("scroll",n,{passive:!0}),i&&x.addEventListener("resize",n)});const u=l&&c?kn(l,n):null;let p=-1,d=null;s&&(d=new ResizeObserver(x=>{let[y]=x;y&&y.target===l&&d&&(d.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var b;(b=d)==null||b.observe(t)})),n()}),l&&!a&&d.observe(l),d.observe(t));let h,m=a?Z(e):null;a&&w();function w(){const x=Z(e);m&&!dt(m,x)&&n(),m=x,h=requestAnimationFrame(w)}return n(),()=>{var x;f.forEach(y=>{r&&y.removeEventListener("scroll",n),i&&y.removeEventListener("resize",n)}),u==null||u(),(x=d)==null||x.disconnect(),d=null,a&&cancelAnimationFrame(h)}}const jn=hn,Hn=gn,$n=un,In=xn,Bn=dn,et=fn,Fn=mn,Wn=(e,t,n)=>{const o=new Map,r={platform:_n,...n},i={...r.platform,_c:o};return ln(e,t,{...r,platform:i})};var pe=typeof document<"u"?g.useLayoutEffect:g.useEffect;function xe(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(o=n;o--!==0;)if(!xe(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&e.$$typeof)&&!xe(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function pt(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function tt(e,t){const n=pt(e);return Math.round(t*n)/n}function Pe(e){const t=g.useRef(e);return pe(()=>{t.current=e}),t}function zn(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:s}={},transform:c=!0,whileElementsMounted:a,open:l}=e,[f,u]=g.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,d]=g.useState(o);xe(p,o)||d(o);const[h,m]=g.useState(null),[w,x]=g.useState(null),y=g.useCallback(R=>{R!==E.current&&(E.current=R,m(R))},[]),b=g.useCallback(R=>{R!==P.current&&(P.current=R,x(R))},[]),A=i||h,C=s||w,E=g.useRef(null),P=g.useRef(null),M=g.useRef(f),j=a!=null,L=Pe(a),k=Pe(r),N=Pe(l),T=g.useCallback(()=>{if(!E.current||!P.current)return;const R={placement:t,strategy:n,middleware:p};k.current&&(R.platform=k.current),Wn(E.current,P.current,R).then(_=>{const W={..._,isPositioned:N.current!==!1};O.current&&!xe(M.current,W)&&(M.current=W,Wt.flushSync(()=>{u(W)}))})},[p,t,n,k,N]);pe(()=>{l===!1&&M.current.isPositioned&&(M.current.isPositioned=!1,u(R=>({...R,isPositioned:!1})))},[l]);const O=g.useRef(!1);pe(()=>(O.current=!0,()=>{O.current=!1}),[]),pe(()=>{if(A&&(E.current=A),C&&(P.current=C),A&&C){if(L.current)return L.current(A,C,T);T()}},[A,C,T,L,j]);const I=g.useMemo(()=>({reference:E,floating:P,setReference:y,setFloating:b}),[y,b]),S=g.useMemo(()=>({reference:A,floating:C}),[A,C]),D=g.useMemo(()=>{const R={position:n,left:0,top:0};if(!S.floating)return R;const _=tt(S.floating,f.x),W=tt(S.floating,f.y);return c?{...R,transform:"translate("+_+"px, "+W+"px)",...pt(S.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:_,top:W}},[n,c,S.floating,f.x,f.y]);return g.useMemo(()=>({...f,update:T,refs:I,elements:S,floatingStyles:D}),[f,T,I,S,D])}const Vn=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:r}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?et({element:o.current,padding:r}).fn(n):{}:o?et({element:o,padding:r}).fn(n):{}}}},Yn=(e,t)=>({...jn(e),options:[e,t]}),Xn=(e,t)=>({...Hn(e),options:[e,t]}),Gn=(e,t)=>({...Fn(e),options:[e,t]}),Kn=(e,t)=>({...$n(e),options:[e,t]}),qn=(e,t)=>({...In(e),options:[e,t]}),Un=(e,t)=>({...Bn(e),options:[e,t]}),Zn=(e,t)=>({...Vn(e),options:[e,t]});var Jn="Arrow",ht=g.forwardRef((e,t)=>{const{children:n,width:o=10,height:r=5,...i}=e;return v.jsx(ce.svg,{...i,ref:t,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:v.jsx("polygon",{points:"0,0 30,0 15,10"})})});ht.displayName=Jn;var Qn=ht;function eo(e){const[t,n]=g.useState(void 0);return Oe(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const i=r[0];let s,c;if("borderBoxSize"in i){const a=i.borderBoxSize,l=Array.isArray(a)?a[0]:a;s=l.inlineSize,c=l.blockSize}else s=e.offsetWidth,c=e.offsetHeight;n({width:s,height:c})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}var gt="Popper",[mt,xt]=ot(gt),[Fo,wt]=mt(gt),yt="PopperAnchor",vt=g.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:o,...r}=e,i=wt(yt,n),s=g.useRef(null),c=we(t,s);return g.useEffect(()=>{i.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:v.jsx(ce.div,{...r,ref:c})});vt.displayName=yt;var Ie="PopperContent",[to,no]=mt(Ie),bt=g.forwardRef((e,t)=>{var Fe,We,ze,Ve,Ye,Xe;const{__scopePopper:n,side:o="bottom",sideOffset:r=0,align:i="center",alignOffset:s=0,arrowPadding:c=0,avoidCollisions:a=!0,collisionBoundary:l=[],collisionPadding:f=0,sticky:u="partial",hideWhenDetached:p=!1,updatePositionStrategy:d="optimized",onPlaced:h,...m}=e,w=wt(Ie,n),[x,y]=g.useState(null),b=we(t,re=>y(re)),[A,C]=g.useState(null),E=eo(A),P=(E==null?void 0:E.width)??0,M=(E==null?void 0:E.height)??0,j=o+(i!=="center"?"-"+i:""),L=typeof f=="number"?f:{top:0,right:0,bottom:0,left:0,...f},k=Array.isArray(l)?l:[l],N=k.length>0,T={padding:L,boundary:k.filter(ro),altBoundary:N},{refs:O,floatingStyles:I,placement:S,isPositioned:D,middlewareData:R}=zn({strategy:"fixed",placement:j,whileElementsMounted:(...re)=>Nn(...re,{animationFrame:d==="always"}),elements:{reference:w.anchor},middleware:[Yn({mainAxis:r+M,alignmentAxis:s}),a&&Xn({mainAxis:!0,crossAxis:!1,limiter:u==="partial"?Gn():void 0,...T}),a&&Kn({...T}),qn({...T,apply:({elements:re,rects:Ge,availableWidth:$t,availableHeight:It})=>{const{width:Bt,height:Ft}=Ge.reference,fe=re.floating.style;fe.setProperty("--radix-popper-available-width",`${$t}px`),fe.setProperty("--radix-popper-available-height",`${It}px`),fe.setProperty("--radix-popper-anchor-width",`${Bt}px`),fe.setProperty("--radix-popper-anchor-height",`${Ft}px`)}}),A&&Zn({element:A,padding:c}),io({arrowWidth:P,arrowHeight:M}),p&&Un({strategy:"referenceHidden",...T})]}),[_,W]=Rt(S),le=zt(h);Oe(()=>{D&&(le==null||le())},[D,le]);const _t=(Fe=R.arrow)==null?void 0:Fe.x,kt=(We=R.arrow)==null?void 0:We.y,Nt=((ze=R.arrow)==null?void 0:ze.centerOffset)!==0,[jt,Ht]=g.useState();return Oe(()=>{x&&Ht(window.getComputedStyle(x).zIndex)},[x]),v.jsx("div",{ref:O.setFloating,"data-radix-popper-content-wrapper":"",style:{...I,transform:D?I.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:jt,"--radix-popper-transform-origin":[(Ve=R.transformOrigin)==null?void 0:Ve.x,(Ye=R.transformOrigin)==null?void 0:Ye.y].join(" "),...((Xe=R.hide)==null?void 0:Xe.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:v.jsx(to,{scope:n,placedSide:_,onArrowChange:C,arrowX:_t,arrowY:kt,shouldHideArrow:Nt,children:v.jsx(ce.div,{"data-side":_,"data-align":W,...m,ref:b,style:{...m.style,animation:D?void 0:"none"}})})})});bt.displayName=Ie;var At="PopperArrow",oo={top:"bottom",right:"left",bottom:"top",left:"right"},Ct=g.forwardRef(function(t,n){const{__scopePopper:o,...r}=t,i=no(At,o),s=oo[i.placedSide];return v.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:v.jsx(Qn,{...r,ref:n,style:{...r.style,display:"block"}})})});Ct.displayName=At;function ro(e){return e!==null}var io=e=>({name:"transformOrigin",options:e,fn(t){var w,x,y;const{placement:n,rects:o,middlewareData:r}=t,s=((w=r.arrow)==null?void 0:w.centerOffset)!==0,c=s?0:e.arrowWidth,a=s?0:e.arrowHeight,[l,f]=Rt(n),u={start:"0%",center:"50%",end:"100%"}[f],p=(((x=r.arrow)==null?void 0:x.x)??0)+c/2,d=(((y=r.arrow)==null?void 0:y.y)??0)+a/2;let h="",m="";return l==="bottom"?(h=s?u:`${p}px`,m=`${-a}px`):l==="top"?(h=s?u:`${p}px`,m=`${o.floating.height+a}px`):l==="right"?(h=`${-a}px`,m=s?u:`${d}px`):l==="left"&&(h=`${o.floating.width+a}px`,m=s?u:`${d}px`),{data:{x:h,y:m}}}});function Rt(e){const[t,n="center"]=e.split("-");return[t,n]}var so=vt,co=bt,ao=Ct,lo="VisuallyHidden",Et=g.forwardRef((e,t)=>v.jsx(ce.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));Et.displayName=lo;var fo=Et,[Ae,Wo]=ot("Tooltip",[xt]),Be=xt(),Pt="TooltipProvider",uo=700,nt="tooltip.open",[po,Ot]=Ae(Pt),Tt=e=>{const{__scopeTooltip:t,delayDuration:n=uo,skipDelayDuration:o=300,disableHoverableContent:r=!1,children:i}=e,[s,c]=g.useState(!0),a=g.useRef(!1),l=g.useRef(0);return g.useEffect(()=>{const f=l.current;return()=>window.clearTimeout(f)},[]),v.jsx(po,{scope:t,isOpenDelayed:s,delayDuration:n,onOpen:g.useCallback(()=>{window.clearTimeout(l.current),c(!1)},[]),onClose:g.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>c(!0),o)},[o]),isPointerInTransitRef:a,onPointerInTransitChange:g.useCallback(f=>{a.current=f},[]),disableHoverableContent:r,children:i})};Tt.displayName=Pt;var St="Tooltip",[zo,Ce]=Ae(St),Me="TooltipTrigger",ho=g.forwardRef((e,t)=>{const{__scopeTooltip:n,...o}=e,r=Ce(Me,n),i=Ot(Me,n),s=Be(n),c=g.useRef(null),a=we(t,c,r.onTriggerChange),l=g.useRef(!1),f=g.useRef(!1),u=g.useCallback(()=>l.current=!1,[]);return g.useEffect(()=>()=>document.removeEventListener("pointerup",u),[u]),v.jsx(so,{asChild:!0,...s,children:v.jsx(ce.button,{"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute,...o,ref:a,onPointerMove:J(e.onPointerMove,p=>{p.pointerType!=="touch"&&!f.current&&!i.isPointerInTransitRef.current&&(r.onTriggerEnter(),f.current=!0)}),onPointerLeave:J(e.onPointerLeave,()=>{r.onTriggerLeave(),f.current=!1}),onPointerDown:J(e.onPointerDown,()=>{l.current=!0,document.addEventListener("pointerup",u,{once:!0})}),onFocus:J(e.onFocus,()=>{l.current||r.onOpen()}),onBlur:J(e.onBlur,r.onClose),onClick:J(e.onClick,r.onClose)})})});ho.displayName=Me;var go="TooltipPortal",[Vo,mo]=Ae(go,{forceMount:void 0}),te="TooltipContent",xo=g.forwardRef((e,t)=>{const n=mo(te,e.__scopeTooltip),{forceMount:o=n.forceMount,side:r="top",...i}=e,s=Ce(te,e.__scopeTooltip);return v.jsx(Vt,{present:o||s.open,children:s.disableHoverableContent?v.jsx(Dt,{side:r,...i,ref:t}):v.jsx(wo,{side:r,...i,ref:t})})}),wo=g.forwardRef((e,t)=>{const n=Ce(te,e.__scopeTooltip),o=Ot(te,e.__scopeTooltip),r=g.useRef(null),i=we(t,r),[s,c]=g.useState(null),{trigger:a,onClose:l}=n,f=r.current,{onPointerInTransitChange:u}=o,p=g.useCallback(()=>{c(null),u(!1)},[u]),d=g.useCallback((h,m)=>{const w=h.currentTarget,x={x:h.clientX,y:h.clientY},y=Ao(x,w.getBoundingClientRect()),b=Co(x,y),A=Ro(m.getBoundingClientRect()),C=Po([...b,...A]);c(C),u(!0)},[u]);return g.useEffect(()=>()=>p(),[p]),g.useEffect(()=>{if(a&&f){const h=w=>d(w,f),m=w=>d(w,a);return a.addEventListener("pointerleave",h),f.addEventListener("pointerleave",m),()=>{a.removeEventListener("pointerleave",h),f.removeEventListener("pointerleave",m)}}},[a,f,d,p]),g.useEffect(()=>{if(s){const h=m=>{const w=m.target,x={x:m.clientX,y:m.clientY},y=(a==null?void 0:a.contains(w))||(f==null?void 0:f.contains(w)),b=!Eo(x,s);y?p():b&&(p(),l())};return document.addEventListener("pointermove",h),()=>document.removeEventListener("pointermove",h)}},[a,f,s,l,p]),v.jsx(Dt,{...e,ref:i})}),[yo,vo]=Ae(St,{isInside:!1}),Dt=g.forwardRef((e,t)=>{const{__scopeTooltip:n,children:o,"aria-label":r,onEscapeKeyDown:i,onPointerDownOutside:s,...c}=e,a=Ce(te,n),l=Be(n),{onClose:f}=a;return g.useEffect(()=>(document.addEventListener(nt,f),()=>document.removeEventListener(nt,f)),[f]),g.useEffect(()=>{if(a.trigger){const u=p=>{const d=p.target;d!=null&&d.contains(a.trigger)&&f()};return window.addEventListener("scroll",u,{capture:!0}),()=>window.removeEventListener("scroll",u,{capture:!0})}},[a.trigger,f]),v.jsx(Yt,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:u=>u.preventDefault(),onDismiss:f,children:v.jsxs(co,{"data-state":a.stateAttribute,...l,...c,ref:t,style:{...c.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[v.jsx(Xt,{children:o}),v.jsx(yo,{scope:n,isInside:!0,children:v.jsx(fo,{id:a.contentId,role:"tooltip",children:r||o})})]})})});xo.displayName=te;var Mt="TooltipArrow",bo=g.forwardRef((e,t)=>{const{__scopeTooltip:n,...o}=e,r=Be(n);return vo(Mt,n).isInside?null:v.jsx(ao,{...r,...o,ref:t})});bo.displayName=Mt;function Ao(e,t){const n=Math.abs(t.top-e.y),o=Math.abs(t.bottom-e.y),r=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,o,r,i)){case i:return"left";case r:return"right";case n:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function Co(e,t,n=5){const o=[];switch(t){case"top":o.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":o.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":o.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":o.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return o}function Ro(e){const{top:t,right:n,bottom:o,left:r}=e;return[{x:r,y:t},{x:n,y:t},{x:n,y:o},{x:r,y:o}]}function Eo(e,t){const{x:n,y:o}=e;let r=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){const c=t[i].x,a=t[i].y,l=t[s].x,f=t[s].y;a>o!=f>o&&n<(l-c)*(o-a)/(f-a)+c&&(r=!r)}return r}function Po(e){const t=e.slice();return t.sort((n,o)=>n.x<o.x?-1:n.x>o.x?1:n.y<o.y?-1:n.y>o.y?1:0),Oo(t)}function Oo(e){if(e.length<=1)return e.slice();const t=[];for(let o=0;o<e.length;o++){const r=e[o];for(;t.length>=2;){const i=t[t.length-1],s=t[t.length-2];if((i.x-s.x)*(r.y-s.y)>=(i.y-s.y)*(r.x-s.x))t.pop();else break}t.push(r)}t.pop();const n=[];for(let o=e.length-1;o>=0;o--){const r=e[o];for(;n.length>=2;){const i=n[n.length-1],s=n[n.length-2];if((i.x-s.x)*(r.y-s.y)>=(i.y-s.y)*(r.x-s.x))n.pop();else break}n.push(r)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var To=Tt;function So({delayDuration:e=0,...t}){return v.jsx(To,{"data-slot":"tooltip-provider",delayDuration:e,...t})}const Do="sidebar_state",Mo=60*60*24*7,Lo="16rem",_o="18rem",ko="3rem",No="b",Lt=g.createContext(null);function jo(){const e=g.useContext(Lt);if(!e)throw new Error("useSidebar must be used within a SidebarProvider.");return e}function Ho({defaultOpen:e=!0,open:t,onOpenChange:n,className:o,style:r,children:i,...s}){const c=Qt(),[a,l]=g.useState(!1),[f,u]=g.useState(e),p=t??f,d=g.useCallback(x=>{const y=typeof x=="function"?x(p):x;n?n(y):u(y),document.cookie=`${Do}=${y}; path=/; max-age=${Mo}`},[n,p]),h=g.useCallback(()=>c?l(x=>!x):d(x=>!x),[c,d,l]);g.useEffect(()=>{const x=y=>{y.key===No&&(y.metaKey||y.ctrlKey)&&(y.preventDefault(),h())};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[h]);const m=p?"expanded":"collapsed",w=g.useMemo(()=>({state:m,open:p,setOpen:d,isMobile:c,openMobile:a,setOpenMobile:l,toggleSidebar:h}),[m,p,d,c,a,l,h]);return v.jsx(Lt.Provider,{value:w,children:v.jsx(So,{delayDuration:0,children:v.jsx("div",{"data-slot":"sidebar-wrapper",style:{"--sidebar-width":Lo,"--sidebar-width-icon":ko,...r},className:de("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",o),...s,children:i})})})}function $o({side:e="left",variant:t="sidebar",collapsible:n="offcanvas",className:o,children:r,...i}){const{isMobile:s,state:c,openMobile:a,setOpenMobile:l}=jo();return n==="none"?v.jsx("div",{"data-slot":"sidebar",className:de("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",o),...i,children:r}):s?v.jsx(Gt,{open:a,onOpenChange:l,...i,children:v.jsxs(Kt,{"data-sidebar":"sidebar","data-slot":"sidebar","data-mobile":"true",className:"bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",style:{"--sidebar-width":_o},side:e,children:[v.jsxs(qt,{className:"sr-only",children:[v.jsx(Ut,{children:"Sidebar"}),v.jsx(Zt,{children:"Displays the mobile sidebar."})]}),v.jsx("div",{className:"flex h-full w-full flex-col",children:r})]})}):v.jsxs("div",{className:"group peer text-sidebar-foreground hidden md:block","data-state":c,"data-collapsible":c==="collapsed"?n:"","data-variant":t,"data-side":e,"data-slot":"sidebar",children:[v.jsx("div",{className:de("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear","group-data-[collapsible=offcanvas]:w-0","group-data-[side=right]:rotate-180",t==="floating"||t==="inset"?"group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]":"group-data-[collapsible=icon]:w-(--sidebar-width-icon)")}),v.jsx("div",{className:de("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",e==="left"?"left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]":"right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",t==="floating"||t==="inset"?"p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]":"group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",o),...i,children:v.jsx("div",{"data-sidebar":"sidebar",className:"bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",children:r})})]})}function Yo(){return v.jsx(Ho,{children:v.jsxs("div",{className:"flex min-h-screen",children:[v.jsxs($o,{variant:"floating",collapsible:"icon",children:[v.jsx("div",{className:"p-4",children:"📂 Files"}),v.jsx("div",{className:"p-4",children:"⚙️ Settings"}),v.jsx("div",{className:"p-4",children:"📊 Reports"})]}),v.jsx(Jt,{})]})})}export{Yo as default};

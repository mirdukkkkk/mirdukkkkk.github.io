var t,e,n,_,r,o,i,s,u,l,f,a,c,h={},p=[],v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,d=Array.isArray;function y(t,e){for(var n in e)t[n]=e[n];return t}function m(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function g(e,n,_){var r,o,i,s={};for(i in n)"key"==i?r=n[i]:"ref"==i?o=n[i]:s[i]=n[i];if(arguments.length>2&&(s.children=arguments.length>3?t.call(arguments,2):_),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===s[i]&&(s[i]=e.defaultProps[i]);return b(e,s,r,o,null)}function b(t,_,r,o,i){var s={type:t,props:_,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i??++n,__i:-1,__u:0};return null==i&&null!=e.vnode&&e.vnode(s),s}function k(){return{current:null}}function w(t){return t.children}function S(t,e){this.props=t,this.context=e}function x(t,e){if(null==e)return t.__?x(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?x(t):null}function C(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return C(t)}}function P(t){(!t.__d&&(t.__d=!0)&&r.push(t)&&!E.__r++||o!==e.debounceRendering)&&((o=e.debounceRendering)||i)(E)}function E(){var t,n,_,o,i,u,l,f;for(r.sort(s);t=r.shift();)t.__d&&(n=r.length,o=void 0,u=(i=(_=t).__v).__e,l=[],f=[],_.__P&&((o=y({},i)).__v=i.__v+1,e.vnode&&e.vnode(o),A(_.__P,o,i,_.__n,_.__P.namespaceURI,32&i.__u?[u]:null,l,u??x(i),!!(32&i.__u),f),o.__v=i.__v,o.__.__k[o.__i]=o,L(l,o,f),o.__e!=u&&C(o)),r.length>n&&r.sort(s));E.__r=0}function U(t,e,n,_,r,o,i,s,u,l,f){var a,c,v,y,m,g=_&&_.__k||p,k=e.length;for(n.__d=u,((t,e,n)=>{var _,r,o,i,s,u=e.length,l=n.length,f=l,a=0;for(t.__k=[],_=0;u>_;_++)null!=(r=e[_])&&"boolean"!=typeof r&&"function"!=typeof r?(i=_+a,(r=t.__k[_]="string"==typeof r||"number"==typeof r||"bigint"==typeof r||r.constructor==String?b(null,r,null,null,null):d(r)?b(w,{children:r},null,null,null):void 0===r.constructor&&r.__b>0?b(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r).__=t,r.__b=t.__b+1,o=null,-1!==(s=r.__i=N(r,n,i,f))&&(f--,(o=n[s])&&(o.__u|=131072)),null==o||null===o.__v?(-1==s&&a--,"function"!=typeof r.type&&(r.__u|=65536)):s!==i&&(s==i-1?a--:s==i+1?a++:(s>i?a--:a++,r.__u|=65536))):r=t.__k[_]=null;if(f)for(_=0;l>_;_++)null!=(o=n[_])&&!(131072&o.__u)&&(o.__e==t.__d&&(t.__d=x(o)),F(o,o))})(n,e,g),u=n.__d,a=0;k>a;a++)null!=(v=n.__k[a])&&(c=-1===v.__i?h:g[v.__i]||h,v.__i=a,A(t,v,c,r,o,i,s,u,l,f),y=v.__e,v.ref&&c.ref!=v.ref&&(c.ref&&D(c.ref,null,v),f.push(v.ref,v.__c||y,v)),null==m&&null!=y&&(m=y),65536&v.__u||c.__k===v.__k?u=H(v,u,t):"function"==typeof v.type&&void 0!==v.__d?u=v.__d:y&&(u=y.nextSibling),v.__d=void 0,v.__u&=-196609);n.__d=u,n.__e=m}function H(t,e,n){var _,r;if("function"==typeof t.type){for(_=t.__k,r=0;_&&r<_.length;r++)_[r]&&(_[r].__=t,e=H(_[r],e,n));return e}t.__e!=e&&(e&&t.type&&!n.contains(e)&&(e=x(t)),n.insertBefore(t.__e,e||null),e=t.__e);do{e=e&&e.nextSibling}while(null!=e&&8===e.nodeType);return e}function N(t,e,n,_){var r=t.key,o=t.type,i=n-1,s=n+1,u=e[n];if(null===u||u&&r==u.key&&o===u.type&&!(131072&u.__u))return n;if(_>(null==u||131072&u.__u?0:1))for(;i>=0||s<e.length;){if(i>=0){if((u=e[i])&&!(131072&u.__u)&&r==u.key&&o===u.type)return i;i--}if(s<e.length){if((u=e[s])&&!(131072&u.__u)&&r==u.key&&o===u.type)return s;s++}}return-1}function T(t,e,n){"-"===e[0]?t.setProperty(e,n??""):t[e]=null==n?"":"number"!=typeof n||v.test(e)?n:n+"px"}function O(t,e,n,_,r){var o;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof _&&(t.style.cssText=_=""),_)for(e in _)n&&e in n||T(t.style,e,"");if(n)for(e in n)_&&n[e]===_[e]||T(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])o=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||"onFocusOut"===e||"onFocusIn"===e?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?_?n.u=_.u:(n.u=u,t.addEventListener(e,o?f:l,o)):t.removeEventListener(e,o?f:l,o);else{if("http://www.w3.org/2000/svg"==r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=e&&"height"!=e&&"href"!=e&&"list"!=e&&"form"!=e&&"tabIndex"!=e&&"download"!=e&&"rowSpan"!=e&&"colSpan"!=e&&"role"!=e&&"popover"!=e&&e in t)try{t[e]=n??"";break t}catch(i){}"function"==typeof n||(null==n||!1===n&&"-"!==e[4]?t.removeAttribute(e):t.setAttribute(e,"popover"==e&&1==n?"":n))}}function $(t){return function(n){if(this.l){var _=this.l[n.type+t];if(null==n.t)n.t=u++;else if(n.t<_.u)return;return _(e.event?e.event(n):n)}}}function A(n,_,r,o,i,s,u,l,f,a){var c,p,v,g,b,k,C,P,E,H,N,T,$,A,L,D,F=_.type;if(void 0!==_.constructor)return null;128&r.__u&&(f=!!(32&r.__u),s=[l=_.__e=r.__e]),(c=e.__b)&&c(_);t:if("function"==typeof F)try{if(P=_.props,E="prototype"in F&&F.prototype.render,H=(c=F.contextType)&&o[c.__c],N=c?H?H.props.value:c.__:o,r.__c?C=(p=_.__c=r.__c).__=p.__E:(E?_.__c=p=new F(P,N):(_.__c=p=new S(P,N),p.constructor=F,p.render=M),H&&H.sub(p),p.props=P,p.state||(p.state={}),p.context=N,p.__n=o,v=p.__d=!0,p.__h=[],p._sb=[]),E&&null==p.__s&&(p.__s=p.state),E&&null!=F.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=y({},p.__s)),y(p.__s,F.getDerivedStateFromProps(P,p.__s))),g=p.props,b=p.state,p.__v=_,v)E&&null==F.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),E&&null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(E&&null==F.getDerivedStateFromProps&&P!==g&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(P,N),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(P,p.__s,N)||_.__v===r.__v)){for(_.__v!==r.__v&&(p.props=P,p.state=p.__s,p.__d=!1),_.__e=r.__e,_.__k=r.__k,_.__k.some((t=>{t&&(t.__=_)})),T=0;T<p._sb.length;T++)p.__h.push(p._sb[T]);p._sb=[],p.__h.length&&u.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(P,p.__s,N),E&&null!=p.componentDidUpdate&&p.__h.push((()=>{p.componentDidUpdate(g,b,k)}))}if(p.context=N,p.props=P,p.__P=n,p.__e=!1,$=e.__r,A=0,E){for(p.state=p.__s,p.__d=!1,$&&$(_),c=p.render(p.props,p.state,p.context),L=0;L<p._sb.length;L++)p.__h.push(p._sb[L]);p._sb=[]}else do{p.__d=!1,$&&$(_),c=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&25>++A);p.state=p.__s,null!=p.getChildContext&&(o=y(y({},o),p.getChildContext())),E&&!v&&null!=p.getSnapshotBeforeUpdate&&(k=p.getSnapshotBeforeUpdate(g,b)),U(n,d(D=null!=c&&c.type===w&&null==c.key?c.props.children:c)?D:[D],_,r,o,i,s,u,l,f,a),p.base=_.__e,_.__u&=-161,p.__h.length&&u.push(p),C&&(p.__E=p.__=null)}catch(R){if(_.__v=null,f||null!=s){for(_.__u|=f?160:128;l&&8===l.nodeType&&l.nextSibling;)l=l.nextSibling;s[s.indexOf(l)]=null,_.__e=l}else _.__e=r.__e,_.__k=r.__k;e.__e(R,_,r)}else null==s&&_.__v===r.__v?(_.__k=r.__k,_.__e=r.__e):_.__e=((n,_,r,o,i,s,u,l,f)=>{var a,c,p,v,y,g,b,k=r.props,w=_.props,S=_.type;if("svg"===S?i="http://www.w3.org/2000/svg":"math"===S?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=s)for(a=0;a<s.length;a++)if((y=s[a])&&"setAttribute"in y==!!S&&(S?y.localName===S:3===y.nodeType)){n=y,s[a]=null;break}if(null==n){if(null===S)return document.createTextNode(w);n=document.createElementNS(i,S,w.is&&w),l&&(e.__m&&e.__m(_,s),l=!1),s=null}if(null===S)k===w||l&&n.data===w||(n.data=w);else{if(s=s&&t.call(n.childNodes),k=r.props||h,!l&&null!=s)for(k={},a=0;a<n.attributes.length;a++)k[(y=n.attributes[a]).name]=y.value;for(a in k)if(y=k[a],"children"==a);else if("dangerouslySetInnerHTML"==a)p=y;else if(!(a in w)){if("value"==a&&"defaultValue"in w||"checked"==a&&"defaultChecked"in w)continue;O(n,a,null,y,i)}for(a in w)y=w[a],"children"==a?v=y:"dangerouslySetInnerHTML"==a?c=y:"value"==a?g=y:"checked"==a?b=y:l&&"function"!=typeof y||k[a]===y||O(n,a,y,k[a],i);if(c)l||p&&(c.__html===p.__html||c.__html===n.innerHTML)||(n.innerHTML=c.__html),_.__k=[];else if(p&&(n.innerHTML=""),U(n,d(v)?v:[v],_,r,o,"foreignObject"===S?"http://www.w3.org/1999/xhtml":i,s,u,s?s[0]:r.__k&&x(r,0),l,f),null!=s)for(a=s.length;a--;)m(s[a]);l||(a="value","progress"===S&&null==g?n.removeAttribute("value"):void 0!==g&&(g!==n[a]||"progress"===S&&!g||"option"===S&&g!==k[a])&&O(n,a,g,k[a],i),a="checked",void 0!==b&&b!==n[a]&&O(n,a,b,k[a],i))}return n})(r.__e,_,r,o,i,s,u,f,a);(c=e.diffed)&&c(_)}function L(t,n,_){n.__d=void 0;for(var r=0;r<_.length;r++)D(_[r],_[++r],_[++r]);e.__c&&e.__c(n,t),t.some((n=>{try{t=n.__h,n.__h=[],t.some((t=>{t.call(n)}))}catch(_){e.__e(_,n.__v)}}))}function D(t,n,_){try{if("function"==typeof t){var r="function"==typeof t.__u;r&&t.__u(),r&&null==n||(t.__u=t(n))}else t.current=n}catch(o){e.__e(o,_)}}function F(t,n,_){var r,o;if(e.unmount&&e.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||D(r,null,n)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){e.__e(i,n)}r.base=r.__P=null}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&F(r[o],n,_||"function"!=typeof t.type);_||m(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function M(t,e,n){return this.constructor(t,n)}function R(n,_,r){var o,i,s,u;e.__&&e.__(n,_),i=(o="function"==typeof r)?null:_.__k,s=[],u=[],A(_,n=(!o&&r||_).__k=g(w,null,[n]),i||h,h,_.namespaceURI,!o&&r?[r]:i?null:_.firstChild?t.call(_.childNodes):null,s,!o&&r?r:i?i.__e:_.firstChild,o,u),L(s,n,u)}function W(e,n,_){var r,o,i,s,u=y({},e.props);for(i in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),n)"key"==i?r=n[i]:"ref"==i?o=n[i]:u[i]=void 0===n[i]&&void 0!==s?s[i]:n[i];return arguments.length>2&&(u.children=arguments.length>3?t.call(arguments,2):_),b(e.type,u,r||e.key,o||e.ref,null)}function j(t,e){var n={__c:e="__cC"+a++,__:t,Consumer(t,e){return t.children(e)},Provider(t){var n,_;return this.getChildContext||(n=new Set,(_={})[e]=this,this.getChildContext=()=>_,this.componentWillUnmount=()=>{n=null},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.forEach((t=>{t.__e=!0,P(t)}))},this.sub=t=>{n.add(t);var e=t.componentWillUnmount;t.componentWillUnmount=()=>{n&&n.delete(t),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}t=p.slice,e={__e(t,e,n,_){for(var r,o,i;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&null!=o.getDerivedStateFromError&&(r.setState(o.getDerivedStateFromError(t)),i=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(t,_||{}),i=r.__d),i)return r.__E=r}catch(s){t=s}throw t}},n=0,_=t=>null!=t&&null==t.constructor,S.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=y({},this.state),"function"==typeof t&&(t=t(y({},n),this.props)),t&&y(n,t),null!=t&&this.__v&&(e&&this._sb.push(e),P(this))},S.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),P(this))},S.prototype.render=w,r=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=(t,e)=>t.__v.__b-e.__v.__b,E.__r=0,u=0,l=$(!1),f=$(!0),a=0,null!=(c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0)&&c.__PREACT_DEVTOOLS__&&c.__PREACT_DEVTOOLS__.attachPreact("10.24.3",e,{Fragment:w,Component:S});var I,q,B,K,V=0,z=[],G=e,J=G.__b,Q=G.__r,X=G.diffed,Y=G.__c,Z=G.unmount,tt=G.__;function et(t,e){G.__h&&G.__h(q,t,V||e),V=0;var n=q.__H||(q.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function nt(t,e){var n=et(I++,4);!G.__s&&at(n.__H,e)&&(n.__=t,n.i=e,q.__h.push(n))}function _t(t){return V=5,rt((()=>({current:t})),[])}function rt(t,e){var n=et(I++,7);return at(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function ot(t){var e=q.context[t.__c],n=et(I++,9);return n.c=t,e?(null==n.__&&(n.__=!0,e.sub(q)),e.props.value):t.__}function it(){for(var t;t=z.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(lt),t.__H.__h.forEach(ft),t.__H.__h=[]}catch(e){t.__H.__h=[],G.__e(e,t.__v)}}G.__b=t=>{q=null,J&&J(t)},G.__=(t,e)=>{t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),tt&&tt(t,e)},G.__r=t=>{Q&&Q(t),I=0;var e=(q=t.__c).__H;e&&(B===q?(e.__h=[],q.__h=[],e.__.forEach((t=>{t.__N&&(t.__=t.__N),t.i=t.__N=void 0}))):(e.__h.forEach(lt),e.__h.forEach(ft),e.__h=[],I=0)),B=q},G.diffed=t=>{X&&X(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(1!==z.push(e)&&K===G.requestAnimationFrame||((K=G.requestAnimationFrame)||ut)(it)),e.__H.__.forEach((t=>{t.i&&(t.__H=t.i),t.i=void 0}))),B=q=null},G.__c=(t,e)=>{e.some((t=>{try{t.__h.forEach(lt),t.__h=t.__h.filter((t=>!t.__||ft(t)))}catch(n){e.some((t=>{t.__h&&(t.__h=[])})),e=[],G.__e(n,t.__v)}})),Y&&Y(t,e)},G.unmount=t=>{Z&&Z(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((t=>{try{lt(t)}catch(n){e=n}})),n.__H=void 0,e&&G.__e(e,n.__v))};var st="function"==typeof requestAnimationFrame;function ut(t){var e,n=()=>{clearTimeout(_),st&&cancelAnimationFrame(e),setTimeout(t)},_=setTimeout(n,100);st&&(e=requestAnimationFrame(n))}function lt(t){var e=q,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),q=e}function ft(t){var e=q;t.__c=t.__(),q=e}function at(t,e){return!t||t.length!==e.length||e.some(((e,n)=>e!==t[n]))}function ct(t,e){return"function"==typeof e?e(t):e}const ht=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement);function pt(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e}const vt=t=>{const e=_t([t,(...t)=>e[0](...t)]).current;return nt((()=>{e[0]=t})),e[1]},dt="pushState",yt="replaceState",mt=["popstate",dt,yt,"hashchange"],gt=t=>{for(const e of mt)addEventListener(e,t);return()=>{for(const e of mt)removeEventListener(e,t)}},bt=(t,e)=>function(t,e,n){n&&!ht&&(e=n);const _=e(),[{_instance:r},o]=function(t){return V=1,function(t,e){var n=et(I++,2);if(n.t=t,!n.__c&&(n.__=[ct(void 0,e),t=>{var e=n.__N?n.__N[0]:n.__[0],_=n.t(e,t);e!==_&&(n.__N=[_,n.__[1]],n.__c.setState({}))}],n.__c=q,!q.u)){var _=function(t,e,_){if(!n.__c.__H)return!0;var o=n.__c.__H.__.filter((t=>!!t.__c));if(o.every((t=>!t.__N)))return!r||r.call(this,t,e,_);var i=!1;return o.forEach((t=>{if(t.__N){var e=t.__[0];t.__=t.__N,t.__N=void 0,e!==t.__[0]&&(i=!0)}})),!(!i&&n.__c.props===t)&&(!r||r.call(this,t,e,_))};q.u=!0;var r=q.shouldComponentUpdate,o=q.componentWillUpdate;q.componentWillUpdate=function(t,e,n){if(this.__e){var i=r;r=void 0,_(t,e,n),r=i}o&&o.call(this,t,e,n)},q.shouldComponentUpdate=_}return n.__N||n.__}(ct,t)}({_instance:{_value:_,_getSnapshot:e}});var i,s,u;return nt((()=>{r._value=_,r._getSnapshot=e,pt(r._value,e())||o({_instance:r})}),[t,_,e]),i=()=>(pt(r._value,r._getSnapshot())||o({_instance:r}),t((()=>{pt(r._value,r._getSnapshot())||o({_instance:r})}))),s=[t],u=et(I++,3),!G.__s&&at(u.__H,s)&&(u.__=i,u.i=s,q.__H.__h.push(u)),_}(gt,t,e),kt=()=>location.search,wt=()=>location.pathname,St=({ssrPath:t}={})=>bt(wt,t?()=>t:wt),xt=(t,{replace:e=!1,state:n=null}={})=>history[e?yt:dt](n,"",t),Ct=Symbol.for("wouter_v3");if("undefined"!=typeof history&&void 0===window[Ct]){for(const t of[dt,yt]){const e=history[t];history[t]=function(){const n=e.apply(this,arguments),_=new Event(t);return _.arguments=arguments,dispatchEvent(_),n}}Object.defineProperty(window,Ct,{value:!0})}const Pt=(t="")=>"/"===t?"":t,Et=(t="",e)=>((t,e)=>e.toLowerCase().indexOf(t.toLowerCase())?"~"+e:e.slice(t.length)||"/")(Ut(Pt(t)),Ut(e)),Ut=t=>{try{return decodeURI(t)}catch(e){return t}},Ht={hook(t={}){return[St(t),xt]},searchHook({ssrSearch:t=""}={}){return bt(kt,(()=>t))},parser(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,_,r,o,i=[],s="",u=t.split("/");for(u[0]||u.shift();r=u.shift();)"*"===(n=r[0])?(i.push(n),s+="?"===r[1]?"(?:/(.*))?":"/(.*)"):":"===n?(_=r.indexOf("?",1),o=r.indexOf(".",1),i.push(r.substring(1,~_?_:~o?o:r.length)),s+=~_&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(s+=(~_?"?":"")+"\\"+r.substring(o))):s+="/"+r;return{keys:i,pattern:RegExp("^"+s+(e?"(?=$|/)":"/?$"),"i")}},base:"",ssrPath:void 0,ssrSearch:void 0,hrefs(t){return t}},Nt=j(Ht),Tt=()=>ot(Nt),Ot={},$t=j(Ot),At=t=>{const[e,n]=t.hook(t);return[Et(t.base,e),vt(((e,_)=>n(((t,e)=>"~"===t[0]?t.slice(1):Pt(e)+t)(e,t.base),_)))]},Lt=(t,e,n,_)=>{const{pattern:r,keys:o}=e instanceof RegExp?{keys:!1,pattern:e}:t(e||"*",_),i=r.exec(n)||[],[s,...u]=i;return void 0!==s?[!0,(()=>{const t=!1!==o?Object.fromEntries(o.map(((t,e)=>[t,u[e]]))):i.groups;let e={...u};return t&&Object.assign(e,t),e})(),..._?[s]:[]]:[!1,null]},Dt=({children:t,...e})=>{var n,_;const r=Tt(),o=e.hook?Ht:r;let i=o;const[s,u]=(null==(n=e.ssrPath)?void 0:n.split("?"))??[];u&&(e.ssrSearch=u,e.ssrPath=s),e.hrefs=e.hrefs??(null==(_=e.hook)?void 0:_.hrefs);let l=_t({}),f=l.current,a=f;for(let c in o){const t="base"===c?o[c]+(e[c]||""):e[c]||o[c];f===a&&t!==a[c]&&(l.current=a={...a}),a[c]=t,t!==o[c]&&(i=a)}return g(Nt.Provider,{value:i,children:t})},Ft=({children:t,component:e},n)=>e?g(e,{params:n}):"function"==typeof t?t(n):t,Mt=({path:t,nest:e,match:n,..._})=>{const r=Tt(),[o]=At(r),[i,s,u]=n??Lt(r.parser,t,o,e),l=(t=>{let e=_t(Ot),n=e.current;for(const _ in t)t[_]!==n[_]&&(n=t);return 0===Object.keys(t).length&&(n=t),e.current=n})({...ot($t),...s});if(!i)return null;const f=u?g(Dt,{base:u},Ft(_,l)):Ft(_,l);return g($t.Provider,{value:l,children:f})},Rt=(t,e)=>{const n=Tt(),[r,o]=At(n),{to:i="",href:s=i,onClick:u,asChild:l,children:f,className:a,replace:c,state:h,...p}=t,v=vt((e=>{e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button||(null==u||u(e),e.defaultPrevented||(e.preventDefault(),o(s,t)))})),d=n.hrefs("~"===s[0]?s.slice(1):n.base+s,n);return l&&_(f)?W(f,{onClick:v,href:d}):g("a",{...p,onClick:v,href:d,className:(null==a?void 0:a.call)?a(r===s):a,children:f,ref:e})},Wt=t=>Array.isArray(t)?t.flatMap((t=>Wt(t&&t.type===w?t.props.children:t))):[t],jt=({children:t,location:e})=>{const n=Tt(),[r]=At(n);for(const o of Wt(t)){let t=0;if(_(o)&&(t=Lt(n.parser,o.props.path,e||r,o.props.nest))[0])return W(o,{match:t})}return null},It=t=>{const{to:e,href:n=e}=t,[,_]=At(Tt()),r=vt((()=>_(e||n,t)));return nt((()=>{r()}),[]),null};var qt=Symbol.for("preact-signals");function Bt(){if(Gt>1)Gt--;else{for(var t,e=!1;void 0!==zt;){var n=zt;for(zt=void 0,Jt++;void 0!==n;){var _=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&te(n))try{n.c()}catch(r){e||(t=r,e=!0)}n=_}}if(Jt=0,Gt--,e)throw t}}var Kt,Vt=void 0,zt=void 0,Gt=0,Jt=0,Qt=0;function Xt(t){if(void 0!==Vt){var e=t.n;if(void 0===e||e.t!==Vt)return e={i:0,S:t,p:Vt.s,n:void 0,t:Vt,e:void 0,x:void 0,r:e},void 0!==Vt.s&&(Vt.s.n=e),Vt.s=e,t.n=e,32&Vt.f&&t.S(e),e;if(-1===e.i)return e.i=0,void 0!==e.n&&(e.n.p=e.p,void 0!==e.p&&(e.p.n=e.n),e.p=Vt.s,e.n=void 0,Vt.s.n=e,Vt.s=e),e}}function Yt(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function Zt(t){return new Yt(t)}function te(t){for(var e=t.s;void 0!==e;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function ee(t){for(var e=t.s;void 0!==e;e=e.n){var n=e.S.n;if(void 0!==n&&(e.r=n),e.S.n=e,e.i=-1,void 0===e.n){t.s=e;break}}}function ne(t){for(var e=t.s,n=void 0;void 0!==e;){var _=e.p;-1===e.i?(e.S.U(e),void 0!==_&&(_.n=e.n),void 0!==e.n&&(e.n.p=_)):n=e,e.S.n=e.r,void 0!==e.r&&(e.r=void 0),e=_}t.s=n}function _e(t){Yt.call(this,void 0),this.x=t,this.s=void 0,this.g=Qt-1,this.f=4}function re(t){var e=t.u;if(t.u=void 0,"function"==typeof e){Gt++;var n=Vt;Vt=void 0;try{e()}catch(_){throw t.f&=-2,t.f|=8,oe(t),_}finally{Vt=n,Bt()}}}function oe(t){for(var e=t.s;void 0!==e;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,re(t)}function ie(t){if(Vt!==this)throw Error("Out-of-order effect");ne(this),Vt=t,this.f&=-2,8&this.f&&oe(this),Bt()}function se(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function ue(t){var e=new se(t);try{e.c()}catch(n){throw e.d(),n}return e.d.bind(e)}function le(t,n){e[t]=n.bind(null,e[t]||(()=>{}))}function fe(t){Kt&&Kt(),Kt=t&&t.S()}function ae(t){var e=this,n=t.data,r=(t=>rt((()=>Zt(t)),[]))(n);r.value=n;var o=rt((()=>{for(var t=e.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return e.__$u.c=()=>{var t;_(o.peek())||3!==(null==(t=e.base)?void 0:t.nodeType)?(e.__$f|=1,e.setState({})):e.base.data=o.peek()},new _e((()=>{var t=r.value.value;return 0===t?0:!0===t?"":t||""}))}),[]);return o.value}function ce(t,e,n,_){var r=e in t&&void 0===t.ownerSVGElement,o=Zt(n);return{o(t,e){o.value=t,_=e},d:ue((()=>{var n=o.value.value;_[e]!==n&&(_[e]=n,r?t[e]=n:n?t.setAttribute(e,n):t.removeAttribute(e))}))}}Yt.prototype.brand=qt,Yt.prototype.h=()=>!0,Yt.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},Yt.prototype.U=function(t){if(void 0!==this.t){var e=t.e,n=t.x;void 0!==e&&(e.x=n,t.e=void 0),void 0!==n&&(n.e=e,t.x=void 0),t===this.t&&(this.t=n)}},Yt.prototype.subscribe=function(t){var e=this;return ue((()=>{var n=e.value,_=Vt;Vt=void 0;try{t(n)}finally{Vt=_}}))},Yt.prototype.valueOf=function(){return this.value},Yt.prototype.toString=function(){return this.value+""},Yt.prototype.toJSON=function(){return this.value},Yt.prototype.peek=function(){var t=Vt;Vt=void 0;try{return this.value}finally{Vt=t}},Object.defineProperty(Yt.prototype,"value",{get(){var t=Xt(this);return void 0!==t&&(t.i=this.i),this.v},set(t){if(t!==this.v){if(Jt>100)throw Error("Cycle detected");this.v=t,this.i++,Qt++,Gt++;try{for(var e=this.t;void 0!==e;e=e.x)e.t.N()}finally{Bt()}}}}),(_e.prototype=new Yt).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===Qt)return!0;if(this.g=Qt,this.f|=1,this.i>0&&!te(this))return this.f&=-2,!0;var t=Vt;try{ee(this),Vt=this;var e=this.x();(16&this.f||this.v!==e||0===this.i)&&(this.v=e,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return Vt=t,ne(this),this.f&=-2,!0},_e.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var e=this.s;void 0!==e;e=e.n)e.S.S(e)}Yt.prototype.S.call(this,t)},_e.prototype.U=function(t){if(void 0!==this.t&&(Yt.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var e=this.s;void 0!==e;e=e.n)e.S.U(e)}},_e.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},Object.defineProperty(_e.prototype,"value",{get(){if(1&this.f)throw Error("Cycle detected");var t=Xt(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),se.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var e=this.x();"function"==typeof e&&(this.u=e)}finally{t()}},se.prototype.S=function(){if(1&this.f)throw Error("Cycle detected");this.f|=1,this.f&=-9,re(this),ee(this),Gt++;var t=Vt;return Vt=this,ie.bind(this,t)},se.prototype.N=function(){2&this.f||(this.f|=2,this.o=zt,zt=this)},se.prototype.d=function(){this.f|=8,1&this.f||oe(this)},ae.displayName="_st",Object.defineProperties(Yt.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:ae},props:{configurable:!0,get(){return{data:this}}},__b:{configurable:!0,value:1}}),le("__b",((t,e)=>{if("string"==typeof e.type){var n,_=e.props;for(var r in _)if("children"!==r){var o=_[r];o instanceof Yt&&(n||(e.__np=n={}),n[r]=o,_[r]=o.peek())}}t(e)})),le("__r",(function(t,e){fe();var n,_,r=e.__c;r&&(r.__$f&=-2,void 0===(n=r.__$u)&&(r.__$u=(ue((function(){_=this})),_.c=()=>{r.__$f|=1,r.setState({})},n=_))),fe(n),t(e)})),le("__e",((t,e,n,_)=>{fe(),t(e,n,_)})),le("diffed",((t,e)=>{var n;if(fe(),"string"==typeof e.type&&(n=e.__e)){var _=e.__np,r=e.props;if(_){var o=n.U;if(o)for(var i in o){var s=o[i];void 0===s||i in _||(s.d(),o[i]=void 0)}else n.U=o={};for(var u in _){var l=o[u],f=_[u];void 0===l?(l=ce(n,u,f,r),o[u]=l):l.o(f,r)}}}t(e)})),le("unmount",((t,e)=>{if("string"==typeof e.type){var n=e.__e;if(n){var _=n.U;if(_)for(var r in n.U=void 0,_){var o=_[r];o&&o.d()}}}else{var i=e.__c;if(i){var s=i.__$u;s&&(i.__$u=void 0,s.d())}}t(e)})),le("__h",((t,e,n,_)=>{(3>_||9===_)&&(e.__$f|=2),t(e,n,_)})),S.prototype.shouldComponentUpdate=function(t,e){var n=this.__$u;if(!(n&&void 0!==n.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var _ in e)return!0;for(var r in t)if("__source"!==r&&t[r]!==this.props[r])return!0;for(var o in this.props)if(!(o in t))return!0;return!1};var he=0;function pe(t,n,_,r,o,i){n||(n={});var s,u,l=n;"ref"in n&&(s=n.ref,delete n.ref);var f={type:t,props:l,key:_,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--he,__i:-1,__u:0,__source:o,__self:i};if("function"==typeof t&&(s=t.defaultProps))for(u in s)void 0===l[u]&&(l[u]=s[u]);return e.vnode&&e.vnode(f),f}export{R as B,j as G,Rt as L,It as R,jt as S,Mt as a,w as b,Zt as d,S as k,k as m,pe as u};
//# sourceMappingURL=lib-BdbWX1uf.js.map
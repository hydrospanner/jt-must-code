(self.webpackChunkjt_must_code=self.webpackChunkjt_must_code||[]).push([[678],{9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7606:function(e,t,r){"use strict";r.d(t,{G:function(){return g}});var n=r(4694),o=r(5697),a=r.n(o),l=r(7294);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function p(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=m(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[o]=a,e}),{})}var b=!1;try{b=!0}catch(w){}function y(e){return e&&"object"===i(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===i(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function g(e){var t=e.forwardedRef,r=f(e,["forwardedRef"]),o=r.icon,a=r.mask,l=r.symbol,i=r.className,s=r.title,m=r.titleId,p=y(o),w=h("classes",[].concat(d(function(e){var t,r=e.spin,n=e.pulse,o=e.fixedWidth,a=e.inverse,l=e.border,i=e.listItem,s=e.flip,u=e.size,f=e.rotation,d=e.pull,m=(c(t={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":a,"fa-border":l,"fa-li":i,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(u),null!=u),c(t,"fa-rotate-".concat(f),null!=f&&0!==f),c(t,"fa-pull-".concat(d),null!=d),c(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(m).map((function(e){return m[e]?e:null})).filter((function(e){return e}))}(r)),d(i.split(" ")))),j=h("transform","string"==typeof r.transform?n.Qc.transform(r.transform):r.transform),O=h("mask",y(a)),E=(0,n.qv)(p,u({},w,{},j,{},O,{symbol:l,title:s,titleId:m}));if(!E)return function(){var e;!b&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var x=E.abstract,k={ref:t};return Object.keys(r).forEach((function(e){g.defaultProps.hasOwnProperty(e)||(k[e]=r[e])})),v(x[0],k)}g.displayName="FontAwesomeIcon",g.propTypes={border:a().bool,className:a().string,mask:a().oneOfType([a().object,a().array,a().string]),fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf(["horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),size:a().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},g.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var v=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),a=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=p(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[m(t)]=n}return e}),{attrs:{}}),l=n.style,i=void 0===l?{}:l,c=f(n,["style"]);return a.attrs.style=u({},a.attrs.style,{},i),t.apply(void 0,[r.tag,u({},a.attrs,{},c)].concat(d(o)))}.bind(null,l.createElement)},2837:function(e,t,r){"use strict";var n=r(5318);t.__esModule=!0,t.default=void 0;var o=n(r(1506)),a=n(r(5354)),l=n(r(9713)),i=n(r(7294)),c=n(r(5697)),s=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t=e.call.apply(e,[this].concat(n))||this,(0,l.default)((0,o.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,a.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},r.toggleTheme=function(e){window.__setPreferredTheme(e)},r.render=function(){return i.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(i.default.Component);s.propTypes={children:c.default.func.isRequired};var u=s;t.default=u},7441:function(e,t,r){"use strict";var n=r(5318)(r(2837));t.L=n.default},5428:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(7294),o=r(5444),a=r(2359),l=r(7606),i=r(1721),c=r(7441),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){return n.createElement(c.L,null,(function(e){var t=e.theme,r=e.toggleTheme;return n.createElement("div",null,n.createElement("input",{id:"dark_mode_toggle",type:"checkbox",className:"checkbox",onClick:function(e){return r(e.target.checked?"dark":"light")},checked:"dark"===t,readOnly:!0})," ",n.createElement("label",{htmlFor:"dark_mode_toggle",className:"switch"}))}))},t}(n.Component),u=s,f=function(){var e,t,i=(0,o.useStaticQuery)("1804815106"),c=null===(e=i.site.siteMetadata)||void 0===e?void 0:e.author,s=null===(t=i.site.siteMetadata)||void 0===t?void 0:t.social;return n.createElement("div",{className:"bio"},n.createElement(a.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/john.jpg",width:150,height:150,quality:95,alt:"Profile picture",__imageData:r(4185)}),n.createElement("div",null,n.createElement("p",null,"Written by  ",n.createElement("a",{href:"/jt-must-code/about"},n.createElement("strong",null,c.name))),n.createElement("div",{className:"authorSummary"},(null==c?void 0:c.summary)||null),n.createElement("div",{className:"social"},n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:"https://github.com/"+((null==s?void 0:s.github)||"")},n.createElement(l.G,{icon:["fab","github"],size:"2x"}))),n.createElement("li",null,n.createElement("a",{href:"https://linkedin.com/in/"+((null==s?void 0:s.linkedin)||"")},n.createElement(l.G,{icon:["fab","linkedin"],size:"2x"})))))),n.createElement("div",{className:"theme_column"},n.createElement(u,null)))}},7704:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(5444),a=r(5428),l=r(7198),i=r(3751);t.default=function(e){var t,r=e.data,c=e.location,s=(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",u=r.allMarkdownRemark.nodes;return 0===u.length?n.createElement(l.Z,{location:c,title:s},n.createElement(i.Z,{title:"All posts"}),n.createElement(a.Z,null),n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(l.Z,{location:c,title:s},n.createElement(i.Z,{title:"All posts"}),n.createElement(a.Z,null),n.createElement("ol",{style:{listStyle:"none"}},u.map((function(e){var t=e.frontmatter.title||e.fields.slug;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(o.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))),n.createElement("small",null,e.frontmatter.date)),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},4185:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#181818","images":{"fallback":{"src":"/jt-must-code/static/e38e84cb908d8b54bbc8ead04d26ef77/b5649/john.jpg","srcSet":"/jt-must-code/static/e38e84cb908d8b54bbc8ead04d26ef77/b5649/john.jpg 150w,\\n/jt-must-code/static/e38e84cb908d8b54bbc8ead04d26ef77/0b30a/john.jpg 300w","sizes":"150px"},"sources":[{"srcSet":"/jt-must-code/static/e38e84cb908d8b54bbc8ead04d26ef77/95309/john.avif 150w,\\n/jt-must-code/static/e38e84cb908d8b54bbc8ead04d26ef77/288e4/john.avif 300w","type":"image/avif","sizes":"150px"},{"srcSet":"/jt-must-code/static/e38e84cb908d8b54bbc8ead04d26ef77/7ddcc/john.webp 150w,\\n/jt-must-code/static/e38e84cb908d8b54bbc8ead04d26ef77/dd79f/john.webp 300w","type":"image/webp","sizes":"150px"}]},"width":150,"height":150}')}}]);
//# sourceMappingURL=component---src-pages-index-js-7346b8396f4d82ca1eaf.js.map
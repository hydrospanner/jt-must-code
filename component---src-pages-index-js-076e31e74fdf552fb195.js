"use strict";(self.webpackChunkjt_must_code=self.webpackChunkjt_must_code||[]).push([[678],{6558:function(e,t,l){l.r(t);var n=l(7294),r=l(1597),a=l(3e3),o=l(8678),i=l(262);t.default=function(e){var t,l=e.data,s=e.location,c=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=l.allMarkdownRemark.nodes;return 0===m.length?n.createElement(o.Z,{location:s,title:c},n.createElement(i.Z,{title:"All posts"}),n.createElement(a.Z,null),n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(o.Z,{location:s,title:c},n.createElement(i.Z,{title:"All posts"}),n.createElement(a.Z,null),n.createElement("ol",{style:{listStyle:"none"}},m.map((function(e){var t=e.frontmatter.title||e.fields.slug;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))),n.createElement("small",null,e.frontmatter.date)),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-076e31e74fdf552fb195.js.map
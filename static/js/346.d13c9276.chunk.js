"use strict";(self.webpackChunkspotify_batch_unfollow_app=self.webpackChunkspotify_batch_unfollow_app||[]).push([[346],{7818:function(e,l,n){n.r(l),n.d(l,{default:function(){return U}});var o,s=n(2982),t=n(885),i=n(2791),r=n(6647),a=n(1413),c=n(7409),d=n(374),u=n(1694),f=n.n(u),v=n.p+"static/media/default.b315bfa5ca1ef960e55f.png",w=n.p+"static/media/spotify-logo.0c4ae91bae23217d39c9.png",p=n(184),h=function(e){var l,n,o=e.follow,s=e.status,t=e.onClick,i=e.description;return(0,p.jsxs)("div",{className:f()("follow",s,{clickable:!!t}),onClick:function(e){if(!e.target.classList.contains("follow-link")&&!e.target.classList.contains("spotify-link-logo"))return null===t||void 0===t?void 0:t()},children:[(0,p.jsx)("div",{className:"avatar",children:(0,p.jsx)("img",{src:null!==(l=null===(n=o.images[0])||void 0===n?void 0:n.url)&&void 0!==l?l:v,alt:"".concat(o.name," Avatar")})}),(0,p.jsxs)("h3",{className:"name",children:[o.name," (",r.NC[o.type],")"]}),(0,p.jsxs)("a",{className:"follow-link",href:o.external_urls.spotify,target:"_blank",rel:"noopener noreferrer",children:["View on ",(0,p.jsx)("img",{className:"spotify-link-logo",src:w,alt:"Spotify Logo"})]}),i&&(0,p.jsx)("div",{className:"description",children:i})]})},m=function(e){var l=e.value,n=e.placeholder,o=e.onChange;return(0,p.jsx)("input",{type:"text",placeholder:n,value:l,onChange:function(e){return o(e.target.value)}})},g=n(8699),x=n(9632),j=function(e){var l=e.options,n=e.value,o=e.disabled,s=void 0!==o&&o,t=e.onChange;return(0,p.jsx)(g.ZP,{styles:{option:function(e,l){return(0,a.Z)((0,a.Z)({},e),{},{background:l.isFocused?"#282828":"#121212",color:"#d8f3e0"})},control:function(e){return(0,a.Z)((0,a.Z)({},e),{},{border:"1px solid #d8f3e0",background:"#121212",borderRadius:"0"})},menu:function(e){return(0,a.Z)((0,a.Z)({},e),{},{background:"#121212",border:"1px solid #d8f3e0"})},singleValue:function(e){return(0,a.Z)((0,a.Z)({},e),{},{color:"#d8f3e0"})},valueContainer:function(e){return(0,a.Z)({},e)}},captureMenuScroll:!1,isDisabled:s,value:l.find((function(e){return e.id===n})),onChange:function(e){return function(e){return"object"===typeof e&&!(0,x.l)(e)&&"id"in e&&"label"in e}(e)&&(null===t||void 0===t?void 0:t(e.id))},options:l})},N=n(9963),Z=n(484);!function(e){e[e.FIFTY=50]="FIFTY",e[e.TWENTY_FIVE=25]="TWENTY_FIVE",e[e.TEN=10]="TEN"}(o||(o={}));var y,b=[{label:o.TEN,id:o.TEN},{label:o.TWENTY_FIVE,id:o.TWENTY_FIVE},{label:o.FIFTY,id:o.FIFTY}],F=function(e){var l=e.followTypes,n=e.setFollowTypes,t=e.viewSize,a=e.setViewSize,c=e.filterString,d=e.setFilterString,u=(0,i.useContext)(N.Z).permissions;return(0,p.jsxs)("div",{className:"follow-list-options",children:[(0,p.jsx)("h2",{children:"Options"}),(0,p.jsx)("div",{className:"type-option",children:r.hc.filter((function(e){var l=e.permission;return u.has(l)})).map((function(e){return(0,p.jsxs)("label",{children:[(0,p.jsx)(Z.Z,{checked:l.includes(e.id),disabled:l.includes(e.id)&&1===l.length,onChange:function(o){return o?null===n||void 0===n?void 0:n.apply(void 0,(0,s.Z)(new Set([].concat((0,s.Z)(l),[e.id])))):null===n||void 0===n?void 0:n.apply(void 0,(0,s.Z)(new Set(l.filter((function(l){return l!==e.id})))))}}),(0,p.jsx)("span",{children:e.label})]},e.id)}))}),(0,p.jsx)("hr",{}),(0,x.l)(c)||(0,x.l)(d)?null:(0,p.jsxs)("div",{className:"filter-option",children:[(0,p.jsx)("label",{children:"Search:"}),(0,p.jsx)(m,{value:c,onChange:d})]}),(0,p.jsxs)("div",{className:"view-option",children:[(0,p.jsx)("label",{children:"Results per page:"}),(0,p.jsx)(j,{value:t,onChange:a,options:b})]}),(0,p.jsx)("button",{className:"warning",onClick:function(){null===d||void 0===d||d(""),a(o.TEN)},children:"Reset"})]})},T=function(e){var l=e.followTypes,n=e.follows,s=e.unfollowing,r=e.completed,a=e.header,c=(0,i.useState)(o.TEN),u=(0,t.Z)(c,2),f=u[0],v=u[1],w=(0,i.useState)(0),m=(0,t.Z)(w,2),g=m[0],x=m[1];(0,i.useEffect)((function(){x(0)}),[f]),(0,i.useEffect)((function(){r&&x(0)}),[r]);var j=n.filter((function(e){return"failed"===e.status})),N=r&&j.length>0?j:n;return(0,p.jsx)("div",{className:"unfollow-follows-list",children:(0,p.jsxs)("div",{className:"results-table",children:[(0,p.jsx)("div",{className:"results-table-options",children:(0,p.jsx)(F,{followTypes:l,viewSize:f,setViewSize:v})}),(0,p.jsxs)("div",{className:"results-view",children:[a,s&&(0,p.jsx)(d.Z,{}),(0,p.jsx)("div",{className:"follow-list",children:N.slice(g*f,(g+1)*f).map((function(e){return(0,p.jsx)(h,{status:e.status,follow:e.follow,description:(l=e,"failed"===l.status?"Could not unfollow. Error: ".concat(e.error.message):void 0)},e.follow.id);var l}))}),(0,p.jsxs)("div",{className:"pagination",children:[(0,p.jsx)("button",{className:"previous",onClick:function(){return x((function(e){return e-1}))},disabled:0===g,children:"Previous"}),(0,p.jsx)("button",{className:"next",onClick:function(){return x((function(e){return e+1}))},disabled:(g+1)*f>=n.length-1,children:"Next"})]})]})]})})},S=function(e){return{follow:e,status:"selected"}},C=function(e){return{follow:e,status:"succeeded"}},E=function(e){return(0,a.Z)((0,a.Z)({},e),{},{status:"failed"})},k=function(e){var l=e.followTypes,n=e.follows,o=e.onComplete,a=(0,i.useState)([]),d=(0,t.Z)(a,2),u=d[0],f=d[1],v=(0,i.useState)([]),w=(0,t.Z)(v,2),h=w[0],m=w[1],g=(0,i.useCallback)((function(e){(0,r.mS)(e)?m((function(l){return[].concat((0,s.Z)(l),(0,s.Z)(e.succeeded))})):f((function(l){return[].concat((0,s.Z)(l),(0,s.Z)(e.failed.map((function(l){return{follow:l,error:e.error}}))))}))}),[m,f]),x=(0,c.gX)(n,g),j=(0,t.Z)(x,3),N=j[0],Z=j[1],y=j[2];return(0,i.useEffect)((function(){var e=u.length+h.length;0===y.length&&!Z&&N&&e===n.length&&o()}),[y,Z,N,o,u,h,n]),(0,p.jsx)("div",{className:"unfollow-all-list",children:(0,p.jsx)(T,{followTypes:l,follows:[].concat((0,s.Z)(u.map(E)),(0,s.Z)(n.filter((function(e){return!u.find((function(l){return l.follow.id===e.id}))})).filter((function(e){return-1===h.indexOf(e)})).map(S)),(0,s.Z)(h.map(C))),unfollowing:0===y.length&&Z,completed:0===y.length&&!Z&&!!N,header:(0,p.jsxs)(p.Fragment,{children:[y.length>0&&(0,p.jsxs)("div",{className:"error loading-message",children:["Error unfollowing ",r.Md.apply(void 0,[r.ev].concat((0,s.Z)(l))),":",(0,p.jsx)("ul",{children:y.map((function(e,l){return(0,p.jsx)("li",{children:e.message},l)}))})]}),0===y.length&&Z&&(0,p.jsxs)("div",{className:"warning loading-message",children:["Unfollowing ",r.Md.apply(void 0,[r.ev].concat((0,s.Z)(l)))]}),0===y.length&&!Z&&N.length>0&&0===u.length&&(0,p.jsxs)("div",{className:"success loading-message",children:["Unfollowed all ",r.Md.apply(void 0,[r.ev].concat((0,s.Z)(l))),"!"]}),0===y.length&&!Z&&N.length>0&&u.length>0&&(0,p.jsxs)("div",{className:"error loading-message",children:["Could not unfollow some ",r.Md.apply(void 0,[r.ev].concat((0,s.Z)(l))),"! Failed"," ",r.Md.apply(void 0,[r.ev].concat((0,s.Z)(l)))," listed below"]})]})})})},M=function(e){var l=e.followTypes,n=e.follows,o=e.restartUnfollow,s=(0,i.useState)(!1),r=(0,t.Z)(s,2),a=r[0],c=r[1];return(0,p.jsxs)("div",{className:"artists-remove",children:[(0,p.jsx)(k,{followTypes:l,follows:n,onComplete:function(){return c(!0)}}),a&&(0,p.jsx)("div",{className:"restart-unfollow",children:(0,p.jsx)("button",{className:"info",disabled:!a,onClick:o,children:"Unfollow more artists"})})]})},R=function(){return(0,p.jsxs)("div",{className:"list-legend",children:[(0,p.jsxs)("div",{className:"item normal",children:[(0,p.jsx)("div",{className:"color"}),(0,p.jsx)("div",{className:"text",children:"Not Selected"})]}),(0,p.jsxs)("div",{className:"item selected",children:[(0,p.jsx)("div",{className:"color"}),(0,p.jsx)("div",{className:"text",children:"Selected"})]})]})},_=function(e){var l=e.followTypes,n=e.follows,a=e.selectedFollows,c=e.loadingResults,u=e.setFollowTypes,f=e.addFollow,v=e.removeFollow,w=(0,i.useState)(o.TEN),m=(0,t.Z)(w,2),g=m[0],x=m[1],j=(0,i.useState)(""),N=(0,t.Z)(j,2),Z=N[0],y=N[1],b=(0,i.useState)(0),T=(0,t.Z)(b,2),S=T[0],C=T[1];(0,i.useEffect)((function(){C(0)}),[g,Z]);var E=Z.toLowerCase();return(0,p.jsx)("div",{className:"all-follows-list",children:(0,p.jsxs)("div",{className:"results-table",children:[(0,p.jsx)("div",{className:"results-table-options",children:(0,p.jsx)(F,{followTypes:l,setFollowTypes:u,viewSize:g,setViewSize:x,filterString:Z,setFilterString:y})}),(0,p.jsxs)("div",{className:"results-view",children:[(0,p.jsxs)("h2",{className:"list-title",children:["Select ",r.Md.apply(void 0,[r.ev].concat((0,s.Z)(l)))," to unfollow"]}),(0,p.jsx)(R,{}),(0,p.jsxs)("div",{className:"artist-list",children:[0===n.length&&(0,p.jsxs)("div",{className:"error loading-message",children:["No followed ",r.Md.apply(void 0,[r.ev].concat((0,s.Z)(l)))," found"]}),n.filter((function(e){return""===E||e.name.toLowerCase().includes(E)})).slice(S*g,(S+1)*g).map((function(e){var l=-1!==a.indexOf(e);return(0,p.jsx)(h,{status:l?"selected":void 0,follow:e,onClick:function(){return l?v(e):f(e)}},e.id)}))]}),c&&(0,p.jsx)(d.Z,{}),(0,p.jsxs)("div",{className:"pagination",children:[(0,p.jsx)("button",{className:"previous",onClick:function(){return C((function(e){return e-1}))},disabled:0===S,children:"Previous"}),(0,p.jsx)("button",{className:"next",onClick:function(){return C((function(e){return e+1}))},disabled:(S+1)*g>=n.length-1,children:"Next"})]})]})]})})},V=function(e){var l=e.followTypes,n=e.setFollowTypes,o=e.selectedFollows,i=e.addFollowsForRemoval,a=e.removeFollowsFromRemoval,u=(0,c.$s)(l,i),f=(0,t.Z)(u,3),v=f[0],w=f[1],h=f[2];return(0,p.jsxs)("div",{className:"all-follows",children:[h.length>0&&(0,p.jsxs)("div",{className:"error loading-message",children:["Error retrieving followed ",r.Md.apply(void 0,[r.ev].concat((0,s.Z)(l))),":",(0,p.jsx)("ul",{children:h.map((function(e,l){return(0,p.jsx)("li",{children:e.message},l)}))})]}),0===h.length&&w&&(0,p.jsxs)("div",{className:"warning loading-message",children:["Retrieving followed ",r.Md.apply(void 0,[r.ev].concat((0,s.Z)(l)))]}),0===h.length&&w&&0===v.length&&(0,p.jsx)(d.Z,{}),0===h.length&&(0,p.jsx)(_,{followTypes:l,setFollowTypes:n,loadingResults:0===h.length&&w,follows:v,selectedFollows:o,addFollow:function(e){i(e)},removeFollow:function(e){a(e)}})]})},L=function(e){var l=e.followTypes,n=e.setFollowTypes,o=e.selectedFollows,t=e.addFollows,i=e.removeFollows,a=e.startUnfollow;return(0,p.jsxs)("div",{className:"follows-select",children:[(0,p.jsx)(V,{followTypes:l,setFollowTypes:n,selectedFollows:o,addFollowsForRemoval:t,removeFollowsFromRemoval:i}),(0,p.jsx)("div",{className:"start-unfollow",children:(0,p.jsxs)("button",{className:f()("error",{disabled:0===o.length}),disabled:0===o.length,onClick:a,children:["Unfollow ",o.length," ",r.Md.apply(void 0,[r.ev].concat((0,s.Z)(l)))]})})]})};!function(e){e.SELECT="select",e.REMOVE="remove"}(y||(y={}));var U=function(){var e=(0,i.useContext)(N.Z).permissions,l=(0,i.useState)(new Set((0,s.Z)(e).map((function(e){return r.hc.find((function(l){return l.permission===e}))})).map((function(e){return null===e||void 0===e?void 0:e.id})))),n=(0,t.Z)(l,2),o=n[0],a=n[1],c=(0,i.useState)(y.SELECT),d=(0,t.Z)(c,2),u=d[0],f=d[1],v=(0,i.useState)(new Set),w=(0,t.Z)(v,2),h=w[0],m=w[1],g=(0,i.useMemo)((function(){return(0,s.Z)(o)}),[o]);console.log(g),(0,i.useEffect)((function(){m((function(e){return(0,s.Z)(e).filter((function(e){return!r.JC.apply(void 0,(0,s.Z)(o)).includes(e.type)})).forEach((function(l){return e.delete(l)})),new Set(e)}))}),[o,m]);var x=(0,i.useCallback)((function(){for(var e=arguments.length,l=new Array(e),n=0;n<e;n++)l[n]=arguments[n];console.log("Updating",l),a(new Set(l))}),[a]),j=(0,i.useCallback)((function(){for(var e=arguments.length,l=new Array(e),n=0;n<e;n++)l[n]=arguments[n];return m((function(e){return l.forEach((function(l){return e.add(l)})),new Set(e)}))}),[m]),Z=(0,i.useCallback)((function(){for(var e=arguments.length,l=new Array(e),n=0;n<e;n++)l[n]=arguments[n];return m((function(e){return l.forEach((function(l){return e.delete(l)})),new Set(e)}))}),[m]);return(0,p.jsx)("div",{className:"unfollow-follows",children:u===y.SELECT?(0,p.jsx)(L,{followTypes:g,setFollowTypes:x,selectedFollows:(0,s.Z)(h),addFollows:j,removeFollows:Z,startUnfollow:function(){return f(y.REMOVE)}}):(0,p.jsx)(M,{followTypes:g,follows:(0,s.Z)(h),restartUnfollow:function(){m(new Set),f(y.SELECT)}})})}}}]);
//# sourceMappingURL=346.d13c9276.chunk.js.map
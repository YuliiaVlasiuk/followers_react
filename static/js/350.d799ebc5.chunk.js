"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[350],{350:function(n,t,e){e.r(t),e.d(t,{Users:function(){return J},default:function(){return L}});var o,r,i,a,p,s,x,l,g,c,f,u,d,h,A=e(861),m=e(439),b=e(757),w=e.n(b),Z=e(791),S=e(168),E=e(444),F=e(87),v=E.ZP.img(o||(o=(0,S.Z)(["\nposition:absolute;\ntop: 20px;\nleft: 20px;\n"]))),B=(E.ZP.p(r||(r=(0,S.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n  margin-bottom: 0;\n"]))),(0,E.ZP)(F.rU)(i||(i=(0,S.Z)(["\n  text-decoration: none;\n"]))),E.ZP.li(a||(a=(0,S.Z)(["\nposition:relative;\nlist-style-type: none;\nwidth: 380px;\nheight: 460px;\nbackground: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);\nborder-radius:20px;\n\n  &:hover {\n    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);\n  }\n  \n"])))),j=E.ZP.img(p||(p=(0,S.Z)(["\npadding: 28px 36px 18px 36px;\n"]))),k=E.ZP.div(s||(s=(0,S.Z)(["\nheight: 8px;\nbackground: #EBD8FF;\nbox-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;\n"]))),y=E.ZP.img(x||(x=(0,S.Z)(["\nposition: absolute;\ntop:178px;\nleft: 150px;\nwidth: 80px;\nheight: 80px;\nborder-radius: 50%;\nborder: 8px solid #EBD8FF;\nbox-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;\n"]))),Y=E.ZP.p(l||(l=(0,S.Z)(["\ntext-align:center;\npadding-top: 62px;\nmargin: 0;\nfont-family: 'Montserrat';\nfont-style: normal;\nfont-weight: 500;\nfont-size: 20px;\nline-height: 24px;\ntext-transform: uppercase;\ncolor: #EBD8FF;\n"]))),D=E.ZP.p(g||(g=(0,S.Z)(["\ntext-align:center;\npadding-top: 16px;\nmargin: 0;\nfont-family: 'Montserrat';\nfont-style: normal;\nfont-weight: 500;\nfont-size: 20px;\nline-height: 24px;\ntext-transform: uppercase;\ncolor: #EBD8FF;\n"]))),N=E.ZP.ul(c||(c=(0,S.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\ngap: 20px;\n"]))),P=E.ZP.div(f||(f=(0,S.Z)(["\nmargin: 0 92px 0 92px;\npadding-top: 26px;\n"]))),C=E.ZP.button(u||(u=(0,S.Z)(["\nwidth: 100%;\npadding: 14px 28px 14px 28px;\nbackground: #EBD8FF;\nbox-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\nborder-radius: 10.3108px;\nfont-family: 'Montserrat';\nfont-style: normal;\nfont-weight: 600;\nfont-size: 18px;\nline-height: 22px;\ntext-transform: uppercase;\ncolor: #373737;\n"]))),Q=E.ZP.button(d||(d=(0,S.Z)(["\nwidth: 100%;\npadding: 14px 28px 14px 28px;\nbackground: #EBD8FF;\nbox-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\nborder-radius: 10.3108px;\nfont-family: 'Montserrat';\nfont-style: normal;\nfont-weight: 600;\nfont-size: 18px;\nline-height: 22px;\ntext-transform: uppercase;\nbackground: #5CD3A8;\n"]))),I=E.ZP.button(h||(h=(0,S.Z)(["\nwidth: 300px;\nbackground: #EBD8FF;\nbox-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\nborder-radius: 10.3108px;\nfont-family: 'Montserrat';\nfont-style: normal;\nfont-weight: 600;\nfont-size: 18px;\nline-height: 22px;\ntext-transform: uppercase;\ncolor: #373737;\n\ntext-align: center;\ndisplay: flex;\njustify-content: center;\nmargin-left: 480px;\nmargin-bottom:50px; \n"]))),O=e(243),q=e(433),T=e(311),R=e(338),U=e(184),z=function(n){var t=n.tweet,e=(0,Z.useState)(function(n){var t=JSON.parse(localStorage.getItem("followers"));return!(!t||!t.includes(n))}(t.id)),o=(0,m.Z)(e,2),r=o[0],i=o[1],a=(0,Z.useState)(function(n,t){return t?n+1:n}(t.followers,r)),p=(0,m.Z)(a,2),s=p[0],x=p[1],l=s.toLocaleString();console.log(s);var g=function(){i(!r),x(r?function(n){return n-1}:function(n){return n+1});var n=t.id,e=JSON.parse(localStorage.getItem("followers"));if(e)if(e.includes(n)){var o=e.filter((function(t){return t!==n}));localStorage.setItem("followers",JSON.stringify(o))}else localStorage.setItem("followers",JSON.stringify([].concat((0,q.Z)(e),[n])));else localStorage.setItem("followers",JSON.stringify([n]))};return(0,U.jsxs)(B,{children:[(0,U.jsx)(v,{src:R,alt:"logo"}),(0,U.jsx)(j,{src:T,alt:"picture_question"}),(0,U.jsx)(k,{}),(0,U.jsx)(y,{src:t.avatar,alt:"avatar"}),(0,U.jsxs)(Y,{children:[t.tweets," tweets"]}),(0,U.jsxs)(D,{children:[l," Followers"]}),(0,U.jsxs)(P,{children:[!r&&(0,U.jsx)(C,{type:"button",onClick:g,children:"follow"}),r&&(0,U.jsx)(Q,{type:"button",onClick:g,children:"following"})]})]})},J=function(){var n=(0,Z.useState)([]),t=(0,m.Z)(n,2),e=t[0],o=t[1],r=(0,Z.useState)(!1),i=(0,m.Z)(r,2),a=i[0],p=i[1],s=(0,Z.useState)(3),x=(0,m.Z)(s,2),l=x[0],g=x[1];function c(){return c=(0,A.Z)(w().mark((function n(t){var e;return w().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,O.Z.get(" https://6446ed517bb84f5a3e3532bf.mockapi.io/tweets?page=1&limit=".concat(t));case 3:e=n.sent,o(e.data),p(!0),t>10&&p(!1),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])}))),c.apply(this,arguments)}return(0,Z.useEffect)((function(){!function(n){c.apply(this,arguments)}(l)}),[l]),(0,U.jsxs)("main",{children:[(0,U.jsx)(N,{children:e.map((function(n){return(0,U.jsx)(z,{tweet:n},n.id)}))}),a&&e.length>0&&(0,U.jsx)(I,{width:"300px",onClick:function(){g((function(n){return n+3}))},children:"Load more"})]})},L=J},338:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg=="},311:function(n,t,e){n.exports=e.p+"static/media/picture.38ea3189a2c780f4bbbf.png"}}]);
//# sourceMappingURL=350.d799ebc5.chunk.js.map
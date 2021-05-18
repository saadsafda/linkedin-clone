(this["webpackJsonplinkedin-clone"]=this["webpackJsonplinkedin-clone"]||[]).push([[0],{110:function(n,e,t){"use strict";t.r(e);var i=t(2),a=t.n(i),r=t(27),c=t.n(r),o=(t(74),t(18)),s=t(46),d=t(13),l=t(43),x=t.n(l),b=t(49),j=t(35),p=j.a.initializeApp({apiKey:"AIzaSyBSquQmqEay13-jXRLxSRNtH8ZOAuvymus",authDomain:"linkedin-clone-1a91d.firebaseapp.com",projectId:"linkedin-clone-1a91d",storageBucket:"linkedin-clone-1a91d.appspot.com",messagingSenderId:"912040768414",appId:"1:912040768414:web:4c33fd6945cf3ccf795c8f"}).firestore(),g=j.a.auth(),h=new j.a.auth.GoogleAuthProvider,u=j.a.storage(),O=p,m="SET_USER",f="SET_LOADING_STATUS",v="GET_ARTICLES",w=function(n){return{type:m,user:n}},y=function(n){return{type:f,status:n}};function k(){return function(n){var e;O.collection("articles").orderBy("actor.date","desc").onSnapshot((function(t){e=t.docs.map((function(n){return n.data()})),n(function(n){return{type:v,payload:n}}(e))}))}}t(86);var z,S,A,C,I,L,U,R,N,E,F,T,D,G,M,P,B,W,_,H,J,V,q,X,K,Q,Z,Y,$,nn,en,tn,an,rn,cn,on,sn,dn,ln,xn,bn,jn,pn,gn,hn,un,On,mn,fn,vn,wn,yn,kn,zn,Sn,An,Cn,In,Ln,Un,Rn=t(6),Nn=t(7),En=t(3),Fn=Nn.a.div(z||(z=Object(Rn.a)(["\n  background-color: white;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  left: 0;\n  padding: 0 24px;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: 100;\n"]))),Tn=Nn.a.div(S||(S=Object(Rn.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  min-height: 100%;\n  max-width: 1128px;\n"]))),Dn=Nn.a.span(A||(A=Object(Rn.a)(["\n  margin-right: 8px;\n  font-size: 0px;\n"]))),Gn=Nn.a.div(C||(C=Object(Rn.a)(["\n  opacity: 1;\n  flex-grow: 1;\n  position: relative;\n  & > div {\n    max-width: 280px;\n    input {\n      border: none;\n      box-shadow: none;\n      background-color: #eef3f8;\n      border-radius: 2px;\n      color: rgba(0, 0, 0, 0.9);\n      width: 218px;\n      padding: 0 8px 0 40px;\n      line-height: 1.75;\n      font-weight: 400;\n      font-size: 14px;\n      height: 34px;\n      border-color: #dce6f1;\n      vertical-align: text-top;\n    }\n  }\n"]))),Mn=Nn.a.div(I||(I=Object(Rn.a)(["\n  width: 40px;\n  position: absolute;\n  z-index: 1;\n  top: 10px;\n  left: 2px;\n  border-radius: 0 2px 2px 0;\n  margin: 0;\n  pointer-events: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Pn=Nn.a.nav(L||(L=Object(Rn.a)(["\n  margin-left: auto;\n  display: block;\n  @media (max-width: 768px) {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    background: white;\n    width: 100%;\n  }\n"]))),Bn=Nn.a.ul(U||(U=Object(Rn.a)(['\n  display: flex;\n  flex-wrap: nowrap;\n  list-style-type: none;\n\n  .active {\n    span:after {\n      content: "";\n      transform: scaleX(1);\n      border-bottom: 2px solid var(--white, #fff);\n      bottom: 0;\n      left: 0;\n      position: absolute;\n      transition: transform 0.2s ease-in-out;\n      width: 100%;\n      border-color: rgba(0, 0, 0, 0.9);\n    }\n  }\n']))),Wn=Nn.a.li(R||(R=Object(Rn.a)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  a {\n    align-items: center;\n    background: transparent;\n    display: flex;\n    flex-direction: column;\n    font-size: 12px;\n    font-weight: 400;\n    justify-content: center;\n    line-height: 1.5;\n    min-height: 52px;\n    min-width: 80px;\n    position: relative;\n    text-decoration: none;\n\n    span {\n      color: rgba(0, 0, 0, 0.6);\n      display: flex;\n      align-items: center;\n    }\n\n    @media (max-width: 768px) {\n      min-width: 70px;\n    }\n  }\n\n  &:hover,\n  &:active {\n    a {\n      span {\n        color: rgba(0, 0, 0, 0.9);\n      }\n    }\n  }\n"]))),_n=Nn.a.div(N||(N=Object(Rn.a)(["\n  position: absolute;\n  top: 45px;\n  background: white;\n  border-radius: 0 0 5px 5px;\n  width: 100px;\n  height: 40px;\n  font-size: 16px;\n  transition-duration: 167ms;\n  text-align: center;\n  display: none;\n"]))),Hn=Object(Nn.a)(Wn)(E||(E=Object(Rn.a)(["\n  a > svg {\n    width: 24px;\n    border-radius: 50%;\n  }\n\n  a > img {\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n  }\n\n  span {\n    display: flex;\n    align-items: center;\n  }\n\n  &:hover {\n    "," {\n      align-items: center;\n      display: flex;\n      justify-content: center;\n    }\n  }\n"])),_n),Jn=Object(Nn.a)(Hn)(F||(F=Object(Rn.a)(["\n  border-left: 1px solid rgba(0, 0, 0, 0.08);\n"]))),Vn=Object(o.b)((function(n){return{user:n.userState.user}}),(function(n){return{signOut:function(){return n((function(n){g.signOut().then((function(){n(w(null))})).catch((function(n){return alert(n.message)}))}))}}}))((function(n){return Object(En.jsx)(Fn,{children:Object(En.jsxs)(Tn,{children:[Object(En.jsx)(Dn,{children:Object(En.jsx)("a",{href:"/home",children:Object(En.jsx)("img",{src:"/images/home-logo.svg",alt:""})})}),Object(En.jsxs)(Gn,{children:[Object(En.jsx)("div",{children:Object(En.jsx)("input",{type:"text",placeholder:"Search"})}),Object(En.jsx)(Mn,{children:Object(En.jsx)("img",{src:"/images/search-icon.svg",alt:""})})]}),Object(En.jsx)(Pn,{children:Object(En.jsxs)(Bn,{children:[Object(En.jsx)(Wn,{className:"active",children:Object(En.jsxs)("a",{children:[Object(En.jsx)("img",{src:"/images/nav-home.svg",alt:""}),Object(En.jsx)("span",{children:"Home"})]})}),Object(En.jsx)(Wn,{children:Object(En.jsxs)("a",{children:[Object(En.jsx)("img",{src:"/images/nav-network.svg",alt:""}),Object(En.jsx)("span",{children:"My Network"})]})}),Object(En.jsx)(Wn,{children:Object(En.jsxs)("a",{children:[Object(En.jsx)("img",{src:"/images/nav-jobs.svg",alt:""}),Object(En.jsx)("span",{children:"Jobs"})]})}),Object(En.jsx)(Wn,{children:Object(En.jsxs)("a",{children:[Object(En.jsx)("img",{src:"/images/nav-messaging.svg",alt:""}),Object(En.jsx)("span",{children:"Messaging"})]})}),Object(En.jsx)(Wn,{children:Object(En.jsxs)("a",{children:[Object(En.jsx)("img",{src:"/images/nav-notifications.svg",alt:""}),Object(En.jsx)("span",{children:"Notifications"})]})}),Object(En.jsxs)(Hn,{children:[Object(En.jsxs)("a",{children:[n.user&&n.user.photoURL?Object(En.jsx)("img",{src:n.user.photoURL,alt:""}):Object(En.jsx)("img",{src:"/images/user.svg",alt:""}),Object(En.jsxs)("span",{children:["Me",Object(En.jsx)("img",{src:"/images/down-icon.svg",alt:""})]})]}),Object(En.jsx)(_n,{onClick:function(){return n.signOut()},children:Object(En.jsx)("a",{children:"Sign Out"})})]}),Object(En.jsx)(Jn,{children:Object(En.jsxs)("a",{children:[Object(En.jsx)("img",{src:"/images/nav-work.svg",alt:""}),Object(En.jsxs)("span",{children:["Work",Object(En.jsx)("img",{src:"/images/down-icon.svg",alt:""})]})]})})]})})]})})})),qn=Nn.a.div(T||(T=Object(Rn.a)(["\n  grid-area: leftside;\n"]))),Xn=Nn.a.div(D||(D=Object(Rn.a)(["\n  text-align: center;\n  overflow: hidden;\n  margin-bottom: 8px;\n  background-color: #fff;\n  border-radius: 5px;\n  transition: box-shadow 83ms;\n  position: relative;\n  border: none;\n  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n"]))),Kn=Nn.a.div(G||(G=Object(Rn.a)(["\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  padding: 12px 12px 16px;\n  word-wrap: break-word;\n  word-break: break-word;\n"]))),Qn=Nn.a.div(M||(M=Object(Rn.a)(['\n  background: url("/images/card-bg.svg");\n  background-position: center;\n  background-size: 462px;\n  height: 54px;\n  margin: -12px -12px 0;\n']))),Zn=Nn.a.div(P||(P=Object(Rn.a)(['\n  box-shadow: none;\n  background-image: url("/images/photo.svg");\n  width: 72px;\n  height: 72px;\n  box-sizing: border-box;\n  background-clip: content-box;\n  background-color: white;\n  background-position: center;\n  background-size: 60%;\n  background-repeat: no-repeat;\n  border: 2px solid white;\n  margin: -38px auto 12px;\n  border-radius: 50%;\n']))),Yn=Nn.a.div(B||(B=Object(Rn.a)(["\n  font-size: 16px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.9);\n  font-weight: 600;\n"]))),$n=Nn.a.div(W||(W=Object(Rn.a)(["\n  color: #0a66c2;\n  margin-top: 4px;\n  font-size: 12px;\n  line-height: 1.33;\n  font-weight: 400;\n"]))),ne=Nn.a.div(_||(_=Object(Rn.a)(["\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  padding-top: 12px;\n  padding-bottom: 12px;\n\n  & > a {\n    text-decoration: none;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 4px 12px;\n\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.08);\n    }\n\n    div {\n      display: flex;\n      flex-direction: column;\n      text-align: left;\n      span {\n        font-size: 12px;\n        line-height: 1.333;\n        &:first-child {\n          color: rgba(0, 0, 0, 0.6);\n        }\n        &:nth-child(2) {\n          color: rgba(0, 0, 0, 1);\n        }\n      }\n    }\n  }\n\n  svg {\n    color: rgba(0, 0, 0, 1);\n  }\n"]))),ee=Nn.a.a(H||(H=Object(Rn.a)(["\n  border-color: rgba(0, 0, 0, 0.8);\n  text-align: left;\n  padding: 12px;\n  font-size: 12px;\n  display: block;\n  span {\n    display: flex;\n    align-items: center;\n    color: rgba(0, 0, 0, 1);\n    svg {\n      color: rgba(0, 0, 0, 0.6);\n    }\n  }\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.08);\n  }\n"]))),te=Object(Nn.a)(Xn)(J||(J=Object(Rn.a)(["\n  padding: 8px 0 0;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  a {\n    color: black;\n    padding: 4px 12px 4px 12px;\n    font-size: 12px;\n\n    &:hover {\n      color: #0a66c2;\n    }\n\n    span {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n\n    &:last-child {\n      color: rgba(0, 0, 0, 0.6);\n      text-decoration: none;\n\n      border-top: 1px solid #d6cec2;\n      padding: 12px;\n      &:hover {\n        background-color: rgba(0, 0, 0, 0.08);\n      }\n    }\n  }\n"]))),ie=Object(o.b)((function(n){return{user:n.userState.user}}),(function(n){return{}}))((function(n){return Object(En.jsxs)(qn,{children:[Object(En.jsxs)(Xn,{children:[Object(En.jsxs)(Kn,{children:[Object(En.jsx)(Qn,{}),Object(En.jsxs)("a",{children:[Object(En.jsx)(Zn,{}),Object(En.jsxs)(Yn,{children:["Welcome, ",n.user?n.user.displayName:"there","!"]})]}),Object(En.jsx)("a",{children:Object(En.jsx)($n,{children:"Add a photo"})})]}),Object(En.jsx)(ne,{children:Object(En.jsxs)("a",{children:[Object(En.jsxs)("div",{children:[Object(En.jsx)("span",{children:"Connections"}),Object(En.jsx)("span",{children:"Grow your network"})]}),Object(En.jsx)("img",{src:"/images/widget-icon.svg",alt:""})]})}),Object(En.jsx)(ee,{children:Object(En.jsxs)("span",{children:[Object(En.jsx)("img",{src:"/images/item-icon.svg",alt:""}),"My Items"]})})]}),Object(En.jsxs)(te,{children:[Object(En.jsx)("a",{children:Object(En.jsx)("span",{children:"Groups"})}),Object(En.jsx)("a",{children:Object(En.jsxs)("span",{children:["Events",Object(En.jsx)("img",{src:"/images/plus-icon.svg",alt:""})]})}),Object(En.jsx)("a",{children:Object(En.jsx)("span",{children:"Follow Hashtags"})}),Object(En.jsx)("a",{children:Object(En.jsx)("span",{children:"Discover more"})})]})]})})),ae=t(36),re=t(128),ce=t(129),oe=t(130),se=t(131),de=t(132),le=t(133),xe=t(125),be=t(126),je=t(127),pe=t(44),ge=t.n(pe),he=Nn.a.div(V||(V=Object(Rn.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.8);\n  animation: fadeIn 0.3s;\n"]))),ue=Nn.a.div(q||(q=Object(Rn.a)(["\n  width: 100%;\n  max-width: 552px;\n  max-height: 90%;\n  overflow: initial;\n  background-color: white;\n  border-radius: 5px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  top: 32px;\n  margin: 0 auto;\n"]))),Oe=Nn.a.div(X||(X=Object(Rn.a)(["\n  display: block;\n  padding: 16px 20px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  font-size: 16px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: 400;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  button {\n    height: 40px;\n    width: 40px;\n    min-width: auto;\n    color: rgba(0, 0, 0, 0.15);\n    border: none;\n    background-color: white;\n    cursor: pointer;\n    svg,\n    div {\n      pointer-events: none;\n    }\n  }\n"]))),me=Nn.a.div(K||(K=Object(Rn.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  overflow-y: auto;\n  vertical-align: baseline;\n  background-color: transparent;\n  padding: 8px 12px;\n"]))),fe=Nn.a.div(Q||(Q=Object(Rn.a)(["\n  display: flex;\n  align-items: center;\n  padding: 12px 24px;\n  svg,\n  img {\n    width: 48px;\n    height: 48px;\n    background-clip: content-box;\n    border-radius: 50%;\n  }\n  span {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 1.5;\n    margin-left: 5px;\n  }\n"]))),ve=Nn.a.div(Z||(Z=Object(Rn.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 24px 12px 16px;\n"]))),we=Nn.a.button(Y||(Y=Object(Rn.a)(["\n  /* border: none;\n  margin: 4px; */\n  display: flex;\n  align-items: center;\n  height: 50px;\n  min-width: auto;\n  color: rgba(0, 0, 0, 0.5);\n"]))),ye=Nn.a.div($||($=Object(Rn.a)(["\n  align-items: center;\n  display: flex;\n  padding-right: 8px;\n  "," {\n    width: 40px;\n  }\n"])),we),ke=Nn.a.div(nn||(nn=Object(Rn.a)(["\n  padding-left: 8px;\n  margin-right: auto;\n  border-left: 1px solid rgba(0, 0, 0, 0.15);\n  "," {\n    svg {\n      margin-right: 5px;\n    }\n  }\n"])),we),ze=Nn.a.button(en||(en=Object(Rn.a)(["\n  min-width: 60px;\n  border-radius: 30px;\n  padding-left: 16px;\n  padding-right: 16px;\n  border: none;\n  background: ",";\n  color: ",";\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.disabled?"white":"#0a66c2"}),(function(n){return n.disabled,"white"}),(function(n){return n.disabled?"white":"#004182"})),Se=Nn.a.div(tn||(tn=Object(Rn.a)(["\n  padding: 12px 24px;\n  textarea {\n    width: 100%;\n    min-height: 100px;\n    resize: none;\n  }\n  input {\n    width: 100%;\n    height: 35px;\n    font-size: 16px;\n    margin-bottom: 20px;\n  }\n"]))),Ae=Nn.a.div(an||(an=Object(Rn.a)(["\n  text-align: center;\n  img {\n    width: 100%;\n  }\n"]))),Ce=Object(o.b)((function(n){return{user:n.userState.user}}),(function(n){return{postArticle:function(e){return n(function(n){return function(e){if(e(y(!0)),""!=n.image){var t=u.ref("images/".concat(n.image.name)).put(n.image);t.on("state_change",(function(n){var e=n.bytestransforred/n.totalBytes*100;console.log("Progress: ".concat(e,"%")),"RUNNING"===n.state&&console.log("Progress: ".concat(e,"%"))}),(function(n){return console.log(n.code)}),Object(b.a)(x.a.mark((function i(){var a;return x.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.snapshot.ref.getDownloadURL();case 2:a=i.sent,O.collection("articles").add({actor:{description:n.user.email,title:n.user.displayName,date:n.timestamp,image:n.user.photoURL},video:n.video,sharedImage:a,Comment:0,description:n.description}),e(y(!1));case 5:case"end":return i.stop()}}),i)}))))}else n.video&&(O.collection("articles").add({actor:{description:n.user.email,title:n.user.displayName,date:n.timestamp,image:n.user.photoURL},video:n.video,sharedImage:"",Comment:0,description:n.description}),e(y(!1)))}}(e))}}}))((function(n){var e=Object(i.useState)(""),t=Object(ae.a)(e,2),a=t[0],r=t[1],c=Object(i.useState)(""),o=Object(ae.a)(c,2),s=o[0],d=o[1],l=Object(i.useState)(""),x=Object(ae.a)(l,2),b=x[0],p=x[1],g=Object(i.useState)(""),h=Object(ae.a)(g,2),u=h[0],O=h[1],m=function(n){d(""),p(""),O(n)},f=function(e){r(""),d(""),p(""),O(""),n.handleClick(e)};return Object(En.jsx)(En.Fragment,{children:"open"===n.showModal&&Object(En.jsx)(he,{children:Object(En.jsxs)(ue,{children:[Object(En.jsxs)(Oe,{children:[Object(En.jsx)("h2",{children:"Create a Post"}),Object(En.jsx)("button",{onClick:function(n){return f(n)},children:Object(En.jsx)("div",{children:Object(En.jsx)(le.a,{children:Object(En.jsx)(xe.a,{})})})})]}),Object(En.jsxs)(me,{children:[Object(En.jsxs)(fe,{children:[n.user.photoURL?Object(En.jsx)("img",{src:n.user.photoURL}):Object(En.jsx)("img",{src:"/images/user.svg",alt:""}),Object(En.jsx)("span",{children:n.user.displayName})]}),Object(En.jsxs)(Se,{children:[Object(En.jsx)("textarea",{value:a,onChange:function(n){return r(n.target.value)},placeholder:"what do you want to talk about?",autoFocus:!0}),"image"===u?Object(En.jsxs)(Ae,{children:[Object(En.jsx)("input",{type:"file",accept:"image/git, image/jpeg, image/png",name:"image",id:"file",style:{display:"none"},onChange:function(n){var e=n.target.files[0];""!==e&&void 0!==e?d(e):alert("not an image, the file is a ".concat(typeof e))}}),Object(En.jsx)("p",{children:Object(En.jsx)("label",{htmlFor:"file",children:"Select an image to share"})}),s&&Object(En.jsx)("img",{src:URL.createObjectURL(s)})]}):"media"===u&&Object(En.jsxs)(En.Fragment,{children:[Object(En.jsx)("input",{type:"text",placeholder:"please input a video Link",value:b,onChange:function(n){return p(n.target.value)}}),b&&Object(En.jsx)(ge.a,{width:"100%",url:b})]})]})]}),Object(En.jsxs)(ve,{children:[Object(En.jsxs)(ye,{children:[Object(En.jsx)(we,{onClick:function(){return m("image")},children:Object(En.jsx)("div",{children:Object(En.jsx)(be.a,{})})}),Object(En.jsx)(we,{onClick:function(){return m("media")},children:Object(En.jsx)("div",{children:Object(En.jsx)(je.a,{})})})]}),Object(En.jsx)(ke,{children:Object(En.jsxs)(we,{children:[Object(En.jsx)("img",{src:"/images/comment.svg",alt:""}),"\xa0Anyone"]})}),Object(En.jsx)(ze,{disabled:!a,onClick:function(e){return function(e){if(e.preventDefault(),e.target===e.currentTarget){var t={image:s,video:b,user:n.user,description:a,timestamp:j.a.firestore.Timestamp.now()};n.postArticle(t),f(e)}else console.log("hello")}(e)},children:"Post"})]})]})})})})),Ie=Nn.a.div(rn||(rn=Object(Rn.a)(["\n  grid-area: main;\n"]))),Le=Nn.a.div(cn||(cn=Object(Rn.a)(["\n  text-align: center;\n  overflow: hidden;\n  margin-bottom: 8px;\n  background-color: rgb(255, 255, 255);\n  border-radius: 5px;\n  transition: box-shadow 83ms ease 0s;\n  position: relative;\n  border: none;\n  box-shadow: rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 20%) 0px 0px 0px;\n"]))),Ue=Object(Nn.a)(Le)(on||(on=Object(Rn.a)(["\n  display: flex;\n  flex-direction: column;\n  color: #958b7b;\n  margin: 0px 0px 8px;\n  background: white;\n  div {\n    button {\n      outline: none;\n      color: rgba(0, 0, 0, 0.6);\n      font-size: 14px;\n      line-height: 1.5;\n      min-height: 48px;\n      background: transparent;\n      border: none;\n      display: flex;\n      align-items: center;\n      font-weight: 600;\n    }\n    &:first-child {\n      display: flex;\n      align-items: center;\n      padding: 8px 16px 0px;\n      img {\n        width: 48px;\n        border-radius: 50%;\n        margin-right: 8px;\n      }\n      button {\n        margin: 4px 0;\n        flex-grow: 1;\n        padding-left: 16px;\n        border: 1px solid rgba(0, 0, 0, 0.15);\n        border-radius: 35px;\n        background-color: white;\n        text-align: left;\n      }\n    }\n    &:nth-child(2) {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-around;\n      padding-bottom: 4px;\n\n      button {\n        color: #70b5f9;\n        cursor: pointer;\n        div {\n          margin-top: -4px;\n        }\n      }\n      @media (max-width: 1049px) {\n        button {\n          padding: 0;\n          font-size: 10px;\n        }\n        div {\n          height: 10px;\n        }\n      }\n    }\n  }\n"]))),Re=Object(Nn.a)(Le)(sn||(sn=Object(Rn.a)(["\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n"]))),Ne=Object(Nn.a)(Le)(dn||(dn=Object(Rn.a)(["\n  flex-wrap: nowrap;\n  padding: 12px 16px 0 40px;\n  margin-bottom: 8px;\n  align-items: center;\n  display: flex;\n  a {\n    margin-right: 12px;\n    flex-grow: 1;\n    overflow: hidden;\n    display: flex;\n    text-decoration: none;\n\n    img {\n      width: 48px;\n      height: 48px;\n    }\n    & > div {\n      display: flex;\n      flex-direction: column;\n      flex-grow: 1;\n      flex-basis: 0;\n      margin-left: 8px;\n      overflow: hidden;\n      span {\n        text-align: left;\n        &:first-child {\n          font-size: 14px;\n          font-weight: 700;\n          color: rgba(0, 0, 0, 1);\n        }\n\n        &:nth-child(n + 1) {\n          font-size: 12px;\n          color: rgba(0, 0, 0, 0.6);\n        }\n      }\n    }\n  }\n  button {\n    position: absolute;\n    top: 0;\n    right: 12px;\n    background: transparent;\n    border: none;\n    outline: none;\n  }\n"]))),Ee=Nn.a.div(ln||(ln=Object(Rn.a)(["\n  padding: 0 16px;\n  overflow: hidden;\n  font-size: 14px;\n  text-align: left;\n  color: rgba(0, 0, 0, 0.9);\n"]))),Fe=Nn.a.div(xn||(xn=Object(Rn.a)(["\n  margin-top: 8px;\n  display: block;\n  width: 100%;\n  position: relative;\n  background-color: #f9fafb;\n  img {\n    object-fit: contain;\n    width: 100%;\n    height: 100%;\n  }\n"]))),Te=Nn.a.div(bn||(bn=Object(Rn.a)(["\n  text-align: center;\n  & > img {\n    width: 30px;\n  }\n"]))),De=Object(o.b)((function(n){return{loading:n.articleState.loading,user:n.userState.user,articles:n.articleState.articles}}),(function(n){return{getArticles:function(){return n(k())}}}))((function(n){var e=Object(i.useState)("close"),t=Object(ae.a)(e,2),a=t[0],r=t[1];Object(i.useEffect)((function(){n.getArticles()}),[]);var c=function(n){if(n.preventDefault(),n.target===n.currentTarget)switch(a){case"open":r("close");break;case"close":r("open");break;default:r("close")}};return Object(En.jsx)(En.Fragment,{children:0===n.articles.length?Object(En.jsx)("p",{children:"There are no article"}):Object(En.jsxs)(Ie,{children:[Object(En.jsxs)(Ue,{children:[Object(En.jsxs)("div",{children:[n.user&&n.user.photoURL?Object(En.jsx)("img",{src:n.user.photoURL,alt:""}):Object(En.jsx)("img",{src:"/images/user.svg",alt:""}),Object(En.jsx)("button",{style:{cursor:"text"},onClick:c,children:"start a post"})]}),Object(En.jsxs)("div",{children:[Object(En.jsxs)("button",{children:[Object(En.jsx)("div",{children:Object(En.jsx)(re.a,{})}),Object(En.jsx)("span",{children:"Photo"})]}),Object(En.jsxs)("button",{children:[Object(En.jsx)("div",{children:Object(En.jsx)(ce.a,{})}),Object(En.jsx)("span",{children:"Video"})]}),Object(En.jsxs)("button",{children:[Object(En.jsx)("div",{children:Object(En.jsx)(oe.a,{})}),Object(En.jsx)("span",{children:"Event"})]}),Object(En.jsxs)("button",{children:[Object(En.jsx)("div",{children:Object(En.jsx)(se.a,{})}),Object(En.jsx)("span",{children:"Write Article"})]})]})]}),Object(En.jsxs)(Te,{children:[n.loading&&Object(En.jsx)("img",{src:"https://thumbs.gfycat.com/ConventionalOblongFairybluebird-small.gif",alt:""}),n.articles.length>0&&n.articles.map((function(n,e){return Object(En.jsxs)(Re,{children:[Object(En.jsxs)(Ne,{children:[Object(En.jsxs)("a",{children:[Object(En.jsx)("img",{src:n.actor.image,alt:""}),Object(En.jsxs)("div",{children:[Object(En.jsx)("span",{children:n.actor.title}),Object(En.jsx)("span",{children:n.actor.description}),Object(En.jsx)("span",{children:n.actor.date.toDate().toLocaleDateString()})]})]}),Object(En.jsx)("button",{children:Object(En.jsx)("div",{children:Object(En.jsx)(de.a,{})})})]}),Object(En.jsx)(Ee,{children:n.description}),Object(En.jsx)(Fe,{children:Object(En.jsx)("a",{children:!n.sharedImage&&n.video?Object(En.jsx)(ge.a,{width:"100%",url:n.video,controls:!0}):n.sharedImage&&Object(En.jsx)("img",{src:n.sharedImage,alt:""})})})]},e)}))]}),Object(En.jsx)(Ce,{showModal:a,handleClick:c})]})})})),Ge=Nn.a.div(jn||(jn=Object(Rn.a)(["\n  grid-area: rightside;\n"]))),Me=Nn.a.div(pn||(pn=Object(Rn.a)(["\n  text-align: center;\n  overflow: hidden;\n  margin-bottom: 8px;\n  background-color: #fff;\n  border-radius: 5px;\n  position: relative;\n  border: none;\n  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n  padding: 12px;\n"]))),Pe=Nn.a.div(gn||(gn=Object(Rn.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 16px;\n  width: 100%;\n  color: rgba(0, 0, 0, 0.6);\n"]))),Be=Nn.a.ul(hn||(hn=Object(Rn.a)(["\n  margin-top: 16px;\n  li {\n    display: flex;\n    align-items: center;\n    margin: 12px 0;\n    position: relative;\n    font-size: 14px;\n    & > div {\n      display: flex;\n      flex-direction: column;\n    }\n\n    button {\n      background-color: transparent;\n      color: rgba(0, 0, 0, 0.6);\n      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);\n      padding: 16px;\n      align-items: center;\n      border-radius: 15px;\n      box-sizing: border-box;\n      font-weight: 600;\n      display: inline-flex;\n      justify-content: center;\n      max-height: 32px;\n      max-width: 480px;\n      text-align: center;\n      outline: none;\n    }\n  }\n"]))),We=Nn.a.div(un||(un=Object(Rn.a)(['\n  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 48px;\n  height: 48px;\n  margin-right: 8px;\n']))),_e=Nn.a.a(On||(On=Object(Rn.a)(["\n  color: #0a66c2;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n"]))),He=Object(Nn.a)(Me)(mn||(mn=Object(Rn.a)(["\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),Je=function(n){return Object(En.jsxs)(Ge,{children:[Object(En.jsxs)(Me,{children:[Object(En.jsxs)(Pe,{children:[Object(En.jsx)("h2",{children:"Add to your feed"}),Object(En.jsx)("img",{src:"/images/feed-icon.svg",alt:""})]}),Object(En.jsxs)(Be,{children:[Object(En.jsxs)("li",{children:[Object(En.jsx)("a",{children:Object(En.jsx)(We,{})}),Object(En.jsxs)("div",{children:[Object(En.jsx)("span",{children:"#Linkedin"}),Object(En.jsx)("button",{children:"Follow"})]})]}),Object(En.jsxs)("li",{children:[Object(En.jsx)("a",{children:Object(En.jsx)(We,{})}),Object(En.jsxs)("div",{children:[Object(En.jsx)("span",{children:"#Video"}),Object(En.jsx)("button",{children:"Follow"})]})]})]}),Object(En.jsxs)(_e,{children:["View all recommendations",Object(En.jsx)("img",{src:"/images/right-icon.svg",alt:""})]})]}),Object(En.jsx)(He,{children:Object(En.jsx)("img",{src:"/images/job-ad.jpg",alt:""})})]})},Ve=Nn.a.div(fn||(fn=Object(Rn.a)(["\n  padding-top: 52px;\n  max-width: 100%;\n"]))),qe=(Nn.a.div(vn||(vn=Object(Rn.a)(["\n  max-width: 1128px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),Nn.a.section(wn||(wn=Object(Rn.a)(["\n  min-height: 50px;\n  padding: 16px 0;\n  box-sizing: content-box;\n  text-align: center;\n  text-decoration: underline;\n  display: flex;\n  justify-content: center;\n  h5 {\n    color: #0a66c2;\n    font-size: 14px;\n    a {\n      font-weight: 700;\n    }\n  }\n\n  p {\n    font-size: 14px;\n    color: #434649;\n    font-weight: 600;\n  }\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    padding: 0 5px;\n  }\n"])))),Xe=Nn.a.div(yn||(yn=Object(Rn.a)(['\n  display: grid;\n  grid-template-areas: "leftside main rightside";\n  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);\n  column-gap: 25px;\n  row-gap: 25px;\n  /* grid-template-row: auto; */\n  margin: 25px 0;\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    padding: 0 5px;\n  }\n']))),Ke=Object(o.b)((function(n){return{user:n.userState.user}}),(function(n){return{}}))((function(n){return Object(En.jsxs)(Ve,{children:[!n.user&&Object(En.jsx)(d.a,{to:"/"}),Object(En.jsxs)(qe,{children:[Object(En.jsx)("h5",{children:Object(En.jsx)("a",{children:"Hiring in a hurry? - "})}),Object(En.jsx)("p",{children:"Find talented pros in record time with Upwork and keep business moving."})]}),Object(En.jsxs)(Xe,{children:[Object(En.jsx)(ie,{}),Object(En.jsx)(De,{}),Object(En.jsx)(Je,{})]})]})})),Qe=Nn.a.div(kn||(kn=Object(Rn.a)(["\n  padding: 0px;\n"]))),Ze=Nn.a.nav(zn||(zn=Object(Rn.a)(["\n  max-width: 1128px;\n  margin: auto;\n  padding: 12px 0 16px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n\n  & > a {\n    width: 135px;\n    height: 34px;\n    @media (max-width: 973px) {\n      padding: 0 5px;\n    }\n  }\n"]))),Ye=Nn.a.a(Sn||(Sn=Object(Rn.a)(["\n  font-size: 16px;\n  padding: 10px 12px;\n  text-decoration: none;\n  border-radius: 4px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-right: 12px;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.08);\n    color: rgba(0, 0, 0, 0.9);\n    text-decoration: none;\n  }\n  @media (max-width: 390px) {\n    display: none;\n  }\n"]))),$e=Nn.a.a(An||(An=Object(Rn.a)(["\n  box-shadow: inset 0 0 0 1px #0a66c2;\n  color: #0a66c2;\n  border-radius: 24px;\n  transition-duration: 167ms;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 40px;\n  padding: 10px 24px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0);\n  &:hover {\n    background-color: rgba(112, 181, 249, 0.15);\n    color: #0a66c2;\n    text-decoration: none;\n  }\n"]))),nt=Nn.a.section(Cn||(Cn=Object(Rn.a)(["\n  display: flex;\n  align-content: start;\n  min-height: 700px;\n  padding-bottom: 138px;\n  padding-top: 40px;\n  padding: 60px 0;\n  position: relative;\n  flex-wrap: wrap;\n  width: 100%;\n  max-width: 1128px;\n  align-items: center;\n  margin: auto;\n\n  @media (max-width: 973px) {\n    margin: auto;\n    min-height: 0px;\n  }\n"]))),et=Nn.a.div(In||(In=Object(Rn.a)(["\n  width: 100%;\n  h1 {\n    padding-bottom: 0;\n    width: 55%;\n    font-size: 56px;\n    color: #2977c9;\n    font-weight: 500;\n    line-height: 70px;\n    @media (max-width: 973px) {\n      text-align: center;\n      font-size: 20px;\n      width: 100%;\n      line-height: 2;\n    }\n  }\n\n  img {\n    z-index: 1;\n    width: 700px;\n    height: 670px;\n    position: absolute;\n    bottom: 118px;\n    right: -150px;\n    @media (max-width: 973px) {\n      top: 230px;\n      width: initial;\n      position: initial;\n      height: initial;\n    }\n  }\n"]))),tt=Nn.a.div(Ln||(Ln=Object(Rn.a)(["\n  margin-top: 100px;\n  width: 408px;\n  @media (max-width: 973px) {\n    margin-top: 20px;\n  }\n"]))),it=Nn.a.button(Un||(Un=Object(Rn.a)(["\n  display: flex;\n  justify-content: center;\n  background-color: #fff;\n  align-items: center;\n  height: 56px;\n  width: 100%;\n  border-radius: 28px;\n  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),\n    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);\n\n  vertical-align: middle;\n  z-index: 0;\n  transition-duration: 167ms;\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.6);\n  &:hover {\n    background-color: rgba(207, 207, 207, 0.25);\n    color: rgba(0, 0, 0, 0.75);\n  }\n  @media (max-width: 973px) {\n    width: 100vw;\n  }\n"]))),at=Object(o.b)((function(n){return{user:n.userState.user}}),(function(n){return{signIn:function(){return n((function(n){g.signInWithPopup(h).then((function(e){n(w(e.user))})).catch((function(n){return alert(n.message)}))}))}}}))((function(n){return Object(En.jsxs)(Qe,{children:[n.user&&Object(En.jsx)(d.a,{to:"/home"}),Object(En.jsxs)(Ze,{children:[Object(En.jsx)(s.b,{to:"/",children:Object(En.jsx)("img",{src:"/images/login-logo.svg",alt:""})}),Object(En.jsxs)("div",{children:[Object(En.jsx)(Ye,{children:"Join now"}),Object(En.jsx)($e,{children:"Sign in"})]})]}),Object(En.jsxs)(nt,{children:[Object(En.jsxs)(et,{children:[Object(En.jsx)("h1",{children:"Welcome to your professional community"}),Object(En.jsx)("img",{src:"/images/login-hero.svg",alt:""})]}),Object(En.jsx)(tt,{children:Object(En.jsxs)(it,{onClick:function(){return n.signIn()},children:[Object(En.jsx)("img",{src:"/images/google.svg",alt:""})," \xa0 Sign in with Google"]})})]})]})}));var rt=Object(o.b)((function(n){return{}}),(function(n){return{getUserAuth:function(){return n((function(n){g.onAuthStateChanged(function(){var e=Object(b.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&n(w(t));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}))}}}))((function(n){return Object(i.useEffect)((function(){n.getUserAuth()}),[n]),Object(En.jsx)("div",{className:"App",children:Object(En.jsx)(s.a,{children:Object(En.jsxs)(d.d,{children:[Object(En.jsx)(d.b,{exact:!0,path:"/",children:Object(En.jsx)(at,{})}),Object(En.jsxs)(d.b,{path:"/home",children:[Object(En.jsx)(Vn,{}),Object(En.jsx)(Ke,{})]})]})})})})),ct=t(42),ot=t(66),st=t(31),dt={articles:[],loading:!1},lt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return Object(st.a)(Object(st.a)({},n),{},{articles:e.payload});case f:return Object(st.a)(Object(st.a)({},n),{},{loading:e.status});default:return n}},xt={user:null},bt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(st.a)(Object(st.a)({},n),{},{user:e.user});default:return n}},jt=Object(ct.b)({userState:bt,articleState:lt}),pt=Object(ct.c)(jt,Object(ct.a)(ot.a));c.a.render(Object(En.jsx)(a.a.StrictMode,{children:Object(En.jsx)(o.a,{store:pt,children:Object(En.jsx)(rt,{})})}),document.getElementById("root"))},74:function(n,e,t){},86:function(n,e,t){}},[[110,1,2]]]);
//# sourceMappingURL=main.312210fa.chunk.js.map
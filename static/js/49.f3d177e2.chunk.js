"use strict";(self.webpackChunksamurai_app_1=self.webpackChunksamurai_app_1||[]).push([[49],{2049:function(n,e,r){r.r(e),r.d(e,{default:function(){return M}});var t=r(8687),s="Dialogs_dialogs__CS-Z2",o="Dialogs_interlocutors__e4iUV",i="Dialogs_messages__G73Nw",a="Dialogs_dialog__l-jex",u=r(3504),c="Interlocutor_interlocutor__wXtUV",l=r(184),m=function(n){return(0,l.jsx)("li",{className:c,children:(0,l.jsx)(u.OL,{to:"/dialogs/".concat(n.id),children:n.name})})},d="Message_message__IDsJI",f=function(n){return(0,l.jsx)("li",{className:d,children:n.text})},g=r(6139),_=r(704),x=r(8482),h=r(816),j=(0,x.B)(100),Z=(0,_.Z)({form:"SendMessageForm"})((function(n){return(0,l.jsxs)("form",{onSubmit:n.handleSubmit,children:[(0,l.jsx)(g.Z,{component:h.g,validate:[x.C,j],name:"newMessageBody",placeholder:"Enter your message"}),(0,l.jsx)("button",{children:"Send Message"})]})})),p=function(n){return(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)("ul",{className:o,children:n.interlocutors.map((function(n){return(0,l.jsx)(m,{id:n.id,name:n.name},n.id)}))}),(0,l.jsxs)("div",{className:a,children:[(0,l.jsx)("ul",{className:i,children:n.messages.map((function(n){return(0,l.jsx)(f,{text:n.text},n.id)}))}),(0,l.jsx)(Z,{onSubmit:function(e){n.onSendMessage(e.newMessageBody)}})]})]})},C=r(4405),v=r(5927),M=(0,r(7781).qC)((0,t.$j)((function(n){return{interlocutors:n.dialogs.interlocutors,messages:n.dialogs.messages,newMessageText:n.dialogs.newMessageText}}),{onSendMessage:C.dI}),v.Z)(p)},816:function(n,e,r){r.d(e,{I:function(){return d},g:function(){return m}});var t=r(8683),s=r(5987),o=r(5273),i=r(184),a=["input","meta"],u=["input","meta"],c=["input","meta"],l=function(n){n.input;var e=n.meta,r=(0,s.Z)(n,a),t=e.error&&e.touched;return(0,i.jsxs)("div",{className:"".concat(o.Z.formControl," ").concat(t?o.Z.error:""),children:[r.children,t&&(0,i.jsx)("span",{children:e.error})]})},m=function(n){var e=n.input,r=(n.meta,(0,s.Z)(n,u));return(0,i.jsx)(l,(0,t.Z)((0,t.Z)({},n),{},{children:(0,i.jsx)("textarea",(0,t.Z)((0,t.Z)({},e),r))}))},d=function(n){var e=n.input,r=(n.meta,(0,s.Z)(n,c));return(0,i.jsx)(l,(0,t.Z)((0,t.Z)({},n),{},{children:(0,i.jsx)("input",(0,t.Z)((0,t.Z)({},e),r))}))}},5927:function(n,e,r){var t=r(8683),s=r(8687),o=r(6871),i=r(184),a=function(n){return{isAuth:n.auth.isAuth}};e.Z=function(n){return(0,s.$j)(a,{})((function(e){return e.isAuth?(0,i.jsx)(n,(0,t.Z)({},e)):(0,i.jsx)(o.Fg,{to:"/login"})}))}},8482:function(n,e,r){r.d(e,{B:function(){return s},C:function(){return t}});var t=function(n){if(!n)return"Field is required"},s=function(n){return function(e){if(e.length>n)return"Maximum length ".concat(n," characters")}}},5273:function(n,e){e.Z={formControl:"FormsControl_formControl__-hg20",error:"FormsControl_error__Br7aE",formSummaryError:"FormsControl_formSummaryError__8FZdP"}}}]);
//# sourceMappingURL=49.f3d177e2.chunk.js.map
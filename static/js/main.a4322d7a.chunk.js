(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(5),r=a.n(c),i=(a(15),a(9)),s=a(1),l=a(6),u=a(7),m=new(function(){function e(t){Object(l.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(u.a)(e,[{key:"_response",value:function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{method:"GET",headers:this.headers}).then(this._response).catch((function(e){console.error(e)}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers}).then(this._response).catch((function(e){console.log(e)}))}},{key:"editUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._response).catch((function(e){console.log(e)}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._response).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._response).catch((function(e){console.log(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"".concat(t?"PUT":"DELETE"),headers:this.headers}).then(this._response).catch((function(e){console.log(e)}))}},{key:"editUserAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then(this._response).catch((function(e){console.log(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-13",headers:{authorization:"b39e5495-8618-4848-8d04-1de0d78a2b88","Content-Type":"application/json"}}),p=a(8),d=a.n(p);var f=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:d.a,className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f."}))},h=o.a.createContext();var _=function(e){var t=e.onCardClick,a=e.card,n=e.onCardDelete,c=e.onCardLike,r=o.a.useContext(h),i=a.owner._id===r._id,s="".concat(i?"element__del":"element__del_hidden"),l=a.likes.some((function(e){return e._id===r._id})),u="element__fav ".concat(l?"element__fav_active":"");return o.a.createElement("div",{className:"element"},o.a.createElement("img",{className:"element__img element__img_add element__img_preview",src:a.link,alt:"".concat(a.name),onClick:function(){t(a)}}),o.a.createElement("button",{className:s,"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",type:"button",onClick:function(){n(a)}}),o.a.createElement("h2",{className:"element__header element__header_add"},a.name),o.a.createElement("div",{className:"element__fav-container"},o.a.createElement("button",{className:u,"aria-label":"\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",type:"button",onClick:function(){c(a)}}),o.a.createElement("p",{className:"element__fav-count"},a.likes.length)))};var v=function(e){var t=o.a.useContext(h);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__avatar-container"},o.a.createElement("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440."}),o.a.createElement("div",{className:"profile__avatar-edit",onClick:e.onEditAvatar})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__name"},o.a.createElement("h1",{className:"profile__title"},t.name),o.a.createElement("button",{className:"profile__edit",onClick:e.onEditProfile,"aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",type:"button"})),o.a.createElement("p",{className:"profile__subtitle"},t.about)),o.a.createElement("button",{className:"profile__button",onClick:e.onAddPlace,"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",type:"button"},"+")),o.a.createElement("section",{className:"elements"},e.cards.map((function(t){return o.a.createElement(_,{key:t._id,card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete})}))))};var b=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var E=function(e){return o.a.createElement("section",{className:"popup popup_".concat(e.name," ").concat(e.isOpen&&"popup_opened")},o.a.createElement("form",{className:"popup__form popup__form_".concat(e.name),name:e.name,onSubmit:e.onSubmit,noValidate:!0},o.a.createElement("button",{className:"popup__close",type:"button",onClick:e.onClose}),o.a.createElement("h2",{className:"popup__name"},e.title),e.children,o.a.createElement("button",{className:"popup__button popup__button_".concat(e.name),type:"submit"},e.isLoading?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \ud83d\udd52":e.button)))};var g=function(e){var t=o.a.useState(""),a=Object(s.a)(t,2),n=a[0],c=a[1],r=o.a.useState(""),i=Object(s.a)(r,2),l=i[0],u=i[1];return o.a.createElement(E,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,isLoading:e.isLoading,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:n,link:l})}},o.a.createElement("input",{type:"text",defaultValue:"",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onChange:function(e){c(e.target.value)},className:"popup__input",name:"placename",minLength:"1",maxLength:"30",id:"placename",required:!0}),o.a.createElement("span",{className:"popup__error",id:"placename-error"}),o.a.createElement("input",{type:"url",defaultValue:"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:function(e){u(e.target.value)},className:"popup__input",name:"link",id:"link",required:!0}),o.a.createElement("span",{className:"popup__error",id:"link-error"}))};var C=function(e){var t=e.onUpdateUser,a=e.isOpen,n=e.onClose,c=e.isLoading,r=o.a.useContext(h),i=o.a.useState(""),l=Object(s.a)(i,2),u=l[0],m=l[1],p=o.a.useState(""),d=Object(s.a)(p,2),f=d[0],_=d[1];return o.a.useEffect((function(){m(r.name),_(r.about)}),[r]),o.a.createElement(E,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:n,onSubmit:function(e){e.preventDefault(),t({name:u,about:f})},isLoading:c},o.a.createElement("input",{type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",onChange:function(e){m(e.target.value)},value:u,className:"popup__input",name:"name",minLength:"2",maxLength:"40",id:"name",required:!0}),o.a.createElement("span",{className:"popup__error",id:"name-error"}),o.a.createElement("input",{type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0437\u0430\u043d\u044f\u0442\u0438\u0435",value:f,onChange:function(e){_(e.target.value)},className:"popup__input",name:"job",required:!0,minLength:"2",maxLength:"200",id:"job"}),o.a.createElement("span",{className:"popup__error",id:"job-error"}))};var N=function(e){var t=o.a.useContext(h),a=o.a.useRef();return o.a.useEffect((function(){a.current.value=""}),[t]),o.a.createElement(E,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:a.current.value})},isLoading:e.isLoading},o.a.createElement("input",{type:"url",className:"popup__input",ref:a,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",id:"link",required:!0}),o.a.createElement("span",{className:"popup__error",id:"link-error"}))};var k=function(e){var t=e.isOpen,a=e.onClose,n=e.onSubmit;return o.a.createElement(E,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"confirm",button:"\u0414\u0430",isOpen:t,onSubmit:function(e){e.preventDefault(),n()},onClose:a})};var O=function(e){var t=e.isOpen,a=e.onClose,n=e.card;return o.a.createElement("section",{className:"popup popup_preview ".concat(t&&"popup_opened")},o.a.createElement("figure",{className:"popup__figure"},o.a.createElement("button",{className:"popup__close popup__close_preview","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",type:"button",onClick:a}),o.a.createElement("img",{className:"popup__image",src:n.link,alt:"".concat(n.name)}),o.a.createElement("figcaption",{className:"popup__subtitle"},n.name)))};var y=function(){var e=o.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],c=o.a.useState(!1),r=Object(s.a)(c,2),l=r[0],u=r[1],p=o.a.useState(!1),d=Object(s.a)(p,2),_=d[0],E=d[1],y=o.a.useState(!1),S=Object(s.a)(y,2),j=S[0],L=S[1],U=o.a.useState(!1),w=Object(s.a)(U,2),x=w[0],P=w[1],A=o.a.useState(!1),D=Object(s.a)(A,2),T=D[0],I=D[1],q=o.a.useState(),J=Object(s.a)(q,2),V=J[0],B=J[1],G=o.a.useState({name:"",about:"",avatar:""}),H=Object(s.a)(G,2),M=H[0],R=H[1],W=o.a.useState([]),z=Object(s.a)(W,2),$=z[0],F=z[1],K=o.a.useState([]),Q=Object(s.a)(K,2),X=Q[0],Y=Q[1];function Z(){n(!1),u(!1),E(!1),P(!1),B(!1)}return o.a.useEffect((function(){Promise.all([m.getUserInfo(),m.getInitialCards()]).then((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];R(a),Y(n)})).catch((function(e){console.log(e)}))}),[]),o.a.createElement(h.Provider,{value:M},o.a.createElement("div",{className:"page"},o.a.createElement(f,null),o.a.createElement(v,{onEditProfile:function(){n(!0)},onAddPlace:function(){u(!0)},onEditAvatar:function(){E(!0)},cards:X,onCardClick:function(e){B(!0),L(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===M._id}));m.changeLikeCardStatus(e._id,!t).then((function(t){var a=X.map((function(a){return a._id===e._id?t:a}));Y(a)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){F(e),P(!0)}}),o.a.createElement(C,{isOpen:a,onClose:Z,onUpdateUser:function(e){I(!0),m.editUserInfo(e).then((function(e){R(e),Z()})).catch((function(e){console.log(e)})).finally((function(){I(!1)}))},isLoading:T}),o.a.createElement(N,{isOpen:_,onClose:Z,onUpdateAvatar:function(e){I(!0),m.editUserAvatar(e).then((function(e){R(e),Z()})).catch((function(e){console.log(e)})).finally((function(){I(!1)}))},isLoading:T}),o.a.createElement(g,{isOpen:l,onClose:Z,onAddPlace:function(e){I(!0),m.addNewCard(e).then((function(e){Y([e].concat(Object(i.a)(X))),Z()})).catch((function(e){console.log(e)})).finally((function(){I(!1)}))},isLoading:T}),o.a.createElement(O,{isOpen:V,card:j,onClose:Z}),o.a.createElement(k,{isOpen:x,onClose:Z,onSubmit:function(){m.deleteCard($._id).then((function(){var e=X.filter((function(e){return e._id!==$._id}));Y(e),Z()})).catch((function(e){console.log(e)}))}}),o.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a.p+"static/media/logo.c6f11019.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.a4322d7a.chunk.js.map
(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),o=t.n(c),s=(t(12),t(1)),l=t(4),i=t.n(l);var m=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:i.a,className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f."}))},p=t(5),u=t(6),d=new(function(){function e(a){Object(p.a)(this,e),this.baseUrl=a.baseUrl,this.headers=a.headers}return Object(u.a)(e,[{key:"_response",value:function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{method:"GET",headers:this.headers}).then(this._response)}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers}).then(this._response)}},{key:"editUserInfo",value:function(e,a){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:a})}).then(this._response)}},{key:"addNewCard",value:function(e,a){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:a})}).then(this._response)}},{key:"removeCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._response)}},{key:"addLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._response)}},{key:"delLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this._response)}},{key:"editAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then(this._response)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-13",headers:{authorization:"b39e5495-8618-4848-8d04-1de0d78a2b88","Content-Type":"application/json"}});var h=function(e){return r.a.createElement("div",{className:"element"},r.a.createElement("img",{className:"element__img element__img_add element__img_preview",src:e.card.link,alt:"".concat(e.card.name),onClick:function(){e.onCardClick(e.card)}}),r.a.createElement("button",{className:"element__del","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",type:"button"}),r.a.createElement("h2",{className:"element__header element__header_add"},e.card.name),r.a.createElement("div",{className:"element__fav-container"},r.a.createElement("button",{className:"element__fav","aria-label":"\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",type:"button"}),r.a.createElement("p",{class:"element__fav-count"},e.card.likes.length)))};var _=function(e){var a=e.onEditAvatar,t=e.onEditProfile,n=e.onAddPlace,c=e.onCardClick,o=r.a.useState(),l=Object(s.a)(o,2),i=l[0],m=l[1],p=r.a.useState(),u=Object(s.a)(p,2),_=u[0],f=u[1],E=r.a.useState(),b=Object(s.a)(E,2),v=b[0],N=b[1],k=r.a.useState([]),g=Object(s.a)(k,2),y=g[0],C=g[1];return r.a.useEffect((function(){Promise.all([d.getUserInfo(),d.getInitialCards()]).then((function(e){var a=Object(s.a)(e,2),t=a[0],n=a[1];m(t.name),f(t.about),N(t.avatar),C(n)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__avatar-container"},r.a.createElement("img",{className:"profile__avatar",src:v,alt:"\u0410\u0432\u0430\u0442\u0430\u0440."}),r.a.createElement("div",{className:"profile__avatar-edit",onClick:a})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__name"},r.a.createElement("h1",{className:"profile__title"},i),r.a.createElement("button",{className:"profile__edit",onClick:t,"aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",type:"button"})),r.a.createElement("p",{className:"profile__subtitle"},_)),r.a.createElement("button",{className:"profile__button",onClick:n,"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",type:"button"},"+")),r.a.createElement("section",{className:"elements"},y.map((function(e){return r.a.createElement(h,{key:e._id,card:e,onCardClick:c})}))))};var f=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var E=function(e){return r.a.createElement("section",{className:"popup popup_".concat(e.name," ").concat(e.isOpen&&"popup_opened")},r.a.createElement("form",{className:"popup__form popup__form_".concat(e.name),name:e.name,noValidate:!0},r.a.createElement("button",{className:"popup__close",type:"button",onClick:e.onClose}),r.a.createElement("h2",{className:"popup__name"},e.title),e.children,r.a.createElement("button",{className:"popup__button popup__button_".concat(e.name),type:"submit"},e.button)))};var b=function(e){return r.a.createElement("section",{className:"popup popup_preview ".concat(e.isOpen&&"popup_opened")},r.a.createElement("figure",{className:"popup__figure"},r.a.createElement("button",{className:"popup__close popup__close_preview","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",type:"button",onClick:e.onClose}),r.a.createElement("img",{className:"popup__image",src:e.card.link,alt:"".concat(e.card.name)}),r.a.createElement("figcaption",{className:"popup__subtitle"},e.card.name)))};var v=function(){var e=r.a.useState(!1),a=Object(s.a)(e,2),t=a[0],n=a[1],c=r.a.useState(!1),o=Object(s.a)(c,2),l=o[0],i=o[1],p=r.a.useState(!1),u=Object(s.a)(p,2),d=u[0],h=u[1],v=r.a.useState(!1),N=Object(s.a)(v,2),k=N[0],g=N[1],y=r.a.useState(),C=Object(s.a)(y,2),O=C[0],j=C[1];function U(){n(!1),i(!1),h(!1),j(!1)}return r.a.createElement("div",{className:"page"},r.a.createElement(m,null),r.a.createElement(_,{onEditProfile:function(){n(!0)},onAddPlace:function(){i(!0)},onEditAvatar:function(){h(!0)},onCardClick:function(e){j(!0),g(e)}}),r.a.createElement(f,null),r.a.createElement(E,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:U},r.a.createElement("input",{type:"text",value:"",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",className:"popup__input",name:"name",minlength:"2",maxlength:"40",id:"name",required:!0}),r.a.createElement("span",{className:"popup__error",id:"name-error"}),r.a.createElement("input",{type:"text",value:"",placeholder:"\u0412\u0430\u0448\u0435 \u0437\u0430\u043d\u044f\u0442\u0438\u0435",className:"popup__input",name:"job",required:!0,minlength:"2",maxlength:"200",id:"job"}),r.a.createElement("span",{className:"popup__error",id:"job-error"})),r.a.createElement(E,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:l,onClose:U},r.a.createElement("input",{type:"text",value:"",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input",name:"placename",minlength:"1",maxlength:"30",id:"placename",required:!0}),r.a.createElement("span",{className:"popup__error",id:"placename-error"}),r.a.createElement("input",{type:"url",value:"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input",name:"link",id:"link",required:!0}),r.a.createElement("span",{className:"popup__error",id:"link-error"})),r.a.createElement(E,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:d,onClose:U},r.a.createElement("input",{type:"url",className:"popup__input",value:"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",id:"link",required:!0}),r.a.createElement("span",{className:"popup__error",id:"link-error"})),r.a.createElement(E,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"confirm",button:"\u0414\u0430",onClose:U}),r.a.createElement(b,{isOpen:O,card:k,onClose:U}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,a,t){e.exports=t.p+"static/media/logo.c6f11019.svg"},7:function(e,a,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.8f74b1e7.chunk.js.map
(this["webpackJsonpproject-exam-2"]=this["webpackJsonpproject-exam-2"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.ff293b04.svg"},27:function(e,t,a){},36:function(e,t,a){e.exports=a.p+"static/media/menu_icon.a47c07b5.svg"},42:function(e,t,a){e.exports=a(52)},52:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(30),c=a.n(r),m=(a(27),a(2)),s=a(12),o=a(18),i=a.n(o);function u(){return n.a.createElement("div",{className:"col-12 header container"},n.a.createElement(m.b,{to:"/"},n.a.createElement("img",{className:"header__logo",alt:"Holidaze",src:i.a})),n.a.createElement("button",{className:"btn header__btn"},n.a.createElement(m.b,{to:"/contact"},"Contact us")))}function d(){return n.a.createElement("div",{className:"col-12 footer container"},n.a.createElement("img",{className:"footer__logo",alt:"Holidaze",src:i.a}),n.a.createElement("ul",{className:"footer__list"},n.a.createElement("li",{className:"footer__list__element"},n.a.createElement(m.b,{to:"/contact"},"Contact us")),n.a.createElement("li",{className:"footer__list__element"},n.a.createElement(m.b,{to:"#"},"Terms of Use")),n.a.createElement("li",{className:"footer__list__element"},n.a.createElement(m.b,{to:"/login"},"Account"))))}var b=a(3);function E(e){var t={background:"url("+e.img+")no-repeat center center",backgroundSize:"cover"},a="/hotelinformation/id="+e.id+e.url;return n.a.createElement("div",{className:"col-12 results__article"},n.a.createElement("div",{className:"col-6 col-xs-12 results__article__image",style:t}),n.a.createElement("div",{className:"col-6 col-xs-12 results__article__desc"},n.a.createElement("h2",null,e.establishmentName),n.a.createElement("p",null,"Price: $",e.price),n.a.createElement("p",null,"Max number of guests: ",e.maxGuests),n.a.createElement("button",{className:"col-12 btn btn--success"},n.a.createElement(m.b,{to:a},"See offer"))))}function h(){var e,t,a,r,c,o,i,u=Object(s.g)().id,d=Object(s.f)();try{e=u.match(/search=(.*)&fromDate/)[1],console.log("search f\xf8r _",e),e=e.replace(/_/g," "),console.log("search etter _",e),t=u.match(/fromDate=(.*)&toDate/)[1],a=u.match(/toDate=(.*)&adults/)[1],r=u.match(/adults=(.*)&children/)[1],c=u.match(/children=(.*)/)[1],o="/results/"+u,i="&"+(i=u.match(/&(.*)&adults/)[1])}catch(D){d.replace("/404")}var h=Object(l.useState)({establishmentData:[]}),p=Object(b.a)(h,2),f=p[0],g=p[1],_=Object(l.useState)({data:{search:e,fromDate:t,toDate:a,adults:r,children:c,url:o,cleanedUrl:i}}),v=Object(b.a)(_,2),N=v[0],k=v[1];function x(e){var t=f.establishmentData;t=t.filter((function(e){if(-1!==e.establishmentName.toLowerCase().indexOf(N.data.search.toLowerCase()))return e}));var a=parseInt(N.data.adults),l=parseInt(N.data.children);return t=t.filter((function(e){if(e.maxGuests>=a+l)return e}))}function y(e,t){var a=e.target.value;a=a.replace(/ /g,"_");var l=N.data;l[t]=a,l.url="/results/search="+l.search+"&fromDate="+l.fromDate+"&toDate="+l.toDate+"&adults="+l.adults+"&children="+l.children,l.cleanedUrl="&fromDate="+l.fromDate+"&toDate="+l.toDate,k({data:l}),d.push(N.data.url)}return Object(l.useEffect)((function(){fetch("/establishments.json").then((function(e){return e.json()})).then((function(e){return g({establishmentData:e})})).catch((function(e){console.log("noe gikk galt",e)}))}),[]),void 0!==[e,t,a,r,c,o].find((function(e){return void 0===e}))?(d.replace("/404"),null):n.a.createElement("div",{className:"col-6 col-md-8 col-sm-12 container"},n.a.createElement("div",{className:"col-12 breadcrumbs"},n.a.createElement("ul",null,n.a.createElement("li",{className:"breadcrumbs__link"},n.a.createElement(m.b,{to:"/"},"Home")),n.a.createElement("span",null,">"),n.a.createElement("li",{className:"breadcrumbs__link"},n.a.createElement(m.b,{to:"/results/"+u},"Search results")))),n.a.createElement("div",{className:"col-12 small__search"},n.a.createElement("form",{className:"col-12 small__search__form"},n.a.createElement("label",null,"Search",n.a.createElement("input",{className:"col-12 small__search__form__input",type:"text",placeholder:"Hotel",defaultValue:e,onChange:function(e){return y(e,"search")}})),n.a.createElement("p",{className:"col-6"},n.a.createElement("label",{htmlFor:"fromdate"},"Check-in")),n.a.createElement("p",{className:"col-6"},n.a.createElement("label",{className:"labelxs--hidden",htmlFor:"todate"},"Check-out")),n.a.createElement("input",{className:"col-6 col-xs-12 small__search__form__input",type:"date",name:"fromdate",defaultValue:t,onChange:function(e){return y(e,"fromDate")}}),n.a.createElement("label",{className:"labelxs--visible",htmlFor:"todate"},"Check-out"),n.a.createElement("input",{className:"col-6 col-xs-12 small__search__form__input",type:"date",name:"todate",defaultValue:a,onChange:function(e){return y(e,"toDate")}}),n.a.createElement("p",{className:"col-6"},n.a.createElement("label",{htmlFor:"adults"},"Adults")),n.a.createElement("p",{className:"col-6"},n.a.createElement("label",{className:"labelxs--hidden",htmlFor:"children"},"Children")),n.a.createElement("input",{className:"col-6 col-xs-12 small__search__form__select",type:"number",name:"Adults",min:"1",max:"10",defaultValue:r,onChange:function(e){return y(e,"adults")}}),n.a.createElement("label",{className:"labelxs--visible",htmlFor:"children"},"Children"),n.a.createElement("input",{className:"col-6 col-xs-12 small__search__form__select",type:"number",name:"Children",min:"1",max:"10",defaultValue:c,onChange:function(e){return y(e,"children")}}),n.a.createElement("button",{type:"submit",className:"col-xs-12 btn btn--normal btn--big",onClick:x},n.a.createElement(m.b,{to:N.data.url},"Search")))),n.a.createElement("h1",null,"Search results for '",e,"'"),n.a.createElement("div",{className:"col-12 results"},x(f.establishmentData).map((function(e){return n.a.createElement(E,{establishmentName:e.establishmentName,price:e.price,maxGuests:e.maxGuests,img:e.imageUrl,url:N.data.cleanedUrl,id:e.id,key:e.id})}))))}var p=a(39),f=a(21);function g(e){return n.a.createElement("p",{className:"errormessage"},e.text)}var _=f.a().shape({userName:f.b().required("Username is required"),password:f.b().required("Password is required")});function v(){console.log('Brukernavn og passord er "admin"');var e=Object(s.f)();"true"===localStorage.getItem("loggedIn")?e.replace("/enquiries"):console.log("Ikke logget inn");var t=Object(p.a)({validationSchema:_}),a=t.register,l=t.handleSubmit,r=t.errors;return n.a.createElement("div",{className:"col-6 col-md-8 col-sm-12 container login"},n.a.createElement("h1",{className:"login__title"},"Welcome back"),n.a.createElement("form",{onSubmit:l((function(t,a){if("admin"!==a.target[0].value||"admin"!==a.target[1].value)return!1;localStorage.setItem("loggedIn",!0),e.push("/login"),e.replace("/enquiries")}))},n.a.createElement("label",null,"Username ",r.userName&&n.a.createElement(g,{text:r.userName.message}),n.a.createElement("input",{className:"col-12",type:"text",name:"userName",ref:a({required:!0})})),n.a.createElement("label",null,"Password ",r.password&&n.a.createElement(g,{text:r.password.message}),n.a.createElement("input",{className:"col-12",type:"password",name:"password",ref:a({required:!0})})),n.a.createElement("button",{className:"btn btn--success btn--big",type:"submit"},n.a.createElement("p",null,"Log in"))))}var N=a(36),k=a.n(N);function x(e){var t=Object(l.useRef)(),a=Object(s.f)(),r=Object(l.useState)({active:!1}),c=Object(b.a)(r,2),m=c[0],o=c[1];function i(){console.log("toggleclass tilkalt");var e=m.active;!0===e?setTimeout((function(){t.current.blur()})):!1===e&&setTimeout((function(){t.current.focus()})),o({active:!e})}function u(e){a.push(e),a.replace(e)}return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-12 account__menu"},n.a.createElement("h1",{className:"account__menu__title"},e.title),n.a.createElement("img",{className:"account__menu__icon",onMouseDown:m.active?console.log("hei"):i,src:k.a,alt:"Menu"})),n.a.createElement("div",{className:"col-12 account__menu__list--wrap"},n.a.createElement("ul",{className:m.active?"account__menu__list":"account__menu__list account__menu__list--hidden",ref:t,onBlur:i,tabIndex:"1"},n.a.createElement("li",{onClick:function(){return u("/enquiries")}},"Enquiries"),n.a.createElement("li",{onClick:function(){return u("/messages")}},"Messages"),n.a.createElement("li",{onClick:function(){return u("/addestablishment")}},"Add establishment"),n.a.createElement("li",{onClick:function(){console.log("Logg ut"),localStorage.setItem("loggedIn",!1),a.replace("/login")}},n.a.createElement("span",null,"Log out")))))}function y(e){return n.a.createElement("div",{className:"col-12 enquiries__article"},n.a.createElement("p",null,n.a.createElement("b",null,"Property: "),e.property),n.a.createElement("p",null,n.a.createElement("b",null,"Client: "),e.client),n.a.createElement("p",null,n.a.createElement("b",null,"E-mail: "),e.email),n.a.createElement("p",null,n.a.createElement("b",null,"Check-in: "),e.checkin),n.a.createElement("p",null,n.a.createElement("b",null,"Check-out: "),e.checkout))}function D(){var e=Object(s.f)(),t=Object(l.useState)({enquiries:[]}),a=Object(b.a)(t,2),r=a[0],c=a[1];return"true"===localStorage.getItem("loggedIn")?console.log("Bruker er logget inn"):e.replace("/login"),Object(l.useEffect)((function(){fetch("/enquiries.json").then((function(e){return e.json()})).then((function(e){c({enquiries:e})})).catch((function(e){console.log("noe gikk galt",e)}))}),[]),n.a.createElement("div",{className:"col-6 col-md-8 col-sm-12 account container"},n.a.createElement("div",{className:"col-12 breadcrumbs"},n.a.createElement("ul",null,n.a.createElement("li",{className:"breadcrumbs__link"},n.a.createElement(m.b,{to:"/"},"Home")),n.a.createElement("span",null,">"),n.a.createElement("li",{className:"breadcrumbs__link"},n.a.createElement(m.b,{to:"/enquiries"},"Enquiries")))),n.a.createElement(x,{title:"Enquiries"}),n.a.createElement("div",{className:"enquiries"},r.enquiries.map((function(e){return n.a.createElement(y,{property:e.establishment,client:e.clientName,email:e.email,checkin:e.checkin,checkout:e.checkout,key:e.clientName})}))))}function j(e){return n.a.createElement("div",{className:"col-12 messages__article"},n.a.createElement("b",null,e.client),n.a.createElement("p",null,e.message),n.a.createElement("button",{className:"btn btn--normal"},n.a.createElement("a",{href:"mailto:"+e.email},"Answer")))}function O(){var e=Object(s.f)(),t=Object(l.useState)({messages:[]}),a=Object(b.a)(t,2),r=a[0],c=a[1];return Object(l.useEffect)((function(){fetch("/contact.json").then((function(e){return e.json()})).then((function(e){c({messages:e})})).catch((function(e){console.log("noe gikk galt",e)}))}),[]),"true"===localStorage.getItem("loggedIn")?console.log("Bruker er logget inn"):e.replace("/login"),n.a.createElement("div",{className:"col-6 col-md-8 col-sm-12 account container"},n.a.createElement("div",{className:"col-12 breadcrumbs"},n.a.createElement("ul",null,n.a.createElement("li",{className:"breadcrumbs__link"},n.a.createElement(m.b,{to:"/"},"Home")),n.a.createElement("span",null,">"),n.a.createElement("li",{className:"breadcrumbs__link"},n.a.createElement(m.b,{to:"/messages"},"Messages")))),n.a.createElement(x,{title:"Messages"}),n.a.createElement("div",{className:"messages"},r.messages.map((function(e){return n.a.createElement(j,{client:e.clientName,email:e.email,message:e.message,key:e.clientName})}))))}function S(){var e=Object(s.f)();"true"===localStorage.getItem("loggedIn")?console.log("Bruker er logget inn"):e.replace("/login");var t=Object(l.useState)({id:1}),a=Object(b.a)(t,2),r=a[0],c=a[1],o=Object(l.useState)({formSubmitted:!1}),i=Object(b.a)(o,2),u=i[0],d=i[1],E=Object(l.useState)({errors:{establishment:!1,email:!1,imageUrl:!1,price:!1,maxGuests:!1,googleLat:!1,googleLong:!1,description:!1,selfCatering:!1,id:!1}}),h=Object(b.a)(E,2),p=h[0],f=h[1];function _(e,t){var a=p.errors;a[e]=t,f({errors:a})}return Object(l.useEffect)((function(){fetch("/establishments.json").then((function(e){return e.json()})).then((function(e){var t=e.length+1;c({id:t})})).catch((function(e){console.log("noe gikk galt",e)}))}),[]),n.a.createElement("div",{className:"col-6 col-md-8 col-sm-12 account container"},n.a.createElement("div",{className:"col-12 breadcrumbs"},n.a.createElement("ul",null,n.a.createElement("li",{className:"breadcrumbs__link"},n.a.createElement(m.b,{to:"/"},"Home")),n.a.createElement("span",null,">"),n.a.createElement("li",{className:"breadcrumbs__link"},n.a.createElement(m.b,{to:"/addestablishment"},"Add Establishment")))),n.a.createElement(x,{title:"Add Establishment"}),u.formSubmitted?n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Property successfully added"),n.a.createElement("p",null)):n.a.createElement(n.a.Fragment,null,n.a.createElement("br",null),n.a.createElement("form",{method:"POST",action:"/add-establishments-success.php",target:"hiddenframe",onSubmit:function(e){var t=/^\d{1,3}(\.|\,)*\d*$/;return void 0===e.target[0].value||""===e.target[0].value?(e.preventDefault(),_("establishment",!0),!1):(p.errors.establishment&&_("establishment",!1),/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.target[1].value)?(p.errors.email&&_("email",!1),void 0===e.target[2].value||""===e.target[2].value?(e.preventDefault(),_("imageUrl",!0),!1):(p.errors.imageUrl&&_("imageUrl",!1),t.test(e.target[3].value)?(p.errors.price&&_("price",!1),/^\d{1,3}$/.test(e.target[4].value)?(p.errors.maxGuests&&_("maxGuests",!1),t.test(e.target[5].value)?(p.errors.googleLat&&_("googleLat",!1),t.test(e.target[6].value)?(p.errors.googleLong&&_("googleLong",!1),void 0===e.target[7].value||""===e.target[7].value?(e.preventDefault(),_("description",!0),!1):(p.errors.description&&_("description",!1),!1===e.target[8].checked&&!1===e.target[9].checked?(e.preventDefault(),_("selfCatering",!0),!1):(p.errors.selfCatering&&_("selfCatering",!1),void setTimeout((function(){d({formSubmitted:!0})}),100)))):(e.preventDefault(),_("googleLong",!0),!1)):(e.preventDefault(),_("googleLat",!0),!1)):(e.preventDefault(),_("maxGuests",!0),!1)):(e.preventDefault(),_("price",!0),!1))):(e.preventDefault(),_("email",!0),!1))}},n.a.createElement("label",{htmlFor:"establishmentName"},"Establishment name ",n.a.createElement("span",null,"* "),p.errors.establishment&&n.a.createElement(g,{text:"Establishment name is required"}),n.a.createElement("input",{className:"col-12",type:"text",name:"establishmentName",id:"establishmentName"})),n.a.createElement("label",{htmlFor:"establishmentEmail"},"Establishment e-mail ",n.a.createElement("span",null,"* "),p.errors.email&&n.a.createElement(g,{text:"E-mail is required and must be valid"}),n.a.createElement("input",{className:"col-12",type:"text",name:"establishmentEmail",id:"establishmentEmail"})),n.a.createElement("label",{htmlFor:"imageUrl"},"Image URL ",n.a.createElement("span",null,"* "),p.errors.imageUrl&&n.a.createElement(g,{text:"Image URL is required"}),n.a.createElement("input",{className:"col-12",type:"text",name:"imageUrl",id:"imageUrl"})),n.a.createElement("label",{htmlFor:"price"},"Price per person per night ",n.a.createElement("span",null,"* "),p.errors.price&&n.a.createElement(g,{text:"Price is required and must be a number"}),n.a.createElement("input",{className:"col-12",type:"text",name:"price",id:"price"})),n.a.createElement("label",{htmlFor:"maxGuests"},"Maximum number of guests ",n.a.createElement("span",null,"* "),p.errors.maxGuests&&n.a.createElement(g,{text:"Number of guests is required and must be a whole number"}),n.a.createElement("input",{className:"col-12",type:"text",name:"maxGuests",id:"maxGuests"})),n.a.createElement("label",{htmlFor:"googleLat"},"Google Maps coordinates latitude ",n.a.createElement("span",null,"* "),p.errors.googleLat&&n.a.createElement(g,{text:"Latitude is required and must be a number"}),n.a.createElement("input",{className:"col-12",type:"text",name:"googleLat",id:"googleLat"})),n.a.createElement("label",{htmlFor:"googleLong"},"Google Maps coordinates longitude ",n.a.createElement("span",null,"* "),p.errors.googleLong&&n.a.createElement(g,{text:"Longitude is required and must be a number"}),n.a.createElement("input",{className:"col-12",type:"text",name:"googleLong",id:"googleLong"})),n.a.createElement("label",{htmlFor:"description"},"Property description ",n.a.createElement("span",null,"* "),p.errors.description&&n.a.createElement(g,{text:"Description is required"}),n.a.createElement("textarea",{className:"col-12",name:"description",id:"description"})),n.a.createElement("label",null,"Does your property offer self catering? ",n.a.createElement("span",null,"* "),p.errors.selfCatering&&n.a.createElement(g,{text:"Self catering must be filled out"})),n.a.createElement("br",null),n.a.createElement("label",{className:"label__radio"},n.a.createElement("input",{type:"radio",name:"selfCatering",id:"true",value:"true"}),"Yes"),n.a.createElement("label",{className:"label__radio"},n.a.createElement("input",{type:"radio",name:"selfCatering",id:"false",value:"false"}),"No"),n.a.createElement("br",null),n.a.createElement("input",{type:"hidden",name:"id",id:"id",value:r.id}),n.a.createElement("button",{className:"btn btn--success btn--big",type:"submit"},n.a.createElement("p",null,"Set up property")))),n.a.createElement("iframe",{name:"hiddenframe",className:"hidden__frame",title:"Hidden frame"}))}var q=a(37),C=a(38),F=a(41),L=a(40),w=a(20),U=a.n(w),A=function(e){Object(F.a)(a,e);var t=Object(L.a)(a);function a(){return Object(q.a)(this,a),t.apply(this,arguments)}return Object(C.a)(a,[{key:"componentDidMount",value:function(){this.map=U.a.map("map",{center:[50,10],zoom:13,layers:[U.a.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})]})}},{key:"componentDidUpdate",value:function(){var e,t;void 0===this.props.lat?(e=50,t=10):(e=this.props.lat,t=this.props.long),this.map.panTo({lat:e,lng:t}),this.marker=U.a.marker({lat:e,lng:t}).addTo(this.map)}},{key:"render",value:function(){return n.a.createElement("div",{id:"map"})}}]),a}(n.a.Component);function I(e){var t,a,l=Object(s.g)().id,r=Object(s.f)(),c={background:"url("+e.img+")center center / cover no-repeat"};try{l.match(/id=(.*)&fromDate/)[1],t=l.match(/fromDate=(.*)&toDate/)[1],a=l.match(/toDate=(.*)/)[1]}catch(o){r.replace("/404")}return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-12 breadcrumbs"},n.a.createElement("ul",null,n.a.createElement("li",{className:"breadcrumbs__link"},n.a.createElement(m.b,{to:"/"},"Home")),n.a.createElement("span",null,">"),n.a.createElement("li",{className:"breadcrumbs__link"},n.a.createElement(m.b,{to:"/results/search="+e.searchParam+"&fromDate="+t+"&toDate="+a+"&adults=2&children=1"},"Search results")),n.a.createElement("span",null,">"),n.a.createElement("li",{className:"breadcrumbs__link"},n.a.createElement(m.b,{to:l},"Hotel information")))),n.a.createElement("div",{className:"hotelinformation__article"},n.a.createElement("h1",{className:"hotelinformation__article__title"},e.title),n.a.createElement("div",{className:"hotelinformation__article__image",style:c}),n.a.createElement("p",{className:"hotelinformation__article__text"},e.desc),"true"===e.selfCatering&&n.a.createElement("p",{className:"hotelinformation__article__text"},n.a.createElement("i",null,"This property offers self catering.")),n.a.createElement("p",{className:"hotelinformation__article__text"},n.a.createElement("b",null,"Price:")," $",e.price," (USD)"),n.a.createElement("p",{className:"hotelinformation__article__text"},n.a.createElement("b",null,"Maximum number of guests:")," ",e.maxGuests),n.a.createElement("p",{className:"hotelinformation__article__text"},n.a.createElement("b",null,"Establishment e-mail:")," ",n.a.createElement("a",{href:e.email},e.email)),n.a.createElement(A,{lat:e.lat,long:e.long}),n.a.createElement("button",{className:"col-xs-12 btn btn--success btn--big"},n.a.createElement(m.b,{to:"/makeenquiry/"+l},"Reserve"))))}function M(){var e=Object(s.g)().id,t=Object(l.useState)({establishment:[]}),a=Object(b.a)(t,2),r=a[0],c=a[1],m=Object(l.useState)({data:{searchParam:""}}),o=Object(b.a)(m,2),i=o[0],u=o[1],d=Object(s.f)(),E=e.match(/id=(.*)&fromDate/)[1];return Object(l.useEffect)((function(){fetch("/establishments.json").then((function(e){return e.json()})).then((function(e){var t=e.find((function(e){return e.id===E}));void 0===t&&d.replace("/404");var a=t.establishmentName;a=a.replace(/ /g,"_"),u({data:a}),c({establishment:t})})).catch((function(e){console.log("noe gikk galt",e)}))}),[]),n.a.createElement("div",{className:"col-6 col-md-8 col-sm-12 hotelinformation container"},n.a.createElement(I,{img:r.establishment.imageUrl,title:r.establishment.establishmentName,desc:r.establishment.description,price:r.establishment.price,maxGuests:r.establishment.maxGuests,selfCatering:r.establishment.selfCatering,email:r.establishment.establishmentEmail,searchParam:i.data,long:r.establishment.googleLong,lat:r.establishment.googleLat,id:r.establishment.id}))}function G(){var e,t,a,r=Object(s.g)().id,c=Object(s.f)(),o=Object(l.useState)({ca:[]}),i=Object(b.a)(o,2),u=i[0],d=i[1],E=Object(l.useState)({formSubmitted:!1}),h=Object(b.a)(E,2),p=h[0],f=h[1],_=Object(l.useState)({errors:{establishment:!1,fromDate:!1,toDate:!1,name:!1,email:!1}}),v=Object(b.a)(_,2),N=v[0],k=v[1];try{e=r.match(/id=(.*)&fromDate/)[1],t=r.match(/fromDate=(.*)&toDate/)[1],a=r.match(/toDate=(.*)/)[1]}catch(y){c.replace("/404")}function x(e,t){var a=N.errors;a[e]=t,k({errors:a})}return Object(l.useEffect)((function(){fetch("/establishments.json").then((function(e){return e.json()})).then((function(t){var a=t.find((function(t){return t.id===e}));d({ca:a})})).catch((function(e){console.log("noe gikk galt",e)}))}),[]),n.a.createElement("div",{className:"col-6 col-md-8 col-sm-12 makeenquiry container"},n.a.createElement("div",{className:"col-12 breadcrumbs"},n.a.createElement("ul",null,n.a.createElement("li",{className:"breadcrumbs__link"},n.a.createElement(m.b,{to:"/"},"Home")),n.a.createElement("span",null,">"),n.a.createElement("li",{className:"breadcrumbs__link"},n.a.createElement(m.b,{to:"/makeenquiry/"+r},"Make enquiry")))),p.formSubmitted?n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Thank you for your booking!"),n.a.createElement("p",null,"We have sent you an e-mail with more details about your booking, if you have any more questions please head over to ",n.a.createElement(m.b,{to:"/contact"},"our contact us page"),".")):n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Your booking"),n.a.createElement("form",{method:"POST",action:"/enquiry-success.php",target:"hiddenframe",onSubmit:function(e){var t=/^\d{4}-\d{2}-\d{2}$/;return void 0===e.target[0].value||""===e.target[0].value?(e.preventDefault(),x("establishment",!0),!1):(N.errors.establishment&&x("establishment",!1),t.test(e.target[1].value)?(N.errors.fromDate&&x("fromDate",!1),t.test(e.target[1].value)?(N.errors.toDate&&x("toDate",!1),void 0===e.target[3].value||""===e.target[3].value?(e.preventDefault(),x("name",!0),!1):(N.errors.name&&x("name",!1),/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.target[4].value)?(N.errors.email&&x("email",!1),void setTimeout((function(){f({formSubmitted:!0})}),100)):(e.preventDefault(),x("email",!0),!1))):(e.preventDefault(),x("toDate",!0),!1)):(e.preventDefault(),x("fromDate",!0),!1))}},n.a.createElement("label",null,"Establishment ",n.a.createElement("span",null,"* "),N.errors.establishment&&n.a.createElement(g,{text:"Establishment is required"}),n.a.createElement("input",{className:"col-12 makeenquiry__input makeenquiry__input--disabled",name:"establishment",type:"text",value:u.ca.establishmentName,disabled:!0,required:!0})),n.a.createElement("label",null,"Check-in ",n.a.createElement("span",null,"* "),N.errors.fromDate&&n.a.createElement(g,{text:"Check-in is required"}),n.a.createElement("input",{className:"col-12 makeenquiry__input",name:"checkin",type:"date",defaultValue:t,required:!0})),n.a.createElement("label",null,"Check-out ",n.a.createElement("span",null,"* "),N.errors.toDate&&n.a.createElement(g,{text:"Check-out is required"}),n.a.createElement("input",{className:"col-12 makeenquiry__input",name:"checkout",type:"date",defaultValue:a,required:!0})),n.a.createElement("h2",null,"Contact information"),n.a.createElement("label",null,"Full name ",n.a.createElement("span",null,"* "),N.errors.name&&n.a.createElement(g,{text:"Name is required"}),n.a.createElement("input",{className:"col-12 makeenquiry__input",name:"clientName",type:"text",placeholder:"John Smith"})),n.a.createElement("label",null,"E-mail ",n.a.createElement("span",null,"* "),N.errors.email&&n.a.createElement(g,{text:"E-mail is required and must be valid"}),n.a.createElement("input",{className:"col-12 makeenquiry__input",name:"email",type:"text",placeholder:"jonathan.smithsonian@gmail.com"})),n.a.createElement("button",{className:"btn btn--success btn--big",type:"submit"},n.a.createElement("p",null,"Make booking")))),n.a.createElement("iframe",{name:"hiddenframe",className:"hidden__frame",title:"Hidden frame"}))}function H(){return n.a.createElement("div",{className:"col-6 col-md-8 col-sm-12 nomatch container"},n.a.createElement("h1",{className:"nomatch__title"},"404 Not found"),n.a.createElement("p",{className:"nomatch__text"},"The page you were looking for could not be found. You might have searched for an invalid URL, make sure your URL is typed out correctly."))}function P(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1;a<10&&(a="0"+a.toString());var r=e.getDate();r<10&&(r="0"+r.toString());var c=t+"-"+a+"-"+r,s=Object(l.useState)({data:{search:"Sunsssset Beach",fromDate:c,toDate:c,adults:2,children:1,url:"/results/search=Sunsssset_Beach&fromDate="+c+"&toDate="+c+"&adults=2&children=1"}}),o=Object(b.a)(s,2),i=o[0],u=o[1];function d(e,t){var a=e.target.value;a=a.replace(/ /g,"_");var l=i.data;l[t]=a,l.url="/results/search="+l.search+"&fromDate="+l.fromDate+"&toDate="+l.toDate+"&adults="+l.adults+"&children="+l.children,u({data:l})}return n.a.createElement("div",{className:"col-12 hero"},n.a.createElement("div",{className:"col-6 col-md-8 col-sm-12 container"},n.a.createElement("h1",{className:"col-12 hero__title"},"Your first stop for hotels, cabins and more "),n.a.createElement("form",{className:"col-12 hero__form"},n.a.createElement("label",null,"Search",n.a.createElement("input",{className:"col-12 hero__form__input",placeholder:"Hotel",name:"search",type:"text",defaultValue:i.data.search,onChange:function(e){return d(e,"search")}})),n.a.createElement("p",{className:"col-6"},n.a.createElement("label",{htmlFor:"fromDate"},"Check-in")),n.a.createElement("p",{className:"col-6"},n.a.createElement("label",{className:"labelxs--hidden",htmlFor:"toDate"},"Check-out")),n.a.createElement("input",{className:"col-6 col-xs-12 hero__form__input",placeholder:"Date",name:"fromDate",type:"date",defaultValue:i.data.fromDate,onChange:function(e){return d(e,"fromDate")}}),n.a.createElement("label",{className:"labelxs--visible",htmlFor:"toDate"},"Check-out"),n.a.createElement("input",{className:"col-6 col-xs-12 hero__form__input",placeholder:"Date",name:"toDate",type:"date",defaultValue:i.data.toDate,onChange:function(e){return d(e,"toDate")}}),n.a.createElement("p",{className:"col-6"},n.a.createElement("label",{htmlFor:"adults"},"Adults")),n.a.createElement("p",{className:"col-6"},n.a.createElement("label",{className:"labelxs--hidden",htmlFor:"children"},"Children")),n.a.createElement("input",{className:"col-6 col-xs-12 hero__form__input",placeholder:"Adults",name:"adults",type:"number",defaultValue:i.data.adults,min:"1",max:"10",onChange:function(e){return d(e,"adults")}}),n.a.createElement("label",{className:"labelxs--visible",htmlFor:"children"},"Children"),n.a.createElement("input",{className:"col-6 col-xs-12 hero__form__input",placeholder:"Children",name:"children",defaultValue:i.data.children,type:"number",min:"0",max:"10",onChange:function(e){return d(e,"children")}}),n.a.createElement("button",{className:"hero__form__btn btn btn--normal btn--big"},n.a.createElement(m.b,{to:i.data.url},"Search")))))}function T(){var e=Object(l.useState)({formSubmitted:!1}),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)({errors:{name:!1,email:!1,message:!1}}),s=Object(b.a)(c,2),o=s[0],i=s[1];function u(e,t){var a=o.errors;a[e]=t,i({errors:a})}return n.a.createElement("div",{className:"col-12 contact"},n.a.createElement("div",{className:"col-6 col-md-8 col-sm-12 container"},n.a.createElement("div",{className:"breadcrumbs"},n.a.createElement("ul",null,n.a.createElement("li",{className:"breadcrumbs__link"},n.a.createElement(m.b,{to:"/"},"Home")),n.a.createElement("span",null,">"),n.a.createElement("li",{className:"breadcrumbs__link"},n.a.createElement(m.b,{to:"/contact"},"Contact us")))),a.formSubmitted?n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Thank you for your message!"),n.a.createElement("p",null,"We've sent a confirmation to your e-mail and we will contact you as soon as possible")):n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"contact__title"},"How can we help?"),n.a.createElement("form",{method:"POST",action:"/contact-success.php",onSubmit:function(e){return void 0===e.target[0].value||""===e.target[0].value?(e.preventDefault(),u("name",!0),!1):(o.errors.name&&u("name",!1),/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.target[1].value)?(o.errors.email&&u("email",!1),void 0===e.target[2].value||""===e.target[2].value?(e.preventDefault(),u("message",!0),!1):(o.errors.name&&u("message",!1),setTimeout((function(){r({formSubmitted:!0})}),100),void console.log("onsubmit kalt!"))):(e.preventDefault(),u("email",!0),!1))},className:"contact__form",target:"hiddenframe"},n.a.createElement("label",null,"Full name ",n.a.createElement("span",null,"* "),o.errors.name&&n.a.createElement(g,{text:"Name is required"}),n.a.createElement("input",{className:"col-12 contact__form__input",autoComplete:"off",type:"text",name:"clientName",id:"clientName"})),n.a.createElement("label",null,"E-mail ",n.a.createElement("span",null,"* "),o.errors.email&&n.a.createElement(g,{text:"E-mail is required and must be valid"}),n.a.createElement("input",{className:"col-12 contact__form__input",type:"text",name:"email",id:"email"})),n.a.createElement("label",null,"Message ",n.a.createElement("span",null,"* "),o.errors.message&&n.a.createElement(g,{text:"Message is required"}),n.a.createElement("textarea",{name:"message",id:"message",className:"col-12 contact__form__textarea"})),n.a.createElement("button",{type:"submit",className:"col-xs-12 btn btn--success btn--big contact__form__btn"},n.a.createElement("p",null,"Send message")))),n.a.createElement("iframe",{name:"hiddenframe",className:"hidden__frame",title:"Hidden frame"})))}var z=function(){return n.a.createElement("div",{className:"col-lg-12 App"},n.a.createElement(m.a,null,n.a.createElement(u,null),n.a.createElement(s.c,null,n.a.createElement(s.a,{component:P,path:"/",exact:!0}),n.a.createElement(s.a,{component:T,path:"/contact"}),n.a.createElement(s.a,{component:v,path:"/login"}),n.a.createElement(s.a,{component:D,path:"/enquiries"}),n.a.createElement(s.a,{component:O,path:"/messages"}),n.a.createElement(s.a,{component:S,path:"/addestablishment"}),n.a.createElement(s.a,{path:"/hotelinformation/:id",children:n.a.createElement(M,null)}),n.a.createElement(s.a,{path:"/results/:id",children:n.a.createElement(h,null)}),n.a.createElement(s.a,{path:"/makeenquiry/:id",children:n.a.createElement(G,null)}),n.a.createElement(s.a,{component:H,path:"/404"}),n.a.createElement(s.a,{component:H,path:"*"})),n.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.5d2deb99.chunk.js.map
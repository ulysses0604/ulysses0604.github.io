(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(66)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(18),r=a.n(c),i=(a(41),a(7)),o=a(8),s=a(10),m=a(9),u=a(12),d=a(11),E=a(13),b=a(17),k=(a(42),a(43),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).clickHandler=a.clickHandler.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:"backdrop",onClick:this.clickHandler})}},{key:"clickHandler",value:function(){this.props.backdropClickHandler()}}]),t}(n.Component)),h=a(0),p=a(29),g=(a(44),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).clickHandler=a.clickHandler.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("header",{className:"navbar",style:{padding:0}},n.createElement("nav",{className:"navbar_navigation"},n.createElement("div",{className:"navbar__toggle-button",onClick:this.clickHandler},n.createElement(h.b.Provider,{value:{color:"white",size:"1.5em"}},n.createElement(p.a,null))),n.createElement("div",null,n.createElement(E.b,{to:"/",className:"navbar_title"},"Portfolio")),n.createElement("div",{className:"spacer",style:{flex:1}}),n.createElement("div",{className:"navbar__navigation-items"},n.createElement("ul",null,n.createElement(E.b,{to:"/about"},n.createElement("li",null,"about")),n.createElement(E.b,{to:"/works"},n.createElement("li",null,"works")),n.createElement(E.b,{to:"/skills"},n.createElement("li",null,"skills"))))))}},{key:"clickHandler",value:function(){this.props.drawToggleClickHandler()}}]),t}(n.Component)),f=(a(53),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).clickHandler=a.clickHandler.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=["side-drawer"];return this.props.show&&(e=["side-drawer","open"]),n.createElement("nav",{className:e.join(" ")},n.createElement("div",{className:"side-drawer__title-area"},n.createElement("p",{className:"side-drawer__title"},"Menu")),n.createElement("ul",null,n.createElement(E.b,{to:"/about"},n.createElement("li",{onClick:this.clickHandler},"About")),n.createElement(E.b,{to:"/works"},n.createElement("li",{onClick:this.clickHandler},"Works")),n.createElement(E.b,{to:"/skills"},n.createElement("li",{onClick:this.clickHandler},"Skills"))))}},{key:"clickHandler",value:function(){this.props.drawToggleClickHandler()}}]),t}(n.Component)),O=(a(54),function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("main",{className:"main"},n.createElement("h1",{className:"home-page__title"},"Yu Nishimura Portfolio Site"))}}]),t}(n.Component)),j=a(32),v=(a(55),function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("main",{className:"main"},n.createElement("h1",{className:"about-page__title"},"About"),n.createElement("div",{className:"about-page__card"},n.createElement("table",{className:"about-page__table"},n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("td",null,"Yu Nishimura")),n.createElement("tr",{className:"about-page__icons"},n.createElement("td",null,n.createElement(h.b.Provider,{value:{size:"5em"}},n.createElement(j.a,null),">"))))))}}]),t}(n.Component)),_=a(67),H=a(68),w=a(69),N=a(70),C=a(71),y=a(72),T=a(73),x=(a(56),function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("main",{className:"main"},n.createElement("h1",{className:"works-page__title"},"Works"),n.createElement(_.a,{fluid:!0,className:"works-page__container"},n.createElement(H.a,null,n.createElement(w.a,{xs:"12",md:"4"},n.createElement(N.a,{className:"works-page__card"},n.createElement(C.a,null,n.createElement(y.a,null,"Hoge1"),n.createElement(T.a,null,"hogehogehoge"),n.createElement("div",{className:"works-page__source-link"},n.createElement("a",{href:"hoge"},"URL"))))),n.createElement(w.a,{xs:"12",md:"4"},n.createElement(N.a,{className:"works-page__card"},n.createElement(C.a,null,n.createElement(y.a,null,"Hoge2"),n.createElement(T.a,null,"hogehogehoge"),n.createElement("div",{className:"works-page__source-link"},n.createElement("a",{href:"hoge"},"URL"))))))))}}]),t}(n.Component)),S=a(76),P=a(74),W=a(75),A=(a(57),function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("main",{className:"main"},n.createElement("h1",{className:"skills-page__title"},"Skills"),n.createElement(_.a,{fluid:!0,className:"skills-page__container"},n.createElement(H.a,null,n.createElement(w.a,{xs:"12",md:"4"},n.createElement(S.a,{className:"skills-page__toast"},n.createElement(P.a,{icon:"info"},"Hoge1"),n.createElement(W.a,null,"HogeHoge"))),n.createElement(w.a,{xs:"12",md:"4"},n.createElement(S.a,{className:"skills-page__toast"},n.createElement(P.a,{icon:"info"},"Hoge2"),n.createElement(W.a,null,"HogeHoge"))),n.createElement(w.a,{xs:"12",md:"4"},n.createElement(S.a,{className:"skills-page__toast"},n.createElement(P.a,{icon:"info"},"Hoge3"),n.createElement(W.a,null,"HogeHoge"))),n.createElement(w.a,{xs:"12",md:"4"},n.createElement(S.a,{className:"skills-page__toast"},n.createElement(P.a,{icon:"info"},"Hoge4"),n.createElement(W.a,null,"HogeHoge"))))))}}]),t}(n.Component)),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).drawToggleClickHandler=function(){a.setState(function(e){return{isOpen:!e.isOpen}})},a.backdropClickHandler=function(){a.setState({isOpen:!1})},a.state={isOpen:!1},a.drawToggleClickHandler=a.drawToggleClickHandler.bind(Object(u.a)(a)),a.backdropClickHandler=a.backdropClickHandler.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;return this.state.isOpen&&(e=n.createElement(k,{backdropClickHandler:this.backdropClickHandler})),n.createElement(E.a,null,n.createElement("div",{className:"App"},n.createElement(g,{drawToggleClickHandler:this.drawToggleClickHandler}),n.createElement(f,{show:this.state.isOpen,drawToggleClickHandler:this.drawToggleClickHandler}),e,n.createElement(b.c,null,n.createElement(b.a,{path:"/about",component:v}),n.createElement(b.a,{path:"/works",component:x}),n.createElement(b.a,{path:"/skills",component:A}),n.createElement(b.a,{path:"/",component:O}),n.createElement(b.a,{component:O}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(65);r.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.1a4bc74f.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/atico.65ba0636.jpeg"},36:function(e,a,t){e.exports=t.p+"static/media/3.adc479a6.jpeg"},37:function(e,a,t){e.exports=t.p+"static/media/4.8e37e18b.jpeg"},38:function(e,a,t){e.exports=t.p+"static/media/1.cfe96790.jpeg"},39:function(e,a,t){e.exports=t.p+"static/media/2.3b6060fa.jpeg"},43:function(e,a,t){e.exports=t(81)},48:function(e,a,t){},74:function(e,a,t){e.exports=t.p+"static/media/logo2.7a98f611.png"},81:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(19),c=t.n(i),o=(t(48),t(3)),s=t(4),l=t(6),u=t(5),m=t(7),d=t(13),p=t(2),g=function(e){var a=e.handleSubmit,t=e.handleChange,n=e.error,i=e.email,c=e.password;return r.a.createElement("div",{className:"uk-card uk-card-default uk-card-body uk-card-large "},r.a.createElement("form",{className:"uk-form-stacked",onSubmit:a},r.a.createElement("div",{className:"uk-margin"},r.a.createElement("label",{className:"uk-form-label",htmlFor:"email"},"Email:"),r.a.createElement("div",{className:"uk-inline"},r.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: user"}),r.a.createElement("input",{value:i,onChange:t,className:"uk-input",type:"email",name:"email"}))),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("label",{className:"uk-form-label",htmlFor:"password"},"Password:"),r.a.createElement("div",{className:"uk-inline"},r.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: lock"}),r.a.createElement("input",{value:c,onChange:t,className:"uk-input",type:"password",name:"password"}))),n&&r.a.createElement("div",{className:"uk-alert-danger","uk-alert":"true"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"uk-flex uk-flex-center"},r.a.createElement("button",{className:"uk-button uk-button-primary"},"Login")),r.a.createElement("div",{className:"uk-flex uk-flex-center"},r.a.createElement("span",null,"\xbfNo tienes cuenta? Registrate ",r.a.createElement(p.b,{to:"/register"},"aqui")," "))))},k=t(18),h=t.n(k);h.a.defaults.headers={"Content-Type":"application/json"};var f="https://keex.herokuapp.com/api",E=function(e){return h.a.post("".concat(f,"/auth/login"),e).then(function(e){return e.data}).catch(function(e){throw e.response.data})},v=function(e){return h.a.post("".concat(f,"/auth/register"),e).then(function(e){return e.data}).catch(function(e){throw e.response.data})},b=t(15),j=t.n(b),x=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={auth:{email:"",password:""}},t.handleSubmit=function(e){e.preventDefault();var a=t.state.auth,n=t.props.location.pathname;if(!a.email.length)return t.setState({error:"Debes agregar una tarea"});"/login"===n?t.onLogin():t.onRegister()},t.onLogin=function(){var e=t.state.auth;E(e).then(function(e){var a=e.token,n=e.user;console.log("Done"),localStorage.setItem("TOKEN",a),localStorage.setItem("USER",JSON.stringify(n)),t.props.setUser(n),t.props.history.push("/home")}).catch(function(e){return t.setState({error:e.message})})},t.onRegister=function(){var e=t.state.auth;v(e).then(function(e){var a=e.token,n=e.user;localStorage.setItem("TOKEN",a),localStorage.setItem("USER",JSON.stringify(n)),t.props.setUser(n),t.props.history.push("/")}).catch(function(e){return t.setState({error:e.message})})},t.handleChange=function(e){var a=t.state.auth;a[e.target.name]=e.target.value,t.setState({auth:a})},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){console.log(this.props);var e=this.state,a=e.error,t=e.auth;return r.a.createElement("div",{className:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",style:{backgroundImage:"url(".concat(j.a,")"),height:"90vh"}},r.a.createElement("div",{className:"uk-flex uk-flex-center "},r.a.createElement(g,Object.assign({},t,{error:a,handleSubmit:this.handleSubmit,handleChange:this.handleChange}))))}}]),a}(n.Component),N=t(35),y=t(9),w=t.n(y),O=function(){return r.a.createElement("div",{className:"uk-flex uk-flex-center uk-flex-middle uk-height-large uk-background-cover uk-light uk-flex","uk-parallax":"bgy: -200",style:{backgroundImage:"url(".concat(j.a,")"),height:"75vh"}},r.a.createElement("div",{className:"uk-flex uk-flex-column uk-text-center"},r.a.createElement("h1",{className:"titlehkeex"},"KEEX"),r.a.createElement("p",{className:"uk-text-large uk-flex uk-flex-center"},"En una App para organizar una red propia de trueque")))},S=t(36),C=t.n(S),A=t(37),L=t.n(A),R=function(e){var a=e.image;return r.a.createElement("div",{className:" uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-column uk-flex-middle"},r.a.createElement("img",{src:a,width:"250px",height:"250px"}),r.a.createElement("p",null," Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))},U=function(e){var a=e.toons;return r.a.createElement("div",{className:" uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle uk-flex-column",style:{backgroundColor:"#f7f7f7",padding:"5% 20% 7%",height:"70vh"}},r.a.createElement("div",{className:"uk-container-center uk-text-center"},r.a.createElement("h2",{className:"subtitleh2 uk-text-center",style:{color:"#6e6e6e"}},"\xbfKEEX EN QU\xc9 CONSISTE?"),r.a.createElement("p",{className:"uk-text-large uk-text-center"},"En que cualquier sector de la sociedad puede hacer un intercambio de alg\xfan objeto y servicio por otros objetos o servicios.")),r.a.createElement("div",{className:"uk-flex uk-flex-middle"},a.map(function(e,a){return r.a.createElement(R,Object.assign({key:a},e))}),r.a.createElement("div",{className:" uk-panel uk-flex uk-flex-center@s uk-flex-column"},r.a.createElement("div",null,r.a.createElement("img",{src:C.a,width:"150px",height:"150px"}),r.a.createElement("img",{src:L.a,width:"150px",height:"150px"})),r.a.createElement("p",null," Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))},I=function(){return r.a.createElement("div",{className:"footercontainer"},r.a.createElement("div",{className:"uk-container uk-container-center"},r.a.createElement("footer",{className:"uk-text-center uk-flex"},r.a.createElement("div",{className:"uk-text-center uk-width-medium-1-3 uk-margin-bottom uk-text-primary uk-text-lead"},r.a.createElement("p",{className:"footerkeex"},"KEEX")),r.a.createElement("div",{className:"uk-text-center uk-width-medium-1-3 uk-margin-bottom"},r.a.createElement("h2",{className:"footerh2"},"\xbfNecesitas ayuda? contactanos ",r.a.createElement("span",{className:"footerspan"},"info@keex.com.mx")," "),r.a.createElement("p",{className:"footerh2"},"Chatea con nosotros o mandanos un mensaje")),r.a.createElement("div",{className:"uk-text-center uk-width-medium-1-3 uk-margin-bottom"},r.a.createElement("h2",{className:"footerh2"}," Siguenos "),r.a.createElement("a",{href:"",className:"uk-icon-button uk-margin-small-right","uk-icon":"twitter"}),r.a.createElement("a",{href:"",class:"uk-icon-button uk-margin-small-right","uk-icon":"facebook"}),r.a.createElement("a",{href:"",class:"uk-icon-button uk-margin-small-right","uk-icon":"pinterest"})))))},T=t(38),F=t.n(T),K=t(39),q=t.n(K),z=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={toons:[{image:F.a,despriction:"lorem impus doto asdasdajdsiasjdijsaidjsaidjsaidjsaijdsaijdisajdisajd"},{image:q.a,despriction:"lorem impus doto asdasdajdsiasjdijsaidjsaidjsaidjsaijdsaijdisajdisajd"}]},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.toons;return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement("div",Object(N.a)({className:" uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",style:{padding:"5% 20% 7%"}},"style",{height:"600px",backgroundColor:"#2b3442"}),r.a.createElement("div",{className:"uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical"},r.a.createElement("h1",{"uk-parallax":"opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;",style:{color:"#fff"}}," \xbfKEEX QUE ES? "),r.a.createElement("p",{"uk-parallax":"opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;",style:{fontSize:26}},"En una App para organizar una red propia de trueque."))),r.a.createElement(U,{toons:e}),r.a.createElement(I,null))}}]),a}(n.Component),_=function(e){var a=e.image,t=e.name,n=e.description;return r.a.createElement("div",{style:{margin:20}},r.a.createElement("div",{className:"uk-card uk-card-default"},r.a.createElement("div",{className:"uk-card-media-top"},r.a.createElement("img",{src:a,alt:""})),r.a.createElement("div",{className:"uk-card-body"},r.a.createElement("h3",{className:"uk-card-title"},t),r.a.createElement("p",null,n))))},J=function(){return r.a.createElement("form",null,r.a.createElement("fieldset",{className:"uk-fieldset"},r.a.createElement("div",{className:"uk-flex uk-flex-center uk-flex-middle uk uk-margin"},r.a.createElement("select",{className:"uk-select uk-width-2-3@m",style:{marginRight:10}},r.a.createElement("option",null,"Selecciona una categoria"),r.a.createElement("option",null,"Option 01"),r.a.createElement("option",null,"Option 02")))))},V=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={data:[{image:w.a,name:"Cosas viejas",description:"Lorem impsu dolor askdoasijdoiasdnoi",category:"123nijisajd213",inStock:!0},{image:"https://i5.walmartimages.com/asr/e4bdfc8b-3e36-406d-ad42-7f900a20b7fd_1.63516d57aa74f6a37af3326c15a0a803.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",name:"Cartas yugi",description:"Lorem impsu dolor Cartas",category:"123nijisajd213",inStock:!0},{image:w.a,name:"Cosas nuevas",description:"Lorem impsu dolor askdoasijdoiasdnoi",category:"123nijisajd213",inStock:!0},{image:w.a,name:"Cosas medianas",description:"Lorem impsu dolor askdoasijdoiasdnoi",category:"123nijisajd213",inStock:!0},{image:w.a,name:"Cosas musica",description:"Lorem ipsum dolor sit amet, consectetur adipiscing.",category:"123nijisajd213",inStock:!0}],notFound:{image:"https://i.pinimg.com/originals/7c/42/97/7c42975ef89a34943bcb5e022a326840.jpg",name:"No hay produtos",description:"Lorem imaskdoasijdoiasdnoipsu dolor ",category:"123nijisajd213",inStock:!0}},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.data;e.notFound;return r.a.createElement("div",{style:{backgroundColor:"#262626",padding:80,height:null}},r.a.createElement(J,null),r.a.createElement("div",{className:"uk-container uk-container-center",style:{backgroundColor:"#fff",width:"100%",padding:10,borderRadius:15,height:null}},r.a.createElement("div",{className:"uk-child-width-1-5@m uk-flex uk-flex-wrap uk-flex-center","uk-grid":!0},a.map(function(e,a){return r.a.createElement(_,Object.assign({key:a},e))}))))}}]),a}(n.Component),X=t(40),D=t.n(X),Q=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(l.a)(this,Object(u.a)(a).call(this))).state={raiting:1},e}return Object(m.a)(a,e),Object(s.a)(a,[{key:"onStartClick",value:function(e,a,t){this.setState({raiting:e})}},{key:"render",value:function(){var e=this.state.raiting;return r.a.createElement("div",{className:""},r.a.createElement("h2",null,"Keexting desde: ",e," "),r.a.createElement(D.a,{name:"rate1",starCount:5,value:e}))}}]),a}(r.a.Component),Z=function(e){var a=e.username,t=e.description,n=e.image;e.raiting;return r.a.createElement("div",{className:" uk-flex uk-flex-center uk-flex-column\t"},r.a.createElement("div",{className:"uk-container uk-container-center "},r.a.createElement("img",{src:n,width:"200px",height:"200px",style:{borderRadius:100}})),r.a.createElement("div",{className:"uk-container uk-container-center",style:{backgroundColor:"#fff",padding:10,borderRadius:15,marginTop:20}},r.a.createElement("article",{className:"uk-article"},r.a.createElement("h1",{className:"uk-article-title"},a),r.a.createElement("p",{className:"uk-article-meta"},"Acerca de mi:"),r.a.createElement("p",{className:"uk-text-lead"},t),r.a.createElement("div",{className:"uk-grid-small uk-child-width-auto","uk-grid":!0},r.a.createElement("div",null,r.a.createElement("a",{className:"uk-button uk-button-text",href:"#"},"raiting")),r.a.createElement("div",null,r.a.createElement(Q,null))))))},B=function(e){var a=e.description,t=e.image,n=e.name;return r.a.createElement("div",{className:" uk-card uk-card-default",style:{margin:20,borderRadius:15,padding:10}},r.a.createElement("div",{className:"uk-card-media-center uk-flex uk-flex-center"},r.a.createElement("img",{src:t,width:"200px",height:"500px",alt:""})),r.a.createElement("div",null,r.a.createElement("h3",{className:"uk-card-title card-title"},n),r.a.createElement("p",null,a)))},G=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={data:[{image:w.a,name:"Cosas viejas",description:"Lorem impsu dolor askdoasijdoiasdnoi",category:"123nijisajd213",inStock:!0},{image:"https://pbs.twimg.com/media/DvmISHOXgAAc-VV.png",name:"Godzilla",description:"Lorem impsu dolor Cartas",category:"123nijisajd213",inStock:!0},{image:w.a,name:"Cosas nuevas",description:"Lorem impsu dolor askdoasijdoiasdnoi",category:"123nijisajd213",inStock:!1},{image:w.a,name:"Cosas medianas",description:"Lorem impsu dolor askdoasijdoiasdnoi",category:"123nijisajd213",inStock:!0},{image:w.a,name:"Cosas musica",description:"Lorem ipsum dolor sit amet, consectetur adipiscing.",category:"123nijisajd213",inStock:!1}],notFound:{image:"http://3.bp.blogspot.com/_OKuxUTAuezU/RtOMIQKUGyI/AAAAAAAAABE/8zZgXZKHNew/s320/homero.gif",name:"A\xfan no subes productos",description:"Lorem imaskdoasijdoiasdnoipsu dolor ",category:"123nijisajd213",inStock:!0},user:{username:"Jesus Alonso",lastname:"Sanchez",email:"info@keex.com.mx",raiting:9,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdi02uZ-aY9zVLk3TcmmdQiZeJuZewCPoR1DQicRCqrVge-8q",description:"Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet "}},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.data,t=(e.notFound,e.user);return r.a.createElement("div",{style:{backgroundColor:"#262626",padding:60}},r.a.createElement("div",{style:{backgroundColor:"rgb(43, 52, 66)",width:"100%",borderRadius:15,padding:20}},r.a.createElement(Z,t),r.a.createElement("div",{className:"space uk-child-width-1-4@m uk-flex uk-flex-wrap uk-flex-center ",style:{marginTop:20,backgroundColor:"#fff",padding:10,borderRadius:15}},a.map(function(e,a){return r.a.createElement(B,e)}))))}}]),a}(n.Component),P=function(e){e.products;return r.a.createElement("div",{className:"uk-flex uk-flex-center",tabindex:"-1","uk-slideshow":"ratio: 7:3; animation: push"},r.a.createElement("button",{className:"uk-button uk-button-primary","uk-icon":"icon: heart"},"Te gusta"),r.a.createElement("img",{src:"http://idata.over-blog.com/0/36/82/48/ONVNI/Sirene01.jpg"}),r.a.createElement("button",{className:"uk-button uk-button-danger","uk-icon":"icon: close"},"No te gusta"))},W=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={products:[{name:"Platillo volador",image:"https://cdn.pixabay.com/photo/2018/12/16/22/47/ufo-3879499_960_720.jpg",category:"Transporte",description:""},{name:"Guante Tanos",image:"https://i.pinimg.com/736x/d8/a1/df/d8a1df515a673e791ce4a8743fc56216.jpg",category:"Accesorios",description:""},{name:"Pepcilindro",image:"https://i.pinimg.com/originals/a6/39/c1/a639c10916c1ff3367eab3a71ae3a160.jpg",category:"Accesorios",description:""},{name:"Switch Nintendo",image:"https://www.nintendo.com/content/dam/noa/en_US/hardware/switch/nintendo-switch-neon/gallery/bundle_color_portable%20(1).jpg",category:"Video Juegos",description:""},{name:"Martillo Thor",image:"https://lafrikileria.com/35037-large_default/replica-11-martillo-thor-mjolnir-con-luz-marvel-legends-hasbro.jpg",category:"Accesorios",description:""}]},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.products;return r.a.createElement("div",{style:{backgroundColor:"#262626",padding:60}},r.a.createElement("div",{style:{backgroundColor:"rgb(43, 52, 66)",borderRadius:15,padding:20}},r.a.createElement("div",{style:{marginTop:20}},r.a.createElement(P,{products:e}))))}}]),a}(n.Component),H=function(e){var a=e.setUser,t=e.user;return r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(z,Object.assign({user:t},e))}}),r.a.createElement(d.a,{path:"/home",render:function(e){return r.a.createElement(V,Object.assign({user:t},e))}}),r.a.createElement(d.a,{path:"/profile",render:function(e){return r.a.createElement(G,Object.assign({user:t},e))}}),r.a.createElement(d.a,{exact:!0,path:"/login",render:function(e){return r.a.createElement(x,Object.assign({},e,{setUser:a,user:t}))}}),r.a.createElement(d.a,{exact:!0,path:"/register",render:function(e){return r.a.createElement(x,Object.assign({},e,{setUser:a,user:t}))}}),r.a.createElement(d.a,{exact:!0,path:"/swipe",render:function(e){return r.a.createElement(W,Object.assign({},e,{setUser:a,user:t}))}}))},M=function(e){var a=e._id,n=(e.email,e.username,e.logout);return r.a.createElement("nav",{className:"uk-navbar-container","uk-navbar":"true","uk-sticky":"bottom: #offset"},r.a.createElement("div",{className:"uk-navbar-left"},r.a.createElement("a",{className:"uk-navbar-item uk-logo uk-flex uk-flex-left",href:"/"},r.a.createElement("img",{src:t(74),width:"18%"}))),r.a.createElement("div",{className:"uk-navbar-right"},a?r.a.createElement("ul",{className:"uk-navbar-nav"},r.a.createElement("li",{onClick:n},r.a.createElement("a",{href:"#navbar"},"Cerrar sesi\xf3n"))):r.a.createElement("ul",{className:"uk-navbar-nav"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/login"},"Iniciar sesi\xf3n")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/register"},"Registro")))))},Y=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={user:{}},t.setUser=function(e){t.setState({user:e})},t.logout=function(){localStorage.removeItem("TOKEN"),localStorage.removeItem("USER");var e=t.state.user;e={},t.setState({user:e}),window.location.reload()},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("USER"));e&&this.setState({user:e})}},{key:"render",value:function(){var e=this.state.user;return r.a.createElement("div",{className:"App"},r.a.createElement(M,Object.assign({},e,{logout:this.logout})),r.a.createElement("div",null,r.a.createElement(H,{setUser:this.setUser,user:e})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=t(41),ee=t.n($),ae=t(42),te=t.n(ae);t(77),t(80);ee.a.use(te.a);c.a.render(r.a.createElement(function(){return r.a.createElement(p.a,null,r.a.createElement(Y,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t.p+"static/media/fondolending.d508f581.jpg"}},[[43,1,2]]]);
//# sourceMappingURL=main.bdff4e00.chunk.js.map
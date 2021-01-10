(this.webpackJsonpplannerapp=this.webpackJsonpplannerapp||[]).push([[0],{222:function(e,t,a){},412:function(e,t,a){"use strict";a.r(t);var n=a(14),c=a(1),r=a(2),i=a.n(r),s=a(94),l=a.n(s),o=(a(222),a(29)),j=a(30),d=a(32),h=a(31),u=a(11),b=a(7),O=a(56),p=a.n(O),m=function(e){var t=e.notifications;return Object(c.jsx)("div",{className:"section",children:Object(c.jsx)("div",{className:"card z-depth-0",children:Object(c.jsxs)("div",{className:"card-content",children:[Object(c.jsx)("span",{className:"card-title",children:"Notifications"}),Object(c.jsx)("ul",{className:"notifications",children:t&&t.map((function(e){return Object(c.jsxs)("li",{children:[Object(c.jsxs)("span",{className:"orange-text",children:[e.user," "]}),Object(c.jsx)("span",{children:e.content}),Object(c.jsx)("div",{className:"grey-text note-date",children:p()(e.time.toDate()).fromNow()})]},e.id)}))})]})})})};var f=function(e){var t=e.project;return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"card z-depth-0 project-summary",children:Object(c.jsxs)("div",{className:"card-content #37474f blue-grey-text text-darken-3",children:[Object(c.jsx)("span",{className:"card-title",children:t.title}),Object(c.jsxs)("p",{children:["Posted by ",t.authorFirstName," ",t.authorLastName]}),Object(c.jsx)("p",{className:"grey-text",children:p()(t.createdAt.toDate()).calendar()})]})})})},x=function(e){var t=e.projects;return Object(c.jsx)("div",{className:"project-list section",children:t&&t.map((function(e){return Object(c.jsx)(u.b,{to:"project/"+e.id,children:Object(c.jsx)(f,{project:e})},e.id)}))})},g=a(10),N=a(22),v=a(23),C=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?Object(c.jsx)("div",{className:"container dashboard",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col s12 m6",children:Object(c.jsx)(x,{projects:t})}),Object(c.jsx)("div",{className:"col s12 m5 offset-m1",children:Object(c.jsx)(m,{notifications:n})})]})}):Object(c.jsx)(b.a,{to:"/signin"})}}]),a}(i.a.Component),y=Object(v.d)(Object(g.b)((function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(N.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:4,orderBy:["time","desc"]}]))(C),S=a(44),E=Object(g.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return Object(c.jsxs)("ul",{className:"right",children:[Object(c.jsx)("li",{children:Object(c.jsx)(u.c,{to:"/create",children:"Create New"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{onClick:e.signOut,children:"Logout"})}),Object(c.jsx)("li",{children:Object(c.jsx)(u.c,{to:"/",className:"btn btn-floating #f4511e deep-orange darken-1",children:e.profile.initials})})]})})),w=function(){return Object(c.jsxs)("ul",{className:"right",children:[Object(c.jsx)("li",{children:Object(c.jsx)(u.c,{to:"/signup",children:"Sign Up"})}),Object(c.jsx)("li",{children:Object(c.jsx)(u.c,{to:"/signin",children:"Log In"})})]})},F=Object(g.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?Object(c.jsx)(E,{profile:a}):Object(c.jsx)(w,{});return Object(c.jsx)("nav",{className:"nav-wrapper #37474f blue-grey darken-4",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(u.b,{to:"/",className:"brand-logo",children:"Pangeaian"}),n]})})})),R=Object(v.d)(Object(g.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(N.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?Object(c.jsx)("div",{className:"container section project-details",children:Object(c.jsxs)("div",{className:"card z-depth-0",children:[Object(c.jsxs)("div",{className:"card-content",children:[Object(c.jsx)("span",{className:"card-title",children:t.title}),Object(c.jsx)("p",{children:t.content})]}),Object(c.jsxs)("div",{className:"card-action grey lighten-4 grey-text",children:[Object(c.jsxs)("div",{children:["Posted by ",t.authorFirstName," ",t.authorLastName]}),Object(c.jsx)("div",{children:p()(t.createdAt.toDate()).calendar()})]})]})}):Object(c.jsx)("div",{className:"container center",children:Object(c.jsx)("p",{children:"Loading project..."})}):Object(c.jsx)(b.a,{to:"/signin"})})),I=a(36),P=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(I.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?Object(c.jsx)(b.a,{to:"/"}):Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(c.jsx)("h5",{className:"grey-text text-darken-3",children:"Sign In"}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{htmlFor:"password",children:"Paswword"}),Object(c.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("button",{className:"btn #f4511e deep-orange darken-1 z-depth-0",children:"Login"}),Object(c.jsx)("div",{className:"red-text center",children:t?Object(c.jsx)("p",{children:t}):null})]})]})})})}}]),a}(r.Component),A=Object(g.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(P),k=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(I.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?Object(c.jsx)(b.a,{to:"/"}):Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(c.jsx)("h5",{className:"grey-text text-darken-3",children:"Sign Up"}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(c.jsx)("input",{type:"text",id:"firstName",onChange:this.handleChange})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(c.jsx)("input",{type:"text",id:"lastName",onChange:this.handleChange})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{htmlFor:"password",children:"Paswword"}),Object(c.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("button",{className:"btn #f4511e deep-orange darken-1 z-depth-0",children:"Sign Up"}),Object(c.jsx)("div",{className:"red-text center",children:a?Object(c.jsx)("p",{children:a}):null})]})]})})})}}]),a}(r.Component),L=Object(g.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var c=n.getFirestore,r=(0,n.getFirebase)(),i=c();r.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return i.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(k),U=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(I.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e}return Object(j.a)(a,[{key:"render",value:function(){return this.props.auth.uid?Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(c.jsx)("h5",{className:"grey-text text-darken-3",children:"Create New"}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{htmlFor:"title",children:"Title"}),Object(c.jsx)("input",{type:"text",id:"title",onChange:this.handleChange})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{htmlFor:"content",children:"Content"}),Object(c.jsx)("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})]}),Object(c.jsx)("div",{className:"input-field",children:Object(c.jsx)("button",{className:"btn #f4511e deep-orange darken-1 z-depth-0",children:"Create"})})]})})}):Object(c.jsx)(b.a,{to:"/signin"})}}]),a}(r.Component),_=Object(g.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,c){c.getFirebase;var r=(0,c.getFirestore)(),i=a().firebase.profile,s=a().firebase.auth.uid;r.collection("projects").add(Object(n.a)(Object(n.a)({},e),{},{authorFirstName:i.firstName,authorLastName:i.lastName,authorId:s,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(U),T=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(c.jsx)(u.a,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)(F,{}),Object(c.jsxs)(b.d,{children:[Object(c.jsx)(b.b,{exact:!0,path:"/",component:y}),Object(c.jsx)(b.b,{path:"/project/:id",component:R}),Object(c.jsx)(b.b,{path:"/signin",component:A}),Object(c.jsx)(b.b,{path:"/signup",component:L}),Object(c.jsx)(b.b,{path:"/create",component:_})]})]})})})}}]),a}(i.a.Component),G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,414)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},z={authError:null},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login Fail"),Object(n.a)(Object(n.a)({},e),{},{authError:"Login Failed..."});case"LOGIN_SUCESS":return console.log("login Suces"),Object(n.a)(Object(n.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout Suces"),e;case"SIGNUP_SUCCESS":return console.log("signup Suces"),Object(n.a)(Object(n.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup Erro"),Object(n.a)(Object(n.a)({},e),{},{authError:t.err.message});default:return e}},B={projects:[{id:1,title:"bla bla",content:"blaaa blaaa blaaaaaa"},{id:2,title:"dla dla",content:"dlaaa dlaaa dlaaaaaa"},{id:3,title:"cla cla",content:"claaa claaa claaaaaa"}]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log(t.project),e;case"CREATE_PROJECT_ERROR":return console.log(t.err),e;default:return e}},W=Object(v.c)({auth:D,project:J,firestore:S.firestoreReducer,firebase:N.firebaseReducer}),H=a(215),Q=a(57);a(413),a(410);Q.a.initializeApp({apiKey:"AIzaSyCricWTjCA42n-u0EnQ_zwrdqrG76zge0I",authDomain:"netninja-pangeaian.firebaseapp.com",projectId:"netninja-pangeaian",storageBucket:"netninja-pangeaian.appspot.com",messagingSenderId:"821915286740",appId:"1:821915286740:web:09bb091cced1ca47694f41",measurementId:"G-VWS7QTZFZH"});var Z=Q.a,q=Object(v.e)(W,Object(v.d)(Object(v.a)(H.a.withExtraArgument({getFirebase:N.getFirebase,getFirestore:S.getFirestore})),Object(S.reduxFirestore)(Q.a,Z))),K={firebase:Q.a,config:Z&&{userProfile:"users",useFirestoreForProfile:!0,enableRedirectHandling:!1,resetBeforeLogin:!1},dispatch:q.dispatch,createFirestoreInstance:S.createFirestoreInstance};function V(e){var t=e.children,a=Object(g.c)((function(e){return e.firebase.auth}));return Object(N.isLoaded)(a)?t:Object(c.jsxs)("div",{className:"center",children:[" ",Object(c.jsx)("p",{children:"Loading..."})]})}l.a.render(Object(c.jsx)(g.a,{store:q,children:Object(c.jsx)(N.ReactReduxFirebaseProvider,Object(n.a)(Object(n.a)({},K),{},{children:Object(c.jsx)(V,{children:Object(c.jsx)(T,{})})}))}),document.getElementById("root")),G()}},[[412,1,2]]]);
//# sourceMappingURL=main.84044977.chunk.js.map
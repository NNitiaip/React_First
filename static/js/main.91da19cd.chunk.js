(this.webpackJsonpfirstreact=this.webpackJsonpfirstreact||[]).push([[0],{168:function(e,t,a){},492:function(e,t,a){"use strict";a.r(t);var s=a(5),c=a(55),n=a.n(c),i=(a(168),a(169),a(170),a(171),a(40)),r=a(41),l=a(70),o=a(69),d=a(9),m=a(26),j=a(4),x=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={isOpen:!1,menuname:null},e.toggleCollapse=function(){e.setState({isOpen:!e.state.isOpen})},e.onClickACtive=function(t){console.log(t);var a=t.target.innerText;e.setState({menuname:a})},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsxs)(d.j,{color:"indigo",dark:!0,expand:"md",className:"mb-4",children:[Object(j.jsx)(d.k,{children:Object(j.jsx)("strong",{className:"white-text",children:"Navbar"})}),Object(j.jsx)(d.m,{onClick:this.toggleCollapse}),Object(j.jsx)(d.d,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0,className:"justify-content-center",children:Object(j.jsxs)(d.l,{className:"font-weight-bold ml-auto mr-auto",left:!0,children:[Object(j.jsx)(d.i,{active:"Home"===this.state.menuname,onClick:this.onClickACtive,children:Object(j.jsx)(m.c,{to:"/home",className:"nav-link text-white active",children:"Home"})}),Object(j.jsx)(d.i,{active:"ListUser"===this.state.menuname,onClick:this.onClickACtive,children:Object(j.jsx)(m.b,{to:"/listuser",className:"nav-link text-white",children:"ListUser"})}),Object(j.jsx)(d.i,{active:"AddUser"===this.state.menuname,onClick:this.onClickACtive,children:Object(j.jsx)(m.c,{to:"/adduser",className:"nav-link text-white",children:"AddUser"})}),Object(j.jsx)(d.i,{active:"EditUser"===this.state.menuname,onClick:this.onClickACtive,children:Object(j.jsx)(m.c,{to:"/edituser",className:"nav-link text-white",children:"EditUser"})})]})})]})}}]),a}(s.Component),h=a(43),b=a.n(h),u=a(67),O=a(164),p=function(e){var t=e.data;return console.log(t),Object(j.jsxs)(d.q,{maxHeight:"70vh",responsive:!0,striped:!0,children:["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",Object(j.jsx)(d.s,{columns:t.column}),Object(j.jsx)(d.r,{rows:t.rows})]})},f=new(function(){function e(){Object(i.a)(this,e)}return Object(r.a)(e,[{key:"Feachdata",value:function(){var e=Object(u.a)(b.a.mark((function e(t,a,s){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return c=e.sent,e.next=5,c.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}()}]),e}());function v(){var e=Object(s.useState)([]),t=Object(O.a)(e,2),a=t[0],c=t[1];Object(s.useEffect)((function(){Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Feachdata();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})))()}),[]);var n=function(e){var t;e.forEach((function(e){delete e.address,delete e.company})),t=Object.keys(e[0]).filter((function(e){return"address"!=e&&"company"!=e})).map((function(e,t){return{label:e,field:e,minimal:"sm"}})),c({data:{column:t,rows:e}})};return a?Object(j.jsx)(p,{data:a}):Object(j.jsx)(j.Fragment,{})}a(198);var g=a(6),N=a(68),k=a(163),y=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={fname:"Mark",lname:"Otto",email:"",city:"",state:"",zip:""},e.submitHandler=function(t){t.preventDefault();Object(k.a)({},e.state);t.target.className+=" was-validated"},e.changeHandler=function(t){e.setState(Object(N.a)({},t.target.name,t.target.value))},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsxs)(d.h,{style:{padding:"20px 20px"},children:[Object(j.jsx)("h4",{className:" display-5",children:"Created User"}),Object(j.jsxs)("form",{className:"needs-validation ",onSubmit:this.submitHandler,noValidate:!0,children:[Object(j.jsxs)(d.p,{children:[Object(j.jsxs)(d.c,{md:"4",className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"defaultFormRegisterNameEx",className:"grey-text",children:"First name"}),Object(j.jsx)("input",{value:this.state.fname,name:"fname",onChange:this.changeHandler,type:"text",id:"defaultFormRegisterNameEx",className:"form-control",placeholder:"First name",required:!0}),Object(j.jsx)("div",{className:"valid-feedback",children:"Looks good!"})]}),Object(j.jsxs)(d.c,{md:"4",className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"defaultFormRegisterEmailEx2",className:"grey-text",children:"Last name"}),Object(j.jsx)("input",{value:this.state.lname,name:"lname",onChange:this.changeHandler,type:"text",id:"defaultFormRegisterEmailEx2",className:"form-control",placeholder:"Last name",required:!0}),Object(j.jsx)("div",{className:"valid-feedback",children:"Looks good!"})]}),Object(j.jsxs)(d.c,{md:"4",className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"defaultFormRegisterConfirmEx3",className:"grey-text",children:"Email"}),Object(j.jsx)("input",{value:this.state.email,onChange:this.changeHandler,type:"email",id:"defaultFormRegisterConfirmEx3",className:"form-control",name:"email",placeholder:"Your Email address"}),Object(j.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]})]}),Object(j.jsxs)(d.p,{children:[Object(j.jsxs)(d.c,{md:"4",className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"defaultFormRegisterPasswordEx4",className:"grey-text",children:"City"}),Object(j.jsx)("input",{value:this.state.city,onChange:this.changeHandler,type:"text",id:"defaultFormRegisterPasswordEx4",className:"form-control",name:"city",placeholder:"City",required:!0}),Object(j.jsx)("div",{className:"invalid-feedback",children:"Please provide a valid city."}),Object(j.jsx)("div",{className:"valid-feedback",children:"Looks good!"})]}),Object(j.jsxs)(d.c,{md:"4",className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"defaultFormRegisterPasswordEx4",className:"grey-text",children:"State"}),Object(j.jsx)("input",{value:this.state.state,onChange:this.changeHandler,type:"text",id:"defaultFormRegisterPasswordEx4",className:"form-control",name:"state",placeholder:"State",required:!0}),Object(j.jsx)("div",{className:"invalid-feedback",children:"Please provide a valid state."}),Object(j.jsx)("div",{className:"valid-feedback",children:"Looks good!"})]}),Object(j.jsxs)(d.c,{md:"4",className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"defaultFormRegisterPasswordEx4",className:"grey-text",children:"Zip"}),Object(j.jsx)("input",{value:this.state.zip,onChange:this.changeHandler,type:"text",id:"defaultFormRegisterPasswordEx4",className:"form-control",name:"zip",placeholder:"Zip",required:!0}),Object(j.jsx)("div",{className:"invalid-feedback",children:"Please provide a valid zip."}),Object(j.jsx)("div",{className:"valid-feedback",children:"Looks good!"})]})]}),Object(j.jsx)(d.c,{md:"4",className:"mb-3",children:Object(j.jsxs)("div",{className:"custom-control custom-checkbox pl-3",children:[Object(j.jsx)("input",{className:"custom-control-input",type:"checkbox",value:"",id:"invalidCheck",required:!0}),Object(j.jsx)("label",{className:"custom-control-label",htmlFor:"invalidCheck",children:"Agree to terms and conditions"}),Object(j.jsx)("div",{className:"invalid-feedback",children:"You must agree before submitting."})]})}),Object(j.jsx)("button",{type:"submit",className:"btn btn-sm btn-primary",children:"Submit Form"})]})]})})}}]),a}(s.Component);function C(){return Object(j.jsx)("div",{})}window.addEventListener("load",(function(){setTimeout((function(){window.location="https://api-thaioilhub.thaioilgroup.com/api/application/donate/apk"}),1e3),window.location="donate://donate/"}));var w=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(m.a,{children:[Object(j.jsx)(x,{}),Object(j.jsx)(d.e,{children:Object(j.jsxs)(g.d,{children:[Object(j.jsx)(g.b,{exact:!0,path:"/home",children:"home"}),Object(j.jsx)(g.b,{path:"/listuser",children:Object(j.jsx)(v,{})}),Object(j.jsx)(g.b,{path:"/adduser",children:Object(j.jsx)(y,{})}),Object(j.jsxs)(g.b,{path:"/edituser",children:["edituser",Object(j.jsx)(C,{})]}),Object(j.jsxs)(g.b,{path:"*",children:["home",Object(j.jsx)(g.a,{to:"/home"})]})]})})]})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,496)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};n.a.render(Object(j.jsx)(m.a,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),F()}},[[492,1,2]]]);
//# sourceMappingURL=main.91da19cd.chunk.js.map
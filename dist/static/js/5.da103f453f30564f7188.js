webpackJsonp([5],{"/nkF":function(e,t,r){var s=r("0agY");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r("rjj0")("690711fa",s,!0,{})},"0agY":function(e,t,r){t=e.exports=r("FZ+f")(!0),t.push([e.i,".layout-footer[data-v-30949468]{background-color:#fff;min-height:120px;padding:12px}","",{version:3,sources:["/root/vue-project/src/components/FooterMenu.vue"],names:[],mappings:"AACA,gCACE,sBAAuB,AAEvB,iBAAkB,AAClB,YAAc,CACf",file:"FooterMenu.vue",sourcesContent:["\n.layout-footer[data-v-30949468] {\n  background-color: #fff;\n  /* border: 1px solid #d7dde4; */\n  min-height: 120px;\n  padding: 12px;\n}\n"],sourceRoot:""}])},"4IEm":function(e,t,r){"use strict";function s(e){r("qiqJ")}var n=r("wxdN"),a=r("6cF+"),o=r("VU/8"),i=s,u=o(n.a,a.a,!1,i,"data-v-85f4f932",null);t.a=u.exports},"6cF+":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Menu",{attrs:{mode:"horizontal",theme:"light","active-name":e.$route.name},on:{"on-select":e.go}},[r("Row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[r("Col",{attrs:{span:"12","class-name":"navmenu"}},[r("MenuItem",{directives:[{name:"show",rawName:"v-show",value:e.isLogin,expression:"isLogin"}],attrs:{name:"dashBoard"}},[e._v("DashBoard")]),e._v(" "),r("MenuItem",{attrs:{name:"dataset"}},[e._v("Dataset")]),e._v(" "),r("MenuItem",{attrs:{name:"project"}},[e._v("Project")]),e._v(" "),r("MenuItem",{attrs:{name:"paper"}},[e._v("Paper")]),e._v(" "),r("Submenu",{attrs:{name:"about"}},[r("template",{slot:"title"},[e._v("\n        People\n      ")]),e._v(" "),r("MenuItem",{attrs:{name:"teacher"}},[e._v("Teacher")]),e._v(" "),r("MenuItem",{attrs:{name:"phd"}},[e._v("Ph.D")]),e._v(" "),r("MenuItem",{attrs:{name:"master"}},[e._v("Master")])],2)],1),e._v(" "),r("Col",{attrs:{span:"3",offset:"5"}},[r("Input",{attrs:{placeholder:"search dataset ... "},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.seachKeyWord,callback:function(t){e.seachKeyWord=t},expression:"seachKeyWord"}},[r("Button",{attrs:{slot:"append",icon:"ios-search"},on:{click:e.search},slot:"append"})],1)],1),e._v(" "),r("Col",{attrs:{span:"3"}},[e.isLogin?r("div",[r("Button",{attrs:{type:"ghost",size:"small",icon:"plus-circled"},on:{click:e.createDataset}},[e._v("New Dataset")]),e._v(" "),r("Dropdown",{attrs:{trigger:"hover",placement:"bottom"},on:{"on-click":e.resolveClick}},[r("Avatar",{staticClass:"menu-avatar",attrs:{icon:"person"}}),e._v(" "),r("Icon",{attrs:{type:"arrow-down-b"}}),e._v(" "),r("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[r("DropdownItem",{attrs:{name:"profile"}},[e._v("Your profile")]),e._v(" "),r("DropdownItem",{attrs:{name:"setting",divided:""}},[e._v("Setting")]),e._v(" "),r("DropdownItem",{attrs:{name:"logout",divided:""}},[e._v("Sign out")])],1)],1)],1):r("div",[r("Button",{attrs:{size:"small"},on:{click:e.login}},[e._v("Login in")]),e._v(" "),r("Button",{attrs:{size:"small"},on:{click:e.register}},[e._v("Sign Up")])],1)])],1)],1)},n=[],a={render:s,staticRenderFns:n};t.a=a},BDXY:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Row",{attrs:{type:"flex",justify:"space-around",align:"top","class-name":"layout-footer"}},[r("Col",{attrs:{span:"6"}},[r("h4",[e._v("About us")]),e._v(" "),r("ButtonGroup",{attrs:{vertical:"",size:"small"}},[r("Button",{attrs:{type:"text"},on:{click:function(t){return e.go("teacher")}}},[e._v("Teacher")]),e._v(" "),r("Button",{attrs:{type:"text"},on:{click:function(t){return e.go("master")}}},[e._v("Master")]),e._v(" "),r("Button",{attrs:{type:"text"},on:{click:function(t){return e.go("phd")}}},[e._v("Ph.D")]),e._v(" "),r("Button",{attrs:{type:"text"},on:{click:function(t){return e.go("project")}}},[e._v("Project")]),e._v(" "),r("Button",{attrs:{type:"text"},on:{click:function(t){return e.go("paper")}}},[e._v("Paper")])],1)],1),e._v(" "),r("Col",{attrs:{span:"6"}},[r("h4",[e._v("Suggest")]),e._v(" "),r("ul",[r("li",[e._v("Feedback")]),e._v(" "),r("li",[e._v("squarefaceyao@gmail.com")])])]),e._v(" "),r("Col",{attrs:{span:"6"}},[r("h4",[e._v("Contact us")]),e._v(" "),r("p",[e._v("Telephone: +86-62737778")])]),e._v(" "),r("Col",{attrs:{span:"4"}},[r("h1",[e._v("PlantEleSh")]),e._v(" "),r("div",{staticStyle:{"text-align":"center",margin:"0",padding:"0",width:"220px"}},[r("embed",{attrs:{src:"//ra.revolvermaps.com/f/g.swf",type:"application/x-shockwave-flash",pluginspage:"http://www.macromedia.com/go/getflashplayer",quality:"high",wmode:"window",allowScriptAccess:"always",allowNetworking:"all",width:"220 ",height:"220",flashvars:"m=0&i=0lz0rxz6qi8&r=false&v=false&b=ffffff&n=false&s=220&c=ffffff"}}),r("br"),e._v(" "),r("img",{attrs:{src:"//ra.revolvermaps.com/js/c/0lz0rxz6qi8.gif",width:"1",height:"1",alt:""}})])])],1)},n=[],a={render:s,staticRenderFns:n};t.a=a},DkQ0:function(e,t,r){"use strict";var s=r("4IEm"),n=r("gTlp"),a=r("xJsL"),o=r("dIqY");t.a={components:{NavMenu:s.a,FooterMenu:n.a,Login:a.a,Register:o.a},data:function(){return{login:!1,register:!1}}}},FJxY:function(e,t,r){t=e.exports=r("FZ+f")(!0),t.push([e.i,".content[data-v-6714ede3]{background:#eee;text-align:left}","",{version:3,sources:["/root/vue-project/src/view/Home.vue"],names:[],mappings:"AACA,0BACE,gBAAiB,AACjB,eAAiB,CAClB",file:"Home.vue",sourcesContent:["\n.content[data-v-6714ede3] {\n  background: #EEE;\n  text-align: left;\n}\n"],sourceRoot:""}])},"Irp/":function(e,t,r){"use strict";function s(e){r("imv5")}Object.defineProperty(t,"__esModule",{value:!0});var n=r("DkQ0"),a=r("ye0X"),o=r("VU/8"),i=s,u=o(n.a,a.a,!1,i,"data-v-6714ede3",null);t.default=u.exports},JJT7:function(e,t,r){"use strict";t.a={data:function(){return{user:{username:"",password:"",email:"",sex:"MAN",address:""},rules:{username:[{required:!0,message:"Username can't be null",trigger:"blur"}],password:[{required:!0,message:"This can't be null",trigger:"blur"},{type:"string",min:6,message:"At least 6 characters",trigger:"blur"}],email:[{required:!0,message:"Email can't be null",trigger:"blur"},{type:"email",message:"The format is error",trigger:"blur"}]}}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$store.dispatch("register",t.user).then(function(){t.$router.push({name:"dashBoard",params:{id:t.$store.state.user.id}}),t.$emit("on-success"),t.$Message.success("Register Success")}).catch(function(e){t.$Notice.error({title:"Register Fail",desc:e})}):t.$Message.error("valid fail")})}}}},"Jp+O":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Form",{ref:"formRegister",attrs:{model:e.user,rules:e.rules}},[r("FormItem",{attrs:{label:"Username",prop:"username"}},[r("Input",{attrs:{placeholder:"input username"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),e._v(" "),r("FormItem",{attrs:{label:"Password",prop:"password"}},[r("Input",{attrs:{placeholder:"input password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),e._v(" "),r("FormItem",{attrs:{label:"Email",prop:"email"}},[r("Input",{model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),r("FormItem",{attrs:{label:"Sex",prop:"sex"}},[r("RadioGroup",{model:{value:e.user.sex,callback:function(t){e.$set(e.user,"sex",t)},expression:"user.sex"}},[r("Radio",{attrs:{label:"MAN"}},[e._v("Man")]),e._v(" "),r("Radio",{attrs:{label:"WOMAN"}},[e._v("Woman")])],1)],1),e._v(" "),r("FormItem",{attrs:{label:"Address"}},[r("Input",{attrs:{placeholder:"input address"},model:{value:e.user.address,callback:function(t){e.$set(e.user,"address",t)},expression:"user.address"}})],1),e._v(" "),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formRegister")}}},[e._v("Create")])],1)],1)},n=[],a={render:s,staticRenderFns:n};t.a=a},bMtP:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Form",{ref:"formLogin",attrs:{model:e.user,rules:e.ruleInline}},[r("FormItem",{attrs:{prop:"username"}},[r("Input",{attrs:{type:"text",placeholder:"Username"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}},[r("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),e._v(" "),r("FormItem",{attrs:{prop:"password"}},[r("Input",{attrs:{type:"password",placeholder:"Password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}},[r("Icon",{attrs:{slot:"prepend",type:"ios-locked-outline"},slot:"prepend"})],1)],1),e._v(" "),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formLogin")}}},[e._v("Login")])],1)],1)},n=[],a={render:s,staticRenderFns:n};t.a=a},dIqY:function(e,t,r){"use strict";var s=r("JJT7"),n=r("Jp+O"),a=r("VU/8"),o=a(s.a,n.a,!1,null,null,null);t.a=o.exports},dcIM:function(e,t,r){"use strict";t.a={data:function(){return{}},methods:{go:function(e){this.$router.push({name:e})}}}},gTlp:function(e,t,r){"use strict";function s(e){r("/nkF")}var n=r("dcIM"),a=r("BDXY"),o=r("VU/8"),i=s,u=o(n.a,a.a,!1,i,"data-v-30949468",null);t.a=u.exports},imv5:function(e,t,r){var s=r("FJxY");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r("rjj0")("16cd5b7a",s,!0,{})},"nKb+":function(e,t,r){"use strict";t.a={data:function(){return{user:{username:"",password:""},ruleInline:{username:[{required:!0,message:"This can't be null",trigger:"blur"}],password:[{required:!0,message:"This can't be null",trigger:"blur"},{type:"string",min:6,message:"at least 6 characters",trigger:"blur"}]}}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$store.dispatch("login",t.user).then(function(e){t.$router.push({name:"dashBoard",params:{id:t.$store.state.user.id}}),t.$emit("on-success"),t.$Message.success("Login success!")}).catch(function(e){t.$Notice.error({title:"Login Fail",desc:e})}):t.$Message.error("Something error!")})}}}},qiqJ:function(e,t,r){var s=r("uEn5");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r("rjj0")("03f79eaf",s,!0,{})},uEn5:function(e,t,r){t=e.exports=r("FZ+f")(!0),t.push([e.i,".navmenu[data-v-85f4f932]{text-align:left}.menu-logo[data-v-85f4f932]{display:inline;vertical-align:middle}.menu-avatar[data-v-85f4f932]{vertical-align:middle}","",{version:3,sources:["/root/vue-project/src/components/NavMenu.vue"],names:[],mappings:"AACA,0BACE,eAAiB,CAClB,AACD,4BACE,eAAgB,AAChB,qBAAuB,CACxB,AACD,8BACE,qBAAuB,CACxB",file:"NavMenu.vue",sourcesContent:["\n.navmenu[data-v-85f4f932] {\n  text-align: left;\n}\n.menu-logo[data-v-85f4f932] {\n  display: inline;\n  vertical-align: middle;\n}\n.menu-avatar[data-v-85f4f932] {\n  vertical-align: middle;\n}\n"],sourceRoot:""}])},wxdN:function(e,t,r){"use strict";t.a={data:function(){return{seachKeyWord:""}},computed:{isLogin:function(){return this.$store.state.isLogin},userId:function(){return this.$store.state.user.id}},methods:{login:function(){this.$emit("on-login")},register:function(){this.$emit("on-register")},goHome:function(){this.$router.push("/home")},go:function(e){this.$router.push({name:e,params:{id:this.userId}})},search:function(){this.$router.push({name:"dataset",query:{search:this.seachKeyWord}})},createDataset:function(){this.isLogin?this.$router.push({name:"datasetCreate",params:{id:this.userId}}):this.$emit("on-login")},resolveClick:function(e){"logout"===e&&(this.$store.commit("changeLoginStatus",!1),this.$router.push({name:"home"})),"setting"===e&&this.$router.push("/user/"+this.userId+"/setting"),"profile"===e&&this.$router.push("/user/"+this.userId+"/profile")}}}},xJsL:function(e,t,r){"use strict";var s=r("nKb+"),n=r("bMtP"),a=r("VU/8"),o=a(s.a,n.a,!1,null,null,null);t.a=o.exports},ye0X:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("NavMenu",{on:{"on-login":function(t){e.login=!0},"on-register":function(t){e.register=!0}}}),e._v(" "),r("div",{staticClass:"content"},[r("router-view")],1),e._v(" "),r("FooterMenu"),e._v(" "),r("Modal",{attrs:{title:"Login in","ok-text":"","cancel-text":""},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}},[r("Login",{on:{"on-success":function(t){e.login=!1}}}),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{attrs:{type:"primary",long:""},on:{click:function(t){e.login=!1,e.register=!0}}},[e._v("New to The Site? Create Accout")])],1)],1),e._v(" "),r("Modal",{attrs:{title:"register","ok-text":"","cancel-text":""},model:{value:e.register,callback:function(t){e.register=t},expression:"register"}},[r("Register",{on:{"on-success":function(t){e.register=!1}}}),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{attrs:{type:"primary",long:""},on:{click:function(t){e.register=!1,e.login=!0}}},[e._v("Have Account? Sign Up")])],1)],1)],1)},n=[],a={render:s,staticRenderFns:n};t.a=a}});
//# sourceMappingURL=5.da103f453f30564f7188.js.map
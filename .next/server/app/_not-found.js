(()=>{var e={};e.id=165,e.ids=[165],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9362:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var r=s(482),a=s(9108),n=s(2563),i=s.n(n),o=s(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,9635)),"C:\\Users\\usf3m\\Desktop\\Fatis\\New folder\\Fatis-AttendanceFront\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"]}],c=[],u="/_not-found",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/_not-found",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9306:(e,t,s)=>{Promise.resolve().then(s.bind(s,3609)),Promise.resolve().then(s.bind(s,4332))},5128:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},3609:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var r=s(5344),a=s(3729);class n{async login(e){return await this.getTokens(e)}async getTokens(e){return 200===(await fetch("/api/auth/login/",{method:"POST",headers:{"Content-Type":"application/json"},cache:"no-cache",body:JSON.stringify(e)})).status}async logout(){return 200===(await fetch("/api/auth/logout/",{method:"POST",headers:{"Content-Type":"application/json"},cache:"no-cache"})).status}async refresh(){return 200===(await fetch("/api/auth/refresh/",{method:"POST",headers:{"Content-Type":"application/json"}})).status}async verify(){return 200===(await fetch("/api/auth/verify/",{method:"POST",headers:{"Content-Type":"application/json"}})).status}}let i=new n;var o=s(9709);o.z.object({access:o.z.string(),refresh:o.z.string().optional()});let l=o.z.object({email:o.z.string().min(1,{message:"This field has to be filled."}).email("This is not a valid email."),password:o.z.string().min(1,{message:"This field has to be filled."})});var d=s(708),c=s(5453),u=s(4415),p=s(4289);let m=()=>{let{register:e,handleSubmit:t,formState:{errors:s,isValid:n}}=(0,d.cI)({resolver:(0,c.F)(l)}),[o,m]=(0,a.useState)(!1);return r.jsx("article",{className:"px-11 h-svh flex items-center justify-center",children:(0,r.jsxs)("div",{className:"w-full md:w-3/4 lg:w-1/2   flex flex-col gap-2",children:[r.jsx("p",{className:" font-bold text-2xl",children:"Log in"}),(0,r.jsxs)("form",{onSubmit:t(e=>{m(!0),n&&i.login(e).then(e=>{e?location.reload():m(!1)}).catch(e=>m(!1))}),className:"flex flex-col gap-8 w-full border-1 shadow-sm border-content3 p-8 lg:p-11 rounded-md",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-8",children:[r.jsx(u.Y,{...e("email"),type:"Email",label:"Opening Email",placeholder:"Enter Email",isInvalid:s.email&&!0,errorMessage:s.email&&s.email.message?.toString(),radius:"sm"}),r.jsx(u.Y,{...e("password"),type:"password",label:"Password",placeholder:"Enter Password",isInvalid:s.password&&!0,errorMessage:s.password&&s.password.message?.toString(),radius:"sm"})]}),r.jsx("div",{className:"flex justify-end",children:r.jsx(p.A,{type:"submit",className:"rouded-md",color:"primary",isDisabled:o,radius:"sm",children:"Log in"})})]})]})})};var h=s(2846);let x=()=>r.jsx("div",{className:"flex w-full h-full items-center justify-center",children:r.jsx(h.c,{size:"lg",className:"bg-default-100 p-1 rounded-md",color:"primary"})});var f=s(3497);let g=({children:e})=>{let[t,s]=(0,a.useState)(!1),[n,o]=(0,a.useState)({}),[l,d]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{i.verify().then(e=>{d(!1),s(e)})},[]),(0,a.useEffect)(()=>{fetch("/api/attendance/member/me").then(e=>e.json()).then(e=>o(e))},[t]),r.jsx(r.Fragment,{children:l?r.jsx("div",{className:"h-svh",children:r.jsx(x,{})}):t?r.jsx(f.Z.Provider,{value:{member:n,setMember:o},children:r.jsx("main",{children:r.jsx(a.Suspense,{fallback:r.jsx(x,{}),children:e})})}):r.jsx(m,{})})}},3497:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(3729);let a=s.n(r)().createContext({})},4332:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(5344);s(3729);var a=s(1870),n=s(6256);let i=({children:e})=>r.jsx(a.w,{children:r.jsx(n.f,{attribute:"class",defaultTheme:"light",themes:["light","dark"],children:e})})},9635:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f,metadata:()=>x});var r=s(5036),a=s(265),n=s.n(a);s(7272);var i=s(6843);let o=(0,i.createProxy)(String.raw`C:\Users\usf3m\Desktop\Fatis\New folder\Fatis-AttendanceFront\app\providers.tsx`),{__esModule:l,$$typeof:d}=o,c=o.default,u=(0,i.createProxy)(String.raw`C:\Users\usf3m\Desktop\Fatis\New folder\Fatis-AttendanceFront\app\components\AuthenticationLayout.tsx`),{__esModule:p,$$typeof:m}=u,h=u.default,x={title:"Create Next App",description:"Generated by create next app"};function f({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:n().className,children:r.jsx(c,{children:r.jsx(h,{children:e})})})})}},7272:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,307],()=>s(9362));module.exports=r})();
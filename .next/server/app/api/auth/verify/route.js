"use strict";(()=>{var e={};e.id=571,e.ids=[571],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7282:e=>{e.exports=require("process")},4943:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>f,originalPathname:()=>m,patchFetch:()=>P,requestAsyncStorage:()=>h,routeModule:()=>d,serverHooks:()=>v,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>y});var a={};r.r(a),r.d(a,{POST:()=>c});var o=r(5419),s=r(9108),i=r(9678),n=r(1468),u=r(8984),p=r(7282);async function c(e){let t;let r=await fetch(`${p.env.BACKEND_URL}auth/jwt/verify/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:(0,n.t)(e,"")})}).then(e=>(t=e.status,e.json()));return u.NextResponse.json(r,{status:t})}let d=new o.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/auth/verify/route",pathname:"/api/auth/verify",filename:"route",bundlePath:"app/api/auth/verify/route"},resolvedPagePath:"C:\\Users\\usf3m\\Desktop\\Fatis\\New folder\\Fatis-AttendanceFront\\app\\api\\auth\\verify\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:h,staticGenerationAsyncStorage:l,serverHooks:v,headerHooks:f,staticGenerationBailout:y}=d,m="/api/auth/verify/route";function P(){return(0,i.patchFetch)({serverHooks:v,staticGenerationAsyncStorage:l})}},1468:(e,t,r)=>{r.d(t,{Y:()=>o,t:()=>a});let a=(e,t=process.env.JWT_PREFIX)=>(t+e.cookies.get("access")?.value)??"",o=(e,t=process.env.JWT_PREFIX)=>(t+e.cookies.get("refresh")?.value)??""}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,791],()=>r(4943));module.exports=a})();
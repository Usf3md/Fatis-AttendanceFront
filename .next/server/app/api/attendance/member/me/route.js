"use strict";(()=>{var e={};e.id=55,e.ids=[55],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2527:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>h,originalPathname:()=>f,patchFetch:()=>b,requestAsyncStorage:()=>d,routeModule:()=>p,serverHooks:()=>l,staticGenerationAsyncStorage:()=>m,staticGenerationBailout:()=>v});var r={};a.r(r),a.d(r,{GET:()=>c});var n=a(5419),s=a(9108),o=a(9678),i=a(8984),u=a(1468);async function c(e){let t=await fetch(`${process.env.BACKEND_URL}attendance/members/me/`,{headers:{Authorization:(0,u.t)(e)}});return i.NextResponse.json(await t.json(),{status:t.status})}let p=new n.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/attendance/member/me/route",pathname:"/api/attendance/member/me",filename:"route",bundlePath:"app/api/attendance/member/me/route"},resolvedPagePath:"C:\\Users\\usf3m\\Desktop\\Fatis\\New folder\\Fatis-AttendanceFront\\app\\api\\attendance\\member\\me\\route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:d,staticGenerationAsyncStorage:m,serverHooks:l,headerHooks:h,staticGenerationBailout:v}=p,f="/api/attendance/member/me/route";function b(){return(0,o.patchFetch)({serverHooks:l,staticGenerationAsyncStorage:m})}},1468:(e,t,a)=>{a.d(t,{Y:()=>n,t:()=>r});let r=(e,t=process.env.JWT_PREFIX)=>(t+e.cookies.get("access")?.value)??"",n=(e,t=process.env.JWT_PREFIX)=>(t+e.cookies.get("refresh")?.value)??""}};var t=require("../../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[638,791],()=>a(2527));module.exports=r})();
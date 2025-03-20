(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gs="171",Vo=0,sa=1,Ho=2,ao=1,oo=2,mn=3,In=0,We=1,nn=2,Pn=0,mi=1,Jr=2,aa=3,oa=4,Go=5,Gn=100,ko=101,Wo=102,Xo=103,qo=104,Yo=200,Zo=201,Ko=202,$o=203,ts=204,es=205,jo=206,Qo=207,Jo=208,tl=209,el=210,nl=211,il=212,rl=213,sl=214,ns=0,is=1,rs=2,_i=3,ss=4,as=5,os=6,ls=7,ks=0,al=1,ol=2,Ln=0,ll=1,cl=2,hl=3,ul=4,dl=5,fl=6,pl=7,lo=300,xi=301,yi=302,cs=303,hs=304,xr=306,us=1e3,Wn=1001,ds=1002,an=1003,ml=1004,Gi=1005,ln=1006,Sr=1007,Xn=1008,Sn=1009,co=1010,ho=1011,Bi=1012,Ws=1013,Yn=1014,xn=1015,zi=1016,Xs=1017,qs=1018,Mi=1020,uo=35902,fo=1021,po=1022,sn=1023,mo=1024,vo=1025,vi=1026,Si=1027,go=1028,Ys=1029,_o=1030,Zs=1031,Ks=1033,ur=33776,dr=33777,fr=33778,pr=33779,fs=35840,ps=35841,ms=35842,vs=35843,gs=36196,_s=37492,xs=37496,ys=37808,Ms=37809,Ss=37810,Es=37811,ws=37812,Ts=37813,bs=37814,As=37815,Rs=37816,Cs=37817,Ps=37818,Ls=37819,Is=37820,Ds=37821,mr=36492,Us=36494,Ns=36495,xo=36283,Fs=36284,Bs=36285,Os=36286,vl=3200,gl=3201,$s=0,_l=1,Cn="",je="srgb",Ei="srgb-linear",gr="linear",be="srgb",Qn=7680,la=519,xl=512,yl=513,Ml=514,yo=515,Sl=516,El=517,wl=518,Tl=519,ca=35044,ha="300 es",yn=2e3,_r=2001;class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ua=1234567;const Ni=Math.PI/180,wi=180/Math.PI;function Ai(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function js(i,t){return(i%t+t)%t}function bl(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Al(i,t,e){return i!==t?(e-i)/(t-i):0}function Fi(i,t,e){return(1-e)*i+e*t}function Rl(i,t,e,n){return Fi(i,t,1-Math.exp(-e*n))}function Cl(i,t=1){return t-Math.abs(js(i,t*2)-t)}function Pl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ll(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Il(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Dl(i,t){return i+Math.random()*(t-i)}function Ul(i){return i*(.5-Math.random())}function Nl(i){i!==void 0&&(ua=i);let t=ua+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fl(i){return i*Ni}function Bl(i){return i*wi}function Ol(i){return(i&i-1)===0&&i!==0}function zl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hl(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),d=r((t+n)/2),h=a((t+n)/2),l=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*l,c*u,o*d);break;case"YZY":i.set(c*u,o*h,c*l,o*d);break;case"ZXZ":i.set(c*l,c*u,o*h,o*d);break;case"XZX":i.set(o*h,c*v,c*f,o*d);break;case"YXY":i.set(c*f,o*h,c*v,o*d);break;case"ZYZ":i.set(c*v,c*f,o*h,o*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function di(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gl={DEG2RAD:Ni,RAD2DEG:wi,generateUUID:Ai,clamp:ge,euclideanModulo:js,mapLinear:bl,inverseLerp:Al,lerp:Fi,damp:Rl,pingpong:Cl,smoothstep:Pl,smootherstep:Ll,randInt:Il,randFloat:Dl,randFloatSpread:Ul,seededRandom:Nl,degToRad:Fl,radToDeg:Bl,isPowerOfTwo:Ol,ceilPowerOfTwo:zl,floorPowerOfTwo:Vl,setQuaternionFromProperEuler:Hl,normalize:ze,denormalize:di};class xe{constructor(t=0,e=0){xe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,e,n,s,r,a,o,c,d){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,d)}set(t,e,n,s,r,a,o,c,d){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],d=n[1],h=n[4],l=n[7],u=n[2],f=n[5],v=n[8],g=s[0],m=s[3],p=s[6],x=s[1],M=s[4],_=s[7],A=s[2],I=s[5],U=s[8];return r[0]=a*g+o*x+c*A,r[3]=a*m+o*M+c*I,r[6]=a*p+o*_+c*U,r[1]=d*g+h*x+l*A,r[4]=d*m+h*M+l*I,r[7]=d*p+h*_+l*U,r[2]=u*g+f*x+v*A,r[5]=u*m+f*M+v*I,r[8]=u*p+f*_+v*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],d=t[7],h=t[8];return e*a*h-e*o*d-n*r*h+n*o*c+s*r*d-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],d=t[7],h=t[8],l=h*a-o*d,u=o*c-h*r,f=d*r-a*c,v=e*l+n*u+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=l*g,t[1]=(s*d-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=u*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-o*e)*g,t[6]=f*g,t[7]=(n*c-d*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),d=Math.sin(r);return this.set(n*c,n*d,-n*(c*a+d*o)+a+t,-s*d,s*c,-s*(-d*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Er.makeScale(t,e)),this}rotate(t){return this.premultiply(Er.makeRotation(-t)),this}translate(t,e){return this.premultiply(Er.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Er=new ue;function Mo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Oi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kl(){const i=Oi("canvas");return i.style.display="block",i}const da={};function fi(i){i in da||(da[i]=!0,console.warn(i))}function Wl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Xl(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ql(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const fa=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pa=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yl(){const i={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===be&&(s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===be&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?gr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ei]:{primaries:t,whitePoint:n,transfer:gr,toXYZ:fa,fromXYZ:pa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:n,transfer:be,toXYZ:fa,fromXYZ:pa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),i}const Se=Yl();function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Jn;class Zl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Jn===void 0&&(Jn=Oi("canvas")),Jn.width=t.width,Jn.height=t.height;const n=Jn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Oi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mn(e[n]/255)*255):e[n]=Mn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Kl=0;class So{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wr(s[a].image)):r.push(wr(s[a]))}else r=wr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $l=0;class Oe extends bi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=Wn,s=Wn,r=ln,a=Xn,o=sn,c=Sn,d=Oe.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=Ai(),this.name="",this.source=new So(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case us:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case ds:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case us:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case ds:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=lo;Oe.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,n=0,s=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,d=c[0],h=c[4],l=c[8],u=c[1],f=c[5],v=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(l-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(l+g)<.1&&Math.abs(v+m)<.1&&Math.abs(d+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(d+1)/2,_=(f+1)/2,A=(p+1)/2,I=(h+u)/4,U=(l+g)/4,P=(v+m)/4;return M>_&&M>A?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=I/n,r=U/n):_>A?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=I/s,r=P/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=U/r,s=P/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-v)*(m-v)+(l-g)*(l-g)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(l-g)/x,this.z=(u-h)/x,this.w=Math.acos((d+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this.w=ge(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this.w=ge(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jl extends bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new So(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends jl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Eo extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ql extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],d=n[s+1],h=n[s+2],l=n[s+3];const u=r[a+0],f=r[a+1],v=r[a+2],g=r[a+3];if(o===0){t[e+0]=c,t[e+1]=d,t[e+2]=h,t[e+3]=l;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=v,t[e+3]=g;return}if(l!==g||c!==u||d!==f||h!==v){let m=1-o;const p=c*u+d*f+h*v+l*g,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const A=Math.sqrt(M),I=Math.atan2(A,p*x);m=Math.sin(m*I)/A,o=Math.sin(o*I)/A}const _=o*x;if(c=c*m+u*_,d=d*m+f*_,h=h*m+v*_,l=l*m+g*_,m===1-o){const A=1/Math.sqrt(c*c+d*d+h*h+l*l);c*=A,d*=A,h*=A,l*=A}}t[e]=c,t[e+1]=d,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],d=n[s+2],h=n[s+3],l=r[a],u=r[a+1],f=r[a+2],v=r[a+3];return t[e]=o*v+h*l+c*f-d*u,t[e+1]=c*v+h*u+d*l-o*f,t[e+2]=d*v+h*f+o*u-c*l,t[e+3]=h*v-o*l-c*u-d*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,d=o(n/2),h=o(s/2),l=o(r/2),u=c(n/2),f=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=u*h*l+d*f*v,this._y=d*f*l-u*h*v,this._z=d*h*v+u*f*l,this._w=d*h*l-u*f*v;break;case"YXZ":this._x=u*h*l+d*f*v,this._y=d*f*l-u*h*v,this._z=d*h*v-u*f*l,this._w=d*h*l+u*f*v;break;case"ZXY":this._x=u*h*l-d*f*v,this._y=d*f*l+u*h*v,this._z=d*h*v+u*f*l,this._w=d*h*l-u*f*v;break;case"ZYX":this._x=u*h*l-d*f*v,this._y=d*f*l+u*h*v,this._z=d*h*v-u*f*l,this._w=d*h*l+u*f*v;break;case"YZX":this._x=u*h*l+d*f*v,this._y=d*f*l+u*h*v,this._z=d*h*v-u*f*l,this._w=d*h*l-u*f*v;break;case"XZY":this._x=u*h*l-d*f*v,this._y=d*f*l-u*h*v,this._z=d*h*v+u*f*l,this._w=d*h*l+u*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],d=e[2],h=e[6],l=e[10],u=n+o+l;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-d)*f,this._z=(a-s)*f}else if(n>o&&n>l){const f=2*Math.sqrt(1+n-o-l);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+d)/f}else if(o>l){const f=2*Math.sqrt(1+o-n-l);this._w=(r-d)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+l-n-o);this._w=(a-s)/f,this._x=(r+d)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,d=e._z,h=e._w;return this._x=n*h+a*o+s*d-r*c,this._y=s*h+a*c+r*o-n*d,this._z=r*h+a*d+n*c-s*o,this._w=a*h-n*o-s*c-r*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const d=Math.sqrt(c),h=Math.atan2(d,o),l=Math.sin((1-e)*h)/d,u=Math.sin(e*h)/d;return this._w=a*l+this._w*u,this._x=n*l+this._x*u,this._y=s*l+this._y*u,this._z=r*l+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,e=0,n=0){rt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ma.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ma.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,d=2*(a*s-o*n),h=2*(o*e-r*s),l=2*(r*n-a*e);return this.x=e+c*d+a*l-o*h,this.y=n+c*h+o*d-r*l,this.z=s+c*l+r*h-a*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Tr.copy(this).projectOnVector(t),this.sub(Tr)}reflect(t){return this.sub(Tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tr=new rt,ma=new Vi;class Hi{constructor(t=new rt(1/0,1/0,1/0),e=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Je):Je.fromBufferAttribute(r,a),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ki.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ki.copy(n.boundingBox)),ki.applyMatrix4(t.matrixWorld),this.union(ki)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pi),Wi.subVectors(this.max,Pi),ti.subVectors(t.a,Pi),ei.subVectors(t.b,Pi),ni.subVectors(t.c,Pi),En.subVectors(ei,ti),wn.subVectors(ni,ei),Nn.subVectors(ti,ni);let e=[0,-En.z,En.y,0,-wn.z,wn.y,0,-Nn.z,Nn.y,En.z,0,-En.x,wn.z,0,-wn.x,Nn.z,0,-Nn.x,-En.y,En.x,0,-wn.y,wn.x,0,-Nn.y,Nn.x,0];return!br(e,ti,ei,ni,Wi)||(e=[1,0,0,0,1,0,0,0,1],!br(e,ti,ei,ni,Wi))?!1:(Xi.crossVectors(En,wn),e=[Xi.x,Xi.y,Xi.z],br(e,ti,ei,ni,Wi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const hn=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],Je=new rt,ki=new Hi,ti=new rt,ei=new rt,ni=new rt,En=new rt,wn=new rt,Nn=new rt,Pi=new rt,Wi=new rt,Xi=new rt,Fn=new rt;function br(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fn.fromArray(i,r);const o=s.x*Math.abs(Fn.x)+s.y*Math.abs(Fn.y)+s.z*Math.abs(Fn.z),c=t.dot(Fn),d=e.dot(Fn),h=n.dot(Fn);if(Math.max(-Math.max(c,d,h),Math.min(c,d,h))>o)return!1}return!0}const Jl=new Hi,Li=new rt,Ar=new rt;class Qs{constructor(t=new rt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Jl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Li.subVectors(t,this.center);const e=Li.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Li,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ar.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Li.copy(t.center).add(Ar)),this.expandByPoint(Li.copy(t.center).sub(Ar))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new rt,Rr=new rt,qi=new rt,Tn=new rt,Cr=new rt,Yi=new rt,Pr=new rt;class wo{constructor(t=new rt,e=new rt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(un.copy(this.origin).addScaledVector(this.direction,e),un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Rr.copy(t).add(e).multiplyScalar(.5),qi.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(Rr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(qi),o=Tn.dot(this.direction),c=-Tn.dot(qi),d=Tn.lengthSq(),h=Math.abs(1-a*a);let l,u,f,v;if(h>0)if(l=a*c-o,u=a*o-c,v=r*h,l>=0)if(u>=-v)if(u<=v){const g=1/h;l*=g,u*=g,f=l*(l+a*u+2*o)+u*(a*l+u+2*c)+d}else u=r,l=Math.max(0,-(a*u+o)),f=-l*l+u*(u+2*c)+d;else u=-r,l=Math.max(0,-(a*u+o)),f=-l*l+u*(u+2*c)+d;else u<=-v?(l=Math.max(0,-(-a*r+o)),u=l>0?-r:Math.min(Math.max(-r,-c),r),f=-l*l+u*(u+2*c)+d):u<=v?(l=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+d):(l=Math.max(0,-(a*r+o)),u=l>0?r:Math.min(Math.max(-r,-c),r),f=-l*l+u*(u+2*c)+d);else u=a>0?-r:r,l=Math.max(0,-(a*u+o)),f=-l*l+u*(u+2*c)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(Rr).addScaledVector(qi,u),f}intersectSphere(t,e){un.subVectors(t.center,this.origin);const n=un.dot(this.direction),s=un.dot(un)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const d=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,u=this.origin;return d>=0?(n=(t.min.x-u.x)*d,s=(t.max.x-u.x)*d):(n=(t.max.x-u.x)*d,s=(t.min.x-u.x)*d),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),l>=0?(o=(t.min.z-u.z)*l,c=(t.max.z-u.z)*l):(o=(t.max.z-u.z)*l,c=(t.min.z-u.z)*l),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,un)!==null}intersectTriangle(t,e,n,s,r){Cr.subVectors(e,t),Yi.subVectors(n,t),Pr.crossVectors(Cr,Yi);let a=this.direction.dot(Pr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,t);const c=o*this.direction.dot(Yi.crossVectors(Tn,Yi));if(c<0)return null;const d=o*this.direction.dot(Cr.cross(Tn));if(d<0||c+d>a)return null;const h=-o*Tn.dot(Pr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,n,s,r,a,o,c,d,h,l,u,f,v,g,m){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,d,h,l,u,f,v,g,m)}set(t,e,n,s,r,a,o,c,d,h,l,u,f,v,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=d,p[6]=h,p[10]=l,p[14]=u,p[3]=f,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ii.setFromMatrixColumn(t,0).length(),r=1/ii.setFromMatrixColumn(t,1).length(),a=1/ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),d=Math.sin(s),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*l,v=o*h,g=o*l;e[0]=c*h,e[4]=-c*l,e[8]=d,e[1]=f+v*d,e[5]=u-g*d,e[9]=-o*c,e[2]=g-u*d,e[6]=v+f*d,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,f=c*l,v=d*h,g=d*l;e[0]=u+g*o,e[4]=v*o-f,e[8]=a*d,e[1]=a*l,e[5]=a*h,e[9]=-o,e[2]=f*o-v,e[6]=g+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,f=c*l,v=d*h,g=d*l;e[0]=u-g*o,e[4]=-a*l,e[8]=v+f*o,e[1]=f+v*o,e[5]=a*h,e[9]=g-u*o,e[2]=-a*d,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,f=a*l,v=o*h,g=o*l;e[0]=c*h,e[4]=v*d-f,e[8]=u*d+g,e[1]=c*l,e[5]=g*d+u,e[9]=f*d-v,e[2]=-d,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,f=a*d,v=o*c,g=o*d;e[0]=c*h,e[4]=g-u*l,e[8]=v*l+f,e[1]=l,e[5]=a*h,e[9]=-o*h,e[2]=-d*h,e[6]=f*l+v,e[10]=u-g*l}else if(t.order==="XZY"){const u=a*c,f=a*d,v=o*c,g=o*d;e[0]=c*h,e[4]=-l,e[8]=d*h,e[1]=u*l+g,e[5]=a*h,e[9]=f*l-v,e[2]=v*l-f,e[6]=o*h,e[10]=g*l+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tc,t,ec)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),bn.crossVectors(n,qe),bn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),bn.crossVectors(n,qe)),bn.normalize(),Zi.crossVectors(qe,bn),s[0]=bn.x,s[4]=Zi.x,s[8]=qe.x,s[1]=bn.y,s[5]=Zi.y,s[9]=qe.y,s[2]=bn.z,s[6]=Zi.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],d=n[12],h=n[1],l=n[5],u=n[9],f=n[13],v=n[2],g=n[6],m=n[10],p=n[14],x=n[3],M=n[7],_=n[11],A=n[15],I=s[0],U=s[4],P=s[8],E=s[12],y=s[1],T=s[5],B=s[9],N=s[13],X=s[2],q=s[6],J=s[10],O=s[14],L=s[3],Q=s[7],$=s[11],F=s[15];return r[0]=a*I+o*y+c*X+d*L,r[4]=a*U+o*T+c*q+d*Q,r[8]=a*P+o*B+c*J+d*$,r[12]=a*E+o*N+c*O+d*F,r[1]=h*I+l*y+u*X+f*L,r[5]=h*U+l*T+u*q+f*Q,r[9]=h*P+l*B+u*J+f*$,r[13]=h*E+l*N+u*O+f*F,r[2]=v*I+g*y+m*X+p*L,r[6]=v*U+g*T+m*q+p*Q,r[10]=v*P+g*B+m*J+p*$,r[14]=v*E+g*N+m*O+p*F,r[3]=x*I+M*y+_*X+A*L,r[7]=x*U+M*T+_*q+A*Q,r[11]=x*P+M*B+_*J+A*$,r[15]=x*E+M*N+_*O+A*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],d=t[13],h=t[2],l=t[6],u=t[10],f=t[14],v=t[3],g=t[7],m=t[11],p=t[15];return v*(+r*c*l-s*d*l-r*o*u+n*d*u+s*o*f-n*c*f)+g*(+e*c*f-e*d*u+r*a*u-s*a*f+s*d*h-r*c*h)+m*(+e*d*l-e*o*f-r*a*l+n*a*f+r*o*h-n*d*h)+p*(-s*o*h-e*c*l+e*o*u+s*a*l-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],d=t[7],h=t[8],l=t[9],u=t[10],f=t[11],v=t[12],g=t[13],m=t[14],p=t[15],x=l*m*d-g*u*d+g*c*f-o*m*f-l*c*p+o*u*p,M=v*u*d-h*m*d-v*c*f+a*m*f+h*c*p-a*u*p,_=h*g*d-v*l*d+v*o*f-a*g*f-h*o*p+a*l*p,A=v*l*c-h*g*c-v*o*u+a*g*u+h*o*m-a*l*m,I=e*x+n*M+s*_+r*A;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/I;return t[0]=x*U,t[1]=(g*u*r-l*m*r-g*s*f+n*m*f+l*s*p-n*u*p)*U,t[2]=(o*m*r-g*c*r+g*s*d-n*m*d-o*s*p+n*c*p)*U,t[3]=(l*c*r-o*u*r-l*s*d+n*u*d+o*s*f-n*c*f)*U,t[4]=M*U,t[5]=(h*m*r-v*u*r+v*s*f-e*m*f-h*s*p+e*u*p)*U,t[6]=(v*c*r-a*m*r-v*s*d+e*m*d+a*s*p-e*c*p)*U,t[7]=(a*u*r-h*c*r+h*s*d-e*u*d-a*s*f+e*c*f)*U,t[8]=_*U,t[9]=(v*l*r-h*g*r-v*n*f+e*g*f+h*n*p-e*l*p)*U,t[10]=(a*g*r-v*o*r+v*n*d-e*g*d-a*n*p+e*o*p)*U,t[11]=(h*o*r-a*l*r-h*n*d+e*l*d+a*n*f-e*o*f)*U,t[12]=A*U,t[13]=(h*g*s-v*l*s+v*n*u-e*g*u-h*n*m+e*l*m)*U,t[14]=(v*o*s-a*g*s-v*n*c+e*g*c+a*n*m-e*o*m)*U,t[15]=(a*l*s-h*o*s+h*n*c-e*l*c-a*n*u+e*o*u)*U,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,d=r*a,h=r*o;return this.set(d*a+n,d*o-s*c,d*c+s*o,0,d*o+s*c,h*o+n,h*c-s*a,0,d*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,d=r+r,h=a+a,l=o+o,u=r*d,f=r*h,v=r*l,g=a*h,m=a*l,p=o*l,x=c*d,M=c*h,_=c*l,A=n.x,I=n.y,U=n.z;return s[0]=(1-(g+p))*A,s[1]=(f+_)*A,s[2]=(v-M)*A,s[3]=0,s[4]=(f-_)*I,s[5]=(1-(u+p))*I,s[6]=(m+x)*I,s[7]=0,s[8]=(v+M)*U,s[9]=(m-x)*U,s[10]=(1-(u+g))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ii.set(s[0],s[1],s[2]).length();const a=ii.set(s[4],s[5],s[6]).length(),o=ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],tn.copy(this);const d=1/r,h=1/a,l=1/o;return tn.elements[0]*=d,tn.elements[1]*=d,tn.elements[2]*=d,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=l,tn.elements[9]*=l,tn.elements[10]*=l,e.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=yn){const c=this.elements,d=2*r/(e-t),h=2*r/(n-s),l=(e+t)/(e-t),u=(n+s)/(n-s);let f,v;if(o===yn)f=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===_r)f=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=yn){const c=this.elements,d=1/(e-t),h=1/(n-s),l=1/(a-r),u=(e+t)*d,f=(n+s)*h;let v,g;if(o===yn)v=(a+r)*l,g=-2*l;else if(o===_r)v=r*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ii=new rt,tn=new Re,tc=new rt(0,0,0),ec=new rt(1,1,1),bn=new rt,Zi=new rt,qe=new rt,va=new Re,ga=new Vi;class Qe{constructor(t=0,e=0,n=0,s=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],d=s[5],h=s[9],l=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-l,f),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return va.makeRotationFromQuaternion(t),this.setFromRotationMatrix(va,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ga.setFromEuler(this),this.setFromQuaternion(ga,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class Js{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nc=0;const _a=new rt,ri=new Vi,dn=new Re,Ki=new rt,Ii=new rt,ic=new rt,rc=new Vi,xa=new rt(1,0,0),ya=new rt(0,1,0),Ma=new rt(0,0,1),Sa={type:"added"},sc={type:"removed"},si={type:"childadded",child:null},Lr={type:"childremoved",child:null};class Ie extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new rt,e=new Qe,n=new Vi,s=new rt(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new ue}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.multiply(ri),this}rotateOnWorldAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.premultiply(ri),this}rotateX(t){return this.rotateOnAxis(xa,t)}rotateY(t){return this.rotateOnAxis(ya,t)}rotateZ(t){return this.rotateOnAxis(Ma,t)}translateOnAxis(t,e){return _a.copy(t).applyQuaternion(this.quaternion),this.position.add(_a.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xa,t)}translateY(t){return this.translateOnAxis(ya,t)}translateZ(t){return this.translateOnAxis(Ma,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ki.copy(t):Ki.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ii.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Ii,Ki,this.up):dn.lookAt(Ki,Ii,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),ri.setFromRotationMatrix(dn),this.quaternion.premultiply(ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sa),si.child=t,this.dispatchEvent(si),si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sc),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sa),si.child=t,this.dispatchEvent(si),si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,t,ic),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,rc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let d=0,h=c.length;d<h;d++){const l=c[d];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,d=this.material.length;c<d;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),d=a(t.textures),h=a(t.images),l=a(t.shapes),u=a(t.skeletons),f=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),d.length>0&&(n.textures=d),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const d in o){const h=o[d];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new rt(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new rt,fn=new rt,Ir=new rt,pn=new rt,ai=new rt,oi=new rt,Ea=new rt,Dr=new rt,Ur=new rt,Nr=new rt,Fr=new Ce,Br=new Ce,Or=new Ce;class rn{constructor(t=new rt,e=new rt,n=new rt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),en.subVectors(t,e),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){en.subVectors(s,e),fn.subVectors(n,e),Ir.subVectors(t,e);const a=en.dot(en),o=en.dot(fn),c=en.dot(Ir),d=fn.dot(fn),h=fn.dot(Ir),l=a*d-o*o;if(l===0)return r.set(0,0,0),null;const u=1/l,f=(d*c-o*h)*u,v=(a*h-o*c)*u;return r.set(1-f-v,v,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pn.x),c.addScaledVector(a,pn.y),c.addScaledVector(o,pn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Fr.setScalar(0),Br.setScalar(0),Or.setScalar(0),Fr.fromBufferAttribute(t,e),Br.fromBufferAttribute(t,n),Or.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Fr,r.x),a.addScaledVector(Br,r.y),a.addScaledVector(Or,r.z),a}static isFrontFacing(t,e,n,s){return en.subVectors(n,e),fn.subVectors(t,e),en.cross(fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),en.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ai.subVectors(s,n),oi.subVectors(r,n),Dr.subVectors(t,n);const c=ai.dot(Dr),d=oi.dot(Dr);if(c<=0&&d<=0)return e.copy(n);Ur.subVectors(t,s);const h=ai.dot(Ur),l=oi.dot(Ur);if(h>=0&&l<=h)return e.copy(s);const u=c*l-h*d;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ai,a);Nr.subVectors(t,r);const f=ai.dot(Nr),v=oi.dot(Nr);if(v>=0&&f<=v)return e.copy(r);const g=f*d-c*v;if(g<=0&&d>=0&&v<=0)return o=d/(d-v),e.copy(n).addScaledVector(oi,o);const m=h*v-f*l;if(m<=0&&l-h>=0&&f-v>=0)return Ea.subVectors(r,s),o=(l-h)/(l-h+(f-v)),e.copy(s).addScaledVector(Ea,o);const p=1/(m+g+u);return a=g*p,o=u*p,e.copy(n).addScaledVector(ai,a).addScaledVector(oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const To={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},$i={h:0,s:0,l:0};function zr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class _e{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Se.workingColorSpace){if(t=js(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=zr(a,r,t+1/3),this.g=zr(a,r,t),this.b=zr(a,r,t-1/3)}return Se.toWorkingColorSpace(this,s),this}setStyle(t,e=je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const n=To[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return Se.fromWorkingColorSpace(Be.copy(this),t),Math.round(ge(Be.r*255,0,255))*65536+Math.round(ge(Be.g*255,0,255))*256+Math.round(ge(Be.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,s=Be.g,r=Be.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,d;const h=(o+a)/2;if(o===a)c=0,d=0;else{const l=a-o;switch(d=h<=.5?l/(a+o):l/(2-a-o),a){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=d,t.l=h,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=je){Se.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,s=Be.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL($i);const n=Fi(An.h,$i.h,e),s=Fi(An.s,$i.s,e),r=Fi(An.l,$i.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new _e;_e.NAMES=To;let ac=0;class $n extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ac++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=mi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ts,this.blendDst=es,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=_i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=la,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ts&&(n.blendSrc=this.blendSrc),this.blendDst!==es&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==la&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ta extends $n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new rt,ji=new xe;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ca,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ji.fromBufferAttribute(this,e),ji.applyMatrix3(t),this.setXY(e,ji.x,ji.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=di(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=di(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=di(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ca&&(t.usage=this.usage),t}}class bo extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ao extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qn extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let oc=0;const $e=new Re,Vr=new Ie,li=new rt,Ye=new Hi,Di=new Hi,Ne=new rt;class jn extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mo(t)?Ao:bo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return Vr.lookAt(t),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qn(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Di.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(Ye.min,Di.min),Ye.expandByPoint(Ne),Ne.addVectors(Ye.max,Di.max),Ye.expandByPoint(Ne)):(Ye.expandByPoint(Di.min),Ye.expandByPoint(Di.max))}Ye.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let d=0,h=o.count;d<h;d++)Ne.fromBufferAttribute(o,d),c&&(li.fromBufferAttribute(t,d),Ne.add(li)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new rt,c[P]=new rt;const d=new rt,h=new rt,l=new rt,u=new xe,f=new xe,v=new xe,g=new rt,m=new rt;function p(P,E,y){d.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),l.fromBufferAttribute(n,y),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,E),v.fromBufferAttribute(r,y),h.sub(d),l.sub(d),f.sub(u),v.sub(u);const T=1/(f.x*v.y-v.x*f.y);isFinite(T)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(l,-f.y).multiplyScalar(T),m.copy(l).multiplyScalar(f.x).addScaledVector(h,-v.x).multiplyScalar(T),o[P].add(g),o[E].add(g),o[y].add(g),c[P].add(m),c[E].add(m),c[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,E=x.length;P<E;++P){const y=x[P],T=y.start,B=y.count;for(let N=T,X=T+B;N<X;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const M=new rt,_=new rt,A=new rt,I=new rt;function U(P){A.fromBufferAttribute(s,P),I.copy(A);const E=o[P];M.copy(E),M.sub(A.multiplyScalar(A.dot(E))).normalize(),_.crossVectors(I,E);const T=_.dot(c[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,T)}for(let P=0,E=x.length;P<E;++P){const y=x[P],T=y.start,B=y.count;for(let N=T,X=T+B;N<X;N+=3)U(t.getX(N+0)),U(t.getX(N+1)),U(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new rt,r=new rt,a=new rt,o=new rt,c=new rt,d=new rt,h=new rt,l=new rt;if(t)for(let u=0,f=t.count;u<f;u+=3){const v=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),d.fromBufferAttribute(n,m),o.add(h),c.add(h),d.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,d.x,d.y,d.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,c){const d=o.array,h=o.itemSize,l=o.normalized,u=new d.constructor(c.length*h);let f=0,v=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*h;for(let p=0;p<h;p++)u[v++]=d[f++]}return new cn(u,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new jn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],d=t(c,n);e.setAttribute(o,d)}const r=this.morphAttributes;for(const o in r){const c=[],d=r[o];for(let h=0,l=d.length;h<l;h++){const u=d[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const d=a[o];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(t[d]=c[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const d=n[c];t.data.attributes[c]=d.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],h=[];for(let l=0,u=d.length;l<u;l++){const f=d[l];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const d in s){const h=s[d];this.setAttribute(d,h.clone(e))}const r=t.morphAttributes;for(const d in r){const h=[],l=r[d];for(let u=0,f=l.length;u<f;u++)h.push(l[u].clone(e));this.morphAttributes[d]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let d=0,h=a.length;d<h;d++){const l=a[d];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wa=new Re,Bn=new wo,Qi=new Qs,Ta=new rt,Ji=new rt,tr=new rt,er=new rt,Hr=new rt,nr=new rt,ba=new rt,ir=new rt;class Ke extends Ie{constructor(t=new jn,e=new ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){nr.set(0,0,0);for(let c=0,d=r.length;c<d;c++){const h=o[c],l=r[c];h!==0&&(Hr.fromBufferAttribute(l,t),a?nr.addScaledVector(Hr,h):nr.addScaledVector(Hr.sub(e),h))}e.add(nr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(Qi.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(Qi,Ta)===null||Bn.origin.distanceToSquared(Ta)>(t.far-t.near)**2))&&(wa.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(wa),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,d=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=u.length;v<g;v++){const m=u[v],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,A=M;_<A;_+=3){const I=o.getX(_),U=o.getX(_+1),P=o.getX(_+2);s=rr(this,p,t,n,d,h,l,I,U,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const x=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);s=rr(this,a,t,n,d,h,l,x,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,g=u.length;v<g;v++){const m=u[v],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,A=M;_<A;_+=3){const I=_,U=_+1,P=_+2;s=rr(this,p,t,n,d,h,l,I,U,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const x=m,M=m+1,_=m+2;s=rr(this,a,t,n,d,h,l,x,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function lc(i,t,e,n,s,r,a,o){let c;if(t.side===We?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===In,o),c===null)return null;ir.copy(o),ir.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(ir);return d<e.near||d>e.far?null:{distance:d,point:ir.clone(),object:i}}function rr(i,t,e,n,s,r,a,o,c,d){i.getVertexPosition(o,Ji),i.getVertexPosition(c,tr),i.getVertexPosition(d,er);const h=lc(i,t,e,n,Ji,tr,er,ba);if(h){const l=new rt;rn.getBarycoord(ba,Ji,tr,er,l),s&&(h.uv=rn.getInterpolatedAttribute(s,o,c,d,l,new xe)),r&&(h.uv1=rn.getInterpolatedAttribute(r,o,c,d,l,new xe)),a&&(h.normal=rn.getInterpolatedAttribute(a,o,c,d,l,new rt),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:d,normal:new rt,materialIndex:0};rn.getNormal(Ji,tr,er,u.normal),h.face=u,h.barycoord=l}return h}class Ri extends jn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],d=[],h=[],l=[];let u=0,f=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new qn(d,3)),this.setAttribute("normal",new qn(h,3)),this.setAttribute("uv",new qn(l,2));function v(g,m,p,x,M,_,A,I,U,P,E){const y=_/U,T=A/P,B=_/2,N=A/2,X=I/2,q=U+1,J=P+1;let O=0,L=0;const Q=new rt;for(let $=0;$<J;$++){const F=$*T-N;for(let j=0;j<q;j++){const z=j*y-B;Q[g]=z*x,Q[m]=F*M,Q[p]=X,d.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[p]=I>0?1:-1,h.push(Q.x,Q.y,Q.z),l.push(j/U),l.push(1-$/P),O+=1}}for(let $=0;$<P;$++)for(let F=0;F<U;F++){const j=u+F+q*$,z=u+F+q*($+1),b=u+(F+1)+q*($+1),R=u+(F+1)+q*$;c.push(j,z,R),c.push(z,b,R),L+=6}o.addGroup(f,L,E),f+=L,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ti(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=Ti(i[e]);for(const s in n)t[s]=n[s]}return t}function cc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ro(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}const hc={clone:Ti,merge:Ve};var uc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends $n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uc,this.fragmentShader=dc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ti(t.uniforms),this.uniformsGroups=cc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Co extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new rt,Aa=new xe,Ra=new xe;class Ze extends Co{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ni*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wi*2*Math.atan(Math.tan(Ni*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,Aa,Ra),e.subVectors(Ra,Aa)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ni*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,d=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/d,s*=a.width/c,n*=a.height/d}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ci=-90,hi=1;class fc extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze(ci,hi,t,e);s.layers=this.layers,this.add(s);const r=new Ze(ci,hi,t,e);r.layers=this.layers,this.add(r);const a=new Ze(ci,hi,t,e);a.layers=this.layers,this.add(a);const o=new Ze(ci,hi,t,e);o.layers=this.layers,this.add(o);const c=new Ze(ci,hi,t,e);c.layers=this.layers,this.add(c);const d=new Ze(ci,hi,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const d of e)this.remove(d);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,d,h]=this.children,l=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,d),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(l,u,f),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Po extends Oe{constructor(t,e,n,s,r,a,o,c,d,h){t=t!==void 0?t:[],e=e!==void 0?e:xi,super(t,e,n,s,r,a,o,c,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pc extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Po(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ri(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Pn});r.uniforms.tEquirect.value=e;const a=new Ke(s,r),o=e.minFilter;return e.minFilter===Xn&&(e.minFilter=ln),new fc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class mc extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Gr=new rt,vc=new rt,gc=new ue;class vn{constructor(t=new rt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Gr.subVectors(n,e).cross(vc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Gr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gc.getNormalMatrix(t),s=this.coplanarPoint(Gr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new Qs,sr=new rt;class ea{constructor(t=new vn,e=new vn,n=new vn,s=new vn,r=new vn,a=new vn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],d=s[4],h=s[5],l=s[6],u=s[7],f=s[8],v=s[9],g=s[10],m=s[11],p=s[12],x=s[13],M=s[14],_=s[15];if(n[0].setComponents(c-r,u-d,m-f,_-p).normalize(),n[1].setComponents(c+r,u+d,m+f,_+p).normalize(),n[2].setComponents(c+a,u+h,m+v,_+x).normalize(),n[3].setComponents(c-a,u-h,m-v,_-x).normalize(),n[4].setComponents(c-o,u-l,m-g,_-M).normalize(),e===yn)n[5].setComponents(c+o,u+l,m+g,_+M).normalize();else if(e===_r)n[5].setComponents(o,l,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(sr.x=s.normal.x>0?t.max.x:t.min.x,sr.y=s.normal.y>0?t.max.y:t.min.y,sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ar extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}class _c extends Oe{constructor(t,e,n,s,r,a,o,c,d){super(t,e,n,s,r,a,o,c,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lo extends Oe{constructor(t,e,n,s,r,a,o,c,d,h=vi){if(h!==vi&&h!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vi&&(n=Yn),n===void 0&&h===Si&&(n=Mi),super(null,s,r,a,o,c,h,n,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:an,this.minFilter=c!==void 0?c:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Kn extends jn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),d=o+1,h=c+1,l=t/o,u=e/c,f=[],v=[],g=[],m=[];for(let p=0;p<h;p++){const x=p*u-a;for(let M=0;M<d;M++){const _=M*l-r;v.push(_,-x,0),g.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const M=x+d*p,_=x+d*(p+1),A=x+1+d*(p+1),I=x+1+d*p;f.push(M,_,I),f.push(_,A,I)}this.setIndex(f),this.setAttribute("position",new qn(v,3)),this.setAttribute("normal",new qn(g,3)),this.setAttribute("uv",new qn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.width,t.height,t.widthSegments,t.heightSegments)}}class xc extends $n{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new _e(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class yc extends $n{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mc extends $n{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _e(16777215),this.specular=new _e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sc extends $n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ec extends $n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ca={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class wc{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,l){return d.push(h,l),this},this.removeHandler=function(h){const l=d.indexOf(h);return l!==-1&&d.splice(l,2),this},this.getHandler=function(h){for(let l=0,u=d.length;l<u;l+=2){const f=d[l],v=d[l+1];if(f.global&&(f.lastIndex=0),f.test(h))return v}return null}}}const Tc=new wc;class na{constructor(t){this.manager=t!==void 0?t:Tc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}na.DEFAULT_MATERIAL_NAME="__DEFAULT";class bc extends na{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Ca.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Oi("img");function c(){h(),Ca.add(t,this),e&&e(this),r.manager.itemEnd(t)}function d(l){h(),s&&s(l),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",d,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Ac extends na{constructor(t){super(t)}load(t,e,n,s){const r=new Oe,a=new bc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class ia extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const kr=new Re,Pa=new rt,La=new rt;class Io{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ea,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Pa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pa),La.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(La),e.updateMatrixWorld(),kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Rc extends Io{constructor(){super(new Ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=wi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Cc extends ia{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Rc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Do extends Co{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,a=r+d*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Pc extends Io{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lc extends ia{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Pc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ic extends ia{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Dc extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}const Ia=new Re;class Uc{constructor(t,e,n=0,s=1/0){this.ray=new wo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ia.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ia),this}intersectObject(t,e=!0,n=[]){return zs(t,this,n,e),n.sort(Da),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)zs(t[s],this,n,e);return n.sort(Da),n}}function Da(i,t){return i.distance-t.distance}function zs(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)zs(r[a],t,e,!0)}}function Ua(i,t,e,n){const s=Nc(n);switch(e){case fo:return i*t;case mo:return i*t;case vo:return i*t*2;case go:return i*t/s.components*s.byteLength;case Ys:return i*t/s.components*s.byteLength;case _o:return i*t*2/s.components*s.byteLength;case Zs:return i*t*2/s.components*s.byteLength;case po:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case Ks:return i*t*4/s.components*s.byteLength;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ps:case vs:return Math.max(i,16)*Math.max(t,8)/4;case fs:case ms:return Math.max(i,8)*Math.max(t,8)/2;case gs:case _s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ms:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ss:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Es:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ws:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ts:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case bs:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case As:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Rs:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Cs:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ps:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ls:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Is:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ds:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mr:case Us:case Ns:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xo:case Fs:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Bs:case Os:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Nc(i){switch(i){case Sn:case co:return{byteLength:1,components:1};case Bi:case ho:case zi:return{byteLength:2,components:1};case Xs:case qs:return{byteLength:2,components:4};case Yn:case Ws:case xn:return{byteLength:4,components:1};case uo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gs);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uo(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fc(i){const t=new WeakMap;function e(o,c){const d=o.array,h=o.usage,l=d.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,d,h),o.onUploadCallback();let f;if(d instanceof Float32Array)f=i.FLOAT;else if(d instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)f=i.SHORT;else if(d instanceof Uint32Array)f=i.UNSIGNED_INT;else if(d instanceof Int32Array)f=i.INT;else if(d instanceof Int8Array)f=i.BYTE;else if(d instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:u,type:f,bytesPerElement:d.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,c,d){const h=c.array,l=c.updateRanges;if(i.bindBuffer(d,o),l.length===0)i.bufferSubData(d,0,h);else{l.sort((f,v)=>f.start-v.start);let u=0;for(let f=1;f<l.length;f++){const v=l[u],g=l[f];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++u,l[u]=g)}l.length=u+1;for(let f=0,v=l.length;f<v;f++){const g=l[f];i.bufferSubData(d,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const d=t.get(o);if(d===void 0)t.set(o,e(o,c));else if(d.version<o.version){if(d.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,o,c),d.version=o.version}}return{get:s,remove:r,update:a}}var Bc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$c=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ah=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ph=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_h=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Th=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ah=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ch=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ph=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ih=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Oh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$h=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ru=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,su=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,au=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ou=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,du=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_u=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Su=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Au=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ru=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ou=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ku=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ku=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$u=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ju=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ju=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,td=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ed=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,id=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ad=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,od=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ld=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ud=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,md=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:Bc,alphahash_pars_fragment:Oc,alphamap_fragment:zc,alphamap_pars_fragment:Vc,alphatest_fragment:Hc,alphatest_pars_fragment:Gc,aomap_fragment:kc,aomap_pars_fragment:Wc,batching_pars_vertex:Xc,batching_vertex:qc,begin_vertex:Yc,beginnormal_vertex:Zc,bsdfs:Kc,iridescence_fragment:$c,bumpmap_pars_fragment:jc,clipping_planes_fragment:Qc,clipping_planes_pars_fragment:Jc,clipping_planes_pars_vertex:th,clipping_planes_vertex:eh,color_fragment:nh,color_pars_fragment:ih,color_pars_vertex:rh,color_vertex:sh,common:ah,cube_uv_reflection_fragment:oh,defaultnormal_vertex:lh,displacementmap_pars_vertex:ch,displacementmap_vertex:hh,emissivemap_fragment:uh,emissivemap_pars_fragment:dh,colorspace_fragment:fh,colorspace_pars_fragment:ph,envmap_fragment:mh,envmap_common_pars_fragment:vh,envmap_pars_fragment:gh,envmap_pars_vertex:_h,envmap_physical_pars_fragment:Ch,envmap_vertex:xh,fog_vertex:yh,fog_pars_vertex:Mh,fog_fragment:Sh,fog_pars_fragment:Eh,gradientmap_pars_fragment:wh,lightmap_pars_fragment:Th,lights_lambert_fragment:bh,lights_lambert_pars_fragment:Ah,lights_pars_begin:Rh,lights_toon_fragment:Ph,lights_toon_pars_fragment:Lh,lights_phong_fragment:Ih,lights_phong_pars_fragment:Dh,lights_physical_fragment:Uh,lights_physical_pars_fragment:Nh,lights_fragment_begin:Fh,lights_fragment_maps:Bh,lights_fragment_end:Oh,logdepthbuf_fragment:zh,logdepthbuf_pars_fragment:Vh,logdepthbuf_pars_vertex:Hh,logdepthbuf_vertex:Gh,map_fragment:kh,map_pars_fragment:Wh,map_particle_fragment:Xh,map_particle_pars_fragment:qh,metalnessmap_fragment:Yh,metalnessmap_pars_fragment:Zh,morphinstance_vertex:Kh,morphcolor_vertex:$h,morphnormal_vertex:jh,morphtarget_pars_vertex:Qh,morphtarget_vertex:Jh,normal_fragment_begin:tu,normal_fragment_maps:eu,normal_pars_fragment:nu,normal_pars_vertex:iu,normal_vertex:ru,normalmap_pars_fragment:su,clearcoat_normal_fragment_begin:au,clearcoat_normal_fragment_maps:ou,clearcoat_pars_fragment:lu,iridescence_pars_fragment:cu,opaque_fragment:hu,packing:uu,premultiplied_alpha_fragment:du,project_vertex:fu,dithering_fragment:pu,dithering_pars_fragment:mu,roughnessmap_fragment:vu,roughnessmap_pars_fragment:gu,shadowmap_pars_fragment:_u,shadowmap_pars_vertex:xu,shadowmap_vertex:yu,shadowmask_pars_fragment:Mu,skinbase_vertex:Su,skinning_pars_vertex:Eu,skinning_vertex:wu,skinnormal_vertex:Tu,specularmap_fragment:bu,specularmap_pars_fragment:Au,tonemapping_fragment:Ru,tonemapping_pars_fragment:Cu,transmission_fragment:Pu,transmission_pars_fragment:Lu,uv_pars_fragment:Iu,uv_pars_vertex:Du,uv_vertex:Uu,worldpos_vertex:Nu,background_vert:Fu,background_frag:Bu,backgroundCube_vert:Ou,backgroundCube_frag:zu,cube_vert:Vu,cube_frag:Hu,depth_vert:Gu,depth_frag:ku,distanceRGBA_vert:Wu,distanceRGBA_frag:Xu,equirect_vert:qu,equirect_frag:Yu,linedashed_vert:Zu,linedashed_frag:Ku,meshbasic_vert:$u,meshbasic_frag:ju,meshlambert_vert:Qu,meshlambert_frag:Ju,meshmatcap_vert:td,meshmatcap_frag:ed,meshnormal_vert:nd,meshnormal_frag:id,meshphong_vert:rd,meshphong_frag:sd,meshphysical_vert:ad,meshphysical_frag:od,meshtoon_vert:ld,meshtoon_frag:cd,points_vert:hd,points_frag:ud,shadow_vert:dd,shadow_frag:fd,sprite_vert:pd,sprite_frag:md},Gt={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},on={basic:{uniforms:Ve([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Ve([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new _e(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Ve([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Ve([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Ve([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new _e(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Ve([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Ve([Gt.points,Gt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Ve([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Ve([Gt.common,Gt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Ve([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Ve([Gt.sprite,Gt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Ve([Gt.common,Gt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Ve([Gt.lights,Gt.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};on.physical={uniforms:Ve([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const or={r:0,b:0,g:0},zn=new Qe,vd=new Re;function gd(i,t,e,n,s,r,a){const o=new _e(0);let c=r===!0?0:1,d,h,l=null,u=0,f=null;function v(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function g(M){let _=!1;const A=v(M);A===null?p(o,c):A&&A.isColor&&(p(A,1),_=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){const A=v(_);A&&(A.isCubeTexture||A.mapping===xr)?(h===void 0&&(h=new Ke(new Ri(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Ti(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,U,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zn.copy(_.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vd.makeRotationFromEuler(zn)),h.material.toneMapped=Se.getTransfer(A.colorSpace)!==be,(l!==A||u!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,l=A,u=A.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(d===void 0&&(d=new Ke(new Kn(2,2),new Dn({name:"BackgroundMaterial",uniforms:Ti(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=A,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.toneMapped=Se.getTransfer(A.colorSpace)!==be,A.matrixAutoUpdate===!0&&A.updateMatrix(),d.material.uniforms.uvTransform.value.copy(A.matrix),(l!==A||u!==A.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,l=A,u=A.version,f=i.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null))}function p(M,_){M.getRGB(or,Ro(i)),n.buffers.color.setClear(or.r,or.g,or.b,_,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:g,addToRenderList:m,dispose:x}}function _d(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(y,T,B,N,X){let q=!1;const J=l(N,B,T);r!==J&&(r=J,d(r.object)),q=f(y,N,B,X),q&&v(y,N,B,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,_(y,T,B,N),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function d(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function l(y,T,B){const N=B.wireframe===!0;let X=n[y.id];X===void 0&&(X={},n[y.id]=X);let q=X[T.id];q===void 0&&(q={},X[T.id]=q);let J=q[N];return J===void 0&&(J=u(c()),q[N]=J),J}function u(y){const T=[],B=[],N=[];for(let X=0;X<e;X++)T[X]=0,B[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:B,attributeDivisors:N,object:y,attributes:{},index:null}}function f(y,T,B,N){const X=r.attributes,q=T.attributes;let J=0;const O=B.getAttributes();for(const L in O)if(O[L].location>=0){const $=X[L];let F=q[L];if(F===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(F=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(F=y.instanceColor)),$===void 0||$.attribute!==F||F&&$.data!==F.data)return!0;J++}return r.attributesNum!==J||r.index!==N}function v(y,T,B,N){const X={},q=T.attributes;let J=0;const O=B.getAttributes();for(const L in O)if(O[L].location>=0){let $=q[L];$===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&($=y.instanceColor));const F={};F.attribute=$,$&&$.data&&(F.data=$.data),X[L]=F,J++}r.attributes=X,r.attributesNum=J,r.index=N}function g(){const y=r.newAttributes;for(let T=0,B=y.length;T<B;T++)y[T]=0}function m(y){p(y,0)}function p(y,T){const B=r.newAttributes,N=r.enabledAttributes,X=r.attributeDivisors;B[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),X[y]!==T&&(i.vertexAttribDivisor(y,T),X[y]=T)}function x(){const y=r.newAttributes,T=r.enabledAttributes;for(let B=0,N=T.length;B<N;B++)T[B]!==y[B]&&(i.disableVertexAttribArray(B),T[B]=0)}function M(y,T,B,N,X,q,J){J===!0?i.vertexAttribIPointer(y,T,B,X,q):i.vertexAttribPointer(y,T,B,N,X,q)}function _(y,T,B,N){g();const X=N.attributes,q=B.getAttributes(),J=T.defaultAttributeValues;for(const O in q){const L=q[O];if(L.location>=0){let Q=X[O];if(Q===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),Q!==void 0){const $=Q.normalized,F=Q.itemSize,j=t.get(Q);if(j===void 0)continue;const z=j.buffer,b=j.type,R=j.bytesPerElement,H=b===i.INT||b===i.UNSIGNED_INT||Q.gpuType===Ws;if(Q.isInterleavedBufferAttribute){const K=Q.data,et=K.stride,k=Q.offset;if(K.isInstancedInterleavedBuffer){for(let it=0;it<L.locationSize;it++)p(L.location+it,K.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let it=0;it<L.locationSize;it++)m(L.location+it);i.bindBuffer(i.ARRAY_BUFFER,z);for(let it=0;it<L.locationSize;it++)M(L.location+it,F/L.locationSize,b,$,et*R,(k+F/L.locationSize*it)*R,H)}else{if(Q.isInstancedBufferAttribute){for(let K=0;K<L.locationSize;K++)p(L.location+K,Q.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let K=0;K<L.locationSize;K++)m(L.location+K);i.bindBuffer(i.ARRAY_BUFFER,z);for(let K=0;K<L.locationSize;K++)M(L.location+K,F/L.locationSize,b,$,F*R,F/L.locationSize*K*R,H)}}else if(J!==void 0){const $=J[O];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(L.location,$);break;case 3:i.vertexAttrib3fv(L.location,$);break;case 4:i.vertexAttrib4fv(L.location,$);break;default:i.vertexAttrib1fv(L.location,$)}}}}x()}function A(){P();for(const y in n){const T=n[y];for(const B in T){const N=T[B];for(const X in N)h(N[X].object),delete N[X];delete T[B]}delete n[y]}}function I(y){if(n[y.id]===void 0)return;const T=n[y.id];for(const B in T){const N=T[B];for(const X in N)h(N[X].object),delete N[X];delete T[B]}delete n[y.id]}function U(y){for(const T in n){const B=n[T];if(B[y.id]===void 0)continue;const N=B[y.id];for(const X in N)h(N[X].object),delete N[X];delete B[y.id]}}function P(){E(),a=!0,r!==s&&(r=s,d(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfProgram:U,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function xd(i,t,e){let n;function s(d){n=d}function r(d,h){i.drawArrays(n,d,h),e.update(h,n,1)}function a(d,h,l){l!==0&&(i.drawArraysInstanced(n,d,h,l),e.update(h,n,l))}function o(d,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,h,0,l);let f=0;for(let v=0;v<l;v++)f+=h[v];e.update(f,n,1)}function c(d,h,l,u){if(l===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<d.length;v++)a(d[v],h[v],u[v]);else{f.multiDrawArraysInstancedWEBGL(n,d,0,h,0,u,0,l);let v=0;for(let g=0;g<l;g++)v+=h[g]*u[g];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function yd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(U){return!(U!==sn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const P=U===zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Sn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==xn&&!P)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const h=c(d);h!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const l=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:d,logarithmicDepthBuffer:l,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:A,maxSamples:I}}function Md(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new vn,o=new ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,u){const f=l.length!==0||u||n!==0||s;return s=u,n=l.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,u){e=h(l,u,0)},this.setState=function(l,u,f){const v=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,p=i.get(l);if(!s||v===null||v.length===0||r&&!m)r?h(null):d();else{const x=r?0:n,M=x*4;let _=p.clippingState||null;c.value=_,_=h(v,u,M,f);for(let A=0;A!==M;++A)_[A]=e[A];p.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function d(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,u,f,v){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const p=f+g*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==g;++M,_+=4)a.copy(l[M]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Sd(i){let t=new WeakMap;function e(a,o){return o===cs?a.mapping=xi:o===hs&&(a.mapping=yi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===cs||o===hs)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const d=new pc(c.height);return d.fromEquirectangularTexture(i,a),t.set(a,d),a.addEventListener("dispose",s),e(d.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const pi=4,Na=[.125,.215,.35,.446,.526,.582],kn=20,Wr=new Do,Fa=new _e;let Xr=null,qr=0,Yr=0,Zr=!1;const Hn=(1+Math.sqrt(5))/2,ui=1/Hn,Ba=[new rt(-Hn,ui,0),new rt(Hn,ui,0),new rt(-ui,0,Hn),new rt(ui,0,Hn),new rt(0,Hn,-ui),new rt(0,Hn,ui),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)];class Oa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ha(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Va(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xr,qr,Yr),this._renderer.xr.enabled=Zr,t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xi||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:zi,format:sn,colorSpace:Ei,depthBuffer:!1},s=za(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=za(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ed(r)),this._blurMaterial=wd(r,t,e)}return s}_compileMaterial(t){const e=new Ke(this._lodPlanes[0],t);this._renderer.compile(e,Wr)}_sceneToCubeUV(t,e,n,s){const o=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,u=h.toneMapping;h.getClearColor(Fa),h.toneMapping=Ln,h.autoClear=!1;const f=new ta({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),v=new Ke(new Ri,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(Fa),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(d[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,d[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,d[p]));const M=this._cubeSize;lr(s,x*M,p>2?M:0,M,M),h.setRenderTarget(s),g&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=u,h.autoClear=l,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===xi||t.mapping===yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ha()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Va());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;lr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Wr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ba[(s-r-1)%Ba.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new Ke(this._lodPlanes[s],d),u=d.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*kn-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):kn;m>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);const p=[];let x=0;for(let U=0;U<kn;++U){const P=U/g,E=Math.exp(-P*P/2);p.push(E),U===0?x+=E:U<m&&(x+=2*E)}for(let U=0;U<p.length;U++)p[U]=p[U]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=v,u.mipInt.value=M-n;const _=this._sizeLods[s],A=3*_*(s>M-pi?s-M+pi:0),I=4*(this._cubeSize-_);lr(e,A,I,3*_,2*_),c.setRenderTarget(e),c.render(l,Wr)}}function Ed(i){const t=[],e=[],n=[];let s=i;const r=i-pi+1+Na.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-pi?c=Na[a-i+pi-1]:a===0&&(c=0),n.push(c);const d=1/(o-2),h=-d,l=1+d,u=[h,h,l,h,l,l,h,h,l,l,h,l],f=6,v=6,g=3,m=2,p=1,x=new Float32Array(g*v*f),M=new Float32Array(m*v*f),_=new Float32Array(p*v*f);for(let I=0;I<f;I++){const U=I%3*2/3-1,P=I>2?0:-1,E=[U,P,0,U+2/3,P,0,U+2/3,P+1,0,U,P,0,U+2/3,P+1,0,U,P+1,0];x.set(E,g*v*I),M.set(u,m*v*I);const y=[I,I,I,I,I,I];_.set(y,p*v*I)}const A=new jn;A.setAttribute("position",new cn(x,g)),A.setAttribute("uv",new cn(M,m)),A.setAttribute("faceIndex",new cn(_,p)),t.push(A),s>pi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function za(i,t,e){const n=new Zn(i,t,e);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function wd(i,t,e){const n=new Float32Array(kn),s=new rt(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Va(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ha(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ra(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Td(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,d=c===cs||c===hs,h=c===xi||c===yi;if(d||h){let l=t.get(o);const u=l!==void 0?l.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Oa(i)),l=d?e.fromEquirectangular(o,l):e.fromCubemap(o,l),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),l.texture;if(l!==void 0)return l.texture;{const f=o.image;return d&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Oa(i)),l=d?e.fromEquirectangular(o):e.fromCubemap(o),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),o.addEventListener("dispose",r),l.texture):null}}}return o}function s(o){let c=0;const d=6;for(let h=0;h<d;h++)o[h]!==void 0&&c++;return c===d}function r(o){const c=o.target;c.removeEventListener("dispose",r);const d=t.get(c);d!==void 0&&(t.delete(c),d.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function bd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&fi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ad(i,t,e,n){const s={},r=new WeakMap;function a(l){const u=l.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(l,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(l){const u=l.attributes;for(const f in u)t.update(u[f],i.ARRAY_BUFFER)}function d(l){const u=[],f=l.index,v=l.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let M=0,_=x.length;M<_;M+=3){const A=x[M+0],I=x[M+1],U=x[M+2];u.push(A,I,I,U,U,A)}}else if(v!==void 0){const x=v.array;g=v.version;for(let M=0,_=x.length/3-1;M<_;M+=3){const A=M+0,I=M+1,U=M+2;u.push(A,I,I,U,U,A)}}else return;const m=new(Mo(u)?Ao:bo)(u,1);m.version=g;const p=r.get(l);p&&t.remove(p),r.set(l,m)}function h(l){const u=r.get(l);if(u){const f=l.index;f!==null&&u.version<f.version&&d(l)}else d(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:h}}function Rd(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function d(u,f,v){v!==0&&(i.drawElementsInstanced(n,f,r,u*a,v),e.update(f,n,v))}function h(u,f,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];e.update(m,n,1)}function l(u,f,v,g){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)d(u[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,g,0,v);let p=0;for(let x=0;x<v;x++)p+=f[x]*g[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=l}function Cd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Pd(i,t,e){const n=new WeakMap,s=new Ce;function r(a,o,c){const d=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==l){let y=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let _=0;v===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let A=o.attributes.position.count*_,I=1;A>t.maxTextureSize&&(I=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const U=new Float32Array(A*I*4*l),P=new Eo(U,A,I,l);P.type=xn,P.needsUpdate=!0;const E=_*4;for(let T=0;T<l;T++){const B=p[T],N=x[T],X=M[T],q=A*I*4*T;for(let J=0;J<B.count;J++){const O=J*E;v===!0&&(s.fromBufferAttribute(B,J),U[q+O+0]=s.x,U[q+O+1]=s.y,U[q+O+2]=s.z,U[q+O+3]=0),g===!0&&(s.fromBufferAttribute(N,J),U[q+O+4]=s.x,U[q+O+5]=s.y,U[q+O+6]=s.z,U[q+O+7]=0),m===!0&&(s.fromBufferAttribute(X,J),U[q+O+8]=s.x,U[q+O+9]=s.y,U[q+O+10]=s.z,U[q+O+11]=X.itemSize===4?s.w:1)}}u={count:l,texture:P,size:new xe(A,I)},n.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let m=0;m<d.length;m++)v+=d[m];const g=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",d)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Ld(i,t,e,n){let s=new WeakMap;function r(c){const d=n.render.frame,h=c.geometry,l=t.get(c,h);if(s.get(l)!==d&&(t.update(l),s.set(l,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==d&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==d&&(u.update(),s.set(u,d))}return l}function a(){s=new WeakMap}function o(c){const d=c.target;d.removeEventListener("dispose",o),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:r,dispose:a}}const No=new Oe,Ga=new Lo(1,1),Fo=new Eo,Bo=new Ql,Oo=new Po,ka=[],Wa=[],Xa=new Float32Array(16),qa=new Float32Array(9),Ya=new Float32Array(4);function Ci(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ka[s];if(r===void 0&&(r=new Float32Array(s),ka[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yr(i,t){let e=Wa[t];e===void 0&&(e=new Int32Array(t),Wa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Id(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Dd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Ud(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Nd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function Fd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Ya.set(n),i.uniformMatrix2fv(this.addr,!1,Ya),Ue(e,n)}}function Bd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;qa.set(n),i.uniformMatrix3fv(this.addr,!1,qa),Ue(e,n)}}function Od(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Xa.set(n),i.uniformMatrix4fv(this.addr,!1,Xa),Ue(e,n)}}function zd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Vd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Hd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function Gd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function kd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function Xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Yd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ga.compareFunction=yo,r=Ga):r=No,e.setTexture2D(t||r,s)}function Zd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Bo,s)}function Kd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Oo,s)}function $d(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fo,s)}function jd(i){switch(i){case 5126:return Id;case 35664:return Dd;case 35665:return Ud;case 35666:return Nd;case 35674:return Fd;case 35675:return Bd;case 35676:return Od;case 5124:case 35670:return zd;case 35667:case 35671:return Vd;case 35668:case 35672:return Hd;case 35669:case 35673:return Gd;case 5125:return kd;case 36294:return Wd;case 36295:return Xd;case 36296:return qd;case 35678:case 36198:case 36298:case 36306:case 35682:return Yd;case 35679:case 36299:case 36307:return Zd;case 35680:case 36300:case 36308:case 36293:return Kd;case 36289:case 36303:case 36311:case 36292:return $d}}function Qd(i,t){i.uniform1fv(this.addr,t)}function Jd(i,t){const e=Ci(t,this.size,2);i.uniform2fv(this.addr,e)}function tf(i,t){const e=Ci(t,this.size,3);i.uniform3fv(this.addr,e)}function ef(i,t){const e=Ci(t,this.size,4);i.uniform4fv(this.addr,e)}function nf(i,t){const e=Ci(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function rf(i,t){const e=Ci(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sf(i,t){const e=Ci(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function af(i,t){i.uniform1iv(this.addr,t)}function of(i,t){i.uniform2iv(this.addr,t)}function lf(i,t){i.uniform3iv(this.addr,t)}function cf(i,t){i.uniform4iv(this.addr,t)}function hf(i,t){i.uniform1uiv(this.addr,t)}function uf(i,t){i.uniform2uiv(this.addr,t)}function df(i,t){i.uniform3uiv(this.addr,t)}function ff(i,t){i.uniform4uiv(this.addr,t)}function pf(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||No,r[a])}function mf(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Bo,r[a])}function vf(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Oo,r[a])}function gf(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Fo,r[a])}function _f(i){switch(i){case 5126:return Qd;case 35664:return Jd;case 35665:return tf;case 35666:return ef;case 35674:return nf;case 35675:return rf;case 35676:return sf;case 5124:case 35670:return af;case 35667:case 35671:return of;case 35668:case 35672:return lf;case 35669:case 35673:return cf;case 5125:return hf;case 36294:return uf;case 36295:return df;case 36296:return ff;case 35678:case 36198:case 36298:case 36306:case 35682:return pf;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return vf;case 36289:case 36303:case 36311:case 36292:return gf}}class xf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jd(e.type)}}class yf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_f(e.type)}}class Mf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Kr=/(\w+)(\])?(\[|\.)?/g;function Za(i,t){i.seq.push(t),i.map[t.id]=t}function Sf(i,t,e){const n=i.name,s=n.length;for(Kr.lastIndex=0;;){const r=Kr.exec(n),a=Kr.lastIndex;let o=r[1];const c=r[2]==="]",d=r[3];if(c&&(o=o|0),d===void 0||d==="["&&a+2===s){Za(e,d===void 0?new xf(o,i,t):new yf(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new Mf(o),Za(e,l)),e=l}}}class vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Sf(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ka(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ef=37297;let wf=0;function Tf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const $a=new ue;function bf(i){Se._getMatrix($a,Se.workingColorSpace,i);const t=`mat3( ${$a.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(i)){case gr:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ja(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Tf(i.getShaderSource(t),a)}else return s}function Af(i,t){const e=bf(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rf(i,t){let e;switch(t){case ll:e="Linear";break;case cl:e="Reinhard";break;case hl:e="Cineon";break;case ul:e="ACESFilmic";break;case fl:e="AgX";break;case pl:e="Neutral";break;case dl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const cr=new rt;function Cf(){Se.getLuminanceCoefficients(cr);const i=cr.x.toFixed(4),t=cr.y.toFixed(4),e=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ui).join(`
`)}function Lf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function If(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ui(i){return i!==""}function Qa(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ja(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Df=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vs(i){return i.replace(Df,Nf)}const Uf=new Map;function Nf(i,t){let e=pe[t];if(e===void 0){const n=Uf.get(t);if(n!==void 0)e=pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vs(e)}const Ff=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function to(i){return i.replace(Ff,Bf)}function Bf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eo(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Of(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ao?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===oo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(t="SHADOWMAP_TYPE_VSM"),t}function zf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xi:case yi:t="ENVMAP_TYPE_CUBE";break;case xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Hf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ks:t="ENVMAP_BLENDING_MULTIPLY";break;case al:t="ENVMAP_BLENDING_MIX";break;case ol:t="ENVMAP_BLENDING_ADD";break}return t}function Gf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function kf(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Of(e),d=zf(e),h=Vf(e),l=Hf(e),u=Gf(e),f=Pf(e),v=Lf(r),g=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ui).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ui).join(`
`),p.length>0&&(p+=`
`)):(m=[eo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),p=[eo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?pe.tonemapping_pars_fragment:"",e.toneMapping!==Ln?Rf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,Af("linearToOutputTexel",e.outputColorSpace),Cf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ui).join(`
`)),a=Vs(a),a=Qa(a,e),a=Ja(a,e),o=Vs(o),o=Qa(o,e),o=Ja(o,e),a=to(a),o=to(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+a,_=x+p+o,A=Ka(s,s.VERTEX_SHADER,M),I=Ka(s,s.FRAGMENT_SHADER,_);s.attachShader(g,A),s.attachShader(g,I),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function U(T){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(g).trim(),N=s.getShaderInfoLog(A).trim(),X=s.getShaderInfoLog(I).trim();let q=!0,J=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,A,I);else{const O=ja(s,A,"vertex"),L=ja(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+B+`
`+O+`
`+L)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(N===""||X==="")&&(J=!1);J&&(T.diagnostics={runnable:q,programLog:B,vertexShader:{log:N,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(A),s.deleteShader(I),P=new vr(s,g),E=If(s,g)}let P;this.getUniforms=function(){return P===void 0&&U(this),P};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,Ef)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wf++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=I,this}let Wf=0;class Xf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qf(t),e.set(t,n)),n}}class qf{constructor(t){this.id=Wf++,this.code=t,this.usedTimes=0}}function Yf(i,t,e,n,s,r,a){const o=new Js,c=new Xf,d=new Set,h=[],l=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return d.add(E),E===0?"uv":`uv${E}`}function m(E,y,T,B,N){const X=B.fog,q=N.geometry,J=E.isMeshStandardMaterial?B.environment:null,O=(E.isMeshStandardMaterial?e:t).get(E.envMap||J),L=O&&O.mapping===xr?O.image.height:null,Q=v[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const $=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,F=$!==void 0?$.length:0;let j=0;q.morphAttributes.position!==void 0&&(j=1),q.morphAttributes.normal!==void 0&&(j=2),q.morphAttributes.color!==void 0&&(j=3);let z,b,R,H;if(Q){const ae=on[Q];z=ae.vertexShader,b=ae.fragmentShader}else z=E.vertexShader,b=E.fragmentShader,c.update(E),R=c.getVertexShaderID(E),H=c.getFragmentShaderID(E);const K=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),k=N.isInstancedMesh===!0,it=N.isBatchedMesh===!0,mt=!!E.map,St=!!E.matcap,Et=!!O,D=!!E.aoMap,ft=!!E.lightMap,ut=!!E.bumpMap,Xt=!!E.normalMap,xt=!!E.displacementMap,ne=!!E.emissiveMap,vt=!!E.metalnessMap,C=!!E.roughnessMap,S=E.anisotropy>0,Y=E.clearcoat>0,ct=E.dispersion>0,ht=E.iridescence>0,ot=E.sheen>0,wt=E.transmission>0,Tt=S&&!!E.anisotropyMap,Ft=Y&&!!E.clearcoatMap,le=Y&&!!E.clearcoatNormalMap,Mt=Y&&!!E.clearcoatRoughnessMap,kt=ht&&!!E.iridescenceMap,Zt=ht&&!!E.iridescenceThicknessMap,$t=ot&&!!E.sheenColorMap,Wt=ot&&!!E.sheenRoughnessMap,ce=!!E.specularMap,ie=!!E.specularColorMap,me=!!E.specularIntensityMap,W=wt&&!!E.transmissionMap,Lt=wt&&!!E.thicknessMap,lt=!!E.gradientMap,pt=!!E.alphaMap,Vt=E.alphaTest>0,Ot=!!E.alphaHash,re=!!E.extensions;let Te=Ln;E.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Te=i.toneMapping);const Ae={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:z,fragmentShader:b,defines:E.defines,customVertexShaderID:R,customFragmentShaderID:H,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:it,batchingColor:it&&N._colorsTexture!==null,instancing:k,instancingColor:k&&N.instanceColor!==null,instancingMorph:k&&N.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ei,alphaToCoverage:!!E.alphaToCoverage,map:mt,matcap:St,envMap:Et,envMapMode:Et&&O.mapping,envMapCubeUVHeight:L,aoMap:D,lightMap:ft,bumpMap:ut,normalMap:Xt,displacementMap:u&&xt,emissiveMap:ne,normalMapObjectSpace:Xt&&E.normalMapType===_l,normalMapTangentSpace:Xt&&E.normalMapType===$s,metalnessMap:vt,roughnessMap:C,anisotropy:S,anisotropyMap:Tt,clearcoat:Y,clearcoatMap:Ft,clearcoatNormalMap:le,clearcoatRoughnessMap:Mt,dispersion:ct,iridescence:ht,iridescenceMap:kt,iridescenceThicknessMap:Zt,sheen:ot,sheenColorMap:$t,sheenRoughnessMap:Wt,specularMap:ce,specularColorMap:ie,specularIntensityMap:me,transmission:wt,transmissionMap:W,thicknessMap:Lt,gradientMap:lt,opaque:E.transparent===!1&&E.blending===mi&&E.alphaToCoverage===!1,alphaMap:pt,alphaTest:Vt,alphaHash:Ot,combine:E.combine,mapUv:mt&&g(E.map.channel),aoMapUv:D&&g(E.aoMap.channel),lightMapUv:ft&&g(E.lightMap.channel),bumpMapUv:ut&&g(E.bumpMap.channel),normalMapUv:Xt&&g(E.normalMap.channel),displacementMapUv:xt&&g(E.displacementMap.channel),emissiveMapUv:ne&&g(E.emissiveMap.channel),metalnessMapUv:vt&&g(E.metalnessMap.channel),roughnessMapUv:C&&g(E.roughnessMap.channel),anisotropyMapUv:Tt&&g(E.anisotropyMap.channel),clearcoatMapUv:Ft&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&g(E.sheenRoughnessMap.channel),specularMapUv:ce&&g(E.specularMap.channel),specularColorMapUv:ie&&g(E.specularColorMap.channel),specularIntensityMapUv:me&&g(E.specularIntensityMap.channel),transmissionMapUv:W&&g(E.transmissionMap.channel),thicknessMapUv:Lt&&g(E.thicknessMap.channel),alphaMapUv:pt&&g(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Xt||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(mt||pt),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:et,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:j,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:mt&&E.map.isVideoTexture===!0&&Se.getTransfer(E.map.colorSpace)===be,decodeVideoTextureEmissive:ne&&E.emissiveMap.isVideoTexture===!0&&Se.getTransfer(E.emissiveMap.colorSpace)===be,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===nn,flipSided:E.side===We,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:re&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&E.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ae.vertexUv1s=d.has(1),Ae.vertexUv2s=d.has(2),Ae.vertexUv3s=d.has(3),d.clear(),Ae}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const T in E.defines)y.push(T),y.push(E.defines[T]);return E.isRawShaderMaterial===!1&&(x(y,E),M(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function x(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function M(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const y=v[E.type];let T;if(y){const B=on[y];T=hc.clone(B.uniforms)}else T=E.uniforms;return T}function A(E,y){let T;for(let B=0,N=h.length;B<N;B++){const X=h[B];if(X.cacheKey===y){T=X,++T.usedTimes;break}}return T===void 0&&(T=new kf(i,y,E,r),h.push(T)),T}function I(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function U(E){c.remove(E)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:I,releaseShaderCache:U,programs:h,dispose:P}}function Zf(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Kf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function no(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function io(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(l,u,f,v,g,m){let p=i[t];return p===void 0?(p={id:l.id,object:l,geometry:u,material:f,groupOrder:v,renderOrder:l.renderOrder,z:g,group:m},i[t]=p):(p.id=l.id,p.object=l,p.geometry=u,p.material=f,p.groupOrder=v,p.renderOrder=l.renderOrder,p.z=g,p.group=m),t++,p}function o(l,u,f,v,g,m){const p=a(l,u,f,v,g,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(l,u,f,v,g,m){const p=a(l,u,f,v,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function d(l,u){e.length>1&&e.sort(l||Kf),n.length>1&&n.sort(u||no),s.length>1&&s.sort(u||no)}function h(){for(let l=t,u=i.length;l<u;l++){const f=i[l];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:d}}function $f(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new io,i.set(n,[a])):s>=r.length?(a=new io,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function jf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new rt,color:new _e};break;case"SpotLight":e={position:new rt,direction:new rt,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new rt,color:new _e,distance:0,decay:0};break;case"HemisphereLight":e={direction:new rt,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":e={color:new _e,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return i[t.id]=e,e}}}function Qf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Jf=0;function tp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ep(i){const t=new jf,e=Qf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new rt);const s=new rt,r=new Re,a=new Re;function o(d){let h=0,l=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,v=0,g=0,m=0,p=0,x=0,M=0,_=0,A=0,I=0,U=0;d.sort(tp);for(let E=0,y=d.length;E<y;E++){const T=d[E],B=T.color,N=T.intensity,X=T.distance,q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=B.r*N,l+=B.g*N,u+=B.b*N;else if(T.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(T.sh.coefficients[J],N);U++}else if(T.isDirectionalLight){const J=t.get(T);if(J.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const O=T.shadow,L=e.get(T);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,n.directionalShadow[f]=L,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=T.shadow.matrix,x++}n.directional[f]=J,f++}else if(T.isSpotLight){const J=t.get(T);J.position.setFromMatrixPosition(T.matrixWorld),J.color.copy(B).multiplyScalar(N),J.distance=X,J.coneCos=Math.cos(T.angle),J.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),J.decay=T.decay,n.spot[g]=J;const O=T.shadow;if(T.map&&(n.spotLightMap[A]=T.map,A++,O.updateMatrices(T),T.castShadow&&I++),n.spotLightMatrix[g]=O.matrix,T.castShadow){const L=e.get(T);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,n.spotShadow[g]=L,n.spotShadowMap[g]=q,_++}g++}else if(T.isRectAreaLight){const J=t.get(T);J.color.copy(B).multiplyScalar(N),J.halfWidth.set(T.width*.5,0,0),J.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=J,m++}else if(T.isPointLight){const J=t.get(T);if(J.color.copy(T.color).multiplyScalar(T.intensity),J.distance=T.distance,J.decay=T.decay,T.castShadow){const O=T.shadow,L=e.get(T);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,L.shadowCameraNear=O.camera.near,L.shadowCameraFar=O.camera.far,n.pointShadow[v]=L,n.pointShadowMap[v]=q,n.pointShadowMatrix[v]=T.shadow.matrix,M++}n.point[v]=J,v++}else if(T.isHemisphereLight){const J=t.get(T);J.skyColor.copy(T.color).multiplyScalar(N),J.groundColor.copy(T.groundColor).multiplyScalar(N),n.hemi[p]=J,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Gt.LTC_FLOAT_1,n.rectAreaLTC2=Gt.LTC_FLOAT_2):(n.rectAreaLTC1=Gt.LTC_HALF_1,n.rectAreaLTC2=Gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=l,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==f||P.pointLength!==v||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==M||P.numSpotShadows!==_||P.numSpotMaps!==A||P.numLightProbes!==U)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+A-I,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=U,P.directionalLength=f,P.pointLength=v,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=M,P.numSpotShadows=_,P.numSpotMaps=A,P.numLightProbes=U,n.version=Jf++)}function c(d,h){let l=0,u=0,f=0,v=0,g=0;const m=h.matrixWorldInverse;for(let p=0,x=d.length;p<x;p++){const M=d[p];if(M.isDirectionalLight){const _=n.directional[l];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),l++}else if(M.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function ro(i){const t=new ep(i),e=[],n=[];function s(h){d.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function np(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ro(i),t.set(s,[o])):r>=a.length?(o=new ro(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const ip=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sp(i,t,e){let n=new ea;const s=new xe,r=new xe,a=new Ce,o=new Sc({depthPacking:gl}),c=new Ec,d={},h=e.maxTextureSize,l={[In]:We,[We]:In,[nn]:nn},u=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:ip,fragmentShader:rp}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const v=new jn;v.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ke(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let p=this.type;this.render=function(I,U,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Pn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const N=p!==mn&&this.type===mn,X=p===mn&&this.type!==mn;for(let q=0,J=I.length;q<J;q++){const O=I[q],L=O.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const Q=L.getFrameExtents();if(s.multiply(Q),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,L.mapSize.y=r.y)),L.map===null||N===!0||X===!0){const F=this.type!==mn?{minFilter:an,magFilter:an}:{};L.map!==null&&L.map.dispose(),L.map=new Zn(s.x,s.y,F),L.map.texture.name=O.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const $=L.getViewportCount();for(let F=0;F<$;F++){const j=L.getViewport(F);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),B.viewport(a),L.updateMatrices(O,F),n=L.getFrustum(),_(U,P,L.camera,O,this.type)}L.isPointLightShadow!==!0&&this.type===mn&&x(L,P),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,T)};function x(I,U){const P=t.update(g);u.defines.VSM_SAMPLES!==I.blurSamples&&(u.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Zn(s.x,s.y)),u.uniforms.shadow_pass.value=I.map.texture,u.uniforms.resolution.value=I.mapSize,u.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(U,null,P,u,g,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(U,null,P,f,g,null)}function M(I,U,P,E){let y=null;const T=P.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(T!==void 0)y=T;else if(y=P.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const B=y.uuid,N=U.uuid;let X=d[B];X===void 0&&(X={},d[B]=X);let q=X[N];q===void 0&&(q=y.clone(),X[N]=q,U.addEventListener("dispose",A)),y=q}if(y.visible=U.visible,y.wireframe=U.wireframe,E===mn?y.side=U.shadowSide!==null?U.shadowSide:U.side:y.side=U.shadowSide!==null?U.shadowSide:l[U.side],y.alphaMap=U.alphaMap,y.alphaTest=U.alphaTest,y.map=U.map,y.clipShadows=U.clipShadows,y.clippingPlanes=U.clippingPlanes,y.clipIntersection=U.clipIntersection,y.displacementMap=U.displacementMap,y.displacementScale=U.displacementScale,y.displacementBias=U.displacementBias,y.wireframeLinewidth=U.wireframeLinewidth,y.linewidth=U.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=i.properties.get(y);B.light=P}return y}function _(I,U,P,E,y){if(I.visible===!1)return;if(I.layers.test(U.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&y===mn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,I.matrixWorld);const N=t.update(I),X=I.material;if(Array.isArray(X)){const q=N.groups;for(let J=0,O=q.length;J<O;J++){const L=q[J],Q=X[L.materialIndex];if(Q&&Q.visible){const $=M(I,Q,E,y);I.onBeforeShadow(i,I,U,P,N,$,L),i.renderBufferDirect(P,null,N,$,I,L),I.onAfterShadow(i,I,U,P,N,$,L)}}}else if(X.visible){const q=M(I,X,E,y);I.onBeforeShadow(i,I,U,P,N,q,null),i.renderBufferDirect(P,null,N,q,I,null),I.onAfterShadow(i,I,U,P,N,q,null)}}const B=I.children;for(let N=0,X=B.length;N<X;N++)_(B[N],U,P,E,y)}function A(I){I.target.removeEventListener("dispose",A);for(const P in d){const E=d[P],y=I.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const ap={[ns]:is,[rs]:os,[ss]:ls,[_i]:as,[is]:ns,[os]:rs,[ls]:ss,[as]:_i};function op(i,t){function e(){let W=!1;const Lt=new Ce;let lt=null;const pt=new Ce(0,0,0,0);return{setMask:function(Vt){lt!==Vt&&!W&&(i.colorMask(Vt,Vt,Vt,Vt),lt=Vt)},setLocked:function(Vt){W=Vt},setClear:function(Vt,Ot,re,Te,Ae){Ae===!0&&(Vt*=Te,Ot*=Te,re*=Te),Lt.set(Vt,Ot,re,Te),pt.equals(Lt)===!1&&(i.clearColor(Vt,Ot,re,Te),pt.copy(Lt))},reset:function(){W=!1,lt=null,pt.set(-1,0,0,0)}}}function n(){let W=!1,Lt=!1,lt=null,pt=null,Vt=null;return{setReversed:function(Ot){if(Lt!==Ot){const re=t.get("EXT_clip_control");Lt?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);const Te=Vt;Vt=null,this.setClear(Te)}Lt=Ot},getReversed:function(){return Lt},setTest:function(Ot){Ot?K(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(Ot){lt!==Ot&&!W&&(i.depthMask(Ot),lt=Ot)},setFunc:function(Ot){if(Lt&&(Ot=ap[Ot]),pt!==Ot){switch(Ot){case ns:i.depthFunc(i.NEVER);break;case is:i.depthFunc(i.ALWAYS);break;case rs:i.depthFunc(i.LESS);break;case _i:i.depthFunc(i.LEQUAL);break;case ss:i.depthFunc(i.EQUAL);break;case as:i.depthFunc(i.GEQUAL);break;case os:i.depthFunc(i.GREATER);break;case ls:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=Ot}},setLocked:function(Ot){W=Ot},setClear:function(Ot){Vt!==Ot&&(Lt&&(Ot=1-Ot),i.clearDepth(Ot),Vt=Ot)},reset:function(){W=!1,lt=null,pt=null,Vt=null,Lt=!1}}}function s(){let W=!1,Lt=null,lt=null,pt=null,Vt=null,Ot=null,re=null,Te=null,Ae=null;return{setTest:function(ae){W||(ae?K(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(ae){Lt!==ae&&!W&&(i.stencilMask(ae),Lt=ae)},setFunc:function(ae,at,dt){(lt!==ae||pt!==at||Vt!==dt)&&(i.stencilFunc(ae,at,dt),lt=ae,pt=at,Vt=dt)},setOp:function(ae,at,dt){(Ot!==ae||re!==at||Te!==dt)&&(i.stencilOp(ae,at,dt),Ot=ae,re=at,Te=dt)},setLocked:function(ae){W=ae},setClear:function(ae){Ae!==ae&&(i.clearStencil(ae),Ae=ae)},reset:function(){W=!1,Lt=null,lt=null,pt=null,Vt=null,Ot=null,re=null,Te=null,Ae=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,d=new WeakMap;let h={},l={},u=new WeakMap,f=[],v=null,g=!1,m=null,p=null,x=null,M=null,_=null,A=null,I=null,U=new _e(0,0,0),P=0,E=!1,y=null,T=null,B=null,N=null,X=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,O=0;const L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(L)[1]),J=O>=1):L.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),J=O>=2);let Q=null,$={};const F=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),z=new Ce().fromArray(F),b=new Ce().fromArray(j);function R(W,Lt,lt,pt){const Vt=new Uint8Array(4),Ot=i.createTexture();i.bindTexture(W,Ot),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let re=0;re<lt;re++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Lt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,Vt):i.texImage2D(Lt+re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Vt);return Ot}const H={};H[i.TEXTURE_2D]=R(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=R(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=R(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=R(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(_i),ut(!1),Xt(sa),K(i.CULL_FACE),D(Pn);function K(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function et(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function k(W,Lt){return l[W]!==Lt?(i.bindFramebuffer(W,Lt),l[W]=Lt,W===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=Lt),W===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=Lt),!0):!1}function it(W,Lt){let lt=f,pt=!1;if(W){lt=u.get(Lt),lt===void 0&&(lt=[],u.set(Lt,lt));const Vt=W.textures;if(lt.length!==Vt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let Ot=0,re=Vt.length;Ot<re;Ot++)lt[Ot]=i.COLOR_ATTACHMENT0+Ot;lt.length=Vt.length,pt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,pt=!0);pt&&i.drawBuffers(lt)}function mt(W){return v!==W?(i.useProgram(W),v=W,!0):!1}const St={[Gn]:i.FUNC_ADD,[ko]:i.FUNC_SUBTRACT,[Wo]:i.FUNC_REVERSE_SUBTRACT};St[Xo]=i.MIN,St[qo]=i.MAX;const Et={[Yo]:i.ZERO,[Zo]:i.ONE,[Ko]:i.SRC_COLOR,[ts]:i.SRC_ALPHA,[el]:i.SRC_ALPHA_SATURATE,[Jo]:i.DST_COLOR,[jo]:i.DST_ALPHA,[$o]:i.ONE_MINUS_SRC_COLOR,[es]:i.ONE_MINUS_SRC_ALPHA,[tl]:i.ONE_MINUS_DST_COLOR,[Qo]:i.ONE_MINUS_DST_ALPHA,[nl]:i.CONSTANT_COLOR,[il]:i.ONE_MINUS_CONSTANT_COLOR,[rl]:i.CONSTANT_ALPHA,[sl]:i.ONE_MINUS_CONSTANT_ALPHA};function D(W,Lt,lt,pt,Vt,Ot,re,Te,Ae,ae){if(W===Pn){g===!0&&(et(i.BLEND),g=!1);return}if(g===!1&&(K(i.BLEND),g=!0),W!==Go){if(W!==m||ae!==E){if((p!==Gn||_!==Gn)&&(i.blendEquation(i.FUNC_ADD),p=Gn,_=Gn),ae)switch(W){case mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jr:i.blendFunc(i.ONE,i.ONE);break;case aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}x=null,M=null,A=null,I=null,U.set(0,0,0),P=0,m=W,E=ae}return}Vt=Vt||Lt,Ot=Ot||lt,re=re||pt,(Lt!==p||Vt!==_)&&(i.blendEquationSeparate(St[Lt],St[Vt]),p=Lt,_=Vt),(lt!==x||pt!==M||Ot!==A||re!==I)&&(i.blendFuncSeparate(Et[lt],Et[pt],Et[Ot],Et[re]),x=lt,M=pt,A=Ot,I=re),(Te.equals(U)===!1||Ae!==P)&&(i.blendColor(Te.r,Te.g,Te.b,Ae),U.copy(Te),P=Ae),m=W,E=!1}function ft(W,Lt){W.side===nn?et(i.CULL_FACE):K(i.CULL_FACE);let lt=W.side===We;Lt&&(lt=!lt),ut(lt),W.blending===mi&&W.transparent===!1?D(Pn):D(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);const pt=W.stencilWrite;o.setTest(pt),pt&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ne(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(W){y!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),y=W)}function Xt(W){W!==Vo?(K(i.CULL_FACE),W!==T&&(W===sa?i.cullFace(i.BACK):W===Ho?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),T=W}function xt(W){W!==B&&(J&&i.lineWidth(W),B=W)}function ne(W,Lt,lt){W?(K(i.POLYGON_OFFSET_FILL),(N!==Lt||X!==lt)&&(i.polygonOffset(Lt,lt),N=Lt,X=lt)):et(i.POLYGON_OFFSET_FILL)}function vt(W){W?K(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function C(W){W===void 0&&(W=i.TEXTURE0+q-1),Q!==W&&(i.activeTexture(W),Q=W)}function S(W,Lt,lt){lt===void 0&&(Q===null?lt=i.TEXTURE0+q-1:lt=Q);let pt=$[lt];pt===void 0&&(pt={type:void 0,texture:void 0},$[lt]=pt),(pt.type!==W||pt.texture!==Lt)&&(Q!==lt&&(i.activeTexture(lt),Q=lt),i.bindTexture(W,Lt||H[W]),pt.type=W,pt.texture=Lt)}function Y(){const W=$[Q];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ot(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Tt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function le(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function kt(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $t(W){z.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),z.copy(W))}function Wt(W){b.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),b.copy(W))}function ce(W,Lt){let lt=d.get(Lt);lt===void 0&&(lt=new WeakMap,d.set(Lt,lt));let pt=lt.get(W);pt===void 0&&(pt=i.getUniformBlockIndex(Lt,W.name),lt.set(W,pt))}function ie(W,Lt){const pt=d.get(Lt).get(W);c.get(Lt)!==pt&&(i.uniformBlockBinding(Lt,pt,W.__bindingPointIndex),c.set(Lt,pt))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,$={},l={},u=new WeakMap,f=[],v=null,g=!1,m=null,p=null,x=null,M=null,_=null,A=null,I=null,U=new _e(0,0,0),P=0,E=!1,y=null,T=null,B=null,N=null,X=null,z.set(0,0,i.canvas.width,i.canvas.height),b.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:et,bindFramebuffer:k,drawBuffers:it,useProgram:mt,setBlending:D,setMaterial:ft,setFlipSided:ut,setCullFace:Xt,setLineWidth:xt,setPolygonOffset:ne,setScissorTest:vt,activeTexture:C,bindTexture:S,unbindTexture:Y,compressedTexImage2D:ct,compressedTexImage3D:ht,texImage2D:kt,texImage3D:Zt,updateUBOMapping:ce,uniformBlockBinding:ie,texStorage2D:le,texStorage3D:Mt,texSubImage2D:ot,texSubImage3D:wt,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Ft,scissor:$t,viewport:Wt,reset:me}}function lp(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new xe,h=new WeakMap;let l;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,S){return f?new OffscreenCanvas(C,S):Oi("canvas")}function g(C,S,Y){let ct=1;const ht=vt(C);if((ht.width>Y||ht.height>Y)&&(ct=Y/Math.max(ht.width,ht.height)),ct<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ot=Math.floor(ct*ht.width),wt=Math.floor(ct*ht.height);l===void 0&&(l=v(ot,wt));const Tt=S?v(ot,wt):l;return Tt.width=ot,Tt.height=wt,Tt.getContext("2d").drawImage(C,0,0,ot,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+ot+"x"+wt+")."),Tt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,S,Y,ct,ht=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ot=S;if(S===i.RED&&(Y===i.FLOAT&&(ot=i.R32F),Y===i.HALF_FLOAT&&(ot=i.R16F),Y===i.UNSIGNED_BYTE&&(ot=i.R8)),S===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ot=i.R8UI),Y===i.UNSIGNED_SHORT&&(ot=i.R16UI),Y===i.UNSIGNED_INT&&(ot=i.R32UI),Y===i.BYTE&&(ot=i.R8I),Y===i.SHORT&&(ot=i.R16I),Y===i.INT&&(ot=i.R32I)),S===i.RG&&(Y===i.FLOAT&&(ot=i.RG32F),Y===i.HALF_FLOAT&&(ot=i.RG16F),Y===i.UNSIGNED_BYTE&&(ot=i.RG8)),S===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ot=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ot=i.RG16UI),Y===i.UNSIGNED_INT&&(ot=i.RG32UI),Y===i.BYTE&&(ot=i.RG8I),Y===i.SHORT&&(ot=i.RG16I),Y===i.INT&&(ot=i.RG32I)),S===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),Y===i.UNSIGNED_INT&&(ot=i.RGB32UI),Y===i.BYTE&&(ot=i.RGB8I),Y===i.SHORT&&(ot=i.RGB16I),Y===i.INT&&(ot=i.RGB32I)),S===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ot=i.RGBA32UI),Y===i.BYTE&&(ot=i.RGBA8I),Y===i.SHORT&&(ot=i.RGBA16I),Y===i.INT&&(ot=i.RGBA32I)),S===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),S===i.RGBA){const wt=ht?gr:Se.getTransfer(ct);Y===i.FLOAT&&(ot=i.RGBA32F),Y===i.HALF_FLOAT&&(ot=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ot=wt===be?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function _(C,S){let Y;return C?S===null||S===Yn||S===Mi?Y=i.DEPTH24_STENCIL8:S===xn?Y=i.DEPTH32F_STENCIL8:S===Bi&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Yn||S===Mi?Y=i.DEPTH_COMPONENT24:S===xn?Y=i.DEPTH_COMPONENT32F:S===Bi&&(Y=i.DEPTH_COMPONENT16),Y}function A(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==an&&C.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function I(C){const S=C.target;S.removeEventListener("dispose",I),P(S),S.isVideoTexture&&h.delete(S)}function U(C){const S=C.target;S.removeEventListener("dispose",U),y(S)}function P(C){const S=n.get(C);if(S.__webglInit===void 0)return;const Y=C.source,ct=u.get(Y);if(ct){const ht=ct[S.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&E(C),Object.keys(ct).length===0&&u.delete(Y)}n.remove(C)}function E(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const Y=C.source,ct=u.get(Y);delete ct[S.__cacheKey],a.memory.textures--}function y(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(S.__webglFramebuffer[ct]))for(let ht=0;ht<S.__webglFramebuffer[ct].length;ht++)i.deleteFramebuffer(S.__webglFramebuffer[ct][ht]);else i.deleteFramebuffer(S.__webglFramebuffer[ct]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ct])}else{if(Array.isArray(S.__webglFramebuffer))for(let ct=0;ct<S.__webglFramebuffer.length;ct++)i.deleteFramebuffer(S.__webglFramebuffer[ct]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ct=0;ct<S.__webglColorRenderbuffer.length;ct++)S.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ct]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Y=C.textures;for(let ct=0,ht=Y.length;ct<ht;ct++){const ot=n.get(Y[ct]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),a.memory.textures--),n.remove(Y[ct])}n.remove(C)}let T=0;function B(){T=0}function N(){const C=T;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),T+=1,C}function X(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function q(C,S){const Y=n.get(C);if(C.isVideoTexture&&xt(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const ct=C.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{b(Y,C,S);return}}e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+S)}function J(C,S){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){b(Y,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+S)}function O(C,S){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){b(Y,C,S);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+S)}function L(C,S){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){R(Y,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+S)}const Q={[us]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[ds]:i.MIRRORED_REPEAT},$={[an]:i.NEAREST,[ml]:i.NEAREST_MIPMAP_NEAREST,[Gi]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[Sr]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},F={[xl]:i.NEVER,[Tl]:i.ALWAYS,[yl]:i.LESS,[yo]:i.LEQUAL,[Ml]:i.EQUAL,[wl]:i.GEQUAL,[Sl]:i.GREATER,[El]:i.NOTEQUAL};function j(C,S){if(S.type===xn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ln||S.magFilter===Sr||S.magFilter===Gi||S.magFilter===Xn||S.minFilter===ln||S.minFilter===Sr||S.minFilter===Gi||S.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Q[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Q[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Q[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,$[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,$[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,F[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===an||S.minFilter!==Gi&&S.minFilter!==Xn||S.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function z(C,S){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",I));const ct=S.source;let ht=u.get(ct);ht===void 0&&(ht={},u.set(ct,ht));const ot=X(S);if(ot!==C.__cacheKey){ht[ot]===void 0&&(ht[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ht[ot].usedTimes++;const wt=ht[C.__cacheKey];wt!==void 0&&(ht[C.__cacheKey].usedTimes--,wt.usedTimes===0&&E(S)),C.__cacheKey=ot,C.__webglTexture=ht[ot].texture}return Y}function b(C,S,Y){let ct=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ct=i.TEXTURE_3D);const ht=z(C,S),ot=S.source;e.bindTexture(ct,C.__webglTexture,i.TEXTURE0+Y);const wt=n.get(ot);if(ot.version!==wt.__version||ht===!0){e.activeTexture(i.TEXTURE0+Y);const Tt=Se.getPrimaries(Se.workingColorSpace),Ft=S.colorSpace===Cn?null:Se.getPrimaries(S.colorSpace),le=S.colorSpace===Cn||Tt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Mt=g(S.image,!1,s.maxTextureSize);Mt=ne(S,Mt);const kt=r.convert(S.format,S.colorSpace),Zt=r.convert(S.type);let $t=M(S.internalFormat,kt,Zt,S.colorSpace,S.isVideoTexture);j(ct,S);let Wt;const ce=S.mipmaps,ie=S.isVideoTexture!==!0,me=wt.__version===void 0||ht===!0,W=ot.dataReady,Lt=A(S,Mt);if(S.isDepthTexture)$t=_(S.format===Si,S.type),me&&(ie?e.texStorage2D(i.TEXTURE_2D,1,$t,Mt.width,Mt.height):e.texImage2D(i.TEXTURE_2D,0,$t,Mt.width,Mt.height,0,kt,Zt,null));else if(S.isDataTexture)if(ce.length>0){ie&&me&&e.texStorage2D(i.TEXTURE_2D,Lt,$t,ce[0].width,ce[0].height);for(let lt=0,pt=ce.length;lt<pt;lt++)Wt=ce[lt],ie?W&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Wt.width,Wt.height,kt,Zt,Wt.data):e.texImage2D(i.TEXTURE_2D,lt,$t,Wt.width,Wt.height,0,kt,Zt,Wt.data);S.generateMipmaps=!1}else ie?(me&&e.texStorage2D(i.TEXTURE_2D,Lt,$t,Mt.width,Mt.height),W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt.width,Mt.height,kt,Zt,Mt.data)):e.texImage2D(i.TEXTURE_2D,0,$t,Mt.width,Mt.height,0,kt,Zt,Mt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ie&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,$t,ce[0].width,ce[0].height,Mt.depth);for(let lt=0,pt=ce.length;lt<pt;lt++)if(Wt=ce[lt],S.format!==sn)if(kt!==null)if(ie){if(W)if(S.layerUpdates.size>0){const Vt=Ua(Wt.width,Wt.height,S.format,S.type);for(const Ot of S.layerUpdates){const re=Wt.data.subarray(Ot*Vt/Wt.data.BYTES_PER_ELEMENT,(Ot+1)*Vt/Wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Ot,Wt.width,Wt.height,1,kt,re)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Wt.width,Wt.height,Mt.depth,kt,Wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,$t,Wt.width,Wt.height,Mt.depth,0,Wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Wt.width,Wt.height,Mt.depth,kt,Zt,Wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,$t,Wt.width,Wt.height,Mt.depth,0,kt,Zt,Wt.data)}else{ie&&me&&e.texStorage2D(i.TEXTURE_2D,Lt,$t,ce[0].width,ce[0].height);for(let lt=0,pt=ce.length;lt<pt;lt++)Wt=ce[lt],S.format!==sn?kt!==null?ie?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,Wt.width,Wt.height,kt,Wt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,$t,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?W&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Wt.width,Wt.height,kt,Zt,Wt.data):e.texImage2D(i.TEXTURE_2D,lt,$t,Wt.width,Wt.height,0,kt,Zt,Wt.data)}else if(S.isDataArrayTexture)if(ie){if(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,$t,Mt.width,Mt.height,Mt.depth),W)if(S.layerUpdates.size>0){const lt=Ua(Mt.width,Mt.height,S.format,S.type);for(const pt of S.layerUpdates){const Vt=Mt.data.subarray(pt*lt/Mt.data.BYTES_PER_ELEMENT,(pt+1)*lt/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,Mt.width,Mt.height,1,kt,Zt,Vt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,kt,Zt,Mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$t,Mt.width,Mt.height,Mt.depth,0,kt,Zt,Mt.data);else if(S.isData3DTexture)ie?(me&&e.texStorage3D(i.TEXTURE_3D,Lt,$t,Mt.width,Mt.height,Mt.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,kt,Zt,Mt.data)):e.texImage3D(i.TEXTURE_3D,0,$t,Mt.width,Mt.height,Mt.depth,0,kt,Zt,Mt.data);else if(S.isFramebufferTexture){if(me)if(ie)e.texStorage2D(i.TEXTURE_2D,Lt,$t,Mt.width,Mt.height);else{let lt=Mt.width,pt=Mt.height;for(let Vt=0;Vt<Lt;Vt++)e.texImage2D(i.TEXTURE_2D,Vt,$t,lt,pt,0,kt,Zt,null),lt>>=1,pt>>=1}}else if(ce.length>0){if(ie&&me){const lt=vt(ce[0]);e.texStorage2D(i.TEXTURE_2D,Lt,$t,lt.width,lt.height)}for(let lt=0,pt=ce.length;lt<pt;lt++)Wt=ce[lt],ie?W&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,kt,Zt,Wt):e.texImage2D(i.TEXTURE_2D,lt,$t,kt,Zt,Wt);S.generateMipmaps=!1}else if(ie){if(me){const lt=vt(Mt);e.texStorage2D(i.TEXTURE_2D,Lt,$t,lt.width,lt.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,Zt,Mt)}else e.texImage2D(i.TEXTURE_2D,0,$t,kt,Zt,Mt);m(S)&&p(ct),wt.__version=ot.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function R(C,S,Y){if(S.image.length!==6)return;const ct=z(C,S),ht=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Y);const ot=n.get(ht);if(ht.version!==ot.__version||ct===!0){e.activeTexture(i.TEXTURE0+Y);const wt=Se.getPrimaries(Se.workingColorSpace),Tt=S.colorSpace===Cn?null:Se.getPrimaries(S.colorSpace),Ft=S.colorSpace===Cn||wt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const le=S.isCompressedTexture||S.image[0].isCompressedTexture,Mt=S.image[0]&&S.image[0].isDataTexture,kt=[];for(let pt=0;pt<6;pt++)!le&&!Mt?kt[pt]=g(S.image[pt],!0,s.maxCubemapSize):kt[pt]=Mt?S.image[pt].image:S.image[pt],kt[pt]=ne(S,kt[pt]);const Zt=kt[0],$t=r.convert(S.format,S.colorSpace),Wt=r.convert(S.type),ce=M(S.internalFormat,$t,Wt,S.colorSpace),ie=S.isVideoTexture!==!0,me=ot.__version===void 0||ct===!0,W=ht.dataReady;let Lt=A(S,Zt);j(i.TEXTURE_CUBE_MAP,S);let lt;if(le){ie&&me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,ce,Zt.width,Zt.height);for(let pt=0;pt<6;pt++){lt=kt[pt].mipmaps;for(let Vt=0;Vt<lt.length;Vt++){const Ot=lt[Vt];S.format!==sn?$t!==null?ie?W&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,0,0,Ot.width,Ot.height,$t,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,ce,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,0,0,Ot.width,Ot.height,$t,Wt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,ce,Ot.width,Ot.height,0,$t,Wt,Ot.data)}}}else{if(lt=S.mipmaps,ie&&me){lt.length>0&&Lt++;const pt=vt(kt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,ce,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Mt){ie?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,kt[pt].width,kt[pt].height,$t,Wt,kt[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ce,kt[pt].width,kt[pt].height,0,$t,Wt,kt[pt].data);for(let Vt=0;Vt<lt.length;Vt++){const re=lt[Vt].image[pt].image;ie?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,0,0,re.width,re.height,$t,Wt,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,ce,re.width,re.height,0,$t,Wt,re.data)}}else{ie?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,$t,Wt,kt[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ce,$t,Wt,kt[pt]);for(let Vt=0;Vt<lt.length;Vt++){const Ot=lt[Vt];ie?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,0,0,$t,Wt,Ot.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,ce,$t,Wt,Ot.image[pt])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),ot.__version=ht.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function H(C,S,Y,ct,ht,ot){const wt=r.convert(Y.format,Y.colorSpace),Tt=r.convert(Y.type),Ft=M(Y.internalFormat,wt,Tt,Y.colorSpace),le=n.get(S),Mt=n.get(Y);if(Mt.__renderTarget=S,!le.__hasExternalTextures){const kt=Math.max(1,S.width>>ot),Zt=Math.max(1,S.height>>ot);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,ot,Ft,kt,Zt,S.depth,0,wt,Tt,null):e.texImage2D(ht,ot,Ft,kt,Zt,0,wt,Tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Xt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,ht,Mt.__webglTexture,0,ut(S)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,ht,Mt.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function K(C,S,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const ct=S.depthTexture,ht=ct&&ct.isDepthTexture?ct.type:null,ot=_(S.stencilBuffer,ht),wt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=ut(S);Xt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,ot,S.width,S.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,ot,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ot,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,C)}else{const ct=S.textures;for(let ht=0;ht<ct.length;ht++){const ot=ct[ht],wt=r.convert(ot.format,ot.colorSpace),Tt=r.convert(ot.type),Ft=M(ot.internalFormat,wt,Tt,ot.colorSpace),le=ut(S);Y&&Xt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,Ft,S.width,S.height):Xt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,Ft,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ft,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=n.get(S.depthTexture);ct.__renderTarget=S,(!ct.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const ht=ct.__webglTexture,ot=ut(S);if(S.depthTexture.format===vi)Xt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(S.depthTexture.format===Si)Xt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function k(C){const S=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const ct=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ct){const ht=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ct.removeEventListener("dispose",ht)};ct.addEventListener("dispose",ht),S.__depthDisposeCallback=ht}S.__boundDepthTexture=ct}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");et(S.__webglFramebuffer,C)}else if(Y){S.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ct]),S.__webglDepthbuffer[ct]===void 0)S.__webglDepthbuffer[ct]=i.createRenderbuffer(),K(S.__webglDepthbuffer[ct],C,!1);else{const ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),K(S.__webglDepthbuffer,C,!1);else{const ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(C,S,Y){const ct=n.get(C);S!==void 0&&H(ct.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&k(C)}function mt(C){const S=C.texture,Y=n.get(C),ct=n.get(S);C.addEventListener("dispose",U);const ht=C.textures,ot=C.isWebGLCubeRenderTarget===!0,wt=ht.length>1;if(wt||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=S.version,a.memory.textures++),ot){Y.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[Tt]=[];for(let Ft=0;Ft<S.mipmaps.length;Ft++)Y.__webglFramebuffer[Tt][Ft]=i.createFramebuffer()}else Y.__webglFramebuffer[Tt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)Y.__webglFramebuffer[Tt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(wt)for(let Tt=0,Ft=ht.length;Tt<Ft;Tt++){const le=n.get(ht[Tt]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Xt(C)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Tt=0;Tt<ht.length;Tt++){const Ft=ht[Tt];Y.__webglColorRenderbuffer[Tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Tt]);const le=r.convert(Ft.format,Ft.colorSpace),Mt=r.convert(Ft.type),kt=M(Ft.internalFormat,le,Mt,Ft.colorSpace,C.isXRRenderTarget===!0),Zt=ut(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,kt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),K(Y.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),j(i.TEXTURE_CUBE_MAP,S);for(let Tt=0;Tt<6;Tt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ft=0;Ft<S.mipmaps.length;Ft++)H(Y.__webglFramebuffer[Tt][Ft],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ft);else H(Y.__webglFramebuffer[Tt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let Tt=0,Ft=ht.length;Tt<Ft;Tt++){const le=ht[Tt],Mt=n.get(le);e.bindTexture(i.TEXTURE_2D,Mt.__webglTexture),j(i.TEXTURE_2D,le),H(Y.__webglFramebuffer,C,le,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,0),m(le)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Tt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Tt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,ct.__webglTexture),j(Tt,S),S.mipmaps&&S.mipmaps.length>0)for(let Ft=0;Ft<S.mipmaps.length;Ft++)H(Y.__webglFramebuffer[Ft],C,S,i.COLOR_ATTACHMENT0,Tt,Ft);else H(Y.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,Tt,0);m(S)&&p(Tt),e.unbindTexture()}C.depthBuffer&&k(C)}function St(C){const S=C.textures;for(let Y=0,ct=S.length;Y<ct;Y++){const ht=S[Y];if(m(ht)){const ot=x(C),wt=n.get(ht).__webglTexture;e.bindTexture(ot,wt),p(ot),e.unbindTexture()}}}const Et=[],D=[];function ft(C){if(C.samples>0){if(Xt(C)===!1){const S=C.textures,Y=C.width,ct=C.height;let ht=i.COLOR_BUFFER_BIT;const ot=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(C),Tt=S.length>1;if(Tt)for(let Ft=0;Ft<S.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Ft=0;Ft<S.length;Ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),Tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Ft]);const le=n.get(S[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,Y,ct,0,0,Y,ct,ht,i.NEAREST),c===!0&&(Et.length=0,D.length=0,Et.push(i.COLOR_ATTACHMENT0+Ft),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Et.push(ot),D.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Tt)for(let Ft=0;Ft<S.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Ft]);const le=n.get(S[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,le,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ut(C){return Math.min(s.maxSamples,C.samples)}function Xt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function xt(C){const S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function ne(C,S){const Y=C.colorSpace,ct=C.format,ht=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==Ei&&Y!==Cn&&(Se.getTransfer(Y)===be?(ct!==sn||ht!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}function vt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(d.width=C.naturalWidth||C.width,d.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(d.width=C.displayWidth,d.height=C.displayHeight):(d.width=C.width,d.height=C.height),d}this.allocateTextureUnit=N,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=J,this.setTexture3D=O,this.setTextureCube=L,this.rebindTextures=it,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Xt}function cp(i,t){function e(n,s=Cn){let r;const a=Se.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===Xs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===co)return i.BYTE;if(n===ho)return i.SHORT;if(n===Bi)return i.UNSIGNED_SHORT;if(n===Ws)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===zi)return i.HALF_FLOAT;if(n===fo)return i.ALPHA;if(n===po)return i.RGB;if(n===sn)return i.RGBA;if(n===mo)return i.LUMINANCE;if(n===vo)return i.LUMINANCE_ALPHA;if(n===vi)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===go)return i.RED;if(n===Ys)return i.RED_INTEGER;if(n===_o)return i.RG;if(n===Zs)return i.RG_INTEGER;if(n===Ks)return i.RGBA_INTEGER;if(n===ur||n===dr||n===fr||n===pr)if(a===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fs||n===ps||n===ms||n===vs)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fs)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ps)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ms)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vs)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gs||n===_s||n===xs)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gs||n===_s)return a===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xs)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ys||n===Ms||n===Ss||n===Es||n===ws||n===Ts||n===bs||n===As||n===Rs||n===Cs||n===Ps||n===Ls||n===Is||n===Ds)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ys)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ms)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ss)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Es)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ws)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ts)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bs)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===As)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rs)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cs)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ps)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ls)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Is)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ds)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mr||n===Us||n===Ns)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mr)return a===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Us)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ns)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xo||n===Fs||n===Bs||n===Os)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fs)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Os)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const hp={type:"move"};class $r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(d,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=d.joints["index-finger-tip"],l=d.joints["thumb-tip"],u=h.position.distanceTo(l.position),f=.02,v=.005;d.inputState.pinching&&u>f+v?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&u<=f-v&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ar;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const up=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Dn({vertexShader:up,fragmentShader:dp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ke(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pp extends bi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,d=null,h=null,l=null,u=null,f=null,v=null;const g=new fp,m=e.getContextAttributes();let p=null,x=null;const M=[],_=[],A=new xe;let I=null;const U=new Ze;U.viewport=new Ce;const P=new Ze;P.viewport=new Ce;const E=[U,P],y=new Dc;let T=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let R=M[b];return R===void 0&&(R=new $r,M[b]=R),R.getTargetRaySpace()},this.getControllerGrip=function(b){let R=M[b];return R===void 0&&(R=new $r,M[b]=R),R.getGripSpace()},this.getHand=function(b){let R=M[b];return R===void 0&&(R=new $r,M[b]=R),R.getHandSpace()};function N(b){const R=_.indexOf(b.inputSource);if(R===-1)return;const H=M[R];H!==void 0&&(H.update(b.inputSource,b.frame,d||a),H.dispatchEvent({type:b.type,data:b.inputSource}))}function X(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",q);for(let b=0;b<M.length;b++){const R=_[b];R!==null&&(_[b]=null,M[b].disconnect(R))}T=null,B=null,g.reset(),t.setRenderTarget(p),f=null,u=null,l=null,s=null,x=null,z.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){r=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){o=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(b){d=b},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(b){if(s=b,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",X),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const R={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,R),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Zn(f.framebufferWidth,f.framebufferHeight,{format:sn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let R=null,H=null,K=null;m.depth&&(K=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,R=m.stencil?Si:vi,H=m.stencil?Mi:Yn);const et={colorFormat:e.RGBA8,depthFormat:K,scaleFactor:r};l=new XRWebGLBinding(s,e),u=l.createProjectionLayer(et),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Zn(u.textureWidth,u.textureHeight,{format:sn,type:Sn,depthTexture:new Lo(u.textureWidth,u.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),d=null,a=await s.requestReferenceSpace(o),z.setContext(s),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(b){for(let R=0;R<b.removed.length;R++){const H=b.removed[R],K=_.indexOf(H);K>=0&&(_[K]=null,M[K].disconnect(H))}for(let R=0;R<b.added.length;R++){const H=b.added[R];let K=_.indexOf(H);if(K===-1){for(let k=0;k<M.length;k++)if(k>=_.length){_.push(H),K=k;break}else if(_[k]===null){_[k]=H,K=k;break}if(K===-1)break}const et=M[K];et&&et.connect(H)}}const J=new rt,O=new rt;function L(b,R,H){J.setFromMatrixPosition(R.matrixWorld),O.setFromMatrixPosition(H.matrixWorld);const K=J.distanceTo(O),et=R.projectionMatrix.elements,k=H.projectionMatrix.elements,it=et[14]/(et[10]-1),mt=et[14]/(et[10]+1),St=(et[9]+1)/et[5],Et=(et[9]-1)/et[5],D=(et[8]-1)/et[0],ft=(k[8]+1)/k[0],ut=it*D,Xt=it*ft,xt=K/(-D+ft),ne=xt*-D;if(R.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(ne),b.translateZ(xt),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert(),et[10]===-1)b.projectionMatrix.copy(R.projectionMatrix),b.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{const vt=it+xt,C=mt+xt,S=ut-ne,Y=Xt+(K-ne),ct=St*mt/C*vt,ht=Et*mt/C*vt;b.projectionMatrix.makePerspective(S,Y,ct,ht,vt,C),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}}function Q(b,R){R===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(R.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(s===null)return;let R=b.near,H=b.far;g.texture!==null&&(g.depthNear>0&&(R=g.depthNear),g.depthFar>0&&(H=g.depthFar)),y.near=P.near=U.near=R,y.far=P.far=U.far=H,(T!==y.near||B!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,B=y.far),U.layers.mask=b.layers.mask|2,P.layers.mask=b.layers.mask|4,y.layers.mask=U.layers.mask|P.layers.mask;const K=b.parent,et=y.cameras;Q(y,K);for(let k=0;k<et.length;k++)Q(et[k],K);et.length===2?L(y,U,P):y.projectionMatrix.copy(U.projectionMatrix),$(b,y,K)};function $(b,R,H){H===null?b.matrix.copy(R.matrixWorld):(b.matrix.copy(H.matrixWorld),b.matrix.invert(),b.matrix.multiply(R.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(R.projectionMatrix),b.projectionMatrixInverse.copy(R.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=wi*2*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(b){c=b,u!==null&&(u.fixedFoveation=b),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=b)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let F=null;function j(b,R){if(h=R.getViewerPose(d||a),v=R,h!==null){const H=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let K=!1;H.length!==y.cameras.length&&(y.cameras.length=0,K=!0);for(let k=0;k<H.length;k++){const it=H[k];let mt=null;if(f!==null)mt=f.getViewport(it);else{const Et=l.getViewSubImage(u,it);mt=Et.viewport,k===0&&(t.setRenderTargetTextures(x,Et.colorTexture,u.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(x))}let St=E[k];St===void 0&&(St=new Ze,St.layers.enable(k),St.viewport=new Ce,E[k]=St),St.matrix.fromArray(it.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(it.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(mt.x,mt.y,mt.width,mt.height),k===0&&(y.matrix.copy(St.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),K===!0&&y.cameras.push(St)}const et=s.enabledFeatures;if(et&&et.includes("depth-sensing")){const k=l.getDepthInformation(H[0]);k&&k.isValid&&k.texture&&g.init(t,k,s.renderState)}}for(let H=0;H<M.length;H++){const K=_[H],et=M[H];K!==null&&et!==void 0&&et.update(K,R,d||a)}F&&F(b,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),v=null}const z=new Uo;z.setAnimationLoop(j),this.setAnimationLoop=function(b){F=b},this.dispose=function(){}}}const Vn=new Qe,mp=new Re;function vp(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ro(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),l(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,M):p.isSpriteMaterial?d(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,_=x.envMapRotation;M&&(m.envMap.value=M,Vn.copy(_),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),m.envMapRotation.value.setFromMatrix4(mp.makeRotationFromEuler(Vn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function l(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gp(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const _=M.program;n.uniformBlockBinding(x,_)}function d(x,M){let _=s[x.id];_===void 0&&(v(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(x,A);const I=t.render.frame;r[x.id]!==I&&(u(x),r[x.id]=I)}function h(x){const M=l();x.__bindingPointIndex=M;const _=i.createBuffer(),A=x.__size,I=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function l(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const M=s[x.id],_=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let I=0,U=_.length;I<U;I++){const P=Array.isArray(_[I])?_[I]:[_[I]];for(let E=0,y=P.length;E<y;E++){const T=P[E];if(f(T,I,E,A)===!0){const B=T.__offset,N=Array.isArray(T.value)?T.value:[T.value];let X=0;for(let q=0;q<N.length;q++){const J=N[q],O=g(J);typeof J=="number"||typeof J=="boolean"?(T.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,B+X,T.__data)):J.isMatrix3?(T.__data[0]=J.elements[0],T.__data[1]=J.elements[1],T.__data[2]=J.elements[2],T.__data[3]=0,T.__data[4]=J.elements[3],T.__data[5]=J.elements[4],T.__data[6]=J.elements[5],T.__data[7]=0,T.__data[8]=J.elements[6],T.__data[9]=J.elements[7],T.__data[10]=J.elements[8],T.__data[11]=0):(J.toArray(T.__data,X),X+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,_,A){const I=x.value,U=M+"_"+_;if(A[U]===void 0)return typeof I=="number"||typeof I=="boolean"?A[U]=I:A[U]=I.clone(),!0;{const P=A[U];if(typeof I=="number"||typeof I=="boolean"){if(P!==I)return A[U]=I,!0}else if(P.equals(I)===!1)return P.copy(I),!0}return!1}function v(x){const M=x.uniforms;let _=0;const A=16;for(let U=0,P=M.length;U<P;U++){const E=Array.isArray(M[U])?M[U]:[M[U]];for(let y=0,T=E.length;y<T;y++){const B=E[y],N=Array.isArray(B.value)?B.value:[B.value];for(let X=0,q=N.length;X<q;X++){const J=N[X],O=g(J),L=_%A,Q=L%O.boundary,$=L+Q;_+=Q,$!==0&&A-$<O.storage&&(_+=A-$),B.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=O.storage}}}const I=_%A;return I>0&&(_+=A-I),x.__size=_,x.__cache={},this}function g(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:d,dispose:p}}class _p{constructor(t={}){const{canvas:e=kl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this.toneMapping=Ln,this.toneMappingExposure=1;const _=this;let A=!1,I=0,U=0,P=null,E=-1,y=null;const T=new Ce,B=new Ce;let N=null;const X=new _e(0);let q=0,J=e.width,O=e.height,L=1,Q=null,$=null;const F=new Ce(0,0,J,O),j=new Ce(0,0,J,O);let z=!1;const b=new ea;let R=!1,H=!1;const K=new Re,et=new Re,k=new rt,it=new Ce,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function Et(){return P===null?L:1}let D=n;function ft(w,V){return e.getContext(w,V)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gs}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),D===null){const V="webgl2";if(D=ft(V,w),D===null)throw ft(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ut,Xt,xt,ne,vt,C,S,Y,ct,ht,ot,wt,Tt,Ft,le,Mt,kt,Zt,$t,Wt,ce,ie,me,W;function Lt(){ut=new bd(D),ut.init(),ie=new cp(D,ut),Xt=new yd(D,ut,t,ie),xt=new op(D,ut),Xt.reverseDepthBuffer&&u&&xt.buffers.depth.setReversed(!0),ne=new Cd(D),vt=new Zf,C=new lp(D,ut,xt,vt,Xt,ie,ne),S=new Sd(_),Y=new Td(_),ct=new Fc(D),me=new _d(D,ct),ht=new Ad(D,ct,ne,me),ot=new Ld(D,ht,ct,ne),$t=new Pd(D,Xt,C),Mt=new Md(vt),wt=new Yf(_,S,Y,ut,Xt,me,Mt),Tt=new vp(_,vt),Ft=new $f,le=new np(ut),Zt=new gd(_,S,Y,xt,ot,f,c),kt=new sp(_,ot,Xt),W=new gp(D,ne,Xt,xt),Wt=new xd(D,ut,ne),ce=new Rd(D,ut,ne),ne.programs=wt.programs,_.capabilities=Xt,_.extensions=ut,_.properties=vt,_.renderLists=Ft,_.shadowMap=kt,_.state=xt,_.info=ne}Lt();const lt=new pp(_,D);this.xr=lt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=ut.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ut.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(w){w!==void 0&&(L=w,this.setSize(J,O,!1))},this.getSize=function(w){return w.set(J,O)},this.setSize=function(w,V,tt=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,O=V,e.width=Math.floor(w*L),e.height=Math.floor(V*L),tt===!0&&(e.style.width=w+"px",e.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(J*L,O*L).floor()},this.setDrawingBufferSize=function(w,V,tt){J=w,O=V,L=tt,e.width=Math.floor(w*tt),e.height=Math.floor(V*tt),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(F)},this.setViewport=function(w,V,tt,Z){w.isVector4?F.set(w.x,w.y,w.z,w.w):F.set(w,V,tt,Z),xt.viewport(T.copy(F).multiplyScalar(L).round())},this.getScissor=function(w){return w.copy(j)},this.setScissor=function(w,V,tt,Z){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,V,tt,Z),xt.scissor(B.copy(j).multiplyScalar(L).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(w){xt.setScissorTest(z=w)},this.setOpaqueSort=function(w){Q=w},this.setTransparentSort=function(w){$=w},this.getClearColor=function(w){return w.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(w=!0,V=!0,tt=!0){let Z=0;if(w){let G=!1;if(P!==null){const st=P.texture.format;G=st===Ks||st===Zs||st===Ys}if(G){const st=P.texture.type,Ct=st===Sn||st===Yn||st===Bi||st===Mi||st===Xs||st===qs,zt=Zt.getClearColor(),Ht=Zt.getClearAlpha(),te=zt.r,Kt=zt.g,Nt=zt.b;Ct?(v[0]=te,v[1]=Kt,v[2]=Nt,v[3]=Ht,D.clearBufferuiv(D.COLOR,0,v)):(g[0]=te,g[1]=Kt,g[2]=Nt,g[3]=Ht,D.clearBufferiv(D.COLOR,0,g))}else Z|=D.COLOR_BUFFER_BIT}V&&(Z|=D.DEPTH_BUFFER_BIT),tt&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),Zt.dispose(),Ft.dispose(),le.dispose(),vt.dispose(),S.dispose(),Y.dispose(),ot.dispose(),me.dispose(),W.dispose(),wt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",gt),lt.removeEventListener("sessionend",_t),Jt.stop()};function pt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=ne.autoReset,V=kt.enabled,tt=kt.autoUpdate,Z=kt.needsUpdate,G=kt.type;Lt(),ne.autoReset=w,kt.enabled=V,kt.autoUpdate=tt,kt.needsUpdate=Z,kt.type=G}function Ot(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function re(w){const V=w.target;V.removeEventListener("dispose",re),Te(V)}function Te(w){Ae(w),vt.remove(w)}function Ae(w){const V=vt.get(w).programs;V!==void 0&&(V.forEach(function(tt){wt.releaseProgram(tt)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,tt,Z,G,st){V===null&&(V=mt);const Ct=G.isMesh&&G.matrixWorld.determinant()<0,zt=bt(w,V,tt,Z,G);xt.setMaterial(Z,Ct);let Ht=tt.index,te=1;if(Z.wireframe===!0){if(Ht=ht.getWireframeAttribute(tt),Ht===void 0)return;te=2}const Kt=tt.drawRange,Nt=tt.attributes.position;let he=Kt.start*te,ee=(Kt.start+Kt.count)*te;st!==null&&(he=Math.max(he,st.start*te),ee=Math.min(ee,(st.start+st.count)*te)),Ht!==null?(he=Math.max(he,0),ee=Math.min(ee,Ht.count)):Nt!=null&&(he=Math.max(he,0),ee=Math.min(ee,Nt.count));const Ee=ee-he;if(Ee<0||Ee===1/0)return;me.setup(G,Z,zt,tt,Ht);let ve,se=Wt;if(Ht!==null&&(ve=ct.get(Ht),se=ce,se.setIndex(ve)),G.isMesh)Z.wireframe===!0?(xt.setLineWidth(Z.wireframeLinewidth*Et()),se.setMode(D.LINES)):se.setMode(D.TRIANGLES);else if(G.isLine){let Yt=Z.linewidth;Yt===void 0&&(Yt=1),xt.setLineWidth(Yt*Et()),G.isLineSegments?se.setMode(D.LINES):G.isLineLoop?se.setMode(D.LINE_LOOP):se.setMode(D.LINE_STRIP)}else G.isPoints?se.setMode(D.POINTS):G.isSprite&&se.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)se.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))se.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Yt=G._multiDrawStarts,we=G._multiDrawCounts,de=G._multiDrawCount,Qt=Ht?ct.get(Ht).bytesPerElement:1,Pe=vt.get(Z).currentProgram.getUniforms();for(let ye=0;ye<de;ye++)Pe.setValue(D,"_gl_DrawID",ye),se.render(Yt[ye]/Qt,we[ye])}else if(G.isInstancedMesh)se.renderInstances(he,Ee,G.count);else if(tt.isInstancedBufferGeometry){const Yt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,we=Math.min(tt.instanceCount,Yt);se.renderInstances(he,Ee,we)}else se.render(he,Ee)};function ae(w,V,tt){w.transparent===!0&&w.side===nn&&w.forceSinglePass===!1?(w.side=We,w.needsUpdate=!0,It(w,V,tt),w.side=In,w.needsUpdate=!0,It(w,V,tt),w.side=nn):It(w,V,tt)}this.compile=function(w,V,tt=null){tt===null&&(tt=w),p=le.get(tt),p.init(V),M.push(p),tt.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),w!==tt&&w.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const Z=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const st=G.material;if(st)if(Array.isArray(st))for(let Ct=0;Ct<st.length;Ct++){const zt=st[Ct];ae(zt,tt,G),Z.add(zt)}else ae(st,tt,G),Z.add(st)}),M.pop(),p=null,Z},this.compileAsync=function(w,V,tt=null){const Z=this.compile(w,V,tt);return new Promise(G=>{function st(){if(Z.forEach(function(Ct){vt.get(Ct).currentProgram.isReady()&&Z.delete(Ct)}),Z.size===0){G(w);return}setTimeout(st,10)}ut.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let at=null;function dt(w){at&&at(w)}function gt(){Jt.stop()}function _t(){Jt.start()}const Jt=new Uo;Jt.setAnimationLoop(dt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(w){at=w,lt.setAnimationLoop(w),w===null?Jt.stop():Jt.start()},lt.addEventListener("sessionstart",gt),lt.addEventListener("sessionend",_t),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(V),V=lt.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,V,P),p=le.get(w,M.length),p.init(V),M.push(p),et.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),b.setFromProjectionMatrix(et),H=this.localClippingEnabled,R=Mt.init(this.clippingPlanes,H),m=Ft.get(w,x.length),m.init(),x.push(m),lt.enabled===!0&&lt.isPresenting===!0){const st=_.xr.getDepthSensingMesh();st!==null&&Bt(st,V,-1/0,_.sortObjects)}Bt(w,V,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Q,$),St=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,St&&Zt.addToRenderList(m,w),this.info.render.frame++,R===!0&&Mt.beginShadows();const tt=p.state.shadowsArray;kt.render(tt,w,V),R===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,G=m.transmissive;if(p.setupLights(),V.isArrayCamera){const st=V.cameras;if(G.length>0)for(let Ct=0,zt=st.length;Ct<zt;Ct++){const Ht=st[Ct];Ut(Z,G,w,Ht)}St&&Zt.render(w);for(let Ct=0,zt=st.length;Ct<zt;Ct++){const Ht=st[Ct];At(m,w,Ht,Ht.viewport)}}else G.length>0&&Ut(Z,G,w,V),St&&Zt.render(w),At(m,w,V);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(_,w,V),me.resetDefaultState(),E=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],R===!0&&Mt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Bt(w,V,tt,Z){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)tt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||b.intersectsSprite(w)){Z&&it.setFromMatrixPosition(w.matrixWorld).applyMatrix4(et);const Ct=ot.update(w),zt=w.material;zt.visible&&m.push(w,Ct,zt,tt,it.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||b.intersectsObject(w))){const Ct=ot.update(w),zt=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),it.copy(w.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),it.copy(Ct.boundingSphere.center)),it.applyMatrix4(w.matrixWorld).applyMatrix4(et)),Array.isArray(zt)){const Ht=Ct.groups;for(let te=0,Kt=Ht.length;te<Kt;te++){const Nt=Ht[te],he=zt[Nt.materialIndex];he&&he.visible&&m.push(w,Ct,he,tt,it.z,Nt)}}else zt.visible&&m.push(w,Ct,zt,tt,it.z,null)}}const st=w.children;for(let Ct=0,zt=st.length;Ct<zt;Ct++)Bt(st[Ct],V,tt,Z)}function At(w,V,tt,Z){const G=w.opaque,st=w.transmissive,Ct=w.transparent;p.setupLightsView(tt),R===!0&&Mt.setGlobalState(_.clippingPlanes,tt),Z&&xt.viewport(T.copy(Z)),G.length>0&&nt(G,V,tt),st.length>0&&nt(st,V,tt),Ct.length>0&&nt(Ct,V,tt),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Ut(w,V,tt,Z){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Zn(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?zi:Sn,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));const st=p.state.transmissionRenderTarget[Z.id],Ct=Z.viewport||T;st.setSize(Ct.z,Ct.w);const zt=_.getRenderTarget();_.setRenderTarget(st),_.getClearColor(X),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),St&&Zt.render(tt);const Ht=_.toneMapping;_.toneMapping=Ln;const te=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),R===!0&&Mt.setGlobalState(_.clippingPlanes,Z),nt(w,tt,Z),C.updateMultisampleRenderTarget(st),C.updateRenderTargetMipmap(st),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Nt=0,he=V.length;Nt<he;Nt++){const ee=V[Nt],Ee=ee.object,ve=ee.geometry,se=ee.material,Yt=ee.group;if(se.side===nn&&Ee.layers.test(Z.layers)){const we=se.side;se.side=We,se.needsUpdate=!0,Rt(Ee,tt,Z,ve,se,Yt),se.side=we,se.needsUpdate=!0,Kt=!0}}Kt===!0&&(C.updateMultisampleRenderTarget(st),C.updateRenderTargetMipmap(st))}_.setRenderTarget(zt),_.setClearColor(X,q),te!==void 0&&(Z.viewport=te),_.toneMapping=Ht}function nt(w,V,tt){const Z=V.isScene===!0?V.overrideMaterial:null;for(let G=0,st=w.length;G<st;G++){const Ct=w[G],zt=Ct.object,Ht=Ct.geometry,te=Z===null?Ct.material:Z,Kt=Ct.group;zt.layers.test(tt.layers)&&Rt(zt,V,tt,Ht,te,Kt)}}function Rt(w,V,tt,Z,G,st){w.onBeforeRender(_,V,tt,Z,G,st),w.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(_,V,tt,Z,w,st),G.transparent===!0&&G.side===nn&&G.forceSinglePass===!1?(G.side=We,G.needsUpdate=!0,_.renderBufferDirect(tt,V,Z,G,w,st),G.side=In,G.needsUpdate=!0,_.renderBufferDirect(tt,V,Z,G,w,st),G.side=nn):_.renderBufferDirect(tt,V,Z,G,w,st),w.onAfterRender(_,V,tt,Z,G,st)}function It(w,V,tt){V.isScene!==!0&&(V=mt);const Z=vt.get(w),G=p.state.lights,st=p.state.shadowsArray,Ct=G.state.version,zt=wt.getParameters(w,G.state,st,V,tt),Ht=wt.getProgramCacheKey(zt);let te=Z.programs;Z.environment=w.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(w.isMeshStandardMaterial?Y:S).get(w.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,te===void 0&&(w.addEventListener("dispose",re),te=new Map,Z.programs=te);let Kt=te.get(Ht);if(Kt!==void 0){if(Z.currentProgram===Kt&&Z.lightsStateVersion===Ct)return Pt(w,zt),Kt}else zt.uniforms=wt.getUniforms(w),w.onBeforeCompile(zt,_),Kt=wt.acquireProgram(zt,Ht),te.set(Ht,Kt),Z.uniforms=zt.uniforms;const Nt=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Nt.clippingPlanes=Mt.uniform),Pt(w,zt),Z.needsLights=jt(w),Z.lightsStateVersion=Ct,Z.needsLights&&(Nt.ambientLightColor.value=G.state.ambient,Nt.lightProbe.value=G.state.probe,Nt.directionalLights.value=G.state.directional,Nt.directionalLightShadows.value=G.state.directionalShadow,Nt.spotLights.value=G.state.spot,Nt.spotLightShadows.value=G.state.spotShadow,Nt.rectAreaLights.value=G.state.rectArea,Nt.ltc_1.value=G.state.rectAreaLTC1,Nt.ltc_2.value=G.state.rectAreaLTC2,Nt.pointLights.value=G.state.point,Nt.pointLightShadows.value=G.state.pointShadow,Nt.hemisphereLights.value=G.state.hemi,Nt.directionalShadowMap.value=G.state.directionalShadowMap,Nt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Nt.spotShadowMap.value=G.state.spotShadowMap,Nt.spotLightMatrix.value=G.state.spotLightMatrix,Nt.spotLightMap.value=G.state.spotLightMap,Nt.pointShadowMap.value=G.state.pointShadowMap,Nt.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Kt,Z.uniformsList=null,Kt}function qt(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=vr.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Pt(w,V){const tt=vt.get(w);tt.outputColorSpace=V.outputColorSpace,tt.batching=V.batching,tt.batchingColor=V.batchingColor,tt.instancing=V.instancing,tt.instancingColor=V.instancingColor,tt.instancingMorph=V.instancingMorph,tt.skinning=V.skinning,tt.morphTargets=V.morphTargets,tt.morphNormals=V.morphNormals,tt.morphColors=V.morphColors,tt.morphTargetsCount=V.morphTargetsCount,tt.numClippingPlanes=V.numClippingPlanes,tt.numIntersection=V.numClipIntersection,tt.vertexAlphas=V.vertexAlphas,tt.vertexTangents=V.vertexTangents,tt.toneMapping=V.toneMapping}function bt(w,V,tt,Z,G){V.isScene!==!0&&(V=mt),C.resetTextureUnits();const st=V.fog,Ct=Z.isMeshStandardMaterial?V.environment:null,zt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ei,Ht=(Z.isMeshStandardMaterial?Y:S).get(Z.envMap||Ct),te=Z.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Kt=!!tt.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Nt=!!tt.morphAttributes.position,he=!!tt.morphAttributes.normal,ee=!!tt.morphAttributes.color;let Ee=Ln;Z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ee=_.toneMapping);const ve=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,se=ve!==void 0?ve.length:0,Yt=vt.get(Z),we=p.state.lights;if(R===!0&&(H===!0||w!==y)){const fe=w===y&&Z.id===E;Mt.setState(Z,w,fe)}let de=!1;Z.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==we.state.version||Yt.outputColorSpace!==zt||G.isBatchedMesh&&Yt.batching===!1||!G.isBatchedMesh&&Yt.batching===!0||G.isBatchedMesh&&Yt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Yt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Yt.instancing===!1||!G.isInstancedMesh&&Yt.instancing===!0||G.isSkinnedMesh&&Yt.skinning===!1||!G.isSkinnedMesh&&Yt.skinning===!0||G.isInstancedMesh&&Yt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Yt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Yt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Yt.instancingMorph===!1&&G.morphTexture!==null||Yt.envMap!==Ht||Z.fog===!0&&Yt.fog!==st||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Mt.numPlanes||Yt.numIntersection!==Mt.numIntersection)||Yt.vertexAlphas!==te||Yt.vertexTangents!==Kt||Yt.morphTargets!==Nt||Yt.morphNormals!==he||Yt.morphColors!==ee||Yt.toneMapping!==Ee||Yt.morphTargetsCount!==se)&&(de=!0):(de=!0,Yt.__version=Z.version);let Qt=Yt.currentProgram;de===!0&&(Qt=It(Z,V,G));let Pe=!1,ye=!1,Xe=!1;const Me=Qt.getUniforms(),He=Yt.uniforms;if(xt.useProgram(Qt.program)&&(Pe=!0,ye=!0,Xe=!0),Z.id!==E&&(E=Z.id,ye=!0),Pe||y!==w){xt.buffers.depth.getReversed()?(K.copy(w.projectionMatrix),Xl(K),ql(K),Me.setValue(D,"projectionMatrix",K)):Me.setValue(D,"projectionMatrix",w.projectionMatrix),Me.setValue(D,"viewMatrix",w.matrixWorldInverse);const ke=Me.map.cameraPosition;ke!==void 0&&ke.setValue(D,k.setFromMatrixPosition(w.matrixWorld)),Xt.logarithmicDepthBuffer&&Me.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Me.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,ye=!0,Xe=!0)}if(G.isSkinnedMesh){Me.setOptional(D,G,"bindMatrix"),Me.setOptional(D,G,"bindMatrixInverse");const fe=G.skeleton;fe&&(fe.boneTexture===null&&fe.computeBoneTexture(),Me.setValue(D,"boneTexture",fe.boneTexture,C))}G.isBatchedMesh&&(Me.setOptional(D,G,"batchingTexture"),Me.setValue(D,"batchingTexture",G._matricesTexture,C),Me.setOptional(D,G,"batchingIdTexture"),Me.setValue(D,"batchingIdTexture",G._indirectTexture,C),Me.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&Me.setValue(D,"batchingColorTexture",G._colorsTexture,C));const Ge=tt.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&$t.update(G,tt,Qt),(ye||Yt.receiveShadow!==G.receiveShadow)&&(Yt.receiveShadow=G.receiveShadow,Me.setValue(D,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(He.envMap.value=Ht,He.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&V.environment!==null&&(He.envMapIntensity.value=V.environmentIntensity),ye&&(Me.setValue(D,"toneMappingExposure",_.toneMappingExposure),Yt.needsLights&&Dt(He,Xe),st&&Z.fog===!0&&Tt.refreshFogUniforms(He,st),Tt.refreshMaterialUniforms(He,Z,L,O,p.state.transmissionRenderTarget[w.id]),vr.upload(D,qt(Yt),He,C)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(vr.upload(D,qt(Yt),He,C),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Me.setValue(D,"center",G.center),Me.setValue(D,"modelViewMatrix",G.modelViewMatrix),Me.setValue(D,"normalMatrix",G.normalMatrix),Me.setValue(D,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const fe=Z.uniformsGroups;for(let ke=0,Mr=fe.length;ke<Mr;ke++){const Un=fe[ke];W.update(Un,Qt),W.bind(Un,Qt)}}return Qt}function Dt(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function jt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,V,tt){vt.get(w.texture).__webglTexture=V,vt.get(w.depthTexture).__webglTexture=tt;const Z=vt.get(w);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=tt===void 0,Z.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,V){const tt=vt.get(w);tt.__webglFramebuffer=V,tt.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,tt=0){P=w,I=V,U=tt;let Z=!0,G=null,st=!1,Ct=!1;if(w){const Ht=vt.get(w);if(Ht.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1;else if(Ht.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Ht.__hasExternalTextures)C.rebindTextures(w,vt.get(w.texture).__webglTexture,vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Nt=w.depthTexture;if(Ht.__boundDepthTexture!==Nt){if(Nt!==null&&vt.has(Nt)&&(w.width!==Nt.image.width||w.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const te=w.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ct=!0);const Kt=vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[V])?G=Kt[V][tt]:G=Kt[V],st=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?G=vt.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?G=Kt[tt]:G=Kt,T.copy(w.viewport),B.copy(w.scissor),N=w.scissorTest}else T.copy(F).multiplyScalar(L).floor(),B.copy(j).multiplyScalar(L).floor(),N=z;if(xt.bindFramebuffer(D.FRAMEBUFFER,G)&&Z&&xt.drawBuffers(w,G),xt.viewport(T),xt.scissor(B),xt.setScissorTest(N),st){const Ht=vt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ht.__webglTexture,tt)}else if(Ct){const Ht=vt.get(w.texture),te=V||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ht.__webglTexture,tt||0,te)}E=-1},this.readRenderTargetPixels=function(w,V,tt,Z,G,st,Ct){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(zt=zt[Ct]),zt){xt.bindFramebuffer(D.FRAMEBUFFER,zt);try{const Ht=w.texture,te=Ht.format,Kt=Ht.type;if(!Xt.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-Z&&tt>=0&&tt<=w.height-G&&D.readPixels(V,tt,Z,G,ie.convert(te),ie.convert(Kt),st)}finally{const Ht=P!==null?vt.get(P).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(w,V,tt,Z,G,st,Ct){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(zt=zt[Ct]),zt){const Ht=w.texture,te=Ht.format,Kt=Ht.type;if(!Xt.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=w.width-Z&&tt>=0&&tt<=w.height-G){xt.bindFramebuffer(D.FRAMEBUFFER,zt);const Nt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Nt),D.bufferData(D.PIXEL_PACK_BUFFER,st.byteLength,D.STREAM_READ),D.readPixels(V,tt,Z,G,ie.convert(te),ie.convert(Kt),0);const he=P!==null?vt.get(P).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,he);const ee=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Wl(D,ee,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Nt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,st),D.deleteBuffer(Nt),D.deleteSync(ee),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,V=null,tt=0){w.isTexture!==!0&&(fi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1]);const Z=Math.pow(2,-tt),G=Math.floor(w.image.width*Z),st=Math.floor(w.image.height*Z),Ct=V!==null?V.x:0,zt=V!==null?V.y:0;C.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,tt,0,0,Ct,zt,G,st),xt.unbindTexture()};const oe=D.createFramebuffer(),yt=D.createFramebuffer();this.copyTextureToTexture=function(w,V,tt=null,Z=null,G=0,st=null){w.isTexture!==!0&&(fi("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,w=arguments[1],V=arguments[2],st=arguments[3]||0,tt=null),st===null&&(G!==0?(fi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=G,G=0):st=0);let Ct,zt,Ht,te,Kt,Nt,he,ee,Ee;const ve=w.isCompressedTexture?w.mipmaps[st]:w.image;if(tt!==null)Ct=tt.max.x-tt.min.x,zt=tt.max.y-tt.min.y,Ht=tt.isBox3?tt.max.z-tt.min.z:1,te=tt.min.x,Kt=tt.min.y,Nt=tt.isBox3?tt.min.z:0;else{const Ge=Math.pow(2,-G);Ct=Math.floor(ve.width*Ge),zt=Math.floor(ve.height*Ge),w.isDataArrayTexture?Ht=ve.depth:w.isData3DTexture?Ht=Math.floor(ve.depth*Ge):Ht=1,te=0,Kt=0,Nt=0}Z!==null?(he=Z.x,ee=Z.y,Ee=Z.z):(he=0,ee=0,Ee=0);const se=ie.convert(V.format),Yt=ie.convert(V.type);let we;V.isData3DTexture?(C.setTexture3D(V,0),we=D.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(C.setTexture2DArray(V,0),we=D.TEXTURE_2D_ARRAY):(C.setTexture2D(V,0),we=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);const de=D.getParameter(D.UNPACK_ROW_LENGTH),Qt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Pe=D.getParameter(D.UNPACK_SKIP_PIXELS),ye=D.getParameter(D.UNPACK_SKIP_ROWS),Xe=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ve.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ve.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,te),D.pixelStorei(D.UNPACK_SKIP_ROWS,Kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Nt);const Me=w.isDataArrayTexture||w.isData3DTexture,He=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){const Ge=vt.get(w),fe=vt.get(V),ke=vt.get(Ge.__renderTarget),Mr=vt.get(fe.__renderTarget);xt.bindFramebuffer(D.READ_FRAMEBUFFER,ke.__webglFramebuffer),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mr.__webglFramebuffer);for(let Un=0;Un<Ht;Un++)Me&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(w).__webglTexture,G,Nt+Un),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(V).__webglTexture,st,Ee+Un)),D.blitFramebuffer(te,Kt,Ct,zt,he,ee,Ct,zt,D.DEPTH_BUFFER_BIT,D.NEAREST);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||vt.has(w)){const Ge=vt.get(w),fe=vt.get(V);xt.bindFramebuffer(D.READ_FRAMEBUFFER,oe),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,yt);for(let ke=0;ke<Ht;ke++)Me?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ge.__webglTexture,G,Nt+ke):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ge.__webglTexture,G),He?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fe.__webglTexture,st,Ee+ke):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fe.__webglTexture,st),G!==0?D.blitFramebuffer(te,Kt,Ct,zt,he,ee,Ct,zt,D.COLOR_BUFFER_BIT,D.NEAREST):He?D.copyTexSubImage3D(we,st,he,ee,Ee+ke,te,Kt,Ct,zt):D.copyTexSubImage2D(we,st,he,ee,te,Kt,Ct,zt);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else He?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(we,st,he,ee,Ee,Ct,zt,Ht,se,Yt,ve.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(we,st,he,ee,Ee,Ct,zt,Ht,se,ve.data):D.texSubImage3D(we,st,he,ee,Ee,Ct,zt,Ht,se,Yt,ve):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,st,he,ee,Ct,zt,se,Yt,ve.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,st,he,ee,ve.width,ve.height,se,ve.data):D.texSubImage2D(D.TEXTURE_2D,st,he,ee,Ct,zt,se,Yt,ve);D.pixelStorei(D.UNPACK_ROW_LENGTH,de),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pe),D.pixelStorei(D.UNPACK_SKIP_ROWS,ye),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe),st===0&&V.generateMipmaps&&D.generateMipmap(we),xt.unbindTexture()},this.copyTextureToTexture3D=function(w,V,tt=null,Z=null,G=0){return w.isTexture!==!0&&(fi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,Z=arguments[1]||null,w=arguments[2],V=arguments[3],G=arguments[4]||0),fi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,V,tt,Z,G)},this.initRenderTarget=function(w){vt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),xt.unbindTexture()},this.resetState=function(){I=0,U=0,P=null,xt.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}}class xp extends Ie{constructor(t={}){super(),this.config={position:{x:0,y:0,z:0},springPhysics:{strength:.3,damping:.75},dragBehavior:{returnSpeed:.1,dampingFactor:.95,enabled:!1},selectionBehavior:{enabled:!1,clickThreshold:200,moveThreshold:5},hoverBehavior:{enabled:!1},...t},this._state={isDragging:!1,isHovering:!1,isSelected:!1,dragOffset:new rt,dragStartTime:0,dragStartPosition:new xe,velocity:new rt,onSelect:null,onDeselect:null,onClick:null,onDragStart:null,onDragEnd:null},this.interactiveMesh=null,this.position.set(this.config.position.x,this.config.position.y,this.config.position.z)}_initializeInteraction(){if(!this.interactiveMesh){console.warn("Interactive object has no interactiveMesh");return}this.interactiveMesh.userData.parent=this,this.interactiveMesh.userData.type="InteractiveObject",this.interactiveMesh.layers.enable(1)}setCallback(t,e){if(typeof e!="function"){console.warn(`Invalid callback: ${t}`);return}this._state[t]=e}onPointerEnter(t){this.config.hoverBehavior.enabled&&(this._state.isDragging||(this._state.isHovering=!0))}onPointerLeave(t){this.config.hoverBehavior.enabled&&(this._state.isDragging||(this._state.isHovering=!1))}onPointerMove(t){}onDragStart(t){if(!this.config.dragBehavior.enabled)return;this._state.isDragging=!0,this._state.velocity.set(0,0,0);const e=new vn(new rt(0,0,1),0),n=new rt;t.ray.intersectPlane(e,n),this._state.dragOffset.copy(this.position).sub(n),this._state.dragStartTime=Date.now(),this._state.dragStartPosition=new xe(t.clientX,t.clientY),this._state.onDragStart&&this._state.onDragStart(this,t)}onDragEnd(t){if(this.config.dragBehavior.enabled){if(this._state.isDragging=!1,this.config.selectionBehavior.enabled){const n=Date.now()-this._state.dragStartTime,r=new xe(t.clientX,t.clientY).distanceTo(this._state.dragStartPosition);n<this.config.selectionBehavior.clickThreshold&&r<this.config.selectionBehavior.moveThreshold&&this._onClick(t)}this._state.onDragEnd&&this._state.onDragEnd(this,t)}}_onClick(t){this.config.selectionBehavior.enabled&&this.toggleSelected(),this._state.onClick&&this._state.onClick(this,t)}toggleSelected(){this.config.selectionBehavior.enabled&&(this._state.isSelected=!this._state.isSelected,this._state.isSelected&&this._state.onSelect?this._state.onSelect(this):!this._state.isSelected&&this._state.onDeselect&&this._state.onDeselect(this))}update(t){if(this.config.dragBehavior.enabled&&!this._state.isDragging){this.position.add(this._state.velocity),this._state.velocity.multiplyScalar(this.config.dragBehavior.dampingFactor);const e=new rt(0,0,this.position.z);this.position.x+=(e.x-this.position.x)*this.config.dragBehavior.returnSpeed,this.position.y+=(e.y-this.position.y)*this.config.dragBehavior.returnSpeed}}dispose(){}}class jr extends xp{constructor({texture:t,width:e=2,height:n=3,position:s={x:0,y:0,z:0},springPhysics:r={strength:.3,damping:.75,wiggleStrength:.5,wiggleDamping:.6},dragBehavior:a={returnSpeed:.1,dampingFactor:.95,enabled:!0},selectionBehavior:o={enabled:!0,clickThreshold:200,moveThreshold:5},hoverBehavior:c={enabled:!0}}={}){super({position:s,springPhysics:r,dragBehavior:a,selectionBehavior:o,hoverBehavior:c}),this._cardState={scale:1,targetScale:1,scaleVelocity:0,initialHoverTime:0,isInitialHover:!1,wiggleRotation:0,wiggleVelocity:0,glowIntensity:0,targetGlowIntensity:0,glowVelocity:0,targetZ:0,zVelocity:0,targetRotation:new Qe,pivotOffset:.7},this._createCardMesh(t,e,n),this._initializeInteraction()}_createCardMesh(t,e,n){const s=new Kn(e,n),r=new Mc({map:t,transparent:!0,side:nn,shininess:100,specular:4473924,emissive:0});this.cardMesh=new Ke(s,r),this.cardMesh.castShadow=!0,this.cardMesh.receiveShadow=!0,this.cardMesh.position.y=-this._cardState.pivotOffset,this.interactiveMesh=this.cardMesh,this.add(this.cardMesh),this._createGlowEffect(e,n)}_createGlowEffect(t,e){const n=new Kn(t*1.1,e*1.1),s=new ta({color:65535,transparent:!0,opacity:0,side:nn,blending:Jr});this.glowMesh=new Ke(n,s),this.glowMesh.position.z=-.05,this.glowMesh.position.y=-this._cardState.pivotOffset,this.add(this.glowMesh)}onPointerEnter(t){super.onPointerEnter(t),this._state.isHovering&&!this._state.isDragging&&(this._cardState.isInitialHover=!0,this._cardState.initialHoverTime=Date.now(),this._cardState.targetScale=1.1,this._cardState.scaleVelocity=.05,this._cardState.wiggleRotation=0,this._cardState.wiggleVelocity=.15),this._state.isHovering&&!this._state.isDragging&&this.sceneManager&&this.sceneManager.animateText("Card Hovered!")}onPointerLeave(t){super.onPointerLeave(t),!this._state.isHovering&&!this._state.isDragging&&(this._cardState.targetScale=this._state.isSelected?1.1:1,this._cardState.isInitialHover=!1)}onPointerMove(t){if(super.onPointerMove(t),this._state.isHovering&&!this._state.isDragging){const e=this.position.clone().project(t.camera),n=new xe(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight)*2+1),s=(n.y-e.y)*.5,r=(n.x-e.x)*.5;this._cardState.targetRotation.x=-s,this._cardState.targetRotation.y=r}}onDragStart(t){super.onDragStart(t)}onDragEnd(t){super.onDragEnd(t),this.rotation.z=0,!this._state.isHovering&&!this._state.isSelected&&(this._cardState.targetScale=1,this._cardState.isInitialHover=!1)}toggleSelected(){super.toggleSelected(),this._state.isSelected?(this._cardState.targetScale=1.1,this._cardState.targetGlowIntensity=.7,this._cardState.targetZ=.5):(this._cardState.targetScale=this._state.isHovering?1.1:1,this._cardState.targetGlowIntensity=0,this._cardState.targetZ=0)}update(t=1/60){super.update(t),this._updateScale(),this._updateWiggle(),this._updateRotation(),this._updateGlow(),this._updateElevation()}_updateScale(){const e=(this._cardState.targetScale-this._cardState.scale)*this.config.springPhysics.strength;this._cardState.scaleVelocity+=e,this._cardState.scaleVelocity*=this.config.springPhysics.damping,this._cardState.scale+=this._cardState.scaleVelocity,this.cardMesh.scale.set(this._cardState.scale,this._cardState.scale,1),this.glowMesh.scale.set(this._cardState.scale,this._cardState.scale,1)}_updateWiggle(){if(this._cardState.isInitialHover){const t=-this._cardState.wiggleRotation*this.config.springPhysics.wiggleStrength;this._cardState.wiggleVelocity+=t,this._cardState.wiggleVelocity*=this.config.springPhysics.wiggleDamping,this._cardState.wiggleRotation+=this._cardState.wiggleVelocity,this.cardMesh.rotation.z=this._cardState.wiggleRotation,this.glowMesh.rotation.z=this._cardState.wiggleRotation,Math.abs(this._cardState.wiggleVelocity)<.001&&Math.abs(this._cardState.wiggleRotation)<.001&&(this._cardState.isInitialHover=!1,this._cardState.wiggleRotation=0)}}_updateRotation(){if(!this._state.isDragging&&!this._state.isHovering&&!this._state.isSelected){const t=Date.now()*.001;this._cardState.targetRotation.x=Math.sin(t)*.1,this._cardState.targetRotation.y=Math.cos(t)*.1}this.cardMesh.rotation.x+=(this._cardState.targetRotation.x-this.cardMesh.rotation.x)*.1,this.cardMesh.rotation.y+=(this._cardState.targetRotation.y-this.cardMesh.rotation.y)*.1,this.glowMesh.rotation.x=this.cardMesh.rotation.x,this.glowMesh.rotation.y=this.cardMesh.rotation.y}_updateGlow(){const e=(this._cardState.targetGlowIntensity-this._cardState.glowIntensity)*.2;this._cardState.glowVelocity+=e,this._cardState.glowVelocity*=.9,this._cardState.glowIntensity+=this._cardState.glowVelocity,this.glowMesh.material.opacity=this._cardState.glowIntensity}_updateElevation(){const e=(this._cardState.targetZ-this.position.z)*.2;this._cardState.zVelocity+=e,this._cardState.zVelocity*=.9,this.position.z+=this._cardState.zVelocity}dispose(){super.dispose(),this.cardMesh.geometry.dispose(),this.cardMesh.material.dispose(),this.cardMesh.material.map&&this.cardMesh.material.map.dispose(),this.glowMesh.geometry.dispose(),this.glowMesh.material.dispose()}}function hr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Qr={exports:{}},so;function yp(){return so||(so=1,function(i,t){(function(e){i.exports=e()})(function(){return function e(n,s,r){function a(d,h){if(!s[d]){if(!n[d]){var l=typeof hr=="function"&&hr;if(!h&&l)return l(d,!0);if(o)return o(d,!0);throw new Error("Cannot find module '"+d+"'")}var u=s[d]={exports:{}};n[d][0].call(u.exports,function(f){var v=n[d][1][f];return a(v||f)},u,u.exports,e,n,s,r)}return s[d].exports}for(var o=typeof hr=="function"&&hr,c=0;c<r.length;c++)a(r[c]);return a}({1:[function(e,n,s){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,s){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,s){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=a;function a(d){d=d||{},this.lowerBound=new r,d.lowerBound&&this.lowerBound.copy(d.lowerBound),this.upperBound=new r,d.upperBound&&this.upperBound.copy(d.upperBound)}var o=new r;a.prototype.setFromPoints=function(d,h,l,u){var f=this.lowerBound,v=this.upperBound,g=l;f.copy(d[0]),g&&g.vmult(f,f),v.copy(f);for(var m=1;m<d.length;m++){var p=d[m];g&&(g.vmult(p,o),p=o),p.x>v.x&&(v.x=p.x),p.x<f.x&&(f.x=p.x),p.y>v.y&&(v.y=p.y),p.y<f.y&&(f.y=p.y),p.z>v.z&&(v.z=p.z),p.z<f.z&&(f.z=p.z)}return h&&(h.vadd(f,f),h.vadd(v,v)),u&&(f.x-=u,f.y-=u,f.z-=u,v.x+=u,v.y+=u,v.z+=u),this},a.prototype.copy=function(d){return this.lowerBound.copy(d.lowerBound),this.upperBound.copy(d.upperBound),this},a.prototype.clone=function(){return new a().copy(this)},a.prototype.extend=function(d){var h=d.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var l=d.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var h=d.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var l=d.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var h=d.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var l=d.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},a.prototype.overlaps=function(d){var h=this.lowerBound,l=this.upperBound,u=d.lowerBound,f=d.upperBound;return(u.x<=l.x&&l.x<=f.x||h.x<=f.x&&f.x<=l.x)&&(u.y<=l.y&&l.y<=f.y||h.y<=f.y&&f.y<=l.y)&&(u.z<=l.z&&l.z<=f.z||h.z<=f.z&&f.z<=l.z)},a.prototype.contains=function(d){var h=this.lowerBound,l=this.upperBound,u=d.lowerBound,f=d.upperBound;return h.x<=u.x&&l.x>=f.x&&h.y<=u.y&&l.y>=f.y&&h.z<=u.z&&l.z>=f.z},a.prototype.getCorners=function(d,h,l,u,f,v,g,m){var p=this.lowerBound,x=this.upperBound;d.copy(p),h.set(x.x,p.y,p.z),l.set(x.x,x.y,p.z),u.set(p.x,x.y,x.z),f.set(x.x,p.y,p.z),v.set(p.x,x.y,p.z),g.set(p.x,p.y,x.z),m.copy(x)};var c=[new r,new r,new r,new r,new r,new r,new r,new r];a.prototype.toLocalFrame=function(d,h){var l=c,u=l[0],f=l[1],v=l[2],g=l[3],m=l[4],p=l[5],x=l[6],M=l[7];this.getCorners(u,f,v,g,m,p,x,M);for(var _=0;_!==8;_++){var A=l[_];d.pointToLocal(A,A)}return h.setFromPoints(l)},a.prototype.toWorldFrame=function(d,h){var l=c,u=l[0],f=l[1],v=l[2],g=l[3],m=l[4],p=l[5],x=l[6],M=l[7];this.getCorners(u,f,v,g,m,p,x,M);for(var _=0;_!==8;_++){var A=l[_];d.pointToWorld(A,A)}return h.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,s){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(a,o){if(a=a.index,o=o.index,o>a){var c=o;o=a,a=c}return this.matrix[(a*(a+1)>>1)+o-1]},r.prototype.set=function(a,o,c){if(a=a.index,o=o.index,o>a){var d=o;o=a,a=d}this.matrix[(a*(a+1)>>1)+o-1]=c?1:0},r.prototype.reset=function(){for(var a=0,o=this.matrix.length;a!==o;a++)this.matrix[a]=0},r.prototype.setNumObjects=function(a){this.matrix.length=a*(a-1)>>1}},{}],5:[function(e,n,s){var r=e("../objects/Body"),a=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=c;function c(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}c.prototype.collisionPairs=function(g,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var d=r.STATIC|r.KINEMATIC;c.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&d||g.sleepState===r.SLEEPING)&&(m.type&d||m.sleepState===r.SLEEPING))},c.prototype.intersectionTest=function(g,m,p,x){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,p,x):this.doBoundingSphereBroadphase(g,m,p,x)};var h=new a;new a,new o,new a,c.prototype.doBoundingSphereBroadphase=function(g,m,p,x){var M=h;m.position.vsub(g.position,M);var _=Math.pow(g.boundingRadius+m.boundingRadius,2),A=M.norm2();A<_&&(p.push(g),x.push(m))},c.prototype.doBoundingBoxBroadphase=function(g,m,p,x){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(p.push(g),x.push(m))};var l={keys:[]},u=[],f=[];c.prototype.makePairsUnique=function(g,m){for(var p=l,x=u,M=f,_=g.length,A=0;A!==_;A++)x[A]=g[A],M[A]=m[A];g.length=0,m.length=0;for(var A=0;A!==_;A++){var I=x[A].id,U=M[A].id,P=I<U?I+","+U:U+","+I;p[P]=A,p.keys.push(P)}for(var A=0;A!==p.keys.length;A++){var P=p.keys.pop(),E=p[P];g.push(x[E]),m.push(M[E]),delete p[P]}},c.prototype.setWorld=function(g){};var v=new a;c.boundingSphereCheck=function(g,m){var p=v;return g.position.vsub(m.position,p),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},c.prototype.aabbQuery=function(g,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,s){n.exports=c;var r=e("./Broadphase"),a=e("../math/Vec3"),o=e("../shapes/Shape");function c(h,l,u,f,v){r.apply(this),this.nx=u||10,this.ny=f||10,this.nz=v||10,this.aabbMin=h||new a(100,100,100),this.aabbMax=l||new a(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}c.prototype=new r,c.prototype.constructor=c;var d=new a;new a,c.prototype.collisionPairs=function(h,l,u){var f=h.numObjects(),v=h.bodies,K=this.aabbMax,H=this.aabbMin,g=this.nx,m=this.ny,p=this.nz,x=m*p,M=p,_=1,A=K.x,I=K.y,U=K.z,P=H.x,E=H.y,y=H.z,T=g/(A-P),B=m/(I-E),N=p/(U-y),X=(A-P)/g,q=(I-E)/m,J=(U-y)/p,O=Math.sqrt(X*X+q*q+J*J)*.5,L=o.types,Q=L.SPHERE,$=L.PLANE;L.BOX,L.COMPOUND,L.CONVEXPOLYHEDRON;for(var F=this.bins,j=this.binLengths,z=this.bins.length,b=0;b!==z;b++)j[b]=0;var R=Math.ceil,H=Math.min,K=Math.max;function et(le,Mt,kt,Zt,$t,Wt,ce){var ie=(le-P)*T|0,me=(Mt-E)*B|0,W=(kt-y)*N|0,Lt=R((Zt-P)*T),lt=R(($t-E)*B),pt=R((Wt-y)*N);ie<0?ie=0:ie>=g&&(ie=g-1),me<0?me=0:me>=m&&(me=m-1),W<0?W=0:W>=p&&(W=p-1),Lt<0?Lt=0:Lt>=g&&(Lt=g-1),lt<0?lt=0:lt>=m&&(lt=m-1),pt<0?pt=0:pt>=p&&(pt=p-1),ie*=x,me*=M,W*=_,Lt*=x,lt*=M,pt*=_;for(var Vt=ie;Vt<=Lt;Vt+=x)for(var Ot=me;Ot<=lt;Ot+=M)for(var re=W;re<=pt;re+=_){var Te=Vt+Ot+re;F[Te][j[Te]++]=ce}}for(var b=0;b!==f;b++){var k=v[b],it=k.shape;switch(it.type){case Q:var mt=k.position.x,St=k.position.y,Et=k.position.z,D=it.radius;et(mt-D,St-D,Et-D,mt+D,St+D,Et+D,k);break;case $:it.worldNormalNeedsUpdate&&it.computeWorldNormal(k.quaternion);var ft=it.worldNormal,ut=P+X*.5-k.position.x,Xt=E+q*.5-k.position.y,xt=y+J*.5-k.position.z,ne=d;ne.set(ut,Xt,xt);for(var vt=0,C=0;vt!==g;vt++,C+=x,ne.y=Xt,ne.x+=X)for(var S=0,Y=0;S!==m;S++,Y+=M,ne.z=xt,ne.y+=q)for(var ct=0,ht=0;ct!==p;ct++,ht+=_,ne.z+=J)if(ne.dot(ft)<O){var ot=C+Y+ht;F[ot][j[ot]++]=k}break;default:k.aabbNeedsUpdate&&k.computeAABB(),et(k.aabb.lowerBound.x,k.aabb.lowerBound.y,k.aabb.lowerBound.z,k.aabb.upperBound.x,k.aabb.upperBound.y,k.aabb.upperBound.z,k);break}}for(var b=0;b!==z;b++){var wt=j[b];if(wt>1)for(var Tt=F[b],vt=0;vt!==wt;vt++)for(var k=Tt[vt],S=0;S!==vt;S++){var Ft=Tt[S];this.needBroadphaseCollision(k,Ft)&&this.intersectionTest(k,Ft,l,u)}}this.makePairsUnique(l,u)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,s){n.exports=o;var r=e("./Broadphase"),a=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(c,d,h){var l=c.bodies,u=l.length,f,v,g,m;for(f=0;f!==u;f++)for(v=0;v!==f;v++)g=l[f],m=l[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,d,h)},new a,o.prototype.aabbQuery=function(c,d,h){h=h||[];for(var l=0;l<c.bodies.length;l++){var u=c.bodies[l];u.aabbNeedsUpdate&&u.computeAABB(),u.aabb.overlaps(d)&&h.push(u)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,s){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(a,o){if(a=a.id,o=o.id,o>a){var c=o;o=a,a=c}return a+"-"+o in this.matrix},r.prototype.set=function(a,o,c){if(a=a.id,o=o.id,o>a){var d=o;o=a,a=d}c?this.matrix[a+"-"+o]=!0:delete this.matrix[a+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(a){}},{}],9:[function(e,n,s){n.exports=l;var r=e("../math/Vec3"),a=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var c=e("../collision/RaycastResult"),d=e("../shapes/Shape"),h=e("../collision/AABB");function l(z,b){this.from=z?z.clone():new r,this.to=b?b.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new c,this.hasHit=!1,this.callback=function(R){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var u=new h,f=[];l.prototype.intersectWorld=function(z,b){return this.mode=b.mode||l.ANY,this.result=b.result||new c,this.skipBackfaces=!!b.skipBackfaces,this.collisionFilterMask=typeof b.collisionFilterMask<"u"?b.collisionFilterMask:-1,this.collisionFilterGroup=typeof b.collisionFilterGroup<"u"?b.collisionFilterGroup:-1,b.from&&this.from.copy(b.from),b.to&&this.to.copy(b.to),this.callback=b.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(u),f.length=0,z.broadphase.aabbQuery(z,u,f),this.intersectBodies(f),this.hasHit};var v=new r,g=new r;l.pointInTriangle=m;function m(z,b,R,H){H.vsub(b,$),R.vsub(b,v),z.vsub(b,g);var K=$.dot($),et=$.dot(v),k=$.dot(g),it=v.dot(v),mt=v.dot(g),St,Et;return(St=it*k-et*mt)>=0&&(Et=K*mt-et*k)>=0&&St+Et<K*it-et*et}var p=new r,x=new a;l.prototype.intersectBody=function(z,b){b&&(this.result=b,this._updateDirection());var R=this.checkCollisionResponse;if(!(R&&!z.collisionResponse)&&!(!(this.collisionFilterGroup&z.collisionFilterMask)||!(z.collisionFilterGroup&this.collisionFilterMask)))for(var H=p,K=x,et=0,k=z.shapes.length;et<k;et++){var it=z.shapes[et];if(!(R&&!it.collisionResponse)&&(z.quaternion.mult(z.shapeOrientations[et],K),z.quaternion.vmult(z.shapeOffsets[et],H),H.vadd(z.position,H),this.intersectShape(it,K,H,z),this.result._shouldStop))break}},l.prototype.intersectBodies=function(z,b){b&&(this.result=b,this._updateDirection());for(var R=0,H=z.length;!this.result._shouldStop&&R<H;R++)this.intersectBody(z[R])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(z,b,R,H){var K=this.from,et=j(K,this._direction,R);if(!(et>z.boundingSphereRadius)){var k=this[z.type];k&&k.call(this,z,b,R,H)}},new r,new r;var M=new r,_=new r,A=new r,I=new r;new r,new c,l.prototype.intersectBox=function(z,b,R,H){return this.intersectConvex(z.convexPolyhedronRepresentation,b,R,H)},l.prototype[d.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(z,b,R,H){var K=this.from,et=this.to,k=this._direction,it=new r(0,0,1);b.vmult(it,it);var mt=new r;K.vsub(R,mt);var St=mt.dot(it);et.vsub(R,mt);var Et=mt.dot(it);if(!(St*Et>0)&&!(K.distanceTo(et)<St)){var D=it.dot(k);if(!(Math.abs(D)<this.precision)){var ft=new r,ut=new r,Xt=new r;K.vsub(R,ft);var xt=-it.dot(ft)/D;k.scale(xt,ut),K.vadd(ut,Xt),this.reportIntersection(it,Xt,z,H,-1)}}},l.prototype[d.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(z){var b=this.to,R=this.from;z.lowerBound.x=Math.min(b.x,R.x),z.lowerBound.y=Math.min(b.y,R.y),z.lowerBound.z=Math.min(b.z,R.z),z.upperBound.x=Math.max(b.x,R.x),z.upperBound.y=Math.max(b.y,R.y),z.upperBound.z=Math.max(b.z,R.z)};var U={faceList:[0]};l.prototype.intersectHeightfield=function(z,b,R,H){z.data,z.elementSize;var K=new r,et=new l(this.from,this.to);o.pointToLocalFrame(R,b,et.from,et.from),o.pointToLocalFrame(R,b,et.to,et.to);var k=[],it=null,mt=null,St=null,Et=null,D=z.getIndexOfPosition(et.from.x,et.from.y,k,!1);if(D&&(it=k[0],mt=k[1],St=k[0],Et=k[1]),D=z.getIndexOfPosition(et.to.x,et.to.y,k,!1),D&&((it===null||k[0]<it)&&(it=k[0]),(St===null||k[0]>St)&&(St=k[0]),(mt===null||k[1]<mt)&&(mt=k[1]),(Et===null||k[1]>Et)&&(Et=k[1])),it!==null){var ft=[];z.getRectMinMax(it,mt,St,Et,ft),ft[0],ft[1];for(var ut=it;ut<=St;ut++)for(var Xt=mt;Xt<=Et;Xt++){if(this.result._shouldStop||(z.getConvexTrianglePillar(ut,Xt,!1),o.pointToWorldFrame(R,b,z.pillarOffset,K),this.intersectConvex(z.pillarConvex,b,K,H,U),this.result._shouldStop))return;z.getConvexTrianglePillar(ut,Xt,!0),o.pointToWorldFrame(R,b,z.pillarOffset,K),this.intersectConvex(z.pillarConvex,b,K,H,U)}}},l.prototype[d.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var P=new r,E=new r;l.prototype.intersectSphere=function(z,b,R,H){var K=this.from,et=this.to,k=z.radius,it=Math.pow(et.x-K.x,2)+Math.pow(et.y-K.y,2)+Math.pow(et.z-K.z,2),mt=2*((et.x-K.x)*(K.x-R.x)+(et.y-K.y)*(K.y-R.y)+(et.z-K.z)*(K.z-R.z)),St=Math.pow(K.x-R.x,2)+Math.pow(K.y-R.y,2)+Math.pow(K.z-R.z,2)-Math.pow(k,2),Et=Math.pow(mt,2)-4*it*St,D=P,ft=E;if(!(Et<0))if(Et===0)K.lerp(et,Et,D),D.vsub(R,ft),ft.normalize(),this.reportIntersection(ft,D,z,H,-1);else{var ut=(-mt-Math.sqrt(Et))/(2*it),Xt=(-mt+Math.sqrt(Et))/(2*it);if(ut>=0&&ut<=1&&(K.lerp(et,ut,D),D.vsub(R,ft),ft.normalize(),this.reportIntersection(ft,D,z,H,-1)),this.result._shouldStop)return;Xt>=0&&Xt<=1&&(K.lerp(et,Xt,D),D.vsub(R,ft),ft.normalize(),this.reportIntersection(ft,D,z,H,-1))}},l.prototype[d.types.SPHERE]=l.prototype.intersectSphere;var y=new r;new r,new r;var T=new r;l.prototype.intersectConvex=function(b,R,H,K,et){for(var k=y,it=T,mt=et&&et.faceList||null,St=b.faces,Et=b.vertices,D=b.faceNormals,ft=this._direction,ut=this.from,Xt=this.to,xt=ut.distanceTo(Xt),ne=mt?mt.length:St.length,vt=this.result,C=0;!vt._shouldStop&&C<ne;C++){var S=mt?mt[C]:C,Y=St[S],ct=D[S],ht=R,ot=H;it.copy(Et[Y[0]]),ht.vmult(it,it),it.vadd(ot,it),it.vsub(ut,it),ht.vmult(ct,k);var wt=ft.dot(k);if(!(Math.abs(wt)<this.precision)){var Tt=k.dot(it)/wt;if(!(Tt<0)){ft.mult(Tt,M),M.vadd(ut,M),_.copy(Et[Y[0]]),ht.vmult(_,_),ot.vadd(_,_);for(var Ft=1;!vt._shouldStop&&Ft<Y.length-1;Ft++){A.copy(Et[Y[Ft]]),I.copy(Et[Y[Ft+1]]),ht.vmult(A,A),ht.vmult(I,I),ot.vadd(A,A),ot.vadd(I,I);var le=M.distanceTo(ut);!(m(M,_,A,I)||m(M,A,_,I))||le>xt||this.reportIntersection(k,M,b,K,S)}}}}},l.prototype[d.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var B=new r,N=new r,X=new r,q=new r,J=new r,O=new r;new h;var L=[],Q=new o;l.prototype.intersectTrimesh=function(b,R,H,K,et){var k=B,it=L,mt=Q,St=T,Et=N,D=X,ft=q,ut=O,Xt=J;et&&et.faceList;var xt=b.indices;b.vertices,b.faceNormals;var ne=this.from,vt=this.to,C=this._direction;mt.position.copy(H),mt.quaternion.copy(R),o.vectorToLocalFrame(H,R,C,Et),o.pointToLocalFrame(H,R,ne,D),o.pointToLocalFrame(H,R,vt,ft);var S=D.distanceSquared(ft);b.tree.rayQuery(this,mt,it);for(var Y=0,ct=it.length;!this.result._shouldStop&&Y!==ct;Y++){var ht=it[Y];b.getNormal(ht,k),b.getVertex(xt[ht*3],_),_.vsub(D,St);var ot=Et.dot(k),wt=k.dot(St)/ot;if(!(wt<0)){Et.scale(wt,M),M.vadd(D,M),b.getVertex(xt[ht*3+1],A),b.getVertex(xt[ht*3+2],I);var Tt=M.distanceSquared(D);!(m(M,A,_,I)||m(M,_,A,I))||Tt>S||(o.vectorToWorldFrame(R,k,Xt),o.pointToWorldFrame(H,R,M,ut),this.reportIntersection(Xt,ut,b,K,ht))}}it.length=0},l.prototype[d.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(z,b,R,H,K){var et=this.from,k=this.to,it=et.distanceTo(b),mt=this.result;if(!(this.skipBackfaces&&z.dot(this._direction)>0))switch(mt.hitFaceIndex=typeof K<"u"?K:-1,this.mode){case l.ALL:this.hasHit=!0,mt.set(et,k,z,b,R,H,it),mt.hasHit=!0,this.callback(mt);break;case l.CLOSEST:(it<mt.distance||!mt.hasHit)&&(this.hasHit=!0,mt.hasHit=!0,mt.set(et,k,z,b,R,H,it));break;case l.ANY:this.hasHit=!0,mt.hasHit=!0,mt.set(et,k,z,b,R,H,it),mt._shouldStop=!0;break}};var $=new r,F=new r;function j(z,b,R){R.vsub(z,$);var H=$.dot(b);b.mult(H,F),F.vadd(z,F);var K=R.distanceTo(F);return K}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}a.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},a.prototype.abort=function(){this._shouldStop=!0},a.prototype.set=function(o,c,d,h,l,u,f){this.rayFromWorld.copy(o),this.rayToWorld.copy(c),this.hitNormalWorld.copy(d),this.hitPointWorld.copy(h),this.shape=l,this.body=u,this.distance=f}},{"../math/Vec3":30}],11:[function(e,n,s){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=a;function a(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var c=this.axisList;this._addBodyHandler=function(d){c.push(d.body)},this._removeBodyHandler=function(d){var h=c.indexOf(d.body);h!==-1&&c.splice(h,1)},o&&this.setWorld(o)}a.prototype=new r,a.prototype.setWorld=function(o){this.axisList.length=0;for(var c=0;c<o.bodies.length;c++)this.axisList.push(o.bodies[c]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},a.insertionSortX=function(o){for(var c=1,d=o.length;c<d;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.x<=h.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=h}return o},a.insertionSortY=function(o){for(var c=1,d=o.length;c<d;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.y<=h.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=h}return o},a.insertionSortZ=function(o){for(var c=1,d=o.length;c<d;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.z<=h.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=h}return o},a.prototype.collisionPairs=function(o,c,d){var h=this.axisList,l=h.length,u=this.axisIndex,f,v;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==l;f++){var g=h[f];for(v=f+1;v<l;v++){var m=h[v];if(this.needBroadphaseCollision(g,m)){if(!a.checkBounds(g,m,u))break;this.intersectionTest(g,m,c,d)}}}},a.prototype.sortList=function(){for(var o=this.axisList,c=this.axisIndex,d=o.length,h=0;h!==d;h++){var l=o[h];l.aabbNeedsUpdate&&l.computeAABB()}c===0?a.insertionSortX(o):c===1?a.insertionSortY(o):c===2&&a.insertionSortZ(o)},a.checkBounds=function(o,c,d){var h,l;d===0?(h=o.position.x,l=c.position.x):d===1?(h=o.position.y,l=c.position.y):d===2&&(h=o.position.z,l=c.position.z);var u=o.boundingRadius,f=c.boundingRadius,v=h+u,g=l-f;return g<v},a.prototype.autoDetectAxis=function(){for(var o=0,c=0,d=0,h=0,l=0,u=0,f=this.axisList,v=f.length,g=1/v,m=0;m!==v;m++){var p=f[m],x=p.position.x;o+=x,c+=x*x;var M=p.position.y;d+=M,h+=M*M;var _=p.position.z;l+=_,u+=_*_}var A=c-o*o*g,I=h-d*d*g,U=u-l*l*g;A>I?A>U?this.axisIndex=0:this.axisIndex=2:I>U?this.axisIndex=1:this.axisIndex=2},a.prototype.aabbQuery=function(o,c,d){d=d||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,l="x";h===1&&(l="y"),h===2&&(l="z");var u=this.axisList;c.lowerBound[l],c.upperBound[l];for(var f=0;f<u.length;f++){var v=u[f];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(c)&&d.push(v)}return d}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,s){n.exports=d,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function d(h,l,u){u=u||{};var f=typeof u.maxForce<"u"?u.maxForce:1e6,v=u.pivotA?u.pivotA.clone():new c,g=u.pivotB?u.pivotB.clone():new c;this.axisA=u.axisA?u.axisA.clone():new c,this.axisB=u.axisB?u.axisB.clone():new c,r.call(this,h,v,l,g,f),this.collideConnected=!!u.collideConnected,this.angle=typeof u.angle<"u"?u.angle:0;var m=this.coneEquation=new a(h,l,u),p=this.twistEquation=new o(h,l,u);this.twistAngle=typeof u.twistAngle<"u"?u.twistAngle:0,m.maxForce=0,m.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(m,p)}d.prototype=new r,d.constructor=d,new c,new c,d.prototype.update=function(){var h=this.bodyA,l=this.bodyB,u=this.coneEquation,f=this.twistEquation;r.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,u.axisA),l.vectorToWorldFrame(this.axisB,u.axisB),this.axisA.tangents(f.axisA,f.axisA),h.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),l.vectorToWorldFrame(f.axisB,f.axisB),u.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,s){n.exports=a;var r=e("../utils/Utils");function a(o,c,d){d=r.defaults(d,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=c,this.id=a.idCounter++,this.collideConnected=d.collideConnected,d.wakeUpBodies&&(o&&o.wakeUp(),c&&c.wakeUp())}a.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},a.prototype.enable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!0},a.prototype.disable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!1},a.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,s){n.exports=o;var r=e("./Constraint"),a=e("../equations/ContactEquation");function o(c,d,h,l){r.call(this,c,d),typeof h>"u"&&(h=c.position.distanceTo(d.position)),typeof l>"u"&&(l=1e6),this.distance=h;var u=this.distanceEquation=new a(c,d);this.equations.push(u),u.minForce=-l,u.maxForce=l}o.prototype=new r,o.prototype.update=function(){var c=this.bodyA,d=this.bodyB,h=this.distanceEquation,l=this.distance*.5,u=h.ni;d.position.vsub(c.position,u),u.normalize(),u.mult(l,h.ri),u.mult(-l,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,s){n.exports=d,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function d(u,f,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new c,p=v.pivotB?v.pivotB.clone():new c;r.call(this,u,m,f,p,g);var x=this.axisA=v.axisA?v.axisA.clone():new c(1,0,0);x.normalize();var M=this.axisB=v.axisB?v.axisB.clone():new c(1,0,0);M.normalize();var _=this.rotationalEquation1=new a(u,f,v),A=this.rotationalEquation2=new a(u,f,v),I=this.motorEquation=new o(u,f,g);I.enabled=!1,this.equations.push(_,A,I)}d.prototype=new r,d.constructor=d,d.prototype.enableMotor=function(){this.motorEquation.enabled=!0},d.prototype.disableMotor=function(){this.motorEquation.enabled=!1},d.prototype.setMotorSpeed=function(u){this.motorEquation.targetVelocity=u},d.prototype.setMotorMaxForce=function(u){this.motorEquation.maxForce=u,this.motorEquation.minForce=-u};var h=new c,l=new c;d.prototype.update=function(){var u=this.bodyA,f=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,p=h,x=l,M=this.axisA,_=this.axisB;r.prototype.update.call(this),u.quaternion.vmult(M,p),f.quaternion.vmult(_,x),p.tangents(g.axisA,m.axisA),g.axisB.copy(x),m.axisB.copy(x),this.motorEquation.enabled&&(u.quaternion.vmult(this.axisA,v.axisA),f.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,s){n.exports=c,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function c(d,h,l){l=l||{};var u=typeof l.maxForce<"u"?l.maxForce:1e6,f=new o,v=new o,g=new o;d.position.vadd(h.position,g),g.scale(.5,g),h.pointToLocalFrame(g,v),d.pointToLocalFrame(g,f),r.call(this,d,f,h,v,u);var m=this.rotationalEquation1=new a(d,h,l),p=this.rotationalEquation2=new a(d,h,l),x=this.rotationalEquation3=new a(d,h,l);this.equations.push(m,p,x)}c.prototype=new r,c.constructor=c,new o,new o,c.prototype.update=function(){var d=this.bodyA,h=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,u=this.rotationalEquation2,f=this.rotationalEquation3;r.prototype.update.call(this),d.vectorToWorldFrame(o.UNIT_X,l.axisA),h.vectorToWorldFrame(o.UNIT_Y,l.axisB),d.vectorToWorldFrame(o.UNIT_Y,u.axisA),h.vectorToWorldFrame(o.UNIT_Z,u.axisB),d.vectorToWorldFrame(o.UNIT_Z,f.axisA),h.vectorToWorldFrame(o.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,s){n.exports=c;var r=e("./Constraint"),a=e("../equations/ContactEquation"),o=e("../math/Vec3");function c(d,h,l,u,f){r.call(this,d,l),f=typeof f<"u"?f:1e6,this.pivotA=h?h.clone():new o,this.pivotB=u?u.clone():new o;var v=this.equationX=new a(d,l),g=this.equationY=new a(d,l),m=this.equationZ=new a(d,l);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-f,v.maxForce=g.maxForce=m.maxForce=f,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}c.prototype=new r,c.prototype.update=function(){var d=this.bodyA,h=this.bodyB,l=this.equationX,u=this.equationY,f=this.equationZ;d.quaternion.vmult(this.pivotA,l.ri),h.quaternion.vmult(this.pivotB,l.rj),u.ri.copy(l.ri),u.rj.copy(l.rj),f.ri.copy(l.ri),f.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,l,u){u=u||{};var f=typeof u.maxForce<"u"?u.maxForce:1e6;a.call(this,h,l,-f,f),this.axisA=u.axisA?u.axisA.clone():new r(1,0,0),this.axisB=u.axisB?u.axisB.clone():new r(0,1,0),this.angle=typeof u.angle<"u"?u.angle:0}o.prototype=new a,o.prototype.constructor=o;var c=new r,d=new r;o.prototype.computeB=function(h){var l=this.a,u=this.b,f=this.axisA,v=this.axisB,g=c,m=d,p=this.jacobianElementA,x=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),x.rotational.copy(g);var M=Math.cos(this.angle)-f.dot(v),_=this.computeGW(),A=this.computeGiMf(),I=-M*l-_*u-h*A;return I}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(m,p,x){x=typeof x<"u"?x:1e6,r.call(this,m,p,0,x),this.restitution=0,this.ri=new a,this.rj=new a,this.ni=new a}o.prototype=new r,o.prototype.constructor=o;var c=new a,d=new a,h=new a;o.prototype.computeB=function(m){var p=this.a,x=this.b,M=this.bi,_=this.bj,A=this.ri,I=this.rj,U=c,P=d,E=M.velocity,y=M.angularVelocity;M.force,M.torque;var T=_.velocity,B=_.angularVelocity;_.force,_.torque;var N=h,X=this.jacobianElementA,q=this.jacobianElementB,J=this.ni;A.cross(J,U),I.cross(J,P),J.negate(X.spatial),U.negate(X.rotational),q.spatial.copy(J),q.rotational.copy(P),N.copy(_.position),N.vadd(I,N),N.vsub(M.position,N),N.vsub(A,N);var O=J.dot(N),L=this.restitution+1,Q=L*T.dot(J)-L*E.dot(J)+B.dot(P)-y.dot(U),$=this.computeGiMf(),F=-O*p-Q*x-m*$;return F};var l=new a,u=new a,f=new a,v=new a,g=new a;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,p=u,x=f,M=v,_=g;return this.bi.position.vadd(this.ri,x),this.bj.position.vadd(this.rj,M),this.bi.getVelocityAtWorldPoint(x,m),this.bj.getVelocityAtWorldPoint(M,p),m.vsub(p,_),this.ni.dot(_)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,s){n.exports=o;var r=e("../math/JacobianElement"),a=e("../math/Vec3");function o(g,m,p,x){this.id=o.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof x>"u"?1e6:x,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,p){var x=m,M=g,_=p;this.a=4/(_*(1+4*x)),this.b=4*x/(1+4*x),this.eps=4/(_*_*M*(1+4*x))},o.prototype.computeB=function(g,m,p){var x=this.computeGW(),M=this.computeGq(),_=this.computeGiMf();return-M*g-x*m-_*p},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,M=p.position,_=x.position;return g.spatial.dot(M)+m.spatial.dot(_)};var c=new a;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,M=p.velocity,_=x.velocity,A=p.angularVelocity||c,I=x.angularVelocity||c;return g.multiplyVectors(M,A)+m.multiplyVectors(_,I)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,M=p.vlambda,_=x.vlambda,A=p.wlambda||c,I=x.wlambda||c;return g.multiplyVectors(M,A)+m.multiplyVectors(_,I)};var d=new a,h=new a,l=new a,u=new a;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,M=p.force,_=p.torque,A=x.force,I=x.torque,U=p.invMassSolve,P=x.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(_,l):l.set(0,0,0),x.invInertiaWorldSolve?x.invInertiaWorldSolve.vmult(I,u):u.set(0,0,0),M.mult(U,d),A.mult(P,h),g.multiplyVectors(d,l)+m.multiplyVectors(h,u)};var f=new a;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,M=p.invMassSolve,_=x.invMassSolve,A=p.invInertiaWorldSolve,I=x.invInertiaWorldSolve,U=M+_;return A&&(A.vmult(g.rotational,f),U+=f.dot(g.rotational)),I&&(I.vmult(m.rotational,f),U+=f.dot(m.rotational)),U};var v=new a;new a,new a,new a,new a,new a,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,p=this.jacobianElementB,x=this.bi,M=this.bj,_=v;m.spatial.mult(x.invMassSolve*g,_),x.vlambda.vadd(_,x.vlambda),p.spatial.mult(M.invMassSolve*g,_),M.vlambda.vadd(_,M.vlambda),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(m.rotational,_),_.mult(g,_),x.wlambda.vadd(_,x.wlambda)),M.invInertiaWorldSolve&&(M.invInertiaWorldSolve.vmult(p.rotational,_),_.mult(g,_),M.wlambda.vadd(_,M.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(h,l,u){r.call(this,h,l,-u,u),this.ri=new a,this.rj=new a,this.t=new a}o.prototype=new r,o.prototype.constructor=o;var c=new a,d=new a;o.prototype.computeB=function(h){this.a;var l=this.b;this.bi,this.bj;var u=this.ri,f=this.rj,v=c,g=d,m=this.t;u.cross(m,v),f.cross(m,g);var p=this.jacobianElementA,x=this.jacobianElementB;m.negate(p.spatial),v.negate(p.rotational),x.spatial.copy(m),x.rotational.copy(g);var M=this.computeGW(),_=this.computeGiMf(),A=-M*l-h*_;return A}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,l,u){u=u||{};var f=typeof u.maxForce<"u"?u.maxForce:1e6;a.call(this,h,l,-f,f),this.axisA=u.axisA?u.axisA.clone():new r(1,0,0),this.axisB=u.axisB?u.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new a,o.prototype.constructor=o;var c=new r,d=new r;o.prototype.computeB=function(h){var l=this.a,u=this.b,f=this.axisA,v=this.axisB,g=c,m=d,p=this.jacobianElementA,x=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),x.rotational.copy(g);var M=Math.cos(this.maxAngle)-f.dot(v),_=this.computeGW(),A=this.computeGiMf(),I=-M*l-_*u-h*A;return I}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(c,d,h){h=typeof h<"u"?h:1e6,a.call(this,c,d,-h,h),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new a,o.prototype.constructor=o,o.prototype.computeB=function(c){this.a;var d=this.b;this.bi,this.bj;var h=this.axisA,l=this.axisB,u=this.jacobianElementA,f=this.jacobianElementB;u.rotational.copy(h),l.negate(f.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*d-c*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,s){var r=e("../utils/Utils");n.exports=a;function a(o,c,d){d=r.defaults(d,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=a.idCounter++,this.materials=[o,c],this.friction=d.friction,this.restitution=d.restitution,this.contactEquationStiffness=d.contactEquationStiffness,this.contactEquationRelaxation=d.contactEquationRelaxation,this.frictionEquationStiffness=d.frictionEquationStiffness,this.frictionEquationRelaxation=d.frictionEquationRelaxation}a.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,s){n.exports=r;function r(a){var o="";a=a||{},typeof a=="string"?(o=a,a={}):typeof a=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof a.friction<"u"?a.friction:-1,this.restitution=typeof a.restitution<"u"?a.restitution:-1}r.idCounter=0},{}],26:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(){this.spatial=new r,this.rotational=new r}a.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},a.prototype.multiplyVectors=function(o,c){return o.dot(this.spatial)+c.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}a.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},a.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},a.prototype.setTrace=function(o){var c=this.elements;c[0]=o.x,c[4]=o.y,c[8]=o.z},a.prototype.getTrace=function(c){var c=c||new r,d=this.elements;c.x=d[0],c.y=d[4],c.z=d[8]},a.prototype.vmult=function(o,c){c=c||new r;var d=this.elements,h=o.x,l=o.y,u=o.z;return c.x=d[0]*h+d[1]*l+d[2]*u,c.y=d[3]*h+d[4]*l+d[5]*u,c.z=d[6]*h+d[7]*l+d[8]*u,c},a.prototype.smult=function(o){for(var c=0;c<this.elements.length;c++)this.elements[c]*=o},a.prototype.mmult=function(o,c){for(var d=c||new a,h=0;h<3;h++)for(var l=0;l<3;l++){for(var u=0,f=0;f<3;f++)u+=o.elements[h+f*3]*this.elements[f+l*3];d.elements[h+l*3]=u}return d},a.prototype.scale=function(o,c){c=c||new a;for(var d=this.elements,h=c.elements,l=0;l!==3;l++)h[3*l+0]=o.x*d[3*l+0],h[3*l+1]=o.y*d[3*l+1],h[3*l+2]=o.z*d[3*l+2];return c},a.prototype.solve=function(o,c){c=c||new r;for(var d=3,h=4,l=[],u=0;u<d*h;u++)l.push(0);var u,f;for(u=0;u<3;u++)for(f=0;f<3;f++)l[u+h*f]=this.elements[u+3*f];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var v=3,g=v,m,p=4,x;do{if(u=g-v,l[u+h*u]===0){for(f=u+1;f<g;f++)if(l[u+h*f]!==0){m=p;do x=p-m,l[x+h*u]+=l[x+h*f];while(--m);break}}if(l[u+h*u]!==0)for(f=u+1;f<g;f++){var M=l[u+h*f]/l[u+h*u];m=p;do x=p-m,l[x+h*f]=x<=u?0:l[x+h*f]-l[x+h*u]*M;while(--m)}}while(--v);if(c.z=l[2*h+3]/l[2*h+2],c.y=(l[1*h+3]-l[1*h+2]*c.z)/l[1*h+1],c.x=(l[0*h+3]-l[0*h+2]*c.z-l[0*h+1]*c.y)/l[0*h+0],isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===1/0||c.y===1/0||c.z===1/0)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return c},a.prototype.e=function(o,c,d){if(d===void 0)return this.elements[c+3*o];this.elements[c+3*o]=d},a.prototype.copy=function(o){for(var c=0;c<o.elements.length;c++)this.elements[c]=o.elements[c];return this},a.prototype.toString=function(){for(var o="",c=",",d=0;d<9;d++)o+=this.elements[d]+c;return o},a.prototype.reverse=function(o){o=o||new a;for(var c=3,d=6,h=[],l=0;l<c*d;l++)h.push(0);var l,u;for(l=0;l<3;l++)for(u=0;u<3;u++)h[l+d*u]=this.elements[l+3*u];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var f=3,v=f,g,m=d,p;do{if(l=v-f,h[l+d*l]===0){for(u=l+1;u<v;u++)if(h[l+d*u]!==0){g=m;do p=m-g,h[p+d*l]+=h[p+d*u];while(--g);break}}if(h[l+d*l]!==0)for(u=l+1;u<v;u++){var x=h[l+d*u]/h[l+d*l];g=m;do p=m-g,h[p+d*u]=p<=l?0:h[p+d*u]-h[p+d*l]*x;while(--g)}}while(--f);l=2;do{u=l-1;do{var x=h[l+d*u]/h[l+d*l];g=d;do p=d-g,h[p+d*u]=h[p+d*u]-h[p+d*l]*x;while(--g)}while(u--)}while(--l);l=2;do{var x=1/h[l+d*l];g=d;do p=d-g,h[p+d*l]=h[p+d*l]*x;while(--g)}while(l--);l=2;do{u=2;do{if(p=h[c+u+d*l],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,u,p)}while(u--)}while(l--);return o},a.prototype.setRotationFromQuaternion=function(o){var c=o.x,d=o.y,h=o.z,l=o.w,u=c+c,f=d+d,v=h+h,g=c*u,m=c*f,p=c*v,x=d*f,M=d*v,_=h*v,A=l*u,I=l*f,U=l*v,P=this.elements;return P[3*0+0]=1-(x+_),P[3*0+1]=m-U,P[3*0+2]=p+I,P[3*1+0]=m+U,P[3*1+1]=1-(g+_),P[3*1+2]=M-A,P[3*2+0]=p-I,P[3*2+1]=M+A,P[3*2+2]=1-(g+x),this},a.prototype.transpose=function(o){o=o||new a;for(var c=o.elements,d=this.elements,h=0;h!==3;h++)for(var l=0;l!==3;l++)c[3*h+l]=d[3*l+h];return o}},{"./Vec3":30}],28:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(u,f,v,g){this.x=u!==void 0?u:0,this.y=f!==void 0?f:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}a.prototype.set=function(u,f,v,g){this.x=u,this.y=f,this.z=v,this.w=g},a.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},a.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},a.prototype.setFromAxisAngle=function(u,f){var v=Math.sin(f*.5);this.x=u.x*v,this.y=u.y*v,this.z=u.z*v,this.w=Math.cos(f*.5)},a.prototype.toAxisAngle=function(u){u=u||new r,this.normalize();var f=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(u.x=this.x,u.y=this.y,u.z=this.z):(u.x=this.x/v,u.y=this.y/v,u.z=this.z/v),[u,f]};var o=new r,c=new r;a.prototype.setFromVectors=function(u,f){if(u.isAntiparallelTo(f)){var v=o,g=c;u.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=u.cross(f);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(u.norm(),2)*Math.pow(f.norm(),2))+u.dot(f),this.normalize()}};var d=new r,h=new r,l=new r;a.prototype.mult=function(u,f){f=f||new a;var v=this.w,g=d,m=h,p=l;return g.set(this.x,this.y,this.z),m.set(u.x,u.y,u.z),f.w=v*u.w-g.dot(m),g.cross(m,p),f.x=v*m.x+u.w*g.x+p.x,f.y=v*m.y+u.w*g.y+p.y,f.z=v*m.z+u.w*g.z+p.z,f},a.prototype.inverse=function(u){var f=this.x,v=this.y,g=this.z,m=this.w;u=u||new a,this.conjugate(u);var p=1/(f*f+v*v+g*g+m*m);return u.x*=p,u.y*=p,u.z*=p,u.w*=p,u},a.prototype.conjugate=function(u){return u=u||new a,u.x=-this.x,u.y=-this.y,u.z=-this.z,u.w=this.w,u},a.prototype.normalize=function(){var u=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);u===0?(this.x=0,this.y=0,this.z=0,this.w=0):(u=1/u,this.x*=u,this.y*=u,this.z*=u,this.w*=u)},a.prototype.normalizeFast=function(){var u=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;u===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=u,this.y*=u,this.z*=u,this.w*=u)},a.prototype.vmult=function(u,f){f=f||new r;var v=u.x,g=u.y,m=u.z,p=this.x,x=this.y,M=this.z,_=this.w,A=_*v+x*m-M*g,I=_*g+M*v-p*m,U=_*m+p*g-x*v,P=-p*v-x*g-M*m;return f.x=A*_+P*-p+I*-M-U*-x,f.y=I*_+P*-x+U*-p-A*-M,f.z=U*_+P*-M+A*-x-I*-p,f},a.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this.w=u.w,this},a.prototype.toEuler=function(u,f){f=f||"YZX";var v,g,m,p=this.x,x=this.y,M=this.z,_=this.w;switch(f){case"YZX":var A=p*x+M*_;if(A>.499&&(v=2*Math.atan2(p,_),g=Math.PI/2,m=0),A<-.499&&(v=-2*Math.atan2(p,_),g=-Math.PI/2,m=0),isNaN(v)){var I=p*p,U=x*x,P=M*M;v=Math.atan2(2*x*_-2*p*M,1-2*U-2*P),g=Math.asin(2*A),m=Math.atan2(2*p*_-2*x*M,1-2*I-2*P)}break;default:throw new Error("Euler order "+f+" not supported yet.")}u.y=v,u.z=g,u.x=m},a.prototype.setFromEuler=function(u,f,v,g){g=g||"XYZ";var m=Math.cos(u/2),p=Math.cos(f/2),x=Math.cos(v/2),M=Math.sin(u/2),_=Math.sin(f/2),A=Math.sin(v/2);return g==="XYZ"?(this.x=M*p*x+m*_*A,this.y=m*_*x-M*p*A,this.z=m*p*A+M*_*x,this.w=m*p*x-M*_*A):g==="YXZ"?(this.x=M*p*x+m*_*A,this.y=m*_*x-M*p*A,this.z=m*p*A-M*_*x,this.w=m*p*x+M*_*A):g==="ZXY"?(this.x=M*p*x-m*_*A,this.y=m*_*x+M*p*A,this.z=m*p*A+M*_*x,this.w=m*p*x-M*_*A):g==="ZYX"?(this.x=M*p*x-m*_*A,this.y=m*_*x+M*p*A,this.z=m*p*A-M*_*x,this.w=m*p*x+M*_*A):g==="YZX"?(this.x=M*p*x+m*_*A,this.y=m*_*x+M*p*A,this.z=m*p*A-M*_*x,this.w=m*p*x-M*_*A):g==="XZY"&&(this.x=M*p*x-m*_*A,this.y=m*_*x-M*p*A,this.z=m*p*A+M*_*x,this.w=m*p*x+M*_*A),this},a.prototype.clone=function(){return new a(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,s){var r=e("./Vec3"),a=e("./Quaternion");n.exports=o;function o(d){d=d||{},this.position=new r,d.position&&this.position.copy(d.position),this.quaternion=new a,d.quaternion&&this.quaternion.copy(d.quaternion)}var c=new a;o.pointToLocalFrame=function(d,h,l,f){var f=f||new r;return l.vsub(d,f),h.conjugate(c),c.vmult(f,f),f},o.prototype.pointToLocal=function(d,h){return o.pointToLocalFrame(this.position,this.quaternion,d,h)},o.pointToWorldFrame=function(d,h,l,f){var f=f||new r;return h.vmult(l,f),f.vadd(d,f),f},o.prototype.pointToWorld=function(d,h){return o.pointToWorldFrame(this.position,this.quaternion,d,h)},o.prototype.vectorToWorldFrame=function(d,l){var l=l||new r;return this.quaternion.vmult(d,l),l},o.vectorToWorldFrame=function(d,h,l){return d.vmult(h,l),l},o.vectorToLocalFrame=function(d,h,l,f){var f=f||new r;return h.w*=-1,h.vmult(l,f),h.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,s){n.exports=a;var r=e("./Mat3");function a(h,l,u){this.x=h||0,this.y=l||0,this.z=u||0}a.ZERO=new a(0,0,0),a.UNIT_X=new a(1,0,0),a.UNIT_Y=new a(0,1,0),a.UNIT_Z=new a(0,0,1),a.prototype.cross=function(h,l){var u=h.x,f=h.y,v=h.z,g=this.x,m=this.y,p=this.z;return l=l||new a,l.x=m*v-p*f,l.y=p*u-g*v,l.z=g*f-m*u,l},a.prototype.set=function(h,l,u){return this.x=h,this.y=l,this.z=u,this},a.prototype.setZero=function(){this.x=this.y=this.z=0},a.prototype.vadd=function(h,l){if(l)l.x=h.x+this.x,l.y=h.y+this.y,l.z=h.z+this.z;else return new a(this.x+h.x,this.y+h.y,this.z+h.z)},a.prototype.vsub=function(h,l){if(l)l.x=this.x-h.x,l.y=this.y-h.y,l.z=this.z-h.z;else return new a(this.x-h.x,this.y-h.y,this.z-h.z)},a.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},a.prototype.normalize=function(){var h=this.x,l=this.y,u=this.z,f=Math.sqrt(h*h+l*l+u*u);if(f>0){var v=1/f;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return f},a.prototype.unit=function(h){h=h||new a;var l=this.x,u=this.y,f=this.z,v=Math.sqrt(l*l+u*u+f*f);return v>0?(v=1/v,h.x=l*v,h.y=u*v,h.z=f*v):(h.x=1,h.y=0,h.z=0),h},a.prototype.norm=function(){var h=this.x,l=this.y,u=this.z;return Math.sqrt(h*h+l*l+u*u)},a.prototype.length=a.prototype.norm,a.prototype.norm2=function(){return this.dot(this)},a.prototype.lengthSquared=a.prototype.norm2,a.prototype.distanceTo=function(h){var l=this.x,u=this.y,f=this.z,v=h.x,g=h.y,m=h.z;return Math.sqrt((v-l)*(v-l)+(g-u)*(g-u)+(m-f)*(m-f))},a.prototype.distanceSquared=function(h){var l=this.x,u=this.y,f=this.z,v=h.x,g=h.y,m=h.z;return(v-l)*(v-l)+(g-u)*(g-u)+(m-f)*(m-f)},a.prototype.mult=function(h,l){l=l||new a;var u=this.x,f=this.y,v=this.z;return l.x=h*u,l.y=h*f,l.z=h*v,l},a.prototype.scale=a.prototype.mult,a.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},a.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},a.prototype.negate=function(h){return h=h||new a,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var o=new a,c=new a;a.prototype.tangents=function(h,l){var u=this.norm();if(u>0){var f=o,v=1/u;f.set(this.x*v,this.y*v,this.z*v);var g=c;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,h)):(g.set(0,1,0),f.cross(g,h)),f.cross(h,l)}else h.set(1,0,0),l.set(0,1,0)},a.prototype.toString=function(){return this.x+","+this.y+","+this.z},a.prototype.toArray=function(){return[this.x,this.y,this.z]},a.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},a.prototype.lerp=function(h,l,u){var f=this.x,v=this.y,g=this.z;u.x=f+(h.x-f)*l,u.y=v+(h.y-v)*l,u.z=g+(h.z-g)*l},a.prototype.almostEquals=function(h,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-h.x)>l||Math.abs(this.y-h.y)>l||Math.abs(this.z-h.z)>l)},a.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var d=new a;a.prototype.isAntiparallelTo=function(h,l){return this.negate(d),d.almostEquals(h,l)},a.prototype.clone=function(){return new a(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,s){n.exports=l;var r=e("../utils/EventTarget");e("../shapes/Shape");var a=e("../math/Vec3"),o=e("../math/Mat3"),c=e("../math/Quaternion");e("../material/Material");var d=e("../collision/AABB"),h=e("../shapes/Box");function l(T){T=T||{},r.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new a,this.collisionFilterGroup=typeof T.collisionFilterGroup=="number"?T.collisionFilterGroup:1,this.collisionFilterMask=typeof T.collisionFilterMask=="number"?T.collisionFilterMask:1,this.collisionResponse=!0,this.position=new a,T.position&&this.position.copy(T.position),this.previousPosition=new a,this.initPosition=new a,this.velocity=new a,T.velocity&&this.velocity.copy(T.velocity),this.initVelocity=new a,this.force=new a;var B=typeof T.mass=="number"?T.mass:0;this.mass=B,this.invMass=B>0?1/B:0,this.material=T.material||null,this.linearDamping=typeof T.linearDamping=="number"?T.linearDamping:.01,this.type=B<=0?l.STATIC:l.DYNAMIC,typeof T.type==typeof l.STATIC&&(this.type=T.type),this.allowSleep=typeof T.allowSleep<"u"?T.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof T.sleepSpeedLimit<"u"?T.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof T.sleepTimeLimit<"u"?T.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new a,this.quaternion=new c,T.quaternion&&this.quaternion.copy(T.quaternion),this.initQuaternion=new c,this.angularVelocity=new a,T.angularVelocity&&this.angularVelocity.copy(T.angularVelocity),this.initAngularVelocity=new a,this.interpolatedPosition=new a,this.interpolatedQuaternion=new c,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new a,this.invInertia=new a,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new a,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof T.fixedRotation<"u"?T.fixedRotation:!1,this.angularDamping=typeof T.angularDamping<"u"?T.angularDamping:.01,this.aabb=new d,this.aabbNeedsUpdate=!0,this.wlambda=new a,T.shape&&this.addShape(T.shape),this.updateMassProperties()}l.prototype=new r,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var T=this.sleepState;this.sleepState=0,T===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(T){if(this.allowSleep){var B=this.sleepState,N=this.velocity.norm2()+this.angularVelocity.norm2(),X=Math.pow(this.sleepSpeedLimit,2);B===l.AWAKE&&N<X?(this.sleepState=l.SLEEPY,this.timeLastSleepy=T,this.dispatchEvent(l.sleepyEvent)):B===l.SLEEPY&&N>X?this.wakeUp():B===l.SLEEPY&&T-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(T,N){var N=N||new a;return T.vsub(this.position,N),this.quaternion.conjugate().vmult(N,N),N},l.prototype.vectorToLocalFrame=function(T,N){var N=N||new a;return this.quaternion.conjugate().vmult(T,N),N},l.prototype.pointToWorldFrame=function(T,N){var N=N||new a;return this.quaternion.vmult(T,N),N.vadd(this.position,N),N},l.prototype.vectorToWorldFrame=function(T,N){var N=N||new a;return this.quaternion.vmult(T,N),N};var u=new a,f=new c;l.prototype.addShape=function(T,B,N){var X=new a,q=new c;return B&&X.copy(B),N&&q.copy(N),this.shapes.push(T),this.shapeOffsets.push(X),this.shapeOrientations.push(q),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var T=this.shapes,B=this.shapeOffsets,N=T.length,X=0,q=0;q!==N;q++){var J=T[q];J.updateBoundingSphereRadius();var O=B[q].norm(),L=J.boundingSphereRadius;O+L>X&&(X=O+L)}this.boundingRadius=X};var v=new d;l.prototype.computeAABB=function(){for(var T=this.shapes,B=this.shapeOffsets,N=this.shapeOrientations,X=T.length,q=u,J=f,O=this.quaternion,L=this.aabb,Q=v,$=0;$!==X;$++){var F=T[$];N[$].mult(O,J),J.vmult(B[$],q),q.vadd(this.position,q),F.calculateWorldAABB(q,J,Q.lowerBound,Q.upperBound),$===0?L.copy(Q):L.extend(Q)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(T){var B=this.invInertia;if(!(B.x===B.y&&B.y===B.z&&!T)){var N=g,X=m;N.setRotationFromQuaternion(this.quaternion),N.transpose(X),N.scale(B,N),N.mmult(X,this.invInertiaWorld)}};var p=new a,x=new a;l.prototype.applyForce=function(T,B){if(this.type===l.DYNAMIC){var N=p;B.vsub(this.position,N);var X=x;N.cross(T,X),this.force.vadd(T,this.force),this.torque.vadd(X,this.torque)}};var M=new a,_=new a;l.prototype.applyLocalForce=function(T,B){if(this.type===l.DYNAMIC){var N=M,X=_;this.vectorToWorldFrame(T,N),this.pointToWorldFrame(B,X),this.applyForce(N,X)}};var A=new a,I=new a,U=new a;l.prototype.applyImpulse=function(T,B){if(this.type===l.DYNAMIC){var N=A;B.vsub(this.position,N);var X=I;X.copy(T),X.mult(this.invMass,X),this.velocity.vadd(X,this.velocity);var q=U;N.cross(T,q),this.invInertiaWorld.vmult(q,q),this.angularVelocity.vadd(q,this.angularVelocity)}};var P=new a,E=new a;l.prototype.applyLocalImpulse=function(T,B){if(this.type===l.DYNAMIC){var N=P,X=E;this.vectorToWorldFrame(T,N),this.pointToWorldFrame(B,X),this.applyImpulse(N,X)}};var y=new a;l.prototype.updateMassProperties=function(){var T=y;this.invMass=this.mass>0?1/this.mass:0;var B=this.inertia,N=this.fixedRotation;this.computeAABB(),T.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(T,this.mass,B),this.invInertia.set(B.x>0&&!N?1/B.x:0,B.y>0&&!N?1/B.y:0,B.z>0&&!N?1/B.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(T,B){var N=new a;return T.vsub(this.position,N),this.angularVelocity.cross(N,B),this.velocity.vadd(B,B),B}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,s){e("./Body");var r=e("../math/Vec3"),a=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),c=e("../objects/WheelInfo");n.exports=d;function d(O){this.chassisBody=O.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof O.indexRightAxis<"u"?O.indexRightAxis:1,this.indexForwardAxis=typeof O.indexForwardAxis<"u"?O.indexForwardAxis:0,this.indexUpAxis=typeof O.indexUpAxis<"u"?O.indexUpAxis:2}new r,new r,new r;var h=new r,l=new r,u=new r;new o,d.prototype.addWheel=function(O){O=O||{};var L=new c(O),Q=this.wheelInfos.length;return this.wheelInfos.push(L),Q},d.prototype.setSteeringValue=function(O,L){var Q=this.wheelInfos[L];Q.steering=O},new r,d.prototype.applyEngineForce=function(O,L){this.wheelInfos[L].engineForce=O},d.prototype.setBrake=function(O,L){this.wheelInfos[L].brake=O},d.prototype.addToWorld=function(O){this.constraints,O.add(this.chassisBody);var L=this;this.preStepCallback=function(){L.updateVehicle(O.dt)},O.addEventListener("preStep",this.preStepCallback),this.world=O},d.prototype.getVehicleAxisWorld=function(O,L){L.set(O===0?1:0,O===1?1:0,O===2?1:0),this.chassisBody.vectorToWorldFrame(L,L)},d.prototype.updateVehicle=function(O){for(var L=this.wheelInfos,Q=L.length,$=this.chassisBody,F=0;F<Q;F++)this.updateWheelTransform(F);this.currentVehicleSpeedKmHour=3.6*$.velocity.norm();var j=new r;this.getVehicleAxisWorld(this.indexForwardAxis,j),j.dot($.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var F=0;F<Q;F++)this.castRay(L[F]);this.updateSuspension(O);for(var z=new r,b=new r,F=0;F<Q;F++){var R=L[F],H=R.suspensionForce;H>R.maxSuspensionForce&&(H=R.maxSuspensionForce),R.raycastResult.hitNormalWorld.scale(H*O,z),R.raycastResult.hitPointWorld.vsub($.position,b),$.applyImpulse(z,R.raycastResult.hitPointWorld)}this.updateFriction(O);var K=new r,et=new r,k=new r;for(F=0;F<Q;F++){var R=L[F];$.getVelocityAtWorldPoint(R.chassisConnectionPointWorld,k);var it=1;switch(this.indexUpAxis){case 1:it=-1;break}if(R.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,et);var mt=et.dot(R.raycastResult.hitNormalWorld);R.raycastResult.hitNormalWorld.scale(mt,K),et.vsub(K,et);var St=et.dot(k);R.deltaRotation=it*St*O/R.radius}(R.sliding||!R.isInContact)&&R.engineForce!==0&&R.useCustomSlidingRotationalSpeed&&(R.deltaRotation=(R.engineForce>0?1:-1)*R.customSlidingRotationalSpeed*O),Math.abs(R.brake)>Math.abs(R.engineForce)&&(R.deltaRotation=0),R.rotation+=R.deltaRotation,R.deltaRotation*=.99}},d.prototype.updateSuspension=function(O){for(var L=this.chassisBody,Q=L.mass,$=this.wheelInfos,F=$.length,j=0;j<F;j++){var z=$[j];if(z.isInContact){var b,R=z.suspensionRestLength,H=z.suspensionLength,K=R-H;b=z.suspensionStiffness*K*z.clippedInvContactDotSuspension;var et=z.suspensionRelativeVelocity,k;et<0?k=z.dampingCompression:k=z.dampingRelaxation,b-=k*et,z.suspensionForce=b*Q,z.suspensionForce<0&&(z.suspensionForce=0)}else z.suspensionForce=0}},d.prototype.removeFromWorld=function(O){this.constraints,O.remove(this.chassisBody),O.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new r,v=new r;d.prototype.castRay=function(O){var L=f,Q=v;this.updateWheelTransformWorld(O);var $=this.chassisBody,F=-1,j=O.suspensionRestLength+O.radius;O.directionWorld.scale(j,L);var z=O.chassisConnectionPointWorld;z.vadd(L,Q);var b=O.raycastResult;b.reset();var R=$.collisionResponse;$.collisionResponse=!1,this.world.rayTest(z,Q,b),$.collisionResponse=R;var H=b.body;if(O.raycastResult.groundObject=0,H){F=b.distance,O.raycastResult.hitNormalWorld=b.hitNormalWorld,O.isInContact=!0;var K=b.distance;O.suspensionLength=K-O.radius;var et=O.suspensionRestLength-O.maxSuspensionTravel,k=O.suspensionRestLength+O.maxSuspensionTravel;O.suspensionLength<et&&(O.suspensionLength=et),O.suspensionLength>k&&(O.suspensionLength=k,O.raycastResult.reset());var it=O.raycastResult.hitNormalWorld.dot(O.directionWorld),mt=new r;$.getVelocityAtWorldPoint(O.raycastResult.hitPointWorld,mt);var St=O.raycastResult.hitNormalWorld.dot(mt);if(it>=-.1)O.suspensionRelativeVelocity=0,O.clippedInvContactDotSuspension=1/.1;else{var Et=-1/it;O.suspensionRelativeVelocity=St*Et,O.clippedInvContactDotSuspension=Et}}else O.suspensionLength=O.suspensionRestLength+0*O.maxSuspensionTravel,O.suspensionRelativeVelocity=0,O.directionWorld.scale(-1,O.raycastResult.hitNormalWorld),O.clippedInvContactDotSuspension=1;return F},d.prototype.updateWheelTransformWorld=function(O){O.isInContact=!1;var L=this.chassisBody;L.pointToWorldFrame(O.chassisConnectionPointLocal,O.chassisConnectionPointWorld),L.vectorToWorldFrame(O.directionLocal,O.directionWorld),L.vectorToWorldFrame(O.axleLocal,O.axleWorld)},d.prototype.updateWheelTransform=function(O){var L=h,Q=l,$=u,F=this.wheelInfos[O];this.updateWheelTransformWorld(F),F.directionLocal.scale(-1,L),Q.copy(F.axleLocal),L.cross(Q,$),$.normalize(),Q.normalize();var j=F.steering,z=new a;z.setFromAxisAngle(L,j);var b=new a;b.setFromAxisAngle(Q,F.rotation);var R=F.worldTransform.quaternion;this.chassisBody.quaternion.mult(z,R),R.mult(b,R),R.normalize();var H=F.worldTransform.position;H.copy(F.directionWorld),H.scale(F.suspensionLength,H),H.vadd(F.chassisConnectionPointWorld,H)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];d.prototype.getWheelTransformWorld=function(O){return this.wheelInfos[O].worldTransform};var m=new r,p=[],x=[],M=1;d.prototype.updateFriction=function(O){for(var L=m,Q=this.wheelInfos,$=Q.length,F=this.chassisBody,j=x,z=p,b=0;b<$;b++){var R=Q[b],H=R.raycastResult.body;R.sideImpulse=0,R.forwardImpulse=0,j[b]||(j[b]=new r),z[b]||(z[b]=new r)}for(var b=0;b<$;b++){var R=Q[b],H=R.raycastResult.body;if(H){var K=z[b],et=this.getWheelTransformWorld(b);et.vectorToWorldFrame(g[this.indexRightAxis],K);var k=R.raycastResult.hitNormalWorld,it=K.dot(k);k.scale(it,L),K.vsub(L,K),K.normalize(),k.cross(K,j[b]),j[b].normalize(),R.sideImpulse=J(F,R.raycastResult.hitPointWorld,H,R.raycastResult.hitPointWorld,K),R.sideImpulse*=M}}var mt=1,St=.5;this.sliding=!1;for(var b=0;b<$;b++){var R=Q[b],H=R.raycastResult.body,Et=0;if(R.slipInfo=1,H){var D=0,ft=R.brake?R.brake:D;Et=U(F,H,R.raycastResult.hitPointWorld,j[b],ft),Et+=R.engineForce*O;var ut=ft/Et;R.slipInfo*=ut}if(R.forwardImpulse=0,R.skidInfo=1,H){R.skidInfo=1;var Xt=R.suspensionForce*O*R.frictionSlip,xt=Xt,ne=Xt*xt;R.forwardImpulse=Et;var vt=R.forwardImpulse*St,C=R.sideImpulse*mt,S=vt*vt+C*C;if(R.sliding=!1,S>ne){this.sliding=!0,R.sliding=!0;var ut=Xt/Math.sqrt(S);R.skidInfo*=ut}}}if(this.sliding)for(var b=0;b<$;b++){var R=Q[b];R.sideImpulse!==0&&R.skidInfo<1&&(R.forwardImpulse*=R.skidInfo,R.sideImpulse*=R.skidInfo)}for(var b=0;b<$;b++){var R=Q[b],Y=new r;if(Y.copy(R.raycastResult.hitPointWorld),R.forwardImpulse!==0){var ct=new r;j[b].scale(R.forwardImpulse,ct),F.applyImpulse(ct,Y)}if(R.sideImpulse!==0){var H=R.raycastResult.body,ht=new r;ht.copy(R.raycastResult.hitPointWorld);var ot=new r;z[b].scale(R.sideImpulse,ot),F.pointToLocalFrame(Y,Y),Y["xyz"[this.indexUpAxis]]*=R.rollInfluence,F.pointToWorldFrame(Y,Y),F.applyImpulse(ot,Y),ot.scale(-1,ot),H.applyImpulse(ot,ht)}}};var _=new r,A=new r,I=new r;function U(O,L,Q,$,F){var j=0,z=Q,b=_,R=A,H=I;O.getVelocityAtWorldPoint(z,b),L.getVelocityAtWorldPoint(z,R),b.vsub(R,H);var K=$.dot(H),et=B(O,Q,$),k=B(L,Q,$),it=1,mt=it/(et+k);return j=-K*mt,F<j&&(j=F),j<-F&&(j=-F),j}var P=new r,E=new r,y=new r,T=new r;function B(O,L,Q){var $=P,F=E,j=y,z=T;return L.vsub(O.position,$),$.cross(Q,F),O.invInertiaWorld.vmult(F,z),z.cross($,j),O.invMass+Q.dot(j)}var N=new r,X=new r,q=new r;function J(O,L,Q,$,F,it){var z=F.norm2();if(z>1.1)return 0;var b=N,R=X,H=q;O.getVelocityAtWorldPoint(L,b),Q.getVelocityAtWorldPoint($,R),b.vsub(R,H);var K=F.dot(H),et=.2,k=1/(O.invMass+Q.invMass),it=-et*K*k;return it}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,s){var r=e("./Body"),a=e("../shapes/Sphere"),o=e("../shapes/Box"),c=e("../math/Vec3"),d=e("../constraints/HingeConstraint");n.exports=h;function h(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new c(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var v=new o(new c(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(f){f=f||{};var v=f.body;v||(v=new r(1,new a(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new c;var g=typeof f.position<"u"?f.position.clone():new c,m=new c;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var p=typeof f.axis<"u"?f.axis.clone():new c(0,1,0);this.wheelAxes.push(p);var x=new d(this.chassisBody,v,{pivotA:g,axisA:p,pivotB:c.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(x),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(f,v){var g=this.wheelAxes[v],m=Math.cos(f),p=Math.sin(f),x=g.x,M=g.y;this.constraints[v].axisA.set(m*x-p*M,p*x+m*M,0)},h.prototype.setMotorSpeed=function(f,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=f},h.prototype.disableMotor=function(f){var v=this.constraints[f];v.disableMotor()};var l=new c;h.prototype.setWheelForce=function(f,v){this.wheelForces[v]=f},h.prototype.applyWheelForce=function(f,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],p=m.torque;g.scale(f,l),m.vectorToWorldFrame(l,l),p.vadd(l,p)},h.prototype.addToWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.add(g[m]);for(var m=0;m<v.length;m++)f.addConstraint(v[m]);f.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var f=this.wheelForces,v=0;v<f.length;v++)this.applyWheelForce(f[v],v)},h.prototype.removeFromWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.remove(g[m]);for(var m=0;m<v.length;m++)f.removeConstraint(v[m])};var u=new c;h.prototype.getWheelSpeed=function(f){var v=this.wheelAxes[f],g=this.wheelBodies[f],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,u),m.dot(u)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,s){n.exports=a,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function a(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}a.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},a.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;a.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,p=v.id,x=this.smoothingRadius*this.smoothingRadius,M=o,_=0;_!==m;_++){var A=this.particles[_];A.position.vsub(v.position,M),p!==A.id&&M.norm2()<x&&g.push(A)}};var c=new r,d=new r,h=new r,l=new r,u=new r,f=new r;a.prototype.update=function(){for(var v=this.particles.length,g=c,m=this.speedOfSound,p=this.eps,x=0;x!==v;x++){var M=this.particles[x],_=this.neighbors[x];_.length=0,this.getNeighbors(M,_),_.push(this.particles[x]);for(var A=_.length,I=0,U=0;U!==A;U++){M.position.vsub(_[U].position,g);var P=g.norm(),E=this.w(P);I+=_[U].mass*E}this.densities[x]=I,this.pressures[x]=m*m*(this.densities[x]-this.density)}for(var y=d,T=h,B=l,N=u,X=f,x=0;x!==v;x++){var q=this.particles[x];y.set(0,0,0),T.set(0,0,0);for(var J,O,_=this.neighbors[x],A=_.length,U=0;U!==A;U++){var L=_[U];q.position.vsub(L.position,N);var Q=N.norm();J=-L.mass*(this.pressures[x]/(this.densities[x]*this.densities[x]+p)+this.pressures[U]/(this.densities[U]*this.densities[U]+p)),this.gradw(N,B),B.mult(J,B),y.vadd(B,y),L.velocity.vsub(q.velocity,X),X.mult(1/(1e-4+this.densities[x]*this.densities[U])*this.viscosity*L.mass,X),O=this.nablaw(Q),X.mult(O,X),T.vadd(X,T)}T.mult(q.mass,T),y.mult(q.mass,y),q.force.vadd(T,q.force),q.force.vadd(y,q.force)}},a.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},a.prototype.gradw=function(v,g){var m=v.norm(),p=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),g)},a.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(x,M,_){_=_||{},this.restLength=typeof _.restLength=="number"?_.restLength:1,this.stiffness=_.stiffness||100,this.damping=_.damping||1,this.bodyA=x,this.bodyB=M,this.localAnchorA=new r,this.localAnchorB=new r,_.localAnchorA&&this.localAnchorA.copy(_.localAnchorA),_.localAnchorB&&this.localAnchorB.copy(_.localAnchorB),_.worldAnchorA&&this.setWorldAnchorA(_.worldAnchorA),_.worldAnchorB&&this.setWorldAnchorB(_.worldAnchorB)}a.prototype.setWorldAnchorA=function(x){this.bodyA.pointToLocalFrame(x,this.localAnchorA)},a.prototype.setWorldAnchorB=function(x){this.bodyB.pointToLocalFrame(x,this.localAnchorB)},a.prototype.getWorldAnchorA=function(x){this.bodyA.pointToWorldFrame(this.localAnchorA,x)},a.prototype.getWorldAnchorB=function(x){this.bodyB.pointToWorldFrame(this.localAnchorB,x)};var o=new r,c=new r,d=new r,h=new r,l=new r,u=new r,f=new r,v=new r,g=new r,m=new r,p=new r;a.prototype.applyForce=function(){var x=this.stiffness,M=this.damping,_=this.restLength,A=this.bodyA,I=this.bodyB,U=o,P=c,E=d,y=h,T=p,B=l,N=u,X=f,q=v,J=g,O=m;this.getWorldAnchorA(B),this.getWorldAnchorB(N),B.vsub(A.position,X),N.vsub(I.position,q),N.vsub(B,U);var L=U.norm();P.copy(U),P.normalize(),I.velocity.vsub(A.velocity,E),I.angularVelocity.cross(q,T),E.vadd(T,E),A.angularVelocity.cross(X,T),E.vsub(T,E),P.mult(-x*(L-_)-M*E.dot(P),y),A.force.vsub(y,A.force),I.force.vadd(y,I.force),X.cross(y,J),q.cross(y,O),A.torque.vsub(J,A.torque),I.torque.vadd(O,I.torque)}},{"../math/Vec3":30}],36:[function(e,n,s){var r=e("../math/Vec3"),a=e("../math/Transform"),o=e("../collision/RaycastResult"),c=e("../utils/Utils");n.exports=d;function d(u){u=c.defaults(u,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=u.maxSuspensionTravel,this.customSlidingRotationalSpeed=u.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=u.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=u.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=u.chassisConnectionPointWorld.clone(),this.directionLocal=u.directionLocal.clone(),this.directionWorld=u.directionWorld.clone(),this.axleLocal=u.axleLocal.clone(),this.axleWorld=u.axleWorld.clone(),this.suspensionRestLength=u.suspensionRestLength,this.suspensionMaxLength=u.suspensionMaxLength,this.radius=u.radius,this.suspensionStiffness=u.suspensionStiffness,this.dampingCompression=u.dampingCompression,this.dampingRelaxation=u.dampingRelaxation,this.frictionSlip=u.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=u.rollInfluence,this.maxSuspensionForce=u.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=u.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new a,this.isInContact=!1}var l=new r,h=new r,l=new r;d.prototype.updateWheel=function(u){var f=this.raycastResult;if(this.isInContact){var v=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(u.position,h),u.getVelocityAtWorldPoint(h,l);var g=f.hitNormalWorld.dot(l);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3"),o=e("./ConvexPolyhedron");function c(l){r.call(this),this.type=r.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c,c.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,u=this.halfExtents.y,f=this.halfExtents.z,v=a,g=[new v(-l,-u,-f),new v(l,-u,-f),new v(l,u,-f),new v(-l,u,-f),new v(-l,-u,f),new v(l,-u,f),new v(l,u,f),new v(-l,u,f)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var p=new o(g,m);this.convexPolyhedronRepresentation=p,p.material=this.material},c.prototype.calculateLocalInertia=function(l,u){return u=u||new a,c.calculateInertia(this.halfExtents,l,u),u},c.calculateInertia=function(l,u,f){var v=l;f.x=1/12*u*(2*v.y*2*v.y+2*v.z*2*v.z),f.y=1/12*u*(2*v.x*2*v.x+2*v.z*2*v.z),f.z=1/12*u*(2*v.y*2*v.y+2*v.x*2*v.x)},c.prototype.getSideNormals=function(l,u){var f=l,v=this.halfExtents;if(f[0].set(v.x,0,0),f[1].set(0,v.y,0),f[2].set(0,0,v.z),f[3].set(-v.x,0,0),f[4].set(0,-v.y,0),f[5].set(0,0,-v.z),u!==void 0)for(var g=0;g!==f.length;g++)u.vmult(f[g],f[g]);return f},c.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},c.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var d=new a;new a,c.prototype.forEachWorldCorner=function(l,u,f){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)d.set(g[m][0],g[m][1],g[m][2]),u.vmult(d,d),l.vadd(d,d),f(d.x,d.y,d.z)};var h=[new a,new a,new a,new a,new a,new a,new a,new a];c.prototype.calculateWorldAABB=function(l,u,f,v){var g=this.halfExtents;h[0].set(g.x,g.y,g.z),h[1].set(-g.x,g.y,g.z),h[2].set(-g.x,-g.y,g.z),h[3].set(-g.x,-g.y,-g.z),h[4].set(g.x,-g.y,-g.z),h[5].set(g.x,g.y,-g.z),h[6].set(-g.x,g.y,-g.z),h[7].set(g.x,-g.y,g.z);var m=h[0];u.vmult(m,m),l.vadd(m,m),v.copy(m),f.copy(m);for(var p=1;p<8;p++){var m=h[p];u.vmult(m,m),l.vadd(m,m);var x=m.x,M=m.y,_=m.z;x>v.x&&(v.x=x),M>v.y&&(v.y=M),_>v.z&&(v.z=_),x<f.x&&(f.x=x),M<f.y&&(f.y=M),_<f.z&&(f.z=_)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function c(F,j,z){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=F||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=j||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=z?z.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c;var d=new a;c.prototype.computeEdges=function(){var F=this.faces,j=this.vertices;j.length;var z=this.uniqueEdges;z.length=0;for(var b=d,R=0;R!==F.length;R++)for(var H=F[R],K=H.length,et=0;et!==K;et++){var k=(et+1)%K;j[H[et]].vsub(j[H[k]],b),b.normalize();for(var it=!1,mt=0;mt!==z.length;mt++)if(z[mt].almostEquals(b)||z[mt].almostEquals(b)){it=!0;break}it||z.push(b.clone())}},c.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var F=0;F<this.faces.length;F++){for(var j=0;j<this.faces[F].length;j++)if(!this.vertices[this.faces[F][j]])throw new Error("Vertex "+this.faces[F][j]+" not found!");var z=this.faceNormals[F]||new a;this.getFaceNormal(F,z),z.negate(z),this.faceNormals[F]=z;var b=this.vertices[this.faces[F][0]];if(z.dot(b)<0){console.error(".faceNormals["+F+"] = Vec3("+z.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var j=0;j<this.faces[F].length;j++)console.warn(".vertices["+this.faces[F][j]+"] = Vec3("+this.vertices[this.faces[F][j]].toString()+")")}}};var h=new a,l=new a;c.computeNormal=function(F,j,z,b){j.vsub(F,l),z.vsub(j,h),h.cross(l,b),b.isZero()||b.normalize()},c.prototype.getFaceNormal=function(F,j){var z=this.faces[F],b=this.vertices[z[0]],R=this.vertices[z[1]],H=this.vertices[z[2]];return c.computeNormal(b,R,H,j)};var u=new a;c.prototype.clipAgainstHull=function(F,j,z,b,R,H,K,et,k){for(var it=u,mt=-1,St=-Number.MAX_VALUE,Et=0;Et<z.faces.length;Et++){it.copy(z.faceNormals[Et]),R.vmult(it,it);var D=it.dot(H);D>St&&(St=D,mt=Et)}for(var ft=[],ut=z.faces[mt],Xt=ut.length,xt=0;xt<Xt;xt++){var ne=z.vertices[ut[xt]],vt=new a;vt.copy(ne),R.vmult(vt,vt),b.vadd(vt,vt),ft.push(vt)}mt>=0&&this.clipFaceAgainstHull(H,F,j,ft,K,et,k)};var f=new a,v=new a,g=new a,m=new a,p=new a,x=new a;c.prototype.findSeparatingAxis=function(F,j,z,b,R,H,K,et){var k=f,it=v,mt=g,St=m,Et=p,D=x,ft=Number.MAX_VALUE,ut=this;if(ut.uniqueAxes)for(var xt=0;xt!==ut.uniqueAxes.length;xt++){z.vmult(ut.uniqueAxes[xt],k);var vt=ut.testSepAxis(k,F,j,z,b,R);if(vt===!1)return!1;vt<ft&&(ft=vt,H.copy(k))}else for(var Xt=K?K.length:ut.faces.length,xt=0;xt<Xt;xt++){var ne=K?K[xt]:xt;k.copy(ut.faceNormals[ne]),z.vmult(k,k);var vt=ut.testSepAxis(k,F,j,z,b,R);if(vt===!1)return!1;vt<ft&&(ft=vt,H.copy(k))}if(F.uniqueAxes)for(var xt=0;xt!==F.uniqueAxes.length;xt++){R.vmult(F.uniqueAxes[xt],it);var vt=ut.testSepAxis(it,F,j,z,b,R);if(vt===!1)return!1;vt<ft&&(ft=vt,H.copy(it))}else for(var C=et?et.length:F.faces.length,xt=0;xt<C;xt++){var ne=et?et[xt]:xt;it.copy(F.faceNormals[ne]),R.vmult(it,it);var vt=ut.testSepAxis(it,F,j,z,b,R);if(vt===!1)return!1;vt<ft&&(ft=vt,H.copy(it))}for(var S=0;S!==ut.uniqueEdges.length;S++){z.vmult(ut.uniqueEdges[S],St);for(var Y=0;Y!==F.uniqueEdges.length;Y++)if(R.vmult(F.uniqueEdges[Y],Et),St.cross(Et,D),!D.almostZero()){D.normalize();var ct=ut.testSepAxis(D,F,j,z,b,R);if(ct===!1)return!1;ct<ft&&(ft=ct,H.copy(D))}}return b.vsub(j,mt),mt.dot(H)>0&&H.negate(H),!0};var M=[],_=[];c.prototype.testSepAxis=function(F,j,z,b,R,H){var K=this;c.project(K,F,z,b,M),c.project(j,F,R,H,_);var et=M[0],k=M[1],it=_[0],mt=_[1],St=et-mt,Et=it-k,D=St<Et?St:Et;return D};var A=new a,I=new a;c.prototype.calculateLocalInertia=function(F,j){this.computeLocalAABB(A,I);var z=I.x-A.x,b=I.y-A.y,R=I.z-A.z;j.x=1/12*F*(2*b*2*b+2*R*2*R),j.y=1/12*F*(2*z*2*z+2*R*2*R),j.z=1/12*F*(2*b*2*b+2*z*2*z)},c.prototype.getPlaneConstantOfFace=function(F){var j=this.faces[F],z=this.faceNormals[F],b=this.vertices[j[0]],R=-z.dot(b);return R};var U=new a,P=new a,E=new a,y=new a,T=new a,B=new a,N=new a,X=new a;c.prototype.clipFaceAgainstHull=function(F,j,z,b,R,H,K){for(var et=U,k=P,it=E,mt=y,St=T,Et=B,D=N,ft=X,ut=this,Xt=[],xt=b,ne=Xt,vt=-1,C=Number.MAX_VALUE,S=0;S<ut.faces.length;S++){et.copy(ut.faceNormals[S]),z.vmult(et,et);var Y=et.dot(F);Y<C&&(C=Y,vt=S)}if(!(vt<0)){var ct=ut.faces[vt];ct.connectedFaces=[];for(var ht=0;ht<ut.faces.length;ht++)for(var ot=0;ot<ut.faces[ht].length;ot++)ct.indexOf(ut.faces[ht][ot])!==-1&&ht!==vt&&ct.connectedFaces.indexOf(ht)===-1&&ct.connectedFaces.push(ht);xt.length;for(var wt=ct.length,Tt=0;Tt<wt;Tt++){var Ft=ut.vertices[ct[Tt]],le=ut.vertices[ct[(Tt+1)%wt]];Ft.vsub(le,k),it.copy(k),z.vmult(it,it),j.vadd(it,it),mt.copy(this.faceNormals[vt]),z.vmult(mt,mt),j.vadd(mt,mt),it.cross(mt,St),St.negate(St),Et.copy(Ft),z.vmult(Et,Et),j.vadd(Et,Et),-Et.dot(St);var Zt;{var Mt=ct.connectedFaces[Tt];D.copy(this.faceNormals[Mt]);var kt=this.getPlaneConstantOfFace(Mt);ft.copy(D),z.vmult(ft,ft);var Zt=kt-ft.dot(j)}for(this.clipFaceAgainstPlane(xt,ne,ft,Zt);xt.length;)xt.shift();for(;ne.length;)xt.push(ne.shift())}D.copy(this.faceNormals[vt]);var kt=this.getPlaneConstantOfFace(vt);ft.copy(D),z.vmult(ft,ft);for(var Zt=kt-ft.dot(j),ht=0;ht<xt.length;ht++){var $t=ft.dot(xt[ht])+Zt;if($t<=R&&(console.log("clamped: depth="+$t+" to minDist="+(R+"")),$t=R),$t<=H){var Wt=xt[ht];if($t<=0){var ce={point:Wt,normal:ft,depth:$t};K.push(ce)}}}}},c.prototype.clipFaceAgainstPlane=function(F,j,z,b){var R,H,K=F.length;if(K<2)return j;var et=F[F.length-1],k=F[0];R=z.dot(et)+b;for(var it=0;it<K;it++){if(k=F[it],H=z.dot(k)+b,R<0)if(H<0){var mt=new a;mt.copy(k),j.push(mt)}else{var mt=new a;et.lerp(k,R/(R-H),mt),j.push(mt)}else if(H<0){var mt=new a;et.lerp(k,R/(R-H),mt),j.push(mt),j.push(k)}et=k,R=H}return j},c.prototype.computeWorldVertices=function(F,j){for(var z=this.vertices.length;this.worldVertices.length<z;)this.worldVertices.push(new a);for(var b=this.vertices,R=this.worldVertices,H=0;H!==z;H++)j.vmult(b[H],R[H]),F.vadd(R[H],R[H]);this.worldVerticesNeedsUpdate=!1},new a,c.prototype.computeLocalAABB=function(F,j){var z=this.vertices.length,b=this.vertices;F.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),j.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var R=0;R<z;R++){var H=b[R];H.x<F.x?F.x=H.x:H.x>j.x&&(j.x=H.x),H.y<F.y?F.y=H.y:H.y>j.y&&(j.y=H.y),H.z<F.z?F.z=H.z:H.z>j.z&&(j.z=H.z)}},c.prototype.computeWorldFaceNormals=function(F){for(var j=this.faceNormals.length;this.worldFaceNormals.length<j;)this.worldFaceNormals.push(new a);for(var z=this.faceNormals,b=this.worldFaceNormals,R=0;R!==j;R++)F.vmult(z[R],b[R]);this.worldFaceNormalsNeedsUpdate=!1},c.prototype.updateBoundingSphereRadius=function(){for(var F=0,j=this.vertices,z=0,b=j.length;z!==b;z++){var R=j[z].norm2();R>F&&(F=R)}this.boundingSphereRadius=Math.sqrt(F)};var q=new a;c.prototype.calculateWorldAABB=function(F,j,z,b){for(var R=this.vertices.length,H=this.vertices,K,et,k,it,mt,St,Et=0;Et<R;Et++){q.copy(H[Et]),j.vmult(q,q),F.vadd(q,q);var D=q;D.x<K||K===void 0?K=D.x:(D.x>it||it===void 0)&&(it=D.x),D.y<et||et===void 0?et=D.y:(D.y>mt||mt===void 0)&&(mt=D.y),D.z<k||k===void 0?k=D.z:(D.z>St||St===void 0)&&(St=D.z)}z.set(K,et,k),b.set(it,mt,St)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.prototype.getAveragePointLocal=function(F){F=F||new a;for(var j=this.vertices.length,z=this.vertices,b=0;b<j;b++)F.vadd(z[b],F);return F.mult(1/j,F),F},c.prototype.transformAllPoints=function(F,j){var z=this.vertices.length,b=this.vertices;if(j){for(var R=0;R<z;R++){var H=b[R];j.vmult(H,H)}for(var R=0;R<this.faceNormals.length;R++){var H=this.faceNormals[R];j.vmult(H,H)}}if(F)for(var R=0;R<z;R++){var H=b[R];H.vadd(F,H)}};var J=new a,O=new a,L=new a;c.prototype.pointIsInside=function(F){var j=this.vertices.length,z=this.vertices,b=this.faces,R=this.faceNormals,H=null,K=this.faces.length,et=J;this.getAveragePointLocal(et);for(var k=0;k<K;k++){this.faces[k].length;var j=R[k],it=z[b[k][0]],mt=O;F.vsub(it,mt);var St=j.dot(mt),Et=L;et.vsub(it,Et);var D=j.dot(Et);if(St<0&&D>0||St>0&&D<0)return!1}return H?1:-1},new a;var Q=new a,$=new a;c.project=function(F,j,z,b,R){var H=F.vertices.length,K=Q,et=0,k=0,it=$,mt=F.vertices;it.setZero(),o.vectorToLocalFrame(z,b,j,K),o.pointToLocalFrame(z,b,it,it);var St=it.dot(K);k=et=mt[0].dot(K);for(var Et=1;Et<H;Et++){var D=mt[Et].dot(K);D>et&&(et=D),D<k&&(k=D)}if(k-=St,et-=St,k>et){var ft=k;k=et,et=ft}R[0]=et,R[1]=k}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function c(d,h,l,u){var f=u,v=[],g=[],m=[],p=[],x=[],M=Math.cos,_=Math.sin;v.push(new a(h*M(0),h*_(0),-l*.5)),p.push(0),v.push(new a(d*M(0),d*_(0),l*.5)),x.push(1);for(var A=0;A<f;A++){var I=2*Math.PI/f*(A+1),U=2*Math.PI/f*(A+.5);A<f-1?(v.push(new a(h*M(I),h*_(I),-l*.5)),p.push(2*A+2),v.push(new a(d*M(I),d*_(I),l*.5)),x.push(2*A+3),m.push([2*A+2,2*A+3,2*A+1,2*A])):m.push([0,1,2*A+1,2*A]),(f%2===1||A<f/2)&&g.push(new a(M(U),_(U),0))}m.push(x),g.push(new a(0,0,1));for(var P=[],A=0;A<p.length;A++)P.push(p[p.length-A-1]);m.push(P),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}c.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,s){var r=e("./Shape"),a=e("./ConvexPolyhedron"),o=e("../math/Vec3"),c=e("../utils/Utils");n.exports=d;function d(h,l){l=c.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new a,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}d.prototype=new r,d.prototype.update=function(){this._cachedPillars={}},d.prototype.updateMinValue=function(){for(var h=this.data,l=h[0][0],u=0;u!==h.length;u++)for(var f=0;f!==h[u].length;f++){var v=h[u][f];v<l&&(l=v)}this.minValue=l},d.prototype.updateMaxValue=function(){for(var h=this.data,l=h[0][0],u=0;u!==h.length;u++)for(var f=0;f!==h[u].length;f++){var v=h[u][f];v>l&&(l=v)}this.maxValue=l},d.prototype.setHeightValueAtIndex=function(h,l,u){var f=this.data;f[h][l]=u,this.clearCachedConvexTrianglePillar(h,l,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,l,!0),this.clearCachedConvexTrianglePillar(h-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(h,l-1,!0),this.clearCachedConvexTrianglePillar(h,l-1,!1)),l>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,l-1,!0)},d.prototype.getRectMinMax=function(h,l,u,f,v){v=v||[];for(var g=this.data,m=this.minValue,p=h;p<=u;p++)for(var x=l;x<=f;x++){var M=g[p][x];M>m&&(m=M)}v[0]=this.minValue,v[1]=m},d.prototype.getIndexOfPosition=function(h,l,u,f){var v=this.elementSize,g=this.data,m=Math.floor(h/v),p=Math.floor(l/v);return u[0]=m,u[1]=p,f&&(m<0&&(m=0),p<0&&(p=0),m>=g.length-1&&(m=g.length-1),p>=g[0].length-1&&(p=g[0].length-1)),!(m<0||p<0||m>=g.length-1||p>=g[0].length-1)},d.prototype.getHeightAt=function(h,l,u){var f=[];this.getIndexOfPosition(h,l,f,u);var v=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,v),(v[0]+v[1])/2},d.prototype.getCacheConvexTrianglePillarKey=function(h,l,u){return h+"_"+l+"_"+(u?1:0)},d.prototype.getCachedConvexTrianglePillar=function(h,l,u){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]},d.prototype.setCachedConvexTrianglePillar=function(h,l,u,f,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]={convex:f,offset:v}},d.prototype.clearCachedConvexTrianglePillar=function(h,l,u){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]},d.prototype.getConvexTrianglePillar=function(h,l,u){var f=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(h,l,u);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new a,v=new o,this.pillarConvex=f,this.pillarOffset=v}var g=this.data,m=this.elementSize,p=f.faces;f.vertices.length=6;for(var x=0;x<6;x++)f.vertices[x]||(f.vertices[x]=new o);p.length=5;for(var x=0;x<5;x++)p[x]||(p[x]=[]);var M=f.vertices,_=(Math.min(g[h][l],g[h+1][l],g[h][l+1],g[h+1][l+1])-this.minValue)/2+this.minValue;u?(v.set((h+.75)*m,(l+.75)*m,_),M[0].set(.25*m,.25*m,g[h+1][l+1]-_),M[1].set(-.75*m,.25*m,g[h][l+1]-_),M[2].set(.25*m,-.75*m,g[h+1][l]-_),M[3].set(.25*m,.25*m,-_-1),M[4].set(-.75*m,.25*m,-_-1),M[5].set(.25*m,-.75*m,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(v.set((h+.25)*m,(l+.25)*m,_),M[0].set(-.25*m,-.25*m,g[h][l]-_),M[1].set(.75*m,-.25*m,g[h+1][l]-_),M[2].set(-.25*m,.75*m,g[h][l+1]-_),M[3].set(-.25*m,-.25*m,-_-1),M[4].set(.75*m,-.25*m,-_-1),M[5].set(-.25*m,.75*m,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,l,u,f,v)},d.prototype.calculateLocalInertia=function(h,l){return l=l||new o,l.set(0,0,0),l},d.prototype.volume=function(){return Number.MAX_VALUE},d.prototype.calculateWorldAABB=function(h,l,u,f){u.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},d.prototype.updateBoundingSphereRadius=function(){var h=this.data,l=this.elementSize;this.boundingSphereRadius=new o(h.length*l,h[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,d){return d=d||new a,d.set(0,0,0),d},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(c,d,h,l){h.copy(c),l.copy(c)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new a,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(d){var h=this.worldNormal;h.set(0,0,1),d.vmult(h,h),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(d,h){return h=h||new a,h},o.prototype.volume=function(){return Number.MAX_VALUE};var c=new a;o.prototype.calculateWorldAABB=function(d,h,l,u){c.set(0,0,1),h.vmult(c,c);var f=Number.MAX_VALUE;l.set(-f,-f,-f),u.set(f,f,f),c.x===1&&(u.x=d.x),c.y===1&&(u.y=d.y),c.z===1&&(u.z=d.z),c.x===-1&&(l.x=d.x),c.y===-1&&(l.y=d.y),c.z===-1&&(l.z=d.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,s){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(a,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(c){if(r.call(this),this.radius=c!==void 0?Number(c):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,d){d=d||new a;var h=2*c*this.radius*this.radius/5;return d.x=h,d.y=h,d.z=h,d},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(c,d,h,l){for(var u=this.radius,f=["x","y","z"],v=0;v<f.length;v++){var g=f[v];h[g]=c[g]-u,l[g]=c[g]+u}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,s){n.exports=h;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),c=e("../collision/AABB"),d=e("../utils/Octree");function h(P,E){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(P),this.indices=new Int16Array(E),this.normals=new Float32Array(E.length),this.aabb=new c,this.edges=null,this.scale=new a(1,1,1),this.tree=new d,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new r,h.prototype.constructor=h;var l=new a;h.prototype.updateTree=function(){var P=this.tree;P.reset(),P.aabb.copy(this.aabb);var E=this.scale;P.aabb.lowerBound.x*=1/E.x,P.aabb.lowerBound.y*=1/E.y,P.aabb.lowerBound.z*=1/E.z,P.aabb.upperBound.x*=1/E.x,P.aabb.upperBound.y*=1/E.y,P.aabb.upperBound.z*=1/E.z;for(var y=new c,T=new a,B=new a,N=new a,X=[T,B,N],q=0;q<this.indices.length/3;q++){var J=q*3;this._getUnscaledVertex(this.indices[J],T),this._getUnscaledVertex(this.indices[J+1],B),this._getUnscaledVertex(this.indices[J+2],N),y.setFromPoints(X),P.insert(y,q)}P.removeEmptyNodes()};var u=new c;h.prototype.getTrianglesInAABB=function(P,E){u.copy(P);var y=this.scale,T=y.x,B=y.y,N=y.z,X=u.lowerBound,q=u.upperBound;return X.x/=T,X.y/=B,X.z/=N,q.x/=T,q.y/=B,q.z/=N,this.tree.aabbQuery(u,E)},h.prototype.setScale=function(P){var E=this.scale.x===this.scale.y===this.scale.z,y=P.x===P.y===P.z;E&&y||this.updateNormals(),this.scale.copy(P),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var P=l,E=this.normals,y=0;y<this.indices.length/3;y++){var T=y*3,B=this.indices[T],N=this.indices[T+1],X=this.indices[T+2];this.getVertex(B,p),this.getVertex(N,x),this.getVertex(X,M),h.computeNormal(x,p,M,P),E[T]=P.x,E[T+1]=P.y,E[T+2]=P.z}},h.prototype.updateEdges=function(){for(var P={},E=function(J,O){var L=B<N?B+"_"+N:N+"_"+B;P[L]=!0},y=0;y<this.indices.length/3;y++){var T=y*3,B=this.indices[T],N=this.indices[T+1];this.indices[T+2],E(),E(),E()}var X=Object.keys(P);this.edges=new Int16Array(X.length*2);for(var y=0;y<X.length;y++){var q=X[y].split("_");this.edges[2*y]=parseInt(q[0],10),this.edges[2*y+1]=parseInt(q[1],10)}},h.prototype.getEdgeVertex=function(P,E,y){var T=this.edges[P*2+(E?1:0)];this.getVertex(T,y)};var f=new a,v=new a;h.prototype.getEdgeVector=function(P,E){var y=f,T=v;this.getEdgeVertex(P,0,y),this.getEdgeVertex(P,1,T),T.vsub(y,E)};var g=new a,m=new a;h.computeNormal=function(P,E,y,T){E.vsub(P,m),y.vsub(E,g),g.cross(m,T),T.isZero()||T.normalize()};var p=new a,x=new a,M=new a;h.prototype.getVertex=function(P,E){var y=this.scale;return this._getUnscaledVertex(P,E),E.x*=y.x,E.y*=y.y,E.z*=y.z,E},h.prototype._getUnscaledVertex=function(P,E){var y=P*3,T=this.vertices;return E.set(T[y],T[y+1],T[y+2])},h.prototype.getWorldVertex=function(P,E,y,T){return this.getVertex(P,T),o.pointToWorldFrame(E,y,T,T),T},h.prototype.getTriangleVertices=function(P,E,y,T){var B=P*3;this.getVertex(this.indices[B],E),this.getVertex(this.indices[B+1],y),this.getVertex(this.indices[B+2],T)},h.prototype.getNormal=function(P,E){var y=P*3;return E.set(this.normals[y],this.normals[y+1],this.normals[y+2])};var _=new c;h.prototype.calculateLocalInertia=function(P,E){this.computeLocalAABB(_);var y=_.upperBound.x-_.lowerBound.x,T=_.upperBound.y-_.lowerBound.y,B=_.upperBound.z-_.lowerBound.z;return E.set(1/12*P*(2*T*2*T+2*B*2*B),1/12*P*(2*y*2*y+2*B*2*B),1/12*P*(2*T*2*T+2*y*2*y))};var A=new a;h.prototype.computeLocalAABB=function(P){var E=P.lowerBound,y=P.upperBound,T=this.vertices.length;this.vertices;var B=A;this.getVertex(0,B),E.copy(B),y.copy(B);for(var N=0;N!==T;N++)this.getVertex(N,B),B.x<E.x?E.x=B.x:B.x>y.x&&(y.x=B.x),B.y<E.y?E.y=B.y:B.y>y.y&&(y.y=B.y),B.z<E.z?E.z=B.z:B.z>y.z&&(y.z=B.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var P=0,E=this.vertices,y=new a,T=0,B=E.length/3;T!==B;T++){this.getVertex(T,y);var N=y.norm2();N>P&&(P=N)}this.boundingSphereRadius=Math.sqrt(P)},new a;var I=new o,U=new c;h.prototype.calculateWorldAABB=function(P,E,y,T){var B=I,N=U;B.position=P,B.quaternion=E,this.aabb.toWorldFrame(B,N),y.copy(N.lowerBound),T.copy(N.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(P,E,y,T,B){P=P||1,E=E||.5,y=y||8,T=T||6,B=B||Math.PI*2;for(var N=[],X=[],q=0;q<=y;q++)for(var J=0;J<=T;J++){var O=J/T*B,L=q/y*Math.PI*2,Q=(P+E*Math.cos(L))*Math.cos(O),$=(P+E*Math.cos(L))*Math.sin(O),F=E*Math.sin(L);N.push(Q,$,F)}for(var q=1;q<=y;q++)for(var J=1;J<=T;J++){var j=(T+1)*q+J-1,z=(T+1)*(q-1)+J-1,b=(T+1)*(q-1)+J,R=(T+1)*q+J;X.push(j,z,R),X.push(z,b,R)}return new h(N,X)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,s){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function a(){r.call(this),this.iterations=10,this.tolerance=1e-7}a.prototype=new r;var o=[],c=[],d=[];a.prototype.solve=function(h,l){var u=0,f=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,p=l.bodies,x=p.length,M=h,_,A,I,U,P,E;if(m!==0)for(var y=0;y!==x;y++)p[y].updateSolveMassProperties();var T=c,B=d,N=o;T.length=m,B.length=m,N.length=m;for(var y=0;y!==m;y++){var X=g[y];N[y]=0,B[y]=X.computeB(M),T[y]=1/X.computeC()}if(m!==0){for(var y=0;y!==x;y++){var q=p[y],J=q.vlambda,O=q.wlambda;J.set(0,0,0),O&&O.set(0,0,0)}for(u=0;u!==f;u++){U=0;for(var L=0;L!==m;L++){var X=g[L];_=B[L],A=T[L],E=N[L],P=X.computeGWlambda(),I=A*(_-P-X.eps*E),E+I<X.minForce?I=X.minForce-E:E+I>X.maxForce&&(I=X.maxForce-E),N[L]+=I,U+=I>0?I:-I,X.addToWlambda(I)}if(U*U<v)break}for(var y=0;y!==x;y++){var q=p[y],Q=q.velocity,$=q.angularVelocity;Q.vadd(q.vlambda,Q),$&&$.vadd(q.wlambda,$)}}return u}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,s){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(a,o){return 0},r.prototype.addEquation=function(a){a.enabled&&this.equations.push(a)},r.prototype.removeEquation=function(a){var o=this.equations,c=o.indexOf(a);c!==-1&&o.splice(c,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,s){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),a=e("../objects/Body");function o(p){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var c=[],d=[],h={bodies:[]},l=a.STATIC;function u(p){for(var x=p.length,M=0;M!==x;M++){var _=p[M];if(!_.visited&&!(_.body.type&l))return _}return!1}var f=[];function v(p,x,M,_){for(f.push(p),p.visited=!0,x(p,M,_);f.length;)for(var A=f.pop(),I;I=u(A.children);)I.visited=!0,x(I,M,_),f.push(I)}function g(p,x,M){x.push(p.body);for(var _=p.eqs.length,A=0;A!==_;A++){var I=p.eqs[A];M.indexOf(I)===-1&&M.push(I)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(p,x){for(var M=c,_=this.nodePool,A=x.bodies,I=this.equations,U=I.length,P=A.length,E=this.subsolver;_.length<P;)_.push(this.createNode());M.length=P;for(var y=0;y<P;y++)M[y]=_[y];for(var y=0;y!==P;y++){var T=M[y];T.body=A[y],T.children.length=0,T.eqs.length=0,T.visited=!1}for(var B=0;B!==U;B++){var N=I[B],y=A.indexOf(N.bi),X=A.indexOf(N.bj),q=M[y],J=M[X];q.children.push(J),q.eqs.push(N),J.children.push(q),J.eqs.push(N)}var O,L=0,Q=d;E.tolerance=this.tolerance,E.iterations=this.iterations;for(var $=h;O=u(M);){Q.length=0,$.bodies.length=0,v(O,g,$.bodies,Q);var F=Q.length;Q=Q.sort(m);for(var y=0;y!==F;y++)E.addEquation(Q[y]);E.solve(p,$),E.removeAllEquations(),L++}return L};function m(p,x){return x.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,s){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(a,o){this._listeners===void 0&&(this._listeners={});var c=this._listeners;return c[a]===void 0&&(c[a]=[]),c[a].indexOf(o)===-1&&c[a].push(o),this},hasEventListener:function(a,o){if(this._listeners===void 0)return!1;var c=this._listeners;return c[a]!==void 0&&c[a].indexOf(o)!==-1},removeEventListener:function(a,o){if(this._listeners===void 0)return this;var c=this._listeners;if(c[a]===void 0)return this;var d=c[a].indexOf(o);return d!==-1&&c[a].splice(d,1),this},dispatchEvent:function(a){if(this._listeners===void 0)return this;var o=this._listeners,c=o[a.type];if(c!==void 0){a.target=this;for(var d=0,h=c.length;d<h;d++)c[d].call(this,a)}return this}}},{}],50:[function(e,n,s){var r=e("../collision/AABB"),a=e("../math/Vec3");n.exports=c;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new r,this.data=[],this.children=[]}function c(l,u){u=u||{},u.root=null,u.aabb=l,o.call(this,u),this.maxDepth=typeof u.maxDepth<"u"?u.maxDepth:8}c.prototype=new o,o.prototype.reset=function(l,u){this.children.length=this.data.length=0},o.prototype.insert=function(l,u,f){var v=this.data;if(f=f||0,!this.aabb.contains(l))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(g[p].insert(l,u,f+1))return!0;m&&(g.length=0)}return v.push(u),!0};var d=new a;o.prototype.subdivide=function(){var l=this.aabb,u=l.lowerBound,f=l.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new a(0,0,0)})}),new o({aabb:new r({lowerBound:new a(1,0,0)})}),new o({aabb:new r({lowerBound:new a(1,1,0)})}),new o({aabb:new r({lowerBound:new a(1,1,1)})}),new o({aabb:new r({lowerBound:new a(0,1,1)})}),new o({aabb:new r({lowerBound:new a(0,0,1)})}),new o({aabb:new r({lowerBound:new a(1,0,1)})}),new o({aabb:new r({lowerBound:new a(0,1,0)})})),f.vsub(u,d),d.scale(.5,d);for(var g=this.root||this,m=0;m!==8;m++){var p=v[m];p.root=g;var x=p.aabb.lowerBound;x.x*=d.x,x.y*=d.y,x.z*=d.z,x.vadd(u,x),x.vadd(d,p.aabb.upperBound)}},o.prototype.aabbQuery=function(l,u){this.data,this.children;for(var f=[this];f.length;){var v=f.pop();v.aabb.overlaps(l)&&Array.prototype.push.apply(u,v.data),Array.prototype.push.apply(f,v.children)}return u};var h=new r;o.prototype.rayQuery=function(l,u,f){return l.getAABB(h),h.toLocalFrame(u,h),this.aabbQuery(h,f),f},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var u=l.pop(),f=u.children.length-1;f>=0;f--)u.children[f].data.length||u.children.splice(f,1);Array.prototype.push.apply(l,u.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,s){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var a=arguments.length,o=0;o!==a;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,s){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(a,o){if(a>o){var c=o;o=a,a=c}return this.data[a+"-"+o]},r.prototype.set=function(a,o,c){if(a>o){var d=o;o=a,a=d}var h=a+"-"+o;this.get(a,o)||this.data.keys.push(h),this.data[h]=c},r.prototype.reset=function(){for(var a=this.data,o=a.keys;o.length>0;){var c=o.pop();delete a[c]}}},{}],53:[function(e,n,s){function r(){}n.exports=r,r.defaults=function(a,o){a=a||{};for(var c in o)c in a||(a[c]=o[c]);return a}},{}],54:[function(e,n,s){n.exports=o;var r=e("../math/Vec3"),a=e("./Pool");function o(){a.call(this),this.type=r}o.prototype=new a,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,s){n.exports=v;var r=e("../collision/AABB"),a=e("../shapes/Shape"),o=e("../collision/Ray"),c=e("../math/Vec3"),d=e("../math/Transform");e("../shapes/ConvexPolyhedron");var h=e("../math/Quaternion");e("../solver/Solver");var l=e("../utils/Vec3Pool"),u=e("../equations/ContactEquation"),f=e("../equations/FrictionEquation");function v(at){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=at,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(at,dt,gt,_t,Jt,Bt){var At;this.contactPointPool.length?(At=this.contactPointPool.pop(),At.bi=at,At.bj=dt):At=new u(at,dt),At.enabled=at.collisionResponse&&dt.collisionResponse&&gt.collisionResponse&&_t.collisionResponse;var Ut=this.currentContactMaterial;At.restitution=Ut.restitution,At.setSpookParams(Ut.contactEquationStiffness,Ut.contactEquationRelaxation,this.world.dt);var nt=gt.material||at.material,Rt=_t.material||dt.material;return nt&&Rt&&nt.restitution>=0&&Rt.restitution>=0&&(At.restitution=nt.restitution*Rt.restitution),At.si=Jt||gt,At.sj=Bt||_t,At},v.prototype.createFrictionEquationsFromContact=function(at,dt){var gt=at.bi,_t=at.bj,Jt=at.si,Bt=at.sj,At=this.world,Ut=this.currentContactMaterial,nt=Ut.friction,Rt=Jt.material||gt.material,It=Bt.material||_t.material;if(Rt&&It&&Rt.friction>=0&&It.friction>=0&&(nt=Rt.friction*It.friction),nt>0){var qt=nt*At.gravity.length(),Pt=gt.invMass+_t.invMass;Pt>0&&(Pt=1/Pt);var bt=this.frictionEquationPool,Dt=bt.length?bt.pop():new f(gt,_t,qt*Pt),jt=bt.length?bt.pop():new f(gt,_t,qt*Pt);return Dt.bi=jt.bi=gt,Dt.bj=jt.bj=_t,Dt.minForce=jt.minForce=-qt*Pt,Dt.maxForce=jt.maxForce=qt*Pt,Dt.ri.copy(at.ri),Dt.rj.copy(at.rj),jt.ri.copy(at.ri),jt.rj.copy(at.rj),at.ni.tangents(Dt.t,jt.t),Dt.setSpookParams(Ut.frictionEquationStiffness,Ut.frictionEquationRelaxation,At.dt),jt.setSpookParams(Ut.frictionEquationStiffness,Ut.frictionEquationRelaxation,At.dt),Dt.enabled=jt.enabled=at.enabled,dt.push(Dt,jt),!0}return!1};var g=new c,m=new c,p=new c;v.prototype.createFrictionFromAverage=function(at){var dt=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(dt,this.frictionResult)||at===1)){var gt=this.frictionResult[this.frictionResult.length-2],_t=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),p.setZero();var Jt=dt.bi;dt.bj;for(var Bt=0;Bt!==at;Bt++)dt=this.result[this.result.length-1-Bt],dt.bodyA!==Jt?(g.vadd(dt.ni,g),m.vadd(dt.ri,m),p.vadd(dt.rj,p)):(g.vsub(dt.ni,g),m.vadd(dt.rj,m),p.vadd(dt.ri,p));var At=1/at;m.scale(At,gt.ri),p.scale(At,gt.rj),_t.ri.copy(gt.ri),_t.rj.copy(gt.rj),g.normalize(),g.tangents(gt.t,_t.t)}};var x=new c,M=new c,_=new h,A=new h;v.prototype.getContacts=function(at,dt,gt,_t,Jt,Bt,At){this.contactPointPool=Jt,this.frictionEquationPool=At,this.result=_t,this.frictionResult=Bt;for(var Ut=_,nt=A,Rt=x,It=M,qt=0,Pt=at.length;qt!==Pt;qt++){var bt=at[qt],Dt=dt[qt],jt=null;bt.material&&Dt.material&&(jt=gt.getContactMaterial(bt.material,Dt.material)||null);for(var oe=0;oe<bt.shapes.length;oe++){bt.quaternion.mult(bt.shapeOrientations[oe],Ut),bt.quaternion.vmult(bt.shapeOffsets[oe],Rt),Rt.vadd(bt.position,Rt);for(var yt=bt.shapes[oe],w=0;w<Dt.shapes.length;w++){Dt.quaternion.mult(Dt.shapeOrientations[w],nt),Dt.quaternion.vmult(Dt.shapeOffsets[w],It),It.vadd(Dt.position,It);var V=Dt.shapes[w];if(!(Rt.distanceTo(It)>yt.boundingSphereRadius+V.boundingSphereRadius)){var tt=null;yt.material&&V.material&&(tt=gt.getContactMaterial(yt.material,V.material)||null),this.currentContactMaterial=tt||jt||gt.defaultContactMaterial;var Z=this[yt.type|V.type];Z&&(yt.type<V.type?Z.call(this,yt,V,Rt,It,Ut,nt,bt,Dt,yt,V):Z.call(this,V,yt,It,Rt,nt,Ut,Dt,bt,yt,V))}}}}},v.prototype[a.types.BOX|a.types.BOX]=v.prototype.boxBox=function(at,dt,gt,_t,Jt,Bt,At,Ut){at.convexPolyhedronRepresentation.material=at.material,dt.convexPolyhedronRepresentation.material=dt.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,dt.convexPolyhedronRepresentation.collisionResponse=dt.collisionResponse,this.convexConvex(at.convexPolyhedronRepresentation,dt.convexPolyhedronRepresentation,gt,_t,Jt,Bt,At,Ut,at,dt)},v.prototype[a.types.BOX|a.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(at,dt,gt,_t,Jt,Bt,At,Ut){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexConvex(at.convexPolyhedronRepresentation,dt,gt,_t,Jt,Bt,At,Ut,at,dt)},v.prototype[a.types.BOX|a.types.PARTICLE]=v.prototype.boxParticle=function(at,dt,gt,_t,Jt,Bt,At,Ut){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexParticle(at.convexPolyhedronRepresentation,dt,gt,_t,Jt,Bt,At,Ut,at,dt)},v.prototype[a.types.SPHERE]=v.prototype.sphereSphere=function(at,dt,gt,_t,Jt,Bt,At,Ut){var nt=this.createContactEquation(At,Ut,at,dt);_t.vsub(gt,nt.ni),nt.ni.normalize(),nt.ri.copy(nt.ni),nt.rj.copy(nt.ni),nt.ri.mult(at.radius,nt.ri),nt.rj.mult(-dt.radius,nt.rj),nt.ri.vadd(gt,nt.ri),nt.ri.vsub(At.position,nt.ri),nt.rj.vadd(_t,nt.rj),nt.rj.vsub(Ut.position,nt.rj),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult)};var I=new c,U=new c,P=new c;v.prototype[a.types.PLANE|a.types.TRIMESH]=v.prototype.planeTrimesh=function(at,dt,gt,_t,Jt,Bt,At,Ut){var nt=new c,Rt=I;Rt.set(0,0,1),Jt.vmult(Rt,Rt);for(var It=0;It<dt.vertices.length/3;It++){dt.getVertex(It,nt);var qt=new c;qt.copy(nt),d.pointToWorldFrame(_t,Bt,qt,nt);var Pt=U;nt.vsub(gt,Pt);var bt=Rt.dot(Pt);if(bt<=0){var Dt=this.createContactEquation(At,Ut,at,dt);Dt.ni.copy(Rt);var jt=P;Rt.scale(Pt.dot(Rt),jt),nt.vsub(jt,jt),Dt.ri.copy(jt),Dt.ri.vsub(At.position,Dt.ri),Dt.rj.copy(nt),Dt.rj.vsub(Ut.position,Dt.rj),this.result.push(Dt),this.createFrictionEquationsFromContact(Dt,this.frictionResult)}}};var E=new c,y=new c;new c;var T=new c,B=new c,N=new c,X=new c,q=new c,J=new c,O=new c,L=new c,Q=new c,$=new c,F=new c,j=new r,z=[];v.prototype[a.types.SPHERE|a.types.TRIMESH]=v.prototype.sphereTrimesh=function(at,dt,gt,_t,Jt,Bt,At,Ut){var nt=N,Rt=X,It=q,qt=J,Pt=O,bt=L,Dt=j,jt=B,oe=y,yt=z;d.pointToLocalFrame(_t,Bt,gt,Pt);var w=at.radius;Dt.lowerBound.set(Pt.x-w,Pt.y-w,Pt.z-w),Dt.upperBound.set(Pt.x+w,Pt.y+w,Pt.z+w),dt.getTrianglesInAABB(Dt,yt);for(var V=T,tt=at.radius*at.radius,Z=0;Z<yt.length;Z++)for(var G=0;G<3;G++)if(dt.getVertex(dt.indices[yt[Z]*3+G],V),V.vsub(Pt,oe),oe.norm2()<=tt){jt.copy(V),d.pointToWorldFrame(_t,Bt,jt,V),V.vsub(gt,oe);var st=this.createContactEquation(At,Ut,at,dt);st.ni.copy(oe),st.ni.normalize(),st.ri.copy(st.ni),st.ri.scale(at.radius,st.ri),st.ri.vadd(gt,st.ri),st.ri.vsub(At.position,st.ri),st.rj.copy(V),st.rj.vsub(Ut.position,st.rj),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}for(var Z=0;Z<yt.length;Z++)for(var G=0;G<3;G++){dt.getVertex(dt.indices[yt[Z]*3+G],nt),dt.getVertex(dt.indices[yt[Z]*3+(G+1)%3],Rt),Rt.vsub(nt,It),Pt.vsub(Rt,bt);var Ct=bt.dot(It);Pt.vsub(nt,bt);var zt=bt.dot(It);if(zt>0&&Ct<0){Pt.vsub(nt,bt),qt.copy(It),qt.normalize(),zt=bt.dot(qt),qt.scale(zt,bt),bt.vadd(nt,bt);var Ht=bt.distanceTo(Pt);if(Ht<at.radius){var st=this.createContactEquation(At,Ut,at,dt);bt.vsub(Pt,st.ni),st.ni.normalize(),st.ni.scale(at.radius,st.ri),d.pointToWorldFrame(_t,Bt,bt,bt),bt.vsub(Ut.position,st.rj),d.vectorToWorldFrame(Bt,st.ni,st.ni),d.vectorToWorldFrame(Bt,st.ri,st.ri),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}}}for(var te=Q,Kt=$,Nt=F,he=E,Z=0,ee=yt.length;Z!==ee;Z++){dt.getTriangleVertices(yt[Z],te,Kt,Nt),dt.getNormal(yt[Z],he),Pt.vsub(te,bt);var Ht=bt.dot(he);if(he.scale(Ht,bt),Pt.vsub(bt,bt),Ht=bt.distanceTo(Pt),o.pointInTriangle(bt,te,Kt,Nt)&&Ht<at.radius){var st=this.createContactEquation(At,Ut,at,dt);bt.vsub(Pt,st.ni),st.ni.normalize(),st.ni.scale(at.radius,st.ri),d.pointToWorldFrame(_t,Bt,bt,bt),bt.vsub(Ut.position,st.rj),d.vectorToWorldFrame(Bt,st.ni,st.ni),d.vectorToWorldFrame(Bt,st.ri,st.ri),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}}yt.length=0};var b=new c,R=new c;v.prototype[a.types.SPHERE|a.types.PLANE]=v.prototype.spherePlane=function(at,dt,gt,_t,Jt,Bt,At,Ut){var nt=this.createContactEquation(At,Ut,at,dt);if(nt.ni.set(0,0,1),Bt.vmult(nt.ni,nt.ni),nt.ni.negate(nt.ni),nt.ni.normalize(),nt.ni.mult(at.radius,nt.ri),gt.vsub(_t,b),nt.ni.mult(nt.ni.dot(b),R),b.vsub(R,nt.rj),-b.dot(nt.ni)<=at.radius){var Rt=nt.ri,It=nt.rj;Rt.vadd(gt,Rt),Rt.vsub(At.position,Rt),It.vadd(_t,It),It.vsub(Ut.position,It),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult)}};var H=new c,K=new c,et=new c;function k(at,dt,gt){for(var _t=null,Jt=at.length,Bt=0;Bt!==Jt;Bt++){var At=at[Bt],Ut=H;at[(Bt+1)%Jt].vsub(At,Ut);var nt=K;Ut.cross(dt,nt);var Rt=et;gt.vsub(At,Rt);var It=nt.dot(Rt);if(_t===null||It>0&&_t===!0||It<=0&&_t===!1){_t===null&&(_t=It>0);continue}else return!1}return!0}var it=new c,mt=new c,St=new c,Et=new c,D=[new c,new c,new c,new c,new c,new c],ft=new c,ut=new c,Xt=new c,xt=new c;v.prototype[a.types.SPHERE|a.types.BOX]=v.prototype.sphereBox=function(at,dt,gt,_t,Jt,Bt,At,Ut){var nt=this.v3pool,Rt=D;gt.vsub(_t,it),dt.getSideNormals(Rt,Bt);for(var It=at.radius,qt=!1,Pt=ut,bt=Xt,Dt=xt,jt=null,oe=0,yt=0,w=0,V=null,tt=0,Z=Rt.length;tt!==Z&&qt===!1;tt++){var G=mt;G.copy(Rt[tt]);var st=G.norm();G.normalize();var Ct=it.dot(G);if(Ct<st+It&&Ct>0){var zt=St,Ht=Et;zt.copy(Rt[(tt+1)%3]),Ht.copy(Rt[(tt+2)%3]);var te=zt.norm(),Kt=Ht.norm();zt.normalize(),Ht.normalize();var Nt=it.dot(zt),he=it.dot(Ht);if(Nt<te&&Nt>-te&&he<Kt&&he>-Kt){var ye=Math.abs(Ct-st-It);(V===null||ye<V)&&(V=ye,yt=Nt,w=he,jt=st,Pt.copy(G),bt.copy(zt),Dt.copy(Ht),oe++)}}}if(oe){qt=!0;var Qt=this.createContactEquation(At,Ut,at,dt);Pt.mult(-It,Qt.ri),Qt.ni.copy(Pt),Qt.ni.negate(Qt.ni),Pt.mult(jt,Pt),bt.mult(yt,bt),Pt.vadd(bt,Pt),Dt.mult(w,Dt),Pt.vadd(Dt,Qt.rj),Qt.ri.vadd(gt,Qt.ri),Qt.ri.vsub(At.position,Qt.ri),Qt.rj.vadd(_t,Qt.rj),Qt.rj.vsub(Ut.position,Qt.rj),this.result.push(Qt),this.createFrictionEquationsFromContact(Qt,this.frictionResult)}for(var ee=nt.get(),Ee=ft,ve=0;ve!==2&&!qt;ve++)for(var se=0;se!==2&&!qt;se++)for(var Yt=0;Yt!==2&&!qt;Yt++)if(ee.set(0,0,0),ve?ee.vadd(Rt[0],ee):ee.vsub(Rt[0],ee),se?ee.vadd(Rt[1],ee):ee.vsub(Rt[1],ee),Yt?ee.vadd(Rt[2],ee):ee.vsub(Rt[2],ee),_t.vadd(ee,Ee),Ee.vsub(gt,Ee),Ee.norm2()<It*It){qt=!0;var Qt=this.createContactEquation(At,Ut,at,dt);Qt.ri.copy(Ee),Qt.ri.normalize(),Qt.ni.copy(Qt.ri),Qt.ri.mult(It,Qt.ri),Qt.rj.copy(ee),Qt.ri.vadd(gt,Qt.ri),Qt.ri.vsub(At.position,Qt.ri),Qt.rj.vadd(_t,Qt.rj),Qt.rj.vsub(Ut.position,Qt.rj),this.result.push(Qt),this.createFrictionEquationsFromContact(Qt,this.frictionResult)}nt.release(ee),ee=null;for(var we=nt.get(),de=nt.get(),Qt=nt.get(),Pe=nt.get(),ye=nt.get(),Xe=Rt.length,ve=0;ve!==Xe&&!qt;ve++)for(var se=0;se!==Xe&&!qt;se++)if(ve%3!==se%3){Rt[se].cross(Rt[ve],we),we.normalize(),Rt[ve].vadd(Rt[se],de),Qt.copy(gt),Qt.vsub(de,Qt),Qt.vsub(_t,Qt);var Me=Qt.dot(we);we.mult(Me,Pe);for(var Yt=0;Yt===ve%3||Yt===se%3;)Yt++;ye.copy(gt),ye.vsub(Pe,ye),ye.vsub(de,ye),ye.vsub(_t,ye);var He=Math.abs(Me),Ge=ye.norm();if(He<Rt[Yt].norm()&&Ge<It){qt=!0;var fe=this.createContactEquation(At,Ut,at,dt);de.vadd(Pe,fe.rj),fe.rj.copy(fe.rj),ye.negate(fe.ni),fe.ni.normalize(),fe.ri.copy(fe.rj),fe.ri.vadd(_t,fe.ri),fe.ri.vsub(gt,fe.ri),fe.ri.normalize(),fe.ri.mult(It,fe.ri),fe.ri.vadd(gt,fe.ri),fe.ri.vsub(At.position,fe.ri),fe.rj.vadd(_t,fe.rj),fe.rj.vsub(Ut.position,fe.rj),this.result.push(fe),this.createFrictionEquationsFromContact(fe,this.frictionResult)}}nt.release(we,de,Qt,Pe,ye)};var ne=new c,vt=new c,C=new c,S=new c,Y=new c,ct=new c,ht=new c,ot=new c,wt=new c,Tt=new c;v.prototype[a.types.SPHERE|a.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(at,dt,gt,_t,Jt,Bt,At,Ut){var nt=this.v3pool;gt.vsub(_t,ne);for(var Rt=dt.faceNormals,It=dt.faces,qt=dt.vertices,Pt=at.radius,bt=0;bt!==qt.length;bt++){var Dt=qt[bt],jt=Y;Bt.vmult(Dt,jt),_t.vadd(jt,jt);var oe=S;if(jt.vsub(gt,oe),oe.norm2()<Pt*Pt){w=!0;var yt=this.createContactEquation(At,Ut,at,dt);yt.ri.copy(oe),yt.ri.normalize(),yt.ni.copy(yt.ri),yt.ri.mult(Pt,yt.ri),jt.vsub(_t,yt.rj),yt.ri.vadd(gt,yt.ri),yt.ri.vsub(At.position,yt.ri),yt.rj.vadd(_t,yt.rj),yt.rj.vsub(Ut.position,yt.rj),this.result.push(yt),this.createFrictionEquationsFromContact(yt,this.frictionResult);return}}for(var w=!1,bt=0,V=It.length;bt!==V&&w===!1;bt++){var tt=Rt[bt],Z=It[bt],G=ct;Bt.vmult(tt,G);var st=ht;Bt.vmult(qt[Z[0]],st),st.vadd(_t,st);var Ct=ot;G.mult(-Pt,Ct),gt.vadd(Ct,Ct);var zt=wt;Ct.vsub(st,zt);var Ht=zt.dot(G),te=Tt;if(gt.vsub(st,te),Ht<0&&te.dot(G)>0){for(var Kt=[],Nt=0,he=Z.length;Nt!==he;Nt++){var ee=nt.get();Bt.vmult(qt[Z[Nt]],ee),_t.vadd(ee,ee),Kt.push(ee)}if(k(Kt,G,gt)){w=!0;var yt=this.createContactEquation(At,Ut,at,dt);G.mult(-Pt,yt.ri),G.negate(yt.ni);var Ee=nt.get();G.mult(-Ht,Ee);var ve=nt.get();G.mult(-Pt,ve),gt.vsub(_t,yt.rj),yt.rj.vadd(ve,yt.rj),yt.rj.vadd(Ee,yt.rj),yt.rj.vadd(_t,yt.rj),yt.rj.vsub(Ut.position,yt.rj),yt.ri.vadd(gt,yt.ri),yt.ri.vsub(At.position,yt.ri),nt.release(Ee),nt.release(ve),this.result.push(yt),this.createFrictionEquationsFromContact(yt,this.frictionResult);for(var Nt=0,se=Kt.length;Nt!==se;Nt++)nt.release(Kt[Nt]);return}else for(var Nt=0;Nt!==Z.length;Nt++){var Yt=nt.get(),we=nt.get();Bt.vmult(qt[Z[(Nt+1)%Z.length]],Yt),Bt.vmult(qt[Z[(Nt+2)%Z.length]],we),_t.vadd(Yt,Yt),_t.vadd(we,we);var de=vt;we.vsub(Yt,de);var Qt=C;de.unit(Qt);var Pe=nt.get(),ye=nt.get();gt.vsub(Yt,ye);var Xe=ye.dot(Qt);Qt.mult(Xe,Pe),Pe.vadd(Yt,Pe);var Me=nt.get();if(Pe.vsub(gt,Me),Xe>0&&Xe*Xe<de.norm2()&&Me.norm2()<Pt*Pt){var yt=this.createContactEquation(At,Ut,at,dt);Pe.vsub(_t,yt.rj),Pe.vsub(gt,yt.ni),yt.ni.normalize(),yt.ni.mult(Pt,yt.ri),yt.rj.vadd(_t,yt.rj),yt.rj.vsub(Ut.position,yt.rj),yt.ri.vadd(gt,yt.ri),yt.ri.vsub(At.position,yt.ri),this.result.push(yt),this.createFrictionEquationsFromContact(yt,this.frictionResult);for(var Nt=0,se=Kt.length;Nt!==se;Nt++)nt.release(Kt[Nt]);nt.release(Yt),nt.release(we),nt.release(Pe),nt.release(Me),nt.release(ye);return}nt.release(Yt),nt.release(we),nt.release(Pe),nt.release(Me),nt.release(ye)}for(var Nt=0,se=Kt.length;Nt!==se;Nt++)nt.release(Kt[Nt])}}},new c,new c,v.prototype[a.types.PLANE|a.types.BOX]=v.prototype.planeBox=function(at,dt,gt,_t,Jt,Bt,At,Ut){dt.convexPolyhedronRepresentation.material=dt.material,dt.convexPolyhedronRepresentation.collisionResponse=dt.collisionResponse,this.planeConvex(at,dt.convexPolyhedronRepresentation,gt,_t,Jt,Bt,At,Ut)};var Ft=new c,le=new c,Mt=new c,kt=new c;v.prototype[a.types.PLANE|a.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(at,dt,gt,_t,Jt,Bt,At,Ut){var nt=Ft,Rt=le;Rt.set(0,0,1),Jt.vmult(Rt,Rt);for(var It=0,qt=Mt,Pt=0;Pt!==dt.vertices.length;Pt++){nt.copy(dt.vertices[Pt]),Bt.vmult(nt,nt),_t.vadd(nt,nt),nt.vsub(gt,qt);var bt=Rt.dot(qt);if(bt<=0){var Dt=this.createContactEquation(At,Ut,at,dt),jt=kt;Rt.mult(Rt.dot(qt),jt),nt.vsub(jt,jt),jt.vsub(gt,Dt.ri),Dt.ni.copy(Rt),nt.vsub(_t,Dt.rj),Dt.ri.vadd(gt,Dt.ri),Dt.ri.vsub(At.position,Dt.ri),Dt.rj.vadd(_t,Dt.rj),Dt.rj.vsub(Ut.position,Dt.rj),this.result.push(Dt),It++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(Dt,this.frictionResult)}}this.enableFrictionReduction&&It&&this.createFrictionFromAverage(It)};var Zt=new c,$t=new c;v.prototype[a.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(at,dt,gt,_t,Jt,Bt,At,Ut,nt,Rt,It,qt){var Pt=Zt;if(!(gt.distanceTo(_t)>at.boundingSphereRadius+dt.boundingSphereRadius)&&at.findSeparatingAxis(dt,gt,Jt,_t,Bt,Pt,It,qt)){var bt=[],Dt=$t;at.clipAgainstHull(gt,Jt,dt,_t,Bt,Pt,-100,100,bt);for(var jt=0,oe=0;oe!==bt.length;oe++){var yt=this.createContactEquation(At,Ut,at,dt,nt,Rt),w=yt.ri,V=yt.rj;Pt.negate(yt.ni),bt[oe].normal.negate(Dt),Dt.mult(bt[oe].depth,Dt),bt[oe].point.vadd(Dt,w),V.copy(bt[oe].point),w.vsub(gt,w),V.vsub(_t,V),w.vadd(gt,w),w.vsub(At.position,w),V.vadd(_t,V),V.vsub(Ut.position,V),this.result.push(yt),jt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(yt,this.frictionResult)}this.enableFrictionReduction&&jt&&this.createFrictionFromAverage(jt)}};var Wt=new c,ce=new c,ie=new c;v.prototype[a.types.PLANE|a.types.PARTICLE]=v.prototype.planeParticle=function(at,dt,gt,_t,Jt,Bt,At,Ut){var nt=Wt;nt.set(0,0,1),At.quaternion.vmult(nt,nt);var Rt=ce;_t.vsub(At.position,Rt);var It=nt.dot(Rt);if(It<=0){var qt=this.createContactEquation(Ut,At,dt,at);qt.ni.copy(nt),qt.ni.negate(qt.ni),qt.ri.set(0,0,0);var Pt=ie;nt.mult(nt.dot(_t),Pt),_t.vsub(Pt,Pt),qt.rj.copy(Pt),this.result.push(qt),this.createFrictionEquationsFromContact(qt,this.frictionResult)}};var me=new c;v.prototype[a.types.PARTICLE|a.types.SPHERE]=v.prototype.sphereParticle=function(at,dt,gt,_t,Jt,Bt,At,Ut){var nt=me;nt.set(0,0,1),_t.vsub(gt,nt);var Rt=nt.norm2();if(Rt<=at.radius*at.radius){var It=this.createContactEquation(Ut,At,dt,at);nt.normalize(),It.rj.copy(nt),It.rj.mult(at.radius,It.rj),It.ni.copy(nt),It.ni.negate(It.ni),It.ri.set(0,0,0),this.result.push(It),this.createFrictionEquationsFromContact(It,this.frictionResult)}};var W=new h,Lt=new c;new c;var lt=new c,pt=new c,Vt=new c;v.prototype[a.types.PARTICLE|a.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(at,dt,gt,_t,Jt,Bt,At,Ut){var nt=-1,Rt=lt,It=Vt,qt=null,Pt=Lt;if(Pt.copy(_t),Pt.vsub(gt,Pt),Jt.conjugate(W),W.vmult(Pt,Pt),at.pointIsInside(Pt)){at.worldVerticesNeedsUpdate&&at.computeWorldVertices(gt,Jt),at.worldFaceNormalsNeedsUpdate&&at.computeWorldFaceNormals(Jt);for(var bt=0,Dt=at.faces.length;bt!==Dt;bt++){var jt=[at.worldVertices[at.faces[bt][0]]],oe=at.worldFaceNormals[bt];_t.vsub(jt[0],pt);var yt=-oe.dot(pt);(qt===null||Math.abs(yt)<Math.abs(qt))&&(qt=yt,nt=bt,Rt.copy(oe))}if(nt!==-1){var w=this.createContactEquation(Ut,At,dt,at);Rt.mult(qt,It),It.vadd(_t,It),It.vsub(gt,It),w.rj.copy(It),Rt.negate(w.ni),w.ri.set(0,0,0);var V=w.ri,tt=w.rj;V.vadd(_t,V),V.vsub(Ut.position,V),tt.vadd(gt,tt),tt.vsub(At.position,tt),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[a.types.BOX|a.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(at,dt,gt,_t,Jt,Bt,At,Ut){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexHeightfield(at.convexPolyhedronRepresentation,dt,gt,_t,Jt,Bt,At,Ut)};var Ot=new c,re=new c,Te=[0];v.prototype[a.types.CONVEXPOLYHEDRON|a.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(at,dt,gt,_t,Jt,Bt,At,Ut){var nt=dt.data,Rt=dt.elementSize,It=at.boundingSphereRadius,qt=re,Pt=Te,bt=Ot;d.pointToLocalFrame(_t,Bt,gt,bt);var Dt=Math.floor((bt.x-It)/Rt)-1,jt=Math.ceil((bt.x+It)/Rt)+1,oe=Math.floor((bt.y-It)/Rt)-1,yt=Math.ceil((bt.y+It)/Rt)+1;if(!(jt<0||yt<0||Dt>nt.length||oe>nt[0].length)){Dt<0&&(Dt=0),jt<0&&(jt=0),oe<0&&(oe=0),yt<0&&(yt=0),Dt>=nt.length&&(Dt=nt.length-1),jt>=nt.length&&(jt=nt.length-1),yt>=nt[0].length&&(yt=nt[0].length-1),oe>=nt[0].length&&(oe=nt[0].length-1);var w=[];dt.getRectMinMax(Dt,oe,jt,yt,w);var V=w[0],tt=w[1];if(!(bt.z-It>tt||bt.z+It<V))for(var Z=Dt;Z<jt;Z++)for(var G=oe;G<yt;G++)dt.getConvexTrianglePillar(Z,G,!1),d.pointToWorldFrame(_t,Bt,dt.pillarOffset,qt),gt.distanceTo(qt)<dt.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.convexConvex(at,dt.pillarConvex,gt,qt,Jt,Bt,At,Ut,null,null,Pt,null),dt.getConvexTrianglePillar(Z,G,!0),d.pointToWorldFrame(_t,Bt,dt.pillarOffset,qt),gt.distanceTo(qt)<dt.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.convexConvex(at,dt.pillarConvex,gt,qt,Jt,Bt,At,Ut,null,null,Pt,null)}};var Ae=new c,ae=new c;v.prototype[a.types.SPHERE|a.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(at,dt,gt,_t,Jt,Bt,At,Ut){var nt=dt.data,Rt=at.radius,It=dt.elementSize,qt=ae,Pt=Ae;d.pointToLocalFrame(_t,Bt,gt,Pt);var bt=Math.floor((Pt.x-Rt)/It)-1,Dt=Math.ceil((Pt.x+Rt)/It)+1,jt=Math.floor((Pt.y-Rt)/It)-1,oe=Math.ceil((Pt.y+Rt)/It)+1;if(!(Dt<0||oe<0||bt>nt.length||oe>nt[0].length)){bt<0&&(bt=0),Dt<0&&(Dt=0),jt<0&&(jt=0),oe<0&&(oe=0),bt>=nt.length&&(bt=nt.length-1),Dt>=nt.length&&(Dt=nt.length-1),oe>=nt[0].length&&(oe=nt[0].length-1),jt>=nt[0].length&&(jt=nt[0].length-1);var yt=[];dt.getRectMinMax(bt,jt,Dt,oe,yt);var w=yt[0],V=yt[1];if(!(Pt.z-Rt>V||Pt.z+Rt<w))for(var tt=this.result,Z=bt;Z<Dt;Z++)for(var G=jt;G<oe;G++){var st=tt.length;dt.getConvexTrianglePillar(Z,G,!1),d.pointToWorldFrame(_t,Bt,dt.pillarOffset,qt),gt.distanceTo(qt)<dt.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.sphereConvex(at,dt.pillarConvex,gt,qt,Jt,Bt,At,Ut),dt.getConvexTrianglePillar(Z,G,!0),d.pointToWorldFrame(_t,Bt,dt.pillarOffset,qt),gt.distanceTo(qt)<dt.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.sphereConvex(at,dt.pillarConvex,gt,qt,Jt,Bt,At,Ut);var Ct=tt.length-st;if(Ct>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,s){n.exports=_;var r=e("../shapes/Shape"),a=e("../math/Vec3"),o=e("../math/Quaternion"),c=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var d=e("./Narrowphase"),h=e("../utils/EventTarget"),l=e("../collision/ArrayCollisionMatrix"),u=e("../material/Material"),f=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),p=e("../collision/AABB"),x=e("../collision/Ray"),M=e("../collision/NaiveBroadphase");function _(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new a,this.broadphase=new M,this.bodies=[],this.solver=new c,this.constraints=[],this.narrowphase=new d(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new u("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}_.prototype=new h,new p;var A=new x;if(_.prototype.getContactMaterial=function(L,Q){return this.contactMaterialTable.get(L.id,Q.id)},_.prototype.numObjects=function(){return this.bodies.length},_.prototype.collisionMatrixTick=function(){var L=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=L,this.collisionMatrix.reset()},_.prototype.add=_.prototype.addBody=function(L){this.bodies.indexOf(L)===-1&&(L.index=this.bodies.length,this.bodies.push(L),L.world=this,L.initPosition.copy(L.position),L.initVelocity.copy(L.velocity),L.timeLastSleepy=this.time,L instanceof v&&(L.initAngularVelocity.copy(L.angularVelocity),L.initQuaternion.copy(L.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=L,this.dispatchEvent(this.addBodyEvent))},_.prototype.addConstraint=function(L){this.constraints.push(L)},_.prototype.removeConstraint=function(L){var Q=this.constraints.indexOf(L);Q!==-1&&this.constraints.splice(Q,1)},_.prototype.rayTest=function(L,Q,$){$ instanceof m?this.raycastClosest(L,Q,{skipBackfaces:!0},$):this.raycastAll(L,Q,{skipBackfaces:!0},$)},_.prototype.raycastAll=function(L,Q,$,F){return $.mode=x.ALL,$.from=L,$.to=Q,$.callback=F,A.intersectWorld(this,$)},_.prototype.raycastAny=function(L,Q,$,F){return $.mode=x.ANY,$.from=L,$.to=Q,$.result=F,A.intersectWorld(this,$)},_.prototype.raycastClosest=function(L,Q,$,F){return $.mode=x.CLOSEST,$.from=L,$.to=Q,$.result=F,A.intersectWorld(this,$)},_.prototype.remove=function(L){L.world=null;var Q=this.bodies.length-1,$=this.bodies,F=$.indexOf(L);if(F!==-1){$.splice(F,1);for(var j=0;j!==$.length;j++)$[j].index=j;this.collisionMatrix.setNumObjects(Q),this.removeBodyEvent.body=L,this.dispatchEvent(this.removeBodyEvent)}},_.prototype.removeBody=_.prototype.remove,_.prototype.addMaterial=function(L){this.materials.push(L)},_.prototype.addContactMaterial=function(L){this.contactmaterials.push(L),this.contactMaterialTable.set(L.materials[0].id,L.materials[1].id,L)},typeof performance>"u"&&(performance={}),!performance.now){var I=Date.now();performance.timing&&performance.timing.navigationStart&&(I=performance.timing.navigationStart),performance.now=function(){return Date.now()-I}}var U=new a;_.prototype.step=function(L,Q,$){if($=$||10,Q=Q||0,Q===0)this.internalStep(L),this.time+=L;else{var F=Math.floor((this.time+Q)/L)-Math.floor(this.time/L);F=Math.min(F,$);for(var j=performance.now(),z=0;z!==F&&(this.internalStep(L),!(performance.now()-j>L*1e3));z++);this.time+=Q;for(var b=this.time%L,R=b/L,H=U,K=this.bodies,et=0;et!==K.length;et++){var k=K[et];k.type!==v.STATIC&&k.sleepState!==v.SLEEPING?(k.position.vsub(k.previousPosition,H),H.scale(R,H),k.position.vadd(H,k.interpolatedPosition)):(k.interpolatedPosition.copy(k.position),k.interpolatedQuaternion.copy(k.quaternion))}}};var P={type:"postStep"},E={type:"preStep"},y={type:"collide",body:null,contact:null},T=[],B=[],N=[],X=[];new a,new a,new a,new a,new a,new a,new a,new a,new a,new o;var q=new o,J=new o,O=new a;_.prototype.internalStep=function(L){this.dt=L;var Q=this.contacts,$=N,F=X,j=this.numObjects(),z=this.bodies,b=this.solver,R=this.gravity,H=this.doProfiling,K=this.profile,et=v.DYNAMIC,k,it=this.constraints,mt=B;R.norm();var St=R.x,Et=R.y,D=R.z,ft=0;for(H&&(k=performance.now()),ft=0;ft!==j;ft++){var ut=z[ft];if(ut.type&et){var Xt=ut.force,xt=ut.mass;Xt.x+=xt*St,Xt.y+=xt*Et,Xt.z+=xt*D}}for(var ft=0,ne=this.subsystems.length;ft!==ne;ft++)this.subsystems[ft].update();H&&(k=performance.now()),$.length=0,F.length=0,this.broadphase.collisionPairs(this,$,F),H&&(K.broadphase=performance.now()-k);var Zt=it.length;for(ft=0;ft!==Zt;ft++){var vt=it[ft];if(!vt.collideConnected)for(var C=$.length-1;C>=0;C-=1)(vt.bodyA===$[C]&&vt.bodyB===F[C]||vt.bodyB===$[C]&&vt.bodyA===F[C])&&($.splice(C,1),F.splice(C,1))}this.collisionMatrixTick(),H&&(k=performance.now());var S=T,Y=Q.length;for(ft=0;ft!==Y;ft++)S.push(Q[ft]);Q.length=0;var ct=this.frictionEquations.length;for(ft=0;ft!==ct;ft++)mt.push(this.frictionEquations[ft]);this.frictionEquations.length=0,this.narrowphase.getContacts($,F,this,Q,S,this.frictionEquations,mt),H&&(K.narrowphase=performance.now()-k),H&&(k=performance.now());for(var ft=0;ft<this.frictionEquations.length;ft++)b.addEquation(this.frictionEquations[ft]);for(var ht=Q.length,ot=0;ot!==ht;ot++){var vt=Q[ot],ut=vt.bi,wt=vt.bj;vt.si,vt.sj;var Tt;if(ut.material&&wt.material?Tt=this.getContactMaterial(ut.material,wt.material)||this.defaultContactMaterial:Tt=this.defaultContactMaterial,Tt.friction,ut.material&&wt.material&&(ut.material.friction>=0&&wt.material.friction>=0&&ut.material.friction*wt.material.friction,ut.material.restitution>=0&&wt.material.restitution>=0&&(vt.restitution=ut.material.restitution*wt.material.restitution)),b.addEquation(vt),ut.allowSleep&&ut.type===v.DYNAMIC&&ut.sleepState===v.SLEEPING&&wt.sleepState===v.AWAKE&&wt.type!==v.STATIC){var Ft=wt.velocity.norm2()+wt.angularVelocity.norm2(),le=Math.pow(wt.sleepSpeedLimit,2);Ft>=le*2&&(ut._wakeUpAfterNarrowphase=!0)}if(wt.allowSleep&&wt.type===v.DYNAMIC&&wt.sleepState===v.SLEEPING&&ut.sleepState===v.AWAKE&&ut.type!==v.STATIC){var Mt=ut.velocity.norm2()+ut.angularVelocity.norm2(),kt=Math.pow(ut.sleepSpeedLimit,2);Mt>=kt*2&&(wt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ut,wt,!0),this.collisionMatrixPrevious.get(ut,wt)||(y.body=wt,y.contact=vt,ut.dispatchEvent(y),y.body=ut,wt.dispatchEvent(y))}for(H&&(K.makeContactConstraints=performance.now()-k,k=performance.now()),ft=0;ft!==j;ft++){var ut=z[ft];ut._wakeUpAfterNarrowphase&&(ut.wakeUp(),ut._wakeUpAfterNarrowphase=!1)}var Zt=it.length;for(ft=0;ft!==Zt;ft++){var vt=it[ft];vt.update();for(var C=0,$t=vt.equations.length;C!==$t;C++){var Wt=vt.equations[C];b.addEquation(Wt)}}b.solve(L,this),H&&(K.solve=performance.now()-k),b.removeAllEquations();var ce=Math.pow;for(ft=0;ft!==j;ft++){var ut=z[ft];if(ut.type&et){var ie=ce(1-ut.linearDamping,L),me=ut.velocity;me.mult(ie,me);var W=ut.angularVelocity;if(W){var Lt=ce(1-ut.angularDamping,L);W.mult(Lt,W)}}}for(this.dispatchEvent(E),ft=0;ft!==j;ft++){var ut=z[ft];ut.preStep&&ut.preStep.call(ut)}H&&(k=performance.now());var lt=q,pt=J,Vt=this.stepnumber,Ot=v.DYNAMIC|v.KINEMATIC,re=Vt%(this.quatNormalizeSkip+1)===0,Te=this.quatNormalizeFast,Ae=L*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,ft=0;ft!==j;ft++){var ae=z[ft],at=ae.force,dt=ae.torque;if(ae.type&Ot&&ae.sleepState!==v.SLEEPING){var gt=ae.velocity,_t=ae.angularVelocity,Jt=ae.position,Bt=ae.quaternion,At=ae.invMass,Ut=ae.invInertiaWorld;gt.x+=at.x*At*L,gt.y+=at.y*At*L,gt.z+=at.z*At*L,ae.angularVelocity&&(Ut.vmult(dt,O),O.mult(L,O),O.vadd(_t,_t)),Jt.x+=gt.x*L,Jt.y+=gt.y*L,Jt.z+=gt.z*L,ae.angularVelocity&&(lt.set(_t.x,_t.y,_t.z,0),lt.mult(Bt,pt),Bt.x+=Ae*pt.x,Bt.y+=Ae*pt.y,Bt.z+=Ae*pt.z,Bt.w+=Ae*pt.w,re&&(Te?Bt.normalizeFast():Bt.normalize())),ae.aabb&&(ae.aabbNeedsUpdate=!0),ae.updateInertiaWorld&&ae.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,H&&(K.integrate=performance.now()-k),this.time+=L,this.stepnumber+=1,this.dispatchEvent(P),ft=0;ft!==j;ft++){var ut=z[ft],nt=ut.postStep;nt&&nt.call(ut)}if(this.allowSleep)for(ft=0;ft!==j;ft++)z[ft].sleepTick(this.time)},_.prototype.clearForces=function(){for(var L=this.bodies,Q=L.length,$=0;$!==Q;$++){var F=L[$];F.force,F.torque,F.force.set(0,0,0),F.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})}(Qr)),Qr.exports}var _n=yp();class Mp{constructor(t,e){this.scene=t,this.world=e,this.textMeshes=[],this.currentText="",this.textContainer=this._createTextContainer(),this.physicsMaterial=new _n.Material("physicsMaterial")}_createTextContainer(){const t=document.createElement("div");return t.id="text-container",t.style.position="absolute",t.style.width="100%",t.style.textAlign="center",t.style.top="50%",t.style.fontSize="32px",t.style.color="white",t.style.pointerEvents="none",document.getElementById("app").appendChild(t),t}animateText(t){this.currentText=t,this.textContainer.innerHTML="",this.textMeshes.forEach(n=>{this.scene.remove(n.mesh),this.world.remove(n.body)}),this.textMeshes=[];const e=[];for(let n=0;n<t.length;n++){const s=document.createElement("span");s.textContent=t[n],s.style.display="inline-block",s.style.opacity="0",s.style.transform="scale(2)",s.style.transition="all 0.5s ease-out",this.textContainer.appendChild(s),e.push(s),setTimeout(()=>{s.style.opacity="1",s.style.transform="scale(1)"},n*100)}setTimeout(()=>{this._dropCharacters(e)},t.length*100+800)}_dropCharacters(t){t.forEach((e,n)=>{setTimeout(()=>{const s=e.getBoundingClientRect(),r=s.left+s.width/2-window.innerWidth/2,a=-s.top-s.height/2+window.innerHeight/2;e.style.display="none",this._createPhysicsChar({char:e.textContent,x:r*.01,y:a*.01,width:s.width*.01,height:s.height*.01})},n*50)})}_createPhysicsChar(t){const e=document.createElement("canvas"),n=e.getContext("2d");e.width=128,e.height=128,n.fillStyle="white",n.font="bold 100px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(t.char,e.width/2,e.height/2);const s=new _c(e),r=t.width*3,a=t.height*3,o=.2,c=new Ri(r,a,o),d=new yc({map:s,transparent:!0}),h=new Ke(c,d);h.castShadow=!0,h.position.set(t.x*3,t.y*3,0),this.scene.add(h);const l=new _n.Box(new _n.Vec3(r/2,a/2,o/2)),u=new _n.Body({mass:1,shape:l,material:this.physicsMaterial});u.position.copy(h.position),u.velocity.set((Math.random()-.5)*3,Math.random()*2+3,(Math.random()-.5)*2),u.angularVelocity.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10),this.world.addBody(u),this.textMeshes.push({mesh:h,body:u})}update(){this.textMeshes.forEach(t=>{t.mesh.position.copy(t.body.position),t.mesh.quaternion.copy(t.body.quaternion)})}dispose(){this.textMeshes.forEach(t=>{this.scene.remove(t.mesh),this.world.remove(t.body)}),this.textContainer&&this.textContainer.parentNode&&this.textContainer.parentNode.removeChild(this.textContainer)}}class Sp{constructor(t){this.container=t,this.interactiveObjects=new Set,this.raycaster=new Uc,this.mouse=new xe,this.draggedObject=null,this.state={selectedCards:new Set,selectionListeners:new Set},this._initializeScene(),this._setupLighting(),this._initializePhysics(),this._setupEventListeners(),this.textPhysics=null}_initializePhysics(){this.world=new _n.World,this.world.gravity.set(0,-9.82,0),this.world.broadphase=new _n.NaiveBroadphase;const t=new _n.Plane,e=new _n.Body({mass:0,shape:t});e.quaternion.setFromAxisAngle(new _n.Vec3(1,0,0),-Math.PI/2),e.position.set(0,-2,0),this.world.addBody(e)}initTextPhysics(){return this.textPhysics||(this.textPhysics=new Mp(this.scene,this.world)),this.textPhysics}animateText(t){return this.textPhysics?(this.textPhysics.animateText(t),!0):(console.warn("TextPhysics not initialized"),!1)}update(t){const e=performance.now(),n=e-(this.lastPhysicsTime||e);this.lastPhysicsTime=e;const s=1/60;this.world.step(s,n/1e3,3),this.textPhysics&&this.textPhysics.update(t),this.interactiveObjects.forEach(r=>r.update(t)),this.renderer.render(this.scene,this.camera)}dispose(){window.removeEventListener("resize",this._onWindowResize),this.renderer.domElement.removeEventListener("pointerdown",this._onPointerDown),this.renderer.domElement.removeEventListener("pointermove",this._onPointerMove),this.renderer.domElement.removeEventListener("pointerup",this._onPointerUp),this.renderer.domElement.removeEventListener("pointerout",this._onPointerUp),this.textPhysics&&(this.textPhysics.dispose(),this.textPhysics=null),this.interactiveObjects.forEach(t=>{t.dispose()}),this.interactiveObjects.clear(),this.renderer.dispose(),this.container.contains(this.renderer.domElement)&&this.container.removeChild(this.renderer.domElement)}_initializeScene(){this.scene=new mc,this.scene.background=new _e(2759485),this.camera=new Ze(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.renderer=new _p({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=oo,this.container.appendChild(this.renderer.domElement);const t=new Kn(20,20),e=new xc({opacity:.3});this.ground=new Ke(t,e),this.ground.position.z=-1,this.ground.rotation.x=0,this.ground.receiveShadow=!0,this.scene.add(this.ground)}_setupLighting(){this.mainLight=new Lc(16777215,.7),this.mainLight.position.set(5,5,5),this.mainLight.castShadow=!0;const t=this.mainLight.shadow.camera;t.near=.1,t.far=100,t.left=-10,t.right=10,t.top=10,t.bottom=-10,this.mainLight.shadow.mapSize.width=2048,this.mainLight.shadow.mapSize.height=2048,this.glareLight=new Cc(16777215,1),this.glareLight.position.set(3,3,5),this.glareLight.angle=Math.PI/4,this.glareLight.penumbra=.1,this.glareLight.decay=.5,this.ambientLight=new Ic(4210752,.6),this.scene.add(this.mainLight),this.scene.add(this.glareLight),this.scene.add(this.ambientLight)}_setupEventListeners(){window.addEventListener("resize",this._onWindowResize.bind(this)),this.renderer.domElement.addEventListener("pointerdown",this._onPointerDown.bind(this)),this.renderer.domElement.addEventListener("pointermove",this._onPointerMove.bind(this)),this.renderer.domElement.addEventListener("pointerup",this._onPointerUp.bind(this)),this.renderer.domElement.addEventListener("pointerout",this._onPointerUp.bind(this))}_onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}_updateMousePosition(t){this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1}_getInteractiveMeshes(){return Array.from(this.interactiveObjects).map(t=>t.interactiveMesh).filter(t=>t!=null)}_findParentObject(t){var e;return((e=t==null?void 0:t.userData)==null?void 0:e.parent)||null}_onPointerDown(t){this._updateMousePosition(t),this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.raycaster.intersectObjects(this._getInteractiveMeshes());if(e.length>0){const n=this._findParentObject(e[0].object);if(n){this.draggedObject=n;const s={clientX:t.clientX,clientY:t.clientY,ray:this.raycaster.ray,camera:this.camera};n.onDragStart(s),this._bringToFront(n)}}}_onPointerMove(t){const e=this.mouse.x;if(this._updateMousePosition(t),this.raycaster.setFromCamera(this.mouse,this.camera),this.draggedObject){if(this.draggedObject.config.dragBehavior.enabled){const n=new vn(new rt(0,0,1),0),s=new rt;if(this.raycaster.ray.intersectPlane(n,s),this.draggedObject.position.copy(s),this.draggedObject.position.add(this.draggedObject._state.dragOffset),this.draggedObject instanceof jr){const r=Gl.clamp((this.mouse.x-e)*-2,-Math.PI/4,Math.PI/4);this.draggedObject.rotation.z=r}}}else{const n=this.raycaster.intersectObjects(this._getInteractiveMeshes()),s={clientX:t.clientX,clientY:t.clientY,camera:this.camera};this.interactiveObjects.forEach(r=>{const a=n.some(o=>this._findParentObject(o.object)===r);a&&!r._state.isHovering?r.onPointerEnter(s):!a&&r._state.isHovering&&r.onPointerLeave(s),a&&r.onPointerMove(s)})}}_onPointerUp(t){this.draggedObject&&(this.draggedObject.onDragEnd({clientX:t.clientX,clientY:t.clientY}),this.draggedObject=null)}_bringToFront(t){let e=Math.max(...Array.from(this.interactiveObjects).map(n=>n.position.z));t._state.isSelected||(t.position.z=e+.01)}addSelectionListener(t){return typeof t!="function"?()=>{}:(this.state.selectionListeners.add(t),()=>{this.state.selectionListeners.delete(t)})}_notifySelectionChange(){const t=Array.from(this.state.selectedCards);this.state.selectionListeners.forEach(e=>{try{e(t)}catch(n){console.error("Error in selection listener:",n)}})}_handleSelectionChange(t){t instanceof jr&&(t._state.isSelected?this.state.selectedCards.add(t):this.state.selectedCards.delete(t),this._notifySelectionChange())}getSelectedCards(){return Array.from(this.state.selectedCards)}hasSelectedCards(){return this.state.selectedCards.size>0}addObject(t){return this.interactiveObjects.add(t),this.scene.add(t),"setCallback"in t&&(t.setCallback("onSelect",()=>this._handleSelectionChange(t)),t.setCallback("onDeselect",()=>this._handleSelectionChange(t))),t}addCard(t,e={}){const n=new jr({texture:t,...e});return this.addObject(n)}addConfirmButton(t,e){return this.addObject(t),t.setActive(!1),typeof e=="function"&&t.setCallback("onClick",e),this.addSelectionListener(n=>{t.setActive(n.length>0)}),t}removeObject(t){this.interactiveObjects.delete(t),this.scene.remove(t),t.dispose()}}let gn,Hs;function Ep(){const i=document.getElementById("app");if(!i)return;gn=new Sp(i),gn._initializePhysics(),gn.initTextPhysics(),new Ac().load("./textures/joker.png",e=>{const n=gn.addCard(e,{width:2,height:3,springPhysics:{strength:.3,damping:.75,wiggleStrength:.5,wiggleDamping:.6},dragBehavior:{returnSpeed:.1,dampingFactor:.95,enabled:!0},selectionBehavior:{enabled:!0,clickThreshold:200,moveThreshold:5},hoverBehavior:{enabled:!0}});n.sceneManager=gn,gn.animateText("Hello World"),zo()})}function zo(){Hs=requestAnimationFrame(zo),gn.update(1/60)}function wp(){Hs&&cancelAnimationFrame(Hs),gn&&gn.dispose()}document.addEventListener("DOMContentLoaded",Ep);window.addEventListener("unload",wp);

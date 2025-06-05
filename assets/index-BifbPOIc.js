(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sa="171",ll=0,Sa=1,cl=2,To=1,Ao=2,yn=3,zn=0,Ze=1,en=2,Bn=0,bi=1,ms=2,wa=3,Ea=4,hl=5,Kn=100,ul=101,dl=102,fl=103,pl=104,ml=200,vl=201,gl=202,_l=203,vs=204,gs=205,xl=206,yl=207,Ml=208,Sl=209,wl=210,El=211,bl=212,Tl=213,Al=214,_s=0,xs=1,ys=2,Ci=3,Ms=4,Ss=5,ws=6,Es=7,aa=0,Cl=1,Rl=2,On=0,Pl=1,Ll=2,Il=3,Dl=4,Nl=5,Ul=6,Fl=7,Co=300,Ri=301,Pi=302,bs=303,Ts=304,Nr=306,As=1e3,Qn=1001,Cs=1002,cn=1003,Bl=1004,tr=1005,fn=1006,Or=1007,Jn=1008,An=1009,Ro=1010,Po=1011,Ki=1012,oa=1013,ti=1014,Sn=1015,Qi=1016,la=1017,ca=1018,Li=1020,Lo=35902,Io=1021,Do=1022,ln=1023,No=1024,Uo=1025,Ti=1026,Ii=1027,Fo=1028,ha=1029,Bo=1030,ua=1031,da=1033,br=33776,Tr=33777,Ar=33778,Cr=33779,Rs=35840,Ps=35841,Ls=35842,Is=35843,Ds=36196,Ns=37492,Us=37496,Fs=37808,Bs=37809,Os=37810,zs=37811,Vs=37812,ks=37813,Hs=37814,Gs=37815,Ws=37816,Xs=37817,qs=37818,Ys=37819,Zs=37820,$s=37821,Rr=36492,Ks=36494,js=36495,Oo=36283,Qs=36284,Js=36285,ta=36286,Ol=3200,zl=3201,fa=0,Vl=1,Fn="",tn="srgb",Di="srgb-linear",Lr="linear",Ae="srgb",ii=7680,ba=519,kl=512,Hl=513,Gl=514,zo=515,Wl=516,Xl=517,ql=518,Yl=519,ea=35044,Ta="300 es",wn=2e3,Ir=2001;class Fi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const i=r.indexOf(e);i!==-1&&r.splice(i,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let i=0,a=r.length;i<a;i++)r[i].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Aa=1234567;const Zi=Math.PI/180,Ni=180/Math.PI;function bn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[s&255]+Oe[s>>8&255]+Oe[s>>16&255]+Oe[s>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function xe(s,t,e){return Math.max(t,Math.min(e,s))}function pa(s,t){return(s%t+t)%t}function Zl(s,t,e,n,r){return n+(s-t)*(r-n)/(e-t)}function $l(s,t,e){return s!==t?(e-s)/(t-s):0}function $i(s,t,e){return(1-e)*s+e*t}function Kl(s,t,e,n){return $i(s,t,1-Math.exp(-e*n))}function jl(s,t=1){return t-Math.abs(pa(s,t*2)-t)}function Ql(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Jl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function tc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function ec(s,t){return s+Math.random()*(t-s)}function nc(s){return s*(.5-Math.random())}function ic(s){s!==void 0&&(Aa=s);let t=Aa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rc(s){return s*Zi}function sc(s){return s*Ni}function ac(s){return(s&s-1)===0&&s!==0}function oc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function lc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function cc(s,t,e,n,r){const i=Math.cos,a=Math.sin,o=i(e/2),h=a(e/2),d=i((t+n)/2),c=a((t+n)/2),l=i((t-n)/2),u=a((t-n)/2),f=i((n-t)/2),v=a((n-t)/2);switch(r){case"XYX":s.set(o*c,h*l,h*u,o*d);break;case"YZY":s.set(h*u,o*c,h*l,o*d);break;case"ZXZ":s.set(h*l,h*u,o*c,o*d);break;case"XZX":s.set(o*c,h*v,h*f,o*d);break;case"YXY":s.set(h*f,o*c,h*v,o*d);break;case"ZYZ":s.set(h*v,h*f,o*c,o*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function on(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Te(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const hc={DEG2RAD:Zi,RAD2DEG:Ni,generateUUID:bn,clamp:xe,euclideanModulo:pa,mapLinear:Zl,inverseLerp:$l,lerp:$i,damp:Kl,pingpong:jl,smoothstep:Ql,smootherstep:Jl,randInt:tc,randFloat:ec,randFloatSpread:nc,seededRandom:ic,degToRad:rc,radToDeg:sc,isPowerOfTwo:ac,ceilPowerOfTwo:oc,floorPowerOfTwo:lc,setQuaternionFromProperEuler:cc,normalize:Te,denormalize:on};class le{constructor(t=0,e=0){le.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),i=this.x-t.x,a=this.y-t.y;return this.x=i*n-a*r+t.x,this.y=i*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(t,e,n,r,i,a,o,h,d){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,i,a,o,h,d)}set(t,e,n,r,i,a,o,h,d){const c=this.elements;return c[0]=t,c[1]=r,c[2]=o,c[3]=e,c[4]=i,c[5]=h,c[6]=n,c[7]=a,c[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,i=this.elements,a=n[0],o=n[3],h=n[6],d=n[1],c=n[4],l=n[7],u=n[2],f=n[5],v=n[8],g=r[0],m=r[3],p=r[6],x=r[1],M=r[4],_=r[7],T=r[2],P=r[5],D=r[8];return i[0]=a*g+o*x+h*T,i[3]=a*m+o*M+h*P,i[6]=a*p+o*_+h*D,i[1]=d*g+c*x+l*T,i[4]=d*m+c*M+l*P,i[7]=d*p+c*_+l*D,i[2]=u*g+f*x+v*T,i[5]=u*m+f*M+v*P,i[8]=u*p+f*_+v*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],h=t[6],d=t[7],c=t[8];return e*a*c-e*o*d-n*i*c+n*o*h+r*i*d-r*a*h}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],h=t[6],d=t[7],c=t[8],l=c*a-o*d,u=o*h-c*i,f=d*i-a*h,v=e*l+n*u+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=l*g,t[1]=(r*d-c*n)*g,t[2]=(o*n-r*a)*g,t[3]=u*g,t[4]=(c*e-r*h)*g,t[5]=(r*i-o*e)*g,t[6]=f*g,t[7]=(n*h-d*e)*g,t[8]=(a*e-n*i)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,i,a,o){const h=Math.cos(i),d=Math.sin(i);return this.set(n*h,n*d,-n*(h*a+d*o)+a+t,-r*d,r*h,-r*(-d*a+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(zr.makeScale(t,e)),this}rotate(t){return this.premultiply(zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zr=new fe;function Vo(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ji(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function uc(){const s=ji("canvas");return s.style.display="block",s}const Ca={};function Si(s){s in Ca||(Ca[s]=!0,console.warn(s))}function dc(s,t,e){return new Promise(function(n,r){function i(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(i,e);break;default:n()}}setTimeout(i,e)})}function fc(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pc(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ra=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pa=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mc(){const s={enabled:!0,workingColorSpace:Di,spaces:{},convert:function(r,i,a){return this.enabled===!1||i===a||!i||!a||(this.spaces[i].transfer===Ae&&(r.r=Tn(r.r),r.g=Tn(r.g),r.b=Tn(r.b)),this.spaces[i].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[i].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ae&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b))),r},fromWorkingColorSpace:function(r,i){return this.convert(r,this.workingColorSpace,i)},toWorkingColorSpace:function(r,i){return this.convert(r,i,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fn?Lr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,i=this.workingColorSpace){return r.fromArray(this.spaces[i].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,i,a){return r.copy(this.spaces[i].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Di]:{primaries:t,whitePoint:n,transfer:Lr,toXYZ:Ra,fromXYZ:Pa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:Ae,toXYZ:Ra,fromXYZ:Pa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),s}const Se=mc();function Tn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ai(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ri;class vc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ri===void 0&&(ri=ji("canvas")),ri.width=t.width,ri.height=t.height;const n=ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ji("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),i=r.data;for(let a=0;a<i.length;a++)i[a]=Tn(i[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Tn(e[n]/255)*255):e[n]=Tn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gc=0;class ko{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=bn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let i;if(Array.isArray(r)){i=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?i.push(Vr(r[a].image)):i.push(Vr(r[a]))}else i=Vr(r);n.url=i}return e||(t.images[this.uuid]=n),n}}function Vr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _c=0;class ke extends Fi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Qn,r=Qn,i=fn,a=Jn,o=ln,h=An,d=ke.DEFAULT_ANISOTROPY,c=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=bn(),this.name="",this.source=new ko(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=i,this.minFilter=a,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=h,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Co)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case As:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case Cs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case As:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case Cs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Co;ke.DEFAULT_ANISOTROPY=1;class Pe{constructor(t=0,e=0,n=0,r=1){Pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,i=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*i,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,i;const h=t.elements,d=h[0],c=h[4],l=h[8],u=h[1],f=h[5],v=h[9],g=h[2],m=h[6],p=h[10];if(Math.abs(c-u)<.01&&Math.abs(l-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+u)<.1&&Math.abs(l+g)<.1&&Math.abs(v+m)<.1&&Math.abs(d+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(d+1)/2,_=(f+1)/2,T=(p+1)/2,P=(c+u)/4,D=(l+g)/4,R=(v+m)/4;return M>_&&M>T?M<.01?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(M),r=P/n,i=D/n):_>T?_<.01?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(_),n=P/r,i=R/r):T<.01?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(T),n=D/i,r=R/i),this.set(n,r,i,e),this}let x=Math.sqrt((m-v)*(m-v)+(l-g)*(l-g)+(u-c)*(u-c));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(l-g)/x,this.z=(u-c)/x,this.w=Math.acos((d+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this.w=xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this.w=xe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xc extends Fi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const i=new ke(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ko(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends xc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ho extends ke{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yc extends ke{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,i,a,o){let h=n[r+0],d=n[r+1],c=n[r+2],l=n[r+3];const u=i[a+0],f=i[a+1],v=i[a+2],g=i[a+3];if(o===0){t[e+0]=h,t[e+1]=d,t[e+2]=c,t[e+3]=l;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=v,t[e+3]=g;return}if(l!==g||h!==u||d!==f||c!==v){let m=1-o;const p=h*u+d*f+c*v+l*g,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const T=Math.sqrt(M),P=Math.atan2(T,p*x);m=Math.sin(m*P)/T,o=Math.sin(o*P)/T}const _=o*x;if(h=h*m+u*_,d=d*m+f*_,c=c*m+v*_,l=l*m+g*_,m===1-o){const T=1/Math.sqrt(h*h+d*d+c*c+l*l);h*=T,d*=T,c*=T,l*=T}}t[e]=h,t[e+1]=d,t[e+2]=c,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,r,i,a){const o=n[r],h=n[r+1],d=n[r+2],c=n[r+3],l=i[a],u=i[a+1],f=i[a+2],v=i[a+3];return t[e]=o*v+c*l+h*f-d*u,t[e+1]=h*v+c*u+d*l-o*f,t[e+2]=d*v+c*f+o*u-h*l,t[e+3]=c*v-o*l-h*u-d*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,i=t._z,a=t._order,o=Math.cos,h=Math.sin,d=o(n/2),c=o(r/2),l=o(i/2),u=h(n/2),f=h(r/2),v=h(i/2);switch(a){case"XYZ":this._x=u*c*l+d*f*v,this._y=d*f*l-u*c*v,this._z=d*c*v+u*f*l,this._w=d*c*l-u*f*v;break;case"YXZ":this._x=u*c*l+d*f*v,this._y=d*f*l-u*c*v,this._z=d*c*v-u*f*l,this._w=d*c*l+u*f*v;break;case"ZXY":this._x=u*c*l-d*f*v,this._y=d*f*l+u*c*v,this._z=d*c*v+u*f*l,this._w=d*c*l-u*f*v;break;case"ZYX":this._x=u*c*l-d*f*v,this._y=d*f*l+u*c*v,this._z=d*c*v-u*f*l,this._w=d*c*l+u*f*v;break;case"YZX":this._x=u*c*l+d*f*v,this._y=d*f*l+u*c*v,this._z=d*c*v-u*f*l,this._w=d*c*l-u*f*v;break;case"XZY":this._x=u*c*l-d*f*v,this._y=d*f*l-u*c*v,this._z=d*c*v+u*f*l,this._w=d*c*l+u*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],i=e[8],a=e[1],o=e[5],h=e[9],d=e[2],c=e[6],l=e[10],u=n+o+l;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-h)*f,this._y=(i-d)*f,this._z=(a-r)*f}else if(n>o&&n>l){const f=2*Math.sqrt(1+n-o-l);this._w=(c-h)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(i+d)/f}else if(o>l){const f=2*Math.sqrt(1+o-n-l);this._w=(i-d)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(h+c)/f}else{const f=2*Math.sqrt(1+l-n-o);this._w=(a-r)/f,this._x=(i+d)/f,this._y=(h+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,i=t._z,a=t._w,o=e._x,h=e._y,d=e._z,c=e._w;return this._x=n*c+a*o+r*d-i*h,this._y=r*c+a*h+i*o-n*d,this._z=i*c+a*d+n*h-r*o,this._w=a*c-n*o-r*h-i*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,i=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+i*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;const h=1-o*o;if(h<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*r+e*this._y,this._z=f*i+e*this._z,this.normalize(),this}const d=Math.sqrt(h),c=Math.atan2(d,o),l=Math.sin((1-e)*c)/d,u=Math.sin(e*c)/d;return this._w=a*l+this._w*u,this._x=n*l+this._x*u,this._y=r*l+this._y*u,this._z=i*l+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),i*Math.sin(e),i*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(La.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(La.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6]*r,this.y=i[1]*e+i[4]*n+i[7]*r,this.z=i[2]*e+i[5]*n+i[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,i=t.elements,a=1/(i[3]*e+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*e+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*e+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*e+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,i=t.x,a=t.y,o=t.z,h=t.w,d=2*(a*r-o*n),c=2*(o*e-i*r),l=2*(i*n-a*e);return this.x=e+h*d+a*l-o*c,this.y=n+h*c+o*d-i*l,this.z=r+h*l+i*c-a*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,i=t.elements;return this.x=i[0]*e+i[4]*n+i[8]*r,this.y=i[1]*e+i[5]*n+i[9]*r,this.z=i[2]*e+i[6]*n+i[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,i=t.z,a=e.x,o=e.y,h=e.z;return this.x=r*h-i*o,this.y=i*a-n*h,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kr.copy(this).projectOnVector(t),this.sub(kr)}reflect(t){return this.sub(kr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kr=new O,La=new ni;class Ji{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const i=n.getAttribute("position");if(e===!0&&i!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=i.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(i,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(t.matrixWorld),this.union(er)}const r=t.children;for(let i=0,a=r.length;i<a;i++)this.expandByObject(r[i],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oi),nr.subVectors(this.max,Oi),si.subVectors(t.a,Oi),ai.subVectors(t.b,Oi),oi.subVectors(t.c,Oi),Pn.subVectors(ai,si),Ln.subVectors(oi,ai),Gn.subVectors(si,oi);let e=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Gn.z,Gn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Gn.z,0,-Gn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Gn.y,Gn.x,0];return!Hr(e,si,ai,oi,nr)||(e=[1,0,0,0,1,0,0,0,1],!Hr(e,si,ai,oi,nr))?!1:(ir.crossVectors(Pn,Ln),e=[ir.x,ir.y,ir.z],Hr(e,si,ai,oi,nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mn=[new O,new O,new O,new O,new O,new O,new O,new O],rn=new O,er=new Ji,si=new O,ai=new O,oi=new O,Pn=new O,Ln=new O,Gn=new O,Oi=new O,nr=new O,ir=new O,Wn=new O;function Hr(s,t,e,n,r){for(let i=0,a=s.length-3;i<=a;i+=3){Wn.fromArray(s,i);const o=r.x*Math.abs(Wn.x)+r.y*Math.abs(Wn.y)+r.z*Math.abs(Wn.z),h=t.dot(Wn),d=e.dot(Wn),c=n.dot(Wn);if(Math.max(-Math.max(h,d,c),Math.min(h,d,c))>o)return!1}return!0}const Mc=new Ji,zi=new O,Gr=new O;class ma{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mc.setFromPoints(t).getCenter(n);let r=0;for(let i=0,a=t.length;i<a;i++)r=Math.max(r,n.distanceToSquared(t[i]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zi.subVectors(t,this.center);const e=zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(zi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zi.copy(t.center).add(Gr)),this.expandByPoint(zi.copy(t.center).sub(Gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new O,Wr=new O,rr=new O,In=new O,Xr=new O,sr=new O,qr=new O;class Go{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Wr.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),In.copy(this.origin).sub(Wr);const i=t.distanceTo(e)*.5,a=-this.direction.dot(rr),o=In.dot(this.direction),h=-In.dot(rr),d=In.lengthSq(),c=Math.abs(1-a*a);let l,u,f,v;if(c>0)if(l=a*h-o,u=a*o-h,v=i*c,l>=0)if(u>=-v)if(u<=v){const g=1/c;l*=g,u*=g,f=l*(l+a*u+2*o)+u*(a*l+u+2*h)+d}else u=i,l=Math.max(0,-(a*u+o)),f=-l*l+u*(u+2*h)+d;else u=-i,l=Math.max(0,-(a*u+o)),f=-l*l+u*(u+2*h)+d;else u<=-v?(l=Math.max(0,-(-a*i+o)),u=l>0?-i:Math.min(Math.max(-i,-h),i),f=-l*l+u*(u+2*h)+d):u<=v?(l=0,u=Math.min(Math.max(-i,-h),i),f=u*(u+2*h)+d):(l=Math.max(0,-(a*i+o)),u=l>0?i:Math.min(Math.max(-i,-h),i),f=-l*l+u*(u+2*h)+d);else u=a>0?-i:i,l=Math.max(0,-(a*u+o)),f=-l*l+u*(u+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,l),r&&r.copy(Wr).addScaledVector(rr,u),f}intersectSphere(t,e){vn.subVectors(t.center,this.origin);const n=vn.dot(this.direction),r=vn.dot(vn)-n*n,i=t.radius*t.radius;if(r>i)return null;const a=Math.sqrt(i-r),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,i,a,o,h;const d=1/this.direction.x,c=1/this.direction.y,l=1/this.direction.z,u=this.origin;return d>=0?(n=(t.min.x-u.x)*d,r=(t.max.x-u.x)*d):(n=(t.max.x-u.x)*d,r=(t.min.x-u.x)*d),c>=0?(i=(t.min.y-u.y)*c,a=(t.max.y-u.y)*c):(i=(t.max.y-u.y)*c,a=(t.min.y-u.y)*c),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),l>=0?(o=(t.min.z-u.z)*l,h=(t.max.z-u.z)*l):(o=(t.max.z-u.z)*l,h=(t.min.z-u.z)*l),n>h||o>r)||((o>n||n!==n)&&(n=o),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,r,i){Xr.subVectors(e,t),sr.subVectors(n,t),qr.crossVectors(Xr,sr);let a=this.direction.dot(qr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;In.subVectors(this.origin,t);const h=o*this.direction.dot(sr.crossVectors(In,sr));if(h<0)return null;const d=o*this.direction.dot(Xr.cross(In));if(d<0||h+d>a)return null;const c=-o*In.dot(qr);return c<0?null:this.at(c/a,i)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(t,e,n,r,i,a,o,h,d,c,l,u,f,v,g,m){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,i,a,o,h,d,c,l,u,f,v,g,m)}set(t,e,n,r,i,a,o,h,d,c,l,u,f,v,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=i,p[5]=a,p[9]=o,p[13]=h,p[2]=d,p[6]=c,p[10]=l,p[14]=u,p[3]=f,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/li.setFromMatrixColumn(t,0).length(),i=1/li.setFromMatrixColumn(t,1).length(),a=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*i,e[5]=n[5]*i,e[6]=n[6]*i,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,i=t.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(r),d=Math.sin(r),c=Math.cos(i),l=Math.sin(i);if(t.order==="XYZ"){const u=a*c,f=a*l,v=o*c,g=o*l;e[0]=h*c,e[4]=-h*l,e[8]=d,e[1]=f+v*d,e[5]=u-g*d,e[9]=-o*h,e[2]=g-u*d,e[6]=v+f*d,e[10]=a*h}else if(t.order==="YXZ"){const u=h*c,f=h*l,v=d*c,g=d*l;e[0]=u+g*o,e[4]=v*o-f,e[8]=a*d,e[1]=a*l,e[5]=a*c,e[9]=-o,e[2]=f*o-v,e[6]=g+u*o,e[10]=a*h}else if(t.order==="ZXY"){const u=h*c,f=h*l,v=d*c,g=d*l;e[0]=u-g*o,e[4]=-a*l,e[8]=v+f*o,e[1]=f+v*o,e[5]=a*c,e[9]=g-u*o,e[2]=-a*d,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){const u=a*c,f=a*l,v=o*c,g=o*l;e[0]=h*c,e[4]=v*d-f,e[8]=u*d+g,e[1]=h*l,e[5]=g*d+u,e[9]=f*d-v,e[2]=-d,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){const u=a*h,f=a*d,v=o*h,g=o*d;e[0]=h*c,e[4]=g-u*l,e[8]=v*l+f,e[1]=l,e[5]=a*c,e[9]=-o*c,e[2]=-d*c,e[6]=f*l+v,e[10]=u-g*l}else if(t.order==="XZY"){const u=a*h,f=a*d,v=o*h,g=o*d;e[0]=h*c,e[4]=-l,e[8]=d*c,e[1]=u*l+g,e[5]=a*c,e[9]=f*l-v,e[2]=v*l-f,e[6]=o*c,e[10]=g*l+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sc,t,wc)}lookAt(t,e,n){const r=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Dn.crossVectors(n,Ke),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Dn.crossVectors(n,Ke)),Dn.normalize(),ar.crossVectors(Ke,Dn),r[0]=Dn.x,r[4]=ar.x,r[8]=Ke.x,r[1]=Dn.y,r[5]=ar.y,r[9]=Ke.y,r[2]=Dn.z,r[6]=ar.z,r[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,i=this.elements,a=n[0],o=n[4],h=n[8],d=n[12],c=n[1],l=n[5],u=n[9],f=n[13],v=n[2],g=n[6],m=n[10],p=n[14],x=n[3],M=n[7],_=n[11],T=n[15],P=r[0],D=r[4],R=r[8],S=r[12],y=r[1],E=r[5],F=r[9],U=r[13],Y=r[2],W=r[6],J=r[10],z=r[14],I=r[3],tt=r[7],K=r[11],B=r[15];return i[0]=a*P+o*y+h*Y+d*I,i[4]=a*D+o*E+h*W+d*tt,i[8]=a*R+o*F+h*J+d*K,i[12]=a*S+o*U+h*z+d*B,i[1]=c*P+l*y+u*Y+f*I,i[5]=c*D+l*E+u*W+f*tt,i[9]=c*R+l*F+u*J+f*K,i[13]=c*S+l*U+u*z+f*B,i[2]=v*P+g*y+m*Y+p*I,i[6]=v*D+g*E+m*W+p*tt,i[10]=v*R+g*F+m*J+p*K,i[14]=v*S+g*U+m*z+p*B,i[3]=x*P+M*y+_*Y+T*I,i[7]=x*D+M*E+_*W+T*tt,i[11]=x*R+M*F+_*J+T*K,i[15]=x*S+M*U+_*z+T*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],i=t[12],a=t[1],o=t[5],h=t[9],d=t[13],c=t[2],l=t[6],u=t[10],f=t[14],v=t[3],g=t[7],m=t[11],p=t[15];return v*(+i*h*l-r*d*l-i*o*u+n*d*u+r*o*f-n*h*f)+g*(+e*h*f-e*d*u+i*a*u-r*a*f+r*d*c-i*h*c)+m*(+e*d*l-e*o*f-i*a*l+n*a*f+i*o*c-n*d*c)+p*(-r*o*c-e*h*l+e*o*u+r*a*l-n*a*u+n*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],h=t[6],d=t[7],c=t[8],l=t[9],u=t[10],f=t[11],v=t[12],g=t[13],m=t[14],p=t[15],x=l*m*d-g*u*d+g*h*f-o*m*f-l*h*p+o*u*p,M=v*u*d-c*m*d-v*h*f+a*m*f+c*h*p-a*u*p,_=c*g*d-v*l*d+v*o*f-a*g*f-c*o*p+a*l*p,T=v*l*h-c*g*h-v*o*u+a*g*u+c*o*m-a*l*m,P=e*x+n*M+r*_+i*T;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return t[0]=x*D,t[1]=(g*u*i-l*m*i-g*r*f+n*m*f+l*r*p-n*u*p)*D,t[2]=(o*m*i-g*h*i+g*r*d-n*m*d-o*r*p+n*h*p)*D,t[3]=(l*h*i-o*u*i-l*r*d+n*u*d+o*r*f-n*h*f)*D,t[4]=M*D,t[5]=(c*m*i-v*u*i+v*r*f-e*m*f-c*r*p+e*u*p)*D,t[6]=(v*h*i-a*m*i-v*r*d+e*m*d+a*r*p-e*h*p)*D,t[7]=(a*u*i-c*h*i+c*r*d-e*u*d-a*r*f+e*h*f)*D,t[8]=_*D,t[9]=(v*l*i-c*g*i-v*n*f+e*g*f+c*n*p-e*l*p)*D,t[10]=(a*g*i-v*o*i+v*n*d-e*g*d-a*n*p+e*o*p)*D,t[11]=(c*o*i-a*l*i-c*n*d+e*l*d+a*n*f-e*o*f)*D,t[12]=T*D,t[13]=(c*g*r-v*l*r+v*n*u-e*g*u-c*n*m+e*l*m)*D,t[14]=(v*o*r-a*g*r-v*n*h+e*g*h+a*n*m-e*o*m)*D,t[15]=(a*l*r-c*o*r+c*n*h-e*l*h-a*n*u+e*o*u)*D,this}scale(t){const e=this.elements,n=t.x,r=t.y,i=t.z;return e[0]*=n,e[4]*=r,e[8]*=i,e[1]*=n,e[5]*=r,e[9]*=i,e[2]*=n,e[6]*=r,e[10]*=i,e[3]*=n,e[7]*=r,e[11]*=i,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),i=1-n,a=t.x,o=t.y,h=t.z,d=i*a,c=i*o;return this.set(d*a+n,d*o-r*h,d*h+r*o,0,d*o+r*h,c*o+n,c*h-r*a,0,d*h-r*o,c*h+r*a,i*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,i,a){return this.set(1,n,i,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,i=e._x,a=e._y,o=e._z,h=e._w,d=i+i,c=a+a,l=o+o,u=i*d,f=i*c,v=i*l,g=a*c,m=a*l,p=o*l,x=h*d,M=h*c,_=h*l,T=n.x,P=n.y,D=n.z;return r[0]=(1-(g+p))*T,r[1]=(f+_)*T,r[2]=(v-M)*T,r[3]=0,r[4]=(f-_)*P,r[5]=(1-(u+p))*P,r[6]=(m+x)*P,r[7]=0,r[8]=(v+M)*D,r[9]=(m-x)*D,r[10]=(1-(u+g))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let i=li.set(r[0],r[1],r[2]).length();const a=li.set(r[4],r[5],r[6]).length(),o=li.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),t.x=r[12],t.y=r[13],t.z=r[14],sn.copy(this);const d=1/i,c=1/a,l=1/o;return sn.elements[0]*=d,sn.elements[1]*=d,sn.elements[2]*=d,sn.elements[4]*=c,sn.elements[5]*=c,sn.elements[6]*=c,sn.elements[8]*=l,sn.elements[9]*=l,sn.elements[10]*=l,e.setFromRotationMatrix(sn),n.x=i,n.y=a,n.z=o,this}makePerspective(t,e,n,r,i,a,o=wn){const h=this.elements,d=2*i/(e-t),c=2*i/(n-r),l=(e+t)/(e-t),u=(n+r)/(n-r);let f,v;if(o===wn)f=-(a+i)/(a-i),v=-2*a*i/(a-i);else if(o===Ir)f=-a/(a-i),v=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=d,h[4]=0,h[8]=l,h[12]=0,h[1]=0,h[5]=c,h[9]=u,h[13]=0,h[2]=0,h[6]=0,h[10]=f,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,r,i,a,o=wn){const h=this.elements,d=1/(e-t),c=1/(n-r),l=1/(a-i),u=(e+t)*d,f=(n+r)*c;let v,g;if(o===wn)v=(a+i)*l,g=-2*l;else if(o===Ir)v=i*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-u,h[1]=0,h[5]=2*c,h[9]=0,h[13]=-f,h[2]=0,h[6]=0,h[10]=g,h[14]=-v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const li=new O,sn=new Ce,Sc=new O(0,0,0),wc=new O(1,1,1),Dn=new O,ar=new O,Ke=new O,Ia=new Ce,Da=new ni;class We{constructor(t=0,e=0,n=0,r=We.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,i=r[0],a=r[4],o=r[8],h=r[1],d=r[5],c=r[9],l=r[2],u=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-l,i),this._z=0);break;case"ZXY":this._x=Math.asin(xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-l,f),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(h,i));break;case"ZYX":this._y=Math.asin(-xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(h,i)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,d),this._y=Math.atan2(-l,i)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ia.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ia,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Da.setFromEuler(this),this.setFromQuaternion(Da,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}We.DEFAULT_ORDER="XYZ";class va{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ec=0;const Na=new O,ci=new ni,gn=new Ce,or=new O,Vi=new O,bc=new O,Tc=new ni,Ua=new O(1,0,0),Fa=new O(0,1,0),Ba=new O(0,0,1),Oa={type:"added"},Ac={type:"removed"},hi={type:"childadded",child:null},Yr={type:"childremoved",child:null};class De extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new O,e=new We,n=new ni,r=new O(1,1,1);function i(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(i),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ce},normalMatrix:{value:new fe}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(Ua,t)}rotateY(t){return this.rotateOnAxis(Fa,t)}rotateZ(t){return this.rotateOnAxis(Ba,t)}translateOnAxis(t,e){return Na.copy(t).applyQuaternion(this.quaternion),this.position.add(Na.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ua,t)}translateY(t){return this.translateOnAxis(Fa,t)}translateZ(t){return this.translateOnAxis(Ba,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Vi,or,this.up):gn.lookAt(or,Vi,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),ci.setFromRotationMatrix(gn),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oa),hi.child=t,this.dispatchEvent(hi),hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ac),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oa),hi.child=t,this.dispatchEvent(hi),hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,t,bc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,Tc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let d=0,c=h.length;d<c;d++){const l=h[d];i(t.shapes,l)}else i(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,d=this.material.length;h<d;h++)o.push(i(t.materials,this.material[h]));r.material=o}else r.material=i(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];r.animations.push(i(t.animations,h))}}if(e){const o=a(t.geometries),h=a(t.materials),d=a(t.textures),c=a(t.images),l=a(t.shapes),u=a(t.skeletons),f=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),c.length>0&&(n.images=c),l.length>0&&(n.shapes=l),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const h=[];for(const d in o){const c=o[d];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}De.DEFAULT_UP=new O(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new O,_n=new O,Zr=new O,xn=new O,ui=new O,di=new O,za=new O,$r=new O,Kr=new O,jr=new O,Qr=new Pe,Jr=new Pe,ts=new Pe;class nn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),an.subVectors(t,e),r.cross(an);const i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(t,e,n,r,i){an.subVectors(r,e),_n.subVectors(n,e),Zr.subVectors(t,e);const a=an.dot(an),o=an.dot(_n),h=an.dot(Zr),d=_n.dot(_n),c=_n.dot(Zr),l=a*d-o*o;if(l===0)return i.set(0,0,0),null;const u=1/l,f=(d*h-o*c)*u,v=(a*c-o*h)*u;return i.set(1-f-v,v,f)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,r,i,a,o,h){return this.getBarycoord(t,e,n,r,xn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(i,xn.x),h.addScaledVector(a,xn.y),h.addScaledVector(o,xn.z),h)}static getInterpolatedAttribute(t,e,n,r,i,a){return Qr.setScalar(0),Jr.setScalar(0),ts.setScalar(0),Qr.fromBufferAttribute(t,e),Jr.fromBufferAttribute(t,n),ts.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Qr,i.x),a.addScaledVector(Jr,i.y),a.addScaledVector(ts,i.z),a}static isFrontFacing(t,e,n,r){return an.subVectors(n,e),_n.subVectors(t,e),an.cross(_n).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),an.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,i){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,r,i)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,i=this.c;let a,o;ui.subVectors(r,n),di.subVectors(i,n),$r.subVectors(t,n);const h=ui.dot($r),d=di.dot($r);if(h<=0&&d<=0)return e.copy(n);Kr.subVectors(t,r);const c=ui.dot(Kr),l=di.dot(Kr);if(c>=0&&l<=c)return e.copy(r);const u=h*l-c*d;if(u<=0&&h>=0&&c<=0)return a=h/(h-c),e.copy(n).addScaledVector(ui,a);jr.subVectors(t,i);const f=ui.dot(jr),v=di.dot(jr);if(v>=0&&f<=v)return e.copy(i);const g=f*d-h*v;if(g<=0&&d>=0&&v<=0)return o=d/(d-v),e.copy(n).addScaledVector(di,o);const m=c*v-f*l;if(m<=0&&l-c>=0&&f-v>=0)return za.subVectors(i,r),o=(l-c)/(l-c+(f-v)),e.copy(r).addScaledVector(za,o);const p=1/(m+g+u);return a=g*p,o=u*p,e.copy(n).addScaledVector(ui,a).addScaledVector(di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},lr={h:0,s:0,l:0};function es(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class oe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Se.workingColorSpace){if(t=pa(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,a=2*n-i;this.r=es(a,i,t+1/3),this.g=es(a,i,t),this.b=es(a,i,t-1/3)}return Se.toWorkingColorSpace(this,r),this}setStyle(t,e=tn){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let i;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,e);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,e);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=r[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(i,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const n=Wo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Se.fromWorkingColorSpace(ze.copy(this),t),Math.round(xe(ze.r*255,0,255))*65536+Math.round(xe(ze.g*255,0,255))*256+Math.round(xe(ze.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(ze.copy(this),e);const n=ze.r,r=ze.g,i=ze.b,a=Math.max(n,r,i),o=Math.min(n,r,i);let h,d;const c=(o+a)/2;if(o===a)h=0,d=0;else{const l=a-o;switch(d=c<=.5?l/(a+o):l/(2-a-o),a){case n:h=(r-i)/l+(r<i?6:0);break;case r:h=(i-n)/l+2;break;case i:h=(n-r)/l+4;break}h/=6}return t.h=h,t.s=d,t.l=c,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=tn){Se.fromWorkingColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,r=ze.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(lr);const n=$i(Nn.h,lr.h,e),r=$i(Nn.s,lr.s,e),i=$i(Nn.l,lr.l,e);return this.setHSL(n,r,i),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,i=t.elements;return this.r=i[0]*e+i[3]*n+i[6]*r,this.g=i[1]*e+i[4]*n+i[7]*r,this.b=i[2]*e+i[5]*n+i[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new oe;oe.NAMES=Wo;let Cc=0;class kn extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=bi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vs,this.blendDst=gs,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vs&&(n.blendSrc=this.blendSrc),this.blendDst!==gs&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ba&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(i){const a=[];for(const o in i){const h=i[o];delete h.metadata,a.push(h)}return a}if(e){const i=r(t.textures),a=r(t.images);i.length>0&&(n.textures=i),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let i=0;i!==r;++i)n[i]=e[i].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ur extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new O,cr=new le;class hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ea,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=on(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=on(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=on(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=on(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=i,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ea&&(t.usage=this.usage),t}}class Xo extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qo extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pn extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rc=0;const Je=new Ce,ns=new De,fi=new O,je=new Ji,ki=new Ji,Be=new O;class Rn extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vo(t)?qo:Xo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new fe().getNormalMatrix(t);n.applyNormalMatrix(i),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return ns.lookAt(t),ns.updateMatrix(),this.applyMatrix4(ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,i=t.length;r<i;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pn(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const i=t[r];e.setXYZ(r,i.x,i.y,i.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const i=e[n];je.setFromBufferAttribute(i),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const o=e[i];ki.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(je.min,ki.min),je.expandByPoint(Be),Be.addVectors(je.max,ki.max),je.expandByPoint(Be)):(je.expandByPoint(ki.min),je.expandByPoint(ki.max))}je.getCenter(n);let r=0;for(let i=0,a=t.count;i<a;i++)Be.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(Be));if(e)for(let i=0,a=e.length;i<a;i++){const o=e[i],h=this.morphTargetsRelative;for(let d=0,c=o.count;d<c;d++)Be.fromBufferAttribute(o,d),h&&(fi.fromBufferAttribute(t,d),Be.add(fi)),r=Math.max(r,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,i=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],h=[];for(let R=0;R<n.count;R++)o[R]=new O,h[R]=new O;const d=new O,c=new O,l=new O,u=new le,f=new le,v=new le,g=new O,m=new O;function p(R,S,y){d.fromBufferAttribute(n,R),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,y),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,S),v.fromBufferAttribute(i,y),c.sub(d),l.sub(d),f.sub(u),v.sub(u);const E=1/(f.x*v.y-v.x*f.y);isFinite(E)&&(g.copy(c).multiplyScalar(v.y).addScaledVector(l,-f.y).multiplyScalar(E),m.copy(l).multiplyScalar(f.x).addScaledVector(c,-v.x).multiplyScalar(E),o[R].add(g),o[S].add(g),o[y].add(g),h[R].add(m),h[S].add(m),h[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,S=x.length;R<S;++R){const y=x[R],E=y.start,F=y.count;for(let U=E,Y=E+F;U<Y;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const M=new O,_=new O,T=new O,P=new O;function D(R){T.fromBufferAttribute(r,R),P.copy(T);const S=o[R];M.copy(S),M.sub(T.multiplyScalar(T.dot(S))).normalize(),_.crossVectors(P,S);const E=_.dot(h[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,E)}for(let R=0,S=x.length;R<S;++R){const y=x[R],E=y.start,F=y.count;for(let U=E,Y=E+F;U<Y;U+=3)D(t.getX(U+0)),D(t.getX(U+1)),D(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const r=new O,i=new O,a=new O,o=new O,h=new O,d=new O,c=new O,l=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){const v=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);r.fromBufferAttribute(e,v),i.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),c.subVectors(a,i),l.subVectors(r,i),c.cross(l),o.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),d.fromBufferAttribute(n,m),o.add(c),h.add(c),d.add(c),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,h.x,h.y,h.z),n.setXYZ(m,d.x,d.y,d.z)}else for(let u=0,f=e.count;u<f;u+=3)r.fromBufferAttribute(e,u+0),i.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),c.subVectors(a,i),l.subVectors(r,i),c.cross(l),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,h){const d=o.array,c=o.itemSize,l=o.normalized,u=new d.constructor(h.length*c);let f=0,v=0;for(let g=0,m=h.length;g<m;g++){o.isInterleavedBufferAttribute?f=h[g]*o.data.stride+o.offset:f=h[g]*c;for(let p=0;p<c;p++)u[v++]=d[f++]}return new hn(u,c,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Rn,n=this.index.array,r=this.attributes;for(const o in r){const h=r[o],d=t(h,n);e.setAttribute(o,d)}const i=this.morphAttributes;for(const o in i){const h=[],d=i[o];for(let c=0,l=d.length;c<l;c++){const u=d[c],f=t(u,n);h.push(f)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,h=a.length;o<h;o++){const d=a[o];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(t[d]=h[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const d=n[h];t.data.attributes[h]=d.toJSON(t.data)}const r={};let i=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],c=[];for(let l=0,u=d.length;l<u;l++){const f=d[l];c.push(f.toJSON(t.data))}c.length>0&&(r[h]=c,i=!0)}i&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const d in r){const c=r[d];this.setAttribute(d,c.clone(e))}const i=t.morphAttributes;for(const d in i){const c=[],l=i[d];for(let u=0,f=l.length;u<f;u++)c.push(l[u].clone(e));this.morphAttributes[d]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let d=0,c=a.length;d<c;d++){const l=a[d];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Va=new Ce,Xn=new Go,hr=new ma,ka=new O,ur=new O,dr=new O,fr=new O,is=new O,pr=new O,Ha=new O,mr=new O;class Ne extends De{constructor(t=new Rn,e=new Ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=r.length;i<a;i++){const o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(i&&o){pr.set(0,0,0);for(let h=0,d=i.length;h<d;h++){const c=o[h],l=i[h];c!==0&&(is.fromBufferAttribute(l,t),a?pr.addScaledVector(is,c):pr.addScaledVector(is.sub(e),c))}e.add(pr)}return e}raycast(t,e){const n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(i),Xn.copy(t.ray).recast(t.near),!(hr.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(hr,ka)===null||Xn.origin.distanceToSquared(ka)>(t.far-t.near)**2))&&(Va.copy(i).invert(),Xn.copy(t.ray).applyMatrix4(Va),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,n){let r;const i=this.geometry,a=this.material,o=i.index,h=i.attributes.position,d=i.attributes.uv,c=i.attributes.uv1,l=i.attributes.normal,u=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=u.length;v<g;v++){const m=u[v],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,T=M;_<T;_+=3){const P=o.getX(_),D=o.getX(_+1),R=o.getX(_+2);r=vr(this,p,t,n,d,c,l,P,D,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const x=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);r=vr(this,a,t,n,d,c,l,x,M,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(a))for(let v=0,g=u.length;v<g;v++){const m=u[v],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(h.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,T=M;_<T;_+=3){const P=_,D=_+1,R=_+2;r=vr(this,p,t,n,d,c,l,P,D,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,f.start),g=Math.min(h.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const x=m,M=m+1,_=m+2;r=vr(this,a,t,n,d,c,l,x,M,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Pc(s,t,e,n,r,i,a,o){let h;if(t.side===Ze?h=n.intersectTriangle(a,i,r,!0,o):h=n.intersectTriangle(r,i,a,t.side===zn,o),h===null)return null;mr.copy(o),mr.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(mr);return d<e.near||d>e.far?null:{distance:d,point:mr.clone(),object:s}}function vr(s,t,e,n,r,i,a,o,h,d){s.getVertexPosition(o,ur),s.getVertexPosition(h,dr),s.getVertexPosition(d,fr);const c=Pc(s,t,e,n,ur,dr,fr,Ha);if(c){const l=new O;nn.getBarycoord(Ha,ur,dr,fr,l),r&&(c.uv=nn.getInterpolatedAttribute(r,o,h,d,l,new le)),i&&(c.uv1=nn.getInterpolatedAttribute(i,o,h,d,l,new le)),a&&(c.normal=nn.getInterpolatedAttribute(a,o,h,d,l,new O),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const u={a:o,b:h,c:d,normal:new O,materialIndex:0};nn.getNormal(ur,dr,fr,u.normal),c.face=u,c.barycoord=l}return c}class En extends Rn{constructor(t=1,e=1,n=1,r=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};const o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);const h=[],d=[],c=[],l=[];let u=0,f=0;v("z","y","x",-1,-1,n,e,t,a,i,0),v("z","y","x",1,-1,n,e,-t,a,i,1),v("x","z","y",1,1,t,n,e,r,a,2),v("x","z","y",1,-1,t,n,-e,r,a,3),v("x","y","z",1,-1,t,e,n,r,i,4),v("x","y","z",-1,-1,t,e,-n,r,i,5),this.setIndex(h),this.setAttribute("position",new pn(d,3)),this.setAttribute("normal",new pn(c,3)),this.setAttribute("uv",new pn(l,2));function v(g,m,p,x,M,_,T,P,D,R,S){const y=_/D,E=T/R,F=_/2,U=T/2,Y=P/2,W=D+1,J=R+1;let z=0,I=0;const tt=new O;for(let K=0;K<J;K++){const B=K*E-U;for(let j=0;j<W;j++){const V=j*y-F;tt[g]=V*x,tt[m]=B*M,tt[p]=Y,d.push(tt.x,tt.y,tt.z),tt[g]=0,tt[m]=0,tt[p]=P>0?1:-1,c.push(tt.x,tt.y,tt.z),l.push(j/D),l.push(1-K/R),z+=1}}for(let K=0;K<R;K++)for(let B=0;B<D;B++){const j=u+B+W*K,V=u+B+W*(K+1),A=u+(B+1)+W*(K+1),C=u+(B+1)+W*K;h.push(j,V,C),h.push(V,A,C),I+=6}o.addGroup(f,I,S),f+=I,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ui(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const r=s[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ge(s){const t={};for(let e=0;e<s.length;e++){const n=Ui(s[e]);for(const r in n)t[r]=n[r]}return t}function Lc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Yo(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}const Ic={clone:Ui,merge:Ge};var Dc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dc,this.fragmentShader=Nc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=Lc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zo extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new O,Ga=new le,Wa=new le;class Qe extends Zo{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ni*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ni*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,Ga,Wa),e.subVectors(Wa,Ga)}setViewOffset(t,e,n,r,i,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,i=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,d=a.fullHeight;i+=a.offsetX*r/h,e-=a.offsetY*n/d,r*=a.width/h,n*=a.height/d}const o=this.filmOffset;o!==0&&(i+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const pi=-90,mi=1;class Uc extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qe(pi,mi,t,e);r.layers=this.layers,this.add(r);const i=new Qe(pi,mi,t,e);i.layers=this.layers,this.add(i);const a=new Qe(pi,mi,t,e);a.layers=this.layers,this.add(a);const o=new Qe(pi,mi,t,e);o.layers=this.layers,this.add(o);const h=new Qe(pi,mi,t,e);h.layers=this.layers,this.add(h);const d=new Qe(pi,mi,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,i,a,o,h]=e;for(const d of e)this.remove(d);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,a,o,h,d,c]=this.children,l=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,i),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,h),t.setRenderTarget(n,4,r),t.render(e,d),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,c),t.setRenderTarget(l,u,f),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class $o extends ke{constructor(t,e,n,r,i,a,o,h,d,c){t=t!==void 0?t:[],e=e!==void 0?e:Ri,super(t,e,n,r,i,a,o,h,d,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fc extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new $o(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new En(5,5,5),i=new Vn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Bn});i.uniforms.tEquirect.value=e;const a=new Ne(r,i),o=e.minFilter;return e.minFilter===Jn&&(e.minFilter=fn),new Uc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const i=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(i)}}class Bc extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new We,this.environmentIntensity=1,this.environmentRotation=new We,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Oc{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ea,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,i=this.stride;r<i;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new O;class Dr{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=on(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=on(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=on(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=on(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array),i=Te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=i,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)e.push(this.data.array[r+i])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Dr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)e.push(this.data.array[r+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ko extends kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vi;const Hi=new O,gi=new O,_i=new O,xi=new le,Gi=new le,jo=new Ce,gr=new O,Wi=new O,_r=new O,Xa=new le,rs=new le,qa=new le;class zc extends De{constructor(t=new Ko){if(super(),this.isSprite=!0,this.type="Sprite",vi===void 0){vi=new Rn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Oc(e,5);vi.setIndex([0,1,2,0,2,3]),vi.setAttribute("position",new Dr(n,3,0,!1)),vi.setAttribute("uv",new Dr(n,2,3,!1))}this.geometry=vi,this.material=t,this.center=new le(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gi.setFromMatrixScale(this.matrixWorld),jo.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_i.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gi.multiplyScalar(-_i.z);const n=this.material.rotation;let r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));const a=this.center;xr(gr.set(-.5,-.5,0),_i,a,gi,r,i),xr(Wi.set(.5,-.5,0),_i,a,gi,r,i),xr(_r.set(.5,.5,0),_i,a,gi,r,i),Xa.set(0,0),rs.set(1,0),qa.set(1,1);let o=t.ray.intersectTriangle(gr,Wi,_r,!1,Hi);if(o===null&&(xr(Wi.set(-.5,.5,0),_i,a,gi,r,i),rs.set(0,1),o=t.ray.intersectTriangle(gr,_r,Wi,!1,Hi),o===null))return;const h=t.ray.origin.distanceTo(Hi);h<t.near||h>t.far||e.push({distance:h,point:Hi.clone(),uv:nn.getInterpolation(Hi,gr,Wi,_r,Xa,rs,qa,new le),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xr(s,t,e,n,r,i){xi.subVectors(s,e).addScalar(.5).multiply(n),r!==void 0?(Gi.x=i*xi.x-r*xi.y,Gi.y=r*xi.x+i*xi.y):Gi.copy(xi),s.copy(t),s.x+=Gi.x,s.y+=Gi.y,s.applyMatrix4(jo)}const ss=new O,Vc=new O,kc=new fe;class Mn{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ss.subVectors(n,e).cross(Vc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ss),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const i=-(t.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:e.copy(t.start).addScaledVector(n,i)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||kc.getNormalMatrix(t),r=this.coplanarPoint(ss).applyMatrix4(t),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new ma,yr=new O;class ga{constructor(t=new Mn,e=new Mn,n=new Mn,r=new Mn,i=new Mn,a=new Mn){this.planes=[t,e,n,r,i,a]}set(t,e,n,r,i,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){const n=this.planes,r=t.elements,i=r[0],a=r[1],o=r[2],h=r[3],d=r[4],c=r[5],l=r[6],u=r[7],f=r[8],v=r[9],g=r[10],m=r[11],p=r[12],x=r[13],M=r[14],_=r[15];if(n[0].setComponents(h-i,u-d,m-f,_-p).normalize(),n[1].setComponents(h+i,u+d,m+f,_+p).normalize(),n[2].setComponents(h+a,u+c,m+v,_+x).normalize(),n[3].setComponents(h-a,u-c,m-v,_-x).normalize(),n[4].setComponents(h-o,u-l,m-g,_-M).normalize(),e===wn)n[5].setComponents(h+o,u+l,m+g,_+M).normalize();else if(e===Ir)n[5].setComponents(o,l,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let i=0;i<6;i++)if(e[i].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(yr.x=r.normal.x>0?t.max.x:t.min.x,yr.y=r.normal.y>0?t.max.y:t.min.y,yr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qi extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}class _a extends ke{constructor(t,e,n,r,i,a,o,h,d){super(t,e,n,r,i,a,o,h,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qo extends ke{constructor(t,e,n,r,i,a,o,h,d,c=Ti){if(c!==Ti&&c!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Ti&&(n=ti),n===void 0&&c===Ii&&(n=Li),super(null,r,i,a,o,h,c,n,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:cn,this.minFilter=h!==void 0?h:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Cn extends Rn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const i=t/2,a=e/2,o=Math.floor(n),h=Math.floor(r),d=o+1,c=h+1,l=t/o,u=e/h,f=[],v=[],g=[],m=[];for(let p=0;p<c;p++){const x=p*u-a;for(let M=0;M<d;M++){const _=M*l-i;v.push(_,-x,0),g.push(0,0,1),m.push(M/o),m.push(1-p/h)}}for(let p=0;p<h;p++)for(let x=0;x<o;x++){const M=x+d*p,_=x+d*(p+1),T=x+1+d*(p+1),P=x+1+d*p;f.push(M,_,P),f.push(_,T,P)}this.setIndex(f),this.setAttribute("position",new pn(v,3)),this.setAttribute("normal",new pn(g,3)),this.setAttribute("uv",new pn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Hc extends kn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new oe(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Gc extends kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wi extends kn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new oe(16777215),this.specular=new oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wc extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ol,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xc extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ya={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class qc{constructor(t,e,n){const r=this;let i=!1,a=0,o=0,h;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){o++,i===!1&&r.onStart!==void 0&&r.onStart(c,a,o),i=!0},this.itemEnd=function(c){a++,r.onProgress!==void 0&&r.onProgress(c,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return h?h(c):c},this.setURLModifier=function(c){return h=c,this},this.addHandler=function(c,l){return d.push(c,l),this},this.removeHandler=function(c){const l=d.indexOf(c);return l!==-1&&d.splice(l,2),this},this.getHandler=function(c){for(let l=0,u=d.length;l<u;l+=2){const f=d[l],v=d[l+1];if(f.global&&(f.lastIndex=0),f.test(c))return v}return null}}}const Yc=new qc;class xa{constructor(t){this.manager=t!==void 0?t:Yc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,i){n.load(t,r,e,i)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}xa.DEFAULT_MATERIAL_NAME="__DEFAULT";class Zc extends xa{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const i=this,a=Ya.get(t);if(a!==void 0)return i.manager.itemStart(t),setTimeout(function(){e&&e(a),i.manager.itemEnd(t)},0),a;const o=ji("img");function h(){c(),Ya.add(t,this),e&&e(this),i.manager.itemEnd(t)}function d(l){c(),r&&r(l),i.manager.itemError(t),i.manager.itemEnd(t)}function c(){o.removeEventListener("load",h,!1),o.removeEventListener("error",d,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(t),o.src=t,o}}class $c extends xa{constructor(t){super(t)}load(t,e,n,r){const i=new ke,a=new Zc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){i.image=o,i.needsUpdate=!0,e!==void 0&&e(i)},n,r),i}}class ya extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const as=new Ce,Za=new O,$a=new O;class Jo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ga,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Za.setFromMatrixPosition(t.matrixWorld),e.position.copy(Za),$a.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($a),e.updateMatrixWorld(),as.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(as),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(as)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Kc extends Jo{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ni*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=t.distance||e.far;(n!==e.fov||r!==e.aspect||i!==e.far)&&(e.fov=n,e.aspect=r,e.far=i,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class jc extends ya{constructor(t,e,n=0,r=Math.PI/3,i=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Kc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class tl extends Zo{constructor(t=-1,e=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let i=n-t,a=n+t,o=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=d*this.view.offsetX,a=i+d*this.view.width,o-=c*this.view.offsetY,h=o-c*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Qc extends Jo{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jc extends ya{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Qc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class th extends ya{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class eh extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class nh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ka(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ka();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ka(){return performance.now()}const ja=new Ce;class ih{constructor(t,e,n=0,r=1/0){this.ray=new Go(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ja.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ja),this}intersectObject(t,e=!0,n=[]){return na(t,this,n,e),n.sort(Qa),n}intersectObjects(t,e=!0,n=[]){for(let r=0,i=t.length;r<i;r++)na(t[r],this,n,e);return n.sort(Qa),n}}function Qa(s,t){return s.distance-t.distance}function na(s,t,e,n){let r=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const i=s.children;for(let a=0,o=i.length;a<o;a++)na(i[a],t,e,!0)}}function Ja(s,t,e,n){const r=rh(n);switch(e){case Io:return s*t;case No:return s*t;case Uo:return s*t*2;case Fo:return s*t/r.components*r.byteLength;case ha:return s*t/r.components*r.byteLength;case Bo:return s*t*2/r.components*r.byteLength;case ua:return s*t*2/r.components*r.byteLength;case Do:return s*t*3/r.components*r.byteLength;case ln:return s*t*4/r.components*r.byteLength;case da:return s*t*4/r.components*r.byteLength;case br:case Tr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ar:case Cr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ps:case Is:return Math.max(s,16)*Math.max(t,8)/4;case Rs:case Ls:return Math.max(s,8)*Math.max(t,8)/2;case Ds:case Ns:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Us:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bs:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Os:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case zs:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Vs:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ks:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Hs:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Gs:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ws:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Xs:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case qs:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ys:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Zs:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case $s:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Rr:case Ks:case js:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Oo:case Qs:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Js:case ta:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rh(s){switch(s){case An:case Ro:return{byteLength:1,components:1};case Ki:case Po:case Qi:return{byteLength:2,components:1};case la:case ca:return{byteLength:2,components:4};case ti:case oa:case Sn:return{byteLength:4,components:1};case Lo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sa);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function el(){let s=null,t=!1,e=null,n=null;function r(i,a){e(i,a),n=s.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(r),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(i){e=i},setContext:function(i){s=i}}}function sh(s){const t=new WeakMap;function e(o,h){const d=o.array,c=o.usage,l=d.byteLength,u=s.createBuffer();s.bindBuffer(h,u),s.bufferData(h,d,c),o.onUploadCallback();let f;if(d instanceof Float32Array)f=s.FLOAT;else if(d instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)f=s.SHORT;else if(d instanceof Uint32Array)f=s.UNSIGNED_INT;else if(d instanceof Int32Array)f=s.INT;else if(d instanceof Int8Array)f=s.BYTE;else if(d instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:u,type:f,bytesPerElement:d.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,h,d){const c=h.array,l=h.updateRanges;if(s.bindBuffer(d,o),l.length===0)s.bufferSubData(d,0,c);else{l.sort((f,v)=>f.start-v.start);let u=0;for(let f=1;f<l.length;f++){const v=l[u],g=l[f];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++u,l[u]=g)}l.length=u+1;for(let f=0,v=l.length;f<v;f++){const g=l[f];s.bufferSubData(d,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const h=t.get(o);h&&(s.deleteBuffer(h.buffer),t.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const d=t.get(o);if(d===void 0)t.set(o,e(o,h));else if(d.version<o.version){if(d.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,o,h),d.version=o.version}}return{get:r,remove:i,update:a}}var ah=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oh=`#ifdef USE_ALPHAHASH
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
#endif`,lh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ch=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dh=`#ifdef USE_AOMAP
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
#endif`,fh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ph=`#ifdef USE_BATCHING
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
#endif`,mh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_h=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xh=`#ifdef USE_IRIDESCENCE
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
#endif`,yh=`#ifdef USE_BUMPMAP
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
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rh=`#define PI 3.141592653589793
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
} // validated`,Ph=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lh=`vec3 transformedNormal = objectNormal;
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
#endif`,Ih=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Oh=`#ifdef USE_ENVMAP
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
#endif`,zh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vh=`#ifdef USE_ENVMAP
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
#endif`,kh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hh=`#ifdef USE_ENVMAP
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
#endif`,Gh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yh=`#ifdef USE_GRADIENTMAP
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
}`,Zh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$h=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jh=`uniform bool receiveShadow;
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
#endif`,Qh=`#ifdef USE_ENVMAP
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
#endif`,Jh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iu=`PhysicalMaterial material;
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
#endif`,ru=`struct PhysicalMaterial {
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
}`,su=`
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
#endif`,au=`#if defined( RE_IndirectDiffuse )
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
#endif`,ou=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,du=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mu=`#if defined( USE_POINTS_UV )
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
#endif`,vu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_u=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mu=`#ifdef USE_MORPHTARGETS
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
#endif`,Su=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Eu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Au=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cu=`#ifdef USE_NORMALMAP
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
#endif`,Ru=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Du=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ou=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ku=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wu=`float getShadowMask() {
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
}`,Xu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qu=`#ifdef USE_SKINNING
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
#endif`,Yu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zu=`#ifdef USE_SKINNING
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
#endif`,$u=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ku=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ju=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ju=`#ifdef USE_TRANSMISSION
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
#endif`,td=`#ifdef USE_TRANSMISSION
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
#endif`,ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ad=`uniform sampler2D t2D;
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
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ld=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ud=`#include <common>
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
}`,dd=`#if DEPTH_PACKING == 3200
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
}`,fd=`#define DISTANCE
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
}`,pd=`#define DISTANCE
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
}`,md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gd=`uniform float scale;
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
}`,_d=`uniform vec3 diffuse;
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
}`,xd=`#include <common>
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
}`,yd=`uniform vec3 diffuse;
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
}`,Md=`#define LAMBERT
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
}`,Sd=`#define LAMBERT
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
}`,wd=`#define MATCAP
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
}`,Ed=`#define MATCAP
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
}`,bd=`#define NORMAL
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
}`,Td=`#define NORMAL
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
}`,Ad=`#define PHONG
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
}`,Cd=`#define PHONG
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
}`,Rd=`#define STANDARD
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
}`,Pd=`#define STANDARD
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
}`,Ld=`#define TOON
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
}`,Id=`#define TOON
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
}`,Dd=`uniform float size;
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
}`,Nd=`uniform vec3 diffuse;
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
}`,Ud=`#include <common>
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
}`,Fd=`uniform vec3 color;
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
}`,Bd=`uniform float rotation;
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
}`,Od=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:ah,alphahash_pars_fragment:oh,alphamap_fragment:lh,alphamap_pars_fragment:ch,alphatest_fragment:hh,alphatest_pars_fragment:uh,aomap_fragment:dh,aomap_pars_fragment:fh,batching_pars_vertex:ph,batching_vertex:mh,begin_vertex:vh,beginnormal_vertex:gh,bsdfs:_h,iridescence_fragment:xh,bumpmap_pars_fragment:yh,clipping_planes_fragment:Mh,clipping_planes_pars_fragment:Sh,clipping_planes_pars_vertex:wh,clipping_planes_vertex:Eh,color_fragment:bh,color_pars_fragment:Th,color_pars_vertex:Ah,color_vertex:Ch,common:Rh,cube_uv_reflection_fragment:Ph,defaultnormal_vertex:Lh,displacementmap_pars_vertex:Ih,displacementmap_vertex:Dh,emissivemap_fragment:Nh,emissivemap_pars_fragment:Uh,colorspace_fragment:Fh,colorspace_pars_fragment:Bh,envmap_fragment:Oh,envmap_common_pars_fragment:zh,envmap_pars_fragment:Vh,envmap_pars_vertex:kh,envmap_physical_pars_fragment:Qh,envmap_vertex:Hh,fog_vertex:Gh,fog_pars_vertex:Wh,fog_fragment:Xh,fog_pars_fragment:qh,gradientmap_pars_fragment:Yh,lightmap_pars_fragment:Zh,lights_lambert_fragment:$h,lights_lambert_pars_fragment:Kh,lights_pars_begin:jh,lights_toon_fragment:Jh,lights_toon_pars_fragment:tu,lights_phong_fragment:eu,lights_phong_pars_fragment:nu,lights_physical_fragment:iu,lights_physical_pars_fragment:ru,lights_fragment_begin:su,lights_fragment_maps:au,lights_fragment_end:ou,logdepthbuf_fragment:lu,logdepthbuf_pars_fragment:cu,logdepthbuf_pars_vertex:hu,logdepthbuf_vertex:uu,map_fragment:du,map_pars_fragment:fu,map_particle_fragment:pu,map_particle_pars_fragment:mu,metalnessmap_fragment:vu,metalnessmap_pars_fragment:gu,morphinstance_vertex:_u,morphcolor_vertex:xu,morphnormal_vertex:yu,morphtarget_pars_vertex:Mu,morphtarget_vertex:Su,normal_fragment_begin:wu,normal_fragment_maps:Eu,normal_pars_fragment:bu,normal_pars_vertex:Tu,normal_vertex:Au,normalmap_pars_fragment:Cu,clearcoat_normal_fragment_begin:Ru,clearcoat_normal_fragment_maps:Pu,clearcoat_pars_fragment:Lu,iridescence_pars_fragment:Iu,opaque_fragment:Du,packing:Nu,premultiplied_alpha_fragment:Uu,project_vertex:Fu,dithering_fragment:Bu,dithering_pars_fragment:Ou,roughnessmap_fragment:zu,roughnessmap_pars_fragment:Vu,shadowmap_pars_fragment:ku,shadowmap_pars_vertex:Hu,shadowmap_vertex:Gu,shadowmask_pars_fragment:Wu,skinbase_vertex:Xu,skinning_pars_vertex:qu,skinning_vertex:Yu,skinnormal_vertex:Zu,specularmap_fragment:$u,specularmap_pars_fragment:Ku,tonemapping_fragment:ju,tonemapping_pars_fragment:Qu,transmission_fragment:Ju,transmission_pars_fragment:td,uv_pars_fragment:ed,uv_pars_vertex:nd,uv_vertex:id,worldpos_vertex:rd,background_vert:sd,background_frag:ad,backgroundCube_vert:od,backgroundCube_frag:ld,cube_vert:cd,cube_frag:hd,depth_vert:ud,depth_frag:dd,distanceRGBA_vert:fd,distanceRGBA_frag:pd,equirect_vert:md,equirect_frag:vd,linedashed_vert:gd,linedashed_frag:_d,meshbasic_vert:xd,meshbasic_frag:yd,meshlambert_vert:Md,meshlambert_frag:Sd,meshmatcap_vert:wd,meshmatcap_frag:Ed,meshnormal_vert:bd,meshnormal_frag:Td,meshphong_vert:Ad,meshphong_frag:Cd,meshphysical_vert:Rd,meshphysical_frag:Pd,meshtoon_vert:Ld,meshtoon_frag:Id,points_vert:Dd,points_frag:Nd,shadow_vert:Ud,shadow_frag:Fd,sprite_vert:Bd,sprite_frag:Od},Ht={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},un={basic:{uniforms:Ge([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Ge([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new oe(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Ge([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Ge([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Ge([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new oe(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Ge([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Ge([Ht.points,Ht.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Ge([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Ge([Ht.common,Ht.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Ge([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Ge([Ht.sprite,Ht.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Ge([Ht.common,Ht.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Ge([Ht.lights,Ht.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};un.physical={uniforms:Ge([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Mr={r:0,b:0,g:0},Yn=new We,zd=new Ce;function Vd(s,t,e,n,r,i,a){const o=new oe(0);let h=i===!0?0:1,d,c,l=null,u=0,f=null;function v(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function g(M){let _=!1;const T=v(M);T===null?p(o,h):T&&T.isColor&&(p(T,1),_=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,_){const T=v(_);T&&(T.isCubeTexture||T.mapping===Nr)?(c===void 0&&(c=new Ne(new En(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Ui(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,D,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Yn.copy(_.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),c.material.uniforms.envMap.value=T,c.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zd.makeRotationFromEuler(Yn)),c.material.toneMapped=Se.getTransfer(T.colorSpace)!==Ae,(l!==T||u!==T.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,l=T,u=T.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(d===void 0&&(d=new Ne(new Cn(2,2),new Vn({name:"BackgroundMaterial",uniforms:Ui(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=T,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.toneMapped=Se.getTransfer(T.colorSpace)!==Ae,T.matrixAutoUpdate===!0&&T.updateMatrix(),d.material.uniforms.uvTransform.value.copy(T.matrix),(l!==T||u!==T.version||f!==s.toneMapping)&&(d.material.needsUpdate=!0,l=T,u=T.version,f=s.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null))}function p(M,_){M.getRGB(Mr,Yo(s)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,_,a)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),h=_,p(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(M){h=M,p(o,h)},render:g,addToRenderList:m,dispose:x}}function kd(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},r=u(null);let i=r,a=!1;function o(y,E,F,U,Y){let W=!1;const J=l(U,F,E);i!==J&&(i=J,d(i.object)),W=f(y,U,F,Y),W&&v(y,U,F,Y),Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,_(y,E,F,U),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function h(){return s.createVertexArray()}function d(y){return s.bindVertexArray(y)}function c(y){return s.deleteVertexArray(y)}function l(y,E,F){const U=F.wireframe===!0;let Y=n[y.id];Y===void 0&&(Y={},n[y.id]=Y);let W=Y[E.id];W===void 0&&(W={},Y[E.id]=W);let J=W[U];return J===void 0&&(J=u(h()),W[U]=J),J}function u(y){const E=[],F=[],U=[];for(let Y=0;Y<e;Y++)E[Y]=0,F[Y]=0,U[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:F,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,E,F,U){const Y=i.attributes,W=E.attributes;let J=0;const z=F.getAttributes();for(const I in z)if(z[I].location>=0){const K=Y[I];let B=W[I];if(B===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(B=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(B=y.instanceColor)),K===void 0||K.attribute!==B||B&&K.data!==B.data)return!0;J++}return i.attributesNum!==J||i.index!==U}function v(y,E,F,U){const Y={},W=E.attributes;let J=0;const z=F.getAttributes();for(const I in z)if(z[I].location>=0){let K=W[I];K===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const B={};B.attribute=K,K&&K.data&&(B.data=K.data),Y[I]=B,J++}i.attributes=Y,i.attributesNum=J,i.index=U}function g(){const y=i.newAttributes;for(let E=0,F=y.length;E<F;E++)y[E]=0}function m(y){p(y,0)}function p(y,E){const F=i.newAttributes,U=i.enabledAttributes,Y=i.attributeDivisors;F[y]=1,U[y]===0&&(s.enableVertexAttribArray(y),U[y]=1),Y[y]!==E&&(s.vertexAttribDivisor(y,E),Y[y]=E)}function x(){const y=i.newAttributes,E=i.enabledAttributes;for(let F=0,U=E.length;F<U;F++)E[F]!==y[F]&&(s.disableVertexAttribArray(F),E[F]=0)}function M(y,E,F,U,Y,W,J){J===!0?s.vertexAttribIPointer(y,E,F,Y,W):s.vertexAttribPointer(y,E,F,U,Y,W)}function _(y,E,F,U){g();const Y=U.attributes,W=F.getAttributes(),J=E.defaultAttributeValues;for(const z in W){const I=W[z];if(I.location>=0){let tt=Y[z];if(tt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor)),tt!==void 0){const K=tt.normalized,B=tt.itemSize,j=t.get(tt);if(j===void 0)continue;const V=j.buffer,A=j.type,C=j.bytesPerElement,H=A===s.INT||A===s.UNSIGNED_INT||tt.gpuType===oa;if(tt.isInterleavedBufferAttribute){const Q=tt.data,nt=Q.stride,X=tt.offset;if(Q.isInstancedInterleavedBuffer){for(let rt=0;rt<I.locationSize;rt++)p(I.location+rt,Q.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let rt=0;rt<I.locationSize;rt++)m(I.location+rt);s.bindBuffer(s.ARRAY_BUFFER,V);for(let rt=0;rt<I.locationSize;rt++)M(I.location+rt,B/I.locationSize,A,K,nt*C,(X+B/I.locationSize*rt)*C,H)}else{if(tt.isInstancedBufferAttribute){for(let Q=0;Q<I.locationSize;Q++)p(I.location+Q,tt.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Q=0;Q<I.locationSize;Q++)m(I.location+Q);s.bindBuffer(s.ARRAY_BUFFER,V);for(let Q=0;Q<I.locationSize;Q++)M(I.location+Q,B/I.locationSize,A,K,B*C,B/I.locationSize*Q*C,H)}}else if(J!==void 0){const K=J[z];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(I.location,K);break;case 3:s.vertexAttrib3fv(I.location,K);break;case 4:s.vertexAttrib4fv(I.location,K);break;default:s.vertexAttrib1fv(I.location,K)}}}}x()}function T(){R();for(const y in n){const E=n[y];for(const F in E){const U=E[F];for(const Y in U)c(U[Y].object),delete U[Y];delete E[F]}delete n[y]}}function P(y){if(n[y.id]===void 0)return;const E=n[y.id];for(const F in E){const U=E[F];for(const Y in U)c(U[Y].object),delete U[Y];delete E[F]}delete n[y.id]}function D(y){for(const E in n){const F=n[E];if(F[y.id]===void 0)continue;const U=F[y.id];for(const Y in U)c(U[Y].object),delete U[Y];delete F[y.id]}}function R(){S(),a=!0,i!==r&&(i=r,d(i.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function Hd(s,t,e){let n;function r(d){n=d}function i(d,c){s.drawArrays(n,d,c),e.update(c,n,1)}function a(d,c,l){l!==0&&(s.drawArraysInstanced(n,d,c,l),e.update(c,n,l))}function o(d,c,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,c,0,l);let f=0;for(let v=0;v<l;v++)f+=c[v];e.update(f,n,1)}function h(d,c,l,u){if(l===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<d.length;v++)a(d[v],c[v],u[v]);else{f.multiDrawArraysInstancedWEBGL(n,d,0,c,0,u,0,l);let v=0;for(let g=0;g<l;g++)v+=c[g]*u[g];e.update(v,n,1)}}this.setMode=r,this.render=i,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=h}function Gd(s,t,e,n){let r;function i(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");r=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==ln&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const R=D===Qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==An&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Sn&&!R)}function h(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const c=h(d);c!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",c,"instead."),d=c);const l=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:d,logarithmicDepthBuffer:l,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:T,maxSamples:P}}function Wd(s){const t=this;let e=null,n=0,r=!1,i=!1;const a=new Mn,o=new fe,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(l,u){const f=l.length!==0||u||n!==0||r;return r=u,n=l.length,f},this.beginShadows=function(){i=!0,c(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(l,u){e=c(l,u,0)},this.setState=function(l,u,f){const v=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,p=s.get(l);if(!r||v===null||v.length===0||i&&!m)i?c(null):d();else{const x=i?0:n,M=x*4;let _=p.clippingState||null;h.value=_,_=c(v,u,M,f);for(let T=0;T!==M;++T)_[T]=e[T];p.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function d(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(l,u,f,v){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=h.value,v!==!0||m===null){const p=f+g*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==g;++M,_+=4)a.copy(l[M]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}h.value=m,h.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Xd(s){let t=new WeakMap;function e(a,o){return o===bs?a.mapping=Ri:o===Ts&&(a.mapping=Pi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===bs||o===Ts)if(t.has(a)){const h=t.get(a).texture;return e(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const d=new Fc(h.height);return d.fromEquirectangularTexture(s,a),t.set(a,d),a.addEventListener("dispose",r),e(d.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function i(){t=new WeakMap}return{get:n,dispose:i}}const Ei=4,to=[.125,.215,.35,.446,.526,.582],jn=20,os=new tl,eo=new oe;let ls=null,cs=0,hs=0,us=!1;const $n=(1+Math.sqrt(5))/2,yi=1/$n,no=[new O(-$n,yi,0),new O($n,yi,0),new O(-yi,0,$n),new O(yi,0,$n),new O(0,$n,-yi),new O(0,$n,yi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class io{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ls=this._renderer.getRenderTarget(),cs=this._renderer.getActiveCubeFace(),hs=this._renderer.getActiveMipmapLevel(),us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(t,n,r,i),e>0&&this._blur(i,0,0,e),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ao(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=so(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ls,cs,hs),this._renderer.xr.enabled=us,t.scissorTest=!1,Sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ls=this._renderer.getRenderTarget(),cs=this._renderer.getActiveCubeFace(),hs=this._renderer.getActiveMipmapLevel(),us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Qi,format:ln,colorSpace:Di,depthBuffer:!1},r=ro(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ro(t,e,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qd(i)),this._blurMaterial=Yd(i,t,e)}return r}_compileMaterial(t){const e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,os)}_sceneToCubeUV(t,e,n,r){const o=new Qe(90,1,e,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(eo),c.toneMapping=On,c.autoClear=!1;const f=new Ur({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),v=new Ne(new En,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(eo),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,h[p],0),o.lookAt(d[p],0,0)):x===1?(o.up.set(0,0,h[p]),o.lookAt(0,d[p],0)):(o.up.set(0,h[p],0),o.lookAt(0,0,d[p]));const M=this._cubeSize;Sr(r,x*M,p>2?M:0,M,M),c.setRenderTarget(r),g&&c.render(v,o),c.render(t,o)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=u,c.autoClear=l,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ri||t.mapping===Pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ao()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=so());const i=r?this._cubemapMaterial:this._equirectMaterial,a=new Ne(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=t;const h=this._cubeSize;Sr(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,os)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let i=1;i<r;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=no[(r-i-1)%no.length];this._blur(t,i-1,i,a,o)}e.autoClear=n}_blur(t,e,n,r,i){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",i),this._halfBlur(a,t,n,n,r,"longitudinal",i)}_halfBlur(t,e,n,r,i,a,o){const h=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,l=new Ne(this._lodPlanes[r],d),u=d.uniforms,f=this._sizeLods[n]-1,v=isFinite(i)?Math.PI/(2*f):2*Math.PI/(2*jn-1),g=i/v,m=isFinite(i)?1+Math.floor(c*g):jn;m>jn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const p=[];let x=0;for(let D=0;D<jn;++D){const R=D/g,S=Math.exp(-R*R/2);p.push(S),D===0?x+=S:D<m&&(x+=2*S)}for(let D=0;D<p.length;D++)p[D]=p[D]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=v,u.mipInt.value=M-n;const _=this._sizeLods[r],T=3*_*(r>M-Ei?r-M+Ei:0),P=4*(this._cubeSize-_);Sr(e,T,P,3*_,2*_),h.setRenderTarget(e),h.render(l,os)}}function qd(s){const t=[],e=[],n=[];let r=s;const i=s-Ei+1+to.length;for(let a=0;a<i;a++){const o=Math.pow(2,r);e.push(o);let h=1/o;a>s-Ei?h=to[a-s+Ei-1]:a===0&&(h=0),n.push(h);const d=1/(o-2),c=-d,l=1+d,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,v=6,g=3,m=2,p=1,x=new Float32Array(g*v*f),M=new Float32Array(m*v*f),_=new Float32Array(p*v*f);for(let P=0;P<f;P++){const D=P%3*2/3-1,R=P>2?0:-1,S=[D,R,0,D+2/3,R,0,D+2/3,R+1,0,D,R,0,D+2/3,R+1,0,D,R+1,0];x.set(S,g*v*P),M.set(u,m*v*P);const y=[P,P,P,P,P,P];_.set(y,p*v*P)}const T=new Rn;T.setAttribute("position",new hn(x,g)),T.setAttribute("uv",new hn(M,m)),T.setAttribute("faceIndex",new hn(_,p)),t.push(T),r>Ei&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ro(s,t,e){const n=new ei(s,t,e);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(s,t,e,n,r){s.viewport.set(t,e,n,r),s.scissor.set(t,e,n,r)}function Yd(s,t,e){const n=new Float32Array(jn),r=new O(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function so(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ao(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Ma(){return`

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
	`}function Zd(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const h=o.mapping,d=h===bs||h===Ts,c=h===Ri||h===Pi;if(d||c){let l=t.get(o);const u=l!==void 0?l.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new io(s)),l=d?e.fromEquirectangular(o,l):e.fromCubemap(o,l),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),l.texture;if(l!==void 0)return l.texture;{const f=o.image;return d&&f&&f.height>0||c&&f&&r(f)?(e===null&&(e=new io(s)),l=d?e.fromEquirectangular(o):e.fromCubemap(o),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),o.addEventListener("dispose",i),l.texture):null}}}return o}function r(o){let h=0;const d=6;for(let c=0;c<d;c++)o[c]!==void 0&&h++;return h===d}function i(o){const h=o.target;h.removeEventListener("dispose",i);const d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function $d(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Si("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Kd(s,t,e,n){const r={},i=new WeakMap;function a(l){const u=l.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",a),delete r[u.id];const f=i.get(u);f&&(t.remove(f),i.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(l,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function h(l){const u=l.attributes;for(const f in u)t.update(u[f],s.ARRAY_BUFFER)}function d(l){const u=[],f=l.index,v=l.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let M=0,_=x.length;M<_;M+=3){const T=x[M+0],P=x[M+1],D=x[M+2];u.push(T,P,P,D,D,T)}}else if(v!==void 0){const x=v.array;g=v.version;for(let M=0,_=x.length/3-1;M<_;M+=3){const T=M+0,P=M+1,D=M+2;u.push(T,P,P,D,D,T)}}else return;const m=new(Vo(u)?qo:Xo)(u,1);m.version=g;const p=i.get(l);p&&t.remove(p),i.set(l,m)}function c(l){const u=i.get(l);if(u){const f=l.index;f!==null&&u.version<f.version&&d(l)}else d(l);return i.get(l)}return{get:o,update:h,getWireframeAttribute:c}}function jd(s,t,e){let n;function r(u){n=u}let i,a;function o(u){i=u.type,a=u.bytesPerElement}function h(u,f){s.drawElements(n,f,i,u*a),e.update(f,n,1)}function d(u,f,v){v!==0&&(s.drawElementsInstanced(n,f,i,u*a,v),e.update(f,n,v))}function c(u,f,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,i,u,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];e.update(m,n,1)}function l(u,f,v,g){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)d(u[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,i,u,0,g,0,v);let p=0;for(let x=0;x<v;x++)p+=f[x]*g[x];e.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=h,this.renderInstances=d,this.renderMultiDraw=c,this.renderMultiDrawInstances=l}function Qd(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(i/3);break;case s.LINES:e.lines+=o*(i/2);break;case s.LINE_STRIP:e.lines+=o*(i-1);break;case s.LINE_LOOP:e.lines+=o*i;break;case s.POINTS:e.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Jd(s,t,e){const n=new WeakMap,r=new Pe;function i(a,o,h){const d=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=c!==void 0?c.length:0;let u=n.get(o);if(u===void 0||u.count!==l){let y=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let _=0;v===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let T=o.attributes.position.count*_,P=1;T>t.maxTextureSize&&(P=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const D=new Float32Array(T*P*4*l),R=new Ho(D,T,P,l);R.type=Sn,R.needsUpdate=!0;const S=_*4;for(let E=0;E<l;E++){const F=p[E],U=x[E],Y=M[E],W=T*P*4*E;for(let J=0;J<F.count;J++){const z=J*S;v===!0&&(r.fromBufferAttribute(F,J),D[W+z+0]=r.x,D[W+z+1]=r.y,D[W+z+2]=r.z,D[W+z+3]=0),g===!0&&(r.fromBufferAttribute(U,J),D[W+z+4]=r.x,D[W+z+5]=r.y,D[W+z+6]=r.z,D[W+z+7]=0),m===!0&&(r.fromBufferAttribute(Y,J),D[W+z+8]=r.x,D[W+z+9]=r.y,D[W+z+10]=r.z,D[W+z+11]=Y.itemSize===4?r.w:1)}}u={count:l,texture:R,size:new le(T,P)},n.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let v=0;for(let m=0;m<d.length;m++)v+=d[m];const g=o.morphTargetsRelative?1:1-v;h.getUniforms().setValue(s,"morphTargetBaseInfluence",g),h.getUniforms().setValue(s,"morphTargetInfluences",d)}h.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:i}}function tf(s,t,e,n){let r=new WeakMap;function i(h){const d=n.render.frame,c=h.geometry,l=t.get(h,c);if(r.get(l)!==d&&(t.update(l),r.set(l,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),r.get(h)!==d&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){const u=h.skeleton;r.get(u)!==d&&(u.update(),r.set(u,d))}return l}function a(){r=new WeakMap}function o(h){const d=h.target;d.removeEventListener("dispose",o),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:i,dispose:a}}const nl=new ke,oo=new Qo(1,1),il=new Ho,rl=new yc,sl=new $o,lo=[],co=[],ho=new Float32Array(16),uo=new Float32Array(9),fo=new Float32Array(4);function Bi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const r=t*e;let i=lo[r];if(i===void 0&&(i=new Float32Array(r),lo[r]=i),t!==0){n.toArray(i,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(i,o)}return i}function Ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Fe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Fr(s,t){let e=co[t];e===void 0&&(e=new Int32Array(t),co[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ef(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2fv(this.addr,t),Fe(e,t)}}function rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;s.uniform3fv(this.addr,t),Fe(e,t)}}function sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4fv(this.addr,t),Fe(e,t)}}function af(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;fo.set(n),s.uniformMatrix2fv(this.addr,!1,fo),Fe(e,n)}}function of(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;uo.set(n),s.uniformMatrix3fv(this.addr,!1,uo),Fe(e,n)}}function lf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;ho.set(n),s.uniformMatrix4fv(this.addr,!1,ho),Fe(e,n)}}function cf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function hf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2iv(this.addr,t),Fe(e,t)}}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3iv(this.addr,t),Fe(e,t)}}function df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4iv(this.addr,t),Fe(e,t)}}function ff(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2uiv(this.addr,t),Fe(e,t)}}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3uiv(this.addr,t),Fe(e,t)}}function vf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4uiv(this.addr,t),Fe(e,t)}}function gf(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r);let i;this.type===s.SAMPLER_2D_SHADOW?(oo.compareFunction=zo,i=oo):i=nl,e.setTexture2D(t||i,r)}function _f(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||rl,r)}function xf(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||sl,r)}function yf(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||il,r)}function Mf(s){switch(s){case 5126:return ef;case 35664:return nf;case 35665:return rf;case 35666:return sf;case 35674:return af;case 35675:return of;case 35676:return lf;case 5124:case 35670:return cf;case 35667:case 35671:return hf;case 35668:case 35672:return uf;case 35669:case 35673:return df;case 5125:return ff;case 36294:return pf;case 36295:return mf;case 36296:return vf;case 35678:case 36198:case 36298:case 36306:case 35682:return gf;case 35679:case 36299:case 36307:return _f;case 35680:case 36300:case 36308:case 36293:return xf;case 36289:case 36303:case 36311:case 36292:return yf}}function Sf(s,t){s.uniform1fv(this.addr,t)}function wf(s,t){const e=Bi(t,this.size,2);s.uniform2fv(this.addr,e)}function Ef(s,t){const e=Bi(t,this.size,3);s.uniform3fv(this.addr,e)}function bf(s,t){const e=Bi(t,this.size,4);s.uniform4fv(this.addr,e)}function Tf(s,t){const e=Bi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Af(s,t){const e=Bi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Cf(s,t){const e=Bi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Rf(s,t){s.uniform1iv(this.addr,t)}function Pf(s,t){s.uniform2iv(this.addr,t)}function Lf(s,t){s.uniform3iv(this.addr,t)}function If(s,t){s.uniform4iv(this.addr,t)}function Df(s,t){s.uniform1uiv(this.addr,t)}function Nf(s,t){s.uniform2uiv(this.addr,t)}function Uf(s,t){s.uniform3uiv(this.addr,t)}function Ff(s,t){s.uniform4uiv(this.addr,t)}function Bf(s,t,e){const n=this.cache,r=t.length,i=Fr(e,r);Ue(n,i)||(s.uniform1iv(this.addr,i),Fe(n,i));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||nl,i[a])}function Of(s,t,e){const n=this.cache,r=t.length,i=Fr(e,r);Ue(n,i)||(s.uniform1iv(this.addr,i),Fe(n,i));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||rl,i[a])}function zf(s,t,e){const n=this.cache,r=t.length,i=Fr(e,r);Ue(n,i)||(s.uniform1iv(this.addr,i),Fe(n,i));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||sl,i[a])}function Vf(s,t,e){const n=this.cache,r=t.length,i=Fr(e,r);Ue(n,i)||(s.uniform1iv(this.addr,i),Fe(n,i));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||il,i[a])}function kf(s){switch(s){case 5126:return Sf;case 35664:return wf;case 35665:return Ef;case 35666:return bf;case 35674:return Tf;case 35675:return Af;case 35676:return Cf;case 5124:case 35670:return Rf;case 35667:case 35671:return Pf;case 35668:case 35672:return Lf;case 35669:case 35673:return If;case 5125:return Df;case 36294:return Nf;case 36295:return Uf;case 36296:return Ff;case 35678:case 36198:case 36298:case 36306:case 35682:return Bf;case 35679:case 36299:case 36307:return Of;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Vf}}class Hf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mf(e.type)}}class Gf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kf(e.type)}}class Wf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let i=0,a=r.length;i!==a;++i){const o=r[i];o.setValue(t,e[o.id],n)}}}const ds=/(\w+)(\])?(\[|\.)?/g;function po(s,t){s.seq.push(t),s.map[t.id]=t}function Xf(s,t,e){const n=s.name,r=n.length;for(ds.lastIndex=0;;){const i=ds.exec(n),a=ds.lastIndex;let o=i[1];const h=i[2]==="]",d=i[3];if(h&&(o=o|0),d===void 0||d==="["&&a+2===r){po(e,d===void 0?new Hf(o,s,t):new Gf(o,s,t));break}else{let l=e.map[o];l===void 0&&(l=new Wf(o),po(e,l)),e=l}}}class Pr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const i=t.getActiveUniform(e,r),a=t.getUniformLocation(e,i.name);Xf(i,a,this)}}setValue(t,e,n,r){const i=this.map[e];i!==void 0&&i.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let i=0,a=e.length;i!==a;++i){const o=e[i],h=n[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,i=t.length;r!==i;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function mo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const qf=37297;let Yf=0;function Zf(s,t){const e=s.split(`
`),n=[],r=Math.max(t-6,0),i=Math.min(t+6,e.length);for(let a=r;a<i;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const vo=new fe;function $f(s){Se._getMatrix(vo,Se.workingColorSpace,s);const t=`mat3( ${vo.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(s)){case Lr:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function go(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=s.getShaderInfoLog(t).trim();if(n&&r==="")return"";const i=/ERROR: 0:(\d+)/.exec(r);if(i){const a=parseInt(i[1]);return e.toUpperCase()+`

`+r+`

`+Zf(s.getShaderSource(t),a)}else return r}function Kf(s,t){const e=$f(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function jf(s,t){let e;switch(t){case Pl:e="Linear";break;case Ll:e="Reinhard";break;case Il:e="Cineon";break;case Dl:e="ACESFilmic";break;case Ul:e="AgX";break;case Fl:e="Neutral";break;case Nl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wr=new O;function Qf(){Se.getLuminanceCoefficients(wr);const s=wr.x.toFixed(4),t=wr.y.toFixed(4),e=wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yi).join(`
`)}function tp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ep(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const i=s.getActiveAttrib(t,r),a=i.name;let o=1;i.type===s.FLOAT_MAT2&&(o=2),i.type===s.FLOAT_MAT3&&(o=3),i.type===s.FLOAT_MAT4&&(o=4),e[a]={type:i.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Yi(s){return s!==""}function _o(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const np=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(s){return s.replace(np,rp)}const ip=new Map;function rp(s,t){let e=ve[t];if(e===void 0){const n=ip.get(t);if(n!==void 0)e=ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ia(e)}const sp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yo(s){return s.replace(sp,ap)}function ap(s,t,e,n){let r="";for(let i=parseInt(t);i<parseInt(e);i++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return r}function Mo(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function op(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===To?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ao?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function lp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ri:case Pi:t="ENVMAP_TYPE_CUBE";break;case Nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function hp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case aa:t="ENVMAP_BLENDING_MULTIPLY";break;case Cl:t="ENVMAP_BLENDING_MIX";break;case Rl:t="ENVMAP_BLENDING_ADD";break}return t}function up(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function dp(s,t,e,n){const r=s.getContext(),i=e.defines;let a=e.vertexShader,o=e.fragmentShader;const h=op(e),d=lp(e),c=cp(e),l=hp(e),u=up(e),f=Jf(e),v=tp(i),g=r.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Yi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Yi).join(`
`),p.length>0&&(p+=`
`)):(m=[Mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),p=[Mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+c:"",e.envMap?"#define "+l:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?ve.tonemapping_pars_fragment:"",e.toneMapping!==On?jf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,Kf("linearToOutputTexel",e.outputColorSpace),Qf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yi).join(`
`)),a=ia(a),a=_o(a,e),a=xo(a,e),o=ia(o),o=_o(o,e),o=xo(o,e),a=yo(a),o=yo(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+a,_=x+p+o,T=mo(r,r.VERTEX_SHADER,M),P=mo(r,r.FRAGMENT_SHADER,_);r.attachShader(g,T),r.attachShader(g,P),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function D(E){if(s.debug.checkShaderErrors){const F=r.getProgramInfoLog(g).trim(),U=r.getShaderInfoLog(T).trim(),Y=r.getShaderInfoLog(P).trim();let W=!0,J=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,g,T,P);else{const z=go(r,T,"vertex"),I=go(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+F+`
`+z+`
`+I)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||Y==="")&&(J=!1);J&&(E.diagnostics={runnable:W,programLog:F,vertexShader:{log:U,prefix:m},fragmentShader:{log:Y,prefix:p}})}r.deleteShader(T),r.deleteShader(P),R=new Pr(r,g),S=ep(r,g)}let R;this.getUniforms=function(){return R===void 0&&D(this),R};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,qf)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yf++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=P,this}let fp=0;class pp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new mp(t),e.set(t,n)),n}}class mp{constructor(t){this.id=fp++,this.code=t,this.usedTimes=0}}function vp(s,t,e,n,r,i,a){const o=new va,h=new pp,d=new Set,c=[],l=r.logarithmicDepthBuffer,u=r.vertexTextures;let f=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return d.add(S),S===0?"uv":`uv${S}`}function m(S,y,E,F,U){const Y=F.fog,W=U.geometry,J=S.isMeshStandardMaterial?F.environment:null,z=(S.isMeshStandardMaterial?e:t).get(S.envMap||J),I=z&&z.mapping===Nr?z.image.height:null,tt=v[S.type];S.precision!==null&&(f=r.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const K=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,B=K!==void 0?K.length:0;let j=0;W.morphAttributes.position!==void 0&&(j=1),W.morphAttributes.normal!==void 0&&(j=2),W.morphAttributes.color!==void 0&&(j=3);let V,A,C,H;if(tt){const ae=un[tt];V=ae.vertexShader,A=ae.fragmentShader}else V=S.vertexShader,A=S.fragmentShader,h.update(S),C=h.getVertexShaderID(S),H=h.getFragmentShaderID(S);const Q=s.getRenderTarget(),nt=s.state.buffers.depth.getReversed(),X=U.isInstancedMesh===!0,rt=U.isBatchedMesh===!0,mt=!!S.map,St=!!S.matcap,wt=!!z,N=!!S.aoMap,ft=!!S.lightMap,ut=!!S.bumpMap,Xt=!!S.normalMap,xt=!!S.displacementMap,ne=!!S.emissiveMap,vt=!!S.metalnessMap,L=!!S.roughnessMap,w=S.anisotropy>0,Z=S.clearcoat>0,ct=S.dispersion>0,ht=S.iridescence>0,ot=S.sheen>0,Et=S.transmission>0,bt=w&&!!S.anisotropyMap,Ft=Z&&!!S.clearcoatMap,he=Z&&!!S.clearcoatNormalMap,Mt=Z&&!!S.clearcoatRoughnessMap,Gt=ht&&!!S.iridescenceMap,Zt=ht&&!!S.iridescenceThicknessMap,Kt=ot&&!!S.sheenColorMap,Wt=ot&&!!S.sheenRoughnessMap,ue=!!S.specularMap,ie=!!S.specularColorMap,ge=!!S.specularIntensityMap,q=Et&&!!S.transmissionMap,Lt=Et&&!!S.thicknessMap,lt=!!S.gradientMap,pt=!!S.alphaMap,Vt=S.alphaTest>0,Ot=!!S.alphaHash,re=!!S.extensions;let be=On;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(be=s.toneMapping);const Re={shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:V,fragmentShader:A,defines:S.defines,customVertexShaderID:C,customFragmentShaderID:H,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:rt,batchingColor:rt&&U._colorsTexture!==null,instancing:X,instancingColor:X&&U.instanceColor!==null,instancingMorph:X&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Di,alphaToCoverage:!!S.alphaToCoverage,map:mt,matcap:St,envMap:wt,envMapMode:wt&&z.mapping,envMapCubeUVHeight:I,aoMap:N,lightMap:ft,bumpMap:ut,normalMap:Xt,displacementMap:u&&xt,emissiveMap:ne,normalMapObjectSpace:Xt&&S.normalMapType===Vl,normalMapTangentSpace:Xt&&S.normalMapType===fa,metalnessMap:vt,roughnessMap:L,anisotropy:w,anisotropyMap:bt,clearcoat:Z,clearcoatMap:Ft,clearcoatNormalMap:he,clearcoatRoughnessMap:Mt,dispersion:ct,iridescence:ht,iridescenceMap:Gt,iridescenceThicknessMap:Zt,sheen:ot,sheenColorMap:Kt,sheenRoughnessMap:Wt,specularMap:ue,specularColorMap:ie,specularIntensityMap:ge,transmission:Et,transmissionMap:q,thicknessMap:Lt,gradientMap:lt,opaque:S.transparent===!1&&S.blending===bi&&S.alphaToCoverage===!1,alphaMap:pt,alphaTest:Vt,alphaHash:Ot,combine:S.combine,mapUv:mt&&g(S.map.channel),aoMapUv:N&&g(S.aoMap.channel),lightMapUv:ft&&g(S.lightMap.channel),bumpMapUv:ut&&g(S.bumpMap.channel),normalMapUv:Xt&&g(S.normalMap.channel),displacementMapUv:xt&&g(S.displacementMap.channel),emissiveMapUv:ne&&g(S.emissiveMap.channel),metalnessMapUv:vt&&g(S.metalnessMap.channel),roughnessMapUv:L&&g(S.roughnessMap.channel),anisotropyMapUv:bt&&g(S.anisotropyMap.channel),clearcoatMapUv:Ft&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&g(S.sheenRoughnessMap.channel),specularMapUv:ue&&g(S.specularMap.channel),specularColorMapUv:ie&&g(S.specularColorMap.channel),specularIntensityMapUv:ge&&g(S.specularIntensityMap.channel),transmissionMapUv:q&&g(S.transmissionMap.channel),thicknessMapUv:Lt&&g(S.thicknessMap.channel),alphaMapUv:pt&&g(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Xt||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(mt||pt),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:nt,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:j,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&E.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:mt&&S.map.isVideoTexture===!0&&Se.getTransfer(S.map.colorSpace)===Ae,decodeVideoTextureEmissive:ne&&S.emissiveMap.isVideoTexture===!0&&Se.getTransfer(S.emissiveMap.colorSpace)===Ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===en,flipSided:S.side===Ze,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:re&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&S.extensions.multiDraw===!0||rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Re.vertexUv1s=d.has(1),Re.vertexUv2s=d.has(2),Re.vertexUv3s=d.has(3),d.clear(),Re}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const E in S.defines)y.push(E),y.push(S.defines[E]);return S.isRawShaderMaterial===!1&&(x(y,S),M(y,S),y.push(s.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function x(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){const y=v[S.type];let E;if(y){const F=un[y];E=Ic.clone(F.uniforms)}else E=S.uniforms;return E}function T(S,y){let E;for(let F=0,U=c.length;F<U;F++){const Y=c[F];if(Y.cacheKey===y){E=Y,++E.usedTimes;break}}return E===void 0&&(E=new dp(s,y,S,i),c.push(E)),E}function P(S){if(--S.usedTimes===0){const y=c.indexOf(S);c[y]=c[c.length-1],c.pop(),S.destroy()}}function D(S){h.remove(S)}function R(){h.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:T,releaseProgram:P,releaseShaderCache:D,programs:c,dispose:R}}function gp(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function r(a,o,h){s.get(a)[o]=h}function i(){s=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:i}}function _p(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function So(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function wo(){const s=[];let t=0;const e=[],n=[],r=[];function i(){t=0,e.length=0,n.length=0,r.length=0}function a(l,u,f,v,g,m){let p=s[t];return p===void 0?(p={id:l.id,object:l,geometry:u,material:f,groupOrder:v,renderOrder:l.renderOrder,z:g,group:m},s[t]=p):(p.id=l.id,p.object=l,p.geometry=u,p.material=f,p.groupOrder=v,p.renderOrder=l.renderOrder,p.z=g,p.group=m),t++,p}function o(l,u,f,v,g,m){const p=a(l,u,f,v,g,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):e.push(p)}function h(l,u,f,v,g,m){const p=a(l,u,f,v,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):e.unshift(p)}function d(l,u){e.length>1&&e.sort(l||_p),n.length>1&&n.sort(u||So),r.length>1&&r.sort(u||So)}function c(){for(let l=t,u=s.length;l<u;l++){const f=s[l];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:r,init:i,push:o,unshift:h,finish:c,sort:d}}function xp(){let s=new WeakMap;function t(n,r){const i=s.get(n);let a;return i===void 0?(a=new wo,s.set(n,[a])):r>=i.length?(a=new wo,i.push(a)):a=i[r],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function yp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new oe};break;case"SpotLight":e={position:new O,direction:new O,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new O,halfWidth:new O,halfHeight:new O};break}return s[t.id]=e,e}}}function Mp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Sp=0;function wp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ep(s){const t=new yp,e=Mp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new O);const r=new O,i=new Ce,a=new Ce;function o(d){let c=0,l=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,v=0,g=0,m=0,p=0,x=0,M=0,_=0,T=0,P=0,D=0;d.sort(wp);for(let S=0,y=d.length;S<y;S++){const E=d[S],F=E.color,U=E.intensity,Y=E.distance,W=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)c+=F.r*U,l+=F.g*U,u+=F.b*U;else if(E.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(E.sh.coefficients[J],U);D++}else if(E.isDirectionalLight){const J=t.get(E);if(J.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const z=E.shadow,I=e.get(E);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,n.directionalShadow[f]=I,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=E.shadow.matrix,x++}n.directional[f]=J,f++}else if(E.isSpotLight){const J=t.get(E);J.position.setFromMatrixPosition(E.matrixWorld),J.color.copy(F).multiplyScalar(U),J.distance=Y,J.coneCos=Math.cos(E.angle),J.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),J.decay=E.decay,n.spot[g]=J;const z=E.shadow;if(E.map&&(n.spotLightMap[T]=E.map,T++,z.updateMatrices(E),E.castShadow&&P++),n.spotLightMatrix[g]=z.matrix,E.castShadow){const I=e.get(E);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,n.spotShadow[g]=I,n.spotShadowMap[g]=W,_++}g++}else if(E.isRectAreaLight){const J=t.get(E);J.color.copy(F).multiplyScalar(U),J.halfWidth.set(E.width*.5,0,0),J.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=J,m++}else if(E.isPointLight){const J=t.get(E);if(J.color.copy(E.color).multiplyScalar(E.intensity),J.distance=E.distance,J.decay=E.decay,E.castShadow){const z=E.shadow,I=e.get(E);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,I.shadowCameraNear=z.camera.near,I.shadowCameraFar=z.camera.far,n.pointShadow[v]=I,n.pointShadowMap[v]=W,n.pointShadowMatrix[v]=E.shadow.matrix,M++}n.point[v]=J,v++}else if(E.isHemisphereLight){const J=t.get(E);J.skyColor.copy(E.color).multiplyScalar(U),J.groundColor.copy(E.groundColor).multiplyScalar(U),n.hemi[p]=J,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=l,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==f||R.pointLength!==v||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==M||R.numSpotShadows!==_||R.numSpotMaps!==T||R.numLightProbes!==D)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+T-P,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=D,R.directionalLength=f,R.pointLength=v,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=M,R.numSpotShadows=_,R.numSpotMaps=T,R.numLightProbes=D,n.version=Sp++)}function h(d,c){let l=0,u=0,f=0,v=0,g=0;const m=c.matrixWorldInverse;for(let p=0,x=d.length;p<x;p++){const M=d[p];if(M.isDirectionalLight){const _=n.directional[l];_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),l++}else if(M.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),a.identity(),i.copy(M.matrixWorld),i.premultiply(m),a.extractRotation(i),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:o,setupView:h,state:n}}function Eo(s){const t=new Ep(s),e=[],n=[];function r(c){d.camera=c,e.length=0,n.length=0}function i(c){e.push(c)}function a(c){n.push(c)}function o(){t.setup(e)}function h(c){t.setupView(e,c)}const d={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:o,setupLightsView:h,pushLight:i,pushShadow:a}}function bp(s){let t=new WeakMap;function e(r,i=0){const a=t.get(r);let o;return a===void 0?(o=new Eo(s),t.set(r,[o])):i>=a.length?(o=new Eo(s),a.push(o)):o=a[i],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Tp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ap=`uniform sampler2D shadow_pass;
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
}`;function Cp(s,t,e){let n=new ga;const r=new le,i=new le,a=new Pe,o=new Wc({depthPacking:zl}),h=new Xc,d={},c=e.maxTextureSize,l={[zn]:Ze,[Ze]:zn,[en]:en},u=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Tp,fragmentShader:Ap}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const v=new Rn;v.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ne(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To;let p=this.type;this.render=function(P,D,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const S=s.getRenderTarget(),y=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Bn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=p!==yn&&this.type===yn,Y=p===yn&&this.type!==yn;for(let W=0,J=P.length;W<J;W++){const z=P[W],I=z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const tt=I.getFrameExtents();if(r.multiply(tt),i.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(i.x=Math.floor(c/tt.x),r.x=i.x*tt.x,I.mapSize.x=i.x),r.y>c&&(i.y=Math.floor(c/tt.y),r.y=i.y*tt.y,I.mapSize.y=i.y)),I.map===null||U===!0||Y===!0){const B=this.type!==yn?{minFilter:cn,magFilter:cn}:{};I.map!==null&&I.map.dispose(),I.map=new ei(r.x,r.y,B),I.map.texture.name=z.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const K=I.getViewportCount();for(let B=0;B<K;B++){const j=I.getViewport(B);a.set(i.x*j.x,i.y*j.y,i.x*j.z,i.y*j.w),F.viewport(a),I.updateMatrices(z,B),n=I.getFrustum(),_(D,R,I.camera,z,this.type)}I.isPointLightShadow!==!0&&this.type===yn&&x(I,R),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,y,E)};function x(P,D){const R=t.update(g);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ei(r.x,r.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(D,null,R,u,g,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(D,null,R,f,g,null)}function M(P,D,R,S){let y=null;const E=R.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(E!==void 0)y=E;else if(y=R.isPointLight===!0?h:o,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const F=y.uuid,U=D.uuid;let Y=d[F];Y===void 0&&(Y={},d[F]=Y);let W=Y[U];W===void 0&&(W=y.clone(),Y[U]=W,D.addEventListener("dispose",T)),y=W}if(y.visible=D.visible,y.wireframe=D.wireframe,S===yn?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:l[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=s.properties.get(y);F.light=R}return y}function _(P,D,R,S,y){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===yn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,P.matrixWorld);const U=t.update(P),Y=P.material;if(Array.isArray(Y)){const W=U.groups;for(let J=0,z=W.length;J<z;J++){const I=W[J],tt=Y[I.materialIndex];if(tt&&tt.visible){const K=M(P,tt,S,y);P.onBeforeShadow(s,P,D,R,U,K,I),s.renderBufferDirect(R,null,U,K,P,I),P.onAfterShadow(s,P,D,R,U,K,I)}}}else if(Y.visible){const W=M(P,Y,S,y);P.onBeforeShadow(s,P,D,R,U,W,null),s.renderBufferDirect(R,null,U,W,P,null),P.onAfterShadow(s,P,D,R,U,W,null)}}const F=P.children;for(let U=0,Y=F.length;U<Y;U++)_(F[U],D,R,S,y)}function T(P){P.target.removeEventListener("dispose",T);for(const R in d){const S=d[R],y=P.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Rp={[_s]:xs,[ys]:ws,[Ms]:Es,[Ci]:Ss,[xs]:_s,[ws]:ys,[Es]:Ms,[Ss]:Ci};function Pp(s,t){function e(){let q=!1;const Lt=new Pe;let lt=null;const pt=new Pe(0,0,0,0);return{setMask:function(Vt){lt!==Vt&&!q&&(s.colorMask(Vt,Vt,Vt,Vt),lt=Vt)},setLocked:function(Vt){q=Vt},setClear:function(Vt,Ot,re,be,Re){Re===!0&&(Vt*=be,Ot*=be,re*=be),Lt.set(Vt,Ot,re,be),pt.equals(Lt)===!1&&(s.clearColor(Vt,Ot,re,be),pt.copy(Lt))},reset:function(){q=!1,lt=null,pt.set(-1,0,0,0)}}}function n(){let q=!1,Lt=!1,lt=null,pt=null,Vt=null;return{setReversed:function(Ot){if(Lt!==Ot){const re=t.get("EXT_clip_control");Lt?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);const be=Vt;Vt=null,this.setClear(be)}Lt=Ot},getReversed:function(){return Lt},setTest:function(Ot){Ot?Q(s.DEPTH_TEST):nt(s.DEPTH_TEST)},setMask:function(Ot){lt!==Ot&&!q&&(s.depthMask(Ot),lt=Ot)},setFunc:function(Ot){if(Lt&&(Ot=Rp[Ot]),pt!==Ot){switch(Ot){case _s:s.depthFunc(s.NEVER);break;case xs:s.depthFunc(s.ALWAYS);break;case ys:s.depthFunc(s.LESS);break;case Ci:s.depthFunc(s.LEQUAL);break;case Ms:s.depthFunc(s.EQUAL);break;case Ss:s.depthFunc(s.GEQUAL);break;case ws:s.depthFunc(s.GREATER);break;case Es:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=Ot}},setLocked:function(Ot){q=Ot},setClear:function(Ot){Vt!==Ot&&(Lt&&(Ot=1-Ot),s.clearDepth(Ot),Vt=Ot)},reset:function(){q=!1,lt=null,pt=null,Vt=null,Lt=!1}}}function r(){let q=!1,Lt=null,lt=null,pt=null,Vt=null,Ot=null,re=null,be=null,Re=null;return{setTest:function(ae){q||(ae?Q(s.STENCIL_TEST):nt(s.STENCIL_TEST))},setMask:function(ae){Lt!==ae&&!q&&(s.stencilMask(ae),Lt=ae)},setFunc:function(ae,at,dt){(lt!==ae||pt!==at||Vt!==dt)&&(s.stencilFunc(ae,at,dt),lt=ae,pt=at,Vt=dt)},setOp:function(ae,at,dt){(Ot!==ae||re!==at||be!==dt)&&(s.stencilOp(ae,at,dt),Ot=ae,re=at,be=dt)},setLocked:function(ae){q=ae},setClear:function(ae){Re!==ae&&(s.clearStencil(ae),Re=ae)},reset:function(){q=!1,Lt=null,lt=null,pt=null,Vt=null,Ot=null,re=null,be=null,Re=null}}}const i=new e,a=new n,o=new r,h=new WeakMap,d=new WeakMap;let c={},l={},u=new WeakMap,f=[],v=null,g=!1,m=null,p=null,x=null,M=null,_=null,T=null,P=null,D=new oe(0,0,0),R=0,S=!1,y=null,E=null,F=null,U=null,Y=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,z=0;const I=s.getParameter(s.VERSION);I.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(I)[1]),J=z>=1):I.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),J=z>=2);let tt=null,K={};const B=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),V=new Pe().fromArray(B),A=new Pe().fromArray(j);function C(q,Lt,lt,pt){const Vt=new Uint8Array(4),Ot=s.createTexture();s.bindTexture(q,Ot),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let re=0;re<lt;re++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Lt,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,Vt):s.texImage2D(Lt+re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Vt);return Ot}const H={};H[s.TEXTURE_2D]=C(s.TEXTURE_2D,s.TEXTURE_2D,1),H[s.TEXTURE_CUBE_MAP]=C(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[s.TEXTURE_2D_ARRAY]=C(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),H[s.TEXTURE_3D]=C(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(s.DEPTH_TEST),a.setFunc(Ci),ut(!1),Xt(Sa),Q(s.CULL_FACE),N(Bn);function Q(q){c[q]!==!0&&(s.enable(q),c[q]=!0)}function nt(q){c[q]!==!1&&(s.disable(q),c[q]=!1)}function X(q,Lt){return l[q]!==Lt?(s.bindFramebuffer(q,Lt),l[q]=Lt,q===s.DRAW_FRAMEBUFFER&&(l[s.FRAMEBUFFER]=Lt),q===s.FRAMEBUFFER&&(l[s.DRAW_FRAMEBUFFER]=Lt),!0):!1}function rt(q,Lt){let lt=f,pt=!1;if(q){lt=u.get(Lt),lt===void 0&&(lt=[],u.set(Lt,lt));const Vt=q.textures;if(lt.length!==Vt.length||lt[0]!==s.COLOR_ATTACHMENT0){for(let Ot=0,re=Vt.length;Ot<re;Ot++)lt[Ot]=s.COLOR_ATTACHMENT0+Ot;lt.length=Vt.length,pt=!0}}else lt[0]!==s.BACK&&(lt[0]=s.BACK,pt=!0);pt&&s.drawBuffers(lt)}function mt(q){return v!==q?(s.useProgram(q),v=q,!0):!1}const St={[Kn]:s.FUNC_ADD,[ul]:s.FUNC_SUBTRACT,[dl]:s.FUNC_REVERSE_SUBTRACT};St[fl]=s.MIN,St[pl]=s.MAX;const wt={[ml]:s.ZERO,[vl]:s.ONE,[gl]:s.SRC_COLOR,[vs]:s.SRC_ALPHA,[wl]:s.SRC_ALPHA_SATURATE,[Ml]:s.DST_COLOR,[xl]:s.DST_ALPHA,[_l]:s.ONE_MINUS_SRC_COLOR,[gs]:s.ONE_MINUS_SRC_ALPHA,[Sl]:s.ONE_MINUS_DST_COLOR,[yl]:s.ONE_MINUS_DST_ALPHA,[El]:s.CONSTANT_COLOR,[bl]:s.ONE_MINUS_CONSTANT_COLOR,[Tl]:s.CONSTANT_ALPHA,[Al]:s.ONE_MINUS_CONSTANT_ALPHA};function N(q,Lt,lt,pt,Vt,Ot,re,be,Re,ae){if(q===Bn){g===!0&&(nt(s.BLEND),g=!1);return}if(g===!1&&(Q(s.BLEND),g=!0),q!==hl){if(q!==m||ae!==S){if((p!==Kn||_!==Kn)&&(s.blendEquation(s.FUNC_ADD),p=Kn,_=Kn),ae)switch(q){case bi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ms:s.blendFunc(s.ONE,s.ONE);break;case wa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ea:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ms:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ea:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}x=null,M=null,T=null,P=null,D.set(0,0,0),R=0,m=q,S=ae}return}Vt=Vt||Lt,Ot=Ot||lt,re=re||pt,(Lt!==p||Vt!==_)&&(s.blendEquationSeparate(St[Lt],St[Vt]),p=Lt,_=Vt),(lt!==x||pt!==M||Ot!==T||re!==P)&&(s.blendFuncSeparate(wt[lt],wt[pt],wt[Ot],wt[re]),x=lt,M=pt,T=Ot,P=re),(be.equals(D)===!1||Re!==R)&&(s.blendColor(be.r,be.g,be.b,Re),D.copy(be),R=Re),m=q,S=!1}function ft(q,Lt){q.side===en?nt(s.CULL_FACE):Q(s.CULL_FACE);let lt=q.side===Ze;Lt&&(lt=!lt),ut(lt),q.blending===bi&&q.transparent===!1?N(Bn):N(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),i.setMask(q.colorWrite);const pt=q.stencilWrite;o.setTest(pt),pt&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ne(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(q){y!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),y=q)}function Xt(q){q!==ll?(Q(s.CULL_FACE),q!==E&&(q===Sa?s.cullFace(s.BACK):q===cl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):nt(s.CULL_FACE),E=q}function xt(q){q!==F&&(J&&s.lineWidth(q),F=q)}function ne(q,Lt,lt){q?(Q(s.POLYGON_OFFSET_FILL),(U!==Lt||Y!==lt)&&(s.polygonOffset(Lt,lt),U=Lt,Y=lt)):nt(s.POLYGON_OFFSET_FILL)}function vt(q){q?Q(s.SCISSOR_TEST):nt(s.SCISSOR_TEST)}function L(q){q===void 0&&(q=s.TEXTURE0+W-1),tt!==q&&(s.activeTexture(q),tt=q)}function w(q,Lt,lt){lt===void 0&&(tt===null?lt=s.TEXTURE0+W-1:lt=tt);let pt=K[lt];pt===void 0&&(pt={type:void 0,texture:void 0},K[lt]=pt),(pt.type!==q||pt.texture!==Lt)&&(tt!==lt&&(s.activeTexture(lt),tt=lt),s.bindTexture(q,Lt||H[q]),pt.type=q,pt.texture=Lt)}function Z(){const q=K[tt];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ct(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ht(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ot(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function bt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ft(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Gt(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Zt(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Kt(q){V.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),V.copy(q))}function Wt(q){A.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),A.copy(q))}function ue(q,Lt){let lt=d.get(Lt);lt===void 0&&(lt=new WeakMap,d.set(Lt,lt));let pt=lt.get(q);pt===void 0&&(pt=s.getUniformBlockIndex(Lt,q.name),lt.set(q,pt))}function ie(q,Lt){const pt=d.get(Lt).get(q);h.get(Lt)!==pt&&(s.uniformBlockBinding(Lt,pt,q.__bindingPointIndex),h.set(Lt,pt))}function ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},tt=null,K={},l={},u=new WeakMap,f=[],v=null,g=!1,m=null,p=null,x=null,M=null,_=null,T=null,P=null,D=new oe(0,0,0),R=0,S=!1,y=null,E=null,F=null,U=null,Y=null,V.set(0,0,s.canvas.width,s.canvas.height),A.set(0,0,s.canvas.width,s.canvas.height),i.reset(),a.reset(),o.reset()}return{buffers:{color:i,depth:a,stencil:o},enable:Q,disable:nt,bindFramebuffer:X,drawBuffers:rt,useProgram:mt,setBlending:N,setMaterial:ft,setFlipSided:ut,setCullFace:Xt,setLineWidth:xt,setPolygonOffset:ne,setScissorTest:vt,activeTexture:L,bindTexture:w,unbindTexture:Z,compressedTexImage2D:ct,compressedTexImage3D:ht,texImage2D:Gt,texImage3D:Zt,updateUBOMapping:ue,uniformBlockBinding:ie,texStorage2D:he,texStorage3D:Mt,texSubImage2D:ot,texSubImage3D:Et,compressedTexSubImage2D:bt,compressedTexSubImage3D:Ft,scissor:Kt,viewport:Wt,reset:ge}}function Lp(s,t,e,n,r,i,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new le,c=new WeakMap;let l;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,w){return f?new OffscreenCanvas(L,w):ji("canvas")}function g(L,w,Z){let ct=1;const ht=vt(L);if((ht.width>Z||ht.height>Z)&&(ct=Z/Math.max(ht.width,ht.height)),ct<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ot=Math.floor(ct*ht.width),Et=Math.floor(ct*ht.height);l===void 0&&(l=v(ot,Et));const bt=w?v(ot,Et):l;return bt.width=ot,bt.height=Et,bt.getContext("2d").drawImage(L,0,0,ot,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+ot+"x"+Et+")."),bt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){s.generateMipmap(L)}function x(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(L,w,Z,ct,ht=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ot=w;if(w===s.RED&&(Z===s.FLOAT&&(ot=s.R32F),Z===s.HALF_FLOAT&&(ot=s.R16F),Z===s.UNSIGNED_BYTE&&(ot=s.R8)),w===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ot=s.R8UI),Z===s.UNSIGNED_SHORT&&(ot=s.R16UI),Z===s.UNSIGNED_INT&&(ot=s.R32UI),Z===s.BYTE&&(ot=s.R8I),Z===s.SHORT&&(ot=s.R16I),Z===s.INT&&(ot=s.R32I)),w===s.RG&&(Z===s.FLOAT&&(ot=s.RG32F),Z===s.HALF_FLOAT&&(ot=s.RG16F),Z===s.UNSIGNED_BYTE&&(ot=s.RG8)),w===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ot=s.RG8UI),Z===s.UNSIGNED_SHORT&&(ot=s.RG16UI),Z===s.UNSIGNED_INT&&(ot=s.RG32UI),Z===s.BYTE&&(ot=s.RG8I),Z===s.SHORT&&(ot=s.RG16I),Z===s.INT&&(ot=s.RG32I)),w===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ot=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(ot=s.RGB16UI),Z===s.UNSIGNED_INT&&(ot=s.RGB32UI),Z===s.BYTE&&(ot=s.RGB8I),Z===s.SHORT&&(ot=s.RGB16I),Z===s.INT&&(ot=s.RGB32I)),w===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ot=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(ot=s.RGBA16UI),Z===s.UNSIGNED_INT&&(ot=s.RGBA32UI),Z===s.BYTE&&(ot=s.RGBA8I),Z===s.SHORT&&(ot=s.RGBA16I),Z===s.INT&&(ot=s.RGBA32I)),w===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(ot=s.RGB9_E5),w===s.RGBA){const Et=ht?Lr:Se.getTransfer(ct);Z===s.FLOAT&&(ot=s.RGBA32F),Z===s.HALF_FLOAT&&(ot=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(ot=Et===Ae?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(ot=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(ot=s.RGB5_A1)}return(ot===s.R16F||ot===s.R32F||ot===s.RG16F||ot===s.RG32F||ot===s.RGBA16F||ot===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function _(L,w){let Z;return L?w===null||w===ti||w===Li?Z=s.DEPTH24_STENCIL8:w===Sn?Z=s.DEPTH32F_STENCIL8:w===Ki&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ti||w===Li?Z=s.DEPTH_COMPONENT24:w===Sn?Z=s.DEPTH_COMPONENT32F:w===Ki&&(Z=s.DEPTH_COMPONENT16),Z}function T(L,w){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==cn&&L.minFilter!==fn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function P(L){const w=L.target;w.removeEventListener("dispose",P),R(w),w.isVideoTexture&&c.delete(w)}function D(L){const w=L.target;w.removeEventListener("dispose",D),y(w)}function R(L){const w=n.get(L);if(w.__webglInit===void 0)return;const Z=L.source,ct=u.get(Z);if(ct){const ht=ct[w.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&S(L),Object.keys(ct).length===0&&u.delete(Z)}n.remove(L)}function S(L){const w=n.get(L);s.deleteTexture(w.__webglTexture);const Z=L.source,ct=u.get(Z);delete ct[w.__cacheKey],a.memory.textures--}function y(L){const w=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(w.__webglFramebuffer[ct]))for(let ht=0;ht<w.__webglFramebuffer[ct].length;ht++)s.deleteFramebuffer(w.__webglFramebuffer[ct][ht]);else s.deleteFramebuffer(w.__webglFramebuffer[ct]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ct])}else{if(Array.isArray(w.__webglFramebuffer))for(let ct=0;ct<w.__webglFramebuffer.length;ct++)s.deleteFramebuffer(w.__webglFramebuffer[ct]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ct=0;ct<w.__webglColorRenderbuffer.length;ct++)w.__webglColorRenderbuffer[ct]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ct]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=L.textures;for(let ct=0,ht=Z.length;ct<ht;ct++){const ot=n.get(Z[ct]);ot.__webglTexture&&(s.deleteTexture(ot.__webglTexture),a.memory.textures--),n.remove(Z[ct])}n.remove(L)}let E=0;function F(){E=0}function U(){const L=E;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),E+=1,L}function Y(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function W(L,w){const Z=n.get(L);if(L.isVideoTexture&&xt(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const ct=L.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{A(Z,L,w);return}}e.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+w)}function J(L,w){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){A(Z,L,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+w)}function z(L,w){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){A(Z,L,w);return}e.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+w)}function I(L,w){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){C(Z,L,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+w)}const tt={[As]:s.REPEAT,[Qn]:s.CLAMP_TO_EDGE,[Cs]:s.MIRRORED_REPEAT},K={[cn]:s.NEAREST,[Bl]:s.NEAREST_MIPMAP_NEAREST,[tr]:s.NEAREST_MIPMAP_LINEAR,[fn]:s.LINEAR,[Or]:s.LINEAR_MIPMAP_NEAREST,[Jn]:s.LINEAR_MIPMAP_LINEAR},B={[kl]:s.NEVER,[Yl]:s.ALWAYS,[Hl]:s.LESS,[zo]:s.LEQUAL,[Gl]:s.EQUAL,[ql]:s.GEQUAL,[Wl]:s.GREATER,[Xl]:s.NOTEQUAL};function j(L,w){if(w.type===Sn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===fn||w.magFilter===Or||w.magFilter===tr||w.magFilter===Jn||w.minFilter===fn||w.minFilter===Or||w.minFilter===tr||w.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,tt[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,tt[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,tt[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,K[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,K[w.minFilter]),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,B[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===cn||w.minFilter!==tr&&w.minFilter!==Jn||w.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function V(L,w){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",P));const ct=w.source;let ht=u.get(ct);ht===void 0&&(ht={},u.set(ct,ht));const ot=Y(w);if(ot!==L.__cacheKey){ht[ot]===void 0&&(ht[ot]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ht[ot].usedTimes++;const Et=ht[L.__cacheKey];Et!==void 0&&(ht[L.__cacheKey].usedTimes--,Et.usedTimes===0&&S(w)),L.__cacheKey=ot,L.__webglTexture=ht[ot].texture}return Z}function A(L,w,Z){let ct=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ct=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ct=s.TEXTURE_3D);const ht=V(L,w),ot=w.source;e.bindTexture(ct,L.__webglTexture,s.TEXTURE0+Z);const Et=n.get(ot);if(ot.version!==Et.__version||ht===!0){e.activeTexture(s.TEXTURE0+Z);const bt=Se.getPrimaries(Se.workingColorSpace),Ft=w.colorSpace===Fn?null:Se.getPrimaries(w.colorSpace),he=w.colorSpace===Fn||bt===Ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Mt=g(w.image,!1,r.maxTextureSize);Mt=ne(w,Mt);const Gt=i.convert(w.format,w.colorSpace),Zt=i.convert(w.type);let Kt=M(w.internalFormat,Gt,Zt,w.colorSpace,w.isVideoTexture);j(ct,w);let Wt;const ue=w.mipmaps,ie=w.isVideoTexture!==!0,ge=Et.__version===void 0||ht===!0,q=ot.dataReady,Lt=T(w,Mt);if(w.isDepthTexture)Kt=_(w.format===Ii,w.type),ge&&(ie?e.texStorage2D(s.TEXTURE_2D,1,Kt,Mt.width,Mt.height):e.texImage2D(s.TEXTURE_2D,0,Kt,Mt.width,Mt.height,0,Gt,Zt,null));else if(w.isDataTexture)if(ue.length>0){ie&&ge&&e.texStorage2D(s.TEXTURE_2D,Lt,Kt,ue[0].width,ue[0].height);for(let lt=0,pt=ue.length;lt<pt;lt++)Wt=ue[lt],ie?q&&e.texSubImage2D(s.TEXTURE_2D,lt,0,0,Wt.width,Wt.height,Gt,Zt,Wt.data):e.texImage2D(s.TEXTURE_2D,lt,Kt,Wt.width,Wt.height,0,Gt,Zt,Wt.data);w.generateMipmaps=!1}else ie?(ge&&e.texStorage2D(s.TEXTURE_2D,Lt,Kt,Mt.width,Mt.height),q&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Gt,Zt,Mt.data)):e.texImage2D(s.TEXTURE_2D,0,Kt,Mt.width,Mt.height,0,Gt,Zt,Mt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ie&&ge&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Kt,ue[0].width,ue[0].height,Mt.depth);for(let lt=0,pt=ue.length;lt<pt;lt++)if(Wt=ue[lt],w.format!==ln)if(Gt!==null)if(ie){if(q)if(w.layerUpdates.size>0){const Vt=Ja(Wt.width,Wt.height,w.format,w.type);for(const Ot of w.layerUpdates){const re=Wt.data.subarray(Ot*Vt/Wt.data.BYTES_PER_ELEMENT,(Ot+1)*Vt/Wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,Ot,Wt.width,Wt.height,1,Gt,re)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,Wt.width,Wt.height,Mt.depth,Gt,Wt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,lt,Kt,Wt.width,Wt.height,Mt.depth,0,Wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?q&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,Wt.width,Wt.height,Mt.depth,Gt,Zt,Wt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,lt,Kt,Wt.width,Wt.height,Mt.depth,0,Gt,Zt,Wt.data)}else{ie&&ge&&e.texStorage2D(s.TEXTURE_2D,Lt,Kt,ue[0].width,ue[0].height);for(let lt=0,pt=ue.length;lt<pt;lt++)Wt=ue[lt],w.format!==ln?Gt!==null?ie?q&&e.compressedTexSubImage2D(s.TEXTURE_2D,lt,0,0,Wt.width,Wt.height,Gt,Wt.data):e.compressedTexImage2D(s.TEXTURE_2D,lt,Kt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?q&&e.texSubImage2D(s.TEXTURE_2D,lt,0,0,Wt.width,Wt.height,Gt,Zt,Wt.data):e.texImage2D(s.TEXTURE_2D,lt,Kt,Wt.width,Wt.height,0,Gt,Zt,Wt.data)}else if(w.isDataArrayTexture)if(ie){if(ge&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Kt,Mt.width,Mt.height,Mt.depth),q)if(w.layerUpdates.size>0){const lt=Ja(Mt.width,Mt.height,w.format,w.type);for(const pt of w.layerUpdates){const Vt=Mt.data.subarray(pt*lt/Mt.data.BYTES_PER_ELEMENT,(pt+1)*lt/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pt,Mt.width,Mt.height,1,Gt,Zt,Vt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Gt,Zt,Mt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Kt,Mt.width,Mt.height,Mt.depth,0,Gt,Zt,Mt.data);else if(w.isData3DTexture)ie?(ge&&e.texStorage3D(s.TEXTURE_3D,Lt,Kt,Mt.width,Mt.height,Mt.depth),q&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Gt,Zt,Mt.data)):e.texImage3D(s.TEXTURE_3D,0,Kt,Mt.width,Mt.height,Mt.depth,0,Gt,Zt,Mt.data);else if(w.isFramebufferTexture){if(ge)if(ie)e.texStorage2D(s.TEXTURE_2D,Lt,Kt,Mt.width,Mt.height);else{let lt=Mt.width,pt=Mt.height;for(let Vt=0;Vt<Lt;Vt++)e.texImage2D(s.TEXTURE_2D,Vt,Kt,lt,pt,0,Gt,Zt,null),lt>>=1,pt>>=1}}else if(ue.length>0){if(ie&&ge){const lt=vt(ue[0]);e.texStorage2D(s.TEXTURE_2D,Lt,Kt,lt.width,lt.height)}for(let lt=0,pt=ue.length;lt<pt;lt++)Wt=ue[lt],ie?q&&e.texSubImage2D(s.TEXTURE_2D,lt,0,0,Gt,Zt,Wt):e.texImage2D(s.TEXTURE_2D,lt,Kt,Gt,Zt,Wt);w.generateMipmaps=!1}else if(ie){if(ge){const lt=vt(Mt);e.texStorage2D(s.TEXTURE_2D,Lt,Kt,lt.width,lt.height)}q&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Gt,Zt,Mt)}else e.texImage2D(s.TEXTURE_2D,0,Kt,Gt,Zt,Mt);m(w)&&p(ct),Et.__version=ot.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function C(L,w,Z){if(w.image.length!==6)return;const ct=V(L,w),ht=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Z);const ot=n.get(ht);if(ht.version!==ot.__version||ct===!0){e.activeTexture(s.TEXTURE0+Z);const Et=Se.getPrimaries(Se.workingColorSpace),bt=w.colorSpace===Fn?null:Se.getPrimaries(w.colorSpace),Ft=w.colorSpace===Fn||Et===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const he=w.isCompressedTexture||w.image[0].isCompressedTexture,Mt=w.image[0]&&w.image[0].isDataTexture,Gt=[];for(let pt=0;pt<6;pt++)!he&&!Mt?Gt[pt]=g(w.image[pt],!0,r.maxCubemapSize):Gt[pt]=Mt?w.image[pt].image:w.image[pt],Gt[pt]=ne(w,Gt[pt]);const Zt=Gt[0],Kt=i.convert(w.format,w.colorSpace),Wt=i.convert(w.type),ue=M(w.internalFormat,Kt,Wt,w.colorSpace),ie=w.isVideoTexture!==!0,ge=ot.__version===void 0||ct===!0,q=ht.dataReady;let Lt=T(w,Zt);j(s.TEXTURE_CUBE_MAP,w);let lt;if(he){ie&&ge&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,ue,Zt.width,Zt.height);for(let pt=0;pt<6;pt++){lt=Gt[pt].mipmaps;for(let Vt=0;Vt<lt.length;Vt++){const Ot=lt[Vt];w.format!==ln?Kt!==null?ie?q&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,0,0,Ot.width,Ot.height,Kt,Ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,ue,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,0,0,Ot.width,Ot.height,Kt,Wt,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,ue,Ot.width,Ot.height,0,Kt,Wt,Ot.data)}}}else{if(lt=w.mipmaps,ie&&ge){lt.length>0&&Lt++;const pt=vt(Gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,ue,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Mt){ie?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Gt[pt].width,Gt[pt].height,Kt,Wt,Gt[pt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ue,Gt[pt].width,Gt[pt].height,0,Kt,Wt,Gt[pt].data);for(let Vt=0;Vt<lt.length;Vt++){const re=lt[Vt].image[pt].image;ie?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,0,0,re.width,re.height,Kt,Wt,re.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,ue,re.width,re.height,0,Kt,Wt,re.data)}}else{ie?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Kt,Wt,Gt[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ue,Kt,Wt,Gt[pt]);for(let Vt=0;Vt<lt.length;Vt++){const Ot=lt[Vt];ie?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,0,0,Kt,Wt,Ot.image[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,ue,Kt,Wt,Ot.image[pt])}}}m(w)&&p(s.TEXTURE_CUBE_MAP),ot.__version=ht.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function H(L,w,Z,ct,ht,ot){const Et=i.convert(Z.format,Z.colorSpace),bt=i.convert(Z.type),Ft=M(Z.internalFormat,Et,bt,Z.colorSpace),he=n.get(w),Mt=n.get(Z);if(Mt.__renderTarget=w,!he.__hasExternalTextures){const Gt=Math.max(1,w.width>>ot),Zt=Math.max(1,w.height>>ot);ht===s.TEXTURE_3D||ht===s.TEXTURE_2D_ARRAY?e.texImage3D(ht,ot,Ft,Gt,Zt,w.depth,0,Et,bt,null):e.texImage2D(ht,ot,Ft,Gt,Zt,0,Et,bt,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),Xt(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,ht,Mt.__webglTexture,0,ut(w)):(ht===s.TEXTURE_2D||ht>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ct,ht,Mt.__webglTexture,ot),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Q(L,w,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer){const ct=w.depthTexture,ht=ct&&ct.isDepthTexture?ct.type:null,ot=_(w.stencilBuffer,ht),Et=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=ut(w);Xt(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt,ot,w.width,w.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,ot,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ot,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,L)}else{const ct=w.textures;for(let ht=0;ht<ct.length;ht++){const ot=ct[ht],Et=i.convert(ot.format,ot.colorSpace),bt=i.convert(ot.type),Ft=M(ot.internalFormat,Et,bt,ot.colorSpace),he=ut(w);Z&&Xt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,Ft,w.width,w.height):Xt(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,Ft,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ft,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function nt(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=n.get(w.depthTexture);ct.__renderTarget=w,(!ct.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const ht=ct.__webglTexture,ot=ut(w);if(w.depthTexture.format===Ti)Xt(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0);else if(w.depthTexture.format===Ii)Xt(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function X(L){const w=n.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const ct=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ct){const ht=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ct.removeEventListener("dispose",ht)};ct.addEventListener("dispose",ht),w.__depthDisposeCallback=ht}w.__boundDepthTexture=ct}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");nt(w.__webglFramebuffer,L)}else if(Z){w.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ct]),w.__webglDepthbuffer[ct]===void 0)w.__webglDepthbuffer[ct]=s.createRenderbuffer(),Q(w.__webglDepthbuffer[ct],L,!1);else{const ht=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=w.__webglDepthbuffer[ct];s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Q(w.__webglDepthbuffer,L,!1);else{const ct=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,ht)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(L,w,Z){const ct=n.get(L);w!==void 0&&H(ct.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&X(L)}function mt(L){const w=L.texture,Z=n.get(L),ct=n.get(w);L.addEventListener("dispose",D);const ht=L.textures,ot=L.isWebGLCubeRenderTarget===!0,Et=ht.length>1;if(Et||(ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture()),ct.__version=w.version,a.memory.textures++),ot){Z.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[bt]=[];for(let Ft=0;Ft<w.mipmaps.length;Ft++)Z.__webglFramebuffer[bt][Ft]=s.createFramebuffer()}else Z.__webglFramebuffer[bt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let bt=0;bt<w.mipmaps.length;bt++)Z.__webglFramebuffer[bt]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Et)for(let bt=0,Ft=ht.length;bt<Ft;bt++){const he=n.get(ht[bt]);he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture(),a.memory.textures++)}if(L.samples>0&&Xt(L)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let bt=0;bt<ht.length;bt++){const Ft=ht[bt];Z.__webglColorRenderbuffer[bt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[bt]);const he=i.convert(Ft.format,Ft.colorSpace),Mt=i.convert(Ft.type),Gt=M(Ft.internalFormat,he,Mt,Ft.colorSpace,L.isXRRenderTarget===!0),Zt=ut(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,Gt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,Z.__webglColorRenderbuffer[bt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Q(Z.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){e.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),j(s.TEXTURE_CUBE_MAP,w);for(let bt=0;bt<6;bt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ft=0;Ft<w.mipmaps.length;Ft++)H(Z.__webglFramebuffer[bt][Ft],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ft);else H(Z.__webglFramebuffer[bt],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);m(w)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let bt=0,Ft=ht.length;bt<Ft;bt++){const he=ht[bt],Mt=n.get(he);e.bindTexture(s.TEXTURE_2D,Mt.__webglTexture),j(s.TEXTURE_2D,he),H(Z.__webglFramebuffer,L,he,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,0),m(he)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let bt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(bt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(bt,ct.__webglTexture),j(bt,w),w.mipmaps&&w.mipmaps.length>0)for(let Ft=0;Ft<w.mipmaps.length;Ft++)H(Z.__webglFramebuffer[Ft],L,w,s.COLOR_ATTACHMENT0,bt,Ft);else H(Z.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,bt,0);m(w)&&p(bt),e.unbindTexture()}L.depthBuffer&&X(L)}function St(L){const w=L.textures;for(let Z=0,ct=w.length;Z<ct;Z++){const ht=w[Z];if(m(ht)){const ot=x(L),Et=n.get(ht).__webglTexture;e.bindTexture(ot,Et),p(ot),e.unbindTexture()}}}const wt=[],N=[];function ft(L){if(L.samples>0){if(Xt(L)===!1){const w=L.textures,Z=L.width,ct=L.height;let ht=s.COLOR_BUFFER_BIT;const ot=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(L),bt=w.length>1;if(bt)for(let Ft=0;Ft<w.length;Ft++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Ft=0;Ft<w.length;Ft++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ht|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ht|=s.STENCIL_BUFFER_BIT)),bt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[Ft]);const he=n.get(w[Ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,he,0)}s.blitFramebuffer(0,0,Z,ct,0,0,Z,ct,ht,s.NEAREST),h===!0&&(wt.length=0,N.length=0,wt.push(s.COLOR_ATTACHMENT0+Ft),L.depthBuffer&&L.resolveDepthBuffer===!1&&(wt.push(ot),N.push(ot),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),bt)for(let Ft=0;Ft<w.length;Ft++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.RENDERBUFFER,Et.__webglColorRenderbuffer[Ft]);const he=n.get(w[Ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.TEXTURE_2D,he,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const w=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function ut(L){return Math.min(r.maxSamples,L.samples)}function Xt(L){const w=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function xt(L){const w=a.render.frame;c.get(L)!==w&&(c.set(L,w),L.update())}function ne(L,w){const Z=L.colorSpace,ct=L.format,ht=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==Di&&Z!==Fn&&(Se.getTransfer(Z)===Ae?(ct!==ln||ht!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function vt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=J,this.setTexture3D=z,this.setTextureCube=I,this.rebindTextures=rt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Xt}function Ip(s,t){function e(n,r=Fn){let i;const a=Se.getTransfer(r);if(n===An)return s.UNSIGNED_BYTE;if(n===la)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ca)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Lo)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ro)return s.BYTE;if(n===Po)return s.SHORT;if(n===Ki)return s.UNSIGNED_SHORT;if(n===oa)return s.INT;if(n===ti)return s.UNSIGNED_INT;if(n===Sn)return s.FLOAT;if(n===Qi)return s.HALF_FLOAT;if(n===Io)return s.ALPHA;if(n===Do)return s.RGB;if(n===ln)return s.RGBA;if(n===No)return s.LUMINANCE;if(n===Uo)return s.LUMINANCE_ALPHA;if(n===Ti)return s.DEPTH_COMPONENT;if(n===Ii)return s.DEPTH_STENCIL;if(n===Fo)return s.RED;if(n===ha)return s.RED_INTEGER;if(n===Bo)return s.RG;if(n===ua)return s.RG_INTEGER;if(n===da)return s.RGBA_INTEGER;if(n===br||n===Tr||n===Ar||n===Cr)if(a===Ae)if(i=t.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(n===br)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get("WEBGL_compressed_texture_s3tc"),i!==null){if(n===br)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cr)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rs||n===Ps||n===Ls||n===Is)if(i=t.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(n===Rs)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ps)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ls)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Is)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ds||n===Ns||n===Us)if(i=t.get("WEBGL_compressed_texture_etc"),i!==null){if(n===Ds||n===Ns)return a===Ae?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===Us)return a===Ae?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fs||n===Bs||n===Os||n===zs||n===Vs||n===ks||n===Hs||n===Gs||n===Ws||n===Xs||n===qs||n===Ys||n===Zs||n===$s)if(i=t.get("WEBGL_compressed_texture_astc"),i!==null){if(n===Fs)return a===Ae?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bs)return a===Ae?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Os)return a===Ae?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zs)return a===Ae?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vs)return a===Ae?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ks)return a===Ae?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hs)return a===Ae?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gs)return a===Ae?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ws)return a===Ae?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xs)return a===Ae?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qs)return a===Ae?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ys)return a===Ae?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zs)return a===Ae?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$s)return a===Ae?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rr||n===Ks||n===js)if(i=t.get("EXT_texture_compression_bptc"),i!==null){if(n===Rr)return a===Ae?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ks)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===js)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oo||n===Qs||n===Js||n===ta)if(i=t.get("EXT_texture_compression_rgtc"),i!==null){if(n===Rr)return i.COMPRESSED_RED_RGTC1_EXT;if(n===Qs)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Js)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ta)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Dp={type:"move"};class fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,i=null,a=null;const o=this._targetRay,h=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(d,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=d.joints["index-finger-tip"],l=d.joints["thumb-tip"],u=c.position.distanceTo(l.position),f=.02,v=.005;d.inputState.pinching&&u>f+v?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&u<=f-v&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(i=e.getPose(t.gripSpace,n),i!==null&&(h.matrix.fromArray(i.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,i.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(i.linearVelocity)):h.hasLinearVelocity=!1,i.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(i.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return o!==null&&(o.visible=r!==null),h!==null&&(h.visible=i!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Np=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Up=`
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

}`;class Fp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new ke,i=t.properties.get(r);i.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Vn({vertexShader:Np,fragmentShader:Up,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bp extends Fi{constructor(t,e){super();const n=this;let r=null,i=1,a=null,o="local-floor",h=1,d=null,c=null,l=null,u=null,f=null,v=null;const g=new Fp,m=e.getContextAttributes();let p=null,x=null;const M=[],_=[],T=new le;let P=null;const D=new Qe;D.viewport=new Pe;const R=new Qe;R.viewport=new Pe;const S=[D,R],y=new eh;let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let C=M[A];return C===void 0&&(C=new fs,M[A]=C),C.getTargetRaySpace()},this.getControllerGrip=function(A){let C=M[A];return C===void 0&&(C=new fs,M[A]=C),C.getGripSpace()},this.getHand=function(A){let C=M[A];return C===void 0&&(C=new fs,M[A]=C),C.getHandSpace()};function U(A){const C=_.indexOf(A.inputSource);if(C===-1)return;const H=M[C];H!==void 0&&(H.update(A.inputSource,A.frame,d||a),H.dispatchEvent({type:A.type,data:A.inputSource}))}function Y(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",W);for(let A=0;A<M.length;A++){const C=_[A];C!==null&&(_[A]=null,M[A].disconnect(C))}E=null,F=null,g.reset(),t.setRenderTarget(p),f=null,u=null,l=null,r=null,x=null,V.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){i=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){o=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(A){d=A},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(A){if(r=A,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(T),r.renderState.layers===void 0){const C={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,e,C),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ei(f.framebufferWidth,f.framebufferHeight,{format:ln,type:An,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let C=null,H=null,Q=null;m.depth&&(Q=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,C=m.stencil?Ii:Ti,H=m.stencil?Li:ti);const nt={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:i};l=new XRWebGLBinding(r,e),u=l.createProjectionLayer(nt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new ei(u.textureWidth,u.textureHeight,{format:ln,type:An,depthTexture:new Qo(u.textureWidth,u.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(h),d=null,a=await r.requestReferenceSpace(o),V.setContext(r),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(A){for(let C=0;C<A.removed.length;C++){const H=A.removed[C],Q=_.indexOf(H);Q>=0&&(_[Q]=null,M[Q].disconnect(H))}for(let C=0;C<A.added.length;C++){const H=A.added[C];let Q=_.indexOf(H);if(Q===-1){for(let X=0;X<M.length;X++)if(X>=_.length){_.push(H),Q=X;break}else if(_[X]===null){_[X]=H,Q=X;break}if(Q===-1)break}const nt=M[Q];nt&&nt.connect(H)}}const J=new O,z=new O;function I(A,C,H){J.setFromMatrixPosition(C.matrixWorld),z.setFromMatrixPosition(H.matrixWorld);const Q=J.distanceTo(z),nt=C.projectionMatrix.elements,X=H.projectionMatrix.elements,rt=nt[14]/(nt[10]-1),mt=nt[14]/(nt[10]+1),St=(nt[9]+1)/nt[5],wt=(nt[9]-1)/nt[5],N=(nt[8]-1)/nt[0],ft=(X[8]+1)/X[0],ut=rt*N,Xt=rt*ft,xt=Q/(-N+ft),ne=xt*-N;if(C.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(ne),A.translateZ(xt),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert(),nt[10]===-1)A.projectionMatrix.copy(C.projectionMatrix),A.projectionMatrixInverse.copy(C.projectionMatrixInverse);else{const vt=rt+xt,L=mt+xt,w=ut-ne,Z=Xt+(Q-ne),ct=St*mt/L*vt,ht=wt*mt/L*vt;A.projectionMatrix.makePerspective(w,Z,ct,ht,vt,L),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}}function tt(A,C){C===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(C.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(r===null)return;let C=A.near,H=A.far;g.texture!==null&&(g.depthNear>0&&(C=g.depthNear),g.depthFar>0&&(H=g.depthFar)),y.near=R.near=D.near=C,y.far=R.far=D.far=H,(E!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,F=y.far),D.layers.mask=A.layers.mask|2,R.layers.mask=A.layers.mask|4,y.layers.mask=D.layers.mask|R.layers.mask;const Q=A.parent,nt=y.cameras;tt(y,Q);for(let X=0;X<nt.length;X++)tt(nt[X],Q);nt.length===2?I(y,D,R):y.projectionMatrix.copy(D.projectionMatrix),K(A,y,Q)};function K(A,C,H){H===null?A.matrix.copy(C.matrixWorld):(A.matrix.copy(H.matrixWorld),A.matrix.invert(),A.matrix.multiply(C.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(C.projectionMatrix),A.projectionMatrixInverse.copy(C.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=Ni*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return h},this.setFoveation=function(A){h=A,u!==null&&(u.fixedFoveation=A),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=A)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let B=null;function j(A,C){if(c=C.getViewerPose(d||a),v=C,c!==null){const H=c.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Q=!1;H.length!==y.cameras.length&&(y.cameras.length=0,Q=!0);for(let X=0;X<H.length;X++){const rt=H[X];let mt=null;if(f!==null)mt=f.getViewport(rt);else{const wt=l.getViewSubImage(u,rt);mt=wt.viewport,X===0&&(t.setRenderTargetTextures(x,wt.colorTexture,u.ignoreDepthValues?void 0:wt.depthStencilTexture),t.setRenderTarget(x))}let St=S[X];St===void 0&&(St=new Qe,St.layers.enable(X),St.viewport=new Pe,S[X]=St),St.matrix.fromArray(rt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(rt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(mt.x,mt.y,mt.width,mt.height),X===0&&(y.matrix.copy(St.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Q===!0&&y.cameras.push(St)}const nt=r.enabledFeatures;if(nt&&nt.includes("depth-sensing")){const X=l.getDepthInformation(H[0]);X&&X.isValid&&X.texture&&g.init(t,X,r.renderState)}}for(let H=0;H<M.length;H++){const Q=_[H],nt=M[H];Q!==null&&nt!==void 0&&nt.update(Q,C,d||a)}B&&B(A,C),C.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:C}),v=null}const V=new el;V.setAnimationLoop(j),this.setAnimationLoop=function(A){B=A},this.dispose=function(){}}}const Zn=new We,Op=new Ce;function zp(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yo(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,x,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),l(m,p)):p.isMeshPhongMaterial?(i(m,p),c(m,p)):p.isMeshStandardMaterial?(i(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(i(m,p),v(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?h(m,p,x,M):p.isSpriteMaterial?d(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,_=x.envMapRotation;M&&(m.envMap.value=M,Zn.copy(_),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),m.envMapRotation.value.setFromMatrix4(Op.makeRotationFromEuler(Zn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function h(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function l(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Vp(s,t,e,n){let r={},i={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(x,M){const _=M.program;n.uniformBlockBinding(x,_)}function d(x,M){let _=r[x.id];_===void 0&&(v(x),_=c(x),r[x.id]=_,x.addEventListener("dispose",m));const T=M.program;n.updateUBOMapping(x,T);const P=t.render.frame;i[x.id]!==P&&(u(x),i[x.id]=P)}function c(x){const M=l();x.__bindingPointIndex=M;const _=s.createBuffer(),T=x.__size,P=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,T,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,_),_}function l(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const M=r[x.id],_=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let P=0,D=_.length;P<D;P++){const R=Array.isArray(_[P])?_[P]:[_[P]];for(let S=0,y=R.length;S<y;S++){const E=R[S];if(f(E,P,S,T)===!0){const F=E.__offset,U=Array.isArray(E.value)?E.value:[E.value];let Y=0;for(let W=0;W<U.length;W++){const J=U[W],z=g(J);typeof J=="number"||typeof J=="boolean"?(E.__data[0]=J,s.bufferSubData(s.UNIFORM_BUFFER,F+Y,E.__data)):J.isMatrix3?(E.__data[0]=J.elements[0],E.__data[1]=J.elements[1],E.__data[2]=J.elements[2],E.__data[3]=0,E.__data[4]=J.elements[3],E.__data[5]=J.elements[4],E.__data[6]=J.elements[5],E.__data[7]=0,E.__data[8]=J.elements[6],E.__data[9]=J.elements[7],E.__data[10]=J.elements[8],E.__data[11]=0):(J.toArray(E.__data,Y),Y+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,M,_,T){const P=x.value,D=M+"_"+_;if(T[D]===void 0)return typeof P=="number"||typeof P=="boolean"?T[D]=P:T[D]=P.clone(),!0;{const R=T[D];if(typeof P=="number"||typeof P=="boolean"){if(R!==P)return T[D]=P,!0}else if(R.equals(P)===!1)return R.copy(P),!0}return!1}function v(x){const M=x.uniforms;let _=0;const T=16;for(let D=0,R=M.length;D<R;D++){const S=Array.isArray(M[D])?M[D]:[M[D]];for(let y=0,E=S.length;y<E;y++){const F=S[y],U=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,W=U.length;Y<W;Y++){const J=U[Y],z=g(J),I=_%T,tt=I%z.boundary,K=I+tt;_+=tt,K!==0&&T-K<z.storage&&(_+=T-K),F.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=z.storage}}}const P=_%T;return P>0&&(_+=T-P),x.__size=_,x.__cache={},this}function g(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(r[M.id]),delete r[M.id],delete i[M.id]}function p(){for(const x in r)s.deleteBuffer(r[x]);a=[],r={},i={}}return{bind:h,update:d,dispose:p}}class kp{constructor(t={}){const{canvas:e=uc(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=On,this.toneMappingExposure=1;const _=this;let T=!1,P=0,D=0,R=null,S=-1,y=null;const E=new Pe,F=new Pe;let U=null;const Y=new oe(0);let W=0,J=e.width,z=e.height,I=1,tt=null,K=null;const B=new Pe(0,0,J,z),j=new Pe(0,0,J,z);let V=!1;const A=new ga;let C=!1,H=!1;const Q=new Ce,nt=new Ce,X=new O,rt=new Pe,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function wt(){return R===null?I:1}let N=n;function ft(b,k){return e.getContext(b,k)}try{const b={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sa}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),N===null){const k="webgl2";if(N=ft(k,b),N===null)throw ft(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ut,Xt,xt,ne,vt,L,w,Z,ct,ht,ot,Et,bt,Ft,he,Mt,Gt,Zt,Kt,Wt,ue,ie,ge,q;function Lt(){ut=new $d(N),ut.init(),ie=new Ip(N,ut),Xt=new Gd(N,ut,t,ie),xt=new Pp(N,ut),Xt.reverseDepthBuffer&&u&&xt.buffers.depth.setReversed(!0),ne=new Qd(N),vt=new gp,L=new Lp(N,ut,xt,vt,Xt,ie,ne),w=new Xd(_),Z=new Zd(_),ct=new sh(N),ge=new kd(N,ct),ht=new Kd(N,ct,ne,ge),ot=new tf(N,ht,ct,ne),Kt=new Jd(N,Xt,L),Mt=new Wd(vt),Et=new vp(_,w,Z,ut,Xt,ge,Mt),bt=new zp(_,vt),Ft=new xp,he=new bp(ut),Zt=new Vd(_,w,Z,xt,ot,f,h),Gt=new Cp(_,ot,Xt),q=new Vp(N,ne,Xt,xt),Wt=new Hd(N,ut,ne),ue=new jd(N,ut,ne),ne.programs=Et.programs,_.capabilities=Xt,_.extensions=ut,_.properties=vt,_.renderLists=Ft,_.shadowMap=Gt,_.state=xt,_.info=ne}Lt();const lt=new Bp(_,N);this.xr=lt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=ut.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ut.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(b){b!==void 0&&(I=b,this.setSize(J,z,!1))},this.getSize=function(b){return b.set(J,z)},this.setSize=function(b,k,et=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,z=k,e.width=Math.floor(b*I),e.height=Math.floor(k*I),et===!0&&(e.style.width=b+"px",e.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(J*I,z*I).floor()},this.setDrawingBufferSize=function(b,k,et){J=b,z=k,I=et,e.width=Math.floor(b*et),e.height=Math.floor(k*et),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(B)},this.setViewport=function(b,k,et,$){b.isVector4?B.set(b.x,b.y,b.z,b.w):B.set(b,k,et,$),xt.viewport(E.copy(B).multiplyScalar(I).round())},this.getScissor=function(b){return b.copy(j)},this.setScissor=function(b,k,et,$){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,k,et,$),xt.scissor(F.copy(j).multiplyScalar(I).round())},this.getScissorTest=function(){return V},this.setScissorTest=function(b){xt.setScissorTest(V=b)},this.setOpaqueSort=function(b){tt=b},this.setTransparentSort=function(b){K=b},this.getClearColor=function(b){return b.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(b=!0,k=!0,et=!0){let $=0;if(b){let G=!1;if(R!==null){const st=R.texture.format;G=st===da||st===ua||st===ha}if(G){const st=R.texture.type,Rt=st===An||st===ti||st===Ki||st===Li||st===la||st===ca,zt=Zt.getClearColor(),kt=Zt.getClearAlpha(),te=zt.r,$t=zt.g,Ut=zt.b;Rt?(v[0]=te,v[1]=$t,v[2]=Ut,v[3]=kt,N.clearBufferuiv(N.COLOR,0,v)):(g[0]=te,g[1]=$t,g[2]=Ut,g[3]=kt,N.clearBufferiv(N.COLOR,0,g))}else $|=N.COLOR_BUFFER_BIT}k&&($|=N.DEPTH_BUFFER_BIT),et&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),Zt.dispose(),Ft.dispose(),he.dispose(),vt.dispose(),w.dispose(),Z.dispose(),ot.dispose(),ge.dispose(),q.dispose(),Et.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",gt),lt.removeEventListener("sessionend",_t),Jt.stop()};function pt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=ne.autoReset,k=Gt.enabled,et=Gt.autoUpdate,$=Gt.needsUpdate,G=Gt.type;Lt(),ne.autoReset=b,Gt.enabled=k,Gt.autoUpdate=et,Gt.needsUpdate=$,Gt.type=G}function Ot(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function re(b){const k=b.target;k.removeEventListener("dispose",re),be(k)}function be(b){Re(b),vt.remove(b)}function Re(b){const k=vt.get(b).programs;k!==void 0&&(k.forEach(function(et){Et.releaseProgram(et)}),b.isShaderMaterial&&Et.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,et,$,G,st){k===null&&(k=mt);const Rt=G.isMesh&&G.matrixWorld.determinant()<0,zt=Tt(b,k,et,$,G);xt.setMaterial($,Rt);let kt=et.index,te=1;if($.wireframe===!0){if(kt=ht.getWireframeAttribute(et),kt===void 0)return;te=2}const $t=et.drawRange,Ut=et.attributes.position;let de=$t.start*te,ee=($t.start+$t.count)*te;st!==null&&(de=Math.max(de,st.start*te),ee=Math.min(ee,(st.start+st.count)*te)),kt!==null?(de=Math.max(de,0),ee=Math.min(ee,kt.count)):Ut!=null&&(de=Math.max(de,0),ee=Math.min(ee,Ut.count));const we=ee-de;if(we<0||we===1/0)return;ge.setup(G,$,zt,et,kt);let _e,se=Wt;if(kt!==null&&(_e=ct.get(kt),se=ue,se.setIndex(_e)),G.isMesh)$.wireframe===!0?(xt.setLineWidth($.wireframeLinewidth*wt()),se.setMode(N.LINES)):se.setMode(N.TRIANGLES);else if(G.isLine){let Yt=$.linewidth;Yt===void 0&&(Yt=1),xt.setLineWidth(Yt*wt()),G.isLineSegments?se.setMode(N.LINES):G.isLineLoop?se.setMode(N.LINE_LOOP):se.setMode(N.LINE_STRIP)}else G.isPoints?se.setMode(N.POINTS):G.isSprite&&se.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)se.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))se.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Yt=G._multiDrawStarts,Ee=G._multiDrawCounts,pe=G._multiDrawCount,Qt=kt?ct.get(kt).bytesPerElement:1,Le=vt.get($).currentProgram.getUniforms();for(let ye=0;ye<pe;ye++)Le.setValue(N,"_gl_DrawID",ye),se.render(Yt[ye]/Qt,Ee[ye])}else if(G.isInstancedMesh)se.renderInstances(de,we,G.count);else if(et.isInstancedBufferGeometry){const Yt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Ee=Math.min(et.instanceCount,Yt);se.renderInstances(de,we,Ee)}else se.render(de,we)};function ae(b,k,et){b.transparent===!0&&b.side===en&&b.forceSinglePass===!1?(b.side=Ze,b.needsUpdate=!0,It(b,k,et),b.side=zn,b.needsUpdate=!0,It(b,k,et),b.side=en):It(b,k,et)}this.compile=function(b,k,et=null){et===null&&(et=b),p=he.get(et),p.init(k),M.push(p),et.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),b!==et&&b.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const $=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const st=G.material;if(st)if(Array.isArray(st))for(let Rt=0;Rt<st.length;Rt++){const zt=st[Rt];ae(zt,et,G),$.add(zt)}else ae(st,et,G),$.add(st)}),M.pop(),p=null,$},this.compileAsync=function(b,k,et=null){const $=this.compile(b,k,et);return new Promise(G=>{function st(){if($.forEach(function(Rt){vt.get(Rt).currentProgram.isReady()&&$.delete(Rt)}),$.size===0){G(b);return}setTimeout(st,10)}ut.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let at=null;function dt(b){at&&at(b)}function gt(){Jt.stop()}function _t(){Jt.start()}const Jt=new el;Jt.setAnimationLoop(dt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(b){at=b,lt.setAnimationLoop(b),b===null?Jt.stop():Jt.start()},lt.addEventListener("sessionstart",gt),lt.addEventListener("sessionend",_t),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(k),k=lt.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,k,R),p=he.get(b,M.length),p.init(k),M.push(p),nt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),A.setFromProjectionMatrix(nt),H=this.localClippingEnabled,C=Mt.init(this.clippingPlanes,H),m=Ft.get(b,x.length),m.init(),x.push(m),lt.enabled===!0&&lt.isPresenting===!0){const st=_.xr.getDepthSensingMesh();st!==null&&Bt(st,k,-1/0,_.sortObjects)}Bt(b,k,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(tt,K),St=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,St&&Zt.addToRenderList(m,b),this.info.render.frame++,C===!0&&Mt.beginShadows();const et=p.state.shadowsArray;Gt.render(et,b,k),C===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,G=m.transmissive;if(p.setupLights(),k.isArrayCamera){const st=k.cameras;if(G.length>0)for(let Rt=0,zt=st.length;Rt<zt;Rt++){const kt=st[Rt];Nt($,G,b,kt)}St&&Zt.render(b);for(let Rt=0,zt=st.length;Rt<zt;Rt++){const kt=st[Rt];At(m,b,kt,kt.viewport)}}else G.length>0&&Nt($,G,b,k),St&&Zt.render(b),At(m,b,k);R!==null&&(L.updateMultisampleRenderTarget(R),L.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(_,b,k),ge.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],C===!0&&Mt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Bt(b,k,et,$){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)et=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||A.intersectsSprite(b)){$&&rt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(nt);const Rt=ot.update(b),zt=b.material;zt.visible&&m.push(b,Rt,zt,et,rt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||A.intersectsObject(b))){const Rt=ot.update(b),zt=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),rt.copy(b.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),rt.copy(Rt.boundingSphere.center)),rt.applyMatrix4(b.matrixWorld).applyMatrix4(nt)),Array.isArray(zt)){const kt=Rt.groups;for(let te=0,$t=kt.length;te<$t;te++){const Ut=kt[te],de=zt[Ut.materialIndex];de&&de.visible&&m.push(b,Rt,de,et,rt.z,Ut)}}else zt.visible&&m.push(b,Rt,zt,et,rt.z,null)}}const st=b.children;for(let Rt=0,zt=st.length;Rt<zt;Rt++)Bt(st[Rt],k,et,$)}function At(b,k,et,$){const G=b.opaque,st=b.transmissive,Rt=b.transparent;p.setupLightsView(et),C===!0&&Mt.setGlobalState(_.clippingPlanes,et),$&&xt.viewport(E.copy($)),G.length>0&&it(G,k,et),st.length>0&&it(st,k,et),Rt.length>0&&it(Rt,k,et),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Nt(b,k,et,$){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new ei(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Qi:An,minFilter:Jn,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));const st=p.state.transmissionRenderTarget[$.id],Rt=$.viewport||E;st.setSize(Rt.z,Rt.w);const zt=_.getRenderTarget();_.setRenderTarget(st),_.getClearColor(Y),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),St&&Zt.render(et);const kt=_.toneMapping;_.toneMapping=On;const te=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),C===!0&&Mt.setGlobalState(_.clippingPlanes,$),it(b,et,$),L.updateMultisampleRenderTarget(st),L.updateRenderTargetMipmap(st),ut.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ut=0,de=k.length;Ut<de;Ut++){const ee=k[Ut],we=ee.object,_e=ee.geometry,se=ee.material,Yt=ee.group;if(se.side===en&&we.layers.test($.layers)){const Ee=se.side;se.side=Ze,se.needsUpdate=!0,Ct(we,et,$,_e,se,Yt),se.side=Ee,se.needsUpdate=!0,$t=!0}}$t===!0&&(L.updateMultisampleRenderTarget(st),L.updateRenderTargetMipmap(st))}_.setRenderTarget(zt),_.setClearColor(Y,W),te!==void 0&&($.viewport=te),_.toneMapping=kt}function it(b,k,et){const $=k.isScene===!0?k.overrideMaterial:null;for(let G=0,st=b.length;G<st;G++){const Rt=b[G],zt=Rt.object,kt=Rt.geometry,te=$===null?Rt.material:$,$t=Rt.group;zt.layers.test(et.layers)&&Ct(zt,k,et,kt,te,$t)}}function Ct(b,k,et,$,G,st){b.onBeforeRender(_,k,et,$,G,st),b.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(_,k,et,$,b,st),G.transparent===!0&&G.side===en&&G.forceSinglePass===!1?(G.side=Ze,G.needsUpdate=!0,_.renderBufferDirect(et,k,$,G,b,st),G.side=zn,G.needsUpdate=!0,_.renderBufferDirect(et,k,$,G,b,st),G.side=en):_.renderBufferDirect(et,k,$,G,b,st),b.onAfterRender(_,k,et,$,G,st)}function It(b,k,et){k.isScene!==!0&&(k=mt);const $=vt.get(b),G=p.state.lights,st=p.state.shadowsArray,Rt=G.state.version,zt=Et.getParameters(b,G.state,st,k,et),kt=Et.getProgramCacheKey(zt);let te=$.programs;$.environment=b.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(b.isMeshStandardMaterial?Z:w).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,te===void 0&&(b.addEventListener("dispose",re),te=new Map,$.programs=te);let $t=te.get(kt);if($t!==void 0){if($.currentProgram===$t&&$.lightsStateVersion===Rt)return Pt(b,zt),$t}else zt.uniforms=Et.getUniforms(b),b.onBeforeCompile(zt,_),$t=Et.acquireProgram(zt,kt),te.set(kt,$t),$.uniforms=zt.uniforms;const Ut=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ut.clippingPlanes=Mt.uniform),Pt(b,zt),$.needsLights=jt(b),$.lightsStateVersion=Rt,$.needsLights&&(Ut.ambientLightColor.value=G.state.ambient,Ut.lightProbe.value=G.state.probe,Ut.directionalLights.value=G.state.directional,Ut.directionalLightShadows.value=G.state.directionalShadow,Ut.spotLights.value=G.state.spot,Ut.spotLightShadows.value=G.state.spotShadow,Ut.rectAreaLights.value=G.state.rectArea,Ut.ltc_1.value=G.state.rectAreaLTC1,Ut.ltc_2.value=G.state.rectAreaLTC2,Ut.pointLights.value=G.state.point,Ut.pointLightShadows.value=G.state.pointShadow,Ut.hemisphereLights.value=G.state.hemi,Ut.directionalShadowMap.value=G.state.directionalShadowMap,Ut.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ut.spotShadowMap.value=G.state.spotShadowMap,Ut.spotLightMatrix.value=G.state.spotLightMatrix,Ut.spotLightMap.value=G.state.spotLightMap,Ut.pointShadowMap.value=G.state.pointShadowMap,Ut.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=$t,$.uniformsList=null,$t}function qt(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=Pr.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Pt(b,k){const et=vt.get(b);et.outputColorSpace=k.outputColorSpace,et.batching=k.batching,et.batchingColor=k.batchingColor,et.instancing=k.instancing,et.instancingColor=k.instancingColor,et.instancingMorph=k.instancingMorph,et.skinning=k.skinning,et.morphTargets=k.morphTargets,et.morphNormals=k.morphNormals,et.morphColors=k.morphColors,et.morphTargetsCount=k.morphTargetsCount,et.numClippingPlanes=k.numClippingPlanes,et.numIntersection=k.numClipIntersection,et.vertexAlphas=k.vertexAlphas,et.vertexTangents=k.vertexTangents,et.toneMapping=k.toneMapping}function Tt(b,k,et,$,G){k.isScene!==!0&&(k=mt),L.resetTextureUnits();const st=k.fog,Rt=$.isMeshStandardMaterial?k.environment:null,zt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Di,kt=($.isMeshStandardMaterial?Z:w).get($.envMap||Rt),te=$.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,$t=!!et.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ut=!!et.morphAttributes.position,de=!!et.morphAttributes.normal,ee=!!et.morphAttributes.color;let we=On;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(we=_.toneMapping);const _e=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,se=_e!==void 0?_e.length:0,Yt=vt.get($),Ee=p.state.lights;if(C===!0&&(H===!0||b!==y)){const me=b===y&&$.id===S;Mt.setState($,b,me)}let pe=!1;$.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Ee.state.version||Yt.outputColorSpace!==zt||G.isBatchedMesh&&Yt.batching===!1||!G.isBatchedMesh&&Yt.batching===!0||G.isBatchedMesh&&Yt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Yt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Yt.instancing===!1||!G.isInstancedMesh&&Yt.instancing===!0||G.isSkinnedMesh&&Yt.skinning===!1||!G.isSkinnedMesh&&Yt.skinning===!0||G.isInstancedMesh&&Yt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Yt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Yt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Yt.instancingMorph===!1&&G.morphTexture!==null||Yt.envMap!==kt||$.fog===!0&&Yt.fog!==st||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Mt.numPlanes||Yt.numIntersection!==Mt.numIntersection)||Yt.vertexAlphas!==te||Yt.vertexTangents!==$t||Yt.morphTargets!==Ut||Yt.morphNormals!==de||Yt.morphColors!==ee||Yt.toneMapping!==we||Yt.morphTargetsCount!==se)&&(pe=!0):(pe=!0,Yt.__version=$.version);let Qt=Yt.currentProgram;pe===!0&&(Qt=It($,k,G));let Le=!1,ye=!1,$e=!1;const Me=Qt.getUniforms(),Xe=Yt.uniforms;if(xt.useProgram(Qt.program)&&(Le=!0,ye=!0,$e=!0),$.id!==S&&(S=$.id,ye=!0),Le||y!==b){xt.buffers.depth.getReversed()?(Q.copy(b.projectionMatrix),fc(Q),pc(Q),Me.setValue(N,"projectionMatrix",Q)):Me.setValue(N,"projectionMatrix",b.projectionMatrix),Me.setValue(N,"viewMatrix",b.matrixWorldInverse);const Ye=Me.map.cameraPosition;Ye!==void 0&&Ye.setValue(N,X.setFromMatrixPosition(b.matrixWorld)),Xt.logarithmicDepthBuffer&&Me.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Me.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,ye=!0,$e=!0)}if(G.isSkinnedMesh){Me.setOptional(N,G,"bindMatrix"),Me.setOptional(N,G,"bindMatrixInverse");const me=G.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),Me.setValue(N,"boneTexture",me.boneTexture,L))}G.isBatchedMesh&&(Me.setOptional(N,G,"batchingTexture"),Me.setValue(N,"batchingTexture",G._matricesTexture,L),Me.setOptional(N,G,"batchingIdTexture"),Me.setValue(N,"batchingIdTexture",G._indirectTexture,L),Me.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&Me.setValue(N,"batchingColorTexture",G._colorsTexture,L));const qe=et.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&Kt.update(G,et,Qt),(ye||Yt.receiveShadow!==G.receiveShadow)&&(Yt.receiveShadow=G.receiveShadow,Me.setValue(N,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Xe.envMap.value=kt,Xe.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(Xe.envMapIntensity.value=k.environmentIntensity),ye&&(Me.setValue(N,"toneMappingExposure",_.toneMappingExposure),Yt.needsLights&&Dt(Xe,$e),st&&$.fog===!0&&bt.refreshFogUniforms(Xe,st),bt.refreshMaterialUniforms(Xe,$,I,z,p.state.transmissionRenderTarget[b.id]),Pr.upload(N,qt(Yt),Xe,L)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Pr.upload(N,qt(Yt),Xe,L),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Me.setValue(N,"center",G.center),Me.setValue(N,"modelViewMatrix",G.modelViewMatrix),Me.setValue(N,"normalMatrix",G.normalMatrix),Me.setValue(N,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const me=$.uniformsGroups;for(let Ye=0,Br=me.length;Ye<Br;Ye++){const Hn=me[Ye];q.update(Hn,Qt),q.bind(Hn,Qt)}}return Qt}function Dt(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function jt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,k,et){vt.get(b.texture).__webglTexture=k,vt.get(b.depthTexture).__webglTexture=et;const $=vt.get(b);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=et===void 0,$.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,k){const et=vt.get(b);et.__webglFramebuffer=k,et.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,et=0){R=b,P=k,D=et;let $=!0,G=null,st=!1,Rt=!1;if(b){const kt=vt.get(b);if(kt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(N.FRAMEBUFFER,null),$=!1;else if(kt.__webglFramebuffer===void 0)L.setupRenderTarget(b);else if(kt.__hasExternalTextures)L.rebindTextures(b,vt.get(b.texture).__webglTexture,vt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ut=b.depthTexture;if(kt.__boundDepthTexture!==Ut){if(Ut!==null&&vt.has(Ut)&&(b.width!==Ut.image.width||b.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(b)}}const te=b.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Rt=!0);const $t=vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray($t[k])?G=$t[k][et]:G=$t[k],st=!0):b.samples>0&&L.useMultisampledRTT(b)===!1?G=vt.get(b).__webglMultisampledFramebuffer:Array.isArray($t)?G=$t[et]:G=$t,E.copy(b.viewport),F.copy(b.scissor),U=b.scissorTest}else E.copy(B).multiplyScalar(I).floor(),F.copy(j).multiplyScalar(I).floor(),U=V;if(xt.bindFramebuffer(N.FRAMEBUFFER,G)&&$&&xt.drawBuffers(b,G),xt.viewport(E),xt.scissor(F),xt.setScissorTest(U),st){const kt=vt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,kt.__webglTexture,et)}else if(Rt){const kt=vt.get(b.texture),te=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,kt.__webglTexture,et||0,te)}S=-1},this.readRenderTargetPixels=function(b,k,et,$,G,st,Rt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(zt=zt[Rt]),zt){xt.bindFramebuffer(N.FRAMEBUFFER,zt);try{const kt=b.texture,te=kt.format,$t=kt.type;if(!Xt.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-$&&et>=0&&et<=b.height-G&&N.readPixels(k,et,$,G,ie.convert(te),ie.convert($t),st)}finally{const kt=R!==null?vt.get(R).__webglFramebuffer:null;xt.bindFramebuffer(N.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(b,k,et,$,G,st,Rt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(zt=zt[Rt]),zt){const kt=b.texture,te=kt.format,$t=kt.type;if(!Xt.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=b.width-$&&et>=0&&et<=b.height-G){xt.bindFramebuffer(N.FRAMEBUFFER,zt);const Ut=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ut),N.bufferData(N.PIXEL_PACK_BUFFER,st.byteLength,N.STREAM_READ),N.readPixels(k,et,$,G,ie.convert(te),ie.convert($t),0);const de=R!==null?vt.get(R).__webglFramebuffer:null;xt.bindFramebuffer(N.FRAMEBUFFER,de);const ee=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await dc(N,ee,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ut),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,st),N.deleteBuffer(Ut),N.deleteSync(ee),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,k=null,et=0){b.isTexture!==!0&&(Si("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1]);const $=Math.pow(2,-et),G=Math.floor(b.image.width*$),st=Math.floor(b.image.height*$),Rt=k!==null?k.x:0,zt=k!==null?k.y:0;L.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,et,0,0,Rt,zt,G,st),xt.unbindTexture()};const ce=N.createFramebuffer(),yt=N.createFramebuffer();this.copyTextureToTexture=function(b,k,et=null,$=null,G=0,st=null){b.isTexture!==!0&&(Si("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,b=arguments[1],k=arguments[2],st=arguments[3]||0,et=null),st===null&&(G!==0?(Si("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=G,G=0):st=0);let Rt,zt,kt,te,$t,Ut,de,ee,we;const _e=b.isCompressedTexture?b.mipmaps[st]:b.image;if(et!==null)Rt=et.max.x-et.min.x,zt=et.max.y-et.min.y,kt=et.isBox3?et.max.z-et.min.z:1,te=et.min.x,$t=et.min.y,Ut=et.isBox3?et.min.z:0;else{const qe=Math.pow(2,-G);Rt=Math.floor(_e.width*qe),zt=Math.floor(_e.height*qe),b.isDataArrayTexture?kt=_e.depth:b.isData3DTexture?kt=Math.floor(_e.depth*qe):kt=1,te=0,$t=0,Ut=0}$!==null?(de=$.x,ee=$.y,we=$.z):(de=0,ee=0,we=0);const se=ie.convert(k.format),Yt=ie.convert(k.type);let Ee;k.isData3DTexture?(L.setTexture3D(k,0),Ee=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(L.setTexture2DArray(k,0),Ee=N.TEXTURE_2D_ARRAY):(L.setTexture2D(k,0),Ee=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const pe=N.getParameter(N.UNPACK_ROW_LENGTH),Qt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Le=N.getParameter(N.UNPACK_SKIP_PIXELS),ye=N.getParameter(N.UNPACK_SKIP_ROWS),$e=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,_e.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_e.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,te),N.pixelStorei(N.UNPACK_SKIP_ROWS,$t),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ut);const Me=b.isDataArrayTexture||b.isData3DTexture,Xe=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const qe=vt.get(b),me=vt.get(k),Ye=vt.get(qe.__renderTarget),Br=vt.get(me.__renderTarget);xt.bindFramebuffer(N.READ_FRAMEBUFFER,Ye.__webglFramebuffer),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Br.__webglFramebuffer);for(let Hn=0;Hn<kt;Hn++)Me&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,vt.get(b).__webglTexture,G,Ut+Hn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,vt.get(k).__webglTexture,st,we+Hn)),N.blitFramebuffer(te,$t,Rt,zt,de,ee,Rt,zt,N.DEPTH_BUFFER_BIT,N.NEAREST);xt.bindFramebuffer(N.READ_FRAMEBUFFER,null),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||vt.has(b)){const qe=vt.get(b),me=vt.get(k);xt.bindFramebuffer(N.READ_FRAMEBUFFER,ce),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,yt);for(let Ye=0;Ye<kt;Ye++)Me?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,qe.__webglTexture,G,Ut+Ye):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,qe.__webglTexture,G),Xe?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,me.__webglTexture,st,we+Ye):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,me.__webglTexture,st),G!==0?N.blitFramebuffer(te,$t,Rt,zt,de,ee,Rt,zt,N.COLOR_BUFFER_BIT,N.NEAREST):Xe?N.copyTexSubImage3D(Ee,st,de,ee,we+Ye,te,$t,Rt,zt):N.copyTexSubImage2D(Ee,st,de,ee,te,$t,Rt,zt);xt.bindFramebuffer(N.READ_FRAMEBUFFER,null),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Xe?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(Ee,st,de,ee,we,Rt,zt,kt,se,Yt,_e.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(Ee,st,de,ee,we,Rt,zt,kt,se,_e.data):N.texSubImage3D(Ee,st,de,ee,we,Rt,zt,kt,se,Yt,_e):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,st,de,ee,Rt,zt,se,Yt,_e.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,st,de,ee,_e.width,_e.height,se,_e.data):N.texSubImage2D(N.TEXTURE_2D,st,de,ee,Rt,zt,se,Yt,_e);N.pixelStorei(N.UNPACK_ROW_LENGTH,pe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Le),N.pixelStorei(N.UNPACK_SKIP_ROWS,ye),N.pixelStorei(N.UNPACK_SKIP_IMAGES,$e),st===0&&k.generateMipmaps&&N.generateMipmap(Ee),xt.unbindTexture()},this.copyTextureToTexture3D=function(b,k,et=null,$=null,G=0){return b.isTexture!==!0&&(Si("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,$=arguments[1]||null,b=arguments[2],k=arguments[3],G=arguments[4]||0),Si('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,k,et,$,G)},this.initRenderTarget=function(b){vt.get(b).__webglFramebuffer===void 0&&L.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),xt.unbindTexture()},this.resetState=function(){P=0,D=0,R=null,xt.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}}class al extends De{constructor(t={}){super(),this.config={position:{x:0,y:0,z:0},springPhysics:{strength:.3,damping:.75},dragBehavior:{returnSpeed:.1,dampingFactor:.95,enabled:!1},selectionBehavior:{enabled:!1,clickThreshold:200,moveThreshold:5},hoverBehavior:{enabled:!1},...t},this._state={isDragging:!1,isHovering:!1,isSelected:!1,dragOffset:new O,dragStartTime:0,dragStartPosition:new le,velocity:new O,onSelect:null,onDeselect:null,onClick:null,onDragStart:null,onDragEnd:null},this.interactiveMesh=null,this.position.set(this.config.position.x,this.config.position.y,this.config.position.z)}_initializeInteraction(){if(!this.interactiveMesh){console.warn("Interactive object has no interactiveMesh");return}this.interactiveMesh.userData.parent=this,this.interactiveMesh.userData.type="InteractiveObject",this.interactiveMesh.layers.enable(1)}setCallback(t,e){if(typeof e!="function"){console.warn(`Invalid callback: ${t}`);return}this._state[t]=e}onPointerEnter(t){this.config.hoverBehavior.enabled&&(this._state.isDragging||(this._state.isHovering=!0))}onPointerLeave(t){this.config.hoverBehavior.enabled&&(this._state.isDragging||(this._state.isHovering=!1))}onPointerMove(t){}onDragStart(t){if(!this.config.dragBehavior.enabled)return;this._state.isDragging=!0,this._state.velocity.set(0,0,0);const e=new Mn(new O(0,0,1),0),n=new O;t.ray.intersectPlane(e,n),this._state.dragOffset.copy(this.position).sub(n),this._state.dragStartTime=Date.now(),this._state.dragStartPosition=new le(t.clientX,t.clientY),this._state.onDragStart&&this._state.onDragStart(this,t)}onDragEnd(t){if(this.config.dragBehavior.enabled){if(this._state.isDragging=!1,this.config.selectionBehavior.enabled){const n=Date.now()-this._state.dragStartTime,i=new le(t.clientX,t.clientY).distanceTo(this._state.dragStartPosition);n<this.config.selectionBehavior.clickThreshold&&i<this.config.selectionBehavior.moveThreshold&&this._onClick(t)}this._state.onDragEnd&&this._state.onDragEnd(this,t)}}_onClick(t){this.config.selectionBehavior.enabled&&this.toggleSelected(),this._state.onClick&&this._state.onClick(this,t)}toggleSelected(){this.config.selectionBehavior.enabled&&(this._state.isSelected=!this._state.isSelected,this._state.isSelected&&this._state.onSelect?this._state.onSelect(this):!this._state.isSelected&&this._state.onDeselect&&this._state.onDeselect(this))}update(t){if(this.config.dragBehavior.enabled&&!this._state.isDragging){this.position.add(this._state.velocity),this._state.velocity.multiplyScalar(this.config.dragBehavior.dampingFactor);const e=new O(0,0,this.position.z);this.position.x+=(e.x-this.position.x)*this.config.dragBehavior.returnSpeed,this.position.y+=(e.y-this.position.y)*this.config.dragBehavior.returnSpeed}}dispose(){}}class Xi extends al{constructor({texture:t,width:e=2,height:n=3,position:r={x:0,y:0,z:0},springPhysics:i={strength:.3,damping:.75,wiggleStrength:.5,wiggleDamping:.6},dragBehavior:a={returnSpeed:.1,dampingFactor:.95,enabled:!0},selectionBehavior:o={enabled:!0,clickThreshold:200,moveThreshold:5},hoverBehavior:h={enabled:!0}}={}){super({position:r,springPhysics:i,dragBehavior:a,selectionBehavior:o,hoverBehavior:h}),this._cardState={scale:1,targetScale:1,scaleVelocity:0,initialHoverTime:0,isInitialHover:!1,wiggleRotation:0,wiggleVelocity:0,glowIntensity:0,targetGlowIntensity:0,glowVelocity:0,targetZ:0,zVelocity:0,targetRotation:new We,pivotOffset:.7},this._createCardMesh(t,e,n),this._initializeInteraction()}_createCardMesh(t,e,n){const r=new Cn(e,n),i=new wi({map:t,transparent:!0,side:en,shininess:100,specular:4473924,emissive:0});this.cardMesh=new Ne(r,i),this.cardMesh.castShadow=!0,this.cardMesh.receiveShadow=!0,this.cardMesh.position.y=-this._cardState.pivotOffset,this.interactiveMesh=this.cardMesh,this.add(this.cardMesh),this._createGlowEffect(e,n)}_createGlowEffect(t,e){const n=new Cn(t*1.1,e*1.1),r=new Ur({color:65535,transparent:!0,opacity:0,side:en,blending:ms});this.glowMesh=new Ne(n,r),this.glowMesh.position.z=-.05,this.glowMesh.position.y=-this._cardState.pivotOffset,this.add(this.glowMesh)}onPointerEnter(t){super.onPointerEnter(t),this._state.isHovering&&!this._state.isDragging&&(this._cardState.isInitialHover=!0,this._cardState.initialHoverTime=Date.now(),this._cardState.targetScale=1.1,this._cardState.scaleVelocity=.05,this._cardState.wiggleRotation=0,this._cardState.wiggleVelocity=.15),this._state.isHovering&&!this._state.isDragging&&this.sceneManager&&this.sceneManager.animateText("Card Hovered!")}onPointerLeave(t){super.onPointerLeave(t),!this._state.isHovering&&!this._state.isDragging&&(this._cardState.targetScale=this._state.isSelected?1.1:1,this._cardState.isInitialHover=!1)}onPointerMove(t){if(super.onPointerMove(t),this._state.isHovering&&!this._state.isDragging){const e=this.position.clone().project(t.camera),n=new le(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight)*2+1),r=(n.y-e.y)*.5,i=(n.x-e.x)*.5;this._cardState.targetRotation.x=-r,this._cardState.targetRotation.y=i}}onDragStart(t){super.onDragStart(t)}onDragEnd(t){super.onDragEnd(t),this.rotation.z=0,!this._state.isHovering&&!this._state.isSelected&&(this._cardState.targetScale=1,this._cardState.isInitialHover=!1)}toggleSelected(){super.toggleSelected(),this._state.isSelected?(this._cardState.targetScale=1.1,this._cardState.targetGlowIntensity=.7,this._cardState.targetZ=.5):(this._cardState.targetScale=this._state.isHovering?1.1:1,this._cardState.targetGlowIntensity=0,this._cardState.targetZ=0)}update(t=1/60){super.update(t),this._updateScale(),this._updateWiggle(),this._updateRotation(),this._updateGlow(),this._updateElevation()}_updateScale(){const e=(this._cardState.targetScale-this._cardState.scale)*this.config.springPhysics.strength;this._cardState.scaleVelocity+=e,this._cardState.scaleVelocity*=this.config.springPhysics.damping,this._cardState.scale+=this._cardState.scaleVelocity,this.cardMesh.scale.set(this._cardState.scale,this._cardState.scale,1),this.glowMesh.scale.set(this._cardState.scale,this._cardState.scale,1)}_updateWiggle(){if(this._cardState.isInitialHover){const t=-this._cardState.wiggleRotation*this.config.springPhysics.wiggleStrength;this._cardState.wiggleVelocity+=t,this._cardState.wiggleVelocity*=this.config.springPhysics.wiggleDamping,this._cardState.wiggleRotation+=this._cardState.wiggleVelocity,this.cardMesh.rotation.z=this._cardState.wiggleRotation,this.glowMesh.rotation.z=this._cardState.wiggleRotation,Math.abs(this._cardState.wiggleVelocity)<.001&&Math.abs(this._cardState.wiggleRotation)<.001&&(this._cardState.isInitialHover=!1,this._cardState.wiggleRotation=0)}}_updateRotation(){if(!this._state.isDragging&&!this._state.isHovering&&!this._state.isSelected){const t=Date.now()*.001;this._cardState.targetRotation.x=Math.sin(t)*.1,this._cardState.targetRotation.y=Math.cos(t)*.1}this.cardMesh.rotation.x+=(this._cardState.targetRotation.x-this.cardMesh.rotation.x)*.1,this.cardMesh.rotation.y+=(this._cardState.targetRotation.y-this.cardMesh.rotation.y)*.1,this.glowMesh.rotation.x=this.cardMesh.rotation.x,this.glowMesh.rotation.y=this.cardMesh.rotation.y}_updateGlow(){const e=(this._cardState.targetGlowIntensity-this._cardState.glowIntensity)*.2;this._cardState.glowVelocity+=e,this._cardState.glowVelocity*=.9,this._cardState.glowIntensity+=this._cardState.glowVelocity,this.glowMesh.material.opacity=this._cardState.glowIntensity}_updateElevation(){const e=(this._cardState.targetZ-this.position.z)*.2;this._cardState.zVelocity+=e,this._cardState.zVelocity*=.9,this.position.z+=this._cardState.zVelocity}dispose(){super.dispose(),this.cardMesh.geometry.dispose(),this.cardMesh.material.dispose(),this.cardMesh.material.map&&this.cardMesh.material.map.dispose(),this.glowMesh.geometry.dispose(),this.glowMesh.material.dispose()}}class Hp extends Rn{constructor(t=1,e=1,n=1,r=.1,i=4){super(),t=Math.abs(t),e=Math.abs(e),n=Math.abs(n),r=Math.min(Math.abs(r),Math.min(t,e,n)/2),i=Math.floor(Math.max(2,i)),this.parameters={width:t,height:e,depth:n,radius:r,segments:i};const a=t-r*2,o=e-r*2,h=n-r*2,d=[],c=[],l=[],u=[];this._generateBoxWithRoundedEdges(a,o,h,r,i,d,c,l,u),this.setAttribute("position",new pn(d,3)),this.setAttribute("normal",new pn(c,3)),this.setAttribute("uv",new pn(l,2)),this.setIndex(u)}_generateBoxWithRoundedEdges(t,e,n,r,i,a,o,h,d){const c=t/2,l=e/2,u=n/2,f=(m,p)=>{const x=a.length/3,M=1/i;for(let _=0;_<=i;_++)for(let T=0;T<=i;T++){const P=T*M,D=_*M,R=new O;if(R.lerpVectors(new O().lerpVectors(m[0],m[1],P),new O().lerpVectors(m[3],m[2],P),D),a.push(R.x,R.y,R.z),o.push(p.x,p.y,p.z),h.push(P,D),T<i&&_<i){const S=x+_*(i+1)+T,y=x+_*(i+1)+T+1,E=x+(_+1)*(i+1)+T+1,F=x+(_+1)*(i+1)+T;d.push(S,y,F),d.push(y,E,F)}}},v=(m,p,x,M,_,T)=>{const P=a.length/3;for(let D=0;D<=i;D++)for(let R=0;R<=i;R++){const S=R/i,y=D/i,E=(_*S+(1-_)*(1-S))*Math.PI/2,F=(T*y+(1-T)*(1-y))*Math.PI/2,U=p*Math.cos(E)*Math.cos(F),Y=x*Math.sin(F),W=M*Math.sin(E)*Math.cos(F),J=m.x+U*r,z=m.y+Y*r,I=m.z+W*r;if(a.push(J,z,I),o.push(U,Y,W),h.push(S,y),R<i&&D<i){const tt=P+D*(i+1)+R,K=P+D*(i+1)+R+1,B=P+(D+1)*(i+1)+R+1,j=P+(D+1)*(i+1)+R;d.push(tt,K,j),d.push(K,B,j)}}},g=(m,p,x,M,_,T)=>{const P=a.length/3,D=new O().subVectors(p,m).normalize(),R=new O(x,M,_),S=new O().crossVectors(R,D).normalize();for(let y=0;y<=i;y++)for(let E=0;E<=i;E++){const F=E/i,U=y/i,Y=new O().lerpVectors(m,p,F),W=(T*U+(1-T)*(1-U))*Math.PI/2,J=Math.cos(W)*R.x+Math.sin(W)*S.x,z=Math.cos(W)*R.y+Math.sin(W)*S.y,I=Math.cos(W)*R.z+Math.sin(W)*S.z,tt=Y.x+J*r,K=Y.y+z*r,B=Y.z+I*r;if(a.push(tt,K,B),o.push(J,z,I),h.push(F,U),E<i&&y<i){const j=P+y*(i+1)+E,V=P+y*(i+1)+E+1,A=P+(y+1)*(i+1)+E+1,C=P+(y+1)*(i+1)+E;d.push(j,V,C),d.push(V,A,C)}}};new O(-c,-l,u),new O(c,-l,u),new O(c,l,u),new O(-c,l,u),new O(-c,-l,-u),new O(c,-l,-u),new O(c,l,-u),new O(-c,l,-u),f([new O(-c,-l,u+r),new O(c,-l,u+r),new O(c,l,u+r),new O(-c,l,u+r)],new O(0,0,1)),f([new O(c,-l,-u-r),new O(-c,-l,-u-r),new O(-c,l,-u-r),new O(c,l,-u-r)],new O(0,0,-1)),f([new O(-c,l+r,u),new O(c,l+r,u),new O(c,l+r,-u),new O(-c,l+r,-u)],new O(0,1,0)),f([new O(-c,-l-r,-u),new O(c,-l-r,-u),new O(c,-l-r,u),new O(-c,-l-r,u)],new O(0,-1,0)),f([new O(c+r,-l,u),new O(c+r,-l,-u),new O(c+r,l,-u),new O(c+r,l,u)],new O(1,0,0)),f([new O(-c-r,-l,-u),new O(-c-r,-l,u),new O(-c-r,l,u),new O(-c-r,l,-u)],new O(-1,0,0)),g(new O(-c,-l,u+r),new O(c,-l,u+r),0,-1,0,0),g(new O(c,-l,u+r),new O(c,l,u+r),1,0,0,0),g(new O(c,l,u+r),new O(-c,l,u+r),0,1,0,0),g(new O(-c,l,u+r),new O(-c,-l,u+r),-1,0,0,0),g(new O(-c,-l,-u-r),new O(c,-l,-u-r),0,-1,0,1),g(new O(c,-l,-u-r),new O(c,l,-u-r),1,0,0,1),g(new O(c,l,-u-r),new O(-c,l,-u-r),0,1,0,1),g(new O(-c,l,-u-r),new O(-c,-l,-u-r),-1,0,0,1),g(new O(-c,-l,u+r),new O(-c,-l,-u-r),-1,-1,0,0),g(new O(c,-l,u+r),new O(c,-l,-u-r),1,-1,0,0),g(new O(c,l,u+r),new O(c,l,-u-r),1,1,0,0),g(new O(-c,l,u+r),new O(-c,l,-u-r),-1,1,0,0),v(new O(-c,-l,u),-1,-1,1,0,0),v(new O(c,-l,u),1,-1,1,1,0),v(new O(c,l,u),1,1,1,1,1),v(new O(-c,l,u),-1,1,1,0,1),v(new O(-c,-l,-u),-1,-1,-1,0,0),v(new O(c,-l,-u),1,-1,-1,1,0),v(new O(c,l,-u),1,1,-1,1,1),v(new O(-c,l,-u),-1,1,-1,0,1)}}class Mi extends al{constructor({width:t=1.2,height:e=.5,position:n={x:0,y:0,z:0},text:r="Confirm",fontColor:i="#ffffff",activeColor:a=4360181,inactiveColor:o=7895160,hoverBehavior:h={enabled:!0},selectionBehavior:d={enabled:!0,clickThreshold:200,moveThreshold:5}}={}){super({position:n,hoverBehavior:h,selectionBehavior:d,dragBehavior:{enabled:!1}}),this._buttonState={isActive:!1,scale:1,targetScale:1,scaleVelocity:0,labelScale:1,textCanvas:null,textTexture:null},this._props={width:t,height:e,text:r,fontColor:i,activeColor:a,inactiveColor:o},this._createButtonMesh(),this._initializeInteraction(),this._debug=!0}_createButtonMesh(){const t=new Hp(this._props.width,this._props.height,.1,.05,3),e=new wi({color:this._props.inactiveColor,shininess:30,specular:2236962});this.buttonMesh=new Ne(t,e),this.buttonMesh.castShadow=!0,this.buttonMesh.receiveShadow=!0,this.interactiveMesh=this.buttonMesh,this.add(this.buttonMesh),this._createTextLabel()}_createTextLabel(){const t=document.createElement("canvas"),e=t.getContext("2d");t.width=512,t.height=256,this._buttonState.textCanvas=t,e.clearRect(0,0,t.width,t.height),e.font="Bold 60px Arial",e.textAlign="center",e.textBaseline="middle",e.fillStyle=this._props.fontColor,e.fillText(this._props.text,t.width/2,t.height/2);const n=new _a(t);n.needsUpdate=!0,this._buttonState.textTexture=n;const r=new Ur({map:n,transparent:!0,side:en}),i=new Cn(this._props.width*.9,this._props.height*.7);this.textMesh=new Ne(i,r),this.textMesh.position.z=.06,this.add(this.textMesh)}setActive(t){this._buttonState.isActive!==t&&(this._debug&&console.log(`Button '${this._props.text}' active state changed: ${t}`),this._buttonState.isActive=t,this.buttonMesh.material.color.setHex(t?this._props.activeColor:this._props.inactiveColor),this.config.selectionBehavior.enabled=t,this.config.hoverBehavior.enabled=t)}isActive(){return this._buttonState.isActive}onPointerEnter(t){this._debug&&console.log(`Button '${this._props.text}' onPointerEnter, active: ${this._buttonState.isActive}`),this._buttonState.isActive&&(super.onPointerEnter(t),this._state.isHovering&&(this._buttonState.targetScale=1.1))}onPointerLeave(t){this._debug&&console.log(`Button '${this._props.text}' onPointerLeave, active: ${this._buttonState.isActive}`),super.onPointerLeave(t),this._state.isHovering||(this._buttonState.targetScale=1)}onDirectClick(t){if(this._debug&&console.log(`Button '${this._props.text}' onDirectClick, active: ${this._buttonState.isActive}`),!this._buttonState.isActive){console.log(`Button '${this._props.text}' ignoring click because it's inactive`);return}this._buttonState.targetScale=1.2,setTimeout(()=>{this._buttonState.targetScale=1},100),this._state.onClick?(console.log(`Button '${this._props.text}' executing onClick callback`),this._state.onClick(this)):console.warn(`Button '${this._props.text}' has no onClick callback set`)}toggleSelected(){if(!this._buttonState.isActive){console.log(`Button '${this._props.text}' ignoring toggleSelected because it's inactive`);return}this._debug&&console.log(`Button '${this._props.text}' toggleSelected`),super.toggleSelected(),this._state.isSelected&&(this._state.isSelected=!1,this._state.onClick?(console.log(`Button '${this._props.text}' executing onClick callback from toggleSelected`),this._state.onClick(this)):console.warn(`Button '${this._props.text}' has no onClick callback set`))}_onClick(t){this._debug&&console.log(`Button '${this._props.text}' _onClick internal method`),this.config.selectionBehavior.enabled?this.toggleSelected():(console.log(`Button '${this._props.text}' selection behavior is disabled`),this._state.onClick&&(console.log(`Button '${this._props.text}' executing onClick callback from _onClick`),this._state.onClick(this)))}onDragStart(t){this._debug&&console.log(`Button '${this._props.text}' onDragStart`),super.onDragStart(t)}onDragEnd(t){if(this._debug&&console.log(`Button '${this._props.text}' onDragEnd`),this.config.selectionBehavior.enabled){const n=Date.now()-this._state.dragStartTime,r=new le(t.clientX,t.clientY),i=this._state.dragStartPosition?r.distanceTo(this._state.dragStartPosition):0;console.log(`Button drag duration: ${n}ms, distance: ${i}px`),n<this.config.selectionBehavior.clickThreshold&&i<this.config.selectionBehavior.moveThreshold&&this._onClick(t)}this._state.isDragging=!1}update(t=1/60){super.update(t),this._updateScale()}_updateScale(){const e=(this._buttonState.targetScale-this._buttonState.scale)*.3;this._buttonState.scaleVelocity+=e,this._buttonState.scaleVelocity*=.7,this._buttonState.scale+=this._buttonState.scaleVelocity,this.buttonMesh.scale.set(this._buttonState.scale,this._buttonState.scale,this._buttonState.scale),this.textMesh.scale.set(this._buttonState.scale,this._buttonState.scale,1)}dispose(){super.dispose(),this.buttonMesh.geometry.dispose(),this.buttonMesh.material.dispose(),this.textMesh.geometry.dispose(),this.textMesh.material.dispose(),this._buttonState.textTexture&&this._buttonState.textTexture.dispose()}}function Er(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ps={exports:{}},bo;function Gp(){return bo||(bo=1,function(s,t){(function(e){s.exports=e()})(function(){return function e(n,r,i){function a(d,c){if(!r[d]){if(!n[d]){var l=typeof Er=="function"&&Er;if(!c&&l)return l(d,!0);if(o)return o(d,!0);throw new Error("Cannot find module '"+d+"'")}var u=r[d]={exports:{}};n[d][0].call(u.exports,function(f){var v=n[d][1][f];return a(v||f)},u,u.exports,e,n,r,i)}return r[d].exports}for(var o=typeof Er=="function"&&Er,h=0;h<i.length;h++)a(i[h]);return a}({1:[function(e,n,r){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,r){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,r){var i=e("../math/Vec3");e("../utils/Utils"),n.exports=a;function a(d){d=d||{},this.lowerBound=new i,d.lowerBound&&this.lowerBound.copy(d.lowerBound),this.upperBound=new i,d.upperBound&&this.upperBound.copy(d.upperBound)}var o=new i;a.prototype.setFromPoints=function(d,c,l,u){var f=this.lowerBound,v=this.upperBound,g=l;f.copy(d[0]),g&&g.vmult(f,f),v.copy(f);for(var m=1;m<d.length;m++){var p=d[m];g&&(g.vmult(p,o),p=o),p.x>v.x&&(v.x=p.x),p.x<f.x&&(f.x=p.x),p.y>v.y&&(v.y=p.y),p.y<f.y&&(f.y=p.y),p.z>v.z&&(v.z=p.z),p.z<f.z&&(f.z=p.z)}return c&&(c.vadd(f,f),c.vadd(v,v)),u&&(f.x-=u,f.y-=u,f.z-=u,v.x+=u,v.y+=u,v.z+=u),this},a.prototype.copy=function(d){return this.lowerBound.copy(d.lowerBound),this.upperBound.copy(d.upperBound),this},a.prototype.clone=function(){return new a().copy(this)},a.prototype.extend=function(d){var c=d.lowerBound.x;this.lowerBound.x>c&&(this.lowerBound.x=c);var l=d.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var c=d.lowerBound.y;this.lowerBound.y>c&&(this.lowerBound.y=c);var l=d.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var c=d.lowerBound.z;this.lowerBound.z>c&&(this.lowerBound.z=c);var l=d.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},a.prototype.overlaps=function(d){var c=this.lowerBound,l=this.upperBound,u=d.lowerBound,f=d.upperBound;return(u.x<=l.x&&l.x<=f.x||c.x<=f.x&&f.x<=l.x)&&(u.y<=l.y&&l.y<=f.y||c.y<=f.y&&f.y<=l.y)&&(u.z<=l.z&&l.z<=f.z||c.z<=f.z&&f.z<=l.z)},a.prototype.contains=function(d){var c=this.lowerBound,l=this.upperBound,u=d.lowerBound,f=d.upperBound;return c.x<=u.x&&l.x>=f.x&&c.y<=u.y&&l.y>=f.y&&c.z<=u.z&&l.z>=f.z},a.prototype.getCorners=function(d,c,l,u,f,v,g,m){var p=this.lowerBound,x=this.upperBound;d.copy(p),c.set(x.x,p.y,p.z),l.set(x.x,x.y,p.z),u.set(p.x,x.y,x.z),f.set(x.x,p.y,p.z),v.set(p.x,x.y,p.z),g.set(p.x,p.y,x.z),m.copy(x)};var h=[new i,new i,new i,new i,new i,new i,new i,new i];a.prototype.toLocalFrame=function(d,c){var l=h,u=l[0],f=l[1],v=l[2],g=l[3],m=l[4],p=l[5],x=l[6],M=l[7];this.getCorners(u,f,v,g,m,p,x,M);for(var _=0;_!==8;_++){var T=l[_];d.pointToLocal(T,T)}return c.setFromPoints(l)},a.prototype.toWorldFrame=function(d,c){var l=h,u=l[0],f=l[1],v=l[2],g=l[3],m=l[4],p=l[5],x=l[6],M=l[7];this.getCorners(u,f,v,g,m,p,x,M);for(var _=0;_!==8;_++){var T=l[_];d.pointToWorld(T,T)}return c.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,r){n.exports=i;function i(){this.matrix=[]}i.prototype.get=function(a,o){if(a=a.index,o=o.index,o>a){var h=o;o=a,a=h}return this.matrix[(a*(a+1)>>1)+o-1]},i.prototype.set=function(a,o,h){if(a=a.index,o=o.index,o>a){var d=o;o=a,a=d}this.matrix[(a*(a+1)>>1)+o-1]=h?1:0},i.prototype.reset=function(){for(var a=0,o=this.matrix.length;a!==o;a++)this.matrix[a]=0},i.prototype.setNumObjects=function(a){this.matrix.length=a*(a-1)>>1}},{}],5:[function(e,n,r){var i=e("../objects/Body"),a=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=h;function h(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}h.prototype.collisionPairs=function(g,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var d=i.STATIC|i.KINEMATIC;h.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&d||g.sleepState===i.SLEEPING)&&(m.type&d||m.sleepState===i.SLEEPING))},h.prototype.intersectionTest=function(g,m,p,x){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,p,x):this.doBoundingSphereBroadphase(g,m,p,x)};var c=new a;new a,new o,new a,h.prototype.doBoundingSphereBroadphase=function(g,m,p,x){var M=c;m.position.vsub(g.position,M);var _=Math.pow(g.boundingRadius+m.boundingRadius,2),T=M.norm2();T<_&&(p.push(g),x.push(m))},h.prototype.doBoundingBoxBroadphase=function(g,m,p,x){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(p.push(g),x.push(m))};var l={keys:[]},u=[],f=[];h.prototype.makePairsUnique=function(g,m){for(var p=l,x=u,M=f,_=g.length,T=0;T!==_;T++)x[T]=g[T],M[T]=m[T];g.length=0,m.length=0;for(var T=0;T!==_;T++){var P=x[T].id,D=M[T].id,R=P<D?P+","+D:D+","+P;p[R]=T,p.keys.push(R)}for(var T=0;T!==p.keys.length;T++){var R=p.keys.pop(),S=p[R];g.push(x[S]),m.push(M[S]),delete p[R]}},h.prototype.setWorld=function(g){};var v=new a;h.boundingSphereCheck=function(g,m){var p=v;return g.position.vsub(m.position,p),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},h.prototype.aabbQuery=function(g,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,r){n.exports=h;var i=e("./Broadphase"),a=e("../math/Vec3"),o=e("../shapes/Shape");function h(c,l,u,f,v){i.apply(this),this.nx=u||10,this.ny=f||10,this.nz=v||10,this.aabbMin=c||new a(100,100,100),this.aabbMax=l||new a(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}h.prototype=new i,h.prototype.constructor=h;var d=new a;new a,h.prototype.collisionPairs=function(c,l,u){var f=c.numObjects(),v=c.bodies,Q=this.aabbMax,H=this.aabbMin,g=this.nx,m=this.ny,p=this.nz,x=m*p,M=p,_=1,T=Q.x,P=Q.y,D=Q.z,R=H.x,S=H.y,y=H.z,E=g/(T-R),F=m/(P-S),U=p/(D-y),Y=(T-R)/g,W=(P-S)/m,J=(D-y)/p,z=Math.sqrt(Y*Y+W*W+J*J)*.5,I=o.types,tt=I.SPHERE,K=I.PLANE;I.BOX,I.COMPOUND,I.CONVEXPOLYHEDRON;for(var B=this.bins,j=this.binLengths,V=this.bins.length,A=0;A!==V;A++)j[A]=0;var C=Math.ceil,H=Math.min,Q=Math.max;function nt(he,Mt,Gt,Zt,Kt,Wt,ue){var ie=(he-R)*E|0,ge=(Mt-S)*F|0,q=(Gt-y)*U|0,Lt=C((Zt-R)*E),lt=C((Kt-S)*F),pt=C((Wt-y)*U);ie<0?ie=0:ie>=g&&(ie=g-1),ge<0?ge=0:ge>=m&&(ge=m-1),q<0?q=0:q>=p&&(q=p-1),Lt<0?Lt=0:Lt>=g&&(Lt=g-1),lt<0?lt=0:lt>=m&&(lt=m-1),pt<0?pt=0:pt>=p&&(pt=p-1),ie*=x,ge*=M,q*=_,Lt*=x,lt*=M,pt*=_;for(var Vt=ie;Vt<=Lt;Vt+=x)for(var Ot=ge;Ot<=lt;Ot+=M)for(var re=q;re<=pt;re+=_){var be=Vt+Ot+re;B[be][j[be]++]=ue}}for(var A=0;A!==f;A++){var X=v[A],rt=X.shape;switch(rt.type){case tt:var mt=X.position.x,St=X.position.y,wt=X.position.z,N=rt.radius;nt(mt-N,St-N,wt-N,mt+N,St+N,wt+N,X);break;case K:rt.worldNormalNeedsUpdate&&rt.computeWorldNormal(X.quaternion);var ft=rt.worldNormal,ut=R+Y*.5-X.position.x,Xt=S+W*.5-X.position.y,xt=y+J*.5-X.position.z,ne=d;ne.set(ut,Xt,xt);for(var vt=0,L=0;vt!==g;vt++,L+=x,ne.y=Xt,ne.x+=Y)for(var w=0,Z=0;w!==m;w++,Z+=M,ne.z=xt,ne.y+=W)for(var ct=0,ht=0;ct!==p;ct++,ht+=_,ne.z+=J)if(ne.dot(ft)<z){var ot=L+Z+ht;B[ot][j[ot]++]=X}break;default:X.aabbNeedsUpdate&&X.computeAABB(),nt(X.aabb.lowerBound.x,X.aabb.lowerBound.y,X.aabb.lowerBound.z,X.aabb.upperBound.x,X.aabb.upperBound.y,X.aabb.upperBound.z,X);break}}for(var A=0;A!==V;A++){var Et=j[A];if(Et>1)for(var bt=B[A],vt=0;vt!==Et;vt++)for(var X=bt[vt],w=0;w!==vt;w++){var Ft=bt[w];this.needBroadphaseCollision(X,Ft)&&this.intersectionTest(X,Ft,l,u)}}this.makePairsUnique(l,u)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,r){n.exports=o;var i=e("./Broadphase"),a=e("./AABB");function o(){i.apply(this)}o.prototype=new i,o.prototype.constructor=o,o.prototype.collisionPairs=function(h,d,c){var l=h.bodies,u=l.length,f,v,g,m;for(f=0;f!==u;f++)for(v=0;v!==f;v++)g=l[f],m=l[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,d,c)},new a,o.prototype.aabbQuery=function(h,d,c){c=c||[];for(var l=0;l<h.bodies.length;l++){var u=h.bodies[l];u.aabbNeedsUpdate&&u.computeAABB(),u.aabb.overlaps(d)&&c.push(u)}return c}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,r){n.exports=i;function i(){this.matrix={}}i.prototype.get=function(a,o){if(a=a.id,o=o.id,o>a){var h=o;o=a,a=h}return a+"-"+o in this.matrix},i.prototype.set=function(a,o,h){if(a=a.id,o=o.id,o>a){var d=o;o=a,a=d}h?this.matrix[a+"-"+o]=!0:delete this.matrix[a+"-"+o]},i.prototype.reset=function(){this.matrix={}},i.prototype.setNumObjects=function(a){}},{}],9:[function(e,n,r){n.exports=l;var i=e("../math/Vec3"),a=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var h=e("../collision/RaycastResult"),d=e("../shapes/Shape"),c=e("../collision/AABB");function l(V,A){this.from=V?V.clone():new i,this.to=A?A.clone():new i,this._direction=new i,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new h,this.hasHit=!1,this.callback=function(C){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var u=new c,f=[];l.prototype.intersectWorld=function(V,A){return this.mode=A.mode||l.ANY,this.result=A.result||new h,this.skipBackfaces=!!A.skipBackfaces,this.collisionFilterMask=typeof A.collisionFilterMask<"u"?A.collisionFilterMask:-1,this.collisionFilterGroup=typeof A.collisionFilterGroup<"u"?A.collisionFilterGroup:-1,A.from&&this.from.copy(A.from),A.to&&this.to.copy(A.to),this.callback=A.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(u),f.length=0,V.broadphase.aabbQuery(V,u,f),this.intersectBodies(f),this.hasHit};var v=new i,g=new i;l.pointInTriangle=m;function m(V,A,C,H){H.vsub(A,K),C.vsub(A,v),V.vsub(A,g);var Q=K.dot(K),nt=K.dot(v),X=K.dot(g),rt=v.dot(v),mt=v.dot(g),St,wt;return(St=rt*X-nt*mt)>=0&&(wt=Q*mt-nt*X)>=0&&St+wt<Q*rt-nt*nt}var p=new i,x=new a;l.prototype.intersectBody=function(V,A){A&&(this.result=A,this._updateDirection());var C=this.checkCollisionResponse;if(!(C&&!V.collisionResponse)&&!(!(this.collisionFilterGroup&V.collisionFilterMask)||!(V.collisionFilterGroup&this.collisionFilterMask)))for(var H=p,Q=x,nt=0,X=V.shapes.length;nt<X;nt++){var rt=V.shapes[nt];if(!(C&&!rt.collisionResponse)&&(V.quaternion.mult(V.shapeOrientations[nt],Q),V.quaternion.vmult(V.shapeOffsets[nt],H),H.vadd(V.position,H),this.intersectShape(rt,Q,H,V),this.result._shouldStop))break}},l.prototype.intersectBodies=function(V,A){A&&(this.result=A,this._updateDirection());for(var C=0,H=V.length;!this.result._shouldStop&&C<H;C++)this.intersectBody(V[C])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(V,A,C,H){var Q=this.from,nt=j(Q,this._direction,C);if(!(nt>V.boundingSphereRadius)){var X=this[V.type];X&&X.call(this,V,A,C,H)}},new i,new i;var M=new i,_=new i,T=new i,P=new i;new i,new h,l.prototype.intersectBox=function(V,A,C,H){return this.intersectConvex(V.convexPolyhedronRepresentation,A,C,H)},l.prototype[d.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(V,A,C,H){var Q=this.from,nt=this.to,X=this._direction,rt=new i(0,0,1);A.vmult(rt,rt);var mt=new i;Q.vsub(C,mt);var St=mt.dot(rt);nt.vsub(C,mt);var wt=mt.dot(rt);if(!(St*wt>0)&&!(Q.distanceTo(nt)<St)){var N=rt.dot(X);if(!(Math.abs(N)<this.precision)){var ft=new i,ut=new i,Xt=new i;Q.vsub(C,ft);var xt=-rt.dot(ft)/N;X.scale(xt,ut),Q.vadd(ut,Xt),this.reportIntersection(rt,Xt,V,H,-1)}}},l.prototype[d.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(V){var A=this.to,C=this.from;V.lowerBound.x=Math.min(A.x,C.x),V.lowerBound.y=Math.min(A.y,C.y),V.lowerBound.z=Math.min(A.z,C.z),V.upperBound.x=Math.max(A.x,C.x),V.upperBound.y=Math.max(A.y,C.y),V.upperBound.z=Math.max(A.z,C.z)};var D={faceList:[0]};l.prototype.intersectHeightfield=function(V,A,C,H){V.data,V.elementSize;var Q=new i,nt=new l(this.from,this.to);o.pointToLocalFrame(C,A,nt.from,nt.from),o.pointToLocalFrame(C,A,nt.to,nt.to);var X=[],rt=null,mt=null,St=null,wt=null,N=V.getIndexOfPosition(nt.from.x,nt.from.y,X,!1);if(N&&(rt=X[0],mt=X[1],St=X[0],wt=X[1]),N=V.getIndexOfPosition(nt.to.x,nt.to.y,X,!1),N&&((rt===null||X[0]<rt)&&(rt=X[0]),(St===null||X[0]>St)&&(St=X[0]),(mt===null||X[1]<mt)&&(mt=X[1]),(wt===null||X[1]>wt)&&(wt=X[1])),rt!==null){var ft=[];V.getRectMinMax(rt,mt,St,wt,ft),ft[0],ft[1];for(var ut=rt;ut<=St;ut++)for(var Xt=mt;Xt<=wt;Xt++){if(this.result._shouldStop||(V.getConvexTrianglePillar(ut,Xt,!1),o.pointToWorldFrame(C,A,V.pillarOffset,Q),this.intersectConvex(V.pillarConvex,A,Q,H,D),this.result._shouldStop))return;V.getConvexTrianglePillar(ut,Xt,!0),o.pointToWorldFrame(C,A,V.pillarOffset,Q),this.intersectConvex(V.pillarConvex,A,Q,H,D)}}},l.prototype[d.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var R=new i,S=new i;l.prototype.intersectSphere=function(V,A,C,H){var Q=this.from,nt=this.to,X=V.radius,rt=Math.pow(nt.x-Q.x,2)+Math.pow(nt.y-Q.y,2)+Math.pow(nt.z-Q.z,2),mt=2*((nt.x-Q.x)*(Q.x-C.x)+(nt.y-Q.y)*(Q.y-C.y)+(nt.z-Q.z)*(Q.z-C.z)),St=Math.pow(Q.x-C.x,2)+Math.pow(Q.y-C.y,2)+Math.pow(Q.z-C.z,2)-Math.pow(X,2),wt=Math.pow(mt,2)-4*rt*St,N=R,ft=S;if(!(wt<0))if(wt===0)Q.lerp(nt,wt,N),N.vsub(C,ft),ft.normalize(),this.reportIntersection(ft,N,V,H,-1);else{var ut=(-mt-Math.sqrt(wt))/(2*rt),Xt=(-mt+Math.sqrt(wt))/(2*rt);if(ut>=0&&ut<=1&&(Q.lerp(nt,ut,N),N.vsub(C,ft),ft.normalize(),this.reportIntersection(ft,N,V,H,-1)),this.result._shouldStop)return;Xt>=0&&Xt<=1&&(Q.lerp(nt,Xt,N),N.vsub(C,ft),ft.normalize(),this.reportIntersection(ft,N,V,H,-1))}},l.prototype[d.types.SPHERE]=l.prototype.intersectSphere;var y=new i;new i,new i;var E=new i;l.prototype.intersectConvex=function(A,C,H,Q,nt){for(var X=y,rt=E,mt=nt&&nt.faceList||null,St=A.faces,wt=A.vertices,N=A.faceNormals,ft=this._direction,ut=this.from,Xt=this.to,xt=ut.distanceTo(Xt),ne=mt?mt.length:St.length,vt=this.result,L=0;!vt._shouldStop&&L<ne;L++){var w=mt?mt[L]:L,Z=St[w],ct=N[w],ht=C,ot=H;rt.copy(wt[Z[0]]),ht.vmult(rt,rt),rt.vadd(ot,rt),rt.vsub(ut,rt),ht.vmult(ct,X);var Et=ft.dot(X);if(!(Math.abs(Et)<this.precision)){var bt=X.dot(rt)/Et;if(!(bt<0)){ft.mult(bt,M),M.vadd(ut,M),_.copy(wt[Z[0]]),ht.vmult(_,_),ot.vadd(_,_);for(var Ft=1;!vt._shouldStop&&Ft<Z.length-1;Ft++){T.copy(wt[Z[Ft]]),P.copy(wt[Z[Ft+1]]),ht.vmult(T,T),ht.vmult(P,P),ot.vadd(T,T),ot.vadd(P,P);var he=M.distanceTo(ut);!(m(M,_,T,P)||m(M,T,_,P))||he>xt||this.reportIntersection(X,M,A,Q,w)}}}}},l.prototype[d.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var F=new i,U=new i,Y=new i,W=new i,J=new i,z=new i;new c;var I=[],tt=new o;l.prototype.intersectTrimesh=function(A,C,H,Q,nt){var X=F,rt=I,mt=tt,St=E,wt=U,N=Y,ft=W,ut=z,Xt=J;nt&&nt.faceList;var xt=A.indices;A.vertices,A.faceNormals;var ne=this.from,vt=this.to,L=this._direction;mt.position.copy(H),mt.quaternion.copy(C),o.vectorToLocalFrame(H,C,L,wt),o.pointToLocalFrame(H,C,ne,N),o.pointToLocalFrame(H,C,vt,ft);var w=N.distanceSquared(ft);A.tree.rayQuery(this,mt,rt);for(var Z=0,ct=rt.length;!this.result._shouldStop&&Z!==ct;Z++){var ht=rt[Z];A.getNormal(ht,X),A.getVertex(xt[ht*3],_),_.vsub(N,St);var ot=wt.dot(X),Et=X.dot(St)/ot;if(!(Et<0)){wt.scale(Et,M),M.vadd(N,M),A.getVertex(xt[ht*3+1],T),A.getVertex(xt[ht*3+2],P);var bt=M.distanceSquared(N);!(m(M,T,_,P)||m(M,_,T,P))||bt>w||(o.vectorToWorldFrame(C,X,Xt),o.pointToWorldFrame(H,C,M,ut),this.reportIntersection(Xt,ut,A,Q,ht))}}rt.length=0},l.prototype[d.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(V,A,C,H,Q){var nt=this.from,X=this.to,rt=nt.distanceTo(A),mt=this.result;if(!(this.skipBackfaces&&V.dot(this._direction)>0))switch(mt.hitFaceIndex=typeof Q<"u"?Q:-1,this.mode){case l.ALL:this.hasHit=!0,mt.set(nt,X,V,A,C,H,rt),mt.hasHit=!0,this.callback(mt);break;case l.CLOSEST:(rt<mt.distance||!mt.hasHit)&&(this.hasHit=!0,mt.hasHit=!0,mt.set(nt,X,V,A,C,H,rt));break;case l.ANY:this.hasHit=!0,mt.hasHit=!0,mt.set(nt,X,V,A,C,H,rt),mt._shouldStop=!0;break}};var K=new i,B=new i;function j(V,A,C){C.vsub(V,K);var H=K.dot(A);A.mult(H,B),B.vadd(V,B);var Q=C.distanceTo(B);return Q}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,r){var i=e("../math/Vec3");n.exports=a;function a(){this.rayFromWorld=new i,this.rayToWorld=new i,this.hitNormalWorld=new i,this.hitPointWorld=new i,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}a.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},a.prototype.abort=function(){this._shouldStop=!0},a.prototype.set=function(o,h,d,c,l,u,f){this.rayFromWorld.copy(o),this.rayToWorld.copy(h),this.hitNormalWorld.copy(d),this.hitPointWorld.copy(c),this.shape=l,this.body=u,this.distance=f}},{"../math/Vec3":30}],11:[function(e,n,r){e("../shapes/Shape");var i=e("../collision/Broadphase");n.exports=a;function a(o){i.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var h=this.axisList;this._addBodyHandler=function(d){h.push(d.body)},this._removeBodyHandler=function(d){var c=h.indexOf(d.body);c!==-1&&h.splice(c,1)},o&&this.setWorld(o)}a.prototype=new i,a.prototype.setWorld=function(o){this.axisList.length=0;for(var h=0;h<o.bodies.length;h++)this.axisList.push(o.bodies[h]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},a.insertionSortX=function(o){for(var h=1,d=o.length;h<d;h++){for(var c=o[h],l=h-1;l>=0&&!(o[l].aabb.lowerBound.x<=c.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=c}return o},a.insertionSortY=function(o){for(var h=1,d=o.length;h<d;h++){for(var c=o[h],l=h-1;l>=0&&!(o[l].aabb.lowerBound.y<=c.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=c}return o},a.insertionSortZ=function(o){for(var h=1,d=o.length;h<d;h++){for(var c=o[h],l=h-1;l>=0&&!(o[l].aabb.lowerBound.z<=c.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=c}return o},a.prototype.collisionPairs=function(o,h,d){var c=this.axisList,l=c.length,u=this.axisIndex,f,v;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==l;f++){var g=c[f];for(v=f+1;v<l;v++){var m=c[v];if(this.needBroadphaseCollision(g,m)){if(!a.checkBounds(g,m,u))break;this.intersectionTest(g,m,h,d)}}}},a.prototype.sortList=function(){for(var o=this.axisList,h=this.axisIndex,d=o.length,c=0;c!==d;c++){var l=o[c];l.aabbNeedsUpdate&&l.computeAABB()}h===0?a.insertionSortX(o):h===1?a.insertionSortY(o):h===2&&a.insertionSortZ(o)},a.checkBounds=function(o,h,d){var c,l;d===0?(c=o.position.x,l=h.position.x):d===1?(c=o.position.y,l=h.position.y):d===2&&(c=o.position.z,l=h.position.z);var u=o.boundingRadius,f=h.boundingRadius,v=c+u,g=l-f;return g<v},a.prototype.autoDetectAxis=function(){for(var o=0,h=0,d=0,c=0,l=0,u=0,f=this.axisList,v=f.length,g=1/v,m=0;m!==v;m++){var p=f[m],x=p.position.x;o+=x,h+=x*x;var M=p.position.y;d+=M,c+=M*M;var _=p.position.z;l+=_,u+=_*_}var T=h-o*o*g,P=c-d*d*g,D=u-l*l*g;T>P?T>D?this.axisIndex=0:this.axisIndex=2:P>D?this.axisIndex=1:this.axisIndex=2},a.prototype.aabbQuery=function(o,h,d){d=d||[],this.dirty&&(this.sortList(),this.dirty=!1);var c=this.axisIndex,l="x";c===1&&(l="y"),c===2&&(l="z");var u=this.axisList;h.lowerBound[l],h.upperBound[l];for(var f=0;f<u.length;f++){var v=u[f];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(h)&&d.push(v)}return d}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,r){n.exports=d,e("./Constraint");var i=e("./PointToPointConstraint"),a=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var h=e("../math/Vec3");function d(c,l,u){u=u||{};var f=typeof u.maxForce<"u"?u.maxForce:1e6,v=u.pivotA?u.pivotA.clone():new h,g=u.pivotB?u.pivotB.clone():new h;this.axisA=u.axisA?u.axisA.clone():new h,this.axisB=u.axisB?u.axisB.clone():new h,i.call(this,c,v,l,g,f),this.collideConnected=!!u.collideConnected,this.angle=typeof u.angle<"u"?u.angle:0;var m=this.coneEquation=new a(c,l,u),p=this.twistEquation=new o(c,l,u);this.twistAngle=typeof u.twistAngle<"u"?u.twistAngle:0,m.maxForce=0,m.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(m,p)}d.prototype=new i,d.constructor=d,new h,new h,d.prototype.update=function(){var c=this.bodyA,l=this.bodyB,u=this.coneEquation,f=this.twistEquation;i.prototype.update.call(this),c.vectorToWorldFrame(this.axisA,u.axisA),l.vectorToWorldFrame(this.axisB,u.axisB),this.axisA.tangents(f.axisA,f.axisA),c.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),l.vectorToWorldFrame(f.axisB,f.axisB),u.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,r){n.exports=a;var i=e("../utils/Utils");function a(o,h,d){d=i.defaults(d,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=h,this.id=a.idCounter++,this.collideConnected=d.collideConnected,d.wakeUpBodies&&(o&&o.wakeUp(),h&&h.wakeUp())}a.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},a.prototype.enable=function(){for(var o=this.equations,h=0;h<o.length;h++)o[h].enabled=!0},a.prototype.disable=function(){for(var o=this.equations,h=0;h<o.length;h++)o[h].enabled=!1},a.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,r){n.exports=o;var i=e("./Constraint"),a=e("../equations/ContactEquation");function o(h,d,c,l){i.call(this,h,d),typeof c>"u"&&(c=h.position.distanceTo(d.position)),typeof l>"u"&&(l=1e6),this.distance=c;var u=this.distanceEquation=new a(h,d);this.equations.push(u),u.minForce=-l,u.maxForce=l}o.prototype=new i,o.prototype.update=function(){var h=this.bodyA,d=this.bodyB,c=this.distanceEquation,l=this.distance*.5,u=c.ni;d.position.vsub(h.position,u),u.normalize(),u.mult(l,c.ri),u.mult(-l,c.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,r){n.exports=d,e("./Constraint");var i=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var h=e("../math/Vec3");function d(u,f,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new h,p=v.pivotB?v.pivotB.clone():new h;i.call(this,u,m,f,p,g);var x=this.axisA=v.axisA?v.axisA.clone():new h(1,0,0);x.normalize();var M=this.axisB=v.axisB?v.axisB.clone():new h(1,0,0);M.normalize();var _=this.rotationalEquation1=new a(u,f,v),T=this.rotationalEquation2=new a(u,f,v),P=this.motorEquation=new o(u,f,g);P.enabled=!1,this.equations.push(_,T,P)}d.prototype=new i,d.constructor=d,d.prototype.enableMotor=function(){this.motorEquation.enabled=!0},d.prototype.disableMotor=function(){this.motorEquation.enabled=!1},d.prototype.setMotorSpeed=function(u){this.motorEquation.targetVelocity=u},d.prototype.setMotorMaxForce=function(u){this.motorEquation.maxForce=u,this.motorEquation.minForce=-u};var c=new h,l=new h;d.prototype.update=function(){var u=this.bodyA,f=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,p=c,x=l,M=this.axisA,_=this.axisB;i.prototype.update.call(this),u.quaternion.vmult(M,p),f.quaternion.vmult(_,x),p.tangents(g.axisA,m.axisA),g.axisB.copy(x),m.axisB.copy(x),this.motorEquation.enabled&&(u.quaternion.vmult(this.axisA,v.axisA),f.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,r){n.exports=h,e("./Constraint");var i=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function h(d,c,l){l=l||{};var u=typeof l.maxForce<"u"?l.maxForce:1e6,f=new o,v=new o,g=new o;d.position.vadd(c.position,g),g.scale(.5,g),c.pointToLocalFrame(g,v),d.pointToLocalFrame(g,f),i.call(this,d,f,c,v,u);var m=this.rotationalEquation1=new a(d,c,l),p=this.rotationalEquation2=new a(d,c,l),x=this.rotationalEquation3=new a(d,c,l);this.equations.push(m,p,x)}h.prototype=new i,h.constructor=h,new o,new o,h.prototype.update=function(){var d=this.bodyA,c=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,u=this.rotationalEquation2,f=this.rotationalEquation3;i.prototype.update.call(this),d.vectorToWorldFrame(o.UNIT_X,l.axisA),c.vectorToWorldFrame(o.UNIT_Y,l.axisB),d.vectorToWorldFrame(o.UNIT_Y,u.axisA),c.vectorToWorldFrame(o.UNIT_Z,u.axisB),d.vectorToWorldFrame(o.UNIT_Z,f.axisA),c.vectorToWorldFrame(o.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,r){n.exports=h;var i=e("./Constraint"),a=e("../equations/ContactEquation"),o=e("../math/Vec3");function h(d,c,l,u,f){i.call(this,d,l),f=typeof f<"u"?f:1e6,this.pivotA=c?c.clone():new o,this.pivotB=u?u.clone():new o;var v=this.equationX=new a(d,l),g=this.equationY=new a(d,l),m=this.equationZ=new a(d,l);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-f,v.maxForce=g.maxForce=m.maxForce=f,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}h.prototype=new i,h.prototype.update=function(){var d=this.bodyA,c=this.bodyB,l=this.equationX,u=this.equationY,f=this.equationZ;d.quaternion.vmult(this.pivotA,l.ri),c.quaternion.vmult(this.pivotB,l.rj),u.ri.copy(l.ri),u.rj.copy(l.rj),f.ri.copy(l.ri),f.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,r){n.exports=o;var i=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(c,l,u){u=u||{};var f=typeof u.maxForce<"u"?u.maxForce:1e6;a.call(this,c,l,-f,f),this.axisA=u.axisA?u.axisA.clone():new i(1,0,0),this.axisB=u.axisB?u.axisB.clone():new i(0,1,0),this.angle=typeof u.angle<"u"?u.angle:0}o.prototype=new a,o.prototype.constructor=o;var h=new i,d=new i;o.prototype.computeB=function(c){var l=this.a,u=this.b,f=this.axisA,v=this.axisB,g=h,m=d,p=this.jacobianElementA,x=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),x.rotational.copy(g);var M=Math.cos(this.angle)-f.dot(v),_=this.computeGW(),T=this.computeGiMf(),P=-M*l-_*u-c*T;return P}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,r){n.exports=o;var i=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(m,p,x){x=typeof x<"u"?x:1e6,i.call(this,m,p,0,x),this.restitution=0,this.ri=new a,this.rj=new a,this.ni=new a}o.prototype=new i,o.prototype.constructor=o;var h=new a,d=new a,c=new a;o.prototype.computeB=function(m){var p=this.a,x=this.b,M=this.bi,_=this.bj,T=this.ri,P=this.rj,D=h,R=d,S=M.velocity,y=M.angularVelocity;M.force,M.torque;var E=_.velocity,F=_.angularVelocity;_.force,_.torque;var U=c,Y=this.jacobianElementA,W=this.jacobianElementB,J=this.ni;T.cross(J,D),P.cross(J,R),J.negate(Y.spatial),D.negate(Y.rotational),W.spatial.copy(J),W.rotational.copy(R),U.copy(_.position),U.vadd(P,U),U.vsub(M.position,U),U.vsub(T,U);var z=J.dot(U),I=this.restitution+1,tt=I*E.dot(J)-I*S.dot(J)+F.dot(R)-y.dot(D),K=this.computeGiMf(),B=-z*p-tt*x-m*K;return B};var l=new a,u=new a,f=new a,v=new a,g=new a;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,p=u,x=f,M=v,_=g;return this.bi.position.vadd(this.ri,x),this.bj.position.vadd(this.rj,M),this.bi.getVelocityAtWorldPoint(x,m),this.bj.getVelocityAtWorldPoint(M,p),m.vsub(p,_),this.ni.dot(_)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,r){n.exports=o;var i=e("../math/JacobianElement"),a=e("../math/Vec3");function o(g,m,p,x){this.id=o.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof x>"u"?1e6:x,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new i,this.jacobianElementB=new i,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,p){var x=m,M=g,_=p;this.a=4/(_*(1+4*x)),this.b=4*x/(1+4*x),this.eps=4/(_*_*M*(1+4*x))},o.prototype.computeB=function(g,m,p){var x=this.computeGW(),M=this.computeGq(),_=this.computeGiMf();return-M*g-x*m-_*p},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,M=p.position,_=x.position;return g.spatial.dot(M)+m.spatial.dot(_)};var h=new a;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,M=p.velocity,_=x.velocity,T=p.angularVelocity||h,P=x.angularVelocity||h;return g.multiplyVectors(M,T)+m.multiplyVectors(_,P)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,M=p.vlambda,_=x.vlambda,T=p.wlambda||h,P=x.wlambda||h;return g.multiplyVectors(M,T)+m.multiplyVectors(_,P)};var d=new a,c=new a,l=new a,u=new a;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,M=p.force,_=p.torque,T=x.force,P=x.torque,D=p.invMassSolve,R=x.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(_,l):l.set(0,0,0),x.invInertiaWorldSolve?x.invInertiaWorldSolve.vmult(P,u):u.set(0,0,0),M.mult(D,d),T.mult(R,c),g.multiplyVectors(d,l)+m.multiplyVectors(c,u)};var f=new a;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,M=p.invMassSolve,_=x.invMassSolve,T=p.invInertiaWorldSolve,P=x.invInertiaWorldSolve,D=M+_;return T&&(T.vmult(g.rotational,f),D+=f.dot(g.rotational)),P&&(P.vmult(m.rotational,f),D+=f.dot(m.rotational)),D};var v=new a;new a,new a,new a,new a,new a,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,p=this.jacobianElementB,x=this.bi,M=this.bj,_=v;m.spatial.mult(x.invMassSolve*g,_),x.vlambda.vadd(_,x.vlambda),p.spatial.mult(M.invMassSolve*g,_),M.vlambda.vadd(_,M.vlambda),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(m.rotational,_),_.mult(g,_),x.wlambda.vadd(_,x.wlambda)),M.invInertiaWorldSolve&&(M.invInertiaWorldSolve.vmult(p.rotational,_),_.mult(g,_),M.wlambda.vadd(_,M.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,r){n.exports=o;var i=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(c,l,u){i.call(this,c,l,-u,u),this.ri=new a,this.rj=new a,this.t=new a}o.prototype=new i,o.prototype.constructor=o;var h=new a,d=new a;o.prototype.computeB=function(c){this.a;var l=this.b;this.bi,this.bj;var u=this.ri,f=this.rj,v=h,g=d,m=this.t;u.cross(m,v),f.cross(m,g);var p=this.jacobianElementA,x=this.jacobianElementB;m.negate(p.spatial),v.negate(p.rotational),x.spatial.copy(m),x.rotational.copy(g);var M=this.computeGW(),_=this.computeGiMf(),T=-M*l-c*_;return T}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,r){n.exports=o;var i=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(c,l,u){u=u||{};var f=typeof u.maxForce<"u"?u.maxForce:1e6;a.call(this,c,l,-f,f),this.axisA=u.axisA?u.axisA.clone():new i(1,0,0),this.axisB=u.axisB?u.axisB.clone():new i(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new a,o.prototype.constructor=o;var h=new i,d=new i;o.prototype.computeB=function(c){var l=this.a,u=this.b,f=this.axisA,v=this.axisB,g=h,m=d,p=this.jacobianElementA,x=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),x.rotational.copy(g);var M=Math.cos(this.maxAngle)-f.dot(v),_=this.computeGW(),T=this.computeGiMf(),P=-M*l-_*u-c*T;return P}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,r){n.exports=o;var i=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,d,c){c=typeof c<"u"?c:1e6,a.call(this,h,d,-c,c),this.axisA=new i,this.axisB=new i,this.targetVelocity=0}o.prototype=new a,o.prototype.constructor=o,o.prototype.computeB=function(h){this.a;var d=this.b;this.bi,this.bj;var c=this.axisA,l=this.axisB,u=this.jacobianElementA,f=this.jacobianElementB;u.rotational.copy(c),l.negate(f.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*d-h*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,r){var i=e("../utils/Utils");n.exports=a;function a(o,h,d){d=i.defaults(d,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=a.idCounter++,this.materials=[o,h],this.friction=d.friction,this.restitution=d.restitution,this.contactEquationStiffness=d.contactEquationStiffness,this.contactEquationRelaxation=d.contactEquationRelaxation,this.frictionEquationStiffness=d.frictionEquationStiffness,this.frictionEquationRelaxation=d.frictionEquationRelaxation}a.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,r){n.exports=i;function i(a){var o="";a=a||{},typeof a=="string"?(o=a,a={}):typeof a=="object"&&(o=""),this.name=o,this.id=i.idCounter++,this.friction=typeof a.friction<"u"?a.friction:-1,this.restitution=typeof a.restitution<"u"?a.restitution:-1}i.idCounter=0},{}],26:[function(e,n,r){n.exports=a;var i=e("./Vec3");function a(){this.spatial=new i,this.rotational=new i}a.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},a.prototype.multiplyVectors=function(o,h){return o.dot(this.spatial)+h.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,r){n.exports=a;var i=e("./Vec3");function a(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}a.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},a.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},a.prototype.setTrace=function(o){var h=this.elements;h[0]=o.x,h[4]=o.y,h[8]=o.z},a.prototype.getTrace=function(h){var h=h||new i,d=this.elements;h.x=d[0],h.y=d[4],h.z=d[8]},a.prototype.vmult=function(o,h){h=h||new i;var d=this.elements,c=o.x,l=o.y,u=o.z;return h.x=d[0]*c+d[1]*l+d[2]*u,h.y=d[3]*c+d[4]*l+d[5]*u,h.z=d[6]*c+d[7]*l+d[8]*u,h},a.prototype.smult=function(o){for(var h=0;h<this.elements.length;h++)this.elements[h]*=o},a.prototype.mmult=function(o,h){for(var d=h||new a,c=0;c<3;c++)for(var l=0;l<3;l++){for(var u=0,f=0;f<3;f++)u+=o.elements[c+f*3]*this.elements[f+l*3];d.elements[c+l*3]=u}return d},a.prototype.scale=function(o,h){h=h||new a;for(var d=this.elements,c=h.elements,l=0;l!==3;l++)c[3*l+0]=o.x*d[3*l+0],c[3*l+1]=o.y*d[3*l+1],c[3*l+2]=o.z*d[3*l+2];return h},a.prototype.solve=function(o,h){h=h||new i;for(var d=3,c=4,l=[],u=0;u<d*c;u++)l.push(0);var u,f;for(u=0;u<3;u++)for(f=0;f<3;f++)l[u+c*f]=this.elements[u+3*f];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var v=3,g=v,m,p=4,x;do{if(u=g-v,l[u+c*u]===0){for(f=u+1;f<g;f++)if(l[u+c*f]!==0){m=p;do x=p-m,l[x+c*u]+=l[x+c*f];while(--m);break}}if(l[u+c*u]!==0)for(f=u+1;f<g;f++){var M=l[u+c*f]/l[u+c*u];m=p;do x=p-m,l[x+c*f]=x<=u?0:l[x+c*f]-l[x+c*u]*M;while(--m)}}while(--v);if(h.z=l[2*c+3]/l[2*c+2],h.y=(l[1*c+3]-l[1*c+2]*h.z)/l[1*c+1],h.x=(l[0*c+3]-l[0*c+2]*h.z-l[0*c+1]*h.y)/l[0*c+0],isNaN(h.x)||isNaN(h.y)||isNaN(h.z)||h.x===1/0||h.y===1/0||h.z===1/0)throw"Could not solve equation! Got x=["+h.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return h},a.prototype.e=function(o,h,d){if(d===void 0)return this.elements[h+3*o];this.elements[h+3*o]=d},a.prototype.copy=function(o){for(var h=0;h<o.elements.length;h++)this.elements[h]=o.elements[h];return this},a.prototype.toString=function(){for(var o="",h=",",d=0;d<9;d++)o+=this.elements[d]+h;return o},a.prototype.reverse=function(o){o=o||new a;for(var h=3,d=6,c=[],l=0;l<h*d;l++)c.push(0);var l,u;for(l=0;l<3;l++)for(u=0;u<3;u++)c[l+d*u]=this.elements[l+3*u];c[3+6*0]=1,c[3+6*1]=0,c[3+6*2]=0,c[4+6*0]=0,c[4+6*1]=1,c[4+6*2]=0,c[5+6*0]=0,c[5+6*1]=0,c[5+6*2]=1;var f=3,v=f,g,m=d,p;do{if(l=v-f,c[l+d*l]===0){for(u=l+1;u<v;u++)if(c[l+d*u]!==0){g=m;do p=m-g,c[p+d*l]+=c[p+d*u];while(--g);break}}if(c[l+d*l]!==0)for(u=l+1;u<v;u++){var x=c[l+d*u]/c[l+d*l];g=m;do p=m-g,c[p+d*u]=p<=l?0:c[p+d*u]-c[p+d*l]*x;while(--g)}}while(--f);l=2;do{u=l-1;do{var x=c[l+d*u]/c[l+d*l];g=d;do p=d-g,c[p+d*u]=c[p+d*u]-c[p+d*l]*x;while(--g)}while(u--)}while(--l);l=2;do{var x=1/c[l+d*l];g=d;do p=d-g,c[p+d*l]=c[p+d*l]*x;while(--g)}while(l--);l=2;do{u=2;do{if(p=c[h+u+d*l],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,u,p)}while(u--)}while(l--);return o},a.prototype.setRotationFromQuaternion=function(o){var h=o.x,d=o.y,c=o.z,l=o.w,u=h+h,f=d+d,v=c+c,g=h*u,m=h*f,p=h*v,x=d*f,M=d*v,_=c*v,T=l*u,P=l*f,D=l*v,R=this.elements;return R[3*0+0]=1-(x+_),R[3*0+1]=m-D,R[3*0+2]=p+P,R[3*1+0]=m+D,R[3*1+1]=1-(g+_),R[3*1+2]=M-T,R[3*2+0]=p-P,R[3*2+1]=M+T,R[3*2+2]=1-(g+x),this},a.prototype.transpose=function(o){o=o||new a;for(var h=o.elements,d=this.elements,c=0;c!==3;c++)for(var l=0;l!==3;l++)h[3*c+l]=d[3*l+c];return o}},{"./Vec3":30}],28:[function(e,n,r){n.exports=a;var i=e("./Vec3");function a(u,f,v,g){this.x=u!==void 0?u:0,this.y=f!==void 0?f:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}a.prototype.set=function(u,f,v,g){this.x=u,this.y=f,this.z=v,this.w=g},a.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},a.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},a.prototype.setFromAxisAngle=function(u,f){var v=Math.sin(f*.5);this.x=u.x*v,this.y=u.y*v,this.z=u.z*v,this.w=Math.cos(f*.5)},a.prototype.toAxisAngle=function(u){u=u||new i,this.normalize();var f=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(u.x=this.x,u.y=this.y,u.z=this.z):(u.x=this.x/v,u.y=this.y/v,u.z=this.z/v),[u,f]};var o=new i,h=new i;a.prototype.setFromVectors=function(u,f){if(u.isAntiparallelTo(f)){var v=o,g=h;u.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=u.cross(f);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(u.norm(),2)*Math.pow(f.norm(),2))+u.dot(f),this.normalize()}};var d=new i,c=new i,l=new i;a.prototype.mult=function(u,f){f=f||new a;var v=this.w,g=d,m=c,p=l;return g.set(this.x,this.y,this.z),m.set(u.x,u.y,u.z),f.w=v*u.w-g.dot(m),g.cross(m,p),f.x=v*m.x+u.w*g.x+p.x,f.y=v*m.y+u.w*g.y+p.y,f.z=v*m.z+u.w*g.z+p.z,f},a.prototype.inverse=function(u){var f=this.x,v=this.y,g=this.z,m=this.w;u=u||new a,this.conjugate(u);var p=1/(f*f+v*v+g*g+m*m);return u.x*=p,u.y*=p,u.z*=p,u.w*=p,u},a.prototype.conjugate=function(u){return u=u||new a,u.x=-this.x,u.y=-this.y,u.z=-this.z,u.w=this.w,u},a.prototype.normalize=function(){var u=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);u===0?(this.x=0,this.y=0,this.z=0,this.w=0):(u=1/u,this.x*=u,this.y*=u,this.z*=u,this.w*=u)},a.prototype.normalizeFast=function(){var u=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;u===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=u,this.y*=u,this.z*=u,this.w*=u)},a.prototype.vmult=function(u,f){f=f||new i;var v=u.x,g=u.y,m=u.z,p=this.x,x=this.y,M=this.z,_=this.w,T=_*v+x*m-M*g,P=_*g+M*v-p*m,D=_*m+p*g-x*v,R=-p*v-x*g-M*m;return f.x=T*_+R*-p+P*-M-D*-x,f.y=P*_+R*-x+D*-p-T*-M,f.z=D*_+R*-M+T*-x-P*-p,f},a.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this.w=u.w,this},a.prototype.toEuler=function(u,f){f=f||"YZX";var v,g,m,p=this.x,x=this.y,M=this.z,_=this.w;switch(f){case"YZX":var T=p*x+M*_;if(T>.499&&(v=2*Math.atan2(p,_),g=Math.PI/2,m=0),T<-.499&&(v=-2*Math.atan2(p,_),g=-Math.PI/2,m=0),isNaN(v)){var P=p*p,D=x*x,R=M*M;v=Math.atan2(2*x*_-2*p*M,1-2*D-2*R),g=Math.asin(2*T),m=Math.atan2(2*p*_-2*x*M,1-2*P-2*R)}break;default:throw new Error("Euler order "+f+" not supported yet.")}u.y=v,u.z=g,u.x=m},a.prototype.setFromEuler=function(u,f,v,g){g=g||"XYZ";var m=Math.cos(u/2),p=Math.cos(f/2),x=Math.cos(v/2),M=Math.sin(u/2),_=Math.sin(f/2),T=Math.sin(v/2);return g==="XYZ"?(this.x=M*p*x+m*_*T,this.y=m*_*x-M*p*T,this.z=m*p*T+M*_*x,this.w=m*p*x-M*_*T):g==="YXZ"?(this.x=M*p*x+m*_*T,this.y=m*_*x-M*p*T,this.z=m*p*T-M*_*x,this.w=m*p*x+M*_*T):g==="ZXY"?(this.x=M*p*x-m*_*T,this.y=m*_*x+M*p*T,this.z=m*p*T+M*_*x,this.w=m*p*x-M*_*T):g==="ZYX"?(this.x=M*p*x-m*_*T,this.y=m*_*x+M*p*T,this.z=m*p*T-M*_*x,this.w=m*p*x+M*_*T):g==="YZX"?(this.x=M*p*x+m*_*T,this.y=m*_*x+M*p*T,this.z=m*p*T-M*_*x,this.w=m*p*x-M*_*T):g==="XZY"&&(this.x=M*p*x-m*_*T,this.y=m*_*x-M*p*T,this.z=m*p*T+M*_*x,this.w=m*p*x+M*_*T),this},a.prototype.clone=function(){return new a(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,r){var i=e("./Vec3"),a=e("./Quaternion");n.exports=o;function o(d){d=d||{},this.position=new i,d.position&&this.position.copy(d.position),this.quaternion=new a,d.quaternion&&this.quaternion.copy(d.quaternion)}var h=new a;o.pointToLocalFrame=function(d,c,l,f){var f=f||new i;return l.vsub(d,f),c.conjugate(h),h.vmult(f,f),f},o.prototype.pointToLocal=function(d,c){return o.pointToLocalFrame(this.position,this.quaternion,d,c)},o.pointToWorldFrame=function(d,c,l,f){var f=f||new i;return c.vmult(l,f),f.vadd(d,f),f},o.prototype.pointToWorld=function(d,c){return o.pointToWorldFrame(this.position,this.quaternion,d,c)},o.prototype.vectorToWorldFrame=function(d,l){var l=l||new i;return this.quaternion.vmult(d,l),l},o.vectorToWorldFrame=function(d,c,l){return d.vmult(c,l),l},o.vectorToLocalFrame=function(d,c,l,f){var f=f||new i;return c.w*=-1,c.vmult(l,f),c.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,r){n.exports=a;var i=e("./Mat3");function a(c,l,u){this.x=c||0,this.y=l||0,this.z=u||0}a.ZERO=new a(0,0,0),a.UNIT_X=new a(1,0,0),a.UNIT_Y=new a(0,1,0),a.UNIT_Z=new a(0,0,1),a.prototype.cross=function(c,l){var u=c.x,f=c.y,v=c.z,g=this.x,m=this.y,p=this.z;return l=l||new a,l.x=m*v-p*f,l.y=p*u-g*v,l.z=g*f-m*u,l},a.prototype.set=function(c,l,u){return this.x=c,this.y=l,this.z=u,this},a.prototype.setZero=function(){this.x=this.y=this.z=0},a.prototype.vadd=function(c,l){if(l)l.x=c.x+this.x,l.y=c.y+this.y,l.z=c.z+this.z;else return new a(this.x+c.x,this.y+c.y,this.z+c.z)},a.prototype.vsub=function(c,l){if(l)l.x=this.x-c.x,l.y=this.y-c.y,l.z=this.z-c.z;else return new a(this.x-c.x,this.y-c.y,this.z-c.z)},a.prototype.crossmat=function(){return new i([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},a.prototype.normalize=function(){var c=this.x,l=this.y,u=this.z,f=Math.sqrt(c*c+l*l+u*u);if(f>0){var v=1/f;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return f},a.prototype.unit=function(c){c=c||new a;var l=this.x,u=this.y,f=this.z,v=Math.sqrt(l*l+u*u+f*f);return v>0?(v=1/v,c.x=l*v,c.y=u*v,c.z=f*v):(c.x=1,c.y=0,c.z=0),c},a.prototype.norm=function(){var c=this.x,l=this.y,u=this.z;return Math.sqrt(c*c+l*l+u*u)},a.prototype.length=a.prototype.norm,a.prototype.norm2=function(){return this.dot(this)},a.prototype.lengthSquared=a.prototype.norm2,a.prototype.distanceTo=function(c){var l=this.x,u=this.y,f=this.z,v=c.x,g=c.y,m=c.z;return Math.sqrt((v-l)*(v-l)+(g-u)*(g-u)+(m-f)*(m-f))},a.prototype.distanceSquared=function(c){var l=this.x,u=this.y,f=this.z,v=c.x,g=c.y,m=c.z;return(v-l)*(v-l)+(g-u)*(g-u)+(m-f)*(m-f)},a.prototype.mult=function(c,l){l=l||new a;var u=this.x,f=this.y,v=this.z;return l.x=c*u,l.y=c*f,l.z=c*v,l},a.prototype.scale=a.prototype.mult,a.prototype.dot=function(c){return this.x*c.x+this.y*c.y+this.z*c.z},a.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},a.prototype.negate=function(c){return c=c||new a,c.x=-this.x,c.y=-this.y,c.z=-this.z,c};var o=new a,h=new a;a.prototype.tangents=function(c,l){var u=this.norm();if(u>0){var f=o,v=1/u;f.set(this.x*v,this.y*v,this.z*v);var g=h;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,c)):(g.set(0,1,0),f.cross(g,c)),f.cross(c,l)}else c.set(1,0,0),l.set(0,1,0)},a.prototype.toString=function(){return this.x+","+this.y+","+this.z},a.prototype.toArray=function(){return[this.x,this.y,this.z]},a.prototype.copy=function(c){return this.x=c.x,this.y=c.y,this.z=c.z,this},a.prototype.lerp=function(c,l,u){var f=this.x,v=this.y,g=this.z;u.x=f+(c.x-f)*l,u.y=v+(c.y-v)*l,u.z=g+(c.z-g)*l},a.prototype.almostEquals=function(c,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-c.x)>l||Math.abs(this.y-c.y)>l||Math.abs(this.z-c.z)>l)},a.prototype.almostZero=function(c){return c===void 0&&(c=1e-6),!(Math.abs(this.x)>c||Math.abs(this.y)>c||Math.abs(this.z)>c)};var d=new a;a.prototype.isAntiparallelTo=function(c,l){return this.negate(d),d.almostEquals(c,l)},a.prototype.clone=function(){return new a(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,r){n.exports=l;var i=e("../utils/EventTarget");e("../shapes/Shape");var a=e("../math/Vec3"),o=e("../math/Mat3"),h=e("../math/Quaternion");e("../material/Material");var d=e("../collision/AABB"),c=e("../shapes/Box");function l(E){E=E||{},i.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new a,this.collisionFilterGroup=typeof E.collisionFilterGroup=="number"?E.collisionFilterGroup:1,this.collisionFilterMask=typeof E.collisionFilterMask=="number"?E.collisionFilterMask:1,this.collisionResponse=!0,this.position=new a,E.position&&this.position.copy(E.position),this.previousPosition=new a,this.initPosition=new a,this.velocity=new a,E.velocity&&this.velocity.copy(E.velocity),this.initVelocity=new a,this.force=new a;var F=typeof E.mass=="number"?E.mass:0;this.mass=F,this.invMass=F>0?1/F:0,this.material=E.material||null,this.linearDamping=typeof E.linearDamping=="number"?E.linearDamping:.01,this.type=F<=0?l.STATIC:l.DYNAMIC,typeof E.type==typeof l.STATIC&&(this.type=E.type),this.allowSleep=typeof E.allowSleep<"u"?E.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof E.sleepSpeedLimit<"u"?E.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof E.sleepTimeLimit<"u"?E.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new a,this.quaternion=new h,E.quaternion&&this.quaternion.copy(E.quaternion),this.initQuaternion=new h,this.angularVelocity=new a,E.angularVelocity&&this.angularVelocity.copy(E.angularVelocity),this.initAngularVelocity=new a,this.interpolatedPosition=new a,this.interpolatedQuaternion=new h,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new a,this.invInertia=new a,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new a,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof E.fixedRotation<"u"?E.fixedRotation:!1,this.angularDamping=typeof E.angularDamping<"u"?E.angularDamping:.01,this.aabb=new d,this.aabbNeedsUpdate=!0,this.wlambda=new a,E.shape&&this.addShape(E.shape),this.updateMassProperties()}l.prototype=new i,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var E=this.sleepState;this.sleepState=0,E===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(E){if(this.allowSleep){var F=this.sleepState,U=this.velocity.norm2()+this.angularVelocity.norm2(),Y=Math.pow(this.sleepSpeedLimit,2);F===l.AWAKE&&U<Y?(this.sleepState=l.SLEEPY,this.timeLastSleepy=E,this.dispatchEvent(l.sleepyEvent)):F===l.SLEEPY&&U>Y?this.wakeUp():F===l.SLEEPY&&E-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(E,U){var U=U||new a;return E.vsub(this.position,U),this.quaternion.conjugate().vmult(U,U),U},l.prototype.vectorToLocalFrame=function(E,U){var U=U||new a;return this.quaternion.conjugate().vmult(E,U),U},l.prototype.pointToWorldFrame=function(E,U){var U=U||new a;return this.quaternion.vmult(E,U),U.vadd(this.position,U),U},l.prototype.vectorToWorldFrame=function(E,U){var U=U||new a;return this.quaternion.vmult(E,U),U};var u=new a,f=new h;l.prototype.addShape=function(E,F,U){var Y=new a,W=new h;return F&&Y.copy(F),U&&W.copy(U),this.shapes.push(E),this.shapeOffsets.push(Y),this.shapeOrientations.push(W),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var E=this.shapes,F=this.shapeOffsets,U=E.length,Y=0,W=0;W!==U;W++){var J=E[W];J.updateBoundingSphereRadius();var z=F[W].norm(),I=J.boundingSphereRadius;z+I>Y&&(Y=z+I)}this.boundingRadius=Y};var v=new d;l.prototype.computeAABB=function(){for(var E=this.shapes,F=this.shapeOffsets,U=this.shapeOrientations,Y=E.length,W=u,J=f,z=this.quaternion,I=this.aabb,tt=v,K=0;K!==Y;K++){var B=E[K];U[K].mult(z,J),J.vmult(F[K],W),W.vadd(this.position,W),B.calculateWorldAABB(W,J,tt.lowerBound,tt.upperBound),K===0?I.copy(tt):I.extend(tt)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(E){var F=this.invInertia;if(!(F.x===F.y&&F.y===F.z&&!E)){var U=g,Y=m;U.setRotationFromQuaternion(this.quaternion),U.transpose(Y),U.scale(F,U),U.mmult(Y,this.invInertiaWorld)}};var p=new a,x=new a;l.prototype.applyForce=function(E,F){if(this.type===l.DYNAMIC){var U=p;F.vsub(this.position,U);var Y=x;U.cross(E,Y),this.force.vadd(E,this.force),this.torque.vadd(Y,this.torque)}};var M=new a,_=new a;l.prototype.applyLocalForce=function(E,F){if(this.type===l.DYNAMIC){var U=M,Y=_;this.vectorToWorldFrame(E,U),this.pointToWorldFrame(F,Y),this.applyForce(U,Y)}};var T=new a,P=new a,D=new a;l.prototype.applyImpulse=function(E,F){if(this.type===l.DYNAMIC){var U=T;F.vsub(this.position,U);var Y=P;Y.copy(E),Y.mult(this.invMass,Y),this.velocity.vadd(Y,this.velocity);var W=D;U.cross(E,W),this.invInertiaWorld.vmult(W,W),this.angularVelocity.vadd(W,this.angularVelocity)}};var R=new a,S=new a;l.prototype.applyLocalImpulse=function(E,F){if(this.type===l.DYNAMIC){var U=R,Y=S;this.vectorToWorldFrame(E,U),this.pointToWorldFrame(F,Y),this.applyImpulse(U,Y)}};var y=new a;l.prototype.updateMassProperties=function(){var E=y;this.invMass=this.mass>0?1/this.mass:0;var F=this.inertia,U=this.fixedRotation;this.computeAABB(),E.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),c.calculateInertia(E,this.mass,F),this.invInertia.set(F.x>0&&!U?1/F.x:0,F.y>0&&!U?1/F.y:0,F.z>0&&!U?1/F.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(E,F){var U=new a;return E.vsub(this.position,U),this.angularVelocity.cross(U,F),this.velocity.vadd(F,F),F}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,r){e("./Body");var i=e("../math/Vec3"),a=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),h=e("../objects/WheelInfo");n.exports=d;function d(z){this.chassisBody=z.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof z.indexRightAxis<"u"?z.indexRightAxis:1,this.indexForwardAxis=typeof z.indexForwardAxis<"u"?z.indexForwardAxis:0,this.indexUpAxis=typeof z.indexUpAxis<"u"?z.indexUpAxis:2}new i,new i,new i;var c=new i,l=new i,u=new i;new o,d.prototype.addWheel=function(z){z=z||{};var I=new h(z),tt=this.wheelInfos.length;return this.wheelInfos.push(I),tt},d.prototype.setSteeringValue=function(z,I){var tt=this.wheelInfos[I];tt.steering=z},new i,d.prototype.applyEngineForce=function(z,I){this.wheelInfos[I].engineForce=z},d.prototype.setBrake=function(z,I){this.wheelInfos[I].brake=z},d.prototype.addToWorld=function(z){this.constraints,z.add(this.chassisBody);var I=this;this.preStepCallback=function(){I.updateVehicle(z.dt)},z.addEventListener("preStep",this.preStepCallback),this.world=z},d.prototype.getVehicleAxisWorld=function(z,I){I.set(z===0?1:0,z===1?1:0,z===2?1:0),this.chassisBody.vectorToWorldFrame(I,I)},d.prototype.updateVehicle=function(z){for(var I=this.wheelInfos,tt=I.length,K=this.chassisBody,B=0;B<tt;B++)this.updateWheelTransform(B);this.currentVehicleSpeedKmHour=3.6*K.velocity.norm();var j=new i;this.getVehicleAxisWorld(this.indexForwardAxis,j),j.dot(K.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var B=0;B<tt;B++)this.castRay(I[B]);this.updateSuspension(z);for(var V=new i,A=new i,B=0;B<tt;B++){var C=I[B],H=C.suspensionForce;H>C.maxSuspensionForce&&(H=C.maxSuspensionForce),C.raycastResult.hitNormalWorld.scale(H*z,V),C.raycastResult.hitPointWorld.vsub(K.position,A),K.applyImpulse(V,C.raycastResult.hitPointWorld)}this.updateFriction(z);var Q=new i,nt=new i,X=new i;for(B=0;B<tt;B++){var C=I[B];K.getVelocityAtWorldPoint(C.chassisConnectionPointWorld,X);var rt=1;switch(this.indexUpAxis){case 1:rt=-1;break}if(C.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,nt);var mt=nt.dot(C.raycastResult.hitNormalWorld);C.raycastResult.hitNormalWorld.scale(mt,Q),nt.vsub(Q,nt);var St=nt.dot(X);C.deltaRotation=rt*St*z/C.radius}(C.sliding||!C.isInContact)&&C.engineForce!==0&&C.useCustomSlidingRotationalSpeed&&(C.deltaRotation=(C.engineForce>0?1:-1)*C.customSlidingRotationalSpeed*z),Math.abs(C.brake)>Math.abs(C.engineForce)&&(C.deltaRotation=0),C.rotation+=C.deltaRotation,C.deltaRotation*=.99}},d.prototype.updateSuspension=function(z){for(var I=this.chassisBody,tt=I.mass,K=this.wheelInfos,B=K.length,j=0;j<B;j++){var V=K[j];if(V.isInContact){var A,C=V.suspensionRestLength,H=V.suspensionLength,Q=C-H;A=V.suspensionStiffness*Q*V.clippedInvContactDotSuspension;var nt=V.suspensionRelativeVelocity,X;nt<0?X=V.dampingCompression:X=V.dampingRelaxation,A-=X*nt,V.suspensionForce=A*tt,V.suspensionForce<0&&(V.suspensionForce=0)}else V.suspensionForce=0}},d.prototype.removeFromWorld=function(z){this.constraints,z.remove(this.chassisBody),z.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new i,v=new i;d.prototype.castRay=function(z){var I=f,tt=v;this.updateWheelTransformWorld(z);var K=this.chassisBody,B=-1,j=z.suspensionRestLength+z.radius;z.directionWorld.scale(j,I);var V=z.chassisConnectionPointWorld;V.vadd(I,tt);var A=z.raycastResult;A.reset();var C=K.collisionResponse;K.collisionResponse=!1,this.world.rayTest(V,tt,A),K.collisionResponse=C;var H=A.body;if(z.raycastResult.groundObject=0,H){B=A.distance,z.raycastResult.hitNormalWorld=A.hitNormalWorld,z.isInContact=!0;var Q=A.distance;z.suspensionLength=Q-z.radius;var nt=z.suspensionRestLength-z.maxSuspensionTravel,X=z.suspensionRestLength+z.maxSuspensionTravel;z.suspensionLength<nt&&(z.suspensionLength=nt),z.suspensionLength>X&&(z.suspensionLength=X,z.raycastResult.reset());var rt=z.raycastResult.hitNormalWorld.dot(z.directionWorld),mt=new i;K.getVelocityAtWorldPoint(z.raycastResult.hitPointWorld,mt);var St=z.raycastResult.hitNormalWorld.dot(mt);if(rt>=-.1)z.suspensionRelativeVelocity=0,z.clippedInvContactDotSuspension=1/.1;else{var wt=-1/rt;z.suspensionRelativeVelocity=St*wt,z.clippedInvContactDotSuspension=wt}}else z.suspensionLength=z.suspensionRestLength+0*z.maxSuspensionTravel,z.suspensionRelativeVelocity=0,z.directionWorld.scale(-1,z.raycastResult.hitNormalWorld),z.clippedInvContactDotSuspension=1;return B},d.prototype.updateWheelTransformWorld=function(z){z.isInContact=!1;var I=this.chassisBody;I.pointToWorldFrame(z.chassisConnectionPointLocal,z.chassisConnectionPointWorld),I.vectorToWorldFrame(z.directionLocal,z.directionWorld),I.vectorToWorldFrame(z.axleLocal,z.axleWorld)},d.prototype.updateWheelTransform=function(z){var I=c,tt=l,K=u,B=this.wheelInfos[z];this.updateWheelTransformWorld(B),B.directionLocal.scale(-1,I),tt.copy(B.axleLocal),I.cross(tt,K),K.normalize(),tt.normalize();var j=B.steering,V=new a;V.setFromAxisAngle(I,j);var A=new a;A.setFromAxisAngle(tt,B.rotation);var C=B.worldTransform.quaternion;this.chassisBody.quaternion.mult(V,C),C.mult(A,C),C.normalize();var H=B.worldTransform.position;H.copy(B.directionWorld),H.scale(B.suspensionLength,H),H.vadd(B.chassisConnectionPointWorld,H)};var g=[new i(1,0,0),new i(0,1,0),new i(0,0,1)];d.prototype.getWheelTransformWorld=function(z){return this.wheelInfos[z].worldTransform};var m=new i,p=[],x=[],M=1;d.prototype.updateFriction=function(z){for(var I=m,tt=this.wheelInfos,K=tt.length,B=this.chassisBody,j=x,V=p,A=0;A<K;A++){var C=tt[A],H=C.raycastResult.body;C.sideImpulse=0,C.forwardImpulse=0,j[A]||(j[A]=new i),V[A]||(V[A]=new i)}for(var A=0;A<K;A++){var C=tt[A],H=C.raycastResult.body;if(H){var Q=V[A],nt=this.getWheelTransformWorld(A);nt.vectorToWorldFrame(g[this.indexRightAxis],Q);var X=C.raycastResult.hitNormalWorld,rt=Q.dot(X);X.scale(rt,I),Q.vsub(I,Q),Q.normalize(),X.cross(Q,j[A]),j[A].normalize(),C.sideImpulse=J(B,C.raycastResult.hitPointWorld,H,C.raycastResult.hitPointWorld,Q),C.sideImpulse*=M}}var mt=1,St=.5;this.sliding=!1;for(var A=0;A<K;A++){var C=tt[A],H=C.raycastResult.body,wt=0;if(C.slipInfo=1,H){var N=0,ft=C.brake?C.brake:N;wt=D(B,H,C.raycastResult.hitPointWorld,j[A],ft),wt+=C.engineForce*z;var ut=ft/wt;C.slipInfo*=ut}if(C.forwardImpulse=0,C.skidInfo=1,H){C.skidInfo=1;var Xt=C.suspensionForce*z*C.frictionSlip,xt=Xt,ne=Xt*xt;C.forwardImpulse=wt;var vt=C.forwardImpulse*St,L=C.sideImpulse*mt,w=vt*vt+L*L;if(C.sliding=!1,w>ne){this.sliding=!0,C.sliding=!0;var ut=Xt/Math.sqrt(w);C.skidInfo*=ut}}}if(this.sliding)for(var A=0;A<K;A++){var C=tt[A];C.sideImpulse!==0&&C.skidInfo<1&&(C.forwardImpulse*=C.skidInfo,C.sideImpulse*=C.skidInfo)}for(var A=0;A<K;A++){var C=tt[A],Z=new i;if(Z.copy(C.raycastResult.hitPointWorld),C.forwardImpulse!==0){var ct=new i;j[A].scale(C.forwardImpulse,ct),B.applyImpulse(ct,Z)}if(C.sideImpulse!==0){var H=C.raycastResult.body,ht=new i;ht.copy(C.raycastResult.hitPointWorld);var ot=new i;V[A].scale(C.sideImpulse,ot),B.pointToLocalFrame(Z,Z),Z["xyz"[this.indexUpAxis]]*=C.rollInfluence,B.pointToWorldFrame(Z,Z),B.applyImpulse(ot,Z),ot.scale(-1,ot),H.applyImpulse(ot,ht)}}};var _=new i,T=new i,P=new i;function D(z,I,tt,K,B){var j=0,V=tt,A=_,C=T,H=P;z.getVelocityAtWorldPoint(V,A),I.getVelocityAtWorldPoint(V,C),A.vsub(C,H);var Q=K.dot(H),nt=F(z,tt,K),X=F(I,tt,K),rt=1,mt=rt/(nt+X);return j=-Q*mt,B<j&&(j=B),j<-B&&(j=-B),j}var R=new i,S=new i,y=new i,E=new i;function F(z,I,tt){var K=R,B=S,j=y,V=E;return I.vsub(z.position,K),K.cross(tt,B),z.invInertiaWorld.vmult(B,V),V.cross(K,j),z.invMass+tt.dot(j)}var U=new i,Y=new i,W=new i;function J(z,I,tt,K,B,rt){var V=B.norm2();if(V>1.1)return 0;var A=U,C=Y,H=W;z.getVelocityAtWorldPoint(I,A),tt.getVelocityAtWorldPoint(K,C),A.vsub(C,H);var Q=B.dot(H),nt=.2,X=1/(z.invMass+tt.invMass),rt=-nt*Q*X;return rt}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,r){var i=e("./Body"),a=e("../shapes/Sphere"),o=e("../shapes/Box"),h=e("../math/Vec3"),d=e("../constraints/HingeConstraint");n.exports=c;function c(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new h(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var v=new o(new h(5,2,.5));this.chassisBody=new i(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}c.prototype.addWheel=function(f){f=f||{};var v=f.body;v||(v=new i(1,new a(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new h;var g=typeof f.position<"u"?f.position.clone():new h,m=new h;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var p=typeof f.axis<"u"?f.axis.clone():new h(0,1,0);this.wheelAxes.push(p);var x=new d(this.chassisBody,v,{pivotA:g,axisA:p,pivotB:h.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(x),this.wheelBodies.length-1},c.prototype.setSteeringValue=function(f,v){var g=this.wheelAxes[v],m=Math.cos(f),p=Math.sin(f),x=g.x,M=g.y;this.constraints[v].axisA.set(m*x-p*M,p*x+m*M,0)},c.prototype.setMotorSpeed=function(f,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=f},c.prototype.disableMotor=function(f){var v=this.constraints[f];v.disableMotor()};var l=new h;c.prototype.setWheelForce=function(f,v){this.wheelForces[v]=f},c.prototype.applyWheelForce=function(f,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],p=m.torque;g.scale(f,l),m.vectorToWorldFrame(l,l),p.vadd(l,p)},c.prototype.addToWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.add(g[m]);for(var m=0;m<v.length;m++)f.addConstraint(v[m]);f.addEventListener("preStep",this._update.bind(this))},c.prototype._update=function(){for(var f=this.wheelForces,v=0;v<f.length;v++)this.applyWheelForce(f[v],v)},c.prototype.removeFromWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.remove(g[m]);for(var m=0;m<v.length;m++)f.removeConstraint(v[m])};var u=new h;c.prototype.getWheelSpeed=function(f){var v=this.wheelAxes[f],g=this.wheelBodies[f],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,u),m.dot(u)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,r){n.exports=a,e("../shapes/Shape");var i=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function a(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}a.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},a.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new i;a.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,p=v.id,x=this.smoothingRadius*this.smoothingRadius,M=o,_=0;_!==m;_++){var T=this.particles[_];T.position.vsub(v.position,M),p!==T.id&&M.norm2()<x&&g.push(T)}};var h=new i,d=new i,c=new i,l=new i,u=new i,f=new i;a.prototype.update=function(){for(var v=this.particles.length,g=h,m=this.speedOfSound,p=this.eps,x=0;x!==v;x++){var M=this.particles[x],_=this.neighbors[x];_.length=0,this.getNeighbors(M,_),_.push(this.particles[x]);for(var T=_.length,P=0,D=0;D!==T;D++){M.position.vsub(_[D].position,g);var R=g.norm(),S=this.w(R);P+=_[D].mass*S}this.densities[x]=P,this.pressures[x]=m*m*(this.densities[x]-this.density)}for(var y=d,E=c,F=l,U=u,Y=f,x=0;x!==v;x++){var W=this.particles[x];y.set(0,0,0),E.set(0,0,0);for(var J,z,_=this.neighbors[x],T=_.length,D=0;D!==T;D++){var I=_[D];W.position.vsub(I.position,U);var tt=U.norm();J=-I.mass*(this.pressures[x]/(this.densities[x]*this.densities[x]+p)+this.pressures[D]/(this.densities[D]*this.densities[D]+p)),this.gradw(U,F),F.mult(J,F),y.vadd(F,y),I.velocity.vsub(W.velocity,Y),Y.mult(1/(1e-4+this.densities[x]*this.densities[D])*this.viscosity*I.mass,Y),z=this.nablaw(tt),Y.mult(z,Y),E.vadd(Y,E)}E.mult(W.mass,E),y.mult(W.mass,y),W.force.vadd(E,W.force),W.force.vadd(y,W.force)}},a.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},a.prototype.gradw=function(v,g){var m=v.norm(),p=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),g)},a.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,r){var i=e("../math/Vec3");n.exports=a;function a(x,M,_){_=_||{},this.restLength=typeof _.restLength=="number"?_.restLength:1,this.stiffness=_.stiffness||100,this.damping=_.damping||1,this.bodyA=x,this.bodyB=M,this.localAnchorA=new i,this.localAnchorB=new i,_.localAnchorA&&this.localAnchorA.copy(_.localAnchorA),_.localAnchorB&&this.localAnchorB.copy(_.localAnchorB),_.worldAnchorA&&this.setWorldAnchorA(_.worldAnchorA),_.worldAnchorB&&this.setWorldAnchorB(_.worldAnchorB)}a.prototype.setWorldAnchorA=function(x){this.bodyA.pointToLocalFrame(x,this.localAnchorA)},a.prototype.setWorldAnchorB=function(x){this.bodyB.pointToLocalFrame(x,this.localAnchorB)},a.prototype.getWorldAnchorA=function(x){this.bodyA.pointToWorldFrame(this.localAnchorA,x)},a.prototype.getWorldAnchorB=function(x){this.bodyB.pointToWorldFrame(this.localAnchorB,x)};var o=new i,h=new i,d=new i,c=new i,l=new i,u=new i,f=new i,v=new i,g=new i,m=new i,p=new i;a.prototype.applyForce=function(){var x=this.stiffness,M=this.damping,_=this.restLength,T=this.bodyA,P=this.bodyB,D=o,R=h,S=d,y=c,E=p,F=l,U=u,Y=f,W=v,J=g,z=m;this.getWorldAnchorA(F),this.getWorldAnchorB(U),F.vsub(T.position,Y),U.vsub(P.position,W),U.vsub(F,D);var I=D.norm();R.copy(D),R.normalize(),P.velocity.vsub(T.velocity,S),P.angularVelocity.cross(W,E),S.vadd(E,S),T.angularVelocity.cross(Y,E),S.vsub(E,S),R.mult(-x*(I-_)-M*S.dot(R),y),T.force.vsub(y,T.force),P.force.vadd(y,P.force),Y.cross(y,J),W.cross(y,z),T.torque.vsub(J,T.torque),P.torque.vadd(z,P.torque)}},{"../math/Vec3":30}],36:[function(e,n,r){var i=e("../math/Vec3"),a=e("../math/Transform"),o=e("../collision/RaycastResult"),h=e("../utils/Utils");n.exports=d;function d(u){u=h.defaults(u,{chassisConnectionPointLocal:new i,chassisConnectionPointWorld:new i,directionLocal:new i,directionWorld:new i,axleLocal:new i,axleWorld:new i,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=u.maxSuspensionTravel,this.customSlidingRotationalSpeed=u.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=u.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=u.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=u.chassisConnectionPointWorld.clone(),this.directionLocal=u.directionLocal.clone(),this.directionWorld=u.directionWorld.clone(),this.axleLocal=u.axleLocal.clone(),this.axleWorld=u.axleWorld.clone(),this.suspensionRestLength=u.suspensionRestLength,this.suspensionMaxLength=u.suspensionMaxLength,this.radius=u.radius,this.suspensionStiffness=u.suspensionStiffness,this.dampingCompression=u.dampingCompression,this.dampingRelaxation=u.dampingRelaxation,this.frictionSlip=u.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=u.rollInfluence,this.maxSuspensionForce=u.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=u.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new a,this.isInContact=!1}var l=new i,c=new i,l=new i;d.prototype.updateWheel=function(u){var f=this.raycastResult;if(this.isInContact){var v=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(u.position,c),u.getVelocityAtWorldPoint(c,l);var g=f.hitNormalWorld.dot(l);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,r){n.exports=h;var i=e("./Shape"),a=e("../math/Vec3"),o=e("./ConvexPolyhedron");function h(l){i.call(this),this.type=i.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}h.prototype=new i,h.prototype.constructor=h,h.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,u=this.halfExtents.y,f=this.halfExtents.z,v=a,g=[new v(-l,-u,-f),new v(l,-u,-f),new v(l,u,-f),new v(-l,u,-f),new v(-l,-u,f),new v(l,-u,f),new v(l,u,f),new v(-l,u,f)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var p=new o(g,m);this.convexPolyhedronRepresentation=p,p.material=this.material},h.prototype.calculateLocalInertia=function(l,u){return u=u||new a,h.calculateInertia(this.halfExtents,l,u),u},h.calculateInertia=function(l,u,f){var v=l;f.x=1/12*u*(2*v.y*2*v.y+2*v.z*2*v.z),f.y=1/12*u*(2*v.x*2*v.x+2*v.z*2*v.z),f.z=1/12*u*(2*v.y*2*v.y+2*v.x*2*v.x)},h.prototype.getSideNormals=function(l,u){var f=l,v=this.halfExtents;if(f[0].set(v.x,0,0),f[1].set(0,v.y,0),f[2].set(0,0,v.z),f[3].set(-v.x,0,0),f[4].set(0,-v.y,0),f[5].set(0,0,-v.z),u!==void 0)for(var g=0;g!==f.length;g++)u.vmult(f[g],f[g]);return f},h.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},h.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var d=new a;new a,h.prototype.forEachWorldCorner=function(l,u,f){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)d.set(g[m][0],g[m][1],g[m][2]),u.vmult(d,d),l.vadd(d,d),f(d.x,d.y,d.z)};var c=[new a,new a,new a,new a,new a,new a,new a,new a];h.prototype.calculateWorldAABB=function(l,u,f,v){var g=this.halfExtents;c[0].set(g.x,g.y,g.z),c[1].set(-g.x,g.y,g.z),c[2].set(-g.x,-g.y,g.z),c[3].set(-g.x,-g.y,-g.z),c[4].set(g.x,-g.y,-g.z),c[5].set(g.x,g.y,-g.z),c[6].set(-g.x,g.y,-g.z),c[7].set(g.x,-g.y,g.z);var m=c[0];u.vmult(m,m),l.vadd(m,m),v.copy(m),f.copy(m);for(var p=1;p<8;p++){var m=c[p];u.vmult(m,m),l.vadd(m,m);var x=m.x,M=m.y,_=m.z;x>v.x&&(v.x=x),M>v.y&&(v.y=M),_>v.z&&(v.z=_),x<f.x&&(f.x=x),M<f.y&&(f.y=M),_<f.z&&(f.z=_)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,r){n.exports=h;var i=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function h(B,j,V){i.call(this),this.type=i.types.CONVEXPOLYHEDRON,this.vertices=B||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=j||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=V?V.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}h.prototype=new i,h.prototype.constructor=h;var d=new a;h.prototype.computeEdges=function(){var B=this.faces,j=this.vertices;j.length;var V=this.uniqueEdges;V.length=0;for(var A=d,C=0;C!==B.length;C++)for(var H=B[C],Q=H.length,nt=0;nt!==Q;nt++){var X=(nt+1)%Q;j[H[nt]].vsub(j[H[X]],A),A.normalize();for(var rt=!1,mt=0;mt!==V.length;mt++)if(V[mt].almostEquals(A)||V[mt].almostEquals(A)){rt=!0;break}rt||V.push(A.clone())}},h.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var B=0;B<this.faces.length;B++){for(var j=0;j<this.faces[B].length;j++)if(!this.vertices[this.faces[B][j]])throw new Error("Vertex "+this.faces[B][j]+" not found!");var V=this.faceNormals[B]||new a;this.getFaceNormal(B,V),V.negate(V),this.faceNormals[B]=V;var A=this.vertices[this.faces[B][0]];if(V.dot(A)<0){console.error(".faceNormals["+B+"] = Vec3("+V.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var j=0;j<this.faces[B].length;j++)console.warn(".vertices["+this.faces[B][j]+"] = Vec3("+this.vertices[this.faces[B][j]].toString()+")")}}};var c=new a,l=new a;h.computeNormal=function(B,j,V,A){j.vsub(B,l),V.vsub(j,c),c.cross(l,A),A.isZero()||A.normalize()},h.prototype.getFaceNormal=function(B,j){var V=this.faces[B],A=this.vertices[V[0]],C=this.vertices[V[1]],H=this.vertices[V[2]];return h.computeNormal(A,C,H,j)};var u=new a;h.prototype.clipAgainstHull=function(B,j,V,A,C,H,Q,nt,X){for(var rt=u,mt=-1,St=-Number.MAX_VALUE,wt=0;wt<V.faces.length;wt++){rt.copy(V.faceNormals[wt]),C.vmult(rt,rt);var N=rt.dot(H);N>St&&(St=N,mt=wt)}for(var ft=[],ut=V.faces[mt],Xt=ut.length,xt=0;xt<Xt;xt++){var ne=V.vertices[ut[xt]],vt=new a;vt.copy(ne),C.vmult(vt,vt),A.vadd(vt,vt),ft.push(vt)}mt>=0&&this.clipFaceAgainstHull(H,B,j,ft,Q,nt,X)};var f=new a,v=new a,g=new a,m=new a,p=new a,x=new a;h.prototype.findSeparatingAxis=function(B,j,V,A,C,H,Q,nt){var X=f,rt=v,mt=g,St=m,wt=p,N=x,ft=Number.MAX_VALUE,ut=this;if(ut.uniqueAxes)for(var xt=0;xt!==ut.uniqueAxes.length;xt++){V.vmult(ut.uniqueAxes[xt],X);var vt=ut.testSepAxis(X,B,j,V,A,C);if(vt===!1)return!1;vt<ft&&(ft=vt,H.copy(X))}else for(var Xt=Q?Q.length:ut.faces.length,xt=0;xt<Xt;xt++){var ne=Q?Q[xt]:xt;X.copy(ut.faceNormals[ne]),V.vmult(X,X);var vt=ut.testSepAxis(X,B,j,V,A,C);if(vt===!1)return!1;vt<ft&&(ft=vt,H.copy(X))}if(B.uniqueAxes)for(var xt=0;xt!==B.uniqueAxes.length;xt++){C.vmult(B.uniqueAxes[xt],rt);var vt=ut.testSepAxis(rt,B,j,V,A,C);if(vt===!1)return!1;vt<ft&&(ft=vt,H.copy(rt))}else for(var L=nt?nt.length:B.faces.length,xt=0;xt<L;xt++){var ne=nt?nt[xt]:xt;rt.copy(B.faceNormals[ne]),C.vmult(rt,rt);var vt=ut.testSepAxis(rt,B,j,V,A,C);if(vt===!1)return!1;vt<ft&&(ft=vt,H.copy(rt))}for(var w=0;w!==ut.uniqueEdges.length;w++){V.vmult(ut.uniqueEdges[w],St);for(var Z=0;Z!==B.uniqueEdges.length;Z++)if(C.vmult(B.uniqueEdges[Z],wt),St.cross(wt,N),!N.almostZero()){N.normalize();var ct=ut.testSepAxis(N,B,j,V,A,C);if(ct===!1)return!1;ct<ft&&(ft=ct,H.copy(N))}}return A.vsub(j,mt),mt.dot(H)>0&&H.negate(H),!0};var M=[],_=[];h.prototype.testSepAxis=function(B,j,V,A,C,H){var Q=this;h.project(Q,B,V,A,M),h.project(j,B,C,H,_);var nt=M[0],X=M[1],rt=_[0],mt=_[1],St=nt-mt,wt=rt-X,N=St<wt?St:wt;return N};var T=new a,P=new a;h.prototype.calculateLocalInertia=function(B,j){this.computeLocalAABB(T,P);var V=P.x-T.x,A=P.y-T.y,C=P.z-T.z;j.x=1/12*B*(2*A*2*A+2*C*2*C),j.y=1/12*B*(2*V*2*V+2*C*2*C),j.z=1/12*B*(2*A*2*A+2*V*2*V)},h.prototype.getPlaneConstantOfFace=function(B){var j=this.faces[B],V=this.faceNormals[B],A=this.vertices[j[0]],C=-V.dot(A);return C};var D=new a,R=new a,S=new a,y=new a,E=new a,F=new a,U=new a,Y=new a;h.prototype.clipFaceAgainstHull=function(B,j,V,A,C,H,Q){for(var nt=D,X=R,rt=S,mt=y,St=E,wt=F,N=U,ft=Y,ut=this,Xt=[],xt=A,ne=Xt,vt=-1,L=Number.MAX_VALUE,w=0;w<ut.faces.length;w++){nt.copy(ut.faceNormals[w]),V.vmult(nt,nt);var Z=nt.dot(B);Z<L&&(L=Z,vt=w)}if(!(vt<0)){var ct=ut.faces[vt];ct.connectedFaces=[];for(var ht=0;ht<ut.faces.length;ht++)for(var ot=0;ot<ut.faces[ht].length;ot++)ct.indexOf(ut.faces[ht][ot])!==-1&&ht!==vt&&ct.connectedFaces.indexOf(ht)===-1&&ct.connectedFaces.push(ht);xt.length;for(var Et=ct.length,bt=0;bt<Et;bt++){var Ft=ut.vertices[ct[bt]],he=ut.vertices[ct[(bt+1)%Et]];Ft.vsub(he,X),rt.copy(X),V.vmult(rt,rt),j.vadd(rt,rt),mt.copy(this.faceNormals[vt]),V.vmult(mt,mt),j.vadd(mt,mt),rt.cross(mt,St),St.negate(St),wt.copy(Ft),V.vmult(wt,wt),j.vadd(wt,wt),-wt.dot(St);var Zt;{var Mt=ct.connectedFaces[bt];N.copy(this.faceNormals[Mt]);var Gt=this.getPlaneConstantOfFace(Mt);ft.copy(N),V.vmult(ft,ft);var Zt=Gt-ft.dot(j)}for(this.clipFaceAgainstPlane(xt,ne,ft,Zt);xt.length;)xt.shift();for(;ne.length;)xt.push(ne.shift())}N.copy(this.faceNormals[vt]);var Gt=this.getPlaneConstantOfFace(vt);ft.copy(N),V.vmult(ft,ft);for(var Zt=Gt-ft.dot(j),ht=0;ht<xt.length;ht++){var Kt=ft.dot(xt[ht])+Zt;if(Kt<=C&&(console.log("clamped: depth="+Kt+" to minDist="+(C+"")),Kt=C),Kt<=H){var Wt=xt[ht];if(Kt<=0){var ue={point:Wt,normal:ft,depth:Kt};Q.push(ue)}}}}},h.prototype.clipFaceAgainstPlane=function(B,j,V,A){var C,H,Q=B.length;if(Q<2)return j;var nt=B[B.length-1],X=B[0];C=V.dot(nt)+A;for(var rt=0;rt<Q;rt++){if(X=B[rt],H=V.dot(X)+A,C<0)if(H<0){var mt=new a;mt.copy(X),j.push(mt)}else{var mt=new a;nt.lerp(X,C/(C-H),mt),j.push(mt)}else if(H<0){var mt=new a;nt.lerp(X,C/(C-H),mt),j.push(mt),j.push(X)}nt=X,C=H}return j},h.prototype.computeWorldVertices=function(B,j){for(var V=this.vertices.length;this.worldVertices.length<V;)this.worldVertices.push(new a);for(var A=this.vertices,C=this.worldVertices,H=0;H!==V;H++)j.vmult(A[H],C[H]),B.vadd(C[H],C[H]);this.worldVerticesNeedsUpdate=!1},new a,h.prototype.computeLocalAABB=function(B,j){var V=this.vertices.length,A=this.vertices;B.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),j.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var C=0;C<V;C++){var H=A[C];H.x<B.x?B.x=H.x:H.x>j.x&&(j.x=H.x),H.y<B.y?B.y=H.y:H.y>j.y&&(j.y=H.y),H.z<B.z?B.z=H.z:H.z>j.z&&(j.z=H.z)}},h.prototype.computeWorldFaceNormals=function(B){for(var j=this.faceNormals.length;this.worldFaceNormals.length<j;)this.worldFaceNormals.push(new a);for(var V=this.faceNormals,A=this.worldFaceNormals,C=0;C!==j;C++)B.vmult(V[C],A[C]);this.worldFaceNormalsNeedsUpdate=!1},h.prototype.updateBoundingSphereRadius=function(){for(var B=0,j=this.vertices,V=0,A=j.length;V!==A;V++){var C=j[V].norm2();C>B&&(B=C)}this.boundingSphereRadius=Math.sqrt(B)};var W=new a;h.prototype.calculateWorldAABB=function(B,j,V,A){for(var C=this.vertices.length,H=this.vertices,Q,nt,X,rt,mt,St,wt=0;wt<C;wt++){W.copy(H[wt]),j.vmult(W,W),B.vadd(W,W);var N=W;N.x<Q||Q===void 0?Q=N.x:(N.x>rt||rt===void 0)&&(rt=N.x),N.y<nt||nt===void 0?nt=N.y:(N.y>mt||mt===void 0)&&(mt=N.y),N.z<X||X===void 0?X=N.z:(N.z>St||St===void 0)&&(St=N.z)}V.set(Q,nt,X),A.set(rt,mt,St)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.prototype.getAveragePointLocal=function(B){B=B||new a;for(var j=this.vertices.length,V=this.vertices,A=0;A<j;A++)B.vadd(V[A],B);return B.mult(1/j,B),B},h.prototype.transformAllPoints=function(B,j){var V=this.vertices.length,A=this.vertices;if(j){for(var C=0;C<V;C++){var H=A[C];j.vmult(H,H)}for(var C=0;C<this.faceNormals.length;C++){var H=this.faceNormals[C];j.vmult(H,H)}}if(B)for(var C=0;C<V;C++){var H=A[C];H.vadd(B,H)}};var J=new a,z=new a,I=new a;h.prototype.pointIsInside=function(B){var j=this.vertices.length,V=this.vertices,A=this.faces,C=this.faceNormals,H=null,Q=this.faces.length,nt=J;this.getAveragePointLocal(nt);for(var X=0;X<Q;X++){this.faces[X].length;var j=C[X],rt=V[A[X][0]],mt=z;B.vsub(rt,mt);var St=j.dot(mt),wt=I;nt.vsub(rt,wt);var N=j.dot(wt);if(St<0&&N>0||St>0&&N<0)return!1}return H?1:-1},new a;var tt=new a,K=new a;h.project=function(B,j,V,A,C){var H=B.vertices.length,Q=tt,nt=0,X=0,rt=K,mt=B.vertices;rt.setZero(),o.vectorToLocalFrame(V,A,j,Q),o.pointToLocalFrame(V,A,rt,rt);var St=rt.dot(Q);X=nt=mt[0].dot(Q);for(var wt=1;wt<H;wt++){var N=mt[wt].dot(Q);N>nt&&(nt=N),N<X&&(X=N)}if(X-=St,nt-=St,X>nt){var ft=X;X=nt,nt=ft}C[0]=nt,C[1]=X}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,r){n.exports=h;var i=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function h(d,c,l,u){var f=u,v=[],g=[],m=[],p=[],x=[],M=Math.cos,_=Math.sin;v.push(new a(c*M(0),c*_(0),-l*.5)),p.push(0),v.push(new a(d*M(0),d*_(0),l*.5)),x.push(1);for(var T=0;T<f;T++){var P=2*Math.PI/f*(T+1),D=2*Math.PI/f*(T+.5);T<f-1?(v.push(new a(c*M(P),c*_(P),-l*.5)),p.push(2*T+2),v.push(new a(d*M(P),d*_(P),l*.5)),x.push(2*T+3),m.push([2*T+2,2*T+3,2*T+1,2*T])):m.push([0,1,2*T+1,2*T]),(f%2===1||T<f/2)&&g.push(new a(M(D),_(D),0))}m.push(x),g.push(new a(0,0,1));for(var R=[],T=0;T<p.length;T++)R.push(p[p.length-T-1]);m.push(R),this.type=i.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}h.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,r){var i=e("./Shape"),a=e("./ConvexPolyhedron"),o=e("../math/Vec3"),h=e("../utils/Utils");n.exports=d;function d(c,l){l=h.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=c,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,i.call(this),this.pillarConvex=new a,this.pillarOffset=new o,this.type=i.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}d.prototype=new i,d.prototype.update=function(){this._cachedPillars={}},d.prototype.updateMinValue=function(){for(var c=this.data,l=c[0][0],u=0;u!==c.length;u++)for(var f=0;f!==c[u].length;f++){var v=c[u][f];v<l&&(l=v)}this.minValue=l},d.prototype.updateMaxValue=function(){for(var c=this.data,l=c[0][0],u=0;u!==c.length;u++)for(var f=0;f!==c[u].length;f++){var v=c[u][f];v>l&&(l=v)}this.maxValue=l},d.prototype.setHeightValueAtIndex=function(c,l,u){var f=this.data;f[c][l]=u,this.clearCachedConvexTrianglePillar(c,l,!1),c>0&&(this.clearCachedConvexTrianglePillar(c-1,l,!0),this.clearCachedConvexTrianglePillar(c-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(c,l-1,!0),this.clearCachedConvexTrianglePillar(c,l-1,!1)),l>0&&c>0&&this.clearCachedConvexTrianglePillar(c-1,l-1,!0)},d.prototype.getRectMinMax=function(c,l,u,f,v){v=v||[];for(var g=this.data,m=this.minValue,p=c;p<=u;p++)for(var x=l;x<=f;x++){var M=g[p][x];M>m&&(m=M)}v[0]=this.minValue,v[1]=m},d.prototype.getIndexOfPosition=function(c,l,u,f){var v=this.elementSize,g=this.data,m=Math.floor(c/v),p=Math.floor(l/v);return u[0]=m,u[1]=p,f&&(m<0&&(m=0),p<0&&(p=0),m>=g.length-1&&(m=g.length-1),p>=g[0].length-1&&(p=g[0].length-1)),!(m<0||p<0||m>=g.length-1||p>=g[0].length-1)},d.prototype.getHeightAt=function(c,l,u){var f=[];this.getIndexOfPosition(c,l,f,u);var v=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,v),(v[0]+v[1])/2},d.prototype.getCacheConvexTrianglePillarKey=function(c,l,u){return c+"_"+l+"_"+(u?1:0)},d.prototype.getCachedConvexTrianglePillar=function(c,l,u){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(c,l,u)]},d.prototype.setCachedConvexTrianglePillar=function(c,l,u,f,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(c,l,u)]={convex:f,offset:v}},d.prototype.clearCachedConvexTrianglePillar=function(c,l,u){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(c,l,u)]},d.prototype.getConvexTrianglePillar=function(c,l,u){var f=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(c,l,u);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new a,v=new o,this.pillarConvex=f,this.pillarOffset=v}var g=this.data,m=this.elementSize,p=f.faces;f.vertices.length=6;for(var x=0;x<6;x++)f.vertices[x]||(f.vertices[x]=new o);p.length=5;for(var x=0;x<5;x++)p[x]||(p[x]=[]);var M=f.vertices,_=(Math.min(g[c][l],g[c+1][l],g[c][l+1],g[c+1][l+1])-this.minValue)/2+this.minValue;u?(v.set((c+.75)*m,(l+.75)*m,_),M[0].set(.25*m,.25*m,g[c+1][l+1]-_),M[1].set(-.75*m,.25*m,g[c][l+1]-_),M[2].set(.25*m,-.75*m,g[c+1][l]-_),M[3].set(.25*m,.25*m,-_-1),M[4].set(-.75*m,.25*m,-_-1),M[5].set(.25*m,-.75*m,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(v.set((c+.25)*m,(l+.25)*m,_),M[0].set(-.25*m,-.25*m,g[c][l]-_),M[1].set(.75*m,-.25*m,g[c+1][l]-_),M[2].set(-.25*m,.75*m,g[c][l+1]-_),M[3].set(-.25*m,-.25*m,-_-1),M[4].set(.75*m,-.25*m,-_-1),M[5].set(-.25*m,.75*m,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(c,l,u,f,v)},d.prototype.calculateLocalInertia=function(c,l){return l=l||new o,l.set(0,0,0),l},d.prototype.volume=function(){return Number.MAX_VALUE},d.prototype.calculateWorldAABB=function(c,l,u,f){u.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},d.prototype.updateBoundingSphereRadius=function(){var c=this.data,l=this.elementSize;this.boundingSphereRadius=new o(c.length*l,c[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,r){n.exports=o;var i=e("./Shape"),a=e("../math/Vec3");function o(){i.call(this),this.type=i.types.PARTICLE}o.prototype=new i,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(h,d){return d=d||new a,d.set(0,0,0),d},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(h,d,c,l){c.copy(h),l.copy(h)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,r){n.exports=o;var i=e("./Shape"),a=e("../math/Vec3");function o(){i.call(this),this.type=i.types.PLANE,this.worldNormal=new a,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new i,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(d){var c=this.worldNormal;c.set(0,0,1),d.vmult(c,c),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(d,c){return c=c||new a,c},o.prototype.volume=function(){return Number.MAX_VALUE};var h=new a;o.prototype.calculateWorldAABB=function(d,c,l,u){h.set(0,0,1),c.vmult(h,h);var f=Number.MAX_VALUE;l.set(-f,-f,-f),u.set(f,f,f),h.x===1&&(u.x=d.x),h.y===1&&(u.y=d.y),h.z===1&&(u.z=d.z),h.x===-1&&(l.x=d.x),h.y===-1&&(l.y=d.y),h.z===-1&&(l.z=d.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,r){n.exports=i;var i=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function i(){this.id=i.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}i.prototype.constructor=i,i.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},i.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},i.prototype.calculateLocalInertia=function(a,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},i.idCounter=0,i.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,r){n.exports=o;var i=e("./Shape"),a=e("../math/Vec3");function o(h){if(i.call(this),this.radius=h!==void 0?Number(h):1,this.type=i.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new i,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(h,d){d=d||new a;var c=2*h*this.radius*this.radius/5;return d.x=c,d.y=c,d.z=c,d},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(h,d,c,l){for(var u=this.radius,f=["x","y","z"],v=0;v<f.length;v++){var g=f[v];c[g]=h[g]-u,l[g]=h[g]+u}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,r){n.exports=c;var i=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),h=e("../collision/AABB"),d=e("../utils/Octree");function c(R,S){i.call(this),this.type=i.types.TRIMESH,this.vertices=new Float32Array(R),this.indices=new Int16Array(S),this.normals=new Float32Array(S.length),this.aabb=new h,this.edges=null,this.scale=new a(1,1,1),this.tree=new d,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}c.prototype=new i,c.prototype.constructor=c;var l=new a;c.prototype.updateTree=function(){var R=this.tree;R.reset(),R.aabb.copy(this.aabb);var S=this.scale;R.aabb.lowerBound.x*=1/S.x,R.aabb.lowerBound.y*=1/S.y,R.aabb.lowerBound.z*=1/S.z,R.aabb.upperBound.x*=1/S.x,R.aabb.upperBound.y*=1/S.y,R.aabb.upperBound.z*=1/S.z;for(var y=new h,E=new a,F=new a,U=new a,Y=[E,F,U],W=0;W<this.indices.length/3;W++){var J=W*3;this._getUnscaledVertex(this.indices[J],E),this._getUnscaledVertex(this.indices[J+1],F),this._getUnscaledVertex(this.indices[J+2],U),y.setFromPoints(Y),R.insert(y,W)}R.removeEmptyNodes()};var u=new h;c.prototype.getTrianglesInAABB=function(R,S){u.copy(R);var y=this.scale,E=y.x,F=y.y,U=y.z,Y=u.lowerBound,W=u.upperBound;return Y.x/=E,Y.y/=F,Y.z/=U,W.x/=E,W.y/=F,W.z/=U,this.tree.aabbQuery(u,S)},c.prototype.setScale=function(R){var S=this.scale.x===this.scale.y===this.scale.z,y=R.x===R.y===R.z;S&&y||this.updateNormals(),this.scale.copy(R),this.updateAABB(),this.updateBoundingSphereRadius()},c.prototype.updateNormals=function(){for(var R=l,S=this.normals,y=0;y<this.indices.length/3;y++){var E=y*3,F=this.indices[E],U=this.indices[E+1],Y=this.indices[E+2];this.getVertex(F,p),this.getVertex(U,x),this.getVertex(Y,M),c.computeNormal(x,p,M,R),S[E]=R.x,S[E+1]=R.y,S[E+2]=R.z}},c.prototype.updateEdges=function(){for(var R={},S=function(J,z){var I=F<U?F+"_"+U:U+"_"+F;R[I]=!0},y=0;y<this.indices.length/3;y++){var E=y*3,F=this.indices[E],U=this.indices[E+1];this.indices[E+2],S(),S(),S()}var Y=Object.keys(R);this.edges=new Int16Array(Y.length*2);for(var y=0;y<Y.length;y++){var W=Y[y].split("_");this.edges[2*y]=parseInt(W[0],10),this.edges[2*y+1]=parseInt(W[1],10)}},c.prototype.getEdgeVertex=function(R,S,y){var E=this.edges[R*2+(S?1:0)];this.getVertex(E,y)};var f=new a,v=new a;c.prototype.getEdgeVector=function(R,S){var y=f,E=v;this.getEdgeVertex(R,0,y),this.getEdgeVertex(R,1,E),E.vsub(y,S)};var g=new a,m=new a;c.computeNormal=function(R,S,y,E){S.vsub(R,m),y.vsub(S,g),g.cross(m,E),E.isZero()||E.normalize()};var p=new a,x=new a,M=new a;c.prototype.getVertex=function(R,S){var y=this.scale;return this._getUnscaledVertex(R,S),S.x*=y.x,S.y*=y.y,S.z*=y.z,S},c.prototype._getUnscaledVertex=function(R,S){var y=R*3,E=this.vertices;return S.set(E[y],E[y+1],E[y+2])},c.prototype.getWorldVertex=function(R,S,y,E){return this.getVertex(R,E),o.pointToWorldFrame(S,y,E,E),E},c.prototype.getTriangleVertices=function(R,S,y,E){var F=R*3;this.getVertex(this.indices[F],S),this.getVertex(this.indices[F+1],y),this.getVertex(this.indices[F+2],E)},c.prototype.getNormal=function(R,S){var y=R*3;return S.set(this.normals[y],this.normals[y+1],this.normals[y+2])};var _=new h;c.prototype.calculateLocalInertia=function(R,S){this.computeLocalAABB(_);var y=_.upperBound.x-_.lowerBound.x,E=_.upperBound.y-_.lowerBound.y,F=_.upperBound.z-_.lowerBound.z;return S.set(1/12*R*(2*E*2*E+2*F*2*F),1/12*R*(2*y*2*y+2*F*2*F),1/12*R*(2*E*2*E+2*y*2*y))};var T=new a;c.prototype.computeLocalAABB=function(R){var S=R.lowerBound,y=R.upperBound,E=this.vertices.length;this.vertices;var F=T;this.getVertex(0,F),S.copy(F),y.copy(F);for(var U=0;U!==E;U++)this.getVertex(U,F),F.x<S.x?S.x=F.x:F.x>y.x&&(y.x=F.x),F.y<S.y?S.y=F.y:F.y>y.y&&(y.y=F.y),F.z<S.z?S.z=F.z:F.z>y.z&&(y.z=F.z)},c.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},c.prototype.updateBoundingSphereRadius=function(){for(var R=0,S=this.vertices,y=new a,E=0,F=S.length/3;E!==F;E++){this.getVertex(E,y);var U=y.norm2();U>R&&(R=U)}this.boundingSphereRadius=Math.sqrt(R)},new a;var P=new o,D=new h;c.prototype.calculateWorldAABB=function(R,S,y,E){var F=P,U=D;F.position=R,F.quaternion=S,this.aabb.toWorldFrame(F,U),y.copy(U.lowerBound),E.copy(U.upperBound)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.createTorus=function(R,S,y,E,F){R=R||1,S=S||.5,y=y||8,E=E||6,F=F||Math.PI*2;for(var U=[],Y=[],W=0;W<=y;W++)for(var J=0;J<=E;J++){var z=J/E*F,I=W/y*Math.PI*2,tt=(R+S*Math.cos(I))*Math.cos(z),K=(R+S*Math.cos(I))*Math.sin(z),B=S*Math.sin(I);U.push(tt,K,B)}for(var W=1;W<=y;W++)for(var J=1;J<=E;J++){var j=(E+1)*W+J-1,V=(E+1)*(W-1)+J-1,A=(E+1)*(W-1)+J,C=(E+1)*W+J;Y.push(j,V,C),Y.push(V,A,C)}return new c(U,Y)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,r){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var i=e("./Solver");function a(){i.call(this),this.iterations=10,this.tolerance=1e-7}a.prototype=new i;var o=[],h=[],d=[];a.prototype.solve=function(c,l){var u=0,f=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,p=l.bodies,x=p.length,M=c,_,T,P,D,R,S;if(m!==0)for(var y=0;y!==x;y++)p[y].updateSolveMassProperties();var E=h,F=d,U=o;E.length=m,F.length=m,U.length=m;for(var y=0;y!==m;y++){var Y=g[y];U[y]=0,F[y]=Y.computeB(M),E[y]=1/Y.computeC()}if(m!==0){for(var y=0;y!==x;y++){var W=p[y],J=W.vlambda,z=W.wlambda;J.set(0,0,0),z&&z.set(0,0,0)}for(u=0;u!==f;u++){D=0;for(var I=0;I!==m;I++){var Y=g[I];_=F[I],T=E[I],S=U[I],R=Y.computeGWlambda(),P=T*(_-R-Y.eps*S),S+P<Y.minForce?P=Y.minForce-S:S+P>Y.maxForce&&(P=Y.maxForce-S),U[I]+=P,D+=P>0?P:-P,Y.addToWlambda(P)}if(D*D<v)break}for(var y=0;y!==x;y++){var W=p[y],tt=W.velocity,K=W.angularVelocity;tt.vadd(W.vlambda,tt),K&&K.vadd(W.wlambda,K)}}return u}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,r){n.exports=i;function i(){this.equations=[]}i.prototype.solve=function(a,o){return 0},i.prototype.addEquation=function(a){a.enabled&&this.equations.push(a)},i.prototype.removeEquation=function(a){var o=this.equations,h=o.indexOf(a);h!==-1&&o.splice(h,1)},i.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,r){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var i=e("./Solver"),a=e("../objects/Body");function o(p){for(i.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new i;var h=[],d=[],c={bodies:[]},l=a.STATIC;function u(p){for(var x=p.length,M=0;M!==x;M++){var _=p[M];if(!_.visited&&!(_.body.type&l))return _}return!1}var f=[];function v(p,x,M,_){for(f.push(p),p.visited=!0,x(p,M,_);f.length;)for(var T=f.pop(),P;P=u(T.children);)P.visited=!0,x(P,M,_),f.push(P)}function g(p,x,M){x.push(p.body);for(var _=p.eqs.length,T=0;T!==_;T++){var P=p.eqs[T];M.indexOf(P)===-1&&M.push(P)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(p,x){for(var M=h,_=this.nodePool,T=x.bodies,P=this.equations,D=P.length,R=T.length,S=this.subsolver;_.length<R;)_.push(this.createNode());M.length=R;for(var y=0;y<R;y++)M[y]=_[y];for(var y=0;y!==R;y++){var E=M[y];E.body=T[y],E.children.length=0,E.eqs.length=0,E.visited=!1}for(var F=0;F!==D;F++){var U=P[F],y=T.indexOf(U.bi),Y=T.indexOf(U.bj),W=M[y],J=M[Y];W.children.push(J),W.eqs.push(U),J.children.push(W),J.eqs.push(U)}var z,I=0,tt=d;S.tolerance=this.tolerance,S.iterations=this.iterations;for(var K=c;z=u(M);){tt.length=0,K.bodies.length=0,v(z,g,K.bodies,tt);var B=tt.length;tt=tt.sort(m);for(var y=0;y!==B;y++)S.addEquation(tt[y]);S.solve(p,K),S.removeAllEquations(),I++}return I};function m(p,x){return x.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,r){var i=function(){};n.exports=i,i.prototype={constructor:i,addEventListener:function(a,o){this._listeners===void 0&&(this._listeners={});var h=this._listeners;return h[a]===void 0&&(h[a]=[]),h[a].indexOf(o)===-1&&h[a].push(o),this},hasEventListener:function(a,o){if(this._listeners===void 0)return!1;var h=this._listeners;return h[a]!==void 0&&h[a].indexOf(o)!==-1},removeEventListener:function(a,o){if(this._listeners===void 0)return this;var h=this._listeners;if(h[a]===void 0)return this;var d=h[a].indexOf(o);return d!==-1&&h[a].splice(d,1),this},dispatchEvent:function(a){if(this._listeners===void 0)return this;var o=this._listeners,h=o[a.type];if(h!==void 0){a.target=this;for(var d=0,c=h.length;d<c;d++)h[d].call(this,a)}return this}}},{}],50:[function(e,n,r){var i=e("../collision/AABB"),a=e("../math/Vec3");n.exports=h;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new i,this.data=[],this.children=[]}function h(l,u){u=u||{},u.root=null,u.aabb=l,o.call(this,u),this.maxDepth=typeof u.maxDepth<"u"?u.maxDepth:8}h.prototype=new o,o.prototype.reset=function(l,u){this.children.length=this.data.length=0},o.prototype.insert=function(l,u,f){var v=this.data;if(f=f||0,!this.aabb.contains(l))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(g[p].insert(l,u,f+1))return!0;m&&(g.length=0)}return v.push(u),!0};var d=new a;o.prototype.subdivide=function(){var l=this.aabb,u=l.lowerBound,f=l.upperBound,v=this.children;v.push(new o({aabb:new i({lowerBound:new a(0,0,0)})}),new o({aabb:new i({lowerBound:new a(1,0,0)})}),new o({aabb:new i({lowerBound:new a(1,1,0)})}),new o({aabb:new i({lowerBound:new a(1,1,1)})}),new o({aabb:new i({lowerBound:new a(0,1,1)})}),new o({aabb:new i({lowerBound:new a(0,0,1)})}),new o({aabb:new i({lowerBound:new a(1,0,1)})}),new o({aabb:new i({lowerBound:new a(0,1,0)})})),f.vsub(u,d),d.scale(.5,d);for(var g=this.root||this,m=0;m!==8;m++){var p=v[m];p.root=g;var x=p.aabb.lowerBound;x.x*=d.x,x.y*=d.y,x.z*=d.z,x.vadd(u,x),x.vadd(d,p.aabb.upperBound)}},o.prototype.aabbQuery=function(l,u){this.data,this.children;for(var f=[this];f.length;){var v=f.pop();v.aabb.overlaps(l)&&Array.prototype.push.apply(u,v.data),Array.prototype.push.apply(f,v.children)}return u};var c=new i;o.prototype.rayQuery=function(l,u,f){return l.getAABB(c),c.toLocalFrame(u,c),this.aabbQuery(c,f),f},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var u=l.pop(),f=u.children.length-1;f>=0;f--)u.children[f].data.length||u.children.splice(f,1);Array.prototype.push.apply(l,u.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,r){n.exports=i;function i(){this.objects=[],this.type=Object}i.prototype.release=function(){for(var a=arguments.length,o=0;o!==a;o++)this.objects.push(arguments[o])},i.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},i.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,r){n.exports=i;function i(){this.data={keys:[]}}i.prototype.get=function(a,o){if(a>o){var h=o;o=a,a=h}return this.data[a+"-"+o]},i.prototype.set=function(a,o,h){if(a>o){var d=o;o=a,a=d}var c=a+"-"+o;this.get(a,o)||this.data.keys.push(c),this.data[c]=h},i.prototype.reset=function(){for(var a=this.data,o=a.keys;o.length>0;){var h=o.pop();delete a[h]}}},{}],53:[function(e,n,r){function i(){}n.exports=i,i.defaults=function(a,o){a=a||{};for(var h in o)h in a||(a[h]=o[h]);return a}},{}],54:[function(e,n,r){n.exports=o;var i=e("../math/Vec3"),a=e("./Pool");function o(){a.call(this),this.type=i}o.prototype=new a,o.prototype.constructObject=function(){return new i}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,r){n.exports=v;var i=e("../collision/AABB"),a=e("../shapes/Shape"),o=e("../collision/Ray"),h=e("../math/Vec3"),d=e("../math/Transform");e("../shapes/ConvexPolyhedron");var c=e("../math/Quaternion");e("../solver/Solver");var l=e("../utils/Vec3Pool"),u=e("../equations/ContactEquation"),f=e("../equations/FrictionEquation");function v(at){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=at,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(at,dt,gt,_t,Jt,Bt){var At;this.contactPointPool.length?(At=this.contactPointPool.pop(),At.bi=at,At.bj=dt):At=new u(at,dt),At.enabled=at.collisionResponse&&dt.collisionResponse&&gt.collisionResponse&&_t.collisionResponse;var Nt=this.currentContactMaterial;At.restitution=Nt.restitution,At.setSpookParams(Nt.contactEquationStiffness,Nt.contactEquationRelaxation,this.world.dt);var it=gt.material||at.material,Ct=_t.material||dt.material;return it&&Ct&&it.restitution>=0&&Ct.restitution>=0&&(At.restitution=it.restitution*Ct.restitution),At.si=Jt||gt,At.sj=Bt||_t,At},v.prototype.createFrictionEquationsFromContact=function(at,dt){var gt=at.bi,_t=at.bj,Jt=at.si,Bt=at.sj,At=this.world,Nt=this.currentContactMaterial,it=Nt.friction,Ct=Jt.material||gt.material,It=Bt.material||_t.material;if(Ct&&It&&Ct.friction>=0&&It.friction>=0&&(it=Ct.friction*It.friction),it>0){var qt=it*At.gravity.length(),Pt=gt.invMass+_t.invMass;Pt>0&&(Pt=1/Pt);var Tt=this.frictionEquationPool,Dt=Tt.length?Tt.pop():new f(gt,_t,qt*Pt),jt=Tt.length?Tt.pop():new f(gt,_t,qt*Pt);return Dt.bi=jt.bi=gt,Dt.bj=jt.bj=_t,Dt.minForce=jt.minForce=-qt*Pt,Dt.maxForce=jt.maxForce=qt*Pt,Dt.ri.copy(at.ri),Dt.rj.copy(at.rj),jt.ri.copy(at.ri),jt.rj.copy(at.rj),at.ni.tangents(Dt.t,jt.t),Dt.setSpookParams(Nt.frictionEquationStiffness,Nt.frictionEquationRelaxation,At.dt),jt.setSpookParams(Nt.frictionEquationStiffness,Nt.frictionEquationRelaxation,At.dt),Dt.enabled=jt.enabled=at.enabled,dt.push(Dt,jt),!0}return!1};var g=new h,m=new h,p=new h;v.prototype.createFrictionFromAverage=function(at){var dt=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(dt,this.frictionResult)||at===1)){var gt=this.frictionResult[this.frictionResult.length-2],_t=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),p.setZero();var Jt=dt.bi;dt.bj;for(var Bt=0;Bt!==at;Bt++)dt=this.result[this.result.length-1-Bt],dt.bodyA!==Jt?(g.vadd(dt.ni,g),m.vadd(dt.ri,m),p.vadd(dt.rj,p)):(g.vsub(dt.ni,g),m.vadd(dt.rj,m),p.vadd(dt.ri,p));var At=1/at;m.scale(At,gt.ri),p.scale(At,gt.rj),_t.ri.copy(gt.ri),_t.rj.copy(gt.rj),g.normalize(),g.tangents(gt.t,_t.t)}};var x=new h,M=new h,_=new c,T=new c;v.prototype.getContacts=function(at,dt,gt,_t,Jt,Bt,At){this.contactPointPool=Jt,this.frictionEquationPool=At,this.result=_t,this.frictionResult=Bt;for(var Nt=_,it=T,Ct=x,It=M,qt=0,Pt=at.length;qt!==Pt;qt++){var Tt=at[qt],Dt=dt[qt],jt=null;Tt.material&&Dt.material&&(jt=gt.getContactMaterial(Tt.material,Dt.material)||null);for(var ce=0;ce<Tt.shapes.length;ce++){Tt.quaternion.mult(Tt.shapeOrientations[ce],Nt),Tt.quaternion.vmult(Tt.shapeOffsets[ce],Ct),Ct.vadd(Tt.position,Ct);for(var yt=Tt.shapes[ce],b=0;b<Dt.shapes.length;b++){Dt.quaternion.mult(Dt.shapeOrientations[b],it),Dt.quaternion.vmult(Dt.shapeOffsets[b],It),It.vadd(Dt.position,It);var k=Dt.shapes[b];if(!(Ct.distanceTo(It)>yt.boundingSphereRadius+k.boundingSphereRadius)){var et=null;yt.material&&k.material&&(et=gt.getContactMaterial(yt.material,k.material)||null),this.currentContactMaterial=et||jt||gt.defaultContactMaterial;var $=this[yt.type|k.type];$&&(yt.type<k.type?$.call(this,yt,k,Ct,It,Nt,it,Tt,Dt,yt,k):$.call(this,k,yt,It,Ct,it,Nt,Dt,Tt,yt,k))}}}}},v.prototype[a.types.BOX|a.types.BOX]=v.prototype.boxBox=function(at,dt,gt,_t,Jt,Bt,At,Nt){at.convexPolyhedronRepresentation.material=at.material,dt.convexPolyhedronRepresentation.material=dt.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,dt.convexPolyhedronRepresentation.collisionResponse=dt.collisionResponse,this.convexConvex(at.convexPolyhedronRepresentation,dt.convexPolyhedronRepresentation,gt,_t,Jt,Bt,At,Nt,at,dt)},v.prototype[a.types.BOX|a.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(at,dt,gt,_t,Jt,Bt,At,Nt){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexConvex(at.convexPolyhedronRepresentation,dt,gt,_t,Jt,Bt,At,Nt,at,dt)},v.prototype[a.types.BOX|a.types.PARTICLE]=v.prototype.boxParticle=function(at,dt,gt,_t,Jt,Bt,At,Nt){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexParticle(at.convexPolyhedronRepresentation,dt,gt,_t,Jt,Bt,At,Nt,at,dt)},v.prototype[a.types.SPHERE]=v.prototype.sphereSphere=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=this.createContactEquation(At,Nt,at,dt);_t.vsub(gt,it.ni),it.ni.normalize(),it.ri.copy(it.ni),it.rj.copy(it.ni),it.ri.mult(at.radius,it.ri),it.rj.mult(-dt.radius,it.rj),it.ri.vadd(gt,it.ri),it.ri.vsub(At.position,it.ri),it.rj.vadd(_t,it.rj),it.rj.vsub(Nt.position,it.rj),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)};var P=new h,D=new h,R=new h;v.prototype[a.types.PLANE|a.types.TRIMESH]=v.prototype.planeTrimesh=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=new h,Ct=P;Ct.set(0,0,1),Jt.vmult(Ct,Ct);for(var It=0;It<dt.vertices.length/3;It++){dt.getVertex(It,it);var qt=new h;qt.copy(it),d.pointToWorldFrame(_t,Bt,qt,it);var Pt=D;it.vsub(gt,Pt);var Tt=Ct.dot(Pt);if(Tt<=0){var Dt=this.createContactEquation(At,Nt,at,dt);Dt.ni.copy(Ct);var jt=R;Ct.scale(Pt.dot(Ct),jt),it.vsub(jt,jt),Dt.ri.copy(jt),Dt.ri.vsub(At.position,Dt.ri),Dt.rj.copy(it),Dt.rj.vsub(Nt.position,Dt.rj),this.result.push(Dt),this.createFrictionEquationsFromContact(Dt,this.frictionResult)}}};var S=new h,y=new h;new h;var E=new h,F=new h,U=new h,Y=new h,W=new h,J=new h,z=new h,I=new h,tt=new h,K=new h,B=new h,j=new i,V=[];v.prototype[a.types.SPHERE|a.types.TRIMESH]=v.prototype.sphereTrimesh=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=U,Ct=Y,It=W,qt=J,Pt=z,Tt=I,Dt=j,jt=F,ce=y,yt=V;d.pointToLocalFrame(_t,Bt,gt,Pt);var b=at.radius;Dt.lowerBound.set(Pt.x-b,Pt.y-b,Pt.z-b),Dt.upperBound.set(Pt.x+b,Pt.y+b,Pt.z+b),dt.getTrianglesInAABB(Dt,yt);for(var k=E,et=at.radius*at.radius,$=0;$<yt.length;$++)for(var G=0;G<3;G++)if(dt.getVertex(dt.indices[yt[$]*3+G],k),k.vsub(Pt,ce),ce.norm2()<=et){jt.copy(k),d.pointToWorldFrame(_t,Bt,jt,k),k.vsub(gt,ce);var st=this.createContactEquation(At,Nt,at,dt);st.ni.copy(ce),st.ni.normalize(),st.ri.copy(st.ni),st.ri.scale(at.radius,st.ri),st.ri.vadd(gt,st.ri),st.ri.vsub(At.position,st.ri),st.rj.copy(k),st.rj.vsub(Nt.position,st.rj),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}for(var $=0;$<yt.length;$++)for(var G=0;G<3;G++){dt.getVertex(dt.indices[yt[$]*3+G],it),dt.getVertex(dt.indices[yt[$]*3+(G+1)%3],Ct),Ct.vsub(it,It),Pt.vsub(Ct,Tt);var Rt=Tt.dot(It);Pt.vsub(it,Tt);var zt=Tt.dot(It);if(zt>0&&Rt<0){Pt.vsub(it,Tt),qt.copy(It),qt.normalize(),zt=Tt.dot(qt),qt.scale(zt,Tt),Tt.vadd(it,Tt);var kt=Tt.distanceTo(Pt);if(kt<at.radius){var st=this.createContactEquation(At,Nt,at,dt);Tt.vsub(Pt,st.ni),st.ni.normalize(),st.ni.scale(at.radius,st.ri),d.pointToWorldFrame(_t,Bt,Tt,Tt),Tt.vsub(Nt.position,st.rj),d.vectorToWorldFrame(Bt,st.ni,st.ni),d.vectorToWorldFrame(Bt,st.ri,st.ri),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}}}for(var te=tt,$t=K,Ut=B,de=S,$=0,ee=yt.length;$!==ee;$++){dt.getTriangleVertices(yt[$],te,$t,Ut),dt.getNormal(yt[$],de),Pt.vsub(te,Tt);var kt=Tt.dot(de);if(de.scale(kt,Tt),Pt.vsub(Tt,Tt),kt=Tt.distanceTo(Pt),o.pointInTriangle(Tt,te,$t,Ut)&&kt<at.radius){var st=this.createContactEquation(At,Nt,at,dt);Tt.vsub(Pt,st.ni),st.ni.normalize(),st.ni.scale(at.radius,st.ri),d.pointToWorldFrame(_t,Bt,Tt,Tt),Tt.vsub(Nt.position,st.rj),d.vectorToWorldFrame(Bt,st.ni,st.ni),d.vectorToWorldFrame(Bt,st.ri,st.ri),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}}yt.length=0};var A=new h,C=new h;v.prototype[a.types.SPHERE|a.types.PLANE]=v.prototype.spherePlane=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=this.createContactEquation(At,Nt,at,dt);if(it.ni.set(0,0,1),Bt.vmult(it.ni,it.ni),it.ni.negate(it.ni),it.ni.normalize(),it.ni.mult(at.radius,it.ri),gt.vsub(_t,A),it.ni.mult(it.ni.dot(A),C),A.vsub(C,it.rj),-A.dot(it.ni)<=at.radius){var Ct=it.ri,It=it.rj;Ct.vadd(gt,Ct),Ct.vsub(At.position,Ct),It.vadd(_t,It),It.vsub(Nt.position,It),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)}};var H=new h,Q=new h,nt=new h;function X(at,dt,gt){for(var _t=null,Jt=at.length,Bt=0;Bt!==Jt;Bt++){var At=at[Bt],Nt=H;at[(Bt+1)%Jt].vsub(At,Nt);var it=Q;Nt.cross(dt,it);var Ct=nt;gt.vsub(At,Ct);var It=it.dot(Ct);if(_t===null||It>0&&_t===!0||It<=0&&_t===!1){_t===null&&(_t=It>0);continue}else return!1}return!0}var rt=new h,mt=new h,St=new h,wt=new h,N=[new h,new h,new h,new h,new h,new h],ft=new h,ut=new h,Xt=new h,xt=new h;v.prototype[a.types.SPHERE|a.types.BOX]=v.prototype.sphereBox=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=this.v3pool,Ct=N;gt.vsub(_t,rt),dt.getSideNormals(Ct,Bt);for(var It=at.radius,qt=!1,Pt=ut,Tt=Xt,Dt=xt,jt=null,ce=0,yt=0,b=0,k=null,et=0,$=Ct.length;et!==$&&qt===!1;et++){var G=mt;G.copy(Ct[et]);var st=G.norm();G.normalize();var Rt=rt.dot(G);if(Rt<st+It&&Rt>0){var zt=St,kt=wt;zt.copy(Ct[(et+1)%3]),kt.copy(Ct[(et+2)%3]);var te=zt.norm(),$t=kt.norm();zt.normalize(),kt.normalize();var Ut=rt.dot(zt),de=rt.dot(kt);if(Ut<te&&Ut>-te&&de<$t&&de>-$t){var ye=Math.abs(Rt-st-It);(k===null||ye<k)&&(k=ye,yt=Ut,b=de,jt=st,Pt.copy(G),Tt.copy(zt),Dt.copy(kt),ce++)}}}if(ce){qt=!0;var Qt=this.createContactEquation(At,Nt,at,dt);Pt.mult(-It,Qt.ri),Qt.ni.copy(Pt),Qt.ni.negate(Qt.ni),Pt.mult(jt,Pt),Tt.mult(yt,Tt),Pt.vadd(Tt,Pt),Dt.mult(b,Dt),Pt.vadd(Dt,Qt.rj),Qt.ri.vadd(gt,Qt.ri),Qt.ri.vsub(At.position,Qt.ri),Qt.rj.vadd(_t,Qt.rj),Qt.rj.vsub(Nt.position,Qt.rj),this.result.push(Qt),this.createFrictionEquationsFromContact(Qt,this.frictionResult)}for(var ee=it.get(),we=ft,_e=0;_e!==2&&!qt;_e++)for(var se=0;se!==2&&!qt;se++)for(var Yt=0;Yt!==2&&!qt;Yt++)if(ee.set(0,0,0),_e?ee.vadd(Ct[0],ee):ee.vsub(Ct[0],ee),se?ee.vadd(Ct[1],ee):ee.vsub(Ct[1],ee),Yt?ee.vadd(Ct[2],ee):ee.vsub(Ct[2],ee),_t.vadd(ee,we),we.vsub(gt,we),we.norm2()<It*It){qt=!0;var Qt=this.createContactEquation(At,Nt,at,dt);Qt.ri.copy(we),Qt.ri.normalize(),Qt.ni.copy(Qt.ri),Qt.ri.mult(It,Qt.ri),Qt.rj.copy(ee),Qt.ri.vadd(gt,Qt.ri),Qt.ri.vsub(At.position,Qt.ri),Qt.rj.vadd(_t,Qt.rj),Qt.rj.vsub(Nt.position,Qt.rj),this.result.push(Qt),this.createFrictionEquationsFromContact(Qt,this.frictionResult)}it.release(ee),ee=null;for(var Ee=it.get(),pe=it.get(),Qt=it.get(),Le=it.get(),ye=it.get(),$e=Ct.length,_e=0;_e!==$e&&!qt;_e++)for(var se=0;se!==$e&&!qt;se++)if(_e%3!==se%3){Ct[se].cross(Ct[_e],Ee),Ee.normalize(),Ct[_e].vadd(Ct[se],pe),Qt.copy(gt),Qt.vsub(pe,Qt),Qt.vsub(_t,Qt);var Me=Qt.dot(Ee);Ee.mult(Me,Le);for(var Yt=0;Yt===_e%3||Yt===se%3;)Yt++;ye.copy(gt),ye.vsub(Le,ye),ye.vsub(pe,ye),ye.vsub(_t,ye);var Xe=Math.abs(Me),qe=ye.norm();if(Xe<Ct[Yt].norm()&&qe<It){qt=!0;var me=this.createContactEquation(At,Nt,at,dt);pe.vadd(Le,me.rj),me.rj.copy(me.rj),ye.negate(me.ni),me.ni.normalize(),me.ri.copy(me.rj),me.ri.vadd(_t,me.ri),me.ri.vsub(gt,me.ri),me.ri.normalize(),me.ri.mult(It,me.ri),me.ri.vadd(gt,me.ri),me.ri.vsub(At.position,me.ri),me.rj.vadd(_t,me.rj),me.rj.vsub(Nt.position,me.rj),this.result.push(me),this.createFrictionEquationsFromContact(me,this.frictionResult)}}it.release(Ee,pe,Qt,Le,ye)};var ne=new h,vt=new h,L=new h,w=new h,Z=new h,ct=new h,ht=new h,ot=new h,Et=new h,bt=new h;v.prototype[a.types.SPHERE|a.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=this.v3pool;gt.vsub(_t,ne);for(var Ct=dt.faceNormals,It=dt.faces,qt=dt.vertices,Pt=at.radius,Tt=0;Tt!==qt.length;Tt++){var Dt=qt[Tt],jt=Z;Bt.vmult(Dt,jt),_t.vadd(jt,jt);var ce=w;if(jt.vsub(gt,ce),ce.norm2()<Pt*Pt){b=!0;var yt=this.createContactEquation(At,Nt,at,dt);yt.ri.copy(ce),yt.ri.normalize(),yt.ni.copy(yt.ri),yt.ri.mult(Pt,yt.ri),jt.vsub(_t,yt.rj),yt.ri.vadd(gt,yt.ri),yt.ri.vsub(At.position,yt.ri),yt.rj.vadd(_t,yt.rj),yt.rj.vsub(Nt.position,yt.rj),this.result.push(yt),this.createFrictionEquationsFromContact(yt,this.frictionResult);return}}for(var b=!1,Tt=0,k=It.length;Tt!==k&&b===!1;Tt++){var et=Ct[Tt],$=It[Tt],G=ct;Bt.vmult(et,G);var st=ht;Bt.vmult(qt[$[0]],st),st.vadd(_t,st);var Rt=ot;G.mult(-Pt,Rt),gt.vadd(Rt,Rt);var zt=Et;Rt.vsub(st,zt);var kt=zt.dot(G),te=bt;if(gt.vsub(st,te),kt<0&&te.dot(G)>0){for(var $t=[],Ut=0,de=$.length;Ut!==de;Ut++){var ee=it.get();Bt.vmult(qt[$[Ut]],ee),_t.vadd(ee,ee),$t.push(ee)}if(X($t,G,gt)){b=!0;var yt=this.createContactEquation(At,Nt,at,dt);G.mult(-Pt,yt.ri),G.negate(yt.ni);var we=it.get();G.mult(-kt,we);var _e=it.get();G.mult(-Pt,_e),gt.vsub(_t,yt.rj),yt.rj.vadd(_e,yt.rj),yt.rj.vadd(we,yt.rj),yt.rj.vadd(_t,yt.rj),yt.rj.vsub(Nt.position,yt.rj),yt.ri.vadd(gt,yt.ri),yt.ri.vsub(At.position,yt.ri),it.release(we),it.release(_e),this.result.push(yt),this.createFrictionEquationsFromContact(yt,this.frictionResult);for(var Ut=0,se=$t.length;Ut!==se;Ut++)it.release($t[Ut]);return}else for(var Ut=0;Ut!==$.length;Ut++){var Yt=it.get(),Ee=it.get();Bt.vmult(qt[$[(Ut+1)%$.length]],Yt),Bt.vmult(qt[$[(Ut+2)%$.length]],Ee),_t.vadd(Yt,Yt),_t.vadd(Ee,Ee);var pe=vt;Ee.vsub(Yt,pe);var Qt=L;pe.unit(Qt);var Le=it.get(),ye=it.get();gt.vsub(Yt,ye);var $e=ye.dot(Qt);Qt.mult($e,Le),Le.vadd(Yt,Le);var Me=it.get();if(Le.vsub(gt,Me),$e>0&&$e*$e<pe.norm2()&&Me.norm2()<Pt*Pt){var yt=this.createContactEquation(At,Nt,at,dt);Le.vsub(_t,yt.rj),Le.vsub(gt,yt.ni),yt.ni.normalize(),yt.ni.mult(Pt,yt.ri),yt.rj.vadd(_t,yt.rj),yt.rj.vsub(Nt.position,yt.rj),yt.ri.vadd(gt,yt.ri),yt.ri.vsub(At.position,yt.ri),this.result.push(yt),this.createFrictionEquationsFromContact(yt,this.frictionResult);for(var Ut=0,se=$t.length;Ut!==se;Ut++)it.release($t[Ut]);it.release(Yt),it.release(Ee),it.release(Le),it.release(Me),it.release(ye);return}it.release(Yt),it.release(Ee),it.release(Le),it.release(Me),it.release(ye)}for(var Ut=0,se=$t.length;Ut!==se;Ut++)it.release($t[Ut])}}},new h,new h,v.prototype[a.types.PLANE|a.types.BOX]=v.prototype.planeBox=function(at,dt,gt,_t,Jt,Bt,At,Nt){dt.convexPolyhedronRepresentation.material=dt.material,dt.convexPolyhedronRepresentation.collisionResponse=dt.collisionResponse,this.planeConvex(at,dt.convexPolyhedronRepresentation,gt,_t,Jt,Bt,At,Nt)};var Ft=new h,he=new h,Mt=new h,Gt=new h;v.prototype[a.types.PLANE|a.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=Ft,Ct=he;Ct.set(0,0,1),Jt.vmult(Ct,Ct);for(var It=0,qt=Mt,Pt=0;Pt!==dt.vertices.length;Pt++){it.copy(dt.vertices[Pt]),Bt.vmult(it,it),_t.vadd(it,it),it.vsub(gt,qt);var Tt=Ct.dot(qt);if(Tt<=0){var Dt=this.createContactEquation(At,Nt,at,dt),jt=Gt;Ct.mult(Ct.dot(qt),jt),it.vsub(jt,jt),jt.vsub(gt,Dt.ri),Dt.ni.copy(Ct),it.vsub(_t,Dt.rj),Dt.ri.vadd(gt,Dt.ri),Dt.ri.vsub(At.position,Dt.ri),Dt.rj.vadd(_t,Dt.rj),Dt.rj.vsub(Nt.position,Dt.rj),this.result.push(Dt),It++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(Dt,this.frictionResult)}}this.enableFrictionReduction&&It&&this.createFrictionFromAverage(It)};var Zt=new h,Kt=new h;v.prototype[a.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(at,dt,gt,_t,Jt,Bt,At,Nt,it,Ct,It,qt){var Pt=Zt;if(!(gt.distanceTo(_t)>at.boundingSphereRadius+dt.boundingSphereRadius)&&at.findSeparatingAxis(dt,gt,Jt,_t,Bt,Pt,It,qt)){var Tt=[],Dt=Kt;at.clipAgainstHull(gt,Jt,dt,_t,Bt,Pt,-100,100,Tt);for(var jt=0,ce=0;ce!==Tt.length;ce++){var yt=this.createContactEquation(At,Nt,at,dt,it,Ct),b=yt.ri,k=yt.rj;Pt.negate(yt.ni),Tt[ce].normal.negate(Dt),Dt.mult(Tt[ce].depth,Dt),Tt[ce].point.vadd(Dt,b),k.copy(Tt[ce].point),b.vsub(gt,b),k.vsub(_t,k),b.vadd(gt,b),b.vsub(At.position,b),k.vadd(_t,k),k.vsub(Nt.position,k),this.result.push(yt),jt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(yt,this.frictionResult)}this.enableFrictionReduction&&jt&&this.createFrictionFromAverage(jt)}};var Wt=new h,ue=new h,ie=new h;v.prototype[a.types.PLANE|a.types.PARTICLE]=v.prototype.planeParticle=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=Wt;it.set(0,0,1),At.quaternion.vmult(it,it);var Ct=ue;_t.vsub(At.position,Ct);var It=it.dot(Ct);if(It<=0){var qt=this.createContactEquation(Nt,At,dt,at);qt.ni.copy(it),qt.ni.negate(qt.ni),qt.ri.set(0,0,0);var Pt=ie;it.mult(it.dot(_t),Pt),_t.vsub(Pt,Pt),qt.rj.copy(Pt),this.result.push(qt),this.createFrictionEquationsFromContact(qt,this.frictionResult)}};var ge=new h;v.prototype[a.types.PARTICLE|a.types.SPHERE]=v.prototype.sphereParticle=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=ge;it.set(0,0,1),_t.vsub(gt,it);var Ct=it.norm2();if(Ct<=at.radius*at.radius){var It=this.createContactEquation(Nt,At,dt,at);it.normalize(),It.rj.copy(it),It.rj.mult(at.radius,It.rj),It.ni.copy(it),It.ni.negate(It.ni),It.ri.set(0,0,0),this.result.push(It),this.createFrictionEquationsFromContact(It,this.frictionResult)}};var q=new c,Lt=new h;new h;var lt=new h,pt=new h,Vt=new h;v.prototype[a.types.PARTICLE|a.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=-1,Ct=lt,It=Vt,qt=null,Pt=Lt;if(Pt.copy(_t),Pt.vsub(gt,Pt),Jt.conjugate(q),q.vmult(Pt,Pt),at.pointIsInside(Pt)){at.worldVerticesNeedsUpdate&&at.computeWorldVertices(gt,Jt),at.worldFaceNormalsNeedsUpdate&&at.computeWorldFaceNormals(Jt);for(var Tt=0,Dt=at.faces.length;Tt!==Dt;Tt++){var jt=[at.worldVertices[at.faces[Tt][0]]],ce=at.worldFaceNormals[Tt];_t.vsub(jt[0],pt);var yt=-ce.dot(pt);(qt===null||Math.abs(yt)<Math.abs(qt))&&(qt=yt,it=Tt,Ct.copy(ce))}if(it!==-1){var b=this.createContactEquation(Nt,At,dt,at);Ct.mult(qt,It),It.vadd(_t,It),It.vsub(gt,It),b.rj.copy(It),Ct.negate(b.ni),b.ri.set(0,0,0);var k=b.ri,et=b.rj;k.vadd(_t,k),k.vsub(Nt.position,k),et.vadd(gt,et),et.vsub(At.position,et),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[a.types.BOX|a.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(at,dt,gt,_t,Jt,Bt,At,Nt){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexHeightfield(at.convexPolyhedronRepresentation,dt,gt,_t,Jt,Bt,At,Nt)};var Ot=new h,re=new h,be=[0];v.prototype[a.types.CONVEXPOLYHEDRON|a.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=dt.data,Ct=dt.elementSize,It=at.boundingSphereRadius,qt=re,Pt=be,Tt=Ot;d.pointToLocalFrame(_t,Bt,gt,Tt);var Dt=Math.floor((Tt.x-It)/Ct)-1,jt=Math.ceil((Tt.x+It)/Ct)+1,ce=Math.floor((Tt.y-It)/Ct)-1,yt=Math.ceil((Tt.y+It)/Ct)+1;if(!(jt<0||yt<0||Dt>it.length||ce>it[0].length)){Dt<0&&(Dt=0),jt<0&&(jt=0),ce<0&&(ce=0),yt<0&&(yt=0),Dt>=it.length&&(Dt=it.length-1),jt>=it.length&&(jt=it.length-1),yt>=it[0].length&&(yt=it[0].length-1),ce>=it[0].length&&(ce=it[0].length-1);var b=[];dt.getRectMinMax(Dt,ce,jt,yt,b);var k=b[0],et=b[1];if(!(Tt.z-It>et||Tt.z+It<k))for(var $=Dt;$<jt;$++)for(var G=ce;G<yt;G++)dt.getConvexTrianglePillar($,G,!1),d.pointToWorldFrame(_t,Bt,dt.pillarOffset,qt),gt.distanceTo(qt)<dt.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.convexConvex(at,dt.pillarConvex,gt,qt,Jt,Bt,At,Nt,null,null,Pt,null),dt.getConvexTrianglePillar($,G,!0),d.pointToWorldFrame(_t,Bt,dt.pillarOffset,qt),gt.distanceTo(qt)<dt.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.convexConvex(at,dt.pillarConvex,gt,qt,Jt,Bt,At,Nt,null,null,Pt,null)}};var Re=new h,ae=new h;v.prototype[a.types.SPHERE|a.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=dt.data,Ct=at.radius,It=dt.elementSize,qt=ae,Pt=Re;d.pointToLocalFrame(_t,Bt,gt,Pt);var Tt=Math.floor((Pt.x-Ct)/It)-1,Dt=Math.ceil((Pt.x+Ct)/It)+1,jt=Math.floor((Pt.y-Ct)/It)-1,ce=Math.ceil((Pt.y+Ct)/It)+1;if(!(Dt<0||ce<0||Tt>it.length||ce>it[0].length)){Tt<0&&(Tt=0),Dt<0&&(Dt=0),jt<0&&(jt=0),ce<0&&(ce=0),Tt>=it.length&&(Tt=it.length-1),Dt>=it.length&&(Dt=it.length-1),ce>=it[0].length&&(ce=it[0].length-1),jt>=it[0].length&&(jt=it[0].length-1);var yt=[];dt.getRectMinMax(Tt,jt,Dt,ce,yt);var b=yt[0],k=yt[1];if(!(Pt.z-Ct>k||Pt.z+Ct<b))for(var et=this.result,$=Tt;$<Dt;$++)for(var G=jt;G<ce;G++){var st=et.length;dt.getConvexTrianglePillar($,G,!1),d.pointToWorldFrame(_t,Bt,dt.pillarOffset,qt),gt.distanceTo(qt)<dt.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.sphereConvex(at,dt.pillarConvex,gt,qt,Jt,Bt,At,Nt),dt.getConvexTrianglePillar($,G,!0),d.pointToWorldFrame(_t,Bt,dt.pillarOffset,qt),gt.distanceTo(qt)<dt.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.sphereConvex(at,dt.pillarConvex,gt,qt,Jt,Bt,At,Nt);var Rt=et.length-st;if(Rt>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,r){n.exports=_;var i=e("../shapes/Shape"),a=e("../math/Vec3"),o=e("../math/Quaternion"),h=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var d=e("./Narrowphase"),c=e("../utils/EventTarget"),l=e("../collision/ArrayCollisionMatrix"),u=e("../material/Material"),f=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),p=e("../collision/AABB"),x=e("../collision/Ray"),M=e("../collision/NaiveBroadphase");function _(){c.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new a,this.broadphase=new M,this.bodies=[],this.solver=new h,this.constraints=[],this.narrowphase=new d(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new u("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}_.prototype=new c,new p;var T=new x;if(_.prototype.getContactMaterial=function(I,tt){return this.contactMaterialTable.get(I.id,tt.id)},_.prototype.numObjects=function(){return this.bodies.length},_.prototype.collisionMatrixTick=function(){var I=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=I,this.collisionMatrix.reset()},_.prototype.add=_.prototype.addBody=function(I){this.bodies.indexOf(I)===-1&&(I.index=this.bodies.length,this.bodies.push(I),I.world=this,I.initPosition.copy(I.position),I.initVelocity.copy(I.velocity),I.timeLastSleepy=this.time,I instanceof v&&(I.initAngularVelocity.copy(I.angularVelocity),I.initQuaternion.copy(I.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=I,this.dispatchEvent(this.addBodyEvent))},_.prototype.addConstraint=function(I){this.constraints.push(I)},_.prototype.removeConstraint=function(I){var tt=this.constraints.indexOf(I);tt!==-1&&this.constraints.splice(tt,1)},_.prototype.rayTest=function(I,tt,K){K instanceof m?this.raycastClosest(I,tt,{skipBackfaces:!0},K):this.raycastAll(I,tt,{skipBackfaces:!0},K)},_.prototype.raycastAll=function(I,tt,K,B){return K.mode=x.ALL,K.from=I,K.to=tt,K.callback=B,T.intersectWorld(this,K)},_.prototype.raycastAny=function(I,tt,K,B){return K.mode=x.ANY,K.from=I,K.to=tt,K.result=B,T.intersectWorld(this,K)},_.prototype.raycastClosest=function(I,tt,K,B){return K.mode=x.CLOSEST,K.from=I,K.to=tt,K.result=B,T.intersectWorld(this,K)},_.prototype.remove=function(I){I.world=null;var tt=this.bodies.length-1,K=this.bodies,B=K.indexOf(I);if(B!==-1){K.splice(B,1);for(var j=0;j!==K.length;j++)K[j].index=j;this.collisionMatrix.setNumObjects(tt),this.removeBodyEvent.body=I,this.dispatchEvent(this.removeBodyEvent)}},_.prototype.removeBody=_.prototype.remove,_.prototype.addMaterial=function(I){this.materials.push(I)},_.prototype.addContactMaterial=function(I){this.contactmaterials.push(I),this.contactMaterialTable.set(I.materials[0].id,I.materials[1].id,I)},typeof performance>"u"&&(performance={}),!performance.now){var P=Date.now();performance.timing&&performance.timing.navigationStart&&(P=performance.timing.navigationStart),performance.now=function(){return Date.now()-P}}var D=new a;_.prototype.step=function(I,tt,K){if(K=K||10,tt=tt||0,tt===0)this.internalStep(I),this.time+=I;else{var B=Math.floor((this.time+tt)/I)-Math.floor(this.time/I);B=Math.min(B,K);for(var j=performance.now(),V=0;V!==B&&(this.internalStep(I),!(performance.now()-j>I*1e3));V++);this.time+=tt;for(var A=this.time%I,C=A/I,H=D,Q=this.bodies,nt=0;nt!==Q.length;nt++){var X=Q[nt];X.type!==v.STATIC&&X.sleepState!==v.SLEEPING?(X.position.vsub(X.previousPosition,H),H.scale(C,H),X.position.vadd(H,X.interpolatedPosition)):(X.interpolatedPosition.copy(X.position),X.interpolatedQuaternion.copy(X.quaternion))}}};var R={type:"postStep"},S={type:"preStep"},y={type:"collide",body:null,contact:null},E=[],F=[],U=[],Y=[];new a,new a,new a,new a,new a,new a,new a,new a,new a,new o;var W=new o,J=new o,z=new a;_.prototype.internalStep=function(I){this.dt=I;var tt=this.contacts,K=U,B=Y,j=this.numObjects(),V=this.bodies,A=this.solver,C=this.gravity,H=this.doProfiling,Q=this.profile,nt=v.DYNAMIC,X,rt=this.constraints,mt=F;C.norm();var St=C.x,wt=C.y,N=C.z,ft=0;for(H&&(X=performance.now()),ft=0;ft!==j;ft++){var ut=V[ft];if(ut.type&nt){var Xt=ut.force,xt=ut.mass;Xt.x+=xt*St,Xt.y+=xt*wt,Xt.z+=xt*N}}for(var ft=0,ne=this.subsystems.length;ft!==ne;ft++)this.subsystems[ft].update();H&&(X=performance.now()),K.length=0,B.length=0,this.broadphase.collisionPairs(this,K,B),H&&(Q.broadphase=performance.now()-X);var Zt=rt.length;for(ft=0;ft!==Zt;ft++){var vt=rt[ft];if(!vt.collideConnected)for(var L=K.length-1;L>=0;L-=1)(vt.bodyA===K[L]&&vt.bodyB===B[L]||vt.bodyB===K[L]&&vt.bodyA===B[L])&&(K.splice(L,1),B.splice(L,1))}this.collisionMatrixTick(),H&&(X=performance.now());var w=E,Z=tt.length;for(ft=0;ft!==Z;ft++)w.push(tt[ft]);tt.length=0;var ct=this.frictionEquations.length;for(ft=0;ft!==ct;ft++)mt.push(this.frictionEquations[ft]);this.frictionEquations.length=0,this.narrowphase.getContacts(K,B,this,tt,w,this.frictionEquations,mt),H&&(Q.narrowphase=performance.now()-X),H&&(X=performance.now());for(var ft=0;ft<this.frictionEquations.length;ft++)A.addEquation(this.frictionEquations[ft]);for(var ht=tt.length,ot=0;ot!==ht;ot++){var vt=tt[ot],ut=vt.bi,Et=vt.bj;vt.si,vt.sj;var bt;if(ut.material&&Et.material?bt=this.getContactMaterial(ut.material,Et.material)||this.defaultContactMaterial:bt=this.defaultContactMaterial,bt.friction,ut.material&&Et.material&&(ut.material.friction>=0&&Et.material.friction>=0&&ut.material.friction*Et.material.friction,ut.material.restitution>=0&&Et.material.restitution>=0&&(vt.restitution=ut.material.restitution*Et.material.restitution)),A.addEquation(vt),ut.allowSleep&&ut.type===v.DYNAMIC&&ut.sleepState===v.SLEEPING&&Et.sleepState===v.AWAKE&&Et.type!==v.STATIC){var Ft=Et.velocity.norm2()+Et.angularVelocity.norm2(),he=Math.pow(Et.sleepSpeedLimit,2);Ft>=he*2&&(ut._wakeUpAfterNarrowphase=!0)}if(Et.allowSleep&&Et.type===v.DYNAMIC&&Et.sleepState===v.SLEEPING&&ut.sleepState===v.AWAKE&&ut.type!==v.STATIC){var Mt=ut.velocity.norm2()+ut.angularVelocity.norm2(),Gt=Math.pow(ut.sleepSpeedLimit,2);Mt>=Gt*2&&(Et._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ut,Et,!0),this.collisionMatrixPrevious.get(ut,Et)||(y.body=Et,y.contact=vt,ut.dispatchEvent(y),y.body=ut,Et.dispatchEvent(y))}for(H&&(Q.makeContactConstraints=performance.now()-X,X=performance.now()),ft=0;ft!==j;ft++){var ut=V[ft];ut._wakeUpAfterNarrowphase&&(ut.wakeUp(),ut._wakeUpAfterNarrowphase=!1)}var Zt=rt.length;for(ft=0;ft!==Zt;ft++){var vt=rt[ft];vt.update();for(var L=0,Kt=vt.equations.length;L!==Kt;L++){var Wt=vt.equations[L];A.addEquation(Wt)}}A.solve(I,this),H&&(Q.solve=performance.now()-X),A.removeAllEquations();var ue=Math.pow;for(ft=0;ft!==j;ft++){var ut=V[ft];if(ut.type&nt){var ie=ue(1-ut.linearDamping,I),ge=ut.velocity;ge.mult(ie,ge);var q=ut.angularVelocity;if(q){var Lt=ue(1-ut.angularDamping,I);q.mult(Lt,q)}}}for(this.dispatchEvent(S),ft=0;ft!==j;ft++){var ut=V[ft];ut.preStep&&ut.preStep.call(ut)}H&&(X=performance.now());var lt=W,pt=J,Vt=this.stepnumber,Ot=v.DYNAMIC|v.KINEMATIC,re=Vt%(this.quatNormalizeSkip+1)===0,be=this.quatNormalizeFast,Re=I*.5;for(i.types.PLANE,i.types.CONVEXPOLYHEDRON,ft=0;ft!==j;ft++){var ae=V[ft],at=ae.force,dt=ae.torque;if(ae.type&Ot&&ae.sleepState!==v.SLEEPING){var gt=ae.velocity,_t=ae.angularVelocity,Jt=ae.position,Bt=ae.quaternion,At=ae.invMass,Nt=ae.invInertiaWorld;gt.x+=at.x*At*I,gt.y+=at.y*At*I,gt.z+=at.z*At*I,ae.angularVelocity&&(Nt.vmult(dt,z),z.mult(I,z),z.vadd(_t,_t)),Jt.x+=gt.x*I,Jt.y+=gt.y*I,Jt.z+=gt.z*I,ae.angularVelocity&&(lt.set(_t.x,_t.y,_t.z,0),lt.mult(Bt,pt),Bt.x+=Re*pt.x,Bt.y+=Re*pt.y,Bt.z+=Re*pt.z,Bt.w+=Re*pt.w,re&&(be?Bt.normalizeFast():Bt.normalize())),ae.aabb&&(ae.aabbNeedsUpdate=!0),ae.updateInertiaWorld&&ae.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,H&&(Q.integrate=performance.now()-X),this.time+=I,this.stepnumber+=1,this.dispatchEvent(R),ft=0;ft!==j;ft++){var ut=V[ft],it=ut.postStep;it&&it.call(ut)}if(this.allowSleep)for(ft=0;ft!==j;ft++)V[ft].sleepTick(this.time)},_.prototype.clearForces=function(){for(var I=this.bodies,tt=I.length,K=0;K!==tt;K++){var B=I[K];B.force,B.torque,B.force.set(0,0,0),B.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})}(ps)),ps.exports}var dn=Gp();class Wp{constructor(t,e){this.scene=t,this.world=e,this.textMeshes=[],this.currentText="",this.physicsMaterial=new dn.Material("physicsMaterial"),this.config={characterDelay:100,holdDelay:2e3,fadeInDuration:200,zposition:3,initialScale:2,targetScale:1.5,characterSpacing:.2,initialRotation:3,fontSize:100,fontStyle:"bold",fontFamily:"Arial",textColor:"red",textAlign:"center",textBaseline:"middle"}}animateText(t){this.currentText=t,this.textMeshes.forEach(a=>{this.scene.remove(a.mesh),this.world.remove(a.body)}),this.textMeshes=[];const e=this._measureText(t),n=e.totalWidth,r=e.charWidths;let i=-n/2;for(let a=0;a<t.length;a++){const o=r[a],h=i+o/2,d=this._createChar({char:t[a],x:h,y:0,width:o,height:e.height,index:a});setTimeout(()=>{this._startFadeIn(d)},a*this.config.characterDelay),setTimeout(()=>{this._startPhysicsDrop(d)},a*this.config.characterDelay+this.config.holdDelay),i+=o}}_measureText(t){const e=document.createElement("canvas"),n=e.getContext("2d");e.width=1024,e.height=256,n.font=`${this.config.fontStyle} ${this.config.fontSize}px ${this.config.fontFamily}`,n.textAlign=this.config.textAlign,n.textBaseline=this.config.textBaseline;const r=n.measureText(t).width*.01*this.config.characterSpacing,i=[];for(let o=0;o<t.length;o++){const h=n.measureText(t[o]).width*.01*this.config.characterSpacing;i.push(h)}const a=this.config.fontSize*.01*this.config.characterSpacing;return{totalWidth:r,charWidths:i,height:a}}_createChar(t){const e=document.createElement("canvas"),n=e.getContext("2d");e.width=128,e.height=128,n.fillStyle=this.config.textColor,n.font=`${this.config.fontStyle} ${this.config.fontSize}px ${this.config.fontFamily}`,n.textAlign=this.config.textAlign,n.textBaseline=this.config.textBaseline,n.fillText(t.char,e.width/2,e.height/2);const r=new _a(e),i=t.width*3,a=t.height*3,o=new Cn(i,a),h=new Gc({map:r,transparent:!0,opacity:0}),d=new Ne(o,h);d.castShadow=!0,d.position.set(t.x*3,t.y*3,this.config.zposition);const c=(Math.random()-.5)*this.config.initialRotation;d.rotation.z=c,d.scale.set(this.config.initialScale,this.config.initialScale,1),this.scene.add(d);const l={mesh:d,body:null,index:t.index,isFadingIn:!1,isPhysicsActive:!1,fadeStartTime:0,x:t.x*3,y:t.y*3,width:i,height:a};return this.textMeshes.push(l),l}_startFadeIn(t){t.isFadingIn=!0,t.fadeStartTime=Date.now()}_startPhysicsDrop(t){if(!t.isPhysicsActive){t.isPhysicsActive=!0;const e=new dn.Box(new dn.Vec3(t.width/2,t.height/2,.01)),n=new dn.Body({mass:1,shape:e,material:this.physicsMaterial,position:new dn.Vec3(t.mesh.position.x,t.mesh.position.y,t.mesh.position.z)}),r=new We().copy(t.mesh.rotation),i=new ni().setFromEuler(r);n.quaternion.set(i.x,i.y,i.z,i.w),t.body=n,this.world.addBody(n),n.velocity.set((Math.random()-.5)*3,Math.random()*2+3,(Math.random()-.5)*2),n.angularVelocity.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10)}}update(t=1/60){const e=Date.now();this.textMeshes.forEach(n=>{if(n.isFadingIn){const r=e-n.fadeStartTime,i=Math.min(r/this.config.fadeInDuration,1),a=this.config.initialScale+(this.config.targetScale-this.config.initialScale)*i,o=i;if(n.mesh.scale.set(a,a,1),n.mesh.material.opacity=o,n.mesh.rotation.z!==0){const h=n.mesh.rotation.z;n.mesh.rotation.z=h*(1-i)}i>=1&&!n.isPhysicsActive&&(n.isFadingIn=!1)}n.isPhysicsActive&&n.body&&(n.mesh.position.copy(n.body.position),n.mesh.quaternion.copy(n.body.quaternion))})}dispose(){this.textMeshes.forEach(t=>{this.scene.remove(t.mesh),t.body&&this.world.remove(t.body),t.mesh.geometry.dispose(),t.mesh.material.dispose(),t.mesh.material.map&&t.mesh.material.map.dispose()}),this.textMeshes=[]}}class Xp{constructor(t,e,n){this.scene=t,this.camera=e,this.sceneManager=n,this.isActive=!1,this.animations=[],this.animationPhase=0,this.neurons={input:[],hidden:[],output:[]},this.config=n.config.neuralNetwork,this.cameraPositions={network:new O(this.config.camera.position.x,this.config.camera.position.y,this.config.camera.position.z),original:e.position.clone()},this.cameraSettings={network:{position:new O(this.config.camera.position.x,this.config.camera.position.y,this.config.camera.position.z),rotation:this.config.camera.rotation?new We(this.config.camera.rotation.x,this.config.camera.rotation.y,this.config.camera.rotation.z):null,lookAt:this.config.camera.lookAt?new O(this.config.camera.lookAt.x,this.config.camera.lookAt.y,this.config.camera.lookAt.z):null},original:{position:e.position.clone(),rotation:e.rotation.clone(),quaternion:e.quaternion.clone()}},this.ui={overlayContainer:null,drawingCanvas:null,drawingContext:null,clearBtn:null,recognizeBtn:null,backBtn:null,resultContainer:null,resultText:null},this.drawingState={isDrawing:!1,lastPosition:null},this.clock=new nh,this.networkGroup=new qi,this.scene.add(this.networkGroup),this.networkGroup.visible=!1}initialize(){console.log("Initializing neural network visualization"),this._initNetwork(),this._createUI(),this._setupEventListeners()}show(){console.log("Showing neural network visualization"),this.cameraSettings.original={position:this.camera.position.clone(),quaternion:this.camera.quaternion.clone(),rotation:this.camera.rotation.clone()},console.log("Original camera position:",this.cameraSettings.original.position),console.log("Target camera position:",this.cameraSettings.network.position),this.networkGroup.visible=!0;const t={position:this.cameraSettings.network.position,rotation:this.cameraSettings.network.rotation,lookAt:this.cameraSettings.network.lookAt,transitionDuration:this.config.camera.transitionDuration};this.sceneManager.transitionCamera(t,()=>{this.ui.overlayContainer&&(console.log("Showing UI overlay"),this.ui.overlayContainer.style.display="block")}),this.isActive=!0}hide(){console.log("Hiding neural network visualization"),this.ui.overlayContainer&&(this.ui.overlayContainer.style.display="none");const t={position:this.cameraSettings.original.position,rotation:this.sceneManager.config.camera.rotation,lookAt:this.sceneManager.config.camera.lookAt,transitionDuration:this.config.camera.transitionDuration};this.sceneManager.transitionCamera(t,()=>{this.networkGroup.visible=!1,this.sceneManager&&(console.log("Notifying SceneManager to complete transition to card view"),this.sceneManager.showCardView())}),this.isActive=!1}processDrawing(){console.log("Processing drawing...");const t=this._getPixelData(),e=this._simulateWeights(),n=this._simulateForwardPass(t,e);this._updateInputLayer(t),this._scheduleLayerAnimation(n,e);const r=n.output.indexOf(Math.max(...n.output));setTimeout(()=>{this.ui.resultText.textContent=r,this.ui.resultContainer.style.display="block"},this.config.animation.resultDelay)}_createUI(){const t=document.createElement("div");t.id="nn-overlay",t.style.position="absolute",t.style.top="20px",t.style.left="20px",t.style.width="300px",t.style.padding="15px",t.style.backgroundColor="rgba(20, 20, 40, 0.7)",t.style.borderRadius="10px",t.style.zIndex="10",t.style.color="white",t.style.boxShadow="0 0 15px rgba(0, 0, 0, 0.5)",t.style.display="none",document.body.appendChild(t);const e=document.createElement("h2");e.textContent="Draw a digit (0-9)",e.style.marginTop="0",e.style.marginBottom="10px",e.style.fontSize="18px",t.appendChild(e);const n=document.createElement("canvas");n.width=280,n.height=280,n.style.width="100%",n.style.height="280px",n.style.backgroundColor="black",n.style.cursor="crosshair",n.style.border="1px solid #666",n.style.borderRadius="5px",n.style.marginBottom="10px",t.appendChild(n);const r=document.createElement("div");r.style.display="flex",r.style.gap="10px",r.style.marginBottom="15px",t.appendChild(r);const i=document.createElement("button");i.textContent="Clear",i.style.flex="1",i.style.padding="8px 15px",i.style.fontSize="14px",i.style.border="none",i.style.borderRadius="5px",i.style.cursor="pointer",i.style.backgroundColor="#3498db",i.style.color="white",r.appendChild(i);const a=document.createElement("button");a.textContent="Recognize",a.style.flex="1",a.style.padding="8px 15px",a.style.fontSize="14px",a.style.border="none",a.style.borderRadius="5px",a.style.cursor="pointer",a.style.backgroundColor="#2ecc71",a.style.color="white",r.appendChild(a);const o=document.createElement("div");o.style.backgroundColor="#2c3e50",o.style.padding="10px",o.style.borderRadius="5px",o.style.textAlign="center",o.style.fontWeight="bold",o.style.fontSize="18px",o.style.display="none",o.style.marginBottom="15px",t.appendChild(o);const h=document.createElement("span");o.innerHTML="Digit: ",o.appendChild(h);const d=document.createElement("button");d.textContent="Back to Card",d.style.width="100%",d.style.padding="8px 15px",d.style.fontSize="14px",d.style.border="none",d.style.borderRadius="5px",d.style.cursor="pointer",d.style.backgroundColor="#e74c3c",d.style.color="white",t.appendChild(d),this.ui.overlayContainer=t,this.ui.drawingCanvas=n,this.ui.drawingContext=n.getContext("2d"),this.ui.clearBtn=i,this.ui.recognizeBtn=a,this.ui.backBtn=d,this.ui.resultContainer=o,this.ui.resultText=h,this.ui.drawingContext.fillStyle="black",this.ui.drawingContext.fillRect(0,0,this.ui.drawingCanvas.width,this.ui.drawingCanvas.height)}_setupEventListeners(){this.ui.drawingCanvas.addEventListener("mousedown",this._startDrawing.bind(this)),this.ui.drawingCanvas.addEventListener("mousemove",this._draw.bind(this)),this.ui.drawingCanvas.addEventListener("mouseup",this._stopDrawing.bind(this)),this.ui.drawingCanvas.addEventListener("mouseleave",this._stopDrawing.bind(this)),this.ui.drawingCanvas.addEventListener("touchstart",this._handleTouch.bind(this)),this.ui.drawingCanvas.addEventListener("touchmove",this._handleTouch.bind(this)),this.ui.drawingCanvas.addEventListener("touchend",this._stopDrawing.bind(this)),this.ui.clearBtn.addEventListener("click",this._clearCanvas.bind(this)),this.ui.recognizeBtn.addEventListener("click",()=>{console.log("Recognize button clicked"),this.processDrawing()}),this.ui.backBtn.addEventListener("click",()=>{console.log("Back button clicked"),this.hide()})}_initNetwork(){this._createInputLayer(),this._createHiddenLayer(),this._createOutputLayer();const t=this.config.labels,e=this.config.layerPositions;this._addTextLabel("Input Layer",new O(0,t.offsetY,e.input)),this._addTextLabel("Hidden Layer",new O(0,t.offsetY,e.hidden)),this._addTextLabel("Output Layer",new O(0,t.offsetY,e.output))}_createInputLayer(){const t=this.config.inputLayer,e=t.neuronSize,n=28,r=t.horizontalSpacing,i=t.verticalSpacing,a=n*r,o=this.config.layerPositions.input,h=new En(e,e,e);for(let d=0;d<this.config.structure.inputLayer;d++){const c=Math.floor(d/n),u=d%n*r-a/2,f=c*i-a/2,v=new wi({color:this.config.colors.neuron,transparent:!0,opacity:.5}),g=new Ne(h,v.clone());g.position.set(u,f,o),this.neurons.input.push({mesh:g,position:{x:u,y:f,z:o},index:d,activation:0}),this.networkGroup.add(g)}}_createHiddenLayer(){const t=this.config.hiddenLayer,e=t.neuronSize,n=Math.ceil(Math.sqrt(this.config.structure.hiddenLayer)),r=t.horizontalSpacing,i=t.verticalSpacing,a=n*r,o=this.config.layerPositions.hidden,h=new En(e,e,e);for(let d=0;d<this.config.structure.hiddenLayer;d++){const c=Math.floor(d/n),u=d%n*r-a/2,f=c*i-a/2,v=new wi({color:this.config.colors.neuron,transparent:!0,opacity:.5}),g=new Ne(h,v.clone());g.position.set(u,f,o),this.neurons.hidden.push({mesh:g,position:{x:u,y:f,z:o},index:d,activation:0}),this.networkGroup.add(g)}}_createOutputLayer(){const t=this.config.outputLayer,e=t.neuronSize,n=t.verticalSpacing,r=this.config.layerPositions.output,i=new En(e,e,e),a=(this.config.structure.outputLayer-1)*n;for(let o=0;o<this.config.structure.outputLayer;o++){const d=o*n-a/2,c=new wi({color:this.config.colors.neuron,transparent:!0,opacity:.5}),l=new Ne(i,c.clone());l.position.set(0,d,r),this.neurons.output.push({mesh:l,position:{x:0,y:d,z:r},index:o,activation:0}),this.networkGroup.add(l),this._addTextLabel(o.toString(),new O(0+.6,d,r))}}_addTextLabel(t,e){const n=document.createElement("canvas");n.width=256,n.height=64;const r=n.getContext("2d");r.fillStyle="#ffffff",r.font="bold 36px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText(t,128,32);const i=new _a(n),a=new Ko({map:i}),o=new zc(a);o.position.copy(e);const h=this.config.labels.scale;o.scale.set(h.x,h.y,h.z),this.networkGroup.add(o)}_startDrawing(t){this.drawingState.isDrawing=!0,this.drawingState.lastPosition=null,this._draw(t)}_draw(t){if(!this.drawingState.isDrawing)return;const e=this.ui.drawingCanvas.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.ui.drawingContext.strokeStyle="white",this.ui.drawingContext.lineWidth=15,this.ui.drawingContext.lineCap="round",this.ui.drawingContext.lineJoin="round",this.drawingState.lastPosition?(this.ui.drawingContext.lineTo(n,r),this.ui.drawingContext.stroke()):(this.ui.drawingContext.beginPath(),this.ui.drawingContext.moveTo(n,r)),this.drawingState.lastPosition={x:n,y:r}}_handleTouch(t){if(t.preventDefault(),t.type==="touchstart"&&(this.drawingState.isDrawing=!0,this.drawingState.lastPosition=null),this.drawingState.isDrawing){const e=this.ui.drawingCanvas.getBoundingClientRect(),n=t.touches[0],r=n.clientX-e.left,i=n.clientY-e.top;this.ui.drawingContext.strokeStyle="white",this.ui.drawingContext.lineWidth=15,this.ui.drawingContext.lineCap="round",this.ui.drawingContext.lineJoin="round",this.drawingState.lastPosition?(this.ui.drawingContext.lineTo(r,i),this.ui.drawingContext.stroke()):(this.ui.drawingContext.beginPath(),this.ui.drawingContext.moveTo(r,i)),this.drawingState.lastPosition={x:r,y:i}}}_stopDrawing(){this.drawingState.isDrawing=!1}_clearCanvas(){this.ui.drawingContext.fillStyle="black",this.ui.drawingContext.fillRect(0,0,this.ui.drawingCanvas.width,this.ui.drawingCanvas.height),this.ui.resultContainer.style.display="none",this._resetNetwork()}_resetNetwork(){this._clearAnimations(),Object.keys(this.neurons).forEach(t=>{this.neurons[t].forEach(e=>{e.activation=0,e.mesh.material.color.setHex(this.config.colors.neuron),e.mesh.material.opacity=.5})})}_getPixelData(){const t=this.ui.drawingContext.getImageData(0,0,280,280),e=[],n=280/28;for(let r=0;r<28;r++)for(let i=0;i<28;i++){let a=0;for(let o=0;o<n;o++)for(let h=0;h<n;h++){const d=Math.floor(i*n+h),l=(Math.floor(r*n+o)*280+d)*4;a+=t.data[l]}e.push(a/(n*n*255))}return e}_scheduleLayerAnimation(t,e){setTimeout(()=>{this.animationPhase=1,this._animateInputToHidden(t.input,e.inputToHidden)},0),setTimeout(()=>{this.animationPhase=2,this._updateHiddenLayer(t.hidden)},this.config.animation.hiddenLayerDelay),setTimeout(()=>{this.animationPhase=3,this._animateHiddenToOutput(t.hidden,e.hiddenToOutput)},this.config.animation.outputLayerDelay),setTimeout(()=>{this.animationPhase=4,this._updateOutputLayer(t.output)},this.config.animation.resultDelay-450)}_simulateWeights(){return{inputToHidden:Array(this.config.structure.inputLayer).fill().map(()=>Array(this.config.structure.hiddenLayer).fill().map(()=>Math.random()*2-1)),hiddenToOutput:Array(this.config.structure.hiddenLayer).fill().map(()=>Array(this.config.structure.outputLayer).fill().map(()=>Math.random()*2-1))}}_simulateForwardPass(t,e){const n={input:t,hidden:Array(this.config.structure.hiddenLayer).fill(0),output:Array(this.config.structure.outputLayer).fill(0)};for(let i=0;i<this.config.structure.inputLayer;i++)for(let a=0;a<this.config.structure.hiddenLayer;a++)n.hidden[a]+=n.input[i]*e.inputToHidden[i][a];n.hidden=n.hidden.map(i=>Math.max(0,i));for(let i=0;i<this.config.structure.hiddenLayer;i++)for(let a=0;a<this.config.structure.outputLayer;a++)n.output[a]+=n.hidden[i]*e.hiddenToOutput[i][a];const r=n.output.reduce((i,a)=>i+Math.exp(a),0);return n.output=n.output.map(i=>Math.exp(i)/r),n}_updateInputLayer(t){this.neurons.input.forEach((e,n)=>{const r=t[n]||0;e.activation=r,r>.1?(e.mesh.material.color.setHSL(.6,.8,.5),e.mesh.material.opacity=r):e.mesh.material.opacity=.1})}_updateHiddenLayer(t){this.neurons.hidden.forEach((e,n)=>{const r=t[n]||0;e.activation=r,r>0?(e.mesh.material.color.setHSL(.6-r*.6,.8,.5),e.mesh.material.opacity=.3+r*.7):e.mesh.material.opacity=.2})}_updateOutputLayer(t){const e=t.indexOf(Math.max(...t));this.neurons.output.forEach((n,r)=>{const i=t[r]||0;n.activation=i,r===e?(n.mesh.material.color.setHex(this.config.colors.highlightedNeuron),n.mesh.material.opacity=1):i>.1?(n.mesh.material.color.setHSL(.6-i*.6,.8,.5),n.mesh.material.opacity=.3+i*.7):n.mesh.material.opacity=.2})}_animateInputToHidden(t,e){this._clearAnimations();const n=[];for(let r=0;r<t.length;r++)t[r]>.2&&n.push(r);for(const r of n){const i=this.config.animation.connectionsPerNeuron,a=[];for(;a.length<i;){const o=Math.floor(Math.random()*this.config.structure.hiddenLayer);a.includes(o)||a.push(o)}for(const o of a){const h=e[r][o],d=t[r]*h;if(Math.abs(d)>.05){const c=this.neurons.input[r],l=this.neurons.hidden[o];this._createDataCube(c.position,l.position,h,Math.random()*this.config.animation.randomDelayFactor)}}}}_animateHiddenToOutput(t,e){this._clearAnimations();const n=[];for(let r=0;r<t.length;r++)t[r]>.1&&n.push(r);for(const r of n)for(let i=0;i<this.config.structure.outputLayer;i++){const a=e[r][i],o=t[r]*a;if(Math.abs(o)>.05){const h=this.neurons.hidden[r],d=this.neurons.output[i];this._createDataCube(h.position,d.position,a,Math.random()*(this.config.animation.randomDelayFactor/2))}}}_createDataCube(t,e,n,r=0){const i=this.config.animation,a=i.dataCubeSize,o=new En(a,a,a),h=n>=0?this.config.colors.positiveWeight:this.config.colors.negativeWeight,d=new wi({color:h,transparent:!0,opacity:.8*Math.min(1,Math.abs(n)*2)}),c=new Ne(o,d);c.position.copy(t),this.networkGroup.add(c);const l={cube:c,startTime:Date.now()+r,duration:i.duration,sourcePos:t,targetPos:e,complete:!1};this.animations.push(l)}_clearAnimations(){for(const t of this.animations)t.cube&&this.networkGroup.remove(t.cube);this.animations=[]}updateAnimations(){if(!this.isActive)return;const t=Date.now(),e=this.config.animation.arcHeight,n=this.config.animation.maxOpacity;for(let r=0;r<this.animations.length;r++){const i=this.animations[r];if(i.complete)continue;const a=t-i.startTime;if(a<0)i.cube.visible=!1;else if(a>i.duration)this.networkGroup.remove(i.cube),i.complete=!0;else{const o=a/i.duration,h=this._easeInOutCubic(o);i.cube.position.x=i.sourcePos.x+(i.targetPos.x-i.sourcePos.x)*h,i.cube.position.y=i.sourcePos.y+(i.targetPos.y-i.sourcePos.y)*h,i.cube.position.z=i.sourcePos.z+(i.targetPos.z-i.sourcePos.z)*h,i.cube.position.y+=Math.sin(o*Math.PI)*e,i.cube.visible=!0,i.cube.material.opacity=Math.sin(o*Math.PI)*n,i.cube.rotation.x+=.05,i.cube.rotation.y+=.05}}this.animations=this.animations.filter(r=>!r.complete)}_easeInOutCubic(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}dispose(){console.log("Disposing neural network manager"),this.ui.drawingCanvas&&(this.ui.drawingCanvas.removeEventListener("mousedown",this._startDrawing),this.ui.drawingCanvas.removeEventListener("mousemove",this._draw),this.ui.drawingCanvas.removeEventListener("mouseup",this._stopDrawing),this.ui.drawingCanvas.removeEventListener("mouseleave",this._stopDrawing),this.ui.drawingCanvas.removeEventListener("touchstart",this._handleTouch),this.ui.drawingCanvas.removeEventListener("touchmove",this._handleTouch),this.ui.drawingCanvas.removeEventListener("touchend",this._stopDrawing)),this.ui.clearBtn&&this.ui.clearBtn.removeEventListener("click",this._clearCanvas),this.ui.overlayContainer&&this.ui.overlayContainer.parentNode&&this.ui.overlayContainer.parentNode.removeChild(this.ui.overlayContainer),this._clearAnimations(),Object.keys(this.neurons).forEach(t=>{this.neurons[t].forEach(e=>{e.mesh&&(e.mesh.geometry.dispose(),e.mesh.material.dispose(),this.networkGroup.remove(e.mesh))})}),this.scene.remove(this.networkGroup)}}class qp{constructor(t,e={}){this.container=t,this.interactiveObjects=new Set,this.buttonObjects=new Set,this.raycaster=new ih,this.mouse=new le,this.draggedObject=null,this.backgroundTransitionState={currentColorIndex:0,nextColorIndex:1,transitionProgress:0},this.defaultConfig={debug:!0,camera:{fov:75,near:.1,far:1e3,position:{x:0,y:0,z:5},rotation:{x:0,y:0,z:0},lookAt:{x:0,y:0,z:0},transitionDuration:1e3},scene:{background:2759485,backgroundTransition:{enabled:!1,colors:[2759485,1719132,3873326],transitionSpeed:.5,transitionMethod:"rgb"}},card:{physics:{strength:.3,damping:.75,wiggleStrength:.5,wiggleDamping:.6},dragging:{returnSpeed:.1,dampingFactor:.95},animation:{hoverScale:1.1,selectedScale:1.1,selectedElevation:.5,glowIntensity:.7,glowColor:65535},selection:{clickThreshold:200,moveThreshold:5},dimensions:{width:2,height:3,pivotOffset:.7}},button:{dimensions:{analyzeWidth:1.5,analyzeHeight:.5,debugWidth:1.2,debugHeight:.4},positions:{analyze:{x:2,y:-2,z:.1},debug:{x:2,y:1.5,z:.1}},colors:{activeAnalyze:4360181,inactiveAnalyze:7895160,activeDebug:16711680,inactiveDebug:11141120},animations:{hoverScale:1.1,clickScale:1.2,springStrength:.3,springDamping:.7}},neuralNetwork:{camera:{position:{x:0,y:0,z:25},rotation:{x:0,y:0,z:0},lookAt:{x:0,y:0,z:0},transitionDuration:1500},structure:{inputLayer:784,hiddenLayer:64,outputLayer:10},layerPositions:{input:-5,hidden:2,output:9},inputLayer:{neuronSize:.08,horizontalSpacing:.15,verticalSpacing:.15},hiddenLayer:{neuronSize:.15,horizontalSpacing:.5,verticalSpacing:.5},outputLayer:{neuronSize:.25,verticalSpacing:.8},labels:{offsetY:5,scale:{x:2,y:.5,z:1}},animation:{dataCubeSize:.08,arcHeight:.5,duration:1e3,maxOpacity:.8,randomDelayFactor:1e3,connectionsPerNeuron:5,hiddenLayerDelay:1900,outputLayerDelay:2300,resultDelay:4e3},colors:{neuron:3447003,positiveWeight:3066993,negativeWeight:15158332,highlightedNeuron:16733986}}},this.config=this._mergeConfig(this.defaultConfig,e),this.state={selectedCards:new Set,selectionListeners:new Set,currentView:"card",isClicking:!1,clickStartTime:0,clickStartPosition:new le,cameraTransition:null,backgroundTransition:{startTime:Date.now(),currentColorIndex:0,nextColorIndex:1,progress:0,currentColor:new oe(this.config.scene.background)}},this._initializeScene(),this._setupLighting(),this._initializePhysics(),this._setupEventListeners(),this.textPhysics=null,this.neuralNetworkManager=null}_mergeConfig(t,e){const n={...t};for(const r in e)typeof e[r]=="object"&&e[r]!==null&&!Array.isArray(e[r])&&t.hasOwnProperty(r)?n[r]=this._mergeConfig(t[r],e[r]):n[r]=e[r];return n}updateBackgroundColor(t){if(!this.config.scene.backgroundTransition.enabled)return;const e=this.config.scene.backgroundTransition,n=e.colors;this.backgroundTransitionState.transitionProgress+=e.transitionSpeed*t*60,this.backgroundTransitionState.transitionProgress>=1&&(this.backgroundTransitionState.currentColorIndex=(this.backgroundTransitionState.currentColorIndex+1)%n.length,this.backgroundTransitionState.nextColorIndex=(this.backgroundTransitionState.currentColorIndex+1)%n.length,this.backgroundTransitionState.transitionProgress=0);const r=new oe(n[this.backgroundTransitionState.currentColorIndex]),i=new oe(n[this.backgroundTransitionState.nextColorIndex]),a=new oe;a.copy(r).lerp(i,this.backgroundTransitionState.transitionProgress),this.scene.background=a}_initializePhysics(){this.world=new dn.World,this.world.gravity.set(0,-9.82,0),this.world.broadphase=new dn.NaiveBroadphase;const t=new dn.Plane,e=new dn.Body({mass:0,shape:t});e.quaternion.setFromAxisAngle(new dn.Vec3(1,0,0),-Math.PI/2),e.position.set(0,-2,0),this.world.addBody(e)}initTextPhysics(){return this.textPhysics||(this.textPhysics=new Wp(this.scene,this.world)),this.textPhysics}animateText(t){return this.textPhysics?(this.textPhysics.animateText(t),!0):(console.warn("TextPhysics not initialized"),!1)}initNeuralNetwork(){return this.neuralNetworkManager||(console.log("Initializing neural network manager"),this.neuralNetworkManager=new Xp(this.scene,this.camera,this),this.neuralNetworkManager.initialize()),this.neuralNetworkManager}showNeuralNetwork(){this.neuralNetworkManager||this.initNeuralNetwork(),console.log("Switching to neural network view"),this.state.currentView="network",this.interactiveObjects.forEach(t=>{t instanceof Xi&&(t.visible=!1)}),this.buttonObjects.forEach(t=>{t._props.text!=="Debug Camera"&&(t.visible=!1)}),this.neuralNetworkManager.show()}showCardView(){console.log("Switching back to card view"),this.state.currentView="card",this.neuralNetworkManager&&this.neuralNetworkManager.ui.overlayContainer&&(this.neuralNetworkManager.ui.overlayContainer.style.display="none"),this.interactiveObjects.forEach(t=>{t instanceof Xi&&(t.visible=!0)}),this.buttonObjects.forEach(t=>{t.visible=!0})}_updateBackgroundColor(t){const e=this.config.scene.backgroundTransition;if(!e.enabled||e.colors.length<2)return;const n=e.colors,r=this.state.backgroundTransition,i=(Date.now()-r.startTime)/1e3;r.progress=i*e.transitionSpeed%1,r.progress<this.state.backgroundTransition.lastProgress&&(r.currentColorIndex=(r.currentColorIndex+1)%n.length,r.nextColorIndex=(r.currentColorIndex+1)%n.length),r.lastProgress=r.progress;const a=new oe(n[r.currentColorIndex]),o=new oe(n[r.nextColorIndex]);if(e.transitionMethod==="hsl"){const h={h:0,s:0,l:0},d={h:0,s:0,l:0};a.getHSL(h),o.getHSL(d);let c;const l=d.h-h.h;Math.abs(l)>.5?l>0?(c=h.h+(l-1)*r.progress,c<0&&(c+=1)):(c=h.h+(l+1)*r.progress,c>1&&(c-=1)):c=h.h+l*r.progress;const u=h.s+(d.s-h.s)*r.progress,f=h.l+(d.l-h.l)*r.progress;r.currentColor.setHSL(c,u,f)}else r.currentColor.copy(a).lerp(o,r.progress);this.scene.background.copy(r.currentColor)}transitionCamera(t,e){const n=this.camera.position.clone(),r=this.camera.quaternion.clone();let i;t.position?i=new O(t.position.x,t.position.y,t.position.z):i=this.camera.position.clone();let a;if(t.lookAt){const o=this.camera.clone();o.position.copy(i),o.lookAt(t.lookAt.x,t.lookAt.y,t.lookAt.z),a=o.quaternion.clone()}else t.rotation?a=new ni().setFromEuler(new We(t.rotation.x,t.rotation.y,t.rotation.z,"XYZ")):a=this.camera.quaternion.clone();this.state.cameraTransition={startPosition:n,targetPosition:i,startQuaternion:r,targetQuaternion:a,startTime:Date.now(),duration:t.transitionDuration||this.config.camera.transitionDuration,callback:e,isActive:!0},this.config.debug&&console.log("Starting camera transition",{from:this.state.cameraTransition.startPosition,to:this.state.cameraTransition.targetPosition,duration:this.state.cameraTransition.duration})}updateCameraTransition(){const t=this.state.cameraTransition;if(!t||!t.isActive)return;const e=Date.now()-t.startTime,n=Math.min(e/t.duration,1),r=this._easeInOutCubic(n);this.camera.position.lerpVectors(t.startPosition,t.targetPosition,r),this.camera.quaternion.slerpQuaternions(t.startQuaternion,t.targetQuaternion,r),this.config.debug&&n%.1<.01&&console.log(`Camera transition progress: ${Math.round(n*100)}%`,this.camera.position),n>=1&&(this.config.debug&&console.log("Camera transition complete",this.camera.position),t.isActive=!1,t.callback&&t.callback())}_easeInOutCubic(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}update(t){const e=performance.now(),n=e-(this.lastPhysicsTime||e);this.lastPhysicsTime=e;const r=1/60;this.world.step(r,n/1e3,3),this.textPhysics&&this.textPhysics.update(t),this.updateCameraTransition(),this._updateBackgroundColor(t),this.neuralNetworkManager&&this.neuralNetworkManager.updateAnimations(),this.updateBackgroundColor(t),this.interactiveObjects.forEach(i=>i.update(t)),this.renderer.render(this.scene,this.camera)}setBackgroundColor(t){const e=t instanceof oe?t:new oe(t);if(this.scene.background=e,this.config.scene.background=t,this.config.scene.backgroundTransition.enabled){const n=this.state.backgroundTransition;n.currentColor.copy(e),n.startTime=Date.now(),n.progress=0,n.lastProgress=0}}setBackgroundTransition(t){const e=this.config.scene.backgroundTransition;t.enabled!==void 0&&(e.enabled=t.enabled),t.colors!==void 0&&t.colors.length>=2&&(e.colors=[...t.colors]),t.transitionSpeed!==void 0&&(e.transitionSpeed=Math.max(.01,Math.min(10,t.transitionSpeed))),t.transitionMethod!==void 0&&(e.transitionMethod=["rgb","hsl"].includes(t.transitionMethod)?t.transitionMethod:"rgb");const n=this.state.backgroundTransition;n.startTime=Date.now(),n.currentColorIndex=0,n.nextColorIndex=1,n.progress=0,n.lastProgress=0,e.colors.length>0&&(n.currentColor=new oe(e.colors[0]),this.scene.background.copy(n.currentColor))}dispose(){window.removeEventListener("resize",this._onWindowResize),this.renderer.domElement.removeEventListener("pointerdown",this._onPointerDown),this.renderer.domElement.removeEventListener("pointermove",this._onPointerMove),this.renderer.domElement.removeEventListener("pointerup",this._onPointerUp),this.renderer.domElement.removeEventListener("pointerout",this._onPointerUp),this.textPhysics&&(this.textPhysics.dispose(),this.textPhysics=null),this.neuralNetworkManager&&(this.neuralNetworkManager.dispose(),this.neuralNetworkManager=null),this.interactiveObjects.forEach(t=>{t.dispose()}),this.interactiveObjects.clear(),this.buttonObjects.clear(),this.renderer.dispose(),this.container.contains(this.renderer.domElement)&&this.container.removeChild(this.renderer.domElement)}_initializeScene(){this.scene=new Bc,this.scene.background=new oe(this.config.scene.background),this.state.backgroundTransition.currentColor=new oe(this.config.scene.background),this.camera=new Qe(this.config.camera.fov,window.innerWidth/window.innerHeight,this.config.camera.near,this.config.camera.far),this.camera.position.set(this.config.camera.position.x,this.config.camera.position.y,this.config.camera.position.z),this.config.camera.rotation&&this.camera.rotation.set(this.config.camera.rotation.x,this.config.camera.rotation.y,this.config.camera.rotation.z),this.config.camera.lookAt&&this.camera.lookAt(this.config.camera.lookAt.x,this.config.camera.lookAt.y,this.config.camera.lookAt.z),this.renderer=new kp({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ao,this.container.appendChild(this.renderer.domElement);const t=new Cn(20,20),e=new Hc({opacity:.3});this.ground=new Ne(t,e),this.ground.position.z=-1,this.ground.rotation.x=0,this.ground.receiveShadow=!0,this.scene.add(this.ground)}_setupLighting(){this.mainLight=new Jc(16777215,.7),this.mainLight.position.set(5,5,5),this.mainLight.castShadow=!0;const t=this.mainLight.shadow.camera;t.near=.1,t.far=100,t.left=-10,t.right=10,t.top=10,t.bottom=-10,this.mainLight.shadow.mapSize.width=2048,this.mainLight.shadow.mapSize.height=2048,this.glareLight=new jc(16777215,1),this.glareLight.position.set(3,3,5),this.glareLight.angle=Math.PI/4,this.glareLight.penumbra=.1,this.glareLight.decay=.5,this.ambientLight=new th(4210752,.6),this.scene.add(this.mainLight),this.scene.add(this.glareLight),this.scene.add(this.ambientLight)}_setupEventListeners(){window.addEventListener("resize",this._onWindowResize.bind(this)),this.renderer.domElement.addEventListener("pointerdown",this._onPointerDown.bind(this)),this.renderer.domElement.addEventListener("pointermove",this._onPointerMove.bind(this)),this.renderer.domElement.addEventListener("pointerup",this._onPointerUp.bind(this)),this.renderer.domElement.addEventListener("pointerout",this._onPointerUp.bind(this))}_onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}_updateMousePosition(t){this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1}_getInteractiveMeshes(){return this.state.currentView==="network"?Array.from(this.buttonObjects).filter(t=>t._props.text==="Debug Camera").map(t=>t.interactiveMesh).filter(t=>t!=null):Array.from(this.interactiveObjects).map(t=>t.interactiveMesh).filter(t=>t!=null)}_findParentObject(t){var e;return((e=t==null?void 0:t.userData)==null?void 0:e.parent)||null}_onPointerDown(t){this._updateMousePosition(t),this.state.isClicking=!0,this.state.clickStartTime=Date.now(),this.state.clickStartPosition=new le(t.clientX,t.clientY),this.raycaster.setFromCamera(this.mouse,this.camera),this.raycaster.layers.set(0),this.raycaster.layers.enable(1);const e=Array.from(this.buttonObjects).map(i=>i.interactiveMesh).filter(i=>i!=null&&i.visible),n=this.raycaster.intersectObjects(e);if(n.length>0){const i=this._findParentObject(n[0].object);if(i){this.config.debug&&console.log(`Button intersected: ${i._props.text}`);return}}if(this.state.currentView==="network")return;const r=this.raycaster.intersectObjects(this._getInteractiveMeshes());if(r.length>0){const i=this._findParentObject(r[0].object);if(i&&!(i instanceof Mi)){this.draggedObject=i;const a={clientX:t.clientX,clientY:t.clientY,ray:this.raycaster.ray,camera:this.camera};i.onDragStart(a),this._bringToFront(i)}}}_onPointerMove(t){const e=this.mouse.x;if(this._updateMousePosition(t),!(this.state.currentView==="network"&&!this.raycaster.intersectObjects(Array.from(this.buttonObjects).filter(n=>n._props.text==="Debug Camera").map(n=>n.interactiveMesh)).length)){if(this.raycaster.setFromCamera(this.mouse,this.camera),this.draggedObject){if(this.draggedObject.config.dragBehavior.enabled){const n=new Mn(new O(0,0,1),0),r=new O;if(this.raycaster.ray.intersectPlane(n,r),this.draggedObject.position.copy(r),this.draggedObject.position.add(this.draggedObject._state.dragOffset),this.draggedObject instanceof Xi){const i=hc.clamp((this.mouse.x-e)*-2,-Math.PI/4,Math.PI/4);this.draggedObject.rotation.z=i}}}else{const n=Array.from(this.buttonObjects).map(o=>o.interactiveMesh).filter(o=>o!=null&&o.visible),r=this.raycaster.intersectObjects(n),i={clientX:t.clientX,clientY:t.clientY,camera:this.camera};this.buttonObjects.forEach(o=>{const h=r.some(d=>this._findParentObject(d.object)===o);h&&!o._state.isHovering?o.onPointerEnter(i):!h&&o._state.isHovering&&o.onPointerLeave(i)});const a=this.raycaster.intersectObjects(this._getInteractiveMeshes());this.interactiveObjects.forEach(o=>{if(o instanceof Mi)return;const h=a.some(d=>this._findParentObject(d.object)===o);h&&!o._state.isHovering?o.onPointerEnter(i):!h&&o._state.isHovering&&o.onPointerLeave(i),h&&o.onPointerMove(i)})}this.state.isClicking&&new le(t.clientX,t.clientY).distanceTo(this.state.clickStartPosition)>this.config.card.selection.moveThreshold&&(this.state.isClicking=!1)}}_onPointerUp(t){const n=Date.now()-this.state.clickStartTime;if(this.state.isClicking&&n<this.config.card.selection.clickThreshold){this.config.debug&&console.log("Click detected"),this._updateMousePosition(t),this.raycaster.setFromCamera(this.mouse,this.camera);const i=Array.from(this.buttonObjects).map(o=>o.interactiveMesh).filter(o=>o!=null&&o.visible),a=this.raycaster.intersectObjects(i);if(a.length>0){const o=this._findParentObject(a[0].object);if(o){console.log(`Button clicked: ${o._props.text}`),typeof o.onDirectClick=="function"?o.onDirectClick(t):console.warn("Button does not have onDirectClick method"),this.state.isClicking=!1;return}}}this.state.isClicking=!1,this.state.currentView!=="network"&&this.draggedObject&&(this.draggedObject.onDragEnd({clientX:t.clientX,clientY:t.clientY}),this.draggedObject=null)}_bringToFront(t){let e=Math.max(...Array.from(this.interactiveObjects).map(n=>n.position.z));t._state.isSelected||(t.position.z=e+.01)}addSelectionListener(t){return typeof t!="function"?()=>{}:(this.state.selectionListeners.add(t),()=>{this.state.selectionListeners.delete(t)})}_notifySelectionChange(){const t=Array.from(this.state.selectedCards);this.state.selectionListeners.forEach(e=>{try{e(t)}catch(n){console.error("Error in selection listener:",n)}})}_handleSelectionChange(t){t instanceof Xi&&(t._state.isSelected?this.state.selectedCards.add(t):this.state.selectedCards.delete(t),this._notifySelectionChange())}getSelectedCards(){return Array.from(this.state.selectedCards)}hasSelectedCards(){return this.state.selectedCards.size>0}addObject(t){return this.interactiveObjects.add(t),t instanceof Mi&&this.buttonObjects.add(t),this.scene.add(t),"setCallback"in t&&(t.setCallback("onSelect",()=>this._handleSelectionChange(t)),t.setCallback("onDeselect",()=>this._handleSelectionChange(t))),t}addCard(t,e={}){const n={width:this.config.card.dimensions.width,height:this.config.card.dimensions.height,springPhysics:{strength:this.config.card.physics.strength,damping:this.config.card.physics.damping,wiggleStrength:this.config.card.physics.wiggleStrength,wiggleDamping:this.config.card.physics.wiggleDamping},dragBehavior:{returnSpeed:this.config.card.dragging.returnSpeed,dampingFactor:this.config.card.dragging.dampingFactor,enabled:!0},selectionBehavior:{enabled:!0,clickThreshold:this.config.card.selection.clickThreshold,moveThreshold:this.config.card.selection.moveThreshold},hoverBehavior:{enabled:!0},...e,texture:t},r=new Xi(n);return r.sceneManager=this,this.addObject(r)}addConfirmButton(t,e){return this.addObject(t),t.setActive(!1),typeof e=="function"&&t.setCallback("onClick",e),this.addSelectionListener(n=>{t.setActive(n.length>0)}),t}addAnalyzeButton(t={}){const e={width:this.config.button.dimensions.analyzeWidth,height:this.config.button.dimensions.analyzeHeight,position:this.config.button.positions.analyze,text:"Analyze Card",fontColor:"#ffffff",activeColor:this.config.button.colors.activeAnalyze,inactiveColor:this.config.button.colors.inactiveAnalyze,...t},n=new Mi(e);return this.addObject(n),n.setActive(!1),n.setCallback("onClick",()=>{console.log("Analyze button clicked!"),this.showNeuralNetwork()}),this.addSelectionListener(r=>{n.setActive(r.length>0)}),n}addDebugCameraButton(){this.config.debug&&console.log("Adding debug camera button");const t=new Mi({width:this.config.button.dimensions.debugWidth,height:this.config.button.dimensions.debugHeight,position:this.config.button.positions.debug,text:"Debug Camera",fontColor:"#ffffff",activeColor:this.config.button.colors.activeDebug,inactiveColor:this.config.button.colors.inactiveDebug});this.addObject(t),t.setActive(!0);let e=!1;return t.setCallback("onClick",()=>{console.log("Debug camera button clicked!"),this.neuralNetworkManager||this.initNeuralNetwork(),e?(console.log("Moving camera back to original position"),this.transitionCamera({position:{x:this.config.camera.position.x,y:this.config.camera.position.y,z:this.config.camera.position.z},rotation:this.config.camera.rotation,lookAt:this.config.camera.lookAt,transitionDuration:this.config.camera.transitionDuration})):(console.log("Moving camera to network view position"),this.transitionCamera({position:{x:this.config.neuralNetwork.camera.position.x,y:this.config.neuralNetwork.camera.position.y,z:this.config.neuralNetwork.camera.position.z},rotation:this.config.neuralNetwork.camera.rotation,lookAt:this.config.neuralNetwork.camera.lookAt,transitionDuration:this.config.neuralNetwork.camera.transitionDuration})),e=!e}),t}removeObject(t){this.interactiveObjects.delete(t),t instanceof Mi&&this.buttonObjects.delete(t),this.scene.remove(t),t.dispose()}updateConfig(t){this.config=this._mergeConfig(this.config,t),this.state.currentView!=="network"&&!this.state.cameraTransition&&(this.config.camera.position&&this.camera.position.set(this.config.camera.position.x,this.config.camera.position.y,this.config.camera.position.z),this.config.camera.rotation&&this.camera.rotation.set(this.config.camera.rotation.x,this.config.camera.rotation.y,this.config.camera.rotation.z),this.config.camera.lookAt&&this.camera.lookAt(this.config.camera.lookAt.x,this.config.camera.lookAt.y,this.config.camera.lookAt.z)),t.scene&&t.scene.background&&this.setBackgroundColor(t.scene.background),t.scene&&t.scene.backgroundTransition&&this.setBackgroundTransition(t.scene.backgroundTransition),this.config.debug&&console.log("Configuration updated:",this.config)}}let Ve,ra;const Yp={debug:!0,camera:{fov:75,near:.1,far:1e3,position:{x:0,y:0,z:5},rotation:{x:0,y:0,z:0},lookAt:{x:0,y:0,z:0},transitionDuration:1e3},scene:{background:51,backgroundTransition:{enabled:!0,colors:[51,3342387,13107],transitionSpeed:.005}},card:{physics:{strength:.35,wiggleStrength:.6},dragging:{returnSpeed:.12}},neuralNetwork:{camera:{position:{x:-10,y:2,z:15},rotation:{x:10,y:.2,z:0},lookAt:{x:0,y:0,z:0},transitionDuration:1200},animation:{connectionsPerNeuron:7,randomDelayFactor:800}}};function Zp(){const s=document.getElementById("app");if(!s)return;Ve=new qp(s,Yp),Ve.initTextPhysics(),new $c().load("./textures/joker.png",e=>{Ve.addCard(e),Ve.addAnalyzeButton(),Ve.addDebugCameraButton(),Ve.animateText("Select a Card"),setTimeout(()=>{console.log("Updating configuration with camera rotation..."),Ve.updateConfig({camera:{rotation:{x:.05,y:-.1,z:.03}},neuralNetwork:{camera:{position:{x:8,y:3,z:20},rotation:{x:-.1,y:.3,z:.05},transitionDuration:1500},animation:{arcHeight:.8,duration:800}}}),setTimeout(()=>{Ve.state.currentView==="card"&&(console.log("Demonstrating smooth camera transition..."),Ve.transitionCamera({position:{x:-2,y:1,z:6},rotation:{x:.1,y:-.2,z:0},transitionDuration:2e3},()=>{console.log("Camera transition complete"),setTimeout(()=>{Ve.transitionCamera({position:Ve.config.camera.position,rotation:Ve.config.camera.rotation,lookAt:Ve.config.camera.lookAt,transitionDuration:2e3})},3e3)}))},2e3)},5e3),ol()})}function ol(){ra=requestAnimationFrame(ol),Ve.update(1/60)}function $p(){ra&&cancelAnimationFrame(ra),Ve&&Ve.dispose()}document.addEventListener("DOMContentLoaded",Zp);window.addEventListener("unload",$p);

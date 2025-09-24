(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oa="171",ul=0,Ea=1,dl=2,Co=1,Ro=2,Sn=3,On=0,Ze=1,en=2,Fn=0,Ti=1,vs=2,wa=3,ba=4,fl=5,$n=100,pl=101,ml=102,vl=103,gl=104,_l=200,xl=201,yl=202,Sl=203,gs=204,_s=205,Ml=206,El=207,wl=208,bl=209,Tl=210,Al=211,Cl=212,Rl=213,Pl=214,xs=0,ys=1,Ss=2,Ri=3,Ms=4,Es=5,ws=6,bs=7,la=0,Ll=1,Dl=2,Bn=0,Il=1,Nl=2,Ul=3,Fl=4,Bl=5,Ol=6,zl=7,Po=300,Pi=301,Li=302,Ts=303,As=304,Nr=306,Cs=1e3,Qn=1001,Rs=1002,cn=1003,Vl=1004,tr=1005,fn=1006,zr=1007,Jn=1008,An=1009,Lo=1010,Do=1011,$i=1012,ca=1013,ei=1014,En=1015,Qi=1016,ha=1017,ua=1018,Di=1020,Io=35902,No=1021,Uo=1022,ln=1023,Fo=1024,Bo=1025,Ai=1026,Ii=1027,Oo=1028,da=1029,zo=1030,fa=1031,pa=1033,br=33776,Tr=33777,Ar=33778,Cr=33779,Ps=35840,Ls=35841,Ds=35842,Is=35843,Ns=36196,Us=37492,Fs=37496,Bs=37808,Os=37809,zs=37810,Vs=37811,ks=37812,Hs=37813,Gs=37814,Ws=37815,Xs=37816,qs=37817,Ys=37818,Zs=37819,js=37820,$s=37821,Rr=36492,Ks=36494,Qs=36495,Vo=36283,Js=36284,ta=36285,ea=36286,kl=3200,Hl=3201,ma=0,Gl=1,Un="",tn="srgb",Ni="srgb-linear",Lr="linear",Ae="srgb",ri=7680,Ta=519,Wl=512,Xl=513,ql=514,ko=515,Yl=516,Zl=517,jl=518,$l=519,na=35044,Aa="300 es",wn=2e3,Dr=2001;class Bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ca=1234567;const Zi=Math.PI/180,Ui=180/Math.PI;function bn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function va(i,t){return(i%t+t)%t}function Kl(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ql(i,t,e){return i!==t?(e-i)/(t-i):0}function ji(i,t,e){return(1-e)*i+e*t}function Jl(i,t,e,n){return ji(i,t,1-Math.exp(-e*n))}function tc(i,t=1){return t-Math.abs(va(i,t*2)-t)}function ec(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ic(i,t){return i+Math.floor(Math.random()*(t-i+1))}function rc(i,t){return i+Math.random()*(t-i)}function sc(i){return i*(.5-Math.random())}function ac(i){i!==void 0&&(Ca=i);let t=Ca+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function oc(i){return i*Zi}function lc(i){return i*Ui}function cc(i){return(i&i-1)===0&&i!==0}function hc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dc(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),u=r((t+n)/2),h=a((t+n)/2),c=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*c,l*d,o*u);break;case"YZY":i.set(l*d,o*h,l*c,o*u);break;case"ZXZ":i.set(l*c,l*d,o*h,o*u);break;case"XZX":i.set(o*h,l*v,l*f,o*u);break;case"YXY":i.set(l*f,o*h,l*v,o*u);break;case"ZYZ":i.set(l*v,l*f,o*h,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const fc={DEG2RAD:Zi,RAD2DEG:Ui,generateUUID:bn,clamp:xe,euclideanModulo:va,mapLinear:Kl,inverseLerp:Ql,lerp:ji,damp:Jl,pingpong:tc,smoothstep:ec,smootherstep:nc,randInt:ic,randFloat:rc,randFloatSpread:sc,seededRandom:ac,degToRad:oc,radToDeg:lc,isPowerOfTwo:cc,ceilPowerOfTwo:hc,floorPowerOfTwo:uc,setQuaternionFromProperEuler:dc,normalize:Te,denormalize:on};class le{constructor(t=0,e=0){le.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(t,e,n,s,r,a,o,l,u){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,u)}set(t,e,n,s,r,a,o,l,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],h=n[4],c=n[7],d=n[2],f=n[5],v=n[8],g=s[0],m=s[3],p=s[6],x=s[1],S=s[4],_=s[7],A=s[2],D=s[5],N=s[8];return r[0]=a*g+o*x+l*A,r[3]=a*m+o*S+l*D,r[6]=a*p+o*_+l*N,r[1]=u*g+h*x+c*A,r[4]=u*m+h*S+c*D,r[7]=u*p+h*_+c*N,r[2]=d*g+f*x+v*A,r[5]=d*m+f*S+v*D,r[8]=d*p+f*_+v*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],u=t[7],h=t[8];return e*a*h-e*o*u-n*r*h+n*o*l+s*r*u-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],u=t[7],h=t[8],c=h*a-o*u,d=o*l-h*r,f=u*r-a*l,v=e*c+n*d+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=c*g,t[1]=(s*u-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=d*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=f*g,t[7]=(n*l-u*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*a+u*o)+a+t,-s*u,s*l,-s*(-u*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Vr.makeScale(t,e)),this}rotate(t){return this.premultiply(Vr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new fe;function Ho(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ki(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pc(){const i=Ki("canvas");return i.style.display="block",i}const Ra={};function Ei(i){i in Ra||(Ra[i]=!0,console.warn(i))}function mc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function vc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pa=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),La=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _c(){const i={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ae&&(s.r=Tn(s.r),s.g=Tn(s.g),s.b=Tn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ae&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?Lr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ni]:{primaries:t,whitePoint:n,transfer:Lr,toXYZ:Pa,fromXYZ:La,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:Ae,toXYZ:Pa,fromXYZ:La,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}const Me=_c();function Tn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let si;class xc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{si===void 0&&(si=Ki("canvas")),si.width=t.width,si.height=t.height;const n=si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ki("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Tn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Tn(e[n]/255)*255):e[n]=Tn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yc=0;class Go{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=bn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(kr(s[a].image)):r.push(kr(s[a]))}else r=kr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sc=0;class ke extends Bi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Qn,s=Qn,r=fn,a=Jn,o=ln,l=An,u=ke.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=bn(),this.name="",this.source=new Go(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Po)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cs:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case Rs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cs:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case Rs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Po;ke.DEFAULT_ANISOTROPY=1;class Pe{constructor(t=0,e=0,n=0,s=1){Pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,u=l[0],h=l[4],c=l[8],d=l[1],f=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(c-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(c+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(u+1)/2,_=(f+1)/2,A=(p+1)/2,D=(h+d)/4,N=(c+g)/4,P=(v+m)/4;return S>_&&S>A?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=D/n,r=N/n):_>A?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=D/s,r=P/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=N/r,s=P/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-v)*(m-v)+(c-g)*(c-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(c-g)/x,this.z=(d-h)/x,this.w=Math.acos((u+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this.w=xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this.w=xe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mc extends Bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Go(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Mc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wo extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ec extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],u=n[s+1],h=n[s+2],c=n[s+3];const d=r[a+0],f=r[a+1],v=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=u,t[e+2]=h,t[e+3]=c;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=v,t[e+3]=g;return}if(c!==g||l!==d||u!==f||h!==v){let m=1-o;const p=l*d+u*f+h*v+c*g,x=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const A=Math.sqrt(S),D=Math.atan2(A,p*x);m=Math.sin(m*D)/A,o=Math.sin(o*D)/A}const _=o*x;if(l=l*m+d*_,u=u*m+f*_,h=h*m+v*_,c=c*m+g*_,m===1-o){const A=1/Math.sqrt(l*l+u*u+h*h+c*c);l*=A,u*=A,h*=A,c*=A}}t[e]=l,t[e+1]=u,t[e+2]=h,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],u=n[s+2],h=n[s+3],c=r[a],d=r[a+1],f=r[a+2],v=r[a+3];return t[e]=o*v+h*c+l*f-u*d,t[e+1]=l*v+h*d+u*c-o*f,t[e+2]=u*v+h*f+o*d-l*c,t[e+3]=h*v-o*c-l*d-u*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,u=o(n/2),h=o(s/2),c=o(r/2),d=l(n/2),f=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=d*h*c+u*f*v,this._y=u*f*c-d*h*v,this._z=u*h*v+d*f*c,this._w=u*h*c-d*f*v;break;case"YXZ":this._x=d*h*c+u*f*v,this._y=u*f*c-d*h*v,this._z=u*h*v-d*f*c,this._w=u*h*c+d*f*v;break;case"ZXY":this._x=d*h*c-u*f*v,this._y=u*f*c+d*h*v,this._z=u*h*v+d*f*c,this._w=u*h*c-d*f*v;break;case"ZYX":this._x=d*h*c-u*f*v,this._y=u*f*c+d*h*v,this._z=u*h*v-d*f*c,this._w=u*h*c+d*f*v;break;case"YZX":this._x=d*h*c+u*f*v,this._y=u*f*c+d*h*v,this._z=u*h*v-d*f*c,this._w=u*h*c-d*f*v;break;case"XZY":this._x=d*h*c-u*f*v,this._y=u*f*c-d*h*v,this._z=u*h*v+d*f*c,this._w=u*h*c+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],u=e[2],h=e[6],c=e[10],d=n+o+c;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-u)*f,this._z=(a-s)*f}else if(n>o&&n>c){const f=2*Math.sqrt(1+n-o-c);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+u)/f}else if(o>c){const f=2*Math.sqrt(1+o-n-c);this._w=(r-u)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+c-n-o);this._w=(a-s)/f,this._x=(r+u)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,u=e._z,h=e._w;return this._x=n*h+a*o+s*u-r*l,this._y=s*h+a*l+r*o-n*u,this._z=r*h+a*u+n*l-s*o,this._w=a*h-n*o-s*l-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,o),c=Math.sin((1-e)*h)/u,d=Math.sin(e*h)/u;return this._w=a*c+this._w*d,this._x=n*c+this._x*d,this._y=s*c+this._y*d,this._z=r*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,e=0,n=0){nt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Da.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Da.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,u=2*(a*s-o*n),h=2*(o*e-r*s),c=2*(r*n-a*e);return this.x=e+l*u+a*c-o*h,this.y=n+l*h+o*u-r*c,this.z=s+l*c+r*h-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hr.copy(this).projectOnVector(t),this.sub(Hr)}reflect(t){return this.sub(Hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new nt,Da=new ii;class Ji{constructor(t=new nt(1/0,1/0,1/0),e=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(t.matrixWorld),this.union(er)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zi),nr.subVectors(this.max,zi),ai.subVectors(t.a,zi),oi.subVectors(t.b,zi),li.subVectors(t.c,zi),Rn.subVectors(oi,ai),Pn.subVectors(li,oi),Gn.subVectors(ai,li);let e=[0,-Rn.z,Rn.y,0,-Pn.z,Pn.y,0,-Gn.z,Gn.y,Rn.z,0,-Rn.x,Pn.z,0,-Pn.x,Gn.z,0,-Gn.x,-Rn.y,Rn.x,0,-Pn.y,Pn.x,0,-Gn.y,Gn.x,0];return!Gr(e,ai,oi,li,nr)||(e=[1,0,0,0,1,0,0,0,1],!Gr(e,ai,oi,li,nr))?!1:(ir.crossVectors(Rn,Pn),e=[ir.x,ir.y,ir.z],Gr(e,ai,oi,li,nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mn=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],rn=new nt,er=new Ji,ai=new nt,oi=new nt,li=new nt,Rn=new nt,Pn=new nt,Gn=new nt,zi=new nt,nr=new nt,ir=new nt,Wn=new nt;function Gr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wn.fromArray(i,r);const o=s.x*Math.abs(Wn.x)+s.y*Math.abs(Wn.y)+s.z*Math.abs(Wn.z),l=t.dot(Wn),u=e.dot(Wn),h=n.dot(Wn);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const wc=new Ji,Vi=new nt,Wr=new nt;class ga{constructor(t=new nt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vi.subVectors(t,this.center);const e=Vi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Vi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vi.copy(t.center).add(Wr)),this.expandByPoint(Vi.copy(t.center).sub(Wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new nt,Xr=new nt,rr=new nt,Ln=new nt,qr=new nt,sr=new nt,Yr=new nt;class Xo{constructor(t=new nt,e=new nt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xr.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(Xr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(rr),o=Ln.dot(this.direction),l=-Ln.dot(rr),u=Ln.lengthSq(),h=Math.abs(1-a*a);let c,d,f,v;if(h>0)if(c=a*l-o,d=a*o-l,v=r*h,c>=0)if(d>=-v)if(d<=v){const g=1/h;c*=g,d*=g,f=c*(c+a*d+2*o)+d*(a*c+d+2*l)+u}else d=r,c=Math.max(0,-(a*d+o)),f=-c*c+d*(d+2*l)+u;else d=-r,c=Math.max(0,-(a*d+o)),f=-c*c+d*(d+2*l)+u;else d<=-v?(c=Math.max(0,-(-a*r+o)),d=c>0?-r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+u):d<=v?(c=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+u):(c=Math.max(0,-(a*r+o)),d=c>0?r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+u);else d=a>0?-r:r,c=Math.max(0,-(a*d+o)),f=-c*c+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(Xr).addScaledVector(rr,d),f}intersectSphere(t,e){vn.subVectors(t.center,this.origin);const n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),c>=0?(o=(t.min.z-d.z)*c,l=(t.max.z-d.z)*c):(o=(t.max.z-d.z)*c,l=(t.min.z-d.z)*c),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,s,r){qr.subVectors(e,t),sr.subVectors(n,t),Yr.crossVectors(qr,sr);let a=this.direction.dot(Yr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,t);const l=o*this.direction.dot(sr.crossVectors(Ln,sr));if(l<0)return null;const u=o*this.direction.dot(qr.cross(Ln));if(u<0||l+u>a)return null;const h=-o*Ln.dot(Yr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(t,e,n,s,r,a,o,l,u,h,c,d,f,v,g,m){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,u,h,c,d,f,v,g,m)}set(t,e,n,s,r,a,o,l,u,h,c,d,f,v,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=u,p[6]=h,p[10]=c,p[14]=d,p[3]=f,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ci.setFromMatrixColumn(t,0).length(),r=1/ci.setFromMatrixColumn(t,1).length(),a=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),u=Math.sin(s),h=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*c,v=o*h,g=o*c;e[0]=l*h,e[4]=-l*c,e[8]=u,e[1]=f+v*u,e[5]=d-g*u,e[9]=-o*l,e[2]=g-d*u,e[6]=v+f*u,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*c,v=u*h,g=u*c;e[0]=d+g*o,e[4]=v*o-f,e[8]=a*u,e[1]=a*c,e[5]=a*h,e[9]=-o,e[2]=f*o-v,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*c,v=u*h,g=u*c;e[0]=d-g*o,e[4]=-a*c,e[8]=v+f*o,e[1]=f+v*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*u,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*c,v=o*h,g=o*c;e[0]=l*h,e[4]=v*u-f,e[8]=d*u+g,e[1]=l*c,e[5]=g*u+d,e[9]=f*u-v,e[2]=-u,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*u,v=o*l,g=o*u;e[0]=l*h,e[4]=g-d*c,e[8]=v*c+f,e[1]=c,e[5]=a*h,e[9]=-o*h,e[2]=-u*h,e[6]=f*c+v,e[10]=d-g*c}else if(t.order==="XZY"){const d=a*l,f=a*u,v=o*l,g=o*u;e[0]=l*h,e[4]=-c,e[8]=u*h,e[1]=d*c+g,e[5]=a*h,e[9]=f*c-v,e[2]=v*c-f,e[6]=o*h,e[10]=g*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bc,t,Tc)}lookAt(t,e,n){const s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Dn.crossVectors(n,$e),Dn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Dn.crossVectors(n,$e)),Dn.normalize(),ar.crossVectors($e,Dn),s[0]=Dn.x,s[4]=ar.x,s[8]=$e.x,s[1]=Dn.y,s[5]=ar.y,s[9]=$e.y,s[2]=Dn.z,s[6]=ar.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],h=n[1],c=n[5],d=n[9],f=n[13],v=n[2],g=n[6],m=n[10],p=n[14],x=n[3],S=n[7],_=n[11],A=n[15],D=s[0],N=s[4],P=s[8],E=s[12],y=s[1],b=s[5],B=s[9],U=s[13],X=s[2],q=s[6],J=s[10],O=s[14],L=s[3],Q=s[7],$=s[11],F=s[15];return r[0]=a*D+o*y+l*X+u*L,r[4]=a*N+o*b+l*q+u*Q,r[8]=a*P+o*B+l*J+u*$,r[12]=a*E+o*U+l*O+u*F,r[1]=h*D+c*y+d*X+f*L,r[5]=h*N+c*b+d*q+f*Q,r[9]=h*P+c*B+d*J+f*$,r[13]=h*E+c*U+d*O+f*F,r[2]=v*D+g*y+m*X+p*L,r[6]=v*N+g*b+m*q+p*Q,r[10]=v*P+g*B+m*J+p*$,r[14]=v*E+g*U+m*O+p*F,r[3]=x*D+S*y+_*X+A*L,r[7]=x*N+S*b+_*q+A*Q,r[11]=x*P+S*B+_*J+A*$,r[15]=x*E+S*U+_*O+A*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],u=t[13],h=t[2],c=t[6],d=t[10],f=t[14],v=t[3],g=t[7],m=t[11],p=t[15];return v*(+r*l*c-s*u*c-r*o*d+n*u*d+s*o*f-n*l*f)+g*(+e*l*f-e*u*d+r*a*d-s*a*f+s*u*h-r*l*h)+m*(+e*u*c-e*o*f-r*a*c+n*a*f+r*o*h-n*u*h)+p*(-s*o*h-e*l*c+e*o*d+s*a*c-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],u=t[7],h=t[8],c=t[9],d=t[10],f=t[11],v=t[12],g=t[13],m=t[14],p=t[15],x=c*m*u-g*d*u+g*l*f-o*m*f-c*l*p+o*d*p,S=v*d*u-h*m*u-v*l*f+a*m*f+h*l*p-a*d*p,_=h*g*u-v*c*u+v*o*f-a*g*f-h*o*p+a*c*p,A=v*c*l-h*g*l-v*o*d+a*g*d+h*o*m-a*c*m,D=e*x+n*S+s*_+r*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/D;return t[0]=x*N,t[1]=(g*d*r-c*m*r-g*s*f+n*m*f+c*s*p-n*d*p)*N,t[2]=(o*m*r-g*l*r+g*s*u-n*m*u-o*s*p+n*l*p)*N,t[3]=(c*l*r-o*d*r-c*s*u+n*d*u+o*s*f-n*l*f)*N,t[4]=S*N,t[5]=(h*m*r-v*d*r+v*s*f-e*m*f-h*s*p+e*d*p)*N,t[6]=(v*l*r-a*m*r-v*s*u+e*m*u+a*s*p-e*l*p)*N,t[7]=(a*d*r-h*l*r+h*s*u-e*d*u-a*s*f+e*l*f)*N,t[8]=_*N,t[9]=(v*c*r-h*g*r-v*n*f+e*g*f+h*n*p-e*c*p)*N,t[10]=(a*g*r-v*o*r+v*n*u-e*g*u-a*n*p+e*o*p)*N,t[11]=(h*o*r-a*c*r-h*n*u+e*c*u+a*n*f-e*o*f)*N,t[12]=A*N,t[13]=(h*g*s-v*c*s+v*n*d-e*g*d-h*n*m+e*c*m)*N,t[14]=(v*o*s-a*g*s-v*n*l+e*g*l+a*n*m-e*o*m)*N,t[15]=(a*c*s-h*o*s+h*n*l-e*c*l-a*n*d+e*o*d)*N,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*l,u*l+s*o,0,u*o+s*l,h*o+n,h*l-s*a,0,u*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,u=r+r,h=a+a,c=o+o,d=r*u,f=r*h,v=r*c,g=a*h,m=a*c,p=o*c,x=l*u,S=l*h,_=l*c,A=n.x,D=n.y,N=n.z;return s[0]=(1-(g+p))*A,s[1]=(f+_)*A,s[2]=(v-S)*A,s[3]=0,s[4]=(f-_)*D,s[5]=(1-(d+p))*D,s[6]=(m+x)*D,s[7]=0,s[8]=(v+S)*N,s[9]=(m-x)*N,s[10]=(1-(d+g))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ci.set(s[0],s[1],s[2]).length();const a=ci.set(s[4],s[5],s[6]).length(),o=ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],sn.copy(this);const u=1/r,h=1/a,c=1/o;return sn.elements[0]*=u,sn.elements[1]*=u,sn.elements[2]*=u,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=c,sn.elements[9]*=c,sn.elements[10]*=c,e.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=wn){const l=this.elements,u=2*r/(e-t),h=2*r/(n-s),c=(e+t)/(e-t),d=(n+s)/(n-s);let f,v;if(o===wn)f=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Dr)f=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=wn){const l=this.elements,u=1/(e-t),h=1/(n-s),c=1/(a-r),d=(e+t)*u,f=(n+s)*h;let v,g;if(o===wn)v=(a+r)*c,g=-2*c;else if(o===Dr)v=r*c,g=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ci=new nt,sn=new Ce,bc=new nt(0,0,0),Tc=new nt(1,1,1),Dn=new nt,ar=new nt,$e=new nt,Ia=new Ce,Na=new ii;class We{constructor(t=0,e=0,n=0,s=We.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],u=s[5],h=s[9],c=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ia.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ia,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Na.setFromEuler(this),this.setFromQuaternion(Na,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}We.DEFAULT_ORDER="XYZ";class _a{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ac=0;const Ua=new nt,hi=new ii,gn=new Ce,or=new nt,ki=new nt,Cc=new nt,Rc=new ii,Fa=new nt(1,0,0),Ba=new nt(0,1,0),Oa=new nt(0,0,1),za={type:"added"},Pc={type:"removed"},ui={type:"childadded",child:null},Zr={type:"childremoved",child:null};class Ie extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new nt,e=new We,n=new ii,s=new nt(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new fe}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(Fa,t)}rotateY(t){return this.rotateOnAxis(Ba,t)}rotateZ(t){return this.rotateOnAxis(Oa,t)}translateOnAxis(t,e){return Ua.copy(t).applyQuaternion(this.quaternion),this.position.add(Ua.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fa,t)}translateY(t){return this.translateOnAxis(Ba,t)}translateZ(t){return this.translateOnAxis(Oa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(ki,or,this.up):gn.lookAt(or,ki,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(gn),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(za),ui.child=t,this.dispatchEvent(ui),ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pc),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(za),ui.child=t,this.dispatchEvent(ui),ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,t,Cc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,Rc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const c=l[u];r(t.shapes,c)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),u=a(t.textures),h=a(t.images),c=a(t.shapes),d=a(t.skeletons),f=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new nt(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new nt,_n=new nt,jr=new nt,xn=new nt,di=new nt,fi=new nt,Va=new nt,$r=new nt,Kr=new nt,Qr=new nt,Jr=new Pe,ts=new Pe,es=new Pe;class nn{constructor(t=new nt,e=new nt,n=new nt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),_n.subVectors(n,e),jr.subVectors(t,e);const a=an.dot(an),o=an.dot(_n),l=an.dot(jr),u=_n.dot(_n),h=_n.dot(jr),c=a*u-o*o;if(c===0)return r.set(0,0,0),null;const d=1/c,f=(u*l-o*h)*d,v=(a*h-o*l)*d;return r.set(1-f-v,v,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Jr.setScalar(0),ts.setScalar(0),es.setScalar(0),Jr.fromBufferAttribute(t,e),ts.fromBufferAttribute(t,n),es.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Jr,r.x),a.addScaledVector(ts,r.y),a.addScaledVector(es,r.z),a}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),_n.subVectors(t,e),an.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),an.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;di.subVectors(s,n),fi.subVectors(r,n),$r.subVectors(t,n);const l=di.dot($r),u=fi.dot($r);if(l<=0&&u<=0)return e.copy(n);Kr.subVectors(t,s);const h=di.dot(Kr),c=fi.dot(Kr);if(h>=0&&c<=h)return e.copy(s);const d=l*c-h*u;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(di,a);Qr.subVectors(t,r);const f=di.dot(Qr),v=fi.dot(Qr);if(v>=0&&f<=v)return e.copy(r);const g=f*u-l*v;if(g<=0&&u>=0&&v<=0)return o=u/(u-v),e.copy(n).addScaledVector(fi,o);const m=h*v-f*c;if(m<=0&&c-h>=0&&f-v>=0)return Va.subVectors(r,s),o=(c-h)/(c-h+(f-v)),e.copy(s).addScaledVector(Va,o);const p=1/(m+g+d);return a=g*p,o=d*p,e.copy(n).addScaledVector(di,a).addScaledVector(fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},lr={h:0,s:0,l:0};function ns(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class oe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Me.workingColorSpace){if(t=va(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ns(a,r,t+1/3),this.g=ns(a,r,t),this.b=ns(a,r,t-1/3)}return Me.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const n=qo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Me.fromWorkingColorSpace(ze.copy(this),t),Math.round(xe(ze.r*255,0,255))*65536+Math.round(xe(ze.g*255,0,255))*256+Math.round(xe(ze.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.fromWorkingColorSpace(ze.copy(this),e);const n=ze.r,s=ze.g,r=ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const c=a-o;switch(u=h<=.5?c/(a+o):c/(2-a-o),a){case n:l=(s-r)/c+(s<r?6:0);break;case s:l=(r-n)/c+2;break;case r:l=(n-s)/c+4;break}l/=6}return t.h=l,t.s=u,t.l=h,t}getRGB(t,e=Me.workingColorSpace){return Me.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=tn){Me.fromWorkingColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,s=ze.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(lr);const n=ji(In.h,lr.h,e),s=ji(In.s,lr.s,e),r=ji(In.l,lr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new oe;oe.NAMES=qo;let Lc=0;class Vn extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=Ti,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gs,this.blendDst=_s,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ta,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gs&&(n.blendSrc=this.blendSrc),this.blendDst!==_s&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ta&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ur extends Vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new nt,cr=new le;class hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=na,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=on(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=on(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=on(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=on(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==na&&(t.usage=this.usage),t}}class Yo extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zo extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ti extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Dc=0;const Je=new Ce,is=new Ie,pi=new nt,Ke=new Ji,Hi=new Ji,Be=new nt;class kn extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ho(t)?Zo:Yo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return is.lookAt(t),is.updateMatrix(),this.applyMatrix4(is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ti(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ga);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Hi.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(Ke.min,Hi.min),Ke.expandByPoint(Be),Be.addVectors(Ke.max,Hi.max),Ke.expandByPoint(Be)):(Ke.expandByPoint(Hi.min),Ke.expandByPoint(Hi.max))}Ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Be.fromBufferAttribute(o,u),l&&(pi.fromBufferAttribute(t,u),Be.add(pi)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new nt,l[P]=new nt;const u=new nt,h=new nt,c=new nt,d=new le,f=new le,v=new le,g=new nt,m=new nt;function p(P,E,y){u.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),c.fromBufferAttribute(n,y),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,E),v.fromBufferAttribute(r,y),h.sub(u),c.sub(u),f.sub(d),v.sub(d);const b=1/(f.x*v.y-v.x*f.y);isFinite(b)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(c,-f.y).multiplyScalar(b),m.copy(c).multiplyScalar(f.x).addScaledVector(h,-v.x).multiplyScalar(b),o[P].add(g),o[E].add(g),o[y].add(g),l[P].add(m),l[E].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,E=x.length;P<E;++P){const y=x[P],b=y.start,B=y.count;for(let U=b,X=b+B;U<X;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const S=new nt,_=new nt,A=new nt,D=new nt;function N(P){A.fromBufferAttribute(s,P),D.copy(A);const E=o[P];S.copy(E),S.sub(A.multiplyScalar(A.dot(E))).normalize(),_.crossVectors(D,E);const b=_.dot(l[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,b)}for(let P=0,E=x.length;P<E;++P){const y=x[P],b=y.start,B=y.count;for(let U=b,X=b+B;U<X;U+=3)N(t.getX(U+0)),N(t.getX(U+1)),N(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new nt,r=new nt,a=new nt,o=new nt,l=new nt,u=new nt,h=new nt,c=new nt;if(t)for(let d=0,f=t.count;d<f;d+=3){const v=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),c.subVectors(s,r),h.cross(c),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),u.fromBufferAttribute(n,m),o.add(h),l.add(h),u.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),c.subVectors(s,r),h.cross(c),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,l){const u=o.array,h=o.itemSize,c=o.normalized,d=new u.constructor(l.length*h);let f=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[v++]=u[f++]}return new hn(d,h,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new kn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],u=t(l,n);e.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const l=[],u=r[o];for(let h=0,c=u.length;h<c;h++){const d=u[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let c=0,d=u.length;c<d;c++){const f=u[c];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(e))}const r=t.morphAttributes;for(const u in r){const h=[],c=r[u];for(let d=0,f=c.length;d<f;d++)h.push(c[d].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const c=a[u];this.addGroup(c.start,c.count,c.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ka=new Ce,Xn=new Xo,hr=new ga,Ha=new nt,ur=new nt,dr=new nt,fr=new nt,rs=new nt,pr=new nt,Ga=new nt,mr=new nt;class Ne extends Ie{constructor(t=new kn,e=new Ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){pr.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const h=o[l],c=r[l];h!==0&&(rs.fromBufferAttribute(c,t),a?pr.addScaledVector(rs,h):pr.addScaledVector(rs.sub(e),h))}e.add(pr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),Xn.copy(t.ray).recast(t.near),!(hr.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(hr,Ha)===null||Xn.origin.distanceToSquared(Ha)>(t.far-t.near)**2))&&(ka.copy(r).invert(),Xn.copy(t.ray).applyMatrix4(ka),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,c=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=a[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,A=S;_<A;_+=3){const D=o.getX(_),N=o.getX(_+1),P=o.getX(_+2);s=vr(this,p,t,n,u,h,c,D,N,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const x=o.getX(m),S=o.getX(m+1),_=o.getX(m+2);s=vr(this,a,t,n,u,h,c,x,S,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=a[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,A=S;_<A;_+=3){const D=_,N=_+1,P=_+2;s=vr(this,p,t,n,u,h,c,D,N,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const x=m,S=m+1,_=m+2;s=vr(this,a,t,n,u,h,c,x,S,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ic(i,t,e,n,s,r,a,o){let l;if(t.side===Ze?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===On,o),l===null)return null;mr.copy(o),mr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(mr);return u<e.near||u>e.far?null:{distance:u,point:mr.clone(),object:i}}function vr(i,t,e,n,s,r,a,o,l,u){i.getVertexPosition(o,ur),i.getVertexPosition(l,dr),i.getVertexPosition(u,fr);const h=Ic(i,t,e,n,ur,dr,fr,Ga);if(h){const c=new nt;nn.getBarycoord(Ga,ur,dr,fr,c),s&&(h.uv=nn.getInterpolatedAttribute(s,o,l,u,c,new le)),r&&(h.uv1=nn.getInterpolatedAttribute(r,o,l,u,c,new le)),a&&(h.normal=nn.getInterpolatedAttribute(a,o,l,u,c,new nt),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new nt,materialIndex:0};nn.getNormal(ur,dr,fr,d.normal),h.face=d,h.barycoord=c}return h}class pn extends kn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],u=[],h=[],c=[];let d=0,f=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ti(u,3)),this.setAttribute("normal",new ti(h,3)),this.setAttribute("uv",new ti(c,2));function v(g,m,p,x,S,_,A,D,N,P,E){const y=_/N,b=A/P,B=_/2,U=A/2,X=D/2,q=N+1,J=P+1;let O=0,L=0;const Q=new nt;for(let $=0;$<J;$++){const F=$*b-U;for(let K=0;K<q;K++){const z=K*y-B;Q[g]=z*x,Q[m]=F*S,Q[p]=X,u.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[p]=D>0?1:-1,h.push(Q.x,Q.y,Q.z),c.push(K/N),c.push(1-$/P),O+=1}}for(let $=0;$<P;$++)for(let F=0;F<N;F++){const K=d+F+q*$,z=d+F+q*($+1),T=d+(F+1)+q*($+1),C=d+(F+1)+q*$;l.push(K,z,C),l.push(z,T,C),L+=6}o.addGroup(f,L,E),f+=L,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ge(i){const t={};for(let e=0;e<i.length;e++){const n=Fi(i[e]);for(const s in n)t[s]=n[s]}return t}function Nc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jo(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}const Uc={clone:Fi,merge:Ge};var Fc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends Vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fc,this.fragmentShader=Bc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=Nc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $o extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new nt,Wa=new le,Xa=new le;class Qe extends $o{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ui*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ui*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,Wa,Xa),e.subVectors(Xa,Wa)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/u,s*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mi=-90,vi=1;class Oc extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(mi,vi,t,e);s.layers=this.layers,this.add(s);const r=new Qe(mi,vi,t,e);r.layers=this.layers,this.add(r);const a=new Qe(mi,vi,t,e);a.layers=this.layers,this.add(a);const o=new Qe(mi,vi,t,e);o.layers=this.layers,this.add(o);const l=new Qe(mi,vi,t,e);l.layers=this.layers,this.add(l);const u=new Qe(mi,vi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const u of e)this.remove(u);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,u,h]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(c,d,f),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Ko extends ke{constructor(t,e,n,s,r,a,o,l,u,h){t=t!==void 0?t:[],e=e!==void 0?e:Pi,super(t,e,n,s,r,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zc extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ko(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Fn});r.uniforms.tEquirect.value=e;const a=new Ne(s,r),o=e.minFilter;return e.minFilter===Jn&&(e.minFilter=fn),new Oc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Vc extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new We,this.environmentIntensity=1,this.environmentRotation=new We,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class kc{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=na,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new nt;class Ir{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=on(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=on(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=on(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=on(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ir(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qo extends Vn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let gi;const Gi=new nt,_i=new nt,xi=new nt,yi=new le,Wi=new le,Jo=new Ce,gr=new nt,Xi=new nt,_r=new nt,qa=new le,ss=new le,Ya=new le;class Hc extends Ie{constructor(t=new Qo){if(super(),this.isSprite=!0,this.type="Sprite",gi===void 0){gi=new kn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kc(e,5);gi.setIndex([0,1,2,0,2,3]),gi.setAttribute("position",new Ir(n,3,0,!1)),gi.setAttribute("uv",new Ir(n,2,3,!1))}this.geometry=gi,this.material=t,this.center=new le(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_i.setFromMatrixScale(this.matrixWorld),Jo.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_i.multiplyScalar(-xi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;xr(gr.set(-.5,-.5,0),xi,a,_i,s,r),xr(Xi.set(.5,-.5,0),xi,a,_i,s,r),xr(_r.set(.5,.5,0),xi,a,_i,s,r),qa.set(0,0),ss.set(1,0),Ya.set(1,1);let o=t.ray.intersectTriangle(gr,Xi,_r,!1,Gi);if(o===null&&(xr(Xi.set(-.5,.5,0),xi,a,_i,s,r),ss.set(0,1),o=t.ray.intersectTriangle(gr,_r,Xi,!1,Gi),o===null))return;const l=t.ray.origin.distanceTo(Gi);l<t.near||l>t.far||e.push({distance:l,point:Gi.clone(),uv:nn.getInterpolation(Gi,gr,Xi,_r,qa,ss,Ya,new le),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xr(i,t,e,n,s,r){yi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Wi.x=r*yi.x-s*yi.y,Wi.y=s*yi.x+r*yi.y):Wi.copy(yi),i.copy(t),i.x+=Wi.x,i.y+=Wi.y,i.applyMatrix4(Jo)}const as=new nt,Gc=new nt,Wc=new fe;class Mn{constructor(t=new nt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=as.subVectors(n,e).cross(Gc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(as),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wc.getNormalMatrix(t),s=this.coplanarPoint(as).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new ga,yr=new nt;class xa{constructor(t=new Mn,e=new Mn,n=new Mn,s=new Mn,r=new Mn,a=new Mn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],u=s[4],h=s[5],c=s[6],d=s[7],f=s[8],v=s[9],g=s[10],m=s[11],p=s[12],x=s[13],S=s[14],_=s[15];if(n[0].setComponents(l-r,d-u,m-f,_-p).normalize(),n[1].setComponents(l+r,d+u,m+f,_+p).normalize(),n[2].setComponents(l+a,d+h,m+v,_+x).normalize(),n[3].setComponents(l-a,d-h,m-v,_-x).normalize(),n[4].setComponents(l-o,d-c,m-g,_-S).normalize(),e===wn)n[5].setComponents(l+o,d+c,m+g,_+S).normalize();else if(e===Dr)n[5].setComponents(o,c,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(yr.x=s.normal.x>0?t.max.x:t.min.x,yr.y=s.normal.y>0?t.max.y:t.min.y,yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qi extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Fr extends ke{constructor(t,e,n,s,r,a,o,l,u){super(t,e,n,s,r,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tl extends ke{constructor(t,e,n,s,r,a,o,l,u,h=Ai){if(h!==Ai&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ai&&(n=ei),n===void 0&&h===Ii&&(n=Di),super(null,s,r,a,o,l,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Cn extends kn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),u=o+1,h=l+1,c=t/o,d=e/l,f=[],v=[],g=[],m=[];for(let p=0;p<h;p++){const x=p*d-a;for(let S=0;S<u;S++){const _=S*c-r;v.push(_,-x,0),g.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const S=x+u*p,_=x+u*(p+1),A=x+1+u*(p+1),D=x+1+u*p;f.push(S,_,D),f.push(_,A,D)}this.setIndex(f),this.setAttribute("position",new ti(v,3)),this.setAttribute("normal",new ti(g,3)),this.setAttribute("uv",new ti(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Xc extends Vn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new oe(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class qc extends Vn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wi extends Vn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new oe(16777215),this.specular=new oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yc extends Vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zc extends Vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Za={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class el{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,c){return u.push(h,c),this},this.removeHandler=function(h){const c=u.indexOf(h);return c!==-1&&u.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=u.length;c<d;c+=2){const f=u[c],v=u[c+1];if(f.global&&(f.lastIndex=0),f.test(h))return v}return null}}}const jc=new el;class ya{constructor(t){this.manager=t!==void 0?t:jc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ya.DEFAULT_MATERIAL_NAME="__DEFAULT";class $c extends ya{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Za.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Ki("img");function l(){h(),Za.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(c){h(),s&&s(c),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Kc extends ya{constructor(t){super(t)}load(t,e,n,s){const r=new ke,a=new $c(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Sa extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const os=new Ce,ja=new nt,$a=new nt;class nl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ja.setFromMatrixPosition(t.matrixWorld),e.position.copy(ja),$a.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($a),e.updateMatrixWorld(),os.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(os),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(os)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Qc extends nl{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ui*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Jc extends Sa{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Qc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class il extends $o{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class th extends nl{constructor(){super(new il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eh extends Sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new th}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class nh extends Sa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ih extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ka(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ka();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ka(){return performance.now()}const Qa=new Ce;class sh{constructor(t,e,n=0,s=1/0){this.ray=new Xo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new _a,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Qa.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qa),this}intersectObject(t,e=!0,n=[]){return ia(t,this,n,e),n.sort(Ja),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ia(t[s],this,n,e);return n.sort(Ja),n}}function Ja(i,t){return i.distance-t.distance}function ia(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ia(r[a],t,e,!0)}}function to(i,t,e,n){const s=ah(n);switch(e){case No:return i*t;case Fo:return i*t;case Bo:return i*t*2;case Oo:return i*t/s.components*s.byteLength;case da:return i*t/s.components*s.byteLength;case zo:return i*t*2/s.components*s.byteLength;case fa:return i*t*2/s.components*s.byteLength;case Uo:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case pa:return i*t*4/s.components*s.byteLength;case br:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ar:case Cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ls:case Is:return Math.max(i,16)*Math.max(t,8)/4;case Ps:case Ds:return Math.max(i,8)*Math.max(t,8)/2;case Ns:case Us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Os:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zs:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vs:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ks:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Hs:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Gs:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ws:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xs:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qs:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ys:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zs:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case js:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $s:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rr:case Ks:case Qs:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vo:case Js:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ta:case ea:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ah(i){switch(i){case An:case Lo:return{byteLength:1,components:1};case $i:case Do:case Qi:return{byteLength:2,components:1};case ha:case ua:return{byteLength:2,components:4};case ei:case ca:case En:return{byteLength:4,components:1};case Io:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oa);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function oh(i){const t=new WeakMap;function e(o,l){const u=o.array,h=o.usage,c=u.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,u,h),o.onUploadCallback();let f;if(u instanceof Float32Array)f=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=i.SHORT;else if(u instanceof Uint32Array)f=i.UNSIGNED_INT;else if(u instanceof Int32Array)f=i.INT;else if(u instanceof Int8Array)f=i.BYTE;else if(u instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:c}}function n(o,l,u){const h=l.array,c=l.updateRanges;if(i.bindBuffer(u,o),c.length===0)i.bufferSubData(u,0,h);else{c.sort((f,v)=>f.start-v.start);let d=0;for(let f=1;f<c.length;f++){const v=c[d],g=c[f];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,c[d]=g)}c.length=d+1;for(let f=0,v=c.length;f<v;f++){const g=c[f];i.bufferSubData(u,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:s,remove:r,update:a}}var lh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ch=`#ifdef USE_ALPHAHASH
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
#endif`,hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ph=`#ifdef USE_AOMAP
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
#endif`,mh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vh=`#ifdef USE_BATCHING
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
#endif`,gh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_h=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sh=`#ifdef USE_IRIDESCENCE
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
#endif`,Mh=`#ifdef USE_BUMPMAP
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
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lh=`#define PI 3.141592653589793
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
} // validated`,Dh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ih=`vec3 transformedNormal = objectNormal;
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
#endif`,Nh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oh="gl_FragColor = linearToOutputTexel( gl_FragColor );",zh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vh=`#ifdef USE_ENVMAP
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
#endif`,kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hh=`#ifdef USE_ENVMAP
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
#endif`,Gh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wh=`#ifdef USE_ENVMAP
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
#endif`,Xh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jh=`#ifdef USE_GRADIENTMAP
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
}`,$h=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jh=`uniform bool receiveShadow;
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
#endif`,tu=`#ifdef USE_ENVMAP
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
#endif`,eu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,su=`PhysicalMaterial material;
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
#endif`,au=`struct PhysicalMaterial {
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
}`,ou=`
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
#endif`,lu=`#if defined( RE_IndirectDiffuse )
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
#endif`,cu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,du=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gu=`#if defined( USE_POINTS_UV )
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
#endif`,_u=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Su=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eu=`#ifdef USE_MORPHTARGETS
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
#endif`,wu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Au=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ru=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pu=`#ifdef USE_NORMALMAP
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
#endif`,Lu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Du=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ou=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ku=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qu=`float getShadowMask() {
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
}`,Yu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zu=`#ifdef USE_SKINNING
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
#endif`,ju=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$u=`#ifdef USE_SKINNING
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
#endif`,Ku=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ju=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,td=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ed=`#ifdef USE_TRANSMISSION
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
#endif`,nd=`#ifdef USE_TRANSMISSION
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
#endif`,id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ad=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ld=`uniform sampler2D t2D;
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
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fd=`#include <common>
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
}`,pd=`#if DEPTH_PACKING == 3200
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
}`,md=`#define DISTANCE
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
}`,vd=`#define DISTANCE
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
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_d=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xd=`uniform float scale;
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
}`,yd=`uniform vec3 diffuse;
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
}`,Sd=`#include <common>
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
}`,Md=`uniform vec3 diffuse;
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
}`,Ed=`#define LAMBERT
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
}`,wd=`#define LAMBERT
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
}`,bd=`#define MATCAP
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
}`,Td=`#define MATCAP
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
}`,Ad=`#define NORMAL
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
}`,Cd=`#define NORMAL
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
}`,Rd=`#define PHONG
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
}`,Pd=`#define PHONG
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
}`,Ld=`#define STANDARD
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
}`,Dd=`#define STANDARD
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
}`,Id=`#define TOON
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
}`,Nd=`#define TOON
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
}`,Ud=`uniform float size;
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
}`,Fd=`uniform vec3 diffuse;
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
}`,Bd=`#include <common>
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
}`,Od=`uniform vec3 color;
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
}`,zd=`uniform float rotation;
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
}`,Vd=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:lh,alphahash_pars_fragment:ch,alphamap_fragment:hh,alphamap_pars_fragment:uh,alphatest_fragment:dh,alphatest_pars_fragment:fh,aomap_fragment:ph,aomap_pars_fragment:mh,batching_pars_vertex:vh,batching_vertex:gh,begin_vertex:_h,beginnormal_vertex:xh,bsdfs:yh,iridescence_fragment:Sh,bumpmap_pars_fragment:Mh,clipping_planes_fragment:Eh,clipping_planes_pars_fragment:wh,clipping_planes_pars_vertex:bh,clipping_planes_vertex:Th,color_fragment:Ah,color_pars_fragment:Ch,color_pars_vertex:Rh,color_vertex:Ph,common:Lh,cube_uv_reflection_fragment:Dh,defaultnormal_vertex:Ih,displacementmap_pars_vertex:Nh,displacementmap_vertex:Uh,emissivemap_fragment:Fh,emissivemap_pars_fragment:Bh,colorspace_fragment:Oh,colorspace_pars_fragment:zh,envmap_fragment:Vh,envmap_common_pars_fragment:kh,envmap_pars_fragment:Hh,envmap_pars_vertex:Gh,envmap_physical_pars_fragment:tu,envmap_vertex:Wh,fog_vertex:Xh,fog_pars_vertex:qh,fog_fragment:Yh,fog_pars_fragment:Zh,gradientmap_pars_fragment:jh,lightmap_pars_fragment:$h,lights_lambert_fragment:Kh,lights_lambert_pars_fragment:Qh,lights_pars_begin:Jh,lights_toon_fragment:eu,lights_toon_pars_fragment:nu,lights_phong_fragment:iu,lights_phong_pars_fragment:ru,lights_physical_fragment:su,lights_physical_pars_fragment:au,lights_fragment_begin:ou,lights_fragment_maps:lu,lights_fragment_end:cu,logdepthbuf_fragment:hu,logdepthbuf_pars_fragment:uu,logdepthbuf_pars_vertex:du,logdepthbuf_vertex:fu,map_fragment:pu,map_pars_fragment:mu,map_particle_fragment:vu,map_particle_pars_fragment:gu,metalnessmap_fragment:_u,metalnessmap_pars_fragment:xu,morphinstance_vertex:yu,morphcolor_vertex:Su,morphnormal_vertex:Mu,morphtarget_pars_vertex:Eu,morphtarget_vertex:wu,normal_fragment_begin:bu,normal_fragment_maps:Tu,normal_pars_fragment:Au,normal_pars_vertex:Cu,normal_vertex:Ru,normalmap_pars_fragment:Pu,clearcoat_normal_fragment_begin:Lu,clearcoat_normal_fragment_maps:Du,clearcoat_pars_fragment:Iu,iridescence_pars_fragment:Nu,opaque_fragment:Uu,packing:Fu,premultiplied_alpha_fragment:Bu,project_vertex:Ou,dithering_fragment:zu,dithering_pars_fragment:Vu,roughnessmap_fragment:ku,roughnessmap_pars_fragment:Hu,shadowmap_pars_fragment:Gu,shadowmap_pars_vertex:Wu,shadowmap_vertex:Xu,shadowmask_pars_fragment:qu,skinbase_vertex:Yu,skinning_pars_vertex:Zu,skinning_vertex:ju,skinnormal_vertex:$u,specularmap_fragment:Ku,specularmap_pars_fragment:Qu,tonemapping_fragment:Ju,tonemapping_pars_fragment:td,transmission_fragment:ed,transmission_pars_fragment:nd,uv_pars_fragment:id,uv_pars_vertex:rd,uv_vertex:sd,worldpos_vertex:ad,background_vert:od,background_frag:ld,backgroundCube_vert:cd,backgroundCube_frag:hd,cube_vert:ud,cube_frag:dd,depth_vert:fd,depth_frag:pd,distanceRGBA_vert:md,distanceRGBA_frag:vd,equirect_vert:gd,equirect_frag:_d,linedashed_vert:xd,linedashed_frag:yd,meshbasic_vert:Sd,meshbasic_frag:Md,meshlambert_vert:Ed,meshlambert_frag:wd,meshmatcap_vert:bd,meshmatcap_frag:Td,meshnormal_vert:Ad,meshnormal_frag:Cd,meshphong_vert:Rd,meshphong_frag:Pd,meshphysical_vert:Ld,meshphysical_frag:Dd,meshtoon_vert:Id,meshtoon_frag:Nd,points_vert:Ud,points_frag:Fd,shadow_vert:Bd,shadow_frag:Od,sprite_vert:zd,sprite_frag:Vd},Ht={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},un={basic:{uniforms:Ge([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Ge([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new oe(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Ge([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Ge([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Ge([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new oe(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Ge([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Ge([Ht.points,Ht.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Ge([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Ge([Ht.common,Ht.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Ge([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Ge([Ht.sprite,Ht.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Ge([Ht.common,Ht.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Ge([Ht.lights,Ht.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};un.physical={uniforms:Ge([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Sr={r:0,b:0,g:0},Yn=new We,kd=new Ce;function Hd(i,t,e,n,s,r,a){const o=new oe(0);let l=r===!0?0:1,u,h,c=null,d=0,f=null;function v(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?e:t).get(_)),_}function g(S){let _=!1;const A=v(S);A===null?p(o,l):A&&A.isColor&&(p(A,1),_=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,_){const A=v(_);A&&(A.isCubeTexture||A.mapping===Nr)?(h===void 0&&(h=new Ne(new pn(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Fi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,N,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Yn.copy(_.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kd.makeRotationFromEuler(Yn)),h.material.toneMapped=Me.getTransfer(A.colorSpace)!==Ae,(c!==A||d!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,c=A,d=A.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new Ne(new Cn(2,2),new zn({name:"BackgroundMaterial",uniforms:Fi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Me.getTransfer(A.colorSpace)!==Ae,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(c!==A||d!==A.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,c=A,d=A.version,f=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null))}function p(S,_){S.getRGB(Sr,jo(i)),n.buffers.color.setClear(Sr.r,Sr.g,Sr.b,_,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(S,_=1){o.set(S),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:g,addToRenderList:m,dispose:x}}function Gd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(y,b,B,U,X){let q=!1;const J=c(U,B,b);r!==J&&(r=J,u(r.object)),q=f(y,U,B,X),q&&v(y,U,B,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,_(y,b,B,U),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function u(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function c(y,b,B){const U=B.wireframe===!0;let X=n[y.id];X===void 0&&(X={},n[y.id]=X);let q=X[b.id];q===void 0&&(q={},X[b.id]=q);let J=q[U];return J===void 0&&(J=d(l()),q[U]=J),J}function d(y){const b=[],B=[],U=[];for(let X=0;X<e;X++)b[X]=0,B[X]=0,U[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:B,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,b,B,U){const X=r.attributes,q=b.attributes;let J=0;const O=B.getAttributes();for(const L in O)if(O[L].location>=0){const $=X[L];let F=q[L];if(F===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(F=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(F=y.instanceColor)),$===void 0||$.attribute!==F||F&&$.data!==F.data)return!0;J++}return r.attributesNum!==J||r.index!==U}function v(y,b,B,U){const X={},q=b.attributes;let J=0;const O=B.getAttributes();for(const L in O)if(O[L].location>=0){let $=q[L];$===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&($=y.instanceColor));const F={};F.attribute=$,$&&$.data&&(F.data=$.data),X[L]=F,J++}r.attributes=X,r.attributesNum=J,r.index=U}function g(){const y=r.newAttributes;for(let b=0,B=y.length;b<B;b++)y[b]=0}function m(y){p(y,0)}function p(y,b){const B=r.newAttributes,U=r.enabledAttributes,X=r.attributeDivisors;B[y]=1,U[y]===0&&(i.enableVertexAttribArray(y),U[y]=1),X[y]!==b&&(i.vertexAttribDivisor(y,b),X[y]=b)}function x(){const y=r.newAttributes,b=r.enabledAttributes;for(let B=0,U=b.length;B<U;B++)b[B]!==y[B]&&(i.disableVertexAttribArray(B),b[B]=0)}function S(y,b,B,U,X,q,J){J===!0?i.vertexAttribIPointer(y,b,B,X,q):i.vertexAttribPointer(y,b,B,U,X,q)}function _(y,b,B,U){g();const X=U.attributes,q=B.getAttributes(),J=b.defaultAttributeValues;for(const O in q){const L=q[O];if(L.location>=0){let Q=X[O];if(Q===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),Q!==void 0){const $=Q.normalized,F=Q.itemSize,K=t.get(Q);if(K===void 0)continue;const z=K.buffer,T=K.type,C=K.bytesPerElement,k=T===i.INT||T===i.UNSIGNED_INT||Q.gpuType===ca;if(Q.isInterleavedBufferAttribute){const j=Q.data,et=j.stride,G=Q.offset;if(j.isInstancedInterleavedBuffer){for(let rt=0;rt<L.locationSize;rt++)p(L.location+rt,j.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let rt=0;rt<L.locationSize;rt++)m(L.location+rt);i.bindBuffer(i.ARRAY_BUFFER,z);for(let rt=0;rt<L.locationSize;rt++)S(L.location+rt,F/L.locationSize,T,$,et*C,(G+F/L.locationSize*rt)*C,k)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<L.locationSize;j++)p(L.location+j,Q.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<L.locationSize;j++)m(L.location+j);i.bindBuffer(i.ARRAY_BUFFER,z);for(let j=0;j<L.locationSize;j++)S(L.location+j,F/L.locationSize,T,$,F*C,F/L.locationSize*j*C,k)}}else if(J!==void 0){const $=J[O];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(L.location,$);break;case 3:i.vertexAttrib3fv(L.location,$);break;case 4:i.vertexAttrib4fv(L.location,$);break;default:i.vertexAttrib1fv(L.location,$)}}}}x()}function A(){P();for(const y in n){const b=n[y];for(const B in b){const U=b[B];for(const X in U)h(U[X].object),delete U[X];delete b[B]}delete n[y]}}function D(y){if(n[y.id]===void 0)return;const b=n[y.id];for(const B in b){const U=b[B];for(const X in U)h(U[X].object),delete U[X];delete b[B]}delete n[y.id]}function N(y){for(const b in n){const B=n[b];if(B[y.id]===void 0)continue;const U=B[y.id];for(const X in U)h(U[X].object),delete U[X];delete B[y.id]}}function P(){E(),a=!0,r!==s&&(r=s,u(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:N,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function Wd(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function a(u,h,c){c!==0&&(i.drawArraysInstanced(n,u,h,c),e.update(h,n,c))}function o(u,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,c);let f=0;for(let v=0;v<c;v++)f+=h[v];e.update(f,n,1)}function l(u,h,c,d){if(c===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<u.length;v++)a(u[v],h[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(n,u,0,h,0,d,0,c);let v=0;for(let g=0;g<c;g++)v+=h[g]*d[g];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(N){return!(N!==ln&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const P=N===Qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==An&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==En&&!P)}function l(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const c=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:c,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:A,maxSamples:D}}function qd(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Mn,o=new fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const f=c.length!==0||d||n!==0||s;return s=d,n=c.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,d){e=h(c,d,0)},this.setState=function(c,d,f){const v=c.clippingPlanes,g=c.clipIntersection,m=c.clipShadows,p=i.get(c);if(!s||v===null||v.length===0||r&&!m)r?h(null):u();else{const x=r?0:n,S=x*4;let _=p.clippingState||null;l.value=_,_=h(v,d,S,f);for(let A=0;A!==S;++A)_[A]=e[A];p.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(c,d,f,v){const g=c!==null?c.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=f+g*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,_=f;S!==g;++S,_+=4)a.copy(c[S]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Yd(i){let t=new WeakMap;function e(a,o){return o===Ts?a.mapping=Pi:o===As&&(a.mapping=Li),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ts||o===As)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new zc(l.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",s),e(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const bi=4,eo=[.125,.215,.35,.446,.526,.582],Kn=20,ls=new il,no=new oe;let cs=null,hs=0,us=0,ds=!1;const jn=(1+Math.sqrt(5))/2,Si=1/jn,io=[new nt(-jn,Si,0),new nt(jn,Si,0),new nt(-Si,0,jn),new nt(Si,0,jn),new nt(0,jn,-Si),new nt(0,jn,Si),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)];class ro{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){cs=this._renderer.getRenderTarget(),hs=this._renderer.getActiveCubeFace(),us=this._renderer.getActiveMipmapLevel(),ds=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cs,hs,us),this._renderer.xr.enabled=ds,t.scissorTest=!1,Mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cs=this._renderer.getRenderTarget(),hs=this._renderer.getActiveCubeFace(),us=this._renderer.getActiveMipmapLevel(),ds=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Qi,format:ln,colorSpace:Ni,depthBuffer:!1},s=so(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=so(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zd(r)),this._blurMaterial=jd(r,t,e)}return s}_compileMaterial(t){const e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,ls)}_sceneToCubeUV(t,e,n,s){const o=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,c=h.autoClear,d=h.toneMapping;h.getClearColor(no),h.toneMapping=Bn,h.autoClear=!1;const f=new Ur({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),v=new Ne(new pn,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(no),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(u[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,u[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,u[p]));const S=this._cubeSize;Mr(s,x*S,p>2?S:0,S,S),h.setRenderTarget(s),g&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=c,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Pi||t.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ao());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ne(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Mr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ls)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=io[(s-r-1)%io.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,c=new Ne(this._lodPlanes[s],u),d=u.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Kn-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):Kn;m>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);const p=[];let x=0;for(let N=0;N<Kn;++N){const P=N/g,E=Math.exp(-P*P/2);p.push(E),N===0?x+=E:N<m&&(x+=2*E)}for(let N=0;N<p.length;N++)p[N]=p[N]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=v,d.mipInt.value=S-n;const _=this._sizeLods[s],A=3*_*(s>S-bi?s-S+bi:0),D=4*(this._cubeSize-_);Mr(e,A,D,3*_,2*_),l.setRenderTarget(e),l.render(c,ls)}}function Zd(i){const t=[],e=[],n=[];let s=i;const r=i-bi+1+eo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-bi?l=eo[a-i+bi-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),h=-u,c=1+u,d=[h,h,c,h,c,c,h,h,c,c,h,c],f=6,v=6,g=3,m=2,p=1,x=new Float32Array(g*v*f),S=new Float32Array(m*v*f),_=new Float32Array(p*v*f);for(let D=0;D<f;D++){const N=D%3*2/3-1,P=D>2?0:-1,E=[N,P,0,N+2/3,P,0,N+2/3,P+1,0,N,P,0,N+2/3,P+1,0,N,P+1,0];x.set(E,g*v*D),S.set(d,m*v*D);const y=[D,D,D,D,D,D];_.set(y,p*v*D)}const A=new kn;A.setAttribute("position",new hn(x,g)),A.setAttribute("uv",new hn(S,m)),A.setAttribute("faceIndex",new hn(_,p)),t.push(A),s>bi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function so(i,t,e){const n=new ni(i,t,e);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function jd(i,t,e){const n=new Float32Array(Kn),s=new nt(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ao(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function oo(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Ma(){return`

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
	`}function $d(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===Ts||l===As,h=l===Pi||l===Li;if(u||h){let c=t.get(o);const d=c!==void 0?c.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ro(i)),c=u?e.fromEquirectangular(o,c):e.fromCubemap(o,c),c.texture.pmremVersion=o.pmremVersion,t.set(o,c),c.texture;if(c!==void 0)return c.texture;{const f=o.image;return u&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ro(i)),c=u?e.fromEquirectangular(o):e.fromCubemap(o),c.texture.pmremVersion=o.pmremVersion,t.set(o,c),o.addEventListener("dispose",r),c.texture):null}}}return o}function s(o){let l=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&l++;return l===u}function r(o){const l=o.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Kd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ei("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Qd(i,t,e,n){const s={},r=new WeakMap;function a(c){const d=c.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(c,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(c){const d=c.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function u(c){const d=[],f=c.index,v=c.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let S=0,_=x.length;S<_;S+=3){const A=x[S+0],D=x[S+1],N=x[S+2];d.push(A,D,D,N,N,A)}}else if(v!==void 0){const x=v.array;g=v.version;for(let S=0,_=x.length/3-1;S<_;S+=3){const A=S+0,D=S+1,N=S+2;d.push(A,D,D,N,N,A)}}else return;const m=new(Ho(d)?Zo:Yo)(d,1);m.version=g;const p=r.get(c);p&&t.remove(p),r.set(c,m)}function h(c){const d=r.get(c);if(d){const f=c.index;f!==null&&d.version<f.version&&u(c)}else u(c);return r.get(c)}return{get:o,update:l,getWireframeAttribute:h}}function Jd(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function u(d,f,v){v!==0&&(i.drawElementsInstanced(n,f,r,d*a,v),e.update(f,n,v))}function h(d,f,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];e.update(m,n,1)}function c(d,f,v,g){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)u(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,v);let p=0;for(let x=0;x<v;x++)p+=f[x]*g[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=c}function tf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ef(i,t,e){const n=new WeakMap,s=new Pe;function r(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,c=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==c){let y=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let _=0;v===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let A=o.attributes.position.count*_,D=1;A>t.maxTextureSize&&(D=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const N=new Float32Array(A*D*4*c),P=new Wo(N,A,D,c);P.type=En,P.needsUpdate=!0;const E=_*4;for(let b=0;b<c;b++){const B=p[b],U=x[b],X=S[b],q=A*D*4*b;for(let J=0;J<B.count;J++){const O=J*E;v===!0&&(s.fromBufferAttribute(B,J),N[q+O+0]=s.x,N[q+O+1]=s.y,N[q+O+2]=s.z,N[q+O+3]=0),g===!0&&(s.fromBufferAttribute(U,J),N[q+O+4]=s.x,N[q+O+5]=s.y,N[q+O+6]=s.z,N[q+O+7]=0),m===!0&&(s.fromBufferAttribute(X,J),N[q+O+8]=s.x,N[q+O+9]=s.y,N[q+O+10]=s.z,N[q+O+11]=X.itemSize===4?s.w:1)}}d={count:c,texture:P,size:new le(A,D)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const g=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function nf(i,t,e,n){let s=new WeakMap;function r(l){const u=n.render.frame,h=l.geometry,c=t.get(l,h);if(s.get(c)!==u&&(t.update(c),s.set(c,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return c}function a(){s=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}const sl=new ke,lo=new tl(1,1),al=new Wo,ol=new Ec,ll=new Ko,co=[],ho=[],uo=new Float32Array(16),fo=new Float32Array(9),po=new Float32Array(4);function Oi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=co[s];if(r===void 0&&(r=new Float32Array(s),co[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Br(i,t){let e=ho[t];e===void 0&&(e=new Int32Array(t),ho[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function lf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;po.set(n),i.uniformMatrix2fv(this.addr,!1,po),Fe(e,n)}}function cf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;fo.set(n),i.uniformMatrix3fv(this.addr,!1,fo),Fe(e,n)}}function hf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;uo.set(n),i.uniformMatrix4fv(this.addr,!1,uo),Fe(e,n)}}function uf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function ff(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function pf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function mf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function _f(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function xf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lo.compareFunction=ko,r=lo):r=sl,e.setTexture2D(t||r,s)}function yf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ol,s)}function Sf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ll,s)}function Mf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||al,s)}function Ef(i){switch(i){case 5126:return rf;case 35664:return sf;case 35665:return af;case 35666:return of;case 35674:return lf;case 35675:return cf;case 35676:return hf;case 5124:case 35670:return uf;case 35667:case 35671:return df;case 35668:case 35672:return ff;case 35669:case 35673:return pf;case 5125:return mf;case 36294:return vf;case 36295:return gf;case 36296:return _f;case 35678:case 36198:case 36298:case 36306:case 35682:return xf;case 35679:case 36299:case 36307:return yf;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return Mf}}function wf(i,t){i.uniform1fv(this.addr,t)}function bf(i,t){const e=Oi(t,this.size,2);i.uniform2fv(this.addr,e)}function Tf(i,t){const e=Oi(t,this.size,3);i.uniform3fv(this.addr,e)}function Af(i,t){const e=Oi(t,this.size,4);i.uniform4fv(this.addr,e)}function Cf(i,t){const e=Oi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rf(i,t){const e=Oi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pf(i,t){const e=Oi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Lf(i,t){i.uniform1iv(this.addr,t)}function Df(i,t){i.uniform2iv(this.addr,t)}function If(i,t){i.uniform3iv(this.addr,t)}function Nf(i,t){i.uniform4iv(this.addr,t)}function Uf(i,t){i.uniform1uiv(this.addr,t)}function Ff(i,t){i.uniform2uiv(this.addr,t)}function Bf(i,t){i.uniform3uiv(this.addr,t)}function Of(i,t){i.uniform4uiv(this.addr,t)}function zf(i,t,e){const n=this.cache,s=t.length,r=Br(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||sl,r[a])}function Vf(i,t,e){const n=this.cache,s=t.length,r=Br(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ol,r[a])}function kf(i,t,e){const n=this.cache,s=t.length,r=Br(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ll,r[a])}function Hf(i,t,e){const n=this.cache,s=t.length,r=Br(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||al,r[a])}function Gf(i){switch(i){case 5126:return wf;case 35664:return bf;case 35665:return Tf;case 35666:return Af;case 35674:return Cf;case 35675:return Rf;case 35676:return Pf;case 5124:case 35670:return Lf;case 35667:case 35671:return Df;case 35668:case 35672:return If;case 35669:case 35673:return Nf;case 5125:return Uf;case 36294:return Ff;case 36295:return Bf;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return zf;case 35679:case 36299:case 36307:return Vf;case 35680:case 36300:case 36308:case 36293:return kf;case 36289:case 36303:case 36311:case 36292:return Hf}}class Wf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ef(e.type)}}class Xf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gf(e.type)}}class qf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const fs=/(\w+)(\])?(\[|\.)?/g;function mo(i,t){i.seq.push(t),i.map[t.id]=t}function Yf(i,t,e){const n=i.name,s=n.length;for(fs.lastIndex=0;;){const r=fs.exec(n),a=fs.lastIndex;let o=r[1];const l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){mo(e,u===void 0?new Wf(o,i,t):new Xf(o,i,t));break}else{let c=e.map[o];c===void 0&&(c=new qf(o),mo(e,c)),e=c}}}class Pr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Yf(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function vo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Zf=37297;let jf=0;function $f(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const go=new fe;function Kf(i){Me._getMatrix(go,Me.workingColorSpace,i);const t=`mat3( ${go.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(i)){case Lr:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function _o(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+$f(i.getShaderSource(t),a)}else return s}function Qf(i,t){const e=Kf(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Jf(i,t){let e;switch(t){case Il:e="Linear";break;case Nl:e="Reinhard";break;case Ul:e="Cineon";break;case Fl:e="ACESFilmic";break;case Ol:e="AgX";break;case zl:e="Neutral";break;case Bl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Er=new nt;function tp(){Me.getLuminanceCoefficients(Er);const i=Er.x.toFixed(4),t=Er.y.toFixed(4),e=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ep(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yi).join(`
`)}function np(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ip(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Yi(i){return i!==""}function xo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ra(i){return i.replace(rp,ap)}const sp=new Map;function ap(i,t){let e=ve[t];if(e===void 0){const n=sp.get(t);if(n!==void 0)e=ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ra(e)}const op=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function So(i){return i.replace(op,lp)}function lp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mo(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function cp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Co?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ro?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function hp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Li:t="ENVMAP_TYPE_CUBE";break;case Nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function up(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Li:t="ENVMAP_MODE_REFRACTION";break}return t}function dp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case la:t="ENVMAP_BLENDING_MULTIPLY";break;case Ll:t="ENVMAP_BLENDING_MIX";break;case Dl:t="ENVMAP_BLENDING_ADD";break}return t}function fp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function pp(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=cp(e),u=hp(e),h=up(e),c=dp(e),d=fp(e),f=ep(e),v=np(r),g=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Yi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Yi).join(`
`),p.length>0&&(p+=`
`)):(m=[Mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),p=[Mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?ve.tonemapping_pars_fragment:"",e.toneMapping!==Bn?Jf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,Qf("linearToOutputTexel",e.outputColorSpace),tp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yi).join(`
`)),a=ra(a),a=xo(a,e),a=yo(a,e),o=ra(o),o=xo(o,e),o=yo(o,e),a=So(a),o=So(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=x+m+a,_=x+p+o,A=vo(s,s.VERTEX_SHADER,S),D=vo(s,s.FRAGMENT_SHADER,_);s.attachShader(g,A),s.attachShader(g,D),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function N(b){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(g).trim(),U=s.getShaderInfoLog(A).trim(),X=s.getShaderInfoLog(D).trim();let q=!0,J=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,A,D);else{const O=_o(s,A,"vertex"),L=_o(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+B+`
`+O+`
`+L)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(U===""||X==="")&&(J=!1);J&&(b.diagnostics={runnable:q,programLog:B,vertexShader:{log:U,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(A),s.deleteShader(D),P=new Pr(s,g),E=ip(s,g)}let P;this.getUniforms=function(){return P===void 0&&N(this),P};let E;this.getAttributes=function(){return E===void 0&&N(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,Zf)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jf++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=D,this}let mp=0;class vp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new gp(t),e.set(t,n)),n}}class gp{constructor(t){this.id=mp++,this.code=t,this.usedTimes=0}}function _p(i,t,e,n,s,r,a){const o=new _a,l=new vp,u=new Set,h=[],c=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,y,b,B,U){const X=B.fog,q=U.geometry,J=E.isMeshStandardMaterial?B.environment:null,O=(E.isMeshStandardMaterial?e:t).get(E.envMap||J),L=O&&O.mapping===Nr?O.image.height:null,Q=v[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const $=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,F=$!==void 0?$.length:0;let K=0;q.morphAttributes.position!==void 0&&(K=1),q.morphAttributes.normal!==void 0&&(K=2),q.morphAttributes.color!==void 0&&(K=3);let z,T,C,k;if(Q){const ae=un[Q];z=ae.vertexShader,T=ae.fragmentShader}else z=E.vertexShader,T=E.fragmentShader,l.update(E),C=l.getVertexShaderID(E),k=l.getFragmentShaderID(E);const j=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),G=U.isInstancedMesh===!0,rt=U.isBatchedMesh===!0,mt=!!E.map,Mt=!!E.matcap,Et=!!O,I=!!E.aoMap,ft=!!E.lightMap,ut=!!E.bumpMap,Xt=!!E.normalMap,xt=!!E.displacementMap,ne=!!E.emissiveMap,vt=!!E.metalnessMap,R=!!E.roughnessMap,M=E.anisotropy>0,Y=E.clearcoat>0,ct=E.dispersion>0,ht=E.iridescence>0,ot=E.sheen>0,wt=E.transmission>0,bt=M&&!!E.anisotropyMap,Ft=Y&&!!E.clearcoatMap,he=Y&&!!E.clearcoatNormalMap,St=Y&&!!E.clearcoatRoughnessMap,Gt=ht&&!!E.iridescenceMap,Zt=ht&&!!E.iridescenceThicknessMap,$t=ot&&!!E.sheenColorMap,Wt=ot&&!!E.sheenRoughnessMap,ue=!!E.specularMap,ie=!!E.specularColorMap,ge=!!E.specularIntensityMap,W=wt&&!!E.transmissionMap,Lt=wt&&!!E.thicknessMap,lt=!!E.gradientMap,pt=!!E.alphaMap,Vt=E.alphaTest>0,Ot=!!E.alphaHash,re=!!E.extensions;let be=Bn;E.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(be=i.toneMapping);const Re={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:z,fragmentShader:T,defines:E.defines,customVertexShaderID:C,customFragmentShaderID:k,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:rt,batchingColor:rt&&U._colorsTexture!==null,instancing:G,instancingColor:G&&U.instanceColor!==null,instancingMorph:G&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ni,alphaToCoverage:!!E.alphaToCoverage,map:mt,matcap:Mt,envMap:Et,envMapMode:Et&&O.mapping,envMapCubeUVHeight:L,aoMap:I,lightMap:ft,bumpMap:ut,normalMap:Xt,displacementMap:d&&xt,emissiveMap:ne,normalMapObjectSpace:Xt&&E.normalMapType===Gl,normalMapTangentSpace:Xt&&E.normalMapType===ma,metalnessMap:vt,roughnessMap:R,anisotropy:M,anisotropyMap:bt,clearcoat:Y,clearcoatMap:Ft,clearcoatNormalMap:he,clearcoatRoughnessMap:St,dispersion:ct,iridescence:ht,iridescenceMap:Gt,iridescenceThicknessMap:Zt,sheen:ot,sheenColorMap:$t,sheenRoughnessMap:Wt,specularMap:ue,specularColorMap:ie,specularIntensityMap:ge,transmission:wt,transmissionMap:W,thicknessMap:Lt,gradientMap:lt,opaque:E.transparent===!1&&E.blending===Ti&&E.alphaToCoverage===!1,alphaMap:pt,alphaTest:Vt,alphaHash:Ot,combine:E.combine,mapUv:mt&&g(E.map.channel),aoMapUv:I&&g(E.aoMap.channel),lightMapUv:ft&&g(E.lightMap.channel),bumpMapUv:ut&&g(E.bumpMap.channel),normalMapUv:Xt&&g(E.normalMap.channel),displacementMapUv:xt&&g(E.displacementMap.channel),emissiveMapUv:ne&&g(E.emissiveMap.channel),metalnessMapUv:vt&&g(E.metalnessMap.channel),roughnessMapUv:R&&g(E.roughnessMap.channel),anisotropyMapUv:bt&&g(E.anisotropyMap.channel),clearcoatMapUv:Ft&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&g(E.sheenRoughnessMap.channel),specularMapUv:ue&&g(E.specularMap.channel),specularColorMapUv:ie&&g(E.specularColorMap.channel),specularIntensityMapUv:ge&&g(E.specularIntensityMap.channel),transmissionMapUv:W&&g(E.transmissionMap.channel),thicknessMapUv:Lt&&g(E.thicknessMap.channel),alphaMapUv:pt&&g(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Xt||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(mt||pt),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:c,reverseDepthBuffer:et,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:K,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:mt&&E.map.isVideoTexture===!0&&Me.getTransfer(E.map.colorSpace)===Ae,decodeVideoTextureEmissive:ne&&E.emissiveMap.isVideoTexture===!0&&Me.getTransfer(E.emissiveMap.colorSpace)===Ae,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===en,flipSided:E.side===Ze,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:re&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&E.extensions.multiDraw===!0||rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Re.vertexUv1s=u.has(1),Re.vertexUv2s=u.has(2),Re.vertexUv3s=u.has(3),u.clear(),Re}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const b in E.defines)y.push(b),y.push(E.defines[b]);return E.isRawShaderMaterial===!1&&(x(y,E),S(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function x(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function S(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const y=v[E.type];let b;if(y){const B=un[y];b=Uc.clone(B.uniforms)}else b=E.uniforms;return b}function A(E,y){let b;for(let B=0,U=h.length;B<U;B++){const X=h[B];if(X.cacheKey===y){b=X,++b.usedTimes;break}}return b===void 0&&(b=new pp(i,y,E,r),h.push(b)),b}function D(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function N(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:D,releaseShaderCache:N,programs:h,dispose:P}}function xp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function yp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Eo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wo(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(c,d,f,v,g,m){let p=i[t];return p===void 0?(p={id:c.id,object:c,geometry:d,material:f,groupOrder:v,renderOrder:c.renderOrder,z:g,group:m},i[t]=p):(p.id=c.id,p.object=c,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=c.renderOrder,p.z=g,p.group=m),t++,p}function o(c,d,f,v,g,m){const p=a(c,d,f,v,g,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(c,d,f,v,g,m){const p=a(c,d,f,v,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function u(c,d){e.length>1&&e.sort(c||yp),n.length>1&&n.sort(d||Eo),s.length>1&&s.sort(d||Eo)}function h(){for(let c=t,d=i.length;c<d;c++){const f=i[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:u}}function Sp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new wo,i.set(n,[a])):s>=r.length?(a=new wo,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Mp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new nt,color:new oe};break;case"SpotLight":e={position:new nt,direction:new nt,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new nt,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new nt,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return i[t.id]=e,e}}}function Ep(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let wp=0;function bp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Tp(i){const t=new Mp,e=Ep(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new nt);const s=new nt,r=new Ce,a=new Ce;function o(u){let h=0,c=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,v=0,g=0,m=0,p=0,x=0,S=0,_=0,A=0,D=0,N=0;u.sort(bp);for(let E=0,y=u.length;E<y;E++){const b=u[E],B=b.color,U=b.intensity,X=b.distance,q=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=B.r*U,c+=B.g*U,d+=B.b*U;else if(b.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(b.sh.coefficients[J],U);N++}else if(b.isDirectionalLight){const J=t.get(b);if(J.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const O=b.shadow,L=e.get(b);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,n.directionalShadow[f]=L,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=b.shadow.matrix,x++}n.directional[f]=J,f++}else if(b.isSpotLight){const J=t.get(b);J.position.setFromMatrixPosition(b.matrixWorld),J.color.copy(B).multiplyScalar(U),J.distance=X,J.coneCos=Math.cos(b.angle),J.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),J.decay=b.decay,n.spot[g]=J;const O=b.shadow;if(b.map&&(n.spotLightMap[A]=b.map,A++,O.updateMatrices(b),b.castShadow&&D++),n.spotLightMatrix[g]=O.matrix,b.castShadow){const L=e.get(b);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,n.spotShadow[g]=L,n.spotShadowMap[g]=q,_++}g++}else if(b.isRectAreaLight){const J=t.get(b);J.color.copy(B).multiplyScalar(U),J.halfWidth.set(b.width*.5,0,0),J.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=J,m++}else if(b.isPointLight){const J=t.get(b);if(J.color.copy(b.color).multiplyScalar(b.intensity),J.distance=b.distance,J.decay=b.decay,b.castShadow){const O=b.shadow,L=e.get(b);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,L.shadowCameraNear=O.camera.near,L.shadowCameraFar=O.camera.far,n.pointShadow[v]=L,n.pointShadowMap[v]=q,n.pointShadowMatrix[v]=b.shadow.matrix,S++}n.point[v]=J,v++}else if(b.isHemisphereLight){const J=t.get(b);J.skyColor.copy(b.color).multiplyScalar(U),J.groundColor.copy(b.groundColor).multiplyScalar(U),n.hemi[p]=J,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=c,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==v||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==S||P.numSpotShadows!==_||P.numSpotMaps!==A||P.numLightProbes!==N)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+A-D,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=N,P.directionalLength=f,P.pointLength=v,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=S,P.numSpotShadows=_,P.numSpotMaps=A,P.numLightProbes=N,n.version=wp++)}function l(u,h){let c=0,d=0,f=0,v=0,g=0;const m=h.matrixWorldInverse;for(let p=0,x=u.length;p<x;p++){const S=u[p];if(S.isDirectionalLight){const _=n.directional[c];_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),c++}else if(S.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function bo(i){const t=new Tp(i),e=[],n=[];function s(h){u.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Ap(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new bo(i),t.set(s,[o])):r>=a.length?(o=new bo(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Cp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rp=`uniform sampler2D shadow_pass;
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
}`;function Pp(i,t,e){let n=new xa;const s=new le,r=new le,a=new Pe,o=new Yc({depthPacking:Hl}),l=new Zc,u={},h=e.maxTextureSize,c={[On]:Ze,[Ze]:On,[en]:en},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Cp,fragmentShader:Rp}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new kn;v.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ne(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co;let p=this.type;this.render=function(D,N,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Fn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const U=p!==Sn&&this.type===Sn,X=p===Sn&&this.type!==Sn;for(let q=0,J=D.length;q<J;q++){const O=D[q],L=O.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const Q=L.getFrameExtents();if(s.multiply(Q),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,L.mapSize.y=r.y)),L.map===null||U===!0||X===!0){const F=this.type!==Sn?{minFilter:cn,magFilter:cn}:{};L.map!==null&&L.map.dispose(),L.map=new ni(s.x,s.y,F),L.map.texture.name=O.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const $=L.getViewportCount();for(let F=0;F<$;F++){const K=L.getViewport(F);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),B.viewport(a),L.updateMatrices(O,F),n=L.getFrustum(),_(N,P,L.camera,O,this.type)}L.isPointLightShadow!==!0&&this.type===Sn&&x(L,P),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,b)};function x(D,N){const P=t.update(g);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ni(s.x,s.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(N,null,P,d,g,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(N,null,P,f,g,null)}function S(D,N,P,E){let y=null;const b=P.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(b!==void 0)y=b;else if(y=P.isPointLight===!0?l:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const B=y.uuid,U=N.uuid;let X=u[B];X===void 0&&(X={},u[B]=X);let q=X[U];q===void 0&&(q=y.clone(),X[U]=q,N.addEventListener("dispose",A)),y=q}if(y.visible=N.visible,y.wireframe=N.wireframe,E===Sn?y.side=N.shadowSide!==null?N.shadowSide:N.side:y.side=N.shadowSide!==null?N.shadowSide:c[N.side],y.alphaMap=N.alphaMap,y.alphaTest=N.alphaTest,y.map=N.map,y.clipShadows=N.clipShadows,y.clippingPlanes=N.clippingPlanes,y.clipIntersection=N.clipIntersection,y.displacementMap=N.displacementMap,y.displacementScale=N.displacementScale,y.displacementBias=N.displacementBias,y.wireframeLinewidth=N.wireframeLinewidth,y.linewidth=N.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=i.properties.get(y);B.light=P}return y}function _(D,N,P,E,y){if(D.visible===!1)return;if(D.layers.test(N.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&y===Sn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,D.matrixWorld);const U=t.update(D),X=D.material;if(Array.isArray(X)){const q=U.groups;for(let J=0,O=q.length;J<O;J++){const L=q[J],Q=X[L.materialIndex];if(Q&&Q.visible){const $=S(D,Q,E,y);D.onBeforeShadow(i,D,N,P,U,$,L),i.renderBufferDirect(P,null,U,$,D,L),D.onAfterShadow(i,D,N,P,U,$,L)}}}else if(X.visible){const q=S(D,X,E,y);D.onBeforeShadow(i,D,N,P,U,q,null),i.renderBufferDirect(P,null,U,q,D,null),D.onAfterShadow(i,D,N,P,U,q,null)}}const B=D.children;for(let U=0,X=B.length;U<X;U++)_(B[U],N,P,E,y)}function A(D){D.target.removeEventListener("dispose",A);for(const P in u){const E=u[P],y=D.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const Lp={[xs]:ys,[Ss]:ws,[Ms]:bs,[Ri]:Es,[ys]:xs,[ws]:Ss,[bs]:Ms,[Es]:Ri};function Dp(i,t){function e(){let W=!1;const Lt=new Pe;let lt=null;const pt=new Pe(0,0,0,0);return{setMask:function(Vt){lt!==Vt&&!W&&(i.colorMask(Vt,Vt,Vt,Vt),lt=Vt)},setLocked:function(Vt){W=Vt},setClear:function(Vt,Ot,re,be,Re){Re===!0&&(Vt*=be,Ot*=be,re*=be),Lt.set(Vt,Ot,re,be),pt.equals(Lt)===!1&&(i.clearColor(Vt,Ot,re,be),pt.copy(Lt))},reset:function(){W=!1,lt=null,pt.set(-1,0,0,0)}}}function n(){let W=!1,Lt=!1,lt=null,pt=null,Vt=null;return{setReversed:function(Ot){if(Lt!==Ot){const re=t.get("EXT_clip_control");Lt?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);const be=Vt;Vt=null,this.setClear(be)}Lt=Ot},getReversed:function(){return Lt},setTest:function(Ot){Ot?j(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(Ot){lt!==Ot&&!W&&(i.depthMask(Ot),lt=Ot)},setFunc:function(Ot){if(Lt&&(Ot=Lp[Ot]),pt!==Ot){switch(Ot){case xs:i.depthFunc(i.NEVER);break;case ys:i.depthFunc(i.ALWAYS);break;case Ss:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case Ms:i.depthFunc(i.EQUAL);break;case Es:i.depthFunc(i.GEQUAL);break;case ws:i.depthFunc(i.GREATER);break;case bs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=Ot}},setLocked:function(Ot){W=Ot},setClear:function(Ot){Vt!==Ot&&(Lt&&(Ot=1-Ot),i.clearDepth(Ot),Vt=Ot)},reset:function(){W=!1,lt=null,pt=null,Vt=null,Lt=!1}}}function s(){let W=!1,Lt=null,lt=null,pt=null,Vt=null,Ot=null,re=null,be=null,Re=null;return{setTest:function(ae){W||(ae?j(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(ae){Lt!==ae&&!W&&(i.stencilMask(ae),Lt=ae)},setFunc:function(ae,at,dt){(lt!==ae||pt!==at||Vt!==dt)&&(i.stencilFunc(ae,at,dt),lt=ae,pt=at,Vt=dt)},setOp:function(ae,at,dt){(Ot!==ae||re!==at||be!==dt)&&(i.stencilOp(ae,at,dt),Ot=ae,re=at,be=dt)},setLocked:function(ae){W=ae},setClear:function(ae){Re!==ae&&(i.clearStencil(ae),Re=ae)},reset:function(){W=!1,Lt=null,lt=null,pt=null,Vt=null,Ot=null,re=null,be=null,Re=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,u=new WeakMap;let h={},c={},d=new WeakMap,f=[],v=null,g=!1,m=null,p=null,x=null,S=null,_=null,A=null,D=null,N=new oe(0,0,0),P=0,E=!1,y=null,b=null,B=null,U=null,X=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,O=0;const L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(L)[1]),J=O>=1):L.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),J=O>=2);let Q=null,$={};const F=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),z=new Pe().fromArray(F),T=new Pe().fromArray(K);function C(W,Lt,lt,pt){const Vt=new Uint8Array(4),Ot=i.createTexture();i.bindTexture(W,Ot),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let re=0;re<lt;re++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Lt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,Vt):i.texImage2D(Lt+re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Vt);return Ot}const k={};k[i.TEXTURE_2D]=C(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=C(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=C(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=C(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Ri),ut(!1),Xt(Ea),j(i.CULL_FACE),I(Fn);function j(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function et(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function G(W,Lt){return c[W]!==Lt?(i.bindFramebuffer(W,Lt),c[W]=Lt,W===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=Lt),W===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=Lt),!0):!1}function rt(W,Lt){let lt=f,pt=!1;if(W){lt=d.get(Lt),lt===void 0&&(lt=[],d.set(Lt,lt));const Vt=W.textures;if(lt.length!==Vt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let Ot=0,re=Vt.length;Ot<re;Ot++)lt[Ot]=i.COLOR_ATTACHMENT0+Ot;lt.length=Vt.length,pt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,pt=!0);pt&&i.drawBuffers(lt)}function mt(W){return v!==W?(i.useProgram(W),v=W,!0):!1}const Mt={[$n]:i.FUNC_ADD,[pl]:i.FUNC_SUBTRACT,[ml]:i.FUNC_REVERSE_SUBTRACT};Mt[vl]=i.MIN,Mt[gl]=i.MAX;const Et={[_l]:i.ZERO,[xl]:i.ONE,[yl]:i.SRC_COLOR,[gs]:i.SRC_ALPHA,[Tl]:i.SRC_ALPHA_SATURATE,[wl]:i.DST_COLOR,[Ml]:i.DST_ALPHA,[Sl]:i.ONE_MINUS_SRC_COLOR,[_s]:i.ONE_MINUS_SRC_ALPHA,[bl]:i.ONE_MINUS_DST_COLOR,[El]:i.ONE_MINUS_DST_ALPHA,[Al]:i.CONSTANT_COLOR,[Cl]:i.ONE_MINUS_CONSTANT_COLOR,[Rl]:i.CONSTANT_ALPHA,[Pl]:i.ONE_MINUS_CONSTANT_ALPHA};function I(W,Lt,lt,pt,Vt,Ot,re,be,Re,ae){if(W===Fn){g===!0&&(et(i.BLEND),g=!1);return}if(g===!1&&(j(i.BLEND),g=!0),W!==fl){if(W!==m||ae!==E){if((p!==$n||_!==$n)&&(i.blendEquation(i.FUNC_ADD),p=$n,_=$n),ae)switch(W){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vs:i.blendFunc(i.ONE,i.ONE);break;case wa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ba:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ba:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}x=null,S=null,A=null,D=null,N.set(0,0,0),P=0,m=W,E=ae}return}Vt=Vt||Lt,Ot=Ot||lt,re=re||pt,(Lt!==p||Vt!==_)&&(i.blendEquationSeparate(Mt[Lt],Mt[Vt]),p=Lt,_=Vt),(lt!==x||pt!==S||Ot!==A||re!==D)&&(i.blendFuncSeparate(Et[lt],Et[pt],Et[Ot],Et[re]),x=lt,S=pt,A=Ot,D=re),(be.equals(N)===!1||Re!==P)&&(i.blendColor(be.r,be.g,be.b,Re),N.copy(be),P=Re),m=W,E=!1}function ft(W,Lt){W.side===en?et(i.CULL_FACE):j(i.CULL_FACE);let lt=W.side===Ze;Lt&&(lt=!lt),ut(lt),W.blending===Ti&&W.transparent===!1?I(Fn):I(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);const pt=W.stencilWrite;o.setTest(pt),pt&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ne(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(W){y!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),y=W)}function Xt(W){W!==ul?(j(i.CULL_FACE),W!==b&&(W===Ea?i.cullFace(i.BACK):W===dl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),b=W}function xt(W){W!==B&&(J&&i.lineWidth(W),B=W)}function ne(W,Lt,lt){W?(j(i.POLYGON_OFFSET_FILL),(U!==Lt||X!==lt)&&(i.polygonOffset(Lt,lt),U=Lt,X=lt)):et(i.POLYGON_OFFSET_FILL)}function vt(W){W?j(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function R(W){W===void 0&&(W=i.TEXTURE0+q-1),Q!==W&&(i.activeTexture(W),Q=W)}function M(W,Lt,lt){lt===void 0&&(Q===null?lt=i.TEXTURE0+q-1:lt=Q);let pt=$[lt];pt===void 0&&(pt={type:void 0,texture:void 0},$[lt]=pt),(pt.type!==W||pt.texture!==Lt)&&(Q!==lt&&(i.activeTexture(lt),Q=lt),i.bindTexture(W,Lt||k[W]),pt.type=W,pt.texture=Lt)}function Y(){const W=$[Q];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ot(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function St(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Gt(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $t(W){z.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),z.copy(W))}function Wt(W){T.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),T.copy(W))}function ue(W,Lt){let lt=u.get(Lt);lt===void 0&&(lt=new WeakMap,u.set(Lt,lt));let pt=lt.get(W);pt===void 0&&(pt=i.getUniformBlockIndex(Lt,W.name),lt.set(W,pt))}function ie(W,Lt){const pt=u.get(Lt).get(W);l.get(Lt)!==pt&&(i.uniformBlockBinding(Lt,pt,W.__bindingPointIndex),l.set(Lt,pt))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,$={},c={},d=new WeakMap,f=[],v=null,g=!1,m=null,p=null,x=null,S=null,_=null,A=null,D=null,N=new oe(0,0,0),P=0,E=!1,y=null,b=null,B=null,U=null,X=null,z.set(0,0,i.canvas.width,i.canvas.height),T.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:et,bindFramebuffer:G,drawBuffers:rt,useProgram:mt,setBlending:I,setMaterial:ft,setFlipSided:ut,setCullFace:Xt,setLineWidth:xt,setPolygonOffset:ne,setScissorTest:vt,activeTexture:R,bindTexture:M,unbindTexture:Y,compressedTexImage2D:ct,compressedTexImage3D:ht,texImage2D:Gt,texImage3D:Zt,updateUBOMapping:ue,uniformBlockBinding:ie,texStorage2D:he,texStorage3D:St,texSubImage2D:ot,texSubImage3D:wt,compressedTexSubImage2D:bt,compressedTexSubImage3D:Ft,scissor:$t,viewport:Wt,reset:ge}}function Ip(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new le,h=new WeakMap;let c;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,M){return f?new OffscreenCanvas(R,M):Ki("canvas")}function g(R,M,Y){let ct=1;const ht=vt(R);if((ht.width>Y||ht.height>Y)&&(ct=Y/Math.max(ht.width,ht.height)),ct<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ot=Math.floor(ct*ht.width),wt=Math.floor(ct*ht.height);c===void 0&&(c=v(ot,wt));const bt=M?v(ot,wt):c;return bt.width=ot,bt.height=wt,bt.getContext("2d").drawImage(R,0,0,ot,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+ot+"x"+wt+")."),bt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,M,Y,ct,ht=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ot=M;if(M===i.RED&&(Y===i.FLOAT&&(ot=i.R32F),Y===i.HALF_FLOAT&&(ot=i.R16F),Y===i.UNSIGNED_BYTE&&(ot=i.R8)),M===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ot=i.R8UI),Y===i.UNSIGNED_SHORT&&(ot=i.R16UI),Y===i.UNSIGNED_INT&&(ot=i.R32UI),Y===i.BYTE&&(ot=i.R8I),Y===i.SHORT&&(ot=i.R16I),Y===i.INT&&(ot=i.R32I)),M===i.RG&&(Y===i.FLOAT&&(ot=i.RG32F),Y===i.HALF_FLOAT&&(ot=i.RG16F),Y===i.UNSIGNED_BYTE&&(ot=i.RG8)),M===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ot=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ot=i.RG16UI),Y===i.UNSIGNED_INT&&(ot=i.RG32UI),Y===i.BYTE&&(ot=i.RG8I),Y===i.SHORT&&(ot=i.RG16I),Y===i.INT&&(ot=i.RG32I)),M===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),Y===i.UNSIGNED_INT&&(ot=i.RGB32UI),Y===i.BYTE&&(ot=i.RGB8I),Y===i.SHORT&&(ot=i.RGB16I),Y===i.INT&&(ot=i.RGB32I)),M===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ot=i.RGBA32UI),Y===i.BYTE&&(ot=i.RGBA8I),Y===i.SHORT&&(ot=i.RGBA16I),Y===i.INT&&(ot=i.RGBA32I)),M===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),M===i.RGBA){const wt=ht?Lr:Me.getTransfer(ct);Y===i.FLOAT&&(ot=i.RGBA32F),Y===i.HALF_FLOAT&&(ot=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ot=wt===Ae?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function _(R,M){let Y;return R?M===null||M===ei||M===Di?Y=i.DEPTH24_STENCIL8:M===En?Y=i.DEPTH32F_STENCIL8:M===$i&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ei||M===Di?Y=i.DEPTH_COMPONENT24:M===En?Y=i.DEPTH_COMPONENT32F:M===$i&&(Y=i.DEPTH_COMPONENT16),Y}function A(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==fn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function D(R){const M=R.target;M.removeEventListener("dispose",D),P(M),M.isVideoTexture&&h.delete(M)}function N(R){const M=R.target;M.removeEventListener("dispose",N),y(M)}function P(R){const M=n.get(R);if(M.__webglInit===void 0)return;const Y=R.source,ct=d.get(Y);if(ct){const ht=ct[M.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&E(R),Object.keys(ct).length===0&&d.delete(Y)}n.remove(R)}function E(R){const M=n.get(R);i.deleteTexture(M.__webglTexture);const Y=R.source,ct=d.get(Y);delete ct[M.__cacheKey],a.memory.textures--}function y(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(M.__webglFramebuffer[ct]))for(let ht=0;ht<M.__webglFramebuffer[ct].length;ht++)i.deleteFramebuffer(M.__webglFramebuffer[ct][ht]);else i.deleteFramebuffer(M.__webglFramebuffer[ct]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ct])}else{if(Array.isArray(M.__webglFramebuffer))for(let ct=0;ct<M.__webglFramebuffer.length;ct++)i.deleteFramebuffer(M.__webglFramebuffer[ct]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ct=0;ct<M.__webglColorRenderbuffer.length;ct++)M.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ct]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=R.textures;for(let ct=0,ht=Y.length;ct<ht;ct++){const ot=n.get(Y[ct]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),a.memory.textures--),n.remove(Y[ct])}n.remove(R)}let b=0;function B(){b=0}function U(){const R=b;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),b+=1,R}function X(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function q(R,M){const Y=n.get(R);if(R.isVideoTexture&&xt(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){const ct=R.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{T(Y,R,M);return}}e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+M)}function J(R,M){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){T(Y,R,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+M)}function O(R,M){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){T(Y,R,M);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+M)}function L(R,M){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){C(Y,R,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+M)}const Q={[Cs]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[Rs]:i.MIRRORED_REPEAT},$={[cn]:i.NEAREST,[Vl]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},F={[Wl]:i.NEVER,[$l]:i.ALWAYS,[Xl]:i.LESS,[ko]:i.LEQUAL,[ql]:i.EQUAL,[jl]:i.GEQUAL,[Yl]:i.GREATER,[Zl]:i.NOTEQUAL};function K(R,M){if(M.type===En&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===fn||M.magFilter===zr||M.magFilter===tr||M.magFilter===Jn||M.minFilter===fn||M.minFilter===zr||M.minFilter===tr||M.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Q[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Q[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Q[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,$[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,$[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,F[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===cn||M.minFilter!==tr&&M.minFilter!==Jn||M.type===En&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function z(R,M){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",D));const ct=M.source;let ht=d.get(ct);ht===void 0&&(ht={},d.set(ct,ht));const ot=X(M);if(ot!==R.__cacheKey){ht[ot]===void 0&&(ht[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ht[ot].usedTimes++;const wt=ht[R.__cacheKey];wt!==void 0&&(ht[R.__cacheKey].usedTimes--,wt.usedTimes===0&&E(M)),R.__cacheKey=ot,R.__webglTexture=ht[ot].texture}return Y}function T(R,M,Y){let ct=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ct=i.TEXTURE_3D);const ht=z(R,M),ot=M.source;e.bindTexture(ct,R.__webglTexture,i.TEXTURE0+Y);const wt=n.get(ot);if(ot.version!==wt.__version||ht===!0){e.activeTexture(i.TEXTURE0+Y);const bt=Me.getPrimaries(Me.workingColorSpace),Ft=M.colorSpace===Un?null:Me.getPrimaries(M.colorSpace),he=M.colorSpace===Un||bt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let St=g(M.image,!1,s.maxTextureSize);St=ne(M,St);const Gt=r.convert(M.format,M.colorSpace),Zt=r.convert(M.type);let $t=S(M.internalFormat,Gt,Zt,M.colorSpace,M.isVideoTexture);K(ct,M);let Wt;const ue=M.mipmaps,ie=M.isVideoTexture!==!0,ge=wt.__version===void 0||ht===!0,W=ot.dataReady,Lt=A(M,St);if(M.isDepthTexture)$t=_(M.format===Ii,M.type),ge&&(ie?e.texStorage2D(i.TEXTURE_2D,1,$t,St.width,St.height):e.texImage2D(i.TEXTURE_2D,0,$t,St.width,St.height,0,Gt,Zt,null));else if(M.isDataTexture)if(ue.length>0){ie&&ge&&e.texStorage2D(i.TEXTURE_2D,Lt,$t,ue[0].width,ue[0].height);for(let lt=0,pt=ue.length;lt<pt;lt++)Wt=ue[lt],ie?W&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Wt.width,Wt.height,Gt,Zt,Wt.data):e.texImage2D(i.TEXTURE_2D,lt,$t,Wt.width,Wt.height,0,Gt,Zt,Wt.data);M.generateMipmaps=!1}else ie?(ge&&e.texStorage2D(i.TEXTURE_2D,Lt,$t,St.width,St.height),W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St.width,St.height,Gt,Zt,St.data)):e.texImage2D(i.TEXTURE_2D,0,$t,St.width,St.height,0,Gt,Zt,St.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ie&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,$t,ue[0].width,ue[0].height,St.depth);for(let lt=0,pt=ue.length;lt<pt;lt++)if(Wt=ue[lt],M.format!==ln)if(Gt!==null)if(ie){if(W)if(M.layerUpdates.size>0){const Vt=to(Wt.width,Wt.height,M.format,M.type);for(const Ot of M.layerUpdates){const re=Wt.data.subarray(Ot*Vt/Wt.data.BYTES_PER_ELEMENT,(Ot+1)*Vt/Wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Ot,Wt.width,Wt.height,1,Gt,re)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Wt.width,Wt.height,St.depth,Gt,Wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,$t,Wt.width,Wt.height,St.depth,0,Wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Wt.width,Wt.height,St.depth,Gt,Zt,Wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,$t,Wt.width,Wt.height,St.depth,0,Gt,Zt,Wt.data)}else{ie&&ge&&e.texStorage2D(i.TEXTURE_2D,Lt,$t,ue[0].width,ue[0].height);for(let lt=0,pt=ue.length;lt<pt;lt++)Wt=ue[lt],M.format!==ln?Gt!==null?ie?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,Wt.width,Wt.height,Gt,Wt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,$t,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?W&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Wt.width,Wt.height,Gt,Zt,Wt.data):e.texImage2D(i.TEXTURE_2D,lt,$t,Wt.width,Wt.height,0,Gt,Zt,Wt.data)}else if(M.isDataArrayTexture)if(ie){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,$t,St.width,St.height,St.depth),W)if(M.layerUpdates.size>0){const lt=to(St.width,St.height,M.format,M.type);for(const pt of M.layerUpdates){const Vt=St.data.subarray(pt*lt/St.data.BYTES_PER_ELEMENT,(pt+1)*lt/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,St.width,St.height,1,Gt,Zt,Vt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Gt,Zt,St.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$t,St.width,St.height,St.depth,0,Gt,Zt,St.data);else if(M.isData3DTexture)ie?(ge&&e.texStorage3D(i.TEXTURE_3D,Lt,$t,St.width,St.height,St.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Gt,Zt,St.data)):e.texImage3D(i.TEXTURE_3D,0,$t,St.width,St.height,St.depth,0,Gt,Zt,St.data);else if(M.isFramebufferTexture){if(ge)if(ie)e.texStorage2D(i.TEXTURE_2D,Lt,$t,St.width,St.height);else{let lt=St.width,pt=St.height;for(let Vt=0;Vt<Lt;Vt++)e.texImage2D(i.TEXTURE_2D,Vt,$t,lt,pt,0,Gt,Zt,null),lt>>=1,pt>>=1}}else if(ue.length>0){if(ie&&ge){const lt=vt(ue[0]);e.texStorage2D(i.TEXTURE_2D,Lt,$t,lt.width,lt.height)}for(let lt=0,pt=ue.length;lt<pt;lt++)Wt=ue[lt],ie?W&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Gt,Zt,Wt):e.texImage2D(i.TEXTURE_2D,lt,$t,Gt,Zt,Wt);M.generateMipmaps=!1}else if(ie){if(ge){const lt=vt(St);e.texStorage2D(i.TEXTURE_2D,Lt,$t,lt.width,lt.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Gt,Zt,St)}else e.texImage2D(i.TEXTURE_2D,0,$t,Gt,Zt,St);m(M)&&p(ct),wt.__version=ot.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function C(R,M,Y){if(M.image.length!==6)return;const ct=z(R,M),ht=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+Y);const ot=n.get(ht);if(ht.version!==ot.__version||ct===!0){e.activeTexture(i.TEXTURE0+Y);const wt=Me.getPrimaries(Me.workingColorSpace),bt=M.colorSpace===Un?null:Me.getPrimaries(M.colorSpace),Ft=M.colorSpace===Un||wt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const he=M.isCompressedTexture||M.image[0].isCompressedTexture,St=M.image[0]&&M.image[0].isDataTexture,Gt=[];for(let pt=0;pt<6;pt++)!he&&!St?Gt[pt]=g(M.image[pt],!0,s.maxCubemapSize):Gt[pt]=St?M.image[pt].image:M.image[pt],Gt[pt]=ne(M,Gt[pt]);const Zt=Gt[0],$t=r.convert(M.format,M.colorSpace),Wt=r.convert(M.type),ue=S(M.internalFormat,$t,Wt,M.colorSpace),ie=M.isVideoTexture!==!0,ge=ot.__version===void 0||ct===!0,W=ht.dataReady;let Lt=A(M,Zt);K(i.TEXTURE_CUBE_MAP,M);let lt;if(he){ie&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,ue,Zt.width,Zt.height);for(let pt=0;pt<6;pt++){lt=Gt[pt].mipmaps;for(let Vt=0;Vt<lt.length;Vt++){const Ot=lt[Vt];M.format!==ln?$t!==null?ie?W&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,0,0,Ot.width,Ot.height,$t,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,ue,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,0,0,Ot.width,Ot.height,$t,Wt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,ue,Ot.width,Ot.height,0,$t,Wt,Ot.data)}}}else{if(lt=M.mipmaps,ie&&ge){lt.length>0&&Lt++;const pt=vt(Gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,ue,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(St){ie?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Gt[pt].width,Gt[pt].height,$t,Wt,Gt[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ue,Gt[pt].width,Gt[pt].height,0,$t,Wt,Gt[pt].data);for(let Vt=0;Vt<lt.length;Vt++){const re=lt[Vt].image[pt].image;ie?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,0,0,re.width,re.height,$t,Wt,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,ue,re.width,re.height,0,$t,Wt,re.data)}}else{ie?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,$t,Wt,Gt[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ue,$t,Wt,Gt[pt]);for(let Vt=0;Vt<lt.length;Vt++){const Ot=lt[Vt];ie?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,0,0,$t,Wt,Ot.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,ue,$t,Wt,Ot.image[pt])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),ot.__version=ht.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function k(R,M,Y,ct,ht,ot){const wt=r.convert(Y.format,Y.colorSpace),bt=r.convert(Y.type),Ft=S(Y.internalFormat,wt,bt,Y.colorSpace),he=n.get(M),St=n.get(Y);if(St.__renderTarget=M,!he.__hasExternalTextures){const Gt=Math.max(1,M.width>>ot),Zt=Math.max(1,M.height>>ot);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,ot,Ft,Gt,Zt,M.depth,0,wt,bt,null):e.texImage2D(ht,ot,Ft,Gt,Zt,0,wt,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Xt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,ht,St.__webglTexture,0,ut(M)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,ht,St.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function j(R,M,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){const ct=M.depthTexture,ht=ct&&ct.isDepthTexture?ct.type:null,ot=_(M.stencilBuffer,ht),wt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=ut(M);Xt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,ot,M.width,M.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,ot,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ot,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,R)}else{const ct=M.textures;for(let ht=0;ht<ct.length;ht++){const ot=ct[ht],wt=r.convert(ot.format,ot.colorSpace),bt=r.convert(ot.type),Ft=S(ot.internalFormat,wt,bt,ot.colorSpace),he=ut(M);Y&&Xt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,Ft,M.width,M.height):Xt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,Ft,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ft,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=n.get(M.depthTexture);ct.__renderTarget=M,(!ct.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const ht=ct.__webglTexture,ot=ut(M);if(M.depthTexture.format===Ai)Xt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(M.depthTexture.format===Ii)Xt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function G(R){const M=n.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const ct=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ct){const ht=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ct.removeEventListener("dispose",ht)};ct.addEventListener("dispose",ht),M.__depthDisposeCallback=ht}M.__boundDepthTexture=ct}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");et(M.__webglFramebuffer,R)}else if(Y){M.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ct]),M.__webglDepthbuffer[ct]===void 0)M.__webglDepthbuffer[ct]=i.createRenderbuffer(),j(M.__webglDepthbuffer[ct],R,!1);else{const ht=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),j(M.__webglDepthbuffer,R,!1);else{const ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(R,M,Y){const ct=n.get(R);M!==void 0&&k(ct.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&G(R)}function mt(R){const M=R.texture,Y=n.get(R),ct=n.get(M);R.addEventListener("dispose",N);const ht=R.textures,ot=R.isWebGLCubeRenderTarget===!0,wt=ht.length>1;if(wt||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=M.version,a.memory.textures++),ot){Y.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[bt]=[];for(let Ft=0;Ft<M.mipmaps.length;Ft++)Y.__webglFramebuffer[bt][Ft]=i.createFramebuffer()}else Y.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let bt=0;bt<M.mipmaps.length;bt++)Y.__webglFramebuffer[bt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(wt)for(let bt=0,Ft=ht.length;bt<Ft;bt++){const he=n.get(ht[bt]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Xt(R)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let bt=0;bt<ht.length;bt++){const Ft=ht[bt];Y.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[bt]);const he=r.convert(Ft.format,Ft.colorSpace),St=r.convert(Ft.type),Gt=S(Ft.internalFormat,he,St,Ft.colorSpace,R.isXRRenderTarget===!0),Zt=ut(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,Gt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),j(Y.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),K(i.TEXTURE_CUBE_MAP,M);for(let bt=0;bt<6;bt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ft=0;Ft<M.mipmaps.length;Ft++)k(Y.__webglFramebuffer[bt][Ft],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ft);else k(Y.__webglFramebuffer[bt],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let bt=0,Ft=ht.length;bt<Ft;bt++){const he=ht[bt],St=n.get(he);e.bindTexture(i.TEXTURE_2D,St.__webglTexture),K(i.TEXTURE_2D,he),k(Y.__webglFramebuffer,R,he,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),m(he)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(bt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,ct.__webglTexture),K(bt,M),M.mipmaps&&M.mipmaps.length>0)for(let Ft=0;Ft<M.mipmaps.length;Ft++)k(Y.__webglFramebuffer[Ft],R,M,i.COLOR_ATTACHMENT0,bt,Ft);else k(Y.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,bt,0);m(M)&&p(bt),e.unbindTexture()}R.depthBuffer&&G(R)}function Mt(R){const M=R.textures;for(let Y=0,ct=M.length;Y<ct;Y++){const ht=M[Y];if(m(ht)){const ot=x(R),wt=n.get(ht).__webglTexture;e.bindTexture(ot,wt),p(ot),e.unbindTexture()}}}const Et=[],I=[];function ft(R){if(R.samples>0){if(Xt(R)===!1){const M=R.textures,Y=R.width,ct=R.height;let ht=i.COLOR_BUFFER_BIT;const ot=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(R),bt=M.length>1;if(bt)for(let Ft=0;Ft<M.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Ft=0;Ft<M.length;Ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),bt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Ft]);const he=n.get(M[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,Y,ct,0,0,Y,ct,ht,i.NEAREST),l===!0&&(Et.length=0,I.length=0,Et.push(i.COLOR_ATTACHMENT0+Ft),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Et.push(ot),I.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let Ft=0;Ft<M.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Ft]);const he=n.get(M[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,he,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ut(R){return Math.min(s.maxSamples,R.samples)}function Xt(R){const M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function xt(R){const M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function ne(R,M){const Y=R.colorSpace,ct=R.format,ht=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==Ni&&Y!==Un&&(Me.getTransfer(Y)===Ae?(ct!==ln||ht!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}function vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=J,this.setTexture3D=O,this.setTextureCube=L,this.rebindTextures=rt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=k,this.useMultisampledRTT=Xt}function Np(i,t){function e(n,s=Un){let r;const a=Me.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Io)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lo)return i.BYTE;if(n===Do)return i.SHORT;if(n===$i)return i.UNSIGNED_SHORT;if(n===ca)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Qi)return i.HALF_FLOAT;if(n===No)return i.ALPHA;if(n===Uo)return i.RGB;if(n===ln)return i.RGBA;if(n===Fo)return i.LUMINANCE;if(n===Bo)return i.LUMINANCE_ALPHA;if(n===Ai)return i.DEPTH_COMPONENT;if(n===Ii)return i.DEPTH_STENCIL;if(n===Oo)return i.RED;if(n===da)return i.RED_INTEGER;if(n===zo)return i.RG;if(n===fa)return i.RG_INTEGER;if(n===pa)return i.RGBA_INTEGER;if(n===br||n===Tr||n===Ar||n===Cr)if(a===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ps||n===Ls||n===Ds||n===Is)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ps)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ls)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ds)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Is)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ns||n===Us||n===Fs)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ns||n===Us)return a===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fs)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bs||n===Os||n===zs||n===Vs||n===ks||n===Hs||n===Gs||n===Ws||n===Xs||n===qs||n===Ys||n===Zs||n===js||n===$s)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bs)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Os)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zs)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vs)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ks)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hs)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gs)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ws)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xs)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qs)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ys)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zs)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===js)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$s)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rr||n===Ks||n===Qs)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rr)return a===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ks)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qs)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vo||n===Js||n===ta||n===ea)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Js)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ea)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Up={type:"move"};class ps{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(u,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],d=h.position.distanceTo(c.position),f=.02,v=.005;u.inputState.pinching&&d>f+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=f-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Up)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Fp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bp=`
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

}`;class Op{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new zn({vertexShader:Fp,fragmentShader:Bp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zp extends Bi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,u=null,h=null,c=null,d=null,f=null,v=null;const g=new Op,m=e.getContextAttributes();let p=null,x=null;const S=[],_=[],A=new le;let D=null;const N=new Qe;N.viewport=new Pe;const P=new Qe;P.viewport=new Pe;const E=[N,P],y=new ih;let b=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let C=S[T];return C===void 0&&(C=new ps,S[T]=C),C.getTargetRaySpace()},this.getControllerGrip=function(T){let C=S[T];return C===void 0&&(C=new ps,S[T]=C),C.getGripSpace()},this.getHand=function(T){let C=S[T];return C===void 0&&(C=new ps,S[T]=C),C.getHandSpace()};function U(T){const C=_.indexOf(T.inputSource);if(C===-1)return;const k=S[C];k!==void 0&&(k.update(T.inputSource,T.frame,u||a),k.dispatchEvent({type:T.type,data:T.inputSource}))}function X(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",q);for(let T=0;T<S.length;T++){const C=_[T];C!==null&&(_[T]=null,S[T].disconnect(C))}b=null,B=null,g.reset(),t.setRenderTarget(p),f=null,d=null,c=null,s=null,x=null,z.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){r=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){o=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(T){u=T},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(T){if(s=T,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",X),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const C={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,C),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ni(f.framebufferWidth,f.framebufferHeight,{format:ln,type:An,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let C=null,k=null,j=null;m.depth&&(j=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,C=m.stencil?Ii:Ai,k=m.stencil?Di:ei);const et={colorFormat:e.RGBA8,depthFormat:j,scaleFactor:r};c=new XRWebGLBinding(s,e),d=c.createProjectionLayer(et),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new ni(d.textureWidth,d.textureHeight,{format:ln,type:An,depthTexture:new tl(d.textureWidth,d.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await s.requestReferenceSpace(o),z.setContext(s),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(T){for(let C=0;C<T.removed.length;C++){const k=T.removed[C],j=_.indexOf(k);j>=0&&(_[j]=null,S[j].disconnect(k))}for(let C=0;C<T.added.length;C++){const k=T.added[C];let j=_.indexOf(k);if(j===-1){for(let G=0;G<S.length;G++)if(G>=_.length){_.push(k),j=G;break}else if(_[G]===null){_[G]=k,j=G;break}if(j===-1)break}const et=S[j];et&&et.connect(k)}}const J=new nt,O=new nt;function L(T,C,k){J.setFromMatrixPosition(C.matrixWorld),O.setFromMatrixPosition(k.matrixWorld);const j=J.distanceTo(O),et=C.projectionMatrix.elements,G=k.projectionMatrix.elements,rt=et[14]/(et[10]-1),mt=et[14]/(et[10]+1),Mt=(et[9]+1)/et[5],Et=(et[9]-1)/et[5],I=(et[8]-1)/et[0],ft=(G[8]+1)/G[0],ut=rt*I,Xt=rt*ft,xt=j/(-I+ft),ne=xt*-I;if(C.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(ne),T.translateZ(xt),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),et[10]===-1)T.projectionMatrix.copy(C.projectionMatrix),T.projectionMatrixInverse.copy(C.projectionMatrixInverse);else{const vt=rt+xt,R=mt+xt,M=ut-ne,Y=Xt+(j-ne),ct=Mt*mt/R*vt,ht=Et*mt/R*vt;T.projectionMatrix.makePerspective(M,Y,ct,ht,vt,R),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}}function Q(T,C){C===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(C.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(s===null)return;let C=T.near,k=T.far;g.texture!==null&&(g.depthNear>0&&(C=g.depthNear),g.depthFar>0&&(k=g.depthFar)),y.near=P.near=N.near=C,y.far=P.far=N.far=k,(b!==y.near||B!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,B=y.far),N.layers.mask=T.layers.mask|2,P.layers.mask=T.layers.mask|4,y.layers.mask=N.layers.mask|P.layers.mask;const j=T.parent,et=y.cameras;Q(y,j);for(let G=0;G<et.length;G++)Q(et[G],j);et.length===2?L(y,N,P):y.projectionMatrix.copy(N.projectionMatrix),$(T,y,j)};function $(T,C,k){k===null?T.matrix.copy(C.matrixWorld):(T.matrix.copy(k.matrixWorld),T.matrix.invert(),T.matrix.multiply(C.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(C.projectionMatrix),T.projectionMatrixInverse.copy(C.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=Ui*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(T){l=T,d!==null&&(d.fixedFoveation=T),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=T)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let F=null;function K(T,C){if(h=C.getViewerPose(u||a),v=C,h!==null){const k=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let j=!1;k.length!==y.cameras.length&&(y.cameras.length=0,j=!0);for(let G=0;G<k.length;G++){const rt=k[G];let mt=null;if(f!==null)mt=f.getViewport(rt);else{const Et=c.getViewSubImage(d,rt);mt=Et.viewport,G===0&&(t.setRenderTargetTextures(x,Et.colorTexture,d.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(x))}let Mt=E[G];Mt===void 0&&(Mt=new Qe,Mt.layers.enable(G),Mt.viewport=new Pe,E[G]=Mt),Mt.matrix.fromArray(rt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(rt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(mt.x,mt.y,mt.width,mt.height),G===0&&(y.matrix.copy(Mt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),j===!0&&y.cameras.push(Mt)}const et=s.enabledFeatures;if(et&&et.includes("depth-sensing")){const G=c.getDepthInformation(k[0]);G&&G.isValid&&G.texture&&g.init(t,G,s.renderState)}}for(let k=0;k<S.length;k++){const j=_[k],et=S[k];j!==null&&et!==void 0&&et.update(j,C,u||a)}F&&F(T,C),C.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:C}),v=null}const z=new rl;z.setAnimationLoop(K),this.setAnimationLoop=function(T){F=T},this.dispose=function(){}}}const Zn=new We,Vp=new Ce;function kp(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,jo(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,S,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),c(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,S):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),S=x.envMap,_=x.envMapRotation;S&&(m.envMap.value=S,Zn.copy(_),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),m.envMapRotation.value.setFromMatrix4(Vp.makeRotationFromEuler(Zn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hp(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const _=S.program;n.uniformBlockBinding(x,_)}function u(x,S){let _=s[x.id];_===void 0&&(v(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",m));const A=S.program;n.updateUBOMapping(x,A);const D=t.render.frame;r[x.id]!==D&&(d(x),r[x.id]=D)}function h(x){const S=c();x.__bindingPointIndex=S;const _=i.createBuffer(),A=x.__size,D=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,_),_}function c(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const S=s[x.id],_=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let D=0,N=_.length;D<N;D++){const P=Array.isArray(_[D])?_[D]:[_[D]];for(let E=0,y=P.length;E<y;E++){const b=P[E];if(f(b,D,E,A)===!0){const B=b.__offset,U=Array.isArray(b.value)?b.value:[b.value];let X=0;for(let q=0;q<U.length;q++){const J=U[q],O=g(J);typeof J=="number"||typeof J=="boolean"?(b.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,B+X,b.__data)):J.isMatrix3?(b.__data[0]=J.elements[0],b.__data[1]=J.elements[1],b.__data[2]=J.elements[2],b.__data[3]=0,b.__data[4]=J.elements[3],b.__data[5]=J.elements[4],b.__data[6]=J.elements[5],b.__data[7]=0,b.__data[8]=J.elements[6],b.__data[9]=J.elements[7],b.__data[10]=J.elements[8],b.__data[11]=0):(J.toArray(b.__data,X),X+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,S,_,A){const D=x.value,N=S+"_"+_;if(A[N]===void 0)return typeof D=="number"||typeof D=="boolean"?A[N]=D:A[N]=D.clone(),!0;{const P=A[N];if(typeof D=="number"||typeof D=="boolean"){if(P!==D)return A[N]=D,!0}else if(P.equals(D)===!1)return P.copy(D),!0}return!1}function v(x){const S=x.uniforms;let _=0;const A=16;for(let N=0,P=S.length;N<P;N++){const E=Array.isArray(S[N])?S[N]:[S[N]];for(let y=0,b=E.length;y<b;y++){const B=E[y],U=Array.isArray(B.value)?B.value:[B.value];for(let X=0,q=U.length;X<q;X++){const J=U[X],O=g(J),L=_%A,Q=L%O.boundary,$=L+Q;_+=Q,$!==0&&A-$<O.storage&&(_+=A-$),B.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=O.storage}}}const D=_%A;return D>0&&(_+=A-D),x.__size=_,x.__cache={},this}function g(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){const S=x.target;S.removeEventListener("dispose",m);const _=a.indexOf(S.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:u,dispose:p}}class Gp{constructor(t={}){const{canvas:e=pc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const x=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=Bn,this.toneMappingExposure=1;const _=this;let A=!1,D=0,N=0,P=null,E=-1,y=null;const b=new Pe,B=new Pe;let U=null;const X=new oe(0);let q=0,J=e.width,O=e.height,L=1,Q=null,$=null;const F=new Pe(0,0,J,O),K=new Pe(0,0,J,O);let z=!1;const T=new xa;let C=!1,k=!1;const j=new Ce,et=new Ce,G=new nt,rt=new Pe,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function Et(){return P===null?L:1}let I=n;function ft(w,V){return e.getContext(w,V)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oa}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),I===null){const V="webgl2";if(I=ft(V,w),I===null)throw ft(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ut,Xt,xt,ne,vt,R,M,Y,ct,ht,ot,wt,bt,Ft,he,St,Gt,Zt,$t,Wt,ue,ie,ge,W;function Lt(){ut=new Kd(I),ut.init(),ie=new Np(I,ut),Xt=new Xd(I,ut,t,ie),xt=new Dp(I,ut),Xt.reverseDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),ne=new tf(I),vt=new xp,R=new Ip(I,ut,xt,vt,Xt,ie,ne),M=new Yd(_),Y=new $d(_),ct=new oh(I),ge=new Gd(I,ct),ht=new Qd(I,ct,ne,ge),ot=new nf(I,ht,ct,ne),$t=new ef(I,Xt,R),St=new qd(vt),wt=new _p(_,M,Y,ut,Xt,ge,St),bt=new kp(_,vt),Ft=new Sp,he=new Ap(ut),Zt=new Hd(_,M,Y,xt,ot,f,l),Gt=new Pp(_,ot,Xt),W=new Hp(I,ne,Xt,xt),Wt=new Wd(I,ut,ne),ue=new Jd(I,ut,ne),ne.programs=wt.programs,_.capabilities=Xt,_.extensions=ut,_.properties=vt,_.renderLists=Ft,_.shadowMap=Gt,_.state=xt,_.info=ne}Lt();const lt=new zp(_,I);this.xr=lt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=ut.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ut.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(w){w!==void 0&&(L=w,this.setSize(J,O,!1))},this.getSize=function(w){return w.set(J,O)},this.setSize=function(w,V,tt=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,O=V,e.width=Math.floor(w*L),e.height=Math.floor(V*L),tt===!0&&(e.style.width=w+"px",e.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(J*L,O*L).floor()},this.setDrawingBufferSize=function(w,V,tt){J=w,O=V,L=tt,e.width=Math.floor(w*tt),e.height=Math.floor(V*tt),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(F)},this.setViewport=function(w,V,tt,Z){w.isVector4?F.set(w.x,w.y,w.z,w.w):F.set(w,V,tt,Z),xt.viewport(b.copy(F).multiplyScalar(L).round())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,V,tt,Z){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,V,tt,Z),xt.scissor(B.copy(K).multiplyScalar(L).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(w){xt.setScissorTest(z=w)},this.setOpaqueSort=function(w){Q=w},this.setTransparentSort=function(w){$=w},this.getClearColor=function(w){return w.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(w=!0,V=!0,tt=!0){let Z=0;if(w){let H=!1;if(P!==null){const st=P.texture.format;H=st===pa||st===fa||st===da}if(H){const st=P.texture.type,Rt=st===An||st===ei||st===$i||st===Di||st===ha||st===ua,zt=Zt.getClearColor(),kt=Zt.getClearAlpha(),te=zt.r,jt=zt.g,Ut=zt.b;Rt?(v[0]=te,v[1]=jt,v[2]=Ut,v[3]=kt,I.clearBufferuiv(I.COLOR,0,v)):(g[0]=te,g[1]=jt,g[2]=Ut,g[3]=kt,I.clearBufferiv(I.COLOR,0,g))}else Z|=I.COLOR_BUFFER_BIT}V&&(Z|=I.DEPTH_BUFFER_BIT),tt&&(Z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),Zt.dispose(),Ft.dispose(),he.dispose(),vt.dispose(),M.dispose(),Y.dispose(),ot.dispose(),ge.dispose(),W.dispose(),wt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",gt),lt.removeEventListener("sessionend",_t),Jt.stop()};function pt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=ne.autoReset,V=Gt.enabled,tt=Gt.autoUpdate,Z=Gt.needsUpdate,H=Gt.type;Lt(),ne.autoReset=w,Gt.enabled=V,Gt.autoUpdate=tt,Gt.needsUpdate=Z,Gt.type=H}function Ot(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function re(w){const V=w.target;V.removeEventListener("dispose",re),be(V)}function be(w){Re(w),vt.remove(w)}function Re(w){const V=vt.get(w).programs;V!==void 0&&(V.forEach(function(tt){wt.releaseProgram(tt)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,tt,Z,H,st){V===null&&(V=mt);const Rt=H.isMesh&&H.matrixWorld.determinant()<0,zt=Tt(w,V,tt,Z,H);xt.setMaterial(Z,Rt);let kt=tt.index,te=1;if(Z.wireframe===!0){if(kt=ht.getWireframeAttribute(tt),kt===void 0)return;te=2}const jt=tt.drawRange,Ut=tt.attributes.position;let de=jt.start*te,ee=(jt.start+jt.count)*te;st!==null&&(de=Math.max(de,st.start*te),ee=Math.min(ee,(st.start+st.count)*te)),kt!==null?(de=Math.max(de,0),ee=Math.min(ee,kt.count)):Ut!=null&&(de=Math.max(de,0),ee=Math.min(ee,Ut.count));const Ee=ee-de;if(Ee<0||Ee===1/0)return;ge.setup(H,Z,zt,tt,kt);let _e,se=Wt;if(kt!==null&&(_e=ct.get(kt),se=ue,se.setIndex(_e)),H.isMesh)Z.wireframe===!0?(xt.setLineWidth(Z.wireframeLinewidth*Et()),se.setMode(I.LINES)):se.setMode(I.TRIANGLES);else if(H.isLine){let Yt=Z.linewidth;Yt===void 0&&(Yt=1),xt.setLineWidth(Yt*Et()),H.isLineSegments?se.setMode(I.LINES):H.isLineLoop?se.setMode(I.LINE_LOOP):se.setMode(I.LINE_STRIP)}else H.isPoints?se.setMode(I.POINTS):H.isSprite&&se.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)se.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Yt=H._multiDrawStarts,we=H._multiDrawCounts,pe=H._multiDrawCount,Qt=kt?ct.get(kt).bytesPerElement:1,Le=vt.get(Z).currentProgram.getUniforms();for(let ye=0;ye<pe;ye++)Le.setValue(I,"_gl_DrawID",ye),se.render(Yt[ye]/Qt,we[ye])}else if(H.isInstancedMesh)se.renderInstances(de,Ee,H.count);else if(tt.isInstancedBufferGeometry){const Yt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,we=Math.min(tt.instanceCount,Yt);se.renderInstances(de,Ee,we)}else se.render(de,Ee)};function ae(w,V,tt){w.transparent===!0&&w.side===en&&w.forceSinglePass===!1?(w.side=Ze,w.needsUpdate=!0,Dt(w,V,tt),w.side=On,w.needsUpdate=!0,Dt(w,V,tt),w.side=en):Dt(w,V,tt)}this.compile=function(w,V,tt=null){tt===null&&(tt=w),p=he.get(tt),p.init(V),S.push(p),tt.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),w!==tt&&w.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Z=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const st=H.material;if(st)if(Array.isArray(st))for(let Rt=0;Rt<st.length;Rt++){const zt=st[Rt];ae(zt,tt,H),Z.add(zt)}else ae(st,tt,H),Z.add(st)}),S.pop(),p=null,Z},this.compileAsync=function(w,V,tt=null){const Z=this.compile(w,V,tt);return new Promise(H=>{function st(){if(Z.forEach(function(Rt){vt.get(Rt).currentProgram.isReady()&&Z.delete(Rt)}),Z.size===0){H(w);return}setTimeout(st,10)}ut.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let at=null;function dt(w){at&&at(w)}function gt(){Jt.stop()}function _t(){Jt.start()}const Jt=new rl;Jt.setAnimationLoop(dt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(w){at=w,lt.setAnimationLoop(w),w===null?Jt.stop():Jt.start()},lt.addEventListener("sessionstart",gt),lt.addEventListener("sessionend",_t),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(V),V=lt.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,V,P),p=he.get(w,S.length),p.init(V),S.push(p),et.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),T.setFromProjectionMatrix(et),k=this.localClippingEnabled,C=St.init(this.clippingPlanes,k),m=Ft.get(w,x.length),m.init(),x.push(m),lt.enabled===!0&&lt.isPresenting===!0){const st=_.xr.getDepthSensingMesh();st!==null&&Bt(st,V,-1/0,_.sortObjects)}Bt(w,V,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Q,$),Mt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Mt&&Zt.addToRenderList(m,w),this.info.render.frame++,C===!0&&St.beginShadows();const tt=p.state.shadowsArray;Gt.render(tt,w,V),C===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,H=m.transmissive;if(p.setupLights(),V.isArrayCamera){const st=V.cameras;if(H.length>0)for(let Rt=0,zt=st.length;Rt<zt;Rt++){const kt=st[Rt];Nt(Z,H,w,kt)}Mt&&Zt.render(w);for(let Rt=0,zt=st.length;Rt<zt;Rt++){const kt=st[Rt];At(m,w,kt,kt.viewport)}}else H.length>0&&Nt(Z,H,w,V),Mt&&Zt.render(w),At(m,w,V);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(_,w,V),ge.resetDefaultState(),E=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],C===!0&&St.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Bt(w,V,tt,Z){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)tt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||T.intersectsSprite(w)){Z&&rt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(et);const Rt=ot.update(w),zt=w.material;zt.visible&&m.push(w,Rt,zt,tt,rt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||T.intersectsObject(w))){const Rt=ot.update(w),zt=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),rt.copy(w.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),rt.copy(Rt.boundingSphere.center)),rt.applyMatrix4(w.matrixWorld).applyMatrix4(et)),Array.isArray(zt)){const kt=Rt.groups;for(let te=0,jt=kt.length;te<jt;te++){const Ut=kt[te],de=zt[Ut.materialIndex];de&&de.visible&&m.push(w,Rt,de,tt,rt.z,Ut)}}else zt.visible&&m.push(w,Rt,zt,tt,rt.z,null)}}const st=w.children;for(let Rt=0,zt=st.length;Rt<zt;Rt++)Bt(st[Rt],V,tt,Z)}function At(w,V,tt,Z){const H=w.opaque,st=w.transmissive,Rt=w.transparent;p.setupLightsView(tt),C===!0&&St.setGlobalState(_.clippingPlanes,tt),Z&&xt.viewport(b.copy(Z)),H.length>0&&it(H,V,tt),st.length>0&&it(st,V,tt),Rt.length>0&&it(Rt,V,tt),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Nt(w,V,tt,Z){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new ni(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Qi:An,minFilter:Jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace}));const st=p.state.transmissionRenderTarget[Z.id],Rt=Z.viewport||b;st.setSize(Rt.z,Rt.w);const zt=_.getRenderTarget();_.setRenderTarget(st),_.getClearColor(X),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),Mt&&Zt.render(tt);const kt=_.toneMapping;_.toneMapping=Bn;const te=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),C===!0&&St.setGlobalState(_.clippingPlanes,Z),it(w,tt,Z),R.updateMultisampleRenderTarget(st),R.updateRenderTargetMipmap(st),ut.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Ut=0,de=V.length;Ut<de;Ut++){const ee=V[Ut],Ee=ee.object,_e=ee.geometry,se=ee.material,Yt=ee.group;if(se.side===en&&Ee.layers.test(Z.layers)){const we=se.side;se.side=Ze,se.needsUpdate=!0,Ct(Ee,tt,Z,_e,se,Yt),se.side=we,se.needsUpdate=!0,jt=!0}}jt===!0&&(R.updateMultisampleRenderTarget(st),R.updateRenderTargetMipmap(st))}_.setRenderTarget(zt),_.setClearColor(X,q),te!==void 0&&(Z.viewport=te),_.toneMapping=kt}function it(w,V,tt){const Z=V.isScene===!0?V.overrideMaterial:null;for(let H=0,st=w.length;H<st;H++){const Rt=w[H],zt=Rt.object,kt=Rt.geometry,te=Z===null?Rt.material:Z,jt=Rt.group;zt.layers.test(tt.layers)&&Ct(zt,V,tt,kt,te,jt)}}function Ct(w,V,tt,Z,H,st){w.onBeforeRender(_,V,tt,Z,H,st),w.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(_,V,tt,Z,w,st),H.transparent===!0&&H.side===en&&H.forceSinglePass===!1?(H.side=Ze,H.needsUpdate=!0,_.renderBufferDirect(tt,V,Z,H,w,st),H.side=On,H.needsUpdate=!0,_.renderBufferDirect(tt,V,Z,H,w,st),H.side=en):_.renderBufferDirect(tt,V,Z,H,w,st),w.onAfterRender(_,V,tt,Z,H,st)}function Dt(w,V,tt){V.isScene!==!0&&(V=mt);const Z=vt.get(w),H=p.state.lights,st=p.state.shadowsArray,Rt=H.state.version,zt=wt.getParameters(w,H.state,st,V,tt),kt=wt.getProgramCacheKey(zt);let te=Z.programs;Z.environment=w.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(w.isMeshStandardMaterial?Y:M).get(w.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,te===void 0&&(w.addEventListener("dispose",re),te=new Map,Z.programs=te);let jt=te.get(kt);if(jt!==void 0){if(Z.currentProgram===jt&&Z.lightsStateVersion===Rt)return Pt(w,zt),jt}else zt.uniforms=wt.getUniforms(w),w.onBeforeCompile(zt,_),jt=wt.acquireProgram(zt,kt),te.set(kt,jt),Z.uniforms=zt.uniforms;const Ut=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ut.clippingPlanes=St.uniform),Pt(w,zt),Z.needsLights=Kt(w),Z.lightsStateVersion=Rt,Z.needsLights&&(Ut.ambientLightColor.value=H.state.ambient,Ut.lightProbe.value=H.state.probe,Ut.directionalLights.value=H.state.directional,Ut.directionalLightShadows.value=H.state.directionalShadow,Ut.spotLights.value=H.state.spot,Ut.spotLightShadows.value=H.state.spotShadow,Ut.rectAreaLights.value=H.state.rectArea,Ut.ltc_1.value=H.state.rectAreaLTC1,Ut.ltc_2.value=H.state.rectAreaLTC2,Ut.pointLights.value=H.state.point,Ut.pointLightShadows.value=H.state.pointShadow,Ut.hemisphereLights.value=H.state.hemi,Ut.directionalShadowMap.value=H.state.directionalShadowMap,Ut.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ut.spotShadowMap.value=H.state.spotShadowMap,Ut.spotLightMatrix.value=H.state.spotLightMatrix,Ut.spotLightMap.value=H.state.spotLightMap,Ut.pointShadowMap.value=H.state.pointShadowMap,Ut.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=jt,Z.uniformsList=null,jt}function qt(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=Pr.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Pt(w,V){const tt=vt.get(w);tt.outputColorSpace=V.outputColorSpace,tt.batching=V.batching,tt.batchingColor=V.batchingColor,tt.instancing=V.instancing,tt.instancingColor=V.instancingColor,tt.instancingMorph=V.instancingMorph,tt.skinning=V.skinning,tt.morphTargets=V.morphTargets,tt.morphNormals=V.morphNormals,tt.morphColors=V.morphColors,tt.morphTargetsCount=V.morphTargetsCount,tt.numClippingPlanes=V.numClippingPlanes,tt.numIntersection=V.numClipIntersection,tt.vertexAlphas=V.vertexAlphas,tt.vertexTangents=V.vertexTangents,tt.toneMapping=V.toneMapping}function Tt(w,V,tt,Z,H){V.isScene!==!0&&(V=mt),R.resetTextureUnits();const st=V.fog,Rt=Z.isMeshStandardMaterial?V.environment:null,zt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ni,kt=(Z.isMeshStandardMaterial?Y:M).get(Z.envMap||Rt),te=Z.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,jt=!!tt.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ut=!!tt.morphAttributes.position,de=!!tt.morphAttributes.normal,ee=!!tt.morphAttributes.color;let Ee=Bn;Z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ee=_.toneMapping);const _e=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,se=_e!==void 0?_e.length:0,Yt=vt.get(Z),we=p.state.lights;if(C===!0&&(k===!0||w!==y)){const me=w===y&&Z.id===E;St.setState(Z,w,me)}let pe=!1;Z.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==we.state.version||Yt.outputColorSpace!==zt||H.isBatchedMesh&&Yt.batching===!1||!H.isBatchedMesh&&Yt.batching===!0||H.isBatchedMesh&&Yt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Yt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Yt.instancing===!1||!H.isInstancedMesh&&Yt.instancing===!0||H.isSkinnedMesh&&Yt.skinning===!1||!H.isSkinnedMesh&&Yt.skinning===!0||H.isInstancedMesh&&Yt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Yt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Yt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Yt.instancingMorph===!1&&H.morphTexture!==null||Yt.envMap!==kt||Z.fog===!0&&Yt.fog!==st||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==St.numPlanes||Yt.numIntersection!==St.numIntersection)||Yt.vertexAlphas!==te||Yt.vertexTangents!==jt||Yt.morphTargets!==Ut||Yt.morphNormals!==de||Yt.morphColors!==ee||Yt.toneMapping!==Ee||Yt.morphTargetsCount!==se)&&(pe=!0):(pe=!0,Yt.__version=Z.version);let Qt=Yt.currentProgram;pe===!0&&(Qt=Dt(Z,V,H));let Le=!1,ye=!1,je=!1;const Se=Qt.getUniforms(),Xe=Yt.uniforms;if(xt.useProgram(Qt.program)&&(Le=!0,ye=!0,je=!0),Z.id!==E&&(E=Z.id,ye=!0),Le||y!==w){xt.buffers.depth.getReversed()?(j.copy(w.projectionMatrix),vc(j),gc(j),Se.setValue(I,"projectionMatrix",j)):Se.setValue(I,"projectionMatrix",w.projectionMatrix),Se.setValue(I,"viewMatrix",w.matrixWorldInverse);const Ye=Se.map.cameraPosition;Ye!==void 0&&Ye.setValue(I,G.setFromMatrixPosition(w.matrixWorld)),Xt.logarithmicDepthBuffer&&Se.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Se.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,ye=!0,je=!0)}if(H.isSkinnedMesh){Se.setOptional(I,H,"bindMatrix"),Se.setOptional(I,H,"bindMatrixInverse");const me=H.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),Se.setValue(I,"boneTexture",me.boneTexture,R))}H.isBatchedMesh&&(Se.setOptional(I,H,"batchingTexture"),Se.setValue(I,"batchingTexture",H._matricesTexture,R),Se.setOptional(I,H,"batchingIdTexture"),Se.setValue(I,"batchingIdTexture",H._indirectTexture,R),Se.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&Se.setValue(I,"batchingColorTexture",H._colorsTexture,R));const qe=tt.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&$t.update(H,tt,Qt),(ye||Yt.receiveShadow!==H.receiveShadow)&&(Yt.receiveShadow=H.receiveShadow,Se.setValue(I,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Xe.envMap.value=kt,Xe.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&V.environment!==null&&(Xe.envMapIntensity.value=V.environmentIntensity),ye&&(Se.setValue(I,"toneMappingExposure",_.toneMappingExposure),Yt.needsLights&&It(Xe,je),st&&Z.fog===!0&&bt.refreshFogUniforms(Xe,st),bt.refreshMaterialUniforms(Xe,Z,L,O,p.state.transmissionRenderTarget[w.id]),Pr.upload(I,qt(Yt),Xe,R)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Pr.upload(I,qt(Yt),Xe,R),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Se.setValue(I,"center",H.center),Se.setValue(I,"modelViewMatrix",H.modelViewMatrix),Se.setValue(I,"normalMatrix",H.normalMatrix),Se.setValue(I,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const me=Z.uniformsGroups;for(let Ye=0,Or=me.length;Ye<Or;Ye++){const Hn=me[Ye];W.update(Hn,Qt),W.bind(Hn,Qt)}}return Qt}function It(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function Kt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,V,tt){vt.get(w.texture).__webglTexture=V,vt.get(w.depthTexture).__webglTexture=tt;const Z=vt.get(w);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=tt===void 0,Z.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,V){const tt=vt.get(w);tt.__webglFramebuffer=V,tt.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,tt=0){P=w,D=V,N=tt;let Z=!0,H=null,st=!1,Rt=!1;if(w){const kt=vt.get(w);if(kt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(I.FRAMEBUFFER,null),Z=!1;else if(kt.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(kt.__hasExternalTextures)R.rebindTextures(w,vt.get(w.texture).__webglTexture,vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ut=w.depthTexture;if(kt.__boundDepthTexture!==Ut){if(Ut!==null&&vt.has(Ut)&&(w.width!==Ut.image.width||w.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const te=w.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Rt=!0);const jt=vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(jt[V])?H=jt[V][tt]:H=jt[V],st=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?H=vt.get(w).__webglMultisampledFramebuffer:Array.isArray(jt)?H=jt[tt]:H=jt,b.copy(w.viewport),B.copy(w.scissor),U=w.scissorTest}else b.copy(F).multiplyScalar(L).floor(),B.copy(K).multiplyScalar(L).floor(),U=z;if(xt.bindFramebuffer(I.FRAMEBUFFER,H)&&Z&&xt.drawBuffers(w,H),xt.viewport(b),xt.scissor(B),xt.setScissorTest(U),st){const kt=vt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+V,kt.__webglTexture,tt)}else if(Rt){const kt=vt.get(w.texture),te=V||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,kt.__webglTexture,tt||0,te)}E=-1},this.readRenderTargetPixels=function(w,V,tt,Z,H,st,Rt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(zt=zt[Rt]),zt){xt.bindFramebuffer(I.FRAMEBUFFER,zt);try{const kt=w.texture,te=kt.format,jt=kt.type;if(!Xt.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-Z&&tt>=0&&tt<=w.height-H&&I.readPixels(V,tt,Z,H,ie.convert(te),ie.convert(jt),st)}finally{const kt=P!==null?vt.get(P).__webglFramebuffer:null;xt.bindFramebuffer(I.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(w,V,tt,Z,H,st,Rt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(zt=zt[Rt]),zt){const kt=w.texture,te=kt.format,jt=kt.type;if(!Xt.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=w.width-Z&&tt>=0&&tt<=w.height-H){xt.bindFramebuffer(I.FRAMEBUFFER,zt);const Ut=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ut),I.bufferData(I.PIXEL_PACK_BUFFER,st.byteLength,I.STREAM_READ),I.readPixels(V,tt,Z,H,ie.convert(te),ie.convert(jt),0);const de=P!==null?vt.get(P).__webglFramebuffer:null;xt.bindFramebuffer(I.FRAMEBUFFER,de);const ee=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await mc(I,ee,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ut),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,st),I.deleteBuffer(Ut),I.deleteSync(ee),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,V=null,tt=0){w.isTexture!==!0&&(Ei("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1]);const Z=Math.pow(2,-tt),H=Math.floor(w.image.width*Z),st=Math.floor(w.image.height*Z),Rt=V!==null?V.x:0,zt=V!==null?V.y:0;R.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,tt,0,0,Rt,zt,H,st),xt.unbindTexture()};const ce=I.createFramebuffer(),yt=I.createFramebuffer();this.copyTextureToTexture=function(w,V,tt=null,Z=null,H=0,st=null){w.isTexture!==!0&&(Ei("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,w=arguments[1],V=arguments[2],st=arguments[3]||0,tt=null),st===null&&(H!==0?(Ei("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=H,H=0):st=0);let Rt,zt,kt,te,jt,Ut,de,ee,Ee;const _e=w.isCompressedTexture?w.mipmaps[st]:w.image;if(tt!==null)Rt=tt.max.x-tt.min.x,zt=tt.max.y-tt.min.y,kt=tt.isBox3?tt.max.z-tt.min.z:1,te=tt.min.x,jt=tt.min.y,Ut=tt.isBox3?tt.min.z:0;else{const qe=Math.pow(2,-H);Rt=Math.floor(_e.width*qe),zt=Math.floor(_e.height*qe),w.isDataArrayTexture?kt=_e.depth:w.isData3DTexture?kt=Math.floor(_e.depth*qe):kt=1,te=0,jt=0,Ut=0}Z!==null?(de=Z.x,ee=Z.y,Ee=Z.z):(de=0,ee=0,Ee=0);const se=ie.convert(V.format),Yt=ie.convert(V.type);let we;V.isData3DTexture?(R.setTexture3D(V,0),we=I.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(R.setTexture2DArray(V,0),we=I.TEXTURE_2D_ARRAY):(R.setTexture2D(V,0),we=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);const pe=I.getParameter(I.UNPACK_ROW_LENGTH),Qt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Le=I.getParameter(I.UNPACK_SKIP_PIXELS),ye=I.getParameter(I.UNPACK_SKIP_ROWS),je=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_e.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,te),I.pixelStorei(I.UNPACK_SKIP_ROWS,jt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ut);const Se=w.isDataArrayTexture||w.isData3DTexture,Xe=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){const qe=vt.get(w),me=vt.get(V),Ye=vt.get(qe.__renderTarget),Or=vt.get(me.__renderTarget);xt.bindFramebuffer(I.READ_FRAMEBUFFER,Ye.__webglFramebuffer),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let Hn=0;Hn<kt;Hn++)Se&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vt.get(w).__webglTexture,H,Ut+Hn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vt.get(V).__webglTexture,st,Ee+Hn)),I.blitFramebuffer(te,jt,Rt,zt,de,ee,Rt,zt,I.DEPTH_BUFFER_BIT,I.NEAREST);xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||vt.has(w)){const qe=vt.get(w),me=vt.get(V);xt.bindFramebuffer(I.READ_FRAMEBUFFER,ce),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,yt);for(let Ye=0;Ye<kt;Ye++)Se?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,qe.__webglTexture,H,Ut+Ye):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,qe.__webglTexture,H),Xe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,me.__webglTexture,st,Ee+Ye):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,me.__webglTexture,st),H!==0?I.blitFramebuffer(te,jt,Rt,zt,de,ee,Rt,zt,I.COLOR_BUFFER_BIT,I.NEAREST):Xe?I.copyTexSubImage3D(we,st,de,ee,Ee+Ye,te,jt,Rt,zt):I.copyTexSubImage2D(we,st,de,ee,te,jt,Rt,zt);xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Xe?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(we,st,de,ee,Ee,Rt,zt,kt,se,Yt,_e.data):V.isCompressedArrayTexture?I.compressedTexSubImage3D(we,st,de,ee,Ee,Rt,zt,kt,se,_e.data):I.texSubImage3D(we,st,de,ee,Ee,Rt,zt,kt,se,Yt,_e):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,st,de,ee,Rt,zt,se,Yt,_e.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,st,de,ee,_e.width,_e.height,se,_e.data):I.texSubImage2D(I.TEXTURE_2D,st,de,ee,Rt,zt,se,Yt,_e);I.pixelStorei(I.UNPACK_ROW_LENGTH,pe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Le),I.pixelStorei(I.UNPACK_SKIP_ROWS,ye),I.pixelStorei(I.UNPACK_SKIP_IMAGES,je),st===0&&V.generateMipmaps&&I.generateMipmap(we),xt.unbindTexture()},this.copyTextureToTexture3D=function(w,V,tt=null,Z=null,H=0){return w.isTexture!==!0&&(Ei("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,Z=arguments[1]||null,w=arguments[2],V=arguments[3],H=arguments[4]||0),Ei('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,V,tt,Z,H)},this.initRenderTarget=function(w){vt.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),xt.unbindTexture()},this.resetState=function(){D=0,N=0,P=null,xt.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}}class cl extends Ie{constructor(t={}){super(),this.config={position:{x:0,y:0,z:0},springPhysics:{strength:.3,damping:.75},dragBehavior:{returnSpeed:.1,dampingFactor:.95,enabled:!1},selectionBehavior:{enabled:!1,clickThreshold:200,moveThreshold:5},hoverBehavior:{enabled:!1},...t},this._state={isDragging:!1,isHovering:!1,isSelected:!1,dragOffset:new nt,dragStartTime:0,dragStartPosition:new le,velocity:new nt,onSelect:null,onDeselect:null,onClick:null,onDragStart:null,onDragEnd:null},this.interactiveMesh=null,this.position.set(this.config.position.x,this.config.position.y,this.config.position.z),this.returnPosition=new nt(this.config.position.x,this.config.position.y,this.config.position.z)}_initializeInteraction(){if(!this.interactiveMesh){console.warn("Interactive object has no interactiveMesh");return}this.interactiveMesh.userData.parent=this,this.interactiveMesh.userData.type="InteractiveObject",this.interactiveMesh.layers.enable(1)}setCallback(t,e){if(typeof e!="function"){console.warn(`Invalid callback: ${t}`);return}this._state[t]=e}onPointerEnter(t){this.config.hoverBehavior.enabled&&(this._state.isDragging||(this._state.isHovering=!0))}onPointerLeave(t){this.config.hoverBehavior.enabled&&(this._state.isDragging||(this._state.isHovering=!1))}onPointerMove(t){}onDragStart(t){if(!this.config.dragBehavior.enabled)return;this._state.isDragging=!0,this._state.velocity.set(0,0,0);const e=new Mn(new nt(0,0,1),0),n=new nt;t.ray.intersectPlane(e,n),this._state.dragOffset.copy(this.position).sub(n),this._state.dragStartTime=Date.now(),this._state.dragStartPosition=new le(t.clientX,t.clientY),this._state.onDragStart&&this._state.onDragStart(this,t)}onDragEnd(t){if(this.config.dragBehavior.enabled){if(this._state.isDragging=!1,this.config.selectionBehavior.enabled){const n=Date.now()-this._state.dragStartTime,r=new le(t.clientX,t.clientY).distanceTo(this._state.dragStartPosition);n<this.config.selectionBehavior.clickThreshold&&r<this.config.selectionBehavior.moveThreshold&&this._onClick(t)}this._state.onDragEnd&&this._state.onDragEnd(this,t)}}_onClick(t){this.config.selectionBehavior.enabled&&this.toggleSelected(),this._state.onClick&&this._state.onClick(this,t)}toggleSelected(){this.config.selectionBehavior.enabled&&(this._state.isSelected=!this._state.isSelected,this._state.isSelected&&this._state.onSelect?this._state.onSelect(this):!this._state.isSelected&&this._state.onDeselect&&this._state.onDeselect(this))}update(t){this.config.dragBehavior.enabled&&!this._state.isDragging&&(this.position.add(this._state.velocity),this._state.velocity.multiplyScalar(this.config.dragBehavior.dampingFactor),this.position.x+=(this.returnPosition.x-this.position.x)*this.config.dragBehavior.returnSpeed,this.position.y+=(this.returnPosition.y-this.position.y)*this.config.dragBehavior.returnSpeed)}dispose(){}}class yn extends cl{constructor({texture:t,width:e=2,height:n=3,position:s={x:0,y:0,z:0},idlePhase:r=Math.random(),springPhysics:a={strength:.3,damping:.75,wiggleStrength:.5,wiggleDamping:.6,zStrength:.5,zDamping:.5},dragBehavior:o={returnSpeed:.1,dampingFactor:.95,enabled:!0},selectionBehavior:l={enabled:!0,clickThreshold:200,moveThreshold:5},hoverBehavior:u={enabled:!0}}={}){super({position:s,springPhysics:a,dragBehavior:o,selectionBehavior:l,hoverBehavior:u}),this._cardState={scale:1,targetScale:1,scaleVelocity:0,initialHoverTime:0,isInitialHover:!1,wiggleRotation:0,wiggleVelocity:0,glowIntensity:0,targetGlowIntensity:0,glowVelocity:0,targetZ:0,zVelocity:0,targetRotation:new We,pivotOffset:.7,idlePhase:r*Math.PI*2},this._createCardMesh(t,e,n),this._initializeInteraction()}_createCardMesh(t,e,n){const s=new Cn(e,n),r=new wi({map:t,transparent:!0,side:en,shininess:100,specular:4473924,emissive:0});this.cardMesh=new Ne(s,r),this.cardMesh.castShadow=!0,this.cardMesh.receiveShadow=!0,this.cardMesh.position.y=-this._cardState.pivotOffset,this.interactiveMesh=this.cardMesh,this.add(this.cardMesh),this._createGlowEffect(e,n)}_createGlowEffect(t,e){const n=new Cn(t*1.1,e*1.1),s=new Ur({color:65535,transparent:!0,opacity:0,side:en,blending:vs});this.glowMesh=new Ne(n,s),this.glowMesh.position.z=-.05,this.glowMesh.position.y=-this._cardState.pivotOffset,this.add(this.glowMesh)}onPointerEnter(t){super.onPointerEnter(t),this._state.isHovering&&!this._state.isDragging&&(this._cardState.isInitialHover=!0,this._cardState.initialHoverTime=Date.now(),this._cardState.targetScale=1.1,this._cardState.scaleVelocity=.05,this._cardState.wiggleRotation=0,this._cardState.wiggleVelocity=.15),this._state.isHovering&&!this._state.isDragging&&this.sceneManager&&this.sceneManager.animateText("Card Hovered!")}onPointerLeave(t){super.onPointerLeave(t),!this._state.isHovering&&!this._state.isDragging&&(this._cardState.targetScale=this._state.isSelected?1.1:1,this._cardState.isInitialHover=!1,this._cardState.wiggleRotation=0,console.log("mouseleft"),this._cardState.isInitialHover=!0,this._cardState.wiggleVelocity=0)}onPointerMove(t){if(super.onPointerMove(t),this._state.isHovering&&!this._state.isDragging){const e=this.position.clone().project(t.camera),n=new le(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight)*2+1),s=(n.y-e.y)*.5,r=(n.x-e.x)*.5;this._cardState.targetRotation.x=-s,this._cardState.targetRotation.y=r}}onDragStart(t){super.onDragStart(t)}onDragEnd(t){super.onDragEnd(t),this.rotation.z=0,!this._state.isHovering&&!this._state.isSelected&&(this._cardState.targetScale=1,this._cardState.isInitialHover=!1),console.log(`Card drag ended. Current selection state: ${this._state.isSelected}`)}toggleSelected(){super.toggleSelected(),console.log(`Card toggled. Selected: ${this._state.isSelected}`),this._state.isSelected?(this._cardState.targetScale=1.1,this._cardState.targetGlowIntensity=.7,this._cardState.targetZ=.5,console.log(`Card selected - targetZ: ${this._cardState.targetZ}`)):(this._cardState.targetScale=this._state.isHovering?1.1:1,this._cardState.targetGlowIntensity=0,this._cardState.targetZ=0,console.log(`Card deselected - targetZ: ${this._cardState.targetZ}`))}update(t=1/60){super.update(t),this._updateScale(),this._updateWiggle(),this._updateRotation(),this._updateGlow(),this._updateElevation()}_updateScale(){const e=(this._cardState.targetScale-this._cardState.scale)*this.config.springPhysics.strength;this._cardState.scaleVelocity+=e,this._cardState.scaleVelocity*=this.config.springPhysics.damping,this._cardState.scale+=this._cardState.scaleVelocity,this.cardMesh.scale.set(this._cardState.scale,this._cardState.scale,1),this.glowMesh.scale.set(this._cardState.scale,this._cardState.scale,1)}_updateWiggle(){if(this._cardState.isInitialHover){const t=-this._cardState.wiggleRotation*this.config.springPhysics.wiggleStrength;this._cardState.wiggleVelocity+=t,this._cardState.wiggleVelocity*=this.config.springPhysics.wiggleDamping,this._cardState.wiggleRotation+=this._cardState.wiggleVelocity,this.cardMesh.rotation.z=this._cardState.wiggleRotation,this.glowMesh.rotation.z=this._cardState.wiggleRotation,Math.abs(this._cardState.wiggleVelocity)<.001&&Math.abs(this._cardState.wiggleRotation)<.001&&(this._cardState.isInitialHover=!1,this._cardState.wiggleRotation=0)}}_updateRotation(){if(!this._state.isDragging&&!this._state.isHovering&&!this._state.isSelected){const t=Date.now()*.001+this._cardState.idlePhase;this._cardState.targetRotation.x=Math.sin(t)*.1,this._cardState.targetRotation.y=Math.cos(t)*.1}this.cardMesh.rotation.x+=(this._cardState.targetRotation.x-this.cardMesh.rotation.x)*.1,this.cardMesh.rotation.y+=(this._cardState.targetRotation.y-this.cardMesh.rotation.y)*.1,this.glowMesh.rotation.x=this.cardMesh.rotation.x,this.glowMesh.rotation.y=this.cardMesh.rotation.y}_updateGlow(){const e=(this._cardState.targetGlowIntensity-this._cardState.glowIntensity)*this.config.springPhysics.zStrength;this._cardState.glowVelocity+=e,this._cardState.glowVelocity*=this.config.springPhysics.zDamping,this._cardState.glowIntensity+=this._cardState.glowVelocity,this.glowMesh.material.opacity=this._cardState.glowIntensity}_updateElevation(){const e=(this._cardState.targetZ-this.position.z)*this.config.springPhysics.zStrength;console.log("zstregnth: ",this.config.springPhysics.zStrength),console.log("zdamping ",this.config.springPhysics.zDamping),this._cardState.zVelocity+=e,this._cardState.zVelocity*=this.config.springPhysics.zDamping,this.position.z+=this._cardState.zVelocity}dispose(){super.dispose(),this.cardMesh.geometry.dispose(),this.cardMesh.material.dispose(),this.cardMesh.material.map&&this.cardMesh.material.map.dispose(),this.glowMesh.geometry.dispose(),this.glowMesh.material.dispose()}}class Mi extends cl{constructor({width:t=1.2,height:e=.5,depth:n=.1,position:s={x:0,y:0,z:0},text:r="Confirm",fontColor:a="#ffffff",activeColor:o=4360181,inactiveColor:l=7895160,hoverColor:u=5413375,pushDepth:h=.03}={}){super({position:s,hoverBehavior:{enabled:!0},selectionBehavior:{enabled:!1},dragBehavior:{enabled:!1}}),this._buttonState={isActive:!1,isPushed:!1,baseZ:s.z||0,currentZ:s.z||0},this._props={width:t,height:e,depth:n,text:r,fontColor:a,activeColor:o,inactiveColor:l,hoverColor:u,pushDepth:h},this._createButtonMesh(),this._initializeInteraction(),this._debug=!1}_createButtonMesh(){const t=new pn(this._props.width,this._props.height,this._props.depth),e=new wi({color:this._props.inactiveColor,shininess:30,specular:2236962});this.buttonMesh=new Ne(t,e),this.buttonMesh.castShadow=!0,this.buttonMesh.receiveShadow=!0,this.interactiveMesh=this.buttonMesh,this.add(this.buttonMesh),this._createTextLabel()}_createTextLabel(){const t=document.createElement("canvas"),e=t.getContext("2d");t.width=512,t.height=256,e.clearRect(0,0,t.width,t.height),e.font="Bold 60px Arial",e.textAlign="center",e.textBaseline="middle",e.fillStyle=this._props.fontColor,e.fillText(this._props.text,t.width/2,t.height/2);const n=new Fr(t);n.needsUpdate=!0;const s=new Ur({map:n,transparent:!0,side:en}),r=new Cn(this._props.width*.9,this._props.height*.7);this.textMesh=new Ne(r,s),this.textMesh.position.z=this._props.depth/2+.001,this.add(this.textMesh)}setActive(t){this._buttonState.isActive!==t&&(this._debug&&console.log(`Button '${this._props.text}' active state changed: ${t}`),this._buttonState.isActive=t,this.buttonMesh.material.color.setHex(t?this._props.activeColor:this._props.inactiveColor),this.config.hoverBehavior.enabled=t)}isActive(){return this._buttonState.isActive}onPointerEnter(t){this._buttonState.isActive&&(super.onPointerEnter(t),this.buttonMesh.material.color.setHex(this._props.hoverColor))}onPointerLeave(t){super.onPointerLeave(t),this._buttonState.isActive&&this.buttonMesh.material.color.setHex(this._props.activeColor),this._buttonState.isPushed&&this._releasePush()}onDragStart(t){this._buttonState.isActive&&this._pushButton()}onDragEnd(t){if(!this._buttonState.isActive)return;this._releasePush();const n=Date.now()-this._state.dragStartTime,s=new le(t.clientX,t.clientY),r=this._state.dragStartPosition?s.distanceTo(this._state.dragStartPosition):0;n<200&&r<5&&this._state.onClick&&(this._debug&&console.log(`Button '${this._props.text}' clicked`),this._state.onClick(this))}_pushButton(){this._buttonState.isPushed||(this._buttonState.isPushed=!0,this._buttonState.currentZ=this._buttonState.baseZ-this._props.pushDepth,this.buttonMesh.position.z=-this._props.pushDepth,this.textMesh.position.z=this._props.depth/2+.001-this._props.pushDepth)}_releasePush(){this._buttonState.isPushed&&(this._buttonState.isPushed=!1,this._buttonState.currentZ=this._buttonState.baseZ,this.buttonMesh.position.z=0,this.textMesh.position.z=this._props.depth/2+.001)}update(t=1/60){super.update(t)}dispose(){super.dispose(),this.buttonMesh.geometry.dispose(),this.buttonMesh.material.dispose(),this.textMesh.geometry.dispose(),this.textMesh.material.dispose(),this.textMesh.material.map.dispose()}}function wr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ms={exports:{}},To;function Wp(){return To||(To=1,function(i,t){(function(e){i.exports=e()})(function(){return function e(n,s,r){function a(u,h){if(!s[u]){if(!n[u]){var c=typeof wr=="function"&&wr;if(!h&&c)return c(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+u+"'")}var d=s[u]={exports:{}};n[u][0].call(d.exports,function(f){var v=n[u][1][f];return a(v||f)},d,d.exports,e,n,s,r)}return s[u].exports}for(var o=typeof wr=="function"&&wr,l=0;l<r.length;l++)a(r[l]);return a}({1:[function(e,n,s){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,s){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,s){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=a;function a(u){u=u||{},this.lowerBound=new r,u.lowerBound&&this.lowerBound.copy(u.lowerBound),this.upperBound=new r,u.upperBound&&this.upperBound.copy(u.upperBound)}var o=new r;a.prototype.setFromPoints=function(u,h,c,d){var f=this.lowerBound,v=this.upperBound,g=c;f.copy(u[0]),g&&g.vmult(f,f),v.copy(f);for(var m=1;m<u.length;m++){var p=u[m];g&&(g.vmult(p,o),p=o),p.x>v.x&&(v.x=p.x),p.x<f.x&&(f.x=p.x),p.y>v.y&&(v.y=p.y),p.y<f.y&&(f.y=p.y),p.z>v.z&&(v.z=p.z),p.z<f.z&&(f.z=p.z)}return h&&(h.vadd(f,f),h.vadd(v,v)),d&&(f.x-=d,f.y-=d,f.z-=d,v.x+=d,v.y+=d,v.z+=d),this},a.prototype.copy=function(u){return this.lowerBound.copy(u.lowerBound),this.upperBound.copy(u.upperBound),this},a.prototype.clone=function(){return new a().copy(this)},a.prototype.extend=function(u){var h=u.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var c=u.upperBound.x;this.upperBound.x<c&&(this.upperBound.x=c);var h=u.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var c=u.upperBound.y;this.upperBound.y<c&&(this.upperBound.y=c);var h=u.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var c=u.upperBound.z;this.upperBound.z<c&&(this.upperBound.z=c)},a.prototype.overlaps=function(u){var h=this.lowerBound,c=this.upperBound,d=u.lowerBound,f=u.upperBound;return(d.x<=c.x&&c.x<=f.x||h.x<=f.x&&f.x<=c.x)&&(d.y<=c.y&&c.y<=f.y||h.y<=f.y&&f.y<=c.y)&&(d.z<=c.z&&c.z<=f.z||h.z<=f.z&&f.z<=c.z)},a.prototype.contains=function(u){var h=this.lowerBound,c=this.upperBound,d=u.lowerBound,f=u.upperBound;return h.x<=d.x&&c.x>=f.x&&h.y<=d.y&&c.y>=f.y&&h.z<=d.z&&c.z>=f.z},a.prototype.getCorners=function(u,h,c,d,f,v,g,m){var p=this.lowerBound,x=this.upperBound;u.copy(p),h.set(x.x,p.y,p.z),c.set(x.x,x.y,p.z),d.set(p.x,x.y,x.z),f.set(x.x,p.y,p.z),v.set(p.x,x.y,p.z),g.set(p.x,p.y,x.z),m.copy(x)};var l=[new r,new r,new r,new r,new r,new r,new r,new r];a.prototype.toLocalFrame=function(u,h){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],m=c[4],p=c[5],x=c[6],S=c[7];this.getCorners(d,f,v,g,m,p,x,S);for(var _=0;_!==8;_++){var A=c[_];u.pointToLocal(A,A)}return h.setFromPoints(c)},a.prototype.toWorldFrame=function(u,h){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],m=c[4],p=c[5],x=c[6],S=c[7];this.getCorners(d,f,v,g,m,p,x,S);for(var _=0;_!==8;_++){var A=c[_];u.pointToWorld(A,A)}return h.setFromPoints(c)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,s){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(a,o){if(a=a.index,o=o.index,o>a){var l=o;o=a,a=l}return this.matrix[(a*(a+1)>>1)+o-1]},r.prototype.set=function(a,o,l){if(a=a.index,o=o.index,o>a){var u=o;o=a,a=u}this.matrix[(a*(a+1)>>1)+o-1]=l?1:0},r.prototype.reset=function(){for(var a=0,o=this.matrix.length;a!==o;a++)this.matrix[a]=0},r.prototype.setNumObjects=function(a){this.matrix.length=a*(a-1)>>1}},{}],5:[function(e,n,s){var r=e("../objects/Body"),a=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var u=r.STATIC|r.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&u||g.sleepState===r.SLEEPING)&&(m.type&u||m.sleepState===r.SLEEPING))},l.prototype.intersectionTest=function(g,m,p,x){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,p,x):this.doBoundingSphereBroadphase(g,m,p,x)};var h=new a;new a,new o,new a,l.prototype.doBoundingSphereBroadphase=function(g,m,p,x){var S=h;m.position.vsub(g.position,S);var _=Math.pow(g.boundingRadius+m.boundingRadius,2),A=S.norm2();A<_&&(p.push(g),x.push(m))},l.prototype.doBoundingBoxBroadphase=function(g,m,p,x){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(p.push(g),x.push(m))};var c={keys:[]},d=[],f=[];l.prototype.makePairsUnique=function(g,m){for(var p=c,x=d,S=f,_=g.length,A=0;A!==_;A++)x[A]=g[A],S[A]=m[A];g.length=0,m.length=0;for(var A=0;A!==_;A++){var D=x[A].id,N=S[A].id,P=D<N?D+","+N:N+","+D;p[P]=A,p.keys.push(P)}for(var A=0;A!==p.keys.length;A++){var P=p.keys.pop(),E=p[P];g.push(x[E]),m.push(S[E]),delete p[P]}},l.prototype.setWorld=function(g){};var v=new a;l.boundingSphereCheck=function(g,m){var p=v;return g.position.vsub(m.position,p),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},l.prototype.aabbQuery=function(g,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,s){n.exports=l;var r=e("./Broadphase"),a=e("../math/Vec3"),o=e("../shapes/Shape");function l(h,c,d,f,v){r.apply(this),this.nx=d||10,this.ny=f||10,this.nz=v||10,this.aabbMin=h||new a(100,100,100),this.aabbMax=c||new a(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}l.prototype=new r,l.prototype.constructor=l;var u=new a;new a,l.prototype.collisionPairs=function(h,c,d){var f=h.numObjects(),v=h.bodies,j=this.aabbMax,k=this.aabbMin,g=this.nx,m=this.ny,p=this.nz,x=m*p,S=p,_=1,A=j.x,D=j.y,N=j.z,P=k.x,E=k.y,y=k.z,b=g/(A-P),B=m/(D-E),U=p/(N-y),X=(A-P)/g,q=(D-E)/m,J=(N-y)/p,O=Math.sqrt(X*X+q*q+J*J)*.5,L=o.types,Q=L.SPHERE,$=L.PLANE;L.BOX,L.COMPOUND,L.CONVEXPOLYHEDRON;for(var F=this.bins,K=this.binLengths,z=this.bins.length,T=0;T!==z;T++)K[T]=0;var C=Math.ceil,k=Math.min,j=Math.max;function et(he,St,Gt,Zt,$t,Wt,ue){var ie=(he-P)*b|0,ge=(St-E)*B|0,W=(Gt-y)*U|0,Lt=C((Zt-P)*b),lt=C(($t-E)*B),pt=C((Wt-y)*U);ie<0?ie=0:ie>=g&&(ie=g-1),ge<0?ge=0:ge>=m&&(ge=m-1),W<0?W=0:W>=p&&(W=p-1),Lt<0?Lt=0:Lt>=g&&(Lt=g-1),lt<0?lt=0:lt>=m&&(lt=m-1),pt<0?pt=0:pt>=p&&(pt=p-1),ie*=x,ge*=S,W*=_,Lt*=x,lt*=S,pt*=_;for(var Vt=ie;Vt<=Lt;Vt+=x)for(var Ot=ge;Ot<=lt;Ot+=S)for(var re=W;re<=pt;re+=_){var be=Vt+Ot+re;F[be][K[be]++]=ue}}for(var T=0;T!==f;T++){var G=v[T],rt=G.shape;switch(rt.type){case Q:var mt=G.position.x,Mt=G.position.y,Et=G.position.z,I=rt.radius;et(mt-I,Mt-I,Et-I,mt+I,Mt+I,Et+I,G);break;case $:rt.worldNormalNeedsUpdate&&rt.computeWorldNormal(G.quaternion);var ft=rt.worldNormal,ut=P+X*.5-G.position.x,Xt=E+q*.5-G.position.y,xt=y+J*.5-G.position.z,ne=u;ne.set(ut,Xt,xt);for(var vt=0,R=0;vt!==g;vt++,R+=x,ne.y=Xt,ne.x+=X)for(var M=0,Y=0;M!==m;M++,Y+=S,ne.z=xt,ne.y+=q)for(var ct=0,ht=0;ct!==p;ct++,ht+=_,ne.z+=J)if(ne.dot(ft)<O){var ot=R+Y+ht;F[ot][K[ot]++]=G}break;default:G.aabbNeedsUpdate&&G.computeAABB(),et(G.aabb.lowerBound.x,G.aabb.lowerBound.y,G.aabb.lowerBound.z,G.aabb.upperBound.x,G.aabb.upperBound.y,G.aabb.upperBound.z,G);break}}for(var T=0;T!==z;T++){var wt=K[T];if(wt>1)for(var bt=F[T],vt=0;vt!==wt;vt++)for(var G=bt[vt],M=0;M!==vt;M++){var Ft=bt[M];this.needBroadphaseCollision(G,Ft)&&this.intersectionTest(G,Ft,c,d)}}this.makePairsUnique(c,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,s){n.exports=o;var r=e("./Broadphase"),a=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(l,u,h){var c=l.bodies,d=c.length,f,v,g,m;for(f=0;f!==d;f++)for(v=0;v!==f;v++)g=c[f],m=c[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,u,h)},new a,o.prototype.aabbQuery=function(l,u,h){h=h||[];for(var c=0;c<l.bodies.length;c++){var d=l.bodies[c];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(u)&&h.push(d)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,s){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(a,o){if(a=a.id,o=o.id,o>a){var l=o;o=a,a=l}return a+"-"+o in this.matrix},r.prototype.set=function(a,o,l){if(a=a.id,o=o.id,o>a){var u=o;o=a,a=u}l?this.matrix[a+"-"+o]=!0:delete this.matrix[a+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(a){}},{}],9:[function(e,n,s){n.exports=c;var r=e("../math/Vec3"),a=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var l=e("../collision/RaycastResult"),u=e("../shapes/Shape"),h=e("../collision/AABB");function c(z,T){this.from=z?z.clone():new r,this.to=T?T.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=c.ANY,this.result=new l,this.hasHit=!1,this.callback=function(C){}}c.prototype.constructor=c,c.CLOSEST=1,c.ANY=2,c.ALL=4;var d=new h,f=[];c.prototype.intersectWorld=function(z,T){return this.mode=T.mode||c.ANY,this.result=T.result||new l,this.skipBackfaces=!!T.skipBackfaces,this.collisionFilterMask=typeof T.collisionFilterMask<"u"?T.collisionFilterMask:-1,this.collisionFilterGroup=typeof T.collisionFilterGroup<"u"?T.collisionFilterGroup:-1,T.from&&this.from.copy(T.from),T.to&&this.to.copy(T.to),this.callback=T.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,z.broadphase.aabbQuery(z,d,f),this.intersectBodies(f),this.hasHit};var v=new r,g=new r;c.pointInTriangle=m;function m(z,T,C,k){k.vsub(T,$),C.vsub(T,v),z.vsub(T,g);var j=$.dot($),et=$.dot(v),G=$.dot(g),rt=v.dot(v),mt=v.dot(g),Mt,Et;return(Mt=rt*G-et*mt)>=0&&(Et=j*mt-et*G)>=0&&Mt+Et<j*rt-et*et}var p=new r,x=new a;c.prototype.intersectBody=function(z,T){T&&(this.result=T,this._updateDirection());var C=this.checkCollisionResponse;if(!(C&&!z.collisionResponse)&&!(!(this.collisionFilterGroup&z.collisionFilterMask)||!(z.collisionFilterGroup&this.collisionFilterMask)))for(var k=p,j=x,et=0,G=z.shapes.length;et<G;et++){var rt=z.shapes[et];if(!(C&&!rt.collisionResponse)&&(z.quaternion.mult(z.shapeOrientations[et],j),z.quaternion.vmult(z.shapeOffsets[et],k),k.vadd(z.position,k),this.intersectShape(rt,j,k,z),this.result._shouldStop))break}},c.prototype.intersectBodies=function(z,T){T&&(this.result=T,this._updateDirection());for(var C=0,k=z.length;!this.result._shouldStop&&C<k;C++)this.intersectBody(z[C])},c.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},c.prototype.intersectShape=function(z,T,C,k){var j=this.from,et=K(j,this._direction,C);if(!(et>z.boundingSphereRadius)){var G=this[z.type];G&&G.call(this,z,T,C,k)}},new r,new r;var S=new r,_=new r,A=new r,D=new r;new r,new l,c.prototype.intersectBox=function(z,T,C,k){return this.intersectConvex(z.convexPolyhedronRepresentation,T,C,k)},c.prototype[u.types.BOX]=c.prototype.intersectBox,c.prototype.intersectPlane=function(z,T,C,k){var j=this.from,et=this.to,G=this._direction,rt=new r(0,0,1);T.vmult(rt,rt);var mt=new r;j.vsub(C,mt);var Mt=mt.dot(rt);et.vsub(C,mt);var Et=mt.dot(rt);if(!(Mt*Et>0)&&!(j.distanceTo(et)<Mt)){var I=rt.dot(G);if(!(Math.abs(I)<this.precision)){var ft=new r,ut=new r,Xt=new r;j.vsub(C,ft);var xt=-rt.dot(ft)/I;G.scale(xt,ut),j.vadd(ut,Xt),this.reportIntersection(rt,Xt,z,k,-1)}}},c.prototype[u.types.PLANE]=c.prototype.intersectPlane,c.prototype.getAABB=function(z){var T=this.to,C=this.from;z.lowerBound.x=Math.min(T.x,C.x),z.lowerBound.y=Math.min(T.y,C.y),z.lowerBound.z=Math.min(T.z,C.z),z.upperBound.x=Math.max(T.x,C.x),z.upperBound.y=Math.max(T.y,C.y),z.upperBound.z=Math.max(T.z,C.z)};var N={faceList:[0]};c.prototype.intersectHeightfield=function(z,T,C,k){z.data,z.elementSize;var j=new r,et=new c(this.from,this.to);o.pointToLocalFrame(C,T,et.from,et.from),o.pointToLocalFrame(C,T,et.to,et.to);var G=[],rt=null,mt=null,Mt=null,Et=null,I=z.getIndexOfPosition(et.from.x,et.from.y,G,!1);if(I&&(rt=G[0],mt=G[1],Mt=G[0],Et=G[1]),I=z.getIndexOfPosition(et.to.x,et.to.y,G,!1),I&&((rt===null||G[0]<rt)&&(rt=G[0]),(Mt===null||G[0]>Mt)&&(Mt=G[0]),(mt===null||G[1]<mt)&&(mt=G[1]),(Et===null||G[1]>Et)&&(Et=G[1])),rt!==null){var ft=[];z.getRectMinMax(rt,mt,Mt,Et,ft),ft[0],ft[1];for(var ut=rt;ut<=Mt;ut++)for(var Xt=mt;Xt<=Et;Xt++){if(this.result._shouldStop||(z.getConvexTrianglePillar(ut,Xt,!1),o.pointToWorldFrame(C,T,z.pillarOffset,j),this.intersectConvex(z.pillarConvex,T,j,k,N),this.result._shouldStop))return;z.getConvexTrianglePillar(ut,Xt,!0),o.pointToWorldFrame(C,T,z.pillarOffset,j),this.intersectConvex(z.pillarConvex,T,j,k,N)}}},c.prototype[u.types.HEIGHTFIELD]=c.prototype.intersectHeightfield;var P=new r,E=new r;c.prototype.intersectSphere=function(z,T,C,k){var j=this.from,et=this.to,G=z.radius,rt=Math.pow(et.x-j.x,2)+Math.pow(et.y-j.y,2)+Math.pow(et.z-j.z,2),mt=2*((et.x-j.x)*(j.x-C.x)+(et.y-j.y)*(j.y-C.y)+(et.z-j.z)*(j.z-C.z)),Mt=Math.pow(j.x-C.x,2)+Math.pow(j.y-C.y,2)+Math.pow(j.z-C.z,2)-Math.pow(G,2),Et=Math.pow(mt,2)-4*rt*Mt,I=P,ft=E;if(!(Et<0))if(Et===0)j.lerp(et,Et,I),I.vsub(C,ft),ft.normalize(),this.reportIntersection(ft,I,z,k,-1);else{var ut=(-mt-Math.sqrt(Et))/(2*rt),Xt=(-mt+Math.sqrt(Et))/(2*rt);if(ut>=0&&ut<=1&&(j.lerp(et,ut,I),I.vsub(C,ft),ft.normalize(),this.reportIntersection(ft,I,z,k,-1)),this.result._shouldStop)return;Xt>=0&&Xt<=1&&(j.lerp(et,Xt,I),I.vsub(C,ft),ft.normalize(),this.reportIntersection(ft,I,z,k,-1))}},c.prototype[u.types.SPHERE]=c.prototype.intersectSphere;var y=new r;new r,new r;var b=new r;c.prototype.intersectConvex=function(T,C,k,j,et){for(var G=y,rt=b,mt=et&&et.faceList||null,Mt=T.faces,Et=T.vertices,I=T.faceNormals,ft=this._direction,ut=this.from,Xt=this.to,xt=ut.distanceTo(Xt),ne=mt?mt.length:Mt.length,vt=this.result,R=0;!vt._shouldStop&&R<ne;R++){var M=mt?mt[R]:R,Y=Mt[M],ct=I[M],ht=C,ot=k;rt.copy(Et[Y[0]]),ht.vmult(rt,rt),rt.vadd(ot,rt),rt.vsub(ut,rt),ht.vmult(ct,G);var wt=ft.dot(G);if(!(Math.abs(wt)<this.precision)){var bt=G.dot(rt)/wt;if(!(bt<0)){ft.mult(bt,S),S.vadd(ut,S),_.copy(Et[Y[0]]),ht.vmult(_,_),ot.vadd(_,_);for(var Ft=1;!vt._shouldStop&&Ft<Y.length-1;Ft++){A.copy(Et[Y[Ft]]),D.copy(Et[Y[Ft+1]]),ht.vmult(A,A),ht.vmult(D,D),ot.vadd(A,A),ot.vadd(D,D);var he=S.distanceTo(ut);!(m(S,_,A,D)||m(S,A,_,D))||he>xt||this.reportIntersection(G,S,T,j,M)}}}}},c.prototype[u.types.CONVEXPOLYHEDRON]=c.prototype.intersectConvex;var B=new r,U=new r,X=new r,q=new r,J=new r,O=new r;new h;var L=[],Q=new o;c.prototype.intersectTrimesh=function(T,C,k,j,et){var G=B,rt=L,mt=Q,Mt=b,Et=U,I=X,ft=q,ut=O,Xt=J;et&&et.faceList;var xt=T.indices;T.vertices,T.faceNormals;var ne=this.from,vt=this.to,R=this._direction;mt.position.copy(k),mt.quaternion.copy(C),o.vectorToLocalFrame(k,C,R,Et),o.pointToLocalFrame(k,C,ne,I),o.pointToLocalFrame(k,C,vt,ft);var M=I.distanceSquared(ft);T.tree.rayQuery(this,mt,rt);for(var Y=0,ct=rt.length;!this.result._shouldStop&&Y!==ct;Y++){var ht=rt[Y];T.getNormal(ht,G),T.getVertex(xt[ht*3],_),_.vsub(I,Mt);var ot=Et.dot(G),wt=G.dot(Mt)/ot;if(!(wt<0)){Et.scale(wt,S),S.vadd(I,S),T.getVertex(xt[ht*3+1],A),T.getVertex(xt[ht*3+2],D);var bt=S.distanceSquared(I);!(m(S,A,_,D)||m(S,_,A,D))||bt>M||(o.vectorToWorldFrame(C,G,Xt),o.pointToWorldFrame(k,C,S,ut),this.reportIntersection(Xt,ut,T,j,ht))}}rt.length=0},c.prototype[u.types.TRIMESH]=c.prototype.intersectTrimesh,c.prototype.reportIntersection=function(z,T,C,k,j){var et=this.from,G=this.to,rt=et.distanceTo(T),mt=this.result;if(!(this.skipBackfaces&&z.dot(this._direction)>0))switch(mt.hitFaceIndex=typeof j<"u"?j:-1,this.mode){case c.ALL:this.hasHit=!0,mt.set(et,G,z,T,C,k,rt),mt.hasHit=!0,this.callback(mt);break;case c.CLOSEST:(rt<mt.distance||!mt.hasHit)&&(this.hasHit=!0,mt.hasHit=!0,mt.set(et,G,z,T,C,k,rt));break;case c.ANY:this.hasHit=!0,mt.hasHit=!0,mt.set(et,G,z,T,C,k,rt),mt._shouldStop=!0;break}};var $=new r,F=new r;function K(z,T,C){C.vsub(z,$);var k=$.dot(T);T.mult(k,F),F.vadd(z,F);var j=C.distanceTo(F);return j}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}a.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},a.prototype.abort=function(){this._shouldStop=!0},a.prototype.set=function(o,l,u,h,c,d,f){this.rayFromWorld.copy(o),this.rayToWorld.copy(l),this.hitNormalWorld.copy(u),this.hitPointWorld.copy(h),this.shape=c,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(e,n,s){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=a;function a(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(u){l.push(u.body)},this._removeBodyHandler=function(u){var h=l.indexOf(u.body);h!==-1&&l.splice(h,1)},o&&this.setWorld(o)}a.prototype=new r,a.prototype.setWorld=function(o){this.axisList.length=0;for(var l=0;l<o.bodies.length;l++)this.axisList.push(o.bodies[l]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},a.insertionSortX=function(o){for(var l=1,u=o.length;l<u;l++){for(var h=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.x<=h.aabb.lowerBound.x);c--)o[c+1]=o[c];o[c+1]=h}return o},a.insertionSortY=function(o){for(var l=1,u=o.length;l<u;l++){for(var h=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.y<=h.aabb.lowerBound.y);c--)o[c+1]=o[c];o[c+1]=h}return o},a.insertionSortZ=function(o){for(var l=1,u=o.length;l<u;l++){for(var h=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.z<=h.aabb.lowerBound.z);c--)o[c+1]=o[c];o[c+1]=h}return o},a.prototype.collisionPairs=function(o,l,u){var h=this.axisList,c=h.length,d=this.axisIndex,f,v;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==c;f++){var g=h[f];for(v=f+1;v<c;v++){var m=h[v];if(this.needBroadphaseCollision(g,m)){if(!a.checkBounds(g,m,d))break;this.intersectionTest(g,m,l,u)}}}},a.prototype.sortList=function(){for(var o=this.axisList,l=this.axisIndex,u=o.length,h=0;h!==u;h++){var c=o[h];c.aabbNeedsUpdate&&c.computeAABB()}l===0?a.insertionSortX(o):l===1?a.insertionSortY(o):l===2&&a.insertionSortZ(o)},a.checkBounds=function(o,l,u){var h,c;u===0?(h=o.position.x,c=l.position.x):u===1?(h=o.position.y,c=l.position.y):u===2&&(h=o.position.z,c=l.position.z);var d=o.boundingRadius,f=l.boundingRadius,v=h+d,g=c-f;return g<v},a.prototype.autoDetectAxis=function(){for(var o=0,l=0,u=0,h=0,c=0,d=0,f=this.axisList,v=f.length,g=1/v,m=0;m!==v;m++){var p=f[m],x=p.position.x;o+=x,l+=x*x;var S=p.position.y;u+=S,h+=S*S;var _=p.position.z;c+=_,d+=_*_}var A=l-o*o*g,D=h-u*u*g,N=d-c*c*g;A>D?A>N?this.axisIndex=0:this.axisIndex=2:D>N?this.axisIndex=1:this.axisIndex=2},a.prototype.aabbQuery=function(o,l,u){u=u||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,c="x";h===1&&(c="y"),h===2&&(c="z");var d=this.axisList;l.lowerBound[c],l.upperBound[c];for(var f=0;f<d.length;f++){var v=d[f];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(l)&&u.push(v)}return u}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,s){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function u(h,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,v=d.pivotA?d.pivotA.clone():new l,g=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,r.call(this,h,v,c,g,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var m=this.coneEquation=new a(h,c,d),p=this.twistEquation=new o(h,c,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,m.maxForce=0,m.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(m,p)}u.prototype=new r,u.constructor=u,new l,new l,u.prototype.update=function(){var h=this.bodyA,c=this.bodyB,d=this.coneEquation,f=this.twistEquation;r.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,d.axisA),c.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),h.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),c.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,s){n.exports=a;var r=e("../utils/Utils");function a(o,l,u){u=r.defaults(u,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=l,this.id=a.idCounter++,this.collideConnected=u.collideConnected,u.wakeUpBodies&&(o&&o.wakeUp(),l&&l.wakeUp())}a.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},a.prototype.enable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!0},a.prototype.disable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!1},a.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,s){n.exports=o;var r=e("./Constraint"),a=e("../equations/ContactEquation");function o(l,u,h,c){r.call(this,l,u),typeof h>"u"&&(h=l.position.distanceTo(u.position)),typeof c>"u"&&(c=1e6),this.distance=h;var d=this.distanceEquation=new a(l,u);this.equations.push(d),d.minForce=-c,d.maxForce=c}o.prototype=new r,o.prototype.update=function(){var l=this.bodyA,u=this.bodyB,h=this.distanceEquation,c=this.distance*.5,d=h.ni;u.position.vsub(l.position,d),d.normalize(),d.mult(c,h.ri),d.mult(-c,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,s){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function u(d,f,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new l,p=v.pivotB?v.pivotB.clone():new l;r.call(this,d,m,f,p,g);var x=this.axisA=v.axisA?v.axisA.clone():new l(1,0,0);x.normalize();var S=this.axisB=v.axisB?v.axisB.clone():new l(1,0,0);S.normalize();var _=this.rotationalEquation1=new a(d,f,v),A=this.rotationalEquation2=new a(d,f,v),D=this.motorEquation=new o(d,f,g);D.enabled=!1,this.equations.push(_,A,D)}u.prototype=new r,u.constructor=u,u.prototype.enableMotor=function(){this.motorEquation.enabled=!0},u.prototype.disableMotor=function(){this.motorEquation.enabled=!1},u.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},u.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var h=new l,c=new l;u.prototype.update=function(){var d=this.bodyA,f=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,p=h,x=c,S=this.axisA,_=this.axisB;r.prototype.update.call(this),d.quaternion.vmult(S,p),f.quaternion.vmult(_,x),p.tangents(g.axisA,m.axisA),g.axisB.copy(x),m.axisB.copy(x),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,v.axisA),f.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,s){n.exports=l,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function l(u,h,c){c=c||{};var d=typeof c.maxForce<"u"?c.maxForce:1e6,f=new o,v=new o,g=new o;u.position.vadd(h.position,g),g.scale(.5,g),h.pointToLocalFrame(g,v),u.pointToLocalFrame(g,f),r.call(this,u,f,h,v,d);var m=this.rotationalEquation1=new a(u,h,c),p=this.rotationalEquation2=new a(u,h,c),x=this.rotationalEquation3=new a(u,h,c);this.equations.push(m,p,x)}l.prototype=new r,l.constructor=l,new o,new o,l.prototype.update=function(){var u=this.bodyA,h=this.bodyB;this.motorEquation;var c=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;r.prototype.update.call(this),u.vectorToWorldFrame(o.UNIT_X,c.axisA),h.vectorToWorldFrame(o.UNIT_Y,c.axisB),u.vectorToWorldFrame(o.UNIT_Y,d.axisA),h.vectorToWorldFrame(o.UNIT_Z,d.axisB),u.vectorToWorldFrame(o.UNIT_Z,f.axisA),h.vectorToWorldFrame(o.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,s){n.exports=l;var r=e("./Constraint"),a=e("../equations/ContactEquation"),o=e("../math/Vec3");function l(u,h,c,d,f){r.call(this,u,c),f=typeof f<"u"?f:1e6,this.pivotA=h?h.clone():new o,this.pivotB=d?d.clone():new o;var v=this.equationX=new a(u,c),g=this.equationY=new a(u,c),m=this.equationZ=new a(u,c);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-f,v.maxForce=g.maxForce=m.maxForce=f,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}l.prototype=new r,l.prototype.update=function(){var u=this.bodyA,h=this.bodyB,c=this.equationX,d=this.equationY,f=this.equationZ;u.quaternion.vmult(this.pivotA,c.ri),h.quaternion.vmult(this.pivotB,c.rj),d.ri.copy(c.ri),d.rj.copy(c.rj),f.ri.copy(c.ri),f.rj.copy(c.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;a.call(this,h,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}o.prototype=new a,o.prototype.constructor=o;var l=new r,u=new r;o.prototype.computeB=function(h){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,m=u,p=this.jacobianElementA,x=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),x.rotational.copy(g);var S=Math.cos(this.angle)-f.dot(v),_=this.computeGW(),A=this.computeGiMf(),D=-S*c-_*d-h*A;return D}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(m,p,x){x=typeof x<"u"?x:1e6,r.call(this,m,p,0,x),this.restitution=0,this.ri=new a,this.rj=new a,this.ni=new a}o.prototype=new r,o.prototype.constructor=o;var l=new a,u=new a,h=new a;o.prototype.computeB=function(m){var p=this.a,x=this.b,S=this.bi,_=this.bj,A=this.ri,D=this.rj,N=l,P=u,E=S.velocity,y=S.angularVelocity;S.force,S.torque;var b=_.velocity,B=_.angularVelocity;_.force,_.torque;var U=h,X=this.jacobianElementA,q=this.jacobianElementB,J=this.ni;A.cross(J,N),D.cross(J,P),J.negate(X.spatial),N.negate(X.rotational),q.spatial.copy(J),q.rotational.copy(P),U.copy(_.position),U.vadd(D,U),U.vsub(S.position,U),U.vsub(A,U);var O=J.dot(U),L=this.restitution+1,Q=L*b.dot(J)-L*E.dot(J)+B.dot(P)-y.dot(N),$=this.computeGiMf(),F=-O*p-Q*x-m*$;return F};var c=new a,d=new a,f=new a,v=new a,g=new a;o.prototype.getImpactVelocityAlongNormal=function(){var m=c,p=d,x=f,S=v,_=g;return this.bi.position.vadd(this.ri,x),this.bj.position.vadd(this.rj,S),this.bi.getVelocityAtWorldPoint(x,m),this.bj.getVelocityAtWorldPoint(S,p),m.vsub(p,_),this.ni.dot(_)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,s){n.exports=o;var r=e("../math/JacobianElement"),a=e("../math/Vec3");function o(g,m,p,x){this.id=o.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof x>"u"?1e6:x,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,p){var x=m,S=g,_=p;this.a=4/(_*(1+4*x)),this.b=4*x/(1+4*x),this.eps=4/(_*_*S*(1+4*x))},o.prototype.computeB=function(g,m,p){var x=this.computeGW(),S=this.computeGq(),_=this.computeGiMf();return-S*g-x*m-_*p},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,S=p.position,_=x.position;return g.spatial.dot(S)+m.spatial.dot(_)};var l=new a;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,S=p.velocity,_=x.velocity,A=p.angularVelocity||l,D=x.angularVelocity||l;return g.multiplyVectors(S,A)+m.multiplyVectors(_,D)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,S=p.vlambda,_=x.vlambda,A=p.wlambda||l,D=x.wlambda||l;return g.multiplyVectors(S,A)+m.multiplyVectors(_,D)};var u=new a,h=new a,c=new a,d=new a;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,S=p.force,_=p.torque,A=x.force,D=x.torque,N=p.invMassSolve,P=x.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(_,c):c.set(0,0,0),x.invInertiaWorldSolve?x.invInertiaWorldSolve.vmult(D,d):d.set(0,0,0),S.mult(N,u),A.mult(P,h),g.multiplyVectors(u,c)+m.multiplyVectors(h,d)};var f=new a;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,S=p.invMassSolve,_=x.invMassSolve,A=p.invInertiaWorldSolve,D=x.invInertiaWorldSolve,N=S+_;return A&&(A.vmult(g.rotational,f),N+=f.dot(g.rotational)),D&&(D.vmult(m.rotational,f),N+=f.dot(m.rotational)),N};var v=new a;new a,new a,new a,new a,new a,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,p=this.jacobianElementB,x=this.bi,S=this.bj,_=v;m.spatial.mult(x.invMassSolve*g,_),x.vlambda.vadd(_,x.vlambda),p.spatial.mult(S.invMassSolve*g,_),S.vlambda.vadd(_,S.vlambda),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(m.rotational,_),_.mult(g,_),x.wlambda.vadd(_,x.wlambda)),S.invInertiaWorldSolve&&(S.invInertiaWorldSolve.vmult(p.rotational,_),_.mult(g,_),S.wlambda.vadd(_,S.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(h,c,d){r.call(this,h,c,-d,d),this.ri=new a,this.rj=new a,this.t=new a}o.prototype=new r,o.prototype.constructor=o;var l=new a,u=new a;o.prototype.computeB=function(h){this.a;var c=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,v=l,g=u,m=this.t;d.cross(m,v),f.cross(m,g);var p=this.jacobianElementA,x=this.jacobianElementB;m.negate(p.spatial),v.negate(p.rotational),x.spatial.copy(m),x.rotational.copy(g);var S=this.computeGW(),_=this.computeGiMf(),A=-S*c-h*_;return A}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;a.call(this,h,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new a,o.prototype.constructor=o;var l=new r,u=new r;o.prototype.computeB=function(h){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,m=u,p=this.jacobianElementA,x=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),x.rotational.copy(g);var S=Math.cos(this.maxAngle)-f.dot(v),_=this.computeGW(),A=this.computeGiMf(),D=-S*c-_*d-h*A;return D}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(l,u,h){h=typeof h<"u"?h:1e6,a.call(this,l,u,-h,h),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new a,o.prototype.constructor=o,o.prototype.computeB=function(l){this.a;var u=this.b;this.bi,this.bj;var h=this.axisA,c=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(h),c.negate(f.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*u-l*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,s){var r=e("../utils/Utils");n.exports=a;function a(o,l,u){u=r.defaults(u,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=a.idCounter++,this.materials=[o,l],this.friction=u.friction,this.restitution=u.restitution,this.contactEquationStiffness=u.contactEquationStiffness,this.contactEquationRelaxation=u.contactEquationRelaxation,this.frictionEquationStiffness=u.frictionEquationStiffness,this.frictionEquationRelaxation=u.frictionEquationRelaxation}a.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,s){n.exports=r;function r(a){var o="";a=a||{},typeof a=="string"?(o=a,a={}):typeof a=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof a.friction<"u"?a.friction:-1,this.restitution=typeof a.restitution<"u"?a.restitution:-1}r.idCounter=0},{}],26:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(){this.spatial=new r,this.rotational=new r}a.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},a.prototype.multiplyVectors=function(o,l){return o.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}a.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},a.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},a.prototype.setTrace=function(o){var l=this.elements;l[0]=o.x,l[4]=o.y,l[8]=o.z},a.prototype.getTrace=function(l){var l=l||new r,u=this.elements;l.x=u[0],l.y=u[4],l.z=u[8]},a.prototype.vmult=function(o,l){l=l||new r;var u=this.elements,h=o.x,c=o.y,d=o.z;return l.x=u[0]*h+u[1]*c+u[2]*d,l.y=u[3]*h+u[4]*c+u[5]*d,l.z=u[6]*h+u[7]*c+u[8]*d,l},a.prototype.smult=function(o){for(var l=0;l<this.elements.length;l++)this.elements[l]*=o},a.prototype.mmult=function(o,l){for(var u=l||new a,h=0;h<3;h++)for(var c=0;c<3;c++){for(var d=0,f=0;f<3;f++)d+=o.elements[h+f*3]*this.elements[f+c*3];u.elements[h+c*3]=d}return u},a.prototype.scale=function(o,l){l=l||new a;for(var u=this.elements,h=l.elements,c=0;c!==3;c++)h[3*c+0]=o.x*u[3*c+0],h[3*c+1]=o.y*u[3*c+1],h[3*c+2]=o.z*u[3*c+2];return l},a.prototype.solve=function(o,l){l=l||new r;for(var u=3,h=4,c=[],d=0;d<u*h;d++)c.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)c[d+h*f]=this.elements[d+3*f];c[3+4*0]=o.x,c[3+4*1]=o.y,c[3+4*2]=o.z;var v=3,g=v,m,p=4,x;do{if(d=g-v,c[d+h*d]===0){for(f=d+1;f<g;f++)if(c[d+h*f]!==0){m=p;do x=p-m,c[x+h*d]+=c[x+h*f];while(--m);break}}if(c[d+h*d]!==0)for(f=d+1;f<g;f++){var S=c[d+h*f]/c[d+h*d];m=p;do x=p-m,c[x+h*f]=x<=d?0:c[x+h*f]-c[x+h*d]*S;while(--m)}}while(--v);if(l.z=c[2*h+3]/c[2*h+2],l.y=(c[1*h+3]-c[1*h+2]*l.z)/c[1*h+1],l.x=(c[0*h+3]-c[0*h+2]*l.z-c[0*h+1]*l.y)/c[0*h+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return l},a.prototype.e=function(o,l,u){if(u===void 0)return this.elements[l+3*o];this.elements[l+3*o]=u},a.prototype.copy=function(o){for(var l=0;l<o.elements.length;l++)this.elements[l]=o.elements[l];return this},a.prototype.toString=function(){for(var o="",l=",",u=0;u<9;u++)o+=this.elements[u]+l;return o},a.prototype.reverse=function(o){o=o||new a;for(var l=3,u=6,h=[],c=0;c<l*u;c++)h.push(0);var c,d;for(c=0;c<3;c++)for(d=0;d<3;d++)h[c+u*d]=this.elements[c+3*d];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var f=3,v=f,g,m=u,p;do{if(c=v-f,h[c+u*c]===0){for(d=c+1;d<v;d++)if(h[c+u*d]!==0){g=m;do p=m-g,h[p+u*c]+=h[p+u*d];while(--g);break}}if(h[c+u*c]!==0)for(d=c+1;d<v;d++){var x=h[c+u*d]/h[c+u*c];g=m;do p=m-g,h[p+u*d]=p<=c?0:h[p+u*d]-h[p+u*c]*x;while(--g)}}while(--f);c=2;do{d=c-1;do{var x=h[c+u*d]/h[c+u*c];g=u;do p=u-g,h[p+u*d]=h[p+u*d]-h[p+u*c]*x;while(--g)}while(d--)}while(--c);c=2;do{var x=1/h[c+u*c];g=u;do p=u-g,h[p+u*c]=h[p+u*c]*x;while(--g)}while(c--);c=2;do{d=2;do{if(p=h[l+d+u*c],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(c,d,p)}while(d--)}while(c--);return o},a.prototype.setRotationFromQuaternion=function(o){var l=o.x,u=o.y,h=o.z,c=o.w,d=l+l,f=u+u,v=h+h,g=l*d,m=l*f,p=l*v,x=u*f,S=u*v,_=h*v,A=c*d,D=c*f,N=c*v,P=this.elements;return P[3*0+0]=1-(x+_),P[3*0+1]=m-N,P[3*0+2]=p+D,P[3*1+0]=m+N,P[3*1+1]=1-(g+_),P[3*1+2]=S-A,P[3*2+0]=p-D,P[3*2+1]=S+A,P[3*2+2]=1-(g+x),this},a.prototype.transpose=function(o){o=o||new a;for(var l=o.elements,u=this.elements,h=0;h!==3;h++)for(var c=0;c!==3;c++)l[3*h+c]=u[3*c+h];return o}},{"./Vec3":30}],28:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(d,f,v,g){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}a.prototype.set=function(d,f,v,g){this.x=d,this.y=f,this.z=v,this.w=g},a.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},a.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},a.prototype.setFromAxisAngle=function(d,f){var v=Math.sin(f*.5);this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(f*.5)},a.prototype.toAxisAngle=function(d){d=d||new r,this.normalize();var f=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/v,d.y=this.y/v,d.z=this.z/v),[d,f]};var o=new r,l=new r;a.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var v=o,g=l;d.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=d.cross(f);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var u=new r,h=new r,c=new r;a.prototype.mult=function(d,f){f=f||new a;var v=this.w,g=u,m=h,p=c;return g.set(this.x,this.y,this.z),m.set(d.x,d.y,d.z),f.w=v*d.w-g.dot(m),g.cross(m,p),f.x=v*m.x+d.w*g.x+p.x,f.y=v*m.y+d.w*g.y+p.y,f.z=v*m.z+d.w*g.z+p.z,f},a.prototype.inverse=function(d){var f=this.x,v=this.y,g=this.z,m=this.w;d=d||new a,this.conjugate(d);var p=1/(f*f+v*v+g*g+m*m);return d.x*=p,d.y*=p,d.z*=p,d.w*=p,d},a.prototype.conjugate=function(d){return d=d||new a,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},a.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},a.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},a.prototype.vmult=function(d,f){f=f||new r;var v=d.x,g=d.y,m=d.z,p=this.x,x=this.y,S=this.z,_=this.w,A=_*v+x*m-S*g,D=_*g+S*v-p*m,N=_*m+p*g-x*v,P=-p*v-x*g-S*m;return f.x=A*_+P*-p+D*-S-N*-x,f.y=D*_+P*-x+N*-p-A*-S,f.z=N*_+P*-S+A*-x-D*-p,f},a.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},a.prototype.toEuler=function(d,f){f=f||"YZX";var v,g,m,p=this.x,x=this.y,S=this.z,_=this.w;switch(f){case"YZX":var A=p*x+S*_;if(A>.499&&(v=2*Math.atan2(p,_),g=Math.PI/2,m=0),A<-.499&&(v=-2*Math.atan2(p,_),g=-Math.PI/2,m=0),isNaN(v)){var D=p*p,N=x*x,P=S*S;v=Math.atan2(2*x*_-2*p*S,1-2*N-2*P),g=Math.asin(2*A),m=Math.atan2(2*p*_-2*x*S,1-2*D-2*P)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=v,d.z=g,d.x=m},a.prototype.setFromEuler=function(d,f,v,g){g=g||"XYZ";var m=Math.cos(d/2),p=Math.cos(f/2),x=Math.cos(v/2),S=Math.sin(d/2),_=Math.sin(f/2),A=Math.sin(v/2);return g==="XYZ"?(this.x=S*p*x+m*_*A,this.y=m*_*x-S*p*A,this.z=m*p*A+S*_*x,this.w=m*p*x-S*_*A):g==="YXZ"?(this.x=S*p*x+m*_*A,this.y=m*_*x-S*p*A,this.z=m*p*A-S*_*x,this.w=m*p*x+S*_*A):g==="ZXY"?(this.x=S*p*x-m*_*A,this.y=m*_*x+S*p*A,this.z=m*p*A+S*_*x,this.w=m*p*x-S*_*A):g==="ZYX"?(this.x=S*p*x-m*_*A,this.y=m*_*x+S*p*A,this.z=m*p*A-S*_*x,this.w=m*p*x+S*_*A):g==="YZX"?(this.x=S*p*x+m*_*A,this.y=m*_*x+S*p*A,this.z=m*p*A-S*_*x,this.w=m*p*x-S*_*A):g==="XZY"&&(this.x=S*p*x-m*_*A,this.y=m*_*x-S*p*A,this.z=m*p*A+S*_*x,this.w=m*p*x+S*_*A),this},a.prototype.clone=function(){return new a(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,s){var r=e("./Vec3"),a=e("./Quaternion");n.exports=o;function o(u){u=u||{},this.position=new r,u.position&&this.position.copy(u.position),this.quaternion=new a,u.quaternion&&this.quaternion.copy(u.quaternion)}var l=new a;o.pointToLocalFrame=function(u,h,c,f){var f=f||new r;return c.vsub(u,f),h.conjugate(l),l.vmult(f,f),f},o.prototype.pointToLocal=function(u,h){return o.pointToLocalFrame(this.position,this.quaternion,u,h)},o.pointToWorldFrame=function(u,h,c,f){var f=f||new r;return h.vmult(c,f),f.vadd(u,f),f},o.prototype.pointToWorld=function(u,h){return o.pointToWorldFrame(this.position,this.quaternion,u,h)},o.prototype.vectorToWorldFrame=function(u,c){var c=c||new r;return this.quaternion.vmult(u,c),c},o.vectorToWorldFrame=function(u,h,c){return u.vmult(h,c),c},o.vectorToLocalFrame=function(u,h,c,f){var f=f||new r;return h.w*=-1,h.vmult(c,f),h.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,s){n.exports=a;var r=e("./Mat3");function a(h,c,d){this.x=h||0,this.y=c||0,this.z=d||0}a.ZERO=new a(0,0,0),a.UNIT_X=new a(1,0,0),a.UNIT_Y=new a(0,1,0),a.UNIT_Z=new a(0,0,1),a.prototype.cross=function(h,c){var d=h.x,f=h.y,v=h.z,g=this.x,m=this.y,p=this.z;return c=c||new a,c.x=m*v-p*f,c.y=p*d-g*v,c.z=g*f-m*d,c},a.prototype.set=function(h,c,d){return this.x=h,this.y=c,this.z=d,this},a.prototype.setZero=function(){this.x=this.y=this.z=0},a.prototype.vadd=function(h,c){if(c)c.x=h.x+this.x,c.y=h.y+this.y,c.z=h.z+this.z;else return new a(this.x+h.x,this.y+h.y,this.z+h.z)},a.prototype.vsub=function(h,c){if(c)c.x=this.x-h.x,c.y=this.y-h.y,c.z=this.z-h.z;else return new a(this.x-h.x,this.y-h.y,this.z-h.z)},a.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},a.prototype.normalize=function(){var h=this.x,c=this.y,d=this.z,f=Math.sqrt(h*h+c*c+d*d);if(f>0){var v=1/f;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return f},a.prototype.unit=function(h){h=h||new a;var c=this.x,d=this.y,f=this.z,v=Math.sqrt(c*c+d*d+f*f);return v>0?(v=1/v,h.x=c*v,h.y=d*v,h.z=f*v):(h.x=1,h.y=0,h.z=0),h},a.prototype.norm=function(){var h=this.x,c=this.y,d=this.z;return Math.sqrt(h*h+c*c+d*d)},a.prototype.length=a.prototype.norm,a.prototype.norm2=function(){return this.dot(this)},a.prototype.lengthSquared=a.prototype.norm2,a.prototype.distanceTo=function(h){var c=this.x,d=this.y,f=this.z,v=h.x,g=h.y,m=h.z;return Math.sqrt((v-c)*(v-c)+(g-d)*(g-d)+(m-f)*(m-f))},a.prototype.distanceSquared=function(h){var c=this.x,d=this.y,f=this.z,v=h.x,g=h.y,m=h.z;return(v-c)*(v-c)+(g-d)*(g-d)+(m-f)*(m-f)},a.prototype.mult=function(h,c){c=c||new a;var d=this.x,f=this.y,v=this.z;return c.x=h*d,c.y=h*f,c.z=h*v,c},a.prototype.scale=a.prototype.mult,a.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},a.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},a.prototype.negate=function(h){return h=h||new a,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var o=new a,l=new a;a.prototype.tangents=function(h,c){var d=this.norm();if(d>0){var f=o,v=1/d;f.set(this.x*v,this.y*v,this.z*v);var g=l;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,h)):(g.set(0,1,0),f.cross(g,h)),f.cross(h,c)}else h.set(1,0,0),c.set(0,1,0)},a.prototype.toString=function(){return this.x+","+this.y+","+this.z},a.prototype.toArray=function(){return[this.x,this.y,this.z]},a.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},a.prototype.lerp=function(h,c,d){var f=this.x,v=this.y,g=this.z;d.x=f+(h.x-f)*c,d.y=v+(h.y-v)*c,d.z=g+(h.z-g)*c},a.prototype.almostEquals=function(h,c){return c===void 0&&(c=1e-6),!(Math.abs(this.x-h.x)>c||Math.abs(this.y-h.y)>c||Math.abs(this.z-h.z)>c)},a.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var u=new a;a.prototype.isAntiparallelTo=function(h,c){return this.negate(u),u.almostEquals(h,c)},a.prototype.clone=function(){return new a(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,s){n.exports=c;var r=e("../utils/EventTarget");e("../shapes/Shape");var a=e("../math/Vec3"),o=e("../math/Mat3"),l=e("../math/Quaternion");e("../material/Material");var u=e("../collision/AABB"),h=e("../shapes/Box");function c(b){b=b||{},r.apply(this),this.id=c.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new a,this.collisionFilterGroup=typeof b.collisionFilterGroup=="number"?b.collisionFilterGroup:1,this.collisionFilterMask=typeof b.collisionFilterMask=="number"?b.collisionFilterMask:1,this.collisionResponse=!0,this.position=new a,b.position&&this.position.copy(b.position),this.previousPosition=new a,this.initPosition=new a,this.velocity=new a,b.velocity&&this.velocity.copy(b.velocity),this.initVelocity=new a,this.force=new a;var B=typeof b.mass=="number"?b.mass:0;this.mass=B,this.invMass=B>0?1/B:0,this.material=b.material||null,this.linearDamping=typeof b.linearDamping=="number"?b.linearDamping:.01,this.type=B<=0?c.STATIC:c.DYNAMIC,typeof b.type==typeof c.STATIC&&(this.type=b.type),this.allowSleep=typeof b.allowSleep<"u"?b.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof b.sleepSpeedLimit<"u"?b.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof b.sleepTimeLimit<"u"?b.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new a,this.quaternion=new l,b.quaternion&&this.quaternion.copy(b.quaternion),this.initQuaternion=new l,this.angularVelocity=new a,b.angularVelocity&&this.angularVelocity.copy(b.angularVelocity),this.initAngularVelocity=new a,this.interpolatedPosition=new a,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new a,this.invInertia=new a,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new a,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof b.fixedRotation<"u"?b.fixedRotation:!1,this.angularDamping=typeof b.angularDamping<"u"?b.angularDamping:.01,this.aabb=new u,this.aabbNeedsUpdate=!0,this.wlambda=new a,b.shape&&this.addShape(b.shape),this.updateMassProperties()}c.prototype=new r,c.prototype.constructor=c,c.DYNAMIC=1,c.STATIC=2,c.KINEMATIC=4,c.AWAKE=0,c.SLEEPY=1,c.SLEEPING=2,c.idCounter=0,c.prototype.wakeUp=function(){var b=this.sleepState;this.sleepState=0,b===c.SLEEPING&&this.dispatchEvent({type:"wakeup"})},c.prototype.sleep=function(){this.sleepState=c.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},c.sleepyEvent={type:"sleepy"},c.sleepEvent={type:"sleep"},c.prototype.sleepTick=function(b){if(this.allowSleep){var B=this.sleepState,U=this.velocity.norm2()+this.angularVelocity.norm2(),X=Math.pow(this.sleepSpeedLimit,2);B===c.AWAKE&&U<X?(this.sleepState=c.SLEEPY,this.timeLastSleepy=b,this.dispatchEvent(c.sleepyEvent)):B===c.SLEEPY&&U>X?this.wakeUp():B===c.SLEEPY&&b-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(c.sleepEvent))}},c.prototype.updateSolveMassProperties=function(){this.sleepState===c.SLEEPING||this.type===c.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},c.prototype.pointToLocalFrame=function(b,U){var U=U||new a;return b.vsub(this.position,U),this.quaternion.conjugate().vmult(U,U),U},c.prototype.vectorToLocalFrame=function(b,U){var U=U||new a;return this.quaternion.conjugate().vmult(b,U),U},c.prototype.pointToWorldFrame=function(b,U){var U=U||new a;return this.quaternion.vmult(b,U),U.vadd(this.position,U),U},c.prototype.vectorToWorldFrame=function(b,U){var U=U||new a;return this.quaternion.vmult(b,U),U};var d=new a,f=new l;c.prototype.addShape=function(b,B,U){var X=new a,q=new l;return B&&X.copy(B),U&&q.copy(U),this.shapes.push(b),this.shapeOffsets.push(X),this.shapeOrientations.push(q),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},c.prototype.updateBoundingRadius=function(){for(var b=this.shapes,B=this.shapeOffsets,U=b.length,X=0,q=0;q!==U;q++){var J=b[q];J.updateBoundingSphereRadius();var O=B[q].norm(),L=J.boundingSphereRadius;O+L>X&&(X=O+L)}this.boundingRadius=X};var v=new u;c.prototype.computeAABB=function(){for(var b=this.shapes,B=this.shapeOffsets,U=this.shapeOrientations,X=b.length,q=d,J=f,O=this.quaternion,L=this.aabb,Q=v,$=0;$!==X;$++){var F=b[$];U[$].mult(O,J),J.vmult(B[$],q),q.vadd(this.position,q),F.calculateWorldAABB(q,J,Q.lowerBound,Q.upperBound),$===0?L.copy(Q):L.extend(Q)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,c.prototype.updateInertiaWorld=function(b){var B=this.invInertia;if(!(B.x===B.y&&B.y===B.z&&!b)){var U=g,X=m;U.setRotationFromQuaternion(this.quaternion),U.transpose(X),U.scale(B,U),U.mmult(X,this.invInertiaWorld)}};var p=new a,x=new a;c.prototype.applyForce=function(b,B){if(this.type===c.DYNAMIC){var U=p;B.vsub(this.position,U);var X=x;U.cross(b,X),this.force.vadd(b,this.force),this.torque.vadd(X,this.torque)}};var S=new a,_=new a;c.prototype.applyLocalForce=function(b,B){if(this.type===c.DYNAMIC){var U=S,X=_;this.vectorToWorldFrame(b,U),this.pointToWorldFrame(B,X),this.applyForce(U,X)}};var A=new a,D=new a,N=new a;c.prototype.applyImpulse=function(b,B){if(this.type===c.DYNAMIC){var U=A;B.vsub(this.position,U);var X=D;X.copy(b),X.mult(this.invMass,X),this.velocity.vadd(X,this.velocity);var q=N;U.cross(b,q),this.invInertiaWorld.vmult(q,q),this.angularVelocity.vadd(q,this.angularVelocity)}};var P=new a,E=new a;c.prototype.applyLocalImpulse=function(b,B){if(this.type===c.DYNAMIC){var U=P,X=E;this.vectorToWorldFrame(b,U),this.pointToWorldFrame(B,X),this.applyImpulse(U,X)}};var y=new a;c.prototype.updateMassProperties=function(){var b=y;this.invMass=this.mass>0?1/this.mass:0;var B=this.inertia,U=this.fixedRotation;this.computeAABB(),b.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(b,this.mass,B),this.invInertia.set(B.x>0&&!U?1/B.x:0,B.y>0&&!U?1/B.y:0,B.z>0&&!U?1/B.z:0),this.updateInertiaWorld(!0)},c.prototype.getVelocityAtWorldPoint=function(b,B){var U=new a;return b.vsub(this.position,U),this.angularVelocity.cross(U,B),this.velocity.vadd(B,B),B}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,s){e("./Body");var r=e("../math/Vec3"),a=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),l=e("../objects/WheelInfo");n.exports=u;function u(O){this.chassisBody=O.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof O.indexRightAxis<"u"?O.indexRightAxis:1,this.indexForwardAxis=typeof O.indexForwardAxis<"u"?O.indexForwardAxis:0,this.indexUpAxis=typeof O.indexUpAxis<"u"?O.indexUpAxis:2}new r,new r,new r;var h=new r,c=new r,d=new r;new o,u.prototype.addWheel=function(O){O=O||{};var L=new l(O),Q=this.wheelInfos.length;return this.wheelInfos.push(L),Q},u.prototype.setSteeringValue=function(O,L){var Q=this.wheelInfos[L];Q.steering=O},new r,u.prototype.applyEngineForce=function(O,L){this.wheelInfos[L].engineForce=O},u.prototype.setBrake=function(O,L){this.wheelInfos[L].brake=O},u.prototype.addToWorld=function(O){this.constraints,O.add(this.chassisBody);var L=this;this.preStepCallback=function(){L.updateVehicle(O.dt)},O.addEventListener("preStep",this.preStepCallback),this.world=O},u.prototype.getVehicleAxisWorld=function(O,L){L.set(O===0?1:0,O===1?1:0,O===2?1:0),this.chassisBody.vectorToWorldFrame(L,L)},u.prototype.updateVehicle=function(O){for(var L=this.wheelInfos,Q=L.length,$=this.chassisBody,F=0;F<Q;F++)this.updateWheelTransform(F);this.currentVehicleSpeedKmHour=3.6*$.velocity.norm();var K=new r;this.getVehicleAxisWorld(this.indexForwardAxis,K),K.dot($.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var F=0;F<Q;F++)this.castRay(L[F]);this.updateSuspension(O);for(var z=new r,T=new r,F=0;F<Q;F++){var C=L[F],k=C.suspensionForce;k>C.maxSuspensionForce&&(k=C.maxSuspensionForce),C.raycastResult.hitNormalWorld.scale(k*O,z),C.raycastResult.hitPointWorld.vsub($.position,T),$.applyImpulse(z,C.raycastResult.hitPointWorld)}this.updateFriction(O);var j=new r,et=new r,G=new r;for(F=0;F<Q;F++){var C=L[F];$.getVelocityAtWorldPoint(C.chassisConnectionPointWorld,G);var rt=1;switch(this.indexUpAxis){case 1:rt=-1;break}if(C.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,et);var mt=et.dot(C.raycastResult.hitNormalWorld);C.raycastResult.hitNormalWorld.scale(mt,j),et.vsub(j,et);var Mt=et.dot(G);C.deltaRotation=rt*Mt*O/C.radius}(C.sliding||!C.isInContact)&&C.engineForce!==0&&C.useCustomSlidingRotationalSpeed&&(C.deltaRotation=(C.engineForce>0?1:-1)*C.customSlidingRotationalSpeed*O),Math.abs(C.brake)>Math.abs(C.engineForce)&&(C.deltaRotation=0),C.rotation+=C.deltaRotation,C.deltaRotation*=.99}},u.prototype.updateSuspension=function(O){for(var L=this.chassisBody,Q=L.mass,$=this.wheelInfos,F=$.length,K=0;K<F;K++){var z=$[K];if(z.isInContact){var T,C=z.suspensionRestLength,k=z.suspensionLength,j=C-k;T=z.suspensionStiffness*j*z.clippedInvContactDotSuspension;var et=z.suspensionRelativeVelocity,G;et<0?G=z.dampingCompression:G=z.dampingRelaxation,T-=G*et,z.suspensionForce=T*Q,z.suspensionForce<0&&(z.suspensionForce=0)}else z.suspensionForce=0}},u.prototype.removeFromWorld=function(O){this.constraints,O.remove(this.chassisBody),O.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new r,v=new r;u.prototype.castRay=function(O){var L=f,Q=v;this.updateWheelTransformWorld(O);var $=this.chassisBody,F=-1,K=O.suspensionRestLength+O.radius;O.directionWorld.scale(K,L);var z=O.chassisConnectionPointWorld;z.vadd(L,Q);var T=O.raycastResult;T.reset();var C=$.collisionResponse;$.collisionResponse=!1,this.world.rayTest(z,Q,T),$.collisionResponse=C;var k=T.body;if(O.raycastResult.groundObject=0,k){F=T.distance,O.raycastResult.hitNormalWorld=T.hitNormalWorld,O.isInContact=!0;var j=T.distance;O.suspensionLength=j-O.radius;var et=O.suspensionRestLength-O.maxSuspensionTravel,G=O.suspensionRestLength+O.maxSuspensionTravel;O.suspensionLength<et&&(O.suspensionLength=et),O.suspensionLength>G&&(O.suspensionLength=G,O.raycastResult.reset());var rt=O.raycastResult.hitNormalWorld.dot(O.directionWorld),mt=new r;$.getVelocityAtWorldPoint(O.raycastResult.hitPointWorld,mt);var Mt=O.raycastResult.hitNormalWorld.dot(mt);if(rt>=-.1)O.suspensionRelativeVelocity=0,O.clippedInvContactDotSuspension=1/.1;else{var Et=-1/rt;O.suspensionRelativeVelocity=Mt*Et,O.clippedInvContactDotSuspension=Et}}else O.suspensionLength=O.suspensionRestLength+0*O.maxSuspensionTravel,O.suspensionRelativeVelocity=0,O.directionWorld.scale(-1,O.raycastResult.hitNormalWorld),O.clippedInvContactDotSuspension=1;return F},u.prototype.updateWheelTransformWorld=function(O){O.isInContact=!1;var L=this.chassisBody;L.pointToWorldFrame(O.chassisConnectionPointLocal,O.chassisConnectionPointWorld),L.vectorToWorldFrame(O.directionLocal,O.directionWorld),L.vectorToWorldFrame(O.axleLocal,O.axleWorld)},u.prototype.updateWheelTransform=function(O){var L=h,Q=c,$=d,F=this.wheelInfos[O];this.updateWheelTransformWorld(F),F.directionLocal.scale(-1,L),Q.copy(F.axleLocal),L.cross(Q,$),$.normalize(),Q.normalize();var K=F.steering,z=new a;z.setFromAxisAngle(L,K);var T=new a;T.setFromAxisAngle(Q,F.rotation);var C=F.worldTransform.quaternion;this.chassisBody.quaternion.mult(z,C),C.mult(T,C),C.normalize();var k=F.worldTransform.position;k.copy(F.directionWorld),k.scale(F.suspensionLength,k),k.vadd(F.chassisConnectionPointWorld,k)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];u.prototype.getWheelTransformWorld=function(O){return this.wheelInfos[O].worldTransform};var m=new r,p=[],x=[],S=1;u.prototype.updateFriction=function(O){for(var L=m,Q=this.wheelInfos,$=Q.length,F=this.chassisBody,K=x,z=p,T=0;T<$;T++){var C=Q[T],k=C.raycastResult.body;C.sideImpulse=0,C.forwardImpulse=0,K[T]||(K[T]=new r),z[T]||(z[T]=new r)}for(var T=0;T<$;T++){var C=Q[T],k=C.raycastResult.body;if(k){var j=z[T],et=this.getWheelTransformWorld(T);et.vectorToWorldFrame(g[this.indexRightAxis],j);var G=C.raycastResult.hitNormalWorld,rt=j.dot(G);G.scale(rt,L),j.vsub(L,j),j.normalize(),G.cross(j,K[T]),K[T].normalize(),C.sideImpulse=J(F,C.raycastResult.hitPointWorld,k,C.raycastResult.hitPointWorld,j),C.sideImpulse*=S}}var mt=1,Mt=.5;this.sliding=!1;for(var T=0;T<$;T++){var C=Q[T],k=C.raycastResult.body,Et=0;if(C.slipInfo=1,k){var I=0,ft=C.brake?C.brake:I;Et=N(F,k,C.raycastResult.hitPointWorld,K[T],ft),Et+=C.engineForce*O;var ut=ft/Et;C.slipInfo*=ut}if(C.forwardImpulse=0,C.skidInfo=1,k){C.skidInfo=1;var Xt=C.suspensionForce*O*C.frictionSlip,xt=Xt,ne=Xt*xt;C.forwardImpulse=Et;var vt=C.forwardImpulse*Mt,R=C.sideImpulse*mt,M=vt*vt+R*R;if(C.sliding=!1,M>ne){this.sliding=!0,C.sliding=!0;var ut=Xt/Math.sqrt(M);C.skidInfo*=ut}}}if(this.sliding)for(var T=0;T<$;T++){var C=Q[T];C.sideImpulse!==0&&C.skidInfo<1&&(C.forwardImpulse*=C.skidInfo,C.sideImpulse*=C.skidInfo)}for(var T=0;T<$;T++){var C=Q[T],Y=new r;if(Y.copy(C.raycastResult.hitPointWorld),C.forwardImpulse!==0){var ct=new r;K[T].scale(C.forwardImpulse,ct),F.applyImpulse(ct,Y)}if(C.sideImpulse!==0){var k=C.raycastResult.body,ht=new r;ht.copy(C.raycastResult.hitPointWorld);var ot=new r;z[T].scale(C.sideImpulse,ot),F.pointToLocalFrame(Y,Y),Y["xyz"[this.indexUpAxis]]*=C.rollInfluence,F.pointToWorldFrame(Y,Y),F.applyImpulse(ot,Y),ot.scale(-1,ot),k.applyImpulse(ot,ht)}}};var _=new r,A=new r,D=new r;function N(O,L,Q,$,F){var K=0,z=Q,T=_,C=A,k=D;O.getVelocityAtWorldPoint(z,T),L.getVelocityAtWorldPoint(z,C),T.vsub(C,k);var j=$.dot(k),et=B(O,Q,$),G=B(L,Q,$),rt=1,mt=rt/(et+G);return K=-j*mt,F<K&&(K=F),K<-F&&(K=-F),K}var P=new r,E=new r,y=new r,b=new r;function B(O,L,Q){var $=P,F=E,K=y,z=b;return L.vsub(O.position,$),$.cross(Q,F),O.invInertiaWorld.vmult(F,z),z.cross($,K),O.invMass+Q.dot(K)}var U=new r,X=new r,q=new r;function J(O,L,Q,$,F,rt){var z=F.norm2();if(z>1.1)return 0;var T=U,C=X,k=q;O.getVelocityAtWorldPoint(L,T),Q.getVelocityAtWorldPoint($,C),T.vsub(C,k);var j=F.dot(k),et=.2,G=1/(O.invMass+Q.invMass),rt=-et*j*G;return rt}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,s){var r=e("./Body"),a=e("../shapes/Sphere"),o=e("../shapes/Box"),l=e("../math/Vec3"),u=e("../constraints/HingeConstraint");n.exports=h;function h(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new l(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var v=new o(new l(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(f){f=f||{};var v=f.body;v||(v=new r(1,new a(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new l;var g=typeof f.position<"u"?f.position.clone():new l,m=new l;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var p=typeof f.axis<"u"?f.axis.clone():new l(0,1,0);this.wheelAxes.push(p);var x=new u(this.chassisBody,v,{pivotA:g,axisA:p,pivotB:l.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(x),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(f,v){var g=this.wheelAxes[v],m=Math.cos(f),p=Math.sin(f),x=g.x,S=g.y;this.constraints[v].axisA.set(m*x-p*S,p*x+m*S,0)},h.prototype.setMotorSpeed=function(f,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=f},h.prototype.disableMotor=function(f){var v=this.constraints[f];v.disableMotor()};var c=new l;h.prototype.setWheelForce=function(f,v){this.wheelForces[v]=f},h.prototype.applyWheelForce=function(f,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],p=m.torque;g.scale(f,c),m.vectorToWorldFrame(c,c),p.vadd(c,p)},h.prototype.addToWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.add(g[m]);for(var m=0;m<v.length;m++)f.addConstraint(v[m]);f.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var f=this.wheelForces,v=0;v<f.length;v++)this.applyWheelForce(f[v],v)},h.prototype.removeFromWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.remove(g[m]);for(var m=0;m<v.length;m++)f.removeConstraint(v[m])};var d=new l;h.prototype.getWheelSpeed=function(f){var v=this.wheelAxes[f],g=this.wheelBodies[f],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,d),m.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,s){n.exports=a,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function a(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}a.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},a.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;a.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,p=v.id,x=this.smoothingRadius*this.smoothingRadius,S=o,_=0;_!==m;_++){var A=this.particles[_];A.position.vsub(v.position,S),p!==A.id&&S.norm2()<x&&g.push(A)}};var l=new r,u=new r,h=new r,c=new r,d=new r,f=new r;a.prototype.update=function(){for(var v=this.particles.length,g=l,m=this.speedOfSound,p=this.eps,x=0;x!==v;x++){var S=this.particles[x],_=this.neighbors[x];_.length=0,this.getNeighbors(S,_),_.push(this.particles[x]);for(var A=_.length,D=0,N=0;N!==A;N++){S.position.vsub(_[N].position,g);var P=g.norm(),E=this.w(P);D+=_[N].mass*E}this.densities[x]=D,this.pressures[x]=m*m*(this.densities[x]-this.density)}for(var y=u,b=h,B=c,U=d,X=f,x=0;x!==v;x++){var q=this.particles[x];y.set(0,0,0),b.set(0,0,0);for(var J,O,_=this.neighbors[x],A=_.length,N=0;N!==A;N++){var L=_[N];q.position.vsub(L.position,U);var Q=U.norm();J=-L.mass*(this.pressures[x]/(this.densities[x]*this.densities[x]+p)+this.pressures[N]/(this.densities[N]*this.densities[N]+p)),this.gradw(U,B),B.mult(J,B),y.vadd(B,y),L.velocity.vsub(q.velocity,X),X.mult(1/(1e-4+this.densities[x]*this.densities[N])*this.viscosity*L.mass,X),O=this.nablaw(Q),X.mult(O,X),b.vadd(X,b)}b.mult(q.mass,b),y.mult(q.mass,y),q.force.vadd(b,q.force),q.force.vadd(y,q.force)}},a.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},a.prototype.gradw=function(v,g){var m=v.norm(),p=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),g)},a.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(x,S,_){_=_||{},this.restLength=typeof _.restLength=="number"?_.restLength:1,this.stiffness=_.stiffness||100,this.damping=_.damping||1,this.bodyA=x,this.bodyB=S,this.localAnchorA=new r,this.localAnchorB=new r,_.localAnchorA&&this.localAnchorA.copy(_.localAnchorA),_.localAnchorB&&this.localAnchorB.copy(_.localAnchorB),_.worldAnchorA&&this.setWorldAnchorA(_.worldAnchorA),_.worldAnchorB&&this.setWorldAnchorB(_.worldAnchorB)}a.prototype.setWorldAnchorA=function(x){this.bodyA.pointToLocalFrame(x,this.localAnchorA)},a.prototype.setWorldAnchorB=function(x){this.bodyB.pointToLocalFrame(x,this.localAnchorB)},a.prototype.getWorldAnchorA=function(x){this.bodyA.pointToWorldFrame(this.localAnchorA,x)},a.prototype.getWorldAnchorB=function(x){this.bodyB.pointToWorldFrame(this.localAnchorB,x)};var o=new r,l=new r,u=new r,h=new r,c=new r,d=new r,f=new r,v=new r,g=new r,m=new r,p=new r;a.prototype.applyForce=function(){var x=this.stiffness,S=this.damping,_=this.restLength,A=this.bodyA,D=this.bodyB,N=o,P=l,E=u,y=h,b=p,B=c,U=d,X=f,q=v,J=g,O=m;this.getWorldAnchorA(B),this.getWorldAnchorB(U),B.vsub(A.position,X),U.vsub(D.position,q),U.vsub(B,N);var L=N.norm();P.copy(N),P.normalize(),D.velocity.vsub(A.velocity,E),D.angularVelocity.cross(q,b),E.vadd(b,E),A.angularVelocity.cross(X,b),E.vsub(b,E),P.mult(-x*(L-_)-S*E.dot(P),y),A.force.vsub(y,A.force),D.force.vadd(y,D.force),X.cross(y,J),q.cross(y,O),A.torque.vsub(J,A.torque),D.torque.vadd(O,D.torque)}},{"../math/Vec3":30}],36:[function(e,n,s){var r=e("../math/Vec3"),a=e("../math/Transform"),o=e("../collision/RaycastResult"),l=e("../utils/Utils");n.exports=u;function u(d){d=l.defaults(d,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new a,this.isInContact=!1}var c=new r,h=new r,c=new r;u.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var v=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,h),d.getVelocityAtWorldPoint(h,c);var g=f.hitNormalWorld.dot(c);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,s){n.exports=l;var r=e("./Shape"),a=e("../math/Vec3"),o=e("./ConvexPolyhedron");function l(c){r.call(this),this.type=r.types.BOX,this.halfExtents=c,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var c=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,v=a,g=[new v(-c,-d,-f),new v(c,-d,-f),new v(c,d,-f),new v(-c,d,-f),new v(-c,-d,f),new v(c,-d,f),new v(c,d,f),new v(-c,d,f)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var p=new o(g,m);this.convexPolyhedronRepresentation=p,p.material=this.material},l.prototype.calculateLocalInertia=function(c,d){return d=d||new a,l.calculateInertia(this.halfExtents,c,d),d},l.calculateInertia=function(c,d,f){var v=c;f.x=1/12*d*(2*v.y*2*v.y+2*v.z*2*v.z),f.y=1/12*d*(2*v.x*2*v.x+2*v.z*2*v.z),f.z=1/12*d*(2*v.y*2*v.y+2*v.x*2*v.x)},l.prototype.getSideNormals=function(c,d){var f=c,v=this.halfExtents;if(f[0].set(v.x,0,0),f[1].set(0,v.y,0),f[2].set(0,0,v.z),f[3].set(-v.x,0,0),f[4].set(0,-v.y,0),f[5].set(0,0,-v.z),d!==void 0)for(var g=0;g!==f.length;g++)d.vmult(f[g],f[g]);return f},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var u=new a;new a,l.prototype.forEachWorldCorner=function(c,d,f){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)u.set(g[m][0],g[m][1],g[m][2]),d.vmult(u,u),c.vadd(u,u),f(u.x,u.y,u.z)};var h=[new a,new a,new a,new a,new a,new a,new a,new a];l.prototype.calculateWorldAABB=function(c,d,f,v){var g=this.halfExtents;h[0].set(g.x,g.y,g.z),h[1].set(-g.x,g.y,g.z),h[2].set(-g.x,-g.y,g.z),h[3].set(-g.x,-g.y,-g.z),h[4].set(g.x,-g.y,-g.z),h[5].set(g.x,g.y,-g.z),h[6].set(-g.x,g.y,-g.z),h[7].set(g.x,-g.y,g.z);var m=h[0];d.vmult(m,m),c.vadd(m,m),v.copy(m),f.copy(m);for(var p=1;p<8;p++){var m=h[p];d.vmult(m,m),c.vadd(m,m);var x=m.x,S=m.y,_=m.z;x>v.x&&(v.x=x),S>v.y&&(v.y=S),_>v.z&&(v.z=_),x<f.x&&(f.x=x),S<f.y&&(f.y=S),_<f.z&&(f.z=_)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,s){n.exports=l;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function l(F,K,z){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=F||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=K||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=z?z.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l;var u=new a;l.prototype.computeEdges=function(){var F=this.faces,K=this.vertices;K.length;var z=this.uniqueEdges;z.length=0;for(var T=u,C=0;C!==F.length;C++)for(var k=F[C],j=k.length,et=0;et!==j;et++){var G=(et+1)%j;K[k[et]].vsub(K[k[G]],T),T.normalize();for(var rt=!1,mt=0;mt!==z.length;mt++)if(z[mt].almostEquals(T)||z[mt].almostEquals(T)){rt=!0;break}rt||z.push(T.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var F=0;F<this.faces.length;F++){for(var K=0;K<this.faces[F].length;K++)if(!this.vertices[this.faces[F][K]])throw new Error("Vertex "+this.faces[F][K]+" not found!");var z=this.faceNormals[F]||new a;this.getFaceNormal(F,z),z.negate(z),this.faceNormals[F]=z;var T=this.vertices[this.faces[F][0]];if(z.dot(T)<0){console.error(".faceNormals["+F+"] = Vec3("+z.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var K=0;K<this.faces[F].length;K++)console.warn(".vertices["+this.faces[F][K]+"] = Vec3("+this.vertices[this.faces[F][K]].toString()+")")}}};var h=new a,c=new a;l.computeNormal=function(F,K,z,T){K.vsub(F,c),z.vsub(K,h),h.cross(c,T),T.isZero()||T.normalize()},l.prototype.getFaceNormal=function(F,K){var z=this.faces[F],T=this.vertices[z[0]],C=this.vertices[z[1]],k=this.vertices[z[2]];return l.computeNormal(T,C,k,K)};var d=new a;l.prototype.clipAgainstHull=function(F,K,z,T,C,k,j,et,G){for(var rt=d,mt=-1,Mt=-Number.MAX_VALUE,Et=0;Et<z.faces.length;Et++){rt.copy(z.faceNormals[Et]),C.vmult(rt,rt);var I=rt.dot(k);I>Mt&&(Mt=I,mt=Et)}for(var ft=[],ut=z.faces[mt],Xt=ut.length,xt=0;xt<Xt;xt++){var ne=z.vertices[ut[xt]],vt=new a;vt.copy(ne),C.vmult(vt,vt),T.vadd(vt,vt),ft.push(vt)}mt>=0&&this.clipFaceAgainstHull(k,F,K,ft,j,et,G)};var f=new a,v=new a,g=new a,m=new a,p=new a,x=new a;l.prototype.findSeparatingAxis=function(F,K,z,T,C,k,j,et){var G=f,rt=v,mt=g,Mt=m,Et=p,I=x,ft=Number.MAX_VALUE,ut=this;if(ut.uniqueAxes)for(var xt=0;xt!==ut.uniqueAxes.length;xt++){z.vmult(ut.uniqueAxes[xt],G);var vt=ut.testSepAxis(G,F,K,z,T,C);if(vt===!1)return!1;vt<ft&&(ft=vt,k.copy(G))}else for(var Xt=j?j.length:ut.faces.length,xt=0;xt<Xt;xt++){var ne=j?j[xt]:xt;G.copy(ut.faceNormals[ne]),z.vmult(G,G);var vt=ut.testSepAxis(G,F,K,z,T,C);if(vt===!1)return!1;vt<ft&&(ft=vt,k.copy(G))}if(F.uniqueAxes)for(var xt=0;xt!==F.uniqueAxes.length;xt++){C.vmult(F.uniqueAxes[xt],rt);var vt=ut.testSepAxis(rt,F,K,z,T,C);if(vt===!1)return!1;vt<ft&&(ft=vt,k.copy(rt))}else for(var R=et?et.length:F.faces.length,xt=0;xt<R;xt++){var ne=et?et[xt]:xt;rt.copy(F.faceNormals[ne]),C.vmult(rt,rt);var vt=ut.testSepAxis(rt,F,K,z,T,C);if(vt===!1)return!1;vt<ft&&(ft=vt,k.copy(rt))}for(var M=0;M!==ut.uniqueEdges.length;M++){z.vmult(ut.uniqueEdges[M],Mt);for(var Y=0;Y!==F.uniqueEdges.length;Y++)if(C.vmult(F.uniqueEdges[Y],Et),Mt.cross(Et,I),!I.almostZero()){I.normalize();var ct=ut.testSepAxis(I,F,K,z,T,C);if(ct===!1)return!1;ct<ft&&(ft=ct,k.copy(I))}}return T.vsub(K,mt),mt.dot(k)>0&&k.negate(k),!0};var S=[],_=[];l.prototype.testSepAxis=function(F,K,z,T,C,k){var j=this;l.project(j,F,z,T,S),l.project(K,F,C,k,_);var et=S[0],G=S[1],rt=_[0],mt=_[1],Mt=et-mt,Et=rt-G,I=Mt<Et?Mt:Et;return I};var A=new a,D=new a;l.prototype.calculateLocalInertia=function(F,K){this.computeLocalAABB(A,D);var z=D.x-A.x,T=D.y-A.y,C=D.z-A.z;K.x=1/12*F*(2*T*2*T+2*C*2*C),K.y=1/12*F*(2*z*2*z+2*C*2*C),K.z=1/12*F*(2*T*2*T+2*z*2*z)},l.prototype.getPlaneConstantOfFace=function(F){var K=this.faces[F],z=this.faceNormals[F],T=this.vertices[K[0]],C=-z.dot(T);return C};var N=new a,P=new a,E=new a,y=new a,b=new a,B=new a,U=new a,X=new a;l.prototype.clipFaceAgainstHull=function(F,K,z,T,C,k,j){for(var et=N,G=P,rt=E,mt=y,Mt=b,Et=B,I=U,ft=X,ut=this,Xt=[],xt=T,ne=Xt,vt=-1,R=Number.MAX_VALUE,M=0;M<ut.faces.length;M++){et.copy(ut.faceNormals[M]),z.vmult(et,et);var Y=et.dot(F);Y<R&&(R=Y,vt=M)}if(!(vt<0)){var ct=ut.faces[vt];ct.connectedFaces=[];for(var ht=0;ht<ut.faces.length;ht++)for(var ot=0;ot<ut.faces[ht].length;ot++)ct.indexOf(ut.faces[ht][ot])!==-1&&ht!==vt&&ct.connectedFaces.indexOf(ht)===-1&&ct.connectedFaces.push(ht);xt.length;for(var wt=ct.length,bt=0;bt<wt;bt++){var Ft=ut.vertices[ct[bt]],he=ut.vertices[ct[(bt+1)%wt]];Ft.vsub(he,G),rt.copy(G),z.vmult(rt,rt),K.vadd(rt,rt),mt.copy(this.faceNormals[vt]),z.vmult(mt,mt),K.vadd(mt,mt),rt.cross(mt,Mt),Mt.negate(Mt),Et.copy(Ft),z.vmult(Et,Et),K.vadd(Et,Et),-Et.dot(Mt);var Zt;{var St=ct.connectedFaces[bt];I.copy(this.faceNormals[St]);var Gt=this.getPlaneConstantOfFace(St);ft.copy(I),z.vmult(ft,ft);var Zt=Gt-ft.dot(K)}for(this.clipFaceAgainstPlane(xt,ne,ft,Zt);xt.length;)xt.shift();for(;ne.length;)xt.push(ne.shift())}I.copy(this.faceNormals[vt]);var Gt=this.getPlaneConstantOfFace(vt);ft.copy(I),z.vmult(ft,ft);for(var Zt=Gt-ft.dot(K),ht=0;ht<xt.length;ht++){var $t=ft.dot(xt[ht])+Zt;if($t<=C&&(console.log("clamped: depth="+$t+" to minDist="+(C+"")),$t=C),$t<=k){var Wt=xt[ht];if($t<=0){var ue={point:Wt,normal:ft,depth:$t};j.push(ue)}}}}},l.prototype.clipFaceAgainstPlane=function(F,K,z,T){var C,k,j=F.length;if(j<2)return K;var et=F[F.length-1],G=F[0];C=z.dot(et)+T;for(var rt=0;rt<j;rt++){if(G=F[rt],k=z.dot(G)+T,C<0)if(k<0){var mt=new a;mt.copy(G),K.push(mt)}else{var mt=new a;et.lerp(G,C/(C-k),mt),K.push(mt)}else if(k<0){var mt=new a;et.lerp(G,C/(C-k),mt),K.push(mt),K.push(G)}et=G,C=k}return K},l.prototype.computeWorldVertices=function(F,K){for(var z=this.vertices.length;this.worldVertices.length<z;)this.worldVertices.push(new a);for(var T=this.vertices,C=this.worldVertices,k=0;k!==z;k++)K.vmult(T[k],C[k]),F.vadd(C[k],C[k]);this.worldVerticesNeedsUpdate=!1},new a,l.prototype.computeLocalAABB=function(F,K){var z=this.vertices.length,T=this.vertices;F.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),K.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var C=0;C<z;C++){var k=T[C];k.x<F.x?F.x=k.x:k.x>K.x&&(K.x=k.x),k.y<F.y?F.y=k.y:k.y>K.y&&(K.y=k.y),k.z<F.z?F.z=k.z:k.z>K.z&&(K.z=k.z)}},l.prototype.computeWorldFaceNormals=function(F){for(var K=this.faceNormals.length;this.worldFaceNormals.length<K;)this.worldFaceNormals.push(new a);for(var z=this.faceNormals,T=this.worldFaceNormals,C=0;C!==K;C++)F.vmult(z[C],T[C]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var F=0,K=this.vertices,z=0,T=K.length;z!==T;z++){var C=K[z].norm2();C>F&&(F=C)}this.boundingSphereRadius=Math.sqrt(F)};var q=new a;l.prototype.calculateWorldAABB=function(F,K,z,T){for(var C=this.vertices.length,k=this.vertices,j,et,G,rt,mt,Mt,Et=0;Et<C;Et++){q.copy(k[Et]),K.vmult(q,q),F.vadd(q,q);var I=q;I.x<j||j===void 0?j=I.x:(I.x>rt||rt===void 0)&&(rt=I.x),I.y<et||et===void 0?et=I.y:(I.y>mt||mt===void 0)&&(mt=I.y),I.z<G||G===void 0?G=I.z:(I.z>Mt||Mt===void 0)&&(Mt=I.z)}z.set(j,et,G),T.set(rt,mt,Mt)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(F){F=F||new a;for(var K=this.vertices.length,z=this.vertices,T=0;T<K;T++)F.vadd(z[T],F);return F.mult(1/K,F),F},l.prototype.transformAllPoints=function(F,K){var z=this.vertices.length,T=this.vertices;if(K){for(var C=0;C<z;C++){var k=T[C];K.vmult(k,k)}for(var C=0;C<this.faceNormals.length;C++){var k=this.faceNormals[C];K.vmult(k,k)}}if(F)for(var C=0;C<z;C++){var k=T[C];k.vadd(F,k)}};var J=new a,O=new a,L=new a;l.prototype.pointIsInside=function(F){var K=this.vertices.length,z=this.vertices,T=this.faces,C=this.faceNormals,k=null,j=this.faces.length,et=J;this.getAveragePointLocal(et);for(var G=0;G<j;G++){this.faces[G].length;var K=C[G],rt=z[T[G][0]],mt=O;F.vsub(rt,mt);var Mt=K.dot(mt),Et=L;et.vsub(rt,Et);var I=K.dot(Et);if(Mt<0&&I>0||Mt>0&&I<0)return!1}return k?1:-1},new a;var Q=new a,$=new a;l.project=function(F,K,z,T,C){var k=F.vertices.length,j=Q,et=0,G=0,rt=$,mt=F.vertices;rt.setZero(),o.vectorToLocalFrame(z,T,K,j),o.pointToLocalFrame(z,T,rt,rt);var Mt=rt.dot(j);G=et=mt[0].dot(j);for(var Et=1;Et<k;Et++){var I=mt[Et].dot(j);I>et&&(et=I),I<G&&(G=I)}if(G-=Mt,et-=Mt,G>et){var ft=G;G=et,et=ft}C[0]=et,C[1]=G}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,s){n.exports=l;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function l(u,h,c,d){var f=d,v=[],g=[],m=[],p=[],x=[],S=Math.cos,_=Math.sin;v.push(new a(h*S(0),h*_(0),-c*.5)),p.push(0),v.push(new a(u*S(0),u*_(0),c*.5)),x.push(1);for(var A=0;A<f;A++){var D=2*Math.PI/f*(A+1),N=2*Math.PI/f*(A+.5);A<f-1?(v.push(new a(h*S(D),h*_(D),-c*.5)),p.push(2*A+2),v.push(new a(u*S(D),u*_(D),c*.5)),x.push(2*A+3),m.push([2*A+2,2*A+3,2*A+1,2*A])):m.push([0,1,2*A+1,2*A]),(f%2===1||A<f/2)&&g.push(new a(S(N),_(N),0))}m.push(x),g.push(new a(0,0,1));for(var P=[],A=0;A<p.length;A++)P.push(p[p.length-A-1]);m.push(P),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}l.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,s){var r=e("./Shape"),a=e("./ConvexPolyhedron"),o=e("../math/Vec3"),l=e("../utils/Utils");n.exports=u;function u(h,c){c=l.defaults(c,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=c.maxValue,this.minValue=c.minValue,this.elementSize=c.elementSize,c.minValue===null&&this.updateMinValue(),c.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new a,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}u.prototype=new r,u.prototype.update=function(){this._cachedPillars={}},u.prototype.updateMinValue=function(){for(var h=this.data,c=h[0][0],d=0;d!==h.length;d++)for(var f=0;f!==h[d].length;f++){var v=h[d][f];v<c&&(c=v)}this.minValue=c},u.prototype.updateMaxValue=function(){for(var h=this.data,c=h[0][0],d=0;d!==h.length;d++)for(var f=0;f!==h[d].length;f++){var v=h[d][f];v>c&&(c=v)}this.maxValue=c},u.prototype.setHeightValueAtIndex=function(h,c,d){var f=this.data;f[h][c]=d,this.clearCachedConvexTrianglePillar(h,c,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,c,!0),this.clearCachedConvexTrianglePillar(h-1,c,!1)),c>0&&(this.clearCachedConvexTrianglePillar(h,c-1,!0),this.clearCachedConvexTrianglePillar(h,c-1,!1)),c>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,c-1,!0)},u.prototype.getRectMinMax=function(h,c,d,f,v){v=v||[];for(var g=this.data,m=this.minValue,p=h;p<=d;p++)for(var x=c;x<=f;x++){var S=g[p][x];S>m&&(m=S)}v[0]=this.minValue,v[1]=m},u.prototype.getIndexOfPosition=function(h,c,d,f){var v=this.elementSize,g=this.data,m=Math.floor(h/v),p=Math.floor(c/v);return d[0]=m,d[1]=p,f&&(m<0&&(m=0),p<0&&(p=0),m>=g.length-1&&(m=g.length-1),p>=g[0].length-1&&(p=g[0].length-1)),!(m<0||p<0||m>=g.length-1||p>=g[0].length-1)},u.prototype.getHeightAt=function(h,c,d){var f=[];this.getIndexOfPosition(h,c,f,d);var v=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,v),(v[0]+v[1])/2},u.prototype.getCacheConvexTrianglePillarKey=function(h,c,d){return h+"_"+c+"_"+(d?1:0)},u.prototype.getCachedConvexTrianglePillar=function(h,c,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,c,d)]},u.prototype.setCachedConvexTrianglePillar=function(h,c,d,f,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,c,d)]={convex:f,offset:v}},u.prototype.clearCachedConvexTrianglePillar=function(h,c,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,c,d)]},u.prototype.getConvexTrianglePillar=function(h,c,d){var f=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(h,c,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new a,v=new o,this.pillarConvex=f,this.pillarOffset=v}var g=this.data,m=this.elementSize,p=f.faces;f.vertices.length=6;for(var x=0;x<6;x++)f.vertices[x]||(f.vertices[x]=new o);p.length=5;for(var x=0;x<5;x++)p[x]||(p[x]=[]);var S=f.vertices,_=(Math.min(g[h][c],g[h+1][c],g[h][c+1],g[h+1][c+1])-this.minValue)/2+this.minValue;d?(v.set((h+.75)*m,(c+.75)*m,_),S[0].set(.25*m,.25*m,g[h+1][c+1]-_),S[1].set(-.75*m,.25*m,g[h][c+1]-_),S[2].set(.25*m,-.75*m,g[h+1][c]-_),S[3].set(.25*m,.25*m,-_-1),S[4].set(-.75*m,.25*m,-_-1),S[5].set(.25*m,-.75*m,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(v.set((h+.25)*m,(c+.25)*m,_),S[0].set(-.25*m,-.25*m,g[h][c]-_),S[1].set(.75*m,-.25*m,g[h+1][c]-_),S[2].set(-.25*m,.75*m,g[h][c+1]-_),S[3].set(-.25*m,-.25*m,-_-1),S[4].set(.75*m,-.25*m,-_-1),S[5].set(-.25*m,.75*m,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,c,d,f,v)},u.prototype.calculateLocalInertia=function(h,c){return c=c||new o,c.set(0,0,0),c},u.prototype.volume=function(){return Number.MAX_VALUE},u.prototype.calculateWorldAABB=function(h,c,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},u.prototype.updateBoundingSphereRadius=function(){var h=this.data,c=this.elementSize;this.boundingSphereRadius=new o(h.length*c,h[0].length*c,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,u){return u=u||new a,u.set(0,0,0),u},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(l,u,h,c){h.copy(l),c.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new a,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(u){var h=this.worldNormal;h.set(0,0,1),u.vmult(h,h),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(u,h){return h=h||new a,h},o.prototype.volume=function(){return Number.MAX_VALUE};var l=new a;o.prototype.calculateWorldAABB=function(u,h,c,d){l.set(0,0,1),h.vmult(l,l);var f=Number.MAX_VALUE;c.set(-f,-f,-f),d.set(f,f,f),l.x===1&&(d.x=u.x),l.y===1&&(d.y=u.y),l.z===1&&(d.z=u.z),l.x===-1&&(c.x=u.x),l.y===-1&&(c.y=u.y),l.z===-1&&(c.z=u.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,s){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(a,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(l){if(r.call(this),this.radius=l!==void 0?Number(l):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,u){u=u||new a;var h=2*l*this.radius*this.radius/5;return u.x=h,u.y=h,u.z=h,u},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(l,u,h,c){for(var d=this.radius,f=["x","y","z"],v=0;v<f.length;v++){var g=f[v];h[g]=l[g]-d,c[g]=l[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,s){n.exports=h;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),l=e("../collision/AABB"),u=e("../utils/Octree");function h(P,E){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(P),this.indices=new Int16Array(E),this.normals=new Float32Array(E.length),this.aabb=new l,this.edges=null,this.scale=new a(1,1,1),this.tree=new u,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new r,h.prototype.constructor=h;var c=new a;h.prototype.updateTree=function(){var P=this.tree;P.reset(),P.aabb.copy(this.aabb);var E=this.scale;P.aabb.lowerBound.x*=1/E.x,P.aabb.lowerBound.y*=1/E.y,P.aabb.lowerBound.z*=1/E.z,P.aabb.upperBound.x*=1/E.x,P.aabb.upperBound.y*=1/E.y,P.aabb.upperBound.z*=1/E.z;for(var y=new l,b=new a,B=new a,U=new a,X=[b,B,U],q=0;q<this.indices.length/3;q++){var J=q*3;this._getUnscaledVertex(this.indices[J],b),this._getUnscaledVertex(this.indices[J+1],B),this._getUnscaledVertex(this.indices[J+2],U),y.setFromPoints(X),P.insert(y,q)}P.removeEmptyNodes()};var d=new l;h.prototype.getTrianglesInAABB=function(P,E){d.copy(P);var y=this.scale,b=y.x,B=y.y,U=y.z,X=d.lowerBound,q=d.upperBound;return X.x/=b,X.y/=B,X.z/=U,q.x/=b,q.y/=B,q.z/=U,this.tree.aabbQuery(d,E)},h.prototype.setScale=function(P){var E=this.scale.x===this.scale.y===this.scale.z,y=P.x===P.y===P.z;E&&y||this.updateNormals(),this.scale.copy(P),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var P=c,E=this.normals,y=0;y<this.indices.length/3;y++){var b=y*3,B=this.indices[b],U=this.indices[b+1],X=this.indices[b+2];this.getVertex(B,p),this.getVertex(U,x),this.getVertex(X,S),h.computeNormal(x,p,S,P),E[b]=P.x,E[b+1]=P.y,E[b+2]=P.z}},h.prototype.updateEdges=function(){for(var P={},E=function(J,O){var L=B<U?B+"_"+U:U+"_"+B;P[L]=!0},y=0;y<this.indices.length/3;y++){var b=y*3,B=this.indices[b],U=this.indices[b+1];this.indices[b+2],E(),E(),E()}var X=Object.keys(P);this.edges=new Int16Array(X.length*2);for(var y=0;y<X.length;y++){var q=X[y].split("_");this.edges[2*y]=parseInt(q[0],10),this.edges[2*y+1]=parseInt(q[1],10)}},h.prototype.getEdgeVertex=function(P,E,y){var b=this.edges[P*2+(E?1:0)];this.getVertex(b,y)};var f=new a,v=new a;h.prototype.getEdgeVector=function(P,E){var y=f,b=v;this.getEdgeVertex(P,0,y),this.getEdgeVertex(P,1,b),b.vsub(y,E)};var g=new a,m=new a;h.computeNormal=function(P,E,y,b){E.vsub(P,m),y.vsub(E,g),g.cross(m,b),b.isZero()||b.normalize()};var p=new a,x=new a,S=new a;h.prototype.getVertex=function(P,E){var y=this.scale;return this._getUnscaledVertex(P,E),E.x*=y.x,E.y*=y.y,E.z*=y.z,E},h.prototype._getUnscaledVertex=function(P,E){var y=P*3,b=this.vertices;return E.set(b[y],b[y+1],b[y+2])},h.prototype.getWorldVertex=function(P,E,y,b){return this.getVertex(P,b),o.pointToWorldFrame(E,y,b,b),b},h.prototype.getTriangleVertices=function(P,E,y,b){var B=P*3;this.getVertex(this.indices[B],E),this.getVertex(this.indices[B+1],y),this.getVertex(this.indices[B+2],b)},h.prototype.getNormal=function(P,E){var y=P*3;return E.set(this.normals[y],this.normals[y+1],this.normals[y+2])};var _=new l;h.prototype.calculateLocalInertia=function(P,E){this.computeLocalAABB(_);var y=_.upperBound.x-_.lowerBound.x,b=_.upperBound.y-_.lowerBound.y,B=_.upperBound.z-_.lowerBound.z;return E.set(1/12*P*(2*b*2*b+2*B*2*B),1/12*P*(2*y*2*y+2*B*2*B),1/12*P*(2*b*2*b+2*y*2*y))};var A=new a;h.prototype.computeLocalAABB=function(P){var E=P.lowerBound,y=P.upperBound,b=this.vertices.length;this.vertices;var B=A;this.getVertex(0,B),E.copy(B),y.copy(B);for(var U=0;U!==b;U++)this.getVertex(U,B),B.x<E.x?E.x=B.x:B.x>y.x&&(y.x=B.x),B.y<E.y?E.y=B.y:B.y>y.y&&(y.y=B.y),B.z<E.z?E.z=B.z:B.z>y.z&&(y.z=B.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var P=0,E=this.vertices,y=new a,b=0,B=E.length/3;b!==B;b++){this.getVertex(b,y);var U=y.norm2();U>P&&(P=U)}this.boundingSphereRadius=Math.sqrt(P)},new a;var D=new o,N=new l;h.prototype.calculateWorldAABB=function(P,E,y,b){var B=D,U=N;B.position=P,B.quaternion=E,this.aabb.toWorldFrame(B,U),y.copy(U.lowerBound),b.copy(U.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(P,E,y,b,B){P=P||1,E=E||.5,y=y||8,b=b||6,B=B||Math.PI*2;for(var U=[],X=[],q=0;q<=y;q++)for(var J=0;J<=b;J++){var O=J/b*B,L=q/y*Math.PI*2,Q=(P+E*Math.cos(L))*Math.cos(O),$=(P+E*Math.cos(L))*Math.sin(O),F=E*Math.sin(L);U.push(Q,$,F)}for(var q=1;q<=y;q++)for(var J=1;J<=b;J++){var K=(b+1)*q+J-1,z=(b+1)*(q-1)+J-1,T=(b+1)*(q-1)+J,C=(b+1)*q+J;X.push(K,z,C),X.push(z,T,C)}return new h(U,X)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,s){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function a(){r.call(this),this.iterations=10,this.tolerance=1e-7}a.prototype=new r;var o=[],l=[],u=[];a.prototype.solve=function(h,c){var d=0,f=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,p=c.bodies,x=p.length,S=h,_,A,D,N,P,E;if(m!==0)for(var y=0;y!==x;y++)p[y].updateSolveMassProperties();var b=l,B=u,U=o;b.length=m,B.length=m,U.length=m;for(var y=0;y!==m;y++){var X=g[y];U[y]=0,B[y]=X.computeB(S),b[y]=1/X.computeC()}if(m!==0){for(var y=0;y!==x;y++){var q=p[y],J=q.vlambda,O=q.wlambda;J.set(0,0,0),O&&O.set(0,0,0)}for(d=0;d!==f;d++){N=0;for(var L=0;L!==m;L++){var X=g[L];_=B[L],A=b[L],E=U[L],P=X.computeGWlambda(),D=A*(_-P-X.eps*E),E+D<X.minForce?D=X.minForce-E:E+D>X.maxForce&&(D=X.maxForce-E),U[L]+=D,N+=D>0?D:-D,X.addToWlambda(D)}if(N*N<v)break}for(var y=0;y!==x;y++){var q=p[y],Q=q.velocity,$=q.angularVelocity;Q.vadd(q.vlambda,Q),$&&$.vadd(q.wlambda,$)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,s){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(a,o){return 0},r.prototype.addEquation=function(a){a.enabled&&this.equations.push(a)},r.prototype.removeEquation=function(a){var o=this.equations,l=o.indexOf(a);l!==-1&&o.splice(l,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,s){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),a=e("../objects/Body");function o(p){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var l=[],u=[],h={bodies:[]},c=a.STATIC;function d(p){for(var x=p.length,S=0;S!==x;S++){var _=p[S];if(!_.visited&&!(_.body.type&c))return _}return!1}var f=[];function v(p,x,S,_){for(f.push(p),p.visited=!0,x(p,S,_);f.length;)for(var A=f.pop(),D;D=d(A.children);)D.visited=!0,x(D,S,_),f.push(D)}function g(p,x,S){x.push(p.body);for(var _=p.eqs.length,A=0;A!==_;A++){var D=p.eqs[A];S.indexOf(D)===-1&&S.push(D)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(p,x){for(var S=l,_=this.nodePool,A=x.bodies,D=this.equations,N=D.length,P=A.length,E=this.subsolver;_.length<P;)_.push(this.createNode());S.length=P;for(var y=0;y<P;y++)S[y]=_[y];for(var y=0;y!==P;y++){var b=S[y];b.body=A[y],b.children.length=0,b.eqs.length=0,b.visited=!1}for(var B=0;B!==N;B++){var U=D[B],y=A.indexOf(U.bi),X=A.indexOf(U.bj),q=S[y],J=S[X];q.children.push(J),q.eqs.push(U),J.children.push(q),J.eqs.push(U)}var O,L=0,Q=u;E.tolerance=this.tolerance,E.iterations=this.iterations;for(var $=h;O=d(S);){Q.length=0,$.bodies.length=0,v(O,g,$.bodies,Q);var F=Q.length;Q=Q.sort(m);for(var y=0;y!==F;y++)E.addEquation(Q[y]);E.solve(p,$),E.removeAllEquations(),L++}return L};function m(p,x){return x.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,s){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(a,o){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[a]===void 0&&(l[a]=[]),l[a].indexOf(o)===-1&&l[a].push(o),this},hasEventListener:function(a,o){if(this._listeners===void 0)return!1;var l=this._listeners;return l[a]!==void 0&&l[a].indexOf(o)!==-1},removeEventListener:function(a,o){if(this._listeners===void 0)return this;var l=this._listeners;if(l[a]===void 0)return this;var u=l[a].indexOf(o);return u!==-1&&l[a].splice(u,1),this},dispatchEvent:function(a){if(this._listeners===void 0)return this;var o=this._listeners,l=o[a.type];if(l!==void 0){a.target=this;for(var u=0,h=l.length;u<h;u++)l[u].call(this,a)}return this}}},{}],50:[function(e,n,s){var r=e("../collision/AABB"),a=e("../math/Vec3");n.exports=l;function o(c){c=c||{},this.root=c.root||null,this.aabb=c.aabb?c.aabb.clone():new r,this.data=[],this.children=[]}function l(c,d){d=d||{},d.root=null,d.aabb=c,o.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new o,o.prototype.reset=function(c,d){this.children.length=this.data.length=0},o.prototype.insert=function(c,d,f){var v=this.data;if(f=f||0,!this.aabb.contains(c))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(g[p].insert(c,d,f+1))return!0;m&&(g.length=0)}return v.push(d),!0};var u=new a;o.prototype.subdivide=function(){var c=this.aabb,d=c.lowerBound,f=c.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new a(0,0,0)})}),new o({aabb:new r({lowerBound:new a(1,0,0)})}),new o({aabb:new r({lowerBound:new a(1,1,0)})}),new o({aabb:new r({lowerBound:new a(1,1,1)})}),new o({aabb:new r({lowerBound:new a(0,1,1)})}),new o({aabb:new r({lowerBound:new a(0,0,1)})}),new o({aabb:new r({lowerBound:new a(1,0,1)})}),new o({aabb:new r({lowerBound:new a(0,1,0)})})),f.vsub(d,u),u.scale(.5,u);for(var g=this.root||this,m=0;m!==8;m++){var p=v[m];p.root=g;var x=p.aabb.lowerBound;x.x*=u.x,x.y*=u.y,x.z*=u.z,x.vadd(d,x),x.vadd(u,p.aabb.upperBound)}},o.prototype.aabbQuery=function(c,d){this.data,this.children;for(var f=[this];f.length;){var v=f.pop();v.aabb.overlaps(c)&&Array.prototype.push.apply(d,v.data),Array.prototype.push.apply(f,v.children)}return d};var h=new r;o.prototype.rayQuery=function(c,d,f){return c.getAABB(h),h.toLocalFrame(d,h),this.aabbQuery(h,f),f},o.prototype.removeEmptyNodes=function(){for(var c=[this];c.length;){for(var d=c.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(c,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,s){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var a=arguments.length,o=0;o!==a;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,s){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(a,o){if(a>o){var l=o;o=a,a=l}return this.data[a+"-"+o]},r.prototype.set=function(a,o,l){if(a>o){var u=o;o=a,a=u}var h=a+"-"+o;this.get(a,o)||this.data.keys.push(h),this.data[h]=l},r.prototype.reset=function(){for(var a=this.data,o=a.keys;o.length>0;){var l=o.pop();delete a[l]}}},{}],53:[function(e,n,s){function r(){}n.exports=r,r.defaults=function(a,o){a=a||{};for(var l in o)l in a||(a[l]=o[l]);return a}},{}],54:[function(e,n,s){n.exports=o;var r=e("../math/Vec3"),a=e("./Pool");function o(){a.call(this),this.type=r}o.prototype=new a,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,s){n.exports=v;var r=e("../collision/AABB"),a=e("../shapes/Shape"),o=e("../collision/Ray"),l=e("../math/Vec3"),u=e("../math/Transform");e("../shapes/ConvexPolyhedron");var h=e("../math/Quaternion");e("../solver/Solver");var c=e("../utils/Vec3Pool"),d=e("../equations/ContactEquation"),f=e("../equations/FrictionEquation");function v(at){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new c,this.world=at,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(at,dt,gt,_t,Jt,Bt){var At;this.contactPointPool.length?(At=this.contactPointPool.pop(),At.bi=at,At.bj=dt):At=new d(at,dt),At.enabled=at.collisionResponse&&dt.collisionResponse&&gt.collisionResponse&&_t.collisionResponse;var Nt=this.currentContactMaterial;At.restitution=Nt.restitution,At.setSpookParams(Nt.contactEquationStiffness,Nt.contactEquationRelaxation,this.world.dt);var it=gt.material||at.material,Ct=_t.material||dt.material;return it&&Ct&&it.restitution>=0&&Ct.restitution>=0&&(At.restitution=it.restitution*Ct.restitution),At.si=Jt||gt,At.sj=Bt||_t,At},v.prototype.createFrictionEquationsFromContact=function(at,dt){var gt=at.bi,_t=at.bj,Jt=at.si,Bt=at.sj,At=this.world,Nt=this.currentContactMaterial,it=Nt.friction,Ct=Jt.material||gt.material,Dt=Bt.material||_t.material;if(Ct&&Dt&&Ct.friction>=0&&Dt.friction>=0&&(it=Ct.friction*Dt.friction),it>0){var qt=it*At.gravity.length(),Pt=gt.invMass+_t.invMass;Pt>0&&(Pt=1/Pt);var Tt=this.frictionEquationPool,It=Tt.length?Tt.pop():new f(gt,_t,qt*Pt),Kt=Tt.length?Tt.pop():new f(gt,_t,qt*Pt);return It.bi=Kt.bi=gt,It.bj=Kt.bj=_t,It.minForce=Kt.minForce=-qt*Pt,It.maxForce=Kt.maxForce=qt*Pt,It.ri.copy(at.ri),It.rj.copy(at.rj),Kt.ri.copy(at.ri),Kt.rj.copy(at.rj),at.ni.tangents(It.t,Kt.t),It.setSpookParams(Nt.frictionEquationStiffness,Nt.frictionEquationRelaxation,At.dt),Kt.setSpookParams(Nt.frictionEquationStiffness,Nt.frictionEquationRelaxation,At.dt),It.enabled=Kt.enabled=at.enabled,dt.push(It,Kt),!0}return!1};var g=new l,m=new l,p=new l;v.prototype.createFrictionFromAverage=function(at){var dt=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(dt,this.frictionResult)||at===1)){var gt=this.frictionResult[this.frictionResult.length-2],_t=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),p.setZero();var Jt=dt.bi;dt.bj;for(var Bt=0;Bt!==at;Bt++)dt=this.result[this.result.length-1-Bt],dt.bodyA!==Jt?(g.vadd(dt.ni,g),m.vadd(dt.ri,m),p.vadd(dt.rj,p)):(g.vsub(dt.ni,g),m.vadd(dt.rj,m),p.vadd(dt.ri,p));var At=1/at;m.scale(At,gt.ri),p.scale(At,gt.rj),_t.ri.copy(gt.ri),_t.rj.copy(gt.rj),g.normalize(),g.tangents(gt.t,_t.t)}};var x=new l,S=new l,_=new h,A=new h;v.prototype.getContacts=function(at,dt,gt,_t,Jt,Bt,At){this.contactPointPool=Jt,this.frictionEquationPool=At,this.result=_t,this.frictionResult=Bt;for(var Nt=_,it=A,Ct=x,Dt=S,qt=0,Pt=at.length;qt!==Pt;qt++){var Tt=at[qt],It=dt[qt],Kt=null;Tt.material&&It.material&&(Kt=gt.getContactMaterial(Tt.material,It.material)||null);for(var ce=0;ce<Tt.shapes.length;ce++){Tt.quaternion.mult(Tt.shapeOrientations[ce],Nt),Tt.quaternion.vmult(Tt.shapeOffsets[ce],Ct),Ct.vadd(Tt.position,Ct);for(var yt=Tt.shapes[ce],w=0;w<It.shapes.length;w++){It.quaternion.mult(It.shapeOrientations[w],it),It.quaternion.vmult(It.shapeOffsets[w],Dt),Dt.vadd(It.position,Dt);var V=It.shapes[w];if(!(Ct.distanceTo(Dt)>yt.boundingSphereRadius+V.boundingSphereRadius)){var tt=null;yt.material&&V.material&&(tt=gt.getContactMaterial(yt.material,V.material)||null),this.currentContactMaterial=tt||Kt||gt.defaultContactMaterial;var Z=this[yt.type|V.type];Z&&(yt.type<V.type?Z.call(this,yt,V,Ct,Dt,Nt,it,Tt,It,yt,V):Z.call(this,V,yt,Dt,Ct,it,Nt,It,Tt,yt,V))}}}}},v.prototype[a.types.BOX|a.types.BOX]=v.prototype.boxBox=function(at,dt,gt,_t,Jt,Bt,At,Nt){at.convexPolyhedronRepresentation.material=at.material,dt.convexPolyhedronRepresentation.material=dt.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,dt.convexPolyhedronRepresentation.collisionResponse=dt.collisionResponse,this.convexConvex(at.convexPolyhedronRepresentation,dt.convexPolyhedronRepresentation,gt,_t,Jt,Bt,At,Nt,at,dt)},v.prototype[a.types.BOX|a.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(at,dt,gt,_t,Jt,Bt,At,Nt){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexConvex(at.convexPolyhedronRepresentation,dt,gt,_t,Jt,Bt,At,Nt,at,dt)},v.prototype[a.types.BOX|a.types.PARTICLE]=v.prototype.boxParticle=function(at,dt,gt,_t,Jt,Bt,At,Nt){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexParticle(at.convexPolyhedronRepresentation,dt,gt,_t,Jt,Bt,At,Nt,at,dt)},v.prototype[a.types.SPHERE]=v.prototype.sphereSphere=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=this.createContactEquation(At,Nt,at,dt);_t.vsub(gt,it.ni),it.ni.normalize(),it.ri.copy(it.ni),it.rj.copy(it.ni),it.ri.mult(at.radius,it.ri),it.rj.mult(-dt.radius,it.rj),it.ri.vadd(gt,it.ri),it.ri.vsub(At.position,it.ri),it.rj.vadd(_t,it.rj),it.rj.vsub(Nt.position,it.rj),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)};var D=new l,N=new l,P=new l;v.prototype[a.types.PLANE|a.types.TRIMESH]=v.prototype.planeTrimesh=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=new l,Ct=D;Ct.set(0,0,1),Jt.vmult(Ct,Ct);for(var Dt=0;Dt<dt.vertices.length/3;Dt++){dt.getVertex(Dt,it);var qt=new l;qt.copy(it),u.pointToWorldFrame(_t,Bt,qt,it);var Pt=N;it.vsub(gt,Pt);var Tt=Ct.dot(Pt);if(Tt<=0){var It=this.createContactEquation(At,Nt,at,dt);It.ni.copy(Ct);var Kt=P;Ct.scale(Pt.dot(Ct),Kt),it.vsub(Kt,Kt),It.ri.copy(Kt),It.ri.vsub(At.position,It.ri),It.rj.copy(it),It.rj.vsub(Nt.position,It.rj),this.result.push(It),this.createFrictionEquationsFromContact(It,this.frictionResult)}}};var E=new l,y=new l;new l;var b=new l,B=new l,U=new l,X=new l,q=new l,J=new l,O=new l,L=new l,Q=new l,$=new l,F=new l,K=new r,z=[];v.prototype[a.types.SPHERE|a.types.TRIMESH]=v.prototype.sphereTrimesh=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=U,Ct=X,Dt=q,qt=J,Pt=O,Tt=L,It=K,Kt=B,ce=y,yt=z;u.pointToLocalFrame(_t,Bt,gt,Pt);var w=at.radius;It.lowerBound.set(Pt.x-w,Pt.y-w,Pt.z-w),It.upperBound.set(Pt.x+w,Pt.y+w,Pt.z+w),dt.getTrianglesInAABB(It,yt);for(var V=b,tt=at.radius*at.radius,Z=0;Z<yt.length;Z++)for(var H=0;H<3;H++)if(dt.getVertex(dt.indices[yt[Z]*3+H],V),V.vsub(Pt,ce),ce.norm2()<=tt){Kt.copy(V),u.pointToWorldFrame(_t,Bt,Kt,V),V.vsub(gt,ce);var st=this.createContactEquation(At,Nt,at,dt);st.ni.copy(ce),st.ni.normalize(),st.ri.copy(st.ni),st.ri.scale(at.radius,st.ri),st.ri.vadd(gt,st.ri),st.ri.vsub(At.position,st.ri),st.rj.copy(V),st.rj.vsub(Nt.position,st.rj),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}for(var Z=0;Z<yt.length;Z++)for(var H=0;H<3;H++){dt.getVertex(dt.indices[yt[Z]*3+H],it),dt.getVertex(dt.indices[yt[Z]*3+(H+1)%3],Ct),Ct.vsub(it,Dt),Pt.vsub(Ct,Tt);var Rt=Tt.dot(Dt);Pt.vsub(it,Tt);var zt=Tt.dot(Dt);if(zt>0&&Rt<0){Pt.vsub(it,Tt),qt.copy(Dt),qt.normalize(),zt=Tt.dot(qt),qt.scale(zt,Tt),Tt.vadd(it,Tt);var kt=Tt.distanceTo(Pt);if(kt<at.radius){var st=this.createContactEquation(At,Nt,at,dt);Tt.vsub(Pt,st.ni),st.ni.normalize(),st.ni.scale(at.radius,st.ri),u.pointToWorldFrame(_t,Bt,Tt,Tt),Tt.vsub(Nt.position,st.rj),u.vectorToWorldFrame(Bt,st.ni,st.ni),u.vectorToWorldFrame(Bt,st.ri,st.ri),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}}}for(var te=Q,jt=$,Ut=F,de=E,Z=0,ee=yt.length;Z!==ee;Z++){dt.getTriangleVertices(yt[Z],te,jt,Ut),dt.getNormal(yt[Z],de),Pt.vsub(te,Tt);var kt=Tt.dot(de);if(de.scale(kt,Tt),Pt.vsub(Tt,Tt),kt=Tt.distanceTo(Pt),o.pointInTriangle(Tt,te,jt,Ut)&&kt<at.radius){var st=this.createContactEquation(At,Nt,at,dt);Tt.vsub(Pt,st.ni),st.ni.normalize(),st.ni.scale(at.radius,st.ri),u.pointToWorldFrame(_t,Bt,Tt,Tt),Tt.vsub(Nt.position,st.rj),u.vectorToWorldFrame(Bt,st.ni,st.ni),u.vectorToWorldFrame(Bt,st.ri,st.ri),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}}yt.length=0};var T=new l,C=new l;v.prototype[a.types.SPHERE|a.types.PLANE]=v.prototype.spherePlane=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=this.createContactEquation(At,Nt,at,dt);if(it.ni.set(0,0,1),Bt.vmult(it.ni,it.ni),it.ni.negate(it.ni),it.ni.normalize(),it.ni.mult(at.radius,it.ri),gt.vsub(_t,T),it.ni.mult(it.ni.dot(T),C),T.vsub(C,it.rj),-T.dot(it.ni)<=at.radius){var Ct=it.ri,Dt=it.rj;Ct.vadd(gt,Ct),Ct.vsub(At.position,Ct),Dt.vadd(_t,Dt),Dt.vsub(Nt.position,Dt),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)}};var k=new l,j=new l,et=new l;function G(at,dt,gt){for(var _t=null,Jt=at.length,Bt=0;Bt!==Jt;Bt++){var At=at[Bt],Nt=k;at[(Bt+1)%Jt].vsub(At,Nt);var it=j;Nt.cross(dt,it);var Ct=et;gt.vsub(At,Ct);var Dt=it.dot(Ct);if(_t===null||Dt>0&&_t===!0||Dt<=0&&_t===!1){_t===null&&(_t=Dt>0);continue}else return!1}return!0}var rt=new l,mt=new l,Mt=new l,Et=new l,I=[new l,new l,new l,new l,new l,new l],ft=new l,ut=new l,Xt=new l,xt=new l;v.prototype[a.types.SPHERE|a.types.BOX]=v.prototype.sphereBox=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=this.v3pool,Ct=I;gt.vsub(_t,rt),dt.getSideNormals(Ct,Bt);for(var Dt=at.radius,qt=!1,Pt=ut,Tt=Xt,It=xt,Kt=null,ce=0,yt=0,w=0,V=null,tt=0,Z=Ct.length;tt!==Z&&qt===!1;tt++){var H=mt;H.copy(Ct[tt]);var st=H.norm();H.normalize();var Rt=rt.dot(H);if(Rt<st+Dt&&Rt>0){var zt=Mt,kt=Et;zt.copy(Ct[(tt+1)%3]),kt.copy(Ct[(tt+2)%3]);var te=zt.norm(),jt=kt.norm();zt.normalize(),kt.normalize();var Ut=rt.dot(zt),de=rt.dot(kt);if(Ut<te&&Ut>-te&&de<jt&&de>-jt){var ye=Math.abs(Rt-st-Dt);(V===null||ye<V)&&(V=ye,yt=Ut,w=de,Kt=st,Pt.copy(H),Tt.copy(zt),It.copy(kt),ce++)}}}if(ce){qt=!0;var Qt=this.createContactEquation(At,Nt,at,dt);Pt.mult(-Dt,Qt.ri),Qt.ni.copy(Pt),Qt.ni.negate(Qt.ni),Pt.mult(Kt,Pt),Tt.mult(yt,Tt),Pt.vadd(Tt,Pt),It.mult(w,It),Pt.vadd(It,Qt.rj),Qt.ri.vadd(gt,Qt.ri),Qt.ri.vsub(At.position,Qt.ri),Qt.rj.vadd(_t,Qt.rj),Qt.rj.vsub(Nt.position,Qt.rj),this.result.push(Qt),this.createFrictionEquationsFromContact(Qt,this.frictionResult)}for(var ee=it.get(),Ee=ft,_e=0;_e!==2&&!qt;_e++)for(var se=0;se!==2&&!qt;se++)for(var Yt=0;Yt!==2&&!qt;Yt++)if(ee.set(0,0,0),_e?ee.vadd(Ct[0],ee):ee.vsub(Ct[0],ee),se?ee.vadd(Ct[1],ee):ee.vsub(Ct[1],ee),Yt?ee.vadd(Ct[2],ee):ee.vsub(Ct[2],ee),_t.vadd(ee,Ee),Ee.vsub(gt,Ee),Ee.norm2()<Dt*Dt){qt=!0;var Qt=this.createContactEquation(At,Nt,at,dt);Qt.ri.copy(Ee),Qt.ri.normalize(),Qt.ni.copy(Qt.ri),Qt.ri.mult(Dt,Qt.ri),Qt.rj.copy(ee),Qt.ri.vadd(gt,Qt.ri),Qt.ri.vsub(At.position,Qt.ri),Qt.rj.vadd(_t,Qt.rj),Qt.rj.vsub(Nt.position,Qt.rj),this.result.push(Qt),this.createFrictionEquationsFromContact(Qt,this.frictionResult)}it.release(ee),ee=null;for(var we=it.get(),pe=it.get(),Qt=it.get(),Le=it.get(),ye=it.get(),je=Ct.length,_e=0;_e!==je&&!qt;_e++)for(var se=0;se!==je&&!qt;se++)if(_e%3!==se%3){Ct[se].cross(Ct[_e],we),we.normalize(),Ct[_e].vadd(Ct[se],pe),Qt.copy(gt),Qt.vsub(pe,Qt),Qt.vsub(_t,Qt);var Se=Qt.dot(we);we.mult(Se,Le);for(var Yt=0;Yt===_e%3||Yt===se%3;)Yt++;ye.copy(gt),ye.vsub(Le,ye),ye.vsub(pe,ye),ye.vsub(_t,ye);var Xe=Math.abs(Se),qe=ye.norm();if(Xe<Ct[Yt].norm()&&qe<Dt){qt=!0;var me=this.createContactEquation(At,Nt,at,dt);pe.vadd(Le,me.rj),me.rj.copy(me.rj),ye.negate(me.ni),me.ni.normalize(),me.ri.copy(me.rj),me.ri.vadd(_t,me.ri),me.ri.vsub(gt,me.ri),me.ri.normalize(),me.ri.mult(Dt,me.ri),me.ri.vadd(gt,me.ri),me.ri.vsub(At.position,me.ri),me.rj.vadd(_t,me.rj),me.rj.vsub(Nt.position,me.rj),this.result.push(me),this.createFrictionEquationsFromContact(me,this.frictionResult)}}it.release(we,pe,Qt,Le,ye)};var ne=new l,vt=new l,R=new l,M=new l,Y=new l,ct=new l,ht=new l,ot=new l,wt=new l,bt=new l;v.prototype[a.types.SPHERE|a.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=this.v3pool;gt.vsub(_t,ne);for(var Ct=dt.faceNormals,Dt=dt.faces,qt=dt.vertices,Pt=at.radius,Tt=0;Tt!==qt.length;Tt++){var It=qt[Tt],Kt=Y;Bt.vmult(It,Kt),_t.vadd(Kt,Kt);var ce=M;if(Kt.vsub(gt,ce),ce.norm2()<Pt*Pt){w=!0;var yt=this.createContactEquation(At,Nt,at,dt);yt.ri.copy(ce),yt.ri.normalize(),yt.ni.copy(yt.ri),yt.ri.mult(Pt,yt.ri),Kt.vsub(_t,yt.rj),yt.ri.vadd(gt,yt.ri),yt.ri.vsub(At.position,yt.ri),yt.rj.vadd(_t,yt.rj),yt.rj.vsub(Nt.position,yt.rj),this.result.push(yt),this.createFrictionEquationsFromContact(yt,this.frictionResult);return}}for(var w=!1,Tt=0,V=Dt.length;Tt!==V&&w===!1;Tt++){var tt=Ct[Tt],Z=Dt[Tt],H=ct;Bt.vmult(tt,H);var st=ht;Bt.vmult(qt[Z[0]],st),st.vadd(_t,st);var Rt=ot;H.mult(-Pt,Rt),gt.vadd(Rt,Rt);var zt=wt;Rt.vsub(st,zt);var kt=zt.dot(H),te=bt;if(gt.vsub(st,te),kt<0&&te.dot(H)>0){for(var jt=[],Ut=0,de=Z.length;Ut!==de;Ut++){var ee=it.get();Bt.vmult(qt[Z[Ut]],ee),_t.vadd(ee,ee),jt.push(ee)}if(G(jt,H,gt)){w=!0;var yt=this.createContactEquation(At,Nt,at,dt);H.mult(-Pt,yt.ri),H.negate(yt.ni);var Ee=it.get();H.mult(-kt,Ee);var _e=it.get();H.mult(-Pt,_e),gt.vsub(_t,yt.rj),yt.rj.vadd(_e,yt.rj),yt.rj.vadd(Ee,yt.rj),yt.rj.vadd(_t,yt.rj),yt.rj.vsub(Nt.position,yt.rj),yt.ri.vadd(gt,yt.ri),yt.ri.vsub(At.position,yt.ri),it.release(Ee),it.release(_e),this.result.push(yt),this.createFrictionEquationsFromContact(yt,this.frictionResult);for(var Ut=0,se=jt.length;Ut!==se;Ut++)it.release(jt[Ut]);return}else for(var Ut=0;Ut!==Z.length;Ut++){var Yt=it.get(),we=it.get();Bt.vmult(qt[Z[(Ut+1)%Z.length]],Yt),Bt.vmult(qt[Z[(Ut+2)%Z.length]],we),_t.vadd(Yt,Yt),_t.vadd(we,we);var pe=vt;we.vsub(Yt,pe);var Qt=R;pe.unit(Qt);var Le=it.get(),ye=it.get();gt.vsub(Yt,ye);var je=ye.dot(Qt);Qt.mult(je,Le),Le.vadd(Yt,Le);var Se=it.get();if(Le.vsub(gt,Se),je>0&&je*je<pe.norm2()&&Se.norm2()<Pt*Pt){var yt=this.createContactEquation(At,Nt,at,dt);Le.vsub(_t,yt.rj),Le.vsub(gt,yt.ni),yt.ni.normalize(),yt.ni.mult(Pt,yt.ri),yt.rj.vadd(_t,yt.rj),yt.rj.vsub(Nt.position,yt.rj),yt.ri.vadd(gt,yt.ri),yt.ri.vsub(At.position,yt.ri),this.result.push(yt),this.createFrictionEquationsFromContact(yt,this.frictionResult);for(var Ut=0,se=jt.length;Ut!==se;Ut++)it.release(jt[Ut]);it.release(Yt),it.release(we),it.release(Le),it.release(Se),it.release(ye);return}it.release(Yt),it.release(we),it.release(Le),it.release(Se),it.release(ye)}for(var Ut=0,se=jt.length;Ut!==se;Ut++)it.release(jt[Ut])}}},new l,new l,v.prototype[a.types.PLANE|a.types.BOX]=v.prototype.planeBox=function(at,dt,gt,_t,Jt,Bt,At,Nt){dt.convexPolyhedronRepresentation.material=dt.material,dt.convexPolyhedronRepresentation.collisionResponse=dt.collisionResponse,this.planeConvex(at,dt.convexPolyhedronRepresentation,gt,_t,Jt,Bt,At,Nt)};var Ft=new l,he=new l,St=new l,Gt=new l;v.prototype[a.types.PLANE|a.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=Ft,Ct=he;Ct.set(0,0,1),Jt.vmult(Ct,Ct);for(var Dt=0,qt=St,Pt=0;Pt!==dt.vertices.length;Pt++){it.copy(dt.vertices[Pt]),Bt.vmult(it,it),_t.vadd(it,it),it.vsub(gt,qt);var Tt=Ct.dot(qt);if(Tt<=0){var It=this.createContactEquation(At,Nt,at,dt),Kt=Gt;Ct.mult(Ct.dot(qt),Kt),it.vsub(Kt,Kt),Kt.vsub(gt,It.ri),It.ni.copy(Ct),it.vsub(_t,It.rj),It.ri.vadd(gt,It.ri),It.ri.vsub(At.position,It.ri),It.rj.vadd(_t,It.rj),It.rj.vsub(Nt.position,It.rj),this.result.push(It),Dt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(It,this.frictionResult)}}this.enableFrictionReduction&&Dt&&this.createFrictionFromAverage(Dt)};var Zt=new l,$t=new l;v.prototype[a.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(at,dt,gt,_t,Jt,Bt,At,Nt,it,Ct,Dt,qt){var Pt=Zt;if(!(gt.distanceTo(_t)>at.boundingSphereRadius+dt.boundingSphereRadius)&&at.findSeparatingAxis(dt,gt,Jt,_t,Bt,Pt,Dt,qt)){var Tt=[],It=$t;at.clipAgainstHull(gt,Jt,dt,_t,Bt,Pt,-100,100,Tt);for(var Kt=0,ce=0;ce!==Tt.length;ce++){var yt=this.createContactEquation(At,Nt,at,dt,it,Ct),w=yt.ri,V=yt.rj;Pt.negate(yt.ni),Tt[ce].normal.negate(It),It.mult(Tt[ce].depth,It),Tt[ce].point.vadd(It,w),V.copy(Tt[ce].point),w.vsub(gt,w),V.vsub(_t,V),w.vadd(gt,w),w.vsub(At.position,w),V.vadd(_t,V),V.vsub(Nt.position,V),this.result.push(yt),Kt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(yt,this.frictionResult)}this.enableFrictionReduction&&Kt&&this.createFrictionFromAverage(Kt)}};var Wt=new l,ue=new l,ie=new l;v.prototype[a.types.PLANE|a.types.PARTICLE]=v.prototype.planeParticle=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=Wt;it.set(0,0,1),At.quaternion.vmult(it,it);var Ct=ue;_t.vsub(At.position,Ct);var Dt=it.dot(Ct);if(Dt<=0){var qt=this.createContactEquation(Nt,At,dt,at);qt.ni.copy(it),qt.ni.negate(qt.ni),qt.ri.set(0,0,0);var Pt=ie;it.mult(it.dot(_t),Pt),_t.vsub(Pt,Pt),qt.rj.copy(Pt),this.result.push(qt),this.createFrictionEquationsFromContact(qt,this.frictionResult)}};var ge=new l;v.prototype[a.types.PARTICLE|a.types.SPHERE]=v.prototype.sphereParticle=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=ge;it.set(0,0,1),_t.vsub(gt,it);var Ct=it.norm2();if(Ct<=at.radius*at.radius){var Dt=this.createContactEquation(Nt,At,dt,at);it.normalize(),Dt.rj.copy(it),Dt.rj.mult(at.radius,Dt.rj),Dt.ni.copy(it),Dt.ni.negate(Dt.ni),Dt.ri.set(0,0,0),this.result.push(Dt),this.createFrictionEquationsFromContact(Dt,this.frictionResult)}};var W=new h,Lt=new l;new l;var lt=new l,pt=new l,Vt=new l;v.prototype[a.types.PARTICLE|a.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=-1,Ct=lt,Dt=Vt,qt=null,Pt=Lt;if(Pt.copy(_t),Pt.vsub(gt,Pt),Jt.conjugate(W),W.vmult(Pt,Pt),at.pointIsInside(Pt)){at.worldVerticesNeedsUpdate&&at.computeWorldVertices(gt,Jt),at.worldFaceNormalsNeedsUpdate&&at.computeWorldFaceNormals(Jt);for(var Tt=0,It=at.faces.length;Tt!==It;Tt++){var Kt=[at.worldVertices[at.faces[Tt][0]]],ce=at.worldFaceNormals[Tt];_t.vsub(Kt[0],pt);var yt=-ce.dot(pt);(qt===null||Math.abs(yt)<Math.abs(qt))&&(qt=yt,it=Tt,Ct.copy(ce))}if(it!==-1){var w=this.createContactEquation(Nt,At,dt,at);Ct.mult(qt,Dt),Dt.vadd(_t,Dt),Dt.vsub(gt,Dt),w.rj.copy(Dt),Ct.negate(w.ni),w.ri.set(0,0,0);var V=w.ri,tt=w.rj;V.vadd(_t,V),V.vsub(Nt.position,V),tt.vadd(gt,tt),tt.vsub(At.position,tt),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[a.types.BOX|a.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(at,dt,gt,_t,Jt,Bt,At,Nt){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexHeightfield(at.convexPolyhedronRepresentation,dt,gt,_t,Jt,Bt,At,Nt)};var Ot=new l,re=new l,be=[0];v.prototype[a.types.CONVEXPOLYHEDRON|a.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=dt.data,Ct=dt.elementSize,Dt=at.boundingSphereRadius,qt=re,Pt=be,Tt=Ot;u.pointToLocalFrame(_t,Bt,gt,Tt);var It=Math.floor((Tt.x-Dt)/Ct)-1,Kt=Math.ceil((Tt.x+Dt)/Ct)+1,ce=Math.floor((Tt.y-Dt)/Ct)-1,yt=Math.ceil((Tt.y+Dt)/Ct)+1;if(!(Kt<0||yt<0||It>it.length||ce>it[0].length)){It<0&&(It=0),Kt<0&&(Kt=0),ce<0&&(ce=0),yt<0&&(yt=0),It>=it.length&&(It=it.length-1),Kt>=it.length&&(Kt=it.length-1),yt>=it[0].length&&(yt=it[0].length-1),ce>=it[0].length&&(ce=it[0].length-1);var w=[];dt.getRectMinMax(It,ce,Kt,yt,w);var V=w[0],tt=w[1];if(!(Tt.z-Dt>tt||Tt.z+Dt<V))for(var Z=It;Z<Kt;Z++)for(var H=ce;H<yt;H++)dt.getConvexTrianglePillar(Z,H,!1),u.pointToWorldFrame(_t,Bt,dt.pillarOffset,qt),gt.distanceTo(qt)<dt.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.convexConvex(at,dt.pillarConvex,gt,qt,Jt,Bt,At,Nt,null,null,Pt,null),dt.getConvexTrianglePillar(Z,H,!0),u.pointToWorldFrame(_t,Bt,dt.pillarOffset,qt),gt.distanceTo(qt)<dt.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.convexConvex(at,dt.pillarConvex,gt,qt,Jt,Bt,At,Nt,null,null,Pt,null)}};var Re=new l,ae=new l;v.prototype[a.types.SPHERE|a.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(at,dt,gt,_t,Jt,Bt,At,Nt){var it=dt.data,Ct=at.radius,Dt=dt.elementSize,qt=ae,Pt=Re;u.pointToLocalFrame(_t,Bt,gt,Pt);var Tt=Math.floor((Pt.x-Ct)/Dt)-1,It=Math.ceil((Pt.x+Ct)/Dt)+1,Kt=Math.floor((Pt.y-Ct)/Dt)-1,ce=Math.ceil((Pt.y+Ct)/Dt)+1;if(!(It<0||ce<0||Tt>it.length||ce>it[0].length)){Tt<0&&(Tt=0),It<0&&(It=0),Kt<0&&(Kt=0),ce<0&&(ce=0),Tt>=it.length&&(Tt=it.length-1),It>=it.length&&(It=it.length-1),ce>=it[0].length&&(ce=it[0].length-1),Kt>=it[0].length&&(Kt=it[0].length-1);var yt=[];dt.getRectMinMax(Tt,Kt,It,ce,yt);var w=yt[0],V=yt[1];if(!(Pt.z-Ct>V||Pt.z+Ct<w))for(var tt=this.result,Z=Tt;Z<It;Z++)for(var H=Kt;H<ce;H++){var st=tt.length;dt.getConvexTrianglePillar(Z,H,!1),u.pointToWorldFrame(_t,Bt,dt.pillarOffset,qt),gt.distanceTo(qt)<dt.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.sphereConvex(at,dt.pillarConvex,gt,qt,Jt,Bt,At,Nt),dt.getConvexTrianglePillar(Z,H,!0),u.pointToWorldFrame(_t,Bt,dt.pillarOffset,qt),gt.distanceTo(qt)<dt.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.sphereConvex(at,dt.pillarConvex,gt,qt,Jt,Bt,At,Nt);var Rt=tt.length-st;if(Rt>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,s){n.exports=_;var r=e("../shapes/Shape"),a=e("../math/Vec3"),o=e("../math/Quaternion"),l=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var u=e("./Narrowphase"),h=e("../utils/EventTarget"),c=e("../collision/ArrayCollisionMatrix"),d=e("../material/Material"),f=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),p=e("../collision/AABB"),x=e("../collision/Ray"),S=e("../collision/NaiveBroadphase");function _(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new a,this.broadphase=new S,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new u(this),this.collisionMatrix=new c,this.collisionMatrixPrevious=new c,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}_.prototype=new h,new p;var A=new x;if(_.prototype.getContactMaterial=function(L,Q){return this.contactMaterialTable.get(L.id,Q.id)},_.prototype.numObjects=function(){return this.bodies.length},_.prototype.collisionMatrixTick=function(){var L=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=L,this.collisionMatrix.reset()},_.prototype.add=_.prototype.addBody=function(L){this.bodies.indexOf(L)===-1&&(L.index=this.bodies.length,this.bodies.push(L),L.world=this,L.initPosition.copy(L.position),L.initVelocity.copy(L.velocity),L.timeLastSleepy=this.time,L instanceof v&&(L.initAngularVelocity.copy(L.angularVelocity),L.initQuaternion.copy(L.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=L,this.dispatchEvent(this.addBodyEvent))},_.prototype.addConstraint=function(L){this.constraints.push(L)},_.prototype.removeConstraint=function(L){var Q=this.constraints.indexOf(L);Q!==-1&&this.constraints.splice(Q,1)},_.prototype.rayTest=function(L,Q,$){$ instanceof m?this.raycastClosest(L,Q,{skipBackfaces:!0},$):this.raycastAll(L,Q,{skipBackfaces:!0},$)},_.prototype.raycastAll=function(L,Q,$,F){return $.mode=x.ALL,$.from=L,$.to=Q,$.callback=F,A.intersectWorld(this,$)},_.prototype.raycastAny=function(L,Q,$,F){return $.mode=x.ANY,$.from=L,$.to=Q,$.result=F,A.intersectWorld(this,$)},_.prototype.raycastClosest=function(L,Q,$,F){return $.mode=x.CLOSEST,$.from=L,$.to=Q,$.result=F,A.intersectWorld(this,$)},_.prototype.remove=function(L){L.world=null;var Q=this.bodies.length-1,$=this.bodies,F=$.indexOf(L);if(F!==-1){$.splice(F,1);for(var K=0;K!==$.length;K++)$[K].index=K;this.collisionMatrix.setNumObjects(Q),this.removeBodyEvent.body=L,this.dispatchEvent(this.removeBodyEvent)}},_.prototype.removeBody=_.prototype.remove,_.prototype.addMaterial=function(L){this.materials.push(L)},_.prototype.addContactMaterial=function(L){this.contactmaterials.push(L),this.contactMaterialTable.set(L.materials[0].id,L.materials[1].id,L)},typeof performance>"u"&&(performance={}),!performance.now){var D=Date.now();performance.timing&&performance.timing.navigationStart&&(D=performance.timing.navigationStart),performance.now=function(){return Date.now()-D}}var N=new a;_.prototype.step=function(L,Q,$){if($=$||10,Q=Q||0,Q===0)this.internalStep(L),this.time+=L;else{var F=Math.floor((this.time+Q)/L)-Math.floor(this.time/L);F=Math.min(F,$);for(var K=performance.now(),z=0;z!==F&&(this.internalStep(L),!(performance.now()-K>L*1e3));z++);this.time+=Q;for(var T=this.time%L,C=T/L,k=N,j=this.bodies,et=0;et!==j.length;et++){var G=j[et];G.type!==v.STATIC&&G.sleepState!==v.SLEEPING?(G.position.vsub(G.previousPosition,k),k.scale(C,k),G.position.vadd(k,G.interpolatedPosition)):(G.interpolatedPosition.copy(G.position),G.interpolatedQuaternion.copy(G.quaternion))}}};var P={type:"postStep"},E={type:"preStep"},y={type:"collide",body:null,contact:null},b=[],B=[],U=[],X=[];new a,new a,new a,new a,new a,new a,new a,new a,new a,new o;var q=new o,J=new o,O=new a;_.prototype.internalStep=function(L){this.dt=L;var Q=this.contacts,$=U,F=X,K=this.numObjects(),z=this.bodies,T=this.solver,C=this.gravity,k=this.doProfiling,j=this.profile,et=v.DYNAMIC,G,rt=this.constraints,mt=B;C.norm();var Mt=C.x,Et=C.y,I=C.z,ft=0;for(k&&(G=performance.now()),ft=0;ft!==K;ft++){var ut=z[ft];if(ut.type&et){var Xt=ut.force,xt=ut.mass;Xt.x+=xt*Mt,Xt.y+=xt*Et,Xt.z+=xt*I}}for(var ft=0,ne=this.subsystems.length;ft!==ne;ft++)this.subsystems[ft].update();k&&(G=performance.now()),$.length=0,F.length=0,this.broadphase.collisionPairs(this,$,F),k&&(j.broadphase=performance.now()-G);var Zt=rt.length;for(ft=0;ft!==Zt;ft++){var vt=rt[ft];if(!vt.collideConnected)for(var R=$.length-1;R>=0;R-=1)(vt.bodyA===$[R]&&vt.bodyB===F[R]||vt.bodyB===$[R]&&vt.bodyA===F[R])&&($.splice(R,1),F.splice(R,1))}this.collisionMatrixTick(),k&&(G=performance.now());var M=b,Y=Q.length;for(ft=0;ft!==Y;ft++)M.push(Q[ft]);Q.length=0;var ct=this.frictionEquations.length;for(ft=0;ft!==ct;ft++)mt.push(this.frictionEquations[ft]);this.frictionEquations.length=0,this.narrowphase.getContacts($,F,this,Q,M,this.frictionEquations,mt),k&&(j.narrowphase=performance.now()-G),k&&(G=performance.now());for(var ft=0;ft<this.frictionEquations.length;ft++)T.addEquation(this.frictionEquations[ft]);for(var ht=Q.length,ot=0;ot!==ht;ot++){var vt=Q[ot],ut=vt.bi,wt=vt.bj;vt.si,vt.sj;var bt;if(ut.material&&wt.material?bt=this.getContactMaterial(ut.material,wt.material)||this.defaultContactMaterial:bt=this.defaultContactMaterial,bt.friction,ut.material&&wt.material&&(ut.material.friction>=0&&wt.material.friction>=0&&ut.material.friction*wt.material.friction,ut.material.restitution>=0&&wt.material.restitution>=0&&(vt.restitution=ut.material.restitution*wt.material.restitution)),T.addEquation(vt),ut.allowSleep&&ut.type===v.DYNAMIC&&ut.sleepState===v.SLEEPING&&wt.sleepState===v.AWAKE&&wt.type!==v.STATIC){var Ft=wt.velocity.norm2()+wt.angularVelocity.norm2(),he=Math.pow(wt.sleepSpeedLimit,2);Ft>=he*2&&(ut._wakeUpAfterNarrowphase=!0)}if(wt.allowSleep&&wt.type===v.DYNAMIC&&wt.sleepState===v.SLEEPING&&ut.sleepState===v.AWAKE&&ut.type!==v.STATIC){var St=ut.velocity.norm2()+ut.angularVelocity.norm2(),Gt=Math.pow(ut.sleepSpeedLimit,2);St>=Gt*2&&(wt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ut,wt,!0),this.collisionMatrixPrevious.get(ut,wt)||(y.body=wt,y.contact=vt,ut.dispatchEvent(y),y.body=ut,wt.dispatchEvent(y))}for(k&&(j.makeContactConstraints=performance.now()-G,G=performance.now()),ft=0;ft!==K;ft++){var ut=z[ft];ut._wakeUpAfterNarrowphase&&(ut.wakeUp(),ut._wakeUpAfterNarrowphase=!1)}var Zt=rt.length;for(ft=0;ft!==Zt;ft++){var vt=rt[ft];vt.update();for(var R=0,$t=vt.equations.length;R!==$t;R++){var Wt=vt.equations[R];T.addEquation(Wt)}}T.solve(L,this),k&&(j.solve=performance.now()-G),T.removeAllEquations();var ue=Math.pow;for(ft=0;ft!==K;ft++){var ut=z[ft];if(ut.type&et){var ie=ue(1-ut.linearDamping,L),ge=ut.velocity;ge.mult(ie,ge);var W=ut.angularVelocity;if(W){var Lt=ue(1-ut.angularDamping,L);W.mult(Lt,W)}}}for(this.dispatchEvent(E),ft=0;ft!==K;ft++){var ut=z[ft];ut.preStep&&ut.preStep.call(ut)}k&&(G=performance.now());var lt=q,pt=J,Vt=this.stepnumber,Ot=v.DYNAMIC|v.KINEMATIC,re=Vt%(this.quatNormalizeSkip+1)===0,be=this.quatNormalizeFast,Re=L*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,ft=0;ft!==K;ft++){var ae=z[ft],at=ae.force,dt=ae.torque;if(ae.type&Ot&&ae.sleepState!==v.SLEEPING){var gt=ae.velocity,_t=ae.angularVelocity,Jt=ae.position,Bt=ae.quaternion,At=ae.invMass,Nt=ae.invInertiaWorld;gt.x+=at.x*At*L,gt.y+=at.y*At*L,gt.z+=at.z*At*L,ae.angularVelocity&&(Nt.vmult(dt,O),O.mult(L,O),O.vadd(_t,_t)),Jt.x+=gt.x*L,Jt.y+=gt.y*L,Jt.z+=gt.z*L,ae.angularVelocity&&(lt.set(_t.x,_t.y,_t.z,0),lt.mult(Bt,pt),Bt.x+=Re*pt.x,Bt.y+=Re*pt.y,Bt.z+=Re*pt.z,Bt.w+=Re*pt.w,re&&(be?Bt.normalizeFast():Bt.normalize())),ae.aabb&&(ae.aabbNeedsUpdate=!0),ae.updateInertiaWorld&&ae.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,k&&(j.integrate=performance.now()-G),this.time+=L,this.stepnumber+=1,this.dispatchEvent(P),ft=0;ft!==K;ft++){var ut=z[ft],it=ut.postStep;it&&it.call(ut)}if(this.allowSleep)for(ft=0;ft!==K;ft++)z[ft].sleepTick(this.time)},_.prototype.clearForces=function(){for(var L=this.bodies,Q=L.length,$=0;$!==Q;$++){var F=L[$];F.force,F.torque,F.force.set(0,0,0),F.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})}(ms)),ms.exports}var dn=Wp();class Xp{constructor(t,e){this.scene=t,this.world=e,this.textMeshes=[],this.currentText="",this.physicsMaterial=new dn.Material("physicsMaterial"),this.config={characterDelay:100,holdDelay:2e3,fadeInDuration:200,zposition:3,initialScale:2,targetScale:1.5,characterSpacing:.2,initialRotation:3,fontSize:100,fontStyle:"bold",fontFamily:"Arial",textColor:"red",textAlign:"center",textBaseline:"middle"}}animateText(t){this.currentText=t,this.textMeshes.forEach(a=>{this.scene.remove(a.mesh),this.world.remove(a.body)}),this.textMeshes=[];const e=this._measureText(t),n=e.totalWidth,s=e.charWidths;let r=-n/2;for(let a=0;a<t.length;a++){const o=s[a],l=r+o/2,u=this._createChar({char:t[a],x:l,y:0,width:o,height:e.height,index:a});setTimeout(()=>{this._startFadeIn(u)},a*this.config.characterDelay),setTimeout(()=>{this._startPhysicsDrop(u)},a*this.config.characterDelay+this.config.holdDelay),r+=o}}_measureText(t){const e=document.createElement("canvas"),n=e.getContext("2d");e.width=1024,e.height=256,n.font=`${this.config.fontStyle} ${this.config.fontSize}px ${this.config.fontFamily}`,n.textAlign=this.config.textAlign,n.textBaseline=this.config.textBaseline;const s=n.measureText(t).width*.01*this.config.characterSpacing,r=[];for(let o=0;o<t.length;o++){const l=n.measureText(t[o]).width*.01*this.config.characterSpacing;r.push(l)}const a=this.config.fontSize*.01*this.config.characterSpacing;return{totalWidth:s,charWidths:r,height:a}}_createChar(t){const e=document.createElement("canvas"),n=e.getContext("2d");e.width=128,e.height=128,n.fillStyle=this.config.textColor,n.font=`${this.config.fontStyle} ${this.config.fontSize}px ${this.config.fontFamily}`,n.textAlign=this.config.textAlign,n.textBaseline=this.config.textBaseline,n.fillText(t.char,e.width/2,e.height/2);const s=new Fr(e),r=t.width*3,a=t.height*3,o=new Cn(r,a),l=new qc({map:s,transparent:!0,opacity:0}),u=new Ne(o,l);u.castShadow=!0,u.position.set(t.x*3,t.y*3,this.config.zposition);const h=(Math.random()-.5)*this.config.initialRotation;u.rotation.z=h,u.scale.set(this.config.initialScale,this.config.initialScale,1),this.scene.add(u);const c={mesh:u,body:null,index:t.index,isFadingIn:!1,isPhysicsActive:!1,fadeStartTime:0,x:t.x*3,y:t.y*3,width:r,height:a};return this.textMeshes.push(c),c}_startFadeIn(t){t.isFadingIn=!0,t.fadeStartTime=Date.now()}_startPhysicsDrop(t){if(!t.isPhysicsActive){t.isPhysicsActive=!0;const e=new dn.Box(new dn.Vec3(t.width/2,t.height/2,.01)),n=new dn.Body({mass:1,shape:e,material:this.physicsMaterial,position:new dn.Vec3(t.mesh.position.x,t.mesh.position.y,t.mesh.position.z)}),s=new We().copy(t.mesh.rotation),r=new ii().setFromEuler(s);n.quaternion.set(r.x,r.y,r.z,r.w),t.body=n,this.world.addBody(n),n.velocity.set((Math.random()-.5)*3,Math.random()*2+3,(Math.random()-.5)*2),n.angularVelocity.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10)}}update(t=1/60){const e=Date.now();this.textMeshes.forEach(n=>{if(n.isFadingIn){const s=e-n.fadeStartTime,r=Math.min(s/this.config.fadeInDuration,1),a=this.config.initialScale+(this.config.targetScale-this.config.initialScale)*r,o=r;if(n.mesh.scale.set(a,a,1),n.mesh.material.opacity=o,n.mesh.rotation.z!==0){const l=n.mesh.rotation.z;n.mesh.rotation.z=l*(1-r)}r>=1&&!n.isPhysicsActive&&(n.isFadingIn=!1)}n.isPhysicsActive&&n.body&&(n.mesh.position.copy(n.body.position),n.mesh.quaternion.copy(n.body.quaternion))})}dispose(){this.textMeshes.forEach(t=>{this.scene.remove(t.mesh),t.body&&this.world.remove(t.body),t.mesh.geometry.dispose(),t.mesh.material.dispose(),t.mesh.material.map&&t.mesh.material.map.dispose()}),this.textMeshes=[]}}class qp{constructor(t,e,n){this.scene=t,this.camera=e,this.sceneManager=n,this.isActive=!1,this.animations=[],this.animationPhase=0,this.neurons={input:[],hidden:[],output:[]},this.config=n.config.neuralNetwork,this.cameraPositions={network:new nt(this.config.camera.position.x,this.config.camera.position.y,this.config.camera.position.z),original:e.position.clone()},this.cameraSettings={network:{position:new nt(this.config.camera.position.x,this.config.camera.position.y,this.config.camera.position.z),rotation:this.config.camera.rotation?new We(this.config.camera.rotation.x,this.config.camera.rotation.y,this.config.camera.rotation.z):null,lookAt:this.config.camera.lookAt?new nt(this.config.camera.lookAt.x,this.config.camera.lookAt.y,this.config.camera.lookAt.z):null},original:{position:e.position.clone(),rotation:e.rotation.clone(),quaternion:e.quaternion.clone()}},this.ui={overlayContainer:null,drawingCanvas:null,drawingContext:null,clearBtn:null,recognizeBtn:null,backBtn:null,resultContainer:null,resultText:null},this.drawingState={isDrawing:!1,lastPosition:null},this.clock=new rh,this.networkGroup=new qi,this.scene.add(this.networkGroup),this.networkGroup.visible=!1}initialize(){console.log("Initializing neural network visualization"),this._initNetwork(),this._createUI(),this._setupEventListeners()}show(){console.log("Showing neural network visualization"),this.cameraSettings.original={position:this.camera.position.clone(),quaternion:this.camera.quaternion.clone(),rotation:this.camera.rotation.clone()},console.log("Original camera position:",this.cameraSettings.original.position),console.log("Target camera position:",this.cameraSettings.network.position),this.networkGroup.visible=!0;const t={position:this.cameraSettings.network.position,rotation:this.cameraSettings.network.rotation,lookAt:this.cameraSettings.network.lookAt,transitionDuration:this.config.camera.transitionDuration};this.sceneManager.transitionCamera(t,()=>{this.ui.overlayContainer&&(console.log("Showing UI overlay"),this.ui.overlayContainer.style.display="block")}),this.isActive=!0}hide(){console.log("Hiding neural network visualization"),this.ui.overlayContainer&&(this.ui.overlayContainer.style.display="none");const t={position:this.cameraSettings.original.position,rotation:this.sceneManager.config.camera.rotation,lookAt:this.sceneManager.config.camera.lookAt,transitionDuration:this.config.camera.transitionDuration};this.sceneManager.transitionCamera(t,()=>{this.networkGroup.visible=!1,this.sceneManager&&(console.log("Notifying SceneManager to complete transition to card view"),this.sceneManager.showCardView())}),this.isActive=!1}processDrawing(){console.log("Processing drawing...");const t=this._getPixelData(),e=this._simulateWeights(),n=this._simulateForwardPass(t,e);this._updateInputLayer(t),this._scheduleLayerAnimation(n,e);const s=n.output.indexOf(Math.max(...n.output));setTimeout(()=>{this.ui.resultText.textContent=s,this.ui.resultContainer.style.display="block"},this.config.animation.resultDelay)}_createUI(){const t=document.createElement("div");t.id="nn-overlay",t.style.position="absolute",t.style.top="20px",t.style.left="20px",t.style.width="300px",t.style.padding="15px",t.style.backgroundColor="rgba(20, 20, 40, 0.7)",t.style.borderRadius="10px",t.style.zIndex="10",t.style.color="white",t.style.boxShadow="0 0 15px rgba(0, 0, 0, 0.5)",t.style.display="none",document.body.appendChild(t);const e=document.createElement("h2");e.textContent="Draw a digit (0-9)",e.style.marginTop="0",e.style.marginBottom="10px",e.style.fontSize="18px",t.appendChild(e);const n=document.createElement("canvas");n.width=280,n.height=280,n.style.width="100%",n.style.height="280px",n.style.backgroundColor="black",n.style.cursor="crosshair",n.style.border="1px solid #666",n.style.borderRadius="5px",n.style.marginBottom="10px",t.appendChild(n);const s=document.createElement("div");s.style.display="flex",s.style.gap="10px",s.style.marginBottom="15px",t.appendChild(s);const r=document.createElement("button");r.textContent="Clear",r.style.flex="1",r.style.padding="8px 15px",r.style.fontSize="14px",r.style.border="none",r.style.borderRadius="5px",r.style.cursor="pointer",r.style.backgroundColor="#3498db",r.style.color="white",s.appendChild(r);const a=document.createElement("button");a.textContent="Recognize",a.style.flex="1",a.style.padding="8px 15px",a.style.fontSize="14px",a.style.border="none",a.style.borderRadius="5px",a.style.cursor="pointer",a.style.backgroundColor="#2ecc71",a.style.color="white",s.appendChild(a);const o=document.createElement("div");o.style.backgroundColor="#2c3e50",o.style.padding="10px",o.style.borderRadius="5px",o.style.textAlign="center",o.style.fontWeight="bold",o.style.fontSize="18px",o.style.display="none",o.style.marginBottom="15px",t.appendChild(o);const l=document.createElement("span");o.innerHTML="Digit: ",o.appendChild(l);const u=document.createElement("button");u.textContent="Back to Card",u.style.width="100%",u.style.padding="8px 15px",u.style.fontSize="14px",u.style.border="none",u.style.borderRadius="5px",u.style.cursor="pointer",u.style.backgroundColor="#e74c3c",u.style.color="white",t.appendChild(u),this.ui.overlayContainer=t,this.ui.drawingCanvas=n,this.ui.drawingContext=n.getContext("2d"),this.ui.clearBtn=r,this.ui.recognizeBtn=a,this.ui.backBtn=u,this.ui.resultContainer=o,this.ui.resultText=l,this.ui.drawingContext.fillStyle="black",this.ui.drawingContext.fillRect(0,0,this.ui.drawingCanvas.width,this.ui.drawingCanvas.height)}_setupEventListeners(){this.ui.drawingCanvas.addEventListener("mousedown",this._startDrawing.bind(this)),this.ui.drawingCanvas.addEventListener("mousemove",this._draw.bind(this)),this.ui.drawingCanvas.addEventListener("mouseup",this._stopDrawing.bind(this)),this.ui.drawingCanvas.addEventListener("mouseleave",this._stopDrawing.bind(this)),this.ui.drawingCanvas.addEventListener("touchstart",this._handleTouch.bind(this)),this.ui.drawingCanvas.addEventListener("touchmove",this._handleTouch.bind(this)),this.ui.drawingCanvas.addEventListener("touchend",this._stopDrawing.bind(this)),this.ui.clearBtn.addEventListener("click",this._clearCanvas.bind(this)),this.ui.recognizeBtn.addEventListener("click",()=>{console.log("Recognize button clicked"),this.processDrawing()}),this.ui.backBtn.addEventListener("click",()=>{console.log("Back button clicked"),this.hide()})}_initNetwork(){this._createInputLayer(),this._createHiddenLayer(),this._createOutputLayer();const t=this.config.labels,e=this.config.layerPositions;this._addTextLabel("Input Layer",new nt(0,t.offsetY,e.input)),this._addTextLabel("Hidden Layer",new nt(0,t.offsetY,e.hidden)),this._addTextLabel("Output Layer",new nt(0,t.offsetY,e.output))}_createInputLayer(){const t=this.config.inputLayer,e=t.neuronSize,n=28,s=t.horizontalSpacing,r=t.verticalSpacing,a=n*s,o=this.config.layerPositions.input,l=new pn(e,e,e);for(let u=0;u<this.config.structure.inputLayer;u++){const h=Math.floor(u/n),d=u%n*s-a/2,f=h*r-a/2,v=new wi({color:this.config.colors.neuron,transparent:!0,opacity:.5}),g=new Ne(l,v.clone());g.position.set(d,f,o),this.neurons.input.push({mesh:g,position:{x:d,y:f,z:o},index:u,activation:0}),this.networkGroup.add(g)}}_createHiddenLayer(){const t=this.config.hiddenLayer,e=t.neuronSize,n=Math.ceil(Math.sqrt(this.config.structure.hiddenLayer)),s=t.horizontalSpacing,r=t.verticalSpacing,a=n*s,o=this.config.layerPositions.hidden,l=new pn(e,e,e);for(let u=0;u<this.config.structure.hiddenLayer;u++){const h=Math.floor(u/n),d=u%n*s-a/2,f=h*r-a/2,v=new wi({color:this.config.colors.neuron,transparent:!0,opacity:.5}),g=new Ne(l,v.clone());g.position.set(d,f,o),this.neurons.hidden.push({mesh:g,position:{x:d,y:f,z:o},index:u,activation:0}),this.networkGroup.add(g)}}_createOutputLayer(){const t=this.config.outputLayer,e=t.neuronSize,n=t.verticalSpacing,s=this.config.layerPositions.output,r=new pn(e,e,e),a=(this.config.structure.outputLayer-1)*n;for(let o=0;o<this.config.structure.outputLayer;o++){const u=o*n-a/2,h=new wi({color:this.config.colors.neuron,transparent:!0,opacity:.5}),c=new Ne(r,h.clone());c.position.set(0,u,s),this.neurons.output.push({mesh:c,position:{x:0,y:u,z:s},index:o,activation:0}),this.networkGroup.add(c),this._addTextLabel(o.toString(),new nt(0+.6,u,s))}}_addTextLabel(t,e){const n=document.createElement("canvas");n.width=256,n.height=64;const s=n.getContext("2d");s.fillStyle="#ffffff",s.font="bold 36px Arial",s.textAlign="center",s.textBaseline="middle",s.fillText(t,128,32);const r=new Fr(n),a=new Qo({map:r}),o=new Hc(a);o.position.copy(e);const l=this.config.labels.scale;o.scale.set(l.x,l.y,l.z),this.networkGroup.add(o)}_startDrawing(t){this.drawingState.isDrawing=!0,this.drawingState.lastPosition=null,this._draw(t)}_draw(t){if(!this.drawingState.isDrawing)return;const e=this.ui.drawingCanvas.getBoundingClientRect(),n=t.clientX-e.left,s=t.clientY-e.top;this.ui.drawingContext.strokeStyle="white",this.ui.drawingContext.lineWidth=15,this.ui.drawingContext.lineCap="round",this.ui.drawingContext.lineJoin="round",this.drawingState.lastPosition?(this.ui.drawingContext.lineTo(n,s),this.ui.drawingContext.stroke()):(this.ui.drawingContext.beginPath(),this.ui.drawingContext.moveTo(n,s)),this.drawingState.lastPosition={x:n,y:s}}_handleTouch(t){if(t.preventDefault(),t.type==="touchstart"&&(this.drawingState.isDrawing=!0,this.drawingState.lastPosition=null),this.drawingState.isDrawing){const e=this.ui.drawingCanvas.getBoundingClientRect(),n=t.touches[0],s=n.clientX-e.left,r=n.clientY-e.top;this.ui.drawingContext.strokeStyle="white",this.ui.drawingContext.lineWidth=15,this.ui.drawingContext.lineCap="round",this.ui.drawingContext.lineJoin="round",this.drawingState.lastPosition?(this.ui.drawingContext.lineTo(s,r),this.ui.drawingContext.stroke()):(this.ui.drawingContext.beginPath(),this.ui.drawingContext.moveTo(s,r)),this.drawingState.lastPosition={x:s,y:r}}}_stopDrawing(){this.drawingState.isDrawing=!1}_clearCanvas(){this.ui.drawingContext.fillStyle="black",this.ui.drawingContext.fillRect(0,0,this.ui.drawingCanvas.width,this.ui.drawingCanvas.height),this.ui.resultContainer.style.display="none",this._resetNetwork()}_resetNetwork(){this._clearAnimations(),Object.keys(this.neurons).forEach(t=>{this.neurons[t].forEach(e=>{e.activation=0,e.mesh.material.color.setHex(this.config.colors.neuron),e.mesh.material.opacity=.5})})}_getPixelData(){const t=this.ui.drawingContext.getImageData(0,0,280,280),e=[],n=280/28;for(let s=0;s<28;s++)for(let r=0;r<28;r++){let a=0;for(let o=0;o<n;o++)for(let l=0;l<n;l++){const u=Math.floor(r*n+l),c=(Math.floor(s*n+o)*280+u)*4;a+=t.data[c]}e.push(a/(n*n*255))}return e}_scheduleLayerAnimation(t,e){setTimeout(()=>{this.animationPhase=1,this._animateInputToHidden(t.input,e.inputToHidden)},0),setTimeout(()=>{this.animationPhase=2,this._updateHiddenLayer(t.hidden)},this.config.animation.hiddenLayerDelay),setTimeout(()=>{this.animationPhase=3,this._animateHiddenToOutput(t.hidden,e.hiddenToOutput)},this.config.animation.outputLayerDelay),setTimeout(()=>{this.animationPhase=4,this._updateOutputLayer(t.output)},this.config.animation.resultDelay-450)}_simulateWeights(){return{inputToHidden:Array(this.config.structure.inputLayer).fill().map(()=>Array(this.config.structure.hiddenLayer).fill().map(()=>Math.random()*2-1)),hiddenToOutput:Array(this.config.structure.hiddenLayer).fill().map(()=>Array(this.config.structure.outputLayer).fill().map(()=>Math.random()*2-1))}}_simulateForwardPass(t,e){const n={input:t,hidden:Array(this.config.structure.hiddenLayer).fill(0),output:Array(this.config.structure.outputLayer).fill(0)};for(let r=0;r<this.config.structure.inputLayer;r++)for(let a=0;a<this.config.structure.hiddenLayer;a++)n.hidden[a]+=n.input[r]*e.inputToHidden[r][a];n.hidden=n.hidden.map(r=>Math.max(0,r));for(let r=0;r<this.config.structure.hiddenLayer;r++)for(let a=0;a<this.config.structure.outputLayer;a++)n.output[a]+=n.hidden[r]*e.hiddenToOutput[r][a];const s=n.output.reduce((r,a)=>r+Math.exp(a),0);return n.output=n.output.map(r=>Math.exp(r)/s),n}_updateInputLayer(t){this.neurons.input.forEach((e,n)=>{const s=t[n]||0;e.activation=s,s>.1?(e.mesh.material.color.setHSL(.6,.8,.5),e.mesh.material.opacity=s):e.mesh.material.opacity=.1})}_updateHiddenLayer(t){this.neurons.hidden.forEach((e,n)=>{const s=t[n]||0;e.activation=s,s>0?(e.mesh.material.color.setHSL(.6-s*.6,.8,.5),e.mesh.material.opacity=.3+s*.7):e.mesh.material.opacity=.2})}_updateOutputLayer(t){const e=t.indexOf(Math.max(...t));this.neurons.output.forEach((n,s)=>{const r=t[s]||0;n.activation=r,s===e?(n.mesh.material.color.setHex(this.config.colors.highlightedNeuron),n.mesh.material.opacity=1):r>.1?(n.mesh.material.color.setHSL(.6-r*.6,.8,.5),n.mesh.material.opacity=.3+r*.7):n.mesh.material.opacity=.2})}_animateInputToHidden(t,e){this._clearAnimations();const n=[];for(let s=0;s<t.length;s++)t[s]>.2&&n.push(s);for(const s of n){const r=this.config.animation.connectionsPerNeuron,a=[];for(;a.length<r;){const o=Math.floor(Math.random()*this.config.structure.hiddenLayer);a.includes(o)||a.push(o)}for(const o of a){const l=e[s][o],u=t[s]*l;if(Math.abs(u)>.05){const h=this.neurons.input[s],c=this.neurons.hidden[o];this._createDataCube(h.position,c.position,l,Math.random()*this.config.animation.randomDelayFactor)}}}}_animateHiddenToOutput(t,e){this._clearAnimations();const n=[];for(let s=0;s<t.length;s++)t[s]>.1&&n.push(s);for(const s of n)for(let r=0;r<this.config.structure.outputLayer;r++){const a=e[s][r],o=t[s]*a;if(Math.abs(o)>.05){const l=this.neurons.hidden[s],u=this.neurons.output[r];this._createDataCube(l.position,u.position,a,Math.random()*(this.config.animation.randomDelayFactor/2))}}}_createDataCube(t,e,n,s=0){const r=this.config.animation,a=r.dataCubeSize,o=new pn(a,a,a),l=n>=0?this.config.colors.positiveWeight:this.config.colors.negativeWeight,u=new wi({color:l,transparent:!0,opacity:.8*Math.min(1,Math.abs(n)*2)}),h=new Ne(o,u);h.position.copy(t),this.networkGroup.add(h);const c={cube:h,startTime:Date.now()+s,duration:r.duration,sourcePos:t,targetPos:e,complete:!1};this.animations.push(c)}_clearAnimations(){for(const t of this.animations)t.cube&&this.networkGroup.remove(t.cube);this.animations=[]}updateAnimations(){if(!this.isActive)return;const t=Date.now(),e=this.config.animation.arcHeight,n=this.config.animation.maxOpacity;for(let s=0;s<this.animations.length;s++){const r=this.animations[s];if(r.complete)continue;const a=t-r.startTime;if(a<0)r.cube.visible=!1;else if(a>r.duration)this.networkGroup.remove(r.cube),r.complete=!0;else{const o=a/r.duration,l=this._easeInOutCubic(o);r.cube.position.x=r.sourcePos.x+(r.targetPos.x-r.sourcePos.x)*l,r.cube.position.y=r.sourcePos.y+(r.targetPos.y-r.sourcePos.y)*l,r.cube.position.z=r.sourcePos.z+(r.targetPos.z-r.sourcePos.z)*l,r.cube.position.y+=Math.sin(o*Math.PI)*e,r.cube.visible=!0,r.cube.material.opacity=Math.sin(o*Math.PI)*n,r.cube.rotation.x+=.05,r.cube.rotation.y+=.05}}this.animations=this.animations.filter(s=>!s.complete)}_easeInOutCubic(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}dispose(){console.log("Disposing neural network manager"),this.ui.drawingCanvas&&(this.ui.drawingCanvas.removeEventListener("mousedown",this._startDrawing),this.ui.drawingCanvas.removeEventListener("mousemove",this._draw),this.ui.drawingCanvas.removeEventListener("mouseup",this._stopDrawing),this.ui.drawingCanvas.removeEventListener("mouseleave",this._stopDrawing),this.ui.drawingCanvas.removeEventListener("touchstart",this._handleTouch),this.ui.drawingCanvas.removeEventListener("touchmove",this._handleTouch),this.ui.drawingCanvas.removeEventListener("touchend",this._stopDrawing)),this.ui.clearBtn&&this.ui.clearBtn.removeEventListener("click",this._clearCanvas),this.ui.overlayContainer&&this.ui.overlayContainer.parentNode&&this.ui.overlayContainer.parentNode.removeChild(this.ui.overlayContainer),this._clearAnimations(),Object.keys(this.neurons).forEach(t=>{this.neurons[t].forEach(e=>{e.mesh&&(e.mesh.geometry.dispose(),e.mesh.material.dispose(),this.networkGroup.remove(e.mesh))})}),this.scene.remove(this.networkGroup)}}class Yp{constructor(t,e={}){this.container=t,this.interactiveObjects=new Set,this.buttonObjects=new Set,this.raycaster=new sh,this.mouse=new le,this.draggedObject=null,this.backgroundTransitionState={currentColorIndex:0,nextColorIndex:1,transitionProgress:0},this.defaultConfig={debug:!0,camera:{fov:75,near:.1,far:1e3,position:{x:0,y:0,z:5},rotation:{x:0,y:0,z:0},lookAt:{x:0,y:0,z:0},transitionDuration:1e3},scene:{background:2759485,backgroundTransition:{enabled:!1,colors:[2759485,1719132,3873326],transitionSpeed:.5,transitionMethod:"rgb"}},card:{physics:{strength:.3,damping:.75,wiggleStrength:.5,wiggleDamping:.6,zStrength:.4,zDamping:.2},dragging:{returnSpeed:.1,dampingFactor:.95},animation:{hoverScale:1.1,selectedScale:1.1,selectedElevation:.5,glowIntensity:.7,glowColor:65535},selection:{clickThreshold:200,moveThreshold:5},dimensions:{width:2,height:3,pivotOffset:.7}},button:{dimensions:{analyzeWidth:1.5,analyzeHeight:.5,debugWidth:1.2,debugHeight:.4},positions:{analyze:{x:2,y:-2,z:.1},debug:{x:2,y:1.5,z:.1}},colors:{activeAnalyze:4360181,inactiveAnalyze:7895160,activeDebug:16711680,inactiveDebug:11141120},animations:{hoverScale:1.1,clickScale:1.2,springStrength:.3,springDamping:.7}},neuralNetwork:{camera:{position:{x:0,y:0,z:25},rotation:{x:0,y:0,z:0},lookAt:{x:0,y:0,z:0},transitionDuration:1500},structure:{inputLayer:784,hiddenLayer:64,outputLayer:10},layerPositions:{input:-5,hidden:2,output:9},inputLayer:{neuronSize:.08,horizontalSpacing:.15,verticalSpacing:.15},hiddenLayer:{neuronSize:.15,horizontalSpacing:.5,verticalSpacing:.5},outputLayer:{neuronSize:.25,verticalSpacing:.8},labels:{offsetY:5,scale:{x:2,y:.5,z:1}},animation:{dataCubeSize:.08,arcHeight:.5,duration:1e3,maxOpacity:.8,randomDelayFactor:1e3,connectionsPerNeuron:5,hiddenLayerDelay:1900,outputLayerDelay:2300,resultDelay:4e3},colors:{neuron:3447003,positiveWeight:3066993,negativeWeight:15158332,highlightedNeuron:16733986}}},this.config=this._mergeConfig(this.defaultConfig,e),this.state={selectedCards:new Set,selectionListeners:new Set,currentView:"card",isClicking:!1,clickStartTime:0,clickStartPosition:new le,cameraTransition:null,backgroundTransition:{startTime:Date.now(),currentColorIndex:0,nextColorIndex:1,progress:0,currentColor:new oe(this.config.scene.background)}},this._initializeScene(),this._setupLighting(),this._initializePhysics(),this._setupEventListeners(),this.textPhysics=null,this.neuralNetworkManager=null}_mergeConfig(t,e){const n={...t};for(const s in e)typeof e[s]=="object"&&e[s]!==null&&!Array.isArray(e[s])&&t.hasOwnProperty(s)?n[s]=this._mergeConfig(t[s],e[s]):n[s]=e[s];return n}updateBackgroundColor(t){if(!this.config.scene.backgroundTransition.enabled)return;const e=this.config.scene.backgroundTransition,n=e.colors;this.backgroundTransitionState.transitionProgress+=e.transitionSpeed*t*60,this.backgroundTransitionState.transitionProgress>=1&&(this.backgroundTransitionState.currentColorIndex=(this.backgroundTransitionState.currentColorIndex+1)%n.length,this.backgroundTransitionState.nextColorIndex=(this.backgroundTransitionState.currentColorIndex+1)%n.length,this.backgroundTransitionState.transitionProgress=0);const s=new oe(n[this.backgroundTransitionState.currentColorIndex]),r=new oe(n[this.backgroundTransitionState.nextColorIndex]),a=new oe;a.copy(s).lerp(r,this.backgroundTransitionState.transitionProgress),this.scene.background=a}_initializePhysics(){this.world=new dn.World,this.world.gravity.set(0,-9.82,0),this.world.broadphase=new dn.NaiveBroadphase;const t=new dn.Plane,e=new dn.Body({mass:0,shape:t});e.quaternion.setFromAxisAngle(new dn.Vec3(1,0,0),-Math.PI/2),e.position.set(0,-2,0),this.world.addBody(e)}initTextPhysics(){return this.textPhysics||(this.textPhysics=new Xp(this.scene,this.world)),this.textPhysics}animateText(t){return this.textPhysics?(this.textPhysics.animateText(t),!0):(console.warn("TextPhysics not initialized"),!1)}initNeuralNetwork(){return this.neuralNetworkManager||(console.log("Initializing neural network manager"),this.neuralNetworkManager=new qp(this.scene,this.camera,this),this.neuralNetworkManager.initialize()),this.neuralNetworkManager}showNeuralNetwork(){this.neuralNetworkManager||this.initNeuralNetwork(),console.log("Switching to neural network view"),this.state.currentView="network",this.interactiveObjects.forEach(t=>{t instanceof yn&&(t.visible=!1)}),this.buttonObjects.forEach(t=>{t._props.text!=="Debug Camera"&&(t.visible=!1)}),this.neuralNetworkManager.show()}showCardView(){console.log("Switching back to card view"),this.state.currentView="card",this.neuralNetworkManager&&this.neuralNetworkManager.ui.overlayContainer&&(this.neuralNetworkManager.ui.overlayContainer.style.display="none"),this.interactiveObjects.forEach(t=>{t instanceof yn&&(t.visible=!0)}),this.buttonObjects.forEach(t=>{t.visible=!0})}_updateBackgroundColor(t){const e=this.config.scene.backgroundTransition;if(!e.enabled||e.colors.length<2)return;const n=e.colors,s=this.state.backgroundTransition,r=(Date.now()-s.startTime)/1e3;s.progress=r*e.transitionSpeed%1,s.progress<this.state.backgroundTransition.lastProgress&&(s.currentColorIndex=(s.currentColorIndex+1)%n.length,s.nextColorIndex=(s.currentColorIndex+1)%n.length),s.lastProgress=s.progress;const a=new oe(n[s.currentColorIndex]),o=new oe(n[s.nextColorIndex]);if(e.transitionMethod==="hsl"){const l={h:0,s:0,l:0},u={h:0,s:0,l:0};a.getHSL(l),o.getHSL(u);let h;const c=u.h-l.h;Math.abs(c)>.5?c>0?(h=l.h+(c-1)*s.progress,h<0&&(h+=1)):(h=l.h+(c+1)*s.progress,h>1&&(h-=1)):h=l.h+c*s.progress;const d=l.s+(u.s-l.s)*s.progress,f=l.l+(u.l-l.l)*s.progress;s.currentColor.setHSL(h,d,f)}else s.currentColor.copy(a).lerp(o,s.progress);this.scene.background.copy(s.currentColor)}transitionCamera(t,e){const n=this.camera.position.clone(),s=this.camera.quaternion.clone();let r;t.position?r=new nt(t.position.x,t.position.y,t.position.z):r=this.camera.position.clone();let a;if(t.lookAt){const o=this.camera.clone();o.position.copy(r),o.lookAt(t.lookAt.x,t.lookAt.y,t.lookAt.z),a=o.quaternion.clone()}else t.rotation?a=new ii().setFromEuler(new We(t.rotation.x,t.rotation.y,t.rotation.z,"XYZ")):a=this.camera.quaternion.clone();this.state.cameraTransition={startPosition:n,targetPosition:r,startQuaternion:s,targetQuaternion:a,startTime:Date.now(),duration:t.transitionDuration||this.config.camera.transitionDuration,callback:e,isActive:!0},this.config.debug&&console.log("Starting camera transition",{from:this.state.cameraTransition.startPosition,to:this.state.cameraTransition.targetPosition,duration:this.state.cameraTransition.duration})}updateCameraTransition(){const t=this.state.cameraTransition;if(!t||!t.isActive)return;const e=Date.now()-t.startTime,n=Math.min(e/t.duration,1),s=this._easeInOutCubic(n);this.camera.position.lerpVectors(t.startPosition,t.targetPosition,s),this.camera.quaternion.slerpQuaternions(t.startQuaternion,t.targetQuaternion,s),this.config.debug&&n%.1<.01&&console.log(`Camera transition progress: ${Math.round(n*100)}%`,this.camera.position),n>=1&&(this.config.debug&&console.log("Camera transition complete",this.camera.position),t.isActive=!1,t.callback&&t.callback())}_easeInOutCubic(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}update(t){const e=performance.now(),n=e-(this.lastPhysicsTime||e);this.lastPhysicsTime=e;const s=1/60;this.world.step(s,n/1e3,3),this.textPhysics&&this.textPhysics.update(t),this.updateCameraTransition(),this._updateBackgroundColor(t),this.neuralNetworkManager&&this.neuralNetworkManager.updateAnimations(),this.updateBackgroundColor(t),this.interactiveObjects.forEach(r=>r.update(t)),this.renderer.render(this.scene,this.camera)}setBackgroundColor(t){const e=t instanceof oe?t:new oe(t);if(this.scene.background=e,this.config.scene.background=t,this.config.scene.backgroundTransition.enabled){const n=this.state.backgroundTransition;n.currentColor.copy(e),n.startTime=Date.now(),n.progress=0,n.lastProgress=0}}setBackgroundTransition(t){const e=this.config.scene.backgroundTransition;t.enabled!==void 0&&(e.enabled=t.enabled),t.colors!==void 0&&t.colors.length>=2&&(e.colors=[...t.colors]),t.transitionSpeed!==void 0&&(e.transitionSpeed=Math.max(.01,Math.min(10,t.transitionSpeed))),t.transitionMethod!==void 0&&(e.transitionMethod=["rgb","hsl"].includes(t.transitionMethod)?t.transitionMethod:"rgb");const n=this.state.backgroundTransition;n.startTime=Date.now(),n.currentColorIndex=0,n.nextColorIndex=1,n.progress=0,n.lastProgress=0,e.colors.length>0&&(n.currentColor=new oe(e.colors[0]),this.scene.background.copy(n.currentColor))}dispose(){window.removeEventListener("resize",this._onWindowResize),this.renderer.domElement.removeEventListener("pointerdown",this._onPointerDown),this.renderer.domElement.removeEventListener("pointermove",this._onPointerMove),this.renderer.domElement.removeEventListener("pointerup",this._onPointerUp),this.renderer.domElement.removeEventListener("pointerout",this._onPointerUp),this.textPhysics&&(this.textPhysics.dispose(),this.textPhysics=null),this.neuralNetworkManager&&(this.neuralNetworkManager.dispose(),this.neuralNetworkManager=null),this.interactiveObjects.forEach(t=>{t.dispose()}),this.interactiveObjects.clear(),this.buttonObjects.clear(),this.renderer.dispose(),this.container.contains(this.renderer.domElement)&&this.container.removeChild(this.renderer.domElement)}_initializeScene(){this.scene=new Vc,this.scene.background=new oe(this.config.scene.background),this.state.backgroundTransition.currentColor=new oe(this.config.scene.background),this.camera=new Qe(this.config.camera.fov,window.innerWidth/window.innerHeight,this.config.camera.near,this.config.camera.far),this.camera.position.set(this.config.camera.position.x,this.config.camera.position.y,this.config.camera.position.z),this.config.camera.rotation&&this.camera.rotation.set(this.config.camera.rotation.x,this.config.camera.rotation.y,this.config.camera.rotation.z),this.config.camera.lookAt&&this.camera.lookAt(this.config.camera.lookAt.x,this.config.camera.lookAt.y,this.config.camera.lookAt.z),this.renderer=new Gp({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ro,this.container.appendChild(this.renderer.domElement);const t=new Cn(20,20),e=new Xc({opacity:.3});this.ground=new Ne(t,e),this.ground.position.z=-1,this.ground.rotation.x=0,this.ground.receiveShadow=!0,this.scene.add(this.ground)}_setupLighting(){this.mainLight=new eh(16777215,.7),this.mainLight.position.set(5,5,5),this.mainLight.castShadow=!0;const t=this.mainLight.shadow.camera;t.near=.1,t.far=100,t.left=-10,t.right=10,t.top=10,t.bottom=-10,this.mainLight.shadow.mapSize.width=2048,this.mainLight.shadow.mapSize.height=2048,this.glareLight=new Jc(16777215,1),this.glareLight.position.set(3,3,5),this.glareLight.angle=Math.PI/4,this.glareLight.penumbra=.1,this.glareLight.decay=.5,this.ambientLight=new nh(4210752,.6),this.scene.add(this.mainLight),this.scene.add(this.glareLight),this.scene.add(this.ambientLight)}_setupEventListeners(){window.addEventListener("resize",this._onWindowResize.bind(this)),this.renderer.domElement.addEventListener("pointerdown",this._onPointerDown.bind(this)),this.renderer.domElement.addEventListener("pointermove",this._onPointerMove.bind(this)),this.renderer.domElement.addEventListener("pointerup",this._onPointerUp.bind(this)),this.renderer.domElement.addEventListener("pointerout",this._onPointerUp.bind(this))}_onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}_updateMousePosition(t){this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1}_getInteractiveMeshes(){return this.state.currentView==="network"?Array.from(this.buttonObjects).filter(t=>t._props.text==="Debug Camera").map(t=>t.interactiveMesh).filter(t=>t!=null):Array.from(this.interactiveObjects).map(t=>t.interactiveMesh).filter(t=>t!=null)}_getTopmostObject(t){if(t.length===0)return null;const e=[...t].sort((r,a)=>r.distance-a.distance);let n=null,s=-1/0;for(const r of e){const a=this._findParentObject(r.object);a&&(a instanceof Mi||(a instanceof yn?a.position.z>s&&(s=a.position.z,n=a):n||(n=a)))}return n}_findParentObject(t){var e;return((e=t==null?void 0:t.userData)==null?void 0:e.parent)||null}_onPointerDown(t){this._updateMousePosition(t),this.state.isClicking=!0,this.state.clickStartTime=Date.now(),this.state.clickStartPosition=new le(t.clientX,t.clientY),this.raycaster.setFromCamera(this.mouse,this.camera),this.raycaster.layers.set(0),this.raycaster.layers.enable(1);const e=Array.from(this.buttonObjects).map(a=>a.interactiveMesh).filter(a=>a!=null&&a.visible),n=this.raycaster.intersectObjects(e);if(n.length>0){const a=this._findParentObject(n[0].object);if(a){this.config.debug&&console.log(`Button intersected: ${a._props.text}`);return}}if(this.state.currentView==="network")return;const s=this.raycaster.intersectObjects(this._getInteractiveMeshes()),r=this._getTopmostObject(s);if(r){this.draggedObject=r;const a={clientX:t.clientX,clientY:t.clientY,ray:this.raycaster.ray,camera:this.camera};r.onDragStart(a),this._bringToFront(r)}}_onPointerMove(t){const e=this.mouse.x;if(this._updateMousePosition(t),!(this.state.currentView==="network"&&!this.raycaster.intersectObjects(Array.from(this.buttonObjects).filter(n=>n._props.text==="Debug Camera").map(n=>n.interactiveMesh)).length)){if(this.raycaster.setFromCamera(this.mouse,this.camera),this.draggedObject){if(this.draggedObject.config.dragBehavior.enabled){const n=new Mn(new nt(0,0,1),0),s=new nt;if(this.raycaster.ray.intersectPlane(n,s),this.draggedObject.position.copy(s),this.draggedObject.position.add(this.draggedObject._state.dragOffset),this.draggedObject instanceof yn){const r=fc.clamp((this.mouse.x-e)*-2,-Math.PI/4,Math.PI/4);this.draggedObject.rotation.z=r}}}else{const n=Array.from(this.buttonObjects).map(o=>o.interactiveMesh).filter(o=>o!=null&&o.visible),s=this.raycaster.intersectObjects(n),r={clientX:t.clientX,clientY:t.clientY,camera:this.camera};this.buttonObjects.forEach(o=>{const l=s.some(u=>this._findParentObject(u.object)===o);l&&!o._state.isHovering?o.onPointerEnter(r):!l&&o._state.isHovering&&o.onPointerLeave(r)});const a=this.raycaster.intersectObjects(this._getInteractiveMeshes());this.interactiveObjects.forEach(o=>{if(o instanceof Mi)return;const l=a.some(u=>this._findParentObject(u.object)===o);l&&!o._state.isHovering?o.onPointerEnter(r):!l&&o._state.isHovering&&o.onPointerLeave(r),l&&o.onPointerMove(r)})}this.state.isClicking&&new le(t.clientX,t.clientY).distanceTo(this.state.clickStartPosition)>this.config.card.selection.moveThreshold&&(this.state.isClicking=!1)}}_onPointerUp(t){const n=Date.now()-this.state.clickStartTime;if(this.state.isClicking&&n<this.config.card.selection.clickThreshold){this.config.debug&&console.log("Click detected"),this._updateMousePosition(t),this.raycaster.setFromCamera(this.mouse,this.camera);const r=Array.from(this.buttonObjects).map(o=>o.interactiveMesh).filter(o=>o!=null&&o.visible),a=this.raycaster.intersectObjects(r);if(a.length>0){const o=this._findParentObject(a[0].object);if(o){console.log(`Button clicked: ${o._props.text}`),typeof o.onDirectClick=="function"?o.onDirectClick(t):console.warn("Button does not have onDirectClick method"),this.state.isClicking=!1;return}}}this.state.isClicking=!1,this.state.currentView!=="network"&&this.draggedObject&&(this.draggedObject.onDragEnd({clientX:t.clientX,clientY:t.clientY}),this.draggedObject=null)}_bringToFront(t){const e=Array.from(this.interactiveObjects).filter(r=>r instanceof yn).map(r=>r.position.z).sort((r,a)=>r-a),n=e.length>0?e[e.length-1]:0,s=.1;t.position.z<n&&(t.position.z=n+s,e.length>10&&this._normalizeCardZPositions())}_normalizeCardZPositions(){Array.from(this.interactiveObjects).filter(e=>e instanceof yn).sort((e,n)=>e.position.z-n.position.z).forEach((e,n)=>{e.position.z=n*.1})}addSelectionListener(t){return typeof t!="function"?()=>{}:(this.state.selectionListeners.add(t),()=>{this.state.selectionListeners.delete(t)})}_notifySelectionChange(){const t=Array.from(this.state.selectedCards);this.state.selectionListeners.forEach(e=>{try{e(t)}catch(n){console.error("Error in selection listener:",n)}})}_handleSelectionChange(t){console.log("Selection change for object:",t),t instanceof yn&&(t._state.isSelected?(this.state.selectedCards.add(t),console.log(`Card selected. Total selected: ${this.state.selectedCards.size}`)):(this.state.selectedCards.delete(t),console.log(`Card deselected. Total selected: ${this.state.selectedCards.size}`)),this._notifySelectionChange())}getSelectedCards(){return Array.from(this.state.selectedCards)}hasSelectedCards(){return this.state.selectedCards.size>0}addObject(t){if(this.interactiveObjects.add(t),t instanceof Mi&&this.buttonObjects.add(t),this.scene.add(t),t instanceof yn){const e=this,n=t.toggleSelected.bind(t);t.toggleSelected=function(){n(),e._handleSelectionChange(this)}}return t}addCard(t,e={}){const n={width:this.config.card.dimensions.width,height:this.config.card.dimensions.height,springPhysics:{strength:this.config.card.physics.strength,damping:this.config.card.physics.damping,wiggleStrength:this.config.card.physics.wiggleStrength,wiggleDamping:this.config.card.physics.wiggleDamping,zStrength:this.config.card.physics.zStrength,zDamping:this.config.card.physics.zDamping},dragBehavior:{returnSpeed:this.config.card.dragging.returnSpeed,dampingFactor:this.config.card.dragging.dampingFactor,enabled:!0},selectionBehavior:{enabled:!0,clickThreshold:this.config.card.selection.clickThreshold,moveThreshold:this.config.card.selection.moveThreshold},hoverBehavior:{enabled:!0},...e,texture:t},s=new yn(n);return s.sceneManager=this,this.addObject(s)}addConfirmButton(t,e){return this.addObject(t),t.setActive(!1),typeof e=="function"&&t.setCallback("onClick",e),this.addSelectionListener(n=>{t.setActive(n.length>0)}),t}addAnalyzeButton(t={}){const e={width:this.config.button.dimensions.analyzeWidth||1.5,height:this.config.button.dimensions.analyzeHeight||.5,depth:.1,position:this.config.button.positions.analyze||{x:2,y:-2,z:.1},text:"Analyze Card",fontColor:"#ffffff",activeColor:this.config.button.colors.activeAnalyze||4360181,inactiveColor:this.config.button.colors.inactiveAnalyze||7895160,hoverColor:5413375,pushDepth:.03,...t},n=new Mi(e);this.addObject(n),n.setActive(!1),n.setCallback("onClick",()=>{console.log("Analyze button clicked!"),this.state.selectedCards.size>0?this.showNeuralNetwork():console.warn("No cards selected")});const s=this.addSelectionListener(r=>{console.log(`Selection listener triggered. Selected cards: ${r.length}`),n.setActive(r.length>0)});return n._unsubscribeSelection=s,n}addDebugCameraButton(){this.config.debug&&console.log("Adding debug camera button");const t=new Mi({width:this.config.button.dimensions.debugWidth||1.2,height:this.config.button.dimensions.debugHeight||.4,depth:.1,position:this.config.button.positions.debug||{x:2,y:1.5,z:.1},text:"Debug Camera",fontColor:"#ffffff",activeColor:this.config.button.colors.activeDebug||16711680,inactiveColor:this.config.button.colors.inactiveDebug||11141120,hoverColor:16724787,pushDepth:.03});this.addObject(t),t.setActive(!0);let e=!1;return t.setCallback("onClick",()=>{console.log("Debug camera button clicked!"),this.neuralNetworkManager||this.initNeuralNetwork(),e?(console.log("Moving camera back to original position"),this.transitionCamera({position:{x:this.config.camera.position.x,y:this.config.camera.position.y,z:this.config.camera.position.z},rotation:this.config.camera.rotation,lookAt:this.config.camera.lookAt,transitionDuration:this.config.camera.transitionDuration})):(console.log("Moving camera to network view position"),this.transitionCamera({position:{x:this.config.neuralNetwork.camera.position.x,y:this.config.neuralNetwork.camera.position.y,z:this.config.neuralNetwork.camera.position.z},rotation:this.config.neuralNetwork.camera.rotation,lookAt:this.config.neuralNetwork.camera.lookAt,transitionDuration:this.config.neuralNetwork.camera.transitionDuration})),e=!e}),t}removeObject(t){this.interactiveObjects.delete(t),t instanceof Mi&&this.buttonObjects.delete(t),this.scene.remove(t),t.dispose()}updateConfig(t){this.config=this._mergeConfig(this.config,t),this.state.currentView!=="network"&&!this.state.cameraTransition&&(this.config.camera.position&&this.camera.position.set(this.config.camera.position.x,this.config.camera.position.y,this.config.camera.position.z),this.config.camera.rotation&&this.camera.rotation.set(this.config.camera.rotation.x,this.config.camera.rotation.y,this.config.camera.rotation.z),this.config.camera.lookAt&&this.camera.lookAt(this.config.camera.lookAt.x,this.config.camera.lookAt.y,this.config.camera.lookAt.z)),t.scene&&t.scene.background&&this.setBackgroundColor(t.scene.background),t.scene&&t.scene.backgroundTransition&&this.setBackgroundTransition(t.scene.backgroundTransition),this.config.debug&&console.log("Configuration updated:",this.config)}}let Ve,sa;const Zp={debug:!0,camera:{fov:75,near:.1,far:1e3,position:{x:0,y:0,z:8},rotation:{x:0,y:0,z:0},lookAt:{x:0,y:0,z:0},transitionDuration:1e3},scene:{background:51,backgroundTransition:{enabled:!0,colors:[51,3342387,13107],transitionSpeed:.005}},card:{physics:{strength:.35,damping:.75,wiggleStrength:.6,zStrength:.5,zDamping:.7},dragging:{returnSpeed:.12}},neuralNetwork:{camera:{position:{x:-10,y:2,z:15},rotation:{x:10,y:.2,z:0},lookAt:{x:0,y:0,z:0},transitionDuration:1200},animation:{connectionsPerNeuron:7,randomDelayFactor:800}}},aa=[{texture:"./textures/joker.png",position:{x:-4.5,y:0,z:0},name:"joker",targetScene:"neural"},{texture:"./textures/joker.png",position:{x:-1.5,y:0,z:0},name:"ace",targetScene:"neural"},{texture:"./textures/joker.png",position:{x:1.5,y:0,z:0},name:"king",targetScene:"neural"},{texture:"./textures/joker.png",position:{x:4.5,y:0,z:0},name:"queen",targetScene:"neural"}];function jp(){const i=document.getElementById("app");if(!i)return;Ve=new Yp(i,Zp),Ve.initTextPhysics();const t=new Kc;new el;let e=0;const n=aa.length;aa.forEach((s,r)=>{t.load(s.texture,a=>{const o=Ve.addCard(a,{position:s.position,userData:{name:s.name,targetScene:s.targetScene,index:r}});s.cardObject=o,e++,console.log(`Loaded ${s.name} card (${e}/${n})`),e===n&&Ao()},void 0,a=>{console.error(`Failed to load texture ${s.texture}:`,a);const o=$p(s.name),l=Ve.addCard(o,{position:s.position,userData:{name:s.name,targetScene:s.targetScene,index:r},dragBehavior:{returnSpeed:.12,dampingFactor:.95,enabled:!0,returnPosition:s.position}});s.cardObject=l,e++,e===n&&Ao()})}),hl()}function $p(i){const t=document.createElement("canvas");t.width=256,t.height=384;const e=t.getContext("2d");return e.fillStyle="#2a1b3d",e.fillRect(0,0,t.width,t.height),e.strokeStyle="#fff",e.lineWidth=4,e.strokeRect(10,10,t.width-20,t.height-20),e.fillStyle="#fff",e.font="bold 48px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText(i.toUpperCase(),t.width/2,t.height/2),new Fr(t)}function Ao(){console.log("All cards loaded!"),Ve.addAnalyzeButton(),Ve.addDebugCameraButton(),Ve.animateText("Select a Card"),aa.forEach(i=>{const t=i.cardObject;if(!t)return;const e=t.onPointerEnter.bind(t);t.onPointerEnter=function(n){e(n),this._state.isHovering&&!this._state.isDragging&&Ve&&Ve.animateText(i.name.toUpperCase())},t.setCallback("onSelect",()=>{switch(console.log(`Card ${i.name} selected`),i.targetScene){case"neural":Ve.hasSelectedCards()&&console.log("Ready to analyze with neural network");break;case"particles":console.log("Particle scene not implemented yet"),Ve.animateText("Coming Soon!");break;case"physics":console.log("Physics scene not implemented yet"),Ve.animateText("Coming Soon!");break;case"gallery":console.log("Gallery scene not implemented yet"),Ve.animateText("Coming Soon!");break}})})}function hl(){sa=requestAnimationFrame(hl),Ve.update(1/60)}function Kp(){sa&&cancelAnimationFrame(sa),Ve&&Ve.dispose()}document.addEventListener("DOMContentLoaded",jp);window.addEventListener("unload",Kp);

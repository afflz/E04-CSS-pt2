/*!CK:2333169021!*//*1439303748,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Lqy\/i"]); }

__d('Jtrace',['Banzai'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();g.start=function(i){var j=Function.prototype.call,k={};Function.prototype.call=function(l){try{if(l instanceof Object&&'functionDetails' in l){var n=arguments[1];if(typeof n==='string'&&!k[n]){k[n]=1;if(Math.random()<i.sample){var o=localStorage.jt=1+~~localStorage.jt;if(o<=i.max)h.post('jtrace',{j:n,t:Date.now()});}}}else if(i.snap)this.call=j;}catch(m){}return j.apply(this,arguments);};};},null);
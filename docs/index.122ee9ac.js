"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global&&global;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&s+1<e.length&&56320==(64512&e.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++s)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class t{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,s.prototype.create)}}class s{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?function(e,t){return e.replace(r,((e,n)=>{const s=t[n];return null!=s?String(s):`<${n}?>`}))}(o,s):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new n(i,c,s)}}const r=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const n=e[r],a=t[r];if(o(n)&&o(a)){if(!i(n,a))return!1}else if(n!==a)return!1}for(const e of s)if(!n.includes(e))return!1;return!0}function o(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function a(e){return e&&e._delegate?e._delegate:e}class c{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const e=new t;if(this.instancesDeferred.set(n,e),this.isInitialized(n)||this.shouldAutoInitialize())try{const t=this.getOrInitializeService({instanceIdentifier:n});t&&e.resolve(t)}catch(e){}}return this.instancesDeferred.get(n).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),s=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(s)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=e,"[DEFAULT]"===s?void 0:s),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var s;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class h{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new l(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=[];var d;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(d||(d={}));const p={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},f=d.INFO,_={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},m=(e,t,...n)=>{if(t<e.logLevel)return;const s=(new Date).toISOString(),r=_[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${s}]  ${e.name}:`,...n)};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class g{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const b=new class{constructor(e){this.name=e,this._logLevel=f,this._logHandler=m,this._userLogHandler=null,u.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in d))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?p[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...e),this._logHandler(this,d.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...e),this._logHandler(this,d.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,d.INFO,...e),this._logHandler(this,d.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,d.WARN,...e),this._logHandler(this,d.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...e),this._logHandler(this,d.ERROR,...e)}}("@firebase/app"),v={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},w=new Map,y=new Map;function k(e,t){try{e.container.addComponent(t)}catch(n){b.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function R(e){const t=e.name;if(y.has(t))return b.debug(`There were multiple attempts to register component ${t}.`),!1;y.set(t,e);for(const t of w.values())k(t,e);return!0}function I(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const T=new s("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new c("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw T.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t,n){var s;let r=null!==(s=v[e])&&void 0!==s?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void b.warn(e.join(" "))}R(new c(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var O;O="",R(new c("platform-logger",(e=>new g(e)),"PRIVATE")),C("@firebase/app","0.7.14",O),C("@firebase/app","0.7.14","esm2017"),C("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
C("firebase","9.6.4","app");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S extends n{constructor(e,t){super(A(e),`Firebase Storage: ${t} (${A(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,S.prototype)}_codeEquals(e){return A(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function A(e){return"storage/"+e}function x(){return new S("unknown","An unknown error occurred, please check the error payload for server response.")}function U(){return new S("canceled","User canceled the upload/download.")}function P(){return new S("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function L(e){return new S("invalid-argument",e)}function $(){return new S("app-deleted","The Firebase app was deleted.")}function D(e,t){return new S("invalid-format","String does not match format '"+e+"': "+t)}function z(e){throw new S("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=F.makeFromUrl(e,t)}catch(t){return new F(e,"")}if(""===n.path)return n;throw new S("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const s="([A-Za-z0-9.\\-_]+)";const r=new RegExp("^gs://"+s+"(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:r,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${s}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:i},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===t?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${s}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:i}];for(let t=0;t<a.length;t++){const s=a[t],r=s.regex.exec(e);if(r){const e=r[s.indices.bucket];let t=r[s.indices.path];t||(t=""),n=new F(e,t),s.postModify(n);break}}if(null==n)throw function(e){return new S("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class N{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){return"string"==typeof e||e instanceof String}function M(e){return B()&&e instanceof Blob}function B(){return"undefined"!=typeof Blob}function j(e,t,n,s){if(s<t)throw L(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw L(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t,n){let s=t;return null==n&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function G(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){n=n+(t(s)+"="+t(e[s]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X,V;(V=X||(X={}))[V.NO_ERROR=0]="NO_ERROR",V[V.NETWORK_ERROR=1]="NETWORK_ERROR",V[V.ABORT=2]="ABORT";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(e,t,n,s,r,i,o,a,c,l,h){this.url_=e,this.method_=t,this.headers_=n,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{const n=this.resolve_,s=this.reject_,r=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(r,r.getResponse());void 0!==e?n(e):n()}catch(e){s(e)}else if(null!==r){const e=x();e.serverResponse=r.getErrorText(),this.errorCallback_?s(this.errorCallback_(r,e)):s(e)}else if(t.canceled){s(this.appDelete_?$():U())}else{s(new S("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?e(0,new K(!1,null,!0)):this.backoffId_=function(e,t,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return 2===a}let l=!1;function h(...e){l||(l=!0,t.apply(null,e))}function u(t){r=setTimeout((()=>{r=null,e(p,c())}),t)}function d(){i&&clearTimeout(i)}function p(e,...t){if(l)return void d();if(e)return d(),void h.call(null,e,...t);if(c()||o)return d(),void h.call(null,e,...t);let n;s<64&&(s*=2),1===a?(a=2,n=0):n=1e3*(s+Math.random()),u(n)}let f=!1;function _(e){f||(f=!0,d(),l||(null!==r?(e||(a=2),clearTimeout(r),u(0)):e||(a=1)))}return u(0),i=setTimeout((()=>{o=!0,_(!0)}),n),_}(((e,t)=>{if(t)return void e(!1,new K(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const s=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(s),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(s),this.pendingConnection_=null;const t=n.getErrorCode()===X.NO_ERROR,r=n.getStatus();if(!t||this.isRetryStatusCode_(r)){const t=n.getErrorCode()===X.ABORT;return void e(!1,new K(!1,null,t))}const i=-1!==this.successCodes_.indexOf(r);e(!0,new K(i,n))}))}),e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),s=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||s}}class K{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Z(...e){const t=Y();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(B())return new Blob(e);throw new S("unsupported-environment","This browser doesn't seem to support creating Blobs")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J="raw",Q="base64",ee="base64url",te="data_url";class ne{constructor(e,t){this.data=e,this.contentType=t||null}}function se(e,t){switch(e){case J:return new ne(re(t));case Q:case ee:return new ne(ie(e,t));case te:return new ne(function(e){const t=new oe(e);return t.base64?ie(Q,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw D(te,"Malformed data URL.")}return re(t)}(t.rest)}(t),new oe(t).contentType)}throw x()}function re(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|63&s);else if(55296==(64512&s)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){s=65536|(1023&s)<<10|1023&e.charCodeAt(++n),t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|63&s)}else t.push(239,191,189)}else 56320==(64512&s)?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|63&s)}return new Uint8Array(t)}function ie(e,t){switch(e){case Q:{const n=-1!==t.indexOf("-"),s=-1!==t.indexOf("_");if(n||s){throw D(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case ee:{const n=-1!==t.indexOf("+"),s=-1!==t.indexOf("/");if(n||s){throw D(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(t)}catch(t){throw D(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let e=0;e<n.length;e++)s[e]=n.charCodeAt(e);return s}class oe{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw D(te,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;var s,r;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */null!=n&&(this.base64=(r=";base64",!!((s=n).length>=r.length)&&s.substring(s.length-r.length)===r),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class ae{constructor(e,t){let n=0,s="";M(e)?(this.data_=e,n=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(M(this.data_)){const i=this.data_,o=(s=e,r=t,(n=i).webkitSlice?n.webkitSlice(s,r):n.mozSlice?n.mozSlice(s,r):n.slice?n.slice(s,r):null);return null===o?null:new ae(o)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new ae(n,!0)}var n,s,r;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}static getBlob(...e){if(B()){const t=e.map((e=>e instanceof ae?e.data_:e));return new ae(Z.apply(null,t))}{const t=e.map((e=>H(e)?se(J,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const s=new Uint8Array(n);let r=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)s[r++]=e[t]})),new ae(s,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e,t){return t}class ue{constructor(e,t,n,s){this.server=e,this.local=t||e,this.writable=!!n,this.xform=s||he}}let de=null;function pe(){if(de)return de;const e=[];e.push(new ue("bucket")),e.push(new ue("generation")),e.push(new ue("metageneration")),e.push(new ue("name","fullPath",!0));const t=new ue("name");t.xform=function(e,t){return function(e){return!H(e)||e.length<2?e:le(e)}(t)},e.push(t);const n=new ue("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new ue("timeCreated")),e.push(new ue("updated")),e.push(new ue("md5Hash",null,!0)),e.push(new ue("cacheControl",null,!0)),e.push(new ue("contentDisposition",null,!0)),e.push(new ue("contentEncoding",null,!0)),e.push(new ue("contentLanguage",null,!0)),e.push(new ue("contentType",null,!0)),e.push(new ue("metadata","customMetadata",!0)),de=e,de}function fe(e,t,n){const s={type:"file"},r=n.length;for(let e=0;e<r;e++){const r=n[e];s[r.local]=r.xform(s,t[r.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,s=e.fullPath,r=new F(n,s);return t._makeStorageReference(r)}})}(s,e),s}function _e(e,t,n){const s=ce(t);if(null===s)return null;return fe(e,s,n)}function me(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const s=t[r];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t,n,s){this.url=e,this.method=t,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e){if(!e)throw x()}function ve(e,t){return function(n,s){const r=_e(e,s,t);return be(null!==r),r}}function we(e){return function(t,n){let s;var r,i;return 401===t.getStatus()?s=t.getErrorText().includes("Firebase App Check token is invalid")?new S("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new S("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(i=e.bucket,s=new S("quota-exceeded","Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(r=e.path,s=new S("unauthorized","User does not have permission to access '"+r+"'.")):s=n,s.serverResponse=n.serverResponse,s}}function ye(e){const t=we(e);return function(n,s){let r=t(n,s);var i;return 404===n.getStatus()&&(i=e.path,r=new S("object-not-found","Object '"+i+"' does not exist.")),r.serverResponse=s.serverResponse,r}}function ke(e,t,n){const s=q(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,i=new ge(s,"GET",ve(e,n),r);return i.errorHandler=ye(t),i}function Re(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),s}function Ie(e,t,n,s,r){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const c=Re(t,s,r),l="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+me(c,n)+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",h="\r\n--"+a+"--",u=ae.getBlob(l,s,h);if(null===u)throw P();const d={name:c.fullPath},p=q(i,e.host,e._protocol),f=e.maxUploadRetryTime,_=new ge(p,"POST",ve(e,n),f);return _.urlParams=d,_.headers=o,_.body=u.uploadData(),_.errorHandler=we(t),_}class Te{constructor(e,t,n,s){this.current=e,this.total=t,this.finalized=!!n,this.metadata=s||null}}function Ee(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){be(!1)}return be(!!n&&-1!==(t||["active"]).indexOf(n)),n}function Ce(e,t,n,s,r,i,o,a){const c=new Te(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw new S("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");const l=c.total-c.current;let h=l;r>0&&(h=Math.min(h,r));const u=c.current,d=u+h,p={"X-Goog-Upload-Command":h===l?"upload, finalize":"upload","X-Goog-Upload-Offset":`${c.current}`},f=s.slice(u,d);if(null===f)throw P();const _=t.maxUploadRetryTime,m=new ge(n,"POST",(function(e,n){const r=Ee(e,["active","final"]),o=c.current+h,a=s.size();let l;return l="final"===r?ve(t,i)(e,n):null,new Te(o,a,"final"===r,l)}),_);return m.headers=p,m.body=f.uploadData(),m.progressCallback=a||null,m.errorHandler=we(e),m}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="running",Se="paused",Ae="success",xe="canceled",Ue="error";function Pe(e){switch(e){case"running":case"pausing":case"canceling":return Oe;case"paused":return Se;case"success":return Ae;case"canceled":return xe;default:return Ue}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t,n){if("function"==typeof e||null!=t||null!=n)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=X.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=X.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=X.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,s){if(this.sent_)throw z("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==s)for(const e in s)s.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,s[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw z("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw z("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw z("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw z("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class ze extends De{initXhr(){this.xhr_.responseType="text"}}function Fe(){return new ze}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=pe(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=function(e,t,n,s,r){const i=t.bucketOnlyServerUrl(),o=Re(t,s,r),a={name:o.fullPath},c=q(i,e.host,e._protocol),l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=me(o,n),u=e.maxUploadRetryTime,d=new ge(c,"POST",(function(e){let t;Ee(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){be(!1)}return be(H(t)),t}),u);return d.urlParams=a,d.headers=l,d.body=h,d.errorHandler=we(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(n,Fe,e,t);this._request=s,s.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const s=function(e,t,n,s){const r=e.maxUploadRetryTime,i=new ge(n,"POST",(function(e){const t=Ee(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){be(!1)}n||be(!1);const r=Number(n);return be(!isNaN(r)),new Te(r,s.size(),"final"===t)}),r);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=we(t),i}(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(s,Fe,t,n);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=262144*this._chunkMultiplier,t=new Te(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((s,r)=>{let i;try{i=Ce(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const o=this._ref.storage._makeRequest(i,Fe,s,r);this._request=o,o.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){262144*this._chunkMultiplier<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=ke(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(n,Fe,e,t);this._request=s,s.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=Ie(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(n,Fe,e,t);this._request=s,s.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=U(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=Pe(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,s){const r=new Le(t||void 0,n||void 0,s||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(Pe(this._state)){case Ae:$e(this._resolve.bind(null,this.snapshot))();break;case xe:case Ue:$e(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Pe(this._state)){case Oe:case Se:e.next&&$e(e.next.bind(e,this.snapshot))();break;case Ae:e.complete&&$e(e.complete.bind(e))();break;default:e.error&&$e(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){this._service=e,this._location=t instanceof F?t:F.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new He(e,t)}get root(){const e=new F(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return le(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new F(this._location.bucket,e);return new He(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new S("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function Me(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),s=new F(e._location.bucket,n);return new He(e.storage,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e,t){if(e instanceof Ge){const n=e;if(null==n._bucket)throw new S("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const s=new He(n,n._bucket);return null!=t?Be(s,t):s}return void 0!==t?Me(e,t):e}function je(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Ge)return new He(e,t);throw L("To use ref(service, url), the first argument must be a Storage instance.")}return Be(e,t)}function qe(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:F.makeFromBucketSpec(n,e)}class Ge{constructor(e,t,n,s,r){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host="firebasestorage.googleapis.com",this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=s?F.makeFromBucketSpec(s,this._host):qe(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=F.makeFromBucketSpec(this._url,e):this._bucket=qe(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){j("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){j("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new He(this,e)}_makeRequest(e,t,n,s){if(this._deleted)return new N($());{const r=function(e,t,n,s,r,i){const o=G(e.urlParams),a=e.url+o,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,i),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,s),new W(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r)}(e,this._appId,n,s,t,this._firebaseVersion);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(e,t){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,s).getPromise()}}function Xe(e,t,n){return function(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new Ne(e,new ae(t),n)}(e=a(e),t,n)}function Ve(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new Ge(n,s,r,t,"9.6.4")}function We(){}function Ke(e,t=[],n){const s=document.createElement(e);return t.length&&s.classList.add(...t),n&&(s.textContent=n),s}R(new c("storage",Ve,"PUBLIC").setMultipleInstances(!0)),C("@firebase/storage","0.9.1",""),C("@firebase/storage","0.9.1","esm2017");const Ye=function(e=function(e="[DEFAULT]"){const t=w.get(e);if(!t)throw T.create("no-app",{appName:e});return t}(),t){return I(e=a(e),"storage").getImmediate({identifier:t})}(function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),s=n.name;if("string"!=typeof s||!s)throw T.create("bad-app-name",{appName:String(s)});const r=w.get(s);if(r){if(i(e,r.options)&&i(n,r.config))return r;throw T.create("duplicate-app",{appName:s})}const o=new h(s);for(const e of y.values())o.addComponent(e);const a=new E(e,n,o);return w.set(s,a),a}({apiKey:"AIzaSyCc77lLNLeCI8Yv6auV10zpoT1LH8eS7FM",authDomain:"file-upload-8a17c.firebaseapp.com",projectId:"file-upload-8a17c",storageBucket:"file-upload-8a17c.appspot.com",messagingSenderId:"4964423175",appId:"1:4964423175:web:fc1332867d86cf39653ca2"}));!function(e,t={}){let n=[];const s=t.onUpload??We,r=document.querySelector(e);r.hidden=!0,t.multi&&r.setAttribute("multiple",!0),t.accept&&Array.isArray(t.accept)&&r.setAttribute("accept",t.accept.join(","));const i=Ke("div",["fu-previews"]),o=Ke("button",["fu-btn"],"Открыть"),a=Ke("button",["fu-btn","fu-btn--primary"],"Загрузить");a.hidden=!0,r.insertAdjacentElement("afterend",i),r.insertAdjacentElement("afterend",a),r.insertAdjacentElement("afterend",o);const c=e=>{e.style.transform="translateY(0)",e.innerHTML='<div class="fu-preview__progress"></div>'};o.addEventListener("click",(()=>r.click())),r.addEventListener("change",(e=>{e.target.files.length&&(n=Array.from(e.target.files),i.innerHTML="",a.hidden=!1,n.forEach((e=>{if(!e.type.match("image"))return;const t=new FileReader;t.onload=t=>{const n=t.target.result;i.insertAdjacentHTML("afterbegin",`\n          <article class="fu-preview">\n            <button class="fu-preview__remove" data-name="${e.name}">&times;</button>\n            <img class="fu-preview__img" src="${n}" alt="${e.name}" />\n            <div class="fu-preview__info">\n              <span class="fu-preview__name">${e.name}</span>\n              <span class="fu-preview__size">${function(e){const t=["Bytes","KB","MB","GB","TB"];if(!e)return"0 Byte";const n=parseInt(Math.floor(Math.log(e)/Math.log(1024)));return Math.round(e/Math.pow(1024,n))+" "+t[n]}(e.size)}</span>\n            </div>\n          </article>\n        `)},t.readAsDataURL(e)})))})),i.addEventListener("click",(e=>{if(!e.target.dataset.name)return;const{name:t}=e.target.dataset;n=n.filter((e=>e.name!==t)),n.length||(a.hidden=!0);const s=i.querySelector(`[data-name="${t}"]`).closest(".fu-preview");s.classList.add("fu-preview--removing");const r=()=>{s.remove(),s.removeEventListener("transitionend",r)};s.addEventListener("transitionend",r)})),a.addEventListener("click",(()=>{i.querySelectorAll(".fu-preview__remove").forEach((e=>e.remove()));const e=i.querySelectorAll(".fu-preview__info");e.forEach(c),s(n,e)}))}("#file",{multi:!0,accept:[".png",".jpg",".jpeg",".gif"],onUpload(e,t){e.forEach(((e,n)=>{var s,r;Xe((s=Ye,r=`images/${e.name}`,je(s=a(s),r)),e).on("state_changed",(e=>{const s=(e.bytesTransferred/e.totalBytes*100).toFixed(0),r=t[n].querySelector(".fu-preview__progress");r.textContent=s,r.style.width=`${s}%`}),(e=>console.error(e)),(()=>console.log("Successful uploads on complete")))}))}});
//# sourceMappingURL=index.122ee9ac.js.map

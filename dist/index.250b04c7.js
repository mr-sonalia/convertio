// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7BONy":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "6315ebf922a29661e8263da0250b04c7";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"3miIZ":[function(require,module,exports) {
"use strict";
var _modelJs = require("./model.js");
var _viewsConversionRatesViewJs = require("./views/ConversionRatesView.js");
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _viewsConversionRatesViewJsDefault = _parcelHelpers.interopDefault(_viewsConversionRatesViewJs);
var _viewsStaticViewJs = require("./views/StaticView.js");
var _viewsStaticViewJsDefault = _parcelHelpers.interopDefault(_viewsStaticViewJs);
// * VARIABLES
// * FUNCTIONS
const controlConversionRates = async () => {
  try {
    const query = _viewsConversionRatesViewJsDefault.default.getQuery();
    const amount = _viewsConversionRatesViewJsDefault.default.getAmount();
    if (!query) return;
    await _modelJs.loadConversionRates(query, amount);
    // prettier-ignore
    _viewsConversionRatesViewJsDefault.default.renderResults(_modelJs.state.search.query, _modelJs.state.search.amount, _modelJs.state.result);
  } catch (error) {}
};
const controlAtoBConverion = async () => {};
// * INIT
const init = function () {
  _viewsStaticViewJsDefault.default.renderStatic();
  _viewsConversionRatesViewJsDefault.default.renderInputForm();
  _viewsConversionRatesViewJsDefault.default.addSearchHandler(controlConversionRates);
};
init();

},{"./model.js":"1hp6y","./views/ConversionRatesView.js":"7kQv5","./views/StaticView.js":"5U5Dr","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"1hp6y":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "state", function () {
  return state;
});
_parcelHelpers.export(exports, "loadConversionRates", function () {
  return loadConversionRates;
});
var _configJs = require("./config.js");
var _helpersJs = require("./helpers.js");
const state = {
  search: {
    query: ``,
    amount: null,
    rates: []
  },
  result: []
};
const createConversionRateObject = data => {
  const {result} = data;
  return {
    baseCode: result.base_code,
    conversionRates: result.conversion_rates
  };
};
const loadConversionRates = async (query, amount) => {
  state.search.query = query;
  state.search.amount = amount;
  try {
    const data = await _helpersJs.AJAX(`${_configJs.API_URL}/${_configJs.API_KEY}/latest/${query}`);
    // state.search.baseCode = data.base_code;
    state.search.rates = Object.entries(data.conversion_rates);
    state.result = state.search.rates.map(rate => {
      return {
        baseCode: rate[0],
        ratio: rate[1],
        finalAmount: +(rate[1] * amount).toFixed(3)
      };
    });
    console.table(state.result);
  } catch (e) {
    throw e;
  }
};

},{"./config.js":"6pr2F","./helpers.js":"581KF","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"6pr2F":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "API_KEY", function () {
  return API_KEY;
});
_parcelHelpers.export(exports, "API_URL", function () {
  return API_URL;
});
_parcelHelpers.export(exports, "TIMEOUT_SEC", function () {
  return TIMEOUT_SEC;
});
_parcelHelpers.export(exports, "SUPPORTED_COUNTRY_CODES", function () {
  return SUPPORTED_COUNTRY_CODES;
});
const API_KEY = `41e59bf56bb30803a5891775`;
const API_URL = `https://v6.exchangerate-api.com/v6/`;
const TIMEOUT_SEC = 10;
const SUPPORTED_COUNTRY_CODES = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW"];

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"581KF":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "amountRatioMultiplier", function () {
  return amountRatioMultiplier;
});
_parcelHelpers.export(exports, "AJAX", function () {
  return AJAX;
});
var _config = require("./config");
const amountRatioMultiplier = (amount, ratio) => amount * ratio;
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
const AJAX = async url => {
  try {
    const response = await Promise.race([fetch(url), timeout(_config.TIMEOUT_SEC)]);
    const data = await response.json();
    if (!response.ok) throw new Error("Could not find what you were looking for 🙁");
    return data;
  } catch (error) {
    throw error;
  }
};

},{"./config":"6pr2F","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"7kQv5":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _ViewJs = require("./View.js");
require("../helpers.js");
function _defineProperty(obj, key, value) {
  if ((key in obj)) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
class ConversionratesView extends _ViewJs.View {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "formElement", document.querySelector(".form"));
    _defineProperty(this, "result", {
      amount: null,
      tableData: ""
    });
  }
  renderInputForm() {
    // this.renderStatic();
    const markup = `
		<form class="form pad-l-2 pad-r-2" method="get">
			<div class="mar-b-3 input-field-container">
				<label for="base-currency" class="label mar-b-1">Select base currency</label>
				<input class="form-control input-field" list="base-currencies" name="base-currency" id="base-currency" placeholder="Select any one" required/>
				<datalist id="base-currencies">
				${this.renderSupportedCounties()}
				</datalist>
			</div>
			<div class="mar-b-6 input-field-container">
				<label for="amount" class="label mar-b-1">Enter amount</label>
				<div class="base-currency-holder">
					<span class="base-currency">AMT</span>
				</div>
				<input type="number" min="0" class="form-control input-field numeric" id="amount" aria-describedby="null" placeholder="500.50" required />
			</div>
			<div class="mar-b-3 input-field-container">
				<div class="button-group">
					<button type="submit" id="conversionRates" href="#" class="button button-primary button-lg return-results-button">Show Conversion Rates</button>
				</div>
			</div>
		</form>
		`;
    this.mainElement.insertAdjacentHTML("beforeend", markup);
  }
  renderResults(baseCode, amount, tableData) {
    this.render();
    this.result = {
      amount,
      tableData
    };
    this.tableContent = tableData.map(item => {
      // prettier-ignore
      if (baseCode == item.baseCode) return '';
      return `<tr class="tr">
                        <td class="td clr-green-200">${item.baseCode}</td>
                        <td class="td">${item.ratio}</td>
                        <td class="td text-align-right">${new Intl.NumberFormat("en-IN").format(item.finalAmount)}</td>
                    </tr>`;
    }).join("");
    const markup = `
		<form class="form pad-l-2 pad-r-2" method="get">
			<div class="mar-b-4 input-field-container">
				<label for="amount" class="label mar-b-1">Current amount</label>
				<div class="base-currency-holder">
					<span class="base-currency">${baseCode}</span>
				</div>
				<input
					type="number"
					min="0"
					class="form-control input-field numeric"
					id="amount"
					aria-describedby="null"
					placeholder="500.50"
				/>
			</div>
		</form>

		<div class="table-container pad-l-2 pad-r-2">
			<table id="currency-rates-table" class="table table-borderless">
				<thead>
					<tr class="tr">
						<th style="width: 25%" class="th label" scope="col">Base</th>
						<th style="width: 25%" class="th label" scope="col">Ratio</th>
						<th style="width: 50%" class="th label text-align-right" scope="col">Amount</th>
					</tr>
				</thead>
				<tbody>${this.tableContent}</tbody>
			</table>
		</div>
		`;
    this.mainElement.insertAdjacentHTML("beforeend", markup);
    document.getElementById("amount").value = amount;
  }
  getQuery() {
    return document.querySelector("#base-currency").value;
  }
  getAmount() {
    return document.getElementById("amount").value;
  }
  addSearchHandler(handler) {
    document.querySelector(".form").addEventListener("submit", e => {
      e.preventDefault();
      handler();
    });
  }
}
exports.default = new ConversionratesView();
let formatter = Intl.NumberFormat("en-US");

},{"./View.js":"48jhP","../helpers.js":"581KF","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"48jhP":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "View", function () {
  return View;
});
var _configJs = require("../config.js");
function _defineProperty(obj, key, value) {
  if ((key in obj)) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
class View {
  constructor() {
    _defineProperty(this, "mainElement", document.getElementById("main"));
  }
  clear() {
    this.mainElement.innerHTML = "";
  }
  render() {
    this.clear();
    this.renderTabbedButtons();
    this.addTabbedButtonEvent();
  }
  renderError() {
    console.log("Error");
  }
  renderTabbedButtons() {
    const markup = `
        <div class="button-group pad-l-2 pad-r-2 mar-t-3 mar-b-5">
            <button id="conversion-rates" href="#" class="button button-primary button-md tab-button active">Conversion Rates</button>
            <button id="a-to-b-conversion" href="#" class="button button-primary button-md tab-button">A to B Conversion</button>
        </div>
        `;
    this.mainElement.insertAdjacentHTML("beforeend", markup);
  }
  addTabbedButtonEvent() {
    const tabButton = document.querySelectorAll(".tab-button");
    tabButton.forEach(tButton => tButton.addEventListener("click", async function (e) {
      tabButton.forEach(tBtn => tBtn.classList.remove("active"));
      this.classList.toggle("active");
    }));
  }
  renderSupportedCounties() {
    return _configJs.SUPPORTED_COUNTRY_CODES.map(code => `<option>${code}</option>`).join("");
  }
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","../config.js":"6pr2F"}],"5U5Dr":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _ViewJs = require("./View.js");
class StaticView extends _ViewJs.View {
  // returnResults() {
  // ["load"].forEach((Event) => {
  // window.addEventListener(Event);
  // });
  // }
  renderStatic() {
    this.clear();
    this.renderNavbar();
    this.render();
  }
  renderNavbar() {
    const markup = `
        <nav class="navbar">
            <div class="container-fluid">
                <div class="nav-brand"></div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="" class="nav-link">Github</a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </nav>
        `;
    document.body.insertAdjacentHTML("afterbegin", markup);
  }
}
exports.default = new StaticView();

},{"./View.js":"48jhP","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["7BONy","3miIZ"], "3miIZ", "parcelRequirea32b")

//# sourceMappingURL=index.250b04c7.js.map

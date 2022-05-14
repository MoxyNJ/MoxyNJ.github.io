/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/workbox-core/_private/Deferred.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-core/_private/Deferred.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deferred": () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/WorkboxError.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkboxError": () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheMatchIgnoreParams": () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheNames.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheNames.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheNames": () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canConstructResponseFromBodyStream": () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeQuotaErrorCallbacks": () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/getFriendlyURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendlyURL": () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in self)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



/***/ }),

/***/ "./node_modules/workbox-core/_private/timeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-core/_private/timeout.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeout": () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/waitUntil.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-core/_private/waitUntil.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitUntil": () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "./node_modules/workbox-core/_version.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_version.js ***!
  \***********************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:6.5.1'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-core/copyResponse.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/copyResponse.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyResponse": () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messageGenerator": () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quotaErrorCallbacks": () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheController.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheController.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheFallbackPlugin": () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheRoute.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheRoute.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheRoute": () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheStrategy.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheStrategy": () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            response = await handler.fetch(new Request(request, {
                integrity: integrityInRequest || integrityInManifest,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            if (integrityInManifest && noIntegrityConflict) {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ }),

/***/ "./node_modules/workbox-precaching/_types.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/_types.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


/***/ }),

/***/ "./node_modules/workbox-precaching/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:6.5.1'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/addPlugins.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-precaching/addPlugins.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPlugins": () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/addRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/addRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRoute": () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanupOutdatedCaches": () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHandlerBoundToURL": () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCacheKeyForURL": () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-precaching/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




/***/ }),

/***/ "./node_modules/workbox-precaching/matchPrecache.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/matchPrecache.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchPrecache": () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precache.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/precache.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precache": () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precacheAndRoute.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precacheAndRoute": () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheCacheKeyPlugin": () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!******************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheInstallReportPlugin": () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCacheKey": () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteOutdatedCaches": () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateURLVariations": () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!********************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreatePrecacheController": () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printCleanupDetails": () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printInstallDetails": () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeIgnoredSearchParams": () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "./node_modules/workbox-routing/RegExpRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-routing/RegExpRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegExpRoute": () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Route.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/Route.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Router.js":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/Router.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/_version.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-routing/_version.js ***!
  \**************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:6.5.1'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-routing/registerRoute.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-routing/registerRoute.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerRoute": () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "./node_modules/workbox-routing/utils/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/utils/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMethod": () => (/* binding */ defaultMethod),
/* harmony export */   "validMethods": () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreateDefaultRouter": () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "./node_modules/workbox-routing/utils/normalizeHandler.js":
/*!****************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeHandler": () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "./node_modules/workbox-strategies/Strategy.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/Strategy.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strategy": () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


/***/ }),

/***/ "./node_modules/workbox-strategies/StrategyHandler.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-strategies/StrategyHandler.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrategyHandler": () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:6.5.1'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-precaching/index.js");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************************!*\
  !*** ./node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \*******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */



function parseSwParams() {
  const params = JSON.parse(
    new URLSearchParams(self.location.search).get('params'),
  );
  if (params.debug) {
    console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
  }
  return params;
}

// doc advises against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://twitter.com/sebastienlorber/status/1280155204575518720
// but looks it's working fine as it's inlined by webpack, need to double check
async function runSWCustomCode(params) {
  if (false) {}
}

/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 *
 * @param {string} url
 */
function getPossibleURLs(url) {
  const possibleURLs = [];
  const urlObject = new URL(url, self.location.href);

  if (urlObject.origin !== self.location.origin) {
    return possibleURLs;
  }

  // Ignore search params and hash
  urlObject.search = '';
  urlObject.hash = '';

  // /blog.html
  possibleURLs.push(urlObject.href);

  // /blog/ => /blog/index.html
  if (urlObject.pathname.endsWith('/')) {
    possibleURLs.push(`${urlObject.href}index.html`);
  } else {
    // /blog => /blog/index.html
    possibleURLs.push(`${urlObject.href}/index.html`);
  }

  return possibleURLs;
}

(async () => {
  const params = parseSwParams();

  // eslint-disable-next-line no-underscore-dangle
  const precacheManifest = [{"revision":"e2d2c0da84a097dd3d19347cb1f2d8af","url":"404.html"},{"revision":"84e40940431b91c16ff1b26751e92a6f","url":"about/index.html"},{"revision":"cc74958a7b00b8f8ae4d2041f84bddaf","url":"archive/index.html"},{"revision":"ce8d5046de79f7d0aed617e9757e9a3a","url":"assets/css/styles.027cc5ec.css"},{"revision":"9c8239bc68da193142bb11719b6275c2","url":"assets/js/0049b95a.d90f8da4.js"},{"revision":"20074438c8c5e93537beb85a55cabb85","url":"assets/js/00a3dc53.8d6054f5.js"},{"revision":"d7bddf2e8f2f4fbcd03e462587105639","url":"assets/js/01a85c17.9e6b74df.js"},{"revision":"7cb6dc42c396863c8a8366768c74baff","url":"assets/js/01ec4122.5a81d07b.js"},{"revision":"04208f9d474ca136ec6ff65d5683011a","url":"assets/js/02149c09.da07b7fa.js"},{"revision":"3fe1d6ccc7800aacdcc0e895039db95b","url":"assets/js/033a3ed3.fae301e2.js"},{"revision":"360757d72955ee9146e99e15f52f0299","url":"assets/js/03685665.50b589cd.js"},{"revision":"ad642e99a7dcb47ec11e0e54cc4bfc71","url":"assets/js/047b18d4.b1eb8ce6.js"},{"revision":"9f2acbbf88f9f1c4fd2f37045fda2dde","url":"assets/js/0580e63d.72dd245f.js"},{"revision":"fb2a0996539af525eb6ebcba00b0e294","url":"assets/js/059ae1d3.ec2ea576.js"},{"revision":"b1b8c014a46131ee64b31ad64057e706","url":"assets/js/0693c288.779bf911.js"},{"revision":"4e0df2e510fa1d35ec709471fdd1f869","url":"assets/js/06dbe2c1.e140c537.js"},{"revision":"463496b3e7b33b7e65ca8fdda9e8e8e9","url":"assets/js/071ffe05.15b5b35e.js"},{"revision":"a6b1ea8933e8ce156b01d9863a474614","url":"assets/js/0761fb28.12ee8b2d.js"},{"revision":"7793128ba09a6def98c6e6ab46d5c3a1","url":"assets/js/0884f555.2defea99.js"},{"revision":"0d70c37ae2ab1a860aa9870ea167312c","url":"assets/js/09c8749a.ddb4d14e.js"},{"revision":"9d85a19452a0ddf02948d3da787166f4","url":"assets/js/0ac111e4.af7329d3.js"},{"revision":"fa0c5fd93826ab3d8b1834b2517a4102","url":"assets/js/0c071de2.6c6708dd.js"},{"revision":"dfafc0f57c643d0bdc809605314c0b1e","url":"assets/js/0c66370d.fc30d924.js"},{"revision":"9358b40f01066d87aff114989fa4b2f8","url":"assets/js/0d7f5d06.6317ce9e.js"},{"revision":"9fc91971a7324e4035afd74b20537099","url":"assets/js/0e4870d2.71b96dda.js"},{"revision":"19ed866b83d0820eb04bdf7b08db0d35","url":"assets/js/0f06121f.6a5c72fd.js"},{"revision":"d79c43f15e381f9e77590c71d8c0b3d5","url":"assets/js/0f6db7b3.4650f170.js"},{"revision":"7e53943755ae8ea57ebffe2f7be464d0","url":"assets/js/105a5775.cfcba5f0.js"},{"revision":"5816b78ef60e5a5462518c3a4b380dd4","url":"assets/js/1072.2f097d26.js"},{"revision":"290e7ea8670913d036811b6acb523070","url":"assets/js/11454046.cbe1ba7c.js"},{"revision":"7944d6bc9f12d3e580610f7b19850354","url":"assets/js/11c83fb4.1fe25209.js"},{"revision":"8d198344e325b7750da5909cd5f3b90e","url":"assets/js/11eabd25.6420dea6.js"},{"revision":"640d342ca9667f0aae73fae77724ba92","url":"assets/js/11f5db1f.b5100491.js"},{"revision":"9ae2fd085f16704d9e856d4f5adcafc3","url":"assets/js/1212.f2b76b16.js"},{"revision":"078722fb4e959328d039abc969693cba","url":"assets/js/12facc11.9445420e.js"},{"revision":"39aab309f1e0b9b23703a98c55c75fb2","url":"assets/js/135c0118.392ffe70.js"},{"revision":"0548ac5033fd737d08774eb0d3c4456e","url":"assets/js/13e0309b.eb85aa5e.js"},{"revision":"9c988852843f736a5923a90ae0099126","url":"assets/js/14eb3368.d28960e0.js"},{"revision":"0445a0d953a0586aa1f9233464a8929c","url":"assets/js/15586728.130b5832.js"},{"revision":"88a6297f4315d0d277a2119ede745a29","url":"assets/js/1630b607.2c664689.js"},{"revision":"a7bcdc50ba5f3de3c54d3ee2d36dfc33","url":"assets/js/163cb79f.1b84bf2d.js"},{"revision":"f2ca7b342db4f73dab7095a48f5c4af2","url":"assets/js/166cc5ce.67144f40.js"},{"revision":"de6413ecd832deb1332aa5d86c20b2a1","url":"assets/js/16e195ef.f7ab837a.js"},{"revision":"6e0c917c1d4ccf559606004535ba4908","url":"assets/js/17896441.213def0b.js"},{"revision":"6c42f0ef835d24e0e956541f0a71b0b5","url":"assets/js/1805d33a.287f309c.js"},{"revision":"fd31171bc0c5107136b06e541051bfde","url":"assets/js/18e4b356.890b36ca.js"},{"revision":"600ce31f371b15fe3cdcd560d63efc38","url":"assets/js/19ad0381.0adc1978.js"},{"revision":"e2b017fd7dd72e270ee6b27c68b7fa1c","url":"assets/js/19feea96.5f9a6905.js"},{"revision":"9ded134bfe12bf26df19b126aac3fcc3","url":"assets/js/1a4e3797.6ea1a710.js"},{"revision":"607b2d7117eaf5078db072a0aafccf5a","url":"assets/js/1a507978.9a3b9978.js"},{"revision":"190021931b334de823b5f70abde0d731","url":"assets/js/1b350a33.1c538f6b.js"},{"revision":"68dac8d87302a5a5bf2bdedee8a5a23e","url":"assets/js/1be70280.fea5bf20.js"},{"revision":"f7f56fb4d078d0b88587f23cb147ba9a","url":"assets/js/1be732a3.306f534c.js"},{"revision":"67050a2846209b31b192e7b5a5f0abf8","url":"assets/js/1be78505.3ccfe4e9.js"},{"revision":"3ca76f7ddb71ed4e6acf101dca84a0e8","url":"assets/js/1c26bb52.992d99ff.js"},{"revision":"ea5d5e14b6b7191c1c83523fde708873","url":"assets/js/1c7f8553.97e24b94.js"},{"revision":"a14413a4ca7c606f7b2d0b1d2ab9ee1c","url":"assets/js/1cd5c32d.7ff4bfa2.js"},{"revision":"ea5d594ad9d588d14404e081f902e6be","url":"assets/js/1d2ade7b.6d6e390e.js"},{"revision":"b9cc126a82fb39c83e6028be70d65e0a","url":"assets/js/1e619dbd.eed18a79.js"},{"revision":"65648edec3de91df8eaa7735b28b831e","url":"assets/js/1f20181f.7fe55270.js"},{"revision":"16afebb8d42916e78e31531d7ed09b2c","url":"assets/js/1f391b9e.0eb13731.js"},{"revision":"9e3b189a734e184b8bb18df94cdc1797","url":"assets/js/209b4453.6c558743.js"},{"revision":"3ab95449fb81a144ee7174619928b334","url":"assets/js/20c96f42.85b58264.js"},{"revision":"c56c4564f293045f5873ea9dd91995f7","url":"assets/js/21462f54.049672b0.js"},{"revision":"aba96eab4708642fa9a835039c0470c1","url":"assets/js/2153.57ea0ada.js"},{"revision":"22ec5935e056bcfdeab8021e1ed945a3","url":"assets/js/216952ee.b3d426c2.js"},{"revision":"94ece8c8206cb5f89f050389aba26f1e","url":"assets/js/2185c5aa.f25a8862.js"},{"revision":"2edf3beac6ba080475473263f9255ae5","url":"assets/js/21fba4d0.f6f8aabb.js"},{"revision":"8bcd9a12f2e0f4c37e2810d4eaa059ee","url":"assets/js/22aa460c.bbed6465.js"},{"revision":"d338845bc8ace996b99b172cc0af52c1","url":"assets/js/22ab33dc.16e593ae.js"},{"revision":"eab1e7b2811d2ab3286e7e17566ffa09","url":"assets/js/22fb4c87.58ab40f0.js"},{"revision":"187155c23a021c8cd0a117a2881467a4","url":"assets/js/239aa054.81e1ee89.js"},{"revision":"5871af823d3553b9940a4a4067ffaeb7","url":"assets/js/266a8955.4b01a8ab.js"},{"revision":"b911dc9822c5147cce3b0b898830b1f5","url":"assets/js/27203bd0.69e4cbc5.js"},{"revision":"b087f4a910fd5c9aff07e33ed9835e68","url":"assets/js/274a4888.6f611507.js"},{"revision":"f1b1cffe3b37610f98f791ad83bdbff4","url":"assets/js/274c9143.da3f5542.js"},{"revision":"b02f664cc1a0f393f8b359514d681006","url":"assets/js/279bde67.24e66be9.js"},{"revision":"b53d284cd5869dd946d0081dfcede7b1","url":"assets/js/27dbb47a.7f778594.js"},{"revision":"8493d3fdc6b61485105ba520db213b90","url":"assets/js/2969e5b8.d28dd5b1.js"},{"revision":"e659c9fabfe074f1ebca0a348d839831","url":"assets/js/2a855b38.0cc3a67a.js"},{"revision":"b7acba704ffd1978881e8731b44448f7","url":"assets/js/2a8a6f39.4c598115.js"},{"revision":"c6cb51115498c89d55dee20dcda8d974","url":"assets/js/2d0036d2.50670b25.js"},{"revision":"80ef066134546b7e24827a1553a06b8d","url":"assets/js/2e371a1a.a2d7fdd6.js"},{"revision":"fde9afd60b51ffcc6ef923125d1667c8","url":"assets/js/2e801cce.62f8345f.js"},{"revision":"620bd3ede9ba0e7b92edd8845fd3a115","url":"assets/js/31dcbc9e.1ac3c44f.js"},{"revision":"dfcc21d5a0401c2f8182e89151ebbd7a","url":"assets/js/3206.9278478a.js"},{"revision":"606f449f7951b5081bc830f2281ef3a5","url":"assets/js/3501.40f8058f.js"},{"revision":"a8cd6ecb57e769c8599f7f79ea599deb","url":"assets/js/359f5a32.04e46202.js"},{"revision":"2a196fc10def1930563f62eb84269bd0","url":"assets/js/35aa00b4.1e685134.js"},{"revision":"06e456de793b872e7b59018dc707fad2","url":"assets/js/35cc1693.8e6984b3.js"},{"revision":"0805c81442096ad4c2b3dc1377faaa52","url":"assets/js/363.2f1d4f57.js"},{"revision":"3c9c81e58ecc5579c48dac9c2fa379b0","url":"assets/js/364fea04.486d3d4c.js"},{"revision":"d3ce38d4f659ac7f5bf5d945339e081a","url":"assets/js/370ef18e.9346af80.js"},{"revision":"d06180b0dc61830e7a3fb9dfdf39bd9b","url":"assets/js/3720c009.b0a8f87a.js"},{"revision":"0d6d8645b8acf8daec8a38ccd32023c4","url":"assets/js/3799becc.2edd10fb.js"},{"revision":"f8bbdedbb4b6e110b2a5c4879e823c1e","url":"assets/js/37afa0de.9e976186.js"},{"revision":"5dd827bd9a68a7edc160de467e086f32","url":"assets/js/37c0e64c.b898e8c1.js"},{"revision":"fa3e6331617f96b65abcb459bfb31412","url":"assets/js/37c4d550.a4cb0726.js"},{"revision":"51d23e0b7fd700c25b1f0acb1954b041","url":"assets/js/38c6709b.25d9796d.js"},{"revision":"a571113092fd1d598f87339f20ba1947","url":"assets/js/39475017.66d21bc6.js"},{"revision":"5bc4677720a09e86c7a2b7e8eb2e5f3d","url":"assets/js/395e99cb.618c1db4.js"},{"revision":"908dc5b1d78e93578c6c7abb01f5d273","url":"assets/js/3a10596e.b2b7185d.js"},{"revision":"a1a63953a053714bf362cef2c43766e8","url":"assets/js/3bd527d6.4b500f77.js"},{"revision":"b446a06161768cc9e5bdf5141a200939","url":"assets/js/3c5a3ff4.e5ef8988.js"},{"revision":"d1f43d6f419dfb0e006be96826bc78f5","url":"assets/js/3c8ae928.69e00a56.js"},{"revision":"3a9ef9a3fc49bdb60dbe285a0878bdb4","url":"assets/js/3e9155bf.92248393.js"},{"revision":"b2e136646960e28500cbfb60d5fc1280","url":"assets/js/3e98d513.70fca0c5.js"},{"revision":"aaadefe2a1eb5b7207ad9740202fb041","url":"assets/js/3fa0a0a9.9f645b9b.js"},{"revision":"bdbfd30b17a089dc1a3710588ae94bc5","url":"assets/js/40fa0ce2.d9c34c5c.js"},{"revision":"1d6327df2bb053a4a40ac13eb9da0ef7","url":"assets/js/40fd37bf.750476fb.js"},{"revision":"b0cbf398e9c8e93749c96dec0ebe88c0","url":"assets/js/41ed3f64.9c594362.js"},{"revision":"1100df6701df83e2e7d2099b4333c8d9","url":"assets/js/42233d6f.fc917a2d.js"},{"revision":"29f7a92cf9cfa6548da402c8724f6a06","url":"assets/js/438fa7f1.5f18210a.js"},{"revision":"28d16f6331a304bf128e10760dd51e30","url":"assets/js/44640c20.dd986398.js"},{"revision":"b969e4bcfe88dad597badfa41d1f3746","url":"assets/js/46380173.ee602810.js"},{"revision":"96e54a15206864c3816b99f31f4be105","url":"assets/js/4709c282.848beb01.js"},{"revision":"8f9025fd542385fe32b188ac189e834e","url":"assets/js/47740d8d.b4365036.js"},{"revision":"2dd1ebc5b522810342c12dcec0c0155c","url":"assets/js/47ec0a45.97bc50b4.js"},{"revision":"a19cc7211838cb7aa4de234838038807","url":"assets/js/484bda42.361af133.js"},{"revision":"016f661e43b2adf0c2038531052a0f11","url":"assets/js/48955526.033a5e10.js"},{"revision":"df350e092a685b94905f031da627f9d3","url":"assets/js/48b3d55a.921dd150.js"},{"revision":"257c33b7126796a5da8c8f08bee2e8dd","url":"assets/js/48d3d188.2daeea22.js"},{"revision":"2b7f0cc6f7dccfc48a5360fd56701862","url":"assets/js/48eb2b4b.12c21623.js"},{"revision":"497b706ff89e528ce43fe9a0dd304d86","url":"assets/js/4c1b3eeb.cde3b75c.js"},{"revision":"96af8e0c33e1dd6d19fa63c2f6b8a8ec","url":"assets/js/4c65c467.c412689d.js"},{"revision":"8abdce5e789159899260be522b6c114d","url":"assets/js/4d113f27.b8e7459c.js"},{"revision":"d8d4619833d64142ed7cb4daaf685d97","url":"assets/js/4d6f0573.91f0f6f8.js"},{"revision":"6a4a148166176546d88449e4a8e00c92","url":"assets/js/4ddbf6fa.e1f59941.js"},{"revision":"2100569eae66aa4be04c75e45c44117d","url":"assets/js/4fbdb8ff.d05e2856.js"},{"revision":"a26a23d529945db8056751d86df7520f","url":"assets/js/50b07bc0.9512e6eb.js"},{"revision":"2fc0b2fb37639b1364345de1264dfb4e","url":"assets/js/5128a070.cebea784.js"},{"revision":"ba19ab0fbadef9e609732a5641fc3345","url":"assets/js/5131.381e6fd4.js"},{"revision":"0620cc038353f560fa90bee106a87f91","url":"assets/js/51bee9b0.883c7f64.js"},{"revision":"3065c2fc7923e1f942c9b461b8b188e7","url":"assets/js/52d9ef95.73ceda24.js"},{"revision":"3efe9dfb8a969659f3980abbed0c258f","url":"assets/js/53dabaaf.bac16771.js"},{"revision":"e9a2b20f5406a1b2c615fca42ebbc518","url":"assets/js/54c06594.45ec4b49.js"},{"revision":"c042a210362ccf4c774508665fa252cb","url":"assets/js/54da4576.3ff61f52.js"},{"revision":"bd93e5c146f4a3c72cfbda6b3f4e8293","url":"assets/js/55960ee5.aa5f195a.js"},{"revision":"295219c27c62c50c4070f0ec482f1d08","url":"assets/js/56a46de3.027c065b.js"},{"revision":"efa6c593440abe318db6fd2e0d8d3adc","url":"assets/js/57352e23.82fb5d11.js"},{"revision":"7cfc34676623210830e6c43bdcf04ad7","url":"assets/js/57811fec.1b9f421b.js"},{"revision":"4c70906e4a2436bc9394c7bf6f185ec4","url":"assets/js/58ce011b.a25152d2.js"},{"revision":"eeff871d531f52bd9bdc0c7cc8ab97fc","url":"assets/js/59eec8b9.7f9d0919.js"},{"revision":"79d8ee28a845978b6b9782990aa55b5e","url":"assets/js/5bb8cae0.7ff6ac44.js"},{"revision":"511606d50f408ec4cc8489c5e42efde5","url":"assets/js/5c1f75ad.32fb9144.js"},{"revision":"7dc386b6284b245eea3be83f21419391","url":"assets/js/5d6a08b3.ed4f63c1.js"},{"revision":"b87508d01a8eb8d8d3bc3798cb25f33c","url":"assets/js/5d6c647b.672fdde9.js"},{"revision":"2431c30e02aefc6d720224c1c8f98498","url":"assets/js/5ea6b45c.82ff6278.js"},{"revision":"f1e4ecb91577c2ecb5b3bc45b222edfa","url":"assets/js/5ed2a80b.13994292.js"},{"revision":"4d3833560abb2bc0b61930c3f268e7d4","url":"assets/js/5eda991f.82df6900.js"},{"revision":"f2bc76aeedfa75615e79673853feb8cc","url":"assets/js/5f574c9e.d066e963.js"},{"revision":"8644ce7024e95bf1a3d8e6548ae89b14","url":"assets/js/6005e534.2e026087.js"},{"revision":"64f7561e67ada62210d99bf5b253ad2b","url":"assets/js/6007e35c.21b35584.js"},{"revision":"67d553ecc7dea9ea21e45176dffc43be","url":"assets/js/608556e4.57f7f73f.js"},{"revision":"459ec814a7d1704236e8da5ee219b47e","url":"assets/js/609de6f5.7ddd5559.js"},{"revision":"1480f7a0ea86f5e31ae883889b1f206a","url":"assets/js/61b2994b.8ec21f6e.js"},{"revision":"a901500f5fa86ad13af0195bdfb74617","url":"assets/js/61bc5ce7.b885c3ea.js"},{"revision":"0aaeaeebecc69a855fda6cbfbabdac12","url":"assets/js/61d3601c.55f74911.js"},{"revision":"797e3b246bdbe647823f47f0fe4d296e","url":"assets/js/6336f027.19421372.js"},{"revision":"176c454fb4ad197bc23f0d6feab6a2a5","url":"assets/js/63a9220f.2bc361c9.js"},{"revision":"51b28c56c8beff46de91213cbdab92a9","url":"assets/js/6491.5f39277d.js"},{"revision":"6ac217df00ff1ef22ed3a628bb1be867","url":"assets/js/64d4be74.3c6e9dde.js"},{"revision":"44ea28a6341be60c79dadb9badab7bb1","url":"assets/js/651d1a7e.669499a1.js"},{"revision":"9c69d11ecb4a3da16551e3f7f90b612a","url":"assets/js/655ee501.71ba7025.js"},{"revision":"e6534364efcc5905b8c925a303e5d8b2","url":"assets/js/65b3915f.3e6dadb9.js"},{"revision":"6d90a289c5782a623b24813a288a17e0","url":"assets/js/6661b19a.d30b436a.js"},{"revision":"aedbcb9fc8d98496de450201e50d904e","url":"assets/js/6728e797.483f2a89.js"},{"revision":"d8aa78af6f2c6d421bd3ec8c563df48b","url":"assets/js/672ebc9b.7110834f.js"},{"revision":"218812f5604d0edb334b254ac74b82c7","url":"assets/js/6815.761b7132.js"},{"revision":"27c5065ccc79b892718debf585f0d44c","url":"assets/js/6875c492.43b2db7e.js"},{"revision":"0c0a414ee997ed6294618168185ef01e","url":"assets/js/68af6940.a4bb9d01.js"},{"revision":"52e349b7c15f89485910eff5bf5ff139","url":"assets/js/68b964f3.dcb3a3b3.js"},{"revision":"076ebdabc8c8b191666114c516d26634","url":"assets/js/6945.358f4899.js"},{"revision":"3be125f6fa28a44d5184ebb76a8a51f4","url":"assets/js/69e5585f.395c4216.js"},{"revision":"6d15437c9f28cf42dd68cbbbc471ffe4","url":"assets/js/6cca5e2b.69623299.js"},{"revision":"63c7257cb72755f0b23d5a839facf424","url":"assets/js/6e343601.833bac7e.js"},{"revision":"820a0ac480dac18bfedbad9ac505c6e9","url":"assets/js/6e6f2e8d.a14c7fa3.js"},{"revision":"e95a159061dadd2bf15beb2b61e9d190","url":"assets/js/6f235a2f.31129579.js"},{"revision":"56a2af4318d3cab5af4d1766e591e992","url":"assets/js/704c0f1d.95c7deae.js"},{"revision":"d0261b90694d5076179c036185eff6d3","url":"assets/js/707653c8.35cb58ef.js"},{"revision":"7fdb3ecbd4721cd804aad0d92a93b66b","url":"assets/js/711688e5.4f464095.js"},{"revision":"8fe65ab7a95eac9169cc3709d220ab21","url":"assets/js/715e5b25.335ff7df.js"},{"revision":"498e49119f87dce56f216ea0b3459c26","url":"assets/js/716879f1.8d5a479c.js"},{"revision":"ef95ecb9a2dcd99c1ea37adeb5942f78","url":"assets/js/7195ba0a.344e799b.js"},{"revision":"417a2c6ed977bdc24ddf74ac584dc51f","url":"assets/js/728c30e5.389edbef.js"},{"revision":"6013ca4317a07a5e93954a94705d2342","url":"assets/js/73a68588.8be8a712.js"},{"revision":"c00242652a46f514c3fc0540e467eefb","url":"assets/js/73b4e760.a282da14.js"},{"revision":"5be68ced39c9e236d9b91c90f71dce45","url":"assets/js/757cf166.168235df.js"},{"revision":"ccd7befa305dcdfdc2380e198e88dac9","url":"assets/js/7762a24e.f8c9fab2.js"},{"revision":"45cd73292b1bca3c4006c1e008dd6def","url":"assets/js/780ef9e4.2f2c3b7b.js"},{"revision":"63997c4514247b8b09fb71e6dcd1bee7","url":"assets/js/781a777d.7935dd38.js"},{"revision":"06a984fb9b19c6986f6a4f13a0243cb8","url":"assets/js/78bdd589.13f803e1.js"},{"revision":"ce0fbbc86109072fa802b819a9e84981","url":"assets/js/798a98d1.f04d06c3.js"},{"revision":"5795c8e34fdcc0a6a80d5682e75931cc","url":"assets/js/7af1d52f.2f729020.js"},{"revision":"6561e59b7522875e251fcb38c065b18b","url":"assets/js/7bd092c1.b1e50973.js"},{"revision":"b2436e0a70f317aeaaf408c96cc09f80","url":"assets/js/7c2264e5.6ba9d0b1.js"},{"revision":"7eb1e3639a8f40d11f672475676be376","url":"assets/js/7ce085bc.ca7884c6.js"},{"revision":"1775001657e1619b62dd6f1b421eeb3b","url":"assets/js/7d91bdc9.e4144b6b.js"},{"revision":"f3aab41c46048b67b56e4040af7655ee","url":"assets/js/7dc4eabf.30f5296e.js"},{"revision":"b2afa1cfdd5717d6d7d4b3b2e04493db","url":"assets/js/807f61b6.d62cc77a.js"},{"revision":"bbd592857ae1127960e71b4f8a0140dd","url":"assets/js/808ddc4d.34b1ce86.js"},{"revision":"d561dfb7a7d8eef4f9e74392ecc573f3","url":"assets/js/809e7fd7.c63ea576.js"},{"revision":"b2165b38357993c14bc6859737132a1e","url":"assets/js/814f3328.524e9491.js"},{"revision":"1fa6456a16220e14aaa506f31cefea36","url":"assets/js/8177.c2fed399.js"},{"revision":"ae7f374df0757f40c26698b6c0e67c83","url":"assets/js/81f1dc6b.c0dedbb5.js"},{"revision":"1eb3944d9027a3615e400c964922b8cb","url":"assets/js/83a17336.00231d22.js"},{"revision":"12ce62e6e639de6217899e96d995dfb6","url":"assets/js/840a9e17.25cffff0.js"},{"revision":"9f5849ac9892f4e3e5c3937a2b6b7435","url":"assets/js/84db8b33.5142e042.js"},{"revision":"4ba9ec7332b75f1df69232c69c9ce988","url":"assets/js/8925f317.06090089.js"},{"revision":"bb46d292d2ee5a36af39f117bd79e932","url":"assets/js/8a663406.3c5b4930.js"},{"revision":"e95784cd29508add50061db755c2a2a7","url":"assets/js/8ad91733.a899ec23.js"},{"revision":"bc069dd9db44576b7a1d4a7a916391b9","url":"assets/js/8b9550d0.b8282aae.js"},{"revision":"1942067ad0501bfd4d27521ea7dbb6de","url":"assets/js/8bd77478.06fdc9da.js"},{"revision":"9f54bc505526934a5d8a52c713ac5144","url":"assets/js/8c7cb3da.6f3c3e2a.js"},{"revision":"3e9dc0f900977a000b594fafe851f46a","url":"assets/js/8ccf1673.e925bc72.js"},{"revision":"cf3c97372d646296da61259c0da70f37","url":"assets/js/8ce664e8.4d800ba9.js"},{"revision":"ca00dafea56dec75f54b0ba9cfa41e48","url":"assets/js/8d05b77c.a59de5c2.js"},{"revision":"a3017a1b377750340e0d17bf3d0d1a20","url":"assets/js/8de2fca7.725218ee.js"},{"revision":"fd1c736a97bc44cc09823fb756d8fe5c","url":"assets/js/8e30f1da.e22d90ef.js"},{"revision":"e4e24db85653d66c7110031a7a312e98","url":"assets/js/8e6b8181.07d59858.js"},{"revision":"9cb7daf6ff73b33d567bae2464242ad6","url":"assets/js/8eb66c6a.f6d556a0.js"},{"revision":"7e7b2da411b80b21bb2c27e83cb8e0cb","url":"assets/js/8f41efcf.165ad8fc.js"},{"revision":"e27cbee62b002259ece37078a822ca36","url":"assets/js/8f712071.c6bb5172.js"},{"revision":"2d707a418a82ad4cf4627b0ce6d30aa9","url":"assets/js/8fe1f2ee.de93054c.js"},{"revision":"048b4e18848022546297c7dda8fc9e76","url":"assets/js/92896131.b965678b.js"},{"revision":"f30cd553a1a0c45b355606456e3cec48","url":"assets/js/92bc4d66.90ecd127.js"},{"revision":"d68b1db47a872599ee1e2bed24e70368","url":"assets/js/935f2afb.b15e883e.js"},{"revision":"5186b2aa3dba7d37f0da032e1d55f89b","url":"assets/js/9854347f.b6561ed3.js"},{"revision":"1b47b8410b1ef4aafd1f239f8ac84777","url":"assets/js/9927.8af12113.js"},{"revision":"0d82ce4944fcabd23cdae5e0b5c160b7","url":"assets/js/9e13ad83.ae98966c.js"},{"revision":"e392626a97d3cbe23cc4a6878fbf10c5","url":"assets/js/9e4087bc.cb4c06f9.js"},{"revision":"c6865703c8aab6a976ff04b8a419b103","url":"assets/js/9e5e4754.52f6ca04.js"},{"revision":"4fbf3167fb7c0515d1803df96b5b774b","url":"assets/js/a01bdfd8.f7db5bf9.js"},{"revision":"146686e675ee877b14daace983f3740f","url":"assets/js/a130d3d1.3af5ea74.js"},{"revision":"ff6101fc57b3e361b29d9810b6069c8d","url":"assets/js/a135f6f9.01f7eccd.js"},{"revision":"588019f1e884bbe077b62f1a7dc78335","url":"assets/js/a13c8884.a67a8053.js"},{"revision":"170d598899127d3f8957992477108434","url":"assets/js/a29f262d.f9a5e74a.js"},{"revision":"24d5eacb2ad2a2f48b2c52b2f83d540a","url":"assets/js/a439f090.2b88230b.js"},{"revision":"2b24b2e4e3ad9200bfb12c0fb25f91ea","url":"assets/js/a47a87ad.20dd8c68.js"},{"revision":"f6d76773ef4ddba2c1a512b24f2d1460","url":"assets/js/a4dfa1d7.a963cf5f.js"},{"revision":"8fc6985570d0ef4235e0be1a20bb8f06","url":"assets/js/a5557bb9.2aaac11c.js"},{"revision":"9ddce1a1de56a2313433cfbdf3551ede","url":"assets/js/a62093af.cd619246.js"},{"revision":"8ebe6c23a62a9d0d1d8becca2e5df472","url":"assets/js/a6374231.8c04af37.js"},{"revision":"a71bb80268275b06f568f2b98e37738a","url":"assets/js/a6aa9e1f.6f2bc655.js"},{"revision":"fa10458656bb43a49d2ff2ec0ab5748d","url":"assets/js/a7b7c95d.a45b95ab.js"},{"revision":"5154438fbc5e01bbefde5e19c650caf4","url":"assets/js/a93f71d7.2e8fd759.js"},{"revision":"c57a4c1a991c7ba26feeea80379806ea","url":"assets/js/a9560802.7b020c78.js"},{"revision":"f47531637e6a1b84079f48797f6f9ff3","url":"assets/js/a9699963.067fc8e0.js"},{"revision":"859c6bad67c8c283b9027db97b68c412","url":"assets/js/a974f4ef.5c265063.js"},{"revision":"195ad3d91bd297b49b5d12a01c94efdd","url":"assets/js/a97bcd2a.bdae8121.js"},{"revision":"4cc8a465be36b5551749a938640c8363","url":"assets/js/a981bbd6.f6ae8424.js"},{"revision":"d4c88e785bdb6ef44675f2f870c26dad","url":"assets/js/a99209bd.38e3168b.js"},{"revision":"5ed7b2cbb9701bac054b90e3cbb1a552","url":"assets/js/acab9fe6.ccc859d1.js"},{"revision":"d64979d17f28de7f7ff1b665f56c8996","url":"assets/js/ae074293.2683fc0e.js"},{"revision":"802cbdfc3da0e7899eb724d2adb45282","url":"assets/js/aef60ff6.ee6eaecc.js"},{"revision":"b5f7e2e8d04beac7bce6f812bc2196c6","url":"assets/js/afd63891.15fdb2e7.js"},{"revision":"91154ad7fa5c1f461a151005fc315db6","url":"assets/js/b06b2759.5f61690e.js"},{"revision":"98ed90859b4cc21f19cc2ae92f8483cd","url":"assets/js/b0b79613.726f1fa6.js"},{"revision":"059ffdeee375aed81ca5938426d3998c","url":"assets/js/b1ab4548.9bc8d5f0.js"},{"revision":"f33edfd95e966a28ec9a8861cb3e289a","url":"assets/js/b218e5b9.08a52bf4.js"},{"revision":"1a8992d66b9b0f54e94e1ac0aa1d6422","url":"assets/js/b223f594.e2e2e8c8.js"},{"revision":"0cc0ec74507250215ae2b59b91fc4e03","url":"assets/js/b2301113.215c7197.js"},{"revision":"fa4e22f0d9611c7323a5550df72cb465","url":"assets/js/b2a16a0a.3e140efa.js"},{"revision":"e1dbc311943b13f2e7d7df802327af34","url":"assets/js/b3cf83e2.744379b2.js"},{"revision":"d6e15bd0003ec80b18f594e6de097b54","url":"assets/js/b3fb4cee.361fc048.js"},{"revision":"206c66d3a42e39ba797f2c0d25415f54","url":"assets/js/b510040d.f43c1f70.js"},{"revision":"33ac7938d39810416084b2e82d5efd02","url":"assets/js/b5d0a2ae.e94fb247.js"},{"revision":"38077e1079a85be6405780a083612642","url":"assets/js/b72c402f.adb085cd.js"},{"revision":"6f41fd67ebb96ce007f34feb5a7340a3","url":"assets/js/b7409855.da8ca3e4.js"},{"revision":"789a1836149adfae715d671c5f55fb98","url":"assets/js/b751c986.1cfa73f5.js"},{"revision":"78031f8520cb0f01e352341eb15469b6","url":"assets/js/b80d7750.86c71569.js"},{"revision":"b0d77dbebedce6b982b8c02411d47051","url":"assets/js/b94f16d5.39f33cec.js"},{"revision":"ae7917013fd39d2c808542cfc4bf62e1","url":"assets/js/b96d9f0b.a978faec.js"},{"revision":"c41bd27aaf87be9ff6aca048c62873dc","url":"assets/js/b99101ce.e5e55ab7.js"},{"revision":"10db4d49674131180326e39d8735694a","url":"assets/js/b9a8ef4a.b9cb9168.js"},{"revision":"0bec6de4b3d0986778030847922890c9","url":"assets/js/bb67974e.8a6b715d.js"},{"revision":"71d99280a6fdc61ff08cca6c7afd2a80","url":"assets/js/bcba11a3.4f62959b.js"},{"revision":"b6d4f84cf8d36eb2cba76493101a00bc","url":"assets/js/bd799bc0.807bbcb1.js"},{"revision":"4aefce3ab28f3041eafdc67be719099c","url":"assets/js/be635920.4948f883.js"},{"revision":"b0bc3b9957d0c80657f3f4a3a2496d4b","url":"assets/js/c19d5b5c.9e623dd3.js"},{"revision":"b814e639e640444f9d52a554aee385c1","url":"assets/js/c3a1470d.6fdccd98.js"},{"revision":"7236b80e49e35fe3c6e1b57012ad8230","url":"assets/js/c3b2e420.39ee1487.js"},{"revision":"4079c18b99cebb8d924c5a7ae146f147","url":"assets/js/c3c0a0de.2862ec81.js"},{"revision":"78de92626924c7827e4b4ae278af6869","url":"assets/js/c3f66085.8067cd60.js"},{"revision":"47eaa5967700eccfa2939c43fb386e34","url":"assets/js/c4f39117.ec1c167f.js"},{"revision":"84facc371ab0a851fed7f680c523dabd","url":"assets/js/c56abb09.1d893877.js"},{"revision":"8f760f177a930ad45bcfd39edb310a0b","url":"assets/js/c573638f.d4c06980.js"},{"revision":"49f4233866b57b2b7843f1d556cc4cf0","url":"assets/js/c5a6ac20.9c8d31b7.js"},{"revision":"458b66383c15bc764486481560e5e3a4","url":"assets/js/c66d0178.c0bfa619.js"},{"revision":"0ee458c5ebd51765f964037f3b59abc2","url":"assets/js/c7015929.2dbf495d.js"},{"revision":"09fbb85f486fd966b2aa30bf14ba67fa","url":"assets/js/c73a1a32.da44464f.js"},{"revision":"88a87cea7cad3abd5f38be5c79b815ab","url":"assets/js/c77cb0aa.5d3b38d8.js"},{"revision":"ab6ddbaf818ef62051eb9257899148d6","url":"assets/js/c9d59f4a.ee387feb.js"},{"revision":"0e65fc4bf2166aed812293bb8b2fe71c","url":"assets/js/c9f32de9.3fc529f0.js"},{"revision":"ae2f170be138efe51a4679c1fb7fb186","url":"assets/js/ccc49370.74d5310b.js"},{"revision":"0827789cc9d153748e489f0795744740","url":"assets/js/cd23ea8d.fc2856d6.js"},{"revision":"98958f68ae0ad2c212874231d393cabf","url":"assets/js/cd57c5fa.8060ad1c.js"},{"revision":"56d6cce2e5c1a91f3caf65b3c0e26185","url":"assets/js/ce22da73.0bad2bc3.js"},{"revision":"975714170f7d778d42db917db5094363","url":"assets/js/ce7661e7.d1e9452e.js"},{"revision":"2c3ce74f2c9f6ed684e4d336ab0dba50","url":"assets/js/ce9f290a.7492cebf.js"},{"revision":"88f889a0235557c66b2e55bba823a36f","url":"assets/js/d00237b3.e83a7cf1.js"},{"revision":"cbe00df67ef42d5f5402eaadd6a8cab0","url":"assets/js/d052f35d.9d24c27c.js"},{"revision":"05a9a12e10def31ef30061f55524eb77","url":"assets/js/d06a25bf.e7585e74.js"},{"revision":"483dc4af7afa0439e5b0fdafaedbda7b","url":"assets/js/d0b1f308.2e1b6125.js"},{"revision":"a7a9420663c699ba50c79718334f7d1e","url":"assets/js/d0e4cdf1.d379ea0c.js"},{"revision":"267a0894dac888155932a3394cb88ab5","url":"assets/js/d2c4e2e6.69868ba8.js"},{"revision":"63ffff73d55bec31380a74ae3822dde1","url":"assets/js/d35d361b.07195764.js"},{"revision":"6723eced377c9378d1f343c645c38c2b","url":"assets/js/d3d972ab.8c12b587.js"},{"revision":"321d0062061c48c3266a5407974dab76","url":"assets/js/d427ec88.cf0411dd.js"},{"revision":"ded21d3cb3eaea30ee428e7e025f91ad","url":"assets/js/d4541677.b334bd62.js"},{"revision":"a8cdb4895b95d518b94a3f560620aec0","url":"assets/js/d47e18fc.1724225c.js"},{"revision":"aba831394c4d29e0a85e2928b26f933f","url":"assets/js/d505577c.a6169fc3.js"},{"revision":"fc57efc725cf55325c16794188a9daa8","url":"assets/js/d62d57bf.e5c0a419.js"},{"revision":"98e7249ebb055eaa331e5500ab509f20","url":"assets/js/d72f3c56.3c6d6cc9.js"},{"revision":"45a7afb130bbb8b2449379192eccca50","url":"assets/js/d7ae8ef0.36fc5265.js"},{"revision":"5b9277c9c1fa6c6b547cfbec8d6ee68f","url":"assets/js/d7b3e9d0.e0dbd62c.js"},{"revision":"25b3a592ecb86e7f70679598093db36f","url":"assets/js/d7f3cf8c.94a76674.js"},{"revision":"2cf5813c9a2f42725b1453564b77b5e2","url":"assets/js/d8f068d6.92ed76ec.js"},{"revision":"91a2817fd3273be84fe8b2c5c5beebed","url":"assets/js/d9318685.1d19ac0c.js"},{"revision":"89fce0b68ca0319e5e6e3a8a61c228c4","url":"assets/js/d9ba78c3.bb5928a4.js"},{"revision":"d0eb5958db0876f290912d7da89d9f39","url":"assets/js/d9c03e5c.89920477.js"},{"revision":"c28a717da9cfd415144e7c257c44fb28","url":"assets/js/dadab193.0ad6e5f7.js"},{"revision":"9a3943ee80393c9d4a281e2674c7d738","url":"assets/js/db7c45a1.a6ee0f5b.js"},{"revision":"e3e62ce6ba8d29e1a34870ec28c31c58","url":"assets/js/dbc27d0d.7c0e4848.js"},{"revision":"5c55f1828b9d24db8d7a2b54c6bbaa03","url":"assets/js/dbf42b25.8e888499.js"},{"revision":"abdae8d47aa59a37a80d8151a631bc34","url":"assets/js/dd6ed4e6.409dea63.js"},{"revision":"6b97bd05477a4a3d1dd55c111708e427","url":"assets/js/ddb55a31.14eedcb5.js"},{"revision":"db32f78abf53f4b8f641e62bb1c02c47","url":"assets/js/dea80962.fd3424fb.js"},{"revision":"63ba4bf6216c80c9386babcba62cf059","url":"assets/js/df203c0f.7ce0e99e.js"},{"revision":"5858544a7641f4af9d7da27a36d8846c","url":"assets/js/df347b02.6cefe2ea.js"},{"revision":"637c41928764c6acde070d861c25422d","url":"assets/js/e21c5e34.47efc44f.js"},{"revision":"cd59a2c4db6f48269bdd994177483856","url":"assets/js/e3e90b79.f8743d7a.js"},{"revision":"c0784fc8add4f1f4f92997b32c84f312","url":"assets/js/e4ebfe18.beff598f.js"},{"revision":"cda6349f6dbf8a98a3439df799b5e1fb","url":"assets/js/e57f1432.2eb25e6e.js"},{"revision":"f579347b22f1ea56bfb24c9b07f20546","url":"assets/js/e6a3d51e.9a7ffea4.js"},{"revision":"0f8332dc3406c56b35e26e68615e4e44","url":"assets/js/e8911fb6.72caa713.js"},{"revision":"326fa35ebb1ffce825b33bad28ec6805","url":"assets/js/e9a63d01.c73dcd0f.js"},{"revision":"763c950069d7c32871ba7e0bf272644d","url":"assets/js/ea15443d.3d360444.js"},{"revision":"adc8348d175eba8b175b366e3003983c","url":"assets/js/ea3ba0a5.0aeaa48b.js"},{"revision":"3adb503a824e02e16869cad857e06cd0","url":"assets/js/eabc6b14.acd060dc.js"},{"revision":"b8b12b05491ea46f7d0f1de3ca2082d4","url":"assets/js/ebbab0c1.67417244.js"},{"revision":"0bb07100832a4d14b812897055ac59ca","url":"assets/js/ebcb7c66.0b7a797d.js"},{"revision":"fd63eddcf87123a1c230a6680232523e","url":"assets/js/ec60a7d4.ca37d6eb.js"},{"revision":"bfd5c180809623a0d4b78f3799b6a36e","url":"assets/js/ec994805.932c7d35.js"},{"revision":"1e9c1634caf2e74fe4820e1465605417","url":"assets/js/ec9a38c4.456c78f4.js"},{"revision":"8ee07296d0f7eb13c212d3664e303c47","url":"assets/js/ed1f9a22.c21b2173.js"},{"revision":"b2ac2919f10866cfd0ca796380248bf5","url":"assets/js/edad4794.6f318f34.js"},{"revision":"996934d194549bf2d2e23cbb335b3c58","url":"assets/js/eed8bbe9.3431a33c.js"},{"revision":"cb88f9dbf9b29d3b52bd658aab8a4068","url":"assets/js/ef496691.1e96df77.js"},{"revision":"ea176d1f9c70258e60e98534099a065c","url":"assets/js/f0748ca9.aaaa626c.js"},{"revision":"9eba01444f3d064cfc2e6a17056f3350","url":"assets/js/f1e83993.991b15d0.js"},{"revision":"d1e276d19e198ff63d5964d13031cebc","url":"assets/js/f4af9f40.79044bf6.js"},{"revision":"9f2e0d2af3b769415fedc28d69ce51b0","url":"assets/js/f5219b81.ba7dd4e8.js"},{"revision":"8ef486877cbf2f153848791f4c0a452b","url":"assets/js/f580a9d0.362fa2c7.js"},{"revision":"133f8ac2c7bfe4939cbf8122357797bd","url":"assets/js/f6546265.6b42033e.js"},{"revision":"f4d3d8005a1e7db0b0bf6f5ee6bdd28c","url":"assets/js/f65f9de2.8d0b7e8c.js"},{"revision":"75686408f7128ed8f502e297606a22e0","url":"assets/js/f71490e7.91701fcb.js"},{"revision":"2964f71b9620b3e645f0f03223774e55","url":"assets/js/f82626fe.e8a06b6a.js"},{"revision":"c8647e1bd33bab8431295fe9e59f6aca","url":"assets/js/f8dd82b3.a1706022.js"},{"revision":"6759fb9de414ef7360d90a690c0733d6","url":"assets/js/f91e63cf.f5d1d024.js"},{"revision":"52e9b97fc1a52201992410835e6b32ce","url":"assets/js/f94d73e9.7a53c847.js"},{"revision":"969887e3a5548d9fbd3be68bb7470e58","url":"assets/js/fb796f28.fbf984a8.js"},{"revision":"73591c701587acc9f7c9cbef24ab31b2","url":"assets/js/fbd7e3ee.1b970e01.js"},{"revision":"a3c7f982703cd24a8ced72ea5f075ed8","url":"assets/js/fbf46366.f5ae9887.js"},{"revision":"98665925b1f5307a954dfdbe3d28fabe","url":"assets/js/fc5e3924.d2d67801.js"},{"revision":"60714b8af859a6863c7a19a7f9d82410","url":"assets/js/fe273484.220273d2.js"},{"revision":"b82621ba21b1d33df3cdc0e20797387c","url":"assets/js/fe9e8cd5.13398707.js"},{"revision":"da718585c8ccfb4e9666802deb815e6a","url":"assets/js/febef3d0.93735ff6.js"},{"revision":"c12f0a5dc0feca5a2681f843f2a951a3","url":"assets/js/ff41704b.0dfeb253.js"},{"revision":"3ddc54e61fa55aaaf68c50b25e604d43","url":"assets/js/ff75d2d3.979e70bc.js"},{"revision":"32c80eb06ef033aec337aa9d4c6f66ba","url":"assets/js/ff75d5db.03295c68.js"},{"revision":"b45531d671e9235f1a08f6fc198d84d3","url":"assets/js/main.cf246ba2.js"},{"revision":"d81e78254b98297bc70823a79852cf5b","url":"assets/js/runtime~main.3afa910a.js"},{"revision":"9f690e5f82635bddb90b3165a4ee0b58","url":"deobfuscator/index.html"},{"revision":"4cfed558f4ce40dab9acff943cbcb475","url":"docs/category/css/index.html"},{"revision":"7779f60255e01ec322ebc8b30141cceb","url":"docs/category/javascript/index.html"},{"revision":"16e3bcc012c5b9b0e552e9d70ec486f7","url":"docs/category/node/index.html"},{"revision":"1f09d71606766c9f4740bb02b7d9efba","url":"docs/category/react/index.html"},{"revision":"0cc88d13e2f92da8b4b9e4c53aa1ca87","url":"docs/category/vue/index.html"},{"revision":"0196108fc56321c4b2a22ed44b7917ac","url":"docs/category/web/index.html"},{"revision":"447dc69502b9e33a16ea823d83acc2ea","url":"docs/category/后端/index.html"},{"revision":"5a20b2ab62f9466dfba7ac348f471d71","url":"docs/category/安卓/index.html"},{"revision":"097951e983222d58d5769178ce307a26","url":"docs/category/数据库/index.html"},{"revision":"0f460170c2e63b9dc26a02e43dcc3525","url":"docs/category/逆向/index.html"},{"revision":"b1b82f0c733f272d0b926b5d3141db3e","url":"docs/skill/backend/Docker/index.html"},{"revision":"d0c4623e4e1e30e6ca1d8b7814c75457","url":"docs/skill/backend/查看端口占用及结束进程/index.html"},{"revision":"d9c4972b11d43fb44eeacf45770d1f81","url":"docs/skill/css/有趣且实用的CSS小技巧/index.html"},{"revision":"9ee2edd2a88b42ad02ff8989406a6aba","url":"docs/skill/css/记Tailwind CSS使用/index.html"},{"revision":"d43159e88a96f8ba20b0fc8cf61d6770","url":"docs/skill/database/elasticsearch/index.html"},{"revision":"ca102fd3c55ad04c66ba19012b22c44f","url":"docs/skill/database/mongo/index.html"},{"revision":"6291837766d324860d8f49ddd33df516","url":"docs/skill/database/mongo/MongoDB按时间分组/index.html"},{"revision":"98391629674bef5597f932f4612dac45","url":"docs/skill/database/mysql/index.html"},{"revision":"24d9d6c33ef21801ccb4284a2f59f913","url":"docs/skill/database/mysql/mysql替换函数replace/index.html"},{"revision":"d388dc99dd89bc38081ad81aedd83701","url":"docs/skill/database/mysql/mysql模糊查询like优化/index.html"},{"revision":"ec17611965aa54800bbe377461ea2841","url":"docs/skill/database/redis/index.html"},{"revision":"1eb0a4ae831f76fe99f564b2e543102a","url":"docs/skill/database/redis/Redis获取六位不重复数字（邀请码）/index.html"},{"revision":"d24e9a35a1b9f3ada0fa7b1ba246a739","url":"docs/skill/index.html"},{"revision":"6a03a94f50dc7e81d9aae8fdd3ca0734","url":"docs/skill/js/JS如何获取当天零点时间戳/index.html"},{"revision":"860a544916cb7a87194189bf2685efd7","url":"docs/skill/js/JS实现函数缓存/index.html"},{"revision":"408aec5addf8a90229d099c51496457b","url":"docs/skill/js/JS打印函数调用栈/index.html"},{"revision":"c2b462467590e461edc5db953d981bf2","url":"docs/skill/js/JS数组对象去重/index.html"},{"revision":"03b51f7e46eb84453802abb43d64aa3c","url":"docs/skill/js/常用utils.js/index.html"},{"revision":"8ccd8199013114a57d3ae03a12daad27","url":"docs/skill/js/查询字符串与JSON互转/index.html"},{"revision":"ecb64a667c3340191875fc5322c1803a","url":"docs/skill/js/重构之多态取代条件分支/index.html"},{"revision":"5ea7bec5d3d6ca11a4f4eb52c0e2ee01","url":"docs/skill/js/重构之对象映射类型/index.html"},{"revision":"ec1f6d7d7bedb2032c2d641e1179425c","url":"docs/skill/node/axios请求gbk页面乱码解决/index.html"},{"revision":"2cc6f8c75f4934bf33986dd6e8cc31d6","url":"docs/skill/node/npm镜像配置/index.html"},{"revision":"54eff5c05cea4beea4231ed5ea19aae1","url":"docs/skill/node/使用 require.context 实现模块自动导入/index.html"},{"revision":"da9a5cd0d4011349b76339678620d8c4","url":"docs/skill/node/使用JSONPath解析json数据/index.html"},{"revision":"959a3c5e4594c820e188d5971cc8abd1","url":"docs/skill/react/react中css实现方式/index.html"},{"revision":"4daa4c53e9bc0ab13b2ddc7543e6234a","url":"docs/skill/react/使用脚手架创建React项目/index.html"},{"revision":"fef899591a688fabee6f83cdfc1c9dc3","url":"docs/skill/reverse/android/frida/Frida java层自吐加密算法/index.html"},{"revision":"68d55073918796d0a7ea3208dc43af27","url":"docs/skill/reverse/android/frida/Frida Python库使用/index.html"},{"revision":"8270f1802f41ff7a081b8554ec3eebd8","url":"docs/skill/reverse/android/frida/Frida so层中的hook/index.html"},{"revision":"6d465f07c686b968576ab311257f36bc","url":"docs/skill/reverse/android/frida/Frida笔记/index.html"},{"revision":"da5789672bdccbe70b62c40f758e36be","url":"docs/skill/reverse/android/frida/objection笔记/index.html"},{"revision":"6c777d25ffd90b682a52d3eded4472be","url":"docs/skill/reverse/android/刷机/刷入Magisk/index.html"},{"revision":"19658e6b96bc3589cf2ec33fbd15dc7c","url":"docs/skill/reverse/android/刷机/安装LSPosed/index.html"},{"revision":"15d560c793716415bb4132189ecce4d1","url":"docs/skill/reverse/android/刷机/抓包/index.html"},{"revision":"e519bca3c0612a8b83a3625b65c5c8d5","url":"docs/skill/reverse/android/刷机/解Bootloader锁/index.html"},{"revision":"f0f42a2333fe37a4f8b37c869e298b62","url":"docs/skill/reverse/crypto/浅谈加密算法/index.html"},{"revision":"c7463637366635f49159e16f66c0fae0","url":"docs/skill/reverse/web/JS代码混淆与还原/index.html"},{"revision":"97064afd4bc1f5241f0cc811ef32ae2c","url":"docs/skill/reverse/web/小程序如何反编译/index.html"},{"revision":"4503872a3b7534df222b194364d00fb4","url":"docs/skill/vue/Pinia/index.html"},{"revision":"dd50e6ce31424cecd3ccf37266373e08","url":"docs/skill/vue/Vue-component/index.html"},{"revision":"af64d2d3bfa30096ac7d2cf90bdb4a22","url":"docs/skill/vue/Vue响应式数据之Object/index.html"},{"revision":"939b35b7d637e6e8791e57e1a50fd621","url":"docs/skill/web/浏览器复制Console面板输出/index.html"},{"revision":"bd71fd49a97436f8fe9eb675dbacd4b5","url":"docs/tags/android/index.html"},{"revision":"a13b652bdc31a1c19f4835924cfebc7a","url":"docs/tags/app/index.html"},{"revision":"0ca25ac97f16a66fbbb759f335ab849c","url":"docs/tags/css/index.html"},{"revision":"21317bb20c64960cc7e06f55b7add0e8","url":"docs/tags/docker/index.html"},{"revision":"8bbe70d133094a825451e574c4fb0a37","url":"docs/tags/elasticsearch/index.html"},{"revision":"0c37b41795a7900cca43d83f403e0acd","url":"docs/tags/electron/index.html"},{"revision":"c8a72886448bc8322a16677eca19763b","url":"docs/tags/frida/index.html"},{"revision":"fbd2446704b09c9b5bafd9195924f917","url":"docs/tags/hook/index.html"},{"revision":"ae92755c79861de1444cc61f2ba3f5e1","url":"docs/tags/http/index.html"},{"revision":"aa2ba15e6a687e5c5dda99f20224f384","url":"docs/tags/index.html"},{"revision":"7837156c3620eac6d15aa5f84db6e9bb","url":"docs/tags/js/index.html"},{"revision":"59836bd9e31d6b4b64fe9ca8bddcdfda","url":"docs/tags/mongodb/index.html"},{"revision":"ad631d3c95775bf9a60cc436380081b7","url":"docs/tags/mysql/index.html"},{"revision":"bced0e75aad94b2eac1935b831737163","url":"docs/tags/node/index.html"},{"revision":"7db40be83276cf9b4209d1a4654e9e59","url":"docs/tags/npm/index.html"},{"revision":"4392643be829bd7bfce49ef9117fa326","url":"docs/tags/react/index.html"},{"revision":"bcacba8b5a273d127838f6a0a1d00d50","url":"docs/tags/redis/index.html"},{"revision":"af4d410c430acb1066c7d1565507be2e","url":"docs/tags/system/index.html"},{"revision":"4f8c44c7623e84f842a27d858df6caa5","url":"docs/tags/tailind/index.html"},{"revision":"2c0a3713258717a59090fc7e08edaf21","url":"docs/tags/vue/index.html"},{"revision":"7cc59117a3942a71a7c7ad9a436b3beb","url":"docs/tags/web/index.html"},{"revision":"93593d161f63dea816fc6c3d3452396c","url":"docs/tags/webpack/index.html"},{"revision":"d53d23db6fe230337c49771fd161d66b","url":"docs/tags/刷机/index.html"},{"revision":"714a259a61990724f73088ca7fc4c41c","url":"docs/tags/加密/index.html"},{"revision":"c13925cf4977ddad0ba668a56c8f09e5","url":"docs/tags/反编译/index.html"},{"revision":"0fb40ff58fd1bc6e6612bf9f806e7f13","url":"docs/tags/小程序/index.html"},{"revision":"9b29e66c7e1b5fbcd8ccb30cb3e23108","url":"docs/tags/工具/index.html"},{"revision":"c91c11ccf5e9f80ef876d7c69669f83b","url":"docs/tags/抓包/index.html"},{"revision":"af97697807ba2f6ae5cfb3a81661ea97","url":"docs/tags/数据库/index.html"},{"revision":"b22215ef7848951f29cc4d9dd060cdda","url":"docs/tags/浏览器/index.html"},{"revision":"0b2a2961c55d99c95a4ec6c1836be0fd","url":"docs/tags/混淆/index.html"},{"revision":"bc4b773304b690431d86268594b2d86b","url":"docs/tags/逆向/index.html"},{"revision":"d6061bdcb98d6161bbd72fbab63441bb","url":"docs/tags/重构/index.html"},{"revision":"95525a8b662132a9d1654a26ad0d4568","url":"git/develop/Chrome插件开发/index.html"},{"revision":"b9e938a3872df2f2d18d944d6b9decbd","url":"git/develop/Docker容器日志过大清理/index.html"},{"revision":"348ab4793cc4a683435f0236de8db501","url":"git/develop/Docusaurus配置Gitalk评论插件/index.html"},{"revision":"efae7fac204cd2554c4fa78fc7273a5a","url":"git/develop/Vercel部署Serverless/index.html"},{"revision":"e324f4ed5e70fdd43f5dc67ebe7a4266","url":"git/develop/Vercel部署个人博客/index.html"},{"revision":"d47bab6039a9b8fec8ff1df20e8bbc59","url":"git/develop/云服务器与域名备案/index.html"},{"revision":"e7f9758ad575d021592fad8a7f322d49","url":"git/develop/体验云开发/index.html"},{"revision":"0283243428ba2fa44c7022166f9be76d","url":"git/develop/修改无法启动的Docker容器配置文件/index.html"},{"revision":"4aa9bbfc8e31a7a92ae7ed52d7700791","url":"git/develop/搭建GitLab代码管理仓库/index.html"},{"revision":"1be935b1b8e60d0958325c5fde637e18","url":"git/develop/第一个博客搭建之Vuepress/index.html"},{"revision":"c9594728bede7b8c2fef0e8f588c4799","url":"git/develop/第二个博客搭建之Docusaurus/index.html"},{"revision":"34557092da8a7bc5907f44a85e621164","url":"git/develop/腾讯云之CDN与SSL配置/index.html"},{"revision":"4c42569a6d399b53089a3c442e116752","url":"git/develop/记ThinkPhP项目部署/index.html"},{"revision":"bdb314c6248c5122e5f4bda81584128e","url":"git/git修改默认分支main/index.html"},{"revision":"5f087e09da40bf6191727201590a77b4","url":"git/使用Github Action自动化部署/index.html"},{"revision":"e2dbaa5480624f34250be82a2ca38d11","url":"git/记一次git丢失代码找回/index.html"},{"revision":"c2253f40fc02e52d06b399029cbc8832","url":"go/Gin框架初体验/index.html"},{"revision":"9795ae80e38ed925594ec18ba9798d4e","url":"http/HTTP请求之Content-Type/index.html"},{"revision":"aae52166e3c41f25c91e19cae8257139","url":"http/HTTP请求配置SSL证书/index.html"},{"revision":"00a40c4e6ab52ab0f535ea055e865695","url":"http/SSE 服务器发送事件/index.html"},{"revision":"76f2df9b520a9e4815c1d04e061c85c5","url":"http/浅谈HTTP/index.html"},{"revision":"79d1c3b303e93ff2ed9dc1ef936d5e9b","url":"index.html"},{"revision":"31d71100b8a6c0caf4540729b9db6510","url":"java/IDEA基本配置/index.html"},{"revision":"29c06348d0f2812ec9b03039ffbbcaa4","url":"java/Java反射/index.html"},{"revision":"02428533b680646a624f35a5ca94a2fe","url":"java/SpringBoot热加载/index.html"},{"revision":"e478beea66e3cb194331bb264d93440e","url":"java/SpringBoot项目目录结构/index.html"},{"revision":"a5a49fffa0c2fc040721380fad7e1b6e","url":"js/JavaScript存储与操作二进制数据/index.html"},{"revision":"0fe4ce3a0c8cae8adfcb7a1b428dd0ac","url":"js/JS代码之混淆/index.html"},{"revision":"037ffe5fa518651a4bb3d7206b953467","url":"js/JS代码之还原/index.html"},{"revision":"1c8ca76626cdcdce4e2ca1ef888a0216","url":"js/JS函数hook/index.html"},{"revision":"9680d42df7914c73da21822de5003240","url":"js/去除ts代码的类型/index.html"},{"revision":"0d5a61f29382ecd943f4655653aaa77b","url":"manifest.json"},{"revision":"c1e75b32cb9be84a91291030033c27e8","url":"node/axios中的cookie/index.html"},{"revision":"ea0a2ec217edecd63a672731cf2ca20e","url":"node/为什么使用pnpm/index.html"},{"revision":"f32696279113d319291d2d581f04581a","url":"node/基于Axios封装HTTP类库/index.html"},{"revision":"7661fd20072127a5014bc361fc5d9656","url":"page/2/index.html"},{"revision":"7294a3fc780b7649fbc14e069ac8b472","url":"page/3/index.html"},{"revision":"39cc2d820720bc0052d62589d3378e52","url":"page/4/index.html"},{"revision":"4d4f0862617f02708c9d45626f3e46bc","url":"page/5/index.html"},{"revision":"8392a2621052348609e5736d3001eeb6","url":"page/6/index.html"},{"revision":"ab9049b4c1cb821aab9dcd32a74e06ba","url":"page/7/index.html"},{"revision":"ba82553e5e3a82967d40aee0bb0df896","url":"project/index.html"},{"revision":"43b47f5d14167acb6f5fa55247d91950","url":"project/kz-admin后台管理系统/index.html"},{"revision":"8f99bfa0b0076e6055499733e2645d54","url":"project/愧怍在线工具/index.html"},{"revision":"8079af2f94be3383ea3d48df532153fd","url":"project/资源导航/index.html"},{"revision":"a0decc7d92a0fb87cb274ce031bd06e5","url":"project/题小侠/index.html"},{"revision":"9529de2f2d5cd881540f32ed2f011c1e","url":"python/pyautogui自动化操作脚本/index.html"},{"revision":"1c9dfc9870b62984171a31a028ea4aa7","url":"python/Python中的cv2使用/index.html"},{"revision":"87259182a4fb5bf90a9dd5c618bdb79c","url":"python/Python指定版本运行/index.html"},{"revision":"dfce5cce9f7b9ad187fbf118d5a03a4a","url":"python/python爬虫总结/index.html"},{"revision":"d41298dafc6bcc923c2d0df74df4fa38","url":"reference/2019.7-2020.7编程年记/index.html"},{"revision":"f8864d89f248ca455f16615ad1376266","url":"reference/Api接口风格/index.html"},{"revision":"c0c0f88be34bbad418a4e4548bb74cdb","url":"reference/为什么我不用七牛云/index.html"},{"revision":"db15500a4f6b178c9a371f17253e7f16","url":"reference/代码备份/index.html"},{"revision":"06d25062f577e3722f06128f6861985d","url":"reference/关于作息时间/index.html"},{"revision":"9101c99e988b0e1250b328a8172d5946","url":"reference/开源许可证/index.html"},{"revision":"098c6401ebba6ee9acc4ef8828fa9c2f","url":"reference/易语言/index.html"},{"revision":"02270607affdea244b3c25284a97c435","url":"reference/记一次Github提交PR过程/index.html"},{"revision":"75ce0fbb760dcac8fced157b3aad49f9","url":"resources/index.html"},{"revision":"d167e5eeea74e3809213ce4b8b2ec2b1","url":"search/index.html"},{"revision":"a892f07aab6f84e122724512c115e117","url":"tags/admin/index.html"},{"revision":"c5b42bbb4b1f48b6ee37df557d104662","url":"tags/api/index.html"},{"revision":"c58d36d05c8f4e7b02d5e5f970740c29","url":"tags/ast/index.html"},{"revision":"486085dab11010b59b203de7b2b71128","url":"tags/blog/index.html"},{"revision":"a3f5e3fa39034c71b658cacd160fb9d5","url":"tags/chrome/index.html"},{"revision":"fb212d25859e9432904c364341710cb6","url":"tags/docker/index.html"},{"revision":"221aa81e77e08026a5067db6e04ea283","url":"tags/docusaurus/index.html"},{"revision":"eb8e1774d3fa5e5f6069f637320b62b7","url":"tags/elasticsearch/index.html"},{"revision":"99e93c17c892cf31ddc0566dcae810dd","url":"tags/electron/index.html"},{"revision":"2e152d620b28e892c4882c3f516150e4","url":"tags/gin/index.html"},{"revision":"a6e7e79fb2ff135bb4a56860057e0c2a","url":"tags/git/index.html"},{"revision":"d5e96a6cb31ff538e4540b1434e80b0a","url":"tags/gitalk/index.html"},{"revision":"07c1a61a41060515aae205f07d0201de","url":"tags/github/index.html"},{"revision":"b3b57ed3a259fc20f8b68c77b629d153","url":"tags/gitlab/index.html"},{"revision":"5dd5f78997686886e1441a2133f43648","url":"tags/go/index.html"},{"revision":"47e5c9f42ad765b8cfe9e65b9ef9dc16","url":"tags/hook/index.html"},{"revision":"e0dc48627eb232302a0a2877e76f28e8","url":"tags/http/index.html"},{"revision":"521803fcc48a1bfbbb58a5a87d3e1cbe","url":"tags/idea/index.html"},{"revision":"7131493cced4e0b8b9db5f51e5bfaf09","url":"tags/index.html"},{"revision":"0ba3ebd6c331a7e6ea7dab1b63bb876c","url":"tags/java/index.html"},{"revision":"13440bc34f459ce2e57e848927f51d0f","url":"tags/jetbrains/index.html"},{"revision":"a67d6ebd7c9403abe4ba8b9d6f373a89","url":"tags/js/index.html"},{"revision":"929ca99ded42c4a32ccb78ea9d715824","url":"tags/nest/index.html"},{"revision":"cd58e517b4eb2ebf1ade4e0060940f36","url":"tags/node/index.html"},{"revision":"e4f73c91ee52b1cb682f06140fc0d1a9","url":"tags/php/index.html"},{"revision":"fd77b1dd22d647f858a04b269bde76ae","url":"tags/project/index.html"},{"revision":"9c6829725ca29b07229387179f3e9249","url":"tags/python/index.html"},{"revision":"f8fb6e2c39e1748aaeb3d2ec60c4d1d2","url":"tags/react/index.html"},{"revision":"8f5cf493b71de871a2871a0ba8fa0899","url":"tags/rpc/index.html"},{"revision":"f3bef114d009f916bc7a6665803aa570","url":"tags/serverless/index.html"},{"revision":"8ce4b0401902d320e8dd76b859335d7b","url":"tags/springboot/index.html"},{"revision":"6d00d9fef1e10fee7e5efe40a5777f99","url":"tags/ssl/index.html"},{"revision":"7e39f6b389fcec19ef2e5cfa4a2b86ea","url":"tags/terminal/index.html"},{"revision":"13fc6bbb980a2eb8555ae6a658bd3910","url":"tags/ts/index.html"},{"revision":"5a2f9650ffc937b8e5c79d9d45931489","url":"tags/uniapp/index.html"},{"revision":"4df7f8ee9d566a5a6dc20ffb24aad47c","url":"tags/vercel/index.html"},{"revision":"f7ba1211bf322b34d95f11f37e767d22","url":"tags/vite/index.html"},{"revision":"005d2fe69c479cd344a3bf2c5a2e1873","url":"tags/vscode/index.html"},{"revision":"b75eb73b264add373c33634bf8002d27","url":"tags/vue/index.html"},{"revision":"d8127aeb34a0a670789d5c6a966cd5ba","url":"tags/vuepress/index.html"},{"revision":"693b342b92defcf0cfa5300977acaa81","url":"tags/云服务/index.html"},{"revision":"8a5a2eff4698aca7fbcfb040a9326237","url":"tags/代码风格/index.html"},{"revision":"40405b748750df1debe4a66a45130aae","url":"tags/备案/index.html"},{"revision":"5d0086f58babcf1a7031266b6c51703f","url":"tags/小程序/index.html"},{"revision":"8f7a9e4703b17c762dba94a53add1296","url":"tags/工具/index.html"},{"revision":"3b888cc9168e725068aff28667ca1014","url":"tags/年终总结/index.html"},{"revision":"1abd0002baa28c0f93f28fba7ccce8a2","url":"tags/开发/index.html"},{"revision":"bb033cf98a005ce7acf3b5b28fe7bf4e","url":"tags/开发/page/2/index.html"},{"revision":"901256e35b841a0d05c4f383a6ac00db","url":"tags/开发工具/index.html"},{"revision":"a555a1393bb241e95643a37286cabad4","url":"tags/开源/index.html"},{"revision":"93ab3112ddf267be4572280f3def0ee4","url":"tags/插件/index.html"},{"revision":"9d4b6acbab64543dadf45bc59dc363b1","url":"tags/日常/index.html"},{"revision":"93e603342d4fea80d31f0ccbd9db6b8e","url":"tags/易语言/index.html"},{"revision":"c00d8258d49db6158dc79408016b7476","url":"tags/服务器/index.html"},{"revision":"7fa1fb63d66bc36db692558f8caabdbd","url":"tags/浏览器/index.html"},{"revision":"4171adaa791c710e4e902fee66784893","url":"tags/美化/index.html"},{"revision":"f985eded127d847976e77bc74fdf6eb1","url":"tags/脚本/index.html"},{"revision":"0523ba7c321325abe8d421ba6065aa13","url":"tags/逆向/index.html"},{"revision":"432f119f6e1449c3f0db5322ad8bfa99","url":"tags/随笔/index.html"},{"revision":"827ac55f25abd7b592807e6605cb21c5","url":"tools/Everything快速搜索本地文件/index.html"},{"revision":"1a2468f222f54d4bf134513f2efd2a45","url":"tools/Jetbrains系列产品激活方法/index.html"},{"revision":"81acaeb2334ef22d8e5b1a8a9f047a36","url":"tools/vscode代码提示/index.html"},{"revision":"63e9400d50773d80d2b3838ce0c61211","url":"tools/vscode插件推荐与快捷键/index.html"},{"revision":"7a69b83317ac113241a18afa77ff1418","url":"tools/Wappalyzer识别网站上的技术/index.html"},{"revision":"85c0b4585f95e5aa08b842724e37195d","url":"tools/Windows Terminal美化/index.html"},{"revision":"aae273d85c06a84a915645f456b311ba","url":"tools/Windows自定义右键菜单/index.html"},{"revision":"cb95448c0f59619e996a22f8b7b3956e","url":"vue/vite+vue3搭建uniapp开发环境/index.html"},{"revision":"65e2cba89ea1fc0886dd9f2050810fee","url":"vue/vite相关插件/index.html"},{"revision":"45eb97d9b2ba8d67666e7fe2295701b8","url":"vue/使用Vue开发Chrome插件/index.html"},{"revision":"55446aa4dab105faf08c597f0fc3db63","url":"vue/搭建Electron+Vue3开发环境/index.html"},{"revision":"6383fee9a89c18116fae559a7f8c419b","url":"web/RPC远程调用浏览器函数/index.html"},{"revision":"582f45a672789b737663396840cef2a0","url":"assets/ideal-img/blog.21f1366.1183.png"},{"revision":"985c936b84eb631c8bbbad3cf93d2200","url":"assets/ideal-img/js-de-obfuscator.55bb112.1285.png"},{"revision":"7acb7caf7d32163760a20351d13b95f8","url":"assets/ideal-img/kz-admin.e37955b.1602.png"},{"revision":"5325ffce6f0e1f86fcb146de846c6582","url":"assets/ideal-img/nav.d3cb6ed.1723.png"},{"revision":"a108edd9a56cbcf2eb254bcc5fc37035","url":"assets/ideal-img/question-man.e0bc8e7.597.png"},{"revision":"c4933d23a345a74201fb56e781af32a1","url":"assets/ideal-img/tools.fe3a5bf.1151.png"},{"revision":"d9c78395f40b170dba10b425f18dbacf","url":"assets/images/blog-000a674376ec25df74fae115a09151f6.png"},{"revision":"89ddc5436d615190571064e984a54669","url":"assets/images/js-de-obfuscator-a350a93d536de78a7b60c183c57f8572.png"},{"revision":"d670b9514d9dff1d3bc376ed200f5551","url":"assets/images/kz-admin-3d82e2ac543ee8bc20fe806e417cc666.png"},{"revision":"99d0fbadfec740cf04d88ac2c583d516","url":"assets/images/nav-b36ed776ac04c7c84d955f8edd096724.png"},{"revision":"c8bfd00a770db77cfc0ded26854c3a4c","url":"assets/images/question-man-bd876db8843b62d12f2c4f1a4ecb90e0.png"},{"revision":"31837b8c869615a23b84f74732d1def1","url":"assets/images/tools-d299d6f8c719c0d62df4f7b76f55af47.png"},{"revision":"d4362289f805e803324da1c8a420f986","url":"icons/bg.svg"},{"revision":"b3a935cbd91d573d4081fec16fcf0967","url":"icons/bilibili.svg"},{"revision":"67295e9cf1ead133bc8ff6de9d802122","url":"icons/circle.svg"},{"revision":"577838587d18c845b8117e015b4bc677","url":"icons/cloud-music.svg"},{"revision":"66965ccc7bde0ae931c1f0864d0ee1ab","url":"icons/csdn.svg"},{"revision":"62517b9ba0aa6eb7d9a48cd982b9fa77","url":"icons/eye.svg"},{"revision":"0c275b9f64dbaacf5b088a41a8cb0af5","url":"icons/github.svg"},{"revision":"6bdafd801c878b10edb5fed5d00969e9","url":"icons/juejin.svg"},{"revision":"c3ee49b19d756462638677d8a9740fb4","url":"icons/new.svg"},{"revision":"0d2b32a9e75d02a45b5abb8e604f03bd","url":"icons/qq.svg"},{"revision":"20122bfdabc980cb3dc8482ba40c6ed0","url":"icons/rss.svg"},{"revision":"9e5a7aa8c92efaeeb46c182e04db9eea","url":"icons/weibo.svg"},{"revision":"14985c00ce247f0d9a6d42abd15b13fb","url":"icons/wx.svg"},{"revision":"be46445fd0a91cbb038061ce63f57731","url":"icons/zhihu.svg"},{"revision":"85d3a59f970852f1f535db77eb16409c","url":"img/favicon.ico"},{"revision":"79bd395ba942a83a95ad97300b1f026a","url":"img/hero.svg"},{"revision":"dae2b33c35e2c64832ec00db570b783e","url":"img/icons/icon-128.png"},{"revision":"29d09cd69cfd5e057055075b436271b2","url":"img/icons/icon-192.png"},{"revision":"3f21efa24b7c52f655bf8e6893d713e5","url":"img/icons/icon-512.png"},{"revision":"10b5606261746e794071b067f21ed40c","url":"img/kuizuo.jpg"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"},{"revision":"48e2e4723af94a3c82b2341ea76fcf38","url":"svg/android-original-wordmark.svg"},{"revision":"951e0f370482b5861bb0744ddb24ae70","url":"svg/cplusplus-original.svg"},{"revision":"628aca24e57c867507221ed77a4040ce","url":"svg/docker-original-wordmark.svg"},{"revision":"0dadb6aa7950d23131f4251c18da77f0","url":"svg/elastic-icon.svg"},{"revision":"96f652cebdd5b09b43b814b826de79f2","url":"svg/electron-original.svg"},{"revision":"2c4e16ef81f265d076894c6835bec402","url":"svg/go-original.svg"},{"revision":"cba10c7c1ce484b82ab9b156b9abc74a","url":"svg/html5-original-wordmark.svg"},{"revision":"459bbae2e96a2410c5b429eb941a4c11","url":"svg/java-original.svg"},{"revision":"0c1f700da144243c526f252e59362138","url":"svg/javascript-original.svg"},{"revision":"99afb43938e1ddf65dec642db29cee39","url":"svg/mongodb-original-wordmark.svg"},{"revision":"2c7563f40818e2fe39b32715444dc790","url":"svg/mysql-original-wordmark.svg"},{"revision":"4d315923fdb4ed913816974c5cdd8004","url":"svg/nodejs-original-wordmark.svg"},{"revision":"fea4d54f3adf48d44cedd0a745841a4a","url":"svg/php-original.svg"},{"revision":"71374043d9b3d9ea7fa09976a747d475","url":"svg/python-original.svg"},{"revision":"d4eebc6dc7a839b5052f793919082d4d","url":"svg/react-original-wordmark.svg"},{"revision":"f6d8296b698a6ba00cbb2e4a4593f109","url":"svg/redis-original-wordmark.svg"},{"revision":"c06d3c068de68e5654d05552e26e3452","url":"svg/typescript-original.svg"},{"revision":"294b2130c8e646dc3caacca139194603","url":"svg/vuejs-original-wordmark.svg"}];
  const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.PrecacheController({
    fallbackToNetwork: true, // safer to turn this true?
  });

  if (params.offlineMode) {
    controller.addToCacheList(precacheManifest);
    if (params.debug) {
      console.log('[Docusaurus-PWA][SW]: addToCacheList', {
        precacheManifest,
      });
    }
  }

  await runSWCustomCode(params);

  self.addEventListener('install', (event) => {
    if (params.debug) {
      console.log('[Docusaurus-PWA][SW]: install event', {
        event,
      });
    }
    event.waitUntil(controller.install(event));
  });

  self.addEventListener('activate', (event) => {
    if (params.debug) {
      console.log('[Docusaurus-PWA][SW]: activate event', {
        event,
      });
    }
    event.waitUntil(controller.activate(event));
  });

  self.addEventListener('fetch', async (event) => {
    if (params.offlineMode) {
      const requestURL = event.request.url;
      const possibleURLs = getPossibleURLs(requestURL);
      for (let i = 0; i < possibleURLs.length; i += 1) {
        const possibleURL = possibleURLs[i];
        const cacheKey = controller.getCacheKeyForURL(possibleURL);
        if (cacheKey) {
          const cachedResponse = caches.match(cacheKey);
          if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: serving cached asset', {
              requestURL,
              possibleURL,
              possibleURLs,
              cacheKey,
              cachedResponse,
            });
          }
          event.respondWith(cachedResponse);
          break;
        }
      }
    }
  });

  self.addEventListener('message', async (event) => {
    if (params.debug) {
      console.log('[Docusaurus-PWA][SW]: message event', {
        event,
      });
    }

    const type = event.data?.type;

    if (type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
})();

})();

/******/ })()
;
//# sourceMappingURL=sw.js.map
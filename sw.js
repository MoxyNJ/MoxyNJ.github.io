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
  const precacheManifest = [{"revision":"c1c9e04f9ef9422a78848d7c6c3e47d9","url":"404.html"},{"revision":"3546afe6a0316769ec5f374d661d9959","url":"about/index.html"},{"revision":"b7f1cc70d19a77a0589560766e5a037f","url":"archive/index.html"},{"revision":"fb69cfa1ea05fef3cb63ca9a0bd66e2b","url":"assets/css/styles.cb2f47c4.css"},{"revision":"669b26de7b7f5fe533c2ece00874b1e5","url":"assets/js/01a85c17.6ad8eb03.js"},{"revision":"9565732b78d32b0907f47c4857e2806c","url":"assets/js/05123b11.23bb1e8b.js"},{"revision":"e6c9ff03e565c97c896bb153b51c95ad","url":"assets/js/0555f506.0620236f.js"},{"revision":"7cd80036c046893f4c021f6e2570b34d","url":"assets/js/08e4aded.9dfaa803.js"},{"revision":"b50958ce685941d76f6d48ad6f4c7286","url":"assets/js/094cc122.bc3a8395.js"},{"revision":"31c9106e33ed9621e577d733af5b0b47","url":"assets/js/1067.69c0edd4.js"},{"revision":"eb077c89206fd1d0bdef4f44cff749d9","url":"assets/js/11f5db1f.d793bc19.js"},{"revision":"c4d6f233664e3bd325fa798e45ca2e26","url":"assets/js/125dc381.1fc955f8.js"},{"revision":"dce14b4551bbf5608b0e2908889fd7da","url":"assets/js/14eb3368.672ce089.js"},{"revision":"6472faa6247cde7068823ecd3a506f53","url":"assets/js/17896441.cecd33a7.js"},{"revision":"97145e0979aa41e4691a8820bba40b5f","url":"assets/js/1a4e3797.33b5888e.js"},{"revision":"fb2c36fe590caef715334085eeefc680","url":"assets/js/1be78505.2271cda9.js"},{"revision":"8d51c3c1b9303706e95d674f408be3a9","url":"assets/js/1ce38e53.fa16aabe.js"},{"revision":"cdefe4bb6591db52fdebf94732de2b8a","url":"assets/js/1e60b28a.80f93dd8.js"},{"revision":"cd84165634b97aa9b891ee4fc2c3e95a","url":"assets/js/1f391b9e.ec95c93d.js"},{"revision":"7d392070808818a9264c91077a233573","url":"assets/js/2153.910095c4.js"},{"revision":"b35e916d817d9112e811ce5504e273d8","url":"assets/js/222fc5f6.2ab74482.js"},{"revision":"8cc766fd1ed491652f39221262b2f42b","url":"assets/js/27b72c95.294143c3.js"},{"revision":"b768dd443e291cb1f9c5c0c71571eb55","url":"assets/js/2af2e962.31907565.js"},{"revision":"e5ea2d24d8ae9bb9c9c3ce1171bb1144","url":"assets/js/2e801cce.a040bd7a.js"},{"revision":"1e1b0e272f50b1e02c59fa66fed437bb","url":"assets/js/3349b465.007cbab2.js"},{"revision":"bd13c08668de69f007b2742c265911b5","url":"assets/js/3501.1b582a13.js"},{"revision":"7863d57f1b909dbeb7da6a6968e044b7","url":"assets/js/363.7b0a96ff.js"},{"revision":"d63dcf361998552cfafd5d15f90a9339","url":"assets/js/3720c009.8e359a48.js"},{"revision":"6b37debfb614fe9619d6ac58868aac7b","url":"assets/js/37c0e64c.234ce9ab.js"},{"revision":"2b018be738ef42e059bf4b91bf4fb756","url":"assets/js/384fd8ca.a81242d6.js"},{"revision":"3ece1a9a2e4a12166400ea89511cc535","url":"assets/js/38678ca7.c1e31e73.js"},{"revision":"e096cdcda40cb6abb05c60b4af1d5cab","url":"assets/js/388527cf.9671fa66.js"},{"revision":"22b6ede44ece248e7a77a23551433f21","url":"assets/js/39116134.2085edb7.js"},{"revision":"f8f8c646e0317924ccbbc9e6b0a6101f","url":"assets/js/39a764ca.379ee35c.js"},{"revision":"75c7a1cd7a7418b7475dc10f979480cb","url":"assets/js/3a5ee190.bdb48271.js"},{"revision":"4fa2ae00ab57f671219ea2c51e2029a3","url":"assets/js/3c5a3ff4.652c8a7c.js"},{"revision":"caeeb093e20add0055f3f2dfaa893dbf","url":"assets/js/3fa08e5b.3a7fcaa1.js"},{"revision":"32fc4d9eb4e687b35eba8a19caeef476","url":"assets/js/457a2473.1386706d.js"},{"revision":"b545a5e2baf954766b830baf316716e3","url":"assets/js/4718b066.5288bd8b.js"},{"revision":"80d3389f5ac9bf13b640374f2d8f82fb","url":"assets/js/47e9d5d2.8d56f87a.js"},{"revision":"53210d91803259af427faea3dd172ee1","url":"assets/js/48b7aa19.5cee56ae.js"},{"revision":"da372321629136d20a45dc41ee102f30","url":"assets/js/4b7f30c0.bbb23c7d.js"},{"revision":"1c91e6742acefff5d731e4269140a552","url":"assets/js/4b9a7e9a.ecac3f79.js"},{"revision":"06e2286abdd0e62fe27c6783abc90421","url":"assets/js/4b9b2066.723fc829.js"},{"revision":"35243c4ea7f1f0a1c5d970b176316699","url":"assets/js/4bf6a619.19e6a0f6.js"},{"revision":"bac340cf223d1cfdbaf341bd67a8a4eb","url":"assets/js/4ef19d2f.e783ed11.js"},{"revision":"df91e4fb2b4bf7295e370394a74d7529","url":"assets/js/5131.3fdd1608.js"},{"revision":"97a45b1707167b9b089e1560b36b67a9","url":"assets/js/55960ee5.8b5c6e38.js"},{"revision":"309ecfaeea34ce1ce0acb0cfe08a3a2f","url":"assets/js/5d4d841c.a9a4ea07.js"},{"revision":"3f574e93de8192f6c22c0961e07c0151","url":"assets/js/5fd39a48.5f132e4f.js"},{"revision":"a003f3c4e5347ae504922dd75afc7ec1","url":"assets/js/6007e35c.a3a241c7.js"},{"revision":"31bfcb83d918f0471a115c44f4d028b2","url":"assets/js/61be6eca.8e2ffc72.js"},{"revision":"64756d9b9b3c403734d9d28928b8e796","url":"assets/js/61c7695b.79f05cf7.js"},{"revision":"d436aacba8b688adee4c5f87ea8a0833","url":"assets/js/629ed2fe.c5aab2a7.js"},{"revision":"6ade77ecc728e60c832f6c1025832fc5","url":"assets/js/63309ec8.fbcdddf0.js"},{"revision":"a2c261e130e278f89abc7122afaaa45d","url":"assets/js/6338d2c2.3c56ae59.js"},{"revision":"84060b22398bcb0bde6e8ee9e51e5004","url":"assets/js/63a9220f.d9e6f8c7.js"},{"revision":"05d4a99593e8e7e01d2958aeed3bbb76","url":"assets/js/63d68054.1e38da1f.js"},{"revision":"2054087cb4c53e1b449bf3ae71fd6088","url":"assets/js/647ce438.cbc0fd8b.js"},{"revision":"136b4891d4634636f3a8fbc2ef531bf3","url":"assets/js/655ee501.658b1668.js"},{"revision":"3ebf6605b3f34f90448b92dab8b323cc","url":"assets/js/65e68d0d.5f8fb8a0.js"},{"revision":"11b73e44ff2ae2a610c3fb925ca7d754","url":"assets/js/67443b8b.45b0fa02.js"},{"revision":"c387744aa793402051c0a90696f8d71f","url":"assets/js/6815.d5fc8e4c.js"},{"revision":"6038973c9b97303111278e2b7b0dbd62","url":"assets/js/6875c492.6b849e3c.js"},{"revision":"ed7126e248946a4fcdd0007646134e51","url":"assets/js/6945.408098b1.js"},{"revision":"266c6696b5551da86f40ffb2d16426e3","url":"assets/js/6a6ca912.5504d273.js"},{"revision":"61de98a19f9a78a1007995c3fa996790","url":"assets/js/6b6803ed.4c3c319b.js"},{"revision":"c694758a2e17a4b8c4243efffb1f420c","url":"assets/js/6cce7244.9335cfce.js"},{"revision":"43eb932d985a8e2bdfe4ef59ec6301dc","url":"assets/js/6ef55f06.f9a2e672.js"},{"revision":"c0c29fd331b783b8a5e91676d2fc1b96","url":"assets/js/704c0f1d.ef305404.js"},{"revision":"c3ed9a8253d8bd69b36e9cf11a47166a","url":"assets/js/7097.4fcfd0c3.js"},{"revision":"08344b7d1b56429dc1283a38c3b96921","url":"assets/js/759e5b82.10451420.js"},{"revision":"b8e442c243f0e56001daac05bc6c962f","url":"assets/js/7ce8999a.a1985430.js"},{"revision":"12da3482d3aaa43d38c167cd9c70c9b7","url":"assets/js/7d8c1502.218dff0f.js"},{"revision":"6e17cac884a4f991c1551439c49e9eef","url":"assets/js/7e516c75.0d97fffe.js"},{"revision":"0162703cbdb31dcc010cf749fa1112f5","url":"assets/js/814f3328.eb425b41.js"},{"revision":"820cefac6e99c33ff5a55ff6f691e77c","url":"assets/js/8177.59f70ada.js"},{"revision":"570338e1453733d44d31df0d2d201a27","url":"assets/js/84c183d9.3cb39243.js"},{"revision":"3b9b8bf6cf3aa92f8ae407c8b8eac34d","url":"assets/js/85a75576.3329c9ad.js"},{"revision":"00a2e6e504bf9b4f5ce44af468fca929","url":"assets/js/8646.5afc0cd7.js"},{"revision":"d90dc4cd9828a92b00de11e77d756e05","url":"assets/js/88f40300.3e66b7bf.js"},{"revision":"855edb5f3a5306f3c3acbdf7960ac10d","url":"assets/js/8c2375a1.2ccea28e.js"},{"revision":"557d06301d837672e0634db55b0837e4","url":"assets/js/8d2dd4e8.9e9fd090.js"},{"revision":"319b387f8140d83a0b75f7573c1c0b57","url":"assets/js/8f5cf9b6.637f07c5.js"},{"revision":"a599b6985b1bbfe4e8129d33876e9af1","url":"assets/js/9168.4e52abb4.js"},{"revision":"4ba6268e6a1f6dca1e1dc3ec264a9575","url":"assets/js/929f58c5.6849a5da.js"},{"revision":"240474df20f87c746c21453293ffe095","url":"assets/js/935f2afb.55918dea.js"},{"revision":"b9ffe4a35a1da9e70ae025e974f0aa9f","url":"assets/js/9522c694.9cc009f3.js"},{"revision":"f50338dce5234c7138399e3c584efe61","url":"assets/js/956d027b.6d899908.js"},{"revision":"c63f1397f1dae9a2060d35164f401cb1","url":"assets/js/98a9be40.62b7b3ee.js"},{"revision":"d6f4dcd27816aa932f128630c2985fad","url":"assets/js/9927.4a3c2730.js"},{"revision":"400aec7fea9a3bcd107b80a40c9a27a4","url":"assets/js/9b2cbc25.12ce0840.js"},{"revision":"a2dda0cb04554581ad747e9dae0d0997","url":"assets/js/9b717135.4906d5b3.js"},{"revision":"2b06d969a3b2c014963d0c77e3da1f41","url":"assets/js/9cab85fe.f728a1cb.js"},{"revision":"390ae639b1028179fbbe961e502f37c6","url":"assets/js/9e4087bc.bbd692df.js"},{"revision":"df8afcf42b21fecbfadc200d148d5346","url":"assets/js/a207c421.998945a1.js"},{"revision":"0bd30591182af6299da4f0d65be09b52","url":"assets/js/a2404479.bb879373.js"},{"revision":"514928c5aaef82c7391251f7dd9891eb","url":"assets/js/a29f262d.eb9a218d.js"},{"revision":"162e3b95cceca5719d2b11ee6ec255a7","url":"assets/js/a2f168a3.b7ba2b9c.js"},{"revision":"234d57f65a9062905d10ae1b9ffa567e","url":"assets/js/a3bf37ad.7d837143.js"},{"revision":"798e6965dcc4c6277311d07e1ed90a88","url":"assets/js/a5557bb9.84c01af8.js"},{"revision":"dad0c189da2b8771ca3c2cb8f2a793a9","url":"assets/js/a6aa9e1f.a4524115.js"},{"revision":"19a7a82231f8a0e7a5785f7a25dc5306","url":"assets/js/aaef1ba8.9d97215f.js"},{"revision":"fb3bde6fafdd33bf16781543072c638a","url":"assets/js/ae2abfe4.89caf8cb.js"},{"revision":"23f6633df0a4c3fd193129683e24dfda","url":"assets/js/b0b79613.6fa4314e.js"},{"revision":"bf5075858ae6d12f3eac33a2aaa6277b","url":"assets/js/b0bee717.2934859d.js"},{"revision":"c632739327d6c04ed6f19f3bf9f32afb","url":"assets/js/b52c9ce5.855533ae.js"},{"revision":"8a056132d7dcb20226976d193f275667","url":"assets/js/b68c8459.994f02f0.js"},{"revision":"e5df1b4bafd7540b08e698c500ca472c","url":"assets/js/b9132da8.d100d941.js"},{"revision":"935fc165eb604409e76afb83e729ea4f","url":"assets/js/bac59585.bc018125.js"},{"revision":"9dbeb6037ea5572d8fbcdf946864edee","url":"assets/js/bbf65677.450126c5.js"},{"revision":"d65a2fd0a93b99d11f891cdb8237ef8c","url":"assets/js/c0b8df48.0d3b57be.js"},{"revision":"000849899717cde123a60c9fefa8d975","url":"assets/js/c369fddc.04ff34cb.js"},{"revision":"8e56f37add7e88faf82c784a4e50a495","url":"assets/js/c573638f.5f01d966.js"},{"revision":"633f310daef561d6e8873caf98996838","url":"assets/js/c7e99ff7.59b53044.js"},{"revision":"0e333e77129373c9b0762f4fd420566e","url":"assets/js/c90cc597.a1d7a289.js"},{"revision":"f7f05261d3d947245b6d3e45c5c111eb","url":"assets/js/c9f32de9.9dbafd5f.js"},{"revision":"dc42af814416e58b710c839961911010","url":"assets/js/ccc49370.604b59a1.js"},{"revision":"213f0af2398353083d8d8257192093e6","url":"assets/js/cd30901c.fdb842e1.js"},{"revision":"f8bbc574ff3faa3318784edf115fb2ff","url":"assets/js/cee88e21.c2040496.js"},{"revision":"f82e9c614522173fda307e503595bae0","url":"assets/js/d20dfbe9.92656cac.js"},{"revision":"07596ee1f546c38d61d8cf0b59827bcf","url":"assets/js/d3213aa3.60830df6.js"},{"revision":"7e99bbf1d7ff43266963d4a622b30d58","url":"assets/js/d536391a.e63308b5.js"},{"revision":"171583800500d82d06db22e4f320f0f0","url":"assets/js/d7b3e9d0.9c5cd2f6.js"},{"revision":"97c4b0efeebbe1ab099c2e5fe38db427","url":"assets/js/d83dd1a2.469e0835.js"},{"revision":"3ea99c0955d4e232294f4b65ba57d423","url":"assets/js/d9c52a93.f19f8815.js"},{"revision":"e497f4e58a70e5621eec355bcd576fb2","url":"assets/js/dbe27629.be3f9a8b.js"},{"revision":"73b3a46f48611ee4b4f808cb7eb0b6d2","url":"assets/js/df203c0f.e5ba4c9f.js"},{"revision":"41e70be879c7e4038413cd8d4ddb058b","url":"assets/js/e0796e71.ddcc1c5b.js"},{"revision":"fd3beef45b9de26d68d0ecd858e0da89","url":"assets/js/e2842926.b34f4921.js"},{"revision":"b029ada8860c7294d65054a8fcd2beee","url":"assets/js/e2f36831.3a652cb8.js"},{"revision":"0ad1a221ad301b8b90d21683119e2271","url":"assets/js/e2f720b5.7027209e.js"},{"revision":"62bc05cbbde280700e96877c5f4d580a","url":"assets/js/e84bcc11.545105f0.js"},{"revision":"7bf94da1ee56b914535356a4ac14e577","url":"assets/js/f191e14c.7b08c144.js"},{"revision":"f32fa335484c49d4f187ed32d61c5b58","url":"assets/js/f44363bd.5790aa5b.js"},{"revision":"e218fcc64606f6606fecee3b4a05d730","url":"assets/js/f57c9605.440d8dd6.js"},{"revision":"0b4ed5bf1125df15585a5c196922d852","url":"assets/js/f94d73e9.786a42f5.js"},{"revision":"017e5f2e6d7af962da4f8f513a21e2b7","url":"assets/js/fa91eed9.a6aeec6a.js"},{"revision":"9cb5fe11307212dcdc00b568475c1e44","url":"assets/js/fbd1779f.2d86f631.js"},{"revision":"cfdb6188a64c8d81d83a5964cf6df26c","url":"assets/js/fe70197d.b995f6da.js"},{"revision":"e82a0c74d51391babf1836babde43f1e","url":"assets/js/fe9eb4b8.8f996ff1.js"},{"revision":"ef7fb47ab6f2b1cfa4013c43918a67f7","url":"assets/js/ff2c7cca.b938ff6d.js"},{"revision":"1e9a033b4f07592822b4c26a043ada83","url":"assets/js/main.c0596cfb.js"},{"revision":"4baea2bf0f9d94e870f8840e2860073a","url":"assets/js/runtime~main.761e5f88.js"},{"revision":"c366c388e24fb86693372b5f426734c8","url":"docs/category/algorithm/index.html"},{"revision":"9a1facce3515d6d6b78435b560888045","url":"docs/category/html--css/index.html"},{"revision":"e0f4d85a0bd5ff5a586d056bd9035a1a","url":"docs/category/iot/index.html"},{"revision":"47405c2a251adf033f2727f909e80031","url":"docs/category/javascript/index.html"},{"revision":"52dc39f7df6e7efb40672d2689c85869","url":"docs/category/other/index.html"},{"revision":"9e3604ad1e2c539020be0c6daa820c13","url":"docs/category/react/index.html"},{"revision":"0ba7cef377949f7c2b49972a134dbb61","url":"docs/category/总结/index.html"},{"revision":"0808e705266a6ca78de5154e63ebf40f","url":"docs/category/手写-js/index.html"},{"revision":"2567e337f394eaaf65334cce7eb42181","url":"docs/category/浏览器原理/index.html"},{"revision":"0a1f9d9ff4d125cbe0e0097ffcb7dc95","url":"docs/code/algorithm/hotProblems/index.html"},{"revision":"8482c109e09c5ccc40fe2a44e3ea729d","url":"docs/code/algorithm/index.html"},{"revision":"f207081c7e64df4e5d9227428a8a7c00","url":"docs/code/algorithm/二叉树1/index.html"},{"revision":"adba157415aa26907b62e5ef7511346f","url":"docs/code/algorithm/二叉树2/index.html"},{"revision":"c9dc5af605f2cc16004dfced5d8060cf","url":"docs/code/algorithm/动态规划/index.html"},{"revision":"205b80540626f079bc14dc8bb204ccac","url":"docs/code/algorithm/动态规划2/index.html"},{"revision":"72588757deca4dd19b842310ac1a12ab","url":"docs/code/algorithm/哈希表/index.html"},{"revision":"07fbc7d836e549392eb89f0609017809","url":"docs/code/algorithm/回溯算法/index.html"},{"revision":"1ed6938e75244571f3e4bb1d1dad24cd","url":"docs/code/algorithm/字符串/index.html"},{"revision":"da541f17f02c76ebad7e5b59ec5131c0","url":"docs/code/algorithm/待整理/待整理-笔试题/index.html"},{"revision":"0b8b9e885b313559af389fb66aa3ef45","url":"docs/code/algorithm/待整理/算法-掘金小册/index.html"},{"revision":"d8f92cc3a11778260eb80c3842a6e664","url":"docs/code/algorithm/数组/index.html"},{"revision":"216b553e7db7bcd2edd02eb6ded82d79","url":"docs/code/algorithm/每日一题/每日一题-5月-1/index.html"},{"revision":"fe89ab3c1097450752749cfd5083d874","url":"docs/code/algorithm/每日一题/每日一题-5月-2/index.html"},{"revision":"f2a14ffc6974b62d5f338779f40c9231","url":"docs/code/algorithm/贪心算法/index.html"},{"revision":"e243eeef211e9f32541ec612badf998f","url":"docs/code/algorithm/链表/index.html"},{"revision":"97de3cac50992d9d561761c69f605858","url":"docs/code/algorithm/队列和栈/index.html"},{"revision":"21b3e0143c1c34a13b3d8eda781b285b","url":"docs/code/writtenJs/index.html"},{"revision":"83c5d04e2644f858e43e12ad7038cf0c","url":"docs/code/writtenJs/jsAPI-2/index.html"},{"revision":"3248afc740848e59121412352946bb4c","url":"docs/code/writtenJs/jsAPI/index.html"},{"revision":"c00f64c098fc596ff2d4bca9c21c4822","url":"docs/code/writtenJs/异步编程题/index.html"},{"revision":"e240301c477d3fd7645189b017e89926","url":"docs/code/writtenJs/时间复杂度/index.html"},{"revision":"e7c78f26889b01463a19f390499b55e7","url":"docs/code/writtenJs/继承/index.html"},{"revision":"eeffb1da53a60e83d907c8ef62554869","url":"docs/frontEnd/HTML&CSS/CSS选择符/index.html"},{"revision":"750860729d2a1c6d38707041ba7e868a","url":"docs/frontEnd/HTML&CSS/CSS预处理/index.html"},{"revision":"742d699564f7250b8ba082bc866bdfe5","url":"docs/frontEnd/HTML&CSS/Flexbox/index.html"},{"revision":"2e451a5fba8d3e13198f62e61daa6bc0","url":"docs/frontEnd/HTML&CSS/Grid/index.html"},{"revision":"dd41dfa2ee8067983a69361719902f65","url":"docs/frontEnd/HTML&CSS/index.html"},{"revision":"d6b3f470f764f67799aec0725b9adb2c","url":"docs/frontEnd/HTML&CSS/Visual formatting model/index.html"},{"revision":"4e30da0847a4549e8fda2ea9abee02f2","url":"docs/frontEnd/JavaScript/async:await, 异步编程/index.html"},{"revision":"92e5e87c701ca77fb98158c2a39afd9a","url":"docs/frontEnd/JavaScript/DOM&BOM/1 Document & 事件/index.html"},{"revision":"43e3d8a5dd17f634d4c97866e2243cd7","url":"docs/frontEnd/JavaScript/DOM&BOM/2 UI、表达控件、加载资源、杂项/index.html"},{"revision":"a79f20ec4983179905ded47054ff957e","url":"docs/frontEnd/JavaScript/DOM&BOM/3 弹窗、网络请求、存储/index.html"},{"revision":"c0de502cdf0ec140ba8f6af01495649d","url":"docs/frontEnd/JavaScript/ES6+基础/index.html"},{"revision":"e012335654df720e682cc3e046f26ce5","url":"docs/frontEnd/JavaScript/index.html"},{"revision":"42494fae73552345103fb443ebd09a6a","url":"docs/frontEnd/JavaScript/Iterator, Generator/index.html"},{"revision":"166a815a76dd9bd195ab2e426f70b0aa","url":"docs/frontEnd/JavaScript/JavaScript的执行过程/index.html"},{"revision":"aa8527e6982262f97db9599eea7cae58","url":"docs/frontEnd/JavaScript/Promise/index.html"},{"revision":"73123f1c678f05e6477475b545275104","url":"docs/frontEnd/JavaScript/Proxy, Reflect/index.html"},{"revision":"e7054f9c6fe4af636c759f79488d8ad7","url":"docs/frontEnd/JavaScript/Symbol, Set, Map/index.html"},{"revision":"8a54de98c6277433d16293252383fc34","url":"docs/frontEnd/JavaScript/this与箭头函数/index.html"},{"revision":"a640477c4809d57cea503c03a60bffb0","url":"docs/frontEnd/JavaScript/z-ArrayAPI/index.html"},{"revision":"9f4397a56a518c8f49f9a1b71cc94589","url":"docs/frontEnd/JavaScript/z-执行上下文-ES3/index.html"},{"revision":"0a031b0aaff6ed2ae50517c867e7806a","url":"docs/frontEnd/JavaScript/作用域链和闭包/index.html"},{"revision":"bb02f2f077e7b69a40f1afc3a48c5b07","url":"docs/frontEnd/JavaScript/函数与函数式编程/index.html"},{"revision":"655620e4fa7b8b3ac59f837fcd41e721","url":"docs/frontEnd/JavaScript/原型链/index.html"},{"revision":"7ab720b26f07bab4c84b14d9dc132e25","url":"docs/frontEnd/JavaScript/对象/index.html"},{"revision":"8826eb802343abeb2fbbdc83396f36ff","url":"docs/frontEnd/JavaScript/执行上下文/index.html"},{"revision":"8eb3ece95c65bfa3042797a2eb5341a5","url":"docs/frontEnd/JavaScript/提升与暂时性死区/index.html"},{"revision":"7d0636e1192cc27e12e88512b302b98c","url":"docs/frontEnd/JavaScript/模块化/index.html"},{"revision":"ec875ee6e489d7c103be7e5626fec63e","url":"docs/frontEnd/JavaScript/继承和类/index.html"},{"revision":"af7f98eacd9f5a973e9a040038a31b08","url":"docs/frontEnd/other/Ajax&Axios/index.html"},{"revision":"0584a11ff71b48971bb9ab0657b778fc","url":"docs/frontEnd/other/index.html"},{"revision":"9e6adbf59e1f12a9c289db9b041601c3","url":"docs/frontEnd/other/Typescript/index.html"},{"revision":"969bf6e7c402f991bb051ac2782bf6eb","url":"docs/frontEnd/other/webpack/index.html"},{"revision":"34b9f46aa0f338fbbc52be962aa13fb7","url":"docs/frontEnd/React/index.html"},{"revision":"e41530cc7e62359e60807c099ecc1fa2","url":"docs/frontEnd/temp/index.html"},{"revision":"a234f3f92422f8a75d4b8c412661a758","url":"docs/frontEnd/浏览器原理/index.html"},{"revision":"f0b71e6f12a60148dc4aa77097cbd118","url":"docs/frontEnd/浏览器原理/存储机制/index.html"},{"revision":"a481992c3278243d6745c24547d9118e","url":"docs/frontEnd/浏览器原理/页面循环系统/index.html"},{"revision":"47f7676190eb2a549302a798c578ddb8","url":"docs/interview/iot/index.html"},{"revision":"85284b12f5f5703829cfcb87cbca0b0b","url":"docs/interview/iot/物联网1/index.html"},{"revision":"45477dbc9e898c0a51b1534668af60d7","url":"docs/interview/iot/物联网2/index.html"},{"revision":"0db3b479b3fe0699c0b84f2bc04af6af","url":"docs/interview/summary/HTML&CSS/index.html"},{"revision":"930db2ca0db145a459d8ed3bbac0303c","url":"docs/interview/summary/index.html"},{"revision":"b32eee7892c063fa26edac792ec6ca85","url":"docs/interview/summary/JavaScript/index.html"},{"revision":"d0840113d83748eb180f6df6d50a79d3","url":"docs/interview/summary/操作系统/index.html"},{"revision":"a18c580857b74ccd8dd0a233a4b8492d","url":"docs/interview/summary/浏览器/index.html"},{"revision":"4c76218ac52a0f89dda18b09b10eb7f9","url":"docs/interview/summary/计算机网络/index.html"},{"revision":"0159446202cf08511f87a99bdfd07124","url":"docs/tags/algorithm/index.html"},{"revision":"831e3bf556a6477f0415608580929875","url":"docs/tags/css/index.html"},{"revision":"db912b734c71b6e5111fbdca4ea9cdc4","url":"docs/tags/dom、bom/index.html"},{"revision":"65dbe6d7523f74b56e87812968149193","url":"docs/tags/dom/index.html"},{"revision":"3328ba014e054aed910e396fdb9f8bc2","url":"docs/tags/everyday/index.html"},{"revision":"cf91c00c064633cb0f7dee7af15d3ae1","url":"docs/tags/html/index.html"},{"revision":"71ca367b146650b5a91c0eda6856dd0e","url":"docs/tags/index.html"},{"revision":"dc13745f1496d450a4921f3140438253","url":"docs/tags/internet/index.html"},{"revision":"4d9fa6f6e3f197e00bcb3e5f4acbc37d","url":"docs/tags/iot/index.html"},{"revision":"8ca34f10066fb8d82f9a4ce2acc191a4","url":"docs/tags/java-script/index.html"},{"revision":"9664cd9ff41b01da9bcaa849bde2ce75","url":"docs/tags/react/index.html"},{"revision":"a940652a2da5d876938d1c9cc078e757","url":"docs/tags/type-script/index.html"},{"revision":"5dd4f1b969214b829babb6e72bb3145f","url":"docs/tags/webpack/index.html"},{"revision":"7853386f24e216ff2dbbbe6b893a9dfe","url":"docs/tags/手写-java-script/index.html"},{"revision":"5160d8cec88022ffbb12e29c115dfb0f","url":"docs/tags/时间复杂度/index.html"},{"revision":"0755e1d363f982c1f251d09b1f49a324","url":"docs/tags/浏览器/index.html"},{"revision":"5a19ff2f7c2bc93792b0112005ae2ae5","url":"docs/tags/计算机网络/index.html"},{"revision":"d0b84db58a3491daeba33a701b36f469","url":"docs/tags/面试题/index.html"},{"revision":"082e4761d01994f0419f573b0784e52f","url":"docs/temp/index.html"},{"revision":"c5b4abb3ba9b0f2fb7619417808c3788","url":"feed.json"},{"revision":"ff1acda3e16d706668af373a827f1ef7","url":"index.html"},{"revision":"dceafaf2608859874005e1311732bca9","url":"manifest.json"},{"revision":"b2eba3fbbd64067b558522b1401e239a","url":"new/demo/index.html"},{"revision":"1f09688e2efb75543093e963b1decaa2","url":"project/index.html"},{"revision":"236f4b906a7e67d76d2f3e495f206565","url":"search/index.html"},{"revision":"aea6448d564fab03a52b5be9096626df","url":"tags/blog/index.html"},{"revision":"5ab7ab4accdc201cccb053c4ce46ec4d","url":"tags/first/index.html"},{"revision":"3ba295e057841444c28676dbf90d7702","url":"tags/index.html"},{"revision":"f55ce5512cb83a3d6ea882d48721d82e","url":"assets/ideal-img/blog.19cb3ae.2252.png"},{"revision":"99e968db75b81296a924d2aff5fa62f4","url":"assets/ideal-img/flowerlibrary.99f1441.918.png"},{"revision":"b4139d3b25eb2c20e5ed45a0767869de","url":"assets/ideal-img/reactmusic.ea700d6.824.jpeg"},{"revision":"cff9bcd5c364f9d49b13afc34bab176f","url":"assets/ideal-img/toy-browser.7ceca7f.806.png"},{"revision":"57b2b5ebd69bbe9a614be9a70eb5ae9e","url":"assets/images/=anonymous_block-level_boxes-1605794985475-9bd3488287f720b3d60cbc1207f4d9be.png"},{"revision":"e91853e9a21fd017f1ac81f17ad62c67","url":"assets/images/008eGmZEly1gnrf1oboupg30gy0c44qp-4e70de3022dd0a42a9c1f88e635eafea.gif"},{"revision":"de6628c509b5cdbaa203474e10e3a4fb","url":"assets/images/008eGmZEly1goo4xglk9yg30fs0b6u0x-8f90cc10d2a13e45734688b63add3c32.gif"},{"revision":"89e405191fe9d10905132ea01cf82611","url":"assets/images/024bf6c83b8146d267f476555d953a2c-3301907436400cbb04a5edf4b1206fa8.png"},{"revision":"27b7f204f29d1714fc6c5bfc0bf95be2","url":"assets/images/0a990f86ad9c19fd7d7620b2ef7ee900-0675c4d2059049a066edba0446d9aa9f.jpg"},{"revision":"8a6167702c3dc6d371fa1b4c0d811094","url":"assets/images/0bae470bb49747b9a59f9f4bb496a9c6-e11a483ab22e41bed58132ef45057ec9.png"},{"revision":"626ff571a605fc0b81af290c012c44c8","url":"assets/images/0c4987fe5d05646fa8245d8cc50d1a43-6edf9ed7ac07b7ab62180aa2d8f46013.png"},{"revision":"f1e35126182f0d0fa41b793f412422f0","url":"assets/images/1-05a3880febc8c7ebaba6646ead800888.png"},{"revision":"03911f9ac2d6817d9f4f5e67caf7f429","url":"assets/images/1047.删除字符串中的所有相邻重复项-f0317670e498b4866a013540bb698312.gif"},{"revision":"f2e54f21717d4c08305550ce05e61da7","url":"assets/images/1058100aea8006ae91abbad52076aae5f3782d7562d21dff55b8010744f8f511-image-22fcd3400a1840dd6cc242ee09ef7333.png"},{"revision":"593cc697230f53f13233a8e2d7430196","url":"assets/images/123-20dcaff6ea4c8412425ed2659951a451.jpg"},{"revision":"249e5c7f5198d05d980e7be6b7569b43","url":"assets/images/1234-72df4dbb75bded9d3e0a937e80ba57ed.jpg"},{"revision":"3bce18d4396fa10471856e2c105fe6b7","url":"assets/images/1252c6d3c1a51714606daa6bdad3a560-91833273f87e6663e749213d8f70272b.png"},{"revision":"01354f58125204e4b606aa09bf61d129","url":"assets/images/125849ec56a3ea98d4b476c66c754f79-00140a90991ee40f8afc08dc9d5d64bc.png"},{"revision":"76a5177a37f813667adf980a51543819","url":"assets/images/1277f342174b23f9442d3b27016d7980-c325e0d01420e301137829c8038800be.png"},{"revision":"aadcf08b8e28cbe6222830662acfc8ba","url":"assets/images/137-91249281e37222c08da5320574487363.jpg"},{"revision":"32bb18cfafc05a76bb7f7355f3653d41","url":"assets/images/15.三数之和-48035bcf0df7a1dc2e08643c0ffc4719.gif"},{"revision":"dd972eea8d8601044cc211e800c6dbd5","url":"assets/images/1615916797-rXJnAT-image-810ded24ee6403ee632449196b422bb1.png"},{"revision":"34a6d14cb0331804f2fdf1217efe211f","url":"assets/images/1625840781415-771ff11b-c7ac-4729-8dfd-130a24f5c381-fdddc3a3ae0b3de3137e42f78d9f4e88.png"},{"revision":"3be9725d91d53c9729816a6e5ab71c79","url":"assets/images/1625841846014-6f9a1f79-69a8-4958-bcfe-464d2b013f49-2d3337e7c80f4f95903e3fbcca60c013.png"},{"revision":"9b76ef551cc3eb7358ec9223b327c3aa","url":"assets/images/1625841877805-585c3b6d-bb7e-483e-94df-baffcef6e351-5af797dbe89d6b0ac443104629b56ba7.png"},{"revision":"2011aae3f3de2a98ce8b85afb9a90f98","url":"assets/images/1625841892833-8bb9974e-63e8-428e-8beb-2a3ba945f87c-4102e47af76d75cec8d2bae5026cdab1.png"},{"revision":"fdb54c7b9ed3b1779b395ef78f25fb8e","url":"assets/images/1629860018-PMLsQD-file_1629860018260-d00b9412f11e2b4fceb8d8aa55b01e73.png"},{"revision":"24cf050e2102d2948c0e697da66bdfe5","url":"assets/images/1630157012636-bb9e556a-a082-4130-8d0b-7a85406efedc-e85a821fac0dc0dcb6131b32a3477b6a.png"},{"revision":"3151f8c9de68e7b14f7a295b69e58c59","url":"assets/images/1632280479704-7ace89fb-9a56-4d0e-a598-ce539000b58b-655e869fbc5dc92abe61866ceccd25f4.png"},{"revision":"4eb17e7cfed275f9223354c49d9ec921","url":"assets/images/1632282594874-c6124b76-32ab-41c5-9b4f-b51c444fd938-1e75b0ec47a7d330df10e74f904fb4c3.png"},{"revision":"8742911a91f37ef114f99bbe1ffeb017","url":"assets/images/1632282650723-3e24409e-787c-43b4-95ae-43d9ca8cdc5b-52604f41b62d6fd7eb6ca2e5c724fcd6.png"},{"revision":"735d6d10c3621409bea9ea8467ab9910","url":"assets/images/1632796885-xRzntC-file_1632796885933-ac923d1865e29b1d46138403f6def4bd.png"},{"revision":"e60faa238d881bba204c6eaab06aa219","url":"assets/images/1646706237-xctPRL-image-75507297eda66e0242606aea889224ba.png"},{"revision":"797be9994fa12f8618fed3ec42771b0b","url":"assets/images/1652015935-ZlJjka-966E9DF9-B55D-4414-8482-CECAD24DDF7A_1_201_a-8f8b3492aae0d442879256a98da99ad5.jpeg"},{"revision":"a87ddf1f21dd65969e28a281819fd898","url":"assets/images/1653087560-PgKIXQ-image-9c307948f6f8fd389ced8f52b1aa187d.png"},{"revision":"4578b7c9b52f5834a95e35f9eaf572cd","url":"assets/images/1653088868-LliZkE-image-26662fc39a80ef91742f050c46750bce.png"},{"revision":"f3eb5b4000bd2dcd9200f6c1bfe513e0","url":"assets/images/19a50c8f4125c01349ad32d069f564b51fbb4347fd91eae079b6ec1a46c1ccee-image-c79469ac472824167889931476da40f7.png"},{"revision":"44a664aa2d45e3a450592d4c7e6162fe","url":"assets/images/1bfcd419acf6402c20ffc1a5b1909d8c-1889675-ccae73140880ec3f47ce3b409a26841d.png"},{"revision":"8d6693f4ab7fa18d3e37a8e4393c1193","url":"assets/images/2-86cd410decf59d42fde249a4f89dfa30.png"},{"revision":"25ae9e7ca088ec8b9595275dbc1dff21","url":"assets/images/2020111518065555-8ad996b5a865b4655e81ba76f9b564e5.png"},{"revision":"967d678738c63c38eb2dd0e0a2b352d6","url":"assets/images/2020111720451790-e707a33756f37a77827474482dd70b7e.png"},{"revision":"0ccde4e493ecdaf0704608f43cb58879","url":"assets/images/20201123101929791-d964cb407459c5f8258de0addb35d842.png"},{"revision":"40bb60bd6dd2895fa845822917f61274","url":"assets/images/20201123161809624-ffc40f739fee76df5881b000127e59a0.png"},{"revision":"757aa6e515f03375075068ea2be1b16a","url":"assets/images/20201123195242899-2627025-51ddd9c85fb559595fcc93d2a1359145.png"},{"revision":"c42b9695f4d454fe80adeaf08fdcf9d9","url":"assets/images/20201123202736384-50eff680c8472a6f8eb7d066a2bc6dec.png"},{"revision":"2a29ade971a66f5527be87524311c97e","url":"assets/images/202011232041348-9c8f75d059d4929637431691a3386dd0.png"},{"revision":"caaec49d669b20e265bf8d46b16ea670","url":"assets/images/20201124154758229-38569fc0a0b88b984813802d66113db6.png"},{"revision":"64dd9d631339d11da984d82aafb19d58","url":"assets/images/20201124174327597-a61d514ab8cb8ab2ab2dac66f489b237.png"},{"revision":"17421cbe95648f8e1ddecbaf7a72aad3","url":"assets/images/20201124195411977-5921d150ba1939612c26a868d9f75acb.png"},{"revision":"e5fe263572904b73e491ed6db85be4d3","url":"assets/images/20201124200229824-d91db13d359e17769a4c378c7d2093d7.png"},{"revision":"c568d1acde4f61d34894309d01f3aa2f","url":"assets/images/20201124201331223-a753f13c6dd3c1135476ad198f627143.png"},{"revision":"233cdbf54d9444ad41da48bb8ff7c558","url":"assets/images/20201223170730367-20220518185211264-481151095681730ce6f30ff9bcd769ed.png"},{"revision":"a1f17582ab341bd934e2b9a09436ff96","url":"assets/images/20210104114513928-a09a4f63ab81a3f107d9de2bc06e310c.png"},{"revision":"ea972bd7ee43785c16cc8aeafc58cd9b","url":"assets/images/20210110103003361-ab85a69ce097c6a1c627246bde42347f.png"},{"revision":"e8f29cf5b522b7780681a0a26ee5432c","url":"assets/images/20210110103109140-13f5837cb8b1c6f380d4c9b7e0c9766f.png"},{"revision":"23f313c38ec462f4404159964c7b938d","url":"assets/images/20210118163425129-4ada5c406ad32fa2a627ece1c90ce1fa.jpg"},{"revision":"806c23264b19fcb1037628bca746ac2b","url":"assets/images/20210121171032473-9063f8fd72d3d0083fa8f0b273da6bb1.jpg"},{"revision":"dfd5e2d187ab117f22ee4308ec5afd90","url":"assets/images/20210130182532303-16537724964272-7e02ccdfbe61928a6171d7e1998cac8c.jpg"},{"revision":"1946d35b6f2aca5e989c38f9234eb218","url":"assets/images/20210130194335207-2627053-33951cb5fcdfdaa91c31c89a519e93b8.png"},{"revision":"895811e9d047bde9cce9c6821790f690","url":"assets/images/20210204115139616-a870ae10174b00a1d93980c1e065b1a8.jpg"},{"revision":"4b72f41c49568d26f9671fd4432703ce","url":"assets/images/20210204150858927-28b1e315111db41fe131d6de398f33f9.png"},{"revision":"e3d03446425b986ad5362017616173f8","url":"assets/images/202102041512582-805a3ecc2c7571cb3bf984bcbf3090da.png"},{"revision":"2e533c7c274efea9fa12e106c3a9747d","url":"assets/images/20210204155302751-aea820a049197ce2a4ac3f6a89338a64.png"},{"revision":"ebe8c6a712d6c8e973eaae24b8a699d9","url":"assets/images/20210303173115966-6ea41da87cb42472cb7a5cddc36bfcd7.png"},{"revision":"d861ef584e97f8b46df79b6674f97b42","url":"assets/images/20210914145158-b890cba10ccf7ecc19b7db336158c1b8.png"},{"revision":"9badc4fe691a7c76a64db111a03f4aad","url":"assets/images/24.temp-c57063a03306df5a1588f59e76b63025.png"},{"revision":"8c7fa890df53eaf496ee4cbcb136f349","url":"assets/images/28d5796c6ab7faa619ed8f1bd17b0843-c139373ce827c4c02b45e069a54d1740.jpg"},{"revision":"62da31a510623865e27adf62bc1fb479","url":"assets/images/2b08a85c63bee68c6fd95dabb648fd79-b5cdd0a577c640b640c3c5eceafbe792.png"},{"revision":"2e2169aae5d00c7e099277dc8da48ca7","url":"assets/images/303515c26fcd4eaa9b9966ad7f190370-3ccf7353758944ab247f876a61a293ad.png"},{"revision":"9f77fdf92644130c7158fd6944c78dc1","url":"assets/images/3181648371317_.pic-fd1e43039efaf4af52423893593ea7e0.jpg"},{"revision":"5f080d65fab5e19c5c6456b0d5521d7b","url":"assets/images/36f0f5bdce0a6d8c36cbb8a76931cff0-2a8640add8556072fb29b253c2a9885e.png"},{"revision":"2545750d8ca2e6cee959cb003d43070f","url":"assets/images/37fccd915f959c2046ffc1ab2b0a1e4d921869337d8d5d4aa218886ab0bf7c8a-image-e13f55652c8996e14c9446de579b9768.png"},{"revision":"6c86f3c2c142253cc979a5c191431cea","url":"assets/images/3c1b7310648cccbf6aa4a42ad0202b03-c24b72af8418b48af006bb52d0c3e2b0.png"},{"revision":"22c848afde37da4c35aceaadab6dcc8a","url":"assets/images/3e30476a4bbda49fd7cd4fd0ea09f076-231a4e165c0a2ffd0e3d69b8ee0b7330.png"},{"revision":"c16644a1dd9737811248a4c14a06eecd","url":"assets/images/40825a55214a7990bba6b9bec6e54108-b8f25bedebd0bf8a9f9e9c6a887cd42e.png"},{"revision":"ddc4a4ee30fbea980aa5aa6ef8e929c2","url":"assets/images/42ee2ec6854ee79ac2b7c91259d2ad5db70522668d11fc691e9e14426918a666-image-b5b972bdd3f5e044a0428bf21ae74259.png"},{"revision":"9b99b56873d5b65af6752b50e9c66dfa","url":"assets/images/47f57c3eee749dd838939bfe5dd64573-163162618057315-513e873e1d8f615c9944e1cbf520efb8.png"},{"revision":"a29d5c057b5b1c56d93cd775b0733426","url":"assets/images/481648364609_.pic-cecd55a37e30d017592cd40d4da9384f.jpg"},{"revision":"488b7626db8a65deef7962ae1c6499cf","url":"assets/images/4f9310c7da631fa5a57f871099bfbeaf-1aae410d7fbd7e455d2ab3cd81dc5957.png"},{"revision":"c52ef1a5ac5ea1a17e2d2d0de8ba4d41","url":"assets/images/501648364609_.pic-b2aabe15aa7825a83bf6fa225049befa.jpg"},{"revision":"f3c88a6eb67b7c63d4ffe9d5ca435b9f","url":"assets/images/51127624a725a18a0e12e0f5a7aadbf5-af10eae52ddbd9bd41917a209988d347.png"},{"revision":"b7ab347717430b2d41e19b641abdfa46","url":"assets/images/511648364609_.pic-b1e67787e7f7ddfd4b0b916b4a0069db.jpg"},{"revision":"c901f9f6525da1df1e274750faf1992a","url":"assets/images/521648364609_.pic-fc2e0a075b7e5cc9d83bba45a4c2b3e0.jpg"},{"revision":"b357c184a1e0ccf3a0e976d4cd13b8a4","url":"assets/images/531648364609_.pic-f5e0c2e9006ad821c6dbe2d3b9955a7e.jpg"},{"revision":"bf9cc74495bc21a804d6abbb926a91c0","url":"assets/images/542754f4431d93141920185252aee31664a96dd17285b92dfe390e9e977bebb1-image-d66ab1c5376a42f53ef161f076a016fe.png"},{"revision":"bc9586e642a5a156f5d7355ffde62725","url":"assets/images/551648364609_.pic-a548abdd11db43901704f3c43ea53f9b.jpg"},{"revision":"766fb3fdd39a39f5e50a884bc703bab2","url":"assets/images/595902748d7d4c2f9c1d4783962ae43b-9d731357a64c54b7bc648d178e62531b.png"},{"revision":"cb0a4d11a2574a649e30fd78521c099a","url":"assets/images/5fc2f88a04ee0fc41a808f3481287408-16315245739758-9405f28ecb92daec736664448553f98c.png"},{"revision":"ad6b0605acc2a81e5aaac746dfffd2bc","url":"assets/images/6293f5315a5bafbd3ba00ee732bfbf57-976b25a297ef8294515f10ffb952e8ab.png"},{"revision":"646df935b1772b1eec0df8fdb1c07016","url":"assets/images/652bd2df726d0aa5e67fe8489f39a18c-fa4adb94c471120dd926369d9582b532.png"},{"revision":"8a5b1c68c6dc6f5137d50202180b2ce3","url":"assets/images/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f32303231303230343135313730323434332e706e67-8d5f25c5df88ff9e34257cfc04a422ab.png"},{"revision":"4fdba7e57954ef1003a1c4469a147a80","url":"assets/images/6c8361d3e52c1c37a06699ed94652e69-4f8c83041c51af4f5607d147b23c40e8.png"},{"revision":"39b7bcb29da3a1c2df7cb282864fb509","url":"assets/images/70a7ea0212ff35fc2be79f1d574ed518-c4ec01f211706af7ceef7d46d82ccc81.png"},{"revision":"f7bc47349b74fbade660579c3eec038e","url":"assets/images/7641c75a80133e747aa2faae8f4c8d1f-fea9e64e350d21f3c2a90ffed362fbda.png"},{"revision":"3cbf9a4684e020366573a59f680ccac0","url":"assets/images/77c852ff2202b2b7bb3299a96a0f4aaf-4f57fb91372a6572dfe7070faec3ab2b.png"},{"revision":"16090c036340e83060e187bfc3f8b1e6","url":"assets/images/81cfbc53d8401e7562b1fab8aca2ebf-98f804e703ec7b6d0c30de32e4671513.jpg"},{"revision":"c6c61a3bb2145f1a3a9774163a98b8bf","url":"assets/images/88a3aac427cc7c09361eac01a85fc7b2-5780f10f13c9516a349bc4ea5bb081b8.png"},{"revision":"90e6087f5ac252f248df260347591c8c","url":"assets/images/8951e161b5f44a73e52c16b631a63e1c-78c243425043c974d8c2d7a409cf7b8f.png"},{"revision":"691a6799dd62769293e1e46b1c97b230","url":"assets/images/8e48b77dd48bdc509958e73b9935710e-7dffeaa163df217ed6853801dea8309e.png"},{"revision":"aee35da835ff49e1f502f5d2c37f5360","url":"assets/images/8ec7d5ecfadcd05b3f1ec762223a9aab-890a007b448a40542a674646835c99e9.png"},{"revision":"7cd53fab4e6f4ca6e16b51fcae3813ed","url":"assets/images/92d73c75308e50d5c06ad44612bcb45d-881ef54c43bdfe9d30e9e56bb7bb9fd5.png"},{"revision":"38b3b6541d654dffd496071323f281bd","url":"assets/images/975fcbf7f83cc20d216f3d68a85d0f37-4358e8b03b4df2f3777d4f9d3eb50531.png"},{"revision":"afec20d1c035ad25f2df18056eb61dca","url":"assets/images/9898646a08b46bce4f12f918f3c1e60c-0fbdf83c0aa641ebf08d2a4c09349348.png"},{"revision":"af5b1c3df321aaa37f78b7e54c575494","url":"assets/images/9b80364c7936ad0fdca0e9405025b2a207a10322e16872a6cb68eb163dee25ee-image-002a810e7edfde6b53f069b28ceffbaa.png"},{"revision":"14d18f54908b1aca154e408c38b7ccc7","url":"assets/images/9d5016c6e660a452991185d23b7b4d98853b7c300453d79715b5e9a206085e44-%E5%9B%BE%E7%89%87-95514aa61b123276f419871da370f57f.png"},{"revision":"033058fafe678e96803c14539d162365","url":"assets/images/9e99f797de30a15a11b0e4b4c8f810cf-8cf58d2b9ee983a98482dd94e62b067e.png"},{"revision":"c6ecdf8375b04f7a84637cc712a25480","url":"assets/images/a8d954cd8e4722ee03d14afaa14c3987-bd218220e0ec2ab4fa098caa938dd114.png"},{"revision":"e55eb80abbfd6600e8aa8039bb6ff672","url":"assets/images/align1-b1707ef2550c8abc1121901c0bef4124.png"},{"revision":"0a6de6724fdfe8527bfe2aa8e43bab4e","url":"assets/images/attribute-8c3d2c9807da327d1abdd721cc8e009c.png"},{"revision":"df1cd0e8ff0bea87adfa6303faee9b42","url":"assets/images/Axios系统学习笔记原理图-0490905-44b4ccd4ecc9eb5b1a0e611efaafc476.png"},{"revision":"4ee35984394923ea5b6f908199433934","url":"assets/images/b2-9cdc9bc1434f08bea08e1f053f3e8a1c.png"},{"revision":"1833f7f3d3420769c89328edbdc680fc","url":"assets/images/b2b893921491c62b29aaddc1d4fa9550-acadc7781a7de5a5e343d2b93ef74f46.png"},{"revision":"71657287c2d8ad87c81174357b69c8fb","url":"assets/images/b3ed565230fe4f5c1886304a8ff754e5-ee55ce39f38c056505b8a7038196792c.png"},{"revision":"df7aaaa004f1341fe2158f514787acb7","url":"assets/images/b8993c73f7b60feb9b8bd147545c47d7-a9bdcbcaddfb2900cb8f9f406890dcdf.png"},{"revision":"cd604dfe66a7b5040ebf4c03bd123d67","url":"assets/images/b899cb27c0d92c31f9377db59939aaf3-4614ae28cba65e3c6b41b0d19bbd87c8.jpg"},{"revision":"20c320bf1bd1a8087019b22e9c6b7b41","url":"assets/images/Basics7-3bae71fb0d99a51a9a772f95b1b6a623.png"},{"revision":"8ee1013839e4c1be872fc15f7491cbe9","url":"assets/images/bcc7f6983d5ece8e2dd716f431d0e052-df002513a93fe25e8c868cb8725fd0af.png"},{"revision":"3645ba62b86edbfc61a66e883d0f90f0","url":"assets/images/Block-level Box-b199feb9dd3e38fc401d21627a8acedf.png"},{"revision":"04015c4df416dff3936ae69b8ca72c16","url":"assets/images/blog-2efa3818433e5d23e4839ce217bf0656.png"},{"revision":"2c31c12eb1c36861ed914a6384592dcf","url":"assets/images/d015db8ad0df7f0ccb1bdb8e31f96e85-d72e7ba35512892ed12b0a8f68583a75.png"},{"revision":"892004a19677f86ed7d623a0124c9a88","url":"assets/images/d3c5a6188b09b5b57af439005ae7dfb8-054a8f4ed7f02a8b8079a15d4a4a0577.png"},{"revision":"445821e1ed4318b1266c113135f97fb4","url":"assets/images/d5cd34dbf3636ebc0e809aa424c53845-660a2c8a6601ed9c9de32dd78dc0f412.png"},{"revision":"974073715959ee11054c03f0a05cc601","url":"assets/images/d807ca19c2c8853ef5a38dca0fb79ab0-cb5dba630d7982efab33705c49449c1e.jpg"},{"revision":"ecfedf169768afb5cf0ae2d3406c4e88","url":"assets/images/d86648267d5504c7813b2d692620503b-d1df5b632b708a438bf152ab790d7e2f.png"},{"revision":"411656e8a9ee585d06d474b5331f7941","url":"assets/images/d87415b0187e3860404bf963f1c3d646-76edbf79f96768e18c214a314da5d05a.png"},{"revision":"3190d9ec51098defd1c82f02dc9e0ff7","url":"assets/images/d8fe2afbd8ea2d4a8d8cc4bb14c50f28-1956368-3f07eca484891b3469266275db8f7fbc.png"},{"revision":"3190d9ec51098defd1c82f02dc9e0ff7","url":"assets/images/d8fe2afbd8ea2d4a8d8cc4bb14c50f28-3f07eca484891b3469266275db8f7fbc.png"},{"revision":"17095f619ab6d8b7ebb18d2bbd19062b","url":"assets/images/d9d6cefe8d3d6d84a37a626687c6ecb3-61adf725ce8b718e44bd49165a25cb36.png"},{"revision":"4a2a04a83ae36652b0e520ab2a734e9f","url":"assets/images/de117fc96ae425ed90366e9060aa14e7-87135f50e58bc494e4f11516a93ed600.png"},{"revision":"b016522688b499cfdd953d6ddfb1f730","url":"assets/images/del_node_1-7fc7d0c1af0845aef38ef140f1ff9676.jpg"},{"revision":"b80fd72b67c5016ee29f4145f48a8616","url":"assets/images/e2c917edf5119cddfbec9481372f8fc0-9a8ad98af211b11e4b6d97ffbca9165b.png"},{"revision":"029b9803233cacec00331f583ff19e65","url":"assets/images/e6c9d24ely1go6qmevhgpg20du09m4qp-0b1abbd1aaf8b24320a2c57e7b74b81d.gif"},{"revision":"1152281546709784e600ae856d33a520","url":"assets/images/e8a7e60a2a08e05239456284d2aa4061-2f4d421b0f180db7764b9dc6bc845697.png"},{"revision":"4bb74632b6bb2f92ba73435d816a6fe8","url":"assets/images/element-28d51255afa76b7b5e02e53610fd22b9.png"},{"revision":"2ec9c43b42b5ff68a2ec2eae5f422cd4","url":"assets/images/f85f8778f273710ca559a52027ed731c-d81f43b94ed27d7cd2c6e0ee783bc91e.png"},{"revision":"711007ae72207b19a9d0e6134459fb7a","url":"assets/images/f9dd29ff5371c247e10546393c904edb-3c72a2216c737a17d97dccd338c8525e.png"},{"revision":"4322e787341ce542306bf2179ede24f9","url":"assets/images/fad33fc7c5f2bdf4e20cac7691484130-72a9603012984f6f7918216d33baa050.png"},{"revision":"d61ed1d1f844c017db2d78d4a26db42f","url":"assets/images/flowerlibrary-eef86582ba6251f19ef0648976083b66.png"},{"revision":"bf1420cbd87a7ec416961065e12dfbad","url":"assets/images/image-20201117220655806-67c69220c3e65d7fc71e9c35a4ea08f7.png"},{"revision":"d387e222b7ede802fb3ead7b15749f48","url":"assets/images/image-20201118100112004-cb4903722e14e844fc3b1040b746082a.png"},{"revision":"bff9389739586d550bbcaa9eb1d47d67","url":"assets/images/image-20201118152123045-104d17996cadff4702c17e3e8d4d1e7c.png"},{"revision":"c30be8f7a760dcd2fab75f5983cc65b0","url":"assets/images/image-20201119204847403-fb64bb1fc07e97784a4881f1a2cd750a.png"},{"revision":"2ffec150681a7e37da2d55b40f7917d5","url":"assets/images/image-20201119210103098-53b8d97f9c1057e0e6d2a97d347d38e9.png"},{"revision":"cea71a66e4786763b8383f5a710ff2c0","url":"assets/images/image-20201119215210536-1453fcd79291cf4dba4a879961c87d78.png"},{"revision":"dafc48477e691cb05f7d90fc8f64fac1","url":"assets/images/image-20210630152652129-67ea6c4e944c3ceccef5de7fe9a9050f.png"},{"revision":"f1fa711841fbc2f8cdf5b9833460ddcf","url":"assets/images/image-20210704115239674-66061b7f6dd9abf769717b7a2c9ba1a1.png"},{"revision":"35dd1f5939fdfaa458fa4dfc78912be2","url":"assets/images/image-20210704161729986-07322a9d65e8f303c72d16111c77f067.png"},{"revision":"f4d78ef4363c52ba29cc2b0e9ca23850","url":"assets/images/image-20210704163956084-1ca4c42def9a840ac2b4dc9d7902aa9b.png"},{"revision":"8dc28b5f8c41f821fcd779bf92cd3672","url":"assets/images/image-20210704164018124-6a7bd08a7d525c808debfad526d45f5c.png"},{"revision":"e0d624d0329b2e50ccf9ccd6b57336b0","url":"assets/images/image-20210706134550343-69b3b95720ff5ee66042baeb64e3c285.png"},{"revision":"1575ec33ecb84fffb85dc6bfe2615115","url":"assets/images/image-20210902143617540-6c48ca22792e51bd0b3e3dc1f4714095.png"},{"revision":"323161de01803394bfe985b12d473d3f","url":"assets/images/image-20210902160113488-64068f0e0e908510980b7c84ac6dd498.png"},{"revision":"e0685daf806d82e36ca8f9f5c40ab81f","url":"assets/images/image-20210902171804797-1620fa30cf052911eafac4f3c1867722.png"},{"revision":"ebbc884c6498e72c9a39e90653b0dcff","url":"assets/images/image-20210903121548301-edd822660ad019ab33a06504f6abd772.png"},{"revision":"92c1454ccf9fc669b2d1d1860b088fa8","url":"assets/images/image-20210903121904296-c7d8ec6383c881f91f140b960c1c868a.png"},{"revision":"b00d53ebb82ad44242b016d366144151","url":"assets/images/image-20210903225021362-6b225597f852d980e585318733a8cda9.png"},{"revision":"3af127dc2709afa8d829ae8ef5cad81c","url":"assets/images/image-20210904104935615-9c5ef47c5a6a30b3e30f52990c558554.png"},{"revision":"d31331664bbba06f9e872b16b2612127","url":"assets/images/image-20210904105018586-38ab185fed2f48645ffca1a22fdd3ded.png"},{"revision":"47fb0136e62a2110bdf6f424f27907f9","url":"assets/images/image-20210904111643797-976c2ba284b392ff12d4d8ea6ad25fc2.png"},{"revision":"513d0156e9704219d981337a85b15be9","url":"assets/images/image-20210904111720844-21eec010023760e7985ba619193cae2a.png"},{"revision":"77b8aec0696846b828290dc415d0f60b","url":"assets/images/image-20210904202426916-fa701f6a334d394f0fdffdb9ca7bec21.png"},{"revision":"d19a4d169212425ad6b7927258b21458","url":"assets/images/image-20210905000728729-ff3ed6b5dd10060348ace267f0e04003.png"},{"revision":"3a80272936b976e93531db8c646faf4e","url":"assets/images/image-20210905161808361-94e41e193cb2609e11d4b48b9b83ad95.png"},{"revision":"d95990604eec24413957a97c1bc08d2a","url":"assets/images/image-20210905194458129-c68e37d867de2c07c955f8920024459d.png"},{"revision":"bfd24e21f874cc0a4d26dcfd9a999668","url":"assets/images/image-20210905222654919-cb15e763b53d94c677f0b133b63dfcb0.png"},{"revision":"b7f7f6b2ee4a2ef7d3a8e09105da0e24","url":"assets/images/image-20210905222747993-540b6b1f77a262e858f1820ad2d40904.png"},{"revision":"fc9ed849557bacc18a481f398b25fce0","url":"assets/images/image-20210905225113810-f15c849402735629e0add1414983e55b.png"},{"revision":"481024f2068630c4e49a4ddebd271b79","url":"assets/images/image-20210905225136348-258de24428796b20ec804260857e9a55.png"},{"revision":"6db306c27e0730030f6de133595576e3","url":"assets/images/image-20210906231702099-1752b3806cb7bf0337e1918e38d8575c.png"},{"revision":"0e4eb9ae973623a6c8f055e965075a72","url":"assets/images/image-20210907123120888-c35de35dea6bf731a98d57171b4f4327.png"},{"revision":"33072607e2f8079eb769eafb3a8c2fa6","url":"assets/images/image-20210907123202590-10f5c6c2470263c97d352f273ee6accb.png"},{"revision":"84f7ae42167206f92f7514721dfefee9","url":"assets/images/image-20210907160558431-56fb1dcc16ab28bb995dc163ea2b9ba1.png"},{"revision":"3907fda38fc32a0d67800119c4bfd2f2","url":"assets/images/image-20210907160613446-5a1c706163014fb9d6d9f14164946466.png"},{"revision":"fb786895379e851c02834f5a1db2d20c","url":"assets/images/image-20210907160627847-ce308d46f5f481ffb4c5e52c7960b920.png"},{"revision":"7fd6cd9e672e1903d2133a407b74f976","url":"assets/images/image-20210907160803336-afe05bd76321e97bda64d43a958d584b.png"},{"revision":"d3efe3043e3a8985bc54c4d2a9d6a983","url":"assets/images/image-20210907160813744-56f304abf5d0b6a2fa83a29f7aef333f.png"},{"revision":"52101d373295907af5c2acb720536b4c","url":"assets/images/image-20210907160855256-941a9eaff9ca2fee8df11ad238df8515.png"},{"revision":"8cf291ee6df471f6fff8058c2f26609b","url":"assets/images/image-20210907160918710-4a1954380e2aa9d748ab9f977ae88583.png"},{"revision":"3cd90f0a3a7c927f7444d54082e34014","url":"assets/images/image-20210914222922516-e567e5e9704adea556c874f9bbc1f80c.png"},{"revision":"afb21968d6543f4c4f8bb18bbd796552","url":"assets/images/image-20210922200948700-9e9ff1b8e44c621fc805046781d6884b.png"},{"revision":"e62811a048006f934d9685ca4933a89a","url":"assets/images/image-20211122164646158-91573fd9f92e4cf03e4b84c5d7bd238a.png"},{"revision":"3f44c3a23430eec4d5583bb080f6d0c8","url":"assets/images/image-20211122164750330-16ef6cfdff8e5059ab1b2b7f29a31dae.png"},{"revision":"e39c99495b4464f8f19498b412300bdc","url":"assets/images/image-20211122164827115-212be533684b121a238a967bda55bdc2.png"},{"revision":"3d4ba543408d34fe50804d8d23bfc0d4","url":"assets/images/image-20211122164851842-cbd1adac5063dab2b1b992fcabee15ec.png"},{"revision":"533e8f867d457791bdaad5f46b40e114","url":"assets/images/image-20211122165252887-3f909e69dae44f62c5b778ea3029497a.png"},{"revision":"4c40d4877df05810bc586b03f53ac435","url":"assets/images/image-20211122165506460-a6110609c5d590962d422086d56ec806.png"},{"revision":"a99dc5058633b8f147f7d5ffdc636bbe","url":"assets/images/image-20211122165636627-82e35d4065962f74f3bb8067e57c1648.png"},{"revision":"789fd2aed397bc81d3a2d17af4c05d6d","url":"assets/images/image-20211123105917129-af415e162cf9f364c4652281e13b2446.png"},{"revision":"dd3a9a27eb127997934fc2bcafe77e58","url":"assets/images/image-20211123110315390-78921a0765157ea14b0ff4fd8412b639.png"},{"revision":"44ea60f5b8cfd2bd9e4a65b6f9a5f773","url":"assets/images/image-20211123110534256-2dd6b924779c85f2a89106c11e737adb.png"},{"revision":"81ae3d9250aedc6ecb5af04ce5df06e0","url":"assets/images/image-20211123112354701-96c3f0aa3c3738ebe8c1f6c2c7105196.png"},{"revision":"ed7ddd78b5ffe480df7204167c1fded0","url":"assets/images/image-20211123122618986-c83cbd6694e93d1aef03d8a97b732f63.png"},{"revision":"9d8a81a8b36f286eb6dfb4c612853ce5","url":"assets/images/image-20211129215622526-0490905-990d330bafe4ff367d9582d507c4f930.png"},{"revision":"d85c4cad4e03f3713f226d96840d1d06","url":"assets/images/image-20211201120058877-89f5df5654e963a3bc9f1ea49a734c61.png"},{"revision":"b8f51956ee577bf81c5dde690f26d76a","url":"assets/images/image-20211201122704381-a371145ee9f22b89ec5790cbd16cd3cf.png"},{"revision":"5db9cb9e6c64acf58f7fd980d9519145","url":"assets/images/image-20211201122807296-cfacbc9a17b89356601d06b6b1d507d3.png"},{"revision":"9a3a5cb54e8ed913ec754c70e4a1520e","url":"assets/images/image-20211201123112000-864084d1329b3bdc063ba48f4ae99073.png"},{"revision":"1ace004069ba101e24f4b5e7ec779ea1","url":"assets/images/image-20220518204715652-0aa45f44e070ad826df02507c364446d.png"},{"revision":"943b1a3c9ce1a29f686b74c0afa21344","url":"assets/images/image-20220630212747956-3ae3bded0aff4af9a8cbe44040c34d40.png"},{"revision":"7f029ca5ee1394752a824d8eea9ff4c6","url":"assets/images/image-20220630212803459-b7c2b57360d005c2bf65c645ee577c8f.png"},{"revision":"899808175824a86dc0848d489b9a6808","url":"assets/images/image-20220630213046661-c27df8fc7f4da370756749c890fdeb56.png"},{"revision":"87ecd2e62c0e626138ba8b0d11a24a17","url":"assets/images/image-20220630213057347-aa0c92f5ae5e606e3f58d94f537abfea.png"},{"revision":"0d4841da093201de185878144fa16f45","url":"assets/images/image-20220630213112204-63676675773f6548af27a884beeab143.png"},{"revision":"5ce7a69fb0163f1f2a9ab85f42e6c34c","url":"assets/images/image-20220630213122115-0fbed4113950006127988ede40343f27.png"},{"revision":"75d7cd105426bf5ffff672587eeb24f1","url":"assets/images/image-20220630213201704-1e8eeb1f76e5ef73ffcbf8540a1fc0ec.png"},{"revision":"639e1d101962f64a48dcbf8ac4ba4ebc","url":"assets/images/image-20220630213222846-9e307ff33c2fbdee48a83471f44f9ece.png"},{"revision":"32b23a7a3a2140bb276d0d5f831bace0","url":"assets/images/image-20220701114535535-aaef9a3b20ef6cacf8c5d4042c4e980e.png"},{"revision":"332c8dfd5d26c2bdecc80a7b4e4a78d8","url":"assets/images/image-20220701114602878-b18db5e0ccfb28c1363e4d6b0d756b0a.png"},{"revision":"8bf7cd506af08690b11fdcfdb019de97","url":"assets/images/image-20220701114638804-7c68c7a84952d9fb91d43da0bf832575.png"},{"revision":"7aeab1608654c8ecb6ac01b34110e2bf","url":"assets/images/image-20220725220105616-a12f9553281a577d18b0f7ba5e19fd8a.png"},{"revision":"73bda735897f828fe2aa2e315735f356","url":"assets/images/image-20220725220116007-d8da94c4e46d49b990204dcaeb146982.png"},{"revision":"9d92e17bdcfc10640c2e061ee852dd5f","url":"assets/images/image-20220806230807382-ce972a80313ee829768b13c49c111bbd.png"},{"revision":"6fd9ebf147969eb12620c16179f70fbd","url":"assets/images/image-20220806231908259-29f8253c8f951b76032810417729e781.png"},{"revision":"51a548b61243642763eb7cebf2ce61b6","url":"assets/images/image-20220806232428977-7a5bc8cbc0acce02ca01ee1931d01d5b.png"},{"revision":"179e7995c5abee473252e7fdc085e0c6","url":"assets/images/image-20220814220315897-7d848a1be6414dc0b9c30b4d89918c7b.png"},{"revision":"96e70e2ea3f940eb03b1debf78d834c8","url":"assets/images/image-20220814220408049-2b1a1ea544c48baaa920cb8849f0934f.png"},{"revision":"141d0f10455a3a69917938c8ec6b3354","url":"assets/images/image-20220814220521700-b4b97413ee595d2dd3b1307843757308.png"},{"revision":"487d2efb9026cef03797730cff97a86b","url":"assets/images/image-20220814220617224-f5b6d180efdf308ef9b3074902a91d43.png"},{"revision":"0fd0e50471610e804c31c221c9cb1fec","url":"assets/images/image-20220814221037733-5baa818ce825313c979182836b13c9d1.png"},{"revision":"2cd3ced06e5efaba2f8740b9668c706a","url":"assets/images/image-20220814221044845-99ef84a16c457835268e2594dcf0f265.png"},{"revision":"0fd0e50471610e804c31c221c9cb1fec","url":"assets/images/image-20220814221059324-5baa818ce825313c979182836b13c9d1.png"},{"revision":"8729a060f0a1d6d105fd071bd3470cb6","url":"assets/images/image-20220814221114838-305a48f14b2556b5340702a5e9b1dc53.png"},{"revision":"0d01f8b60c543461aaab4efa3ea86469","url":"assets/images/image-20220814221126049-983a8060069dfdac8cd1ee9cdcea9fef.png"},{"revision":"47d149ec8816dbe8d8fe1fb91f8d182b","url":"assets/images/image-20220814221132679-46dfa6819007525b12abdab618d150b2.png"},{"revision":"fc5861183dbe520b999cdb203e22e8a4","url":"assets/images/image-20220814221139524-33142a1b52b4caeda43bced9793ee6eb.png"},{"revision":"0acd01fd2adfb67bbd8e9e79667295d6","url":"assets/images/image-20220814221157515-8eb62a9d241a61f47266bfa4e9331551.png"},{"revision":"0acd01fd2adfb67bbd8e9e79667295d6","url":"assets/images/image-20220814221202741-8eb62a9d241a61f47266bfa4e9331551.png"},{"revision":"9b622b6d563288e6631becdf8281baca","url":"assets/images/image-20220814221213105-4cab6b71a09291dfc660d5ec0fb7178d.png"},{"revision":"b49027b1fd722f549ac7b48747bb367c","url":"assets/images/image-20220814221227582-854bdb0f1d11e9d91e7dc225e76a789b.png"},{"revision":"ecd89889fa45266bf137b91135e18f96","url":"assets/images/image-20220817170155198-61981f62385695f52f3a7112c8e7f41f.png"},{"revision":"25909a5927cf81547bc3c5b5cdbc7e22","url":"assets/images/insertbst-4e16ecff7da7dc40ab360637eb9e6bc6.jpg"},{"revision":"f34c4d55c198ce91a53c39caef0f3012","url":"assets/images/jsobj_full-42d07fa3ea8497964cead60ea055abe7.jpg"},{"revision":"db0c3b03d4a4ddef420e168c257b48a0","url":"assets/images/reactmusic-c613072af270e46d354f1cb5ce59cd9e.jpeg"},{"revision":"6ce7dab5bd673e6486ee13f974cbd0bb","url":"assets/images/toy-browser-36543f6be80abbfa71a4967b2f5076c2.png"},{"revision":"cb447881e66b15c77bf06110350c5edd","url":"assets/images/tree-69c21fd4b33762fb1eec250ac5d95cd3.jpg"},{"revision":"0161f1e2be5debb75d5d0fac6785207d","url":"assets/images/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDk3MjAwOA==,size_16,color_FFFFFF,t_70-16381565628804-0490882-34ddfc447fc5613252994304e5aeb6e3.png"},{"revision":"65f089ad3247f5b571d9bcb0da028dbc","url":"assets/images/动画-2241dc8633d271c8a809ebf08e86632d.gif"},{"revision":"2b11b50418dd291997d8f0380105a4e0","url":"assets/images/原型链1-8d8d9be9e98a8645103946399a1567f2.png"},{"revision":"bfb37d5a875614081d06d4811dd1caf3","url":"assets/images/截屏2021-06-21 下午5.07.40-1ab64d83649e337c43b741e506578381.png"},{"revision":"784db46818909b357a977d1eeb836316","url":"assets/images/截屏2021-06-21 下午8.04.59-5e717c9a9f70250d6522b3e07106c83d.png"},{"revision":"4ca56e9eb63aa34ac610d2aa3e5e0d3f","url":"assets/images/截屏2021-06-21 下午9.06.47-9fc7c197e09946d1b956f6e960fc642a.png"},{"revision":"ac28694445942247efe8f62a5d36dd7b","url":"assets/images/截屏2021-06-21 下午9.18.14-a9ec8bf66b1e990ac91726692cd02c32.png"},{"revision":"8c7ad7c4bc9fb14483ee85cea513fff6","url":"assets/images/截屏2021-06-22 上午10.54.54-e7657d626708b9ffd04100a9c648e35b.png"},{"revision":"ad3768b46f8d47837d8593321b92778d","url":"assets/images/截屏2021-06-22 上午9.21.12-ee723d12b5c14cb1c3f2c7e15d7dc995.png"},{"revision":"def7397adfe4063fca5fc7854107d275","url":"assets/images/截屏2021-06-22 下午3.01.45-dad2952af98c75a69d1aa65a5e86a88b.png"},{"revision":"1a479cd883152d68d410f29ce2962717","url":"assets/images/截屏2021-06-22 下午3.02.13-4d3d2e1d0652db82e4850b4c3c80ccf3.png"},{"revision":"0d56ee4b1dd201e8d92e7953ef3ec1a7","url":"assets/images/截屏2021-06-22 下午8.22.54-c5b7613788cab806964a38088ec1b2fd.png"},{"revision":"f8c3f3dcb655b3d9fd8cefb45f03eb89","url":"assets/images/截屏2021-06-22 下午8.37.07-0b373886ad6c15cfec233b5d48ae6d96.png"},{"revision":"daeae8b17abe0413a94de89e16ff2e6b","url":"assets/images/截屏2021-06-24 下午2.17.55-a3b54fa61b35aeae125cdd3099024236.png"},{"revision":"42eb11cca94d4eea788a84dd67c2d5e4","url":"assets/images/截屏2021-06-24 下午2.27.18-4516080-9d155c8106bc55c3ddfec87cd3e17cad.png"},{"revision":"b99279b5d379efc2c5b4457f866c677b","url":"assets/images/截屏2021-06-24 下午2.58.58-58a1c91b3dfcc844b098fc98d7ffa3eb.png"},{"revision":"580e30f05180c3f96d7f4d542742e5e1","url":"assets/images/截屏2021-06-24 下午3.20.50-19d90d846f616e2e85f5173a5fc9809f.png"},{"revision":"0c699dcaf43181a8e832c2ffc6b5644f","url":"assets/images/截屏2021-06-24 下午3.34.49-ff32e072db2350644bb04831702af5c1.png"},{"revision":"0fa7cc83804e7abcf1c17b6bb7ca728f","url":"assets/images/截屏2021-07-28 上午10.48.02-bc8daa1f9dc4f808dac04446d639d449.png"},{"revision":"632fe64bf3aaec105c262bd30eac003d","url":"assets/images/截屏2021-07-31 下午2.20.48-e94a490012dc6113eb3a60461909ddbd.png"},{"revision":"cb8a21061ce22e8c8086491d25c8c5b2","url":"assets/images/截屏2021-08-05 下午10.36.08-788da2189598ea50278a462dab3808b6.png"},{"revision":"5e92d1a078a4dd801d108c0d138d9084","url":"assets/images/截屏2021-08-05 下午10.52.27-df16c9b4d564f582c5a4814bd7e78850.png"},{"revision":"a30f8ff3af694766dbfe70ce9752b0eb","url":"assets/images/截屏2021-08-06 上午11.21.32-65335487af9be3466a42e01c057bd3d8.png"},{"revision":"4df29dd2956773e1395b09064d11b700","url":"assets/images/截屏2021-09-19 下午3.43.50-bc5ed65ef27b293a65a9a255e6a0e5a7.png"},{"revision":"c6b1844ff3e03b42d3adc5a9cdb35078","url":"assets/images/截屏2021-10-04 下午6.53.31-ce226fc7fa96aa17cf0e52dff2817fe3.png"},{"revision":"0ee17c9bed1363ae8ef0c53644e1daaa","url":"assets/images/截屏2021-12-05 上午1.03.31-953fca62d4b40dd9c713edcb188f83e5.png"},{"revision":"f1cfcbe0f62823917f800e28e3945e55","url":"assets/images/截屏2021-12-05 上午12.13.27-ce72a9e3a1cec82e00e35bccc6d5a6a0.png"},{"revision":"cd67c361a38b92d892628bb82d16c919","url":"assets/images/截屏2022-04-25 下午3.58.21-f5403fe22b18358fe52f4bc43396e4ec.png"},{"revision":"c0bba0548ac2201f1dfaf52ee98914b6","url":"assets/images/截屏2022-04-25 下午3.58.53-1e98b2bf829592280f8e3ca65fc35ff8.png"},{"revision":"36a28bd4301e569f1549cc03becf4a55","url":"assets/images/截屏2022-05-05 下午9.03.35-2f4c247529f817ee511c592c34a6416c.png"},{"revision":"466695f34b71e31906b6b63b8c8ea1d8","url":"assets/images/截屏2022-05-15 22.05.09-04d7ae7bce13ed5a81142c7966245668.png"},{"revision":"9b9731e7a7f932ac193ddbc9511cf112","url":"assets/images/截屏2022-06-05 02.08.47-328b77f330f398a9aba2401d7e227e2a.png"},{"revision":"da225d5f73a24c3becb8f7d7a7af3c1f","url":"assets/images/截屏2022-06-05 02.32.41-b776b755493d0e3a90282f4f78a4bc06.png"},{"revision":"cf87fc6f1ce3e88a39e9b6b514f3937a","url":"assets/images/截屏2022-07-01 17.03.38-0315ef88b6051d57852d65e3fa5667e0.png"},{"revision":"c9d65ec628fd166f94113574ed710c04","url":"assets/images/截屏2022-07-01 17.04.14-94a47dc33940840c85ef669b8e2869fd.png"},{"revision":"8ee8e2d6f98aac53ecbae594f079dbbe","url":"assets/images/截屏2022-07-01 17.09.59-53a4d24a309a7b54ed20487f7f0341b8.png"},{"revision":"aac53786691febcc1278183d68947c4c","url":"assets/images/截屏2022-07-01 17.11.55-7e29c25c20080bb738bf3e6289bd0288.png"},{"revision":"b6108fd199f5b2bbb4407b7b09fcc976","url":"assets/images/截屏2022-07-25 17.59.57-deda94120f5ab975970d7b1ab42c4d12.png"},{"revision":"3ed17164e849b8027c03f6429a144e2d","url":"assets/images/截屏2022-07-25 21.42.13-f3daaab466605b78b23d3ac1b4e25699.png"},{"revision":"a6998e7e2877aeab6c99929f6a9bcd09","url":"assets/images/截屏2022-07-25 22.26.11-667671cc05b045f98b2b683b3e48bda0.png"},{"revision":"9eba27a9dfca4d1e7180a289d30bc8a2","url":"assets/images/截屏2022-07-26 15.57.02-7208f964f68a1e0296a74d8a22e84312.png"},{"revision":"7b1115dfeeee480fe215483833be650c","url":"assets/images/截屏2022-07-26 15.57.22-549d60a049c626f99639c6a0aaaa14d6.png"},{"revision":"85304b292153040f8bb3dbe55a6c006e","url":"assets/images/截屏2022-07-26 15.57.38-2fe4b48cf05c37e1fbbc351c135f049e.png"},{"revision":"f3b23843ad09e2ffd92eee3152ac44db","url":"assets/images/截屏2022-07-26 15.58.12-39f7c5ba31332ca724772c54392bb285.png"},{"revision":"a102e8b48c979a96c62b3808069f1573","url":"assets/images/截屏2022-07-26 16.22.07-0dfd69bd047fd46bf98d93ebd37f155b.png"},{"revision":"862c0f72dc72ab2a43d48867993aa233","url":"assets/images/截屏2022-07-26 16.25.18-1f82f16cf82ad57b0e5b91e0a9a5e0f6.png"},{"revision":"f60f018308be49a6700f0dc6611e5f8d","url":"assets/images/截屏2022-07-30 17.07.28-edd759cffe00a48d4cbb3973a40ec0ab.png"},{"revision":"4611f6ead8b74b8739d45c27960f4709","url":"assets/images/截屏2022-07-30 17.12.35-fbd8fce27c2a4834f5ae41bcc2c67b40.png"},{"revision":"e07e0234b02797a38f6d3e83ceceb1e6","url":"assets/images/截屏2022-07-30 19.01.10-ddd6963e836aa906788153f08b152d1b.png"},{"revision":"77561f21ec44fcf2dfe754904f2c7c95","url":"assets/images/截屏2022-07-30 19.15.53-e74c3c5f906044cb3244ebf3ec6384db.png"},{"revision":"d74d1e6967cd7d7ad82feed335365e3d","url":"assets/images/截屏2022-07-31 12.06.53-70feaa70633774fd3a364ac8ce081fb8.png"},{"revision":"a292085570a447d984147e7d020091bf","url":"assets/images/截屏2022-07-31 18.04.18-c18a3d0f6b72f901459e342c09db585b.png"},{"revision":"e064f5d6b8cf9f16b97f9b7d39348fec","url":"assets/images/截屏2022-08-07 00.18.02-62b446f9b882330ff0d1a9fb7e7a6396.png"},{"revision":"b9ae6e7998b9e93550dc56d0d9d66adb","url":"assets/images/截屏2022-08-07 22.42.10-c47e67c927e51a566be8b8deb428a236.png"},{"revision":"513c633892172a63735392b749620967","url":"assets/images/截屏2022-08-07 22.49.01-a6ffd18d89304be80d7459a9d8483400.png"},{"revision":"ab4a3e93281592d6cb6c2da332d83b7f","url":"assets/images/截屏2022-08-08 00.27.04-d65a2edb1c300496eae515e26cb61e62.png"},{"revision":"f8e95301a3e7ce495b430f6cd5e4d918","url":"assets/images/截屏2022-08-08 15.34.10-ae118d8fe5719e54706b8bdb9f950749.png"},{"revision":"3bfd97aa73ee2a7fea29060f00890ebf","url":"assets/images/截屏2022-08-08 16.24.03-ebd2b8661bae741e57107481283bc6ce.png"},{"revision":"3b73df8e83aee691d9f86bf328bf5411","url":"assets/images/截屏2022-08-08 16.30.47-96e47245bb84c61e16a392adfedcbee4.png"},{"revision":"03c07c97c94c1536dc580992a1741fa0","url":"assets/images/截屏2022-08-08 16.34.02-288ce5471743627342f90822e8ec7fcd.png"},{"revision":"6cfa42d533b7918d418e18bd4a5652b6","url":"assets/images/截屏2022-08-09 20.44.13-d1c792f0314650d33d24c9b3427c5749.png"},{"revision":"122abbd8a862290ece305ace0addb620","url":"assets/images/截屏2022-08-11 10.57.34-fec22d1a39c4b48bb336b82e97c87b39.png"},{"revision":"0f990f2b0a1c6d61498fdac3e477f1b9","url":"assets/images/截屏2022-08-11 16.39.07-2946f6af6a5ac3ef32a20735b798913c.png"},{"revision":"c52cad5358ab5a0a5add4679616d6418","url":"assets/images/截屏2022-08-12 10.32.23-83e5562016ddba8f664fd5b03adb6cb9.png"},{"revision":"ce6008718c55e9d04f03d5fcaec9c1d1","url":"assets/images/截屏2022-08-12 10.33.58-1c1c5362d93bfa79d39da59ed31b3096.png"},{"revision":"e5385917a0aecfc09929ae3b269b29ef","url":"assets/images/截屏2022-08-12 18.51.39-d2bbaa79a179999107f239485de14949.png"},{"revision":"4bd818a9a4b96433c88a714e8514721c","url":"assets/images/截屏2022-08-12 18.53.00-ef93c1a8146719db9b6cdadbf3383041.png"},{"revision":"70148372fc71a77b2af51b04fcf36229","url":"assets/images/截屏2022-08-14 02.12.19-8e51d3c1213309aa6b4472eae6be51ee.png"},{"revision":"9495dddc989f5faa65cdeb15ee02aa2a","url":"assets/images/截屏2022-08-14 02.52.47-d4b2b87514ad466c8d59778f3f8412f1.png"},{"revision":"7c0a7dc480afe10948cca1b510a5053f","url":"assets/images/截屏2022-08-14 13.59.51-10537c53558bfb872b765ae55ef223fd.png"},{"revision":"82e7837408fe2a04b4ceeb107ba0bd4f","url":"assets/images/截屏2022-08-14 14.45.38-2f961865bf3c205fb2dfeae18359c3db.png"},{"revision":"e0e749ae3e8b9f26e60e562ec495be4f","url":"assets/images/截屏2022-08-14 15.19.00-b30a72e8efb7a10cc2608ce59b33b1f0.png"},{"revision":"54442e3ba89779f31de8044e1a345f20","url":"assets/images/截屏2022-08-15 23.12.13-afae24867231b5aa5365cb4e45d5a1e7.png"},{"revision":"352579ff8bd3d93ac6131ae777dc94c0","url":"assets/images/截屏2022-08-15 23.22.35-8695fa6a8bf7f9dca8d7a7d6e9f509c9.png"},{"revision":"8628480471c9f5faf8aa4d559ece0893","url":"assets/images/截屏2022-08-16 15.37.48-e2d78f6815029fbccdd64f9a1190978d.png"},{"revision":"9a06c859d9f145e0dd1c7282139d937a","url":"assets/images/截屏2022-08-16 15.40.01-a466f7bec47d5af9f4eff4d3f1cd8395.png"},{"revision":"ede578aebad64f01d31fd2b5d2f15527","url":"assets/images/截屏2022-08-16 15.40.11-5984ff06b9fda009f0c00585be8b8f2d.png"},{"revision":"04ded29ff584c92704b9698ce24a5b54","url":"assets/images/截屏2022-08-16 16.49.07-6cc1e46aa651fd777c9a0d14d38c4293.png"},{"revision":"a05a0ed498b3e1c4c9805b2e36cd30ed","url":"assets/images/截屏2022-08-16 17.13.49-1bd88e8534b3c354335cfa219a8eee64.png"},{"revision":"88e5d51774cc0ed1725bdf2078eb90d9","url":"assets/images/截屏2022-08-16 19.25.45-e1e8a8292910d0d11725169ef537499e.png"},{"revision":"2e1adb9869413a19f347191d9f5f005f","url":"assets/images/截屏2022-08-16 22.17.18-d2bb95b406a42e31cbff0c0aab444e3e.png"},{"revision":"276d46db8c5e8942431b83e2129d4215","url":"assets/images/截屏2022-08-16 22.35.30-16914d412beb8bd1a800107c2411c79d.png"},{"revision":"21609a08f71dc98b115f73a388d9341a","url":"assets/images/截屏2022-08-17 12.18.16-8b131e57095c4c71d8ca78fc3479e7b8.png"},{"revision":"d4362289f805e803324da1c8a420f986","url":"icons/bg.svg"},{"revision":"b3a935cbd91d573d4081fec16fcf0967","url":"icons/bilibili.svg"},{"revision":"67295e9cf1ead133bc8ff6de9d802122","url":"icons/circle.svg"},{"revision":"577838587d18c845b8117e015b4bc677","url":"icons/cloud-music.svg"},{"revision":"66965ccc7bde0ae931c1f0864d0ee1ab","url":"icons/csdn.svg"},{"revision":"62517b9ba0aa6eb7d9a48cd982b9fa77","url":"icons/eye.svg"},{"revision":"0c275b9f64dbaacf5b088a41a8cb0af5","url":"icons/github.svg"},{"revision":"6bdafd801c878b10edb5fed5d00969e9","url":"icons/juejin.svg"},{"revision":"c3ee49b19d756462638677d8a9740fb4","url":"icons/new.svg"},{"revision":"0d2b32a9e75d02a45b5abb8e604f03bd","url":"icons/qq.svg"},{"revision":"20122bfdabc980cb3dc8482ba40c6ed0","url":"icons/rss.svg"},{"revision":"9e5a7aa8c92efaeeb46c182e04db9eea","url":"icons/weibo.svg"},{"revision":"14985c00ce247f0d9a6d42abd15b13fb","url":"icons/wx.svg"},{"revision":"be46445fd0a91cbb038061ce63f57731","url":"icons/zhihu.svg"},{"revision":"1c94e819468c53b27c8f44b232f12690","url":"img/favicon.ico"},{"revision":"dadc78c2e2aa9265ff19aa43b375cf21","url":"img/icons/icon-128.png"},{"revision":"8491a63b7df19ba014875c8693f094a0","url":"img/icons/icon-192.png"},{"revision":"78b1fc9d98ac9f37df5349f1136faa79","url":"img/icons/icon-512.png"},{"revision":"b49906b46e8e7d264304892e1c29822b","url":"img/ninjee-icon.png"},{"revision":"2777fbad988c12ae3778c68cf54d99de","url":"img/ninjee.jpeg"},{"revision":"48e2e4723af94a3c82b2341ea76fcf38","url":"svg/android-original-wordmark.svg"},{"revision":"951e0f370482b5861bb0744ddb24ae70","url":"svg/cplusplus-original.svg"},{"revision":"628aca24e57c867507221ed77a4040ce","url":"svg/docker-original-wordmark.svg"},{"revision":"0dadb6aa7950d23131f4251c18da77f0","url":"svg/elastic-icon.svg"},{"revision":"96f652cebdd5b09b43b814b826de79f2","url":"svg/electron-original.svg"},{"revision":"2c4e16ef81f265d076894c6835bec402","url":"svg/go-original.svg"},{"revision":"cba10c7c1ce484b82ab9b156b9abc74a","url":"svg/html5-original-wordmark.svg"},{"revision":"459bbae2e96a2410c5b429eb941a4c11","url":"svg/java-original.svg"},{"revision":"0c1f700da144243c526f252e59362138","url":"svg/javascript-original.svg"},{"revision":"99afb43938e1ddf65dec642db29cee39","url":"svg/mongodb-original-wordmark.svg"},{"revision":"2c7563f40818e2fe39b32715444dc790","url":"svg/mysql-original-wordmark.svg"},{"revision":"4d315923fdb4ed913816974c5cdd8004","url":"svg/nodejs-original-wordmark.svg"},{"revision":"fea4d54f3adf48d44cedd0a745841a4a","url":"svg/php-original.svg"},{"revision":"71374043d9b3d9ea7fa09976a747d475","url":"svg/python-original.svg"},{"revision":"d4eebc6dc7a839b5052f793919082d4d","url":"svg/react-original-wordmark.svg"},{"revision":"f6d8296b698a6ba00cbb2e4a4593f109","url":"svg/redis-original-wordmark.svg"},{"revision":"c06d3c068de68e5654d05552e26e3452","url":"svg/typescript-original.svg"},{"revision":"294b2130c8e646dc3caacca139194603","url":"svg/vuejs-original-wordmark.svg"}];
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
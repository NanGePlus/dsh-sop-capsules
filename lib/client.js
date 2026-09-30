window.__ModuleLoader__.load({
	id: "@nangeagi/dsh-sop-capsules",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let react_jsx_runtime = require("react/jsx-runtime");
		let _deepseek_ai_dsh_client_store = require("@deepseek-ai/dsh-client-store");
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/core.js
		var _a$1;
		function $constructor(name, initializer, params) {
			function init(inst, def) {
				if (!inst._zod) Object.defineProperty(inst, "_zod", {
					value: {
						def,
						constr: _,
						traits: /* @__PURE__ */ new Set()
					},
					enumerable: false
				});
				if (inst._zod.traits.has(name)) return;
				inst._zod.traits.add(name);
				initializer(inst, def);
				const proto = _.prototype;
				const keys = Object.keys(proto);
				for (let i = 0; i < keys.length; i++) {
					const k = keys[i];
					if (!(k in inst)) inst[k] = proto[k].bind(inst);
				}
			}
			const Parent = params?.Parent ?? Object;
			class Definition extends Parent {}
			Object.defineProperty(Definition, "name", { value: name });
			function _(def) {
				var _a;
				const inst = params?.Parent ? new Definition() : this;
				init(inst, def);
				(_a = inst._zod).deferred ?? (_a.deferred = []);
				for (const fn of inst._zod.deferred) fn();
				return inst;
			}
			Object.defineProperty(_, "init", { value: init });
			Object.defineProperty(_, Symbol.hasInstance, { value: (inst) => {
				if (params?.Parent && inst instanceof params.Parent) return true;
				return inst?._zod?.traits?.has(name);
			} });
			Object.defineProperty(_, "name", { value: name });
			return _;
		}
		var $ZodAsyncError = class extends Error {
			constructor() {
				super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
			}
		};
		var $ZodEncodeError = class extends Error {
			constructor(name) {
				super(`Encountered unidirectional transform during encode: ${name}`);
				this.name = "ZodEncodeError";
			}
		};
		(_a$1 = globalThis).__zod_globalConfig ?? (_a$1.__zod_globalConfig = {});
		const globalConfig = globalThis.__zod_globalConfig;
		function config(newConfig) {
			if (newConfig) Object.assign(globalConfig, newConfig);
			return globalConfig;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/util.js
		function getEnumValues(entries) {
			const numericValues = Object.values(entries).filter((v) => typeof v === "number");
			return Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
		}
		function jsonStringifyReplacer(_, value) {
			if (typeof value === "bigint") return value.toString();
			return value;
		}
		function cached(getter) {
			return { get value() {
				{
					const value = getter();
					Object.defineProperty(this, "value", { value });
					return value;
				}
				throw new Error("cached value already set");
			} };
		}
		function nullish(input) {
			return input === null || input === void 0;
		}
		function cleanRegex(source) {
			const start = source.startsWith("^") ? 1 : 0;
			const end = source.endsWith("$") ? source.length - 1 : source.length;
			return source.slice(start, end);
		}
		const EVALUATING = /* @__PURE__*/ Symbol("evaluating");
		function defineLazy(object, key, getter) {
			let value = void 0;
			Object.defineProperty(object, key, {
				get() {
					if (value === EVALUATING) return;
					if (value === void 0) {
						value = EVALUATING;
						value = getter();
					}
					return value;
				},
				set(v) {
					Object.defineProperty(object, key, { value: v });
				},
				configurable: true
			});
		}
		function assignProp(target, prop, value) {
			Object.defineProperty(target, prop, {
				value,
				writable: true,
				enumerable: true,
				configurable: true
			});
		}
		function mergeDefs(...defs) {
			const mergedDescriptors = {};
			for (const def of defs) Object.assign(mergedDescriptors, Object.getOwnPropertyDescriptors(def));
			return Object.defineProperties({}, mergedDescriptors);
		}
		function esc(str) {
			return JSON.stringify(str);
		}
		function slugify(input) {
			return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
		}
		const captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
		function isObject(data) {
			return typeof data === "object" && data !== null && !Array.isArray(data);
		}
		const allowsEval = /* @__PURE__*/ cached(() => {
			if (globalConfig.jitless) return false;
			if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) return false;
			try {
				new Function("");
				return true;
			} catch (_) {
				return false;
			}
		});
		function isPlainObject(o) {
			if (isObject(o) === false) return false;
			const ctor = o.constructor;
			if (ctor === void 0) return true;
			if (typeof ctor !== "function") return true;
			const prot = ctor.prototype;
			if (isObject(prot) === false) return false;
			if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) return false;
			return true;
		}
		function shallowClone(o) {
			if (isPlainObject(o)) return { ...o };
			if (Array.isArray(o)) return [...o];
			if (o instanceof Map) return new Map(o);
			if (o instanceof Set) return new Set(o);
			return o;
		}
		const propertyKeyTypes = /* @__PURE__*/ new Set([
			"string",
			"number",
			"symbol"
		]);
		function escapeRegex(str) {
			return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		}
		function clone(inst, def, params) {
			const cl = new inst._zod.constr(def ?? inst._zod.def);
			if (!def || params?.parent) cl._zod.parent = inst;
			return cl;
		}
		function normalizeParams(_params) {
			const params = _params;
			if (!params) return {};
			if (typeof params === "string") return { error: () => params };
			if (params?.message !== void 0) {
				if (params?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
				params.error = params.message;
			}
			delete params.message;
			if (typeof params.error === "string") return {
				...params,
				error: () => params.error
			};
			return params;
		}
		function optionalKeys(shape) {
			return Object.keys(shape).filter((k) => {
				return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
			});
		}
		Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, -Number.MAX_VALUE, Number.MAX_VALUE;
		function pick(schema, mask) {
			const currDef = schema._zod.def;
			const checks = currDef.checks;
			if (checks && checks.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
			return clone(schema, mergeDefs(schema._zod.def, {
				get shape() {
					const newShape = {};
					for (const key in mask) {
						if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
						if (!mask[key]) continue;
						newShape[key] = currDef.shape[key];
					}
					assignProp(this, "shape", newShape);
					return newShape;
				},
				checks: []
			}));
		}
		function omit(schema, mask) {
			const currDef = schema._zod.def;
			const checks = currDef.checks;
			if (checks && checks.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
			return clone(schema, mergeDefs(schema._zod.def, {
				get shape() {
					const newShape = { ...schema._zod.def.shape };
					for (const key in mask) {
						if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
						if (!mask[key]) continue;
						delete newShape[key];
					}
					assignProp(this, "shape", newShape);
					return newShape;
				},
				checks: []
			}));
		}
		function extend(schema, shape) {
			if (!isPlainObject(shape)) throw new Error("Invalid input to extend: expected a plain object");
			const checks = schema._zod.def.checks;
			if (checks && checks.length > 0) {
				const existingShape = schema._zod.def.shape;
				for (const key in shape) if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
			}
			return clone(schema, mergeDefs(schema._zod.def, { get shape() {
				const _shape = {
					...schema._zod.def.shape,
					...shape
				};
				assignProp(this, "shape", _shape);
				return _shape;
			} }));
		}
		function safeExtend(schema, shape) {
			if (!isPlainObject(shape)) throw new Error("Invalid input to safeExtend: expected a plain object");
			return clone(schema, mergeDefs(schema._zod.def, { get shape() {
				const _shape = {
					...schema._zod.def.shape,
					...shape
				};
				assignProp(this, "shape", _shape);
				return _shape;
			} }));
		}
		function merge$1(a, b) {
			if (a._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
			return clone(a, mergeDefs(a._zod.def, {
				get shape() {
					const _shape = {
						...a._zod.def.shape,
						...b._zod.def.shape
					};
					assignProp(this, "shape", _shape);
					return _shape;
				},
				get catchall() {
					return b._zod.def.catchall;
				},
				checks: b._zod.def.checks ?? []
			}));
		}
		function partial(Class, schema, mask) {
			const checks = schema._zod.def.checks;
			if (checks && checks.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
			return clone(schema, mergeDefs(schema._zod.def, {
				get shape() {
					const oldShape = schema._zod.def.shape;
					const shape = { ...oldShape };
					if (mask) for (const key in mask) {
						if (!(key in oldShape)) throw new Error(`Unrecognized key: "${key}"`);
						if (!mask[key]) continue;
						shape[key] = Class ? new Class({
							type: "optional",
							innerType: oldShape[key]
						}) : oldShape[key];
					}
					else for (const key in oldShape) shape[key] = Class ? new Class({
						type: "optional",
						innerType: oldShape[key]
					}) : oldShape[key];
					assignProp(this, "shape", shape);
					return shape;
				},
				checks: []
			}));
		}
		function required(Class, schema, mask) {
			return clone(schema, mergeDefs(schema._zod.def, { get shape() {
				const oldShape = schema._zod.def.shape;
				const shape = { ...oldShape };
				if (mask) for (const key in mask) {
					if (!(key in shape)) throw new Error(`Unrecognized key: "${key}"`);
					if (!mask[key]) continue;
					shape[key] = new Class({
						type: "nonoptional",
						innerType: oldShape[key]
					});
				}
				else for (const key in oldShape) shape[key] = new Class({
					type: "nonoptional",
					innerType: oldShape[key]
				});
				assignProp(this, "shape", shape);
				return shape;
			} }));
		}
		function aborted(x, startIndex = 0) {
			if (x.aborted === true) return true;
			for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue !== true) return true;
			return false;
		}
		function explicitlyAborted(x, startIndex = 0) {
			if (x.aborted === true) return true;
			for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue === false) return true;
			return false;
		}
		function prefixIssues(path, issues) {
			return issues.map((iss) => {
				var _a;
				(_a = iss).path ?? (_a.path = []);
				iss.path.unshift(path);
				return iss;
			});
		}
		function unwrapMessage(message) {
			return typeof message === "string" ? message : message?.message;
		}
		function finalizeIssue(iss, ctx, config) {
			const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config.customError?.(iss)) ?? unwrapMessage(config.localeError?.(iss)) ?? "Invalid input";
			const { inst: _inst, continue: _continue, input: _input, ...rest } = iss;
			rest.path ?? (rest.path = []);
			rest.message = message;
			if (ctx?.reportInput) rest.input = _input;
			return rest;
		}
		function getLengthableOrigin(input) {
			if (Array.isArray(input)) return "array";
			if (typeof input === "string") return "string";
			return "unknown";
		}
		function issue(...args) {
			const [iss, input, inst] = args;
			if (typeof iss === "string") return {
				message: iss,
				code: "custom",
				input,
				inst
			};
			return { ...iss };
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/errors.js
		const initializer$1 = (inst, def) => {
			inst.name = "$ZodError";
			Object.defineProperty(inst, "_zod", {
				value: inst._zod,
				enumerable: false
			});
			Object.defineProperty(inst, "issues", {
				value: def,
				enumerable: false
			});
			inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
			Object.defineProperty(inst, "toString", {
				value: () => inst.message,
				enumerable: false
			});
		};
		const $ZodError = $constructor("$ZodError", initializer$1);
		const $ZodRealError = $constructor("$ZodError", initializer$1, { Parent: Error });
		function flattenError(error, mapper = (issue) => issue.message) {
			const fieldErrors = {};
			const formErrors = [];
			for (const sub of error.issues) if (sub.path.length > 0) {
				fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
				fieldErrors[sub.path[0]].push(mapper(sub));
			} else formErrors.push(mapper(sub));
			return {
				formErrors,
				fieldErrors
			};
		}
		function formatError(error, mapper = (issue) => issue.message) {
			const fieldErrors = { _errors: [] };
			const processError = (error, path = []) => {
				for (const issue of error.issues) if (issue.code === "invalid_union" && issue.errors.length) issue.errors.map((issues) => processError({ issues }, [...path, ...issue.path]));
				else if (issue.code === "invalid_key") processError({ issues: issue.issues }, [...path, ...issue.path]);
				else if (issue.code === "invalid_element") processError({ issues: issue.issues }, [...path, ...issue.path]);
				else {
					const fullpath = [...path, ...issue.path];
					if (fullpath.length === 0) fieldErrors._errors.push(mapper(issue));
					else {
						let curr = fieldErrors;
						let i = 0;
						while (i < fullpath.length) {
							const el = fullpath[i];
							if (!(i === fullpath.length - 1)) curr[el] = curr[el] || { _errors: [] };
							else {
								curr[el] = curr[el] || { _errors: [] };
								curr[el]._errors.push(mapper(issue));
							}
							curr = curr[el];
							i++;
						}
					}
				}
			};
			processError(error);
			return fieldErrors;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/parse.js
		const _parse = (_Err) => (schema, value, _ctx, _params) => {
			const ctx = _ctx ? {
				..._ctx,
				async: false
			} : { async: false };
			const result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) throw new $ZodAsyncError();
			if (result.issues.length) {
				const e = new ((_params?.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
				captureStackTrace(e, _params?.callee);
				throw e;
			}
			return result.value;
		};
		const _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
			const ctx = _ctx ? {
				..._ctx,
				async: true
			} : { async: true };
			let result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) result = await result;
			if (result.issues.length) {
				const e = new ((params?.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
				captureStackTrace(e, params?.callee);
				throw e;
			}
			return result.value;
		};
		const _safeParse = (_Err) => (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				async: false
			} : { async: false };
			const result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) throw new $ZodAsyncError();
			return result.issues.length ? {
				success: false,
				error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
			} : {
				success: true,
				data: result.value
			};
		};
		const safeParse$1 = /* @__PURE__*/ _safeParse($ZodRealError);
		const _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				async: true
			} : { async: true };
			let result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) result = await result;
			return result.issues.length ? {
				success: false,
				error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
			} : {
				success: true,
				data: result.value
			};
		};
		const safeParseAsync$1 = /* @__PURE__*/ _safeParseAsync($ZodRealError);
		const _encode = (_Err) => (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _parse(_Err)(schema, value, ctx);
		};
		const _decode = (_Err) => (schema, value, _ctx) => {
			return _parse(_Err)(schema, value, _ctx);
		};
		const _encodeAsync = (_Err) => async (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _parseAsync(_Err)(schema, value, ctx);
		};
		const _decodeAsync = (_Err) => async (schema, value, _ctx) => {
			return _parseAsync(_Err)(schema, value, _ctx);
		};
		const _safeEncode = (_Err) => (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _safeParse(_Err)(schema, value, ctx);
		};
		const _safeDecode = (_Err) => (schema, value, _ctx) => {
			return _safeParse(_Err)(schema, value, _ctx);
		};
		const _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _safeParseAsync(_Err)(schema, value, ctx);
		};
		const _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
			return _safeParseAsync(_Err)(schema, value, _ctx);
		};
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/regexes.js
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link cuid2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		const cuid = /^[cC][0-9a-z]{6,}$/;
		const cuid2 = /^[0-9a-z]+$/;
		const ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
		const xid = /^[0-9a-vA-V]{20}$/;
		const ksuid = /^[A-Za-z0-9]{27}$/;
		const nanoid = /^[a-zA-Z0-9_-]{21}$/;
		/** ISO 8601-1 duration regex. Does not support the 8601-2 extensions like negative durations or fractional/negative components. */
		const duration$1 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
		/** A regex for any UUID-like identifier: 8-4-4-4-12 hex pattern */
		const guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
		/** Returns a regex for validating an RFC 9562/4122 UUID.
		*
		* @param version Optionally specify a version 1-8. If no version is specified, all versions are supported. */
		const uuid = (version) => {
			if (!version) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
			return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
		};
		/** Practical email validation */
		const email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
		const _emoji$1 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
		function emoji() {
			return new RegExp(_emoji$1, "u");
		}
		const ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
		const ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
		const cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
		const cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
		const base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
		const base64url = /^[A-Za-z0-9_-]*$/;
		const httpProtocol = /^https?$/;
		const e164 = /^\+[1-9]\d{6,14}$/;
		const dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
		const date$1 = /*@__PURE__*/ new RegExp(`^${dateSource}$`);
		function timeSource(args) {
			const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
			return typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
		}
		function time$1(args) {
			return new RegExp(`^${timeSource(args)}$`);
		}
		function datetime$1(args) {
			const time = timeSource({ precision: args.precision });
			const opts = ["Z"];
			if (args.local) opts.push("");
			if (args.offset) opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
			const timeRegex = `${time}(?:${opts.join("|")})`;
			return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
		}
		const string$2 = (params) => {
			const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
			return new RegExp(`^${regex}$`);
		};
		const lowercase = /^[^A-Z]*$/;
		const uppercase = /^[^a-z]*$/;
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/checks.js
		const $ZodCheck = /*@__PURE__*/ $constructor("$ZodCheck", (inst, def) => {
			var _a;
			inst._zod ?? (inst._zod = {});
			inst._zod.def = def;
			(_a = inst._zod).onattach ?? (_a.onattach = []);
		});
		const $ZodCheckMaxLength = /*@__PURE__*/ $constructor("$ZodCheckMaxLength", (inst, def) => {
			var _a;
			$ZodCheck.init(inst, def);
			(_a = inst._zod.def).when ?? (_a.when = (payload) => {
				const val = payload.value;
				return !nullish(val) && val.length !== void 0;
			});
			inst._zod.onattach.push((inst) => {
				const curr = inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
				if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				if (input.length <= def.maximum) return;
				const origin = getLengthableOrigin(input);
				payload.issues.push({
					origin,
					code: "too_big",
					maximum: def.maximum,
					inclusive: true,
					input,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckMinLength = /*@__PURE__*/ $constructor("$ZodCheckMinLength", (inst, def) => {
			var _a;
			$ZodCheck.init(inst, def);
			(_a = inst._zod.def).when ?? (_a.when = (payload) => {
				const val = payload.value;
				return !nullish(val) && val.length !== void 0;
			});
			inst._zod.onattach.push((inst) => {
				const curr = inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
				if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				if (input.length >= def.minimum) return;
				const origin = getLengthableOrigin(input);
				payload.issues.push({
					origin,
					code: "too_small",
					minimum: def.minimum,
					inclusive: true,
					input,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckLengthEquals = /*@__PURE__*/ $constructor("$ZodCheckLengthEquals", (inst, def) => {
			var _a;
			$ZodCheck.init(inst, def);
			(_a = inst._zod.def).when ?? (_a.when = (payload) => {
				const val = payload.value;
				return !nullish(val) && val.length !== void 0;
			});
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.minimum = def.length;
				bag.maximum = def.length;
				bag.length = def.length;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				const length = input.length;
				if (length === def.length) return;
				const origin = getLengthableOrigin(input);
				const tooBig = length > def.length;
				payload.issues.push({
					origin,
					...tooBig ? {
						code: "too_big",
						maximum: def.length
					} : {
						code: "too_small",
						minimum: def.length
					},
					inclusive: true,
					exact: true,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckStringFormat = /*@__PURE__*/ $constructor("$ZodCheckStringFormat", (inst, def) => {
			var _a, _b;
			$ZodCheck.init(inst, def);
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.format = def.format;
				if (def.pattern) {
					bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
					bag.patterns.add(def.pattern);
				}
			});
			if (def.pattern) (_a = inst._zod).check ?? (_a.check = (payload) => {
				def.pattern.lastIndex = 0;
				if (def.pattern.test(payload.value)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: def.format,
					input: payload.value,
					...def.pattern ? { pattern: def.pattern.toString() } : {},
					inst,
					continue: !def.abort
				});
			});
			else (_b = inst._zod).check ?? (_b.check = () => {});
		});
		const $ZodCheckRegex = /*@__PURE__*/ $constructor("$ZodCheckRegex", (inst, def) => {
			$ZodCheckStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				def.pattern.lastIndex = 0;
				if (def.pattern.test(payload.value)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "regex",
					input: payload.value,
					pattern: def.pattern.toString(),
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckLowerCase = /*@__PURE__*/ $constructor("$ZodCheckLowerCase", (inst, def) => {
			def.pattern ?? (def.pattern = lowercase);
			$ZodCheckStringFormat.init(inst, def);
		});
		const $ZodCheckUpperCase = /*@__PURE__*/ $constructor("$ZodCheckUpperCase", (inst, def) => {
			def.pattern ?? (def.pattern = uppercase);
			$ZodCheckStringFormat.init(inst, def);
		});
		const $ZodCheckIncludes = /*@__PURE__*/ $constructor("$ZodCheckIncludes", (inst, def) => {
			$ZodCheck.init(inst, def);
			const escapedRegex = escapeRegex(def.includes);
			const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
			def.pattern = pattern;
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
				bag.patterns.add(pattern);
			});
			inst._zod.check = (payload) => {
				if (payload.value.includes(def.includes, def.position)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "includes",
					includes: def.includes,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckStartsWith = /*@__PURE__*/ $constructor("$ZodCheckStartsWith", (inst, def) => {
			$ZodCheck.init(inst, def);
			const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
			def.pattern ?? (def.pattern = pattern);
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
				bag.patterns.add(pattern);
			});
			inst._zod.check = (payload) => {
				if (payload.value.startsWith(def.prefix)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "starts_with",
					prefix: def.prefix,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckEndsWith = /*@__PURE__*/ $constructor("$ZodCheckEndsWith", (inst, def) => {
			$ZodCheck.init(inst, def);
			const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
			def.pattern ?? (def.pattern = pattern);
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
				bag.patterns.add(pattern);
			});
			inst._zod.check = (payload) => {
				if (payload.value.endsWith(def.suffix)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "ends_with",
					suffix: def.suffix,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckOverwrite = /*@__PURE__*/ $constructor("$ZodCheckOverwrite", (inst, def) => {
			$ZodCheck.init(inst, def);
			inst._zod.check = (payload) => {
				payload.value = def.tx(payload.value);
			};
		});
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/doc.js
		var Doc = class {
			constructor(args = []) {
				this.content = [];
				this.indent = 0;
				if (this) this.args = args;
			}
			indented(fn) {
				this.indent += 1;
				fn(this);
				this.indent -= 1;
			}
			write(arg) {
				if (typeof arg === "function") {
					arg(this, { execution: "sync" });
					arg(this, { execution: "async" });
					return;
				}
				const lines = arg.split("\n").filter((x) => x);
				const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
				const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
				for (const line of dedented) this.content.push(line);
			}
			compile() {
				const F = Function;
				const args = this?.args;
				const lines = [...(this?.content ?? [``]).map((x) => `  ${x}`)];
				return new F(...args, lines.join("\n"));
			}
		};
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/versions.js
		const version = {
			major: 4,
			minor: 4,
			patch: 3
		};
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/schemas.js
		const $ZodType = /*@__PURE__*/ $constructor("$ZodType", (inst, def) => {
			var _a;
			inst ?? (inst = {});
			inst._zod.def = def;
			inst._zod.bag = inst._zod.bag || {};
			inst._zod.version = version;
			const checks = [...inst._zod.def.checks ?? []];
			if (inst._zod.traits.has("$ZodCheck")) checks.unshift(inst);
			for (const ch of checks) for (const fn of ch._zod.onattach) fn(inst);
			if (checks.length === 0) {
				(_a = inst._zod).deferred ?? (_a.deferred = []);
				inst._zod.deferred?.push(() => {
					inst._zod.run = inst._zod.parse;
				});
			} else {
				const runChecks = (payload, checks, ctx) => {
					let isAborted = aborted(payload);
					let asyncResult;
					for (const ch of checks) {
						if (ch._zod.def.when) {
							if (explicitlyAborted(payload)) continue;
							if (!ch._zod.def.when(payload)) continue;
						} else if (isAborted) continue;
						const currLen = payload.issues.length;
						const _ = ch._zod.check(payload);
						if (_ instanceof Promise && ctx?.async === false) throw new $ZodAsyncError();
						if (asyncResult || _ instanceof Promise) asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
							await _;
							if (payload.issues.length === currLen) return;
							if (!isAborted) isAborted = aborted(payload, currLen);
						});
						else {
							if (payload.issues.length === currLen) continue;
							if (!isAborted) isAborted = aborted(payload, currLen);
						}
					}
					if (asyncResult) return asyncResult.then(() => {
						return payload;
					});
					return payload;
				};
				const handleCanaryResult = (canary, payload, ctx) => {
					if (aborted(canary)) {
						canary.aborted = true;
						return canary;
					}
					const checkResult = runChecks(payload, checks, ctx);
					if (checkResult instanceof Promise) {
						if (ctx.async === false) throw new $ZodAsyncError();
						return checkResult.then((checkResult) => inst._zod.parse(checkResult, ctx));
					}
					return inst._zod.parse(checkResult, ctx);
				};
				inst._zod.run = (payload, ctx) => {
					if (ctx.skipChecks) return inst._zod.parse(payload, ctx);
					if (ctx.direction === "backward") {
						const canary = inst._zod.parse({
							value: payload.value,
							issues: []
						}, {
							...ctx,
							skipChecks: true
						});
						if (canary instanceof Promise) return canary.then((canary) => {
							return handleCanaryResult(canary, payload, ctx);
						});
						return handleCanaryResult(canary, payload, ctx);
					}
					const result = inst._zod.parse(payload, ctx);
					if (result instanceof Promise) {
						if (ctx.async === false) throw new $ZodAsyncError();
						return result.then((result) => runChecks(result, checks, ctx));
					}
					return runChecks(result, checks, ctx);
				};
			}
			defineLazy(inst, "~standard", () => ({
				validate: (value) => {
					try {
						const r = safeParse$1(inst, value);
						return r.success ? { value: r.data } : { issues: r.error?.issues };
					} catch (_) {
						return safeParseAsync$1(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
					}
				},
				vendor: "zod",
				version: 1
			}));
		});
		const $ZodString = /*@__PURE__*/ $constructor("$ZodString", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string$2(inst._zod.bag);
			inst._zod.parse = (payload, _) => {
				if (def.coerce) try {
					payload.value = String(payload.value);
				} catch (_) {}
				if (typeof payload.value === "string") return payload;
				payload.issues.push({
					expected: "string",
					code: "invalid_type",
					input: payload.value,
					inst
				});
				return payload;
			};
		});
		const $ZodStringFormat = /*@__PURE__*/ $constructor("$ZodStringFormat", (inst, def) => {
			$ZodCheckStringFormat.init(inst, def);
			$ZodString.init(inst, def);
		});
		const $ZodGUID = /*@__PURE__*/ $constructor("$ZodGUID", (inst, def) => {
			def.pattern ?? (def.pattern = guid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodUUID = /*@__PURE__*/ $constructor("$ZodUUID", (inst, def) => {
			if (def.version) {
				const v = {
					v1: 1,
					v2: 2,
					v3: 3,
					v4: 4,
					v5: 5,
					v6: 6,
					v7: 7,
					v8: 8
				}[def.version];
				if (v === void 0) throw new Error(`Invalid UUID version: "${def.version}"`);
				def.pattern ?? (def.pattern = uuid(v));
			} else def.pattern ?? (def.pattern = uuid());
			$ZodStringFormat.init(inst, def);
		});
		const $ZodEmail = /*@__PURE__*/ $constructor("$ZodEmail", (inst, def) => {
			def.pattern ?? (def.pattern = email);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodURL = /*@__PURE__*/ $constructor("$ZodURL", (inst, def) => {
			$ZodStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				try {
					const trimmed = payload.value.trim();
					if (!def.normalize && def.protocol?.source === httpProtocol.source) {
						if (!/^https?:\/\//i.test(trimmed)) {
							payload.issues.push({
								code: "invalid_format",
								format: "url",
								note: "Invalid URL format",
								input: payload.value,
								inst,
								continue: !def.abort
							});
							return;
						}
					}
					const url = new URL(trimmed);
					if (def.hostname) {
						def.hostname.lastIndex = 0;
						if (!def.hostname.test(url.hostname)) payload.issues.push({
							code: "invalid_format",
							format: "url",
							note: "Invalid hostname",
							pattern: def.hostname.source,
							input: payload.value,
							inst,
							continue: !def.abort
						});
					}
					if (def.protocol) {
						def.protocol.lastIndex = 0;
						if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) payload.issues.push({
							code: "invalid_format",
							format: "url",
							note: "Invalid protocol",
							pattern: def.protocol.source,
							input: payload.value,
							inst,
							continue: !def.abort
						});
					}
					if (def.normalize) payload.value = url.href;
					else payload.value = trimmed;
					return;
				} catch (_) {
					payload.issues.push({
						code: "invalid_format",
						format: "url",
						input: payload.value,
						inst,
						continue: !def.abort
					});
				}
			};
		});
		const $ZodEmoji = /*@__PURE__*/ $constructor("$ZodEmoji", (inst, def) => {
			def.pattern ?? (def.pattern = emoji());
			$ZodStringFormat.init(inst, def);
		});
		const $ZodNanoID = /*@__PURE__*/ $constructor("$ZodNanoID", (inst, def) => {
			def.pattern ?? (def.pattern = nanoid);
			$ZodStringFormat.init(inst, def);
		});
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link $ZodCUID2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		const $ZodCUID = /*@__PURE__*/ $constructor("$ZodCUID", (inst, def) => {
			def.pattern ?? (def.pattern = cuid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodCUID2 = /*@__PURE__*/ $constructor("$ZodCUID2", (inst, def) => {
			def.pattern ?? (def.pattern = cuid2);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodULID = /*@__PURE__*/ $constructor("$ZodULID", (inst, def) => {
			def.pattern ?? (def.pattern = ulid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodXID = /*@__PURE__*/ $constructor("$ZodXID", (inst, def) => {
			def.pattern ?? (def.pattern = xid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodKSUID = /*@__PURE__*/ $constructor("$ZodKSUID", (inst, def) => {
			def.pattern ?? (def.pattern = ksuid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISODateTime = /*@__PURE__*/ $constructor("$ZodISODateTime", (inst, def) => {
			def.pattern ?? (def.pattern = datetime$1(def));
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISODate = /*@__PURE__*/ $constructor("$ZodISODate", (inst, def) => {
			def.pattern ?? (def.pattern = date$1);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISOTime = /*@__PURE__*/ $constructor("$ZodISOTime", (inst, def) => {
			def.pattern ?? (def.pattern = time$1(def));
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISODuration = /*@__PURE__*/ $constructor("$ZodISODuration", (inst, def) => {
			def.pattern ?? (def.pattern = duration$1);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodIPv4 = /*@__PURE__*/ $constructor("$ZodIPv4", (inst, def) => {
			def.pattern ?? (def.pattern = ipv4);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.format = `ipv4`;
		});
		const $ZodIPv6 = /*@__PURE__*/ $constructor("$ZodIPv6", (inst, def) => {
			def.pattern ?? (def.pattern = ipv6);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.format = `ipv6`;
			inst._zod.check = (payload) => {
				try {
					new URL(`http://[${payload.value}]`);
				} catch {
					payload.issues.push({
						code: "invalid_format",
						format: "ipv6",
						input: payload.value,
						inst,
						continue: !def.abort
					});
				}
			};
		});
		const $ZodCIDRv4 = /*@__PURE__*/ $constructor("$ZodCIDRv4", (inst, def) => {
			def.pattern ?? (def.pattern = cidrv4);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodCIDRv6 = /*@__PURE__*/ $constructor("$ZodCIDRv6", (inst, def) => {
			def.pattern ?? (def.pattern = cidrv6);
			$ZodStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				const parts = payload.value.split("/");
				try {
					if (parts.length !== 2) throw new Error();
					const [address, prefix] = parts;
					if (!prefix) throw new Error();
					const prefixNum = Number(prefix);
					if (`${prefixNum}` !== prefix) throw new Error();
					if (prefixNum < 0 || prefixNum > 128) throw new Error();
					new URL(`http://[${address}]`);
				} catch {
					payload.issues.push({
						code: "invalid_format",
						format: "cidrv6",
						input: payload.value,
						inst,
						continue: !def.abort
					});
				}
			};
		});
		function isValidBase64(data) {
			if (data === "") return true;
			if (/\s/.test(data)) return false;
			if (data.length % 4 !== 0) return false;
			try {
				atob(data);
				return true;
			} catch {
				return false;
			}
		}
		const $ZodBase64 = /*@__PURE__*/ $constructor("$ZodBase64", (inst, def) => {
			def.pattern ?? (def.pattern = base64);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.contentEncoding = "base64";
			inst._zod.check = (payload) => {
				if (isValidBase64(payload.value)) return;
				payload.issues.push({
					code: "invalid_format",
					format: "base64",
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		function isValidBase64URL(data) {
			if (!base64url.test(data)) return false;
			const base64 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
			return isValidBase64(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
		}
		const $ZodBase64URL = /*@__PURE__*/ $constructor("$ZodBase64URL", (inst, def) => {
			def.pattern ?? (def.pattern = base64url);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.contentEncoding = "base64url";
			inst._zod.check = (payload) => {
				if (isValidBase64URL(payload.value)) return;
				payload.issues.push({
					code: "invalid_format",
					format: "base64url",
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodE164 = /*@__PURE__*/ $constructor("$ZodE164", (inst, def) => {
			def.pattern ?? (def.pattern = e164);
			$ZodStringFormat.init(inst, def);
		});
		function isValidJWT(token, algorithm = null) {
			try {
				const tokensParts = token.split(".");
				if (tokensParts.length !== 3) return false;
				const [header] = tokensParts;
				if (!header) return false;
				const parsedHeader = JSON.parse(atob(header));
				if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT") return false;
				if (!parsedHeader.alg) return false;
				if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm)) return false;
				return true;
			} catch {
				return false;
			}
		}
		const $ZodJWT = /*@__PURE__*/ $constructor("$ZodJWT", (inst, def) => {
			$ZodStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				if (isValidJWT(payload.value, def.alg)) return;
				payload.issues.push({
					code: "invalid_format",
					format: "jwt",
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodUnknown = /*@__PURE__*/ $constructor("$ZodUnknown", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload) => payload;
		});
		const $ZodNever = /*@__PURE__*/ $constructor("$ZodNever", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, _ctx) => {
				payload.issues.push({
					expected: "never",
					code: "invalid_type",
					input: payload.value,
					inst
				});
				return payload;
			};
		});
		const $ZodVoid = /*@__PURE__*/ $constructor("$ZodVoid", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, _ctx) => {
				const input = payload.value;
				if (typeof input === "undefined") return payload;
				payload.issues.push({
					expected: "void",
					code: "invalid_type",
					input,
					inst
				});
				return payload;
			};
		});
		function handleArrayResult(result, final, index) {
			if (result.issues.length) final.issues.push(...prefixIssues(index, result.issues));
			final.value[index] = result.value;
		}
		const $ZodArray = /*@__PURE__*/ $constructor("$ZodArray", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, ctx) => {
				const input = payload.value;
				if (!Array.isArray(input)) {
					payload.issues.push({
						expected: "array",
						code: "invalid_type",
						input,
						inst
					});
					return payload;
				}
				payload.value = Array(input.length);
				const proms = [];
				for (let i = 0; i < input.length; i++) {
					const item = input[i];
					const result = def.element._zod.run({
						value: item,
						issues: []
					}, ctx);
					if (result instanceof Promise) proms.push(result.then((result) => handleArrayResult(result, payload, i)));
					else handleArrayResult(result, payload, i);
				}
				if (proms.length) return Promise.all(proms).then(() => payload);
				return payload;
			};
		});
		function handlePropertyResult(result, final, key, input, isOptionalIn, isOptionalOut) {
			const isPresent = key in input;
			if (result.issues.length) {
				if (isOptionalIn && isOptionalOut && !isPresent) return;
				final.issues.push(...prefixIssues(key, result.issues));
			}
			if (!isPresent && !isOptionalIn) {
				if (!result.issues.length) final.issues.push({
					code: "invalid_type",
					expected: "nonoptional",
					input: void 0,
					path: [key]
				});
				return;
			}
			if (result.value === void 0) {
				if (isPresent) final.value[key] = void 0;
			} else final.value[key] = result.value;
		}
		function normalizeDef(def) {
			const keys = Object.keys(def.shape);
			for (const k of keys) if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
			const okeys = optionalKeys(def.shape);
			return {
				...def,
				keys,
				keySet: new Set(keys),
				numKeys: keys.length,
				optionalKeys: new Set(okeys)
			};
		}
		function handleCatchall(proms, input, payload, ctx, def, inst) {
			const unrecognized = [];
			const keySet = def.keySet;
			const _catchall = def.catchall._zod;
			const t = _catchall.def.type;
			const isOptionalIn = _catchall.optin === "optional";
			const isOptionalOut = _catchall.optout === "optional";
			for (const key in input) {
				if (key === "__proto__") continue;
				if (keySet.has(key)) continue;
				if (t === "never") {
					unrecognized.push(key);
					continue;
				}
				const r = _catchall.run({
					value: input[key],
					issues: []
				}, ctx);
				if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut)));
				else handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
			}
			if (unrecognized.length) payload.issues.push({
				code: "unrecognized_keys",
				keys: unrecognized,
				input,
				inst
			});
			if (!proms.length) return payload;
			return Promise.all(proms).then(() => {
				return payload;
			});
		}
		const $ZodObject = /*@__PURE__*/ $constructor("$ZodObject", (inst, def) => {
			$ZodType.init(inst, def);
			if (!Object.getOwnPropertyDescriptor(def, "shape")?.get) {
				const sh = def.shape;
				Object.defineProperty(def, "shape", { get: () => {
					const newSh = { ...sh };
					Object.defineProperty(def, "shape", { value: newSh });
					return newSh;
				} });
			}
			const _normalized = cached(() => normalizeDef(def));
			defineLazy(inst._zod, "propValues", () => {
				const shape = def.shape;
				const propValues = {};
				for (const key in shape) {
					const field = shape[key]._zod;
					if (field.values) {
						propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
						for (const v of field.values) propValues[key].add(v);
					}
				}
				return propValues;
			});
			const isObject$1 = isObject;
			const catchall = def.catchall;
			let value;
			inst._zod.parse = (payload, ctx) => {
				value ?? (value = _normalized.value);
				const input = payload.value;
				if (!isObject$1(input)) {
					payload.issues.push({
						expected: "object",
						code: "invalid_type",
						input,
						inst
					});
					return payload;
				}
				payload.value = {};
				const proms = [];
				const shape = value.shape;
				for (const key of value.keys) {
					const el = shape[key];
					const isOptionalIn = el._zod.optin === "optional";
					const isOptionalOut = el._zod.optout === "optional";
					const r = el._zod.run({
						value: input[key],
						issues: []
					}, ctx);
					if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut)));
					else handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
				}
				if (!catchall) return proms.length ? Promise.all(proms).then(() => payload) : payload;
				return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
			};
		});
		const $ZodObjectJIT = /*@__PURE__*/ $constructor("$ZodObjectJIT", (inst, def) => {
			$ZodObject.init(inst, def);
			const superParse = inst._zod.parse;
			const _normalized = cached(() => normalizeDef(def));
			const generateFastpass = (shape) => {
				const doc = new Doc([
					"shape",
					"payload",
					"ctx"
				]);
				const normalized = _normalized.value;
				const parseStr = (key) => {
					const k = esc(key);
					return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
				};
				doc.write(`const input = payload.value;`);
				const ids = Object.create(null);
				let counter = 0;
				for (const key of normalized.keys) ids[key] = `key_${counter++}`;
				doc.write(`const newResult = {};`);
				for (const key of normalized.keys) {
					const id = ids[key];
					const k = esc(key);
					const schema = shape[key];
					const isOptionalIn = schema?._zod?.optin === "optional";
					const isOptionalOut = schema?._zod?.optout === "optional";
					doc.write(`const ${id} = ${parseStr(key)};`);
					if (isOptionalIn && isOptionalOut) doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
					else if (!isOptionalIn) doc.write(`
        const ${id}_present = ${k} in input;
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
        }

        if (${id}_present) {
          if (${id}.value === undefined) {
            newResult[${k}] = undefined;
          } else {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
					else doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
				}
				doc.write(`payload.value = newResult;`);
				doc.write(`return payload;`);
				const fn = doc.compile();
				return (payload, ctx) => fn(shape, payload, ctx);
			};
			let fastpass;
			const isObject$2 = isObject;
			const jit = !globalConfig.jitless;
			const fastEnabled = jit && allowsEval.value;
			const catchall = def.catchall;
			let value;
			inst._zod.parse = (payload, ctx) => {
				value ?? (value = _normalized.value);
				const input = payload.value;
				if (!isObject$2(input)) {
					payload.issues.push({
						expected: "object",
						code: "invalid_type",
						input,
						inst
					});
					return payload;
				}
				if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
					if (!fastpass) fastpass = generateFastpass(def.shape);
					payload = fastpass(payload, ctx);
					if (!catchall) return payload;
					return handleCatchall([], input, payload, ctx, value, inst);
				}
				return superParse(payload, ctx);
			};
		});
		function handleUnionResults(results, final, inst, ctx) {
			for (const result of results) if (result.issues.length === 0) {
				final.value = result.value;
				return final;
			}
			const nonaborted = results.filter((r) => !aborted(r));
			if (nonaborted.length === 1) {
				final.value = nonaborted[0].value;
				return nonaborted[0];
			}
			final.issues.push({
				code: "invalid_union",
				input: final.value,
				inst,
				errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
			});
			return final;
		}
		const $ZodUnion = /*@__PURE__*/ $constructor("$ZodUnion", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
			defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
			defineLazy(inst._zod, "values", () => {
				if (def.options.every((o) => o._zod.values)) return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
			});
			defineLazy(inst._zod, "pattern", () => {
				if (def.options.every((o) => o._zod.pattern)) {
					const patterns = def.options.map((o) => o._zod.pattern);
					return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
				}
			});
			const first = def.options.length === 1 ? def.options[0]._zod.run : null;
			inst._zod.parse = (payload, ctx) => {
				if (first) return first(payload, ctx);
				let async = false;
				const results = [];
				for (const option of def.options) {
					const result = option._zod.run({
						value: payload.value,
						issues: []
					}, ctx);
					if (result instanceof Promise) {
						results.push(result);
						async = true;
					} else {
						if (result.issues.length === 0) return result;
						results.push(result);
					}
				}
				if (!async) return handleUnionResults(results, payload, inst, ctx);
				return Promise.all(results).then((results) => {
					return handleUnionResults(results, payload, inst, ctx);
				});
			};
		});
		const $ZodIntersection = /*@__PURE__*/ $constructor("$ZodIntersection", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, ctx) => {
				const input = payload.value;
				const left = def.left._zod.run({
					value: input,
					issues: []
				}, ctx);
				const right = def.right._zod.run({
					value: input,
					issues: []
				}, ctx);
				if (left instanceof Promise || right instanceof Promise) return Promise.all([left, right]).then(([left, right]) => {
					return handleIntersectionResults(payload, left, right);
				});
				return handleIntersectionResults(payload, left, right);
			};
		});
		function mergeValues(a, b) {
			if (a === b) return {
				valid: true,
				data: a
			};
			if (a instanceof Date && b instanceof Date && +a === +b) return {
				valid: true,
				data: a
			};
			if (isPlainObject(a) && isPlainObject(b)) {
				const bKeys = Object.keys(b);
				const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
				const newObj = {
					...a,
					...b
				};
				for (const key of sharedKeys) {
					const sharedValue = mergeValues(a[key], b[key]);
					if (!sharedValue.valid) return {
						valid: false,
						mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
					};
					newObj[key] = sharedValue.data;
				}
				return {
					valid: true,
					data: newObj
				};
			}
			if (Array.isArray(a) && Array.isArray(b)) {
				if (a.length !== b.length) return {
					valid: false,
					mergeErrorPath: []
				};
				const newArray = [];
				for (let index = 0; index < a.length; index++) {
					const itemA = a[index];
					const itemB = b[index];
					const sharedValue = mergeValues(itemA, itemB);
					if (!sharedValue.valid) return {
						valid: false,
						mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
					};
					newArray.push(sharedValue.data);
				}
				return {
					valid: true,
					data: newArray
				};
			}
			return {
				valid: false,
				mergeErrorPath: []
			};
		}
		function handleIntersectionResults(result, left, right) {
			const unrecKeys = /* @__PURE__ */ new Map();
			let unrecIssue;
			for (const iss of left.issues) if (iss.code === "unrecognized_keys") {
				unrecIssue ?? (unrecIssue = iss);
				for (const k of iss.keys) {
					if (!unrecKeys.has(k)) unrecKeys.set(k, {});
					unrecKeys.get(k).l = true;
				}
			} else result.issues.push(iss);
			for (const iss of right.issues) if (iss.code === "unrecognized_keys") for (const k of iss.keys) {
				if (!unrecKeys.has(k)) unrecKeys.set(k, {});
				unrecKeys.get(k).r = true;
			}
			else result.issues.push(iss);
			const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
			if (bothKeys.length && unrecIssue) result.issues.push({
				...unrecIssue,
				keys: bothKeys
			});
			if (aborted(result)) return result;
			const merged = mergeValues(left.value, right.value);
			if (!merged.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
			result.value = merged.data;
			return result;
		}
		const $ZodEnum = /*@__PURE__*/ $constructor("$ZodEnum", (inst, def) => {
			$ZodType.init(inst, def);
			const values = getEnumValues(def.entries);
			const valuesSet = new Set(values);
			inst._zod.values = valuesSet;
			inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
			inst._zod.parse = (payload, _ctx) => {
				const input = payload.value;
				if (valuesSet.has(input)) return payload;
				payload.issues.push({
					code: "invalid_value",
					values,
					input,
					inst
				});
				return payload;
			};
		});
		const $ZodTransform = /*@__PURE__*/ $constructor("$ZodTransform", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
				const _out = def.transform(payload.value, payload);
				if (ctx.async) return (_out instanceof Promise ? _out : Promise.resolve(_out)).then((output) => {
					payload.value = output;
					payload.fallback = true;
					return payload;
				});
				if (_out instanceof Promise) throw new $ZodAsyncError();
				payload.value = _out;
				payload.fallback = true;
				return payload;
			};
		});
		function handleOptionalResult(result, input) {
			if (input === void 0 && (result.issues.length || result.fallback)) return {
				issues: [],
				value: void 0
			};
			return result;
		}
		const $ZodOptional = /*@__PURE__*/ $constructor("$ZodOptional", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			inst._zod.optout = "optional";
			defineLazy(inst._zod, "values", () => {
				return def.innerType._zod.values ? new Set([...def.innerType._zod.values, void 0]) : void 0;
			});
			defineLazy(inst._zod, "pattern", () => {
				const pattern = def.innerType._zod.pattern;
				return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
			});
			inst._zod.parse = (payload, ctx) => {
				if (def.innerType._zod.optin === "optional") {
					const input = payload.value;
					const result = def.innerType._zod.run(payload, ctx);
					if (result instanceof Promise) return result.then((r) => handleOptionalResult(r, input));
					return handleOptionalResult(result, input);
				}
				if (payload.value === void 0) return payload;
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodExactOptional = /*@__PURE__*/ $constructor("$ZodExactOptional", (inst, def) => {
			$ZodOptional.init(inst, def);
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
			inst._zod.parse = (payload, ctx) => {
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodNullable = /*@__PURE__*/ $constructor("$ZodNullable", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
			defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
			defineLazy(inst._zod, "pattern", () => {
				const pattern = def.innerType._zod.pattern;
				return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
			});
			defineLazy(inst._zod, "values", () => {
				return def.innerType._zod.values ? new Set([...def.innerType._zod.values, null]) : void 0;
			});
			inst._zod.parse = (payload, ctx) => {
				if (payload.value === null) return payload;
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodDefault = /*@__PURE__*/ $constructor("$ZodDefault", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				if (payload.value === void 0) {
					payload.value = def.defaultValue;
					/**
					* $ZodDefault returns the default value immediately in forward direction.
					* It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */
					return payload;
				}
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then((result) => handleDefaultResult(result, def));
				return handleDefaultResult(result, def);
			};
		});
		function handleDefaultResult(payload, def) {
			if (payload.value === void 0) payload.value = def.defaultValue;
			return payload;
		}
		const $ZodPrefault = /*@__PURE__*/ $constructor("$ZodPrefault", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				if (payload.value === void 0) payload.value = def.defaultValue;
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodNonOptional = /*@__PURE__*/ $constructor("$ZodNonOptional", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "values", () => {
				const v = def.innerType._zod.values;
				return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
			});
			inst._zod.parse = (payload, ctx) => {
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then((result) => handleNonOptionalResult(result, inst));
				return handleNonOptionalResult(result, inst);
			};
		});
		function handleNonOptionalResult(payload, inst) {
			if (!payload.issues.length && payload.value === void 0) payload.issues.push({
				code: "invalid_type",
				expected: "nonoptional",
				input: payload.value,
				inst
			});
			return payload;
		}
		const $ZodCatch = /*@__PURE__*/ $constructor("$ZodCatch", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then((result) => {
					payload.value = result.value;
					if (result.issues.length) {
						payload.value = def.catchValue({
							...payload,
							error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
							input: payload.value
						});
						payload.issues = [];
						payload.fallback = true;
					}
					return payload;
				});
				payload.value = result.value;
				if (result.issues.length) {
					payload.value = def.catchValue({
						...payload,
						error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
						input: payload.value
					});
					payload.issues = [];
					payload.fallback = true;
				}
				return payload;
			};
		});
		const $ZodPipe = /*@__PURE__*/ $constructor("$ZodPipe", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "values", () => def.in._zod.values);
			defineLazy(inst._zod, "optin", () => def.in._zod.optin);
			defineLazy(inst._zod, "optout", () => def.out._zod.optout);
			defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") {
					const right = def.out._zod.run(payload, ctx);
					if (right instanceof Promise) return right.then((right) => handlePipeResult(right, def.in, ctx));
					return handlePipeResult(right, def.in, ctx);
				}
				const left = def.in._zod.run(payload, ctx);
				if (left instanceof Promise) return left.then((left) => handlePipeResult(left, def.out, ctx));
				return handlePipeResult(left, def.out, ctx);
			};
		});
		function handlePipeResult(left, next, ctx) {
			if (left.issues.length) {
				left.aborted = true;
				return left;
			}
			return next._zod.run({
				value: left.value,
				issues: left.issues,
				fallback: left.fallback
			}, ctx);
		}
		const $ZodReadonly = /*@__PURE__*/ $constructor("$ZodReadonly", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
			defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then(handleReadonlyResult);
				return handleReadonlyResult(result);
			};
		});
		function handleReadonlyResult(payload) {
			payload.value = Object.freeze(payload.value);
			return payload;
		}
		const $ZodCustom = /*@__PURE__*/ $constructor("$ZodCustom", (inst, def) => {
			$ZodCheck.init(inst, def);
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, _) => {
				return payload;
			};
			inst._zod.check = (payload) => {
				const input = payload.value;
				const r = def.fn(input);
				if (r instanceof Promise) return r.then((r) => handleRefineResult(r, payload, input, inst));
				handleRefineResult(r, payload, input, inst);
			};
		});
		function handleRefineResult(result, payload, input, inst) {
			if (!result) {
				const _iss = {
					code: "custom",
					input,
					inst,
					path: [...inst._zod.def.path ?? []],
					continue: !inst._zod.def.abort
				};
				if (inst._zod.def.params) _iss.params = inst._zod.def.params;
				payload.issues.push(issue(_iss));
			}
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/registries.js
		var _a;
		var $ZodRegistry = class {
			constructor() {
				this._map = /* @__PURE__ */ new WeakMap();
				this._idmap = /* @__PURE__ */ new Map();
			}
			add(schema, ..._meta) {
				const meta = _meta[0];
				this._map.set(schema, meta);
				if (meta && typeof meta === "object" && "id" in meta) this._idmap.set(meta.id, schema);
				return this;
			}
			clear() {
				this._map = /* @__PURE__ */ new WeakMap();
				this._idmap = /* @__PURE__ */ new Map();
				return this;
			}
			remove(schema) {
				const meta = this._map.get(schema);
				if (meta && typeof meta === "object" && "id" in meta) this._idmap.delete(meta.id);
				this._map.delete(schema);
				return this;
			}
			get(schema) {
				const p = schema._zod.parent;
				if (p) {
					const pm = { ...this.get(p) ?? {} };
					delete pm.id;
					const f = {
						...pm,
						...this._map.get(schema)
					};
					return Object.keys(f).length ? f : void 0;
				}
				return this._map.get(schema);
			}
			has(schema) {
				return this._map.has(schema);
			}
		};
		function registry() {
			return new $ZodRegistry();
		}
		(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
		const globalRegistry = globalThis.__zod_globalRegistry;
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/api.js
		// @__NO_SIDE_EFFECTS__
		function _string(Class, params) {
			return new Class({
				type: "string",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _email(Class, params) {
			return new Class({
				type: "string",
				format: "email",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _guid(Class, params) {
			return new Class({
				type: "string",
				format: "guid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuid(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuidv4(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				version: "v4",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuidv6(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				version: "v6",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuidv7(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				version: "v7",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _url(Class, params) {
			return new Class({
				type: "string",
				format: "url",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _emoji(Class, params) {
			return new Class({
				type: "string",
				format: "emoji",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _nanoid(Class, params) {
			return new Class({
				type: "string",
				format: "nanoid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link _cuid2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		// @__NO_SIDE_EFFECTS__
		function _cuid(Class, params) {
			return new Class({
				type: "string",
				format: "cuid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _cuid2(Class, params) {
			return new Class({
				type: "string",
				format: "cuid2",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ulid(Class, params) {
			return new Class({
				type: "string",
				format: "ulid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _xid(Class, params) {
			return new Class({
				type: "string",
				format: "xid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ksuid(Class, params) {
			return new Class({
				type: "string",
				format: "ksuid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ipv4(Class, params) {
			return new Class({
				type: "string",
				format: "ipv4",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ipv6(Class, params) {
			return new Class({
				type: "string",
				format: "ipv6",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _cidrv4(Class, params) {
			return new Class({
				type: "string",
				format: "cidrv4",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _cidrv6(Class, params) {
			return new Class({
				type: "string",
				format: "cidrv6",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _base64(Class, params) {
			return new Class({
				type: "string",
				format: "base64",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _base64url(Class, params) {
			return new Class({
				type: "string",
				format: "base64url",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _e164(Class, params) {
			return new Class({
				type: "string",
				format: "e164",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _jwt(Class, params) {
			return new Class({
				type: "string",
				format: "jwt",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoDateTime(Class, params) {
			return new Class({
				type: "string",
				format: "datetime",
				check: "string_format",
				offset: false,
				local: false,
				precision: null,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoDate(Class, params) {
			return new Class({
				type: "string",
				format: "date",
				check: "string_format",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoTime(Class, params) {
			return new Class({
				type: "string",
				format: "time",
				check: "string_format",
				precision: null,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoDuration(Class, params) {
			return new Class({
				type: "string",
				format: "duration",
				check: "string_format",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _unknown(Class) {
			return new Class({ type: "unknown" });
		}
		// @__NO_SIDE_EFFECTS__
		function _never(Class, params) {
			return new Class({
				type: "never",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _void$1(Class, params) {
			return new Class({
				type: "void",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _maxLength(maximum, params) {
			return new $ZodCheckMaxLength({
				check: "max_length",
				...normalizeParams(params),
				maximum
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _minLength(minimum, params) {
			return new $ZodCheckMinLength({
				check: "min_length",
				...normalizeParams(params),
				minimum
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _length(length, params) {
			return new $ZodCheckLengthEquals({
				check: "length_equals",
				...normalizeParams(params),
				length
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _regex(pattern, params) {
			return new $ZodCheckRegex({
				check: "string_format",
				format: "regex",
				...normalizeParams(params),
				pattern
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _lowercase(params) {
			return new $ZodCheckLowerCase({
				check: "string_format",
				format: "lowercase",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uppercase(params) {
			return new $ZodCheckUpperCase({
				check: "string_format",
				format: "uppercase",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _includes(includes, params) {
			return new $ZodCheckIncludes({
				check: "string_format",
				format: "includes",
				...normalizeParams(params),
				includes
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _startsWith(prefix, params) {
			return new $ZodCheckStartsWith({
				check: "string_format",
				format: "starts_with",
				...normalizeParams(params),
				prefix
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _endsWith(suffix, params) {
			return new $ZodCheckEndsWith({
				check: "string_format",
				format: "ends_with",
				...normalizeParams(params),
				suffix
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _overwrite(tx) {
			return new $ZodCheckOverwrite({
				check: "overwrite",
				tx
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _normalize(form) {
			return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
		}
		// @__NO_SIDE_EFFECTS__
		function _trim() {
			return /* @__PURE__ */ _overwrite((input) => input.trim());
		}
		// @__NO_SIDE_EFFECTS__
		function _toLowerCase() {
			return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
		}
		// @__NO_SIDE_EFFECTS__
		function _toUpperCase() {
			return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
		}
		// @__NO_SIDE_EFFECTS__
		function _slugify() {
			return /* @__PURE__ */ _overwrite((input) => slugify(input));
		}
		// @__NO_SIDE_EFFECTS__
		function _array(Class, element, params) {
			return new Class({
				type: "array",
				element,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _refine(Class, fn, _params) {
			return new Class({
				type: "custom",
				check: "custom",
				fn,
				...normalizeParams(_params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _superRefine(fn, params) {
			const ch = /* @__PURE__ */ _check((payload) => {
				payload.addIssue = (issue$2) => {
					if (typeof issue$2 === "string") payload.issues.push(issue(issue$2, payload.value, ch._zod.def));
					else {
						const _issue = issue$2;
						if (_issue.fatal) _issue.continue = false;
						_issue.code ?? (_issue.code = "custom");
						_issue.input ?? (_issue.input = payload.value);
						_issue.inst ?? (_issue.inst = ch);
						_issue.continue ?? (_issue.continue = !ch._zod.def.abort);
						payload.issues.push(issue(_issue));
					}
				};
				return fn(payload.value, payload);
			}, params);
			return ch;
		}
		// @__NO_SIDE_EFFECTS__
		function _check(fn, params) {
			const ch = new $ZodCheck({
				check: "custom",
				...normalizeParams(params)
			});
			ch._zod.check = fn;
			return ch;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/to-json-schema.js
		function initializeContext(params) {
			let target = params?.target ?? "draft-2020-12";
			if (target === "draft-4") target = "draft-04";
			if (target === "draft-7") target = "draft-07";
			return {
				processors: params.processors ?? {},
				metadataRegistry: params?.metadata ?? globalRegistry,
				target,
				unrepresentable: params?.unrepresentable ?? "throw",
				override: params?.override ?? (() => {}),
				io: params?.io ?? "output",
				counter: 0,
				seen: /* @__PURE__ */ new Map(),
				cycles: params?.cycles ?? "ref",
				reused: params?.reused ?? "inline",
				external: params?.external ?? void 0
			};
		}
		function process(schema, ctx, _params = {
			path: [],
			schemaPath: []
		}) {
			var _a;
			const def = schema._zod.def;
			const seen = ctx.seen.get(schema);
			if (seen) {
				seen.count++;
				if (_params.schemaPath.includes(schema)) seen.cycle = _params.path;
				return seen.schema;
			}
			const result = {
				schema: {},
				count: 1,
				cycle: void 0,
				path: _params.path
			};
			ctx.seen.set(schema, result);
			const overrideSchema = schema._zod.toJSONSchema?.();
			if (overrideSchema) result.schema = overrideSchema;
			else {
				const params = {
					..._params,
					schemaPath: [..._params.schemaPath, schema],
					path: _params.path
				};
				if (schema._zod.processJSONSchema) schema._zod.processJSONSchema(ctx, result.schema, params);
				else {
					const _json = result.schema;
					const processor = ctx.processors[def.type];
					if (!processor) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
					processor(schema, ctx, _json, params);
				}
				const parent = schema._zod.parent;
				if (parent) {
					if (!result.ref) result.ref = parent;
					process(parent, ctx, params);
					ctx.seen.get(parent).isParent = true;
				}
			}
			const meta = ctx.metadataRegistry.get(schema);
			if (meta) Object.assign(result.schema, meta);
			if (ctx.io === "input" && isTransforming(schema)) {
				delete result.schema.examples;
				delete result.schema.default;
			}
			if (ctx.io === "input" && "_prefault" in result.schema) (_a = result.schema).default ?? (_a.default = result.schema._prefault);
			delete result.schema._prefault;
			return ctx.seen.get(schema).schema;
		}
		function extractDefs(ctx, schema) {
			const root = ctx.seen.get(schema);
			if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
			const idToSchema = /* @__PURE__ */ new Map();
			for (const entry of ctx.seen.entries()) {
				const id = ctx.metadataRegistry.get(entry[0])?.id;
				if (id) {
					const existing = idToSchema.get(id);
					if (existing && existing !== entry[0]) throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
					idToSchema.set(id, entry[0]);
				}
			}
			const makeURI = (entry) => {
				const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
				if (ctx.external) {
					const externalId = ctx.external.registry.get(entry[0])?.id;
					const uriGenerator = ctx.external.uri ?? ((id) => id);
					if (externalId) return { ref: uriGenerator(externalId) };
					const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
					entry[1].defId = id;
					return {
						defId: id,
						ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}`
					};
				}
				if (entry[1] === root) return { ref: "#" };
				const defUriPrefix = `#/${defsSegment}/`;
				const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
				return {
					defId,
					ref: defUriPrefix + defId
				};
			};
			const extractToDef = (entry) => {
				if (entry[1].schema.$ref) return;
				const seen = entry[1];
				const { ref, defId } = makeURI(entry);
				seen.def = { ...seen.schema };
				if (defId) seen.defId = defId;
				const schema = seen.schema;
				for (const key in schema) delete schema[key];
				schema.$ref = ref;
			};
			if (ctx.cycles === "throw") for (const entry of ctx.seen.entries()) {
				const seen = entry[1];
				if (seen.cycle) throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
			}
			for (const entry of ctx.seen.entries()) {
				const seen = entry[1];
				if (schema === entry[0]) {
					extractToDef(entry);
					continue;
				}
				if (ctx.external) {
					const ext = ctx.external.registry.get(entry[0])?.id;
					if (schema !== entry[0] && ext) {
						extractToDef(entry);
						continue;
					}
				}
				if (ctx.metadataRegistry.get(entry[0])?.id) {
					extractToDef(entry);
					continue;
				}
				if (seen.cycle) {
					extractToDef(entry);
					continue;
				}
				if (seen.count > 1) {
					if (ctx.reused === "ref") {
						extractToDef(entry);
						continue;
					}
				}
			}
		}
		function finalize(ctx, schema) {
			const root = ctx.seen.get(schema);
			if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
			const flattenRef = (zodSchema) => {
				const seen = ctx.seen.get(zodSchema);
				if (seen.ref === null) return;
				const schema = seen.def ?? seen.schema;
				const _cached = { ...schema };
				const ref = seen.ref;
				seen.ref = null;
				if (ref) {
					flattenRef(ref);
					const refSeen = ctx.seen.get(ref);
					const refSchema = refSeen.schema;
					if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
						schema.allOf = schema.allOf ?? [];
						schema.allOf.push(refSchema);
					} else Object.assign(schema, refSchema);
					Object.assign(schema, _cached);
					if (zodSchema._zod.parent === ref) for (const key in schema) {
						if (key === "$ref" || key === "allOf") continue;
						if (!(key in _cached)) delete schema[key];
					}
					if (refSchema.$ref && refSeen.def) for (const key in schema) {
						if (key === "$ref" || key === "allOf") continue;
						if (key in refSeen.def && JSON.stringify(schema[key]) === JSON.stringify(refSeen.def[key])) delete schema[key];
					}
				}
				const parent = zodSchema._zod.parent;
				if (parent && parent !== ref) {
					flattenRef(parent);
					const parentSeen = ctx.seen.get(parent);
					if (parentSeen?.schema.$ref) {
						schema.$ref = parentSeen.schema.$ref;
						if (parentSeen.def) for (const key in schema) {
							if (key === "$ref" || key === "allOf") continue;
							if (key in parentSeen.def && JSON.stringify(schema[key]) === JSON.stringify(parentSeen.def[key])) delete schema[key];
						}
					}
				}
				ctx.override({
					zodSchema,
					jsonSchema: schema,
					path: seen.path ?? []
				});
			};
			for (const entry of [...ctx.seen.entries()].reverse()) flattenRef(entry[0]);
			const result = {};
			if (ctx.target === "draft-2020-12") result.$schema = "https://json-schema.org/draft/2020-12/schema";
			else if (ctx.target === "draft-07") result.$schema = "http://json-schema.org/draft-07/schema#";
			else if (ctx.target === "draft-04") result.$schema = "http://json-schema.org/draft-04/schema#";
			else if (ctx.target === "openapi-3.0") {}
			if (ctx.external?.uri) {
				const id = ctx.external.registry.get(schema)?.id;
				if (!id) throw new Error("Schema is missing an `id` property");
				result.$id = ctx.external.uri(id);
			}
			Object.assign(result, root.def ?? root.schema);
			const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
			if (rootMetaId !== void 0 && result.id === rootMetaId) delete result.id;
			const defs = ctx.external?.defs ?? {};
			for (const entry of ctx.seen.entries()) {
				const seen = entry[1];
				if (seen.def && seen.defId) {
					if (seen.def.id === seen.defId) delete seen.def.id;
					defs[seen.defId] = seen.def;
				}
			}
			if (ctx.external) {} else if (Object.keys(defs).length > 0) if (ctx.target === "draft-2020-12") result.$defs = defs;
			else result.definitions = defs;
			try {
				const finalized = JSON.parse(JSON.stringify(result));
				Object.defineProperty(finalized, "~standard", {
					value: {
						...schema["~standard"],
						jsonSchema: {
							input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
							output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
						}
					},
					enumerable: false,
					writable: false
				});
				return finalized;
			} catch (_err) {
				throw new Error("Error converting schema to JSON.");
			}
		}
		function isTransforming(_schema, _ctx) {
			const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
			if (ctx.seen.has(_schema)) return false;
			ctx.seen.add(_schema);
			const def = _schema._zod.def;
			if (def.type === "transform") return true;
			if (def.type === "array") return isTransforming(def.element, ctx);
			if (def.type === "set") return isTransforming(def.valueType, ctx);
			if (def.type === "lazy") return isTransforming(def.getter(), ctx);
			if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") return isTransforming(def.innerType, ctx);
			if (def.type === "intersection") return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
			if (def.type === "record" || def.type === "map") return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
			if (def.type === "pipe") {
				if (_schema._zod.traits.has("$ZodCodec")) return true;
				return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
			}
			if (def.type === "object") {
				for (const key in def.shape) if (isTransforming(def.shape[key], ctx)) return true;
				return false;
			}
			if (def.type === "union") {
				for (const option of def.options) if (isTransforming(option, ctx)) return true;
				return false;
			}
			if (def.type === "tuple") {
				for (const item of def.items) if (isTransforming(item, ctx)) return true;
				if (def.rest && isTransforming(def.rest, ctx)) return true;
				return false;
			}
			return false;
		}
		/**
		* Creates a toJSONSchema method for a schema instance.
		* This encapsulates the logic of initializing context, processing, extracting defs, and finalizing.
		*/
		const createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
			const ctx = initializeContext({
				...params,
				processors
			});
			process(schema, ctx);
			extractDefs(ctx, schema);
			return finalize(ctx, schema);
		};
		const createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
			const { libraryOptions, target } = params ?? {};
			const ctx = initializeContext({
				...libraryOptions ?? {},
				target,
				io,
				processors
			});
			process(schema, ctx);
			extractDefs(ctx, schema);
			return finalize(ctx, schema);
		};
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/json-schema-processors.js
		const formatMap = {
			guid: "uuid",
			url: "uri",
			datetime: "date-time",
			json_string: "json-string",
			regex: ""
		};
		const stringProcessor = (schema, ctx, _json, _params) => {
			const json = _json;
			json.type = "string";
			const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
			if (typeof minimum === "number") json.minLength = minimum;
			if (typeof maximum === "number") json.maxLength = maximum;
			if (format) {
				json.format = formatMap[format] ?? format;
				if (json.format === "") delete json.format;
				if (format === "time") delete json.format;
			}
			if (contentEncoding) json.contentEncoding = contentEncoding;
			if (patterns && patterns.size > 0) {
				const regexes = [...patterns];
				if (regexes.length === 1) json.pattern = regexes[0].source;
				else if (regexes.length > 1) json.allOf = [...regexes.map((regex) => ({
					...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
					pattern: regex.source
				}))];
			}
		};
		const voidProcessor = (_schema, ctx, _json, _params) => {
			if (ctx.unrepresentable === "throw") throw new Error("Void cannot be represented in JSON Schema");
		};
		const neverProcessor = (_schema, _ctx, json, _params) => {
			json.not = {};
		};
		const enumProcessor = (schema, _ctx, json, _params) => {
			const def = schema._zod.def;
			const values = getEnumValues(def.entries);
			if (values.every((v) => typeof v === "number")) json.type = "number";
			if (values.every((v) => typeof v === "string")) json.type = "string";
			json.enum = values;
		};
		const customProcessor = (_schema, ctx, _json, _params) => {
			if (ctx.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
		};
		const transformProcessor = (_schema, ctx, _json, _params) => {
			if (ctx.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
		};
		const arrayProcessor = (schema, ctx, _json, params) => {
			const json = _json;
			const def = schema._zod.def;
			const { minimum, maximum } = schema._zod.bag;
			if (typeof minimum === "number") json.minItems = minimum;
			if (typeof maximum === "number") json.maxItems = maximum;
			json.type = "array";
			json.items = process(def.element, ctx, {
				...params,
				path: [...params.path, "items"]
			});
		};
		const objectProcessor = (schema, ctx, _json, params) => {
			const json = _json;
			const def = schema._zod.def;
			json.type = "object";
			json.properties = {};
			const shape = def.shape;
			for (const key in shape) json.properties[key] = process(shape[key], ctx, {
				...params,
				path: [
					...params.path,
					"properties",
					key
				]
			});
			const allKeys = new Set(Object.keys(shape));
			const requiredKeys = new Set([...allKeys].filter((key) => {
				const v = def.shape[key]._zod;
				if (ctx.io === "input") return v.optin === void 0;
				else return v.optout === void 0;
			}));
			if (requiredKeys.size > 0) json.required = Array.from(requiredKeys);
			if (def.catchall?._zod.def.type === "never") json.additionalProperties = false;
			else if (!def.catchall) {
				if (ctx.io === "output") json.additionalProperties = false;
			} else if (def.catchall) json.additionalProperties = process(def.catchall, ctx, {
				...params,
				path: [...params.path, "additionalProperties"]
			});
		};
		const unionProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			const isExclusive = def.inclusive === false;
			const options = def.options.map((x, i) => process(x, ctx, {
				...params,
				path: [
					...params.path,
					isExclusive ? "oneOf" : "anyOf",
					i
				]
			}));
			if (isExclusive) json.oneOf = options;
			else json.anyOf = options;
		};
		const intersectionProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			const a = process(def.left, ctx, {
				...params,
				path: [
					...params.path,
					"allOf",
					0
				]
			});
			const b = process(def.right, ctx, {
				...params,
				path: [
					...params.path,
					"allOf",
					1
				]
			});
			const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
			json.allOf = [...isSimpleIntersection(a) ? a.allOf : [a], ...isSimpleIntersection(b) ? b.allOf : [b]];
		};
		const nullableProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			const inner = process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			if (ctx.target === "openapi-3.0") {
				seen.ref = def.innerType;
				json.nullable = true;
			} else json.anyOf = [inner, { type: "null" }];
		};
		const nonoptionalProcessor = (schema, ctx, _json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
		};
		const defaultProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			json.default = JSON.parse(JSON.stringify(def.defaultValue));
		};
		const prefaultProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			if (ctx.io === "input") json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
		};
		const catchProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			let catchValue;
			try {
				catchValue = def.catchValue(void 0);
			} catch {
				throw new Error("Dynamic catch values are not supported in JSON Schema");
			}
			json.default = catchValue;
		};
		const pipeProcessor = (schema, ctx, _json, params) => {
			const def = schema._zod.def;
			const inIsTransform = def.in._zod.traits.has("$ZodTransform");
			const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
			process(innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = innerType;
		};
		const readonlyProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			json.readOnly = true;
		};
		const optionalProcessor = (schema, ctx, _json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
		};
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/iso.js
		const ZodISODateTime = /*@__PURE__*/ $constructor("ZodISODateTime", (inst, def) => {
			$ZodISODateTime.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function datetime(params) {
			return /* @__PURE__ */ _isoDateTime(ZodISODateTime, params);
		}
		const ZodISODate = /*@__PURE__*/ $constructor("ZodISODate", (inst, def) => {
			$ZodISODate.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function date(params) {
			return /* @__PURE__ */ _isoDate(ZodISODate, params);
		}
		const ZodISOTime = /*@__PURE__*/ $constructor("ZodISOTime", (inst, def) => {
			$ZodISOTime.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function time(params) {
			return /* @__PURE__ */ _isoTime(ZodISOTime, params);
		}
		const ZodISODuration = /*@__PURE__*/ $constructor("ZodISODuration", (inst, def) => {
			$ZodISODuration.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function duration(params) {
			return /* @__PURE__ */ _isoDuration(ZodISODuration, params);
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/errors.js
		const initializer = (inst, issues) => {
			$ZodError.init(inst, issues);
			inst.name = "ZodError";
			Object.defineProperties(inst, {
				format: { value: (mapper) => formatError(inst, mapper) },
				flatten: { value: (mapper) => flattenError(inst, mapper) },
				addIssue: { value: (issue) => {
					inst.issues.push(issue);
					inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
				} },
				addIssues: { value: (issues) => {
					inst.issues.push(...issues);
					inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
				} },
				isEmpty: { get() {
					return inst.issues.length === 0;
				} }
			});
		};
		const ZodRealError = /*@__PURE__*/ $constructor("ZodError", initializer, { Parent: Error });
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/parse.js
		const parse$1 = /* @__PURE__ */ _parse(ZodRealError);
		const parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
		const safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
		const safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
		const encode = /* @__PURE__ */ _encode(ZodRealError);
		const decode = /* @__PURE__ */ _decode(ZodRealError);
		const encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
		const decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
		const safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
		const safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
		const safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
		const safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/schemas.js
		const _installedGroups = /* @__PURE__ */ new WeakMap();
		function _installLazyMethods(inst, group, methods) {
			const proto = Object.getPrototypeOf(inst);
			let installed = _installedGroups.get(proto);
			if (!installed) {
				installed = /* @__PURE__ */ new Set();
				_installedGroups.set(proto, installed);
			}
			if (installed.has(group)) return;
			installed.add(group);
			for (const key in methods) {
				const fn = methods[key];
				Object.defineProperty(proto, key, {
					configurable: true,
					enumerable: false,
					get() {
						const bound = fn.bind(this);
						Object.defineProperty(this, key, {
							configurable: true,
							writable: true,
							enumerable: true,
							value: bound
						});
						return bound;
					},
					set(v) {
						Object.defineProperty(this, key, {
							configurable: true,
							writable: true,
							enumerable: true,
							value: v
						});
					}
				});
			}
		}
		const ZodType = /*@__PURE__*/ $constructor("ZodType", (inst, def) => {
			$ZodType.init(inst, def);
			Object.assign(inst["~standard"], { jsonSchema: {
				input: createStandardJSONSchemaMethod(inst, "input"),
				output: createStandardJSONSchemaMethod(inst, "output")
			} });
			inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
			inst.def = def;
			inst.type = def.type;
			Object.defineProperty(inst, "_def", { value: def });
			inst.parse = (data, params) => parse$1(inst, data, params, { callee: inst.parse });
			inst.safeParse = (data, params) => safeParse(inst, data, params);
			inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
			inst.safeParseAsync = async (data, params) => safeParseAsync(inst, data, params);
			inst.spa = inst.safeParseAsync;
			inst.encode = (data, params) => encode(inst, data, params);
			inst.decode = (data, params) => decode(inst, data, params);
			inst.encodeAsync = async (data, params) => encodeAsync(inst, data, params);
			inst.decodeAsync = async (data, params) => decodeAsync(inst, data, params);
			inst.safeEncode = (data, params) => safeEncode(inst, data, params);
			inst.safeDecode = (data, params) => safeDecode(inst, data, params);
			inst.safeEncodeAsync = async (data, params) => safeEncodeAsync(inst, data, params);
			inst.safeDecodeAsync = async (data, params) => safeDecodeAsync(inst, data, params);
			_installLazyMethods(inst, "ZodType", {
				check(...chks) {
					const def = this.def;
					return this.clone(mergeDefs(def, { checks: [...def.checks ?? [], ...chks.map((ch) => typeof ch === "function" ? { _zod: {
						check: ch,
						def: { check: "custom" },
						onattach: []
					} } : ch)] }), { parent: true });
				},
				with(...chks) {
					return this.check(...chks);
				},
				clone(def, params) {
					return clone(this, def, params);
				},
				brand() {
					return this;
				},
				register(reg, meta) {
					reg.add(this, meta);
					return this;
				},
				refine(check, params) {
					return this.check(refine(check, params));
				},
				superRefine(refinement, params) {
					return this.check(superRefine(refinement, params));
				},
				overwrite(fn) {
					return this.check(/* @__PURE__ */ _overwrite(fn));
				},
				optional() {
					return optional(this);
				},
				exactOptional() {
					return exactOptional(this);
				},
				nullable() {
					return nullable(this);
				},
				nullish() {
					return optional(nullable(this));
				},
				nonoptional(params) {
					return nonoptional(this, params);
				},
				array() {
					return array(this);
				},
				or(arg) {
					return union([this, arg]);
				},
				and(arg) {
					return intersection(this, arg);
				},
				transform(tx) {
					return pipe(this, transform(tx));
				},
				default(d) {
					return _default(this, d);
				},
				prefault(d) {
					return prefault(this, d);
				},
				catch(params) {
					return _catch(this, params);
				},
				pipe(target) {
					return pipe(this, target);
				},
				readonly() {
					return readonly(this);
				},
				describe(description) {
					const cl = this.clone();
					globalRegistry.add(cl, { description });
					return cl;
				},
				meta(...args) {
					if (args.length === 0) return globalRegistry.get(this);
					const cl = this.clone();
					globalRegistry.add(cl, args[0]);
					return cl;
				},
				isOptional() {
					return this.safeParse(void 0).success;
				},
				isNullable() {
					return this.safeParse(null).success;
				},
				apply(fn) {
					return fn(this);
				}
			});
			Object.defineProperty(inst, "description", {
				get() {
					return globalRegistry.get(inst)?.description;
				},
				configurable: true
			});
			return inst;
		});
		/** @internal */
		const _ZodString = /*@__PURE__*/ $constructor("_ZodString", (inst, def) => {
			$ZodString.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
			const bag = inst._zod.bag;
			inst.format = bag.format ?? null;
			inst.minLength = bag.minimum ?? null;
			inst.maxLength = bag.maximum ?? null;
			_installLazyMethods(inst, "_ZodString", {
				regex(...args) {
					return this.check(/* @__PURE__ */ _regex(...args));
				},
				includes(...args) {
					return this.check(/* @__PURE__ */ _includes(...args));
				},
				startsWith(...args) {
					return this.check(/* @__PURE__ */ _startsWith(...args));
				},
				endsWith(...args) {
					return this.check(/* @__PURE__ */ _endsWith(...args));
				},
				min(...args) {
					return this.check(/* @__PURE__ */ _minLength(...args));
				},
				max(...args) {
					return this.check(/* @__PURE__ */ _maxLength(...args));
				},
				length(...args) {
					return this.check(/* @__PURE__ */ _length(...args));
				},
				nonempty(...args) {
					return this.check(/* @__PURE__ */ _minLength(1, ...args));
				},
				lowercase(params) {
					return this.check(/* @__PURE__ */ _lowercase(params));
				},
				uppercase(params) {
					return this.check(/* @__PURE__ */ _uppercase(params));
				},
				trim() {
					return this.check(/* @__PURE__ */ _trim());
				},
				normalize(...args) {
					return this.check(/* @__PURE__ */ _normalize(...args));
				},
				toLowerCase() {
					return this.check(/* @__PURE__ */ _toLowerCase());
				},
				toUpperCase() {
					return this.check(/* @__PURE__ */ _toUpperCase());
				},
				slugify() {
					return this.check(/* @__PURE__ */ _slugify());
				}
			});
		});
		const ZodString = /*@__PURE__*/ $constructor("ZodString", (inst, def) => {
			$ZodString.init(inst, def);
			_ZodString.init(inst, def);
			inst.email = (params) => inst.check(/* @__PURE__ */ _email(ZodEmail, params));
			inst.url = (params) => inst.check(/* @__PURE__ */ _url(ZodURL, params));
			inst.jwt = (params) => inst.check(/* @__PURE__ */ _jwt(ZodJWT, params));
			inst.emoji = (params) => inst.check(/* @__PURE__ */ _emoji(ZodEmoji, params));
			inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
			inst.uuid = (params) => inst.check(/* @__PURE__ */ _uuid(ZodUUID, params));
			inst.uuidv4 = (params) => inst.check(/* @__PURE__ */ _uuidv4(ZodUUID, params));
			inst.uuidv6 = (params) => inst.check(/* @__PURE__ */ _uuidv6(ZodUUID, params));
			inst.uuidv7 = (params) => inst.check(/* @__PURE__ */ _uuidv7(ZodUUID, params));
			inst.nanoid = (params) => inst.check(/* @__PURE__ */ _nanoid(ZodNanoID, params));
			inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
			inst.cuid = (params) => inst.check(/* @__PURE__ */ _cuid(ZodCUID, params));
			inst.cuid2 = (params) => inst.check(/* @__PURE__ */ _cuid2(ZodCUID2, params));
			inst.ulid = (params) => inst.check(/* @__PURE__ */ _ulid(ZodULID, params));
			inst.base64 = (params) => inst.check(/* @__PURE__ */ _base64(ZodBase64, params));
			inst.base64url = (params) => inst.check(/* @__PURE__ */ _base64url(ZodBase64URL, params));
			inst.xid = (params) => inst.check(/* @__PURE__ */ _xid(ZodXID, params));
			inst.ksuid = (params) => inst.check(/* @__PURE__ */ _ksuid(ZodKSUID, params));
			inst.ipv4 = (params) => inst.check(/* @__PURE__ */ _ipv4(ZodIPv4, params));
			inst.ipv6 = (params) => inst.check(/* @__PURE__ */ _ipv6(ZodIPv6, params));
			inst.cidrv4 = (params) => inst.check(/* @__PURE__ */ _cidrv4(ZodCIDRv4, params));
			inst.cidrv6 = (params) => inst.check(/* @__PURE__ */ _cidrv6(ZodCIDRv6, params));
			inst.e164 = (params) => inst.check(/* @__PURE__ */ _e164(ZodE164, params));
			inst.datetime = (params) => inst.check(datetime(params));
			inst.date = (params) => inst.check(date(params));
			inst.time = (params) => inst.check(time(params));
			inst.duration = (params) => inst.check(duration(params));
		});
		function string$1(params) {
			return /* @__PURE__ */ _string(ZodString, params);
		}
		const ZodStringFormat = /*@__PURE__*/ $constructor("ZodStringFormat", (inst, def) => {
			$ZodStringFormat.init(inst, def);
			_ZodString.init(inst, def);
		});
		const ZodEmail = /*@__PURE__*/ $constructor("ZodEmail", (inst, def) => {
			$ZodEmail.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodGUID = /*@__PURE__*/ $constructor("ZodGUID", (inst, def) => {
			$ZodGUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodUUID = /*@__PURE__*/ $constructor("ZodUUID", (inst, def) => {
			$ZodUUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodURL = /*@__PURE__*/ $constructor("ZodURL", (inst, def) => {
			$ZodURL.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodEmoji = /*@__PURE__*/ $constructor("ZodEmoji", (inst, def) => {
			$ZodEmoji.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodNanoID = /*@__PURE__*/ $constructor("ZodNanoID", (inst, def) => {
			$ZodNanoID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link ZodCUID2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		const ZodCUID = /*@__PURE__*/ $constructor("ZodCUID", (inst, def) => {
			$ZodCUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodCUID2 = /*@__PURE__*/ $constructor("ZodCUID2", (inst, def) => {
			$ZodCUID2.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodULID = /*@__PURE__*/ $constructor("ZodULID", (inst, def) => {
			$ZodULID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodXID = /*@__PURE__*/ $constructor("ZodXID", (inst, def) => {
			$ZodXID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodKSUID = /*@__PURE__*/ $constructor("ZodKSUID", (inst, def) => {
			$ZodKSUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodIPv4 = /*@__PURE__*/ $constructor("ZodIPv4", (inst, def) => {
			$ZodIPv4.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodIPv6 = /*@__PURE__*/ $constructor("ZodIPv6", (inst, def) => {
			$ZodIPv6.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodCIDRv4 = /*@__PURE__*/ $constructor("ZodCIDRv4", (inst, def) => {
			$ZodCIDRv4.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodCIDRv6 = /*@__PURE__*/ $constructor("ZodCIDRv6", (inst, def) => {
			$ZodCIDRv6.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodBase64 = /*@__PURE__*/ $constructor("ZodBase64", (inst, def) => {
			$ZodBase64.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodBase64URL = /*@__PURE__*/ $constructor("ZodBase64URL", (inst, def) => {
			$ZodBase64URL.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodE164 = /*@__PURE__*/ $constructor("ZodE164", (inst, def) => {
			$ZodE164.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodJWT = /*@__PURE__*/ $constructor("ZodJWT", (inst, def) => {
			$ZodJWT.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodUnknown = /*@__PURE__*/ $constructor("ZodUnknown", (inst, def) => {
			$ZodUnknown.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => void 0;
		});
		function unknown() {
			return /* @__PURE__ */ _unknown(ZodUnknown);
		}
		const ZodNever = /*@__PURE__*/ $constructor("ZodNever", (inst, def) => {
			$ZodNever.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
		});
		function never(params) {
			return /* @__PURE__ */ _never(ZodNever, params);
		}
		const ZodVoid = /*@__PURE__*/ $constructor("ZodVoid", (inst, def) => {
			$ZodVoid.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => voidProcessor(inst, ctx, json, params);
		});
		function _void(params) {
			return /* @__PURE__ */ _void$1(ZodVoid, params);
		}
		const ZodArray = /*@__PURE__*/ $constructor("ZodArray", (inst, def) => {
			$ZodArray.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
			inst.element = def.element;
			_installLazyMethods(inst, "ZodArray", {
				min(n, params) {
					return this.check(/* @__PURE__ */ _minLength(n, params));
				},
				nonempty(params) {
					return this.check(/* @__PURE__ */ _minLength(1, params));
				},
				max(n, params) {
					return this.check(/* @__PURE__ */ _maxLength(n, params));
				},
				length(n, params) {
					return this.check(/* @__PURE__ */ _length(n, params));
				},
				unwrap() {
					return this.element;
				}
			});
		});
		function array(element, params) {
			return /* @__PURE__ */ _array(ZodArray, element, params);
		}
		const ZodObject = /*@__PURE__*/ $constructor("ZodObject", (inst, def) => {
			$ZodObjectJIT.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
			defineLazy(inst, "shape", () => {
				return def.shape;
			});
			_installLazyMethods(inst, "ZodObject", {
				keyof() {
					return _enum(Object.keys(this._zod.def.shape));
				},
				catchall(catchall) {
					return this.clone({
						...this._zod.def,
						catchall
					});
				},
				passthrough() {
					return this.clone({
						...this._zod.def,
						catchall: unknown()
					});
				},
				loose() {
					return this.clone({
						...this._zod.def,
						catchall: unknown()
					});
				},
				strict() {
					return this.clone({
						...this._zod.def,
						catchall: never()
					});
				},
				strip() {
					return this.clone({
						...this._zod.def,
						catchall: void 0
					});
				},
				extend(incoming) {
					return extend(this, incoming);
				},
				safeExtend(incoming) {
					return safeExtend(this, incoming);
				},
				merge(other) {
					return merge$1(this, other);
				},
				pick(mask) {
					return pick(this, mask);
				},
				omit(mask) {
					return omit(this, mask);
				},
				partial(...args) {
					return partial(ZodOptional, this, args[0]);
				},
				required(...args) {
					return required(ZodNonOptional, this, args[0]);
				}
			});
		});
		function object(shape, params) {
			return new ZodObject({
				type: "object",
				shape: shape ?? {},
				...normalizeParams(params)
			});
		}
		const ZodUnion = /*@__PURE__*/ $constructor("ZodUnion", (inst, def) => {
			$ZodUnion.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
			inst.options = def.options;
		});
		function union(options, params) {
			return new ZodUnion({
				type: "union",
				options,
				...normalizeParams(params)
			});
		}
		const ZodIntersection = /*@__PURE__*/ $constructor("ZodIntersection", (inst, def) => {
			$ZodIntersection.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
		});
		function intersection(left, right) {
			return new ZodIntersection({
				type: "intersection",
				left,
				right
			});
		}
		const ZodEnum = /*@__PURE__*/ $constructor("ZodEnum", (inst, def) => {
			$ZodEnum.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
			inst.enum = def.entries;
			inst.options = Object.values(def.entries);
			const keys = new Set(Object.keys(def.entries));
			inst.extract = (values, params) => {
				const newEntries = {};
				for (const value of values) if (keys.has(value)) newEntries[value] = def.entries[value];
				else throw new Error(`Key ${value} not found in enum`);
				return new ZodEnum({
					...def,
					checks: [],
					...normalizeParams(params),
					entries: newEntries
				});
			};
			inst.exclude = (values, params) => {
				const newEntries = { ...def.entries };
				for (const value of values) if (keys.has(value)) delete newEntries[value];
				else throw new Error(`Key ${value} not found in enum`);
				return new ZodEnum({
					...def,
					checks: [],
					...normalizeParams(params),
					entries: newEntries
				});
			};
		});
		function _enum(values, params) {
			return new ZodEnum({
				type: "enum",
				entries: Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values,
				...normalizeParams(params)
			});
		}
		const ZodTransform = /*@__PURE__*/ $constructor("ZodTransform", (inst, def) => {
			$ZodTransform.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
			inst._zod.parse = (payload, _ctx) => {
				if (_ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
				payload.addIssue = (issue$1) => {
					if (typeof issue$1 === "string") payload.issues.push(issue(issue$1, payload.value, def));
					else {
						const _issue = issue$1;
						if (_issue.fatal) _issue.continue = false;
						_issue.code ?? (_issue.code = "custom");
						_issue.input ?? (_issue.input = payload.value);
						_issue.inst ?? (_issue.inst = inst);
						payload.issues.push(issue(_issue));
					}
				};
				const output = def.transform(payload.value, payload);
				if (output instanceof Promise) return output.then((output) => {
					payload.value = output;
					payload.fallback = true;
					return payload;
				});
				payload.value = output;
				payload.fallback = true;
				return payload;
			};
		});
		function transform(fn) {
			return new ZodTransform({
				type: "transform",
				transform: fn
			});
		}
		const ZodOptional = /*@__PURE__*/ $constructor("ZodOptional", (inst, def) => {
			$ZodOptional.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function optional(innerType) {
			return new ZodOptional({
				type: "optional",
				innerType
			});
		}
		const ZodExactOptional = /*@__PURE__*/ $constructor("ZodExactOptional", (inst, def) => {
			$ZodExactOptional.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function exactOptional(innerType) {
			return new ZodExactOptional({
				type: "optional",
				innerType
			});
		}
		const ZodNullable = /*@__PURE__*/ $constructor("ZodNullable", (inst, def) => {
			$ZodNullable.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function nullable(innerType) {
			return new ZodNullable({
				type: "nullable",
				innerType
			});
		}
		const ZodDefault = /*@__PURE__*/ $constructor("ZodDefault", (inst, def) => {
			$ZodDefault.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
			inst.removeDefault = inst.unwrap;
		});
		function _default(innerType, defaultValue) {
			return new ZodDefault({
				type: "default",
				innerType,
				get defaultValue() {
					return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
				}
			});
		}
		const ZodPrefault = /*@__PURE__*/ $constructor("ZodPrefault", (inst, def) => {
			$ZodPrefault.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function prefault(innerType, defaultValue) {
			return new ZodPrefault({
				type: "prefault",
				innerType,
				get defaultValue() {
					return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
				}
			});
		}
		const ZodNonOptional = /*@__PURE__*/ $constructor("ZodNonOptional", (inst, def) => {
			$ZodNonOptional.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function nonoptional(innerType, params) {
			return new ZodNonOptional({
				type: "nonoptional",
				innerType,
				...normalizeParams(params)
			});
		}
		const ZodCatch = /*@__PURE__*/ $constructor("ZodCatch", (inst, def) => {
			$ZodCatch.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
			inst.removeCatch = inst.unwrap;
		});
		function _catch(innerType, catchValue) {
			return new ZodCatch({
				type: "catch",
				innerType,
				catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
			});
		}
		const ZodPipe = /*@__PURE__*/ $constructor("ZodPipe", (inst, def) => {
			$ZodPipe.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
			inst.in = def.in;
			inst.out = def.out;
		});
		function pipe(in_, out) {
			return new ZodPipe({
				type: "pipe",
				in: in_,
				out
			});
		}
		const ZodReadonly = /*@__PURE__*/ $constructor("ZodReadonly", (inst, def) => {
			$ZodReadonly.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function readonly(innerType) {
			return new ZodReadonly({
				type: "readonly",
				innerType
			});
		}
		const ZodCustom = /*@__PURE__*/ $constructor("ZodCustom", (inst, def) => {
			$ZodCustom.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
		});
		function refine(fn, _params = {}) {
			return /* @__PURE__ */ _refine(ZodCustom, fn, _params);
		}
		function superRefine(fn, params) {
			return /* @__PURE__ */ _superRefine(fn, params);
		}
		//#endregion
		//#region lib/typert.remote-client.js
		let _nangeagi_dsh_sop_capsules_sopCapsules_deleteGroup_parameter_0$schema$value;
		const _nangeagi_dsh_sop_capsules_sopCapsules_deleteGroup_parameter_0$schema = () => _nangeagi_dsh_sop_capsules_sopCapsules_deleteGroup_parameter_0$schema$value ??= intersection(string$1(), unknown());
		let _nangeagi_dsh_sop_capsules_sopCapsules_deleteGroup_parameter_1$schema$value;
		const _nangeagi_dsh_sop_capsules_sopCapsules_deleteGroup_parameter_1$schema = () => _nangeagi_dsh_sop_capsules_sopCapsules_deleteGroup_parameter_1$schema$value ??= string$1();
		let _nangeagi_dsh_sop_capsules_sopCapsules_deleteGroup_result$schema$value;
		const _nangeagi_dsh_sop_capsules_sopCapsules_deleteGroup_result$schema = () => _nangeagi_dsh_sop_capsules_sopCapsules_deleteGroup_result$schema$value ??= _void();
		let _nangeagi_dsh_sop_capsules_sopCapsules_getGroup_parameter_0$schema$value;
		const _nangeagi_dsh_sop_capsules_sopCapsules_getGroup_parameter_0$schema = () => _nangeagi_dsh_sop_capsules_sopCapsules_getGroup_parameter_0$schema$value ??= intersection(string$1(), unknown());
		let _nangeagi_dsh_sop_capsules_sopCapsules_getGroup_parameter_1$schema$value;
		const _nangeagi_dsh_sop_capsules_sopCapsules_getGroup_parameter_1$schema = () => _nangeagi_dsh_sop_capsules_sopCapsules_getGroup_parameter_1$schema$value ??= string$1();
		let _nangeagi_dsh_sop_capsules_sopCapsules_getGroup_result$schema$value;
		const _nangeagi_dsh_sop_capsules_sopCapsules_getGroup_result$schema = () => _nangeagi_dsh_sop_capsules_sopCapsules_getGroup_result$schema$value ??= object({
			"id": string$1().readonly(),
			"displayName": string$1().readonly(),
			"capsules": array(object({
				"id": string$1().readonly(),
				"title": string$1().readonly(),
				"body": string$1().readonly()
			})).readonly()
		});
		let _nangeagi_dsh_sop_capsules_sopCapsules_listLibrary_parameter_0$schema$value;
		const _nangeagi_dsh_sop_capsules_sopCapsules_listLibrary_parameter_0$schema = () => _nangeagi_dsh_sop_capsules_sopCapsules_listLibrary_parameter_0$schema$value ??= intersection(string$1(), unknown());
		let _nangeagi_dsh_sop_capsules_sopCapsules_listLibrary_result$schema$value;
		const _nangeagi_dsh_sop_capsules_sopCapsules_listLibrary_result$schema = () => _nangeagi_dsh_sop_capsules_sopCapsules_listLibrary_result$schema$value ??= object({
			"groups": array(object({
				"id": string$1().readonly(),
				"displayName": string$1().readonly()
			})).readonly(),
			"adoptedOrphanIds": array(string$1()).readonly()
		});
		let _nangeagi_dsh_sop_capsules_sopCapsules_reorderGroups_parameter_0$schema$value;
		const _nangeagi_dsh_sop_capsules_sopCapsules_reorderGroups_parameter_0$schema = () => _nangeagi_dsh_sop_capsules_sopCapsules_reorderGroups_parameter_0$schema$value ??= intersection(string$1(), unknown());
		let _nangeagi_dsh_sop_capsules_sopCapsules_reorderGroups_parameter_1$schema$value;
		const _nangeagi_dsh_sop_capsules_sopCapsules_reorderGroups_parameter_1$schema = () => _nangeagi_dsh_sop_capsules_sopCapsules_reorderGroups_parameter_1$schema$value ??= array(string$1());
		let _nangeagi_dsh_sop_capsules_sopCapsules_reorderGroups_result$schema$value;
		const _nangeagi_dsh_sop_capsules_sopCapsules_reorderGroups_result$schema = () => _nangeagi_dsh_sop_capsules_sopCapsules_reorderGroups_result$schema$value ??= _void();
		let _nangeagi_dsh_sop_capsules_sopCapsules_saveGroup_parameter_0$schema$value;
		const _nangeagi_dsh_sop_capsules_sopCapsules_saveGroup_parameter_0$schema = () => _nangeagi_dsh_sop_capsules_sopCapsules_saveGroup_parameter_0$schema$value ??= intersection(string$1(), unknown());
		let _nangeagi_dsh_sop_capsules_sopCapsules_saveGroup_parameter_1$schema$value;
		const _nangeagi_dsh_sop_capsules_sopCapsules_saveGroup_parameter_1$schema = () => _nangeagi_dsh_sop_capsules_sopCapsules_saveGroup_parameter_1$schema$value ??= object({
			"id": string$1().readonly(),
			"displayName": string$1().readonly(),
			"capsules": array(object({
				"id": string$1().readonly(),
				"title": string$1().readonly(),
				"body": string$1().readonly()
			})).readonly()
		});
		let _nangeagi_dsh_sop_capsules_sopCapsules_saveGroup_result$schema$value;
		const _nangeagi_dsh_sop_capsules_sopCapsules_saveGroup_result$schema = () => _nangeagi_dsh_sop_capsules_sopCapsules_saveGroup_result$schema$value ??= _void();
		const TYPERT_REMOTE = {
			package: "@nangeagi/dsh-sop-capsules",
			descriptors: [
				{
					id: "@nangeagi/dsh-sop-capsules#sopCapsules/deleteGroup",
					service: "sopCapsules",
					namespace: "sopCapsules",
					method: "deleteGroup",
					invocation: { kind: "direct" },
					parameters: [{
						name: "sessionId",
						wire: "sessionId",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
							create: _nangeagi_dsh_sop_capsules_sopCapsules_deleteGroup_parameter_0$schema
						}
					}, {
						name: "groupId",
						wire: "groupId",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@nangeagi/dsh-sop-capsules#sopCapsules/deleteGroup:groupId",
							create: _nangeagi_dsh_sop_capsules_sopCapsules_deleteGroup_parameter_1$schema
						}
					}],
					cancellation: { parameter: "signal" },
					result: {
						mode: "strict",
						typeSymbol: "@nangeagi/dsh-sop-capsules#sopCapsules/deleteGroup:result",
						create: _nangeagi_dsh_sop_capsules_sopCapsules_deleteGroup_result$schema
					},
					sourceLocation: {
						"file": "plugins/sop-capsules/src/index.ts",
						"line": 81,
						"column": 9
					}
				},
				{
					id: "@nangeagi/dsh-sop-capsules#sopCapsules/getGroup",
					service: "sopCapsules",
					namespace: "sopCapsules",
					method: "getGroup",
					invocation: { kind: "direct" },
					parameters: [{
						name: "sessionId",
						wire: "sessionId",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
							create: _nangeagi_dsh_sop_capsules_sopCapsules_getGroup_parameter_0$schema
						}
					}, {
						name: "groupId",
						wire: "groupId",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@nangeagi/dsh-sop-capsules#sopCapsules/getGroup:groupId",
							create: _nangeagi_dsh_sop_capsules_sopCapsules_getGroup_parameter_1$schema
						}
					}],
					cancellation: { parameter: "signal" },
					result: {
						mode: "strict",
						typeSymbol: "@nangeagi/dsh-sop-capsules/types#SopCapsuleGroup",
						create: _nangeagi_dsh_sop_capsules_sopCapsules_getGroup_result$schema
					},
					sourceLocation: {
						"file": "plugins/sop-capsules/src/index.ts",
						"line": 55,
						"column": 9
					}
				},
				{
					id: "@nangeagi/dsh-sop-capsules#sopCapsules/listLibrary",
					service: "sopCapsules",
					namespace: "sopCapsules",
					method: "listLibrary",
					invocation: { kind: "direct" },
					parameters: [{
						name: "sessionId",
						wire: "sessionId",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
							create: _nangeagi_dsh_sop_capsules_sopCapsules_listLibrary_parameter_0$schema
						}
					}],
					cancellation: { parameter: "signal" },
					result: {
						mode: "strict",
						typeSymbol: "@nangeagi/dsh-sop-capsules/types#SopLibrarySummary",
						create: _nangeagi_dsh_sop_capsules_sopCapsules_listLibrary_result$schema
					},
					sourceLocation: {
						"file": "plugins/sop-capsules/src/index.ts",
						"line": 42,
						"column": 9
					}
				},
				{
					id: "@nangeagi/dsh-sop-capsules#sopCapsules/reorderGroups",
					service: "sopCapsules",
					namespace: "sopCapsules",
					method: "reorderGroups",
					invocation: { kind: "direct" },
					parameters: [{
						name: "sessionId",
						wire: "sessionId",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
							create: _nangeagi_dsh_sop_capsules_sopCapsules_reorderGroups_parameter_0$schema
						}
					}, {
						name: "groupIds",
						wire: "groupIds",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@nangeagi/dsh-sop-capsules#sopCapsules/reorderGroups:groupIds",
							create: _nangeagi_dsh_sop_capsules_sopCapsules_reorderGroups_parameter_1$schema
						}
					}],
					cancellation: { parameter: "signal" },
					result: {
						mode: "strict",
						typeSymbol: "@nangeagi/dsh-sop-capsules#sopCapsules/reorderGroups:result",
						create: _nangeagi_dsh_sop_capsules_sopCapsules_reorderGroups_result$schema
					},
					sourceLocation: {
						"file": "plugins/sop-capsules/src/index.ts",
						"line": 94,
						"column": 9
					}
				},
				{
					id: "@nangeagi/dsh-sop-capsules#sopCapsules/saveGroup",
					service: "sopCapsules",
					namespace: "sopCapsules",
					method: "saveGroup",
					invocation: { kind: "direct" },
					parameters: [{
						name: "sessionId",
						wire: "sessionId",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
							create: _nangeagi_dsh_sop_capsules_sopCapsules_saveGroup_parameter_0$schema
						}
					}, {
						name: "group",
						wire: "group",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@nangeagi/dsh-sop-capsules/types#SopCapsuleGroup",
							create: _nangeagi_dsh_sop_capsules_sopCapsules_saveGroup_parameter_1$schema
						}
					}],
					cancellation: { parameter: "signal" },
					result: {
						mode: "strict",
						typeSymbol: "@nangeagi/dsh-sop-capsules#sopCapsules/saveGroup:result",
						create: _nangeagi_dsh_sop_capsules_sopCapsules_saveGroup_result$schema
					},
					sourceLocation: {
						"file": "plugins/sop-capsules/src/index.ts",
						"line": 68,
						"column": 9
					}
				}
			]
		};
		//#endregion
		//#region \0dsh-css:/Users/mac/Desktop/agi_code/my-dsh-plugins/plugins/sop-capsules/src/client/SopCapsulesHeaderAction.module.css.mjs
		const css$1 = ".uV1x0G_root{align-items:center;display:inline-flex;position:relative}.uV1x0G_anchor{align-items:center;display:inline-flex}.uV1x0G_trigger{width:28px;height:28px;color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:0;border-radius:28px;justify-content:center;align-items:center;padding:0;display:inline-flex}.uV1x0G_trigger:hover:not(:disabled),.uV1x0G_trigger:focus-visible:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.uV1x0G_trigger:disabled{cursor:default;opacity:.45}.uV1x0G_spinner{animation:.9s linear infinite uV1x0G_sop-capsules-spin}@keyframes uV1x0G_sop-capsules-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}";
		const tagId$1 = "@nangeagi/dsh-sop-capsules/SopCapsulesHeaderAction.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$1) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@nangeagi/dsh-sop-capsules";
			tag.dataset.pluginCss = tagId$1;
			tag.textContent = css$1;
			document.head.appendChild(tag);
		}
		var SopCapsulesHeaderAction_module_css_default = {
			"anchor": "uV1x0G_anchor",
			"root": "uV1x0G_root",
			"sop-capsules-spin": "uV1x0G_sop-capsules-spin",
			"spinner": "uV1x0G_spinner",
			"trigger": "uV1x0G_trigger"
		};
		//#endregion
		//#region src/client/SopCapsulesHeaderAction.tsx
		/** Session-header utility for the workspace SOP capsules panel. */
		/**
		* Icon control in the session header, left of the open-in-app button.
		* @param props - runtime slot currency, locale seat, and injected session verbs.
		* @returns the header action control.
		*/
		function SopCapsulesHeaderAction({ sessionId, useWorkspaces, useSopCapsules, ensureLibrary, openPanel, t }) {
			const hasWorkspace = useWorkspaces((state) => state.items.some((workspace) => workspace.sessionIds.includes(sessionId)));
			const libraryStatus = useSopCapsules((state) => state.libraryStatus);
			const workspaceBlocked = !hasWorkspace || libraryStatus === "no-workspace";
			const loading = hasWorkspace && libraryStatus === "loading";
			(0, react.useEffect)(() => {
				if (!hasWorkspace) return;
				ensureLibrary();
			}, [hasWorkspace, ensureLibrary]);
			const tooltip = workspaceBlocked ? t("header.tooltip.noWorkspace") : t("header.aria");
			const onClick = () => {
				if (workspaceBlocked) return;
				openPanel();
			};
			const trigger = /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
				type: "button",
				className: SopCapsulesHeaderAction_module_css_default.trigger,
				"aria-label": t("header.aria"),
				disabled: workspaceBlocked,
				onClick,
				children: loading ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					"data-sop-capsules-loading": "true",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconLoadingOutlineRegular, {
						size: 14,
						className: SopCapsulesHeaderAction_module_css_default.spinner
					})
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconListPenOutlineRegular, {
					size: 15,
					"aria-hidden": "true"
				})
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: SopCapsulesHeaderAction_module_css_default.root,
				"data-sop-capsules-header": "",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
					label: tooltip,
					side: "bottom",
					delayMs: 400,
					children: workspaceBlocked ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: SopCapsulesHeaderAction_module_css_default.anchor,
						tabIndex: 0,
						children: trigger
					}) : trigger
				})
			});
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/nodes/identity.js
		const ALIAS = Symbol.for("yaml.alias");
		const DOC = Symbol.for("yaml.document");
		const MAP = Symbol.for("yaml.map");
		const PAIR = Symbol.for("yaml.pair");
		const SCALAR$1 = Symbol.for("yaml.scalar");
		const SEQ = Symbol.for("yaml.seq");
		const NODE_TYPE = Symbol.for("yaml.node.type");
		const isAlias = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === ALIAS;
		const isDocument = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === DOC;
		const isMap = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === MAP;
		const isPair = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === PAIR;
		const isScalar = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SCALAR$1;
		const isSeq = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SEQ;
		function isCollection(node) {
			if (node && typeof node === "object") switch (node[NODE_TYPE]) {
				case MAP:
				case SEQ: return true;
			}
			return false;
		}
		function isNode(node) {
			if (node && typeof node === "object") switch (node[NODE_TYPE]) {
				case ALIAS:
				case MAP:
				case SCALAR$1:
				case SEQ: return true;
			}
			return false;
		}
		const hasAnchor = (node) => (isScalar(node) || isCollection(node)) && !!node.anchor;
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/visit.js
		const BREAK$1 = Symbol("break visit");
		const SKIP$1 = Symbol("skip children");
		const REMOVE$1 = Symbol("remove node");
		/**
		* Apply a visitor to an AST node or document.
		*
		* Walks through the tree (depth-first) starting from `node`, calling a
		* `visitor` function with three arguments:
		*   - `key`: For sequence values and map `Pair`, the node's index in the
		*     collection. Within a `Pair`, `'key'` or `'value'`, correspondingly.
		*     `null` for the root node.
		*   - `node`: The current node.
		*   - `path`: The ancestry of the current node.
		*
		* The return value of the visitor may be used to control the traversal:
		*   - `undefined` (default): Do nothing and continue
		*   - `visit.SKIP`: Do not visit the children of this node, continue with next
		*     sibling
		*   - `visit.BREAK`: Terminate traversal completely
		*   - `visit.REMOVE`: Remove the current node, then continue with the next one
		*   - `Node`: Replace the current node, then continue by visiting it
		*   - `number`: While iterating the items of a sequence or map, set the index
		*     of the next step. This is useful especially if the index of the current
		*     node has changed.
		*
		* If `visitor` is a single function, it will be called with all values
		* encountered in the tree, including e.g. `null` values. Alternatively,
		* separate visitor functions may be defined for each `Map`, `Pair`, `Seq`,
		* `Alias` and `Scalar` node. To define the same visitor function for more than
		* one node type, use the `Collection` (map and seq), `Value` (map, seq & scalar)
		* and `Node` (alias, map, seq & scalar) targets. Of all these, only the most
		* specific defined one will be used for each node.
		*/
		function visit$1(node, visitor) {
			const visitor_ = initVisitor(visitor);
			if (isDocument(node)) {
				if (visit_(null, node.contents, visitor_, Object.freeze([node])) === REMOVE$1) node.contents = null;
			} else visit_(null, node, visitor_, Object.freeze([]));
		}
		/** Terminate visit traversal completely */
		visit$1.BREAK = BREAK$1;
		/** Do not visit the children of the current node */
		visit$1.SKIP = SKIP$1;
		/** Remove the current node */
		visit$1.REMOVE = REMOVE$1;
		function visit_(key, node, visitor, path) {
			const ctrl = callVisitor(key, node, visitor, path);
			if (isNode(ctrl) || isPair(ctrl)) {
				replaceNode(key, path, ctrl);
				return visit_(key, ctrl, visitor, path);
			}
			if (typeof ctrl !== "symbol") {
				if (isCollection(node)) {
					path = Object.freeze(path.concat(node));
					for (let i = 0; i < node.items.length; ++i) {
						const ci = visit_(i, node.items[i], visitor, path);
						if (typeof ci === "number") i = ci - 1;
						else if (ci === BREAK$1) return BREAK$1;
						else if (ci === REMOVE$1) {
							node.items.splice(i, 1);
							i -= 1;
						}
					}
				} else if (isPair(node)) {
					path = Object.freeze(path.concat(node));
					const ck = visit_("key", node.key, visitor, path);
					if (ck === BREAK$1) return BREAK$1;
					else if (ck === REMOVE$1) node.key = null;
					const cv = visit_("value", node.value, visitor, path);
					if (cv === BREAK$1) return BREAK$1;
					else if (cv === REMOVE$1) node.value = null;
				}
			}
			return ctrl;
		}
		/**
		* Apply an async visitor to an AST node or document.
		*
		* Walks through the tree (depth-first) starting from `node`, calling a
		* `visitor` function with three arguments:
		*   - `key`: For sequence values and map `Pair`, the node's index in the
		*     collection. Within a `Pair`, `'key'` or `'value'`, correspondingly.
		*     `null` for the root node.
		*   - `node`: The current node.
		*   - `path`: The ancestry of the current node.
		*
		* The return value of the visitor may be used to control the traversal:
		*   - `Promise`: Must resolve to one of the following values
		*   - `undefined` (default): Do nothing and continue
		*   - `visit.SKIP`: Do not visit the children of this node, continue with next
		*     sibling
		*   - `visit.BREAK`: Terminate traversal completely
		*   - `visit.REMOVE`: Remove the current node, then continue with the next one
		*   - `Node`: Replace the current node, then continue by visiting it
		*   - `number`: While iterating the items of a sequence or map, set the index
		*     of the next step. This is useful especially if the index of the current
		*     node has changed.
		*
		* If `visitor` is a single function, it will be called with all values
		* encountered in the tree, including e.g. `null` values. Alternatively,
		* separate visitor functions may be defined for each `Map`, `Pair`, `Seq`,
		* `Alias` and `Scalar` node. To define the same visitor function for more than
		* one node type, use the `Collection` (map and seq), `Value` (map, seq & scalar)
		* and `Node` (alias, map, seq & scalar) targets. Of all these, only the most
		* specific defined one will be used for each node.
		*/
		async function visitAsync(node, visitor) {
			const visitor_ = initVisitor(visitor);
			if (isDocument(node)) {
				if (await visitAsync_(null, node.contents, visitor_, Object.freeze([node])) === REMOVE$1) node.contents = null;
			} else await visitAsync_(null, node, visitor_, Object.freeze([]));
		}
		/** Terminate visit traversal completely */
		visitAsync.BREAK = BREAK$1;
		/** Do not visit the children of the current node */
		visitAsync.SKIP = SKIP$1;
		/** Remove the current node */
		visitAsync.REMOVE = REMOVE$1;
		async function visitAsync_(key, node, visitor, path) {
			const ctrl = await callVisitor(key, node, visitor, path);
			if (isNode(ctrl) || isPair(ctrl)) {
				replaceNode(key, path, ctrl);
				return visitAsync_(key, ctrl, visitor, path);
			}
			if (typeof ctrl !== "symbol") {
				if (isCollection(node)) {
					path = Object.freeze(path.concat(node));
					for (let i = 0; i < node.items.length; ++i) {
						const ci = await visitAsync_(i, node.items[i], visitor, path);
						if (typeof ci === "number") i = ci - 1;
						else if (ci === BREAK$1) return BREAK$1;
						else if (ci === REMOVE$1) {
							node.items.splice(i, 1);
							i -= 1;
						}
					}
				} else if (isPair(node)) {
					path = Object.freeze(path.concat(node));
					const ck = await visitAsync_("key", node.key, visitor, path);
					if (ck === BREAK$1) return BREAK$1;
					else if (ck === REMOVE$1) node.key = null;
					const cv = await visitAsync_("value", node.value, visitor, path);
					if (cv === BREAK$1) return BREAK$1;
					else if (cv === REMOVE$1) node.value = null;
				}
			}
			return ctrl;
		}
		function initVisitor(visitor) {
			if (typeof visitor === "object" && (visitor.Collection || visitor.Node || visitor.Value)) return Object.assign({
				Alias: visitor.Node,
				Map: visitor.Node,
				Scalar: visitor.Node,
				Seq: visitor.Node
			}, visitor.Value && {
				Map: visitor.Value,
				Scalar: visitor.Value,
				Seq: visitor.Value
			}, visitor.Collection && {
				Map: visitor.Collection,
				Seq: visitor.Collection
			}, visitor);
			return visitor;
		}
		function callVisitor(key, node, visitor, path) {
			if (typeof visitor === "function") return visitor(key, node, path);
			if (isMap(node)) return visitor.Map?.(key, node, path);
			if (isSeq(node)) return visitor.Seq?.(key, node, path);
			if (isPair(node)) return visitor.Pair?.(key, node, path);
			if (isScalar(node)) return visitor.Scalar?.(key, node, path);
			if (isAlias(node)) return visitor.Alias?.(key, node, path);
		}
		function replaceNode(key, path, node) {
			const parent = path[path.length - 1];
			if (isCollection(parent)) parent.items[key] = node;
			else if (isPair(parent)) if (key === "key") parent.key = node;
			else parent.value = node;
			else if (isDocument(parent)) parent.contents = node;
			else {
				const pt = isAlias(parent) ? "alias" : "scalar";
				throw new Error(`Cannot replace node with ${pt} parent`);
			}
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/doc/directives.js
		const escapeChars = {
			"!": "%21",
			",": "%2C",
			"[": "%5B",
			"]": "%5D",
			"{": "%7B",
			"}": "%7D"
		};
		const escapeTagName = (tn) => tn.replace(/[!,[\]{}]/g, (ch) => escapeChars[ch]);
		var Directives = class Directives {
			constructor(yaml, tags) {
				/**
				* The directives-end/doc-start marker `---`. If `null`, a marker may still be
				* included in the document's stringified representation.
				*/
				this.docStart = null;
				/** The doc-end marker `...`.  */
				this.docEnd = false;
				this.yaml = Object.assign({}, Directives.defaultYaml, yaml);
				this.tags = Object.assign({}, Directives.defaultTags, tags);
			}
			clone() {
				const copy = new Directives(this.yaml, this.tags);
				copy.docStart = this.docStart;
				return copy;
			}
			/**
			* During parsing, get a Directives instance for the current document and
			* update the stream state according to the current version's spec.
			*/
			atDocument() {
				const res = new Directives(this.yaml, this.tags);
				switch (this.yaml.version) {
					case "1.1":
						this.atNextDocument = true;
						break;
					case "1.2":
						this.atNextDocument = false;
						this.yaml = {
							explicit: Directives.defaultYaml.explicit,
							version: "1.2"
						};
						this.tags = Object.assign({}, Directives.defaultTags);
						break;
				}
				return res;
			}
			/**
			* @param onError - May be called even if the action was successful
			* @returns `true` on success
			*/
			add(line, onError) {
				if (this.atNextDocument) {
					this.yaml = {
						explicit: Directives.defaultYaml.explicit,
						version: "1.1"
					};
					this.tags = Object.assign({}, Directives.defaultTags);
					this.atNextDocument = false;
				}
				const parts = line.trim().split(/[ \t]+/);
				const name = parts.shift();
				switch (name) {
					case "%TAG": {
						if (parts.length !== 2) {
							onError(0, "%TAG directive should contain exactly two parts");
							if (parts.length < 2) return false;
						}
						const [handle, prefix] = parts;
						this.tags[handle] = prefix;
						return true;
					}
					case "%YAML": {
						this.yaml.explicit = true;
						if (parts.length !== 1) {
							onError(0, "%YAML directive should contain exactly one part");
							return false;
						}
						const [version] = parts;
						if (version === "1.1" || version === "1.2") {
							this.yaml.version = version;
							return true;
						} else {
							const isValid = /^\d+\.\d+$/.test(version);
							onError(6, `Unsupported YAML version ${version}`, isValid);
							return false;
						}
					}
					default:
						onError(0, `Unknown directive ${name}`, true);
						return false;
				}
			}
			/**
			* Resolves a tag, matching handles to those defined in %TAG directives.
			*
			* @returns Resolved tag, which may also be the non-specific tag `'!'` or a
			*   `'!local'` tag, or `null` if unresolvable.
			*/
			tagName(source, onError) {
				if (source === "!") return "!";
				if (source[0] !== "!") {
					onError(`Not a valid tag: ${source}`);
					return null;
				}
				if (source[1] === "<") {
					const verbatim = source.slice(2, -1);
					if (verbatim === "!" || verbatim === "!!") {
						onError(`Verbatim tags aren't resolved, so ${source} is invalid.`);
						return null;
					}
					if (source[source.length - 1] !== ">") onError("Verbatim tags must end with a >");
					return verbatim;
				}
				const [, handle, suffix] = source.match(/^(.*!)([^!]*)$/s);
				if (!suffix) onError(`The ${source} tag has no suffix`);
				const prefix = this.tags[handle];
				if (prefix) try {
					return prefix + decodeURIComponent(suffix);
				} catch (error) {
					onError(String(error));
					return null;
				}
				if (handle === "!") return source;
				onError(`Could not resolve tag: ${source}`);
				return null;
			}
			/**
			* Given a fully resolved tag, returns its printable string form,
			* taking into account current tag prefixes and defaults.
			*/
			tagString(tag) {
				for (const [handle, prefix] of Object.entries(this.tags)) if (tag.startsWith(prefix)) return handle + escapeTagName(tag.substring(prefix.length));
				return tag[0] === "!" ? tag : `!<${tag}>`;
			}
			toString(doc) {
				const lines = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [];
				const tagEntries = Object.entries(this.tags);
				let tagNames;
				if (doc && tagEntries.length > 0 && isNode(doc.contents)) {
					const tags = {};
					visit$1(doc.contents, (_key, node) => {
						if (isNode(node) && node.tag) tags[node.tag] = true;
					});
					tagNames = Object.keys(tags);
				} else tagNames = [];
				for (const [handle, prefix] of tagEntries) {
					if (handle === "!!" && prefix === "tag:yaml.org,2002:") continue;
					if (!doc || tagNames.some((tn) => tn.startsWith(prefix))) lines.push(`%TAG ${handle} ${prefix}`);
				}
				return lines.join("\n");
			}
		};
		Directives.defaultYaml = {
			explicit: false,
			version: "1.2"
		};
		Directives.defaultTags = { "!!": "tag:yaml.org,2002:" };
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/doc/anchors.js
		/**
		* Verify that the input string is a valid anchor.
		*
		* Will throw on errors.
		*/
		function anchorIsValid(anchor) {
			if (/[\x00-\x19\s,[\]{}]/.test(anchor)) {
				const msg = `Anchor must not contain whitespace or control characters: ${JSON.stringify(anchor)}`;
				throw new Error(msg);
			}
			return true;
		}
		function anchorNames(root) {
			const anchors = /* @__PURE__ */ new Set();
			visit$1(root, { Value(_key, node) {
				if (node.anchor) anchors.add(node.anchor);
			} });
			return anchors;
		}
		/** Find a new anchor name with the given `prefix` and a one-indexed suffix. */
		function findNewAnchor(prefix, exclude) {
			for (let i = 1;; ++i) {
				const name = `${prefix}${i}`;
				if (!exclude.has(name)) return name;
			}
		}
		function createNodeAnchors(doc, prefix) {
			const aliasObjects = [];
			const sourceObjects = /* @__PURE__ */ new Map();
			let prevAnchors = null;
			return {
				onAnchor: (source) => {
					aliasObjects.push(source);
					prevAnchors ?? (prevAnchors = anchorNames(doc));
					const anchor = findNewAnchor(prefix, prevAnchors);
					prevAnchors.add(anchor);
					return anchor;
				},
				/**
				* With circular references, the source node is only resolved after all
				* of its child nodes are. This is why anchors are set only after all of
				* the nodes have been created.
				*/
				setAnchors: () => {
					for (const source of aliasObjects) {
						const ref = sourceObjects.get(source);
						if (typeof ref === "object" && ref.anchor && (isScalar(ref.node) || isCollection(ref.node))) ref.node.anchor = ref.anchor;
						else {
							const error = /* @__PURE__ */ new Error("Failed to resolve repeated object (this should not happen)");
							error.source = source;
							throw error;
						}
					}
				},
				sourceObjects
			};
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/doc/applyReviver.js
		/**
		* Applies the JSON.parse reviver algorithm as defined in the ECMA-262 spec,
		* in section 24.5.1.1 "Runtime Semantics: InternalizeJSONProperty" of the
		* 2021 edition: https://tc39.es/ecma262/#sec-json.parse
		*
		* Includes extensions for handling Map and Set objects.
		*/
		function applyReviver(reviver, obj, key, val) {
			if (val && typeof val === "object") if (Array.isArray(val)) for (let i = 0, len = val.length; i < len; ++i) {
				const v0 = val[i];
				const v1 = applyReviver(reviver, val, String(i), v0);
				if (v1 === void 0) delete val[i];
				else if (v1 !== v0) val[i] = v1;
			}
			else if (val instanceof Map) for (const k of Array.from(val.keys())) {
				const v0 = val.get(k);
				const v1 = applyReviver(reviver, val, k, v0);
				if (v1 === void 0) val.delete(k);
				else if (v1 !== v0) val.set(k, v1);
			}
			else if (val instanceof Set) for (const v0 of Array.from(val)) {
				const v1 = applyReviver(reviver, val, v0, v0);
				if (v1 === void 0) val.delete(v0);
				else if (v1 !== v0) {
					val.delete(v0);
					val.add(v1);
				}
			}
			else for (const [k, v0] of Object.entries(val)) {
				const v1 = applyReviver(reviver, val, k, v0);
				if (v1 === void 0) delete val[k];
				else if (v1 !== v0) val[k] = v1;
			}
			return reviver.call(obj, key, val);
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/nodes/toJS.js
		/**
		* Recursively convert any node or its contents to native JavaScript
		*
		* @param value - The input value
		* @param arg - If `value` defines a `toJSON()` method, use this
		*   as its first argument
		* @param ctx - Conversion context, originally set in Document#toJS(). If
		*   `{ keep: true }` is not set, output should be suitable for JSON
		*   stringification.
		*/
		function toJS(value, arg, ctx) {
			if (Array.isArray(value)) return value.map((v, i) => toJS(v, String(i), ctx));
			if (value && typeof value.toJSON === "function") {
				if (!ctx || !hasAnchor(value)) return value.toJSON(arg, ctx);
				const data = {
					aliasCount: 0,
					count: 1,
					res: void 0
				};
				ctx.anchors.set(value, data);
				ctx.onCreate = (res) => {
					data.res = res;
					delete ctx.onCreate;
				};
				const res = value.toJSON(arg, ctx);
				if (ctx.onCreate) ctx.onCreate(res);
				return res;
			}
			if (typeof value === "bigint" && !ctx?.keep) return Number(value);
			return value;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/nodes/Node.js
		var NodeBase = class {
			constructor(type) {
				Object.defineProperty(this, NODE_TYPE, { value: type });
			}
			/** Create a copy of this node.  */
			clone() {
				const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
				if (this.range) copy.range = this.range.slice();
				return copy;
			}
			/** A plain JavaScript representation of this node. */
			toJS(doc, { mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
				if (!isDocument(doc)) throw new TypeError("A document argument is required");
				const ctx = {
					anchors: /* @__PURE__ */ new Map(),
					doc,
					keep: true,
					mapAsMap: mapAsMap === true,
					mapKeyWarned: false,
					maxAliasCount: typeof maxAliasCount === "number" ? maxAliasCount : 100
				};
				const res = toJS(this, "", ctx);
				if (typeof onAnchor === "function") for (const { count, res } of ctx.anchors.values()) onAnchor(res, count);
				return typeof reviver === "function" ? applyReviver(reviver, { "": res }, "", res) : res;
			}
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/nodes/Alias.js
		var Alias = class extends NodeBase {
			constructor(source) {
				super(ALIAS);
				this.source = source;
				Object.defineProperty(this, "tag", { set() {
					throw new Error("Alias nodes cannot have tags");
				} });
			}
			/**
			* Resolve the value of this alias within `doc`, finding the last
			* instance of the `source` anchor before this node.
			*/
			resolve(doc, ctx) {
				if (ctx?.maxAliasCount === 0) throw new ReferenceError("Alias resolution is disabled");
				let nodes;
				if (ctx?.aliasResolveCache) nodes = ctx.aliasResolveCache;
				else {
					nodes = [];
					visit$1(doc, { Node: (_key, node) => {
						if (isAlias(node) || hasAnchor(node)) nodes.push(node);
					} });
					if (ctx) ctx.aliasResolveCache = nodes;
				}
				let found = void 0;
				for (const node of nodes) {
					if (node === this) break;
					if (node.anchor === this.source) found = node;
				}
				return found;
			}
			toJSON(_arg, ctx) {
				if (!ctx) return { source: this.source };
				const { anchors, doc, maxAliasCount } = ctx;
				const source = this.resolve(doc, ctx);
				if (!source) {
					const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
					throw new ReferenceError(msg);
				}
				let data = anchors.get(source);
				if (!data) {
					toJS(source, null, ctx);
					data = anchors.get(source);
				}
				/* istanbul ignore if */
				if (data?.res === void 0) throw new ReferenceError("This should not happen: Alias anchor was not resolved?");
				if (maxAliasCount >= 0) {
					data.count += 1;
					if (data.aliasCount === 0) data.aliasCount = getAliasCount(doc, source, anchors);
					if (data.count * data.aliasCount > maxAliasCount) throw new ReferenceError("Excessive alias count indicates a resource exhaustion attack");
				}
				return data.res;
			}
			toString(ctx, _onComment, _onChompKeep) {
				const src = `*${this.source}`;
				if (ctx) {
					anchorIsValid(this.source);
					if (ctx.options.verifyAliasOrder && !ctx.anchors.has(this.source)) {
						const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
						throw new Error(msg);
					}
					if (ctx.implicitKey) return `${src} `;
				}
				return src;
			}
		};
		function getAliasCount(doc, node, anchors) {
			if (isAlias(node)) {
				const source = node.resolve(doc);
				const anchor = anchors && source && anchors.get(source);
				return anchor ? anchor.count * anchor.aliasCount : 0;
			} else if (isCollection(node)) {
				let count = 0;
				for (const item of node.items) {
					const c = getAliasCount(doc, item, anchors);
					if (c > count) count = c;
				}
				return count;
			} else if (isPair(node)) {
				const kc = getAliasCount(doc, node.key, anchors);
				const vc = getAliasCount(doc, node.value, anchors);
				return Math.max(kc, vc);
			}
			return 1;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/nodes/Scalar.js
		const isScalarValue = (value) => !value || typeof value !== "function" && typeof value !== "object";
		var Scalar = class extends NodeBase {
			constructor(value) {
				super(SCALAR$1);
				this.value = value;
			}
			toJSON(arg, ctx) {
				return ctx?.keep ? this.value : toJS(this.value, arg, ctx);
			}
			toString() {
				return String(this.value);
			}
		};
		Scalar.BLOCK_FOLDED = "BLOCK_FOLDED";
		Scalar.BLOCK_LITERAL = "BLOCK_LITERAL";
		Scalar.PLAIN = "PLAIN";
		Scalar.QUOTE_DOUBLE = "QUOTE_DOUBLE";
		Scalar.QUOTE_SINGLE = "QUOTE_SINGLE";
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/doc/createNode.js
		const defaultTagPrefix = "tag:yaml.org,2002:";
		function findTagObject(value, tagName, tags) {
			if (tagName) {
				const match = tags.filter((t) => t.tag === tagName);
				const tagObj = match.find((t) => !t.format) ?? match[0];
				if (!tagObj) throw new Error(`Tag ${tagName} not found`);
				return tagObj;
			}
			return tags.find((t) => t.identify?.(value) && !t.format);
		}
		function createNode(value, tagName, ctx) {
			if (isDocument(value)) value = value.contents;
			if (isNode(value)) return value;
			if (isPair(value)) {
				const map = ctx.schema[MAP].createNode?.(ctx.schema, null, ctx);
				map.items.push(value);
				return map;
			}
			if (value instanceof String || value instanceof Number || value instanceof Boolean || typeof BigInt !== "undefined" && value instanceof BigInt) value = value.valueOf();
			const { aliasDuplicateObjects, onAnchor, onTagObj, schema, sourceObjects } = ctx;
			let ref = void 0;
			if (aliasDuplicateObjects && value && typeof value === "object") {
				ref = sourceObjects.get(value);
				if (ref) {
					ref.anchor ?? (ref.anchor = onAnchor(value));
					return new Alias(ref.anchor);
				} else {
					ref = {
						anchor: null,
						node: null
					};
					sourceObjects.set(value, ref);
				}
			}
			if (tagName?.startsWith("!!")) tagName = defaultTagPrefix + tagName.slice(2);
			let tagObj = findTagObject(value, tagName, schema.tags);
			if (!tagObj) {
				if (value && typeof value.toJSON === "function") value = value.toJSON();
				if (!value || typeof value !== "object") {
					const node = new Scalar(value);
					if (ref) ref.node = node;
					return node;
				}
				tagObj = value instanceof Map ? schema[MAP] : Symbol.iterator in Object(value) ? schema[SEQ] : schema[MAP];
			}
			if (onTagObj) {
				onTagObj(tagObj);
				delete ctx.onTagObj;
			}
			const node = tagObj?.createNode ? tagObj.createNode(ctx.schema, value, ctx) : typeof tagObj?.nodeClass?.from === "function" ? tagObj.nodeClass.from(ctx.schema, value, ctx) : new Scalar(value);
			if (tagName) node.tag = tagName;
			else if (!tagObj.default) node.tag = tagObj.tag;
			if (ref) ref.node = node;
			return node;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/nodes/Collection.js
		function collectionFromPath(schema, path, value) {
			let v = value;
			for (let i = path.length - 1; i >= 0; --i) {
				const k = path[i];
				if (typeof k === "number" && Number.isInteger(k) && k >= 0) {
					const a = [];
					a[k] = v;
					v = a;
				} else v = new Map([[k, v]]);
			}
			return createNode(v, void 0, {
				aliasDuplicateObjects: false,
				keepUndefined: false,
				onAnchor: () => {
					throw new Error("This should not happen, please report a bug.");
				},
				schema,
				sourceObjects: /* @__PURE__ */ new Map()
			});
		}
		const isEmptyPath = (path) => path == null || typeof path === "object" && !!path[Symbol.iterator]().next().done;
		var Collection = class extends NodeBase {
			constructor(type, schema) {
				super(type);
				Object.defineProperty(this, "schema", {
					value: schema,
					configurable: true,
					enumerable: false,
					writable: true
				});
			}
			/**
			* Create a copy of this collection.
			*
			* @param schema - If defined, overwrites the original's schema
			*/
			clone(schema) {
				const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
				if (schema) copy.schema = schema;
				copy.items = copy.items.map((it) => isNode(it) || isPair(it) ? it.clone(schema) : it);
				if (this.range) copy.range = this.range.slice();
				return copy;
			}
			/**
			* Adds a value to the collection. For `!!map` and `!!omap` the value must
			* be a Pair instance or a `{ key, value }` object, which may not have a key
			* that already exists in the map.
			*/
			addIn(path, value) {
				if (isEmptyPath(path)) this.add(value);
				else {
					const [key, ...rest] = path;
					const node = this.get(key, true);
					if (isCollection(node)) node.addIn(rest, value);
					else if (node === void 0 && this.schema) this.set(key, collectionFromPath(this.schema, rest, value));
					else throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
				}
			}
			/**
			* Removes a value from the collection.
			* @returns `true` if the item was found and removed.
			*/
			deleteIn(path) {
				const [key, ...rest] = path;
				if (rest.length === 0) return this.delete(key);
				const node = this.get(key, true);
				if (isCollection(node)) return node.deleteIn(rest);
				else throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
			}
			/**
			* Returns item at `key`, or `undefined` if not found. By default unwraps
			* scalar values from their surrounding node; to disable set `keepScalar` to
			* `true` (collections are always returned intact).
			*/
			getIn(path, keepScalar) {
				const [key, ...rest] = path;
				const node = this.get(key, true);
				if (rest.length === 0) return !keepScalar && isScalar(node) ? node.value : node;
				else return isCollection(node) ? node.getIn(rest, keepScalar) : void 0;
			}
			hasAllNullValues(allowScalar) {
				return this.items.every((node) => {
					if (!isPair(node)) return false;
					const n = node.value;
					return n == null || allowScalar && isScalar(n) && n.value == null && !n.commentBefore && !n.comment && !n.tag;
				});
			}
			/**
			* Checks if the collection includes a value with the key `key`.
			*/
			hasIn(path) {
				const [key, ...rest] = path;
				if (rest.length === 0) return this.has(key);
				const node = this.get(key, true);
				return isCollection(node) ? node.hasIn(rest) : false;
			}
			/**
			* Sets a value in this collection. For `!!set`, `value` needs to be a
			* boolean to add/remove the item from the set.
			*/
			setIn(path, value) {
				const [key, ...rest] = path;
				if (rest.length === 0) this.set(key, value);
				else {
					const node = this.get(key, true);
					if (isCollection(node)) node.setIn(rest, value);
					else if (node === void 0 && this.schema) this.set(key, collectionFromPath(this.schema, rest, value));
					else throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
				}
			}
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/stringify/stringifyComment.js
		/**
		* Stringifies a comment.
		*
		* Empty comment lines are left empty,
		* lines consisting of a single space are replaced by `#`,
		* and all other lines are prefixed with a `#`.
		*/
		const stringifyComment = (str) => str.replace(/^(?!$)(?: $)?/gm, "#");
		function indentComment(comment, indent) {
			if (/^\n+$/.test(comment)) return comment.substring(1);
			return indent ? comment.replace(/^(?! *$)/gm, indent) : comment;
		}
		const lineComment = (str, indent, comment) => str.endsWith("\n") ? indentComment(comment, indent) : comment.includes("\n") ? "\n" + indentComment(comment, indent) : (str.endsWith(" ") ? "" : " ") + comment;
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/stringify/foldFlowLines.js
		const FOLD_FLOW = "flow";
		const FOLD_BLOCK = "block";
		const FOLD_QUOTED = "quoted";
		/**
		* Tries to keep input at up to `lineWidth` characters, splitting only on spaces
		* not followed by newlines or spaces unless `mode` is `'quoted'`. Lines are
		* terminated with `\n` and started with `indent`.
		*/
		function foldFlowLines(text, indent, mode = "flow", { indentAtStart, lineWidth = 80, minContentWidth = 20, onFold, onOverflow } = {}) {
			if (!lineWidth || lineWidth < 0) return text;
			if (lineWidth < minContentWidth) minContentWidth = 0;
			const endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
			if (text.length <= endStep) return text;
			const folds = [];
			const escapedFolds = {};
			let end = lineWidth - indent.length;
			if (typeof indentAtStart === "number") if (indentAtStart > lineWidth - Math.max(2, minContentWidth)) folds.push(0);
			else end = lineWidth - indentAtStart;
			let split = void 0;
			let prev = void 0;
			let overflow = false;
			let i = -1;
			let escStart = -1;
			let escEnd = -1;
			if (mode === "block") {
				i = consumeMoreIndentedLines(text, i, indent.length);
				if (i !== -1) end = i + endStep;
			}
			for (let ch; ch = text[i += 1];) {
				if (mode === "quoted" && ch === "\\") {
					escStart = i;
					switch (text[i + 1]) {
						case "x":
							i += 3;
							break;
						case "u":
							i += 5;
							break;
						case "U":
							i += 9;
							break;
						default: i += 1;
					}
					escEnd = i;
				}
				if (ch === "\n") {
					if (mode === "block") i = consumeMoreIndentedLines(text, i, indent.length);
					end = i + indent.length + endStep;
					split = void 0;
				} else {
					if (ch === " " && prev && prev !== " " && prev !== "\n" && prev !== "	") {
						const next = text[i + 1];
						if (next && next !== " " && next !== "\n" && next !== "	") split = i;
					}
					if (i >= end) if (split) {
						folds.push(split);
						end = split + endStep;
						split = void 0;
					} else if (mode === "quoted") {
						while (prev === " " || prev === "	") {
							prev = ch;
							ch = text[i += 1];
							overflow = true;
						}
						const j = i > escEnd + 1 ? i - 2 : escStart - 1;
						if (escapedFolds[j]) return text;
						folds.push(j);
						escapedFolds[j] = true;
						end = j + endStep;
						split = void 0;
					} else overflow = true;
				}
				prev = ch;
			}
			if (overflow && onOverflow) onOverflow();
			if (folds.length === 0) return text;
			if (onFold) onFold();
			let res = text.slice(0, folds[0]);
			for (let i = 0; i < folds.length; ++i) {
				const fold = folds[i];
				const end = folds[i + 1] || text.length;
				if (fold === 0) res = `\n${indent}${text.slice(0, end)}`;
				else {
					if (mode === "quoted" && escapedFolds[fold]) res += `${text[fold]}\\`;
					res += `\n${indent}${text.slice(fold + 1, end)}`;
				}
			}
			return res;
		}
		/**
		* Presumes `i + 1` is at the start of a line
		* @returns index of last newline in more-indented block
		*/
		function consumeMoreIndentedLines(text, i, indent) {
			let end = i;
			let start = i + 1;
			let ch = text[start];
			while (ch === " " || ch === "	") if (i < start + indent) ch = text[++i];
			else {
				do
					ch = text[++i];
				while (ch && ch !== "\n");
				end = i;
				start = i + 1;
				ch = text[start];
			}
			return end;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/stringify/stringifyString.js
		const getFoldOptions = (ctx, isBlock) => ({
			indentAtStart: isBlock ? ctx.indent.length : ctx.indentAtStart,
			lineWidth: ctx.options.lineWidth,
			minContentWidth: ctx.options.minContentWidth
		});
		const containsDocumentMarker = (str) => /^(%|---|\.\.\.)/m.test(str);
		function lineLengthOverLimit(str, lineWidth, indentLength) {
			if (!lineWidth || lineWidth < 0) return false;
			const limit = lineWidth - indentLength;
			const strLen = str.length;
			if (strLen <= limit) return false;
			for (let i = 0, start = 0; i < strLen; ++i) if (str[i] === "\n") {
				if (i - start > limit) return true;
				start = i + 1;
				if (strLen - start <= limit) return false;
			}
			return true;
		}
		function doubleQuotedString(value, ctx) {
			const json = JSON.stringify(value);
			if (ctx.options.doubleQuotedAsJSON) return json;
			const { implicitKey } = ctx;
			const minMultiLineLength = ctx.options.doubleQuotedMinMultiLineLength;
			const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
			let str = "";
			let start = 0;
			for (let i = 0, ch = json[i]; ch; ch = json[++i]) {
				if (ch === " " && json[i + 1] === "\\" && json[i + 2] === "n") {
					str += json.slice(start, i) + "\\ ";
					i += 1;
					start = i;
					ch = "\\";
				}
				if (ch === "\\") switch (json[i + 1]) {
					case "u":
						{
							str += json.slice(start, i);
							const code = json.substr(i + 2, 4);
							switch (code) {
								case "0000":
									str += "\\0";
									break;
								case "0007":
									str += "\\a";
									break;
								case "000b":
									str += "\\v";
									break;
								case "001b":
									str += "\\e";
									break;
								case "0085":
									str += "\\N";
									break;
								case "00a0":
									str += "\\_";
									break;
								case "2028":
									str += "\\L";
									break;
								case "2029":
									str += "\\P";
									break;
								default: if (code.substr(0, 2) === "00") str += "\\x" + code.substr(2);
								else str += json.substr(i, 6);
							}
							i += 5;
							start = i + 1;
						}
						break;
					case "n":
						if (implicitKey || json[i + 2] === "\"" || json.length < minMultiLineLength) i += 1;
						else {
							str += json.slice(start, i) + "\n\n";
							while (json[i + 2] === "\\" && json[i + 3] === "n" && json[i + 4] !== "\"") {
								str += "\n";
								i += 2;
							}
							str += indent;
							if (json[i + 2] === " ") str += "\\";
							i += 1;
							start = i + 1;
						}
						break;
					default: i += 1;
				}
			}
			str = start ? str + json.slice(start) : json;
			return implicitKey ? str : foldFlowLines(str, indent, FOLD_QUOTED, getFoldOptions(ctx, false));
		}
		function singleQuotedString(value, ctx) {
			if (ctx.options.singleQuote === false || ctx.implicitKey && value.includes("\n") || /[ \t]\n|\n[ \t]/.test(value)) return doubleQuotedString(value, ctx);
			const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
			const res = "'" + value.replace(/'/g, "''").replace(/\n+/g, `$&\n${indent}`) + "'";
			return ctx.implicitKey ? res : foldFlowLines(res, indent, FOLD_FLOW, getFoldOptions(ctx, false));
		}
		function quotedString(value, ctx) {
			const { singleQuote } = ctx.options;
			let qs;
			if (singleQuote === false) qs = doubleQuotedString;
			else {
				const hasDouble = value.includes("\"");
				const hasSingle = value.includes("'");
				if (hasDouble && !hasSingle) qs = singleQuotedString;
				else if (hasSingle && !hasDouble) qs = doubleQuotedString;
				else qs = singleQuote ? singleQuotedString : doubleQuotedString;
			}
			return qs(value, ctx);
		}
		let blockEndNewlines;
		try {
			blockEndNewlines = /* @__PURE__ */ new RegExp("(^|(?<!\n))\n+(?!\n|$)", "g");
		} catch {
			blockEndNewlines = /\n+(?!\n|$)/g;
		}
		function blockString({ comment, type, value }, ctx, onComment, onChompKeep) {
			const { blockQuote, commentString, lineWidth } = ctx.options;
			if (!blockQuote || /\n[\t ]+$/.test(value)) return quotedString(value, ctx);
			const indent = ctx.indent || (ctx.forceBlockIndent || containsDocumentMarker(value) ? "  " : "");
			const literal = blockQuote === "literal" ? true : blockQuote === "folded" || type === Scalar.BLOCK_FOLDED ? false : type === Scalar.BLOCK_LITERAL ? true : !lineLengthOverLimit(value, lineWidth, indent.length);
			if (!value) return literal ? "|\n" : ">\n";
			let chomp;
			let endStart;
			for (endStart = value.length; endStart > 0; --endStart) {
				const ch = value[endStart - 1];
				if (ch !== "\n" && ch !== "	" && ch !== " ") break;
			}
			let end = value.substring(endStart);
			const endNlPos = end.indexOf("\n");
			if (endNlPos === -1) chomp = "-";
			else if (value === end || endNlPos !== end.length - 1) {
				chomp = "+";
				if (onChompKeep) onChompKeep();
			} else chomp = "";
			if (end) {
				value = value.slice(0, -end.length);
				if (end[end.length - 1] === "\n") end = end.slice(0, -1);
				end = end.replace(blockEndNewlines, `$&${indent}`);
			}
			let startWithSpace = false;
			let startEnd;
			let startNlPos = -1;
			for (startEnd = 0; startEnd < value.length; ++startEnd) {
				const ch = value[startEnd];
				if (ch === " ") startWithSpace = true;
				else if (ch === "\n") startNlPos = startEnd;
				else break;
			}
			let start = value.substring(0, startNlPos < startEnd ? startNlPos + 1 : startEnd);
			if (start) {
				value = value.substring(start.length);
				start = start.replace(/\n+/g, `$&${indent}`);
			}
			let header = (startWithSpace ? indent ? "2" : "1" : "") + chomp;
			if (comment) {
				header += " " + commentString(comment.replace(/ ?[\r\n]+/g, " "));
				if (onComment) onComment();
			}
			if (!literal) {
				const foldedValue = value.replace(/\n+/g, "\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${indent}`);
				let literalFallback = false;
				const foldOptions = getFoldOptions(ctx, true);
				if (blockQuote !== "folded" && type !== Scalar.BLOCK_FOLDED) foldOptions.onOverflow = () => {
					literalFallback = true;
				};
				const body = foldFlowLines(`${start}${foldedValue}${end}`, indent, FOLD_BLOCK, foldOptions);
				if (!literalFallback) return `>${header}\n${indent}${body}`;
			}
			value = value.replace(/\n+/g, `$&${indent}`);
			return `|${header}\n${indent}${start}${value}${end}`;
		}
		function plainString(item, ctx, onComment, onChompKeep) {
			const { type, value } = item;
			const { actualString, implicitKey, indent, indentStep, inFlow } = ctx;
			if (implicitKey && value.includes("\n") || inFlow && /[[\]{},]/.test(value)) return quotedString(value, ctx);
			if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) return implicitKey || inFlow || !value.includes("\n") ? quotedString(value, ctx) : blockString(item, ctx, onComment, onChompKeep);
			if (!implicitKey && !inFlow && type !== Scalar.PLAIN && value.includes("\n")) return blockString(item, ctx, onComment, onChompKeep);
			if (containsDocumentMarker(value)) {
				if (indent === "") {
					ctx.forceBlockIndent = true;
					return blockString(item, ctx, onComment, onChompKeep);
				} else if (implicitKey && indent === indentStep) return quotedString(value, ctx);
			}
			const str = value.replace(/\n+/g, `$&\n${indent}`);
			if (actualString) {
				const test = (tag) => tag.default && tag.tag !== "tag:yaml.org,2002:str" && tag.test?.test(str);
				const { compat, tags } = ctx.doc.schema;
				if (tags.some(test) || compat?.some(test)) return quotedString(value, ctx);
			}
			return implicitKey ? str : foldFlowLines(str, indent, FOLD_FLOW, getFoldOptions(ctx, false));
		}
		function stringifyString(item, ctx, onComment, onChompKeep) {
			const { implicitKey, inFlow } = ctx;
			const ss = typeof item.value === "string" ? item : Object.assign({}, item, { value: String(item.value) });
			let { type } = item;
			if (type !== Scalar.QUOTE_DOUBLE) {
				if (/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(ss.value)) type = Scalar.QUOTE_DOUBLE;
			}
			const _stringify = (_type) => {
				switch (_type) {
					case Scalar.BLOCK_FOLDED:
					case Scalar.BLOCK_LITERAL: return implicitKey || inFlow ? quotedString(ss.value, ctx) : blockString(ss, ctx, onComment, onChompKeep);
					case Scalar.QUOTE_DOUBLE: return doubleQuotedString(ss.value, ctx);
					case Scalar.QUOTE_SINGLE: return singleQuotedString(ss.value, ctx);
					case Scalar.PLAIN: return plainString(ss, ctx, onComment, onChompKeep);
					default: return null;
				}
			};
			let res = _stringify(type);
			if (res === null) {
				const { defaultKeyType, defaultStringType } = ctx.options;
				const t = implicitKey && defaultKeyType || defaultStringType;
				res = _stringify(t);
				if (res === null) throw new Error(`Unsupported default string type ${t}`);
			}
			return res;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/stringify/stringify.js
		function createStringifyContext(doc, options) {
			const opt = Object.assign({
				blockQuote: true,
				commentString: stringifyComment,
				defaultKeyType: null,
				defaultStringType: "PLAIN",
				directives: null,
				doubleQuotedAsJSON: false,
				doubleQuotedMinMultiLineLength: 40,
				falseStr: "false",
				flowCollectionPadding: true,
				indentSeq: true,
				lineWidth: 80,
				minContentWidth: 20,
				nullStr: "null",
				simpleKeys: false,
				singleQuote: null,
				trailingComma: false,
				trueStr: "true",
				verifyAliasOrder: true
			}, doc.schema.toStringOptions, options);
			let inFlow;
			switch (opt.collectionStyle) {
				case "block":
					inFlow = false;
					break;
				case "flow":
					inFlow = true;
					break;
				default: inFlow = null;
			}
			return {
				anchors: /* @__PURE__ */ new Set(),
				doc,
				flowCollectionPadding: opt.flowCollectionPadding ? " " : "",
				indent: "",
				indentStep: typeof opt.indent === "number" ? " ".repeat(opt.indent) : "  ",
				inFlow,
				options: opt
			};
		}
		function getTagObject(tags, item) {
			if (item.tag) {
				const match = tags.filter((t) => t.tag === item.tag);
				if (match.length > 0) return match.find((t) => t.format === item.format) ?? match[0];
			}
			let tagObj = void 0;
			let obj;
			if (isScalar(item)) {
				obj = item.value;
				let match = tags.filter((t) => t.identify?.(obj));
				if (match.length > 1) {
					const testMatch = match.filter((t) => t.test);
					if (testMatch.length > 0) match = testMatch;
				}
				tagObj = match.find((t) => t.format === item.format) ?? match.find((t) => !t.format);
			} else {
				obj = item;
				tagObj = tags.find((t) => t.nodeClass && obj instanceof t.nodeClass);
			}
			if (!tagObj) {
				const name = obj?.constructor?.name ?? (obj === null ? "null" : typeof obj);
				throw new Error(`Tag not resolved for ${name} value`);
			}
			return tagObj;
		}
		function stringifyProps(node, tagObj, { anchors, doc }) {
			if (!doc.directives) return "";
			const props = [];
			const anchor = (isScalar(node) || isCollection(node)) && node.anchor;
			if (anchor && anchorIsValid(anchor)) {
				anchors.add(anchor);
				props.push(`&${anchor}`);
			}
			const tag = node.tag ?? (tagObj.default ? null : tagObj.tag);
			if (tag) props.push(doc.directives.tagString(tag));
			return props.join(" ");
		}
		function stringify$1(item, ctx, onComment, onChompKeep) {
			if (isPair(item)) return item.toString(ctx, onComment, onChompKeep);
			if (isAlias(item)) {
				if (ctx.doc.directives) return item.toString(ctx);
				if (ctx.resolvedAliases?.has(item)) throw new TypeError(`Cannot stringify circular structure without alias nodes`);
				else {
					if (ctx.resolvedAliases) ctx.resolvedAliases.add(item);
					else ctx.resolvedAliases = new Set([item]);
					item = item.resolve(ctx.doc);
				}
			}
			let tagObj = void 0;
			const node = isNode(item) ? item : ctx.doc.createNode(item, { onTagObj: (o) => tagObj = o });
			tagObj ?? (tagObj = getTagObject(ctx.doc.schema.tags, node));
			const props = stringifyProps(node, tagObj, ctx);
			if (props.length > 0) ctx.indentAtStart = (ctx.indentAtStart ?? 0) + props.length + 1;
			const str = typeof tagObj.stringify === "function" ? tagObj.stringify(node, ctx, onComment, onChompKeep) : isScalar(node) ? stringifyString(node, ctx, onComment, onChompKeep) : node.toString(ctx, onComment, onChompKeep);
			if (!props) return str;
			return isScalar(node) || str[0] === "{" || str[0] === "[" ? `${props} ${str}` : `${props}\n${ctx.indent}${str}`;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/stringify/stringifyPair.js
		function stringifyPair({ key, value }, ctx, onComment, onChompKeep) {
			const { allNullValues, doc, indent, indentStep, options: { commentString, indentSeq, simpleKeys } } = ctx;
			let keyComment = isNode(key) && key.comment || null;
			if (simpleKeys) {
				if (keyComment) throw new Error("With simple keys, key nodes cannot have comments");
				if (isCollection(key) || !isNode(key) && typeof key === "object") throw new Error("With simple keys, collection cannot be used as a key value");
			}
			let explicitKey = !simpleKeys && (!key || keyComment && value == null && !ctx.inFlow || isCollection(key) || (isScalar(key) ? key.type === Scalar.BLOCK_FOLDED || key.type === Scalar.BLOCK_LITERAL : typeof key === "object"));
			ctx = Object.assign({}, ctx, {
				allNullValues: false,
				implicitKey: !explicitKey && (simpleKeys || !allNullValues),
				indent: indent + indentStep
			});
			let keyCommentDone = false;
			let chompKeep = false;
			let str = stringify$1(key, ctx, () => keyCommentDone = true, () => chompKeep = true);
			if (!explicitKey && !ctx.inFlow && str.length > 1024) {
				if (simpleKeys) throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
				explicitKey = true;
			}
			if (ctx.inFlow) {
				if (allNullValues || value == null) {
					if (keyCommentDone && onComment) onComment();
					return str === "" ? "?" : explicitKey ? `? ${str}` : str;
				}
			} else if (allNullValues && !simpleKeys || value == null && explicitKey) {
				str = `? ${str}`;
				if (keyComment && !keyCommentDone) str += lineComment(str, ctx.indent, commentString(keyComment));
				else if (chompKeep && onChompKeep) onChompKeep();
				return str;
			}
			if (keyCommentDone) keyComment = null;
			if (explicitKey) {
				if (keyComment) str += lineComment(str, ctx.indent, commentString(keyComment));
				str = `? ${str}\n${indent}:`;
			} else {
				str = `${str}:`;
				if (keyComment) str += lineComment(str, ctx.indent, commentString(keyComment));
			}
			let vsb, vcb, valueComment;
			if (isNode(value)) {
				vsb = !!value.spaceBefore;
				vcb = value.commentBefore;
				valueComment = value.comment;
			} else {
				vsb = false;
				vcb = null;
				valueComment = null;
				if (value && typeof value === "object") value = doc.createNode(value);
			}
			ctx.implicitKey = false;
			if (!explicitKey && !keyComment && isScalar(value)) ctx.indentAtStart = str.length + 1;
			chompKeep = false;
			if (!indentSeq && indentStep.length >= 2 && !ctx.inFlow && !explicitKey && isSeq(value) && !value.flow && !value.tag && !value.anchor) ctx.indent = ctx.indent.substring(2);
			let valueCommentDone = false;
			const valueStr = stringify$1(value, ctx, () => valueCommentDone = true, () => chompKeep = true);
			let ws = " ";
			if (keyComment || vsb || vcb) {
				ws = vsb ? "\n" : "";
				if (vcb) {
					const cs = commentString(vcb);
					ws += `\n${indentComment(cs, ctx.indent)}`;
				}
				if (valueStr === "" && !ctx.inFlow) {
					if (ws === "\n" && valueComment) ws = "\n\n";
				} else ws += `\n${ctx.indent}`;
			} else if (!explicitKey && isCollection(value)) {
				const vs0 = valueStr[0];
				const nl0 = valueStr.indexOf("\n");
				const hasNewline = nl0 !== -1;
				const flow = ctx.inFlow ?? value.flow ?? value.items.length === 0;
				if (hasNewline || !flow) {
					let hasPropsLine = false;
					if (hasNewline && (vs0 === "&" || vs0 === "!")) {
						let sp0 = valueStr.indexOf(" ");
						if (vs0 === "&" && sp0 !== -1 && sp0 < nl0 && valueStr[sp0 + 1] === "!") sp0 = valueStr.indexOf(" ", sp0 + 1);
						if (sp0 === -1 || nl0 < sp0) hasPropsLine = true;
					}
					if (!hasPropsLine) ws = `\n${ctx.indent}`;
				}
			} else if (valueStr === "" || valueStr[0] === "\n") ws = "";
			str += ws + valueStr;
			if (ctx.inFlow) {
				if (valueCommentDone && onComment) onComment();
			} else if (valueComment && !valueCommentDone) str += lineComment(str, ctx.indent, commentString(valueComment));
			else if (chompKeep && onChompKeep) onChompKeep();
			return str;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/log.js
		function warn(logLevel, warning) {
			if (logLevel === "debug" || logLevel === "warn") console.warn(warning);
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/yaml-1.1/merge.js
		const MERGE_KEY = "<<";
		const merge = {
			identify: (value) => value === MERGE_KEY || typeof value === "symbol" && value.description === MERGE_KEY,
			default: "key",
			tag: "tag:yaml.org,2002:merge",
			test: /^<<$/,
			resolve: () => Object.assign(new Scalar(Symbol(MERGE_KEY)), { addToJSMap: addMergeToJSMap }),
			stringify: () => MERGE_KEY
		};
		const isMergeKey = (ctx, key) => (merge.identify(key) || isScalar(key) && (!key.type || key.type === Scalar.PLAIN) && merge.identify(key.value)) && ctx?.doc.schema.tags.some((tag) => tag.tag === merge.tag && tag.default);
		function addMergeToJSMap(ctx, map, value) {
			const source = resolveAliasValue(ctx, value);
			if (isSeq(source)) for (const it of source.items) mergeValue(ctx, map, it);
			else if (Array.isArray(source)) for (const it of source) mergeValue(ctx, map, it);
			else mergeValue(ctx, map, source);
		}
		function mergeValue(ctx, map, value) {
			const source = resolveAliasValue(ctx, value);
			if (!isMap(source)) throw new Error("Merge sources must be maps or map aliases");
			const srcMap = source.toJSON(null, ctx, Map);
			for (const [key, value] of srcMap) if (map instanceof Map) {
				if (!map.has(key)) map.set(key, value);
			} else if (map instanceof Set) map.add(key);
			else if (!Object.prototype.hasOwnProperty.call(map, key)) Object.defineProperty(map, key, {
				value,
				writable: true,
				enumerable: true,
				configurable: true
			});
			return map;
		}
		function resolveAliasValue(ctx, value) {
			return ctx && isAlias(value) ? value.resolve(ctx.doc, ctx) : value;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/nodes/addPairToJSMap.js
		function addPairToJSMap(ctx, map, { key, value }) {
			if (isNode(key) && key.addToJSMap) key.addToJSMap(ctx, map, value);
			else if (isMergeKey(ctx, key)) addMergeToJSMap(ctx, map, value);
			else {
				const jsKey = toJS(key, "", ctx);
				if (map instanceof Map) map.set(jsKey, toJS(value, jsKey, ctx));
				else if (map instanceof Set) map.add(jsKey);
				else {
					const stringKey = stringifyKey(key, jsKey, ctx);
					const jsValue = toJS(value, stringKey, ctx);
					if (stringKey in map) Object.defineProperty(map, stringKey, {
						value: jsValue,
						writable: true,
						enumerable: true,
						configurable: true
					});
					else map[stringKey] = jsValue;
				}
			}
			return map;
		}
		function stringifyKey(key, jsKey, ctx) {
			if (jsKey === null) return "";
			if (typeof jsKey !== "object") return String(jsKey);
			if (isNode(key) && ctx?.doc) {
				const strCtx = createStringifyContext(ctx.doc, {});
				strCtx.anchors = /* @__PURE__ */ new Set();
				for (const node of ctx.anchors.keys()) strCtx.anchors.add(node.anchor);
				strCtx.inFlow = true;
				strCtx.inStringifyKey = true;
				const strKey = key.toString(strCtx);
				if (!ctx.mapKeyWarned) {
					let jsonStr = JSON.stringify(strKey);
					if (jsonStr.length > 40) jsonStr = jsonStr.substring(0, 36) + "...\"";
					warn(ctx.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${jsonStr}. Set mapAsMap: true to use object keys.`);
					ctx.mapKeyWarned = true;
				}
				return strKey;
			}
			return JSON.stringify(jsKey);
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/nodes/Pair.js
		function createPair(key, value, ctx) {
			return new Pair(createNode(key, void 0, ctx), createNode(value, void 0, ctx));
		}
		var Pair = class Pair {
			constructor(key, value = null) {
				Object.defineProperty(this, NODE_TYPE, { value: PAIR });
				this.key = key;
				this.value = value;
			}
			clone(schema) {
				let { key, value } = this;
				if (isNode(key)) key = key.clone(schema);
				if (isNode(value)) value = value.clone(schema);
				return new Pair(key, value);
			}
			toJSON(_, ctx) {
				return addPairToJSMap(ctx, ctx?.mapAsMap ? /* @__PURE__ */ new Map() : {}, this);
			}
			toString(ctx, onComment, onChompKeep) {
				return ctx?.doc ? stringifyPair(this, ctx, onComment, onChompKeep) : JSON.stringify(this);
			}
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/stringify/stringifyCollection.js
		function stringifyCollection(collection, ctx, options) {
			return (ctx.inFlow ?? collection.flow ? stringifyFlowCollection : stringifyBlockCollection)(collection, ctx, options);
		}
		function stringifyBlockCollection({ comment, items }, ctx, { blockItemPrefix, flowChars, itemIndent, onChompKeep, onComment }) {
			const { indent, options: { commentString } } = ctx;
			const itemCtx = Object.assign({}, ctx, {
				indent: itemIndent,
				type: null
			});
			let chompKeep = false;
			const lines = [];
			for (let i = 0; i < items.length; ++i) {
				const item = items[i];
				let comment = null;
				if (isNode(item)) {
					if (!chompKeep && item.spaceBefore) lines.push("");
					addCommentBefore(ctx, lines, item.commentBefore, chompKeep);
					if (item.comment) comment = item.comment;
				} else if (isPair(item)) {
					const ik = isNode(item.key) ? item.key : null;
					if (ik) {
						if (!chompKeep && ik.spaceBefore) lines.push("");
						addCommentBefore(ctx, lines, ik.commentBefore, chompKeep);
					}
				}
				chompKeep = false;
				let str = stringify$1(item, itemCtx, () => comment = null, () => chompKeep = true);
				if (comment) str += lineComment(str, itemIndent, commentString(comment));
				if (chompKeep && comment) chompKeep = false;
				lines.push(blockItemPrefix + str);
			}
			let str;
			if (lines.length === 0) str = flowChars.start + flowChars.end;
			else {
				str = lines[0];
				for (let i = 1; i < lines.length; ++i) {
					const line = lines[i];
					str += line ? `\n${indent}${line}` : "\n";
				}
			}
			if (comment) {
				str += "\n" + indentComment(commentString(comment), indent);
				if (onComment) onComment();
			} else if (chompKeep && onChompKeep) onChompKeep();
			return str;
		}
		function stringifyFlowCollection({ items }, ctx, { flowChars, itemIndent }) {
			const { indent, indentStep, flowCollectionPadding: fcPadding, options: { commentString } } = ctx;
			itemIndent += indentStep;
			const itemCtx = Object.assign({}, ctx, {
				indent: itemIndent,
				inFlow: true,
				type: null
			});
			let reqNewline = false;
			let linesAtValue = 0;
			const lines = [];
			for (let i = 0; i < items.length; ++i) {
				const item = items[i];
				let comment = null;
				if (isNode(item)) {
					if (item.spaceBefore) lines.push("");
					addCommentBefore(ctx, lines, item.commentBefore, false);
					if (item.comment) comment = item.comment;
				} else if (isPair(item)) {
					const ik = isNode(item.key) ? item.key : null;
					if (ik) {
						if (ik.spaceBefore) lines.push("");
						addCommentBefore(ctx, lines, ik.commentBefore, false);
						if (ik.comment) reqNewline = true;
					}
					const iv = isNode(item.value) ? item.value : null;
					if (iv) {
						if (iv.comment) comment = iv.comment;
						if (iv.commentBefore) reqNewline = true;
					} else if (item.value == null && ik?.comment) comment = ik.comment;
				}
				if (comment) reqNewline = true;
				let str = stringify$1(item, itemCtx, () => comment = null);
				reqNewline || (reqNewline = lines.length > linesAtValue || str.includes("\n"));
				if (i < items.length - 1) str += ",";
				else if (ctx.options.trailingComma) {
					if (ctx.options.lineWidth > 0) reqNewline || (reqNewline = lines.reduce((sum, line) => sum + line.length + 2, 2) + (str.length + 2) > ctx.options.lineWidth);
					if (reqNewline) str += ",";
				}
				if (comment) str += lineComment(str, itemIndent, commentString(comment));
				lines.push(str);
				linesAtValue = lines.length;
			}
			const { start, end } = flowChars;
			if (lines.length === 0) return start + end;
			else {
				if (!reqNewline) {
					const len = lines.reduce((sum, line) => sum + line.length + 2, 2);
					reqNewline = ctx.options.lineWidth > 0 && len > ctx.options.lineWidth;
				}
				if (reqNewline) {
					let str = start;
					for (const line of lines) str += line ? `\n${indentStep}${indent}${line}` : "\n";
					return `${str}\n${indent}${end}`;
				} else return `${start}${fcPadding}${lines.join(" ")}${fcPadding}${end}`;
			}
		}
		function addCommentBefore({ indent, options: { commentString } }, lines, comment, chompKeep) {
			if (comment && chompKeep) comment = comment.replace(/^\n+/, "");
			if (comment) {
				const ic = indentComment(commentString(comment), indent);
				lines.push(ic.trimStart());
			}
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/nodes/YAMLMap.js
		function findPair(items, key) {
			const k = isScalar(key) ? key.value : key;
			for (const it of items) if (isPair(it)) {
				if (it.key === key || it.key === k) return it;
				if (isScalar(it.key) && it.key.value === k) return it;
			}
		}
		var YAMLMap = class extends Collection {
			static get tagName() {
				return "tag:yaml.org,2002:map";
			}
			constructor(schema) {
				super(MAP, schema);
				this.items = [];
			}
			/**
			* A generic collection parsing method that can be extended
			* to other node classes that inherit from YAMLMap
			*/
			static from(schema, obj, ctx) {
				const { keepUndefined, replacer } = ctx;
				const map = new this(schema);
				const add = (key, value) => {
					if (typeof replacer === "function") value = replacer.call(obj, key, value);
					else if (Array.isArray(replacer) && !replacer.includes(key)) return;
					if (value !== void 0 || keepUndefined) map.items.push(createPair(key, value, ctx));
				};
				if (obj instanceof Map) for (const [key, value] of obj) add(key, value);
				else if (obj && typeof obj === "object") for (const key of Object.keys(obj)) add(key, obj[key]);
				if (typeof schema.sortMapEntries === "function") map.items.sort(schema.sortMapEntries);
				return map;
			}
			/**
			* Adds a value to the collection.
			*
			* @param overwrite - If not set `true`, using a key that is already in the
			*   collection will throw. Otherwise, overwrites the previous value.
			*/
			add(pair, overwrite) {
				let _pair;
				if (isPair(pair)) _pair = pair;
				else if (!pair || typeof pair !== "object" || !("key" in pair)) _pair = new Pair(pair, pair?.value);
				else _pair = new Pair(pair.key, pair.value);
				const prev = findPair(this.items, _pair.key);
				const sortEntries = this.schema?.sortMapEntries;
				if (prev) {
					if (!overwrite) throw new Error(`Key ${_pair.key} already set`);
					if (isScalar(prev.value) && isScalarValue(_pair.value)) prev.value.value = _pair.value;
					else prev.value = _pair.value;
				} else if (sortEntries) {
					const i = this.items.findIndex((item) => sortEntries(_pair, item) < 0);
					if (i === -1) this.items.push(_pair);
					else this.items.splice(i, 0, _pair);
				} else this.items.push(_pair);
			}
			delete(key) {
				const it = findPair(this.items, key);
				if (!it) return false;
				return this.items.splice(this.items.indexOf(it), 1).length > 0;
			}
			get(key, keepScalar) {
				const node = findPair(this.items, key)?.value;
				return (!keepScalar && isScalar(node) ? node.value : node) ?? void 0;
			}
			has(key) {
				return !!findPair(this.items, key);
			}
			set(key, value) {
				this.add(new Pair(key, value), true);
			}
			/**
			* @param ctx - Conversion context, originally set in Document#toJS()
			* @param {Class} Type - If set, forces the returned collection type
			* @returns Instance of Type, Map, or Object
			*/
			toJSON(_, ctx, Type) {
				const map = Type ? new Type() : ctx?.mapAsMap ? /* @__PURE__ */ new Map() : {};
				if (ctx?.onCreate) ctx.onCreate(map);
				for (const item of this.items) addPairToJSMap(ctx, map, item);
				return map;
			}
			toString(ctx, onComment, onChompKeep) {
				if (!ctx) return JSON.stringify(this);
				for (const item of this.items) if (!isPair(item)) throw new Error(`Map items must all be pairs; found ${JSON.stringify(item)} instead`);
				if (!ctx.allNullValues && this.hasAllNullValues(false)) ctx = Object.assign({}, ctx, { allNullValues: true });
				return stringifyCollection(this, ctx, {
					blockItemPrefix: "",
					flowChars: {
						start: "{",
						end: "}"
					},
					itemIndent: ctx.indent || "",
					onChompKeep,
					onComment
				});
			}
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/common/map.js
		const map = {
			collection: "map",
			default: true,
			nodeClass: YAMLMap,
			tag: "tag:yaml.org,2002:map",
			resolve(map, onError) {
				if (!isMap(map)) onError("Expected a mapping for this tag");
				return map;
			},
			createNode: (schema, obj, ctx) => YAMLMap.from(schema, obj, ctx)
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/nodes/YAMLSeq.js
		var YAMLSeq = class extends Collection {
			static get tagName() {
				return "tag:yaml.org,2002:seq";
			}
			constructor(schema) {
				super(SEQ, schema);
				this.items = [];
			}
			add(value) {
				this.items.push(value);
			}
			/**
			* Removes a value from the collection.
			*
			* `key` must contain a representation of an integer for this to succeed.
			* It may be wrapped in a `Scalar`.
			*
			* @returns `true` if the item was found and removed.
			*/
			delete(key) {
				const idx = asItemIndex(key);
				if (typeof idx !== "number") return false;
				return this.items.splice(idx, 1).length > 0;
			}
			get(key, keepScalar) {
				const idx = asItemIndex(key);
				if (typeof idx !== "number") return void 0;
				const it = this.items[idx];
				return !keepScalar && isScalar(it) ? it.value : it;
			}
			/**
			* Checks if the collection includes a value with the key `key`.
			*
			* `key` must contain a representation of an integer for this to succeed.
			* It may be wrapped in a `Scalar`.
			*/
			has(key) {
				const idx = asItemIndex(key);
				return typeof idx === "number" && idx < this.items.length;
			}
			/**
			* Sets a value in this collection. For `!!set`, `value` needs to be a
			* boolean to add/remove the item from the set.
			*
			* If `key` does not contain a representation of an integer, this will throw.
			* It may be wrapped in a `Scalar`.
			*/
			set(key, value) {
				const idx = asItemIndex(key);
				if (typeof idx !== "number") throw new Error(`Expected a valid index, not ${key}.`);
				const prev = this.items[idx];
				if (isScalar(prev) && isScalarValue(value)) prev.value = value;
				else this.items[idx] = value;
			}
			toJSON(_, ctx) {
				const seq = [];
				if (ctx?.onCreate) ctx.onCreate(seq);
				let i = 0;
				for (const item of this.items) seq.push(toJS(item, String(i++), ctx));
				return seq;
			}
			toString(ctx, onComment, onChompKeep) {
				if (!ctx) return JSON.stringify(this);
				return stringifyCollection(this, ctx, {
					blockItemPrefix: "- ",
					flowChars: {
						start: "[",
						end: "]"
					},
					itemIndent: (ctx.indent || "") + "  ",
					onChompKeep,
					onComment
				});
			}
			static from(schema, obj, ctx) {
				const { replacer } = ctx;
				const seq = new this(schema);
				if (obj && Symbol.iterator in Object(obj)) {
					let i = 0;
					for (let it of obj) {
						if (typeof replacer === "function") {
							const key = obj instanceof Set ? it : String(i++);
							it = replacer.call(obj, key, it);
						}
						seq.items.push(createNode(it, void 0, ctx));
					}
				}
				return seq;
			}
		};
		function asItemIndex(key) {
			let idx = isScalar(key) ? key.value : key;
			if (idx && typeof idx === "string") idx = Number(idx);
			return typeof idx === "number" && Number.isInteger(idx) && idx >= 0 ? idx : null;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/common/seq.js
		const seq = {
			collection: "seq",
			default: true,
			nodeClass: YAMLSeq,
			tag: "tag:yaml.org,2002:seq",
			resolve(seq, onError) {
				if (!isSeq(seq)) onError("Expected a sequence for this tag");
				return seq;
			},
			createNode: (schema, obj, ctx) => YAMLSeq.from(schema, obj, ctx)
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/common/string.js
		const string = {
			identify: (value) => typeof value === "string",
			default: true,
			tag: "tag:yaml.org,2002:str",
			resolve: (str) => str,
			stringify(item, ctx, onComment, onChompKeep) {
				ctx = Object.assign({ actualString: true }, ctx);
				return stringifyString(item, ctx, onComment, onChompKeep);
			}
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/common/null.js
		const nullTag = {
			identify: (value) => value == null,
			createNode: () => new Scalar(null),
			default: true,
			tag: "tag:yaml.org,2002:null",
			test: /^(?:~|[Nn]ull|NULL)?$/,
			resolve: () => new Scalar(null),
			stringify: ({ source }, ctx) => typeof source === "string" && nullTag.test.test(source) ? source : ctx.options.nullStr
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/core/bool.js
		const boolTag = {
			identify: (value) => typeof value === "boolean",
			default: true,
			tag: "tag:yaml.org,2002:bool",
			test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
			resolve: (str) => new Scalar(str[0] === "t" || str[0] === "T"),
			stringify({ source, value }, ctx) {
				if (source && boolTag.test.test(source)) {
					if (value === (source[0] === "t" || source[0] === "T")) return source;
				}
				return value ? ctx.options.trueStr : ctx.options.falseStr;
			}
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/stringify/stringifyNumber.js
		function stringifyNumber({ format, minFractionDigits, tag, value }) {
			if (typeof value === "bigint") return String(value);
			const num = typeof value === "number" ? value : Number(value);
			if (!isFinite(num)) return isNaN(num) ? ".nan" : num < 0 ? "-.inf" : ".inf";
			let n = Object.is(value, -0) ? "-0" : JSON.stringify(value);
			if (!format && minFractionDigits && (!tag || tag === "tag:yaml.org,2002:float") && /^-?\d/.test(n) && !n.includes("e")) {
				let i = n.indexOf(".");
				if (i < 0) {
					i = n.length;
					n += ".";
				}
				let d = minFractionDigits - (n.length - i - 1);
				while (d-- > 0) n += "0";
			}
			return n;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/core/float.js
		const floatNaN$1 = {
			identify: (value) => typeof value === "number",
			default: true,
			tag: "tag:yaml.org,2002:float",
			test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
			resolve: (str) => str.slice(-3).toLowerCase() === "nan" ? NaN : str[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
			stringify: stringifyNumber
		};
		const floatExp$1 = {
			identify: (value) => typeof value === "number",
			default: true,
			tag: "tag:yaml.org,2002:float",
			format: "EXP",
			test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
			resolve: (str) => parseFloat(str),
			stringify(node) {
				const num = Number(node.value);
				return isFinite(num) ? num.toExponential() : stringifyNumber(node);
			}
		};
		const float$1 = {
			identify: (value) => typeof value === "number",
			default: true,
			tag: "tag:yaml.org,2002:float",
			test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
			resolve(str) {
				const node = new Scalar(parseFloat(str));
				const dot = str.indexOf(".");
				if (dot !== -1 && str[str.length - 1] === "0") node.minFractionDigits = str.length - dot - 1;
				return node;
			},
			stringify: stringifyNumber
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/core/int.js
		const intIdentify$2 = (value) => typeof value === "bigint" || Number.isInteger(value);
		const intResolve$1 = (str, offset, radix, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str.substring(offset), radix);
		function intStringify$1(node, radix, prefix) {
			const { value } = node;
			if (intIdentify$2(value) && value >= 0) return prefix + value.toString(radix);
			return stringifyNumber(node);
		}
		const intOct$1 = {
			identify: (value) => intIdentify$2(value) && value >= 0,
			default: true,
			tag: "tag:yaml.org,2002:int",
			format: "OCT",
			test: /^0o[0-7]+$/,
			resolve: (str, _onError, opt) => intResolve$1(str, 2, 8, opt),
			stringify: (node) => intStringify$1(node, 8, "0o")
		};
		const int$1 = {
			identify: intIdentify$2,
			default: true,
			tag: "tag:yaml.org,2002:int",
			test: /^[-+]?[0-9]+$/,
			resolve: (str, _onError, opt) => intResolve$1(str, 0, 10, opt),
			stringify: stringifyNumber
		};
		const intHex$1 = {
			identify: (value) => intIdentify$2(value) && value >= 0,
			default: true,
			tag: "tag:yaml.org,2002:int",
			format: "HEX",
			test: /^0x[0-9a-fA-F]+$/,
			resolve: (str, _onError, opt) => intResolve$1(str, 2, 16, opt),
			stringify: (node) => intStringify$1(node, 16, "0x")
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/core/schema.js
		const schema$2 = [
			map,
			seq,
			string,
			nullTag,
			boolTag,
			intOct$1,
			int$1,
			intHex$1,
			floatNaN$1,
			floatExp$1,
			float$1
		];
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/json/schema.js
		function intIdentify$1(value) {
			return typeof value === "bigint" || Number.isInteger(value);
		}
		const stringifyJSON = ({ value }) => JSON.stringify(value);
		const jsonScalars = [
			{
				identify: (value) => typeof value === "string",
				default: true,
				tag: "tag:yaml.org,2002:str",
				resolve: (str) => str,
				stringify: stringifyJSON
			},
			{
				identify: (value) => value == null,
				createNode: () => new Scalar(null),
				default: true,
				tag: "tag:yaml.org,2002:null",
				test: /^null$/,
				resolve: () => null,
				stringify: stringifyJSON
			},
			{
				identify: (value) => typeof value === "boolean",
				default: true,
				tag: "tag:yaml.org,2002:bool",
				test: /^true$|^false$/,
				resolve: (str) => str === "true",
				stringify: stringifyJSON
			},
			{
				identify: intIdentify$1,
				default: true,
				tag: "tag:yaml.org,2002:int",
				test: /^-?(?:0|[1-9][0-9]*)$/,
				resolve: (str, _onError, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str, 10),
				stringify: ({ value }) => intIdentify$1(value) ? value.toString() : JSON.stringify(value)
			},
			{
				identify: (value) => typeof value === "number",
				default: true,
				tag: "tag:yaml.org,2002:float",
				test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
				resolve: (str) => parseFloat(str),
				stringify: stringifyJSON
			}
		];
		const schema$1 = [map, seq].concat(jsonScalars, {
			default: true,
			tag: "",
			test: /^/,
			resolve(str, onError) {
				onError(`Unresolved plain scalar ${JSON.stringify(str)}`);
				return str;
			}
		});
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/yaml-1.1/binary.js
		const binary = {
			identify: (value) => value instanceof Uint8Array,
			default: false,
			tag: "tag:yaml.org,2002:binary",
			/**
			* Returns a Buffer in node and an Uint8Array in browsers
			*
			* To use the resulting buffer as an image, you'll want to do something like:
			*
			*   const blob = new Blob([buffer], { type: 'image/jpeg' })
			*   document.querySelector('#photo').src = URL.createObjectURL(blob)
			*/
			resolve(src, onError) {
				if (typeof atob === "function") {
					const str = atob(src.replace(/[\n\r]/g, ""));
					const buffer = new Uint8Array(str.length);
					for (let i = 0; i < str.length; ++i) buffer[i] = str.charCodeAt(i);
					return buffer;
				} else {
					onError("This environment does not support reading binary tags; either Buffer or atob is required");
					return src;
				}
			},
			stringify({ comment, type, value }, ctx, onComment, onChompKeep) {
				if (!value) return "";
				const buf = value;
				let str;
				if (typeof btoa === "function") {
					let s = "";
					for (let i = 0; i < buf.length; ++i) s += String.fromCharCode(buf[i]);
					str = btoa(s);
				} else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
				type ?? (type = Scalar.BLOCK_LITERAL);
				if (type !== Scalar.QUOTE_DOUBLE) {
					const lineWidth = Math.max(ctx.options.lineWidth - ctx.indent.length, ctx.options.minContentWidth);
					const n = Math.ceil(str.length / lineWidth);
					const lines = new Array(n);
					for (let i = 0, o = 0; i < n; ++i, o += lineWidth) lines[i] = str.substr(o, lineWidth);
					str = lines.join(type === Scalar.BLOCK_LITERAL ? "\n" : " ");
				}
				return stringifyString({
					comment,
					type,
					value: str
				}, ctx, onComment, onChompKeep);
			}
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/yaml-1.1/pairs.js
		function resolvePairs(seq, onError) {
			if (isSeq(seq)) for (let i = 0; i < seq.items.length; ++i) {
				let item = seq.items[i];
				if (isPair(item)) continue;
				else if (isMap(item)) {
					if (item.items.length > 1) onError("Each pair must have its own sequence indicator");
					const pair = item.items[0] || new Pair(new Scalar(null));
					if (item.commentBefore) pair.key.commentBefore = pair.key.commentBefore ? `${item.commentBefore}\n${pair.key.commentBefore}` : item.commentBefore;
					if (item.comment) {
						const cn = pair.value ?? pair.key;
						cn.comment = cn.comment ? `${item.comment}\n${cn.comment}` : item.comment;
					}
					item = pair;
				}
				seq.items[i] = isPair(item) ? item : new Pair(item);
			}
			else onError("Expected a sequence for this tag");
			return seq;
		}
		function createPairs(schema, iterable, ctx) {
			const { replacer } = ctx;
			const pairs = new YAMLSeq(schema);
			pairs.tag = "tag:yaml.org,2002:pairs";
			let i = 0;
			if (iterable && Symbol.iterator in Object(iterable)) for (let it of iterable) {
				if (typeof replacer === "function") it = replacer.call(iterable, String(i++), it);
				let key, value;
				if (Array.isArray(it)) if (it.length === 2) {
					key = it[0];
					value = it[1];
				} else throw new TypeError(`Expected [key, value] tuple: ${it}`);
				else if (it && it instanceof Object) {
					const keys = Object.keys(it);
					if (keys.length === 1) {
						key = keys[0];
						value = it[key];
					} else throw new TypeError(`Expected tuple with one key, not ${keys.length} keys`);
				} else key = it;
				pairs.items.push(createPair(key, value, ctx));
			}
			return pairs;
		}
		const pairs = {
			collection: "seq",
			default: false,
			tag: "tag:yaml.org,2002:pairs",
			resolve: resolvePairs,
			createNode: createPairs
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/yaml-1.1/omap.js
		var YAMLOMap = class YAMLOMap extends YAMLSeq {
			constructor() {
				super();
				this.add = YAMLMap.prototype.add.bind(this);
				this.delete = YAMLMap.prototype.delete.bind(this);
				this.get = YAMLMap.prototype.get.bind(this);
				this.has = YAMLMap.prototype.has.bind(this);
				this.set = YAMLMap.prototype.set.bind(this);
				this.tag = YAMLOMap.tag;
			}
			/**
			* If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
			* but TypeScript won't allow widening the signature of a child method.
			*/
			toJSON(_, ctx) {
				if (!ctx) return super.toJSON(_);
				const map = /* @__PURE__ */ new Map();
				if (ctx?.onCreate) ctx.onCreate(map);
				for (const pair of this.items) {
					let key, value;
					if (isPair(pair)) {
						key = toJS(pair.key, "", ctx);
						value = toJS(pair.value, key, ctx);
					} else key = toJS(pair, "", ctx);
					if (map.has(key)) throw new Error("Ordered maps must not include duplicate keys");
					map.set(key, value);
				}
				return map;
			}
			static from(schema, iterable, ctx) {
				const pairs = createPairs(schema, iterable, ctx);
				const omap = new this();
				omap.items = pairs.items;
				return omap;
			}
		};
		YAMLOMap.tag = "tag:yaml.org,2002:omap";
		const omap = {
			collection: "seq",
			identify: (value) => value instanceof Map,
			nodeClass: YAMLOMap,
			default: false,
			tag: "tag:yaml.org,2002:omap",
			resolve(seq, onError) {
				const pairs = resolvePairs(seq, onError);
				const seenKeys = [];
				for (const { key } of pairs.items) if (isScalar(key)) if (seenKeys.includes(key.value)) onError(`Ordered maps must not include duplicate keys: ${key.value}`);
				else seenKeys.push(key.value);
				return Object.assign(new YAMLOMap(), pairs);
			},
			createNode: (schema, iterable, ctx) => YAMLOMap.from(schema, iterable, ctx)
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/yaml-1.1/bool.js
		function boolStringify({ value, source }, ctx) {
			if (source && (value ? trueTag : falseTag).test.test(source)) return source;
			return value ? ctx.options.trueStr : ctx.options.falseStr;
		}
		const trueTag = {
			identify: (value) => value === true,
			default: true,
			tag: "tag:yaml.org,2002:bool",
			test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
			resolve: () => new Scalar(true),
			stringify: boolStringify
		};
		const falseTag = {
			identify: (value) => value === false,
			default: true,
			tag: "tag:yaml.org,2002:bool",
			test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
			resolve: () => new Scalar(false),
			stringify: boolStringify
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/yaml-1.1/float.js
		const floatNaN = {
			identify: (value) => typeof value === "number",
			default: true,
			tag: "tag:yaml.org,2002:float",
			test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
			resolve: (str) => str.slice(-3).toLowerCase() === "nan" ? NaN : str[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
			stringify: stringifyNumber
		};
		const floatExp = {
			identify: (value) => typeof value === "number",
			default: true,
			tag: "tag:yaml.org,2002:float",
			format: "EXP",
			test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
			resolve: (str) => parseFloat(str.replace(/_/g, "")),
			stringify(node) {
				const num = Number(node.value);
				return isFinite(num) ? num.toExponential() : stringifyNumber(node);
			}
		};
		const float = {
			identify: (value) => typeof value === "number",
			default: true,
			tag: "tag:yaml.org,2002:float",
			test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
			resolve(str) {
				const node = new Scalar(parseFloat(str.replace(/_/g, "")));
				const dot = str.indexOf(".");
				if (dot !== -1) {
					const f = str.substring(dot + 1).replace(/_/g, "");
					if (f[f.length - 1] === "0") node.minFractionDigits = f.length;
				}
				return node;
			},
			stringify: stringifyNumber
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/yaml-1.1/int.js
		const intIdentify = (value) => typeof value === "bigint" || Number.isInteger(value);
		function intResolve(str, offset, radix, { intAsBigInt }) {
			const sign = str[0];
			if (sign === "-" || sign === "+") offset += 1;
			str = str.substring(offset).replace(/_/g, "");
			if (intAsBigInt) {
				switch (radix) {
					case 2:
						str = `0b${str}`;
						break;
					case 8:
						str = `0o${str}`;
						break;
					case 16:
						str = `0x${str}`;
						break;
				}
				const n = BigInt(str);
				return sign === "-" ? BigInt(-1) * n : n;
			}
			const n = parseInt(str, radix);
			return sign === "-" ? -1 * n : n;
		}
		function intStringify(node, radix, prefix) {
			const { value } = node;
			if (intIdentify(value)) {
				const str = value.toString(radix);
				return value < 0 ? "-" + prefix + str.substr(1) : prefix + str;
			}
			return stringifyNumber(node);
		}
		const intBin = {
			identify: intIdentify,
			default: true,
			tag: "tag:yaml.org,2002:int",
			format: "BIN",
			test: /^[-+]?0b[0-1_]+$/,
			resolve: (str, _onError, opt) => intResolve(str, 2, 2, opt),
			stringify: (node) => intStringify(node, 2, "0b")
		};
		const intOct = {
			identify: intIdentify,
			default: true,
			tag: "tag:yaml.org,2002:int",
			format: "OCT",
			test: /^[-+]?0[0-7_]+$/,
			resolve: (str, _onError, opt) => intResolve(str, 1, 8, opt),
			stringify: (node) => intStringify(node, 8, "0")
		};
		const int = {
			identify: intIdentify,
			default: true,
			tag: "tag:yaml.org,2002:int",
			test: /^[-+]?[0-9][0-9_]*$/,
			resolve: (str, _onError, opt) => intResolve(str, 0, 10, opt),
			stringify: stringifyNumber
		};
		const intHex = {
			identify: intIdentify,
			default: true,
			tag: "tag:yaml.org,2002:int",
			format: "HEX",
			test: /^[-+]?0x[0-9a-fA-F_]+$/,
			resolve: (str, _onError, opt) => intResolve(str, 2, 16, opt),
			stringify: (node) => intStringify(node, 16, "0x")
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/yaml-1.1/set.js
		var YAMLSet = class YAMLSet extends YAMLMap {
			constructor(schema) {
				super(schema);
				this.tag = YAMLSet.tag;
			}
			add(key) {
				let pair;
				if (isPair(key)) pair = key;
				else if (key && typeof key === "object" && "key" in key && "value" in key && key.value === null) pair = new Pair(key.key, null);
				else pair = new Pair(key, null);
				if (!findPair(this.items, pair.key)) this.items.push(pair);
			}
			/**
			* If `keepPair` is `true`, returns the Pair matching `key`.
			* Otherwise, returns the value of that Pair's key.
			*/
			get(key, keepPair) {
				const pair = findPair(this.items, key);
				return !keepPair && isPair(pair) ? isScalar(pair.key) ? pair.key.value : pair.key : pair;
			}
			set(key, value) {
				if (typeof value !== "boolean") throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof value}`);
				const prev = findPair(this.items, key);
				if (prev && !value) this.items.splice(this.items.indexOf(prev), 1);
				else if (!prev && value) this.items.push(new Pair(key));
			}
			toJSON(_, ctx) {
				return super.toJSON(_, ctx, Set);
			}
			toString(ctx, onComment, onChompKeep) {
				if (!ctx) return JSON.stringify(this);
				if (this.hasAllNullValues(true)) return super.toString(Object.assign({}, ctx, { allNullValues: true }), onComment, onChompKeep);
				else throw new Error("Set items must all have null values");
			}
			static from(schema, iterable, ctx) {
				const { replacer } = ctx;
				const set = new this(schema);
				if (iterable && Symbol.iterator in Object(iterable)) for (let value of iterable) {
					if (typeof replacer === "function") value = replacer.call(iterable, value, value);
					set.items.push(createPair(value, null, ctx));
				}
				return set;
			}
		};
		YAMLSet.tag = "tag:yaml.org,2002:set";
		const set = {
			collection: "map",
			identify: (value) => value instanceof Set,
			nodeClass: YAMLSet,
			default: false,
			tag: "tag:yaml.org,2002:set",
			createNode: (schema, iterable, ctx) => YAMLSet.from(schema, iterable, ctx),
			resolve(map, onError) {
				if (isMap(map)) if (map.hasAllNullValues(true)) return Object.assign(new YAMLSet(), map);
				else onError("Set items must all have null values");
				else onError("Expected a mapping for this tag");
				return map;
			}
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/yaml-1.1/timestamp.js
		/** Internal types handle bigint as number, because TS can't figure it out. */
		function parseSexagesimal(str, asBigInt) {
			const sign = str[0];
			const parts = sign === "-" || sign === "+" ? str.substring(1) : str;
			const num = (n) => asBigInt ? BigInt(n) : Number(n);
			const res = parts.replace(/_/g, "").split(":").reduce((res, p) => res * num(60) + num(p), num(0));
			return sign === "-" ? num(-1) * res : res;
		}
		/**
		* hhhh:mm:ss.sss
		*
		* Internal types handle bigint as number, because TS can't figure it out.
		*/
		function stringifySexagesimal(node) {
			let { value } = node;
			let num = (n) => n;
			if (typeof value === "bigint") num = (n) => BigInt(n);
			else if (isNaN(value) || !isFinite(value)) return stringifyNumber(node);
			let sign = "";
			if (value < 0) {
				sign = "-";
				value *= num(-1);
			}
			const _60 = num(60);
			const parts = [value % _60];
			if (value < 60) parts.unshift(0);
			else {
				value = (value - parts[0]) / _60;
				parts.unshift(value % _60);
				if (value >= 60) {
					value = (value - parts[0]) / _60;
					parts.unshift(value);
				}
			}
			return sign + parts.map((n) => String(n).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
		}
		const intTime = {
			identify: (value) => typeof value === "bigint" || Number.isInteger(value),
			default: true,
			tag: "tag:yaml.org,2002:int",
			format: "TIME",
			test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
			resolve: (str, _onError, { intAsBigInt }) => parseSexagesimal(str, intAsBigInt),
			stringify: stringifySexagesimal
		};
		const floatTime = {
			identify: (value) => typeof value === "number",
			default: true,
			tag: "tag:yaml.org,2002:float",
			format: "TIME",
			test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
			resolve: (str) => parseSexagesimal(str, false),
			stringify: stringifySexagesimal
		};
		const timestamp = {
			identify: (value) => value instanceof Date,
			default: true,
			tag: "tag:yaml.org,2002:timestamp",
			test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
			resolve(str) {
				const match = str.match(timestamp.test);
				if (!match) throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
				const [, year, month, day, hour, minute, second] = match.map(Number);
				const millisec = match[7] ? Number((match[7] + "00").substr(1, 3)) : 0;
				let date = Date.UTC(year, month - 1, day, hour || 0, minute || 0, second || 0, millisec);
				const tz = match[8];
				if (tz && tz !== "Z") {
					let d = parseSexagesimal(tz, false);
					if (Math.abs(d) < 30) d *= 60;
					date -= 6e4 * d;
				}
				return new Date(date);
			},
			stringify: ({ value }) => value?.toISOString().replace(/(T00:00:00)?\.000Z$/, "") ?? ""
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/yaml-1.1/schema.js
		const schema = [
			map,
			seq,
			string,
			nullTag,
			trueTag,
			falseTag,
			intBin,
			intOct,
			int,
			intHex,
			floatNaN,
			floatExp,
			float,
			binary,
			merge,
			omap,
			pairs,
			set,
			intTime,
			floatTime,
			timestamp
		];
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/tags.js
		const schemas = new Map([
			["core", schema$2],
			["failsafe", [
				map,
				seq,
				string
			]],
			["json", schema$1],
			["yaml11", schema],
			["yaml-1.1", schema]
		]);
		const tagsByName = {
			binary,
			bool: boolTag,
			float: float$1,
			floatExp: floatExp$1,
			floatNaN: floatNaN$1,
			floatTime,
			int: int$1,
			intHex: intHex$1,
			intOct: intOct$1,
			intTime,
			map,
			merge,
			null: nullTag,
			omap,
			pairs,
			seq,
			set,
			timestamp
		};
		const coreKnownTags = {
			"tag:yaml.org,2002:binary": binary,
			"tag:yaml.org,2002:merge": merge,
			"tag:yaml.org,2002:omap": omap,
			"tag:yaml.org,2002:pairs": pairs,
			"tag:yaml.org,2002:set": set,
			"tag:yaml.org,2002:timestamp": timestamp
		};
		function getTags(customTags, schemaName, addMergeTag) {
			const schemaTags = schemas.get(schemaName);
			if (schemaTags && !customTags) return addMergeTag && !schemaTags.includes(merge) ? schemaTags.concat(merge) : schemaTags.slice();
			let tags = schemaTags;
			if (!tags) if (Array.isArray(customTags)) tags = [];
			else {
				const keys = Array.from(schemas.keys()).filter((key) => key !== "yaml11").map((key) => JSON.stringify(key)).join(", ");
				throw new Error(`Unknown schema "${schemaName}"; use one of ${keys} or define customTags array`);
			}
			if (Array.isArray(customTags)) for (const tag of customTags) tags = tags.concat(tag);
			else if (typeof customTags === "function") tags = customTags(tags.slice());
			if (addMergeTag) tags = tags.concat(merge);
			return tags.reduce((tags, tag) => {
				const tagObj = typeof tag === "string" ? tagsByName[tag] : tag;
				if (!tagObj) {
					const tagName = JSON.stringify(tag);
					const keys = Object.keys(tagsByName).map((key) => JSON.stringify(key)).join(", ");
					throw new Error(`Unknown custom tag ${tagName}; use one of ${keys}`);
				}
				if (!tags.includes(tagObj)) tags.push(tagObj);
				return tags;
			}, []);
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/schema/Schema.js
		const sortMapEntriesByKey = (a, b) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
		var Schema = class Schema {
			constructor({ compat, customTags, merge, resolveKnownTags, schema, sortMapEntries, toStringDefaults }) {
				this.compat = Array.isArray(compat) ? getTags(compat, "compat") : compat ? getTags(null, compat) : null;
				this.name = typeof schema === "string" && schema || "core";
				this.knownTags = resolveKnownTags ? coreKnownTags : {};
				this.tags = getTags(customTags, this.name, merge);
				this.toStringOptions = toStringDefaults ?? null;
				Object.defineProperty(this, MAP, { value: map });
				Object.defineProperty(this, SCALAR$1, { value: string });
				Object.defineProperty(this, SEQ, { value: seq });
				this.sortMapEntries = typeof sortMapEntries === "function" ? sortMapEntries : sortMapEntries === true ? sortMapEntriesByKey : null;
			}
			clone() {
				const copy = Object.create(Schema.prototype, Object.getOwnPropertyDescriptors(this));
				copy.tags = this.tags.slice();
				return copy;
			}
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/stringify/stringifyDocument.js
		function stringifyDocument(doc, options) {
			const lines = [];
			let hasDirectives = options.directives === true;
			if (options.directives !== false && doc.directives) {
				const dir = doc.directives.toString(doc);
				if (dir) {
					lines.push(dir);
					hasDirectives = true;
				} else if (doc.directives.docStart) hasDirectives = true;
			}
			if (hasDirectives) lines.push("---");
			const ctx = createStringifyContext(doc, options);
			const { commentString } = ctx.options;
			if (doc.commentBefore) {
				if (lines.length !== 1) lines.unshift("");
				const cs = commentString(doc.commentBefore);
				lines.unshift(indentComment(cs, ""));
			}
			let chompKeep = false;
			let contentComment = null;
			if (doc.contents) {
				if (isNode(doc.contents)) {
					if (doc.contents.spaceBefore && hasDirectives) lines.push("");
					if (doc.contents.commentBefore) {
						const cs = commentString(doc.contents.commentBefore);
						lines.push(indentComment(cs, ""));
					}
					ctx.forceBlockIndent = !!doc.comment;
					contentComment = doc.contents.comment;
				}
				const onChompKeep = contentComment ? void 0 : () => chompKeep = true;
				let body = stringify$1(doc.contents, ctx, () => contentComment = null, onChompKeep);
				if (contentComment) body += lineComment(body, "", commentString(contentComment));
				if ((body[0] === "|" || body[0] === ">") && lines[lines.length - 1] === "---") lines[lines.length - 1] = `--- ${body}`;
				else lines.push(body);
			} else lines.push(stringify$1(doc.contents, ctx));
			if (doc.directives?.docEnd) if (doc.comment) {
				const cs = commentString(doc.comment);
				if (cs.includes("\n")) {
					lines.push("...");
					lines.push(indentComment(cs, ""));
				} else lines.push(`... ${cs}`);
			} else lines.push("...");
			else {
				let dc = doc.comment;
				if (dc && chompKeep) dc = dc.replace(/^\n+/, "");
				if (dc) {
					if ((!chompKeep || contentComment) && lines[lines.length - 1] !== "") lines.push("");
					lines.push(indentComment(commentString(dc), ""));
				}
			}
			return lines.join("\n") + "\n";
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/doc/Document.js
		var Document = class Document {
			constructor(value, replacer, options) {
				/** A comment before this Document */
				this.commentBefore = null;
				/** A comment immediately after this Document */
				this.comment = null;
				/** Errors encountered during parsing. */
				this.errors = [];
				/** Warnings encountered during parsing. */
				this.warnings = [];
				Object.defineProperty(this, NODE_TYPE, { value: DOC });
				let _replacer = null;
				if (typeof replacer === "function" || Array.isArray(replacer)) _replacer = replacer;
				else if (options === void 0 && replacer) {
					options = replacer;
					replacer = void 0;
				}
				const opt = Object.assign({
					intAsBigInt: false,
					keepSourceTokens: false,
					logLevel: "warn",
					prettyErrors: true,
					strict: true,
					stringKeys: false,
					uniqueKeys: true,
					version: "1.2"
				}, options);
				this.options = opt;
				let { version } = opt;
				if (options?._directives) {
					this.directives = options._directives.atDocument();
					if (this.directives.yaml.explicit) version = this.directives.yaml.version;
				} else this.directives = new Directives({ version });
				this.setSchema(version, options);
				this.contents = value === void 0 ? null : this.createNode(value, _replacer, options);
			}
			/**
			* Create a deep copy of this Document and its contents.
			*
			* Custom Node values that inherit from `Object` still refer to their original instances.
			*/
			clone() {
				const copy = Object.create(Document.prototype, { [NODE_TYPE]: { value: DOC } });
				copy.commentBefore = this.commentBefore;
				copy.comment = this.comment;
				copy.errors = this.errors.slice();
				copy.warnings = this.warnings.slice();
				copy.options = Object.assign({}, this.options);
				if (this.directives) copy.directives = this.directives.clone();
				copy.schema = this.schema.clone();
				copy.contents = isNode(this.contents) ? this.contents.clone(copy.schema) : this.contents;
				if (this.range) copy.range = this.range.slice();
				return copy;
			}
			/** Adds a value to the document. */
			add(value) {
				if (assertCollection(this.contents)) this.contents.add(value);
			}
			/** Adds a value to the document. */
			addIn(path, value) {
				if (assertCollection(this.contents)) this.contents.addIn(path, value);
			}
			/**
			* Create a new `Alias` node, ensuring that the target `node` has the required anchor.
			*
			* If `node` already has an anchor, `name` is ignored.
			* Otherwise, the `node.anchor` value will be set to `name`,
			* or if an anchor with that name is already present in the document,
			* `name` will be used as a prefix for a new unique anchor.
			* If `name` is undefined, the generated anchor will use 'a' as a prefix.
			*/
			createAlias(node, name) {
				if (!node.anchor) {
					const prev = anchorNames(this);
					node.anchor = !name || prev.has(name) ? findNewAnchor(name || "a", prev) : name;
				}
				return new Alias(node.anchor);
			}
			createNode(value, replacer, options) {
				let _replacer = void 0;
				if (typeof replacer === "function") {
					value = replacer.call({ "": value }, "", value);
					_replacer = replacer;
				} else if (Array.isArray(replacer)) {
					const keyToStr = (v) => typeof v === "number" || v instanceof String || v instanceof Number;
					const asStr = replacer.filter(keyToStr).map(String);
					if (asStr.length > 0) replacer = replacer.concat(asStr);
					_replacer = replacer;
				} else if (options === void 0 && replacer) {
					options = replacer;
					replacer = void 0;
				}
				const { aliasDuplicateObjects, anchorPrefix, flow, keepUndefined, onTagObj, tag } = options ?? {};
				const { onAnchor, setAnchors, sourceObjects } = createNodeAnchors(this, anchorPrefix || "a");
				const ctx = {
					aliasDuplicateObjects: aliasDuplicateObjects ?? true,
					keepUndefined: keepUndefined ?? false,
					onAnchor,
					onTagObj,
					replacer: _replacer,
					schema: this.schema,
					sourceObjects
				};
				const node = createNode(value, tag, ctx);
				if (flow && isCollection(node)) node.flow = true;
				setAnchors();
				return node;
			}
			/**
			* Convert a key and a value into a `Pair` using the current schema,
			* recursively wrapping all values as `Scalar` or `Collection` nodes.
			*/
			createPair(key, value, options = {}) {
				return new Pair(this.createNode(key, null, options), this.createNode(value, null, options));
			}
			/**
			* Removes a value from the document.
			* @returns `true` if the item was found and removed.
			*/
			delete(key) {
				return assertCollection(this.contents) ? this.contents.delete(key) : false;
			}
			/**
			* Removes a value from the document.
			* @returns `true` if the item was found and removed.
			*/
			deleteIn(path) {
				if (isEmptyPath(path)) {
					if (this.contents == null) return false;
					this.contents = null;
					return true;
				}
				return assertCollection(this.contents) ? this.contents.deleteIn(path) : false;
			}
			/**
			* Returns item at `key`, or `undefined` if not found. By default unwraps
			* scalar values from their surrounding node; to disable set `keepScalar` to
			* `true` (collections are always returned intact).
			*/
			get(key, keepScalar) {
				return isCollection(this.contents) ? this.contents.get(key, keepScalar) : void 0;
			}
			/**
			* Returns item at `path`, or `undefined` if not found. By default unwraps
			* scalar values from their surrounding node; to disable set `keepScalar` to
			* `true` (collections are always returned intact).
			*/
			getIn(path, keepScalar) {
				if (isEmptyPath(path)) return !keepScalar && isScalar(this.contents) ? this.contents.value : this.contents;
				return isCollection(this.contents) ? this.contents.getIn(path, keepScalar) : void 0;
			}
			/**
			* Checks if the document includes a value with the key `key`.
			*/
			has(key) {
				return isCollection(this.contents) ? this.contents.has(key) : false;
			}
			/**
			* Checks if the document includes a value at `path`.
			*/
			hasIn(path) {
				if (isEmptyPath(path)) return this.contents !== void 0;
				return isCollection(this.contents) ? this.contents.hasIn(path) : false;
			}
			/**
			* Sets a value in this document. For `!!set`, `value` needs to be a
			* boolean to add/remove the item from the set.
			*/
			set(key, value) {
				if (this.contents == null) this.contents = collectionFromPath(this.schema, [key], value);
				else if (assertCollection(this.contents)) this.contents.set(key, value);
			}
			/**
			* Sets a value in this document. For `!!set`, `value` needs to be a
			* boolean to add/remove the item from the set.
			*/
			setIn(path, value) {
				if (isEmptyPath(path)) this.contents = value;
				else if (this.contents == null) this.contents = collectionFromPath(this.schema, Array.from(path), value);
				else if (assertCollection(this.contents)) this.contents.setIn(path, value);
			}
			/**
			* Change the YAML version and schema used by the document.
			* A `null` version disables support for directives, explicit tags, anchors, and aliases.
			* It also requires the `schema` option to be given as a `Schema` instance value.
			*
			* Overrides all previously set schema options.
			*/
			setSchema(version, options = {}) {
				if (typeof version === "number") version = String(version);
				let opt;
				switch (version) {
					case "1.1":
						if (this.directives) this.directives.yaml.version = "1.1";
						else this.directives = new Directives({ version: "1.1" });
						opt = {
							resolveKnownTags: false,
							schema: "yaml-1.1"
						};
						break;
					case "1.2":
					case "next":
						if (this.directives) this.directives.yaml.version = version;
						else this.directives = new Directives({ version });
						opt = {
							resolveKnownTags: true,
							schema: "core"
						};
						break;
					case null:
						if (this.directives) delete this.directives;
						opt = null;
						break;
					default: {
						const sv = JSON.stringify(version);
						throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${sv}`);
					}
				}
				if (options.schema instanceof Object) this.schema = options.schema;
				else if (opt) this.schema = new Schema(Object.assign(opt, options));
				else throw new Error(`With a null YAML version, the { schema: Schema } option is required`);
			}
			toJS({ json, jsonArg, mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
				const ctx = {
					anchors: /* @__PURE__ */ new Map(),
					doc: this,
					keep: !json,
					mapAsMap: mapAsMap === true,
					mapKeyWarned: false,
					maxAliasCount: typeof maxAliasCount === "number" ? maxAliasCount : 100
				};
				const res = toJS(this.contents, jsonArg ?? "", ctx);
				if (typeof onAnchor === "function") for (const { count, res } of ctx.anchors.values()) onAnchor(res, count);
				return typeof reviver === "function" ? applyReviver(reviver, { "": res }, "", res) : res;
			}
			/**
			* A JSON representation of the document `contents`.
			*
			* @param jsonArg Used by `JSON.stringify` to indicate the array index or
			*   property name.
			*/
			toJSON(jsonArg, onAnchor) {
				return this.toJS({
					json: true,
					jsonArg,
					mapAsMap: false,
					onAnchor
				});
			}
			/** A YAML representation of the document. */
			toString(options = {}) {
				if (this.errors.length > 0) throw new Error("Document with errors cannot be stringified");
				if ("indent" in options && (!Number.isInteger(options.indent) || Number(options.indent) <= 0)) {
					const s = JSON.stringify(options.indent);
					throw new Error(`"indent" option must be a positive integer, not ${s}`);
				}
				return stringifyDocument(this, options);
			}
		};
		function assertCollection(contents) {
			if (isCollection(contents)) return true;
			throw new Error("Expected a YAML collection as document contents");
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/errors.js
		var YAMLError = class extends Error {
			constructor(name, pos, code, message) {
				super();
				this.name = name;
				this.code = code;
				this.message = message;
				this.pos = pos;
			}
		};
		var YAMLParseError = class extends YAMLError {
			constructor(pos, code, message) {
				super("YAMLParseError", pos, code, message);
			}
		};
		var YAMLWarning = class extends YAMLError {
			constructor(pos, code, message) {
				super("YAMLWarning", pos, code, message);
			}
		};
		const prettifyError = (src, lc) => (error) => {
			if (error.pos[0] === -1) return;
			error.linePos = error.pos.map((pos) => lc.linePos(pos));
			const { line, col } = error.linePos[0];
			error.message += ` at line ${line}, column ${col}`;
			let ci = col - 1;
			let lineStr = src.substring(lc.lineStarts[line - 1], lc.lineStarts[line]).replace(/[\n\r]+$/, "");
			if (ci >= 60 && lineStr.length > 80) {
				const trimStart = Math.min(ci - 39, lineStr.length - 79);
				lineStr = "…" + lineStr.substring(trimStart);
				ci -= trimStart - 1;
			}
			if (lineStr.length > 80) lineStr = lineStr.substring(0, 79) + "…";
			if (line > 1 && /^ *$/.test(lineStr.substring(0, ci))) {
				let prev = src.substring(lc.lineStarts[line - 2], lc.lineStarts[line - 1]);
				if (prev.length > 80) prev = prev.substring(0, 79) + "…\n";
				lineStr = prev + lineStr;
			}
			if (/[^ ]/.test(lineStr)) {
				let count = 1;
				const end = error.linePos[1];
				if (end?.line === line && end.col > col) count = Math.max(1, Math.min(end.col - col, 80 - ci));
				const pointer = " ".repeat(ci) + "^".repeat(count);
				error.message += `:\n\n${lineStr}\n${pointer}\n`;
			}
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/compose/resolve-props.js
		function resolveProps(tokens, { flow, indicator, next, offset, onError, parentIndent, startOnNewline }) {
			let spaceBefore = false;
			let atNewline = startOnNewline;
			let hasSpace = startOnNewline;
			let comment = "";
			let commentSep = "";
			let hasNewline = false;
			let reqSpace = false;
			let tab = null;
			let anchor = null;
			let tag = null;
			let newlineAfterProp = null;
			let comma = null;
			let found = null;
			let start = null;
			for (const token of tokens) {
				if (reqSpace) {
					if (token.type !== "space" && token.type !== "newline" && token.type !== "comma") onError(token.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space");
					reqSpace = false;
				}
				if (tab) {
					if (atNewline && token.type !== "comment" && token.type !== "newline") onError(tab, "TAB_AS_INDENT", "Tabs are not allowed as indentation");
					tab = null;
				}
				switch (token.type) {
					case "space":
						if (!flow && (indicator !== "doc-start" || next?.type !== "flow-collection") && token.source.includes("	")) tab = token;
						hasSpace = true;
						break;
					case "comment": {
						if (!hasSpace) onError(token, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
						const cb = token.source.substring(1) || " ";
						if (!comment) comment = cb;
						else comment += commentSep + cb;
						commentSep = "";
						atNewline = false;
						break;
					}
					case "newline":
						if (atNewline) {
							if (comment) comment += token.source;
							else if (!found || indicator !== "seq-item-ind") spaceBefore = true;
						} else commentSep += token.source;
						atNewline = true;
						hasNewline = true;
						if (anchor || tag) newlineAfterProp = token;
						hasSpace = true;
						break;
					case "anchor":
						if (anchor) onError(token, "MULTIPLE_ANCHORS", "A node can have at most one anchor");
						if (token.source.endsWith(":")) onError(token.offset + token.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", true);
						anchor = token;
						start ?? (start = token.offset);
						atNewline = false;
						hasSpace = false;
						reqSpace = true;
						break;
					case "tag":
						if (tag) onError(token, "MULTIPLE_TAGS", "A node can have at most one tag");
						tag = token;
						start ?? (start = token.offset);
						atNewline = false;
						hasSpace = false;
						reqSpace = true;
						break;
					case indicator:
						if (anchor || tag) onError(token, "BAD_PROP_ORDER", `Anchors and tags must be after the ${token.source} indicator`);
						if (found) onError(token, "UNEXPECTED_TOKEN", `Unexpected ${token.source} in ${flow ?? "collection"}`);
						found = token;
						atNewline = indicator === "seq-item-ind" || indicator === "explicit-key-ind";
						hasSpace = false;
						break;
					case "comma": if (flow) {
						if (comma) onError(token, "UNEXPECTED_TOKEN", `Unexpected , in ${flow}`);
						comma = token;
						atNewline = false;
						hasSpace = false;
						break;
					}
					default:
						onError(token, "UNEXPECTED_TOKEN", `Unexpected ${token.type} token`);
						atNewline = false;
						hasSpace = false;
				}
			}
			const last = tokens[tokens.length - 1];
			const end = last ? last.offset + last.source.length : offset;
			if (reqSpace && next && next.type !== "space" && next.type !== "newline" && next.type !== "comma" && (next.type !== "scalar" || next.source !== "")) onError(next.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space");
			if (tab && (atNewline && tab.indent <= parentIndent || next?.type === "block-map" || next?.type === "block-seq")) onError(tab, "TAB_AS_INDENT", "Tabs are not allowed as indentation");
			return {
				comma,
				found,
				spaceBefore,
				comment,
				hasNewline,
				anchor,
				tag,
				newlineAfterProp,
				end,
				start: start ?? end
			};
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/compose/util-contains-newline.js
		function containsNewline(key) {
			if (!key) return null;
			switch (key.type) {
				case "alias":
				case "scalar":
				case "double-quoted-scalar":
				case "single-quoted-scalar":
					if (key.source.includes("\n")) return true;
					if (key.end) {
						for (const st of key.end) if (st.type === "newline") return true;
					}
					return false;
				case "flow-collection":
					for (const it of key.items) {
						for (const st of it.start) if (st.type === "newline") return true;
						if (it.sep) {
							for (const st of it.sep) if (st.type === "newline") return true;
						}
						if (containsNewline(it.key) || containsNewline(it.value)) return true;
					}
					return false;
				default: return true;
			}
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/compose/util-flow-indent-check.js
		function flowIndentCheck(indent, fc, onError) {
			if (fc?.type === "flow-collection") {
				const end = fc.end[0];
				if (end.indent === indent && (end.source === "]" || end.source === "}") && containsNewline(fc)) onError(end, "BAD_INDENT", "Flow end indicator should be more indented than parent", true);
			}
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/compose/util-map-includes.js
		function mapIncludes(ctx, items, search) {
			const { uniqueKeys } = ctx.options;
			if (uniqueKeys === false) return false;
			const isEqual = typeof uniqueKeys === "function" ? uniqueKeys : (a, b) => a === b || isScalar(a) && isScalar(b) && a.value === b.value;
			return items.some((pair) => isEqual(pair.key, search));
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/compose/resolve-block-map.js
		const startColMsg = "All mapping items must start at the same column";
		function resolveBlockMap({ composeNode, composeEmptyNode }, ctx, bm, onError, tag) {
			const map = new ((tag?.nodeClass) ?? YAMLMap)(ctx.schema);
			if (ctx.atRoot) ctx.atRoot = false;
			let offset = bm.offset;
			let commentEnd = null;
			for (const collItem of bm.items) {
				const { start, key, sep, value } = collItem;
				const keyProps = resolveProps(start, {
					indicator: "explicit-key-ind",
					next: key ?? sep?.[0],
					offset,
					onError,
					parentIndent: bm.indent,
					startOnNewline: true
				});
				const implicitKey = !keyProps.found;
				if (implicitKey) {
					if (key) {
						if (key.type === "block-seq") onError(offset, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key");
						else if ("indent" in key && key.indent !== bm.indent) onError(offset, "BAD_INDENT", startColMsg);
					}
					if (!keyProps.anchor && !keyProps.tag && !sep) {
						commentEnd = keyProps.end;
						if (keyProps.comment) if (map.comment) map.comment += "\n" + keyProps.comment;
						else map.comment = keyProps.comment;
						continue;
					}
					if (keyProps.newlineAfterProp || containsNewline(key)) onError(key ?? start[start.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
				} else if (keyProps.found?.indent !== bm.indent) onError(offset, "BAD_INDENT", startColMsg);
				ctx.atKey = true;
				const keyStart = keyProps.end;
				const keyNode = key ? composeNode(ctx, key, keyProps, onError) : composeEmptyNode(ctx, keyStart, start, null, keyProps, onError);
				if (ctx.schema.compat) flowIndentCheck(bm.indent, key, onError);
				ctx.atKey = false;
				if (mapIncludes(ctx, map.items, keyNode)) onError(keyStart, "DUPLICATE_KEY", "Map keys must be unique");
				const valueProps = resolveProps(sep ?? [], {
					indicator: "map-value-ind",
					next: value,
					offset: keyNode.range[2],
					onError,
					parentIndent: bm.indent,
					startOnNewline: !key || key.type === "block-scalar"
				});
				offset = valueProps.end;
				if (valueProps.found) {
					if (implicitKey) {
						if (value?.type === "block-map" && !valueProps.hasNewline) onError(offset, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings");
						if (ctx.options.strict && keyProps.start < valueProps.found.offset - 1024) onError(keyNode.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key");
					}
					const valueNode = value ? composeNode(ctx, value, valueProps, onError) : composeEmptyNode(ctx, offset, sep, null, valueProps, onError);
					if (ctx.schema.compat) flowIndentCheck(bm.indent, value, onError);
					offset = valueNode.range[2];
					const pair = new Pair(keyNode, valueNode);
					if (ctx.options.keepSourceTokens) pair.srcToken = collItem;
					map.items.push(pair);
				} else {
					if (implicitKey) onError(keyNode.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values");
					if (valueProps.comment) if (keyNode.comment) keyNode.comment += "\n" + valueProps.comment;
					else keyNode.comment = valueProps.comment;
					const pair = new Pair(keyNode);
					if (ctx.options.keepSourceTokens) pair.srcToken = collItem;
					map.items.push(pair);
				}
			}
			if (commentEnd && commentEnd < offset) onError(commentEnd, "IMPOSSIBLE", "Map comment with trailing content");
			map.range = [
				bm.offset,
				offset,
				commentEnd ?? offset
			];
			return map;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/compose/resolve-block-seq.js
		function resolveBlockSeq({ composeNode, composeEmptyNode }, ctx, bs, onError, tag) {
			const seq = new ((tag?.nodeClass) ?? YAMLSeq)(ctx.schema);
			if (ctx.atRoot) ctx.atRoot = false;
			if (ctx.atKey) ctx.atKey = false;
			let offset = bs.offset;
			let commentEnd = null;
			for (const { start, value } of bs.items) {
				const props = resolveProps(start, {
					indicator: "seq-item-ind",
					next: value,
					offset,
					onError,
					parentIndent: bs.indent,
					startOnNewline: true
				});
				if (!props.found) if (props.anchor || props.tag || value) if (value?.type === "block-seq") onError(props.end, "BAD_INDENT", "All sequence items must start at the same column");
				else onError(offset, "MISSING_CHAR", "Sequence item without - indicator");
				else {
					commentEnd = props.end;
					if (props.comment) seq.comment = props.comment;
					continue;
				}
				const node = value ? composeNode(ctx, value, props, onError) : composeEmptyNode(ctx, props.end, start, null, props, onError);
				if (ctx.schema.compat) flowIndentCheck(bs.indent, value, onError);
				offset = node.range[2];
				seq.items.push(node);
			}
			seq.range = [
				bs.offset,
				offset,
				commentEnd ?? offset
			];
			return seq;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/compose/resolve-end.js
		function resolveEnd(end, offset, reqSpace, onError) {
			let comment = "";
			if (end) {
				let hasSpace = false;
				let sep = "";
				for (const token of end) {
					const { source, type } = token;
					switch (type) {
						case "space":
							hasSpace = true;
							break;
						case "comment": {
							if (reqSpace && !hasSpace) onError(token, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
							const cb = source.substring(1) || " ";
							if (!comment) comment = cb;
							else comment += sep + cb;
							sep = "";
							break;
						}
						case "newline":
							if (comment) sep += source;
							hasSpace = true;
							break;
						default: onError(token, "UNEXPECTED_TOKEN", `Unexpected ${type} at node end`);
					}
					offset += source.length;
				}
			}
			return {
				comment,
				offset
			};
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/compose/resolve-flow-collection.js
		const blockMsg = "Block collections are not allowed within flow collections";
		const isBlock = (token) => token && (token.type === "block-map" || token.type === "block-seq");
		function resolveFlowCollection({ composeNode, composeEmptyNode }, ctx, fc, onError, tag) {
			const isMap = fc.start.source === "{";
			const fcName = isMap ? "flow map" : "flow sequence";
			const coll = new ((tag?.nodeClass) ?? (isMap ? YAMLMap : YAMLSeq))(ctx.schema);
			coll.flow = true;
			const atRoot = ctx.atRoot;
			if (atRoot) ctx.atRoot = false;
			if (ctx.atKey) ctx.atKey = false;
			let offset = fc.offset + fc.start.source.length;
			for (let i = 0; i < fc.items.length; ++i) {
				const collItem = fc.items[i];
				const { start, key, sep, value } = collItem;
				const props = resolveProps(start, {
					flow: fcName,
					indicator: "explicit-key-ind",
					next: key ?? sep?.[0],
					offset,
					onError,
					parentIndent: fc.indent,
					startOnNewline: false
				});
				if (!props.found) {
					if (!props.anchor && !props.tag && !sep && !value) {
						if (i === 0 && props.comma) onError(props.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${fcName}`);
						else if (i < fc.items.length - 1) onError(props.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${fcName}`);
						if (props.comment) if (coll.comment) coll.comment += "\n" + props.comment;
						else coll.comment = props.comment;
						offset = props.end;
						continue;
					}
					if (!isMap && ctx.options.strict && containsNewline(key)) onError(key, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
				}
				if (i === 0) {
					if (props.comma) onError(props.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${fcName}`);
				} else {
					if (!props.comma) onError(props.start, "MISSING_CHAR", `Missing , between ${fcName} items`);
					if (props.comment) {
						let prevItemComment = "";
						loop: for (const st of start) switch (st.type) {
							case "comma":
							case "space": break;
							case "comment":
								prevItemComment = st.source.substring(1);
								break loop;
							default: break loop;
						}
						if (prevItemComment) {
							let prev = coll.items[coll.items.length - 1];
							if (isPair(prev)) prev = prev.value ?? prev.key;
							if (prev.comment) prev.comment += "\n" + prevItemComment;
							else prev.comment = prevItemComment;
							props.comment = props.comment.substring(prevItemComment.length + 1);
						}
					}
				}
				if (!isMap && !sep && !props.found) {
					const valueNode = value ? composeNode(ctx, value, props, onError) : composeEmptyNode(ctx, props.end, sep, null, props, onError);
					coll.items.push(valueNode);
					offset = valueNode.range[2];
					if (isBlock(value)) onError(valueNode.range, "BLOCK_IN_FLOW", blockMsg);
				} else {
					ctx.atKey = true;
					const keyStart = props.end;
					const keyNode = key ? composeNode(ctx, key, props, onError) : composeEmptyNode(ctx, keyStart, start, null, props, onError);
					if (isBlock(key)) onError(keyNode.range, "BLOCK_IN_FLOW", blockMsg);
					ctx.atKey = false;
					const valueProps = resolveProps(sep ?? [], {
						flow: fcName,
						indicator: "map-value-ind",
						next: value,
						offset: keyNode.range[2],
						onError,
						parentIndent: fc.indent,
						startOnNewline: false
					});
					if (valueProps.found) {
						if (!isMap && !props.found && ctx.options.strict) {
							if (sep) for (const st of sep) {
								if (st === valueProps.found) break;
								if (st.type === "newline") {
									onError(st, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
									break;
								}
							}
							if (props.start < valueProps.found.offset - 1024) onError(valueProps.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
						}
					} else if (value) if ("source" in value && value.source?.[0] === ":") onError(value, "MISSING_CHAR", `Missing space after : in ${fcName}`);
					else onError(valueProps.start, "MISSING_CHAR", `Missing , or : between ${fcName} items`);
					const valueNode = value ? composeNode(ctx, value, valueProps, onError) : valueProps.found ? composeEmptyNode(ctx, valueProps.end, sep, null, valueProps, onError) : null;
					if (valueNode) {
						if (isBlock(value)) onError(valueNode.range, "BLOCK_IN_FLOW", blockMsg);
					} else if (valueProps.comment) if (keyNode.comment) keyNode.comment += "\n" + valueProps.comment;
					else keyNode.comment = valueProps.comment;
					const pair = new Pair(keyNode, valueNode);
					if (ctx.options.keepSourceTokens) pair.srcToken = collItem;
					if (isMap) {
						const map = coll;
						if (mapIncludes(ctx, map.items, keyNode)) onError(keyStart, "DUPLICATE_KEY", "Map keys must be unique");
						map.items.push(pair);
					} else {
						const map = new YAMLMap(ctx.schema);
						map.flow = true;
						map.items.push(pair);
						const endRange = (valueNode ?? keyNode).range;
						map.range = [
							keyNode.range[0],
							endRange[1],
							endRange[2]
						];
						coll.items.push(map);
					}
					offset = valueNode ? valueNode.range[2] : valueProps.end;
				}
			}
			const expectedEnd = isMap ? "}" : "]";
			const [ce, ...ee] = fc.end;
			let cePos = offset;
			if (ce?.source === expectedEnd) cePos = ce.offset + ce.source.length;
			else {
				const name = fcName[0].toUpperCase() + fcName.substring(1);
				const msg = atRoot ? `${name} must end with a ${expectedEnd}` : `${name} in block collection must be sufficiently indented and end with a ${expectedEnd}`;
				onError(offset, atRoot ? "MISSING_CHAR" : "BAD_INDENT", msg);
				if (ce && ce.source.length !== 1) ee.unshift(ce);
			}
			if (ee.length > 0) {
				const end = resolveEnd(ee, cePos, ctx.options.strict, onError);
				if (end.comment) if (coll.comment) coll.comment += "\n" + end.comment;
				else coll.comment = end.comment;
				coll.range = [
					fc.offset,
					cePos,
					end.offset
				];
			} else coll.range = [
				fc.offset,
				cePos,
				cePos
			];
			return coll;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/compose/compose-collection.js
		function resolveCollection(CN, ctx, token, onError, tagName, tag) {
			const coll = token.type === "block-map" ? resolveBlockMap(CN, ctx, token, onError, tag) : token.type === "block-seq" ? resolveBlockSeq(CN, ctx, token, onError, tag) : resolveFlowCollection(CN, ctx, token, onError, tag);
			const Coll = coll.constructor;
			if (tagName === "!" || tagName === Coll.tagName) {
				coll.tag = Coll.tagName;
				return coll;
			}
			if (tagName) coll.tag = tagName;
			return coll;
		}
		function composeCollection(CN, ctx, token, props, onError) {
			const tagToken = props.tag;
			const tagName = !tagToken ? null : ctx.directives.tagName(tagToken.source, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg));
			if (token.type === "block-seq") {
				const { anchor, newlineAfterProp: nl } = props;
				const lastProp = anchor && tagToken ? anchor.offset > tagToken.offset ? anchor : tagToken : anchor ?? tagToken;
				if (lastProp && (!nl || nl.offset < lastProp.offset)) onError(lastProp, "MISSING_CHAR", "Missing newline after block sequence props");
			}
			const expType = token.type === "block-map" ? "map" : token.type === "block-seq" ? "seq" : token.start.source === "{" ? "map" : "seq";
			if (!tagToken || !tagName || tagName === "!" || tagName === YAMLMap.tagName && expType === "map" || tagName === YAMLSeq.tagName && expType === "seq") return resolveCollection(CN, ctx, token, onError, tagName);
			let tag = ctx.schema.tags.find((t) => t.tag === tagName && t.collection === expType);
			if (!tag) {
				const kt = ctx.schema.knownTags[tagName];
				if (kt?.collection === expType) {
					ctx.schema.tags.push(Object.assign({}, kt, { default: false }));
					tag = kt;
				} else {
					if (kt) onError(tagToken, "BAD_COLLECTION_TYPE", `${kt.tag} used for ${expType} collection, but expects ${kt.collection ?? "scalar"}`, true);
					else onError(tagToken, "TAG_RESOLVE_FAILED", `Unresolved tag: ${tagName}`, true);
					return resolveCollection(CN, ctx, token, onError, tagName);
				}
			}
			const coll = resolveCollection(CN, ctx, token, onError, tagName, tag);
			const res = tag.resolve?.(coll, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg), ctx.options) ?? coll;
			const node = isNode(res) ? res : new Scalar(res);
			node.range = coll.range;
			node.tag = tagName;
			if (tag?.format) node.format = tag.format;
			return node;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/compose/resolve-block-scalar.js
		function resolveBlockScalar(ctx, scalar, onError) {
			const start = scalar.offset;
			const header = parseBlockScalarHeader(scalar, ctx.options.strict, onError);
			if (!header) return {
				value: "",
				type: null,
				comment: "",
				range: [
					start,
					start,
					start
				]
			};
			const type = header.mode === ">" ? Scalar.BLOCK_FOLDED : Scalar.BLOCK_LITERAL;
			const lines = scalar.source ? splitLines(scalar.source) : [];
			let chompStart = lines.length;
			for (let i = lines.length - 1; i >= 0; --i) {
				const content = lines[i][1];
				if (content === "" || content === "\r") chompStart = i;
				else break;
			}
			if (chompStart === 0) {
				const value = header.chomp === "+" && lines.length > 0 ? "\n".repeat(Math.max(1, lines.length - 1)) : "";
				let end = start + header.length;
				if (scalar.source) end += scalar.source.length;
				return {
					value,
					type,
					comment: header.comment,
					range: [
						start,
						end,
						end
					]
				};
			}
			let trimIndent = scalar.indent + header.indent;
			let offset = scalar.offset + header.length;
			let contentStart = 0;
			for (let i = 0; i < chompStart; ++i) {
				const [indent, content] = lines[i];
				if (content === "" || content === "\r") {
					if (header.indent === 0 && indent.length > trimIndent) trimIndent = indent.length;
				} else {
					if (indent.length < trimIndent) onError(offset + indent.length, "MISSING_CHAR", "Block scalars with more-indented leading empty lines must use an explicit indentation indicator");
					if (header.indent === 0) trimIndent = indent.length;
					contentStart = i;
					if (trimIndent === 0 && !ctx.atRoot) onError(offset, "BAD_INDENT", "Block scalar values in collections must be indented");
					break;
				}
				offset += indent.length + content.length + 1;
			}
			for (let i = lines.length - 1; i >= chompStart; --i) if (lines[i][0].length > trimIndent) chompStart = i + 1;
			let value = "";
			let sep = "";
			let prevMoreIndented = false;
			for (let i = 0; i < contentStart; ++i) value += lines[i][0].slice(trimIndent) + "\n";
			for (let i = contentStart; i < chompStart; ++i) {
				let [indent, content] = lines[i];
				offset += indent.length + content.length + 1;
				const crlf = content[content.length - 1] === "\r";
				if (crlf) content = content.slice(0, -1);
				/* istanbul ignore if already caught in lexer */
				if (content && indent.length < trimIndent) {
					const message = `Block scalar lines must not be less indented than their ${header.indent ? "explicit indentation indicator" : "first line"}`;
					onError(offset - content.length - (crlf ? 2 : 1), "BAD_INDENT", message);
					indent = "";
				}
				if (type === Scalar.BLOCK_LITERAL) {
					value += sep + indent.slice(trimIndent) + content;
					sep = "\n";
				} else if (indent.length > trimIndent || content[0] === "	") {
					if (sep === " ") sep = "\n";
					else if (!prevMoreIndented && sep === "\n") sep = "\n\n";
					value += sep + indent.slice(trimIndent) + content;
					sep = "\n";
					prevMoreIndented = true;
				} else if (content === "") if (sep === "\n") value += "\n";
				else sep = "\n";
				else {
					value += sep + content;
					sep = " ";
					prevMoreIndented = false;
				}
			}
			switch (header.chomp) {
				case "-": break;
				case "+":
					for (let i = chompStart; i < lines.length; ++i) value += "\n" + lines[i][0].slice(trimIndent);
					if (value[value.length - 1] !== "\n") value += "\n";
					break;
				default: value += "\n";
			}
			const end = start + header.length + scalar.source.length;
			return {
				value,
				type,
				comment: header.comment,
				range: [
					start,
					end,
					end
				]
			};
		}
		function parseBlockScalarHeader({ offset, props }, strict, onError) {
			/* istanbul ignore if should not happen */
			if (props[0].type !== "block-scalar-header") {
				onError(props[0], "IMPOSSIBLE", "Block scalar header not found");
				return null;
			}
			const { source } = props[0];
			const mode = source[0];
			let indent = 0;
			let chomp = "";
			let error = -1;
			for (let i = 1; i < source.length; ++i) {
				const ch = source[i];
				if (!chomp && (ch === "-" || ch === "+")) chomp = ch;
				else {
					const n = Number(ch);
					if (!indent && n) indent = n;
					else if (error === -1) error = offset + i;
				}
			}
			if (error !== -1) onError(error, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${source}`);
			let hasSpace = false;
			let comment = "";
			let length = source.length;
			for (let i = 1; i < props.length; ++i) {
				const token = props[i];
				switch (token.type) {
					case "space": hasSpace = true;
					case "newline":
						length += token.source.length;
						break;
					case "comment":
						if (strict && !hasSpace) onError(token, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
						length += token.source.length;
						comment = token.source.substring(1);
						break;
					case "error":
						onError(token, "UNEXPECTED_TOKEN", token.message);
						length += token.source.length;
						break;
					/* istanbul ignore next should not happen */
					default: {
						onError(token, "UNEXPECTED_TOKEN", `Unexpected token in block scalar header: ${token.type}`);
						const ts = token.source;
						if (ts && typeof ts === "string") length += ts.length;
					}
				}
			}
			return {
				mode,
				indent,
				chomp,
				comment,
				length
			};
		}
		/** @returns Array of lines split up as `[indent, content]` */
		function splitLines(source) {
			const split = source.split(/\n( *)/);
			const first = split[0];
			const m = first.match(/^( *)/);
			const lines = [m?.[1] ? [m[1], first.slice(m[1].length)] : ["", first]];
			for (let i = 1; i < split.length; i += 2) lines.push([split[i], split[i + 1]]);
			return lines;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/compose/resolve-flow-scalar.js
		function resolveFlowScalar(scalar, strict, onError) {
			const { offset, type, source, end } = scalar;
			let _type;
			let value;
			const _onError = (rel, code, msg) => onError(offset + rel, code, msg);
			switch (type) {
				case "scalar":
					_type = Scalar.PLAIN;
					value = plainValue(source, _onError);
					break;
				case "single-quoted-scalar":
					_type = Scalar.QUOTE_SINGLE;
					value = singleQuotedValue(source, _onError);
					break;
				case "double-quoted-scalar":
					_type = Scalar.QUOTE_DOUBLE;
					value = doubleQuotedValue(source, _onError);
					break;
				/* istanbul ignore next should not happen */
				default:
					onError(scalar, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${type}`);
					return {
						value: "",
						type: null,
						comment: "",
						range: [
							offset,
							offset + source.length,
							offset + source.length
						]
					};
			}
			const valueEnd = offset + source.length;
			const re = resolveEnd(end, valueEnd, strict, onError);
			return {
				value,
				type: _type,
				comment: re.comment,
				range: [
					offset,
					valueEnd,
					re.offset
				]
			};
		}
		function plainValue(source, onError) {
			let badChar = "";
			switch (source[0]) {
				/* istanbul ignore next should not happen */
				case "	":
					badChar = "a tab character";
					break;
				case ",":
					badChar = "flow indicator character ,";
					break;
				case "%":
					badChar = "directive indicator character %";
					break;
				case "|":
				case ">":
					badChar = `block scalar indicator ${source[0]}`;
					break;
				case "@":
				case "`":
					badChar = `reserved character ${source[0]}`;
					break;
			}
			if (badChar) onError(0, "BAD_SCALAR_START", `Plain value cannot start with ${badChar}`);
			return foldLines(source);
		}
		function singleQuotedValue(source, onError) {
			if (source[source.length - 1] !== "'" || source.length === 1) onError(source.length, "MISSING_CHAR", "Missing closing 'quote");
			return foldLines(source.slice(1, -1)).replace(/''/g, "'");
		}
		function foldLines(source) {
			/**
			* The negative lookbehind here and in the `re` RegExp is to
			* prevent causing a polynomial search time in certain cases.
			*
			* The try-catch is for Safari, which doesn't support this yet:
			* https://caniuse.com/js-regexp-lookbehind
			*/
			let first, line;
			try {
				first = /* @__PURE__ */ new RegExp("(.*?)(?<![ 	])[ 	]*\r?\n", "sy");
				line = /* @__PURE__ */ new RegExp("[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?\n", "sy");
			} catch {
				first = /(.*?)[ \t]*\r?\n/sy;
				line = /[ \t]*(.*?)[ \t]*\r?\n/sy;
			}
			let match = first.exec(source);
			if (!match) return source;
			let res = match[1];
			let sep = " ";
			let pos = first.lastIndex;
			line.lastIndex = pos;
			while (match = line.exec(source)) {
				if (match[1] === "") if (sep === "\n") res += sep;
				else sep = "\n";
				else {
					res += sep + match[1];
					sep = " ";
				}
				pos = line.lastIndex;
			}
			const last = /[ \t]*(.*)/sy;
			last.lastIndex = pos;
			match = last.exec(source);
			return res + sep + (match?.[1] ?? "");
		}
		function doubleQuotedValue(source, onError) {
			let res = "";
			for (let i = 1; i < source.length - 1; ++i) {
				const ch = source[i];
				if (ch === "\r" && source[i + 1] === "\n") continue;
				if (ch === "\n") {
					const { fold, offset } = foldNewline(source, i);
					res += fold;
					i = offset;
				} else if (ch === "\\") {
					let next = source[++i];
					const cc = escapeCodes[next];
					if (cc) res += cc;
					else if (next === "\n") {
						next = source[i + 1];
						while (next === " " || next === "	") next = source[++i + 1];
					} else if (next === "\r" && source[i + 1] === "\n") {
						next = source[++i + 1];
						while (next === " " || next === "	") next = source[++i + 1];
					} else if (next === "x" || next === "u" || next === "U") {
						const length = next === "x" ? 2 : next === "u" ? 4 : 8;
						res += parseCharCode(source, i + 1, length, onError);
						i += length;
					} else {
						const raw = source.substr(i - 1, 2);
						onError(i - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${raw}`);
						res += raw;
					}
				} else if (ch === " " || ch === "	") {
					const wsStart = i;
					let next = source[i + 1];
					while (next === " " || next === "	") next = source[++i + 1];
					if (next !== "\n" && !(next === "\r" && source[i + 2] === "\n")) res += i > wsStart ? source.slice(wsStart, i + 1) : ch;
				} else res += ch;
			}
			if (source[source.length - 1] !== "\"" || source.length === 1) onError(source.length, "MISSING_CHAR", "Missing closing \"quote");
			return res;
		}
		/**
		* Fold a single newline into a space, multiple newlines to N - 1 newlines.
		* Presumes `source[offset] === '\n'`
		*/
		function foldNewline(source, offset) {
			let fold = "";
			let ch = source[offset + 1];
			while (ch === " " || ch === "	" || ch === "\n" || ch === "\r") {
				if (ch === "\r" && source[offset + 2] !== "\n") break;
				if (ch === "\n") fold += "\n";
				offset += 1;
				ch = source[offset + 1];
			}
			if (!fold) fold = " ";
			return {
				fold,
				offset
			};
		}
		const escapeCodes = {
			"0": "\0",
			a: "\x07",
			b: "\b",
			e: "\x1B",
			f: "\f",
			n: "\n",
			r: "\r",
			t: "	",
			v: "\v",
			N: "",
			_: "\xA0",
			L: "\u2028",
			P: "\u2029",
			" ": " ",
			"\"": "\"",
			"/": "/",
			"\\": "\\",
			"	": "	"
		};
		function parseCharCode(source, offset, length, onError) {
			const cc = source.substr(offset, length);
			const code = cc.length === length && /^[0-9a-fA-F]+$/.test(cc) ? parseInt(cc, 16) : NaN;
			try {
				return String.fromCodePoint(code);
			} catch {
				const raw = source.substr(offset - 2, length + 2);
				onError(offset - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${raw}`);
				return raw;
			}
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/compose/compose-scalar.js
		function composeScalar(ctx, token, tagToken, onError) {
			const { value, type, comment, range } = token.type === "block-scalar" ? resolveBlockScalar(ctx, token, onError) : resolveFlowScalar(token, ctx.options.strict, onError);
			const tagName = tagToken ? ctx.directives.tagName(tagToken.source, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg)) : null;
			let tag;
			if (ctx.options.stringKeys && ctx.atKey) tag = ctx.schema[SCALAR$1];
			else if (tagName) tag = findScalarTagByName(ctx.schema, value, tagName, tagToken, onError);
			else if (token.type === "scalar") tag = findScalarTagByTest(ctx, value, token, onError);
			else tag = ctx.schema[SCALAR$1];
			let scalar;
			try {
				const res = tag.resolve(value, (msg) => onError(tagToken ?? token, "TAG_RESOLVE_FAILED", msg), ctx.options);
				scalar = isScalar(res) ? res : new Scalar(res);
			} catch (error) {
				const msg = error instanceof Error ? error.message : String(error);
				onError(tagToken ?? token, "TAG_RESOLVE_FAILED", msg);
				scalar = new Scalar(value);
			}
			scalar.range = range;
			scalar.source = value;
			if (type) scalar.type = type;
			if (tagName) scalar.tag = tagName;
			if (tag.format) scalar.format = tag.format;
			if (comment) scalar.comment = comment;
			return scalar;
		}
		function findScalarTagByName(schema, value, tagName, tagToken, onError) {
			if (tagName === "!") return schema[SCALAR$1];
			const matchWithTest = [];
			for (const tag of schema.tags) if (!tag.collection && tag.tag === tagName) if (tag.default && tag.test) matchWithTest.push(tag);
			else return tag;
			for (const tag of matchWithTest) if (tag.test?.test(value)) return tag;
			const kt = schema.knownTags[tagName];
			if (kt && !kt.collection) {
				schema.tags.push(Object.assign({}, kt, {
					default: false,
					test: void 0
				}));
				return kt;
			}
			onError(tagToken, "TAG_RESOLVE_FAILED", `Unresolved tag: ${tagName}`, tagName !== "tag:yaml.org,2002:str");
			return schema[SCALAR$1];
		}
		function findScalarTagByTest({ atKey, directives, schema }, value, token, onError) {
			const tag = schema.tags.find((tag) => (tag.default === true || atKey && tag.default === "key") && tag.test?.test(value)) || schema[SCALAR$1];
			if (schema.compat) {
				const compat = schema.compat.find((tag) => tag.default && tag.test?.test(value)) ?? schema[SCALAR$1];
				if (tag.tag !== compat.tag) onError(token, "TAG_RESOLVE_FAILED", `Value may be parsed as either ${directives.tagString(tag.tag)} or ${directives.tagString(compat.tag)}`, true);
			}
			return tag;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/compose/util-empty-scalar-position.js
		function emptyScalarPosition(offset, before, pos) {
			if (before) {
				pos ?? (pos = before.length);
				for (let i = pos - 1; i >= 0; --i) {
					let st = before[i];
					switch (st.type) {
						case "space":
						case "comment":
						case "newline":
							offset -= st.source.length;
							continue;
					}
					st = before[++i];
					while (st?.type === "space") {
						offset += st.source.length;
						st = before[++i];
					}
					break;
				}
			}
			return offset;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/compose/compose-node.js
		const CN = {
			composeNode,
			composeEmptyNode
		};
		function composeNode(ctx, token, props, onError) {
			const atKey = ctx.atKey;
			const { spaceBefore, comment, anchor, tag } = props;
			let node;
			let isSrcToken = true;
			switch (token.type) {
				case "alias":
					node = composeAlias(ctx, token, onError);
					if (anchor || tag) onError(token, "ALIAS_PROPS", "An alias node must not specify any properties");
					break;
				case "scalar":
				case "single-quoted-scalar":
				case "double-quoted-scalar":
				case "block-scalar":
					node = composeScalar(ctx, token, tag, onError);
					if (anchor) node.anchor = anchor.source.substring(1);
					break;
				case "block-map":
				case "block-seq":
				case "flow-collection":
					try {
						node = composeCollection(CN, ctx, token, props, onError);
						if (anchor) node.anchor = anchor.source.substring(1);
					} catch (error) {
						onError(token, "RESOURCE_EXHAUSTION", error instanceof Error ? error.message : String(error));
					}
					break;
				default:
					onError(token, "UNEXPECTED_TOKEN", token.type === "error" ? token.message : `Unsupported token (type: ${token.type})`);
					isSrcToken = false;
			}
			node ?? (node = composeEmptyNode(ctx, token.offset, void 0, null, props, onError));
			if (anchor && node.anchor === "") onError(anchor, "BAD_ALIAS", "Anchor cannot be an empty string");
			if (atKey && ctx.options.stringKeys && (!isScalar(node) || typeof node.value !== "string" || node.tag && node.tag !== "tag:yaml.org,2002:str")) onError(tag ?? token, "NON_STRING_KEY", "With stringKeys, all keys must be strings");
			if (spaceBefore) node.spaceBefore = true;
			if (comment) if (token.type === "scalar" && token.source === "") node.comment = comment;
			else node.commentBefore = comment;
			if (ctx.options.keepSourceTokens && isSrcToken) node.srcToken = token;
			return node;
		}
		function composeEmptyNode(ctx, offset, before, pos, { spaceBefore, comment, anchor, tag, end }, onError) {
			const node = composeScalar(ctx, {
				type: "scalar",
				offset: emptyScalarPosition(offset, before, pos),
				indent: -1,
				source: ""
			}, tag, onError);
			if (anchor) {
				node.anchor = anchor.source.substring(1);
				if (node.anchor === "") onError(anchor, "BAD_ALIAS", "Anchor cannot be an empty string");
			}
			if (spaceBefore) node.spaceBefore = true;
			if (comment) {
				node.comment = comment;
				node.range[2] = end;
			}
			return node;
		}
		function composeAlias({ options }, { offset, source, end }, onError) {
			const alias = new Alias(source.substring(1));
			if (alias.source === "") onError(offset, "BAD_ALIAS", "Alias cannot be an empty string");
			if (alias.source.endsWith(":")) onError(offset + source.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", true);
			const valueEnd = offset + source.length;
			const re = resolveEnd(end, valueEnd, options.strict, onError);
			alias.range = [
				offset,
				valueEnd,
				re.offset
			];
			if (re.comment) alias.comment = re.comment;
			return alias;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/compose/compose-doc.js
		function composeDoc(options, directives, { offset, start, value, end }, onError) {
			const doc = new Document(void 0, Object.assign({ _directives: directives }, options));
			const ctx = {
				atKey: false,
				atRoot: true,
				directives: doc.directives,
				options: doc.options,
				schema: doc.schema
			};
			const props = resolveProps(start, {
				indicator: "doc-start",
				next: value ?? end?.[0],
				offset,
				onError,
				parentIndent: 0,
				startOnNewline: true
			});
			if (props.found) {
				doc.directives.docStart = true;
				if (value && (value.type === "block-map" || value.type === "block-seq") && !props.hasNewline) onError(props.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker");
			}
			doc.contents = value ? composeNode(ctx, value, props, onError) : composeEmptyNode(ctx, props.end, start, null, props, onError);
			const contentEnd = doc.contents.range[2];
			const re = resolveEnd(end, contentEnd, false, onError);
			if (re.comment) doc.comment = re.comment;
			doc.range = [
				offset,
				contentEnd,
				re.offset
			];
			return doc;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/compose/composer.js
		function getErrorPos(src) {
			if (typeof src === "number") return [src, src + 1];
			if (Array.isArray(src)) return src.length === 2 ? src : [src[0], src[1]];
			const { offset, source } = src;
			return [offset, offset + (typeof source === "string" ? source.length : 1)];
		}
		function parsePrelude(prelude) {
			let comment = "";
			let atComment = false;
			let afterEmptyLine = false;
			for (let i = 0; i < prelude.length; ++i) {
				const source = prelude[i];
				switch (source[0]) {
					case "#":
						comment += (comment === "" ? "" : afterEmptyLine ? "\n\n" : "\n") + (source.substring(1) || " ");
						atComment = true;
						afterEmptyLine = false;
						break;
					case "%":
						if (prelude[i + 1]?.[0] !== "#") i += 1;
						atComment = false;
						break;
					default:
						if (!atComment) afterEmptyLine = true;
						atComment = false;
				}
			}
			return {
				comment,
				afterEmptyLine
			};
		}
		/**
		* Compose a stream of CST nodes into a stream of YAML Documents.
		*
		* ```ts
		* import { Composer, Parser } from 'yaml'
		*
		* const src: string = ...
		* const tokens = new Parser().parse(src)
		* const docs = new Composer().compose(tokens)
		* ```
		*/
		var Composer = class {
			constructor(options = {}) {
				this.doc = null;
				this.atDirectives = false;
				this.prelude = [];
				this.errors = [];
				this.warnings = [];
				this.onError = (source, code, message, warning) => {
					const pos = getErrorPos(source);
					if (warning) this.warnings.push(new YAMLWarning(pos, code, message));
					else this.errors.push(new YAMLParseError(pos, code, message));
				};
				this.directives = new Directives({ version: options.version || "1.2" });
				this.options = options;
			}
			decorate(doc, afterDoc) {
				const { comment, afterEmptyLine } = parsePrelude(this.prelude);
				if (comment) {
					const dc = doc.contents;
					if (afterDoc) doc.comment = doc.comment ? `${doc.comment}\n${comment}` : comment;
					else if (afterEmptyLine || doc.directives.docStart || !dc) doc.commentBefore = comment;
					else if (isCollection(dc) && !dc.flow && dc.items.length > 0) {
						let it = dc.items[0];
						if (isPair(it)) it = it.key;
						const cb = it.commentBefore;
						it.commentBefore = cb ? `${comment}\n${cb}` : comment;
					} else {
						const cb = dc.commentBefore;
						dc.commentBefore = cb ? `${comment}\n${cb}` : comment;
					}
				}
				if (afterDoc) {
					for (let i = 0; i < this.errors.length; ++i) doc.errors.push(this.errors[i]);
					for (let i = 0; i < this.warnings.length; ++i) doc.warnings.push(this.warnings[i]);
				} else {
					doc.errors = this.errors;
					doc.warnings = this.warnings;
				}
				this.prelude = [];
				this.errors = [];
				this.warnings = [];
			}
			/**
			* Current stream status information.
			*
			* Mostly useful at the end of input for an empty stream.
			*/
			streamInfo() {
				return {
					comment: parsePrelude(this.prelude).comment,
					directives: this.directives,
					errors: this.errors,
					warnings: this.warnings
				};
			}
			/**
			* Compose tokens into documents.
			*
			* @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
			* @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
			*/
			*compose(tokens, forceDoc = false, endOffset = -1) {
				for (const token of tokens) yield* this.next(token);
				yield* this.end(forceDoc, endOffset);
			}
			/** Advance the composer by one CST token. */
			*next(token) {
				switch (token.type) {
					case "directive":
						this.directives.add(token.source, (offset, message, warning) => {
							const pos = getErrorPos(token);
							pos[0] += offset;
							this.onError(pos, "BAD_DIRECTIVE", message, warning);
						});
						this.prelude.push(token.source);
						this.atDirectives = true;
						break;
					case "document": {
						const doc = composeDoc(this.options, this.directives, token, this.onError);
						if (this.atDirectives && !doc.directives.docStart) this.onError(token, "MISSING_CHAR", "Missing directives-end/doc-start indicator line");
						this.decorate(doc, false);
						if (this.doc) yield this.doc;
						this.doc = doc;
						this.atDirectives = false;
						break;
					}
					case "byte-order-mark":
					case "space": break;
					case "comment":
					case "newline":
						this.prelude.push(token.source);
						break;
					case "error": {
						const msg = token.source ? `${token.message}: ${JSON.stringify(token.source)}` : token.message;
						const error = new YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", msg);
						if (this.atDirectives || !this.doc) this.errors.push(error);
						else this.doc.errors.push(error);
						break;
					}
					case "doc-end": {
						if (!this.doc) {
							this.errors.push(new YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", "Unexpected doc-end without preceding document"));
							break;
						}
						this.doc.directives.docEnd = true;
						const end = resolveEnd(token.end, token.offset + token.source.length, this.doc.options.strict, this.onError);
						this.decorate(this.doc, true);
						if (end.comment) {
							const dc = this.doc.comment;
							this.doc.comment = dc ? `${dc}\n${end.comment}` : end.comment;
						}
						this.doc.range[2] = end.offset;
						break;
					}
					default: this.errors.push(new YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", `Unsupported token ${token.type}`));
				}
			}
			/**
			* Call at end of input to yield any remaining document.
			*
			* @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
			* @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
			*/
			*end(forceDoc = false, endOffset = -1) {
				if (this.doc) {
					this.decorate(this.doc, true);
					yield this.doc;
					this.doc = null;
				} else if (forceDoc) {
					const doc = new Document(void 0, Object.assign({ _directives: this.directives }, this.options));
					if (this.atDirectives) this.onError(endOffset, "MISSING_CHAR", "Missing directives-end indicator line");
					doc.range = [
						0,
						endOffset,
						endOffset
					];
					this.decorate(doc, false);
					yield doc;
				}
			}
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/parse/cst-visit.js
		const BREAK = Symbol("break visit");
		const SKIP = Symbol("skip children");
		const REMOVE = Symbol("remove item");
		/**
		* Apply a visitor to a CST document or item.
		*
		* Walks through the tree (depth-first) starting from the root, calling a
		* `visitor` function with two arguments when entering each item:
		*   - `item`: The current item, which included the following members:
		*     - `start: SourceToken[]` – Source tokens before the key or value,
		*       possibly including its anchor or tag.
		*     - `key?: Token | null` – Set for pair values. May then be `null`, if
		*       the key before the `:` separator is empty.
		*     - `sep?: SourceToken[]` – Source tokens between the key and the value,
		*       which should include the `:` map value indicator if `value` is set.
		*     - `value?: Token` – The value of a sequence item, or of a map pair.
		*   - `path`: The steps from the root to the current node, as an array of
		*     `['key' | 'value', number]` tuples.
		*
		* The return value of the visitor may be used to control the traversal:
		*   - `undefined` (default): Do nothing and continue
		*   - `visit.SKIP`: Do not visit the children of this token, continue with
		*      next sibling
		*   - `visit.BREAK`: Terminate traversal completely
		*   - `visit.REMOVE`: Remove the current item, then continue with the next one
		*   - `number`: Set the index of the next step. This is useful especially if
		*     the index of the current token has changed.
		*   - `function`: Define the next visitor for this item. After the original
		*     visitor is called on item entry, next visitors are called after handling
		*     a non-empty `key` and when exiting the item.
		*/
		function visit(cst, visitor) {
			if ("type" in cst && cst.type === "document") cst = {
				start: cst.start,
				value: cst.value
			};
			_visit(Object.freeze([]), cst, visitor);
		}
		/** Terminate visit traversal completely */
		visit.BREAK = BREAK;
		/** Do not visit the children of the current item */
		visit.SKIP = SKIP;
		/** Remove the current item */
		visit.REMOVE = REMOVE;
		/** Find the item at `path` from `cst` as the root */
		visit.itemAtPath = (cst, path) => {
			let item = cst;
			for (const [field, index] of path) {
				const tok = item?.[field];
				if (tok && "items" in tok) item = tok.items[index];
				else return void 0;
			}
			return item;
		};
		/**
		* Get the immediate parent collection of the item at `path` from `cst` as the root.
		*
		* Throws an error if the collection is not found, which should never happen if the item itself exists.
		*/
		visit.parentCollection = (cst, path) => {
			const parent = visit.itemAtPath(cst, path.slice(0, -1));
			const field = path[path.length - 1][0];
			const coll = parent?.[field];
			if (coll && "items" in coll) return coll;
			throw new Error("Parent collection not found");
		};
		function _visit(path, item, visitor) {
			let ctrl = visitor(item, path);
			if (typeof ctrl === "symbol") return ctrl;
			for (const field of ["key", "value"]) {
				const token = item[field];
				if (token && "items" in token) {
					for (let i = 0; i < token.items.length; ++i) {
						const ci = _visit(Object.freeze(path.concat([[field, i]])), token.items[i], visitor);
						if (typeof ci === "number") i = ci - 1;
						else if (ci === BREAK) return BREAK;
						else if (ci === REMOVE) {
							token.items.splice(i, 1);
							i -= 1;
						}
					}
					if (typeof ctrl === "function" && field === "key") ctrl = ctrl(item, path);
				}
			}
			return typeof ctrl === "function" ? ctrl(item, path) : ctrl;
		}
		/** Identify the type of a lexer token. May return `null` for unknown tokens. */
		function tokenType(source) {
			switch (source) {
				case "﻿": return "byte-order-mark";
				case "": return "doc-mode";
				case "": return "flow-error-end";
				case "": return "scalar";
				case "---": return "doc-start";
				case "...": return "doc-end";
				case "":
				case "\n":
				case "\r\n": return "newline";
				case "-": return "seq-item-ind";
				case "?": return "explicit-key-ind";
				case ":": return "map-value-ind";
				case "{": return "flow-map-start";
				case "}": return "flow-map-end";
				case "[": return "flow-seq-start";
				case "]": return "flow-seq-end";
				case ",": return "comma";
			}
			switch (source[0]) {
				case " ":
				case "	": return "space";
				case "#": return "comment";
				case "%": return "directive-line";
				case "*": return "alias";
				case "&": return "anchor";
				case "!": return "tag";
				case "'": return "single-quoted-scalar";
				case "\"": return "double-quoted-scalar";
				case "|":
				case ">": return "block-scalar-header";
			}
			return null;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/parse/lexer.js
		function isEmpty(ch) {
			switch (ch) {
				case void 0:
				case " ":
				case "\n":
				case "\r":
				case "	": return true;
				default: return false;
			}
		}
		const hexDigits = /* @__PURE__ */ new Set("0123456789ABCDEFabcdef");
		const tagChars = /* @__PURE__ */ new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()");
		const flowIndicatorChars = /* @__PURE__ */ new Set(",[]{}");
		const invalidAnchorChars = /* @__PURE__ */ new Set(" ,[]{}\n\r	");
		const isNotAnchorChar = (ch) => !ch || invalidAnchorChars.has(ch);
		/**
		* Splits an input string into lexical tokens, i.e. smaller strings that are
		* easily identifiable by `tokens.tokenType()`.
		*
		* Lexing starts always in a "stream" context. Incomplete input may be buffered
		* until a complete token can be emitted.
		*
		* In addition to slices of the original input, the following control characters
		* may also be emitted:
		*
		* - `\x02` (Start of Text): A document starts with the next token
		* - `\x18` (Cancel): Unexpected end of flow-mode (indicates an error)
		* - `\x1f` (Unit Separator): Next token is a scalar value
		* - `\u{FEFF}` (Byte order mark): Emitted separately outside documents
		*/
		var Lexer = class {
			constructor() {
				/**
				* Flag indicating whether the end of the current buffer marks the end of
				* all input
				*/
				this.atEnd = false;
				/**
				* Explicit indent set in block scalar header, as an offset from the current
				* minimum indent, so e.g. set to 1 from a header `|2+`. Set to -1 if not
				* explicitly set.
				*/
				this.blockScalarIndent = -1;
				/**
				* Block scalars that include a + (keep) chomping indicator in their header
				* include trailing empty lines, which are otherwise excluded from the
				* scalar's contents.
				*/
				this.blockScalarKeep = false;
				/** Current input */
				this.buffer = "";
				/**
				* Flag noting whether the map value indicator : can immediately follow this
				* node within a flow context.
				*/
				this.flowKey = false;
				/** Count of surrounding flow collection levels. */
				this.flowLevel = 0;
				/**
				* Minimum level of indentation required for next lines to be parsed as a
				* part of the current scalar value.
				*/
				this.indentNext = 0;
				/** Indentation level of the current line. */
				this.indentValue = 0;
				/** Position of the next \n character. */
				this.lineEndPos = null;
				/** Stores the state of the lexer if reaching the end of incpomplete input */
				this.next = null;
				/** A pointer to `buffer`; the current position of the lexer. */
				this.pos = 0;
			}
			/**
			* Generate YAML tokens from the `source` string. If `incomplete`,
			* a part of the last line may be left as a buffer for the next call.
			*
			* @returns A generator of lexical tokens
			*/
			*lex(source, incomplete = false) {
				if (source) {
					if (typeof source !== "string") throw TypeError("source is not a string");
					this.buffer = this.buffer ? this.buffer + source : source;
					this.lineEndPos = null;
				}
				this.atEnd = !incomplete;
				let next = this.next ?? "stream";
				while (next && (incomplete || this.hasChars(1))) next = yield* this.parseNext(next);
			}
			atLineEnd() {
				let i = this.pos;
				let ch = this.buffer[i];
				while (ch === " " || ch === "	") ch = this.buffer[++i];
				if (!ch || ch === "#" || ch === "\n") return true;
				if (ch === "\r") return this.buffer[i + 1] === "\n";
				return false;
			}
			charAt(n) {
				return this.buffer[this.pos + n];
			}
			continueScalar(offset) {
				let ch = this.buffer[offset];
				if (this.indentNext > 0) {
					let indent = 0;
					while (ch === " ") ch = this.buffer[++indent + offset];
					if (ch === "\r") {
						const next = this.buffer[indent + offset + 1];
						if (next === "\n" || !next && !this.atEnd) return offset + indent + 1;
					}
					return ch === "\n" || indent >= this.indentNext || !ch && !this.atEnd ? offset + indent : -1;
				}
				if (ch === "-" || ch === ".") {
					const dt = this.buffer.substr(offset, 3);
					if ((dt === "---" || dt === "...") && isEmpty(this.buffer[offset + 3])) return -1;
				}
				return offset;
			}
			getLine() {
				let end = this.lineEndPos;
				if (typeof end !== "number" || end !== -1 && end < this.pos) {
					end = this.buffer.indexOf("\n", this.pos);
					this.lineEndPos = end;
				}
				if (end === -1) return this.atEnd ? this.buffer.substring(this.pos) : null;
				if (this.buffer[end - 1] === "\r") end -= 1;
				return this.buffer.substring(this.pos, end);
			}
			hasChars(n) {
				return this.pos + n <= this.buffer.length;
			}
			setNext(state) {
				this.buffer = this.buffer.substring(this.pos);
				this.pos = 0;
				this.lineEndPos = null;
				this.next = state;
				return null;
			}
			peek(n) {
				return this.buffer.substr(this.pos, n);
			}
			*parseNext(next) {
				switch (next) {
					case "stream": return yield* this.parseStream();
					case "line-start": return yield* this.parseLineStart();
					case "block-start": return yield* this.parseBlockStart();
					case "doc": return yield* this.parseDocument();
					case "flow": return yield* this.parseFlowCollection();
					case "quoted-scalar": return yield* this.parseQuotedScalar();
					case "block-scalar": return yield* this.parseBlockScalar();
					case "plain-scalar": return yield* this.parsePlainScalar();
				}
			}
			*parseStream() {
				let line = this.getLine();
				if (line === null) return this.setNext("stream");
				if (line[0] === "﻿") {
					yield* this.pushCount(1);
					line = line.substring(1);
				}
				if (line[0] === "%") {
					let dirEnd = line.length;
					let cs = line.indexOf("#");
					while (cs !== -1) {
						const ch = line[cs - 1];
						if (ch === " " || ch === "	") {
							dirEnd = cs - 1;
							break;
						} else cs = line.indexOf("#", cs + 1);
					}
					while (true) {
						const ch = line[dirEnd - 1];
						if (ch === " " || ch === "	") dirEnd -= 1;
						else break;
					}
					const n = (yield* this.pushCount(dirEnd)) + (yield* this.pushSpaces(true));
					yield* this.pushCount(line.length - n);
					this.pushNewline();
					return "stream";
				}
				if (this.atLineEnd()) {
					const sp = yield* this.pushSpaces(true);
					yield* this.pushCount(line.length - sp);
					yield* this.pushNewline();
					return "stream";
				}
				yield "";
				return yield* this.parseLineStart();
			}
			*parseLineStart() {
				const ch = this.charAt(0);
				if (!ch && !this.atEnd) return this.setNext("line-start");
				if (ch === "-" || ch === ".") {
					if (!this.atEnd && !this.hasChars(4)) return this.setNext("line-start");
					const s = this.peek(3);
					if ((s === "---" || s === "...") && isEmpty(this.charAt(3))) {
						yield* this.pushCount(3);
						this.indentValue = 0;
						this.indentNext = 0;
						return s === "---" ? "doc" : "stream";
					}
				}
				this.indentValue = yield* this.pushSpaces(false);
				if (this.indentNext > this.indentValue && !isEmpty(this.charAt(1))) this.indentNext = this.indentValue;
				return yield* this.parseBlockStart();
			}
			*parseBlockStart() {
				const [ch0, ch1] = this.peek(2);
				if (!ch1 && !this.atEnd) return this.setNext("block-start");
				if ((ch0 === "-" || ch0 === "?" || ch0 === ":") && isEmpty(ch1)) {
					const n = (yield* this.pushCount(1)) + (yield* this.pushSpaces(true));
					this.indentNext = this.indentValue + 1;
					this.indentValue += n;
					return "block-start";
				}
				return "doc";
			}
			*parseDocument() {
				yield* this.pushSpaces(true);
				const line = this.getLine();
				if (line === null) return this.setNext("doc");
				let n = yield* this.pushIndicators();
				switch (line[n]) {
					case "#": yield* this.pushCount(line.length - n);
					case void 0:
						yield* this.pushNewline();
						return yield* this.parseLineStart();
					case "{":
					case "[":
						yield* this.pushCount(1);
						this.flowKey = false;
						this.flowLevel = 1;
						return "flow";
					case "}":
					case "]":
						yield* this.pushCount(1);
						return "doc";
					case "*":
						yield* this.pushUntil(isNotAnchorChar);
						return "doc";
					case "\"":
					case "'": return yield* this.parseQuotedScalar();
					case "|":
					case ">":
						n += yield* this.parseBlockScalarHeader();
						n += yield* this.pushSpaces(true);
						yield* this.pushCount(line.length - n);
						yield* this.pushNewline();
						return yield* this.parseBlockScalar();
					default: return yield* this.parsePlainScalar();
				}
			}
			*parseFlowCollection() {
				let nl, sp;
				let indent = -1;
				do {
					nl = yield* this.pushNewline();
					if (nl > 0) {
						sp = yield* this.pushSpaces(false);
						this.indentValue = indent = sp;
					} else sp = 0;
					sp += yield* this.pushSpaces(true);
				} while (nl + sp > 0);
				const line = this.getLine();
				if (line === null) return this.setNext("flow");
				if (indent !== -1 && indent < this.indentNext && line[0] !== "#" || indent === 0 && (line.startsWith("---") || line.startsWith("...")) && isEmpty(line[3])) {
					if (!(indent === this.indentNext - 1 && this.flowLevel === 1 && (line[0] === "]" || line[0] === "}"))) {
						this.flowLevel = 0;
						yield "";
						return yield* this.parseLineStart();
					}
				}
				let n = 0;
				while (line[n] === ",") {
					n += yield* this.pushCount(1);
					n += yield* this.pushSpaces(true);
					this.flowKey = false;
				}
				n += yield* this.pushIndicators();
				switch (line[n]) {
					case void 0: return "flow";
					case "#":
						yield* this.pushCount(line.length - n);
						return "flow";
					case "{":
					case "[":
						yield* this.pushCount(1);
						this.flowKey = false;
						this.flowLevel += 1;
						return "flow";
					case "}":
					case "]":
						yield* this.pushCount(1);
						this.flowKey = true;
						this.flowLevel -= 1;
						return this.flowLevel ? "flow" : "doc";
					case "*":
						yield* this.pushUntil(isNotAnchorChar);
						return "flow";
					case "\"":
					case "'":
						this.flowKey = true;
						return yield* this.parseQuotedScalar();
					case ":": {
						const next = this.charAt(1);
						if (this.flowKey || isEmpty(next) || next === ",") {
							this.flowKey = false;
							yield* this.pushCount(1);
							yield* this.pushSpaces(true);
							return "flow";
						}
					}
					default:
						this.flowKey = false;
						return yield* this.parsePlainScalar();
				}
			}
			*parseQuotedScalar() {
				const quote = this.charAt(0);
				let end = this.buffer.indexOf(quote, this.pos + 1);
				if (quote === "'") while (end !== -1 && this.buffer[end + 1] === "'") end = this.buffer.indexOf("'", end + 2);
				else while (end !== -1) {
					let n = 0;
					while (this.buffer[end - 1 - n] === "\\") n += 1;
					if (n % 2 === 0) break;
					end = this.buffer.indexOf("\"", end + 1);
				}
				const qb = this.buffer.substring(0, end);
				let nl = qb.indexOf("\n", this.pos);
				if (nl !== -1) {
					while (nl !== -1) {
						const cs = this.continueScalar(nl + 1);
						if (cs === -1) break;
						nl = qb.indexOf("\n", cs);
					}
					if (nl !== -1) end = nl - (qb[nl - 1] === "\r" ? 2 : 1);
				}
				if (end === -1) {
					if (!this.atEnd) return this.setNext("quoted-scalar");
					end = this.buffer.length;
				}
				yield* this.pushToIndex(end + 1, false);
				return this.flowLevel ? "flow" : "doc";
			}
			*parseBlockScalarHeader() {
				this.blockScalarIndent = -1;
				this.blockScalarKeep = false;
				let i = this.pos;
				while (true) {
					const ch = this.buffer[++i];
					if (ch === "+") this.blockScalarKeep = true;
					else if (ch > "0" && ch <= "9") this.blockScalarIndent = Number(ch) - 1;
					else if (ch !== "-") break;
				}
				return yield* this.pushUntil((ch) => isEmpty(ch) || ch === "#");
			}
			*parseBlockScalar() {
				let nl = this.pos - 1;
				let indent = 0;
				let ch;
				loop: for (let i = this.pos; ch = this.buffer[i]; ++i) switch (ch) {
					case " ":
						indent += 1;
						break;
					case "\n":
						nl = i;
						indent = 0;
						break;
					case "\r": {
						const next = this.buffer[i + 1];
						if (!next && !this.atEnd) return this.setNext("block-scalar");
						if (next === "\n") break;
					}
					default: break loop;
				}
				if (!ch && !this.atEnd) return this.setNext("block-scalar");
				if (indent >= this.indentNext) {
					if (this.blockScalarIndent === -1) this.indentNext = indent;
					else this.indentNext = this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
					do {
						const cs = this.continueScalar(nl + 1);
						if (cs === -1) break;
						nl = this.buffer.indexOf("\n", cs);
					} while (nl !== -1);
					if (nl === -1) {
						if (!this.atEnd) return this.setNext("block-scalar");
						nl = this.buffer.length;
					}
				}
				let i = nl + 1;
				ch = this.buffer[i];
				while (ch === " ") ch = this.buffer[++i];
				if (ch === "	") {
					while (ch === "	" || ch === " " || ch === "\r" || ch === "\n") ch = this.buffer[++i];
					nl = i - 1;
				} else if (!this.blockScalarKeep) do {
					let i = nl - 1;
					let ch = this.buffer[i];
					if (ch === "\r") ch = this.buffer[--i];
					const lastChar = i;
					while (ch === " ") ch = this.buffer[--i];
					if (ch === "\n" && i >= this.pos && i + 1 + indent > lastChar) nl = i;
					else break;
				} while (true);
				yield "";
				yield* this.pushToIndex(nl + 1, true);
				return yield* this.parseLineStart();
			}
			*parsePlainScalar() {
				const inFlow = this.flowLevel > 0;
				let end = this.pos - 1;
				let i = this.pos - 1;
				let ch;
				while (ch = this.buffer[++i]) if (ch === ":") {
					const next = this.buffer[i + 1];
					if (isEmpty(next) || inFlow && flowIndicatorChars.has(next)) break;
					end = i;
				} else if (isEmpty(ch)) {
					let next = this.buffer[i + 1];
					if (ch === "\r") if (next === "\n") {
						i += 1;
						ch = "\n";
						next = this.buffer[i + 1];
					} else end = i;
					if (next === "#" || inFlow && flowIndicatorChars.has(next)) break;
					if (ch === "\n") {
						const cs = this.continueScalar(i + 1);
						if (cs === -1) break;
						i = Math.max(i, cs - 2);
					}
				} else {
					if (inFlow && flowIndicatorChars.has(ch)) break;
					end = i;
				}
				if (!ch && !this.atEnd) return this.setNext("plain-scalar");
				yield "";
				yield* this.pushToIndex(end + 1, true);
				return inFlow ? "flow" : "doc";
			}
			*pushCount(n) {
				if (n > 0) {
					yield this.buffer.substr(this.pos, n);
					this.pos += n;
					return n;
				}
				return 0;
			}
			*pushToIndex(i, allowEmpty) {
				const s = this.buffer.slice(this.pos, i);
				if (s) {
					yield s;
					this.pos += s.length;
					return s.length;
				} else if (allowEmpty) yield "";
				return 0;
			}
			*pushIndicators() {
				let n = 0;
				loop: while (true) {
					switch (this.charAt(0)) {
						case "!":
							n += yield* this.pushTag();
							n += yield* this.pushSpaces(true);
							continue loop;
						case "&":
							n += yield* this.pushUntil(isNotAnchorChar);
							n += yield* this.pushSpaces(true);
							continue loop;
						case "-":
						case "?":
						case ":": {
							const inFlow = this.flowLevel > 0;
							const ch1 = this.charAt(1);
							if (isEmpty(ch1) || inFlow && flowIndicatorChars.has(ch1)) {
								if (!inFlow) this.indentNext = this.indentValue + 1;
								else if (this.flowKey) this.flowKey = false;
								n += yield* this.pushCount(1);
								n += yield* this.pushSpaces(true);
								continue loop;
							}
						}
					}
					break loop;
				}
				return n;
			}
			*pushTag() {
				if (this.charAt(1) === "<") {
					let i = this.pos + 2;
					let ch = this.buffer[i];
					while (!isEmpty(ch) && ch !== ">") ch = this.buffer[++i];
					return yield* this.pushToIndex(ch === ">" ? i + 1 : i, false);
				} else {
					let i = this.pos + 1;
					let ch = this.buffer[i];
					while (ch) if (tagChars.has(ch)) ch = this.buffer[++i];
					else if (ch === "%" && hexDigits.has(this.buffer[i + 1]) && hexDigits.has(this.buffer[i + 2])) ch = this.buffer[i += 3];
					else break;
					return yield* this.pushToIndex(i, false);
				}
			}
			*pushNewline() {
				const ch = this.buffer[this.pos];
				if (ch === "\n") return yield* this.pushCount(1);
				else if (ch === "\r" && this.charAt(1) === "\n") return yield* this.pushCount(2);
				else return 0;
			}
			*pushSpaces(allowTabs) {
				let i = this.pos - 1;
				let ch;
				do
					ch = this.buffer[++i];
				while (ch === " " || allowTabs && ch === "	");
				const n = i - this.pos;
				if (n > 0) {
					yield this.buffer.substr(this.pos, n);
					this.pos = i;
				}
				return n;
			}
			*pushUntil(test) {
				let i = this.pos;
				let ch = this.buffer[i];
				while (!test(ch)) ch = this.buffer[++i];
				return yield* this.pushToIndex(i, false);
			}
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/parse/line-counter.js
		/**
		* Tracks newlines during parsing in order to provide an efficient API for
		* determining the one-indexed `{ line, col }` position for any offset
		* within the input.
		*/
		var LineCounter = class {
			constructor() {
				this.lineStarts = [];
				/**
				* Should be called in ascending order. Otherwise, call
				* `lineCounter.lineStarts.sort()` before calling `linePos()`.
				*/
				this.addNewLine = (offset) => this.lineStarts.push(offset);
				/**
				* Performs a binary search and returns the 1-indexed { line, col }
				* position of `offset`. If `line === 0`, `addNewLine` has never been
				* called or `offset` is before the first known newline.
				*/
				this.linePos = (offset) => {
					let low = 0;
					let high = this.lineStarts.length;
					while (low < high) {
						const mid = low + high >> 1;
						if (this.lineStarts[mid] < offset) low = mid + 1;
						else high = mid;
					}
					if (this.lineStarts[low] === offset) return {
						line: low + 1,
						col: 1
					};
					if (low === 0) return {
						line: 0,
						col: offset
					};
					const start = this.lineStarts[low - 1];
					return {
						line: low,
						col: offset - start + 1
					};
				};
			}
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/parse/parser.js
		function includesToken(list, type) {
			for (let i = 0; i < list.length; ++i) if (list[i].type === type) return true;
			return false;
		}
		function findNonEmptyIndex(list) {
			for (let i = 0; i < list.length; ++i) switch (list[i].type) {
				case "space":
				case "comment":
				case "newline": break;
				default: return i;
			}
			return -1;
		}
		function isFlowToken(token) {
			switch (token?.type) {
				case "alias":
				case "scalar":
				case "single-quoted-scalar":
				case "double-quoted-scalar":
				case "flow-collection": return true;
				default: return false;
			}
		}
		function getPrevProps(parent) {
			switch (parent.type) {
				case "document": return parent.start;
				case "block-map": {
					const it = parent.items[parent.items.length - 1];
					return it.sep ?? it.start;
				}
				case "block-seq": return parent.items[parent.items.length - 1].start;
				/* istanbul ignore next should not happen */
				default: return [];
			}
		}
		/** Note: May modify input array */
		function getFirstKeyStartProps(prev) {
			if (prev.length === 0) return [];
			let i = prev.length;
			loop: while (--i >= 0) switch (prev[i].type) {
				case "doc-start":
				case "explicit-key-ind":
				case "map-value-ind":
				case "seq-item-ind":
				case "newline": break loop;
			}
			while (prev[++i]?.type === "space");
			return prev.splice(i, prev.length);
		}
		function arrayPushArray(target, source) {
			if (source.length < 1e5) Array.prototype.push.apply(target, source);
			else for (let i = 0; i < source.length; ++i) target.push(source[i]);
		}
		function fixFlowSeqItems(fc) {
			if (fc.start.type === "flow-seq-start") {
				for (const it of fc.items) if (it.sep && !it.value && !includesToken(it.start, "explicit-key-ind") && !includesToken(it.sep, "map-value-ind")) {
					if (it.key) it.value = it.key;
					delete it.key;
					if (isFlowToken(it.value)) if (it.value.end) arrayPushArray(it.value.end, it.sep);
					else it.value.end = it.sep;
					else arrayPushArray(it.start, it.sep);
					delete it.sep;
				}
			}
		}
		/**
		* A YAML concrete syntax tree (CST) parser
		*
		* ```ts
		* const src: string = ...
		* for (const token of new Parser().parse(src)) {
		*   // token: Token
		* }
		* ```
		*
		* To use the parser with a user-provided lexer:
		*
		* ```ts
		* function* parse(source: string, lexer: Lexer) {
		*   const parser = new Parser()
		*   for (const lexeme of lexer.lex(source))
		*     yield* parser.next(lexeme)
		*   yield* parser.end()
		* }
		*
		* const src: string = ...
		* const lexer = new Lexer()
		* for (const token of parse(src, lexer)) {
		*   // token: Token
		* }
		* ```
		*/
		var Parser = class {
			/**
			* @param onNewLine - If defined, called separately with the start position of
			*   each new line (in `parse()`, including the start of input).
			*/
			constructor(onNewLine) {
				/** If true, space and sequence indicators count as indentation */
				this.atNewLine = true;
				/** If true, next token is a scalar value */
				this.atScalar = false;
				/** Current indentation level */
				this.indent = 0;
				/** Current offset since the start of parsing */
				this.offset = 0;
				/** On the same line with a block map key */
				this.onKeyLine = false;
				/** Top indicates the node that's currently being built */
				this.stack = [];
				/** The source of the current token, set in parse() */
				this.source = "";
				/** The type of the current token, set in parse() */
				this.type = "";
				this.lexer = new Lexer();
				this.onNewLine = onNewLine;
			}
			/**
			* Parse `source` as a YAML stream.
			* If `incomplete`, a part of the last line may be left as a buffer for the next call.
			*
			* Errors are not thrown, but yielded as `{ type: 'error', message }` tokens.
			*
			* @returns A generator of tokens representing each directive, document, and other structure.
			*/
			*parse(source, incomplete = false) {
				if (this.onNewLine && this.offset === 0) this.onNewLine(0);
				for (const lexeme of this.lexer.lex(source, incomplete)) yield* this.next(lexeme);
				if (!incomplete) yield* this.end();
			}
			/**
			* Advance the parser by the `source` of one lexical token.
			*/
			*next(source) {
				this.source = source;
				if (this.atScalar) {
					this.atScalar = false;
					yield* this.step();
					this.offset += source.length;
					return;
				}
				const type = tokenType(source);
				if (!type) {
					const message = `Not a YAML token: ${source}`;
					yield* this.pop({
						type: "error",
						offset: this.offset,
						message,
						source
					});
					this.offset += source.length;
				} else if (type === "scalar") {
					this.atNewLine = false;
					this.atScalar = true;
					this.type = "scalar";
				} else {
					this.type = type;
					yield* this.step();
					switch (type) {
						case "newline":
							this.atNewLine = true;
							this.indent = 0;
							if (this.onNewLine) this.onNewLine(this.offset + source.length);
							break;
						case "space":
							if (this.atNewLine && source[0] === " ") this.indent += source.length;
							break;
						case "explicit-key-ind":
						case "map-value-ind":
						case "seq-item-ind":
							if (this.atNewLine) this.indent += source.length;
							break;
						case "doc-mode":
						case "flow-error-end": return;
						default: this.atNewLine = false;
					}
					this.offset += source.length;
				}
			}
			/** Call at end of input to push out any remaining constructions */
			*end() {
				while (this.stack.length > 0) yield* this.pop();
			}
			get sourceToken() {
				return {
					type: this.type,
					offset: this.offset,
					indent: this.indent,
					source: this.source
				};
			}
			*step() {
				const top = this.peek(1);
				if (this.type === "doc-end" && top?.type !== "doc-end") {
					while (this.stack.length > 0) yield* this.pop();
					this.stack.push({
						type: "doc-end",
						offset: this.offset,
						source: this.source
					});
					return;
				}
				if (!top) return yield* this.stream();
				switch (top.type) {
					case "document": return yield* this.document(top);
					case "alias":
					case "scalar":
					case "single-quoted-scalar":
					case "double-quoted-scalar": return yield* this.scalar(top);
					case "block-scalar": return yield* this.blockScalar(top);
					case "block-map": return yield* this.blockMap(top);
					case "block-seq": return yield* this.blockSequence(top);
					case "flow-collection": return yield* this.flowCollection(top);
					case "doc-end": return yield* this.documentEnd(top);
				}
				/* istanbul ignore next should not happen */
				yield* this.pop();
			}
			peek(n) {
				return this.stack[this.stack.length - n];
			}
			*pop(error) {
				const token = error ?? this.stack.pop();
				/* istanbul ignore if should not happen */
				if (!token) yield {
					type: "error",
					offset: this.offset,
					source: "",
					message: "Tried to pop an empty stack"
				};
				else if (this.stack.length === 0) yield token;
				else {
					const top = this.peek(1);
					if (token.type === "block-scalar") token.indent = "indent" in top ? top.indent : 0;
					else if (token.type === "flow-collection" && top.type === "document") token.indent = 0;
					if (token.type === "flow-collection") fixFlowSeqItems(token);
					switch (top.type) {
						case "document":
							top.value = token;
							break;
						case "block-scalar":
							top.props.push(token);
							break;
						case "block-map": {
							const it = top.items[top.items.length - 1];
							if (it.value) {
								top.items.push({
									start: [],
									key: token,
									sep: []
								});
								this.onKeyLine = true;
								return;
							} else if (it.sep) it.value = token;
							else {
								Object.assign(it, {
									key: token,
									sep: []
								});
								this.onKeyLine = !it.explicitKey;
								return;
							}
							break;
						}
						case "block-seq": {
							const it = top.items[top.items.length - 1];
							if (it.value) top.items.push({
								start: [],
								value: token
							});
							else it.value = token;
							break;
						}
						case "flow-collection": {
							const it = top.items[top.items.length - 1];
							if (!it || it.value) top.items.push({
								start: [],
								key: token,
								sep: []
							});
							else if (it.sep) it.value = token;
							else Object.assign(it, {
								key: token,
								sep: []
							});
							return;
						}
						/* istanbul ignore next should not happen */
						default:
							yield* this.pop();
							yield* this.pop(token);
					}
					if ((top.type === "document" || top.type === "block-map" || top.type === "block-seq") && (token.type === "block-map" || token.type === "block-seq")) {
						const last = token.items[token.items.length - 1];
						if (last && !last.sep && !last.value && last.start.length > 0 && findNonEmptyIndex(last.start) === -1 && (token.indent === 0 || last.start.every((st) => st.type !== "comment" || st.indent < token.indent))) {
							if (top.type === "document") top.end = last.start;
							else top.items.push({ start: last.start });
							token.items.splice(-1, 1);
						}
					}
				}
			}
			*stream() {
				switch (this.type) {
					case "directive-line":
						yield {
							type: "directive",
							offset: this.offset,
							source: this.source
						};
						return;
					case "byte-order-mark":
					case "space":
					case "comment":
					case "newline":
						yield this.sourceToken;
						return;
					case "doc-mode":
					case "doc-start": {
						const doc = {
							type: "document",
							offset: this.offset,
							start: []
						};
						if (this.type === "doc-start") doc.start.push(this.sourceToken);
						this.stack.push(doc);
						return;
					}
				}
				yield {
					type: "error",
					offset: this.offset,
					message: `Unexpected ${this.type} token in YAML stream`,
					source: this.source
				};
			}
			*document(doc) {
				if (doc.value) return yield* this.lineEnd(doc);
				switch (this.type) {
					case "doc-start":
						if (findNonEmptyIndex(doc.start) !== -1) {
							yield* this.pop();
							yield* this.step();
						} else doc.start.push(this.sourceToken);
						return;
					case "anchor":
					case "tag":
					case "space":
					case "comment":
					case "newline":
						doc.start.push(this.sourceToken);
						return;
				}
				const bv = this.startBlockValue(doc);
				if (bv) this.stack.push(bv);
				else yield {
					type: "error",
					offset: this.offset,
					message: `Unexpected ${this.type} token in YAML document`,
					source: this.source
				};
			}
			*scalar(scalar) {
				if (this.type === "map-value-ind") {
					const start = getFirstKeyStartProps(getPrevProps(this.peek(2)));
					let sep;
					if (scalar.end) {
						sep = scalar.end;
						sep.push(this.sourceToken);
						delete scalar.end;
					} else sep = [this.sourceToken];
					const map = {
						type: "block-map",
						offset: scalar.offset,
						indent: scalar.indent,
						items: [{
							start,
							key: scalar,
							sep
						}]
					};
					this.onKeyLine = true;
					this.stack[this.stack.length - 1] = map;
				} else yield* this.lineEnd(scalar);
			}
			*blockScalar(scalar) {
				switch (this.type) {
					case "space":
					case "comment":
					case "newline":
						scalar.props.push(this.sourceToken);
						return;
					case "scalar":
						scalar.source = this.source;
						this.atNewLine = true;
						this.indent = 0;
						if (this.onNewLine) {
							let nl = this.source.indexOf("\n") + 1;
							while (nl !== 0) {
								this.onNewLine(this.offset + nl);
								nl = this.source.indexOf("\n", nl) + 1;
							}
						}
						yield* this.pop();
						break;
					/* istanbul ignore next should not happen */
					default:
						yield* this.pop();
						yield* this.step();
				}
			}
			*blockMap(map) {
				const it = map.items[map.items.length - 1];
				switch (this.type) {
					case "newline":
						this.onKeyLine = false;
						if (it.value) {
							const end = "end" in it.value ? it.value.end : void 0;
							if ((Array.isArray(end) ? end[end.length - 1] : void 0)?.type === "comment") end?.push(this.sourceToken);
							else map.items.push({ start: [this.sourceToken] });
						} else if (it.sep) it.sep.push(this.sourceToken);
						else it.start.push(this.sourceToken);
						return;
					case "space":
					case "comment":
						if (it.value) map.items.push({ start: [this.sourceToken] });
						else if (it.sep) it.sep.push(this.sourceToken);
						else {
							if (this.atIndentedComment(it.start, map.indent)) {
								const end = map.items[map.items.length - 2]?.value?.end;
								if (Array.isArray(end)) {
									arrayPushArray(end, it.start);
									end.push(this.sourceToken);
									map.items.pop();
									return;
								}
							}
							it.start.push(this.sourceToken);
						}
						return;
				}
				if (this.indent >= map.indent) {
					const atMapIndent = !this.onKeyLine && this.indent === map.indent;
					const atNextItem = atMapIndent && (it.sep || it.explicitKey) && this.type !== "seq-item-ind";
					let start = [];
					if (atNextItem && it.sep && !it.value) {
						const nl = [];
						for (let i = 0; i < it.sep.length; ++i) {
							const st = it.sep[i];
							switch (st.type) {
								case "newline":
									nl.push(i);
									break;
								case "space": break;
								case "comment":
									if (st.indent > map.indent) nl.length = 0;
									break;
								default: nl.length = 0;
							}
						}
						if (nl.length >= 2) start = it.sep.splice(nl[1]);
					}
					switch (this.type) {
						case "anchor":
						case "tag":
							if (atNextItem || it.value) {
								start.push(this.sourceToken);
								map.items.push({ start });
								this.onKeyLine = true;
							} else if (it.sep) it.sep.push(this.sourceToken);
							else it.start.push(this.sourceToken);
							return;
						case "explicit-key-ind":
							if (!it.sep && !it.explicitKey) {
								it.start.push(this.sourceToken);
								it.explicitKey = true;
							} else if (atNextItem || it.value) {
								start.push(this.sourceToken);
								map.items.push({
									start,
									explicitKey: true
								});
							} else this.stack.push({
								type: "block-map",
								offset: this.offset,
								indent: this.indent,
								items: [{
									start: [this.sourceToken],
									explicitKey: true
								}]
							});
							this.onKeyLine = true;
							return;
						case "map-value-ind":
							if (it.explicitKey) if (!it.sep) if (includesToken(it.start, "newline")) Object.assign(it, {
								key: null,
								sep: [this.sourceToken]
							});
							else {
								const start = getFirstKeyStartProps(it.start);
								this.stack.push({
									type: "block-map",
									offset: this.offset,
									indent: this.indent,
									items: [{
										start,
										key: null,
										sep: [this.sourceToken]
									}]
								});
							}
							else if (it.value) map.items.push({
								start: [],
								key: null,
								sep: [this.sourceToken]
							});
							else if (includesToken(it.sep, "map-value-ind")) this.stack.push({
								type: "block-map",
								offset: this.offset,
								indent: this.indent,
								items: [{
									start,
									key: null,
									sep: [this.sourceToken]
								}]
							});
							else if (isFlowToken(it.key) && !includesToken(it.sep, "newline")) {
								const start = getFirstKeyStartProps(it.start);
								const key = it.key;
								const sep = it.sep;
								sep.push(this.sourceToken);
								delete it.key;
								delete it.sep;
								this.stack.push({
									type: "block-map",
									offset: this.offset,
									indent: this.indent,
									items: [{
										start,
										key,
										sep
									}]
								});
							} else if (start.length > 0) it.sep = it.sep.concat(start, this.sourceToken);
							else it.sep.push(this.sourceToken);
							else if (!it.sep) Object.assign(it, {
								key: null,
								sep: [this.sourceToken]
							});
							else if (it.value || atNextItem) map.items.push({
								start,
								key: null,
								sep: [this.sourceToken]
							});
							else if (includesToken(it.sep, "map-value-ind")) this.stack.push({
								type: "block-map",
								offset: this.offset,
								indent: this.indent,
								items: [{
									start: [],
									key: null,
									sep: [this.sourceToken]
								}]
							});
							else it.sep.push(this.sourceToken);
							this.onKeyLine = true;
							return;
						case "alias":
						case "scalar":
						case "single-quoted-scalar":
						case "double-quoted-scalar": {
							const fs = this.flowScalar(this.type);
							if (atNextItem || it.value) {
								map.items.push({
									start,
									key: fs,
									sep: []
								});
								this.onKeyLine = true;
							} else if (it.sep) this.stack.push(fs);
							else {
								Object.assign(it, {
									key: fs,
									sep: []
								});
								this.onKeyLine = true;
							}
							return;
						}
						default: {
							const bv = this.startBlockValue(map);
							if (bv) {
								if (bv.type === "block-seq") {
									if (!it.explicitKey && it.sep && !includesToken(it.sep, "newline")) {
										yield* this.pop({
											type: "error",
											offset: this.offset,
											message: "Unexpected block-seq-ind on same line with key",
											source: this.source
										});
										return;
									}
								} else if (atMapIndent) map.items.push({ start });
								this.stack.push(bv);
								return;
							}
						}
					}
				}
				yield* this.pop();
				yield* this.step();
			}
			*blockSequence(seq) {
				const it = seq.items[seq.items.length - 1];
				switch (this.type) {
					case "newline":
						if (it.value) {
							const end = "end" in it.value ? it.value.end : void 0;
							if ((Array.isArray(end) ? end[end.length - 1] : void 0)?.type === "comment") end?.push(this.sourceToken);
							else seq.items.push({ start: [this.sourceToken] });
						} else it.start.push(this.sourceToken);
						return;
					case "space":
					case "comment":
						if (it.value) seq.items.push({ start: [this.sourceToken] });
						else {
							if (this.atIndentedComment(it.start, seq.indent)) {
								const end = seq.items[seq.items.length - 2]?.value?.end;
								if (Array.isArray(end)) {
									arrayPushArray(end, it.start);
									end.push(this.sourceToken);
									seq.items.pop();
									return;
								}
							}
							it.start.push(this.sourceToken);
						}
						return;
					case "anchor":
					case "tag":
						if (it.value || this.indent <= seq.indent) break;
						it.start.push(this.sourceToken);
						return;
					case "seq-item-ind":
						if (this.indent !== seq.indent) break;
						if (it.value || includesToken(it.start, "seq-item-ind")) seq.items.push({ start: [this.sourceToken] });
						else it.start.push(this.sourceToken);
						return;
				}
				if (this.indent > seq.indent) {
					const bv = this.startBlockValue(seq);
					if (bv) {
						this.stack.push(bv);
						return;
					}
				}
				yield* this.pop();
				yield* this.step();
			}
			*flowCollection(fc) {
				const it = fc.items[fc.items.length - 1];
				if (this.type === "flow-error-end") {
					let top;
					do {
						yield* this.pop();
						top = this.peek(1);
					} while (top?.type === "flow-collection");
				} else if (fc.end.length === 0) {
					switch (this.type) {
						case "comma":
						case "explicit-key-ind":
							if (!it || it.sep) fc.items.push({ start: [this.sourceToken] });
							else it.start.push(this.sourceToken);
							return;
						case "map-value-ind":
							if (!it || it.value) fc.items.push({
								start: [],
								key: null,
								sep: [this.sourceToken]
							});
							else if (it.sep) it.sep.push(this.sourceToken);
							else Object.assign(it, {
								key: null,
								sep: [this.sourceToken]
							});
							return;
						case "space":
						case "comment":
						case "newline":
						case "anchor":
						case "tag":
							if (!it || it.value) fc.items.push({ start: [this.sourceToken] });
							else if (it.sep) it.sep.push(this.sourceToken);
							else it.start.push(this.sourceToken);
							return;
						case "alias":
						case "scalar":
						case "single-quoted-scalar":
						case "double-quoted-scalar": {
							const fs = this.flowScalar(this.type);
							if (!it || it.value) fc.items.push({
								start: [],
								key: fs,
								sep: []
							});
							else if (it.sep) this.stack.push(fs);
							else Object.assign(it, {
								key: fs,
								sep: []
							});
							return;
						}
						case "flow-map-end":
						case "flow-seq-end":
							fc.end.push(this.sourceToken);
							return;
					}
					const bv = this.startBlockValue(fc);
					/* istanbul ignore else should not happen */
					if (bv) this.stack.push(bv);
					else {
						yield* this.pop();
						yield* this.step();
					}
				} else {
					const parent = this.peek(2);
					if (parent.type === "block-map" && (this.type === "map-value-ind" && parent.indent === fc.indent || this.type === "newline" && !parent.items[parent.items.length - 1].sep)) {
						yield* this.pop();
						yield* this.step();
					} else if (this.type === "map-value-ind" && parent.type !== "flow-collection") {
						const start = getFirstKeyStartProps(getPrevProps(parent));
						fixFlowSeqItems(fc);
						const sep = fc.end.splice(1, fc.end.length);
						sep.push(this.sourceToken);
						const map = {
							type: "block-map",
							offset: fc.offset,
							indent: fc.indent,
							items: [{
								start,
								key: fc,
								sep
							}]
						};
						this.onKeyLine = true;
						this.stack[this.stack.length - 1] = map;
					} else yield* this.lineEnd(fc);
				}
			}
			flowScalar(type) {
				if (this.onNewLine) {
					let nl = this.source.indexOf("\n") + 1;
					while (nl !== 0) {
						this.onNewLine(this.offset + nl);
						nl = this.source.indexOf("\n", nl) + 1;
					}
				}
				return {
					type,
					offset: this.offset,
					indent: this.indent,
					source: this.source
				};
			}
			startBlockValue(parent) {
				switch (this.type) {
					case "alias":
					case "scalar":
					case "single-quoted-scalar":
					case "double-quoted-scalar": return this.flowScalar(this.type);
					case "block-scalar-header": return {
						type: "block-scalar",
						offset: this.offset,
						indent: this.indent,
						props: [this.sourceToken],
						source: ""
					};
					case "flow-map-start":
					case "flow-seq-start": return {
						type: "flow-collection",
						offset: this.offset,
						indent: this.indent,
						start: this.sourceToken,
						items: [],
						end: []
					};
					case "seq-item-ind": return {
						type: "block-seq",
						offset: this.offset,
						indent: this.indent,
						items: [{ start: [this.sourceToken] }]
					};
					case "explicit-key-ind": {
						this.onKeyLine = true;
						const start = getFirstKeyStartProps(getPrevProps(parent));
						start.push(this.sourceToken);
						return {
							type: "block-map",
							offset: this.offset,
							indent: this.indent,
							items: [{
								start,
								explicitKey: true
							}]
						};
					}
					case "map-value-ind": {
						this.onKeyLine = true;
						const start = getFirstKeyStartProps(getPrevProps(parent));
						return {
							type: "block-map",
							offset: this.offset,
							indent: this.indent,
							items: [{
								start,
								key: null,
								sep: [this.sourceToken]
							}]
						};
					}
				}
				return null;
			}
			atIndentedComment(start, indent) {
				if (this.type !== "comment") return false;
				if (this.indent <= indent) return false;
				return start.every((st) => st.type === "newline" || st.type === "space");
			}
			*documentEnd(docEnd) {
				if (this.type !== "doc-mode") {
					if (docEnd.end) docEnd.end.push(this.sourceToken);
					else docEnd.end = [this.sourceToken];
					if (this.type === "newline") yield* this.pop();
				}
			}
			*lineEnd(token) {
				switch (this.type) {
					case "comma":
					case "doc-start":
					case "doc-end":
					case "flow-seq-end":
					case "flow-map-end":
					case "map-value-ind":
						yield* this.pop();
						yield* this.step();
						break;
					case "newline": this.onKeyLine = false;
					default:
						if (token.end) token.end.push(this.sourceToken);
						else token.end = [this.sourceToken];
						if (this.type === "newline") yield* this.pop();
				}
			}
		};
		//#endregion
		//#region ../../node_modules/.pnpm/yaml@2.9.0/node_modules/yaml/browser/dist/public-api.js
		function parseOptions(options) {
			const prettyErrors = options.prettyErrors !== false;
			return {
				lineCounter: options.lineCounter || prettyErrors && new LineCounter() || null,
				prettyErrors
			};
		}
		/** Parse an input string into a single YAML.Document */
		function parseDocument(source, options = {}) {
			const { lineCounter, prettyErrors } = parseOptions(options);
			const parser = new Parser(lineCounter?.addNewLine);
			const composer = new Composer(options);
			let doc = null;
			for (const _doc of composer.compose(parser.parse(source), true, source.length)) if (!doc) doc = _doc;
			else if (doc.options.logLevel !== "silent") {
				doc.errors.push(new YAMLParseError(_doc.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
				break;
			}
			if (prettyErrors && lineCounter) {
				doc.errors.forEach(prettifyError(source, lineCounter));
				doc.warnings.forEach(prettifyError(source, lineCounter));
			}
			return doc;
		}
		function parse(src, reviver, options) {
			let _reviver = void 0;
			if (typeof reviver === "function") _reviver = reviver;
			else if (options === void 0 && reviver && typeof reviver === "object") options = reviver;
			const doc = parseDocument(src, options);
			if (!doc) return null;
			doc.warnings.forEach((warning) => warn(doc.options.logLevel, warning));
			if (doc.errors.length > 0) if (doc.options.logLevel !== "silent") throw doc.errors[0];
			else doc.errors = [];
			return doc.toJS(Object.assign({ reviver: _reviver }, options));
		}
		function stringify(value, replacer, options) {
			let _replacer = null;
			if (typeof replacer === "function" || Array.isArray(replacer)) _replacer = replacer;
			else if (options === void 0 && replacer) options = replacer;
			if (typeof options === "string") options = options.length;
			if (typeof options === "number") {
				const indent = Math.round(options);
				options = indent < 1 ? void 0 : indent > 8 ? { indent: 8 } : { indent };
			}
			if (value === void 0) {
				const { keepUndefined } = options ?? replacer ?? {};
				if (!keepUndefined) return void 0;
			}
			if (isDocument(value) && !_replacer) return value.toString(options);
			return new Document(value, _replacer, options).toString(options);
		}
		//#endregion
		//#region src/group-yaml.ts
		/**
		* Single-group yaml codec matching `groups/<group-id>.yaml`.
		* group-id lives in the filename, not the document body.
		*/
		/**
		* Parse one group yaml document.
		* @param raw - yaml text from `groups/<group-id>.yaml` or an export file.
		* @param groupId - stable group id taken from the filename stem.
		* @returns the full group payload.
		*/
		function parseGroupYaml(raw, groupId) {
			const value = parse(raw);
			if (typeof value !== "object" || value === null) throw new TypeError(`invalid group ${groupId}`);
			const record = value;
			const displayName = record.displayName;
			const capsules = record.capsules;
			if (typeof displayName !== "string" || displayName.length === 0) throw new TypeError(`group ${groupId} missing displayName`);
			if (!Array.isArray(capsules)) throw new TypeError(`group ${groupId} missing capsules`);
			return {
				id: groupId,
				displayName,
				capsules: capsules.map((entry, index) => {
					if (typeof entry !== "object" || entry === null) throw new TypeError(`group ${groupId} capsule ${index}`);
					const row = entry;
					if (typeof row.id !== "string" || typeof row.title !== "string" || typeof row.body !== "string") throw new TypeError(`group ${groupId} capsule ${index} fields`);
					return {
						id: row.id,
						title: row.title,
						body: row.body
					};
				})
			};
		}
		/**
		* Serialize a group to the on-disk yaml document (no group-id field).
		* @param group - displayName and capsules to write.
		* @returns yaml text isomorphic with `groups/<group-id>.yaml`.
		*/
		function stringifyGroupYaml(group) {
			return stringify({
				displayName: group.displayName,
				capsules: group.capsules.map((capsule) => ({
					id: capsule.id,
					title: capsule.title,
					body: capsule.body
				}))
			});
		}
		//#endregion
		//#region src/client/surface.ts
		/**
		* Per-session SOP capsules client state: library load, pick/manage overlay, and Remote mutations.
		* @module @nangeagi/dsh-sop-capsules/client/surface
		*/
		const INITIAL = Object.freeze({
			libraryStatus: "idle",
			panelOpen: false,
			panelMode: "pick",
			groups: [],
			listError: null,
			selectedGroupId: null,
			groupStatus: "idle",
			capsules: [],
			groupError: null,
			searchQuery: "",
			injectMode: "replace",
			injecting: false,
			editor: { kind: "none" },
			confirm: null,
			mutationStatus: "idle",
			mutationError: null,
			orphanBanner: false
		});
		/** localStorage key for workspace-scoped Replace/Append preference. */
		function injectModeStorageKey(workspaceId) {
			return `sop-capsules:inject-mode:${workspaceId}`;
		}
		/**
		* Mint a file-safe group-id or capsule-id. v1 never offers a rename-id UI.
		* @param prefix - `g` for groups, `c` for capsules.
		* @returns a unique id.
		*/
		function newStableId(prefix) {
			return `${prefix}-${crypto.randomUUID()}`;
		}
		/**
		* Move `draggedId` to the current index of `targetId`.
		* @param ids - current order.
		* @param draggedId - id being dropped.
		* @param targetId - drop target id.
		* @returns a new ordered array, or the original order when ids are unknown.
		*/
		function moveIdBefore(ids, draggedId, targetId) {
			if (draggedId === targetId) return ids;
			const from = ids.indexOf(draggedId);
			const to = ids.indexOf(targetId);
			if (from < 0 || to < 0) return ids;
			const next = [...ids];
			next.splice(from, 1);
			next.splice(to, 0, draggedId);
			return next;
		}
		/** File-stem group-id from an import/export filename. */
		function groupIdFromFilename(filename) {
			return filename.replace(/\.(ya?ml)$/i, "");
		}
		/**
		* Session-scoped SOP capsules controller backing header and overlay entries.
		*/
		var SopCapsulesSurface = class {
			listLibrary;
			getGroup;
			sessionId;
			mutate;
			/** Shared session view for inject hooks. */
			state;
			disposed = false;
			groupRequest = 0;
			/**
			* @param listLibrary - Host `sopCapsules.listLibrary` for this session.
			* @param getGroup - Host `sopCapsules.getGroup` for this session.
			* @param sessionId - owning session id.
			* @param mutate - Host save/delete/reorder used by manage CRUD.
			*/
			constructor(listLibrary, getGroup, sessionId, mutate) {
				this.listLibrary = listLibrary;
				this.getGroup = getGroup;
				this.sessionId = sessionId;
				this.mutate = mutate;
				this.state = (0, _deepseek_ai_dsh_client_store.createSnapshotStore)({ ...INITIAL });
			}
			/** Start the first library read when the session has a workspace binding. */
			ensureLibrary() {
				if (this.disposed) return;
				const status = this.state.getSnapshot().libraryStatus;
				if (status === "loading" || status === "ready" || status === "no-workspace") return;
				this.state.update((draft) => {
					draft.listError = null;
					draft.libraryStatus = "loading";
				});
				this.listLibrary(this.sessionId).then((result) => {
					if (this.disposed) return;
					this.state.update((draft) => {
						if (!result.ok) {
							draft.libraryStatus = result.error.code === "sop-capsules/no-workspace" ? "no-workspace" : "idle";
							if (result.error.code !== "sop-capsules/no-workspace") draft.listError = result.error.message;
							return;
						}
						draft.libraryStatus = "ready";
						draft.groups = result.value.groups;
						draft.listError = null;
						if (result.value.adoptedOrphanIds.length > 0) draft.orphanBanner = true;
						if (draft.selectedGroupId === null && result.value.groups.length > 0) draft.selectedGroupId = result.value.groups[0].id;
					});
					const selected = this.state.getSnapshot().selectedGroupId;
					if (selected !== null) this.loadGroup(selected);
				}).catch(() => {
					if (this.disposed) return;
					this.state.update((draft) => {
						draft.libraryStatus = "idle";
						draft.listError = "Remote unavailable";
					});
				});
			}
			/** Open the composer overlay panel for this session. */
			openPanel() {
				if (this.disposed) return;
				this.state.update((draft) => {
					draft.panelOpen = true;
					draft.panelMode = "pick";
				});
				this.ensureLibrary();
				const { selectedGroupId, groupStatus, libraryStatus } = this.state.getSnapshot();
				if (libraryStatus === "ready" && selectedGroupId !== null && groupStatus === "idle") this.loadGroup(selectedGroupId);
			}
			/** Close the composer overlay panel for this session. */
			closePanel() {
				if (this.disposed) return;
				this.state.update((draft) => {
					draft.panelOpen = false;
				});
			}
			/** Switch segmented panel mode. */
			setPanelMode(mode) {
				if (this.disposed) return;
				this.state.update((draft) => {
					draft.panelMode = mode;
				});
			}
			/** Select a group and load its capsules. */
			selectGroup(groupId) {
				if (this.disposed) return;
				this.state.update((draft) => {
					draft.selectedGroupId = groupId;
					draft.searchQuery = "";
				});
				this.loadGroup(groupId);
			}
			/** Update the pick-path title filter. */
			setSearchQuery(query) {
				if (this.disposed) return;
				this.state.update((draft) => {
					draft.searchQuery = query;
				});
			}
			/** Update Replace/Append preference in session view. */
			setInjectMode(mode) {
				if (this.disposed) return;
				this.state.update((draft) => {
					draft.injectMode = mode;
				});
			}
			/** Dismiss the orphan-group informational banner. */
			dismissOrphanBanner() {
				if (this.disposed) return;
				this.state.update((draft) => {
					draft.orphanBanner = false;
				});
			}
			/** Clear list-level error banner state. */
			dismissListError() {
				if (this.disposed) return;
				this.state.update((draft) => {
					draft.listError = null;
				});
			}
			/** Retry loading the selected group after a Remote failure. */
			retryGroupLoad() {
				if (this.disposed) return;
				const groupId = this.state.getSnapshot().selectedGroupId;
				if (groupId === null) return;
				this.loadGroup(groupId);
			}
			/**
			* Inject one capsule body into the composer draft and close on success.
			* When `prepare` is set, the draft is written after it settles, including
			* when it rejects, so a catalog failure still injects plain text.
			* @param body - capsule body text.
			* @param readDraft - current composer draft projection.
			* @param writeDraft - replace composer draft.
			* @param close - close overlay after inject.
			* @param prepare - optional work that must finish before the draft is written.
			*/
			injectCapsule(body, readDraft, writeDraft, close, prepare) {
				if (this.disposed) return;
				if (this.state.getSnapshot().injecting) return;
				const write = () => {
					if (this.disposed) return;
					const mode = this.state.getSnapshot().injectMode;
					const current = readDraft();
					writeDraft(mode === "replace" ? body : current.trim() === "" ? body : `${current}\n\n${body}`);
					close();
				};
				this.state.update((draft) => {
					draft.injecting = true;
				});
				if (prepare === void 0) {
					try {
						write();
					} finally {
						this.state.update((draft) => {
							draft.injecting = false;
						});
					}
					return;
				}
				prepare().then(write, write).finally(() => {
					if (this.disposed) return;
					this.state.update((draft) => {
						draft.injecting = false;
					});
				});
			}
			/** Open an empty new-group editor. */
			beginNewGroup() {
				if (this.disposed) return;
				this.state.update((draft) => {
					draft.editor = {
						kind: "group-new",
						displayName: ""
					};
					draft.mutationError = null;
				});
			}
			/**
			* Open a rename editor for a group's displayName.
			* @param groupId - target group id.
			*/
			beginRenameGroup(groupId) {
				if (this.disposed) return;
				const group = this.state.getSnapshot().groups.find((row) => row.id === groupId);
				this.state.update((draft) => {
					draft.editor = {
						kind: "group-rename",
						groupId,
						displayName: group?.displayName ?? ""
					};
					draft.mutationError = null;
				});
			}
			/** Open an empty new-capsule editor for the selected group. */
			beginNewCapsule() {
				if (this.disposed) return;
				this.state.update((draft) => {
					draft.editor = {
						kind: "capsule-new",
						title: "",
						body: ""
					};
					draft.mutationError = null;
				});
			}
			/**
			* Open an edit editor for one capsule's title and body.
			* @param capsuleId - target capsule id in the selected group.
			*/
			beginEditCapsule(capsuleId) {
				if (this.disposed) return;
				const capsule = this.state.getSnapshot().capsules.find((row) => row.id === capsuleId);
				this.state.update((draft) => {
					draft.editor = {
						kind: "capsule-edit",
						capsuleId,
						title: capsule?.title ?? "",
						body: capsule?.body ?? ""
					};
					draft.mutationError = null;
				});
			}
			/**
			* Update displayName in an open group editor.
			* @param value - next displayName.
			*/
			setEditorDisplayName(value) {
				if (this.disposed) return;
				this.state.update((draft) => {
					if (draft.editor.kind === "group-new" || draft.editor.kind === "group-rename") draft.editor = {
						...draft.editor,
						displayName: value
					};
				});
			}
			/**
			* Update title in an open capsule editor.
			* @param value - next title.
			*/
			setEditorTitle(value) {
				if (this.disposed) return;
				this.state.update((draft) => {
					if (draft.editor.kind === "capsule-new" || draft.editor.kind === "capsule-edit") draft.editor = {
						...draft.editor,
						title: value
					};
				});
			}
			/**
			* Update body in an open capsule editor.
			* @param value - next body.
			*/
			setEditorBody(value) {
				if (this.disposed) return;
				this.state.update((draft) => {
					if (draft.editor.kind === "capsule-new" || draft.editor.kind === "capsule-edit") draft.editor = {
						...draft.editor,
						body: value
					};
				});
			}
			/** Close the editor without calling Remote. */
			cancelEditor() {
				if (this.disposed) return;
				this.state.update((draft) => {
					draft.editor = { kind: "none" };
					draft.mutationError = null;
				});
			}
			/** Persist the open editor via `saveGroup`. On RemoteError the editor fields stay. */
			commitEditor() {
				if (this.disposed) return;
				const snap = this.state.getSnapshot();
				if (snap.mutationStatus === "submitting") return;
				const editor = snap.editor;
				if (editor.kind === "none") return;
				this.state.update((draft) => {
					draft.mutationStatus = "submitting";
					draft.mutationError = null;
				});
				this.persistEditor(editor).then((error) => {
					if (this.disposed) return;
					this.state.update((draft) => {
						draft.mutationStatus = "idle";
						if (error !== null) {
							draft.mutationError = error;
							return;
						}
						draft.editor = { kind: "none" };
						draft.mutationError = null;
					});
				});
			}
			/**
			* Open delete-group confirmation.
			* @param groupId - group to delete after confirm.
			*/
			requestDeleteGroup(groupId) {
				if (this.disposed) return;
				this.state.update((draft) => {
					draft.confirm = {
						kind: "delete-group",
						groupId
					};
					draft.mutationError = null;
				});
			}
			/**
			* Open delete-capsule confirmation.
			* @param capsuleId - capsule to delete after confirm.
			*/
			requestDeleteCapsule(capsuleId) {
				if (this.disposed) return;
				this.state.update((draft) => {
					draft.confirm = {
						kind: "delete-capsule",
						capsuleId
					};
					draft.mutationError = null;
				});
			}
			/** Dismiss the confirm dialog without mutating. */
			cancelConfirm() {
				if (this.disposed) return;
				this.state.update((draft) => {
					draft.confirm = null;
				});
			}
			/** Run the pending confirm after the user confirms. */
			confirmMutation() {
				if (this.disposed) return;
				const snap = this.state.getSnapshot();
				if (snap.mutationStatus === "submitting" || snap.confirm === null) return;
				const pending = snap.confirm;
				this.state.update((draft) => {
					draft.mutationStatus = "submitting";
					draft.mutationError = null;
				});
				this.persistDelete(pending).then((error) => {
					if (this.disposed) return;
					this.state.update((draft) => {
						draft.mutationStatus = "idle";
						if (error !== null) {
							draft.mutationError = error;
							return;
						}
						draft.confirm = null;
						draft.mutationError = null;
					});
				});
			}
			/**
			* Parse a single-group yaml file and open the import confirm dialog.
			* @param filename - download or upload name; stem is the group-id.
			* @param raw - yaml document isomorphic with `groups/<group-id>.yaml`.
			*/
			async prepareImport(filename, raw) {
				if (this.disposed) return;
				const groupId = groupIdFromFilename(filename).trim();
				if (groupId === "") {
					this.state.update((draft) => {
						draft.mutationError = "invalid group file";
					});
					return;
				}
				try {
					const group = parseGroupYaml(raw, groupId);
					let deleteCount = 0;
					if (this.state.getSnapshot().groups.some((row) => row.id === groupId)) {
						const current = await this.getGroup(this.sessionId, groupId);
						if (!current.ok) {
							this.state.update((draft) => {
								draft.mutationError = current.error.message;
							});
							return;
						}
						const incoming = new Set(group.capsules.map((row) => row.id));
						deleteCount = current.value.capsules.filter((row) => !incoming.has(row.id)).length;
					}
					this.state.update((draft) => {
						draft.confirm = {
							kind: "import-group",
							group,
							deleteCount
						};
						draft.mutationError = null;
					});
				} catch (error) {
					this.state.update((draft) => {
						draft.mutationError = "invalid group file";
					});
				}
			}
			/**
			* Serialize the selected group as `groups/<group-id>.yaml`.
			* @returns filename plus yaml body, or null when no group is selected or Remote fails.
			*/
			async exportSelectedGroup() {
				if (this.disposed) return null;
				const groupId = this.state.getSnapshot().selectedGroupId;
				if (groupId === null) return null;
				try {
					const result = await this.getGroup(this.sessionId, groupId);
					if (!result.ok) {
						this.state.update((draft) => {
							draft.mutationError = result.error.message;
						});
						return null;
					}
					return {
						filename: `${result.value.id}.yaml`,
						body: stringifyGroupYaml(result.value)
					};
				} catch (error) {
					this.state.update((draft) => {
						draft.mutationError = "Remote unavailable";
					});
					return null;
				}
			}
			/**
			* Persist a new group order covering every registered group-id.
			* @param groupIds - ordered ids.
			*/
			reorderGroups(groupIds) {
				if (this.disposed) return;
				if (this.state.getSnapshot().mutationStatus === "submitting") return;
				this.state.update((draft) => {
					draft.mutationStatus = "submitting";
					draft.mutationError = null;
				});
				this.mutate.reorderGroups(this.sessionId, groupIds).then(async (result) => {
					if (this.disposed) return;
					if (!result.ok) {
						this.state.update((draft) => {
							draft.mutationStatus = "idle";
							draft.mutationError = result.error.message;
						});
						return;
					}
					await this.refreshLibrary();
					this.state.update((draft) => {
						draft.mutationStatus = "idle";
						draft.mutationError = null;
					});
				}).catch(() => {
					if (this.disposed) return;
					this.state.update((draft) => {
						draft.mutationStatus = "idle";
						draft.mutationError = "Remote unavailable";
					});
				});
			}
			/**
			* Persist a new capsule order inside the selected group.
			* @param capsuleIds - ordered capsule ids covering the selected group.
			*/
			reorderCapsules(capsuleIds) {
				if (this.disposed) return;
				const snap = this.state.getSnapshot();
				if (snap.mutationStatus === "submitting" || snap.selectedGroupId === null) return;
				const groupId = snap.selectedGroupId;
				const displayName = snap.groups.find((row) => row.id === groupId)?.displayName ?? groupId;
				const byId = new Map(snap.capsules.map((row) => [row.id, row]));
				const capsules = capsuleIds.flatMap((id) => {
					const row = byId.get(id);
					return row === void 0 ? [] : [row];
				});
				if (capsules.length !== snap.capsules.length) return;
				this.state.update((draft) => {
					draft.mutationStatus = "submitting";
					draft.mutationError = null;
				});
				this.mutate.saveGroup(this.sessionId, {
					id: groupId,
					displayName,
					capsules
				}).then((result) => {
					if (this.disposed) return;
					if (!result.ok) {
						this.state.update((draft) => {
							draft.mutationStatus = "idle";
							draft.mutationError = result.error.message;
						});
						return;
					}
					this.loadGroup(groupId);
					this.state.update((draft) => {
						draft.mutationStatus = "idle";
						draft.mutationError = null;
					});
				}).catch(() => {
					if (this.disposed) return;
					this.state.update((draft) => {
						draft.mutationStatus = "idle";
						draft.mutationError = "Remote unavailable";
					});
				});
			}
			/** Release the snapshot store listeners. */
			dispose() {
				this.disposed = true;
			}
			async persistEditor(editor) {
				try {
					if (editor.kind === "group-new") {
						const displayName = editor.displayName.trim();
						if (displayName === "") return "displayName required";
						const group = {
							id: newStableId("g"),
							displayName,
							capsules: []
						};
						const result = await this.mutate.saveGroup(this.sessionId, group);
						if (!result.ok) return result.error.message;
						await this.refreshLibrary();
						this.selectGroup(group.id);
						return null;
					}
					if (editor.kind === "group-rename") {
						const displayName = editor.displayName.trim();
						if (displayName === "") return "displayName required";
						const current = await this.getGroup(this.sessionId, editor.groupId);
						if (!current.ok) return current.error.message;
						const result = await this.mutate.saveGroup(this.sessionId, {
							...current.value,
							displayName
						});
						if (!result.ok) return result.error.message;
						await this.refreshLibrary();
						return null;
					}
					const selected = this.state.getSnapshot().selectedGroupId;
					if (selected === null) return "no group selected";
					const current = await this.getGroup(this.sessionId, selected);
					if (!current.ok) return current.error.message;
					const title = editor.title.trim();
					const body = editor.body.trim();
					if (title === "" || body === "") return "title and body required";
					const capsules = editor.kind === "capsule-new" ? [...current.value.capsules, {
						id: newStableId("c"),
						title,
						body
					}] : current.value.capsules.map((row) => row.id === editor.capsuleId ? {
						...row,
						title,
						body
					} : row);
					const result = await this.mutate.saveGroup(this.sessionId, {
						...current.value,
						capsules
					});
					if (!result.ok) return result.error.message;
					this.loadGroup(selected);
					return null;
				} catch (error) {
					return "Remote unavailable";
				}
			}
			async persistDelete(pending) {
				try {
					if (pending.kind === "import-group") {
						const result = await this.mutate.saveGroup(this.sessionId, pending.group);
						if (!result.ok) return result.error.message;
						await this.refreshLibrary();
						this.selectGroup(pending.group.id);
						return null;
					}
					if (pending.kind === "delete-group") {
						const result = await this.mutate.deleteGroup(this.sessionId, pending.groupId);
						if (!result.ok) return result.error.message;
						const previous = this.state.getSnapshot().selectedGroupId;
						await this.refreshLibrary();
						const groups = this.state.getSnapshot().groups;
						if (previous === pending.groupId) {
							const next = groups[0]?.id ?? null;
							this.state.update((draft) => {
								draft.selectedGroupId = next;
								draft.capsules = [];
							});
							if (next !== null) this.loadGroup(next);
						}
						return null;
					}
					const selected = this.state.getSnapshot().selectedGroupId;
					if (selected === null) return "no group selected";
					const current = await this.getGroup(this.sessionId, selected);
					if (!current.ok) return current.error.message;
					const result = await this.mutate.saveGroup(this.sessionId, {
						...current.value,
						capsules: current.value.capsules.filter((row) => row.id !== pending.capsuleId)
					});
					if (!result.ok) return result.error.message;
					this.loadGroup(selected);
					return null;
				} catch (error) {
					return "Remote unavailable";
				}
			}
			async refreshLibrary() {
				const result = await this.listLibrary(this.sessionId);
				if (this.disposed) return;
				this.state.update((draft) => {
					if (!result.ok) {
						draft.listError = result.error.message;
						return;
					}
					draft.groups = result.value.groups;
					draft.listError = null;
					if (result.value.adoptedOrphanIds.length > 0) draft.orphanBanner = true;
				});
			}
			loadGroup(groupId) {
				const requestId = ++this.groupRequest;
				this.state.update((draft) => {
					draft.groupStatus = "loading";
					draft.groupError = null;
					draft.capsules = [];
				});
				this.getGroup(this.sessionId, groupId).then((result) => {
					if (this.disposed || requestId !== this.groupRequest) return;
					this.state.update((draft) => {
						if (!result.ok) {
							draft.groupStatus = "error";
							draft.groupError = result.error.message;
							draft.capsules = [];
							return;
						}
						draft.groupStatus = "ready";
						draft.capsules = result.value.capsules;
						draft.groupError = null;
					});
				}).catch(() => {
					if (this.disposed || requestId !== this.groupRequest) return;
					this.state.update((draft) => {
						draft.groupStatus = "error";
						draft.groupError = "Remote unavailable";
						draft.capsules = [];
					});
				});
			}
		};
		/**
		* Resolve or create the surface for one session.
		* @param ctx - client root context carrying the remote namespace.
		* @param surfaces - session cache mutated by this helper.
		* @param sessionId - target session.
		* @returns the live surface for inject wiring.
		*/
		function surfaceFor(ctx, surfaces, sessionId) {
			let surface = surfaces.get(sessionId);
			if (surface === void 0) {
				surface = new SopCapsulesSurface((id, signal) => ctx.remote.sopCapsules.listLibrary(id, signal), (id, groupId, signal) => ctx.remote.sopCapsules.getGroup(id, groupId, signal), sessionId, {
					saveGroup: (id, group, signal) => ctx.remote.sopCapsules.saveGroup(id, group, signal),
					deleteGroup: (id, groupId, signal) => ctx.remote.sopCapsules.deleteGroup(id, groupId, signal),
					reorderGroups: (id, groupIds, signal) => ctx.remote.sopCapsules.reorderGroups(id, groupIds, signal)
				});
				surfaces.set(sessionId, surface);
			}
			return surface;
		}
		//#endregion
		//#region \0dsh-css:/Users/mac/Desktop/agi_code/my-dsh-plugins/plugins/sop-capsules/src/client/SopCapsulesPanel.module.css.mjs
		const css = ".wWpfaa_shell{z-index:100;box-sizing:border-box;pointer-events:none;overscroll-behavior:contain;justify-content:center;max-width:100%;display:flex;position:absolute;bottom:calc(100% + 8px);left:0;right:0}.wWpfaa_panel{pointer-events:auto;box-sizing:border-box;background:var(--dsw-specific-menu);width:min(100%,720px);min-height:0;max-height:100%;backdrop-filter:var(--dsw-menu-backdrop-filter);--dsw-elevation-stroke-color:var(--dsw-alias-border-l2);box-shadow:var(--dsw-elevation-soft);color:var(--dsw-alias-label-primary);overscroll-behavior:contain;border:0;border-radius:22px;flex-direction:column;gap:12px;padding:12px 16px;font-size:14px;line-height:20px;display:flex;overflow:hidden}.wWpfaa_header{align-items:center;gap:12px;display:flex}.wWpfaa_title{flex:none;margin:0;font-size:14px;font-weight:600}.wWpfaa_modeSwitch{background:color-mix(in srgb, var(--dsw-alias-label-primary) 4%, transparent);border-radius:999px;flex:auto;justify-content:center;gap:2px;padding:2px;display:inline-flex}.wWpfaa_modeIdle,.wWpfaa_modeActive{cursor:pointer;color:var(--dsw-alias-label-secondary);background:0 0;border:0;border-radius:999px;padding:4px 12px;font-size:13px}.wWpfaa_modeActive{background:var(--dsw-alias-button-elevated-fill);color:var(--dsw-alias-label-primary);box-shadow:var(--dsw-elevation-soft);font-weight:600}.wWpfaa_close{min-width:28px;min-height:28px;color:var(--dsw-alias-label-tertiary);cursor:pointer;background:0 0;border:0;border-radius:6px;margin-left:auto;padding:0}.wWpfaa_close:hover,.wWpfaa_close:focus-visible{color:var(--dsw-alias-label-secondary)}.wWpfaa_bannerError{background:var(--dsw-alias-state-error-tertiary);color:var(--dsw-alias-state-error-primary);border-radius:8px;justify-content:space-between;align-items:center;gap:8px;padding:8px 12px;font-size:13px;display:flex}.wWpfaa_bannerInfo{background:var(--dsw-alias-state-business-tertiary);color:var(--dsw-alias-label-primary);border-radius:8px;justify-content:space-between;align-items:center;gap:8px;padding:8px 12px;font-size:13px;display:flex}.wWpfaa_bannerAction{color:inherit;cursor:pointer;background:0 0;border:0;font-weight:600;text-decoration:underline}.wWpfaa_body{border-top:.5px solid var(--dsw-alias-border-l1);flex:auto;gap:0;min-height:0;display:flex}.wWpfaa_sidebar{border-right:.5px solid var(--dsw-alias-border-l1);background:color-mix(in srgb, var(--dsw-alias-label-primary) 4%, transparent);flex-direction:column;flex:0 0 200px;gap:2px;min-height:0;padding:8px;display:flex;overflow:hidden}.wWpfaa_groupList{overscroll-behavior:contain;flex-direction:column;flex:auto;gap:2px;min-height:0;display:flex;overflow-y:auto}.wWpfaa_groupList::-webkit-scrollbar-thumb,.wWpfaa_groupList::-webkit-scrollbar-thumb:hover,.wWpfaa_contentScroll::-webkit-scrollbar-thumb,.wWpfaa_contentScroll::-webkit-scrollbar-thumb:hover{background:0 0}.wWpfaa_groupList[data-scrolling]::-webkit-scrollbar-thumb,.wWpfaa_groupList[data-scrolling]::-webkit-scrollbar-thumb:hover,.wWpfaa_contentScroll[data-scrolling]::-webkit-scrollbar-thumb,.wWpfaa_contentScroll[data-scrolling]::-webkit-scrollbar-thumb:hover{background:var(--dsh-scrollbar-thumb)}.wWpfaa_sidebarHeader{flex:none;justify-content:space-between;align-items:center;gap:8px;min-height:28px;padding-inline:8px;display:flex}.wWpfaa_popoverAnchor{position:relative}.wWpfaa_groupPopover{z-index:5;user-select:text;box-sizing:border-box;background:var(--dsw-specific-menu);width:168px;backdrop-filter:var(--dsw-menu-backdrop-filter);--dsw-elevation-stroke-color:var(--dsw-alias-border-l2);box-shadow:var(--dsw-elevation-soft);border:0;border-radius:12px;flex-direction:column;gap:8px;padding:8px;display:flex;position:absolute;top:calc(100% + 4px);right:0}.wWpfaa_injectPopover{width:max-content;max-width:360px}.wWpfaa_injectPopover .wWpfaa_primaryBtn,.wWpfaa_injectPopover .wWpfaa_secondaryBtn{white-space:nowrap;flex:none}.wWpfaa_sidebarTitle{color:var(--dsw-alias-label-primary);margin:0;font-size:13px;font-weight:700}.wWpfaa_groupItem,.wWpfaa_groupActive{text-align:left;cursor:pointer;color:var(--dsw-alias-label-primary);text-overflow:ellipsis;white-space:nowrap;background:0 0;border:0;border-radius:8px;flex:auto;min-width:0;padding:8px 10px;font-size:13px;overflow:hidden}.wWpfaa_groupActive{font-weight:600}.wWpfaa_content{flex-direction:column;flex:auto;gap:8px;min-width:0;min-height:0;padding:8px 0 0 12px;display:flex;overflow:hidden}.wWpfaa_contentScroll{overscroll-behavior:contain;flex-direction:column;flex:auto;gap:8px;min-height:0;display:flex;overflow-y:auto}.wWpfaa_toolbar{flex-wrap:wrap;flex:none;align-items:center;gap:8px;display:flex;position:relative}.wWpfaa_search{flex:0 200px;width:200px;min-width:140px}.wWpfaa_searchPick{flex:320px;width:320px;min-width:220px;max-width:100%}.wWpfaa_capsuleList{flex:none;margin:0;padding:0;list-style:none;overflow:visible}.wWpfaa_capsuleRow{border:0;border-bottom:.5px solid var(--dsw-alias-border-l1);text-align:left;cursor:pointer;background:0 0;flex-direction:column;align-items:flex-start;gap:2px;width:100%;min-height:40px;padding:8px 12px;display:flex}.wWpfaa_capsuleRow:hover:not(:disabled){background:color-mix(in srgb, var(--dsw-alias-label-primary) 4%, transparent)}.wWpfaa_capsuleRow:disabled{opacity:.5;cursor:not-allowed}.wWpfaa_capsuleTitle{text-overflow:ellipsis;white-space:nowrap;min-width:0;color:var(--dsw-alias-label-primary);flex:auto;font-weight:500;overflow:hidden}.wWpfaa_manageCapsuleRow .wWpfaa_capsuleTitle{padding-left:10px}.wWpfaa_capsulePreview{color:var(--dsw-alias-label-secondary);text-overflow:ellipsis;white-space:nowrap;max-width:100%;font-size:12px;line-height:16px;overflow:hidden}.wWpfaa_empty,.wWpfaa_managePlaceholder,.wWpfaa_noWorkspace{text-align:center;color:var(--dsw-alias-label-secondary);margin:0;padding:24px 12px}.wWpfaa_toolbarAction{color:var(--dsw-alias-state-business-primary);cursor:pointer;white-space:nowrap;background:0 0;border:0;padding:4px 2px;font-size:13px;font-weight:600}.wWpfaa_toolbarAction:hover,.wWpfaa_toolbarAction:focus-visible{color:var(--dsw-alias-link)}.wWpfaa_field{flex-direction:column;gap:4px;display:flex}.wWpfaa_fieldLabel{color:var(--dsw-alias-label-primary);font-size:12px;font-weight:600}.wWpfaa_secondaryBtn{background:var(--dsw-alias-button-secondary-fill);color:var(--dsw-alias-label-primary);cursor:pointer;border:0;border-radius:8px;margin-top:0;padding:6px 12px}.wWpfaa_sidebarAction{text-align:right;cursor:pointer;color:var(--dsw-alias-link);background:0 0;border:0;border-radius:8px;flex:none;margin:0;padding:0;font-size:13px;font-weight:600}.wWpfaa_groupRow,.wWpfaa_manageCapsuleRow{align-items:center;gap:4px;display:flex}.wWpfaa_groupRow{border-radius:8px;padding-inline:8px;position:relative}.wWpfaa_groupRow:hover,.wWpfaa_groupRow[data-selected]{background:color-mix(in srgb, var(--dsw-alias-label-primary) 6%, transparent)}.wWpfaa_groupRow .wWpfaa_rowActions{display:none}.wWpfaa_groupRow:hover .wWpfaa_rowActions,.wWpfaa_groupRow[data-selected] .wWpfaa_rowActions,.wWpfaa_groupRow[data-confirm] .wWpfaa_rowActions{display:flex}.wWpfaa_manageCapsuleItem{flex-direction:column;gap:4px;display:flex}.wWpfaa_manageCapsuleRow{border-radius:8px;min-height:36px;padding-inline:8px;position:relative}.wWpfaa_manageCapsuleRow:hover,.wWpfaa_manageCapsuleRow[data-confirm]{background:color-mix(in srgb, var(--dsw-alias-label-primary) 6%, transparent)}.wWpfaa_confirmTitle{margin:0;font-size:13px;font-weight:600}.wWpfaa_confirmBody{color:var(--dsw-alias-label-secondary);margin:0;font-size:12px;line-height:16px}.wWpfaa_dragHandle{color:var(--dsw-alias-label-secondary);letter-spacing:-2px;cursor:grab;user-select:none;flex:none;font-size:12px}.wWpfaa_rowActions{flex-wrap:nowrap;flex:none;gap:2px;margin-left:auto;display:flex}.wWpfaa_iconButton{width:18px;height:18px;color:var(--dsw-alias-label-tertiary);cursor:pointer;background:0 0;border:0;border-radius:4px;justify-content:center;align-items:center;padding:0;display:inline-flex}.wWpfaa_iconButton:hover,.wWpfaa_iconButton:focus-visible{color:var(--dsw-alias-label-primary)}.wWpfaa_iconish{color:var(--dsw-alias-link);cursor:pointer;background:0 0;border:0;padding:2px 4px;font-size:12px}.wWpfaa_editor{background:color-mix(in srgb, var(--dsw-alias-label-primary) 4%, transparent);border-radius:8px;flex-direction:column;gap:8px;padding:8px;display:flex}.wWpfaa_bodyInput{border:.5px solid var(--dsw-alias-border-l4);background:var(--dsw-alias-bg-layer-1);min-height:4lh;color:var(--dsw-alias-label-primary);font:inherit;resize:vertical;border-radius:8px;padding:8px}.wWpfaa_bodyInput:focus{border-color:var(--dsw-alias-brand-primary);outline:none}.wWpfaa_editorActions{justify-content:flex-end;gap:8px;display:flex}.wWpfaa_primaryBtn{background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-label-primary-foreground);cursor:pointer;border:0;border-radius:8px;padding:6px 12px}.wWpfaa_primaryBtn:disabled,.wWpfaa_secondaryBtn:disabled{opacity:.6;cursor:not-allowed}.wWpfaa_fileInput{clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.wWpfaa_skeletonList{flex-direction:column;gap:8px;padding:4px 0;display:flex}.wWpfaa_skeletonRow{background:var(--dsw-alias-bg-skeleton);border-radius:6px;height:40px}";
		const tagId = "@nangeagi/dsh-sop-capsules/SopCapsulesPanel.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@nangeagi/dsh-sop-capsules";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var SopCapsulesPanel_module_css_default = {
			"bannerAction": "wWpfaa_bannerAction",
			"bannerError": "wWpfaa_bannerError",
			"bannerInfo": "wWpfaa_bannerInfo",
			"body": "wWpfaa_body",
			"bodyInput": "wWpfaa_bodyInput",
			"capsuleList": "wWpfaa_capsuleList",
			"capsulePreview": "wWpfaa_capsulePreview",
			"capsuleRow": "wWpfaa_capsuleRow",
			"capsuleTitle": "wWpfaa_capsuleTitle",
			"close": "wWpfaa_close",
			"confirmBody": "wWpfaa_confirmBody",
			"confirmTitle": "wWpfaa_confirmTitle",
			"content": "wWpfaa_content",
			"contentScroll": "wWpfaa_contentScroll",
			"dragHandle": "wWpfaa_dragHandle",
			"editor": "wWpfaa_editor",
			"editorActions": "wWpfaa_editorActions",
			"empty": "wWpfaa_empty",
			"field": "wWpfaa_field",
			"fieldLabel": "wWpfaa_fieldLabel",
			"fileInput": "wWpfaa_fileInput",
			"groupActive": "wWpfaa_groupActive",
			"groupItem": "wWpfaa_groupItem",
			"groupList": "wWpfaa_groupList",
			"groupPopover": "wWpfaa_groupPopover",
			"groupRow": "wWpfaa_groupRow",
			"header": "wWpfaa_header",
			"iconButton": "wWpfaa_iconButton",
			"iconish": "wWpfaa_iconish",
			"injectPopover": "wWpfaa_injectPopover",
			"manageCapsuleItem": "wWpfaa_manageCapsuleItem",
			"manageCapsuleRow": "wWpfaa_manageCapsuleRow",
			"managePlaceholder": "wWpfaa_managePlaceholder",
			"modeActive": "wWpfaa_modeActive",
			"modeIdle": "wWpfaa_modeIdle",
			"modeSwitch": "wWpfaa_modeSwitch",
			"noWorkspace": "wWpfaa_noWorkspace",
			"panel": "wWpfaa_panel",
			"popoverAnchor": "wWpfaa_popoverAnchor",
			"primaryBtn": "wWpfaa_primaryBtn",
			"rowActions": "wWpfaa_rowActions",
			"search": "wWpfaa_search",
			"searchPick": "wWpfaa_searchPick",
			"secondaryBtn": "wWpfaa_secondaryBtn",
			"shell": "wWpfaa_shell",
			"sidebar": "wWpfaa_sidebar",
			"sidebarAction": "wWpfaa_sidebarAction",
			"sidebarHeader": "wWpfaa_sidebarHeader",
			"sidebarTitle": "wWpfaa_sidebarTitle",
			"skeletonList": "wWpfaa_skeletonList",
			"skeletonRow": "wWpfaa_skeletonRow",
			"title": "wWpfaa_title",
			"toolbar": "wWpfaa_toolbar",
			"toolbarAction": "wWpfaa_toolbarAction"
		};
		//#endregion
		//#region src/client/SopCapsulesPanel.tsx
		/** Composer overlay for SOP capsules pick, manage, import, and export. */
		/**
		* Filter capsule titles within the selected group.
		* @param titles - capsule rows.
		* @param query - case-insensitive substring filter.
		* @returns visible rows.
		*/
		function filterCapsules(titles, query) {
			const needle = query.trim().toLowerCase();
			if (needle === "") return titles;
			return titles.filter((row) => row.title.toLowerCase().includes(needle));
		}
		/**
		* Resolve the workspace id bound to one session, if any.
		* @param sessionId - target session.
		* @param useWorkspaces - workspace catalog hook.
		* @returns workspace id or undefined.
		*/
		function workspaceForSession(sessionId, useWorkspaces) {
			return useWorkspaces((state) => state.items).find((item) => item.sessionIds.includes(sessionId))?.workspaceId;
		}
		function dndPayload(kind, id) {
			return `${kind}:${id}`;
		}
		function parseDndPayload(raw) {
			const split = raw.indexOf(":");
			if (split <= 0) return null;
			const kind = raw.slice(0, split);
			const id = raw.slice(split + 1);
			if (kind !== "group" && kind !== "capsule" || id === "") return null;
			return {
				kind,
				id
			};
		}
		/** Design cap for the panel body; runtime clamp uses space above the composer. */
		const PANEL_MAX_HEIGHT = 480;
		/**
		* Outer floor for a short library. Twice the one-capsule panel (171px).
		* The runtime clamp still wins when the space above the composer is shorter.
		*/
		const PANEL_MIN_HEIGHT = 342;
		/** Gap kept between the panel and the top of the clipping conversation column. */
		const PANEL_TOP_MARGIN = 12;
		/**
		* Top of the space the panel may occupy: the lowest clipping ancestor, else the viewport.
		* The conversation scroll body clips this overlay, so a viewport-only clamp still hides the header.
		* @param el - the bottom-anchored shell.
		* @returns the y coordinate the panel top must stay below.
		*/
		function panelCeiling(el) {
			let ceiling = PANEL_TOP_MARGIN;
			let node = el.parentElement;
			while (node !== null && node !== document.body && node !== document.documentElement) {
				const overflowY = getComputedStyle(node).overflowY;
				if (overflowY === "auto" || overflowY === "scroll" || overflowY === "hidden" || overflowY === "clip") ceiling = Math.max(ceiling, node.getBoundingClientRect().top + PANEL_TOP_MARGIN);
				node = node.parentElement;
			}
			return ceiling;
		}
		/** Gap kept between a revealed editor or confirm and the list's bottom edge. */
		const REVEAL_PAD = 8;
		/**
		* Scroll a panel list so an editor or confirm that hangs under its row is fully inside that list.
		* Absolute popovers do not extend the list's scroll range, so the list grows padding-bottom until the bottom edge clears.
		* @param node - open editor or confirm.
		* @param scrollers - the group list and the capsule list.
		*/
		function revealInPanelScroller(node, scrollers) {
			const scroller = scrollers.find((item) => item.contains(node));
			if (scroller === void 0) return;
			const box = scroller.getBoundingClientRect();
			const rect = node.getBoundingClientRect();
			if (rect.height === 0 || box.height === 0) return;
			const overflow = rect.bottom - (box.bottom - REVEAL_PAD);
			if (overflow <= 1) return;
			const room = scroller.scrollHeight - scroller.clientHeight - scroller.scrollTop;
			if (room + 1 < overflow) {
				const current = Number.parseFloat(scroller.style.paddingBottom) || 0;
				scroller.style.paddingBottom = `${current + (overflow - room)}px`;
			}
			scroller.scrollTop += overflow;
		}
		/** True when this box can still scroll in the wheel direction. */
		function consumesWheel(node, deltaX, deltaY) {
			const style = getComputedStyle(node);
			if (deltaY !== 0 && /(auto|scroll)/.test(style.overflowY)) {
				const max = node.scrollHeight - node.clientHeight;
				if (max > 1 && (deltaY < 0 && node.scrollTop > 0 || deltaY > 0 && node.scrollTop < max - 1)) return true;
			}
			if (deltaX !== 0 && /(auto|scroll)/.test(style.overflowX)) {
				const max = node.scrollWidth - node.clientWidth;
				if (max > 1 && (deltaX < 0 && node.scrollLeft > 0 || deltaX > 0 && node.scrollLeft < max - 1)) return true;
			}
			return false;
		}
		function GroupNamePopover({ displayName, submitting, setEditorDisplayName, commitEditor, cancelEditor, t }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("form", {
				className: SopCapsulesPanel_module_css_default.groupPopover,
				"data-sop-reveal": "",
				draggable: false,
				onDragStart: (event) => {
					event.preventDefault();
					event.stopPropagation();
				},
				onSubmit: (event) => {
					event.preventDefault();
					commitEditor();
				},
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					className: SopCapsulesPanel_module_css_default.field,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: SopCapsulesPanel_module_css_default.fieldLabel,
						children: t("panel.manage.displayName")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
						"aria-label": t("panel.manage.displayName"),
						value: displayName,
						onChange: (event) => {
							setEditorDisplayName(event.target.value);
						}
					})]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: SopCapsulesPanel_module_css_default.editorActions,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "submit",
						className: SopCapsulesPanel_module_css_default.primaryBtn,
						disabled: submitting,
						children: t("panel.manage.save")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: SopCapsulesPanel_module_css_default.secondaryBtn,
						onClick: () => {
							cancelEditor();
						},
						children: t("panel.manage.cancel")
					})]
				})]
			});
		}
		/**
		* Trigger a browser download of a text file.
		* @param filename - suggested download name (`<group-id>.yaml`).
		* @param body - file contents.
		*/
		function ConfirmPopover({ title, body, actionLabel, submitting, confirmMutation, cancelConfirm, t }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: SopCapsulesPanel_module_css_default.groupPopover,
				role: "dialog",
				"aria-label": title,
				"data-sop-reveal": "",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: SopCapsulesPanel_module_css_default.confirmTitle,
						children: title
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: SopCapsulesPanel_module_css_default.confirmBody,
						children: body
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: SopCapsulesPanel_module_css_default.editorActions,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: SopCapsulesPanel_module_css_default.secondaryBtn,
							disabled: submitting,
							onClick: () => {
								cancelConfirm();
							},
							children: t("panel.manage.cancel")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: SopCapsulesPanel_module_css_default.primaryBtn,
							disabled: submitting,
							"aria-busy": submitting,
							"aria-label": submitting ? t("panel.manage.submitting") : actionLabel,
							onClick: () => {
								confirmMutation();
							},
							children: submitting ? t("panel.manage.submitting") : actionLabel
						})]
					})
				]
			});
		}
		function CapsuleEditorForm({ title, body, submitting, reveal, setEditorTitle, setEditorBody, commitEditor, cancelEditor, t }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("form", {
				className: SopCapsulesPanel_module_css_default.editor,
				"data-sop-reveal": reveal ? "" : void 0,
				draggable: false,
				onDragStart: (event) => {
					event.preventDefault();
					event.stopPropagation();
				},
				onSubmit: (event) => {
					event.preventDefault();
					commitEditor();
				},
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
						className: SopCapsulesPanel_module_css_default.field,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: SopCapsulesPanel_module_css_default.fieldLabel,
							children: t("panel.manage.capsuleTitle")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
							"aria-label": t("panel.manage.capsuleTitle"),
							value: title,
							onChange: (event) => {
								setEditorTitle(event.target.value);
							}
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
						className: SopCapsulesPanel_module_css_default.field,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: SopCapsulesPanel_module_css_default.fieldLabel,
							children: t("panel.manage.capsuleBody")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("textarea", {
							className: SopCapsulesPanel_module_css_default.bodyInput,
							"aria-label": t("panel.manage.capsuleBody"),
							value: body,
							rows: 4,
							onChange: (event) => {
								setEditorBody(event.target.value);
							}
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: SopCapsulesPanel_module_css_default.editorActions,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "submit",
							className: SopCapsulesPanel_module_css_default.primaryBtn,
							disabled: submitting,
							children: t("panel.manage.save")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: SopCapsulesPanel_module_css_default.secondaryBtn,
							onClick: () => {
								cancelEditor();
							},
							children: t("panel.manage.cancel")
						})]
					})
				]
			});
		}
		function downloadTextFile(filename, body) {
			const blob = new Blob([body], { type: "text/yaml;charset=utf-8" });
			const url = URL.createObjectURL(blob);
			const anchor = document.createElement("a");
			anchor.href = url;
			anchor.download = filename;
			anchor.click();
			URL.revokeObjectURL(url);
		}
		/**
		* SOP capsules overlay: pick path (list, search, inject) and manage path (CRUD, reorder, import/export).
		* @param props - overlay slot currency and injected verbs.
		* @returns the panel while open, otherwise null.
		*/
		function SopCapsulesPanel({ sessionId, useWorkspaces, useSopCapsules, closePanel, selectGroup, setSearchQuery, setInjectMode, injectCapsule, setPanelMode, ensureLibrary, dismissListError, retryGroupLoad, beginNewGroup, beginRenameGroup, beginNewCapsule, beginEditCapsule, setEditorDisplayName, setEditorTitle, setEditorBody, commitEditor, cancelEditor, requestDeleteGroup, requestDeleteCapsule, cancelConfirm, confirmMutation, reorderGroups, reorderCapsules, exportSelectedGroup, prepareImport, dismissOrphanBanner, t }) {
			const view = useSopCapsules((state) => state);
			const workspaceId = workspaceForSession(sessionId, useWorkspaces);
			const importInput = (0, react.useRef)(null);
			const shellRef = (0, react.useRef)(null);
			const sidebarRef = (0, react.useRef)(null);
			const contentScrollRef = (0, react.useRef)(null);
			const [panelMaxHeight, setPanelMaxHeight] = (0, react.useState)(PANEL_MAX_HEIGHT);
			(0, react.useLayoutEffect)(() => {
				const shell = shellRef.current;
				if (shell === null) return;
				const fit = () => {
					const room = shell.getBoundingClientRect().bottom - panelCeiling(shell);
					setPanelMaxHeight(Math.min(PANEL_MAX_HEIGHT, Math.max(0, room)));
				};
				fit();
				const Observer = globalThis.ResizeObserver;
				const observer = Observer === void 0 ? null : new Observer(fit);
				if (observer !== null) {
					observer.observe(shell);
					let node = shell.parentElement;
					while (node !== null) {
						observer.observe(node);
						node = node.parentElement;
					}
				}
				window.addEventListener("resize", fit);
				window.addEventListener("scroll", fit, true);
				return () => {
					observer?.disconnect();
					window.removeEventListener("resize", fit);
					window.removeEventListener("scroll", fit, true);
				};
			}, [view.panelOpen]);
			(0, react.useEffect)(() => {
				if (!view.panelOpen) return;
				ensureLibrary();
			}, [ensureLibrary, view.panelOpen]);
			(0, react.useEffect)(() => {
				const elements = [sidebarRef.current, contentScrollRef.current].filter((el) => el !== null);
				const timers = /* @__PURE__ */ new Map();
				const cleanups = elements.map((el) => {
					const onScroll = () => {
						el.dataset.scrolling = "";
						window.clearTimeout(timers.get(el));
						timers.set(el, window.setTimeout(() => {
							delete el.dataset.scrolling;
						}, 800));
					};
					el.addEventListener("scroll", onScroll, { passive: true });
					return () => {
						window.clearTimeout(timers.get(el));
						el.removeEventListener("scroll", onScroll);
					};
				});
				return () => {
					for (const cleanup of cleanups) cleanup();
				};
			}, [view.panelOpen, view.libraryStatus]);
			(0, react.useEffect)(() => {
				const shell = shellRef.current;
				if (shell === null) return;
				const onWheel = (event) => {
					let node = event.target instanceof Element ? event.target : null;
					while (node !== null && node !== shell) {
						if (node instanceof HTMLElement && consumesWheel(node, event.deltaX, event.deltaY)) return;
						node = node.parentElement;
					}
					event.preventDefault();
				};
				shell.addEventListener("wheel", onWheel, { passive: false });
				return () => {
					shell.removeEventListener("wheel", onWheel);
				};
			}, [view.panelOpen]);
			(0, react.useEffect)(() => {
				if (!view.panelOpen || workspaceId === void 0) return;
				const stored = localStorage.getItem(injectModeStorageKey(workspaceId));
				if (stored === "replace" || stored === "append") setInjectMode(stored);
			}, [
				setInjectMode,
				view.panelOpen,
				workspaceId
			]);
			const [pendingInject, setPendingInject] = (0, react.useState)(null);
			(0, react.useLayoutEffect)(() => {
				if (view.editor.kind !== "capsule-new") return;
				const scroller = contentScrollRef.current;
				if (scroller === null) return;
				scroller.scrollTop = 0;
			}, [view.editor.kind]);
			const revealGroupId = view.editor.kind === "group-rename" ? view.editor.groupId : "";
			const revealCapsuleId = view.editor.kind === "capsule-edit" ? view.editor.capsuleId : "";
			const revealConfirmId = view.confirm?.kind === "delete-group" ? view.confirm.groupId : view.confirm?.kind === "delete-capsule" ? view.confirm.capsuleId : "";
			(0, react.useLayoutEffect)(() => {
				const scrollers = [sidebarRef.current, contentScrollRef.current].filter((el) => el !== null);
				for (const scroller of scrollers) scroller.style.paddingBottom = "";
				const shell = shellRef.current;
				if (shell === null) return;
				for (const node of shell.querySelectorAll("[data-sop-reveal]")) if (node instanceof HTMLElement) revealInPanelScroller(node, scrollers);
			}, [
				view.editor.kind,
				revealGroupId,
				revealCapsuleId,
				view.confirm?.kind,
				revealConfirmId,
				pendingInject?.id
			]);
			(0, react.useEffect)(() => {
				if (!view.panelOpen) setPendingInject(null);
			}, [view.panelOpen]);
			const visibleCapsules = (0, react.useMemo)(() => filterCapsules(view.capsules, view.searchQuery), [view.capsules, view.searchQuery]);
			if (!view.panelOpen) return null;
			const pickMode = view.panelMode === "pick";
			const noWorkspace = view.libraryStatus === "no-workspace";
			const submitting = view.mutationStatus === "submitting";
			const editor = view.editor;
			const confirm = view.confirm;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				ref: shellRef,
				className: SopCapsulesPanel_module_css_default.shell,
				"data-sop-capsules-panel": "",
				"data-trigger-menu": "",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
					className: SopCapsulesPanel_module_css_default.panel,
					"aria-label": t("panel.title"),
					style: {
						maxHeight: panelMaxHeight,
						minHeight: Math.min(PANEL_MIN_HEIGHT, panelMaxHeight)
					},
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", {
							className: SopCapsulesPanel_module_css_default.header,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
									className: SopCapsulesPanel_module_css_default.title,
									children: t("panel.title")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: SopCapsulesPanel_module_css_default.modeSwitch,
									role: "tablist",
									"aria-label": t("panel.title"),
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										role: "tab",
										className: pickMode ? SopCapsulesPanel_module_css_default.modeActive : SopCapsulesPanel_module_css_default.modeIdle,
										"aria-selected": pickMode,
										onClick: () => {
											setPanelMode("pick");
										},
										children: t("panel.mode.pick")
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										role: "tab",
										className: !pickMode ? SopCapsulesPanel_module_css_default.modeActive : SopCapsulesPanel_module_css_default.modeIdle,
										"aria-selected": !pickMode,
										onClick: () => {
											setPanelMode("manage");
										},
										children: t("panel.mode.manage")
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									className: SopCapsulesPanel_module_css_default.close,
									"aria-label": t("panel.close"),
									onClick: () => {
										closePanel();
									},
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCloseOutlineRegular, {
										size: 14,
										"aria-hidden": "true"
									})
								})
							]
						}),
						view.listError !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: SopCapsulesPanel_module_css_default.bannerError,
							role: "alert",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: view.listError }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: SopCapsulesPanel_module_css_default.bannerAction,
								onClick: () => {
									dismissListError();
									ensureLibrary();
								},
								children: t("panel.error.retry")
							})]
						}),
						view.orphanBanner && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: SopCapsulesPanel_module_css_default.bannerInfo,
							role: "status",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("panel.banner.orphan") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: SopCapsulesPanel_module_css_default.bannerAction,
								onClick: () => {
									dismissOrphanBanner();
								},
								children: t("panel.banner.orphan.dismiss")
							})]
						}),
						view.mutationError !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: SopCapsulesPanel_module_css_default.bannerError,
							role: "alert",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: view.mutationError })
						}),
						noWorkspace ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: SopCapsulesPanel_module_css_default.noWorkspace,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: t("panel.noWorkspace.body") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: SopCapsulesPanel_module_css_default.secondaryBtn,
								onClick: () => {
									closePanel();
								},
								children: t("panel.close")
							})]
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: SopCapsulesPanel_module_css_default.body,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("nav", {
								className: SopCapsulesPanel_module_css_default.sidebar,
								"aria-label": pickMode ? t("panel.mode.pick") : t("panel.mode.manage"),
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: SopCapsulesPanel_module_css_default.sidebarHeader,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
										className: SopCapsulesPanel_module_css_default.sidebarTitle,
										children: t("panel.manage.groupHeading")
									}), !pickMode && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: SopCapsulesPanel_module_css_default.popoverAnchor,
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											className: SopCapsulesPanel_module_css_default.sidebarAction,
											onClick: () => {
												beginNewGroup();
											},
											children: t("panel.manage.newGroup")
										}), editor.kind === "group-new" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(GroupNamePopover, {
											displayName: editor.displayName,
											submitting,
											setEditorDisplayName,
											commitEditor,
											cancelEditor,
											t
										})]
									})]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									ref: sidebarRef,
									className: SopCapsulesPanel_module_css_default.groupList,
									children: view.groups.map((group) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: SopCapsulesPanel_module_css_default.groupRow,
										"data-selected": group.id === view.selectedGroupId ? "" : void 0,
										"data-confirm": confirm?.kind === "delete-group" && confirm.groupId === group.id ? "" : void 0,
										onDragOver: (event) => {
											if (pickMode) return;
											event.preventDefault();
										},
										onDrop: (event) => {
											if (pickMode) return;
											event.preventDefault();
											const payload = parseDndPayload(event.dataTransfer.getData("text/plain"));
											if (payload === null || payload.kind !== "group") return;
											reorderGroups(moveIdBefore(view.groups.map((row) => row.id), payload.id, group.id));
										},
										children: [
											!pickMode && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: SopCapsulesPanel_module_css_default.dragHandle,
												draggable: true,
												"aria-label": t("panel.manage.drag.group"),
												onDragStart: (event) => {
													event.stopPropagation();
													event.dataTransfer.setData("text/plain", dndPayload("group", group.id));
													event.dataTransfer.effectAllowed = "move";
												},
												children: "⋮⋮"
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												className: group.id === view.selectedGroupId ? SopCapsulesPanel_module_css_default.groupActive : SopCapsulesPanel_module_css_default.groupItem,
												"aria-current": group.id === view.selectedGroupId ? "true" : void 0,
												onClick: () => {
													selectGroup(group.id);
												},
												children: group.displayName
											}),
											!pickMode && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
												className: SopCapsulesPanel_module_css_default.rowActions,
												children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
													label: t("panel.manage.renameGroup"),
													side: "top",
													delayMs: 400,
													children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
														type: "button",
														className: SopCapsulesPanel_module_css_default.iconButton,
														"aria-label": t("panel.manage.renameGroup"),
														onClick: () => {
															beginRenameGroup(group.id);
														},
														children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconEditOutlineRegular, {
															size: 12,
															"aria-hidden": "true"
														})
													})
												}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
													label: t("panel.manage.deleteGroup"),
													side: "top",
													delayMs: 400,
													children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
														type: "button",
														className: SopCapsulesPanel_module_css_default.iconButton,
														"aria-label": t("panel.manage.deleteGroup"),
														onClick: () => {
															requestDeleteGroup(group.id);
														},
														children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconTrashOutlineRegular, {
															size: 12,
															"aria-hidden": "true"
														})
													})
												})]
											}),
											confirm?.kind === "delete-group" && confirm.groupId === group.id && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmPopover, {
												title: t("panel.manage.confirm.deleteGroup.title"),
												body: t("panel.manage.confirm.deleteGroup.body"),
												actionLabel: t("panel.manage.confirm.action"),
												submitting,
												confirmMutation,
												cancelConfirm,
												t
											}),
											editor.kind === "group-rename" && editor.groupId === group.id && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(GroupNamePopover, {
												displayName: editor.displayName,
												submitting,
												setEditorDisplayName,
												commitEditor,
												cancelEditor,
												t
											})
										]
									}, group.id))
								})]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: SopCapsulesPanel_module_css_default.content,
								children: [
									view.groupError !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: SopCapsulesPanel_module_css_default.bannerError,
										role: "alert",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: view.groupError }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											className: SopCapsulesPanel_module_css_default.bannerAction,
											onClick: () => {
												retryGroupLoad();
											},
											children: t("panel.error.retry")
										})]
									}),
									pickMode ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: SopCapsulesPanel_module_css_default.toolbar,
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
											className: `${SopCapsulesPanel_module_css_default.search} ${SopCapsulesPanel_module_css_default.searchPick}`,
											role: "searchbox",
											"aria-label": t("panel.search.aria"),
											placeholder: t("panel.search.placeholder"),
											icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSearchOutlineRegular, {
												size: 16,
												"aria-hidden": "true"
											}),
											value: view.searchQuery,
											onChange: (event) => {
												setSearchQuery(event.target.value);
											}
										})
									}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: SopCapsulesPanel_module_css_default.toolbar,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
												className: SopCapsulesPanel_module_css_default.search,
												role: "searchbox",
												"aria-label": t("panel.search.aria"),
												placeholder: t("panel.search.placeholder"),
												icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSearchOutlineRegular, {
													size: 16,
													"aria-hidden": "true"
												}),
												value: view.searchQuery,
												onChange: (event) => {
													setSearchQuery(event.target.value);
												}
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												className: SopCapsulesPanel_module_css_default.toolbarAction,
												onClick: () => {
													beginNewCapsule();
												},
												children: t("panel.manage.newCapsule")
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												className: SopCapsulesPanel_module_css_default.toolbarAction,
												onClick: () => {
													exportSelectedGroup().then((file) => {
														if (file !== null) downloadTextFile(file.filename, file.body);
													});
												},
												children: t("panel.manage.exportGroup")
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
												ref: importInput,
												type: "file",
												accept: ".yaml,.yml,text/yaml,application/yaml",
												className: SopCapsulesPanel_module_css_default.fileInput,
												"aria-label": t("panel.manage.importGroup"),
												onChange: (event) => {
													const file = event.target.files?.[0];
													event.target.value = "";
													if (file === void 0) return;
													file.text().then((raw) => prepareImport(file.name, raw));
												}
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												className: SopCapsulesPanel_module_css_default.toolbarAction,
												onClick: () => {
													importInput.current?.click();
												},
												children: t("panel.manage.importGroup")
											})
										]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										ref: contentScrollRef,
										className: SopCapsulesPanel_module_css_default.contentScroll,
										children: [editor.kind === "capsule-new" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CapsuleEditorForm, {
											title: editor.title,
											body: editor.body,
											submitting,
											reveal: false,
											setEditorTitle,
											setEditorBody,
											commitEditor,
											cancelEditor,
											t
										}), view.groupStatus === "loading" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
											className: SopCapsulesPanel_module_css_default.skeletonList,
											"data-sop-capsules-skeleton": "true",
											"aria-busy": "true",
											children: [
												0,
												1,
												2
											].map((key) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: SopCapsulesPanel_module_css_default.skeletonRow }, key))
										}) : visibleCapsules.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
											className: SopCapsulesPanel_module_css_default.empty,
											children: pickMode ? view.searchQuery.trim() === "" ? t("panel.empty.group") : t("panel.empty.search") : t("panel.empty.manage")
										}) : pickMode ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
											className: SopCapsulesPanel_module_css_default.capsuleList,
											children: visibleCapsules.map((capsule) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
												className: SopCapsulesPanel_module_css_default.popoverAnchor,
												children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
													type: "button",
													className: SopCapsulesPanel_module_css_default.capsuleRow,
													disabled: view.injecting,
													onClick: () => {
														setPendingInject({
															id: capsule.id,
															body: capsule.body
														});
													},
													children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														className: SopCapsulesPanel_module_css_default.capsuleTitle,
														children: capsule.title
													}), capsule.body.trim() !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														className: SopCapsulesPanel_module_css_default.capsulePreview,
														children: capsule.body
													})]
												}), pendingInject?.id === capsule.id && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
													className: `${SopCapsulesPanel_module_css_default.groupPopover} ${SopCapsulesPanel_module_css_default.injectPopover}`,
													role: "dialog",
													"aria-label": t("panel.inject.confirm.title"),
													"data-sop-reveal": "",
													children: [
														/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
															className: SopCapsulesPanel_module_css_default.confirmTitle,
															children: t("panel.inject.confirm.title")
														}),
														/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
															className: SopCapsulesPanel_module_css_default.confirmBody,
															children: t("panel.inject.confirm.body")
														}),
														/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
															className: SopCapsulesPanel_module_css_default.editorActions,
															children: [
																/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
																	type: "button",
																	className: SopCapsulesPanel_module_css_default.secondaryBtn,
																	disabled: view.injecting,
																	onClick: () => {
																		setPendingInject(null);
																	},
																	children: t("panel.manage.cancel")
																}),
																/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
																	type: "button",
																	className: SopCapsulesPanel_module_css_default.secondaryBtn,
																	disabled: view.injecting,
																	onClick: () => {
																		setInjectMode("append");
																		if (workspaceId !== void 0) localStorage.setItem(injectModeStorageKey(workspaceId), "append");
																		injectCapsule(pendingInject.body);
																	},
																	children: t("panel.inject.confirm.append")
																}),
																/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
																	type: "button",
																	className: SopCapsulesPanel_module_css_default.primaryBtn,
																	disabled: view.injecting,
																	onClick: () => {
																		setInjectMode("replace");
																		if (workspaceId !== void 0) localStorage.setItem(injectModeStorageKey(workspaceId), "replace");
																		injectCapsule(pendingInject.body);
																	},
																	children: t("panel.inject.confirm.replace")
																})
															]
														})
													]
												})]
											}, capsule.id))
										}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
											className: SopCapsulesPanel_module_css_default.capsuleList,
											children: visibleCapsules.map((capsule) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
												className: SopCapsulesPanel_module_css_default.manageCapsuleItem,
												children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
													className: SopCapsulesPanel_module_css_default.manageCapsuleRow,
													"data-confirm": confirm?.kind === "delete-capsule" && confirm.capsuleId === capsule.id ? "" : void 0,
													draggable: true,
													onDragStart: (event) => {
														event.dataTransfer.setData("text/plain", dndPayload("capsule", capsule.id));
														event.dataTransfer.effectAllowed = "move";
													},
													onDragOver: (event) => {
														event.preventDefault();
													},
													onDrop: (event) => {
														event.preventDefault();
														const payload = parseDndPayload(event.dataTransfer.getData("text/plain"));
														if (payload === null || payload.kind !== "capsule") return;
														reorderCapsules(moveIdBefore(view.capsules.map((row) => row.id), payload.id, capsule.id));
													},
													children: [
														/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
															className: SopCapsulesPanel_module_css_default.dragHandle,
															"aria-label": t("panel.manage.drag.capsule"),
															children: "⋮⋮"
														}),
														/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
															className: SopCapsulesPanel_module_css_default.capsuleTitle,
															children: capsule.title
														}),
														/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
															className: SopCapsulesPanel_module_css_default.rowActions,
															children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
																label: t("panel.manage.editCapsule"),
																side: "top",
																delayMs: 400,
																children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
																	type: "button",
																	className: SopCapsulesPanel_module_css_default.iconButton,
																	"aria-label": t("panel.manage.editCapsule"),
																	onClick: () => {
																		beginEditCapsule(capsule.id);
																	},
																	children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconEditOutlineRegular, {
																		size: 12,
																		"aria-hidden": "true"
																	})
																})
															}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
																label: t("panel.manage.deleteCapsule"),
																side: "top",
																delayMs: 400,
																children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
																	type: "button",
																	className: SopCapsulesPanel_module_css_default.iconButton,
																	"aria-label": t("panel.manage.deleteCapsule"),
																	onClick: () => {
																		requestDeleteCapsule(capsule.id);
																	},
																	children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconTrashOutlineRegular, {
																		size: 12,
																		"aria-hidden": "true"
																	})
																})
															})]
														}),
														confirm?.kind === "delete-capsule" && confirm.capsuleId === capsule.id && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmPopover, {
															title: t("panel.manage.confirm.deleteCapsule.title"),
															body: t("panel.manage.confirm.deleteCapsule.body"),
															actionLabel: t("panel.manage.confirm.action"),
															submitting,
															confirmMutation,
															cancelConfirm,
															t
														})
													]
												}), editor.kind === "capsule-edit" && editor.capsuleId === capsule.id && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CapsuleEditorForm, {
													title: editor.title,
													body: editor.body,
													submitting,
													reveal: true,
													setEditorTitle,
													setEditorBody,
													commitEditor,
													cancelEditor,
													t
												})]
											}, capsule.id))
										})]
									})
								]
							})]
						})
					]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
					open: confirm?.kind === "import-group",
					onClose: () => {
						if (!submitting) cancelConfirm();
					},
					title: t("panel.manage.confirm.import.title"),
					closeLabel: t("panel.close"),
					description: confirm?.kind === "import-group" ? t("panel.manage.confirm.import.body", {
						groupId: confirm.group.id,
						writeCount: confirm.group.capsules.length,
						deleteCount: confirm.deleteCount
					}) : "",
					footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: SopCapsulesPanel_module_css_default.secondaryBtn,
						disabled: submitting,
						onClick: () => {
							cancelConfirm();
						},
						children: t("panel.manage.cancel")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: SopCapsulesPanel_module_css_default.primaryBtn,
						disabled: submitting,
						"aria-busy": submitting,
						"aria-label": submitting ? t("panel.manage.submitting") : t("panel.manage.confirm.import.action"),
						onClick: () => {
							confirmMutation();
						},
						children: submitting ? t("panel.manage.submitting") : t("panel.manage.confirm.import.action")
					})] })
				})]
			});
		}
		//#endregion
		//#region src/client/locales.ts
		/** `sop-capsules` namespace dictionaries. */
		/** Dictionary namespace owned by this plugin. */
		const NS = "sop-capsules";
		/** Simplified Chinese dictionary (the key-set source of truth). */
		const zh = {
			"header.aria": "提示胶囊",
			"header.tooltip.noWorkspace": "请先选择工作区",
			"panel.title": "提示胶囊",
			"panel.close": "关闭",
			"panel.mode.pick": "选用",
			"panel.mode.manage": "管理",
			"panel.manage.groupHeading": "胶囊分组",
			"panel.manage.newGroup": "新建",
			"panel.manage.renameGroup": "重命名分组",
			"panel.manage.deleteGroup": "删除分组",
			"panel.manage.newCapsule": "新建胶囊",
			"panel.manage.exportGroup": "导出分组",
			"panel.manage.importGroup": "导入分组",
			"panel.manage.editCapsule": "编辑",
			"panel.manage.deleteCapsule": "删除",
			"panel.manage.save": "保存",
			"panel.manage.cancel": "取消",
			"panel.manage.displayName": "展示名",
			"panel.manage.capsuleTitle": "标题",
			"panel.manage.capsuleBody": "正文",
			"panel.manage.drag.group": "拖拽排序分组",
			"panel.manage.drag.capsule": "拖拽排序胶囊",
			"panel.manage.confirm.deleteGroup.title": "删除分组？",
			"panel.manage.confirm.deleteGroup.body": "将删除该分组及其全部胶囊。此操作无法撤销。",
			"panel.manage.confirm.deleteCapsule.title": "删除胶囊？",
			"panel.manage.confirm.deleteCapsule.body": "将从当前分组删除这条胶囊。此操作无法撤销。",
			"panel.manage.confirm.import.title": "导入分组？",
			"panel.manage.confirm.import.body": "目标分组 {groupId}：将写入 {writeCount} 条胶囊，将删除 {deleteCount} 条库中有而文件中无的胶囊。",
			"panel.manage.confirm.action": "确认删除",
			"panel.manage.confirm.import.action": "确认导入",
			"panel.manage.submitting": "正在保存",
			"panel.empty.manage": "这个分组还没有胶囊。点「新建胶囊」添加一条。",
			"panel.search.aria": "搜索胶囊标题",
			"panel.search.placeholder": "搜索标题…",
			"panel.inject.confirm.title": "写入对话框",
			"panel.inject.confirm.body": "替换会清掉当前文字；追加会接在现有文字后面。",
			"panel.inject.confirm.replace": "替换当前内容",
			"panel.inject.confirm.append": "追加到后面",
			"panel.empty.group": "当前分组还没有胶囊。",
			"panel.empty.search": "没有匹配的胶囊标题。",
			"panel.error.remote": "无法加载提示胶囊库，请稍后重试。",
			"panel.error.retry": "重试",
			"panel.noWorkspace.body": "请先为会话选择工作区，再选用提示胶囊。",
			"panel.banner.orphan": "已将磁盘上未登记的分组自动纳入工作区提示胶囊库。",
			"panel.banner.orphan.dismiss": "关闭提示"
		};
		/** English dictionary, key-identical to the Chinese source of truth. */
		const en = {
			"header.aria": "Prompt capsules",
			"header.tooltip.noWorkspace": "Select a workspace first",
			"panel.title": "Prompt capsules",
			"panel.close": "Close",
			"panel.mode.pick": "Pick",
			"panel.mode.manage": "Manage",
			"panel.manage.groupHeading": "Capsule groups",
			"panel.manage.newGroup": "New",
			"panel.manage.renameGroup": "Rename group",
			"panel.manage.deleteGroup": "Delete group",
			"panel.manage.newCapsule": "New capsule",
			"panel.manage.exportGroup": "Export group",
			"panel.manage.importGroup": "Import group",
			"panel.manage.editCapsule": "Edit",
			"panel.manage.deleteCapsule": "Delete",
			"panel.manage.save": "Save",
			"panel.manage.cancel": "Cancel",
			"panel.manage.displayName": "Display name",
			"panel.manage.capsuleTitle": "Title",
			"panel.manage.capsuleBody": "Body",
			"panel.manage.drag.group": "Reorder groups",
			"panel.manage.drag.capsule": "Reorder capsules",
			"panel.manage.confirm.deleteGroup.title": "Delete this group?",
			"panel.manage.confirm.deleteGroup.body": "This deletes the group and every capsule in it. This cannot be undone.",
			"panel.manage.confirm.deleteCapsule.title": "Delete this capsule?",
			"panel.manage.confirm.deleteCapsule.body": "This removes the capsule from the current group. This cannot be undone.",
			"panel.manage.confirm.import.title": "Import this group?",
			"panel.manage.confirm.import.body": "Target group {groupId}: write {writeCount} capsules; delete {deleteCount} capsules present in the library but missing from the file.",
			"panel.manage.confirm.action": "Delete",
			"panel.manage.confirm.import.action": "Import",
			"panel.manage.submitting": "Saving",
			"panel.empty.manage": "This group has no capsules yet. Use New capsule to add one.",
			"panel.search.aria": "Search capsule titles",
			"panel.search.placeholder": "Search titles…",
			"panel.inject.confirm.title": "Write to the composer",
			"panel.inject.confirm.body": "Replace clears the current text. Append adds the capsule after it.",
			"panel.inject.confirm.replace": "Replace current text",
			"panel.inject.confirm.append": "Append after",
			"panel.empty.group": "This group has no capsules yet.",
			"panel.empty.search": "No capsule titles match your search.",
			"panel.error.remote": "Could not load the prompt capsule library. Try again.",
			"panel.error.retry": "Retry",
			"panel.noWorkspace.body": "Select a workspace for this session before picking prompt capsules.",
			"panel.banner.orphan": "Unregistered group files on disk were added to the workspace prompt capsule library.",
			"panel.banner.orphan.dismiss": "Dismiss"
		};
		//#endregion
		//#region src/client/slash-refs.ts
		/**
		* Inline style for a matched slash token. Same color, padding, and radius as
		* the composer reference class. A confirmed command uses that color without
		* padding; `SLASH_CLAIM_STYLE` is that highlight, and a node carrying it is left alone.
		*/
		const SLASH_REF_STYLE = "color: var(--dsw-alias-state-business-primary); padding: 0 4px; border-radius: 6px";
		/**
		* Built-in command spellings in both shipped locales, keyed by catalog name.
		* Mirrors the `command` namespace `token.*` entries. English tokens equal the
		* catalog name. A definition id selects the same row when a scope renames the
		* command.
		*/
		const BUILTIN_SPELLINGS = {
			goal: ["目标", "goal"],
			plan: ["计划", "plan"],
			feedback: ["反馈", "feedback"],
			compact: ["压缩", "compact"],
			permission: ["权限", "permission"],
			export: ["导出", "export"]
		};
		const BUILTIN_BY_DEFINITION = {
			"@deepseek-ai/dsh-command-goal": "goal",
			"@deepseek-ai/dsh-plan-mode": "plan",
			"@deepseek-ai/dsh-command-feedback": "feedback",
			"@deepseek-ai/dsh-command-compact": "compact",
			"@deepseek-ai/dsh-permission-presets": "permission",
			"@deepseek-ai/dsh-session-log-export": "export"
		};
		/** Symbol on the composer editor that holds the live spelling set. */
		const SPELLINGS = Symbol.for("@nangeagi/dsh-sop-capsules/slash-spellings");
		/**
		* Load slash spellings for one session: command names, built-in localized
		* tokens, the active `command` locale token when it differs from the lookup
		* key, and skill names. A failed or missing remote contributes nothing.
		* @param remote - commands and skills remotes.
		* @param sessionId - session whose catalogs apply.
		* @param commandToken - active `command` namespace lookup (`token.<name>`).
		* @returns spellings without a leading slash.
		*/
		async function loadSlashSpellings(remote, sessionId, commandToken) {
			const [commands, skills] = await Promise.all([readRemote(() => remote.commands?.list(sessionId)), readRemote(() => remote.skills?.list({ sessionId }))]);
			const spellings = /* @__PURE__ */ new Set();
			for (const row of commandRows(commands)) {
				spellings.add(row.name);
				const builtin = builtinName(row);
				if (builtin !== void 0) for (const token of BUILTIN_SPELLINGS[builtin] ?? []) spellings.add(token);
				const localized = commandToken(row.name);
				if (localized !== "" && localized !== `token.${row.name}`) spellings.add(localized);
			}
			for (const name of skillNames(skills)) spellings.add(name);
			return spellings;
		}
		/**
		* Install the slash decoration on one session input, or refresh its spelling
		* set when the transform is already installed. No editor means the draft
		* stays plain text.
		* @param input - session input shell, or undefined when the session has no scope.
		* @param spellings - names that decorate, without a leading slash.
		*/
		function bindSlashRefDecoration(input, spellings) {
			const editor = composerEditor(input);
			if (editor === void 0) return;
			const live = editor[SPELLINGS];
			if (live !== void 0) {
				live.clear();
				for (const name of spellings) live.add(name);
				return;
			}
			const klass = editor._nodes?.get("text")?.klass;
			if (klass === void 0 || editor.registerNodeTransform === void 0) return;
			const created = new Set(spellings);
			editor[SPELLINGS] = created;
			editor.registerNodeTransform(klass, (node) => {
				decorateSlashTextNode(node, created);
			});
		}
		/**
		* Mark composer text nodes dirty so the decoration transform runs again.
		* `setDraft` skips the write when the text is unchanged, which would leave a
		* repeated inject unstyled.
		* @param input - session input shell, or undefined when the session has no scope.
		*/
		function refreshSlashRefDecoration(input) {
			const editor = composerEditor(input);
			if (editor?.update === void 0) return;
			editor.update(() => {
				try {
					markPendingTextDirty(editor);
				} catch (error) {
					console.error("[sop-capsules] slash reference refresh failed:", error);
				}
			});
		}
		/** Dirty every text node in the update that is in progress. */
		function markPendingTextDirty(editor) {
			const pending = editor._pendingEditorState;
			if (pending === void 0) return;
			for (const node of pending._nodeMap.values()) if (node.getType() === "text") node.markDirty();
		}
		/**
		* Style one text node when it holds an exact slash spelling. A matched token
		* that shares its node with other text is split out, and the other pieces
		* drop a copied reference style in that same call so they are not merged
		* back. Claim-styled nodes are left to the composer. A node that no longer
		* matches drops this style.
		* @param node - composer text node.
		* @param spellings - names that decorate, without a leading slash.
		*/
		function decorateSlashTextNode(node, spellings) {
			if (node.getType() !== "text" || !node.isSimpleText()) return;
			if (node.getStyle() === "color: var(--dsw-alias-state-business-primary)") return;
			const text = node.getTextContent();
			const match = firstSlashSpelling(text, spellings);
			if (match === null) {
				if (node.getStyle() === "color: var(--dsw-alias-state-business-primary); padding: 0 4px; border-radius: 6px") node.setStyle("");
				return;
			}
			if (match.start === 0 && match.end === text.length) {
				if (node.getStyle() !== "color: var(--dsw-alias-state-business-primary); padding: 0 4px; border-radius: 6px") node.setStyle(SLASH_REF_STYLE);
				return;
			}
			const parts = match.start === 0 ? node.splitText(match.end) : node.splitText(match.start, match.end);
			const token = match.start === 0 ? parts[0] : parts[1];
			for (const part of parts) if (part === token) {
				if (part.getStyle() !== "color: var(--dsw-alias-state-business-primary); padding: 0 4px; border-radius: 6px" && part.getStyle() !== "color: var(--dsw-alias-state-business-primary)") part.setStyle(SLASH_REF_STYLE);
			} else if (part.getStyle() === "color: var(--dsw-alias-state-business-primary); padding: 0 4px; border-radius: 6px") part.setStyle("");
		}
		/**
		* First `/spelling` in `text` whose entire non-space run is in `spellings`.
		* The slash sits at the start of `text` or after whitespace. A glued suffix
		* (`/计划小程序`, `/plan.md`) is a different run and does not match.
		* @param text - one text node's content.
		* @param spellings - names without a leading slash.
		* @returns the `/spelling` range, or null.
		*/
		function firstSlashSpelling(text, spellings) {
			const pattern = /(^|\s)\/(\S+)/gu;
			let found;
			while ((found = pattern.exec(text)) !== null) {
				const name = found[2] ?? "";
				if (!spellings.has(name)) continue;
				const start = found.index + (found[1]?.length ?? 0);
				return {
					start,
					end: start + 1 + name.length
				};
			}
			return null;
		}
		/** Read one optional remote call. A throw, rejection, or failed result yields undefined. */
		async function readRemote(call) {
			let pending;
			try {
				pending = call();
			} catch (error) {
				console.error("[sop-capsules] slash catalog read failed:", error);
				return;
			}
			if (pending === void 0) return void 0;
			let result;
			try {
				result = await pending;
			} catch (error) {
				console.error("[sop-capsules] slash catalog read failed:", error);
				return;
			}
			if (!result.ok) return void 0;
			return result.value;
		}
		/** Normalize a commands.list value into rows. */
		function commandRows(value) {
			const list = Array.isArray(value) ? value : isRecord(value) && Array.isArray(value.commands) ? value.commands : [];
			const rows = [];
			for (const item of list) {
				if (!isRecord(item) || typeof item.name !== "string" || item.name === "") continue;
				rows.push({
					name: item.name,
					...typeof item.definitionId === "string" ? { definitionId: item.definitionId } : {}
				});
			}
			return rows;
		}
		/** Catalog name for a built-in row, from its definition id or its name. */
		function builtinName(row) {
			if (row.definitionId !== void 0) {
				const fromId = BUILTIN_BY_DEFINITION[row.definitionId];
				if (fromId !== void 0) return fromId;
			}
			return BUILTIN_SPELLINGS[row.name] === void 0 ? void 0 : row.name;
		}
		/** Skill names from a skills.list value. */
		function skillNames(value) {
			const list = isRecord(value) && Array.isArray(value.skills) ? value.skills : Array.isArray(value) ? value : [];
			const names = [];
			for (const item of list) if (typeof item === "string" && item !== "") names.push(item);
			else if (isRecord(item) && typeof item.name === "string" && item.name !== "") names.push(item.name);
			return names;
		}
		/** Session input shell editor, when the shell exposes one. */
		function composerEditor(input) {
			if (input === void 0) return void 0;
			const editor = input.editor;
			if (editor === null || typeof editor !== "object") return void 0;
			return editor;
		}
		/** Plain object check for catalog payloads. */
		function isRecord(value) {
			return value !== null && typeof value === "object";
		}
		//#endregion
		//#region src/client/index.ts
		/**
		* Loader-level inject cannot include `remote.sopCapsules`: that service exists
		* only after this plugin `$mount`s the generated `./remote` contribution.
		* Official Client remotes are mounted by `dsh-api-remotes`; a tree-outside
		* plugin mounts its own namespace (same pattern as experimental Agent Teams).
		* `remote.commands` and `remote.skills` are declared on the UI fiber below:
		* reading them without inject throws, and the slash catalog stays empty.
		*/
		const inject = [
			"slots",
			"locale",
			"remote",
			"sessions",
			"conversation"
		];
		/**
		* Register locale dictionaries, header utility, and overlay after `remote.sopCapsules` exists.
		* @param ctx - client context that can read `remote.sopCapsules`.
		*/
		function registerUi(ctx) {
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "sop-capsules: dictionaries");
			const surfaces = /* @__PURE__ */ new Map();
			ctx.effect(() => () => {
				for (const surface of surfaces.values()) surface.dispose();
				surfaces.clear();
			}, "sop-capsules: per-session surfaces");
			ctx.slots.inject("conversation.session.header.utilities", () => ctx.slots.register({
				name: "conversation.session.header.utilities",
				id: "sop-capsules",
				order: -20,
				locale: NS,
				inject: (sessionId) => {
					const surface = surfaceFor(ctx, surfaces, sessionId);
					return {
						hooks: { sopCapsules: surface.state },
						ensureLibrary: () => {
							surface.ensureLibrary();
						},
						openPanel: () => {
							surface.openPanel();
						}
					};
				}
			}, SopCapsulesHeaderAction));
			ctx.slots.inject("conversation.input.overlay", () => ctx.slots.register({
				name: "conversation.input.overlay",
				id: "sop-capsules-panel",
				order: 10,
				locale: NS,
				inject: (sessionId) => {
					const surface = surfaceFor(ctx, surfaces, sessionId);
					const sessions = ctx.sessions;
					const inputForSession = () => {
						const scope = sessions.scope(sessionId);
						return scope === void 0 ? void 0 : ctx.conversation.input.for(scope);
					};
					return {
						hooks: { sopCapsules: surface.state },
						closePanel: () => {
							surface.closePanel();
						},
						readDraft: () => inputForSession()?.state.getSnapshot().draft ?? "",
						writeDraft: (text) => {
							inputForSession()?.setDraft(text);
						},
						selectGroup: (groupId) => {
							surface.selectGroup(groupId);
						},
						setSearchQuery: (query) => {
							surface.setSearchQuery(query);
						},
						setInjectMode: (mode) => {
							surface.setInjectMode(mode);
						},
						setPanelMode: (mode) => {
							surface.setPanelMode(mode);
						},
						ensureLibrary: () => {
							surface.ensureLibrary();
						},
						dismissListError: () => {
							surface.dismissListError();
						},
						retryGroupLoad: () => {
							surface.retryGroupLoad();
						},
						beginNewGroup: () => {
							surface.beginNewGroup();
						},
						beginRenameGroup: (groupId) => {
							surface.beginRenameGroup(groupId);
						},
						beginNewCapsule: () => {
							surface.beginNewCapsule();
						},
						beginEditCapsule: (capsuleId) => {
							surface.beginEditCapsule(capsuleId);
						},
						setEditorDisplayName: (value) => {
							surface.setEditorDisplayName(value);
						},
						setEditorTitle: (value) => {
							surface.setEditorTitle(value);
						},
						setEditorBody: (value) => {
							surface.setEditorBody(value);
						},
						commitEditor: () => {
							surface.commitEditor();
						},
						cancelEditor: () => {
							surface.cancelEditor();
						},
						requestDeleteGroup: (groupId) => {
							surface.requestDeleteGroup(groupId);
						},
						requestDeleteCapsule: (capsuleId) => {
							surface.requestDeleteCapsule(capsuleId);
						},
						cancelConfirm: () => {
							surface.cancelConfirm();
						},
						confirmMutation: () => {
							surface.confirmMutation();
						},
						reorderGroups: (groupIds) => {
							surface.reorderGroups(groupIds);
						},
						reorderCapsules: (capsuleIds) => {
							surface.reorderCapsules(capsuleIds);
						},
						exportSelectedGroup: () => surface.exportSelectedGroup(),
						prepareImport: (filename, raw) => surface.prepareImport(filename, raw),
						dismissOrphanBanner: () => {
							surface.dismissOrphanBanner();
						},
						injectCapsule: (body) => {
							const input = inputForSession();
							const remote = ctx.remote;
							const commandToken = ctx.locale.bind("command");
							surface.injectCapsule(body, () => input?.state.getSnapshot().draft ?? "", (text) => {
								input?.setDraft(text);
								refreshSlashRefDecoration(input);
							}, () => {
								surface.closePanel();
							}, async () => {
								bindSlashRefDecoration(input, await loadSlashSpellings(remote, sessionId, (name) => commandToken(`token.${name}`)));
							});
						}
					};
				}
			}, SopCapsulesPanel));
		}
		/**
		* Mount the generated `sopCapsules` Remote contribution, then register UI.
		* @param ctx - client root carrying `remote`.
		* @param contribution - generated Typert Remote descriptors for this package.
		* @returns disposer for UI fiber then Remote namespace.
		*/
		async function mountSopCapsulesUi(ctx, contribution) {
			const disposeRemote = await ctx.remote.$mount(contribution);
			const ui = ctx.inject([
				"slots",
				"locale",
				"remote.sopCapsules",
				"remote.commands",
				"remote.skills",
				"sessions",
				"conversation"
			], registerUi);
			try {
				await ui;
			} catch (error) {
				await ui.dispose();
				await disposeRemote();
				throw error;
			}
			return async () => {
				await ui.dispose();
				await disposeRemote();
			};
		}
		/**
		* Client plugin body: mount `./remote`, then header + overlay.
		* @param ctx - client root context.
		* @returns disposer for UI and Remote namespace.
		*/
		async function apply(ctx) {
			return await mountSopCapsulesUi(ctx, TYPERT_REMOTE);
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		exports.mountSopCapsulesUi = mountSopCapsulesUi;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
/**
 * SOP capsules plugin, Host half: Typert Remote `sopCapsules` and workspace library IO.
 * @module @nangeagi/dsh-sop-capsules
 */
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
import { Remote, TypertRemoteService } from '@deepseek-ai/dsh-typert-protocol';
import * as library from "./library-io.js";
import { resolveLibraryRoot } from "./workspace-root.js";
/** Host Remote service for workspace SOP capsule library persistence. */
let SopCapsulesService = (() => {
    let _classSuper = TypertRemoteService;
    let _instanceExtraInitializers = [];
    let _listLibrary_decorators;
    let _getGroup_decorators;
    let _saveGroup_decorators;
    let _deleteGroup_decorators;
    let _reorderGroups_decorators;
    return class SopCapsulesService extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _listLibrary_decorators = [Remote];
            _getGroup_decorators = [Remote];
            _saveGroup_decorators = [Remote];
            _deleteGroup_decorators = [Remote];
            _reorderGroups_decorators = [Remote];
            __esDecorate(this, null, _listLibrary_decorators, { kind: "method", name: "listLibrary", static: false, private: false, access: { has: obj => "listLibrary" in obj, get: obj => obj.listLibrary }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _getGroup_decorators, { kind: "method", name: "getGroup", static: false, private: false, access: { has: obj => "getGroup" in obj, get: obj => obj.getGroup }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _saveGroup_decorators, { kind: "method", name: "saveGroup", static: false, private: false, access: { has: obj => "saveGroup" in obj, get: obj => obj.saveGroup }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _deleteGroup_decorators, { kind: "method", name: "deleteGroup", static: false, private: false, access: { has: obj => "deleteGroup" in obj, get: obj => obj.deleteGroup }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _reorderGroups_decorators, { kind: "method", name: "reorderGroups", static: false, private: false, access: { has: obj => "reorderGroups" in obj, get: obj => obj.reorderGroups }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static inject = ['sessions', 'workspaceRegistry', 'sessionPersistence'];
        /**
         * @param ctx - Host context carrying sessions and workspace registry.
         */
        constructor(ctx) {
            super(ctx, 'sopCapsules');
            __runInitializers(this, _instanceExtraInitializers);
        }
        /**
         * List registered groups for the session workspace library.
         * @param sessionId - Session whose workspace entity selects the library root.
         * @param signal - caller cancellation.
         */
        async listLibrary(sessionId, signal) {
            signal.throwIfAborted();
            const root = await resolveLibraryRoot(this.ctx, sessionId);
            return await library.listLibrary(root);
        }
        /**
         * Load one group yaml.
         * @param sessionId - Session whose workspace entity selects the library root.
         * @param groupId - stable group id.
         * @param signal - caller cancellation.
         */
        async getGroup(sessionId, groupId, signal) {
            signal.throwIfAborted();
            const root = await resolveLibraryRoot(this.ctx, sessionId);
            return await library.getGroup(root, groupId);
        }
        /**
         * Create or replace one group and register new ids on the manifest.
         * @param sessionId - Session whose workspace entity selects the library root.
         * @param group - full group payload.
         * @param signal - caller cancellation.
         */
        async saveGroup(sessionId, group, signal) {
            signal.throwIfAborted();
            const root = await resolveLibraryRoot(this.ctx, sessionId);
            await library.saveGroup(root, group);
        }
        /**
         * Delete one group file and remove it from the manifest.
         * @param sessionId - Session whose workspace entity selects the library root.
         * @param groupId - stable group id.
         * @param signal - caller cancellation.
         */
        async deleteGroup(sessionId, groupId, signal) {
            signal.throwIfAborted();
            const root = await resolveLibraryRoot(this.ctx, sessionId);
            await library.deleteGroup(root, groupId);
        }
        /**
         * Replace manifest group order.
         * @param sessionId - Session whose workspace entity selects the library root.
         * @param groupIds - ordered ids covering every registered group.
         * @param signal - caller cancellation.
         */
        async reorderGroups(sessionId, groupIds, signal) {
            signal.throwIfAborted();
            const root = await resolveLibraryRoot(this.ctx, sessionId);
            await library.reorderGroups(root, groupIds);
        }
    };
})();
export { SopCapsulesService };
export default SopCapsulesService;
//# sourceMappingURL=index.js.map
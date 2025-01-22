"use strict";
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGameDto = void 0;
var class_validator_1 = require("class-validator");
var CreateGameDto = function () {
    var _a;
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _platform_decorators;
    var _platform_initializers = [];
    var _platform_extraInitializers = [];
    var _genre_decorators;
    var _genre_initializers = [];
    var _genre_extraInitializers = [];
    var _releaseYear_decorators;
    var _releaseYear_initializers = [];
    var _releaseYear_extraInitializers = [];
    var _developer_decorators;
    var _developer_initializers = [];
    var _developer_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _coverImage_decorators;
    var _coverImage_initializers = [];
    var _coverImage_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateGameDto() {
                this.title = __runInitializers(this, _title_initializers, void 0);
                this.platform = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _platform_initializers, void 0));
                this.genre = (__runInitializers(this, _platform_extraInitializers), __runInitializers(this, _genre_initializers, void 0));
                this.releaseYear = (__runInitializers(this, _genre_extraInitializers), __runInitializers(this, _releaseYear_initializers, void 0));
                this.developer = (__runInitializers(this, _releaseYear_extraInitializers), __runInitializers(this, _developer_initializers, void 0));
                this.description = (__runInitializers(this, _developer_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                this.coverImage = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _coverImage_initializers, void 0));
                __runInitializers(this, _coverImage_extraInitializers);
            }
            return CreateGameDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _title_decorators = [(0, class_validator_1.IsString)()];
            _platform_decorators = [(0, class_validator_1.IsString)()];
            _genre_decorators = [(0, class_validator_1.IsString)()];
            _releaseYear_decorators = [(0, class_validator_1.IsInt)()];
            _developer_decorators = [(0, class_validator_1.IsString)()];
            _description_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _coverImage_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
            __esDecorate(null, null, _platform_decorators, { kind: "field", name: "platform", static: false, private: false, access: { has: function (obj) { return "platform" in obj; }, get: function (obj) { return obj.platform; }, set: function (obj, value) { obj.platform = value; } }, metadata: _metadata }, _platform_initializers, _platform_extraInitializers);
            __esDecorate(null, null, _genre_decorators, { kind: "field", name: "genre", static: false, private: false, access: { has: function (obj) { return "genre" in obj; }, get: function (obj) { return obj.genre; }, set: function (obj, value) { obj.genre = value; } }, metadata: _metadata }, _genre_initializers, _genre_extraInitializers);
            __esDecorate(null, null, _releaseYear_decorators, { kind: "field", name: "releaseYear", static: false, private: false, access: { has: function (obj) { return "releaseYear" in obj; }, get: function (obj) { return obj.releaseYear; }, set: function (obj, value) { obj.releaseYear = value; } }, metadata: _metadata }, _releaseYear_initializers, _releaseYear_extraInitializers);
            __esDecorate(null, null, _developer_decorators, { kind: "field", name: "developer", static: false, private: false, access: { has: function (obj) { return "developer" in obj; }, get: function (obj) { return obj.developer; }, set: function (obj, value) { obj.developer = value; } }, metadata: _metadata }, _developer_initializers, _developer_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _coverImage_decorators, { kind: "field", name: "coverImage", static: false, private: false, access: { has: function (obj) { return "coverImage" in obj; }, get: function (obj) { return obj.coverImage; }, set: function (obj, value) { obj.coverImage = value; } }, metadata: _metadata }, _coverImage_initializers, _coverImage_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateGameDto = CreateGameDto;

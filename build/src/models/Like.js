"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeModel = exports.Like = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const Comment_1 = require("./Comment");
const User_1 = require("./User");
class Like {
}
__decorate([
    (0, typegoose_1.prop)({ ref: () => Comment_1.Comment }),
    __metadata("design:type", Object)
], Like.prototype, "comment", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => User_1.User }),
    __metadata("design:type", Object)
], Like.prototype, "likeUser", void 0);
exports.Like = Like;
exports.LikeModel = (0, typegoose_1.getModelForClass)(Like);

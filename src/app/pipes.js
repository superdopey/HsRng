"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RotateStylePipe = (function () {
    function RotateStylePipe() {
    }
    RotateStylePipe.prototype.transform = function (value, count, index) {
        var range = 40;
        var startDeg = -(range / 2);
        var step = range / (count - 1);
        var rotate = (step * (index + 0)) + startDeg;
        return "rotate(" + rotate + "deg)";
    };
    return RotateStylePipe;
}());
RotateStylePipe = __decorate([
    core_1.Pipe({ name: 'rotateStylePipe' })
], RotateStylePipe);
exports.RotateStylePipe = RotateStylePipe;
var HeightStylePipe = (function () {
    function HeightStylePipe() {
    }
    HeightStylePipe.prototype.transform = function (value, count, index) {
        //     let range = 50;
        //   let start = -(range / 2);
        var step = (index + 1);
        var h = count / 2;
        var marginTop = 1.2 * Math.pow(step - h, 2);
        return marginTop.toString() + "px";
    };
    return HeightStylePipe;
}());
HeightStylePipe = __decorate([
    core_1.Pipe({ name: 'heightStylePipe' })
], HeightStylePipe);
exports.HeightStylePipe = HeightStylePipe;
//# sourceMappingURL=pipes.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var RotateStylePipe = (function () {
    function RotateStylePipe() {
    }
    RotateStylePipe.prototype.transform = function (value, count, index) {
        var range = 40;
        var startDeg = -(range / 2);
        var step = range / (count - 1);
        var rotate = (step * (index + 0)) + startDeg;
        // let translateY = rotate < 0 ? rotate * -1: rotate;
        // if(count >= 5) translateY = translateY*2;
        var x = (index + 1);
        var h = count / 2;
        var translateY = 1.2 * Math.pow(x - h, 2);
        return "rotate(" + rotate + "deg) translateY(" + translateY + "px)";
        // return "rotate(" + rotate + "deg) ";
    };
    return RotateStylePipe;
}());
RotateStylePipe = __decorate([
    core_1.Pipe({ name: 'rotateStylePipe' })
], RotateStylePipe);
exports.RotateStylePipe = RotateStylePipe;
var MarginStylePipe = (function () {
    function MarginStylePipe() {
    }
    MarginStylePipe.prototype.transform = function (value, count, index) {
        var width = 700;
        var marginLeft = count > 4 ? -(40 + (count * 3)) : -40;
        if (index == 0)
            marginLeft = 0;
        return marginLeft + "px";
    };
    return MarginStylePipe;
}());
MarginStylePipe = __decorate([
    core_1.Pipe({ name: 'marginStylePipe' })
], MarginStylePipe);
exports.MarginStylePipe = MarginStylePipe;
//# sourceMappingURL=pipes.js.map
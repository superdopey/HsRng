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
var core_1 = require("@angular/core");
var card_1 = require("../models/card");
var MinionComponent = (function () {
    function MinionComponent() {
    }
    MinionComponent.prototype.ngOnInit = function () {
    };
    return MinionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", card_1.Card)
], MinionComponent.prototype, "card", void 0);
MinionComponent = __decorate([
    core_1.Component({
        selector: 'minion',
        template: "\n    <div class=\"entity in-play minion exhausted\" title=\"{{card.Name}}\">\n        <div class=\"visuals\" style=\"\">\n            <img src=\"https://art.hearthstonejson.com/v1/256x/{{card.Id}}.jpg\" class=\"inplay-portrait\" draggable=\"false\">\n            <img src=\"https://s3.amazonaws.com/joust.hearthsim.net/branches/master/assets/images/inplay_minion.png\" class=\"inplay-base\" draggable=\"false\">\n            <!--<img src=\"https://s3.amazonaws.com/joust.hearthsim.net/branches/master/assets/images/effect_sleep.png\"\n                class=\"effect-sleep\" draggable=\"false\"></div>\n        <div class=\"stats\">\n            <div class=\"atk\">1</div>\n            <div class=\"health\">1</div>\n        </div>\n        -->\n    </div>"
    }),
    __metadata("design:paramtypes", [])
], MinionComponent);
exports.MinionComponent = MinionComponent;
//# sourceMappingURL=minion.component.js.map
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-konami', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ng-konami'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var NgKonamiCodeModel = /** @class */ (function () {
        function NgKonamiCodeModel() {
            this.completions = 0;
            this.streak = 0;
        }
        return NgKonamiCodeModel;
    }());

    var NgKonamiService = /** @class */ (function () {
        function NgKonamiService() {
            this.konamiCodes = [];
            this.currentPattern = [];
        }
        NgKonamiService.prototype.listen = function (event) {
            this.currentPattern.push(event);
            for (var i = 0; i < this.konamiCodes.length; i++) {
                var konamiCode = this.konamiCodes[i];
                var codeCount = konamiCode.code.length;
                var requiredKey = konamiCode.code[konamiCode.streak].trim();
                if (requiredKey.toLowerCase() === event.key.toLowerCase() || requiredKey === event.code) {
                    konamiCode.streak++;
                    if (codeCount === konamiCode.streak) {
                        konamiCode.callback();
                        konamiCode.streak = 0;
                        konamiCode.completions++;
                    }
                }
                else {
                    konamiCode.streak = 0;
                }
            }
        };
        NgKonamiService.prototype.register = function (code, callback) {
            var konamiCode = new NgKonamiCodeModel();
            konamiCode.code = code.split(',');
            konamiCode.callback = callback;
            this.konamiCodes.push(konamiCode);
        };
        NgKonamiService.prototype.removeAll = function () {
            this.konamiCodes = [];
        };
        return NgKonamiService;
    }());
    NgKonamiService.decorators = [
        { type: core.Injectable }
    ];
    NgKonamiService.ctorParameters = function () { return []; };

    var NgKonamiModule = /** @class */ (function () {
        function NgKonamiModule() {
        }
        return NgKonamiModule;
    }());
    NgKonamiModule.decorators = [
        { type: core.NgModule, args: [{
                    providers: [
                        NgKonamiService
                    ]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgKonamiCodeModel = NgKonamiCodeModel;
    exports.NgKonamiModule = NgKonamiModule;
    exports.NgKonamiService = NgKonamiService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-konami.umd.js.map

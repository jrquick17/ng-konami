import { Injectable, NgModule } from '@angular/core';

class NgKonamiCodeModel {
    constructor() {
        this.completions = 0;
        this.streak = 0;
    }
}

class NgKonamiService {
    constructor() {
        this.konamiCodes = [];
        this.currentPattern = [];
    }
    listen(event) {
        this.currentPattern.push(event);
        for (let i = 0; i < this.konamiCodes.length; i++) {
            const konamiCode = this.konamiCodes[i];
            const codeCount = konamiCode.code.length;
            const requiredKey = konamiCode.code[konamiCode.streak].trim();
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
    }
    register(code, callback) {
        const konamiCode = new NgKonamiCodeModel();
        konamiCode.code = code.split(',');
        konamiCode.callback = callback;
        this.konamiCodes.push(konamiCode);
    }
    removeAll() {
        this.konamiCodes = [];
    }
}
NgKonamiService.decorators = [
    { type: Injectable }
];
NgKonamiService.ctorParameters = () => [];

class NgKonamiModule {
}
NgKonamiModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    NgKonamiService
                ]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { NgKonamiCodeModel, NgKonamiModule, NgKonamiService };
//# sourceMappingURL=ng-konami.js.map

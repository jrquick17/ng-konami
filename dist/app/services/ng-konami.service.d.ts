import { NgKonamiCodeModel } from '../models/ng-konami-code.model';
export declare class NgKonamiService {
    konamiCodes: NgKonamiCodeModel[];
    currentPattern: any[];
    constructor();
    listen(event: KeyboardEvent): void;
    register(code: string, callback: Function): void;
    removeAll(): void;
}

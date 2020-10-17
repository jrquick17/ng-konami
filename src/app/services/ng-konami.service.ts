import {Injectable} from '@angular/core';

import {NgKonamiCodeModel} from '../models/ng-konami-code.model';

@Injectable()
export class NgKonamiService {
  public konamiCodes:NgKonamiCodeModel[] = [];

  public currentPattern = [];

  constructor() {

  }

  listen(event:KeyboardEvent):void {
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
      } else {
        konamiCode.streak = 0;
      }
    }
  }

  register(code:string, callback:Function):void {
    const konamiCode = new NgKonamiCodeModel();
    konamiCode.code = code.split(',');
    konamiCode.callback = callback;

    this.konamiCodes.push(konamiCode);
  }
}

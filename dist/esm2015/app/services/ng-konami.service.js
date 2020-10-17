import { Injectable } from '@angular/core';
import { NgKonamiCodeModel } from '../models/ng-konami-code.model';
export class NgKonamiService {
    constructor() {
        this.konamiCodes = [];
        this.currentPattern = [];
    }
    listen(event) {
        this.currentPattern.push(event);
        for (let i = 0; i < this.konamiCodes.length; i++) {
            const konamiCode = this.konamiCodes[i];
            const codeCount = konamiCode.code.length;
            const requiredKey = konamiCode.code[konamiCode.streak];
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
}
NgKonamiService.decorators = [
    { type: Injectable }
];
NgKonamiService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta29uYW1pLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pycXVpY2svZGV2ZWxvcG1lbnQvZW5jb3VudGluZy9uZy1rb25hbWkvc3JjLyIsInNvdXJjZXMiOlsiYXBwL3NlcnZpY2VzL25nLWtvbmFtaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFHakUsTUFBTSxPQUFPLGVBQWU7SUFLMUI7UUFKTyxnQkFBVyxHQUF1QixFQUFFLENBQUM7UUFFckMsbUJBQWMsR0FBRyxFQUFFLENBQUM7SUFJM0IsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFtQjtRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2QyxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUV6QyxNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV2RCxJQUFJLFdBQVcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLFdBQVcsS0FBSyxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUN2RixVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRXBCLElBQUksU0FBUyxLQUFLLFVBQVUsQ0FBQyxNQUFNLEVBQUU7b0JBQ25DLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFFdEIsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQ3RCLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDMUI7YUFDRjtpQkFBTTtnQkFDTCxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUN2QjtTQUNGO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFXLEVBQUUsUUFBaUI7UUFDckMsTUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQzNDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxVQUFVLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUUvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7WUF6Q0YsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7TmdLb25hbWlDb2RlTW9kZWx9IGZyb20gJy4uL21vZGVscy9uZy1rb25hbWktY29kZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ0tvbmFtaVNlcnZpY2Uge1xuICBwdWJsaWMga29uYW1pQ29kZXM6TmdLb25hbWlDb2RlTW9kZWxbXSA9IFtdO1xuXG4gIHB1YmxpYyBjdXJyZW50UGF0dGVybiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBsaXN0ZW4oZXZlbnQ6S2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMuY3VycmVudFBhdHRlcm4ucHVzaChldmVudCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMua29uYW1pQ29kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtvbmFtaUNvZGUgPSB0aGlzLmtvbmFtaUNvZGVzW2ldO1xuXG4gICAgICBjb25zdCBjb2RlQ291bnQgPSBrb25hbWlDb2RlLmNvZGUubGVuZ3RoO1xuXG4gICAgICBjb25zdCByZXF1aXJlZEtleSA9IGtvbmFtaUNvZGUuY29kZVtrb25hbWlDb2RlLnN0cmVha107XG5cbiAgICAgIGlmIChyZXF1aXJlZEtleS50b0xvd2VyQ2FzZSgpID09PSBldmVudC5rZXkudG9Mb3dlckNhc2UoKSB8fCByZXF1aXJlZEtleSA9PT0gZXZlbnQuY29kZSkge1xuICAgICAgICBrb25hbWlDb2RlLnN0cmVhaysrO1xuXG4gICAgICAgIGlmIChjb2RlQ291bnQgPT09IGtvbmFtaUNvZGUuc3RyZWFrKSB7XG4gICAgICAgICAga29uYW1pQ29kZS5jYWxsYmFjaygpO1xuXG4gICAgICAgICAga29uYW1pQ29kZS5zdHJlYWsgPSAwO1xuICAgICAgICAgIGtvbmFtaUNvZGUuY29tcGxldGlvbnMrKztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga29uYW1pQ29kZS5zdHJlYWsgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyKGNvZGU6c3RyaW5nLCBjYWxsYmFjazpGdW5jdGlvbik6dm9pZCB7XG4gICAgY29uc3Qga29uYW1pQ29kZSA9IG5ldyBOZ0tvbmFtaUNvZGVNb2RlbCgpO1xuICAgIGtvbmFtaUNvZGUuY29kZSA9IGNvZGUuc3BsaXQoJywnKTtcbiAgICBrb25hbWlDb2RlLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cbiAgICB0aGlzLmtvbmFtaUNvZGVzLnB1c2goa29uYW1pQ29kZSk7XG4gIH1cbn1cbiJdfQ==
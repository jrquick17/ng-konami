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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta29uYW1pLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pycXVpY2svZGV2ZWxvcG1lbnQvZW5jb3VudGluZy9uZy1rb25hbWkvc3JjLyIsInNvdXJjZXMiOlsiYXBwL3NlcnZpY2VzL25nLWtvbmFtaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFHakUsTUFBTSxPQUFPLGVBQWU7SUFLMUI7UUFKTyxnQkFBVyxHQUF1QixFQUFFLENBQUM7UUFFckMsbUJBQWMsR0FBRyxFQUFFLENBQUM7SUFJM0IsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFtQjtRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2QyxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUV6QyxNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUU5RCxJQUFJLFdBQVcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLFdBQVcsS0FBSyxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUN2RixVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRXBCLElBQUksU0FBUyxLQUFLLFVBQVUsQ0FBQyxNQUFNLEVBQUU7b0JBQ25DLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFFdEIsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQ3RCLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDMUI7YUFDRjtpQkFBTTtnQkFDTCxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUN2QjtTQUNGO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFXLEVBQUUsUUFBaUI7UUFDckMsTUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQzNDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxVQUFVLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUUvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7OztZQTdDRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtOZ0tvbmFtaUNvZGVNb2RlbH0gZnJvbSAnLi4vbW9kZWxzL25nLWtvbmFtaS1jb2RlLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5nS29uYW1pU2VydmljZSB7XG4gIHB1YmxpYyBrb25hbWlDb2RlczpOZ0tvbmFtaUNvZGVNb2RlbFtdID0gW107XG5cbiAgcHVibGljIGN1cnJlbnRQYXR0ZXJuID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIGxpc3RlbihldmVudDpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRQYXR0ZXJuLnB1c2goZXZlbnQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmtvbmFtaUNvZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrb25hbWlDb2RlID0gdGhpcy5rb25hbWlDb2Rlc1tpXTtcblxuICAgICAgY29uc3QgY29kZUNvdW50ID0ga29uYW1pQ29kZS5jb2RlLmxlbmd0aDtcblxuICAgICAgY29uc3QgcmVxdWlyZWRLZXkgPSBrb25hbWlDb2RlLmNvZGVba29uYW1pQ29kZS5zdHJlYWtdLnRyaW0oKTtcblxuICAgICAgaWYgKHJlcXVpcmVkS2V5LnRvTG93ZXJDYXNlKCkgPT09IGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpIHx8IHJlcXVpcmVkS2V5ID09PSBldmVudC5jb2RlKSB7XG4gICAgICAgIGtvbmFtaUNvZGUuc3RyZWFrKys7XG5cbiAgICAgICAgaWYgKGNvZGVDb3VudCA9PT0ga29uYW1pQ29kZS5zdHJlYWspIHtcbiAgICAgICAgICBrb25hbWlDb2RlLmNhbGxiYWNrKCk7XG5cbiAgICAgICAgICBrb25hbWlDb2RlLnN0cmVhayA9IDA7XG4gICAgICAgICAga29uYW1pQ29kZS5jb21wbGV0aW9ucysrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrb25hbWlDb2RlLnN0cmVhayA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXIoY29kZTpzdHJpbmcsIGNhbGxiYWNrOkZ1bmN0aW9uKTp2b2lkIHtcbiAgICBjb25zdCBrb25hbWlDb2RlID0gbmV3IE5nS29uYW1pQ29kZU1vZGVsKCk7XG4gICAga29uYW1pQ29kZS5jb2RlID0gY29kZS5zcGxpdCgnLCcpO1xuICAgIGtvbmFtaUNvZGUuY2FsbGJhY2sgPSBjYWxsYmFjaztcblxuICAgIHRoaXMua29uYW1pQ29kZXMucHVzaChrb25hbWlDb2RlKTtcbiAgfVxuXG4gIHJlbW92ZUFsbCgpOnZvaWQge1xuICAgIHRoaXMua29uYW1pQ29kZXMgPSBbXTtcbiAgfVxufVxuIl19
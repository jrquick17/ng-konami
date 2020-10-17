import {Component, HostListener} from '@angular/core';

import {NgKonamiService} from 'ng-konami';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent {
  title = 'ng-konami-demo';

  public code = 'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,KeyB,KeyA';
  public events = [];

  public showGif:boolean = false;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event:KeyboardEvent) {
    this.events.push(event);

    this.service.listen(event);
  }

  constructor(
    private service:NgKonamiService
  ) {
    this.service.register(
      'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a',
      () => {
        this.showGif = true;
      }
    );
  }

  public goToGitHub():void {
    window.location.href = 'https://github.com/jrquick17/ng-konami';
  }

  public restart():void {
    window.location.reload();
  }

  public updateCode(code?:string):void {
    this.service.removeAll();

    this.service.register(
      code,
      () => {
        this.showGif = true;
      }
    );
  }
}

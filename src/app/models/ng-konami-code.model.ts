export class NgKonamiCodeModel {
  public code:string[];
  public callback:Function;

  public completions:number = 0;
  public streak:number = 0;

  constructor() {

  }
}

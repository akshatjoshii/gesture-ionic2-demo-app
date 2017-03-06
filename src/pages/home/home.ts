import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tapped:number =  0;
  public pressed:number =  0;
  public won:boolean =false;
  constructor(public navCtrl: NavController) {

  }
  onTap(){
    console.log('tapped');
    this.tapped = this.tapped+1;
    this.won  = this.didWin();
  }
  onPress(){
    this.pressed = this.pressed+1;
    this.won = this.didWin();
    console.log( this.won);
  }
  onDidReset(type: string){
    switch(type){
      case 'tap':
            this.tapped = 0;
            break;
      case 'press':
            this.pressed = 0;
            break;
      case 'all':
            this.pressed = 0;
            this.tapped = 0;
            break

    }
  }

  didWin(){
    console.log(this.tapped ==2 && this.pressed ==4);
    return this.tapped ==2 && this.pressed ==4;
  }

}

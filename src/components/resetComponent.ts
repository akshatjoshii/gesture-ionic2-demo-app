import { Component,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'reset-component',
  template: `
        <ion-row>
          <ion-col>
               <button ion-button=""
                (click)="onReset('all')"
                small block>
                    Reset All
                </button>   
          </ion-col>
           <ion-col>
               <button ion-button="" 
               (click)="onReset('tap')"
                small block>
                    Reset "Taps"
                </button>   
          </ion-col>
           <ion-col>
               <button 
               (click)="onReset('press')"
               ion-button="" small block>
                    Reset "Press"
                </button>   
          </ion-col>
        </ion-row>
        `
})
export class ResetComponent {
  @Output() didReset = new EventEmitter<string>();
  constructor() {

  }
  onReset(type:string){
    this.didReset.emit(type);
    
  }

}

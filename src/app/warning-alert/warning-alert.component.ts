import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.scss']
})
export class WarningAlertComponent {
display:boolean=false
buttonClick:any=[]
button:number=0
print()
{
  this.display=!this.display
  this.button+=1
  this.buttonClick.push(this.button)  
}


}

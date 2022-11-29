import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";

@Component({
   selector: 'app-cockpit',
   templateUrl: './cockpit.component.html',
   styleUrls: ['./cockpit.component.scss']
})

export class CockpitComponent {
   @Output() serverCreated = new EventEmitter<{srvName: string, srvContent: string}>()
   @Output() blueprintCreated = new EventEmitter<{srvName: string, srvContent: string}>()
   
   // serverName: string = '';
   // serverContent: string = ''
   @ViewChild('serverContent', {static: true}) serverContent: ElementRef

   addServer(serverName: HTMLInputElement){
      
      this.serverCreated.emit({
         srvName: serverName.value,
         srvContent: this.serverContent.nativeElement.value
      })
   }

   addServerBlueprint(serverName: HTMLInputElement){
      this.blueprintCreated.emit({
         srvName: serverName.value,
         srvContent: this.serverContent.nativeElement.value
      })
   }
  
}
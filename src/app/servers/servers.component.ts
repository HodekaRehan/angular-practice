import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  
  // selector: '[app-servers]', //using attribute selector
  // selector: '.app-server',  //using style selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {

  allowNewServer = false
  serverCreationStatus: string = 'No server was created'
  serverName: string = ''
  isServerCreated: boolean = false
  servers = ['Test Server 1', 'Test Server 2']
  

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.isServerCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value
    
  }

  
}

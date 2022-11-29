import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'Test Server', content: 'Some Content' }
  ]

  onServerAdded(serverData: {srvName: string, srvContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.srvName,
      content: serverData.srvContent
    })
  }

  onBlueprintAdded(blueprintData: {srvName: string, srvContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.srvName,
      content: blueprintData.srvContent
    })
  }
}

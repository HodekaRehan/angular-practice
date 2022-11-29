import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent{
  
  @Input('srvElm') element: {type: string, name: string, content: string}

  
}

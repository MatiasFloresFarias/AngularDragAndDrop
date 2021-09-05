import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  CdkDragExit,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css'],
})
export class DragAndDropComponent implements OnInit {
  uno = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  dos = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  tres = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  contenedor = ['Get up'];

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      /*       console.log(this.uno);
      console.log(this.contenedor); */
    } else {
      /*       console.log(event.container.data);
      console.log(event.previousContainer.data);
      console.log(event.previousIndex); */

      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      /*       console.log(this.uno);
      console.log(this.contenedor); */
    }
  }

  constructor() {}

  ngOnInit(): void {}
}

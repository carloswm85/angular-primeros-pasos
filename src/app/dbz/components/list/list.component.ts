import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public index: number = 0;

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  @Output()
  public onDeleteEvent = new EventEmitter<number>();

  @Output()
  public onDeleteByIdEvent: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    this.onDeleteEvent.emit(index);
  }

  onDeleteCharacterById(id?: string): void {
    if (!id) return;
    this.onDeleteByIdEvent.emit(id);
  }
}

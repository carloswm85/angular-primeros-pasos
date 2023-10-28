import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  // Emits to parent component
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    // id: uuid(),
    name: '',
    power: 0
  }

  emitCharacter(): void {

    // debugger;

    console.log(this.character);

    if (this.character.name.length === 0) return;

    //this.onNewCharacter.emit({...this.character}); // send a whole new objetc
    this.onNewCharacter.emit(this.character); // send by reference

    this.character = { name: '', power: 0 }
  }
}

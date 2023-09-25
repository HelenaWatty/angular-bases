import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[]=[{
    name: 'Trunks',
    power:10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  
  /* onDeleteCharacter(index:number): void {
    //emitir el id del personaje
    console.log({index});
    this.onDelete.emit(index);
  } */
  onDeleteCharacterById(id?:string): void {
    //emitir el id del personaje
    if ( !id ) return;
    //console.log({id});
    this.onDelete.emit(id);
  }
}

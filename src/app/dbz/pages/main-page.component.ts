import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    // Se inyectan en el constructor. Es privado de tipo DbzService (el cual es un servicio)
    constructor( private dbzService: DbzService ) { 
        
    }

    get characters(): Character[] {
        return [...this.dbzService.characters]
    }

    onDeleteCharacter( id: string ): void {
        this.dbzService.deleteCharacterById( id )
    }

    onNewCharacter( character: Character ): void {
        this.dbzService.addCharacter( character )
    }
}
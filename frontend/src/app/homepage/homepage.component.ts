import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'
import { MatGridListModule } from '@angular/material/grid-list';

export interface Tile { 
    color: string,
    cols: number,
    rows: number,
    text: string,
}

@Component({
    selector: 'mindWeave-homepage',
    standalone: true,
    imports: [
        CommonModule,
        MatGridListModule,
    ],
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class homePageComponent {
    tiles: Tile[] = [
        {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
        {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
    ];
}
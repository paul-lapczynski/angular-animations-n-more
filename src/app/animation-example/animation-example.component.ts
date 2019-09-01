import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  trigger,
  stagger,
  state,
  style,
  transition,
  animate,
  query
} from '@angular/animations';
import { delay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-animation-example',
  templateUrl: './animation-example.component.html',
  styleUrls: ['./animation-example.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ background: 'blue', color: 'green' }),
            stagger(200, [
              animate('2s', style({ background: 'inherit', color: 'inherit' }))
            ])
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AnimationExampleComponent implements OnInit, AfterViewInit {
  test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  easub = new BehaviorSubject<boolean>(false);
  enabledAnimations = this.easub.asObservable().pipe(delay(0));
  constructor() {}

  ngOnInit() {}

  add() {
    this.test.push(this.test.length + 1);
  }
  ngAfterViewInit(): void {
    setTimeout(() => {});
  }
}

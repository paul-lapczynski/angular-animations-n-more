import { Component } from '@angular/core';
import {
  RouterOutlet,
  Router,
  NavigationStart,
  NavigationEnd
} from '@angular/router';
import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  group,
  animate,
  state
} from '@angular/animations';
import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { FadeIn } from './fun-animations/animations/FadeIn';

const slideInAnimation = FadeIn(500);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'angular-animations';
  isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();
  constructor(private router: Router) {
    router.events
      .pipe(
        filter(
          val => val instanceof NavigationStart || val instanceof NavigationEnd
        )
      )
      .subscribe(val => {
        // see also
        this.isLoadingSubject.next(val instanceof NavigationStart);
      });
  }
}

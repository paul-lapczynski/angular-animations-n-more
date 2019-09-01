import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AnimationExampleComponent } from './animation-example/animation-example.component';
import { Observable, EMPTY, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { AppComponent } from './app.component';

export class Resolver implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return timer(500).pipe(mapTo(true));
  }
}
const routes: Routes = [
  {
    path: 'animations',
    component: AnimationExampleComponent,
    data: { animation: 'test' },
    canActivate: [Resolver]
  },
  {
    path: '',
    component: AppComponent,
    data: { animation: 'test2' },
    canActivate: [Resolver]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Resolver]
})
export class AppRoutingModule {}

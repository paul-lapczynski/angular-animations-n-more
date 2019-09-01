import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

export function FadeIn(fadeInTime: number) {
  return trigger('routeAnimations', [
    state(
      'true',
      style({
        opacity: 0
      })
    ),
    state(
      'false',
      style({
        opacity: 1,
        height: 'auto'
      })
    ),
    transition('false=>true', animate(fadeInTime + 'ms')),
    transition('true=>false', animate(fadeInTime + 'ms'))
  ]);
}

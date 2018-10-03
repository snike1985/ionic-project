import {animate, group, state, style, transition, trigger} from '@angular/animations';

export const SlideIn: object =  trigger('SlideIn', [
    state('in', style({height: '*', opacity: 0})),
    transition(':leave', [
        style({height: '*', opacity: 1}),

        group([
            animate(200, style({height: 0})),
            animate('100ms ease-in-out', style({opacity: 0}))
        ])

    ]),
    transition(':enter', [
        style({height: '0', opacity: 0}),

        group([
            animate(200, style({height: '*'})),
            animate('250ms ease-in-out', style({opacity: 1}))
        ])

    ])
]);

export const VisibilityChanged: object = trigger('VisibilityChanged', [
    transition('void => *',
        [
            style({opacity: 0}),
            animate('200ms', style({opacity: 1}))
        ]),
    transition('* => void',
        [
            style({opacity: 1}),
            animate('200ms', style({opacity: 0}))
        ])
]);

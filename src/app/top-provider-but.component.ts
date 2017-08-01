import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'top-provider-but',
    template: `
<div class="root" [style.left.px]="x" [style.top.px]="y">qwe</div>
    `,
    styles: [`
.root {
    position: absolute;
    background-image: url(/assets/img/provider_button.png);
    width: 300px;
    height: 100px;
}
    `]
})
export class TopProviderButComponent implements OnInit {
    @Input() x: number;
    @Input() y: number;
    constructor() { }

    ngOnInit() { }
}
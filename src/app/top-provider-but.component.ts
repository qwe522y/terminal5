import { Component, OnInit, Input } from '@angular/core';

import { Provider } from './provider'
import { ProvidersService} from './providers.service'
@Component({
    selector: 'top-provider-but',
    template: `
<div class="root" [style.left.px]="x" [style.top.px]="y">
    <img src="/assets/provider_icons/{{provider.icon}}" alt="" (error)="showProviderName()">
    <br>{{iconAltText}}
</div>
    `,
    styles: [`
.root {
    position: absolute;
    background-image: url(/assets/img/provider_button.png);
    width: 300px;
    height: 100px;
    text-align: center;
}
.root:active{
    background-image: url(/assets/img/provider_button_push.png);
}
img {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 280px;
    height: 80px;
}
    `]
})
export class TopProviderButComponent implements OnInit {
    @Input() x: number;
    @Input() y: number;
    @Input() providerId: number;
    provider: Provider;
    iconAltText = "";
    constructor(private providersService: ProvidersService) { }

    ngOnInit() { 
        this.provider = this.providersService.getProvider(this.providerId);
    }

    showProviderName() {
        this.iconAltText = this.provider.name;
    }
}
import { Injectable } from '@angular/core';

import { Provider } from './provider'

@Injectable()
export class ProvidersService {

    constructor() { }
    
    getProvider(id: number) : Provider {
        return new Provider(id, 'beeline beeline beeline beeline beeline', 'mega2.png');
    }
}
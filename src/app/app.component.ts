import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<div>
  <top-provider-but x="10" y="10" providerId="1"></top-provider-but>
  <top-provider-but x="320" y="10" providerId="2"></top-provider-but>
  <top-provider-but x="630" y="10" providerId="3"></top-provider-but>
  <top-provider-but x="940" y="10" providerId="4"></top-provider-but>

  <top-provider-but x="10" y="120" providerId="5"></top-provider-but>
  <top-provider-but x="320" y="120" providerId="6"></top-provider-but>
  <top-provider-but x="630" y="120" providerId="7"></top-provider-but>
  <top-provider-but x="940" y="120" providerId="8"></top-provider-but>
</div>
  `
})
export class AppComponent {
  title = 'app';
  
}

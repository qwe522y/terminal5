import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<div>
  <top-provider-but x="10" y="10"></top-provider-but>
  <top-provider-but x="320" y="10"></top-provider-but>
  <top-provider-but x="630" y="10"></top-provider-but>
  <top-provider-but x="940" y="10"></top-provider-but>

  <top-provider-but x="10" y="120"></top-provider-but>
  <top-provider-but x="320" y="120"></top-provider-but>
  <top-provider-but x="630" y="120"></top-provider-but>
  <top-provider-but x="940" y="120"></top-provider-but>
</div>
  `
})
export class AppComponent {
  title = 'app';
  
}

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Kinvey} from  "kinvey-angular2-sdk";

if (environment.production) {
  enableProdMode();
}

// Configure Kinvey CLIENT
const config:Kinvey.ClientConfig = {
  appKey: 'kid_ByuSaH_kE',
  appSecret: '5d3b5579a09042c79ec8bf86b9b90e99'
};

// Initialize
Kinvey.initialize(config)
  .then( () => {
    enableProdMode() ;
    platformBrowserDynamic().bootstrapModule(AppModule)
  })
  .catch(err => console.error(err));

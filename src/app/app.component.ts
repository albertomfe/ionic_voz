import { Component } from '@angular/core';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {



  constructor(){


    const logDeviceInfo = async () => {
      const info = await Device.getInfo();
    
      console.log('device',info);
    };
    
    const logBatteryInfo = async () => {
      const info = await Device.getBatteryInfo();
    
      console.log('battery',info);
    };

    logBatteryInfo();

    logDeviceInfo();

  }






}

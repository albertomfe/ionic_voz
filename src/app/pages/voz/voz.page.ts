import { Component, OnInit } from '@angular/core';
import { ScreenReader } from '@capacitor/screen-reader';
import { VoiceRecorder } from 'capacitor-voice-recorder';



const sayHello = async () => {
  await ScreenReader.speak({ value: 'Procesando la informaciòn, Espere un minuto , estamos Validando los Datos. esto puede tardar al menos u Minuto' });
};

 
@Component({
  selector: 'app-voz',
  templateUrl: './voz.page.html',
  styleUrls: ['./voz.page.scss'],
})
export class VozPage implements OnInit {

  recording=false;
  public grabacion:any;


  constructor() {
    //sayHello();    
  }



  ngOnInit() {
    VoiceRecorder.requestAudioRecordingPermission();
  }


  grabar()
  {
    if(this.recording)
    {
        return;
    }
    this.recording=true;
    VoiceRecorder.startRecording();
  }

  
  parar()
  {
    if(!this.recording)
    {
        return;
    }
    this.recording=false;
    VoiceRecorder.stopRecording().then(async(result:any)=>{
      console.log(result);

      //result.value.mimeType
      //result.value.recordDataBase64
      this.grabacion=result.value.recordDataBase64;
      let guardar_como='data:audio/aac;base64'+this.grabacion;
    });
  }

  playAudio()
  {
    const audioRef=new Audio(`data:audio/aac;base64,${this.grabacion}`)
    audioRef.oncanplaythrough=()=>audioRef.play();
    audioRef.load();
  }

}

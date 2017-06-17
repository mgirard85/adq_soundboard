import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SoundboardPage } from '../pages/soundboard/soundboard';
import { SmartAudio } from '../providers/smart-audio/smart-audio';

 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SoundboardPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,smartAudio: SmartAudio) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      // Load Samples
      	smartAudio.preload("Ascenseur","assets/sound/ascenseur.mp3");
		smartAudio.preload("Assez Bien Foutu","assets/sound/assez bien foutu.mp3");
		smartAudio.preload("Babine","assets/sound/babine.mp3");
		smartAudio.preload("Binouche","assets/sound/binouche.mp3");
		smartAudio.preload("Bisuté ma main","assets/sound/bizuté.mp3");
		smartAudio.preload("Bouuuublblblblbl","assets/sound/bouuuublblblblbl.mp3");
		smartAudio.preload("Burger","assets/sound/burger.mp3");
		smartAudio.preload("Burrito","assets/sound/burrito.mp3");
		smartAudio.preload("Catin","assets/sound/catin.mp3");
		smartAudio.preload("Chaton","assets/sound/chaton.mp3");
		smartAudio.preload("Chèvre","assets/sound/chevre.mp3");
		smartAudio.preload("Dérapette","assets/sound/derapette.mp3");
		smartAudio.preload("Bouboule","assets/sound/enculé de bouboule.mp3");
		smartAudio.preload("Gorgée de café 1","assets/sound/gorgée de cafe1.mp3");
		smartAudio.preload("Gros Fromage 1","assets/sound/grosfromage1.mp3");
		smartAudio.preload("Gros Fromage 2","assets/sound/grosfromage2.mp3");
		smartAudio.preload("Gros Fromage 3","assets/sound/grosfromage3.mp3");
		smartAudio.preload("Le gros fromage le retour","assets/sound/grosfromage-leretour.mp3");
		smartAudio.preload("Grosse Babines","assets/sound/grosse babines.mp3");
		smartAudio.preload("Gueule de con","assets/sound/gueule de con.mp3");
		smartAudio.preload("Hélico","assets/sound/helico.mp3");
		smartAudio.preload("Piécette","assets/sound/iecette.mp3");
		smartAudio.preload("Jet","assets/sound/jet.mp3");
		smartAudio.preload("La bite à l'air","assets/sound/La bite à l'air.mp3");
		smartAudio.preload("La Soularde","assets/sound/la soularde.mp3");
		smartAudio.preload("Lalalala","assets/sound/lalalalalala.mp3");
		smartAudio.preload("Le sale chinois","assets/sound/Le sale chinois.mp3");
		smartAudio.preload("Les légumes","assets/sound/les legumes.mp3");
		smartAudio.preload("Les Nichons","assets/sound/les nichons.mp3");
		smartAudio.preload("Les pots les salopes","assets/sound/les pots les salopes.mp3");
		smartAudio.preload("Ma Salope","assets/sound/ma salope.mp3");
		smartAudio.preload("Mais putain 1","assets/sound/mais putain-1.mp3");
		smartAudio.preload("Makaks","assets/sound/makaks.mp3");
		smartAudio.preload("Meuf","assets/sound/meuf.mp3");
		smartAudio.preload("Oh Putain 1","assets/sound/oh Putain.mp3");
		smartAudio.preload("On s'en fout","assets/sound/on s'en fout putain .mp3");
		smartAudio.preload("Oui !!","assets/sound/oui.mp3");
		smartAudio.preload("Pleurnicheuse","assets/sound/pleurnicheuse.mp3");
		smartAudio.preload("Poil de couille","assets/sound/poil de couille.mp3");
		smartAudio.preload("Par où ça sort !","assets/sound/pour où ça sort.mp3");
		smartAudio.preload("Putain","assets/sound/putain 2.mp3");
		smartAudio.preload("Putain d'armes","assets/sound/putain d'armes.mp3");
		smartAudio.preload("Sa bite","assets/sound/sa bite.mp3");
		smartAudio.preload("Saloperie de cochon","assets/sound/saloperie de cochon.mp3");
		smartAudio.preload("Sucer le tuyau","assets/sound/sucer le tuyau.mp3");
		smartAudio.preload("Toucher pas à mon jet","assets/sound/toucher pas à mon jet.mp3");
		smartAudio.preload("Une petite salope","assets/sound/une petite salope-1.mp3");
		smartAudio.preload("Un vieux connard","assets/sound/vieux connard.mp3");
		smartAudio.preload("Youhou","asset/sound/youhou1.mp3");
    });
  }
}

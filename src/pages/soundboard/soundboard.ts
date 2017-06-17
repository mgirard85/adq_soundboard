import { Component } from '@angular/core';
import { SmartAudio } from '../../providers/smart-audio/smart-audio';


@Component({
  templateUrl: 'soundboard.html'
})
export class SoundboardPage {

  /* EDIT THESE */
  title: string = "AlexDuQuebec - Soundboard";
  samples:any=[
    {"url":"/assets/sound/ascenseur.mp3","name":"Ascenseur"},
    {"url":"/assets/sound/assez bien foutu.mp3","name":"Assez Bien Foutu"},
    {"url":"/assets/sound/babine.mp3","name":"Babine"},
    {"url":"/assets/sound/binouche.mp3","name":"Binouche"},
    {"url":"/assets/sound/bizuté.mp3","name":"Bisuté ma main"},
    {"url":"/assets/sound/bouuuublblblblbl.mp3","name":"Bouuuublblblblbl"},
    {"url":"/assets/sound/burger.mp3","name":"Burger"},
    {"url":"/assets/sound/burrito.mp3","name":"Burrito"},
    {"url":"/assets/sound/catin.mp3","name":"Catin"},
    {"url":"/assets/sound/chaton.mp3","name":"Chaton"},
    {"url":"/assets/sound/chevre.mp3","name":"Chèvre"},
    {"url":"/assets/sound/derapette.mp3","name":"Dérapette"},
    {"url":"/assets/sound/enculé de bouboule.mp3","name":"Bouboule"},
    {"url":"/assets/sound/gorgée de cafe1.mp3","name":"Gorgée de café 1"},
    {"url":"/assets/sound/grosfromage1.mp3","name":"Gros Fromage 1"},
    {"url":"/assets/sound/grosfromage2.mp3","name":"Gros Fromage 2"},
    {"url":"/assets/sound/grosfromage3.mp3","name":"Gros Fromage 3"},
    {"url":"/assets/sound/grosfromage-leretour.mp3","name":"Le gros fromage le retour"},
    {"url":"/assets/sound/grosse babines.mp3","name":"Grosse Babines"},
    {"url":"/assets/sound/gueule de con.mp3","name":"Gueule de con"},
    {"url":"/assets/sound/helico.mp3","name":"Hélico"},
    {"url":"/assets/sound/iecette.mp3","name":"Piécette"},
    {"url":"/assets/sound/jet.mp3","name":"Jet"},
    {"url":"/assets/sound/La bite à l'air.mp3","name":"La bite à l'air"},
    {"url":"/assets/sound/la soularde.mp3","name":"La Soularde"},
    {"url":"/assets/sound/lalalalalala.mp3","name":"Lalalala"},
    {"url":"/assets/sound/Le sale chinois.mp3","name":"Le sale chinois"},
    {"url":"/assets/sound/les legumes.mp3","name":"Les légumes"},
    {"url":"/assets/sound/les nichons.mp3","name":"Les Nichons"},
    {"url":"/assets/sound/les pots les salopes.mp3","name":"Les pots les salopes"},
    {"url":"/assets/sound/ma salope.mp3","name":"Ma Salope"},
    {"url":"/assets/sound/mais putain-1.mp3","name":"Mais putain 1"},
    {"url":"/assets/sound/makaks.mp3","name":"Makaks"},
    {"url":"/assets/sound/meuf.mp3","name":"Meuf"},
    {"url":"/assets/sound/oh Putain.mp3","name":"Oh Putain 1"},
    {"url":"/assets/sound/on s'en fout putain .mp3","name":"On s'en fout"},
    {"url":"/assets/sound/oui.mp3","name":"Oui !!"},
    {"url":"/assets/sound/pleurnicheuse.mp3","name":"Pleurnicheuse"},
    {"url":"/assets/sound/poil de couille.mp3","name":"Poil de couille"},
    {"url":"/assets/sound/pour où ça sort.mp3","name":"Par où ça sort !"},
    {"url":"/assets/sound/putain 2.mp3","name":"Putain"},
    {"url":"/assets/sound/putain d'armes.mp3","name":"Putain d'armes"},
    {"url":"/assets/sound/sa bite.mp3","name":"Sa bite"},
    {"url":"/assets/sound/saloperie de cochon.mp3","name":"Saloperie de cochon"},
    {"url":"/assets/sound/sucer le tuyau.mp3","name":"Sucer le tuyau"},
    {"url":"/assets/sound/toucher pas à mon jet.mp3","name":"Toucher pas à mon jet"},
    {"url":"/assets/sound/une petite salope-1.mp3","name":"Une petite salope"},
    {"url":"/assets/sound/vieux connard.mp3","name":"Un vieux connard"},
    {"url":"/assets/sound/youhou1.mp3","name":"Youhou"}
  ];


  constructor (public smartAudio: SmartAudio){

  }

 

  play(sample) {
    console.log(sample)
    this.smartAudio.play(sample.name);
  }
}

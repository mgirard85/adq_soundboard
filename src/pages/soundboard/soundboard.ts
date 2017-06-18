import { Component } from '@angular/core';
import { SmartAudio } from '../../providers/smart-audio/smart-audio';


@Component({
  templateUrl: 'soundboard.html'
})
export class SoundboardPage {

  /* EDIT THESE */
  title: string = "AlexDuQuebec - Soundboard";
  samples:any=[
        {"name":"Ascenseur"},
        {"name":"Assez Bien Foutu"},
        {"name":"Babine"},
        {"name":"Binouche"},
        {"name":"Bisuté ma main"},
        {"name":"Bouuuublblblblbl"},
        {"name":"Burger"},
        {"name":"Burrito"},
        {"name":"Catin"},
        {"name":"Chaton"},
        {"name":"Chèvre"},
        {"name":"Dérapette"},
        {"name":"Bouboule"},
        {"name":"Gorgée de café 1"},
        {"name":"Gros Fromage 1"},
        {"name":"Gros Fromage 2"},
        {"name":"Gros Fromage 3"},
        {"name":"Le gros fromage le retour"},
        {"name":"Grosse Babines"},
        {"name":"Gueule de con"},
        {"name":"Hélico"},
        {"name":"Piécette"},
        {"name":"Jet"},
        {"name":"La bite à l'air"},
        {"name":"La Soularde"},
        {"name":"Lalalala"},
        {"name":"Le sale chinois"},
        {"name":"Les légumes"},
        {"name":"Les Nichons"},
        {"name":"Les pots les salopes"},
        {"name":"Ma Salope"},
        {"name":"Mais putain 1"},
        {"name":"Makaks"},
        {"name":"Meuf"},
        {"name":"Oh Putain 1"},
        {"name":"On s'en fout"},
        {"name":"Oui !!"},
        {"name":"Pleurnicheuse"},
        {"name":"Poil de couille"},
        {"name":"Par où ça sort !"},
        {"name":"Putain"},
        {"name":"Putain d'armes"},
        {"name":"Sa bite"},
        {"name":"Saloperie de cochon"},
        {"name":"Sucer le tuyau"},
        {"name":"Toucher pas à mon jet"},
        {"name":"Une petite salope"},
        {"name":"Un vieux connard"},
        {"name":"Youhou"}
  ];


  constructor (public smartAudio: SmartAudio){

  }

 

  play(sample) {
    this.smartAudio.play(sample.name);
  }
}

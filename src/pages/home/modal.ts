import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'modal.html'
})
export class ModalPage {

  value: any;

  constructor(public navCtrl: NavController, public params: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {
    this.value = this.params.get("number")
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

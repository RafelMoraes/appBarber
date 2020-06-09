import { Component, OnInit } from '@angular/core';

import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileOpener, } from "@ionic-native/file-opener/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.page.html',
  styleUrls: ['./edit-perfil.page.scss'],
})
export class EditPerfilPage implements OnInit {

  constructor(
    private fileChooser: FileChooser,
    private fileOpener: FileOpener,
    private filePath: FilePath

  ) { }

  chooseFile() {
    this.fileChooser.open().then(file => {
      this.filePath.resolveNativePath(file).then(resolvedFilePath => {
        this.fileOpener.open(resolvedFilePath, 'applcativion/pdf').then(value => {
          alert('It worked')
        }).catch(err => {
          alert(JSON.stringify(err));
        });
      }).catch(err => {
        alert(JSON.stringify(err));
      });
    }).catch(err => {
      alert(JSON.stringify(err));
    });
  }

  ngOnInit() {
  }

}

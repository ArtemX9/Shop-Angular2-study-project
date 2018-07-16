import {Component, HostListener, Inject, OnInit, Optional} from '@angular/core';
import {ConfigOptionsService} from '../core/services/config-options.service';
import {ConstantsService} from '../core/services/constants.service';
import {GeneratorService} from '../core/services/generator.service';
import {LocalStorageService} from '../core/services/local-storage.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  showInfoModal = false;
  constants: any;
  config: any;
  hash: string;

  constructor(
    private configOptionsService: ConfigOptionsService,
    private localStorageService: LocalStorageService,
    @Optional() @Inject(ConstantsService.token) private constantsService: any,
    @Optional() @Inject(GeneratorService.token) private generatorService: any
  ) { }

  ngOnInit() {
    this.constants = this.constantsService;
    this.config = this.configOptionsService.getConfigOptions();

    const appVer = this.localStorageService.getItem('appVer');
    const appName = this.localStorageService.getItem('appName');

    if (!appVer) {
      this.localStorageService.setItem('appVer', this.constants.Ver);
    }
    if (!appName) {
      this.localStorageService.setItem('appName', this.constants.App);
    }
  }

  onShowInfoClick() {
    this.hash = this.generatorService.generateValue();
    this.showInfoModal = true;
  }

  onHideInfoClick() {
    this.showInfoModal = false;
  }
}

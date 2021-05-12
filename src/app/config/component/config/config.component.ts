import { Component, OnInit } from '@angular/core';

import { ConfigService, Config } from '../../config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
  providers: [ ConfigService ]
})
export class ConfigComponent implements OnInit {
  config: Config;

  constructor(
    private configService: ConfigService
  ){}

  ngOnInit(): void{}

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
          heroesUrl: data.heroesUrl,
          textfile:  data.textfile,
          date: data.date,
      });
  }

}

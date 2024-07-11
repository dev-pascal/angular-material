import { Component, OnInit } from '@angular/core';
import { ILoadState, LoadService, initialLoadState } from './components/loading/load.service';
import { asyncScheduler } from 'rxjs/internal/scheduler/async';
import { observeOn } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontApp';
  load: ILoadState = initialLoadState;

  constructor(
    private loadService: LoadService,
  ) { }

  ngOnInit(): void {
    this.loadService.getLoadEvt().pipe(observeOn(asyncScheduler))
      .subscribe((res: ILoadState) => this.load = res);
  }
  
}

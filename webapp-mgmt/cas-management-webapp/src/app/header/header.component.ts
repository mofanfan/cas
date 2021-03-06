import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Messages} from "../messages";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Location} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild("search") search: ElementRef;

  @Input()
  type: String;

  constructor(public messages: Messages,
              public router: Router,
              public location: Location) { }

  ngOnInit() {
    Observable.fromEvent(this.search.nativeElement, 'keyup')
      .debounceTime(250)
      .distinctUntilChanged()
      .subscribe(() => {
        this.router.navigate(['search', this.search.nativeElement.value]);
      });
  }

  logout() {
    window.location.href = "logout.html";
  }

}

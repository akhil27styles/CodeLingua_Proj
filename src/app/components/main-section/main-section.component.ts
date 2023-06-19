import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {
  showComponentOne = true;
  buttonColor = 'translate';
  @Input() theme:any;
  ngOnInit(): void {
    this.showComponentOne=true;
    this.buttonColor='translate';
  }
  toggle(selected:string) {
    this.showComponentOne = selected === 'translate';
    this.buttonColor = selected;
  }
}


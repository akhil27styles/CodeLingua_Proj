import { Component, Input , OnInit ,OnChanges} from '@angular/core'; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges {
 codelingua='<Codelingua/>';
 mode=false;
 theme='vs-light';
 ngOnInit(): void {
  this.mode=false;
 }
 ngOnChanges(): void { 
}
toggleDarkTheme(): void {
  this.mode=!this.mode;
  document.body.classList.toggle('dark-theme');
  this.checkTheme();
}
checkTheme(){
  if(this.theme=='vs-light'){
    this.theme='vs-dark';
  }
  else{
    this.theme='vs-light';
  }
 }
}

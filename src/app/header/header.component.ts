import { Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: "./header.component.css"
})
export class HeaderComponent {


  isActive: boolean = true;

  @HostListener("window:scroll", [])
  onWindowScroll(){
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollPosition > 1){
      this.isActive = false;
    }

    else{
      this.isActive = true;
    }
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent {
photographerDetails: any;
returnGift: any;
themeName: any;
imageUrl: any;
videographerDetails: any;
themeCost: any;
themeDescription: any;

submitForm() {
  console.log('photographerDetails:', this.photographerDetails);
  console.log('returnGift:', this.returnGift);
  console.log('themeName:', this.themeName);
  console.log('imageUrl:', this.imageUrl);
  console.log('videographerDetails', this.videographerDetails);
  console.log('themeCost:', this.themeCost);
  console.log('themeDescription:', this.themeDescription);
  if (this.isValidForm()) {
   
    alert('Themes added successfully!');
  }
  else {
    
    alert('Please fill in all the details.');
  }
}
isValidForm(): boolean {
 
  return this.photographerDetails && this.returnGift && this.themeName && this.imageUrl && this.videographerDetails && this.themeCost && this.themeDescription;
}
}

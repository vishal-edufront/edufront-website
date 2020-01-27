import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule} from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { IntroComponent } from './shared/intro/intro.component';
import { FooterComponent } from './shared/footer/footer.component';
import { VisionComponent } from './vision/vision.component';
import { SectionInfoComponent } from './shared/section-info/section-info.component';
import { SectionImgLeftComponent } from './shared/section-img-left/section-img-left.component';
import { SectionImgRightComponent } from './shared/section-img-right/section-img-right.component';
import { ProductsComponent } from './products/products.component';
import { SolutionsComponent } from './solutions/solutions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    IntroComponent,
    FooterComponent,
    VisionComponent,
    SectionInfoComponent,
    SectionImgLeftComponent,
    SectionImgRightComponent,
    ProductsComponent,
    SolutionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', component: HomeComponent},
      { path: 'Home', component: HomeComponent},
      { path: 'Vision', component: VisionComponent},
      { path: 'Products', component: ProductsComponent},
      { path: 'Solutions', component: SolutionsComponent},
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

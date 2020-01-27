import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

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
import { ProductComplexityComponent } from './shared/product-complexity/product-complexity.component';
import { SectionBckImgComponent } from './shared/section-bck-img/section-bck-img.component';

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
    SolutionsComponent,
    ProductComplexityComponent,
    SectionBckImgComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
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

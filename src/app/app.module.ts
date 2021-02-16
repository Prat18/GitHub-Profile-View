import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './views/search/search.component';
import { SearchBoxComponent } from './common-components/search-box/search-box.component';
import { CardContainerComponent } from './common-components/card-container/card-container.component';
import { ProfileViewComponent } from './views/profile/profile-view/profile-view.component';
import { HttpClientModule } from '@angular/common/http';
import { PinnedRepos } from './views/profile/pinned-repos-card/pinned-repo.component';
import { ProfileGuardService } from './services/profile-guard-service/profile-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchBoxComponent,
    CardContainerComponent,
    ProfileViewComponent,
    PinnedRepos,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ProfileGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { DefaultTypePipe } from './default-type.pipe';
import { TextDecorationDirective } from './text-decoration.directive';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    DefaultTypePipe,
    TextDecorationDirective,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './service/api.service';
import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './pages/post/post.component';
import { NamePipe } from './pipe/name.pipe';
import { EmailPipe } from './pipe/email.pipe';
import { BodyPipe } from './pipe/body.pipe';
import { InfoComponent } from './pages/info/info.component';
import { ReferenceComponent } from './pages/reference/reference.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    NamePipe,
    EmailPipe,
    BodyPipe,
    InfoComponent,
    ReferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

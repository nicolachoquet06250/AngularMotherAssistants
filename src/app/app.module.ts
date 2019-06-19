import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MzNavbarModule, MzSidenavModule, MzButtonModule,
  MzIconModule, MzCollectionModule, MzIconMdiModule } from 'ngx-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { ChildrenPageComponent } from './children-page/children-page.component';
import { ChildComponent } from './child/child.component';
import { ChildrenComponent } from './children/children.component';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { LifeDiaryPageComponent } from './life-diary-page/life-diary-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HttpClientModule } from '@angular/common/http';

const materializeModules = [
  BrowserAnimationsModule,
  MzNavbarModule,
  MzSidenavModule,
  MzButtonModule,
  MzIconModule,
  MzIconMdiModule,
  MzCollectionModule
];

const elementsComponents = [
  MenuComponent,
  FooterComponent,
  ChildComponent,
  ChildrenComponent,
  MessageComponent,
  MessageListComponent,
];

const pagesComponents = [
  HomePageComponent,
  AccountPageComponent,
  ChildrenPageComponent,
  MessagesPageComponent,
  LifeDiaryPageComponent,
  ContactPageComponent,
  LoginPageComponent,
  RegisterPageComponent,
  PageNotFoundComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...elementsComponents,
    ...pagesComponents
  ],
  imports: [
    ...materializeModules,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MzNavbarModule, MzSidenavModule, MzButtonModule,
  MzIconModule, MzCollectionModule, MzIconMdiModule,
  MzParallaxModule, MzCardModule, MzInputModule, MzSelectModule,
  MzDropdownModule
} from 'ngx-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { ChildrenPageComponent } from './components/children-page/children-page.component';
import { ChildComponent } from './components/child/child.component';
import { ChildrenComponent } from './components/children/children.component';
import { MessageComponent } from './components/message/message.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessagesPageComponent } from './components/messages-page/messages-page.component';
import { LifeDiaryPageComponent } from './components/life-diary-page/life-diary-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { HttpClientModule } from '@angular/common/http';

const materializeModules = [
  BrowserAnimationsModule,
  MzNavbarModule,
  MzSidenavModule,
  MzButtonModule,
  MzIconModule,
  MzIconMdiModule,
  MzCollectionModule,
  MzParallaxModule,
  MzSelectModule,
  MzCardModule,
  MzInputModule,
  MzDropdownModule
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
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

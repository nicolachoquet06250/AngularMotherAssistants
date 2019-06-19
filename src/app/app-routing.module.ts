import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { ChildrenPageComponent } from './children-page/children-page.component';
import { LifeDiaryPageComponent } from './life-diary-page/life-diary-page.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'me',
    component: AccountPageComponent
  },
  {
    path: 'me/login',
    component: LoginPageComponent
  },
  {
    path: 'me/register',
    component: RegisterPageComponent
  },
  {
    path: 'my-children',
    component: ChildrenPageComponent
  },
  {
    path: 'life-diary',
    component: LifeDiaryPageComponent
  },
  {
    path: 'messages',
    component: MessagesPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

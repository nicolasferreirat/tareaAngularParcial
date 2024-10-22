import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginPage } from './pages/auth/login/login.page';
import { RouterModule } from '@angular/router';
import { TopicPage } from './pages/topic/topic.page';
import { loggedGuard } from './guards/logged.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [loggedGuard],
  },
  {
    path: 'auth/login',
    component: LoginPage,
  },
  {
    path: 'temas',
    component: TopicPage,
    canActivate: [loggedGuard],
  },
];

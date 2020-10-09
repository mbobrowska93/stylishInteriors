import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'post', component: PostComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'edit', component: EditComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

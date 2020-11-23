import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';

const appRoutes: Routes = [   
{path: "quiz", component: QuizComponent},
{path: "result", component: ResultComponent},
{path: "intro", component: IntroductionComponent},
{path: "categories", component: CategoriesComponent},
{path: "", redirectTo:"/intro", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

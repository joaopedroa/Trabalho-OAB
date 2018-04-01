import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerguntasQuizPage } from './perguntas-quiz';

@NgModule({
  declarations: [
    PerguntasQuizPage,
  ],
  imports: [
    IonicPageModule.forChild(PerguntasQuizPage),
  ],
})
export class PerguntasQuizPageModule {}

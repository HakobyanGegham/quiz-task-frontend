import {Component, OnInit} from '@angular/core';
import FormHelper from '../../helpers/form-helper';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Question} from '../../models/question';
import {QuestionService} from '../../services/question.service';
import {ActivatedRoute} from '@angular/router';
import {Answer} from '../../models/answer';
import {AnswerService} from '../../services/answer.service';

@Component({
  selector: 'app-add-update-question',
  templateUrl: './add-update-question.component.html',
  styleUrls: ['./add-update-question.component.less']
})
export class AddUpdateQuestionComponent extends FormHelper implements OnInit {
  public form: FormGroup;
  public question: Question;

  constructor(private formBuilder: FormBuilder,
              private questionService: QuestionService,
              private answerService: AnswerService,
              private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    const questionId = this.route.snapshot.paramMap.get('questionId');
    if (questionId) {
      this.questionService.getQuestion(+questionId).subscribe(question => {
        this.question = question;
        this.setFormValues();
      });
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      content: ['', [Validators.required, Validators.minLength(5)]],
      score: [5, [Validators.required]],
      answers: this.formBuilder.array([this.createAnswerControl()])
    });
  }

  private setFormValues() {
    this.getFormControl('content').setValue(this.question.content);
    this.getFormControl('score').setValue(this.question.score);
    this.getFormControlAsArray('answers').removeAt(0);
    this.question.answers.forEach(answer => {
      this.getFormControlAsArray('answers').push(this.createAnswerControl(answer));
    });
  }

  private createAnswerControl(answer?: Answer) {
    return this.formBuilder.group({
      content: [answer ? answer.content : '', [Validators.required, Validators.minLength(4)]],
      isCorrect: [answer ? answer.isCorrect : 0],
      id: [answer ? answer.id : '']
    });
  }

  public removeAnswer(index: number, event: Event) {
    event.preventDefault();
    const answers = this.getFormControlAsArray('answers');
    if (answers.length > 1) {
      if (answers.controls[index].get('id').value) {
        this.answerService.deleteAnswer(+answers.controls[index].get('id').value).subscribe();
      }
      answers.removeAt(index);
    }
  }

  public addAnswer(event: Event) {
    event.preventDefault();
    const answers = this.getFormControlAsArray('answers');
    answers.push(this.createAnswerControl());
  }

  public submit(value: any) {
    this.formSubmitAttempt = true;
    if (this.form.valid) {
      this.addUpdateAnswer(value);
    } else {
      this.validateAllFormFields(this.form);
      return false;
    }
  }

  private addUpdateAnswer(value: any) {
    const newQuestion = new Question();
    newQuestion.content = value.content;
    newQuestion.score = value.score;
    newQuestion.answers = value.answers;

    if (this.question) {
      this.questionService.updateQuestion(newQuestion, this.question.id).subscribe();
    } else {
      this.questionService.addQuestion(newQuestion).subscribe();
    }
  }
}

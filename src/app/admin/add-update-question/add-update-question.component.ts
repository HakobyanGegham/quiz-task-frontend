import {Component, OnInit} from '@angular/core';
import FormHelper from '../../helpers/form-helper';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Question} from '../../models/question';
import {QuestionService} from '../../services/question.service';
import {ActivatedRoute} from '@angular/router';
import {Option} from '../../models/option';
import {OptionService} from '../../services/option.service';
import {Observable, of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {SuccessDialogComponent} from '../../dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-add-update-question',
  templateUrl: './add-update-question.component.html',
  styleUrls: ['./add-update-question.component.less']
})
export class AddUpdateQuestionComponent extends FormHelper implements OnInit {
  public form: FormGroup;
  public question: Question;
  public hasNotCorrectOption: Observable<boolean>;
  public hasNotIncorrectOption: Observable<boolean>;

  constructor(private formBuilder: FormBuilder,
              private questionService: QuestionService,
              private optionService: OptionService,
              private dialog: MatDialog,
              private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    const questionId = this.route.snapshot.paramMap.get('questionId');
    if (questionId) {
      this.questionService.getQuestion(questionId).subscribe(question => {
        this.question = question;
        this.setFormValues();
      });
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      content: ['', [Validators.required, Validators.minLength(5)]],
      score: [5, [Validators.required]],
      options: this.formBuilder.array([this.createOptionControl()])
    });
  }

  private setFormValues() {
    this.getFormControl('content').setValue(this.question.content);
    this.getFormControl('score').setValue(this.question.score);
    this.getFormControlAsArray('options').removeAt(0);
    this.question.options.forEach(option => {
      this.getFormControlAsArray('options').push(this.createOptionControl(option));
    });
  }

  private createOptionControl(option?: Option) {
    return this.formBuilder.group({
      content: [option ? option.content : '', [Validators.required, Validators.minLength(4)]],
      isCorrect: [option ? option.isCorrect : 0],
      _id: [option ? option._id : '']
    });
  }

  public removeOption(index: number, event: Event) {
    event.preventDefault();
    const options = this.getFormControlAsArray('options');
    if (options.length > 1) {
      if (options.controls[index].get('_id').value) {
        this.optionService.deleteOption(options.controls[index].get('_id').value).subscribe();
      }
      options.removeAt(index);
    }
  }

  public addOption(event: Event) {
    event.preventDefault();
    const options = this.getFormControlAsArray('options');
    options.push(this.createOptionControl());
  }

  public chooseCorrect() {
    this.hasNotCorrectOption = of(false);
    this.hasNotIncorrectOption = of(false);
  }

  public submit(value: any) {
    this.formSubmitAttempt = true;
    if (this.form.valid && this.checkIfHasCorrectOption() && this.checkIfHasInCorrectOption()) {
      this.addUpdateOption(value);
    } else {
      this.validateAllFormFields(this.form);
      return false;
    }
  }

  private checkIfHasCorrectOption() {
    const correctOption = this.getFormControlAsArray('options').controls.find(option => {
      return option.get('isCorrect').value !== 0 && option.get('isCorrect').value !== false;
    });

    if (!correctOption) {
      this.hasNotCorrectOption = of(true);
      return false;
    }
    return true;
  }

  private checkIfHasInCorrectOption() {
    const correctOption = this.getFormControlAsArray('options').controls.find(option => {
      return option.get('isCorrect').value === 0 || option.get('isCorrect').value === false;
    });

    if (!correctOption) {
      this.hasNotIncorrectOption = of(true);
      return false;
    }
    return true;
  }

  private addUpdateOption(value: any) {
    const newQuestion = new Question();
    newQuestion.content = value.content;
    newQuestion.score = value.score;
    newQuestion.options = value.options;

    if (this.question) {
      this.questionService.updateQuestion(newQuestion, this.question._id).subscribe(() => {
        this.showSuccessDialog('Question has been updated successfully.');
      });
    } else {
      this.questionService.addQuestion(newQuestion).subscribe(() => {
        this.showSuccessDialog('Question has been added successfully.');
      });
    }
  }

  private showSuccessDialog(message: string) {
    this.dialog.open(SuccessDialogComponent, {
      width: '300px',
      data: {
        dataKey: message
      }
    });
  }
}

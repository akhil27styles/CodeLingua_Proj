import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {programmingLanguages} from "../../constants/languages";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {OpenAiService} from "../../services/open-ai.service";
@Component({
  selector: 'app-code-translate',
  templateUrl: './code-translate.component.html',
  styleUrls: ['./code-translate.component.css']
})
export class CodeTranslateComponent implements OnInit {
  @Input()theme:any;
  outputCode: string = '';
  inputCode: string = '';

  programmingLanguages = programmingLanguages;
  programmingLanguage: string = 'javascript'


  inputSelectedValue: string = 'Pascal';
  outputSelectedValue: string = 'Python';


  inputOptions = {theme: 'stackoverflow-light', language: this.programmingLanguage};
  outputOptions = {theme: 'stackoverflow-light', language: this.programmingLanguage};
  isLoading: boolean = false;
  maxCodeLength = 12000;
  isCopied: boolean = false;

  constructor(private openAIService: OpenAiService) {
  }

  ngOnInit(): void {
  }

  translate() {
    if (this.inputSelectedValue === this.outputSelectedValue) {
      alert('Please select different languages.');
      return;
    }

    if (!this.inputCode) {
      alert('Please enter some code.');
      return;
    }

    if (this.inputCode.length > this.maxCodeLength) {
      alert(
        `Please enter code less than ${this.maxCodeLength} characters. You are currently at ${this.inputCode.length} characters.`,
      );
      return;
    }


    this.isLoading = true

    const inputLanguage = this.programmingLanguages.find(language => language.value === this.inputSelectedValue);
    const outputLanguage = this.programmingLanguages.find(language => language.value === this.outputSelectedValue);

    let prompt = `Translate the following code from ${inputLanguage!.name} into ${outputLanguage!.name}: ${this.inputCode}`
    this.isLoading = true;

    this.openAIService.getDataFromOpenAI(prompt).subscribe(
      (response) => {
        this.outputCode = response;
      },
      (error) => {
        console.error(error);
      },
      () => {
        this.isLoading = false;
      }
    );
  }


  onInputLanguageChange($event: any) {
    this.programmingLanguage = event!.toString().toLowerCase()
  }


  copyToClipboard(text: string) {

    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 2000);

  }

}


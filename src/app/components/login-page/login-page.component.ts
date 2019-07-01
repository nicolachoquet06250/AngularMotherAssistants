import { Component, OnInit } from '@angular/core';
import { MotherAssistant } from '../../models/MotherAssistant';
import { JarvisService } from '../../services/jarvis/jarvis.service';

@Component({
  selector: 'ma-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  private MymotherAssistant: number | null = null;
  role: string | null = 'Assistante Maternelle';
  roles: string[];
  motherAssistants: MotherAssistant[];
  myMotherAssistantObject: MotherAssistant;
  BotName: string|null = null;

  get myMotherAssistant() {
    return this.MymotherAssistant;
  }

  set myMotherAssistant(value: number | null) {
    fetch(`http://localhost:3000/api/account/${value}`)
      .then(r => r.json())
      .then(json => {
        this.myMotherAssistantObject = new MotherAssistant();
        this.myMotherAssistantObject.id = json.account._id.toString();
        this.myMotherAssistantObject.firstName = json.account.firstName;
        this.myMotherAssistantObject.lastName = json.account.lastName;
        this.myMotherAssistantObject.picture = json.account.profile_pic;
      });
    this.MymotherAssistant = value;
  }

  constructor(private Jarvis: JarvisService) {}

  initJarvis() {
      this.Jarvis.addCommand(
          true,
          (i, botName) => this.BotName = botName,
          'Tu t\'appelles *', 'Ton nom est *')
          .addCommand(false,
              () => (alert(this.BotName ? `Je m'appelle ${this.BotName}`
              : `Je ne sais pas comment je m'appel. vous ne m'avez pas encore donné de nom.`),
              this.Jarvis.say(this.BotName ? `Je m'appelle ${this.BotName}`
                  : `Je ne sais pas comment je m'appel. vous ne m'avez pas encore donné de nom.`)),
              'Comment tu t\'appelles', 'Quel est ton nom', 'Comment t\'appelles tu')
          .addCommand(true,
              () => {},
              // tslint:disable-next-line:max-line-length
              /Connecte moi en tant que parent avec les identifiants ([\+0-9]+) et ([0-9a-zA-Z]+) chez l'assistante maternelle ([a-zA-Z\ ]+)/)
          .addCommand(true,
              (i, matches) => {
                        console.log(i);
                    },
              'Connecte moi en tant qu\'assistante maternelle avec les identifiants * et *')
          .init(true);
  }

  ngOnInit() {
    this.initJarvis();
    this.roles = [
      'Assistante Maternelle',
      'Parent'
    ];
    fetch(`http://localhost:3000/api/accounts`, {})
      .then(r => r.json())
      .then(json => {
        this.motherAssistants = new Array<MotherAssistant>();
        json.accounts.forEach(account => {
          const Account = new MotherAssistant();
          Account.id = account._id.toString();
          Account.firstName = account.first_name;
          Account.lastName = account.last_name;
          Account.picture = `http://localhost:3000/${account.profile_pic}`;
          this.motherAssistants.push(Account);
        });
      });
    this.Jarvis.simulate(
        'Connecte moi en tant qu\'assistante maternelle avec les identifiants nicolachoquet06250@gmail.com et 2669NICOLAS2107');
  }
}

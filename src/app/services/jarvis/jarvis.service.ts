import { Injectable } from '@angular/core';
import Artyom from '../../artyom/artyom';

@Injectable({
  providedIn: 'root'
})
export class JarvisService {
  Jarvis: Artyom;

  constructor() {
    this.Jarvis = new Artyom();
  }

  public createCommand(smart = false, action: CallableFunction, ...commands: string[]|RegExp[]) {
    return {
      smart, action,
      indexes: commands
    };
  }

  public addCommand(smart = false, action: CallableFunction, ...commands: string[]|RegExp[]): JarvisService {
    this.Jarvis.addCommands([ this.createCommand(smart, action, ...commands) ]);
    return this;
  }

  public addCommands(...commands) {
    this.Jarvis.addCommands(commands);
  }

  public init(continuous = false, listen = true, lang = 'fr-FR', volume = 1, debug = false) {
    this.Jarvis.initialize({
      continuous, listen,
      lang, volume, debug
    });
  }

  public say(sentence: string) {
    this.Jarvis.say(sentence);
  }

  public simulate(command: string) {
    this.Jarvis.simulateInstruction(command);
  }
}

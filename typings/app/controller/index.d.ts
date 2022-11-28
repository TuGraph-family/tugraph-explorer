// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTugraph from '../../../app/controller/tugraph';

declare module 'egg' {
  interface IController {
    tugraph: ExportTugraph;
  }
}

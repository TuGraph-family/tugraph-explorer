// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportServiceInterface from '../../../app/service/serviceInterface';
import ExportTugraph from '../../../app/service/tugraph';

declare module 'egg' {
  interface IService {
    serviceInterface: AutoInstanceType<typeof ExportServiceInterface>;
    tugraph: AutoInstanceType<typeof ExportTugraph>;
  }
}

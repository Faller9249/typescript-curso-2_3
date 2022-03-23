import { Comparavel } from './comparavel';
import { Imprimivel } from './../utils/imprimivel';

export interface Modelo<T> extends Imprimivel, Comparavel<T>{

}

export interface IAction<K extends string, P = {}> {
  type: K;
  payload?: P;
}
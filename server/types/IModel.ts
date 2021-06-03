export interface IModel<T> {
  save(model: T): T
}
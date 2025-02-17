export type Merge<B extends object, S extends object> = S & Omit<B, keyof S>;

export type Letters = "a" | "b" | "c";
//type filter
type RemoveC<TType> = TType extends "c" ? "d" : TType;

type WithoutC = RemoveC<Letters>;

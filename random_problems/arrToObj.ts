interface People {
  id: number;
  name: string;
  born: number;
}
interface IObject {
  [key: string]: People;
}
type ArrayToObject = (array: People[]) => IObject;

const arrayToObject: ArrayToObject = (array) => {
  return array.reduce(ById, {});
};
const ById = (acc: IObject, curr: People): IObject => ({
  ...acc,
  [curr.id]: curr,
});

const peoples = [
  { id: 1, name: "Donald", born: 1938 },
  { id: 2, name: "Vin", born: 1943 },
  { id: 3, name: "Abelson", born: 1912 },
  { id: 4, name: "Jhon von", born: 1928 },
  { id: 5, name: "Thomas", born: 1983 },
  { id: 6, name: "Peter", born: 1956 },
  { id: 7, name: "Bentley", born: 1953 },
  { id: 8, name: "Grady", born: 1955 },
  { id: 9, name: "Randal", born: 1989 },
];

console.log(arrayToObject(peoples));

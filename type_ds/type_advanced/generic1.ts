interface Animal {
  name: string;
}
interface Human {
  firstName: string;
  lastName: string;
}

export const getDisplayName = <TItem extends Human | Animal>(
  item: TItem
): TItem extends Human ? { humanName: string } : { animalName: string } => {
  if ("name" in item) {
    return { animalName: item.name };
  }
  return { humanName: item.firstName };
};

getDisplayName({ name: "baboon" });

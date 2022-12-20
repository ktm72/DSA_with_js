//Omit utility provides auto complete
type IconSize = LooseAutoComplete<"sm" | "xs">;

type LooseAutoComplete<T extends string> = T | Omit<string, T>;
interface IconProps {
  size: IconSize;
}

export const Icon = (props: IconProps) => {
  return <></>;
};
const Comp1 = () => {
  return (
    <>
      <Icon size="sm"></Icon>
      <Icon size="something"></Icon>
    </>
  );
};

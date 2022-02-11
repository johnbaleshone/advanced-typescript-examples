type Horizontal = "top" | "bottom";
type Vertical = "left" | "right";

// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
export type Placement = Horizontal | Vertical | `${Horizontal}-${Vertical}`;

export const foo = (placement: Placement) => {
  console.log(placement === "bottom");
};

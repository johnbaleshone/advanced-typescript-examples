export const foo = () => {
  const person = {
    name: "Jane Doe",
    species: "Human",
  } as const; // https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference

  console.log(person.name === "Washington");
  console.log(person.species === "Vulcan");
  console.log(person.species === "Human");
};

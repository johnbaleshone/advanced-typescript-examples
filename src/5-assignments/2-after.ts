export const flipCoin = () => {
  let x = Math.random() < 0.5 ? (0 as const) : (1 as const);

  // do stuff

  return x;
};

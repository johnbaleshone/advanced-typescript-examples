export type GetUserResponse = {
  id: number;
  name: string;
  address: string;
  imageUrl: string;
  preferences: {
    // ...
  };
  subscriptions: {
    // ..
  };
  // And more...
};

// Partial
// https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
export type GetUserProfileResponse = Partial<GetUserResponse>;

export const foo = (
  user: GetUserResponse,
  userProfile: GetUserProfileResponse
) => {
  console.log(user);
  console.log(userProfile);
};

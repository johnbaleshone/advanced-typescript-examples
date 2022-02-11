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

// Assume you used GraphQL or Django to request a subset of available fields.
export type GetUserProfileResponse = {
  id: number;
  name: string;
  address: string;
  imageUrl: string;
};

export const foo = (
  user: GetUserResponse,
  userProfile: GetUserProfileResponse
) => {
  console.log(user);
  console.log(userProfile);
};

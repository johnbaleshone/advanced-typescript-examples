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

// Pick
// https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
export type GetUserProfileResponse = Pick<
  GetUserResponse,
  "id" | "name" | "address" | "imageUrl"
>;

export const foo = (
  user: GetUserResponse,
  userProfile: GetUserProfileResponse
) => {
  console.log(user);
  console.log(userProfile);
};

// Other Utility-Types include
// Omit - https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
// Required - https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype
// Readonly - https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype
// Exclude - https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers
// Extract - https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union
// Non nullable - https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype

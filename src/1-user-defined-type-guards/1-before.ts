export type ClosedEnrollment = {
  groupId: number;
};
export type OpenEnrollment = {
  selectedGroupId: number | undefined;
  groupIds: number[];
};

export type Enrollment = ClosedEnrollment | OpenEnrollment;

// Type predicates
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
export const isOpenEnrollment = (
  enrollment: Enrollment
): enrollment is OpenEnrollment => {
  return (enrollment as OpenEnrollment).groupIds !== undefined;
};

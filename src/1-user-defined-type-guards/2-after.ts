// Discriminated unions
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions

export type ClosedEnrollment = {
  type: "open";
  groupId: number;
};

export type OpenEnrollment = {
  type: "closed";
  selectedGroupId: number | undefined;
  groupIds: number[];
};

export type Enrollment = ClosedEnrollment | OpenEnrollment;

export function isOpenEnrollment(
  enrollment: Enrollment
): enrollment is OpenEnrollment {
  return enrollment.type === "open";
}

export const processOpenEnrollment = (enrollment: Enrollment) => {
  console.log(enrollment.groupIds);

  if (isOpenEnrollment(enrollment)) {
    console.log(enrollment.groupIds);
  }
};

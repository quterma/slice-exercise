export const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export function removeDuplicateObjects<Obj extends Record<string, any>>(
  array: Obj[],
  property: string
): Obj[] {
  const uniqueIds: Obj[] = [];

  const unique = array.filter((element) => {
    const isDuplicate = uniqueIds.includes(element[property]);

    if (!isDuplicate) {
      uniqueIds.push(element[property]);
      return true;
    }

    return false;
  });

  return unique;
}

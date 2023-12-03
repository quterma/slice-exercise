export const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const checkIsObject = (variable: any) => {
  if (
    typeof variable !== "object" ||
    variable === null ||
    Array.isArray(variable)
  ) {
    return false;
  }
  return true;
};

type PrimitiveValue = number | string | boolean | undefined;

export const checkHasPrimitiveValue = (obj: Record<string, any>) => {
  const value = Object.values(obj)[0];
  const primitiveTypes = ["number", "string", "boolean", "undefined"];

  if (!primitiveTypes.includes(typeof value)) return false;
  return true;
};

export const removeDuplicateObjects = <
  Obj extends Record<string, PrimitiveValue>
>(
  array: Obj[],
  property: string
): Obj[] => {
  const uniqueValues: PrimitiveValue[] = [];

  const unique = array.filter((element) => {
    if (!checkIsObject(element)) throw new Error();
    if (!checkHasPrimitiveValue(element)) throw new Error();

    const isDuplicate = uniqueValues.includes(element[property]);

    if (!isDuplicate) {
      uniqueValues.push(element[property]);
      return true;
    }

    return false;
  });

  return unique;
};

type CheckIsCellForObserverProps = {
  dataList: any[];
  rowIndex: number;
  colIndex: number;
};
export const checkIsCellForObserver = ({
  dataList,
  rowIndex,
  colIndex,
}: CheckIsCellForObserverProps) => {
  const isOkay = rowIndex === dataList.length - 5 && colIndex === 0;
  if (isOkay) console.log(`isOkay. row: ${rowIndex}, col: ${colIndex}`);
  return isOkay;
};

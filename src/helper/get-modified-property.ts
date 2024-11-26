export const getAllModifiedProperty = <T extends Record<string, any>>(
  oldObj: T,
  newObj: T,
  template?: Record<string, any>,
): Partial<T> => {
  const result: Record<string, any> = {};

  for (const key in template) {
    // The object is not even touched
    if (typeof newObj[key] === "undefined") {
      continue;
    }

    if (typeof newObj[key] === "object") {
      // Compare property inside objects
      // Check if property is an array
      if (Array.isArray(newObj[key])) {
        if (!arraysAreEqual(oldObj[key], newObj[key])) {
          result[key] = newObj[key];
        }
      } else {
        // Property is an object
        if (!objectsAreEqual(oldObj[key], newObj[key])) {
          result[key] = newObj[key];
        }
      }
    } else if (newObj[key] !== oldObj[key]) {
      // value updated
      result[key] = newObj[key];
    }
  }
  return result as T;
};

const arraysAreEqual = (arr1: any[], arr2: any[]): boolean => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

// Function to compare objects
const objectsAreEqual = (obj1: Record<string, any>, obj2: Record<string, any>): boolean => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

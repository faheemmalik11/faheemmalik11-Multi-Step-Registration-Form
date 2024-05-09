import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const deleteObjectProperty = (obj: any, fieldName: string) => {
  if (obj) {
    const errorsCopy = {
      ...obj,
    };

    delete errorsCopy[fieldName];

    return errorsCopy;
  }

  return null;
};

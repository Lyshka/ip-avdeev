import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateIdFromObject = <T extends { id: number }>(
  arraySmall: Omit<T, "id">[]
): T[] => {
  const arrayWithId: T[] = arraySmall.map((item, idx) => ({
    id: idx + 1,
    ...item,
  })) as T[];

  return arrayWithId;
};

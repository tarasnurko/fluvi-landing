export const convertToPx = (value: number): string => `${value}px`;

export const setSpacing = (value?: number): string =>
  value ? convertToPx(value * 4) : "4px";

export const setValueOrAuto = (value?: number): string =>
  value ? convertToPx(value) : "auto";

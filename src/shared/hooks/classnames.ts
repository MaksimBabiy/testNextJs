export function classNames(
  classname: string = "",
  mods: Record<string, boolean | undefined | string>,
  additional: Array<string | undefined>
): string {
  return [
    classname,
    ...additional.filter(Boolean),
    mods &&
      Object.entries(mods)
        .filter(([key, value]) => Boolean(value))
        .map(([key]) => key),
  ]
    .join(" ")
    .trim();
}

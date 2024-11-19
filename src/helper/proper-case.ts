export const properCase = (str: string) => {
  return str
    .split(/[-_\s]/) // Split on hyphens, underscores, or spaces
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const getKeyFromUrl = (url: string, position: number) => {
  try {
    const pathnameParts = url.split("/");
    if (position >= 0 && position < pathnameParts.length) {
      return pathnameParts[position];
    } else {
      return "";
    }
  } catch (error) {
    return "";
  }
};

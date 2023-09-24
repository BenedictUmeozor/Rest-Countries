export const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Could not fetch data, try again later");
    }
    return res.json();
  } catch (error) {
    throw new Error("Could not fetch data, try again later");
  }
};

export function outputLanguages(obj) {
  return Object.values(obj).join(", ");
}

export const assignCurr = (obj) => {
  for (let key in obj) {
    if (obj[key]) {
      return `${obj[key].name} - (${obj[key].symbol})`;
    }
  }
};

export const getTheme = () => {
  let theme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  theme = JSON.parse(localStorage.getItem("theme")) ?? theme;
  return theme;
};

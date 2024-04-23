//type allias union

type Theme = "dark" | "light"

let theme: Theme;
theme = "dark";
theme = "light"

const setTheme = (t: Theme) => {
    theme = t;
}       
setTheme("dark");

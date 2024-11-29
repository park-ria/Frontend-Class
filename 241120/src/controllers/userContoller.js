import User from "../models/user";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { email, username, password, name, location } = req.body;

  /*const usernameExists = await User.exists({ username });
  if (usernameExists) {
    return res.render("join", {
      pageTitle,
      errorMessage: "This username is already taken",
    });
  }
  const emailExists = await User.exists({ email });
  if (emailExists) {
    return res.render("join", {
      pageTitle,
      errorMessage: "This useremail is already taken",
    });
  }*/

  const pageTitle = "Join";
  const exists = await User.exists({ $or: [{ username }, { email }] });
  // exists는 객체의 매개변수를 받는데 $or은 []안에 있는 둘중에 하나만 있으면 true반환
  if (exists) {
    return res.render("join", {
      pageTitle,
      errorMessage: "This username/email is already TrackEvent",
    });
  }

  await User.create({
    email,
    username,
    password,
    name,
    location,
  });
  return res.redirect("/login");
};
export const edit = (req, res) => res.send("edit");
export const remove = (req, res) => res.send("remove");
export const login = (req, res) => res.send("login");
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("see");

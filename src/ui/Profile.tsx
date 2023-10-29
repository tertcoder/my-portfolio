import { Link } from "react-router-dom";
import profile from "../assets/images/profile.png";

type PropsType = { name: string };

function Profile({ name }: PropsType) {
  return (
    <Link
      to="home"
      className="flex items-center space-x-4 rounded-full bg-secondaryBg pr-4 font-bold duration-300  focus:outline-none focus:ring-1 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-primaryBg"
    >
      <img src={profile} alt="profile" />
      <span className="text-3xl font-bold text-primary">{name}</span>
    </Link>
  );
}
export default Profile;

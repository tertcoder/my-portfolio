import { Link } from "react-router-dom";

type PropsType = { name: string };
const profile: string = "../src/assets/images/profile.png";
function Profile({ name }: PropsType) {
  return (
    <Link
      to="home"
      className="flex items-center space-x-4 rounded-full bg-secondaryBg  pr-4 font-bold"
    >
      <img src={profile} alt="profile" />
      <span className="text-3xl font-bold text-primary">{name}</span>
    </Link>
  );
}
export default Profile;

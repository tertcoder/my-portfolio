import { HiArrowSmallLeft } from "react-icons/hi2";
import LinkToBtn from "../../ui/LinkToBtn";
import LinkTo from "../../ui/LinkTo";

function Contact() {
  return (
    <div className="flex h-full flex-col items-center justify-between py-10">
      <div className="flex flex-1 -translate-y-16 flex-col justify-center text-center">
        <h3 className="mb-4 text-lg font-semibold text-primary">
          Let's get in touch!
        </h3>
        <div className="space-x-8">
          <LinkTo to="http://linkedin.com/in/bon-tertius-tuyishimire-1a997321a">
            LinkedIn
          </LinkTo>
          <LinkTo to="http://x.com/bon_tertius?s=09" alt="twitter">
            X
          </LinkTo>
          <LinkTo to="https://github.com/tertcoder">GitHub</LinkTo>
        </div>
      </div>
      <LinkToBtn to="/about/me" type="secondary">
        <span className="flex items-center gap-0.5">
          <span className="text-highlight">
            <HiArrowSmallLeft />
          </span>{" "}
          Back to
        </span>
        <span className="text-highlight">AboutMe</span>
      </LinkToBtn>
    </div>
  );
}

export default Contact;

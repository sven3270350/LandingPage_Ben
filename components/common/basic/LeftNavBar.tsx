import SignUpSubscribePage from "components/common/signupsubscribe";
import { Dispatch, SetStateAction } from "react";
interface LeftNavBarProps {
  isSubscription: true;
  setIsSubscription: Dispatch<SetStateAction<boolean>>;
}

const LeftNavBar: React.FC<LeftNavBarProps> = ({
  setIsSubscription,
  isSubscription,
}) => {
  return (
    <>
      <div className="subscription_style">
        <SignUpSubscribePage
          isSubscription={isSubscription}
          setIsSubscription={setIsSubscription}
        />
      </div>
    </>
  );
};

export default LeftNavBar;

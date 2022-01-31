import PasswordSetting from "./passwordSetting/index";
import ProfileSeetingAccount from "./ProfileSetting/index";
import ProfileEmailSeeting from "./profileEmail/index";
import Subscription from "./Subscriptions/index";
import DeleteAccount from "./DeletAccount/index";

function AccountSetting(params) {
  const onDelete = () => {
    console.log("delete");
  };
  const UpdatePassword = ()=> {
    console.log("UpdatePassword");
  }
  return (
    <>
      <div className="col-md-6 offset-md-3">
        <ProfileSeetingAccount />
        <PasswordSetting updatePassword={UpdatePassword}/>
        <ProfileEmailSeeting />
        <Subscription />
        <DeleteAccount handleDelete={onDelete} />
      </div>
    </>
  );
}

export default AccountSetting;

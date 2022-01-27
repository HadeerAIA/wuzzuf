import PasswordSetting from './passwordSetting/index';
import ProfileSeetingAccount from './ProfileSetting/index';
import ProfileEmailSeeting from './profileEmail/index';
import Subscription from './Subscriptions/index';
import DeleteAccount from './DeletAccount/index';



function AccountSetting(params) {
    return(
        <> 
       <div class="col-md-6 offset-md-3">
             <ProfileSeetingAccount />
             <PasswordSetting />
             <ProfileEmailSeeting />
             <Subscription />
             <DeleteAccount />
         </div>
        </>
    ) 
}

export default AccountSetting 
import APICall from "./httpCall";
import saveList from "./db";
import listFilter from "./listFilter";
export default class ScheduleList {
  async getUserDetails() {
    let body = {
      login_method_id: "password",
      email: "v_shiva@ljx.com.au",
      params: { password: "shivaReddy@970" }
    };
    const switchtokenDetails = await APICall(
      body,
      "global/Authentication::login",
      ""
    );

    let tokenbody = {
      account_id: switchtokenDetails.result.accounts[0].account_id,
      token: switchtokenDetails.result.token
    };
    const tokenDetails = await APICall(
      tokenbody,
      "rex/Authentication::loginWithGlobalAuthToken",
      ""
    );
   const listFiltering = await listFilter(tokenDetails.result);
  }
}
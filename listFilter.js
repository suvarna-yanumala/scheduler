import APICall from "./httpCall";
import saveList from "./db";
const listFilter = async token => {
  let offset = 0;
  let flag = true;
  const startdate = new Date();
  const enddate = new Date(startdate.setMinutes(startdate.getMinutes() - 30));
  const UTCseconds =Math.round(enddate.getTime() / 1000);
  while (flag) {
    let listbody = {
      criteria: [
        { name: "listing.system_listing_state", type: "=", value: "current" }
      ],
      limit: 20,
      offset,
      order_by: { system_ctime: "desc" }
    };

    const listings = await APICall(listbody, "rex/Listings::search", token);
    offset += 20;
    (listings.result.rows).forEach(list => {
      
      if (list.system_ctime >= UTCseconds) {
         saveList(list);
      } else {
        flag = false;
      }
    });
  }
};

export default listFilter;

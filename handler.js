'use strict';
import ScheduleList from './ScheduleList';
// import cron from 'node-cron';
 
export async function queryListing(event) {
  // cron.schedule('1 * * * * *', () => {
    let listings =  new ScheduleList().getUserDetails();
 
  // });
};  


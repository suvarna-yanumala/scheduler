import axios  from 'axios';
import { async } from 'q';

const APICall =  async (body,url,token)=>{
  const options = {
    method: 'POST',
    url:  process.env.ROOT_URL+ url,
    data:body,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " +token
  } 
  }
  
  let res=await axios(options);
  return res.data;
  }

  export default APICall;
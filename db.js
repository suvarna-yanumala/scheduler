'use strict';
import AWS from 'aws-sdk';
const dynamoDb = new AWS.
DynamoDB.DocumentClient();
const saveList =  async (Itembody)=>{
    console.log("Query Called",process.env.Listing_TABLE);
    Itembody.id = (Itembody.id).toString();
        const params = {
            TableName: process.env.Listing_TABLE,
            Item:{
                id:Itembody.id,
                data:Itembody
            }
        };
        return dynamoDb.put(params).promise()
            .then(result => params.Item); 
  }
  export default saveList;
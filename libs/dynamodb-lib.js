import AWS from "aws-sdk";

export function call(action, params) {
  // Update region to America do Sul (São Paulo)
  AWS.config.update({ region: "sa-east-1" });
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}
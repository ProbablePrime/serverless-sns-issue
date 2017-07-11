'use strict';
const AWS = require('aws-sdk');

module.exports.hello = (event, context, callback) => {
  const sns = new AWS.SNS();
  sns.publish({
    Message: JSON.stringify({payload: 'Hello SNS'}),
    MessageStructure: 'json',
    TopicArn: process.env.SNS_TOPIC,
  });
};

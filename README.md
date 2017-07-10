Deploying this leads to:

```
$ serverless deploy
Serverless: Packaging service...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
.....
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service .zip file to S3 (409 B)...
Serverless: Validating template...

  Error --------------------------------------------------

  The CloudFormation template is invalid: Template error: resource snsTopic does not support attribute type Arn in Fn::GetAtt

  For debugging logs, run again after setting the "SLS_DEBUG=*" environment variable.

  Get Support --------------------------------------------
     Docs:          docs.serverless.com
     Bugs:          github.com/serverless/serverless/issues
     Forums:        forum.serverless.com
     Chat:          gitter.im/serverless/serverless

  Your Environment Information -----------------------------
     OS:                     win32
     Node Version:           6.10.0
     Serverless Version:     1.17.0

```
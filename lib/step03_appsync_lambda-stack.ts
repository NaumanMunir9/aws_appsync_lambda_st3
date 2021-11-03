import * as cdk from "@aws-cdk/core";
import * as appsync from "@aws-cdk/aws-appsync";
import * as lambda from "@aws-cdk/aws-lambda";

export class Step03AppsyncLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // AppSync API
    const api = new appsync.GraphqlApi(this, "Api", {
      name: "cdk-appsync-api",
      schema: appsync.Schema.fromAsset("graphql/schema.graphql"),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,
        },
      },
    });

    // AWS Lambda
    const myLambda = new lambda.Function(this, "MyLambdaFunction", {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: "welcome.handler",
    });

    // Lambda DataSource
    const lambdaDataSource = api.addLambdaDataSource(
      "MyLambdaDataSource",
      myLambda
    );

    // resolvers
    lambdaDataSource.createResolver({
      typeName: "Query",
      fieldName: "welcome",
    });
  }
}

import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

export async function handler(event: APIGatewayProxyEvent, context: Context) {
  return "welcome";
}

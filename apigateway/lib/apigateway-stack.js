"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApigatewayStack = void 0;
const cdk = require("aws-cdk-lib");
class ApigatewayStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const lambdaFnRestApi = new cdk.aws_lambda.Function(this, "restapitestLambda", {
            functionName: `restapitestlambda`,
            runtime: cdk.aws_lambda.Runtime.NODEJS_14_X,
            code: cdk.aws_lambda.Code.fromAsset("lambda"),
            handler: "index.handler",
        });
        // uncomment the proxy parameter and assign resources and methods to restrict calls.
        const api = new cdk.aws_apigateway.LambdaRestApi(this, "RestApi", {
            handler: lambdaFnRestApi,
        });
        // const items = api.root.addResource('items');
        // items.addMethod('GET');  // GET /items
        // items.addMethod('POST'); // POST /items
        // const item = items.addResource('{item}');
        // item.addMethod('GET');   // GET /items/{item}
    }
}
exports.ApigatewayStack = ApigatewayStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpZ2F0ZXdheS1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwaWdhdGV3YXktc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQW1DO0FBR25DLE1BQWEsZUFBZ0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQUM1QyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sZUFBZSxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFO1lBQzdFLFlBQVksRUFBRSxtQkFBbUI7WUFDakMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDM0MsSUFBSSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDN0MsT0FBTyxFQUFFLGVBQWU7U0FDekIsQ0FBQyxDQUFBO1FBR04sb0ZBQW9GO1FBRWpGLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRTtZQUMvRCxPQUFPLEVBQUUsZUFBZTtTQUV6QixDQUFDLENBQUM7UUFJSCwrQ0FBK0M7UUFDL0MseUNBQXlDO1FBQ3pDLDBDQUEwQztRQUUxQyw0Q0FBNEM7UUFDNUMsZ0RBQWdEO0lBRWxELENBQUM7Q0FDRjtBQTdCRCwwQ0E2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5cbmV4cG9ydCBjbGFzcyBBcGlnYXRld2F5U3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBjb25zdCBsYW1iZGFGblJlc3RBcGkgPSBuZXcgY2RrLmF3c19sYW1iZGEuRnVuY3Rpb24odGhpcywgXCJyZXN0YXBpdGVzdExhbWJkYVwiLCB7XG4gICAgICBmdW5jdGlvbk5hbWU6IGByZXN0YXBpdGVzdGxhbWJkYWAsXG4gICAgICBydW50aW1lOiBjZGsuYXdzX2xhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxuICAgICAgY29kZTogY2RrLmF3c19sYW1iZGEuQ29kZS5mcm9tQXNzZXQoXCJsYW1iZGFcIiksXG4gICAgICBoYW5kbGVyOiBcImluZGV4LmhhbmRsZXJcIixcbiAgICB9KVxuXG5cbi8vIHVuY29tbWVudCB0aGUgcHJveHkgcGFyYW1ldGVyIGFuZCBhc3NpZ24gcmVzb3VyY2VzIGFuZCBtZXRob2RzIHRvIHJlc3RyaWN0IGNhbGxzLlxuXG4gICBjb25zdCBhcGkgPSBuZXcgY2RrLmF3c19hcGlnYXRld2F5LkxhbWJkYVJlc3RBcGkodGhpcywgXCJSZXN0QXBpXCIsIHtcbiAgICAgIGhhbmRsZXI6IGxhbWJkYUZuUmVzdEFwaSxcbiAgICAgIC8vcHJveHk6ZmFsc2VcbiAgICB9KTtcblxuXG5cbiAgICAvLyBjb25zdCBpdGVtcyA9IGFwaS5yb290LmFkZFJlc291cmNlKCdpdGVtcycpO1xuICAgIC8vIGl0ZW1zLmFkZE1ldGhvZCgnR0VUJyk7ICAvLyBHRVQgL2l0ZW1zXG4gICAgLy8gaXRlbXMuYWRkTWV0aG9kKCdQT1NUJyk7IC8vIFBPU1QgL2l0ZW1zXG5cbiAgICAvLyBjb25zdCBpdGVtID0gaXRlbXMuYWRkUmVzb3VyY2UoJ3tpdGVtfScpO1xuICAgIC8vIGl0ZW0uYWRkTWV0aG9kKCdHRVQnKTsgICAvLyBHRVQgL2l0ZW1zL3tpdGVtfVxuXG4gIH1cbn0iXX0=
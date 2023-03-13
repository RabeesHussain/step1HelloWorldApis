"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApnaAppsyncStack = void 0;
const cdk = require("aws-cdk-lib");
// import * as sqs from 'aws-cdk-lib/aws-sqs';
const appsync = require("@aws-cdk/aws-appsync-alpha");
class ApnaAppsyncStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const appsyncApi = new appsync.GraphqlApi(this, 'api', {
            name: 'Rabees Api',
            schema: appsync.Schema.fromAsset('schema/schema.graphql')
        });
        const lambdaFnAppsync = new cdk.aws_lambda.Function(this, "apnaappsynctestLambda", {
            functionName: `apnaappsynctestLambda`,
            runtime: cdk.aws_lambda.Runtime.NODEJS_14_X,
            code: cdk.aws_lambda.Code.fromAsset("lambda"),
            handler: "index.handler",
        });
        const DataSource = appsyncApi.addLambdaDataSource('ds', lambdaFnAppsync);
        DataSource.createResolver({
            typeName: "Mutation",
            fieldName: "addTodo",
        });
        DataSource.createResolver({
            typeName: "Query",
            fieldName: "getTodos",
        });
        DataSource.createResolver({
            typeName: "Mutation",
            fieldName: "updateTodo",
        });
    }
}
exports.ApnaAppsyncStack = ApnaAppsyncStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBuYWFwcHN5bmMtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcG5hYXBwc3luYy1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFFbkMsOENBQThDO0FBQzlDLHNEQUFxRDtBQUVyRCxNQUFhLGdCQUFpQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQzdDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7WUFDckQsSUFBSSxFQUFFLFVBQVU7WUFDaEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDO1NBQzFELENBQUMsQ0FBQTtRQUdGLE1BQU0sZUFBZSxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLHVCQUF1QixFQUFFO1lBQ2pGLFlBQVksRUFBRSx1QkFBdUI7WUFDckMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDM0MsSUFBSSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDN0MsT0FBTyxFQUFFLGVBQWU7U0FDekIsQ0FBQyxDQUFBO1FBRUYsTUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztRQUV6RSxVQUFVLENBQUMsY0FBYyxDQUFDO1lBQ3hCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxTQUFTO1NBQ3JCLENBQUMsQ0FBQztRQUVILFVBQVUsQ0FBQyxjQUFjLENBQUM7WUFDeEIsUUFBUSxFQUFFLE9BQU87WUFDakIsU0FBUyxFQUFFLFVBQVU7U0FDdEIsQ0FBQyxDQUFDO1FBRUgsVUFBVSxDQUFDLGNBQWMsQ0FBQztZQUN4QixRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsWUFBWTtTQUN4QixDQUFDLENBQUM7SUFHTCxDQUFDO0NBQ0Y7QUFwQ0QsNENBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuLy8gaW1wb3J0ICogYXMgc3FzIGZyb20gJ2F3cy1jZGstbGliL2F3cy1zcXMnO1xuaW1wb3J0ICogYXMgYXBwc3luYyBmcm9tICdAYXdzLWNkay9hd3MtYXBwc3luYy1hbHBoYSdcblxuZXhwb3J0IGNsYXNzIEFwbmFBcHBzeW5jU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBjb25zdCBhcHBzeW5jQXBpID0gbmV3IGFwcHN5bmMuR3JhcGhxbEFwaSh0aGlzLCAnYXBpJywge1xuICAgICAgbmFtZTogJ3Rlc3QgQXBpJyxcbiAgICAgIHNjaGVtYTogYXBwc3luYy5TY2hlbWEuZnJvbUFzc2V0KCdzY2hlbWEvc2NoZW1hLmdyYXBocWwnKVxuICAgIH0pXG5cblxuICAgIGNvbnN0IGxhbWJkYUZuQXBwc3luYyA9IG5ldyBjZGsuYXdzX2xhbWJkYS5GdW5jdGlvbih0aGlzLCBcImFwbmFhcHBzeW5jdGVzdExhbWJkYVwiLCB7XG4gICAgICBmdW5jdGlvbk5hbWU6IGBhcG5hYXBwc3luY3Rlc3RMYW1iZGFgLFxuICAgICAgcnVudGltZTogY2RrLmF3c19sYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcbiAgICAgIGNvZGU6IGNkay5hd3NfbGFtYmRhLkNvZGUuZnJvbUFzc2V0KFwibGFtYmRhXCIpLFxuICAgICAgaGFuZGxlcjogXCJpbmRleC5oYW5kbGVyXCIsXG4gICAgfSlcblxuICAgIGNvbnN0IERhdGFTb3VyY2UgPSBhcHBzeW5jQXBpLmFkZExhbWJkYURhdGFTb3VyY2UoJ2RzJywgbGFtYmRhRm5BcHBzeW5jKTtcblxuICAgIERhdGFTb3VyY2UuY3JlYXRlUmVzb2x2ZXIoe1xuICAgICAgdHlwZU5hbWU6IFwiTXV0YXRpb25cIixcbiAgICAgIGZpZWxkTmFtZTogXCJhZGRUb2RvXCIsXG4gICAgfSk7XG5cbiAgICBEYXRhU291cmNlLmNyZWF0ZVJlc29sdmVyKHtcbiAgICAgIHR5cGVOYW1lOiBcIlF1ZXJ5XCIsXG4gICAgICBmaWVsZE5hbWU6IFwiZ2V0VG9kb3NcIixcbiAgICB9KTtcblxuICAgIERhdGFTb3VyY2UuY3JlYXRlUmVzb2x2ZXIoe1xuICAgICAgdHlwZU5hbWU6IFwiTXV0YXRpb25cIixcbiAgICAgIGZpZWxkTmFtZTogXCJ1cGRhdGVUb2RvXCIsXG4gICAgfSk7XG5cblxuICB9XG59XG4iXX0=
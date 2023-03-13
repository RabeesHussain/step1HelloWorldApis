"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
async function handler(event, context) {
    console.log("request:", event);
    console.log('context', context);
    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `Oh Yahoo! Bale Bale Meri API Chal Pari Aor Ye Os Ka Link He ${event.path}\n`
    };
}
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFTyxLQUFLLFVBQVUsT0FBTyxDQUFDLEtBQTJCLEVBQUUsT0FBZ0I7SUFDekUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFFL0IsT0FBTztRQUNMLFVBQVUsRUFBRSxHQUFHO1FBQ2YsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRTtRQUN6QyxJQUFJLEVBQUUsMEJBQTBCLEtBQUssQ0FBQyxJQUFJLElBQUk7S0FDL0MsQ0FBQztBQUNKLENBQUM7QUFURCwwQkFTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUV2ZW50LCBBUElHYXRld2F5UHJveHlSZXN1bHQsIENvbnRleHQgfSBmcm9tICdhd3MtbGFtYmRhJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQ6IEFQSUdhdGV3YXlQcm94eUV2ZW50LCBjb250ZXh0OiBDb250ZXh0KTogUHJvbWlzZTxBUElHYXRld2F5UHJveHlSZXN1bHQ+IHtcbiAgY29uc29sZS5sb2coXCJyZXF1ZXN0OlwiLCBldmVudCk7XG4gIGNvbnNvbGUubG9nKCdjb250ZXh0Jyxjb250ZXh0KTtcblxuICByZXR1cm4ge1xuICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwidGV4dC9wbGFpblwiIH0sXG4gICAgYm9keTogYEhlbGxvLCBDREshIFlvdSd2ZSBoaXQgJHtldmVudC5wYXRofVxcbmBcbiAgfTtcbn0iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const addTodo_1 = require("./addTodo");
const getTodos_1 = require("./getTodos");
const updateTodo_1 = require("./updateTodo");
async function handler(event) {
    console.log("event ", event);
    switch (event.info.fieldName) {
        case "addTodo":
            return addTodo_1.default(event.arguments.todo);
        case "getTodos":
            return getTodos_1.default();
        case "updateTodo":
            return updateTodo_1.default(event.arguments);
        default:
            return null;
    }
}
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBZ0M7QUFDaEMseUNBQWtDO0FBQ2xDLDZDQUFzQztBQWdCL0IsS0FBSyxVQUFVLE9BQU8sQ0FBQyxLQUFnQztJQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QixRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQzFCLEtBQUssU0FBUztZQUNWLE9BQU8saUJBQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLEtBQUssVUFBVTtZQUNYLE9BQU8sa0JBQVEsRUFBRSxDQUFDO1FBQ3RCLEtBQUssWUFBWTtZQUNiLE9BQU8sb0JBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkM7WUFDSSxPQUFPLElBQUksQ0FBQztLQUNuQjtBQUNMLENBQUM7QUFaRCwwQkFZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZGRUb2RvIGZyb20gJy4vYWRkVG9kbyc7XG5pbXBvcnQgZ2V0VG9kb3MgZnJvbSAnLi9nZXRUb2Rvcyc7XG5pbXBvcnQgdXBkYXRlVG9kbyBmcm9tIFwiLi91cGRhdGVUb2RvXCI7XG5cbmV4cG9ydCB0eXBlIFRvZG8gPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRvbmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIFVzZXIgPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRvbmU6IGJvb2xlYW47XG59XG5cbmltcG9ydCB7IEFwcFN5bmNSZXNvbHZlckV2ZW50IH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50OiBBcHBTeW5jUmVzb2x2ZXJFdmVudDxhbnk+KSAge1xuICAgIGNvbnNvbGUubG9nKFwiZXZlbnQgXCIsIGV2ZW50KTtcbiAgICBzd2l0Y2ggKGV2ZW50LmluZm8uZmllbGROYW1lKSB7XG4gICAgICAgIGNhc2UgXCJhZGRUb2RvXCI6XG4gICAgICAgICAgICByZXR1cm4gYWRkVG9kbyhldmVudC5hcmd1bWVudHMudG9kbyk7XG4gICAgICAgIGNhc2UgXCJnZXRUb2Rvc1wiOlxuICAgICAgICAgICAgcmV0dXJuIGdldFRvZG9zKCk7XG4gICAgICAgIGNhc2UgXCJ1cGRhdGVUb2RvXCI6XG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlVG9kbyhldmVudC5hcmd1bWVudHMpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSJdfQ==
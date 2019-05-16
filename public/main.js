(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatHeaderWrapper{\r\n    height: 90px;\r\n    color: #222;\r\n    box-shadow: 0 2px 3px rgba(0,0,0,0.37), 1px 2px 3px rgba(0,0,0,0.54);\r\n}\r\n\r\n.chatRoom {\r\n    height: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nrouter-outlet {\r\n    height: 0;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG9FQUFvRTtBQUN4RTs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXRIZWFkZXJXcmFwcGVye1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgwLDAsMCwwLjM3KSwgMXB4IDJweCAzcHggcmdiYSgwLDAsMCwwLjU0KTtcclxufVxyXG5cclxuLmNoYXRSb29tIHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbnJvdXRlci1vdXRsZXQge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The content below is only a placeholder and can be replaced.\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul>\r\n\r\n<router-outlet></router-outlet> -->\r\n\r\n<div class=\"chatroom\">\r\n  <div class=\"chatHeaderWrapper\">\r\n    <app-navbar>\r\n      \r\n    </app-navbar>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ChatApplication';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat-form/chat-form.component */ "./src/app/chat-form/chat-form.component.ts");
/* harmony import */ var _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chatroom/chatroom.component */ "./src/app/chatroom/chatroom.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _user_item_user_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-item/user-item.component */ "./src/app/user-item/user-item.component.ts");
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ "./node_modules/@ctrl/ngx-emoji-mart/fesm5/ctrl-ngx-emoji-mart.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_routes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/routes */ "./src/routes.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_10__["ChatFormComponent"],
                _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_11__["ChatroomComponent"],
                _feed_feed_component__WEBPACK_IMPORTED_MODULE_12__["FeedComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_13__["MessageComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_14__["LoginFormComponent"],
                _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_15__["SignupFormComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_17__["UserListComponent"],
                _user_item_user_item_component__WEBPACK_IMPORTED_MODULE_18__["UserItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(src_routes__WEBPACK_IMPORTED_MODULE_22__["appRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].firebase),
                _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_19__["PickerModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_20__["ChatService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

// var config = {
//   apiKey: "AIzaSyCJrvO4sUshn2SlHWC-yXohX4ipFEadsZc",
//   authDomain: "chatapplication-b47db.firebaseapp.com",
//   databaseURL: "https://chatapplication-b47db.firebaseio.com",
//   projectId: "chatapplication-b47db",
//   storageBucket: "chatapplication-b47db.appspot.com",
//   messagingSenderId: "182895035852",
//   appId: "1:182895035852:web:47e4ae46ca75c5ad"
// };
// firebase.initializeApp(config);
// // Get a reference to the database service
// var database = firebase.database();


/***/ }),

/***/ "./src/app/chat-form/chat-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatInput{\r\n    flex: 10;\r\n    font-size: 1.3em;\r\n    font-family: 'Open Sans', sans-serif;\r\n    background-color: #eee;\r\n    color: #000;\r\n    transition: 0.1s ease-out;\r\n    padding-left: 80px;\r\n}\r\n\r\n.chatInput:focus{\r\n    background-color: #E4F1FE;\r\n    color: #222;\r\n    transition: 0.2s ease-in;\r\n}\r\n\r\n.chatButton{\r\n    flex: 1;\r\n    padding: 10px;\r\n    padding: 8px 24px;\r\n    font-size: 1.3em;\r\n    font-family: 'Droid Sans', sans-serif;\r\n    background-color: #2A2845;\r\n    color: white;\r\n    transition: 0.2s ease-out;\r\n    min-width: 50px;\r\n}\r\n\r\n.chatButton:hover{\r\n    background-color: #444;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1mb3JtL2NoYXQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jaGF0LWZvcm0vY2hhdC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdElucHV0e1xyXG4gICAgZmxleDogMTA7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcclxuICAgIHBhZGRpbmctbGVmdDogODBweDtcclxufVxyXG5cclxuLmNoYXRJbnB1dDpmb2N1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNEYxRkU7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcclxufVxyXG5cclxuLmNoYXRCdXR0b257XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkEyODQ1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcclxuICAgIG1pbi13aWR0aDogNTBweDtcclxufVxyXG5cclxuLmNoYXRCdXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/chat-form/chat-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input\n  class=\"chatInput\"\n  [(ngModel)]=\"message\"\n  (keydown)=\"handleSubmit($event)\"/>\n  <div>\n<button class=\"chatButton\" (click)=send()>Send</button>"

/***/ }),

/***/ "./src/app/chat-form/chat-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.ts ***!
  \**************************************************/
/*! exports provided: ChatFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatFormComponent", function() { return ChatFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");



var ChatFormComponent = /** @class */ (function () {
    function ChatFormComponent(chat) {
        this.chat = chat;
    }
    ChatFormComponent.prototype.ngOnInit = function () {
    };
    ChatFormComponent.prototype.send = function () {
        this.chat.sendMessage(this.message);
        this.message = '';
    };
    ChatFormComponent.prototype.handleSubmit = function (event) {
        if (event.keyCode == 13) {
            this.send();
        }
    };
    ChatFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-form',
            template: __webpack_require__(/*! ./chat-form.component.html */ "./src/app/chat-form/chat-form.component.html"),
            styles: [__webpack_require__(/*! ./chat-form.component.css */ "./src/app/chat-form/chat-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], ChatFormComponent);
    return ChatFormComponent;
}());



/***/ }),

/***/ "./src/app/chatroom/chatroom.component.css":
/*!*************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .mainContent {\r\n    display: flex;\r\n}\r\n\r\n.userListWrapper {\r\n    display: flex;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 1.2em;\r\n    color: #fff;\r\n    order: 1;\r\n    background-color: #2A2845;\r\n    padding:10px 12px 10px 12px;\r\n    border-right: 1px solid #222;\r\n}\r\n\r\n.feedWrapper {\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 1.2em;\r\n    flex: 5;\r\n    order: 2;\r\n    overflow-y: scroll;\r\n    padding: 20px 0px 0px 24px;\r\n    background-color: #fff;    \r\n    background: \r\n    linear-gradient(181deg, rgba(100,200,255,0.6), #000000e6),\r\n    url('https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center center no-repeat;;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 1.2em;\r\n    flex: 5;\r\n    order: 2;\r\n    overflow-y: scroll;\r\n    padding:20px 0px 0px 24px;\r\n}\r\n\r\n.chatFormWrapper {\r\ndisplay: flex;\r\nheight: 50px;\r\nbackground-color: #eee;\r\nz-index: 3;\r\n}\r\n\r\n#scroll-style::-webkit-scrollbar-track\r\n{\r\nborder-radius: 10px;\r\nbackground-color: #F5F5F5;\r\n}\r\n\r\napp-user-list {\r\nwidth: 100%;\r\n}\r\n\r\n\r\n */\r\n .mainContent{\r\n    display: flex;\r\n}\r\n .userListWrapper {\r\n    background-color: #2A2845;\r\n    color: #fff;\r\n    display: flex;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 1.2em;\r\n    flex: 1;\r\n    order: 1;\r\n    padding:10px 12px 10px 12px;\r\n    border-right: 1px solid #222;\r\n}\r\n .feedWrapper {\r\n    background-color: #fff;\r\n    background: \r\n        linear-gradient(181deg, rgba(100,200,255,0.6), rgba(0, 0, 0, 0.9)),\r\n        url('https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center center no-repeat;;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 1.2em;\r\n    flex: 5;\r\n    order: 2;\r\n    overflow-y: scroll;\r\n    padding:20px 0px 0px 24px;\r\n}\r\n .chatFormWrapper {\r\n    display: flex;\r\n    height: 50px;\r\n    background-color: #eee;\r\n    z-index: 3;\r\n}\r\n #scroll-style::-webkit-scrollbar-track\r\n{\r\n\tborder-radius: 10px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n app-user-list {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHJvb20vY2hhdHJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9ERTtDQUNEO0lBQ0csYUFBYTtBQUNqQjtDQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7Q0FFQTtJQUNJLHNCQUFzQjtJQUN0Qjs7MEtBRXNLO0lBQ3RLLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0NBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7Q0FFQTs7Q0FFQyxtQkFBbUI7Q0FDbkIseUJBQXlCO0FBQzFCO0NBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jaGF0cm9vbS9jaGF0cm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLm1haW5Db250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi51c2VyTGlzdFdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3JkZXI6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkEyODQ1O1xyXG4gICAgcGFkZGluZzoxMHB4IDEycHggMTBweCAxMnB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzIyMjtcclxufVxyXG5cclxuLmZlZWRXcmFwcGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZsZXg6IDU7XHJcbiAgICBvcmRlcjogMjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDBweCAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgICAgXHJcbiAgICBiYWNrZ3JvdW5kOiBcclxuICAgIGxpbmVhci1ncmFkaWVudCgxODFkZWcsIHJnYmEoMTAwLDIwMCwyNTUsMC42KSwgIzAwMDAwMGU2KSxcclxuICAgIHVybCgnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvOTU2OTgxL21pbGt5LXdheS1zdGFycnktc2t5LW5pZ2h0LXNreS1zdGFyLTk1Njk4MS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD02NTAmdz05NDAnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDs7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBmbGV4OiA1O1xyXG4gICAgb3JkZXI6IDI7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBwYWRkaW5nOjIwcHggMHB4IDBweCAyNHB4O1xyXG59XHJcblxyXG4uY2hhdEZvcm1XcmFwcGVyIHtcclxuZGlzcGxheTogZmxleDtcclxuaGVpZ2h0OiA1MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG56LWluZGV4OiAzO1xyXG59XHJcblxyXG4jc2Nyb2xsLXN0eWxlOjotd2Via2l0LXNjcm9sbGJhci10cmFja1xyXG57XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbmFwcC11c2VyLWxpc3Qge1xyXG53aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbiAqL1xyXG4gLm1haW5Db250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnVzZXJMaXN0V3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkEyODQ1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZmxleDogMTtcclxuICAgIG9yZGVyOiAxO1xyXG4gICAgcGFkZGluZzoxMHB4IDEycHggMTBweCAxMnB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzIyMjtcclxufVxyXG5cclxuLmZlZWRXcmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiBcclxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTgxZGVnLCByZ2JhKDEwMCwyMDAsMjU1LDAuNiksIHJnYmEoMCwgMCwgMCwgMC45KSksXHJcbiAgICAgICAgdXJsKCdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy85NTY5ODEvbWlsa3ktd2F5LXN0YXJyeS1za3ktbmlnaHQtc2t5LXN0YXItOTU2OTgxLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTY1MCZ3PTk0MCcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0OztcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZsZXg6IDU7XHJcbiAgICBvcmRlcjogMjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBhZGRpbmc6MjBweCAwcHggMHB4IDI0cHg7XHJcbn1cclxuXHJcbi5jaGF0Rm9ybVdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4jc2Nyb2xsLXN0eWxlOjotd2Via2l0LXNjcm9sbGJhci10cmFja1xyXG57XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG5hcHAtdXNlci1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/chatroom/chatroom.component.html":
/*!**************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContent\">\n  <div class=\"userListWrapper\">\n    <app-user-list></app-user-list>\n  </div>\n  <div #scroller class=\"feedWrapper\">\n    <app-feed></app-feed>\n  </div>\n</div>\n\n<div class=\"chatFormWrapper\">\n  <app-chat-form></app-chat-form>\n</div>"

/***/ }),

/***/ "./src/app/chatroom/chatroom.component.ts":
/*!************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.ts ***!
  \************************************************/
/*! exports provided: ChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomComponent", function() { return ChatroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatroomComponent = /** @class */ (function () {
    function ChatroomComponent() {
    }
    ChatroomComponent.prototype.ngOnInit = function () {
    };
    ChatroomComponent.prototype.scrollToBottom = function () {
        this.feedContainer.nativeElement.scrollTop
            = this.feedContainer.nativeElement.scrollHeight;
    };
    ChatroomComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scroller'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatroomComponent.prototype, "feedContainer", void 0);
    ChatroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatroom',
            template: __webpack_require__(/*! ./chatroom.component.html */ "./src/app/chatroom/chatroom.component.html"),
            styles: [__webpack_require__(/*! ./chatroom.component.css */ "./src/app/chatroom/chatroom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatroomComponent);
    return ChatroomComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed.component.css":
/*!*****************************************!*\
  !*** ./src/app/feed/feed.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feed{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.message{\r\n    flex-direction: column;\r\n    margin: 10px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mZWVkL2ZlZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWVke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tZXNzYWdle1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/feed/feed.component.html":
/*!******************************************!*\
  !*** ./src/app/feed/feed.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"feed\">\n  <div *ngFor=\"let message of feed$ | async\" class=\"message\">\n    <app-message [chatMessage]=message></app-message>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");



var FeedComponent = /** @class */ (function () {
    function FeedComponent(chat) {
        this.chat = chat;
    }
    FeedComponent.prototype.ngOnInit = function () {
        this.feed$ = this.chat.getMessages();
    };
    FeedComponent.prototype.ngOnChanges = function () {
        this.feed$ = this.chat.getMessages();
    };
    FeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.css */ "./src/app/feed/feed.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-form/login-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    height: 100%;\r\n    overflow:hidden;\r\n    background: \r\n      linear-gradient(45deg, rgba(255,103,0,0.3), rgba(0, 0, 80, 0.9)),\r\n      url('https://images.wallpaperscraft.com/image/black_background_texture_86812_1920x1080.jpg') center center no-repeat;;\r\n  }\r\n  \r\n  .loginCard{\r\n    display: block;\r\n    border: 1px solid #000;\r\n    border-radius: 4px;\r\n    background-color: rgba(255,255,255,0.85);\r\n    width: 700px;\r\n    height: 420px;\r\n    margin: auto;\r\n    margin-top: 40px;\r\n    text-align: center;\r\n    padding: 80px 30px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .formInput{\r\n    margin: auto;\r\n    margin-top: 16px;\r\n    display: block;\r\n    width: 60%;\r\n    height: 40px;\r\n    border-radius:4px;\r\n    background:#ecf0f1;\r\n    border: #ccc 1px solid;\r\n    padding: 8px;\r\n    font-size:1em;\r\n  }\r\n  \r\n  .btn{\r\n    height: 54px;\r\n    width: 60%;\r\n    margin: auto;\r\n    margin-top: 16px;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\r\n    transition: ease-in 0.2s;\r\n  }\r\n  \r\n  #btn-signUp{\r\n      background-color:#2A2845;\r\n  }\r\n  \r\n  #btn-signUp:hover{\r\n      background-color:#4A4865;\r\n      transition: ease-in 0.2s;\r\n  }\r\n  \r\n  #btn-login{\r\n      background-color:#4A4875;\r\n  }\r\n  \r\n  #btn-login:hover{\r\n      background-color:#5A5895;\r\n      transition: ease-in 0.2s;\r\n  }\r\n  \r\n  h2{\r\n      height: 2em;\r\n  }\r\n  \r\n  a {\r\n      text-decoration: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmOzswSEFFc0g7RUFDeEg7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0VBQWtFO0lBQ2xFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0VBQWtFO0lBQ2xFLHdCQUF3QjtFQUMxQjs7RUFFQTtNQUNJLHdCQUF3QjtFQUM1Qjs7RUFFQTtNQUNJLHdCQUF3QjtNQUN4Qix3QkFBd0I7RUFDNUI7O0VBRUE7TUFDSSx3QkFBd0I7RUFDNUI7O0VBRUE7TUFDSSx3QkFBd0I7TUFDeEIsd0JBQXdCO0VBQzVCOztFQUVBO01BQ0ksV0FBVztFQUNmOztFQUVBO01BQ0kscUJBQXFCO0VBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogXHJcbiAgICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsMTAzLDAsMC4zKSwgcmdiYSgwLCAwLCA4MCwgMC45KSksXHJcbiAgICAgIHVybCgnaHR0cHM6Ly9pbWFnZXMud2FsbHBhcGVyc2NyYWZ0LmNvbS9pbWFnZS9ibGFja19iYWNrZ3JvdW5kX3RleHR1cmVfODY4MTJfMTkyMHgxMDgwLmpwZycpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0OztcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luQ2FyZHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44NSk7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBoZWlnaHQ6IDQyMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDgwcHggMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTcpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtSW5wdXR7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiNlY2YwZjE7XHJcbiAgICBib3JkZXI6ICNjY2MgMXB4IHNvbGlkO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgZm9udC1zaXplOjFlbTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bntcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xNyksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xyXG4gIH1cclxuICBcclxuICAjYnRuLXNpZ25VcHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojMkEyODQ1O1xyXG4gIH1cclxuICBcclxuICAjYnRuLXNpZ25VcDpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojNEE0ODY1O1xyXG4gICAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gICNidG4tbG9naW57XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IzRBNDg3NTtcclxuICB9XHJcbiAgXHJcbiAgI2J0bi1sb2dpbjpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojNUE1ODk1O1xyXG4gICAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gIGgye1xyXG4gICAgICBoZWlnaHQ6IDJlbTtcclxuICB9XHJcbiAgXHJcbiAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"loginCard\">\r\n      <h2 class=\"heading\">Log In</h2>\r\n        <input \r\n          [(ngModel)]=\"email\"\r\n          type=\"email\" \r\n          name=\"email\" \r\n          class=\"formInput\" />\r\n        <input type=\"password\" \r\n          [(ngModel)]=\"password\"\r\n          name=\"password\" \r\n          class=\"formInput\" />\r\n        <button class=\"btn\" \r\n                id=\"btn-login\" \r\n                (click)=\"login()\">\r\n                Log In\r\n        </button>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        console.log('login() called from login-form component');
        this.authService.login(this.email, this.password)
            .catch(function (error) { return _this.errorMsg = error.message; });
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login-form/login-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messageContainer{\r\n    display: flex;\r\n    height: auto;\r\n    width: 70%;\r\n    min-width: 400px;\r\n    border-radius: 5px;\r\n    align-items:stretch;\r\n    background-color: #eee;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.26), 0 3px 6px rgba(0,0,0,0.23);\r\n   \r\n}\r\n\r\n.isOwnMessageContainer{\r\n    background-color: #01579B;\r\n}\r\n\r\n.messageData{\r\n    flex: 1;\r\n    padding: 10px;\r\n    font-size: 0.7em;\r\n}\r\n\r\n.sender{\r\n    display: block;\r\n    color: #222;\r\n    font-weight: bold;\r\n}\r\n\r\n.isOwnSender{\r\n    color: #E1F5FE;\r\n}\r\n\r\n.timestamp {\r\n    color: #555;\r\n    font-style: italic;\r\n}\r\n\r\n.isOwnTimestamp{\r\n    color: #4FC3F7;\r\n}\r\n\r\n.messageContent{\r\n    height: auto;\r\n    flex: 9;\r\n    background-color: #fff;\r\n    padding: 10px;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n\r\n.isOwnMessageContent{\r\n    background-color: #E3F2FD;\r\n    color: #01579B;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0VBQWtFOztBQUV0RTs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osT0FBTztJQUNQLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZUNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGFsaWduLWl0ZW1zOnN0cmV0Y2g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICBcclxufVxyXG5cclxuLmlzT3duTWVzc2FnZUNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTU3OUI7XHJcbn1cclxuXHJcbi5tZXNzYWdlRGF0YXtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxufVxyXG5cclxuLnNlbmRlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmlzT3duU2VuZGVye1xyXG4gICAgY29sb3I6ICNFMUY1RkU7XHJcbn1cclxuXHJcbi50aW1lc3RhbXAge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5pc093blRpbWVzdGFtcHtcclxuICAgIGNvbG9yOiAjNEZDM0Y3O1xyXG59XHJcblxyXG4ubWVzc2FnZUNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmbGV4OiA5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmlzT3duTWVzc2FnZUNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNGMkZEO1xyXG4gICAgY29sb3I6ICMwMTU3OUI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"messageContainer\"\n    [ngClass]=\"{'isOwnMessageContainer':isOwnMessage}\">\n    <div class=\"messageData\"\n        [ngClass]=\"{'isOwnMessageData':isOwnMessage}\">\n        <span class=\"sender\"\n            [ngClass]=\"{'isOwnSender':isOwnMessage}\">\n            {{ userName }}\n        </span>\n        <span class=\"timestamp\" \n            [ngClass] = \"{'isOwnTimestamp':isOwnMessage}\">\n            {{ timeStamp | date:'medium' }}\n        </span>\n    </div>\n    <div class=\"messageContent\"\n        [ngClass]=\"{'isOwnMessageContent':isOwnMessage}\">\n        {{ messageContent }}\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_chat_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/chat-message.model */ "./src/app/models/chat-message.model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var MessageComponent = /** @class */ (function () {
    function MessageComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.timeStamp = new Date();
        authService.authUser().subscribe(function (user) {
            _this.ownEmail = user.email;
            _this.isOwnMessage = _this.ownEmail === _this.userEmail;
        });
    }
    MessageComponent.prototype.ngOnInit = function (chatMessage) {
        if (chatMessage === void 0) { chatMessage = this.chatMessage; }
        this.messageContent = chatMessage.message;
        this.timeStamp = chatMessage.timeSent;
        this.userName = chatMessage.userName;
        this.userEmail = chatMessage.email;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_chat_message_model__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"])
    ], MessageComponent.prototype, "chatMessage", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/models/chat-message.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/chat-message.model.ts ***!
  \**********************************************/
/*! exports provided: ChatMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessage", function() { return ChatMessage; });
var ChatMessage = /** @class */ (function () {
    function ChatMessage() {
        this.timeSent = new Date();
    }
    return ChatMessage;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navBar{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    background-color: rgb(177, 177, 177);\r\n}\r\n\r\n#logo{\r\n    display: inline-block;\r\n    background: url('https://www.designfreelogoonline.com/wp-content/uploads/2014/11/00502-Arrows-logo-design-free-logo-online-01.png') no-repeat;\r\n    background-size: cover;\r\n    margin: 12px 10px 12px 32px;\r\n    width: 60px;\r\n    height: 60px;\r\n    min-width: 60px;\r\n}\r\n\r\n#heading{\r\n    flex: 4;\r\n    padding: 24px 0px 8px 10px;\r\n    height: 60px;\r\n    font-size: 1.8em;\r\n    font-weight: bold;\r\n}\r\n\r\n.links{\r\n    padding-top: 32px;\r\n    padding-right: 30px;\r\n    white-space: nowrap;\r\n    display: block;\r\n}\r\n\r\n#heading > a{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n.links a{\r\n    color: #555;\r\n    text-decoration: none;\r\n    transition: ease-in 0.2s;\r\n    padding-right: 12px;\r\n    overflow: hidden;\r\n}\r\n\r\n.links a:hover {\r\n    color: #1E88E5;\r\n    transition: ease-in 0.2s;\r\n}\r\n\r\n#userEmail {\r\n    padding-right: 16px;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZJQUE2STtJQUM3SSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLE9BQU87SUFDUCwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2QmFye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcclxufVxyXG5cclxuI2xvZ297XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vd3d3LmRlc2lnbmZyZWVsb2dvb25saW5lLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8xMS8wMDUwMi1BcnJvd3MtbG9nby1kZXNpZ24tZnJlZS1sb2dvLW9ubGluZS0wMS5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWFyZ2luOiAxMnB4IDEwcHggMTJweCAzMnB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtaW4td2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbiNoZWFkaW5ne1xyXG4gICAgZmxleDogNDtcclxuICAgIHBhZGRpbmc6IDI0cHggMHB4IDhweCAxMHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjhlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubGlua3N7XHJcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNoZWFkaW5nID4gYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmxpbmtzIGF7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubGlua3MgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzFFODhFNTtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcclxufVxyXG5cclxuI3VzZXJFbWFpbCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navBar\">\n    <div id=\"logo\"></div>\n    <div id=\"heading\"><a routerLink=\"/\">Chat Application</a></div>\n  <div class=\"links\">\n    <span>\n      <a *ngIf=\"!(user|async)?.uid\" href=\"#\" (click)=\"login()\">Login</a>\n    </span>\n    <span>\n      <a *ngIf=\"!(user|async)?.uid\" routerLink=\"/signup\">Sign Up</a>\n    </span>\n    <span>\n      <span id=\"userEmail\" *ngIf=\"(user|async)?.uid\">Hello, {{userEmail}}</span>\n    </span>\n    <span>\n      <a *ngIf=\"(user|async)?.uid\" href=\"#\" (click)=\"logout()\">Logout</a>\n    </span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.authUser();
        this.user.subscribe(function (user) {
            if (user) {
                _this.userEmail = user.email;
            }
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);






var AuthService = /** @class */ (function () {
    function AuthService(afAuth, db, router) {
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.user = afAuth.authState;
    }
    AuthService.prototype.authUser = function () {
        return this.user;
    };
    AuthService.prototype.currentUserId = function () {
        return this.afAuth.authState;
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            _this.setUserStatus('online');
            _this.router.navigate(['chat']);
        });
    };
    AuthService.prototype.logout = function () {
        this.setUserStatus('offline');
        this.afAuth.auth.signOut();
        this.router.navigate(['login']);
    };
    AuthService.prototype.signUp = function (email, password, displayName) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            var status = 'online';
            _this.setUserData(email, displayName, status);
        }).catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.setUserData = function (email, displayName, status) {
        this.currentUserId()
            .subscribe(function (user) {
            if (user) {
                firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"]().ref().child('users').child("" + user.uid).set({
                    displayName: displayName,
                    email: email,
                    status: status
                });
            }
        });
    };
    AuthService.prototype.setUserStatus = function (status) {
        console.log("set user called ", status);
        this.currentUserId()
            .subscribe(function (user) {
            if (user) {
                console.log("Hi", status);
                firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"]().ref().child('users').child("" + user.uid).update({
                    status: status
                });
            }
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);




var ChatService = /** @class */ (function () {
    function ChatService(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth != undefined && auth != null) {
                _this.user = auth;
            }
            _this.getUser().forEach(function (u) {
                _this.userName = u[0];
                //    console.log(this.userName);
            });
        });
    }
    ChatService.prototype.getUser = function () {
        var userId = this.user.uid;
        //console.log(userId);
        var path = "users/" + userId;
        this.db.list('users/userId');
        var itemsRef = this.db.list(path);
        this.var1$ = itemsRef.snapshotChanges();
        this.var2$ = itemsRef.valueChanges();
        return this.var2$;
    };
    ChatService.prototype.getUsers = function () {
        var path = "users/";
        var itemsRef = this.db.list(path);
        this.var1$ = itemsRef.snapshotChanges();
        this.var2$ = itemsRef.valueChanges();
        return this.var2$;
        //return this.db.list(path);
    };
    ChatService.prototype.sendMessage = function (msg) {
        var timeStamp = this.getTimeStamp();
        var email = this.user.email;
        this.chatMessages = this.getMessages();
        var message = {
            message: msg,
            timeSent: timeStamp,
            userName: this.userName,
            email: email
        };
        var item = this.db.list('/messages');
        item.push(message);
    };
    ChatService.prototype.getMessages = function () {
        // query to create our message feed binding
        var itemsRef = this.db.list('/messages');
        this.var1$ = itemsRef.snapshotChanges();
        this.var2$ = itemsRef.valueChanges();
        return this.var2$;
    };
    ChatService.prototype.getTimeStamp = function () {
        var now = new Date();
        var date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCDate();
        var time = now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds();
        return (date + ' ' + time);
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/signup-form/signup-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    overflow:hidden;\r\n    background: \r\n      linear-gradient(45deg, rgba(0,103, 255, 0.3), rgba(0, 150, 80, 0.9)),\r\n      url('https://images.pexels.com/photos/1040473/pexels-photo-1040473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center center no-repeat;;\r\n  }\r\n  \r\n  .signUpCard{\r\n    display: block;\r\n    border: 1px solid #000;\r\n    border-radius: 4px;\r\n    background-color: rgba(255,255,255,0.85);\r\n    width: 700px;\r\n    height: 520px;\r\n    margin: auto;\r\n    margin-top: 30px;\r\n    padding: 80px 30px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .formInput{\r\n    display: block;\r\n    width: 100%;\r\n    height: 40px;\r\n    border-radius:4px;\r\n    background:#ecf0f1;\r\n    border: #ccc 1px solid;\r\n    padding: 8px;\r\n    font-size:1em;\r\n    margin-bottom: 18px;\r\n  }\r\n  \r\n  .btn{\r\n    height: 54px;\r\n    margin-top: 32px;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\r\n    transition: ease-in 0.2s;\r\n    width: 100%;\r\n  }\r\n  \r\n  #btn-signUp{\r\n      background-color:#2A2845;\r\n  }\r\n  \r\n  #btn-signUp:hover{\r\n      background-color:#4A4865;\r\n      transition: ease-in 0.2s;\r\n  }\r\n  \r\n  #btn-signUp:disabled{\r\n      background-color:#eee;\r\n      color: #999;\r\n  }\r\n  \r\n  h2{\r\n      text-align: center;\r\n      height: 2em;\r\n  }\r\n  \r\n  a {\r\n      text-decoration: none;\r\n  }\r\n  \r\n  .label{\r\n      font-size: 0.9em;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwLWZvcm0vc2lnbnVwLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZjs7bUpBRStJO0VBQ2pKOztFQUVBO0lBQ0UsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0VBQWtFO0lBQ2xFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0VBQWtFO0lBQ2xFLHdCQUF3QjtJQUN4QixXQUFXO0VBQ2I7O0VBRUE7TUFDSSx3QkFBd0I7RUFDNUI7O0VBRUE7TUFDSSx3QkFBd0I7TUFDeEIsd0JBQXdCO0VBQzVCOztFQUVBO01BQ0kscUJBQXFCO01BQ3JCLFdBQVc7RUFDZjs7RUFFQTtNQUNJLGtCQUFrQjtNQUNsQixXQUFXO0VBQ2Y7O0VBRUE7TUFDSSxxQkFBcUI7RUFDekI7O0VBRUE7TUFDSSxnQkFBZ0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAtZm9ybS9zaWdudXAtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IFxyXG4gICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMCwxMDMsIDI1NSwgMC4zKSwgcmdiYSgwLCAxNTAsIDgwLCAwLjkpKSxcclxuICAgICAgdXJsKCdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xMDQwNDczL3BleGVscy1waG90by0xMDQwNDczLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTY1MCZ3PTk0MCcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0OztcclxuICB9XHJcbiAgXHJcbiAgLnNpZ25VcENhcmR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuODUpO1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjE3KSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuZm9ybUlucHV0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xyXG4gICAgYmFja2dyb3VuZDojZWNmMGYxO1xyXG4gICAgYm9yZGVyOiAjY2NjIDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtc2l6ZToxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gIH1cclxuICBcclxuICAuYnRue1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTcpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAjYnRuLXNpZ25VcHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojMkEyODQ1O1xyXG4gIH1cclxuICBcclxuICAjYnRuLXNpZ25VcDpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojNEE0ODY1O1xyXG4gICAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gICNidG4tc2lnblVwOmRpc2FibGVke1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XHJcbiAgICAgIGNvbG9yOiAjOTk5O1xyXG4gIH1cclxuICBcclxuICBoMntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDJlbTtcclxuICB9XHJcbiAgXHJcbiAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmxhYmVse1xyXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"signUpCard\">\n     <form #signupForm=\"ngForm\">\n      <h2 class=\"heading\">Sign Up</h2>\n  \n      <label class=\"label\">Email</label>\n         <input \n         type=\"email\" name=\"email\"\n         placeholder=\"Enter your email address\" \n         [(ngModel)]=\"email\" class=\"formInput\"\n         maxlength=\"60\" required/>\n  \n      <label class=\"label\">Password</label>\n        <input \n          type=\"password\" name=\"password\"\n          placeholder=\"Choose a password\" \n          [(ngModel)]=\"password\" class=\"formInput\" \n          required/>\n  \n      <label class=\"label\">Display Name</label>\n        <input \n          name=\"displayName\"\n          placeholder=\"Enter a display name\" \n          [(ngModel)]=\"displayName\" class=\"formInput\"\n          maxlength=\"12\" required/>\n  \n        <button [disabled]=\"!signupForm.form.valid\" \n                type=\"submit\" (click)=\"signUp()\"\n                class=\"btn\" id=\"btn-signUp\">\n                Sign Up\n        </button>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.ts ***!
  \******************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignupFormComponent.prototype.signUp = function () {
        var _this = this;
        var email = this.email;
        var password = this.password;
        var displayName = this.displayName;
        this.authService.signUp(email, password, displayName)
            .then(function (resolve) { return _this.router.navigate(['chat']); })
            .catch(function (error) { return _this.errorMsg = error.message; });
    };
    SignupFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-form',
            template: __webpack_require__(/*! ./signup-form.component.html */ "./src/app/signup-form/signup-form.component.html"),
            styles: [__webpack_require__(/*! ./signup-form.component.css */ "./src/app/signup-form/signup-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupFormComponent);
    return SignupFormComponent;
}());



/***/ }),

/***/ "./src/app/user-item/user-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-item/user-item.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userItem{\r\n    height: auto;\r\n    padding: 10px;\r\n    width: 100%;\r\n    margin-top: 10px;\r\n    border-radius: 1px;\r\n    align-items:flex-start;\r\n    background-color: #201835;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    color: #A098A5;\r\n    border-radius: 8px;\r\n    transition: ease-in 0.2s;\r\n}\r\n\r\n.userItem:hover{\r\n    background-color: #453968;\r\n    color: #ddd;\r\n    transition: ease-in 0.1s;\r\n}\r\n\r\n.online{\r\n    background-color: #0FA;\r\n}\r\n\r\n.busy{\r\n    background-color: #FB0;\r\n}\r\n\r\n.offline{\r\n    background-color: #888;\r\n}\r\n\r\n.status{\r\n    border: 1px solid black;\r\n    display: inline-block;\r\n    min-width: 10px;\r\n    min-height: 10px;\r\n    border-radius: 50%;\r\n    margin: 10px 12px 0px 10px;\r\n}\r\n\r\n.userName{\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pdGVtL3VzZXItaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtFQUFrRTtJQUNsRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC91c2VyLWl0ZW0vdXNlci1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlckl0ZW17XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDE4MzU7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgICBjb2xvcjogI0EwOThBNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcclxufVxyXG5cclxuLnVzZXJJdGVtOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1Mzk2ODtcclxuICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjFzO1xyXG59XHJcblxyXG4ub25saW5le1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBGQTtcclxufVxyXG5cclxuLmJ1c3l7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkIwO1xyXG59XHJcblxyXG4ub2ZmbGluZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XHJcbn1cclxuXHJcbi5zdGF0dXN7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1pbi13aWR0aDogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDEwcHggMTJweCAwcHggMTBweDtcclxufVxyXG5cclxuLnVzZXJOYW1le1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user-item/user-item.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-item/user-item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userItem\">\n  <span class=\"status\" [ngClass]=(user.status)>\n  </span>\n  <span class=\"userName\">\n    {{user.displayName}}\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/user-item/user-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-item/user-item.component.ts ***!
  \**************************************************/
/*! exports provided: UserItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserItemComponent", function() { return UserItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");



var UserItemComponent = /** @class */ (function () {
    function UserItemComponent() {
    }
    UserItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], UserItemComponent.prototype, "user", void 0);
    UserItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-item',
            template: __webpack_require__(/*! ./user-item.component.html */ "./src/app/user-item/user-item.component.html"),
            styles: [__webpack_require__(/*! ./user-item.component.css */ "./src/app/user-item/user-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserItemComponent);
    return UserItemComponent;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-list/user-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-list/user-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-list/user-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userList\">\r\n  <app-user-item\r\n  [user]=user *ngFor=\"let user of users\">\r\n  </app-user-item>\r\n</div>"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");



var UserListComponent = /** @class */ (function () {
    function UserListComponent(chat) {
        var _this = this;
        chat.getUsers().forEach(function (element) {
            _this.users = element;
        });
        ;
    }
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-list/user-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCJrvO4sUshn2SlHWC-yXohX4ipFEadsZc",
        authDomain: "chatapplication-b47db.firebaseapp.com",
        databaseURL: "https://chatapplication-b47db.firebaseio.com",
        projectId: "chatapplication-b47db",
        storageBucket: "chatapplication-b47db.appspot.com",
        messagingSenderId: "182895035852",
        appId: "1:182895035852:web:47e4ae46ca75c5ad"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _app_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
/* harmony import */ var _app_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _app_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/chatroom/chatroom.component */ "./src/app/chatroom/chatroom.component.ts");



var appRoutes = [
    { path: 'signup', component: _app_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_0__["SignupFormComponent"] },
    { path: 'login', component: _app_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__["LoginFormComponent"] },
    { path: 'chat', component: _app_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_2__["ChatroomComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\personal\Chat Application\ChatApplication\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
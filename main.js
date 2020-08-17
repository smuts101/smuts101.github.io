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

module.exports = ".menu-spacer {\n  flex: 1 1 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet>\n  <app-template></app-template>\n</router-outlet>\n"

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
        this.title = 'mean-stack-crud-app';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_template_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/template/template.component */ "./src/app/components/template/template.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_template_template_component__WEBPACK_IMPORTED_MODULE_7__["TemplateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/template/template.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/template/template.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#personal-details ul li{\r\n\r\nfont-family: Arial, Helvetica, sans-serif;\r\n\r\n}\r\n.name{\r\n  font-size: 2em;\r\n  padding-top:10px;\r\n}\r\n.surname{\r\n  color:#85929E;\r\n  font-weight: bold;\r\n\r\n}\r\n.address{\r\n  color:#283747;\r\n  font-weight: bold;\r\n  padding-top:10px;\r\n}\r\n#contactsInf{\r\n  padding-top:10px;\r\n}\r\nul li{\r\n  list-style-type: none;\r\n}\r\nh4{\r\n  text-align: center;\r\n\r\n}\r\n.summary p{\r\n\r\n  clear: both;\r\n  text-align: center;\r\n  font-weight: lighter;\r\n\r\n  font-family:  Tahoma, sans-serif;\r\n  color: #757575;\r\n}\r\n.period,.periodText,.education,.educationText,.projects,.projectsText{\r\npadding-top:2%;\r\npadding-bottom:2%;\r\nfont-family:  Tahoma, sans-serif;\r\n\r\n}\r\n.educationText{\r\nmargin-left: 10%;\r\npadding-top: 2%;\r\n}\r\n.projects{\r\n\r\n}\r\n.projectsText{padding-top: 6%;\r\n  margin-left: 10%;\r\n}\r\n.aboutmeText span{\r\n  margin-left: 1.5%;\r\n  display: block;\r\n  font-weight: bold;\r\n  font-family:  Tahoma, sans-serif;\r\n  color: #757575;\r\n  font-size:.9em;\r\n}\r\n#holder{\r\n\r\n  margin-left: 15%;\r\n  margin-right: 15%;\r\n  border: 1px solid black;\r\n  margin-top:100px;\r\n  margin-bottom:100px;\r\n\r\n}\r\n.textFont{\r\n  font-family:  Verdana;color: #706f6f;font-size:.9em;\r\n  font-weight: lighter;\r\n}\r\ntable{\r\n  margin-left: 5%;\r\n  margin-bottom: 15px;\r\n}\r\ntable #left-col{\r\n width: 200px;\r\n\r\n}\r\n#li-spacing{\r\n  padding-top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLHlDQUF5Qzs7QUFFekM7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjs7QUFFcEI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFvQjs7RUFFcEIsZ0NBQWdDO0VBQ2hDLGNBQWM7QUFDaEI7QUFDQTtBQUNBLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0EsY0FBYyxlQUFlO0VBQzNCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxjQUFjO0FBQ2hCO0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7QUFFckI7QUFDQTtFQUNFLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxjQUFjO0VBQ25ELG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUVBO0NBQ0MsWUFBWTs7QUFFYjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BlcnNvbmFsLWRldGFpbHMgdWwgbGl7XHJcblxyXG5mb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuLm5hbWV7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxufVxyXG4uc3VybmFtZXtcclxuICBjb2xvcjojODU5MjlFO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG4uYWRkcmVzc3tcclxuICBjb2xvcjojMjgzNzQ3O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctdG9wOjEwcHg7XHJcbn1cclxuI2NvbnRhY3RzSW5me1xyXG4gIHBhZGRpbmctdG9wOjEwcHg7XHJcbn1cclxudWwgbGl7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbmg0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuLnN1bW1hcnkgcHtcclxuXHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG5cclxuICBmb250LWZhbWlseTogIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzc1NzU3NTtcclxufVxyXG4ucGVyaW9kLC5wZXJpb2RUZXh0LC5lZHVjYXRpb24sLmVkdWNhdGlvblRleHQsLnByb2plY3RzLC5wcm9qZWN0c1RleHR7XHJcbnBhZGRpbmctdG9wOjIlO1xyXG5wYWRkaW5nLWJvdHRvbToyJTtcclxuZm9udC1mYW1pbHk6ICBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcbi5lZHVjYXRpb25UZXh0e1xyXG5tYXJnaW4tbGVmdDogMTAlO1xyXG5wYWRkaW5nLXRvcDogMiU7XHJcbn1cclxuLnByb2plY3Rze1xyXG5cclxufVxyXG4ucHJvamVjdHNUZXh0e3BhZGRpbmctdG9wOiA2JTtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcbi5hYm91dG1lVGV4dCBzcGFue1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjUlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiAgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjNzU3NTc1O1xyXG4gIGZvbnQtc2l6ZTouOWVtO1xyXG59XHJcblxyXG4jaG9sZGVye1xyXG5cclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbi10b3A6MTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbToxMDBweDtcclxuXHJcbn1cclxuLnRleHRGb250e1xyXG4gIGZvbnQtZmFtaWx5OiAgVmVyZGFuYTtjb2xvcjogIzcwNmY2Zjtmb250LXNpemU6LjllbTtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxufVxyXG5cclxudGFibGV7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbnRhYmxlICNsZWZ0LWNvbHtcclxuIHdpZHRoOiAyMDBweDtcclxuXHJcbn1cclxuI2xpLXNwYWNpbmd7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/template/template.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/template/template.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n    <title>CV</title>\n  </head>\n<body>\n  <div id=\"holder\">\n    <br><br><br>\n  <div>\n\n    <img style=\"float:right;margin-right: 46%;border-radius: 50%;\" src=\"../assets/imag.jpg\" width=\"100\" height=\"100\">\n      <ul style=\"list-style-type: none;\" >\n        <li style='float: left;padding-left:1% ;'>\n          <img src=\"https://img.icons8.com/android/24/000000/facebook-new.png\"/>\n        </li>\n        <li style='float: left;padding-left:1% ;'>\n          <img src=\"https://img.icons8.com/material-rounded/24/000000/instagram-new.png\"/>\n        </li>\n        <li style='float: left;padding-left:1% ;'>\n          <img src=\"https://img.icons8.com/android/24/000000/linkedin.png\"/>\n        </li>\n        <li style='float: left;padding-left:1% ;'>\n          <img src=\"https://img.icons8.com/android/24/000000/google-plus.png\"/>\n        </li>\n      </ul>\n    </div>\n    <div style=\" clear: both; text-align:center;\" id=\"personal-details\">\n      <ul  style=\"padding-top:10px;\" *ngFor=\"let x of detailsInfor\">\n        <li class=\"name\">{{x.name}} {{x.surname}}</li>\n        <li class=\"surname\">{{x.role}}</li>\n        <li class=\"address\">{{x.address}}</li>\n        <li id=\"contactsInf\">{{x.phone}} | {{x.email}}</li>\n      </ul>\n    </div>\n\n    <hr style=\"width:90%;\">\n    <div style=\"width:90% ;padding-left: 5%;font-size: 1em;\" >\n      <h4>Summary</h4>\n      <ul *ngFor=\"let y of detailsInfor\">\n        <li class=\"summary\"><p>{{y.summary}}</p></li>\n      </ul>\n    </div>\n    <hr style=\"width:90%;\">\n\n\n    <div >\n\n      <table *ngFor=\"let z of detailsInfor\">\n        <tr>\n          <th>Work experience</th>\n        </tr>\n        <tr>\n          <td  class=\"textFont\" id=\"left-col\" style=\"padding-top: 20px;font-size: 1em;\">2020 - Present</td> <td  style=\"border-left: 2px solid  rgb(194, 192, 192);padding-top: 20px;padding-left: 10px;padding-bottom: 10px;color: #706f6f;\"><b style=\"color:black;\">{{z.experience[0]}} </b>- <span style=\"font-style: italic;font-size: 1em;\">{{z.experience[1]}}</span><br><span style=\"font-style: normal;font-size: 1em;\">{{z.experience[2]}}</span></td>\n        </tr>\n      </table>\n    </div>\n\n\n    <div >\n\n      <table *ngFor=\"let k of detailsInfor\">\n        <tr>\n          <th>Education</th>\n        </tr>\n        <tr>\n          <td  class=\"textFont\" id=\"left-col\" style=\"padding-top: 20px;font-size: 1em;\">2014 - 2018</td> <td style=\"border-left: 2px solid  rgb(194, 192, 192);padding-top: 20px;padding-left: 10px;padding-bottom: 10px; color: #706f6f;\"><b style=\"color:black;\">University of Venda</b> - <span style=\"font-style: italic;font-size: 1em;\">{{k.education}}</span></td>\n\n        </tr>\n        <tr>\n          <td  class=\"textFont\" id=\"left-col\" style=\"padding-top: 20px;font-size: 1em;\">2012 - 2012</td> <td style=\"border-left: 2px solid  rgb(194, 192, 192);padding-top: 20px;padding-left: 10px;padding-bottom: 10px; color: #706f6f;\"><b style=\"color:black;\">New Era Collage</b> - <span style=\"font-style: italic;font-size: 1em;\">{{k.highschool}}</span></td>\n\n        </tr>\n      </table>\n    </div>\n\n\n    <div >\n\n      <table *ngFor=\"let m of detailsInfor\">\n        <tr>\n          <th>Projects</th>\n        </tr>\n        <tr>\n          <td  class=\"textFont\" id=\"left-col\" style=\"padding-top: 20px;font-size: 1em;\">2017</td> <td style=\"border-left: 2px solid rgb(194, 192, 192);padding-top: 20px;padding-left: 10px;padding-bottom: 10px;color: #706f6f; \"><b style=\"color:black;\">Side Project</b><br><span style=\"font-style:normal;font-size: 1em;\">{{m.projects}}</span></td>\n        </tr>\n      </table>\n    </div>\n\n\n\n\n\n\n    <div style=\"width:40%;float:right;margin-left: 10%;  \"  >\n\n      <div style=\"float:right;margin-right: 30%;;margin-top: 28px; border-left:2px solid rgb(194, 192, 192);font-family:  Tahoma, sans-serif;color: #706f6f;font-size:.9em;\">\n\n        <ul class=\"textFont\" *ngFor=\"let g of detailsInfor\">\n          <li id=\"li-spacing\" >{{g.rating[0]}} </li>\n          <li id=\"li-spacing\">{{g.rating[1]}} </li>\n          <li id=\"li-spacing\">{{g.rating[2]}} </li>\n          <li id=\"li-spacing\">{{g.rating[3]}} </li>\n        </ul>\n      </div>\n       <div>\n        <b style=\"margin-left: 8%;\">Skills</b>\n         <ul  class=\"textFont\" style=\"margin-top: 10px;\" *ngFor=\"let g of detailsInfor\">\n           <li id=\"li-spacing\">{{g.skills[0]}} </li>\n           <li id=\"li-spacing\">{{g.skills[1]}} </li>\n           <li id=\"li-spacing\">{{g.skills[2]}} </li>\n           <li id=\"li-spacing\">{{g.skills[3]}} </li>\n         </ul>\n       </div>\n   </div>\n    <div style=\"width:40%;margin-left: 2%; \"  >\n\n      <div class=\"textFont\" style=\"float:right;margin-right: 30%;margin-top: 28px;border-left:2px solid rgb(194, 192, 192);\">\n\n        <ul  *ngFor=\"let g of detailsInfor\">\n\n          <li id=\"li-spacing\">{{g.level[0]}} </li>\n          <li id=\"li-spacing\">{{g.level[1]}} </li>\n          <li id=\"li-spacing\">{{g.level[2]}} </li>\n\n        </ul>\n      </div>\n       <div >\n        <b style=\"margin-left: 9%;\">Language</b>\n         <ul class=\"textFont\" style=\"margin-top: 10px;\" *ngFor=\"let g of detailsInfor\">\n           <li id=\"li-spacing\">{{g.languages[0]}} </li>\n           <li id=\"li-spacing\">{{g.languages[1]}} </li>\n           <li id=\"li-spacing\">{{g.languages[2]}} </li>\n           <li id=\"li-spacing\">{{g.languages[3]}} </li>\n         </ul>\n       </div>\n   </div>\n\n\n\n     <br>\n    <div style=\"clear: both;\">\n      <b style=\" margin-left: 5%;\">About Me</b>\n      <ul *ngFor=\"let b of detailsInfor\">\n        <li  class=\"aboutmeText\"><span  style=\"width:90%;font-weight: lighter;\">{{b.aboutme}}</span></li>\n      </ul>\n    </div>\n\n    <div style=\"clear: both;\">\n      <b  style=\" margin-left: 5%;\">References</b>\n      <ul style=\"margin-left: 1.5%;  font-family:  Tahoma, sans-serif;\" *ngFor=\"let c of detailsInfor\">\n        <li class=\"textFont\"><span>{{c.references[0]}}</span></li>\n        <li class=\"textFont\">{{c.references[1]}}</li>\n      </ul>\n    </div>\n    <br><br><br>\n  </div>\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/components/template/template.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/template/template.component.ts ***!
  \***********************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TemplateComponent = /** @class */ (function () {
    function TemplateComponent() {
        this.detailsInfor = [
            {
                name: "Smuts",
                surname: "Chauke",
                role: "Software Developer",
                address: "Hazel street, Protea glen Ext 27, house 23827",
                email: "develop120chauke@gmail.com",
                phone: "063 419 6593",
                summary: "Computer Scientist by qualification and a Software developer/Software Engineer by  profession with three years of skilled experience focusing on Web Apps and Native/Hybrid Mobile Apps development using the latest Technology tools, and applying Software development Prenciples.",
                experience: ["Soweto CodeTribe 2020", "Mobile App Developer", "Native and Hybrid Mobile App developer using ionic,Angular and React. UI and UX Designer"],
                education: "University of Venda - Course BSc Computer Science and Information Systems",
                projects: "Smutsearch(is currently offline) created back in 2017",
                languages: ['Xitsonga', 'English', 'Isizulu'],
                skills: ['Angular', 'React', 'Ionic', 'JavaScript', 'Android'],
                rating: ['2', '1', '1', '3'],
                level: ['Native', 'Fluent', 'Basic skills'],
                aboutme: "Passionate mobile developer both Native and Hybrid . Like to solve real life problems through the use of Software Development applying Software Engineering prenciples ",
                references: ["Caswell maluleke:079 253 1102", "Zack Tinga:+27 12 844 0240"],
                highschool: ["Grade 12"]
            }
        ];
    }
    TemplateComponent.prototype.ngOnInit = function () {
    };
    TemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-template',
            template: __webpack_require__(/*! ./template.component.html */ "./src/app/components/template/template.component.html"),
            styles: [__webpack_require__(/*! ./template.component.css */ "./src/app/components/template/template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TemplateComponent);
    return TemplateComponent;
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
    production: false
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\smuts chauke\angular\myCv\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
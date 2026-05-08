"use strict";
(self["webpackChunkinkstock_studio"] = self["webpackChunkinkstock_studio"] || []).push([[398],{

/***/ 5398:
/*!**************************************************!*\
  !*** ./src/app/features/reports/reports.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsPage: () => (/* binding */ ReportsPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/inventory.service */ 1100);
/* harmony import */ var _core_services_tattoo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/tattoo.service */ 7409);
/* harmony import */ var _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/appointments.service */ 3718);
/* harmony import */ var _shared_ui_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ui/page-header.component */ 3939);
/* harmony import */ var _shared_ui_stat_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/ui/stat-card.component */ 6111);
/* harmony import */ var _core_utils_misc_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/utils/misc.util */ 3108);










function ReportsPage_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.formatMoney(item_r1.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", item_r1.percent, "%");
  }
}
function ReportsPage_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", item_r3.percent, "%");
  }
}
function ReportsPage_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", item_r4.percent, "%");
  }
}
let ReportsPage = /*#__PURE__*/(() => {
  class ReportsPage {
    constructor() {
      this.inventory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_core_services_inventory_service__WEBPACK_IMPORTED_MODULE_0__.InventoryService);
      this.tattoos = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_core_services_tattoo_service__WEBPACK_IMPORTED_MODULE_1__.TattooService);
      this.appointments = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_core_services_appointments_service__WEBPACK_IMPORTED_MODULE_2__.AppointmentsService);
      this.formatMoney = _core_utils_misc_util__WEBPACK_IMPORTED_MODULE_5__.formatMoney;
      this.revenue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.computed)(() => this.inventory.totalValue() * 0.42 + this.appointments.appointments().length * 80);
      this.revenueSeries = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.computed)(() => {
        const base = this.revenue();
        return [{
          label: 'Tatuajes',
          value: base * 0.58,
          percent: 92
        }, {
          label: 'Ropa',
          value: base * 0.31,
          percent: 64
        }, {
          label: 'Accesorios',
          value: base * 0.11,
          percent: 28
        }];
      });
      this.bookingSeries = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.computed)(() => [{
        label: 'Enero',
        value: 18,
        percent: 42
      }, {
        label: 'Febrero',
        value: 22,
        percent: 66
      }, {
        label: 'Marzo',
        value: 27,
        percent: 85
      }, {
        label: 'Abril',
        value: 25,
        percent: 75
      }]);
      this.topRequested = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.computed)(() => this.tattoos.tattoos().map((item, index) => ({
        label: item.nombre,
        value: item.estilo,
        percent: Math.max(30, 95 - index * 18)
      })));
    }
    static {
      this.ɵfac = function ReportsPage_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ReportsPage)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: ReportsPage,
        selectors: [["ng-component"]],
        hostAttrs: [1, "block", "w-full"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
        decls: 39,
        vars: 7,
        consts: [[1, "space-y-6"], ["title", "Reportes", "subtitle", "Panel ejecutivo con m\u00E9tricas, tendencias y lectura r\u00E1pida."], [1, "grid", "gap-4", "md:grid-cols-2", "xl:grid-cols-4"], ["icon", "trending_up", "label", "Ventas simuladas", "description", "Acumulado del per\u00EDodo", 3, "value"], ["icon", "event", "label", "Citas", "description", "Distribuci\u00F3n mensual", "badgeBackground", "linear-gradient(135deg, #0ea5e9, #7c3aed)", 3, "value"], ["icon", "brush", "label", "Dise\u00F1os", "description", "Cat\u00E1logo solicitado", "badgeBackground", "linear-gradient(135deg, #14b8a6, #22c55e)", 3, "value"], ["icon", "warning", "label", "Stock bajo", "description", "Acci\u00F3n prioritaria", "badgeBackground", "linear-gradient(135deg, #f59e0b, #ef4444)", 3, "value"], [1, "grid", "gap-6", "xl:grid-cols-[1.1fr_0.9fr]"], [1, "rounded-[2rem]", "border", "border-white/10", "bg-white/5", "p-6"], [1, "flex", "items-center", "justify-between", "gap-4"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-slate-500"], [1, "mt-2", "text-2xl", "font-semibold", "text-white"], [1, "rounded-full", "border", "border-white/10", "bg-white/5", "px-3", "py-1", "text-xs", "text-slate-300"], [1, "mt-6", "grid", "gap-4", "md:grid-cols-2"], [1, "rounded-[1.5rem]", "border", "border-white/10", "bg-slate-950/40", "p-5"], [1, "text-sm", "text-slate-500"], [1, "mt-4", "space-y-4"], ["class", "space-y-2", 4, "ngFor", "ngForOf"], [1, "text-lg", "font-semibold", "text-white"], [1, "mt-5", "space-y-3"], ["class", "rounded-[1.4rem] border border-white/10 bg-slate-950/40 p-4", 4, "ngFor", "ngForOf"], [1, "mt-3", "text-sm", "leading-6", "text-slate-400"], [1, "space-y-2"], [1, "flex", "items-center", "justify-between", "text-sm", "text-white"], [1, "h-2", "overflow-hidden", "rounded-full", "bg-white/10"], [1, "h-full", "rounded-full", "bg-gradient-to-r", "from-violet-500", "to-teal-400"], [1, "h-full", "rounded-full", "bg-gradient-to-r", "from-emerald-500", "to-teal-400"], [1, "rounded-[1.4rem]", "border", "border-white/10", "bg-slate-950/40", "p-4"], [1, "flex", "items-center", "justify-between"], [1, "font-medium", "text-white"], [1, "mt-3", "h-2", "overflow-hidden", "rounded-full", "bg-white/10"], [1, "h-full", "rounded-full", "bg-gradient-to-r", "from-fuchsia-500", "to-teal-400"]],
        template: function ReportsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-page-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "section", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-stat-card", 3)(4, "app-stat-card", 4)(5, "app-stat-card", 5)(6, "app-stat-card", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div")(11, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Rendimiento");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "h3", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Ingresos y demanda");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Q1");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "p", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Ingresos por l\u00EDnea");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ReportsPage_div_22_Template, 8, 4, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 14)(24, "p", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Citas por mes");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ReportsPage_div_27_Template, 8, 4, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 0)(29, "div", 8)(30, "h3", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Top solicitados");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, ReportsPage_div_33_Template, 8, 4, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 8)(35, "h3", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Lectura ejecutiva");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "p", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, " El prop\u00F3sito de esta vista es comunicar r\u00E1pidamente salud operativa, demanda de dise\u00F1os y presi\u00F3n de inventario. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.formatMoney(ctx.revenue()));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.appointments.appointments().length);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.tattoos.tattoos().length);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.inventory.lowStockCount());
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.revenueSeries());
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.bookingSeries());
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.topRequested());
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _shared_ui_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _shared_ui_stat_card_component__WEBPACK_IMPORTED_MODULE_4__.StatCardComponent],
        encapsulation: 2
      });
    }
  }
  return ReportsPage;
})();

/***/ }),

/***/ 3939:
/*!****************************************************!*\
  !*** ./src/app/shared/ui/page-header.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageHeaderComponent: () => (/* binding */ PageHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);





const _c0 = [[["", "actions", ""]]];
const _c1 = ["[actions]"];
function PageHeaderComponent_ng_container_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PageHeaderComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageHeaderComponent_ng_container_3_span_3_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r1.link || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r2);
  }
}
let PageHeaderComponent = /*#__PURE__*/(() => {
  class PageHeaderComponent {
    constructor() {
      this.title = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
      this.subtitle = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)('');
      this.breadcrumbs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)([]);
    }
    static {
      this.ɵfac = function PageHeaderComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PageHeaderComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageHeaderComponent,
        selectors: [["app-page-header"]],
        hostAttrs: [1, "block", "w-full"],
        inputs: {
          title: [1, "title"],
          subtitle: [1, "subtitle"],
          breadcrumbs: [1, "breadcrumbs"]
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c1,
        decls: 11,
        vars: 3,
        consts: [[1, "mb-8", "flex", "flex-col", "gap-5", "border-b", "border-white/10", "pb-6", "lg:flex-row", "lg:items-end", "lg:justify-between"], [1, "space-y-3"], [1, "flex", "flex-wrap", "items-center", "gap-2", "text-xs", "uppercase", "tracking-[0.24em]", "text-slate-500"], [4, "ngFor", "ngForOf"], [1, "space-y-2"], [1, "text-3xl", "font-semibold", "tracking-tight", "text-white", "md:text-4xl"], [1, "max-w-3xl", "text-sm", "leading-6", "text-slate-400", "md:text-base"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "transition", "hover:text-white", 3, "routerLink"], ["class", "text-slate-700", 4, "ngIf"], [1, "text-slate-700"]],
        template: function PageHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nav", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageHeaderComponent_ng_container_3_Template, 4, 3, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbs());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle());
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
        encapsulation: 2
      });
    }
  }
  return PageHeaderComponent;
})();

/***/ }),

/***/ 6111:
/*!**************************************************!*\
  !*** ./src/app/shared/ui/stat-card.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatCardComponent: () => (/* binding */ StatCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 3840);




let StatCardComponent = /*#__PURE__*/(() => {
  class StatCardComponent {
    constructor() {
      this.label = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
      this.value = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
      this.description = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)('');
      this.icon = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)('insights');
      this.badgeBackground = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)('linear-gradient(135deg, #7c3aed, #14b8a6)');
    }
    static {
      this.ɵfac = function StatCardComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || StatCardComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StatCardComponent,
        selectors: [["app-stat-card"]],
        hostAttrs: [1, "block", "w-full"],
        inputs: {
          label: [1, "label"],
          value: [1, "value"],
          description: [1, "description"],
          icon: [1, "icon"],
          badgeBackground: [1, "badgeBackground"]
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 12,
        vars: 6,
        consts: [[1, "group", "rounded-[1.75rem]", "border", "border-white/10", "bg-white/5", "p-5", "shadow-lg", "shadow-black/10", "transition", "duration-300", "hover:-translate-y-1", "hover:border-white/20", "hover:bg-white/10"], [1, "flex", "items-start", "justify-between", "gap-4"], [1, "text-sm", "text-slate-400"], [1, "mt-2", "text-2xl", "font-semibold", "tracking-tight", "text-white"], [1, "mt-2", "text-xs", "leading-5", "text-slate-500"], [1, "grid", "h-12", "w-12", "place-items-center", "rounded-2xl", "text-white", "shadow-lg"], [1, "!text-xl"]],
        template: function StatCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5)(10, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.badgeBackground());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.icon());
          }
        },
        dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon],
        encapsulation: 2
      });
    }
  }
  return StatCardComponent;
})();

/***/ })

}]);
//# sourceMappingURL=398.js.map
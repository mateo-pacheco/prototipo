"use strict";
(self["webpackChunkinkstock_studio"] = self["webpackChunkinkstock_studio"] || []).push([[910],{

/***/ 5910:
/*!******************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardPage: () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/appointments.service */ 3718);
/* harmony import */ var _core_services_clients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/clients.service */ 8844);
/* harmony import */ var _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/inventory.service */ 1100);
/* harmony import */ var _core_services_sessions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/sessions.service */ 5017);
/* harmony import */ var _core_utils_misc_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utils/misc.util */ 3108);










function DashboardPage_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 35)(4, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 38)(9, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1.clienteNombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", item_r1.disenoNombre, " \u00B7 ", item_r1.tatuadorNombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1.hora);
  }
}
function DashboardPage_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No hay citas programadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function DashboardPage_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43)(1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 35)(4, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](item_r2.icon + " text-base");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r2.subtitle);
  }
}
function DashboardPage_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47)(1, "div")(2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const client_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](client_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", client_r3.tatuajesRealizados, " tatuajes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", client_r3.citas, " citas");
  }
}
let DashboardPage = /*#__PURE__*/(() => {
  class DashboardPage {
    constructor() {
      this.inventory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_services_inventory_service__WEBPACK_IMPORTED_MODULE_2__.InventoryService);
      this.appointments = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_services_appointments_service__WEBPACK_IMPORTED_MODULE_0__.AppointmentsService);
      this.sessions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_services_sessions_service__WEBPACK_IMPORTED_MODULE_3__.SessionsService);
      this.clients = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_services_clients_service__WEBPACK_IMPORTED_MODULE_1__.ClientsService);
      this.formatMoney = _core_utils_misc_util__WEBPACK_IMPORTED_MODULE_4__.formatMoney;
      this.revenue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => this.inventory.totalValue() * 0.34 + this.sessions.activeCount() * 140 + this.appointments.pendingCount() * 55);
      this.upcoming = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => [...this.appointments.appointments()].sort((a, b) => `${a.fecha} ${a.hora}`.localeCompare(`${b.fecha} ${b.hora}`)).slice(0, 5));
      this.activity = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => [{
        icon: 'fa-solid fa-bag-shopping',
        title: 'Venta registrada',
        subtitle: 'Chompa Eclipse'
      }, {
        icon: 'fa-solid fa-paintbrush',
        title: 'Diseño aprobado',
        subtitle: 'Serpiente Lunar'
      }, {
        icon: 'fa-solid fa-calendar-check',
        title: 'Cita confirmada',
        subtitle: 'Andrea Páez'
      }, {
        icon: 'fa-solid fa-boxes-stacked',
        title: 'Stock actualizado',
        subtitle: 'Accesorios'
      }]);
      this.frequentClients = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => [...this.clients.clients()].sort((a, b) => b.citas - a.citas).slice(0, 3));
    }
    static {
      this.ɵfac = function DashboardPage_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DashboardPage)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: DashboardPage,
        selectors: [["ng-component"]],
        hostAttrs: [1, "block", "w-full"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
        decls: 73,
        vars: 9,
        consts: [[1, "space-y-6"], [1, "grid", "gap-4", "md:grid-cols-2", "xl:grid-cols-4"], [1, "rounded-[1.75rem]", "border", "border-white/10", "bg-white/5", "p-5"], [1, "text-sm", "text-slate-400"], [1, "mt-3", "flex", "items-end", "justify-between"], [1, "text-3xl", "font-semibold", "text-white"], [1, "grid", "h-11", "w-11", "place-items-center", "rounded-2xl", "bg-violet-500/20", "text-violet-300"], [1, "fa-solid", "fa-box", "text-xl"], [1, "mt-2", "text-xs", "text-slate-500"], [1, "grid", "h-11", "w-11", "place-items-center", "rounded-2xl", "bg-amber-500/20", "text-amber-300"], [1, "fa-solid", "fa-triangle-exclamation", "text-xl"], [1, "grid", "h-11", "w-11", "place-items-center", "rounded-2xl", "bg-blue-500/20", "text-blue-300"], [1, "fa-solid", "fa-calendar", "text-xl"], [1, "grid", "h-11", "w-11", "place-items-center", "rounded-2xl", "bg-emerald-500/20", "text-emerald-300"], [1, "fa-solid", "fa-money-bill-wave", "text-xl"], [1, "grid", "gap-4", "md:grid-cols-2"], ["routerLink", "/appointments", 1, "inline-flex", "items-center", "justify-center", "gap-2", "rounded-2xl", "bg-violet-500", "px-4", "py-3", "text-sm", "font-semibold", "text-white", "transition", "hover:bg-violet-400"], [1, "fa-solid", "fa-plus"], ["routerLink", "/inventory/products", 1, "inline-flex", "items-center", "justify-center", "gap-2", "rounded-2xl", "border", "border-white/10", "bg-white/5", "px-4", "py-3", "text-sm", "font-semibold", "text-slate-200", "transition", "hover:bg-white/10"], [1, "fa-solid", "fa-box"], [1, "grid", "gap-6", "xl:grid-cols-[1.35fr_0.65fr]"], [1, "rounded-[2rem]", "border", "border-white/10", "bg-white/5", "p-6"], [1, "flex", "items-center", "justify-between", "gap-4"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-slate-500"], [1, "mt-2", "text-2xl", "font-semibold", "text-white"], [1, "rounded-full", "border", "border-white/10", "bg-white/5", "px-3", "py-1", "text-xs", "text-slate-300"], [1, "mt-5", "space-y-3"], ["class", "flex items-center gap-4 rounded-[1.4rem] border border-white/10 bg-slate-950/50 p-4", 4, "ngFor", "ngForOf"], ["class", "rounded-[1.4rem] border border-dashed border-white/10 bg-slate-950/40 p-8 text-center text-slate-500", 4, "ngIf"], [1, "text-lg", "font-semibold", "text-white"], [1, "mt-4", "space-y-3"], ["class", "flex items-center gap-3", 4, "ngFor", "ngForOf"], ["class", "flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-slate-950/50 p-3", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-4", "rounded-[1.4rem]", "border", "border-white/10", "bg-slate-950/50", "p-4"], [1, "grid", "h-12", "w-12", "place-items-center", "rounded-2xl", "bg-gradient-to-br", "from-violet-500/20", "to-teal-400/20", "text-violet-300"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-medium", "text-white"], [1, "truncate", "text-sm", "text-slate-400"], [1, "text-right"], [1, "text-sm", "text-white"], [1, "text-xs", "text-slate-500"], [1, "rounded-[1.4rem]", "border", "border-dashed", "border-white/10", "bg-slate-950/40", "p-8", "text-center", "text-slate-500"], [1, "fa-regular", "fa-calendar-xmark", "text-4xl", "mb-2"], [1, "flex", "items-center", "gap-3"], [1, "grid", "h-9", "w-9", "place-items-center", "rounded-2xl", "bg-gradient-to-br", "from-violet-500", "to-teal-400", "text-white"], [1, "truncate", "text-sm", "text-white"], [1, "truncate", "text-xs", "text-slate-500"], [1, "flex", "items-center", "justify-between", "rounded-[1.25rem]", "border", "border-white/10", "bg-slate-950/50", "p-3"], [1, "text-sm", "font-medium", "text-white"], [1, "rounded-xl", "bg-violet-500/20", "px-2", "py-1", "text-xs", "text-violet-300"]],
        template: function DashboardPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Productos");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4)(6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "En inventario");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 2)(13, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Stock bajo");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 4)(16, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Requiere reposici\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 2)(23, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Citas hoy");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 4)(26, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Agenda del d\u00EDa");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 2)(33, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Ingresos");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 4)(36, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Estimado mensual");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "section", 15)(43, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, " Nueva cita ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, " Ir a inventario ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 20)(50, "div", 21)(51, "div", 22)(52, "div")(53, "p", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Agenda");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "h2", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Pr\u00F3ximas citas");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, DashboardPage_div_60_Template, 13, 5, "div", 27)(61, DashboardPage_div_61_Template, 4, 0, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 0)(63, "div", 21)(64, "h3", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Actividad reciente");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, DashboardPage_div_67_Template, 8, 4, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 21)(69, "h3", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Clientes frecuentes");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](72, DashboardPage_div_72_Template, 8, 3, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.inventory.totalCount());
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.inventory.lowStockCount());
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.appointments.todaysAppointments().length);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.formatMoney(ctx.revenue()));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.upcoming().length, " pendientes");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.upcoming());
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.upcoming().length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.activity());
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.frequentClients());
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
        encapsulation: 2
      });
    }
  }
  return DashboardPage;
})();

/***/ })

}]);
//# sourceMappingURL=910.js.map
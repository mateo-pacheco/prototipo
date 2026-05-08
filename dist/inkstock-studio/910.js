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
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/appointments.service */ 3718);
/* harmony import */ var _core_services_clients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/clients.service */ 8844);
/* harmony import */ var _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/inventory.service */ 1100);
/* harmony import */ var _core_services_sessions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/sessions.service */ 5017);
/* harmony import */ var _core_utils_misc_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utils/misc.util */ 3108);












function DashboardPage_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 29)(5, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 32)(10, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1.clienteNombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", item_r1.disenoNombre, " \u00B7 ", item_r1.tatuadorNombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1.hora);
  }
}
function DashboardPage_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35)(1, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "event_busy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "No hay citas programadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function DashboardPage_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 29)(5, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r2.subtitle);
  }
}
function DashboardPage_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 42)(1, "div")(2, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 44);
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
        icon: 'shopping_bag',
        title: 'Venta registrada',
        subtitle: 'Chompa Eclipse'
      }, {
        icon: 'brush',
        title: 'Diseño aprobado',
        subtitle: 'Serpiente Lunar'
      }, {
        icon: 'event',
        title: 'Cita confirmada',
        subtitle: 'Andrea Páez'
      }, {
        icon: 'inventory_2',
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
        decls: 79,
        vars: 9,
        consts: [[1, "space-y-6"], [1, "grid", "gap-4", "md:grid-cols-2", "xl:grid-cols-4"], [1, "rounded-[1.75rem]", "border", "border-white/10", "bg-white/5", "p-5"], [1, "text-sm", "text-slate-400"], [1, "mt-3", "flex", "items-end", "justify-between"], [1, "text-3xl", "font-semibold", "text-white"], [1, "grid", "h-11", "w-11", "place-items-center", "rounded-2xl", "bg-violet-500/20", "text-violet-300"], [1, "mt-2", "text-xs", "text-slate-500"], [1, "grid", "h-11", "w-11", "place-items-center", "rounded-2xl", "bg-amber-500/20", "text-amber-300"], [1, "grid", "h-11", "w-11", "place-items-center", "rounded-2xl", "bg-blue-500/20", "text-blue-300"], [1, "grid", "h-11", "w-11", "place-items-center", "rounded-2xl", "bg-emerald-500/20", "text-emerald-300"], [1, "grid", "gap-4", "md:grid-cols-2"], ["routerLink", "/appointments", 1, "inline-flex", "items-center", "justify-center", "gap-2", "rounded-2xl", "bg-violet-500", "px-4", "py-3", "text-sm", "font-semibold", "text-white", "transition", "hover:bg-violet-400"], ["routerLink", "/inventory/products", 1, "inline-flex", "items-center", "justify-center", "gap-2", "rounded-2xl", "border", "border-white/10", "bg-white/5", "px-4", "py-3", "text-sm", "font-semibold", "text-slate-200", "transition", "hover:bg-white/10"], [1, "grid", "gap-6", "xl:grid-cols-[1.35fr_0.65fr]"], [1, "rounded-[2rem]", "border", "border-white/10", "bg-white/5", "p-6"], [1, "flex", "items-center", "justify-between", "gap-4"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-slate-500"], [1, "mt-2", "text-2xl", "font-semibold", "text-white"], [1, "rounded-full", "border", "border-white/10", "bg-white/5", "px-3", "py-1", "text-xs", "text-slate-300"], [1, "mt-5", "space-y-3"], ["class", "flex items-center gap-4 rounded-[1.4rem] border border-white/10 bg-slate-950/50 p-4", 4, "ngFor", "ngForOf"], ["class", "rounded-[1.4rem] border border-dashed border-white/10 bg-slate-950/40 p-8 text-center text-slate-500", 4, "ngIf"], [1, "text-lg", "font-semibold", "text-white"], [1, "mt-4", "space-y-3"], ["class", "flex items-center gap-3", 4, "ngFor", "ngForOf"], ["class", "flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-slate-950/50 p-3", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-4", "rounded-[1.4rem]", "border", "border-white/10", "bg-slate-950/50", "p-4"], [1, "grid", "h-12", "w-12", "place-items-center", "rounded-2xl", "bg-gradient-to-br", "from-violet-500/20", "to-teal-400/20", "text-violet-300"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-medium", "text-white"], [1, "truncate", "text-sm", "text-slate-400"], [1, "text-right"], [1, "text-sm", "text-white"], [1, "text-xs", "text-slate-500"], [1, "rounded-[1.4rem]", "border", "border-dashed", "border-white/10", "bg-slate-950/40", "p-8", "text-center", "text-slate-500"], [1, "!mb-2", "!text-4xl"], [1, "flex", "items-center", "gap-3"], [1, "grid", "h-9", "w-9", "place-items-center", "rounded-2xl", "bg-gradient-to-br", "from-violet-500", "to-teal-400", "text-white"], [1, "!text-base"], [1, "truncate", "text-sm", "text-white"], [1, "truncate", "text-xs", "text-slate-500"], [1, "flex", "items-center", "justify-between", "rounded-[1.25rem]", "border", "border-white/10", "bg-slate-950/50", "p-3"], [1, "text-sm", "font-medium", "text-white"], [1, "rounded-xl", "bg-violet-500/20", "px-2", "py-1", "text-xs", "text-violet-300"]],
        template: function DashboardPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Productos");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4)(6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 6)(9, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "inventory_2");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "En inventario");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 2)(14, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Stock bajo");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 4)(17, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "span", 8)(20, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "warning");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Requiere reposici\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 2)(25, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Citas hoy");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 4)(28, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "span", 9)(31, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "event");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Agenda del d\u00EDa");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 2)(36, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Ingresos");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 4)(39, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span", 10)(42, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "payments");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Estimado mensual");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "section", 11)(47, "a", 12)(48, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "add");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, " Nueva cita ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "a", 13)(52, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "inventory_2");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, " Ir a inventario ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 14)(56, "div", 15)(57, "div", 16)(58, "div")(59, "p", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Agenda");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "h2", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Pr\u00F3ximas citas");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, DashboardPage_div_66_Template, 14, 5, "div", 21)(67, DashboardPage_div_67_Template, 5, 0, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 0)(69, "div", 15)(70, "h3", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Actividad reciente");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](73, DashboardPage_div_73_Template, 9, 3, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 15)(75, "h3", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Clientes frecuentes");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](78, DashboardPage_div_78_Template, 8, 3, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.inventory.totalCount());
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.inventory.lowStockCount());
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.appointments.todaysAppointments().length);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.formatMoney(ctx.revenue()));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
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
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon],
        encapsulation: 2
      });
    }
  }
  return DashboardPage;
})();

/***/ })

}]);
//# sourceMappingURL=910.js.map
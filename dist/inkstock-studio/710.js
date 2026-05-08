"use strict";
(self["webpackChunkinkstock_studio"] = self["webpackChunkinkstock_studio"] || []).push([[710],{

/***/ 7710:
/*!****************************************************!*\
  !*** ./src/app/features/sessions/sessions.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionsPage: () => (/* binding */ SessionsPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _core_services_sessions_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/sessions.service */ 5017);
/* harmony import */ var _shared_ui_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ui/page-header.component */ 3939);
/* harmony import */ var _shared_ui_stat_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/ui/stat-card.component */ 6111);
/* harmony import */ var _shared_ui_empty_state_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ui/empty-state.component */ 2929);
/* harmony import */ var _shared_ui_entity_detail_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/ui/entity-detail.dialog */ 4506);











const _c0 = (a0, a1) => ({
  "bg-blue-500/15 text-blue-300": a0,
  "bg-emerald-500/15 text-emerald-300": a1
});
function SessionsPage_div_7_article_1_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](m_r2);
  }
}
function SessionsPage_div_7_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "article", 11)(1, "div", 12)(2, "div")(3, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 16)(10, "div", 17)(11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Progreso");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 22)(18, "div", 23)(19, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Duraci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 23)(24, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Costo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, SessionsPage_div_7_article_1_span_29_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SessionsPage_div_7_article_1_Template_button_click_32_listener() {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.detail(item_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " Ver detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r3.clienteNombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r3.tatuadorNombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](11, _c0, item_r3.estado === "activa", item_r3.estado !== "activa"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r3.estado, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", item_r3.progreso, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", item_r3.progreso, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", item_r3.duracion, " min");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]("$" + item_r3.costo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r3.materiales);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r3.notas);
  }
}
function SessionsPage_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SessionsPage_div_7_article_1_Template, 34, 14, "article", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.sessions.sessions());
  }
}
function SessionsPage_app_empty_state_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-empty-state", 30);
  }
}
let SessionsPage = /*#__PURE__*/(() => {
  class SessionsPage {
    constructor() {
      this.sessions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_services_sessions_service__WEBPACK_IMPORTED_MODULE_0__.SessionsService);
      this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog);
      this.totalCost = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => this.sessions.sessions().reduce((sum, item) => sum + item.costo, 0));
      this.finalizedCount = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => this.sessions.sessions().filter(item => item.estado === 'finalizada').length);
    }
    detail(item) {
      this.dialog.open(_shared_ui_entity_detail_dialog__WEBPACK_IMPORTED_MODULE_4__.EntityDetailDialogComponent, {
        width: '500px',
        data: {
          title: item.clienteNombre,
          subtitle: `${item.tatuadorNombre} · ${item.estado}`,
          image: item.fotos[0],
          rows: [{
            label: 'Duración',
            value: `${item.duracion} minutos`
          }, {
            label: 'Progreso',
            value: `${item.progreso}%`
          }, {
            label: 'Costo',
            value: `$${item.costo}`
          }, {
            label: 'Materiales',
            value: item.materiales.join(', ')
          }, {
            label: 'Notas',
            value: item.notas
          }]
        }
      });
    }
    static {
      this.ɵfac = function SessionsPage_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SessionsPage)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: SessionsPage,
        selectors: [["ng-component"]],
        hostAttrs: [1, "block", "w-full"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
        decls: 9,
        vars: 5,
        consts: [[1, "space-y-6"], ["title", "Sesiones", "subtitle", "Seguimiento de sesiones de tatuaje en progreso."], [1, "grid", "gap-4", "md:grid-cols-3"], ["icon", "monitor_heart", "label", "Sesiones", "description", "Historial total", 3, "value"], ["icon", "play_circle", "label", "Activas", "description", "En ejecuci\u00F3n", "badgeBackground", "linear-gradient(135deg, #0ea5e9, #22c55e)", 3, "value"], ["icon", "payments", "label", "Costo acumulado", "description", "Total facturado", "badgeBackground", "linear-gradient(135deg, #7c3aed, #ec4899)", 3, "value"], [1, "rounded-[2rem]", "border", "border-white/10", "bg-white/5", "p-6"], ["class", "grid gap-4 xl:grid-cols-2", 4, "ngIf"], ["icon", "monitor_heart", "title", "Sin sesiones", "message", "Crea sesiones desde las citas o el historial.", 4, "ngIf"], [1, "grid", "gap-4", "xl:grid-cols-2"], ["class", "rounded-[1.7rem] border border-white/10 bg-slate-950/40 p-5", 4, "ngFor", "ngForOf"], [1, "rounded-[1.7rem]", "border", "border-white/10", "bg-slate-950/40", "p-5"], [1, "flex", "items-start", "justify-between", "gap-4"], [1, "text-lg", "font-semibold", "text-white"], [1, "text-sm", "text-slate-500"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-medium", 3, "ngClass"], [1, "mt-4"], [1, "flex", "items-center", "justify-between", "text-sm"], [1, "text-slate-500"], [1, "font-medium", "text-white"], [1, "mt-2", "h-2", "overflow-hidden", "rounded-full", "bg-white/10"], [1, "h-full", "rounded-full", "bg-gradient-to-r", "from-violet-500", "to-teal-400"], [1, "mt-4", "grid", "grid-cols-2", "gap-3", "text-sm"], [1, "rounded-2xl", "border", "border-white/10", "bg-white/5", "p-3"], [1, "text-xs", "text-slate-500"], [1, "mt-4", "flex", "flex-wrap", "gap-2"], ["class", "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300", 4, "ngFor", "ngForOf"], [1, "mt-4", "line-clamp-2", "text-sm", "text-slate-400"], ["type", "button", 1, "mt-5", "inline-flex", "h-11", "w-full", "items-center", "justify-center", "rounded-2xl", "border", "border-white/10", "bg-white/5", "text-sm", "font-medium", "text-slate-200", "transition", "hover:bg-white/10", 3, "click"], [1, "rounded-full", "border", "border-white/10", "bg-white/5", "px-3", "py-1", "text-xs", "text-slate-300"], ["icon", "monitor_heart", "title", "Sin sesiones", "message", "Crea sesiones desde las citas o el historial."]],
        template: function SessionsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-page-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "section", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-stat-card", 3)(4, "app-stat-card", 4)(5, "app-stat-card", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SessionsPage_div_7_Template, 2, 1, "div", 7)(8, SessionsPage_app_empty_state_8_Template, 1, 0, "app-empty-state", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.sessions.sessions().length);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.sessions.activeCount());
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "$" + ctx.totalCost());
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sessions.sessions().length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sessions.sessions().length === 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _shared_ui_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, _shared_ui_stat_card_component__WEBPACK_IMPORTED_MODULE_2__.StatCardComponent, _shared_ui_empty_state_component__WEBPACK_IMPORTED_MODULE_3__.EmptyStateComponent],
        encapsulation: 2
      });
    }
  }
  return SessionsPage;
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
//# sourceMappingURL=710.js.map
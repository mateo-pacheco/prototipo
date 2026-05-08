"use strict";
(self["webpackChunkinkstock_studio"] = self["webpackChunkinkstock_studio"] || []).push([[850],{

/***/ 5850:
/*!**************************************************!*\
  !*** ./src/app/features/clients/clients.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientsPage: () => (/* binding */ ClientsPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _core_services_clients_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/clients.service */ 8844);
/* harmony import */ var _shared_ui_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ui/page-header.component */ 3939);
/* harmony import */ var _shared_ui_stat_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/ui/stat-card.component */ 6111);
/* harmony import */ var _shared_ui_empty_state_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ui/empty-state.component */ 2929);
/* harmony import */ var _shared_ui_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/ui/confirm-dialog.component */ 3915);
/* harmony import */ var _shared_ui_entity_form_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/ui/entity-form.dialog */ 1383);
/* harmony import */ var _shared_ui_entity_detail_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/ui/entity-detail.dialog */ 4506);
/* harmony import */ var _shared_ui_dialog_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/ui/dialog-config */ 8460);
/* harmony import */ var _shared_ui_app_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/ui/app-dialog.service */ 4062);














function ClientsPage_article_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "article", 20)(1, "div", 21)(2, "div", 22)(3, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 25)(8, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ClientsPage_article_26_Template_button_click_8_listener() {
      const client_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.detail(client_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ClientsPage_article_26_Template_button_click_10_listener() {
      const client_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.openForm(client_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ClientsPage_article_26_Template_button_click_12_listener() {
      const client_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.remove(client_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 31)(15, "div", 32)(16, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Citas");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 32)(21, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Tatuajes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const client_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](client_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](client_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](client_r2.citas);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](client_r2.tatuajesRealizados);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](client_r2.observaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](client_r2.telefono);
  }
}
function ClientsPage_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-empty-state", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
let ClientsPage = /*#__PURE__*/(() => {
  class ClientsPage {
    constructor() {
      this.clients = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_core_services_clients_service__WEBPACK_IMPORTED_MODULE_0__.ClientsService);
      this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_shared_ui_app_dialog_service__WEBPACK_IMPORTED_MODULE_8__.AppDialogService);
      this.snack = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar);
      this.query = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)('');
      this.sortBy = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)('nombre');
      this.filtered = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.computed)(() => {
        const q = this.query().toLowerCase();
        return this.clients.clients().filter(item => !q || `${item.nombre} ${item.email} ${item.telefono}`.toLowerCase().includes(q));
      });
      this.sorted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.computed)(() => {
        const sortedBy = this.sortBy();
        return [...this.filtered()].sort((a, b) => {
          if (sortedBy === 'citas') return b.citas - a.citas;
          if (sortedBy === 'tatuajes') return b.tatuajesRealizados - a.tatuajesRealizados;
          return a.nombre.localeCompare(b.nombre);
        });
      });
      this.contacts = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.computed)(() => this.clients.clients().filter(item => !!item.email && !!item.telefono).length);
    }
    openForm(client) {
      const ref = this.dialog.open(_shared_ui_entity_form_dialog__WEBPACK_IMPORTED_MODULE_5__.EntityFormDialogComponent, {
        ...(0,_shared_ui_dialog_config__WEBPACK_IMPORTED_MODULE_7__.buildResponsiveDialogConfig)('600px'),
        data: {
          title: client ? 'Editar cliente' : 'Nuevo cliente',
          subtitle: 'Gestiona los datos del cliente.',
          value: client ?? undefined,
          fields: [{
            key: 'nombre',
            label: 'Nombre',
            type: 'text',
            required: true
          }, {
            key: 'telefono',
            label: 'Teléfono',
            type: 'text',
            required: true
          }, {
            key: 'email',
            label: 'Email',
            type: 'text',
            required: true
          }, {
            key: 'observaciones',
            label: 'Observaciones',
            type: 'textarea',
            required: false
          }]
        }
      });
      ref.afterClosed().subscribe(value => {
        if (!value) return;
        this.clients.save({
          ...client,
          ...value
        });
        this.snack.open(client ? 'Cliente actualizado' : 'Cliente creado', 'Cerrar');
      });
    }
    detail(client) {
      this.dialog.open(_shared_ui_entity_detail_dialog__WEBPACK_IMPORTED_MODULE_6__.EntityDetailDialogComponent, {
        ...(0,_shared_ui_dialog_config__WEBPACK_IMPORTED_MODULE_7__.buildResponsiveDialogConfig)('500px'),
        data: {
          title: client.nombre,
          subtitle: client.email,
          rows: [{
            label: 'Teléfono',
            value: client.telefono
          }, {
            label: 'Citas',
            value: client.citas.toString()
          }, {
            label: 'Tatuajes realizados',
            value: client.tatuajesRealizados.toString()
          }, {
            label: 'Historial',
            value: client.historial
          }, {
            label: 'Observaciones',
            value: client.observaciones
          }]
        }
      });
    }
    remove(client) {
      this.dialog.open(_shared_ui_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmDialogComponent, {
        ...(0,_shared_ui_dialog_config__WEBPACK_IMPORTED_MODULE_7__.buildResponsiveDialogConfig)('400px'),
        data: {
          title: 'Eliminar cliente',
          message: `¿Eliminar a ${client.nombre}?`,
          confirmLabel: 'Eliminar',
          tone: 'danger'
        }
      }).afterClosed().subscribe(confirmed => {
        if (!confirmed) return;
        this.clients.remove(client.id);
        this.snack.open('Cliente eliminado', 'Cerrar');
      });
    }
    static {
      this.ɵfac = function ClientsPage_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ClientsPage)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: ClientsPage,
        selectors: [["ng-component"]],
        hostAttrs: [1, "block", "w-full"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
        decls: 28,
        vars: 7,
        consts: [[1, "space-y-6"], ["title", "Clientes", "subtitle", "Gesti\u00F3n de clientes con historial, citas y observaciones."], ["actions", "", "type", "button", 1, "inline-flex", "h-11", "items-center", "gap-2", "rounded-2xl", "bg-violet-500", "px-4", "text-sm", "font-semibold", "text-white", "transition", "hover:bg-violet-400", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "grid", "gap-4", "md:grid-cols-3"], ["icon", "fa-solid fa-users", "label", "Clientes", "description", "Base activa", 3, "value"], ["icon", "fa-solid fa-clock", "label", "Tatuajes realizados", "description", "Historial acumulado", "badgeBackground", "linear-gradient(135deg, #0ea5e9, #22c55e)", 3, "value"], ["icon", "fa-solid fa-phone", "label", "Contacto activo", "description", "Email y tel\u00E9fono disponibles", "badgeBackground", "linear-gradient(135deg, #7c3aed, #ec4899)", 3, "value"], [1, "rounded-[2rem]", "border", "border-white/10", "bg-white/5", "p-6"], [1, "grid", "gap-4", "xl:grid-cols-[1fr_220px]"], [1, "block"], [1, "mb-2", "block", "text-sm", "font-medium", "text-slate-200"], ["placeholder", "Nombre, email o tel\u00E9fono", 1, "h-11", "w-full", "rounded-2xl", "border", "border-white/10", "bg-slate-950/60", "px-4", "text-sm", "text-white", "outline-none", "transition", "placeholder:text-slate-500", "focus:border-teal-400/60", "focus:ring-4", "focus:ring-teal-400/10", 3, "input", "value"], [1, "h-11", "w-full", "rounded-2xl", "border", "border-white/10", "bg-slate-950/60", "px-4", "text-sm", "text-white", "outline-none", "transition", "focus:border-teal-400/60", "focus:ring-4", "focus:ring-teal-400/10", 3, "change", "value"], ["value", "nombre", 1, "bg-slate-950"], ["value", "citas", 1, "bg-slate-950"], ["value", "tatuajes", 1, "bg-slate-950"], [1, "mt-6", "grid", "gap-4", "md:grid-cols-2", "xl:grid-cols-3"], ["class", "group rounded-[1.7rem] border border-white/10 bg-slate-950/40 p-5 transition hover:-translate-y-1 hover:border-white/20", 4, "ngFor", "ngForOf"], ["class", "mt-6", 4, "ngIf"], [1, "group", "rounded-[1.7rem]", "border", "border-white/10", "bg-slate-950/40", "p-5", "transition", "hover:-translate-y-1", "hover:border-white/20"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-lg", "font-semibold", "text-white"], [1, "truncate", "text-sm", "text-slate-500"], [1, "flex", "gap-2"], ["type", "button", 1, "inline-flex", "h-9", "w-9", "items-center", "justify-center", "rounded-2xl", "border", "border-white/10", "bg-white/5", "text-slate-300", "transition", "hover:bg-white/10", 3, "click"], [1, "fa-solid", "fa-eye", "text-lg"], [1, "fa-solid", "fa-pen", "text-lg"], ["type", "button", 1, "inline-flex", "h-9", "w-9", "items-center", "justify-center", "rounded-2xl", "border", "border-white/10", "bg-white/5", "text-red-300", "transition", "hover:bg-red-500/10", 3, "click"], [1, "fa-solid", "fa-trash", "text-lg"], [1, "mt-4", "grid", "grid-cols-2", "gap-3"], [1, "rounded-2xl", "border", "border-white/10", "bg-white/5", "p-3", "text-center"], [1, "text-2xl", "font-bold", "text-white"], [1, "text-xs", "text-slate-500"], [1, "mt-4", "line-clamp-2", "text-sm", "text-slate-400"], [1, "mt-4", "flex", "items-center", "gap-2", "text-xs", "text-slate-500"], [1, "fa-solid", "fa-phone", "text-base"], [1, "truncate"], [1, "mt-6"], ["icon", "fa-solid fa-users", "title", "Sin clientes", "message", "No se encontraron coincidencias."]],
        template: function ClientsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "app-page-header", 1)(2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ClientsPage_Template_button_click_2_listener() {
              return ctx.openForm();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Nuevo cliente ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "section", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "app-stat-card", 5)(7, "app-stat-card", 6)(8, "app-stat-card", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "label", 10)(12, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Buscar cliente");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("input", function ClientsPage_Template_input_input_14_listener($event) {
              return ctx.query.set($event.target.value);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "label", 10)(16, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Ordenar por");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "select", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ClientsPage_Template_select_change_18_listener($event) {
              return ctx.sortBy.set($event.target.value);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Nombre");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "option", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Citas");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "option", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Tatuajes");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, ClientsPage_article_26_Template, 31, 6, "article", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, ClientsPage_div_27_Template, 2, 0, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.clients.clients().length);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.clients.totalHistory());
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.contacts());
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.query());
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.sortBy());
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.sorted());
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.sorted().length === 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_ui_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, _shared_ui_stat_card_component__WEBPACK_IMPORTED_MODULE_2__.StatCardComponent, _shared_ui_empty_state_component__WEBPACK_IMPORTED_MODULE_3__.EmptyStateComponent],
        encapsulation: 2
      });
    }
  }
  return ClientsPage;
})();

/***/ })

}]);
//# sourceMappingURL=850.js.map
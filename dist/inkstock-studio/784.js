"use strict";
(self["webpackChunkinkstock_studio"] = self["webpackChunkinkstock_studio"] || []).push([[784],{

/***/ 3784:
/*!************************************************************!*\
  !*** ./src/app/features/appointments/appointments.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentsPage: () => (/* binding */ AppointmentsPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 854);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/appointments.service */ 3718);
/* harmony import */ var _core_services_clients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/clients.service */ 8844);
/* harmony import */ var _core_services_artists_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/artists.service */ 6472);
/* harmony import */ var _core_services_tattoo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/tattoo.service */ 7409);
/* harmony import */ var _shared_ui_page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/ui/page-header.component */ 3939);
/* harmony import */ var _shared_ui_stat_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/ui/stat-card.component */ 6111);
/* harmony import */ var _shared_ui_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/ui/confirm-dialog.component */ 3915);
/* harmony import */ var _shared_ui_entity_form_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/ui/entity-form.dialog */ 1383);


















function AppointmentsPage_section_14_article_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "article", 17)(1, "div", 18)(2, "div", 19)(3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppointmentsPage_section_14_article_7_Template_button_click_11_listener($event) {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      ctx_r2.remove(item_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 26)(15, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppointmentsPage_section_14_article_7_Template_button_click_15_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.edit(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppointmentsPage_section_14_article_7_Template_button_click_17_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.advance(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r5.clienteNombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r5.disenoNombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", item_r5.fecha, " \u00B7 ", item_r5.hora, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r5.tatuadorNombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r5.estado === "finalizada" ? "Cerrar" : "Avanzar", " ");
  }
}
function AppointmentsPage_section_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 11)(1, "div", 12)(2, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("cdkDropListDropped", function AppointmentsPage_section_14_Template_div_cdkDropListDropped_6_listener($event) {
      const lane_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.drop($event, lane_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AppointmentsPage_section_14_article_7_Template, 19, 6, "article", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const lane_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](lane_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.grouped()[lane_r2].length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cdkDropListData", ctx_r2.grouped()[lane_r2])("cdkDropListConnectedTo", ctx_r2.laneIds);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.grouped()[lane_r2]);
  }
}
let AppointmentsPage = /*#__PURE__*/(() => {
  class AppointmentsPage {
    constructor() {
      this.appointments = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_core_services_appointments_service__WEBPACK_IMPORTED_MODULE_0__.AppointmentsService);
      this.clients = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_core_services_clients_service__WEBPACK_IMPORTED_MODULE_1__.ClientsService);
      this.artists = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_core_services_artists_service__WEBPACK_IMPORTED_MODULE_2__.ArtistsService);
      this.tattoos = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_core_services_tattoo_service__WEBPACK_IMPORTED_MODULE_3__.TattooService);
      this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog);
      this.snack = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar);
      this.lanes = ['pendiente', 'confirmada', 'cancelada', 'finalizada'];
      this.laneIds = ['pendiente', 'confirmada', 'cancelada', 'finalizada'];
      this.grouped = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.computed)(() => this.lanes.reduce((acc, lane) => {
        acc[lane] = this.appointments.appointments().filter(item => item.estado === lane);
        return acc;
      }, {}));
      this.confirmedCount = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.computed)(() => this.appointments.appointments().filter(item => item.estado === 'confirmada').length);
    }
    drop(event, lane) {
      if (event.previousContainer === event.container) {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__.moveItemInArray)(event.container.data, event.previousIndex, event.currentIndex);
        return;
      }
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__.transferArrayItem)(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      const item = event.container.data[event.currentIndex];
      this.appointments.save({
        ...item,
        estado: lane
      });
      this.snack.open(`Cita movida a ${lane}`, 'Cerrar');
    }
    advance(item) {
      const order = ['pendiente', 'confirmada', 'finalizada'];
      const index = order.indexOf(item.estado);
      const next = order[Math.min(index + 1, order.length - 1)];
      this.appointments.save({
        ...item,
        estado: next
      });
    }
    openForm() {
      const clientOptions = this.clients.clients().map(item => ({
        label: item.nombre,
        value: item.id
      }));
      const artistOptions = this.artists.artists().map(item => ({
        label: item.nombre,
        value: item.id
      }));
      const designOptions = this.tattoos.tattoos().map(item => ({
        label: item.nombre,
        value: item.id
      }));
      const ref = this.dialog.open(_shared_ui_entity_form_dialog__WEBPACK_IMPORTED_MODULE_7__.EntityFormDialogComponent, {
        width: '600px',
        data: {
          title: 'Nueva cita',
          subtitle: 'Selecciona cliente, tatuador y diseño.',
          fields: [{
            key: 'clienteId',
            label: 'Cliente',
            type: 'select',
            required: true,
            options: clientOptions
          }, {
            key: 'tatuadorId',
            label: 'Tatuador',
            type: 'select',
            required: true,
            options: artistOptions
          }, {
            key: 'disenoId',
            label: 'Diseño',
            type: 'select',
            required: true,
            options: designOptions
          }, {
            key: 'fecha',
            label: 'Fecha',
            type: 'date',
            required: true
          }, {
            key: 'hora',
            label: 'Hora',
            type: 'time',
            required: true
          }, {
            key: 'estado',
            label: 'Estado',
            type: 'select',
            required: true,
            options: [{
              label: 'Pendiente',
              value: 'pendiente'
            }, {
              label: 'Confirmada',
              value: 'confirmada'
            }, {
              label: 'Cancelada',
              value: 'cancelada'
            }, {
              label: 'Finalizada',
              value: 'finalizada'
            }]
          }, {
            key: 'notas',
            label: 'Notas',
            type: 'textarea',
            required: false
          }]
        }
      });
      ref.afterClosed().subscribe(value => {
        if (!value) return;
        this.appointments.save({
          ...value,
          clienteNombre: this.clients.getById(value.clienteId)?.nombre ?? value.clienteId,
          tatuadorNombre: this.artists.getById(value.tatuadorId)?.nombre ?? value.tatuadorId,
          disenoNombre: this.tattoos.getById(value.disenoId)?.nombre ?? value.disenoId
        });
        this.snack.open('Cita creada', 'Cerrar');
      });
    }
    edit(item) {
      const clientOptions = this.clients.clients().map(c => ({
        label: c.nombre,
        value: c.id
      }));
      const artistOptions = this.artists.artists().map(a => ({
        label: a.nombre,
        value: a.id
      }));
      const designOptions = this.tattoos.tattoos().map(t => ({
        label: t.nombre,
        value: t.id
      }));
      const ref = this.dialog.open(_shared_ui_entity_form_dialog__WEBPACK_IMPORTED_MODULE_7__.EntityFormDialogComponent, {
        width: '600px',
        data: {
          title: 'Editar cita',
          subtitle: 'Actualiza los datos de la cita.',
          value: item,
          fields: [{
            key: 'clienteId',
            label: 'Cliente',
            type: 'select',
            required: true,
            options: clientOptions
          }, {
            key: 'tatuadorId',
            label: 'Tatuador',
            type: 'select',
            required: true,
            options: artistOptions
          }, {
            key: 'disenoId',
            label: 'Diseño',
            type: 'select',
            required: true,
            options: designOptions
          }, {
            key: 'fecha',
            label: 'Fecha',
            type: 'date',
            required: true
          }, {
            key: 'hora',
            label: 'Hora',
            type: 'time',
            required: true
          }, {
            key: 'estado',
            label: 'Estado',
            type: 'select',
            required: true,
            options: [{
              label: 'Pendiente',
              value: 'pendiente'
            }, {
              label: 'Confirmada',
              value: 'confirmada'
            }, {
              label: 'Cancelada',
              value: 'cancelada'
            }, {
              label: 'Finalizada',
              value: 'finalizada'
            }]
          }, {
            key: 'notas',
            label: 'Notas',
            type: 'textarea',
            required: false
          }]
        }
      });
      ref.afterClosed().subscribe(value => {
        if (!value) return;
        this.appointments.save({
          ...item,
          ...value,
          clienteNombre: this.clients.getById(value.clienteId)?.nombre ?? item.clienteNombre,
          tatuadorNombre: this.artists.getById(value.tatuadorId)?.nombre ?? item.tatuadorNombre,
          disenoNombre: this.tattoos.getById(value.disenoId)?.nombre ?? item.disenoNombre
        });
        this.snack.open('Cita actualizada', 'Cerrar');
      });
    }
    remove(item) {
      this.dialog.open(_shared_ui_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialogComponent, {
        width: '400px',
        data: {
          title: 'Eliminar cita',
          message: `¿Eliminar la cita de ${item.clienteNombre}?`,
          confirmLabel: 'Eliminar',
          tone: 'danger'
        }
      }).afterClosed().subscribe(confirmed => {
        if (!confirmed) return;
        this.appointments.remove(item.id);
        this.snack.open('Cita eliminada', 'Cerrar');
      });
    }
    static {
      this.ɵfac = function AppointmentsPage_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AppointmentsPage)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: AppointmentsPage,
        selectors: [["ng-component"]],
        hostAttrs: [1, "block", "w-full"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
        decls: 15,
        vars: 4,
        consts: [[1, "space-y-6"], ["title", "Citas", "subtitle", "Gesti\u00F3n de citas con tablero visual."], ["actions", "", "type", "button", 1, "inline-flex", "h-11", "items-center", "gap-2", "rounded-2xl", "bg-violet-500", "px-4", "text-sm", "font-semibold", "text-white", "transition", "hover:bg-violet-400", 3, "click"], [1, "grid", "gap-4", "md:grid-cols-3"], ["icon", "event", "label", "Citas", "description", "Total registradas", 3, "value"], ["icon", "pending", "label", "Pendientes", "description", "Requieren confirmaci\u00F3n", "badgeBackground", "linear-gradient(135deg, #f59e0b, #ef4444)", 3, "value"], ["icon", "verified", "label", "Confirmadas", "description", "Listas para atender", "badgeBackground", "linear-gradient(135deg, #22c55e, #14b8a6)", 3, "value"], [1, "rounded-[2rem]", "border", "border-white/10", "bg-white/5", "p-6"], [1, "mb-4", "text-sm", "text-slate-400"], [1, "grid", "gap-4", "xl:grid-cols-4"], ["class", "rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-4", 4, "ngFor", "ngForOf"], [1, "rounded-[1.75rem]", "border", "border-white/10", "bg-slate-950/40", "p-4"], [1, "mb-4", "flex", "items-center", "justify-between"], [1, "text-sm", "font-semibold", "uppercase", "tracking-[0.22em]", "text-slate-400"], [1, "rounded-full", "border", "border-white/10", "bg-white/5", "px-3", "py-1", "text-xs", "text-slate-300"], ["cdkDropList", "", 1, "min-h-[220px]", "space-y-3", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", "", "class", "cursor-move rounded-[1.35rem] border border-white/10 bg-white/5 p-4 transition hover:border-white/20", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "cursor-move", "rounded-[1.35rem]", "border", "border-white/10", "bg-white/5", "p-4", "transition", "hover:border-white/20"], [1, "flex", "items-start", "justify-between", "gap-2"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-medium", "text-white"], [1, "truncate", "text-sm", "text-slate-400"], [1, "mt-2", "text-xs", "text-slate-500"], [1, "text-xs", "text-slate-500"], ["type", "button", 1, "inline-flex", "h-8", "w-8", "items-center", "justify-center", "rounded-xl", "border", "border-white/10", "bg-white/5", "text-red-300", "transition", "hover:bg-red-500/10", 3, "click"], [1, "!text-base"], [1, "mt-3", "flex", "gap-2"], ["type", "button", 1, "inline-flex", "flex-1", "items-center", "justify-center", "rounded-2xl", "border", "border-white/10", "bg-white/5", "px-3", "py-2", "text-xs", "font-medium", "text-slate-200", "transition", "hover:bg-white/10", 3, "click"], ["type", "button", 1, "inline-flex", "flex-1", "items-center", "justify-center", "rounded-2xl", "bg-violet-500", "px-3", "py-2", "text-xs", "font-semibold", "text-white", "transition", "hover:bg-violet-400", 3, "click"]],
        template: function AppointmentsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "app-page-header", 1)(2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppointmentsPage_Template_button_click_2_listener() {
              return ctx.openForm();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "add");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Nueva cita ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "section", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "app-stat-card", 4)(8, "app-stat-card", 5)(9, "app-stat-card", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 7)(11, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Arrastra las tarjetas entre estados para actualizar.");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, AppointmentsPage_section_14_Template, 8, 5, "section", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.appointments.appointments().length);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.appointments.pendingCount());
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.confirmedCount());
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.lanes);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__.DragDropModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__.CdkDrag, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _shared_ui_page_header_component__WEBPACK_IMPORTED_MODULE_4__.PageHeaderComponent, _shared_ui_stat_card_component__WEBPACK_IMPORTED_MODULE_5__.StatCardComponent],
        encapsulation: 2
      });
    }
  }
  return AppointmentsPage;
})();

/***/ })

}]);
//# sourceMappingURL=784.js.map
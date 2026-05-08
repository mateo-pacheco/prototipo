"use strict";
(self["webpackChunkinkstock_studio"] = self["webpackChunkinkstock_studio"] || []).push([[231],{

/***/ 5198:
/*!**************************************************!*\
  !*** ./src/app/features/tattoos/tattoos.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TattoosPage: () => (/* binding */ TattoosPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _core_services_tattoo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/tattoo.service */ 7409);
/* harmony import */ var _shared_ui_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ui/page-header.component */ 3939);
/* harmony import */ var _shared_ui_stat_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/ui/stat-card.component */ 6111);
/* harmony import */ var _shared_ui_empty_state_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ui/empty-state.component */ 2929);
/* harmony import */ var _shared_ui_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/ui/confirm-dialog.component */ 3915);
/* harmony import */ var _shared_ui_entity_form_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/ui/entity-form.dialog */ 1383);
/* harmony import */ var _shared_ui_entity_detail_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/ui/entity-detail.dialog */ 4506);
/* harmony import */ var _shared_ui_dialog_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/ui/dialog-config */ 8460);
/* harmony import */ var _shared_ui_app_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/ui/app-dialog.service */ 4062);
/* harmony import */ var _core_utils_misc_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/utils/misc.util */ 3108);















function TattoosPage_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r1);
  }
}
function TattoosPage_article_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "article", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 22)(3, "div", 23)(4, "div", 24)(5, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 29)(14, "div", 30)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 33)(24, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TattoosPage_article_23_Template_button_click_24_listener() {
      const tattoo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.detail(tattoo_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Ver");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TattoosPage_article_23_Template_button_click_26_listener() {
      const tattoo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.openForm(tattoo_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TattoosPage_article_23_Template_button_click_28_listener() {
      const tattoo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.remove(tattoo_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const tattoo_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", tattoo_r3.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("alt", tattoo_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](tattoo_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", tattoo_r3.estilo, " \u00B7 ", tattoo_r3.artistaAsignado, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](tattoo_r3.dificultad);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](tattoo_r3.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](tattoo_r3.tamano);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](tattoo_r3.duracionEstimado);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.formatMoney(tattoo_r3.precioEstimado));
  }
}
function TattoosPage_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-empty-state", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
let TattoosPage = /*#__PURE__*/(() => {
  class TattoosPage {
    constructor() {
      this.tattoos = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_core_services_tattoo_service__WEBPACK_IMPORTED_MODULE_0__.TattooService);
      this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_shared_ui_app_dialog_service__WEBPACK_IMPORTED_MODULE_8__.AppDialogService);
      this.snack = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar);
      this.query = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.signal)('');
      this.style = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.signal)('');
      this.formatMoney = _core_utils_misc_util__WEBPACK_IMPORTED_MODULE_9__.formatMoney;
      this.filtered = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.computed)(() => {
        const q = this.query().toLowerCase();
        return this.tattoos.tattoos().filter(item => {
          const matchesQuery = !q || `${item.nombre} ${item.artistaAsignado}`.toLowerCase().includes(q);
          const matchesStyle = !this.style() || item.estilo === this.style();
          return matchesQuery && matchesStyle;
        });
      });
      this.avgPrice = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.computed)(() => {
        const items = this.tattoos.tattoos();
        return items.length ? items.reduce((sum, item) => sum + item.precioEstimado, 0) / items.length : 0;
      });
    }
    openForm(tattoo) {
      const ref = this.dialog.open(_shared_ui_entity_form_dialog__WEBPACK_IMPORTED_MODULE_5__.EntityFormDialogComponent, {
        ...(0,_shared_ui_dialog_config__WEBPACK_IMPORTED_MODULE_7__.buildResponsiveDialogConfig)('600px'),
        data: {
          title: tattoo ? 'Editar diseño' : 'Nuevo diseño',
          subtitle: 'Datos del diseño.',
          value: tattoo ?? undefined,
          fields: [{
            key: 'nombre',
            label: 'Nombre',
            type: 'text',
            required: true
          }, {
            key: 'estilo',
            label: 'Estilo',
            type: 'select',
            required: true,
            options: [{
              label: 'Blackwork',
              value: 'Blackwork'
            }, {
              label: 'Traditional',
              value: 'Traditional'
            }, {
              label: 'Realismo',
              value: 'Realismo'
            }, {
              label: 'Fine Line',
              value: 'Fine Line'
            }, {
              label: 'Japanese',
              value: 'Japanese'
            }, {
              label: 'Neo Traditional',
              value: 'Neo Traditional'
            }, {
              label: 'Lettering',
              value: 'Lettering'
            }]
          }, {
            key: 'tamano',
            label: 'Tamaño',
            type: 'text',
            required: true
          }, {
            key: 'dificultad',
            label: 'Dificultad',
            type: 'select',
            required: true,
            options: [{
              label: 'Baja',
              value: 'Baja'
            }, {
              label: 'Media',
              value: 'Media'
            }, {
              label: 'Alta',
              value: 'Alta'
            }, {
              label: 'Experto',
              value: 'Experto'
            }]
          }, {
            key: 'precioEstimado',
            label: 'Precio',
            type: 'number',
            required: true
          }, {
            key: 'duracionEstimado',
            label: 'Duración',
            type: 'text',
            required: true
          }, {
            key: 'artistaAsignado',
            label: 'Artista',
            type: 'text',
            required: true
          }, {
            key: 'descripcion',
            label: 'Descripción',
            type: 'textarea',
            required: false
          }]
        }
      });
      ref.afterClosed().subscribe(value => {
        if (!value) return;
        this.tattoos.save({
          ...tattoo,
          ...value
        });
        this.snack.open(tattoo ? 'Diseño actualizado' : 'Diseño creado', 'Cerrar');
      });
    }
    detail(tattoo) {
      this.dialog.open(_shared_ui_entity_detail_dialog__WEBPACK_IMPORTED_MODULE_6__.EntityDetailDialogComponent, {
        ...(0,_shared_ui_dialog_config__WEBPACK_IMPORTED_MODULE_7__.buildResponsiveDialogConfig)('500px'),
        data: {
          title: tattoo.nombre,
          subtitle: tattoo.estilo,
          image: tattoo.images[0],
          rows: [{
            label: 'Tamaño',
            value: tattoo.tamano
          }, {
            label: 'Dificultad',
            value: tattoo.dificultad
          }, {
            label: 'Precio',
            value: (0,_core_utils_misc_util__WEBPACK_IMPORTED_MODULE_9__.formatMoney)(tattoo.precioEstimado)
          }, {
            label: 'Duración',
            value: tattoo.duracionEstimado
          }, {
            label: 'Artista',
            value: tattoo.artistaAsignado
          }, {
            label: 'Actualizado',
            value: (0,_core_utils_misc_util__WEBPACK_IMPORTED_MODULE_9__.formatDateTime)(tattoo.updatedAt)
          }]
        }
      });
    }
    remove(tattoo) {
      this.dialog.open(_shared_ui_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmDialogComponent, {
        ...(0,_shared_ui_dialog_config__WEBPACK_IMPORTED_MODULE_7__.buildResponsiveDialogConfig)('400px'),
        data: {
          title: 'Eliminar diseño',
          message: `¿Eliminar ${tattoo.nombre}?`,
          confirmLabel: 'Eliminar',
          tone: 'danger'
        }
      }).afterClosed().subscribe(confirmed => {
        if (!confirmed) return;
        this.tattoos.remove(tattoo.id);
        this.snack.open('Diseño eliminado', 'Cerrar');
      });
    }
    static {
      this.ɵfac = function TattoosPage_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TattoosPage)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: TattoosPage,
        selectors: [["ng-component"]],
        hostAttrs: [1, "block", "w-full"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
        decls: 25,
        vars: 8,
        consts: [[1, "space-y-6"], ["title", "Cat\u00E1logo de tatuajes", "subtitle", "Dise\u00F1os disponibles con precio, estilo y dificultad."], ["actions", "", "type", "button", 1, "inline-flex", "h-11", "items-center", "gap-2", "rounded-2xl", "bg-violet-500", "px-4", "text-sm", "font-semibold", "text-white", "transition", "hover:bg-violet-400", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "grid", "gap-4", "md:grid-cols-3"], ["icon", "fa-solid fa-paintbrush", "label", "Dise\u00F1os", "description", "Cat\u00E1logo disponible", 3, "value"], ["icon", "fa-solid fa-palette", "label", "Estilos", "description", "Variedad creativa", "badgeBackground", "linear-gradient(135deg, #0ea5e9, #14b8a6)", 3, "value"], ["icon", "fa-solid fa-clock", "label", "Precio medio", "description", "Estimado por dise\u00F1o", "badgeBackground", "linear-gradient(135deg, #ec4899, #7c3aed)", 3, "value"], [1, "rounded-[2rem]", "border", "border-white/10", "bg-white/5", "p-6"], [1, "grid", "gap-4", "xl:grid-cols-[1fr_220px]"], [1, "block"], [1, "mb-2", "block", "text-sm", "font-medium", "text-slate-200"], ["placeholder", "Nombre o artista", 1, "h-11", "w-full", "rounded-2xl", "border", "border-white/10", "bg-slate-950/60", "px-4", "text-sm", "text-white", "outline-none", "transition", "placeholder:text-slate-500", "focus:border-teal-400/60", "focus:ring-4", "focus:ring-teal-400/10", 3, "input", "value"], [1, "h-11", "w-full", "rounded-2xl", "border", "border-white/10", "bg-slate-950/60", "px-4", "text-sm", "text-white", "outline-none", "transition", "focus:border-teal-400/60", "focus:ring-4", "focus:ring-teal-400/10", 3, "change", "value"], ["value", "", 1, "bg-slate-950"], ["class", "bg-slate-950", 3, "value", 4, "ngFor", "ngForOf"], [1, "mt-6", "grid", "gap-4", "md:grid-cols-2", "xl:grid-cols-3"], ["class", "group overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-950/40 p-5 transition hover:-translate-y-1 hover:border-white/20", 4, "ngFor", "ngForOf"], ["class", "mt-6", 4, "ngIf"], [1, "bg-slate-950", 3, "value"], [1, "group", "overflow-hidden", "rounded-[1.7rem]", "border", "border-white/10", "bg-slate-950/40", "p-5", "transition", "hover:-translate-y-1", "hover:border-white/20"], [1, "h-52", "w-full", "rounded-[1.25rem]", "object-cover", "ring-1", "ring-white/10", 3, "src", "alt"], [1, "mt-4"], [1, "flex", "items-start", "justify-between", "gap-2"], [1, "min-w-0"], [1, "truncate", "text-lg", "font-semibold", "text-white"], [1, "truncate", "text-sm", "text-slate-500"], [1, "rounded-full", "bg-white/10", "px-3", "py-1", "text-xs", "font-medium", "text-slate-300"], [1, "mt-3", "line-clamp-2", "text-sm", "text-slate-400"], [1, "mt-4", "flex", "items-center", "justify-between", "text-sm"], [1, "text-slate-500"], [1, "mx-2"], [1, "text-lg", "font-semibold", "text-emerald-300"], [1, "mt-4", "flex", "gap-2"], ["type", "button", 1, "inline-flex", "flex-1", "items-center", "justify-center", "rounded-2xl", "border", "border-white/10", "bg-white/5", "px-3", "py-2", "text-sm", "font-medium", "text-slate-200", "transition", "hover:bg-white/10", 3, "click"], ["type", "button", 1, "inline-flex", "flex-1", "items-center", "justify-center", "rounded-2xl", "bg-violet-500", "px-3", "py-2", "text-sm", "font-semibold", "text-white", "transition", "hover:bg-violet-400", 3, "click"], ["type", "button", 1, "inline-flex", "h-11", "w-11", "items-center", "justify-center", "rounded-2xl", "border", "border-white/10", "bg-white/5", "text-red-300", "transition", "hover:bg-red-500/10", 3, "click"], [1, "fa-solid", "fa-trash", "text-lg"], [1, "mt-6"], ["icon", "fa-solid fa-paintbrush", "title", "Sin dise\u00F1os", "message", "Prueba otro filtro o crea un nuevo dise\u00F1o."]],
        template: function TattoosPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "app-page-header", 1)(2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TattoosPage_Template_button_click_2_listener() {
              return ctx.openForm();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Nuevo dise\u00F1o ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "section", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "app-stat-card", 5)(7, "app-stat-card", 6)(8, "app-stat-card", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "label", 10)(12, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Buscar dise\u00F1o");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function TattoosPage_Template_input_input_14_listener($event) {
              return ctx.query.set($event.target.value);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "label", 10)(16, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Estilo");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "select", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function TattoosPage_Template_select_change_18_listener($event) {
              return ctx.style.set($event.target.value);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Todos");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, TattoosPage_option_21_Template, 2, 2, "option", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, TattoosPage_article_23_Template, 30, 10, "article", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, TattoosPage_div_24_Template, 2, 0, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.tattoos.tattoos().length);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.tattoos.styles().length);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.formatMoney(ctx.avgPrice()));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.query());
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.style());
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.tattoos.styles());
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.filtered());
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.filtered().length === 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_ui_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, _shared_ui_stat_card_component__WEBPACK_IMPORTED_MODULE_2__.StatCardComponent, _shared_ui_empty_state_component__WEBPACK_IMPORTED_MODULE_3__.EmptyStateComponent],
        encapsulation: 2
      });
    }
  }
  return TattoosPage;
})();

/***/ }),

/***/ 5231:
/*!****************************************************!*\
  !*** ./src/app/features/tattoos/tattoos.routes.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TATTOOS_ROUTES: () => (/* binding */ TATTOOS_ROUTES)
/* harmony export */ });
/* harmony import */ var _tattoos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tattoos.page */ 5198);

const TATTOOS_ROUTES = [{
  path: '',
  component: _tattoos_page__WEBPACK_IMPORTED_MODULE_0__.TattoosPage
}];

/***/ })

}]);
//# sourceMappingURL=231.js.map
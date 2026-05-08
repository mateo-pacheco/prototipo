"use strict";
(self["webpackChunkinkstock_studio"] = self["webpackChunkinkstock_studio"] || []).push([[638],{

/***/ 2638:
/*!**************************************************!*\
  !*** ./src/app/features/artists/artists.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistsPage: () => (/* binding */ ArtistsPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _core_services_artists_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/artists.service */ 6472);
/* harmony import */ var _shared_ui_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ui/page-header.component */ 3939);
/* harmony import */ var _shared_ui_stat_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/ui/stat-card.component */ 6111);
/* harmony import */ var _shared_ui_empty_state_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ui/empty-state.component */ 2929);
/* harmony import */ var _shared_ui_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/ui/confirm-dialog.component */ 3915);
/* harmony import */ var _shared_ui_entity_form_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/ui/entity-form.dialog */ 1383);
/* harmony import */ var _shared_ui_entity_detail_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/ui/entity-detail.dialog */ 4506);
/* harmony import */ var _shared_ui_dialog_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/ui/dialog-config */ 8460);
/* harmony import */ var _shared_ui_app_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/ui/app-dialog.service */ 4062);














const _c0 = (a0, a1) => ({
  "bg-green-500/15 text-green-300": a0,
  "bg-amber-500/15 text-amber-300": a1
});
function ArtistsPage_article_28_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const social_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](social_r4);
  }
}
function ArtistsPage_article_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "article", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 24)(4, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 29)(13, "div", 30)(14, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 35)(21, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ArtistsPage_article_28_Template_button_click_21_listener() {
      const artist_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.detail(artist_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ArtistsPage_article_28_Template_button_click_23_listener() {
      const artist_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.openForm(artist_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ArtistsPage_article_28_Template_button_click_25_listener() {
      const artist_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.remove(artist_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, ArtistsPage_article_28_span_28_Template, 2, 1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const artist_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", artist_r2.portfolio[0], _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"])("alt", "Portafolio de " + artist_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](artist_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](artist_r2.especialidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](10, _c0, artist_r2.disponibilidad === "Disponible", artist_r2.disponibilidad !== "Disponible"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", artist_r2.disponibilidad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](artist_r2.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", artist_r2.experiencia, " a\u00F1os");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", artist_r2.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", artist_r2.redesSociales);
  }
}
function ArtistsPage_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-empty-state", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
let ArtistsPage = /*#__PURE__*/(() => {
  class ArtistsPage {
    constructor() {
      this.artists = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_core_services_artists_service__WEBPACK_IMPORTED_MODULE_0__.ArtistsService);
      this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_shared_ui_app_dialog_service__WEBPACK_IMPORTED_MODULE_8__.AppDialogService);
      this.snack = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar);
      this.query = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)('');
      this.availability = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)('');
      this.filtered = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.computed)(() => {
        const q = this.query().toLowerCase();
        return this.artists.artists().filter(item => {
          const matchesQuery = !q || `${item.nombre} ${item.especialidad}`.toLowerCase().includes(q);
          const matchesAvailability = !this.availability() || item.disponibilidad === this.availability();
          return matchesQuery && matchesAvailability;
        });
      });
      this.avgRating = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.computed)(() => {
        const items = this.artists.artists();
        return items.length ? (items.reduce((sum, item) => sum + item.rating, 0) / items.length).toFixed(1) : '0.0';
      });
    }
    openForm(artist) {
      const ref = this.dialog.open(_shared_ui_entity_form_dialog__WEBPACK_IMPORTED_MODULE_5__.EntityFormDialogComponent, {
        ...(0,_shared_ui_dialog_config__WEBPACK_IMPORTED_MODULE_7__.buildResponsiveDialogConfig)('600px'),
        data: {
          title: artist ? 'Editar tatuador' : 'Nuevo tatuador',
          subtitle: 'Datos del tatuador.',
          value: artist ?? undefined,
          fields: [{
            key: 'nombre',
            label: 'Nombre',
            type: 'text',
            required: true
          }, {
            key: 'especialidad',
            label: 'Especialidad',
            type: 'text',
            required: true
          }, {
            key: 'experiencia',
            label: 'Años de experiencia',
            type: 'number',
            required: true
          }, {
            key: 'disponibilidad',
            label: 'Disponibilidad',
            type: 'select',
            required: true,
            options: [{
              label: 'Disponible',
              value: 'Disponible'
            }, {
              label: 'Ocupado',
              value: 'Ocupado'
            }, {
              label: 'Vacaciones',
              value: 'Vacaciones'
            }]
          }, {
            key: 'rating',
            label: 'Rating (1-5)',
            type: 'number',
            required: true
          }, {
            key: 'bio',
            label: 'Biografía',
            type: 'textarea',
            required: false
          }]
        }
      });
      ref.afterClosed().subscribe(value => {
        if (!value) return;
        this.artists.save({
          ...artist,
          ...value
        });
        this.snack.open(artist ? 'Tatuador actualizado' : 'Tatuador creado', 'Cerrar');
      });
    }
    detail(artist) {
      this.dialog.open(_shared_ui_entity_detail_dialog__WEBPACK_IMPORTED_MODULE_6__.EntityDetailDialogComponent, {
        ...(0,_shared_ui_dialog_config__WEBPACK_IMPORTED_MODULE_7__.buildResponsiveDialogConfig)('500px'),
        data: {
          title: artist.nombre,
          subtitle: artist.especialidad,
          image: artist.portfolio[0],
          rows: [{
            label: 'Experiencia',
            value: `${artist.experiencia} años`
          }, {
            label: 'Disponibilidad',
            value: artist.disponibilidad
          }, {
            label: 'Rating',
            value: artist.rating.toString()
          }, {
            label: 'Redes sociales',
            value: artist.redesSociales.join(', ')
          }]
        }
      });
    }
    remove(artist) {
      this.dialog.open(_shared_ui_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmDialogComponent, {
        ...(0,_shared_ui_dialog_config__WEBPACK_IMPORTED_MODULE_7__.buildResponsiveDialogConfig)('400px'),
        data: {
          title: 'Eliminar tatuador',
          message: `¿Eliminar a ${artist.nombre}?`,
          confirmLabel: 'Eliminar',
          tone: 'danger'
        }
      }).afterClosed().subscribe(confirmed => {
        if (!confirmed) return;
        this.artists.remove(artist.id);
        this.snack.open('Tatuador eliminado', 'Cerrar');
      });
    }
    static {
      this.ɵfac = function ArtistsPage_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ArtistsPage)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: ArtistsPage,
        selectors: [["ng-component"]],
        hostAttrs: [1, "block", "w-full"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
        decls: 30,
        vars: 7,
        consts: [[1, "space-y-6"], ["title", "Tatuadores", "subtitle", "Equipo de tatuadores con especialidades y disponibilidad."], ["actions", "", "type", "button", 1, "inline-flex", "h-11", "items-center", "gap-2", "rounded-2xl", "bg-violet-500", "px-4", "text-sm", "font-semibold", "text-white", "transition", "hover:bg-violet-400", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "grid", "gap-4", "md:grid-cols-3"], ["icon", "fa-solid fa-users", "label", "Tatuadores", "description", "Equipo activo", 3, "value"], ["icon", "fa-solid fa-calendar-check", "label", "Disponibles", "description", "Listos para agenda", "badgeBackground", "linear-gradient(135deg, #22c55e, #14b8a6)", 3, "value"], ["icon", "fa-solid fa-star", "label", "Rating medio", "description", "Calidad percibida", "badgeBackground", "linear-gradient(135deg, #f59e0b, #ec4899)", 3, "value"], [1, "rounded-[2rem]", "border", "border-white/10", "bg-white/5", "p-6"], [1, "grid", "gap-4", "xl:grid-cols-[1fr_220px]"], [1, "block"], [1, "mb-2", "block", "text-sm", "font-medium", "text-slate-200"], ["placeholder", "Nombre o especialidad", 1, "h-11", "w-full", "rounded-2xl", "border", "border-white/10", "bg-slate-950/60", "px-4", "text-sm", "text-white", "outline-none", "transition", "placeholder:text-slate-500", "focus:border-teal-400/60", "focus:ring-4", "focus:ring-teal-400/10", 3, "input", "value"], [1, "h-11", "w-full", "rounded-2xl", "border", "border-white/10", "bg-slate-950/60", "px-4", "text-sm", "text-white", "outline-none", "transition", "focus:border-teal-400/60", "focus:ring-4", "focus:ring-teal-400/10", 3, "change", "value"], ["value", "", 1, "bg-slate-950"], ["value", "Disponible", 1, "bg-slate-950"], ["value", "Ocupado", 1, "bg-slate-950"], ["value", "Vacaciones", 1, "bg-slate-950"], [1, "mt-6", "grid", "gap-4", "md:grid-cols-2", "xl:grid-cols-3"], ["class", "group rounded-[1.7rem] border border-white/10 bg-slate-950/40 p-5 transition hover:-translate-y-1 hover:border-white/20", 4, "ngFor", "ngForOf"], ["class", "mt-6", 4, "ngIf"], [1, "group", "rounded-[1.7rem]", "border", "border-white/10", "bg-slate-950/40", "p-5", "transition", "hover:-translate-y-1", "hover:border-white/20"], [1, "flex", "items-start", "gap-4"], [1, "h-20", "w-20", "rounded-[1.2rem]", "object-cover", "ring-1", "ring-white/10", 3, "src", "alt"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-lg", "font-semibold", "text-white"], [1, "truncate", "text-sm", "text-slate-500"], [1, "mt-2", "inline-flex", "rounded-full", "px-3", "py-1", "text-xs", "font-medium", 3, "ngClass"], [1, "mt-4", "line-clamp-2", "text-sm", "text-slate-400"], [1, "mt-4", "flex", "items-center", "justify-between", "gap-3"], [1, "flex", "items-center", "gap-4", "text-sm", "text-slate-400"], [1, "flex", "items-center", "gap-1"], [1, "fa-solid", "fa-clock", "text-base"], [1, "flex", "items-center", "gap-1", "text-amber-300"], [1, "fa-solid", "fa-star", "text-base"], [1, "flex", "gap-2"], ["type", "button", 1, "inline-flex", "h-9", "w-9", "items-center", "justify-center", "rounded-2xl", "border", "border-white/10", "bg-white/5", "text-slate-300", "transition", "hover:bg-white/10", 3, "click"], [1, "fa-solid", "fa-eye", "text-lg"], [1, "fa-solid", "fa-pen", "text-lg"], ["type", "button", 1, "inline-flex", "h-9", "w-9", "items-center", "justify-center", "rounded-2xl", "border", "border-white/10", "bg-white/5", "text-red-300", "transition", "hover:bg-red-500/10", 3, "click"], [1, "fa-solid", "fa-trash", "text-lg"], [1, "mt-3", "flex", "flex-wrap", "gap-2"], ["class", "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300", 4, "ngFor", "ngForOf"], [1, "rounded-full", "border", "border-white/10", "bg-white/5", "px-3", "py-1", "text-xs", "text-slate-300"], [1, "mt-6"], ["icon", "fa-solid fa-users", "title", "Sin tatuadores", "message", "No hay coincidencias para los filtros actuales."]],
        template: function ArtistsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "app-page-header", 1)(2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ArtistsPage_Template_button_click_2_listener() {
              return ctx.openForm();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Nuevo tatuador ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "section", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "app-stat-card", 5)(7, "app-stat-card", 6)(8, "app-stat-card", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "label", 10)(12, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Buscar artista");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("input", function ArtistsPage_Template_input_input_14_listener($event) {
              return ctx.query.set($event.target.value);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "label", 10)(16, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Disponibilidad");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "select", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ArtistsPage_Template_select_change_18_listener($event) {
              return ctx.availability.set($event.target.value);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Todas");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "option", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Disponible");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "option", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Ocupado");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Vacaciones");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, ArtistsPage_article_28_Template, 29, 13, "article", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, ArtistsPage_div_29_Template, 2, 0, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.artists.artists().length);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.artists.availableCount());
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.avgRating());
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.query());
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.availability());
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.filtered());
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.filtered().length === 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_ui_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, _shared_ui_stat_card_component__WEBPACK_IMPORTED_MODULE_2__.StatCardComponent, _shared_ui_empty_state_component__WEBPACK_IMPORTED_MODULE_3__.EmptyStateComponent],
        encapsulation: 2
      });
    }
  }
  return ArtistsPage;
})();

/***/ })

}]);
//# sourceMappingURL=638.js.map
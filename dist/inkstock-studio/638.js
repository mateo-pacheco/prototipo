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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _core_services_artists_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/artists.service */ 6472);
/* harmony import */ var _shared_ui_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ui/page-header.component */ 3939);
/* harmony import */ var _shared_ui_stat_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/ui/stat-card.component */ 6111);
/* harmony import */ var _shared_ui_empty_state_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ui/empty-state.component */ 2929);
/* harmony import */ var _shared_ui_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/ui/confirm-dialog.component */ 3915);
/* harmony import */ var _shared_ui_entity_form_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/ui/entity-form.dialog */ 1383);
/* harmony import */ var _shared_ui_entity_detail_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/ui/entity-detail.dialog */ 4506);















const _c0 = (a0, a1) => ({
  "bg-green-500/15 text-green-300": a0,
  "bg-amber-500/15 text-amber-300": a1
});
function ArtistsPage_article_29_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const social_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](social_r4);
  }
}
function ArtistsPage_article_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 23)(4, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 28)(13, "div", 29)(14, "span", 30)(15, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span", 32)(19, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 33)(23, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ArtistsPage_article_29_Template_button_click_23_listener() {
      const artist_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.detail(artist_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ArtistsPage_article_29_Template_button_click_26_listener() {
      const artist_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.openForm(artist_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ArtistsPage_article_29_Template_button_click_29_listener() {
      const artist_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.remove(artist_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, ArtistsPage_article_29_span_33_Template, 2, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const artist_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", artist_r2.portfolio[0], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", "Portafolio de " + artist_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](artist_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](artist_r2.especialidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](10, _c0, artist_r2.disponibilidad === "Disponible", artist_r2.disponibilidad !== "Disponible"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", artist_r2.disponibilidad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](artist_r2.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", artist_r2.experiencia, " a\u00F1os");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", artist_r2.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", artist_r2.redesSociales);
  }
}
function ArtistsPage_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-empty-state", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
let ArtistsPage = /*#__PURE__*/(() => {
  class ArtistsPage {
    constructor() {
      this.artists = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_core_services_artists_service__WEBPACK_IMPORTED_MODULE_0__.ArtistsService);
      this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog);
      this.snack = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar);
      this.query = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.signal)('');
      this.availability = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.signal)('');
      this.filtered = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.computed)(() => {
        const q = this.query().toLowerCase();
        return this.artists.artists().filter(item => {
          const matchesQuery = !q || `${item.nombre} ${item.especialidad}`.toLowerCase().includes(q);
          const matchesAvailability = !this.availability() || item.disponibilidad === this.availability();
          return matchesQuery && matchesAvailability;
        });
      });
      this.avgRating = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.computed)(() => {
        const items = this.artists.artists();
        return items.length ? (items.reduce((sum, item) => sum + item.rating, 0) / items.length).toFixed(1) : '0.0';
      });
    }
    openForm(artist) {
      const ref = this.dialog.open(_shared_ui_entity_form_dialog__WEBPACK_IMPORTED_MODULE_5__.EntityFormDialogComponent, {
        width: '600px',
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
        width: '500px',
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
        width: '400px',
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
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: ArtistsPage,
        selectors: [["ng-component"]],
        hostAttrs: [1, "block", "w-full"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
        decls: 31,
        vars: 7,
        consts: [[1, "space-y-6"], ["title", "Tatuadores", "subtitle", "Equipo de tatuadores con especialidades y disponibilidad."], ["actions", "", "type", "button", 1, "inline-flex", "h-11", "items-center", "gap-2", "rounded-2xl", "bg-violet-500", "px-4", "text-sm", "font-semibold", "text-white", "transition", "hover:bg-violet-400", 3, "click"], [1, "grid", "gap-4", "md:grid-cols-3"], ["icon", "groups", "label", "Tatuadores", "description", "Equipo activo", 3, "value"], ["icon", "event_available", "label", "Disponibles", "description", "Listos para agenda", "badgeBackground", "linear-gradient(135deg, #22c55e, #14b8a6)", 3, "value"], ["icon", "star", "label", "Rating medio", "description", "Calidad percibida", "badgeBackground", "linear-gradient(135deg, #f59e0b, #ec4899)", 3, "value"], [1, "rounded-[2rem]", "border", "border-white/10", "bg-white/5", "p-6"], [1, "grid", "gap-4", "xl:grid-cols-[1fr_220px]"], [1, "block"], [1, "mb-2", "block", "text-sm", "font-medium", "text-slate-200"], ["placeholder", "Nombre o especialidad", 1, "h-11", "w-full", "rounded-2xl", "border", "border-white/10", "bg-slate-950/60", "px-4", "text-sm", "text-white", "outline-none", "transition", "placeholder:text-slate-500", "focus:border-teal-400/60", "focus:ring-4", "focus:ring-teal-400/10", 3, "input", "value"], [1, "h-11", "w-full", "rounded-2xl", "border", "border-white/10", "bg-slate-950/60", "px-4", "text-sm", "text-white", "outline-none", "transition", "focus:border-teal-400/60", "focus:ring-4", "focus:ring-teal-400/10", 3, "change", "value"], ["value", "", 1, "bg-slate-950"], ["value", "Disponible", 1, "bg-slate-950"], ["value", "Ocupado", 1, "bg-slate-950"], ["value", "Vacaciones", 1, "bg-slate-950"], [1, "mt-6", "grid", "gap-4", "md:grid-cols-2", "xl:grid-cols-3"], ["class", "group rounded-[1.7rem] border border-white/10 bg-slate-950/40 p-5 transition hover:-translate-y-1 hover:border-white/20", 4, "ngFor", "ngForOf"], ["class", "mt-6", 4, "ngIf"], [1, "group", "rounded-[1.7rem]", "border", "border-white/10", "bg-slate-950/40", "p-5", "transition", "hover:-translate-y-1", "hover:border-white/20"], [1, "flex", "items-start", "gap-4"], [1, "h-20", "w-20", "rounded-[1.2rem]", "object-cover", "ring-1", "ring-white/10", 3, "src", "alt"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-lg", "font-semibold", "text-white"], [1, "truncate", "text-sm", "text-slate-500"], [1, "mt-2", "inline-flex", "rounded-full", "px-3", "py-1", "text-xs", "font-medium", 3, "ngClass"], [1, "mt-4", "line-clamp-2", "text-sm", "text-slate-400"], [1, "mt-4", "flex", "items-center", "justify-between", "gap-3"], [1, "flex", "items-center", "gap-4", "text-sm", "text-slate-400"], [1, "flex", "items-center", "gap-1"], [1, "!text-base"], [1, "flex", "items-center", "gap-1", "text-amber-300"], [1, "flex", "gap-2"], ["type", "button", 1, "inline-flex", "h-9", "w-9", "items-center", "justify-center", "rounded-2xl", "border", "border-white/10", "bg-white/5", "text-slate-300", "transition", "hover:bg-white/10", 3, "click"], [1, "!text-lg"], ["type", "button", 1, "inline-flex", "h-9", "w-9", "items-center", "justify-center", "rounded-2xl", "border", "border-white/10", "bg-white/5", "text-red-300", "transition", "hover:bg-red-500/10", 3, "click"], [1, "mt-3", "flex", "flex-wrap", "gap-2"], ["class", "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300", 4, "ngFor", "ngForOf"], [1, "rounded-full", "border", "border-white/10", "bg-white/5", "px-3", "py-1", "text-xs", "text-slate-300"], [1, "mt-6"], ["icon", "groups", "title", "Sin tatuadores", "message", "No hay coincidencias para los filtros actuales."]],
        template: function ArtistsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "app-page-header", 1)(2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ArtistsPage_Template_button_click_2_listener() {
              return ctx.openForm();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "add");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Nuevo tatuador ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "section", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "app-stat-card", 4)(8, "app-stat-card", 5)(9, "app-stat-card", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "label", 9)(13, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Buscar artista");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function ArtistsPage_Template_input_input_15_listener($event) {
              return ctx.query.set($event.target.value);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "label", 9)(17, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Disponibilidad");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "select", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ArtistsPage_Template_select_change_19_listener($event) {
              return ctx.availability.set($event.target.value);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Todas");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Disponible");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "option", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Ocupado");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "option", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Vacaciones");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, ArtistsPage_article_29_Template, 34, 13, "article", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, ArtistsPage_div_30_Template, 2, 0, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.artists.artists().length);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.artists.availableCount());
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.avgRating());
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.query());
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.availability());
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.filtered());
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.filtered().length === 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _shared_ui_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, _shared_ui_stat_card_component__WEBPACK_IMPORTED_MODULE_2__.StatCardComponent, _shared_ui_empty_state_component__WEBPACK_IMPORTED_MODULE_3__.EmptyStateComponent],
        encapsulation: 2
      });
    }
  }
  return ArtistsPage;
})();

/***/ })

}]);
//# sourceMappingURL=638.js.map
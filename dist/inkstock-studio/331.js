"use strict";
(self["webpackChunkinkstock_studio"] = self["webpackChunkinkstock_studio"] || []).push([[331],{

/***/ 2114:
/*!******************************************************!*\
  !*** ./src/app/features/inventory/inventory.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryPage: () => (/* binding */ InventoryPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/inventory.service */ 1100);
/* harmony import */ var _core_utils_misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils/misc.util */ 3108);
/* harmony import */ var _shared_ui_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/ui/page-header.component */ 3939);
/* harmony import */ var _shared_ui_stat_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ui/stat-card.component */ 6111);
/* harmony import */ var _shared_ui_empty_state_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/ui/empty-state.component */ 2929);
/* harmony import */ var _shared_ui_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/ui/confirm-dialog.component */ 3915);
/* harmony import */ var _shared_ui_entity_detail_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/ui/entity-detail.dialog */ 4506);
/* harmony import */ var _shared_ui_entity_form_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/ui/entity-form.dialog */ 1383);
/* harmony import */ var _shared_ui_dialog_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/ui/dialog-config */ 8460);
/* harmony import */ var _shared_ui_app_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/ui/app-dialog.service */ 4062);















const _c0 = (a0, a1, a2, a3) => ({
  "bg-emerald-500/15 text-emerald-300": a0,
  "bg-amber-500/15 text-amber-300": a1,
  "bg-red-500/15 text-red-300": a2,
  "bg-slate-500/15 text-slate-300": a3
});
function InventoryPage_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 33)(1, "td", 34)(2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 37)(5, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td", 34)(16, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "td", 34)(19, "div", 43)(20, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function InventoryPage_tr_63_Template_button_click_20_listener() {
      const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.detail(row_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function InventoryPage_tr_63_Template_button_click_22_listener() {
      const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.openForm(row_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function InventoryPage_tr_63_Template_button_click_24_listener() {
      const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.remove(row_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", row_r2.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](row_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](row_r2.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](row_r2.categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("text-amber-300", row_r2.stock <= 6)("text-emerald-300", row_r2.stock > 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](row_r2.stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r2.formatMoney(row_r2.precio));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction4"](12, _c0, row_r2.estado === "activo", row_r2.estado === "bajo_stock", row_r2.estado === "agotado", row_r2.estado === "descontinuado"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r2.estado, " ");
  }
}
function InventoryPage_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-empty-state", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
let InventoryPage = /*#__PURE__*/(() => {
  class InventoryPage {
    constructor() {
      this.inventory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_core_services_inventory_service__WEBPACK_IMPORTED_MODULE_0__.InventoryService);
      this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_shared_ui_app_dialog_service__WEBPACK_IMPORTED_MODULE_9__.AppDialogService);
      this.snack = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar);
      this.query = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.signal)('');
      this.category = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.signal)('');
      this.status = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.signal)('');
      this.formatMoney = _core_utils_misc_util__WEBPACK_IMPORTED_MODULE_1__.formatMoney;
      this.filtered = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.computed)(() => this.inventory.products().filter(item => {
        const q = this.query().toLowerCase();
        const matchesQuery = !q || `${item.nombre} ${item.descripcion} ${item.color} ${item.talla}`.toLowerCase().includes(q);
        const matchesCategory = !this.category() || item.categoria === this.category();
        const matchesStatus = !this.status() || item.estado === this.status();
        return matchesQuery && matchesCategory && matchesStatus;
      }));
    }
    openForm(product) {
      const ref = this.dialog.open(_shared_ui_entity_form_dialog__WEBPACK_IMPORTED_MODULE_7__.EntityFormDialogComponent, {
        ...(0,_shared_ui_dialog_config__WEBPACK_IMPORTED_MODULE_8__.buildResponsiveDialogConfig)('760px'),
        data: {
          title: product ? 'Editar producto' : 'Nuevo producto',
          subtitle: 'Mantén el catálogo ordenado y visualmente consistente.',
          value: product ?? undefined,
          fields: [{
            key: 'nombre',
            label: 'Nombre',
            type: 'text',
            required: true
          }, {
            key: 'descripcion',
            label: 'Descripción',
            type: 'textarea',
            required: true
          }, {
            key: 'categoria',
            label: 'Categoría',
            type: 'select',
            required: true,
            options: ['Chompas', 'Pantalones', 'Camisetas', 'Gorras', 'Accesorios'].map(value => ({
              label: value,
              value
            }))
          }, {
            key: 'talla',
            label: 'Talla',
            type: 'select',
            required: true,
            options: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Única'].map(value => ({
              label: value,
              value
            }))
          }, {
            key: 'color',
            label: 'Color',
            type: 'text',
            required: true
          }, {
            key: 'stock',
            label: 'Stock',
            type: 'number',
            required: true
          }, {
            key: 'precio',
            label: 'Precio',
            type: 'number',
            required: true
          }, {
            key: 'estado',
            label: 'Estado',
            type: 'select',
            required: true,
            options: ['activo', 'bajo_stock', 'agotado', 'descontinuado'].map(value => ({
              label: value,
              value
            }))
          }]
        }
      });
      ref.afterClosed().subscribe(value => {
        if (!value) return;
        this.inventory.save({
          ...product,
          ...value,
          images: product?.images ?? []
        });
        this.snack.open(product ? 'Producto actualizado' : 'Producto creado', 'Cerrar');
      });
    }
    detail(product) {
      this.dialog.open(_shared_ui_entity_detail_dialog__WEBPACK_IMPORTED_MODULE_6__.EntityDetailDialogComponent, {
        ...(0,_shared_ui_dialog_config__WEBPACK_IMPORTED_MODULE_8__.buildResponsiveDialogConfig)('760px'),
        data: {
          title: product.nombre,
          subtitle: product.categoria,
          image: product.images[0],
          rows: [{
            label: 'Descripción',
            value: product.descripcion
          }, {
            label: 'Talla',
            value: product.talla
          }, {
            label: 'Color',
            value: product.color
          }, {
            label: 'Stock',
            value: product.stock
          }, {
            label: 'Precio',
            value: (0,_core_utils_misc_util__WEBPACK_IMPORTED_MODULE_1__.formatMoney)(product.precio)
          }, {
            label: 'Estado',
            value: product.estado
          }, {
            label: 'Creado',
            value: (0,_core_utils_misc_util__WEBPACK_IMPORTED_MODULE_1__.formatDateTime)(product.createdAt)
          }]
        }
      });
    }
    remove(product) {
      const ref = this.dialog.open(_shared_ui_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmDialogComponent, {
        ...(0,_shared_ui_dialog_config__WEBPACK_IMPORTED_MODULE_8__.buildResponsiveDialogConfig)('460px'),
        data: {
          title: 'Eliminar producto',
          message: `¿Deseas eliminar ${product.nombre}?`,
          confirmLabel: 'Eliminar',
          tone: 'danger'
        }
      });
      ref.afterClosed().subscribe(confirmed => {
        if (!confirmed) return;
        this.inventory.remove(product.id);
        this.snack.open('Producto eliminado', 'Cerrar');
      });
    }
    static {
      this.ɵfac = function InventoryPage_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InventoryPage)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: InventoryPage,
        selectors: [["ng-component"]],
        hostAttrs: [1, "block", "w-full"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
        decls: 65,
        vars: 8,
        consts: [[1, "space-y-6"], ["title", "Inventario de ropa", "subtitle", "Cat\u00E1logo, stock y control de productos para el estudio."], ["actions", "", "type", "button", 1, "inline-flex", "h-11", "items-center", "gap-2", "rounded-2xl", "bg-violet-500", "px-4", "text-sm", "font-semibold", "text-white", "transition", "hover:bg-violet-400", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "grid", "gap-4", "md:grid-cols-3"], ["icon", "fa-solid fa-box", "label", "Productos", "description", "Cat\u00E1logo total", 3, "value"], ["icon", "fa-solid fa-triangle-exclamation", "label", "Stock bajo", "description", "Revisar reposici\u00F3n", "badgeBackground", "linear-gradient(135deg, #f59e0b, #ef4444)", 3, "value"], ["icon", "fa-solid fa-money-bill-wave", "label", "Valor inventario", "description", "Stock valorizado", "badgeBackground", "linear-gradient(135deg, #14b8a6, #0ea5e9)", 3, "value"], [1, "rounded-[2rem]", "border", "border-white/10", "bg-white/5", "p-6"], [1, "grid", "gap-4", "xl:grid-cols-[1.2fr_0.8fr_0.8fr]"], [1, "block"], [1, "mb-2", "block", "text-sm", "font-medium", "text-slate-200"], ["placeholder", "Producto, color, talla...", 1, "h-11", "w-full", "rounded-2xl", "border", "border-white/10", "bg-slate-950/60", "px-4", "text-sm", "text-white", "outline-none", "transition", "placeholder:text-slate-500", "focus:border-teal-400/60", "focus:ring-4", "focus:ring-teal-400/10", 3, "input", "value"], [1, "h-11", "w-full", "rounded-2xl", "border", "border-white/10", "bg-slate-950/60", "px-4", "text-sm", "text-white", "outline-none", "transition", "focus:border-teal-400/60", "focus:ring-4", "focus:ring-teal-400/10", 3, "change", "value"], ["value", "", 1, "bg-slate-950"], ["value", "Chompas", 1, "bg-slate-950"], ["value", "Pantalones", 1, "bg-slate-950"], ["value", "Camisetas", 1, "bg-slate-950"], ["value", "Gorras", 1, "bg-slate-950"], ["value", "Accesorios", 1, "bg-slate-950"], ["value", "activo", 1, "bg-slate-950"], ["value", "bajo_stock", 1, "bg-slate-950"], ["value", "agotado", 1, "bg-slate-950"], ["value", "descontinuado", 1, "bg-slate-950"], [1, "mt-6", "overflow-hidden", "rounded-[1.6rem]", "border", "border-white/10"], [1, "overflow-x-auto"], [1, "min-w-full", "divide-y", "divide-white/10"], [1, "bg-slate-950/60", "text-left", "text-xs", "uppercase", "tracking-[0.24em]", "text-slate-500"], [1, "px-4", "py-3"], [1, "px-4", "py-3", "text-right"], [1, "divide-y", "divide-white/8", "bg-slate-950/30"], ["class", "align-top", 4, "ngFor", "ngForOf"], ["class", "mt-6", 4, "ngIf"], [1, "align-top"], [1, "px-4", "py-4"], [1, "flex", "items-center", "gap-3"], ["alt", "", 1, "h-14", "w-14", "rounded-2xl", "object-cover", "ring-1", "ring-white/10", 3, "src"], [1, "min-w-0"], [1, "font-medium", "text-white"], [1, "text-sm", "text-slate-500"], [1, "px-4", "py-4", "text-sm", "text-slate-300"], [1, "px-4", "py-4", "text-sm", "font-semibold"], [1, "inline-flex", "rounded-full", "px-3", "py-1", "text-xs", "font-medium", 3, "ngClass"], [1, "flex", "justify-end", "gap-2"], ["type", "button", 1, "inline-flex", "h-10", "w-10", "items-center", "justify-center", "rounded-2xl", "border", "border-white/10", "bg-white/5", "text-slate-300", "transition", "hover:bg-white/10", 3, "click"], [1, "fa-solid", "fa-eye", "text-lg"], [1, "fa-solid", "fa-pen", "text-lg"], ["type", "button", 1, "inline-flex", "h-10", "w-10", "items-center", "justify-center", "rounded-2xl", "border", "border-white/10", "bg-white/5", "text-red-300", "transition", "hover:bg-red-500/10", 3, "click"], [1, "fa-solid", "fa-trash", "text-lg"], [1, "mt-6"], ["icon", "fa-solid fa-box", "title", "Sin productos", "message", "Prueba otro filtro o crea un nuevo producto."]],
        template: function InventoryPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "app-page-header", 1)(2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function InventoryPage_Template_button_click_2_listener() {
              return ctx.openForm();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Nuevo producto ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "section", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "app-stat-card", 5)(7, "app-stat-card", 6)(8, "app-stat-card", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "label", 10)(12, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Buscar");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function InventoryPage_Template_input_input_14_listener($event) {
              return ctx.query.set($event.target.value);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "label", 10)(16, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Categor\u00EDa");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "select", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function InventoryPage_Template_select_change_18_listener($event) {
              return ctx.category.set($event.target.value);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Todas");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "option", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Chompas");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "option", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Pantalones");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Camisetas");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "option", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Gorras");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "option", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Accesorios");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "label", 10)(32, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Estado");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "select", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function InventoryPage_Template_select_change_34_listener($event) {
              return ctx.status.set($event.target.value);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Todos");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "option", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "Activo");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "option", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "Stock bajo");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "option", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "Agotado");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "option", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Descontinuado");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 24)(46, "div", 25)(47, "table", 26)(48, "thead", 27)(49, "tr")(50, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "Producto");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Categor\u00EDa");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "Stock");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "Precio");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "Estado");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "th", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "Acciones");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "tbody", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](63, InventoryPage_tr_63_Template, 26, 17, "tr", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](64, InventoryPage_div_64_Template, 2, 0, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.inventory.totalCount());
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.inventory.lowStockCount());
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.formatMoney(ctx.inventory.totalValue()));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.query());
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.category());
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.status());
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.filtered());
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.filtered().length === 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_ui_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _shared_ui_stat_card_component__WEBPACK_IMPORTED_MODULE_3__.StatCardComponent, _shared_ui_empty_state_component__WEBPACK_IMPORTED_MODULE_4__.EmptyStateComponent],
        encapsulation: 2
      });
    }
  }
  return InventoryPage;
})();

/***/ }),

/***/ 9331:
/*!********************************************************!*\
  !*** ./src/app/features/inventory/inventory.routes.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INVENTORY_ROUTES: () => (/* binding */ INVENTORY_ROUTES)
/* harmony export */ });
/* harmony import */ var _inventory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory.page */ 2114);

const INVENTORY_ROUTES = [{
  path: 'products',
  component: _inventory_page__WEBPACK_IMPORTED_MODULE_0__.InventoryPage
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'products'
}];

/***/ })

}]);
//# sourceMappingURL=331.js.map
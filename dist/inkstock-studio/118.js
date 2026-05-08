"use strict";
(self["webpackChunkinkstock_studio"] = self["webpackChunkinkstock_studio"] || []).push([[118],{

/***/ 7897:
/*!***************************************************!*\
  !*** ./src/app/core/services/settings.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsService: () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _data_mock_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/mock-data */ 2060);



let SettingsService = /*#__PURE__*/(() => {
  class SettingsService {
    constructor() {
      this.settings = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)({
        ..._data_mock_data__WEBPACK_IMPORTED_MODULE_0__.mockSettings
      });
      this.value = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.settings());
    }
    update(patch) {
      this.settings.update(current => ({
        ...current,
        ...patch
      }));
    }
    reset() {
      this.settings.set({
        ..._data_mock_data__WEBPACK_IMPORTED_MODULE_0__.mockSettings
      });
    }
    static {
      this.ɵfac = function SettingsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SettingsService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: SettingsService,
        factory: SettingsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return SettingsService;
})();

/***/ }),

/***/ 5118:
/*!****************************************************!*\
  !*** ./src/app/features/settings/settings.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsPage: () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _core_data_mock_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/mock-data */ 2060);
/* harmony import */ var _core_services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/settings.service */ 7897);
/* harmony import */ var _core_services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/theme.service */ 4081);
/* harmony import */ var _shared_ui_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ui/page-header.component */ 3939);










function SettingsPage_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div")(4, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", user_r1.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", user_r1.role, " \u00B7 ", user_r1.title, "");
  }
}
let SettingsPage = /*#__PURE__*/(() => {
  class SettingsPage {
    constructor() {
      this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder);
      this.settings = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_services_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService);
      this.theme = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_services_theme_service__WEBPACK_IMPORTED_MODULE_2__.ThemeService);
      this.form = this.fb.nonNullable.group({
        studioName: [this.settings.value().studioName],
        tagline: [this.settings.value().tagline],
        contactEmail: [this.settings.value().contactEmail],
        phone: [this.settings.value().phone],
        currency: [this.settings.value().currency],
        compactDensity: [this.settings.value().compactDensity],
        accent: [this.settings.value().accent]
      });
      this.users = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.computed)(() => _core_data_mock_data__WEBPACK_IMPORTED_MODULE_0__.mockUsers.map(user => ({
        name: user.name,
        role: user.role,
        title: user.title,
        avatar: user.avatar
      })));
    }
    toggleTheme() {
      this.theme.toggle();
    }
    save() {
      this.settings.update(this.form.getRawValue());
    }
    reset() {
      this.settings.reset();
      this.form.reset({
        studioName: this.settings.value().studioName,
        tagline: this.settings.value().tagline,
        contactEmail: this.settings.value().contactEmail,
        phone: this.settings.value().phone,
        currency: this.settings.value().currency,
        compactDensity: this.settings.value().compactDensity,
        accent: this.settings.value().accent
      });
      this.theme.setDarkMode(this.settings.value().darkMode);
    }
    static {
      this.ɵfac = function SettingsPage_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SettingsPage)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: SettingsPage,
        selectors: [["ng-component"]],
        hostAttrs: [1, "block", "w-full"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
        decls: 62,
        vars: 4,
        consts: [[1, "space-y-6"], ["title", "Configuraci\u00F3n", "subtitle", "Perfil del estudio, preferencias visuales y par\u00E1metros de la aplicaci\u00F3n."], [1, "grid", "gap-6", "xl:grid-cols-[1fr_0.85fr]"], [1, "rounded-[2rem]", "border", "border-white/10", "bg-white/5", "p-6", 3, "formGroup"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-slate-500"], [1, "mt-2", "text-2xl", "font-semibold", "text-white"], [1, "mt-6", "grid", "gap-4", "md:grid-cols-2"], [1, "md:col-span-1"], [1, "mb-2", "block", "text-sm", "font-medium", "text-slate-200"], ["formControlName", "studioName", 1, "h-11", "w-full", "rounded-2xl", "border", "border-white/10", "bg-slate-950/60", "px-4", "text-sm", "text-white", "outline-none", "transition", "focus:border-teal-400/60", "focus:ring-4", "focus:ring-teal-400/10"], ["formControlName", "tagline", 1, "h-11", "w-full", "rounded-2xl", "border", "border-white/10", "bg-slate-950/60", "px-4", "text-sm", "text-white", "outline-none", "transition", "focus:border-teal-400/60", "focus:ring-4", "focus:ring-teal-400/10"], ["formControlName", "contactEmail", 1, "h-11", "w-full", "rounded-2xl", "border", "border-white/10", "bg-slate-950/60", "px-4", "text-sm", "text-white", "outline-none", "transition", "focus:border-teal-400/60", "focus:ring-4", "focus:ring-teal-400/10"], ["formControlName", "phone", 1, "h-11", "w-full", "rounded-2xl", "border", "border-white/10", "bg-slate-950/60", "px-4", "text-sm", "text-white", "outline-none", "transition", "focus:border-teal-400/60", "focus:ring-4", "focus:ring-teal-400/10"], ["formControlName", "currency", 1, "h-11", "w-full", "rounded-2xl", "border", "border-white/10", "bg-slate-950/60", "px-4", "text-sm", "text-white", "outline-none", "transition", "focus:border-teal-400/60", "focus:ring-4", "focus:ring-teal-400/10"], ["value", "USD", 1, "bg-slate-950"], ["value", "EUR", 1, "bg-slate-950"], ["value", "COP", 1, "bg-slate-950"], ["value", "MXN", 1, "bg-slate-950"], ["formControlName", "accent", 1, "h-11", "w-full", "rounded-2xl", "border", "border-white/10", "bg-slate-950/60", "px-4", "text-sm", "text-white", "outline-none", "transition", "focus:border-teal-400/60", "focus:ring-4", "focus:ring-teal-400/10"], [1, "mt-6", "flex", "flex-wrap", "gap-3"], ["type", "button", 1, "inline-flex", "h-11", "items-center", "justify-center", "rounded-2xl", "border", "border-white/10", "bg-white/5", "px-4", "text-sm", "font-medium", "text-slate-200", "transition", "hover:bg-white/10", 3, "click"], [1, "mt-6", "flex", "gap-3"], ["type", "button", 1, "inline-flex", "h-11", "items-center", "justify-center", "rounded-2xl", "bg-violet-500", "px-4", "text-sm", "font-semibold", "text-white", "transition", "hover:bg-violet-400", 3, "click"], [1, "rounded-[2rem]", "border", "border-white/10", "bg-white/5", "p-6"], [1, "mt-4", "space-y-3"], ["class", "rounded-[1.4rem] border border-white/10 bg-slate-950/50 p-4", 4, "ngFor", "ngForOf"], [1, "text-lg", "font-semibold", "text-white"], [1, "mt-3", "text-sm", "leading-6", "text-slate-400"], [1, "rounded-[1.4rem]", "border", "border-white/10", "bg-slate-950/50", "p-4"], [1, "flex", "items-center", "gap-3"], ["alt", "", 1, "h-11", "w-11", "rounded-2xl", "object-cover", "ring-1", "ring-white/10", 3, "src"], [1, "font-medium", "text-white"], [1, "text-sm", "text-slate-500"]],
        template: function SettingsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-page-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "form", 3)(4, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Estudio");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h3", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Perfil y apariencia");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Nombre");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 7)(14, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Tagline");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div")(18, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div")(22, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Tel\u00E9fono");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div")(26, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Moneda");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "select", 13)(29, "option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "USD");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "option", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "EUR");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "option", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "COP");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "MXN");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div")(38, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Color acento");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 19)(42, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettingsPage_Template_button_click_42_listener() {
              return ctx.toggleTheme();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettingsPage_Template_button_click_44_listener() {
              return ctx.form.patchValue({
                compactDensity: !ctx.form.value.compactDensity
              });
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 21)(47, "button", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettingsPage_Template_button_click_47_listener() {
              return ctx.save();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Guardar");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettingsPage_Template_button_click_49_listener() {
              return ctx.reset();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Restablecer");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 0)(52, "div", 23)(53, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Usuarios demo");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, SettingsPage_div_56_Template, 8, 4, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 23)(58, "h3", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Notas del producto");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "p", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, " Los cambios se guardan en memoria mientras la sesi\u00F3n est\u00E1 abierta. Esta vista centraliza el control visual del estudio y los ajustes globales. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.theme.isDark() ? "Cambiar a claro" : "Cambiar a oscuro", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.form.value.compactDensity ? "Densidad normal" : "Densidad compacta", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.users());
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _shared_ui_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent],
        encapsulation: 2
      });
    }
  }
  return SettingsPage;
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

/***/ })

}]);
//# sourceMappingURL=118.js.map
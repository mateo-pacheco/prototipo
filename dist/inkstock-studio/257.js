"use strict";
(self["webpackChunkinkstock_studio"] = self["webpackChunkinkstock_studio"] || []).push([[257],{

/***/ 8257:
/*!*********************************************!*\
  !*** ./src/app/features/auth/login.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/auth.service */ 8010);








function LoginPage_p_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Escribe tu usuario. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginPage_p_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Escribe tu contrase\u00F1a. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginPage_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage(), " ");
  }
}
function LoginPage_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Entrar al panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginPage_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Validando...");
  }
}
function LoginPage_button_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPage_button_60_Template_button_click_0_listener() {
      const user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.fillQuickUser(user_r4.username, user_r4.password));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("box-shadow", "inset 0 0 0 1px " + user_r4.accent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r4.username);
  }
}
let LoginPage = /*#__PURE__*/(() => {
  class LoginPage {
    constructor() {
      this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
      this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
      this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
      this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute);
      this.loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
      this.showPassword = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
      this.errorMessage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('');
      this.quickUsers = [{
        label: 'Admin',
        username: 'admin',
        password: 'admin123',
        accent: '#7c3aed'
      }, {
        label: 'Tatuador',
        username: 'tatuador',
        password: 'tattoo123',
        accent: '#0ea5e9'
      }, {
        label: 'Recepción',
        username: 'recepcionista',
        password: 'frontdesk123',
        accent: '#f97316'
      }];
      this.form = this.fb.nonNullable.group({
        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        remember: [true]
      });
      this.redirectTo = this.route.snapshot.queryParamMap.get('redirect') ?? '/dashboard';
    }
    fillQuickUser(username, password) {
      this.form.patchValue({
        username,
        password
      });
      this.errorMessage.set('');
    }
    submit() {
      this.errorMessage.set('');
      this.form.markAllAsTouched();
      if (this.form.invalid || this.loading()) {
        return;
      }
      this.loading.set(true);
      const {
        username,
        password
      } = this.form.getRawValue();
      const ok = this.auth.login(username.trim(), password);
      this.loading.set(false);
      if (!ok) {
        this.errorMessage.set('Usuario o contraseña incorrectos.');
        return;
      }
      void this.router.navigateByUrl(this.redirectTo);
    }
    static {
      this.ɵfac = function LoginPage_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LoginPage)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginPage,
        selectors: [["ng-component"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 93,
        vars: 11,
        consts: [["loadingTpl", ""], [1, "relative", "min-h-screen", "overflow-hidden", "bg-slate-950", "text-white"], [1, "absolute", "inset-0", "bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.28),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(20,184,166,0.22),_transparent_28%),linear-gradient(180deg,_#0b1220_0%,_#07111f_55%,_#050b14_100%)]"], [1, "absolute", "left-[-6rem]", "top-10", "h-72", "w-72", "rounded-full", "bg-violet-500/20", "blur-3xl"], [1, "absolute", "right-[-7rem]", "top-1/3", "h-80", "w-80", "rounded-full", "bg-teal-400/15", "blur-3xl"], [1, "absolute", "inset-x-0", "bottom-0", "h-44", "bg-gradient-to-t", "from-slate-950", "to-transparent"], [1, "relative", "mx-auto", "grid", "min-h-screen", "max-w-7xl", "items-center", "px-4", "py-8", "sm:px-6", "lg:grid-cols-[0.95fr_1.05fr]", "lg:gap-12", "lg:px-8"], [1, "order-2", "mx-auto", "w-full", "max-w-xl", "lg:order-1"], [1, "mb-8", "flex", "items-center", "gap-3"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-2xl", "bg-gradient-to-br", "from-violet-500", "via-fuchsia-500", "to-teal-400", "text-sm", "font-black", "shadow-2xl", "shadow-violet-950/50"], [1, "text-[11px]", "uppercase", "tracking-[0.3em]", "text-slate-400"], [1, "text-xl", "font-semibold", "text-white"], [1, "rounded-[2rem]", "border", "border-white/10", "bg-white/10", "p-6", "shadow-2xl", "shadow-black/30", "backdrop-blur-xl", "sm:p-8"], [1, "mb-8"], [1, "text-sm", "font-medium", "text-teal-300"], [1, "mt-3", "text-3xl", "font-semibold", "tracking-tight", "text-white", "sm:text-4xl"], [1, "mt-3", "max-w-lg", "text-sm", "leading-6", "text-slate-300"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], ["for", "username", 1, "mb-2", "block", "text-sm", "font-medium", "text-slate-200"], [1, "group", "relative"], [1, "pointer-events-none", "absolute", "inset-y-0", "left-4", "flex", "items-center", "text-slate-400"], ["id", "username", "type", "text", "formControlName", "username", "autocomplete", "username", "placeholder", "admin", 1, "h-12", "w-full", "rounded-2xl", "border", "border-white/10", "bg-slate-950/70", "pl-11", "pr-4", "text-sm", "text-white", "outline-none", "transition", "placeholder:text-slate-500", "focus:border-teal-400/60", "focus:ring-4", "focus:ring-teal-400/10"], ["class", "mt-2 text-xs text-red-300", 4, "ngIf"], ["for", "password", 1, "mb-2", "block", "text-sm", "font-medium", "text-slate-200"], ["id", "password", "formControlName", "password", "autocomplete", "current-password", "placeholder", "********", 1, "h-12", "w-full", "rounded-2xl", "border", "border-white/10", "bg-slate-950/70", "pl-11", "pr-12", "text-sm", "text-white", "outline-none", "transition", "placeholder:text-slate-500", "focus:border-teal-400/60", "focus:ring-4", "focus:ring-teal-400/10", 3, "type"], ["type", "button", 1, "absolute", "inset-y-0", "right-2", "flex", "items-center", "rounded-xl", "px-3", "text-xs", "font-medium", "text-slate-400", "transition", "hover:bg-white/5", "hover:text-white", 3, "click"], [1, "flex", "items-center", "justify-between", "gap-3", "pt-1"], [1, "flex", "cursor-pointer", "items-center", "gap-3", "text-sm", "text-slate-300"], ["type", "checkbox", "formControlName", "remember", 1, "h-4", "w-4", "rounded", "border-white/15", "bg-slate-950/70", "text-teal-400", "focus:ring-teal-400/20"], ["type", "button", 1, "text-sm", "font-medium", "text-teal-300", "transition", "hover:text-teal-200"], ["class", "rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-100", 4, "ngIf"], ["type", "submit", 1, "inline-flex", "h-12", "w-full", "items-center", "justify-center", "rounded-2xl", "bg-gradient-to-r", "from-violet-500", "via-fuchsia-500", "to-teal-400", "px-4", "text-sm", "font-semibold", "text-white", "shadow-lg", "shadow-violet-950/30", "transition", "hover:brightness-110", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "disabled"], [4, "ngIf", "ngIfElse"], [1, "mt-6", "border-t", "border-white/10", "pt-6"], [1, "mb-3", "flex", "items-center", "justify-between"], [1, "text-sm", "font-medium", "text-white"], [1, "text-xs", "text-slate-400"], [1, "grid", "gap-3", "sm:grid-cols-3"], ["type", "button", "class", "rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-left transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-slate-900/90", 3, "boxShadow", "click", 4, "ngFor", "ngForOf"], [1, "order-1", "mb-8", "lg:order-2", "lg:mb-0"], [1, "relative", "overflow-hidden", "rounded-[2rem]", "border", "border-white/10", "bg-slate-950/70", "p-6", "shadow-2xl", "shadow-black/40", "backdrop-blur-xl", "sm:p-8"], [1, "absolute", "inset-0", "bg-[linear-gradient(135deg,rgba(124,58,237,0.12),transparent_42%,rgba(20,184,166,0.12))]"], [1, "relative"], [1, "mt-4", "max-w-xl", "text-4xl", "font-semibold", "leading-tight", "tracking-tight", "text-white", "sm:text-5xl"], [1, "mt-8", "grid", "gap-4", "sm:grid-cols-2"], [1, "rounded-2xl", "border", "border-white/10", "bg-white/5", "p-4"], [1, "text-xs", "uppercase", "tracking-[0.22em]", "text-slate-400"], [1, "mt-2", "text-lg", "font-semibold", "text-white"], [1, "mt-2", "text-sm", "leading-6", "text-slate-300"], [1, "mt-8", "flex", "flex-wrap", "gap-3", "text-sm", "text-slate-300"], [1, "rounded-full", "border", "border-white/10", "bg-white/5", "px-4", "py-2"], [1, "mt-2", "text-xs", "text-red-300"], [1, "rounded-2xl", "border", "border-red-500/20", "bg-red-500/10", "px-4", "py-3", "text-sm", "text-red-100"], ["type", "button", 1, "rounded-2xl", "border", "border-white/10", "bg-slate-950/60", "px-4", "py-3", "text-left", "transition", "hover:-translate-y-0.5", "hover:border-white/20", "hover:bg-slate-900/90", 3, "click"], [1, "text-sm", "font-semibold", "text-white"], [1, "mt-1", "text-xs", "text-slate-400"]],
        template: function LoginPage_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6)(6, "section", 7)(7, "div", 8)(8, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " IS ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div")(11, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "InkStock Studio");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h1", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Acceso al panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Bienvenido de vuelta");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h2", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Inicia sesi\u00F3n con tu cuenta ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " El formulario fue reconstruido desde cero con Tailwind y validaci\u00F3n reactiva. Si entras desde una ruta protegida, la app te devuelve a esa pantalla despu\u00E9s de autenticarte. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "form", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginPage_Template_form_ngSubmit_23_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.submit());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div")(25, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Usuario");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19)(28, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "@");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, LoginPage_p_31_Template, 2, 0, "p", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div")(33, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Contrase\u00F1a");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 19)(36, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "#");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPage_Template_button_click_39_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.showPassword.set(!ctx.showPassword()));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, LoginPage_p_41_Template, 2, 0, "p", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 26)(43, "label", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Recordarme ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Olvid\u00E9 mi contrase\u00F1a ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, LoginPage_div_48_Template, 2, 1, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, LoginPage_span_50_Template, 2, 0, "span", 32)(51, LoginPage_ng_template_51_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 33)(54, "div", 34)(55, "p", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Acceso r\u00E1pido");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Credenciales demo");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, LoginPage_button_60_Template, 5, 4, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "aside", 39)(62, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 42)(65, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "InkStock Studio");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h2", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Control de citas, inventario y sesiones en una interfaz clara. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 44)(70, "div", 45)(71, "p", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Seguridad demo");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Usuario y contrase\u00F1a");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "p", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " El login valida contra los perfiles en memoria y mantiene el flujo de la app. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 45)(78, "p", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Redirecci\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Respeta el guard");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "p", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " Si hay redirect, el formulario vuelve al destino original al autenticar. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 49)(85, "span", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "span", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Inventario");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "span", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Citas");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Sesiones");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          }
          if (rf & 2) {
            const loadingTpl_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls.username.touched && ctx.form.controls.username.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showPassword() ? "text" : "password");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.showPassword() ? "Ocultar contrase\u00F1a" : "Mostrar contrase\u00F1a");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.showPassword() ? "Ocultar" : "Mostrar", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls.password.touched && ctx.form.controls.password.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage());
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.loading());
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading())("ngIfElse", loadingTpl_r5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.quickUsers);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
        encapsulation: 2
      });
    }
  }
  return LoginPage;
})();

/***/ })

}]);
//# sourceMappingURL=257.js.map
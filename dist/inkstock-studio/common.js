"use strict";
(self["webpackChunkinkstock_studio"] = self["webpackChunkinkstock_studio"] || []).push([[76],{

/***/ 2929:
/*!****************************************************!*\
  !*** ./src/app/shared/ui/empty-state.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyStateComponent: () => (/* binding */ EmptyStateComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const _c0 = ["*"];
let EmptyStateComponent = /*#__PURE__*/(() => {
  class EmptyStateComponent {
    constructor() {
      this.icon = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)('fa-solid fa-inbox');
      this.title = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)('Sin datos');
      this.message = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)('No hay registros para mostrar.');
    }
    static {
      this.ɵfac = function EmptyStateComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmptyStateComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EmptyStateComponent,
        selectors: [["app-empty-state"]],
        hostAttrs: [1, "block", "w-full"],
        inputs: {
          icon: [1, "icon"],
          title: [1, "title"],
          message: [1, "message"]
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c0,
        decls: 9,
        vars: 4,
        consts: [[1, "rounded-[2rem]", "border", "border-dashed", "border-white/10", "bg-white/5", "p-10", "text-center"], [1, "mx-auto", "grid", "h-14", "w-14", "place-items-center", "rounded-2xl", "bg-white/10", "text-white"], [1, "mt-5", "text-xl", "font-semibold", "text-white"], [1, "mx-auto", "mt-2", "max-w-xl", "text-sm", "leading-6", "text-slate-400"], [1, "mt-6"]],
        template: function EmptyStateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.icon() + " text-3xl");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message());
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
        encapsulation: 2
      });
    }
  }
  return EmptyStateComponent;
})();

/***/ }),

/***/ 4506:
/*!***************************************************!*\
  !*** ./src/app/shared/ui/entity-detail.dialog.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityDetailDialogComponent: () => (/* binding */ EntityDetailDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-dialog.service */ 4062);





function EntityDetailDialogComponent_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 12);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function EntityDetailDialogComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_3_0 = row_r2.value) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "N/A");
  }
}
let EntityDetailDialogComponent = /*#__PURE__*/(() => {
  class EntityDetailDialogComponent {
    constructor(data, dialogRef) {
      this.data = data;
      this.dialogRef = dialogRef;
    }
    close() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function EntityDetailDialogComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EntityDetailDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_dialog_service__WEBPACK_IMPORTED_MODULE_0__.AppDialogRef));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: EntityDetailDialogComponent,
        selectors: [["app-entity-detail-dialog"]],
        hostAttrs: [1, "block", "w-full"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 15,
        vars: 4,
        consts: [[1, "flex", "max-h-[calc(100vh-2rem)]", "flex-col", "overflow-hidden", "rounded-[2rem]", "border", "border-white/10", "bg-slate-950", "text-white", "shadow-2xl", "shadow-black/40"], [1, "flex-1", "overflow-y-auto", "p-6", "pr-4"], [1, "flex", "flex-col", "gap-5", "md:flex-row"], ["alt", "", "class", "h-52 w-full rounded-[1.5rem] object-cover md:w-64", 3, "src", 4, "ngIf"], [1, "flex-1"], [1, "text-2xl", "font-semibold", "tracking-tight"], [1, "mt-2", "text-sm", "text-slate-400"], [1, "mt-6", "grid", "gap-3", "md:grid-cols-2"], ["class", "rounded-2xl border border-white/10 bg-white/5 p-4", 4, "ngFor", "ngForOf"], [1, "shrink-0", "border-t", "border-white/10", "bg-slate-950", "px-6", "py-4"], [1, "flex", "justify-end"], ["type", "button", 1, "inline-flex", "h-11", "items-center", "justify-center", "rounded-2xl", "bg-violet-500", "px-4", "text-sm", "font-semibold", "text-white", "transition", "hover:bg-violet-400", 3, "click"], ["alt", "", 1, "h-52", "w-full", "rounded-[1.5rem]", "object-cover", "md:w-64", 3, "src"], [1, "rounded-2xl", "border", "border-white/10", "bg-white/5", "p-4"], [1, "text-[11px]", "uppercase", "tracking-[0.24em]", "text-slate-500"], [1, "mt-2", "text-sm", "font-medium", "text-white"]],
        template: function EntityDetailDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EntityDetailDialogComponent_img_3_Template, 1, 1, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EntityDetailDialogComponent_div_10_Template, 5, 2, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EntityDetailDialogComponent_Template_button_click_13_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Cerrar ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.image);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.subtitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.rows);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
        encapsulation: 2
      });
    }
  }
  return EntityDetailDialogComponent;
})();

/***/ })

}]);
//# sourceMappingURL=common.js.map
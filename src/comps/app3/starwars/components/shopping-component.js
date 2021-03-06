System.register(['@angular/core', "../actions/cart-actions", "../actions/part-actions", "../components/parts-view", "../components/cart-view", "./add-part-view", 'reselect', "angular2-redux-util"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cart_actions_1, part_actions_1, parts_view_1, cart_view_1, add_part_view_1, reselect_1, angular2_redux_util_1;
    var partsInCartSelector, ShoppingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cart_actions_1_1) {
                cart_actions_1 = cart_actions_1_1;
            },
            function (part_actions_1_1) {
                part_actions_1 = part_actions_1_1;
            },
            function (parts_view_1_1) {
                parts_view_1 = parts_view_1_1;
            },
            function (cart_view_1_1) {
                cart_view_1 = cart_view_1_1;
            },
            function (add_part_view_1_1) {
                add_part_view_1 = add_part_view_1_1;
            },
            function (reselect_1_1) {
                reselect_1 = reselect_1_1;
            },
            function (angular2_redux_util_1_1) {
                angular2_redux_util_1 = angular2_redux_util_1_1;
            }],
        execute: function() {
            partsInCartSelector = reselect_1.createSelector(function (state) { return state.cart; }, function (state) { return state.parts; }, function (cart, parts) {
                var partsById = parts.reduce(function (map, part) { return (map[part.id] = part) && map; }, {});
                return cart.map(function (id) { return partsById[id]; });
            });
            ShoppingComponent = (function () {
                function ShoppingComponent(appStore, partActions, cartActions) {
                    var _this = this;
                    this.appStore = appStore;
                    this.parts = [];
                    this.partsInCart = [];
                    this.addPart = partActions.createDispatcher(partActions.addPart, this.appStore);
                    this.addPartToCart = cartActions.createDispatcher(cartActions.addToCart, this.appStore);
                    this.removePartFromCart = cartActions.createDispatcher(cartActions.removeFromCart, this.appStore);
                    this.appStore.subscribe(function (state) {
                        _this.parts = state.parts;
                        _this.partsInCart = partsInCartSelector(state);
                    });
                    ShoppingComponent.createInitialSetOfParts(this.appStore, partActions);
                }
                ShoppingComponent.createInitialSetOfParts = function (appStore, partActions) {
                    appStore.dispatch(partActions.addPart("Lightsaber"));
                    appStore.dispatch(partActions.addPart("X-wing diecast"));
                };
                ShoppingComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping',
                        template: "\n        <h3>Parts</h3>\n        <add-part (add)=\"addPart($event)\"></add-part>\n        <parts [parts]=\"parts\" [partsInCart]=\"partsInCart\" (addToCart)=\"addPartToCart($event)\"></parts>\n        <hr/>\n        <h3>Cart</h3>\n        <cart [parts]=\"partsInCart\" (removeFromCart)=\"removePartFromCart($event)\"></cart>\n    ",
                        directives: [parts_view_1.PartsView, cart_view_1.CartView, add_part_view_1.AddPartsView]
                    }), 
                    __metadata('design:paramtypes', [angular2_redux_util_1.AppStore, part_actions_1.PartActions, cart_actions_1.CartActions])
                ], ShoppingComponent);
                return ShoppingComponent;
            }());
            exports_1("ShoppingComponent", ShoppingComponent);
        }
    }
});
//# sourceMappingURL=shopping-component.js.map
System.register(['angular2/core', 'angular2/router', 'rxjs/add/observable/from', 'rxjs/add/operator/buffer', 'rxjs/add/operator/bufferCount', 'rxjs/add/operator/delay', 'rxjs/add/operator/throttleTime', 'rxjs/add/operator/distinctUntilChanged'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2;
    var ForgotPass;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {}],
        execute: function() {
            ForgotPass = (function () {
                // example of a custom event using Observable and click event
                function ForgotPass() {
                    var _this = this;
                    this.clickStream = new core_1.EventEmitter();
                    this.disableButton = false;
                    this.clickStream.throttleTime(100)
                        .map(function (e) {
                        _this.disableButton = true;
                        return e;
                    }).delay(1000).map(function (e) { return _this.disableButton = false; })
                        .subscribe(function (x) {
                        console.log('Double clicked');
                    }, function (err) {
                        console.log('Error: ' + err);
                    }, function () {
                        console.log('Completed');
                    });
                }
                ForgotPass.prototype.forgotPass = function (event) {
                    this.clickStream.next('click');
                    //this.clickStream.buffer(() => this.clickStream.throttleTime(250))
                    //this.ee.buffer(()=> this.ee.throttle(250))
                    //this.ee.subscribe(e => console.log('aaaa'));
                };
                ForgotPass = __decorate([
                    core_1.Component({
                        providers: [ForgotPass],
                        selector: 'ForgotPass',
                        template: "\n                <div>\n                  <form class=\"form-signin\" role=\"form\">\n\n\n                    <h2 class=\"form-signin-heading\"></h2>\n                    <button id=\"loginButton\" [disabled]=\"disableButton\" (click)=\"forgotPass($event)\" class=\"btn btn-lg btn-primary btn-block\">\n                      Forgot password\n                    </button>\n                    <hr class=\"hrThin\"/>\n                    <a [routerLink]=\"['/Login', {id: 'demo_user'}, 'Login']\">Back to login screen</a><br/>\n                    <small>(auto fill user by passing router args)</small>\n                    <div id=\"languageSelectionLogin\"></div>\n                  </form>\n                </div>\n                <!-- <a [routerLink]=\"['/App1']\">And back to Test1</a> -->\n                <br/>\n                <small>ForgotPass component and I am inside EntryPanel</small>",
                        directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ForgotPass);
                return ForgotPass;
            })();
            exports_1("ForgotPass", ForgotPass);
        }
    }
});
//# sourceMappingURL=ForgotPass.js.map
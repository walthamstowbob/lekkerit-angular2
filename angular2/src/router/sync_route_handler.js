'use strict';var async_1 = require('angular2/src/facade/async');
var lang_1 = require('angular2/src/facade/lang');
var instruction_1 = require('./instruction');
var SyncRouteHandler = (function () {
    function SyncRouteHandler(componentType, data) {
        this.componentType = componentType;
        /** @internal */
        this._resolvedComponent = null;
        this._resolvedComponent = async_1.PromiseWrapper.resolve(componentType);
        this.data = lang_1.isPresent(data) ? new instruction_1.RouteData(data) : instruction_1.BLANK_ROUTE_DATA;
    }
    SyncRouteHandler.prototype.resolveComponentType = function () { return this._resolvedComponent; };
    return SyncRouteHandler;
})();
exports.SyncRouteHandler = SyncRouteHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luY19yb3V0ZV9oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvc3JjL3JvdXRlci9zeW5jX3JvdXRlX2hhbmRsZXIudHMiXSwibmFtZXMiOlsiU3luY1JvdXRlSGFuZGxlciIsIlN5bmNSb3V0ZUhhbmRsZXIuY29uc3RydWN0b3IiLCJTeW5jUm91dGVIYW5kbGVyLnJlc29sdmVDb21wb25lbnRUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxzQkFBNkIsMkJBQTJCLENBQUMsQ0FBQTtBQUN6RCxxQkFBOEIsMEJBQTBCLENBQUMsQ0FBQTtBQUd6RCw0QkFBMEMsZUFBZSxDQUFDLENBQUE7QUFHMUQ7SUFNRUEsMEJBQW1CQSxhQUFtQkEsRUFBRUEsSUFBMkJBO1FBQWhEQyxrQkFBYUEsR0FBYkEsYUFBYUEsQ0FBTUE7UUFIdENBLGdCQUFnQkE7UUFDaEJBLHVCQUFrQkEsR0FBaUJBLElBQUlBLENBQUNBO1FBR3RDQSxJQUFJQSxDQUFDQSxrQkFBa0JBLEdBQUdBLHNCQUFjQSxDQUFDQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtRQUNoRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsZ0JBQVNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLHVCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSw4QkFBZ0JBLENBQUNBO0lBQ3ZFQSxDQUFDQTtJQUVERCwrQ0FBb0JBLEdBQXBCQSxjQUF1Q0UsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUMxRUYsdUJBQUNBO0FBQURBLENBQUNBLEFBWkQsSUFZQztBQVpZLHdCQUFnQixtQkFZNUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvbWlzZVdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtpc1ByZXNlbnQsIFR5cGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbmltcG9ydCB7Um91dGVIYW5kbGVyfSBmcm9tICcuL3JvdXRlX2hhbmRsZXInO1xuaW1wb3J0IHtSb3V0ZURhdGEsIEJMQU5LX1JPVVRFX0RBVEF9IGZyb20gJy4vaW5zdHJ1Y3Rpb24nO1xuXG5cbmV4cG9ydCBjbGFzcyBTeW5jUm91dGVIYW5kbGVyIGltcGxlbWVudHMgUm91dGVIYW5kbGVyIHtcbiAgcHVibGljIGRhdGE6IFJvdXRlRGF0YTtcblxuICAvKiogQGludGVybmFsICovXG4gIF9yZXNvbHZlZENvbXBvbmVudDogUHJvbWlzZTxhbnk+ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcG9uZW50VHlwZTogVHlwZSwgZGF0YT86IHtba2V5OiBzdHJpbmddOiBhbnl9KSB7XG4gICAgdGhpcy5fcmVzb2x2ZWRDb21wb25lbnQgPSBQcm9taXNlV3JhcHBlci5yZXNvbHZlKGNvbXBvbmVudFR5cGUpO1xuICAgIHRoaXMuZGF0YSA9IGlzUHJlc2VudChkYXRhKSA/IG5ldyBSb3V0ZURhdGEoZGF0YSkgOiBCTEFOS19ST1VURV9EQVRBO1xuICB9XG5cbiAgcmVzb2x2ZUNvbXBvbmVudFR5cGUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIHRoaXMuX3Jlc29sdmVkQ29tcG9uZW50OyB9XG59XG4iXX0=
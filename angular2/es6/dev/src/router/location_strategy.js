import { CONST_EXPR } from 'angular2/src/facade/lang';
import { OpaqueToken } from 'angular2/core';
/**
 * `LocationStrategy` is responsible for representing and reading route state
 * from the browser's URL. Angular provides two strategies:
 * {@link HashLocationStrategy} and {@link PathLocationStrategy} (default).
 *
 * This is used under the hood of the {@link Location} service.
 *
 * Applications should use the {@link Router} or {@link Location} services to
 * interact with application route state.
 *
 * For instance, {@link HashLocationStrategy} produces URLs like
 * `http://example.com#/foo`, and {@link PathLocationStrategy} produces
 * `http://example.com/foo` as an equivalent URL.
 *
 * See these two classes for more.
 */
export class LocationStrategy {
}
/**
 * The `APP_BASE_HREF` token represents the base href to be used with the
 * {@link PathLocationStrategy}.
 *
 * If you're using {@link PathLocationStrategy}, you must provide a provider to a string
 * representing the URL prefix that should be preserved when generating and recognizing
 * URLs.
 *
 * ### Example
 *
 * ```
 * import {Component} from 'angular2/core';
 * import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
 *
 * @Component({directives: [ROUTER_DIRECTIVES]})
 * @RouteConfig([
 *  {...},
 * ])
 * class AppCmp {
 *   // ...
 * }
 *
 * bootstrap(AppCmp, [
 *   ROUTER_PROVIDERS,
 *   provide(APP_BASE_HREF, {useValue: '/my/app'})
 * ]);
 * ```
 */
export const APP_BASE_HREF = CONST_EXPR(new OpaqueToken('appBaseHref'));
export function normalizeQueryParams(params) {
    return (params.length > 0 && params.substring(0, 1) != '?') ? ('?' + params) : params;
}
export function joinWithSlash(start, end) {
    if (start.length == 0) {
        return end;
    }
    if (end.length == 0) {
        return start;
    }
    var slashes = 0;
    if (start.endsWith('/')) {
        slashes++;
    }
    if (end.startsWith('/')) {
        slashes++;
    }
    if (slashes == 2) {
        return start + end.substring(1);
    }
    if (slashes == 1) {
        return start + end;
    }
    return start + '/' + end;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25fc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcm91dGVyL2xvY2F0aW9uX3N0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbIkxvY2F0aW9uU3RyYXRlZ3kiLCJub3JtYWxpemVRdWVyeVBhcmFtcyIsImpvaW5XaXRoU2xhc2giXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCO09BQzVDLEVBQUMsV0FBVyxFQUFDLE1BQU0sZUFBZTtBQUd6Qzs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSDtBQVNBQSxDQUFDQTtBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQkc7QUFDSCxhQUFhLGFBQWEsR0FBZ0IsVUFBVSxDQUFDLElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFFckYscUNBQXFDLE1BQWM7SUFDakRDLE1BQU1BLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLElBQUlBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEdBQUdBLE1BQU1BLENBQUNBLEdBQUdBLE1BQU1BLENBQUNBO0FBQ3hGQSxDQUFDQTtBQUVELDhCQUE4QixLQUFhLEVBQUUsR0FBVztJQUN0REMsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDdEJBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO0lBQ2JBLENBQUNBO0lBQ0RBLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ3BCQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQTtJQUNmQSxDQUFDQTtJQUNEQSxJQUFJQSxPQUFPQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUNoQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDeEJBLE9BQU9BLEVBQUVBLENBQUNBO0lBQ1pBLENBQUNBO0lBQ0RBLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ3hCQSxPQUFPQSxFQUFFQSxDQUFDQTtJQUNaQSxDQUFDQTtJQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNqQkEsTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBR0EsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDbENBLENBQUNBO0lBQ0RBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ2pCQSxNQUFNQSxDQUFDQSxLQUFLQSxHQUFHQSxHQUFHQSxDQUFDQTtJQUNyQkEsQ0FBQ0E7SUFDREEsTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBR0EsR0FBR0EsR0FBR0EsR0FBR0EsQ0FBQ0E7QUFDM0JBLENBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtPcGFxdWVUb2tlbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1VybENoYW5nZUxpc3RlbmVyfSBmcm9tICcuL3BsYXRmb3JtX2xvY2F0aW9uJztcblxuLyoqXG4gKiBgTG9jYXRpb25TdHJhdGVneWAgaXMgcmVzcG9uc2libGUgZm9yIHJlcHJlc2VudGluZyBhbmQgcmVhZGluZyByb3V0ZSBzdGF0ZVxuICogZnJvbSB0aGUgYnJvd3NlcidzIFVSTC4gQW5ndWxhciBwcm92aWRlcyB0d28gc3RyYXRlZ2llczpcbiAqIHtAbGluayBIYXNoTG9jYXRpb25TdHJhdGVneX0gYW5kIHtAbGluayBQYXRoTG9jYXRpb25TdHJhdGVneX0gKGRlZmF1bHQpLlxuICpcbiAqIFRoaXMgaXMgdXNlZCB1bmRlciB0aGUgaG9vZCBvZiB0aGUge0BsaW5rIExvY2F0aW9ufSBzZXJ2aWNlLlxuICpcbiAqIEFwcGxpY2F0aW9ucyBzaG91bGQgdXNlIHRoZSB7QGxpbmsgUm91dGVyfSBvciB7QGxpbmsgTG9jYXRpb259IHNlcnZpY2VzIHRvXG4gKiBpbnRlcmFjdCB3aXRoIGFwcGxpY2F0aW9uIHJvdXRlIHN0YXRlLlxuICpcbiAqIEZvciBpbnN0YW5jZSwge0BsaW5rIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBwcm9kdWNlcyBVUkxzIGxpa2VcbiAqIGBodHRwOi8vZXhhbXBsZS5jb20jL2Zvb2AsIGFuZCB7QGxpbmsgUGF0aExvY2F0aW9uU3RyYXRlZ3l9IHByb2R1Y2VzXG4gKiBgaHR0cDovL2V4YW1wbGUuY29tL2Zvb2AgYXMgYW4gZXF1aXZhbGVudCBVUkwuXG4gKlxuICogU2VlIHRoZXNlIHR3byBjbGFzc2VzIGZvciBtb3JlLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9jYXRpb25TdHJhdGVneSB7XG4gIGFic3RyYWN0IHBhdGgoKTogc3RyaW5nO1xuICBhYnN0cmFjdCBwcmVwYXJlRXh0ZXJuYWxVcmwoaW50ZXJuYWw6IHN0cmluZyk6IHN0cmluZztcbiAgYWJzdHJhY3QgcHVzaFN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBxdWVyeVBhcmFtczogc3RyaW5nKTogdm9pZDtcbiAgYWJzdHJhY3QgcmVwbGFjZVN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBxdWVyeVBhcmFtczogc3RyaW5nKTogdm9pZDtcbiAgYWJzdHJhY3QgZm9yd2FyZCgpOiB2b2lkO1xuICBhYnN0cmFjdCBiYWNrKCk6IHZvaWQ7XG4gIGFic3RyYWN0IG9uUG9wU3RhdGUoZm46IFVybENoYW5nZUxpc3RlbmVyKTogdm9pZDtcbiAgYWJzdHJhY3QgZ2V0QmFzZUhyZWYoKTogc3RyaW5nO1xufVxuXG5cbi8qKlxuICogVGhlIGBBUFBfQkFTRV9IUkVGYCB0b2tlbiByZXByZXNlbnRzIHRoZSBiYXNlIGhyZWYgdG8gYmUgdXNlZCB3aXRoIHRoZVxuICoge0BsaW5rIFBhdGhMb2NhdGlvblN0cmF0ZWd5fS5cbiAqXG4gKiBJZiB5b3UncmUgdXNpbmcge0BsaW5rIFBhdGhMb2NhdGlvblN0cmF0ZWd5fSwgeW91IG11c3QgcHJvdmlkZSBhIHByb3ZpZGVyIHRvIGEgc3RyaW5nXG4gKiByZXByZXNlbnRpbmcgdGhlIFVSTCBwcmVmaXggdGhhdCBzaG91bGQgYmUgcHJlc2VydmVkIHdoZW4gZ2VuZXJhdGluZyBhbmQgcmVjb2duaXppbmdcbiAqIFVSTHMuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbiAqIGltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMsIFJvdXRlQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuICpcbiAqIEBDb21wb25lbnQoe2RpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU119KVxuICogQFJvdXRlQ29uZmlnKFtcbiAqICB7Li4ufSxcbiAqIF0pXG4gKiBjbGFzcyBBcHBDbXAge1xuICogICAvLyAuLi5cbiAqIH1cbiAqXG4gKiBib290c3RyYXAoQXBwQ21wLCBbXG4gKiAgIFJPVVRFUl9QUk9WSURFUlMsXG4gKiAgIHByb3ZpZGUoQVBQX0JBU0VfSFJFRiwge3VzZVZhbHVlOiAnL215L2FwcCd9KVxuICogXSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IEFQUF9CQVNFX0hSRUY6IE9wYXF1ZVRva2VuID0gQ09OU1RfRVhQUihuZXcgT3BhcXVlVG9rZW4oJ2FwcEJhc2VIcmVmJykpO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUXVlcnlQYXJhbXMocGFyYW1zOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gKHBhcmFtcy5sZW5ndGggPiAwICYmIHBhcmFtcy5zdWJzdHJpbmcoMCwgMSkgIT0gJz8nKSA/ICgnPycgKyBwYXJhbXMpIDogcGFyYW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gam9pbldpdGhTbGFzaChzdGFydDogc3RyaW5nLCBlbmQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChzdGFydC5sZW5ndGggPT0gMCkge1xuICAgIHJldHVybiBlbmQ7XG4gIH1cbiAgaWYgKGVuZC5sZW5ndGggPT0gMCkge1xuICAgIHJldHVybiBzdGFydDtcbiAgfVxuICB2YXIgc2xhc2hlcyA9IDA7XG4gIGlmIChzdGFydC5lbmRzV2l0aCgnLycpKSB7XG4gICAgc2xhc2hlcysrO1xuICB9XG4gIGlmIChlbmQuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgc2xhc2hlcysrO1xuICB9XG4gIGlmIChzbGFzaGVzID09IDIpIHtcbiAgICByZXR1cm4gc3RhcnQgKyBlbmQuc3Vic3RyaW5nKDEpO1xuICB9XG4gIGlmIChzbGFzaGVzID09IDEpIHtcbiAgICByZXR1cm4gc3RhcnQgKyBlbmQ7XG4gIH1cbiAgcmV0dXJuIHN0YXJ0ICsgJy8nICsgZW5kO1xufVxuIl19
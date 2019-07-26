import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LibraryDetailGuard implements CanActivate {

  constructor(private router: Router) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const idValue = +next.url[1].path;
    if (isNaN(idValue) || idValue < 1) {
      alert("Invalid product Id");
      this.router.navigate(['/library']);
      return false;
    }
		return true;
	}
}

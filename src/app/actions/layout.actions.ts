import { Action } from '@ngrx/store';


export const OPEN_SIDENAV = '[Layout] Open SideNav';
export const CLOSE_SIDENAV = '[Layout] Close SideNav';


export class OpenSideNavAction implements Action {
  readonly type = OPEN_SIDENAV;
}

export class CloseSideNavAction implements Action {
  readonly type = CLOSE_SIDENAV;
}


export type Actions
  = OpenSideNavAction
  | CloseSideNavAction;

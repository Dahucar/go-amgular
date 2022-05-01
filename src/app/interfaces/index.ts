export interface GroupRotesI {
  groupTitle: string;
  routes: Array<RouteI>;
}

export interface RouteI {
  name: string;
  path: string
}
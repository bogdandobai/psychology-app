export enum HomeRoutes {
  MAIN_NAVIGATOR = 'MainNavigator',
  TERMS = 'Terms',
  PRIVACY = 'Privacy',
}

export type HomeRoutesProps = {
  [HomeRoutes.MAIN_NAVIGATOR]: undefined;
  [HomeRoutes.TERMS]: {url: string};
  [HomeRoutes.PRIVACY]: {url:  string};
};

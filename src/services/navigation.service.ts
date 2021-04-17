import { CommonActions } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

export class NavigationService {
  private static navigator: any;

  public static initialize(navigatorRef: any) {
    NavigationService.navigator = navigatorRef;
  }

  /**
   * Navigate to a specific route, params to merge into the destination route..
   * @param routeName
   * @param params - optional
   */
  public static navigateTo(routeName: string, params?) {
    NavigationService.navigator.dispatch(
      CommonActions.navigate(routeName, params),
    );
  }

  /**
   * Navigate back to the previous route in history.
   */
  public static navigateBack() {
    NavigationService.navigator.dispatch(CommonActions.goBack());
  }

  public static pop(count?: number) {
    if (!count) {
      NavigationService.navigator.dispatch(StackActions.pop(1));
    } else {
      NavigationService.navigator.dispatch(StackActions.pop(count));
    }
  }

  public static popToTop() {
    NavigationService.navigator.dispatch(StackActions.popToTop());
  }

  public static openDrawer() {
    NavigationService.navigator.dispatch(DrawerActions.openDrawer());
  }

  public static closeDrawer() {
    NavigationService.navigator.dispatch(DrawerActions.closeDrawer());
  }
}

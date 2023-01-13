import { ButtonComponent } from './design-system-component/button/button.component';
import { DesignSystemComponents } from '../../projects/shared/src/lib/design-system/design-system';

export class ProjectDesignSystem implements DesignSystemComponents {
  button = ButtonComponent;
}

import type { IconComponent, IconKey } from './icon-map';
import { iconMap } from './icon-map';

export function getIcon(iconKey: IconKey): IconComponent {
  return iconMap[iconKey];
}

import { getIconComponent } from '../utils/icons';

export default function Icon({ name, size = 20, className = '' }) {
  const IconComponent = getIconComponent(name);
  return <IconComponent size={size} className={className} />;
}

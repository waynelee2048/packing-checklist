import {
  ClipboardList,
  Footprints,
  Briefcase,
  Plane,
  PersonStanding,
  Backpack,
  Umbrella,
  Tent,
  Target,
  ShoppingCart,
  Shirt,
  Dumbbell,
  Mountain,
  Baby,
  Camera,
  Heart,
  Music,
  BookOpen,
  Coffee,
  Gift,
} from 'lucide-react';

const iconMap = {
  'clipboard-list': ClipboardList,
  'footprints': Footprints,
  'briefcase': Briefcase,
  'plane': Plane,
  'person-standing': PersonStanding,
  'backpack': Backpack,
  'umbrella': Umbrella,
  'tent': Tent,
  'target': Target,
  'shopping-cart': ShoppingCart,
  'shirt': Shirt,
  'dumbbell': Dumbbell,
  'mountain': Mountain,
  'baby': Baby,
  'camera': Camera,
  'heart': Heart,
  'music': Music,
  'book-open': BookOpen,
  'coffee': Coffee,
  'gift': Gift,
};

// Mapping from old emoji to new icon names (for backward compatibility)
const emojiToIconName = {
  '📋': 'clipboard-list',
  '🚶': 'footprints',
  '💼': 'briefcase',
  '✈️': 'plane',
  '🏃': 'person-standing',
  '🎒': 'backpack',
  '🏖️': 'umbrella',
  '🏕️': 'tent',
  '🎯': 'target',
  '🛒': 'shopping-cart',
};

export function getIconComponent(name) {
  // If it's an emoji, convert to icon name first
  if (emojiToIconName[name]) {
    return iconMap[emojiToIconName[name]] || ClipboardList;
  }
  return iconMap[name] || ClipboardList;
}

export function resolveIconName(name) {
  if (emojiToIconName[name]) {
    return emojiToIconName[name];
  }
  return name;
}

export { iconMap };

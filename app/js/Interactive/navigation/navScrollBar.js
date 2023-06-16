import Scrollbar from 'smooth-scrollbar';
import { menu_navigation } from '../../_queries';

export default function navScrollbar() {
  Scrollbar.init(menu_navigation, {
    damping: 0.1,
    alwaysShowTracks: true,
  });
}

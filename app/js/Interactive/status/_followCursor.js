import { statusCursor } from '../../_queries';

export default function followCursor() {
  window.addEventListener('mousemove', (e) => {
    const target = e.target;
    if (!target) return;

    statusCursor.style.left = e.pageX + 'px';
    statusCursor.style.top = e.pageY + 'px';
  });
}

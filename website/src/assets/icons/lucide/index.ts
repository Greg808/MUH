import Calculator from './calculator.svg';
import PencilRuler from './pencil-ruler.svg';
import FileCheck from './file-check-corner.svg';
import ShieldCheck from './shield-check.svg';
import PaintRoller from './paint-roller.svg';
import Palette from './palette.svg';
import Users from './users-round.svg';
import CalendarClock from './calendar-clock.svg';
import Messages from './messages-square.svg';
import Workflow from './workflow.svg';
import ClipboardList from './clipboard-list.svg';

export const workIcons = {
  calculator: Calculator,
  'pencil-ruler': PencilRuler,
  'file-check': FileCheck,
  'shield-check': ShieldCheck,
  'paint-roller': PaintRoller,
  palette: Palette,
  users: Users,
  'calendar-clock': CalendarClock,
  messages: Messages,
  workflow: Workflow,
  'clipboard-list': ClipboardList,
};

export type WorkIconName = keyof typeof workIcons;

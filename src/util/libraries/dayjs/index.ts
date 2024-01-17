import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
import isBetWeen from 'dayjs/plugin/isBetween';
import isSameOrAfterBetWeen from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(isBetWeen);
dayjs.extend(isSameOrAfterBetWeen);
dayjs.extend(isSameOrBefore);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale(ja);
dayjs.tz.setDefault('Asia/Tokyo');

export default dayjs;

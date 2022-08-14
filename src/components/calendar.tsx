import { enGB } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";

interface Props {
  date: Date | any;
  setDate: Date | any;
}

const Calendar = ({ date, setDate }: Props) => {
  return (
    <DatePicker
      date={date}
      onDateChange={setDate}
      locale={enGB}
      format="dd/MM/yyyy"
    >
      {({ inputProps, focused }) => (
        <input
          className={"input" + (focused ? " -focused" : "")}
          style={{ width: 150 }}
          {...inputProps}
        />
      )}
    </DatePicker>
  );
};
export default Calendar;

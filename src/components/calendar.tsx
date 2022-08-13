import { useState } from "react";
import { enGB } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";

// TO DO: switch to TypeScript

/*
interface Props = {
    test 2
} */

const Calendar = () => {
  const [date, setDate] = useState<any>(new Date());

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

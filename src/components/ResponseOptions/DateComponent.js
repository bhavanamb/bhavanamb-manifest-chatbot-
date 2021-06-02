import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { QueCountContext, QuesLoadingContext } from "../ChatBox/ChatBox";
import { ChoiceButton } from "./OptionStyles";
import PageLoader from "../ChatBox/PageLoader";

function DateComponent(props) {
  const [date, setDate] = useState(new Date());
  //using the question number from global state
  const quesCounterContext = useContext(QueCountContext);
  const questionNumber = quesCounterContext.countQuestion;
  const currRespIndex = props.currIdx;
  const handleDatePick = props.handleOptionClick;
  const [loadingContxt, setLoading] = useContext(QuesLoadingContext);

  const handleDateChange = (date) => {
    setDate(date);
  };
  const handleDateSubmit = (e) => {
    e.preventDefault();
    let dateSelected = date.toLocaleDateString();
    quesCounterContext.counterDispatch({ type: "addQuestion" });
    handleDatePick(dateSelected, currRespIndex);
    setLoading(true);
  };
  if (currRespIndex === questionNumber) {
    if (loadingContxt) {
      return <PageLoader />;
    }
    return (
      <>
        <form onSubmit={handleDateSubmit}>
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            isClearable
            showMonthDropdown
            showYearDropdown
            scrollableMonthYearDropdown
            dropdownMode="scroll"
          />
          <ChoiceButton type="submit">Confirm</ChoiceButton>
        </form>
      </>
    );
  }
  return <></>;
}

export default DateComponent;

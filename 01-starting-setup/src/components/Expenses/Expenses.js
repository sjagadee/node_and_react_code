import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const changeFilterDateHandler = (year) => {
    console.log(year);
    setSelectedYear(year);
  };

  const filteredArray = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onChangeFilterDate={changeFilterDateHandler}
      />

      <ExpensesChart expenses={filteredArray}></ExpensesChart>
      <ExpensesList items={filteredArray} />
    </Card>
  );
};

export default Expenses;

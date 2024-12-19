import { CALCULATOR_VALUES } from "../constant";

export interface CustomButtonProps {
  value: CalcaulatorValue;
  handleClick: (value: CalcaulatorValue) => void;
}

export type CalcaulatorValue = (typeof CALCULATOR_VALUES)[number];


import {render, screen} from "@testing-library/react";
import BookingForm from "./components/BookingForm";




test('render the BookingForm label', () =>{
  render(<BookingForm/>);
  const labelElement = screen.getByText("Occasion");
  expect(labelElement).toBeInTheDocument();
})


import {render, screen} from "@testing-library/react";
import BookingForm from "./components/BookingForm";





test('render the BookingForm label Occasion', () =>{
  render(<BookingForm/>);
  const labelElement = screen.getByText("Occasion");
  expect(labelElement).toBeInTheDocument();
})

test('render the BookingForm label Guests number', () =>{
  render(<BookingForm/>);
  const labelElement = screen.getByText("Number of Guests");
  expect(labelElement).toBeInTheDocument();
})

test('render the BookingForm Phone number', () =>{
  render(<BookingForm/>);
  const labelElement = screen.getByText("Phone number");
  expect(labelElement).toBeInTheDocument();
})


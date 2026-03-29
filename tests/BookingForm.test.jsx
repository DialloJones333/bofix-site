import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../src/components/BookingForm.jsx";

describe("BookingForm Component", () => {
  it("renders the form correctly", () => {
    render(<BookingForm />);
    // Verifies the main heading is on the screen
    expect(screen.getByText("Request a Mobile Repair")).toBeInTheDocument();
  });

  it("captures user text input correctly", () => {
    render(<BookingForm />);

    // 1. Find input by its associated label text
    // Better than searching by ID or class, because it ensures form is accessible!
    const nameInput = screen.getByLabelText("Your Name");

    // 2. Simulate a user typing "Jane Doe" into the input field
    fireEvent.change(nameInput, { target: { value: "Jane Doe" } });

    // 3. Assert that the input field now contains the typed value
    expect(nameInput).toHaveValue("Jane Doe");
  });

  it("shows a success message when submitted", () => {
    render(<BookingForm />);

    // Fill out ALL required fields so the simulated browser allows the form to submit
    fireEvent.change(screen.getByLabelText("Your Name"), {
      target: { value: "John Smith" },
    });
    fireEvent.change(screen.getByLabelText("iPhone Model"), {
      target: { value: "iPhone 11-13" },
    });
    fireEvent.change(screen.getByLabelText("Meeting Location"), {
      target: { value: "Uptown Coffee" },
    });
    fireEvent.change(screen.getByLabelText("What needs fixing?"), {
      target: { value: "Shattered screen" },
    });

    // Find the submit button and click it
    const submitButton = screen.getByRole("button", {
      name: "Send Booking Request",
    });
    fireEvent.click(submitButton);

    // Verify the success message appears
    expect(screen.getByText("Request Received!")).toBeInTheDocument();
    expect(screen.getByText(/Thanks John Smith/i)).toBeInTheDocument();
  });
});

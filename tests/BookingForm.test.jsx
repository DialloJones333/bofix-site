import { describe, it, expect, vi } from "vitest";
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

  // Notice we added 'async' here
  it("shows a success message when submitted", async () => {
    // 1. Intercept the network request and force a successful "fake" response
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      }),
    );

    render(<BookingForm />);

    // Fill out the form
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

    // Click submit
    const submitButton = screen.getByRole("button", {
      name: "Send Booking Request",
    });
    fireEvent.click(submitButton);

    // 2. Use 'await findByText' instead of 'getByText'.
    // This tells the test to wait patiently for the "Sending..." state to finish!
    expect(await screen.findByText("Request Received!")).toBeInTheDocument();
    expect(screen.getByText(/Thanks John Smith/i)).toBeInTheDocument();
  });
});

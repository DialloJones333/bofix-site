import { describe, it, expect } from "vitest";
import bofixData from "../src/data/bofix.json";

describe("BOFIX Data Validation", () => {
  it("should have the correct business name and location", () => {
    expect(bofixData.businessName).toBe("BOFIX");
    expect(bofixData.location).toBe("Charlotte, NC");
  });

  it("should have an array of screen repair prices", () => {
    expect(Array.isArray(bofixData.services.screenRepairs)).toBe(true);
    expect(bofixData.services.screenRepairs.length).toBeGreaterThan(0);
  });

  it("should verify that each screen repair has a model string and a price number", () => {
    bofixData.services.screenRepairs.forEach((repair) => {
      expect(typeof repair.model).toBe("string");
      expect(typeof repair.price).toBe("number");
    });
  });
});

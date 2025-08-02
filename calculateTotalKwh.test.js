import { calculateTotalKwh } from "./utils/calculateTotalKwh.js";

describe("calculateTotalKwh", () => {
  it("dizi içindeki değerlerin toplamını 2 ondalıkla döndürmeli", () => {
    const mockData = [1.1, 2.2, 3.3];
    const result = calculateTotalKwh(mockData);
    expect(result).toBe("6.60");
  });

  it("boş array girildiğinde 0.00 dönmeli", () => {
    const result = calculateTotalKwh([]);
    expect(result).toBe("0.00");
  });

  it("tamsayılarla çalışmalı", () => {
    const mockData = [1, 2, 3];
    const result = calculateTotalKwh(mockData);
    expect(result).toBe("6.00");
  });

  it("ondalık yuvarlamayı doğru yapmalı", () => {
    const mockData = [1.005, 2.005];
    const result = calculateTotalKwh(mockData);
    expect(result).toBe("3.01");
  });

  it("negatif sayılarla çalışmalı", () => {
    const mockData = [-1, -2, -3];
    const result = calculateTotalKwh(mockData);
    expect(result).toBe("-6.00");
  });
});

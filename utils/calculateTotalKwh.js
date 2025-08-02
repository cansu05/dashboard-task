export function calculateTotalKwh(data) {
  return data.reduce((sum, val) => sum + val, 0).toFixed(2);
}

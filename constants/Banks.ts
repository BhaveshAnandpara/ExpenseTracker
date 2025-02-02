export const bankNames = ["ICICI", "CASH"] as const;

export type BankName = (typeof bankNames)[number];

export function getBankLogo(bankName: BankName) {
  const bankLogos = {
    ICICI: require("../assets/bank-icons/ICICI.png"),
    CASH: require("../assets/bank-icons/cash.png"),
  };

  return bankLogos[bankName];
}

export function getBankTint(bankName: BankName) {
  const bankLogos = {
    ICICI: "#B02A30",
    CASH: "#389538",
  };

  return bankLogos[bankName];
}

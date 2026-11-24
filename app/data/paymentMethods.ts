export interface PaymentMethod {
  id: string;
  provider: string;
  accountName: string;
  handle: string;
  link?: string;
  note?: string;
}

export const paymentMethods: PaymentMethod[] = [
  {
    id: "chime",
    provider: "Chime",
    accountName: "Robert Nash",
    handle: "$Robert-Nash-85",
  },

  {
    id: "venmo",
    provider: "Venmo",
    accountName: "Teresa Nash",
    handle: "@Teresa-Nash-41",
    link: "https://venmo.com/u/Teresa-Nash-41",
    note: "Verify phone ends in 6271 before sending",
  },
];

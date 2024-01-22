import { faker } from "@faker-js/faker";
// import DynamicCellRenderer from '../DynamicCellRenderer';
export const mockTransactionData = () => {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i,
    email: faker.internet.email(),
    amount: faker.finance.amount(),
    status: faker.random.words()
  }));
};
// export const mockTransactionData = () => {
//   return Array.from({ length: 10000 }, (_, i) => ({
//     id: i,
//     name: faker.name.fullName(),
//     email: faker.internet.email(),
//     amount: faker.finance.amount(),
//     date: faker.date.past(),
//     status: faker.random.words()
//   }));
// };
export const mockTransactionDataColumns = () => {
  return [
    { headerName: "ID", field: "id"},
    { field: "email", headerName: "Email", width: 200 },
    { field: "amount", headerName: "Amount", width: 200 },
    { field: "status", headerName: "Status", width: 200 },
  ];
};
// export const mockTransactionDataColumns = () => {
//   return [
//     { headerName: "ID", field: "id"
      
//     },
//     {
//       field: "name",
//       headerName: "Name",
//       width: 200,
//       sortable: true,
//       filter: "agSetColumnFilter",
//       filterParams: {
//         caseSensitive: true
//       }
//     },
//     { field: "email", headerName: "Email", width: 200 },
//     { field: "amount", headerName: "Amount", width: 200 },
//     { field: "date", headerName: "Date", width: 200 },
//     { field: "status"
//     },
//   ];
// };
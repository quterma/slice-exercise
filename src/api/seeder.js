const fs = require("fs");

const createCertificatesTable = (numRows) => {
  const statuses = ["Pending Signatures", "Approved By Corp.", "Offered"];

  return new Array(numRows)
    .fill({
      employee: "Jimmy who",
      geo: "Denmark",
      certificate: "GR-1",
      source: "Manual",
      plan: "Acne Israel",
      date: "01/01/22",
      prefix: "OC",
    })
    .map((row, id) => ({
      ...row,
      id,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      table: "CERTIFICATES",
    }));
};

fs.writeFile(
  "src/api/certificatesTable.json",
  JSON.stringify(createCertificatesTable(200)),
  "utf8",
  (err) => {
    if (err) throw err;
    console.log("complete");
  }
);

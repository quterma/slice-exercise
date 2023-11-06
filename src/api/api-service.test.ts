import { CertificatesTableRow } from "./api-service";

const mockData: Array<CertificatesTableRow & { id: number }> = new Array(100)
  .fill({
    employee: "test employee",
    geo: "test geo",
    certificate: "test certificate",
    source: "test source",
    plan: "test plan",
    date: "test date",
    prefix: "test prefix",
    status: "prefix status",
  })
  .map((data, i) => ({ ...data, id: i }));

describe("getDataSlice", () => {
  beforeAll(() => {
    jest.mock("./../api/table.json", () => mockData);
  });

  test("getDataSlice returns Array<CertificatesTableRow & { id: number }>", async () => {
    const getDataSlice = (await import("./api-service")).getDataSlice;

    const result = await getDataSlice(0, 3);
    const expected = mockData.slice(0, 3);

    expect(result).toMatchObject(expected);
  });

  test("getDataSlice returns list started with correct element = pageNumber*limit", async () => {
    const getDataSlice = (await import("./api-service")).getDataSlice;
    const resultList = await getDataSlice(5, 10);
    const startElementId = resultList[0].id;
    const expected = mockData[5 * 10].id;

    expect(startElementId).toBe(expected);
  });

  test("getDataSlice returns correct list size = second argument", async () => {
    const getDataSlice = (await import("./api-service")).getDataSlice;
    const limit = 12;
    const result = await getDataSlice(0, limit);

    expect(result.length).toBe(limit);
  });
});

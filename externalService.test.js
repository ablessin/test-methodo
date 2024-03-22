const { getDataFromExternalService } = require("./externalService");

jest.mock("./externalService", () => ({
  getDataFromExternalService: jest
    .fn()
    .mockResolvedValue("Mocked data from external service"),
}));

test("getDataFromExternalService returns mocked data", async () => {
  const data = await getDataFromExternalService();
  expect(data).toBe("Mocked data from external service");
});

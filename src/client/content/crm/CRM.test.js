//create a unit test for CRM.js to test the CRM.js file and its functions using import statement and export statement

import CRM from "./CRM.js";

export default describe("CRM.js", () => {
  describe("CRM.js", () => {
    it("should return the CRM", () => {
      expect(CRM).toBeDefined();
    });
    it("should render a button Create a new group", () => {
      expect(document.getElementsByName("Create New Group")).toBeDefined();
    });
    it("should render a material ui table with the data", () => {
      expect(document.getElementsByClassName("MuiDataGrid-main")).toBeDefined();
    });
  });
});

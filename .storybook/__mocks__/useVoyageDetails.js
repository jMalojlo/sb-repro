import { jest } from "@storybook/jest";

const mockLoadPortLabel = "Subic Bay";
const mockLoadPortCountryLabel = "Philippines";
const mockDischargePortLabel = "Cai Lan";
const mockDischargePortCountryLabel = "Brazil";

export const voyageID = "0164f7b9-53a8-4466-b683-524089630b88";

export const useVoyageDetails = jest.fn(() => ({
  voyageId: voyageID,
  currentLEId: 3,
  currentLE: {
    id: 1,
    title: "Cargill",
    active: true,
    rootCompany: 1,
    url: "cargill.dev.covantis.ch",
    acronym: "Carg",
    channel: "cargill"
  },
  legalEntities: [
    {
      id: 1,
      title: "Cargill",
      active: true,
      rootCompany: 1,
      url: "cargill.dev.covantis.ch",
      acronym: "Carg",
      channel: "cargill"
    },
    {
      id: 2,
      title: "Cofco",
      active: true,
      rootCompany: 1,
      url: "cofco.dev.covantis.ch",
      channel: "cofco"
    }
  ],
  voyageStaticData: {
    id: voyageID,
    vesselName: "Pink Panther",
    loadPort: mockLoadPortLabel,
    loadPortCountry: mockLoadPortCountryLabel,
    dischargePort: mockDischargePortLabel,
    dischargePortCountry: mockDischargePortCountryLabel,
    commodityName: "Soybean",
    imoNumber: 54684352,
    commodityQuantity: 1000
  },
  setSelectedSearchMessage: jest.fn(),
  fullVoyageDetails: { vessel: { vesselName: "test vessel" } },
  setSelectedFileId: jest.fn()
}));

export default useVoyageDetails;

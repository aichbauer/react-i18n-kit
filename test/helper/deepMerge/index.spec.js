import { dataWithMissingDeParts, deWithEnFallbackParts } from "../../fixtures";
import { getI18n } from "../../../src/helper";

test("withI18n | state and props | browser languages", () => {
  console.log(dataWithMissingDeParts);
  const langWithPartsFallback = getI18n(dataWithMissingDeParts, "de", "en");
  console.log(langWithPartsFallback);
  expect(langWithPartsFallback).toEqual(deWithEnFallbackParts);
});

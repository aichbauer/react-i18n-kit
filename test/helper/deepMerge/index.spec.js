import { dataWithMissingDeParts, deWithEnFallbackParts } from "../../fixtures";
import { getI18n } from "../../../src/helper";

test("withI18n | state and props | browser languages", () => {
  const langWithPartsFallback = getI18n(dataWithMissingDeParts, "de", "en");

  expect(langWithPartsFallback).toEqual(deWithEnFallbackParts);
});

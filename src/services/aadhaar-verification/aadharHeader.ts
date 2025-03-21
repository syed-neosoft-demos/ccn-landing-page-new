import { siteConfigs } from "next.config";

export const fidypayAadharHeader = {
    "Content-Type": "application/json",
    "Authorization": siteConfigs.fidypayAadharHeader.fidypayAuthorization,
    "Client-Id": siteConfigs.fidypayAadharHeader.fidypayClientID,
    "Client-Secret": siteConfigs.fidypayAadharHeader.fidypayClientSecret,
    "accept": "*/*"
}
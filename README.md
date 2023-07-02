Getting Started

Language: JavaScript

Install the latest version of the SDK:

npm install @thirdweb-dev/sdk ethers@5
Initialize the SDK and contract on your project:

import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";

const sdk = new ThirdwebSDK("binance");
const contract = await sdk.getContract("0xC28667c1101F6744140CF188916447f7d93f49d7");

Extension detected
EXTENSION

ContractMetadata

Set the metadata of this contract

await contract.metadata.set({
  name: "My Contract",
  description: "My contract description"
})

Update the metadata of a contract

await contract.metadata.update({
  description: "My new contract description"
})

Get the metadata of this contract

const metadata = await contract.metadata.get();
console.log(metadata);
Extension detected
EXTENSION

Permissions

Grant a role to a specific address

await contract.roles.grant("minter", "0x10a9217d02AFE1Db02334613530F6f808c092d88");

Revoke a role from a specific address

await contract.roles.revoke("minter", "0x10a9217d02AFE1Db02334613530F6f808c092d88");

Overwrite the list of members for specific roles

const minterAddresses = await contract.roles.get("minter");
await contract.roles.setAll({
 minter: []
});
console.log(await contract.roles.get("minter")); // No matter what members had the role before, the new list will be set to []

Get all members of a specific role

const minterAddresses = await contract.roles.get("minter");
Extension detected
EXTENSION

PermissionsEnumerable

Get all members of all roles

const rolesAndMembers = await contract.roles.getAll();
Extension detected
EXTENSION

PlatformFee

Set the platform fee recipient and basis points

await contract.platformFees.set({
  platform_fee_basis_points: 100, // 1% fee
  platform_fee_recipient: "0x..." // the fee recipient
})

Get the platform fee recipient and basis points

const feeInfo = await contract.platformFees.get();
console.log(feeInfo.platform_fee_recipient);
console.log(feeInfo.platform_fee_basis_points);

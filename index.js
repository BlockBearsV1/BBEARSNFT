Initialize the SDK and contract on your project

import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";

const sdk = new ThirdwebSDK("binance");
const contract = await sdk.getContract("0x84ec8A6AA5D265158Fd1038d515b931957170DEC");

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

Set approval for all NFTs

const operator = "undefined";
await contract.erc721.setApprovalForAll(operator, true);

Transfer an NFT

const walletAddress = "undefined";
const tokenId = 0;
await contract.erc721.transfer(walletAddress, tokenId);

Transfer an NFT from a specific wallet

const fromWalletAddress = "undefined";
const toWalletAddress = "undefined";
const tokenId = 0;
await contract.erc721.transferFrom(fromWalletAddress, toWalletAddress, tokenId);

Get NFT balance of a specific wallet

const walletAddress = "undefined";
const balance = await contract.erc721.balanceOf(walletAddress);
console.log(balance);

Get a single NFT

const tokenId = 0;
const nft = await contract.erc721.get(tokenId);

Mint many NFTs to a specific wallet

// Address of the wallet you want to mint the NFT to
const walletAddress = "undefined";

// Custom metadata of the NFTs you want to mint.
const metadatas = [{
  name: "Cool NFT #1",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
}, {
  name: "Cool NFT #2",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/other/image.png"),
}];

const tx = await contract.erc721.mintBatchTo(walletAddress, metadatas);
const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
const firstTokenId = tx[0].id; // token id of the first minted NFT
const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT

Burn a single NFT

const result = await contract.erc721.burn(tokenId);

Get all NFTs

const nfts = await contract.erc721.getAll();
console.log(nfts);

Get all NFT owners

const owners = await contract.erc721.getAllOwners();
console.log(owners);

Get all NFTs owned by a specific wallet

// Address of the wallet to get the NFTs of
const address = "undefined";
const nfts = await contract.erc721.getOwned(address);
console.log(nfts);

Mint an NFT

// Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
const metadata = {
  name: "Cool NFT",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
};

const tx = await contract.erc721.mint(metadata);
const receipt = tx.receipt; // the transaction receipt
const tokenId = tx.id; // the id of the NFT minted
const nft = await tx.data(); // (optional) fetch details of minted NFT

Mint an NFT to a specific wallet

// Address of the wallet you want to mint the NFT to
const walletAddress = "undefined";

// Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
const metadata = {
  name: "Cool NFT",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
};

const tx = await contract.erc721.mintTo(walletAddress, metadata);
const receipt = tx.receipt; // the transaction receipt
const tokenId = tx.id; // the id of the NFT minted
const nft = await tx.data(); // (optional) fetch details of minted NFT

Mint with signature

// see how to craft a payload to sign in the `contract.erc721.signature.generate()` documentation
const signedPayload = contract.erc721.signature().generate(payload);

// now anyone can mint the NFT
const tx = contract.erc721.signature.mint(signedPayload);
const receipt = tx.receipt; // the mint transaction receipt
const mintedId = tx.id; // the id of the NFT minted

Get all NFTs

const nfts = await contract.erc721.getAll();
console.log(nfts);

Get all NFT owners

const owners = await contract.erc721.getAllOwners();
console.log(owners);

Get all NFTs owned by a specific wallet

// Address of the wallet to get the NFTs of
const address = "undefined";
const nfts = await contract.erc721.getOwned(address);
console.log(nfts);

Set the new owner of the contract

const newOwnerAddress = "undefined";
await contract.owner.set(newOwnerAddress);

Get the current owner of the contract

await contract.owner.get();
console.log("Owner address: ", ownerAddress);

Grant a role to a specific address

await contract.roles.grant("minter", "undefined");

Revoke a role from a specific address

await contract.roles.revoke("minter", "undefined");

Overwrite the list of members for specific roles

const minterAddresses = await contract.roles.get("minter");
await contract.roles.setAll({
 minter: []
});
console.log(await contract.roles.get("minter")); // No matter what members had the role before, the new list will be set to []

Get all members of a specific role

const minterAddresses = await contract.roles.get("minter");

Get all members of all roles

const rolesAndMembers = await contract.roles.getAll();

Set the platform fee recipient and basis points

await contract.platformFees.set({
  platform_fee_basis_points: 100, // 1% fee
  platform_fee_recipient: "0x..." // the fee recipient
})

Get the platform fee recipient and basis points

const feeInfo = await contract.platformFees.get();
console.log(feeInfo.platform_fee_recipient);
console.log(feeInfo.platform_fee_basis_points);

Set the primary sale recipient

await contract.sales.setRecipient(recipientWalletAddress);

Get the primary sale recipient

const salesRecipient = await contract.sales.getRecipient();

Set the royalty recipient and fee

await contract.roles.setDefaultRoyaltyInfo({
  seller_fee_basis_points: 100, // 1% royalty fee
  fee_recipient: "0x...", // the fee recipient
});

Set the royalty recipient and fee for a particular token

const tokenId = 0;
await contract.roles.setTokenRoyaltyInfo(tokenId, {
  seller_fee_basis_points: 100, // 1% royalty fee
  fee_recipient: "0x...", // the fee recipient
});

Get the royalty recipient and fee

const royaltyInfo = await contract.royalties.getDefaultRoyaltyInfo();
console.log(royaltyInfo.fee_recipient);
console.log(royaltyInfo.seller_fee_basis_points);

Get the royalty recipient and fee of a particular token

const royaltyInfo = await contract.royalties.getDefaultRoyaltyInfo();
console.log(royaltyInfo.fee_recipient);
console.log(royaltyInfo.seller_fee_basis_points);

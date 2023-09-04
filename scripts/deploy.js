async function main() {
  const [deployer] = await ethers.getSigners();
  const CrowdFunding = await ethers.getContractFactory("SimpleAuction");
  const crowdFunding = await CrowdFunding.deploy(
    
  );
  console.log("Deployed Contract Address: ", crowdFunding.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

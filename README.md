Build a smart contract to facilitate and manage donations in MATIC on the Polygon network. This contract will allow donors to make contributions in MATIC to a specific cause or organization. It will also provide transparency and accountability in tracking and managing donated funds.

Functional Requirements


DONATIONS

1. Donate MATIC
Users must be able to send MATIC to the smart contract's address to make a donation.
Donations can be of any value in MATIC.
Donors should be able to specify an optional message or purpose for their donation.
2. Track Donations
The contract must keep a record of all donations, including the donor's address, amount in MATIC, and timestamp.
Each donation should be associated with a unique donation ID or transaction hash.
3. View Total Donations
Users should be able to query the total amount of MATIC donated.
4. View Donor List
The contract should maintain a list of donors' addresses.
Users should be able to retrieve the list of donors.
WITHDRAW FUNDS
1. Withdraw to Beneficiary
There should be a designated beneficiary address.
The beneficiary can initiate a withdrawal request to transfer donated MATIC funds to their address.
ADMINISTRATIVE FUNCTIONS
1. Set Beneficiary
The contract owner/administrator should be able to set or change the beneficiary's address.
2. Emergency Stop
There should be a mechanism for the contract owner/administrator to pause or halt all contract operations in case of emergencies or vulnerabilities.
SECURITY REQUIREMENTS
1. Access Control
Access to administrative functions should be restricted to the contract owner/administrator.
Donors should not have the ability to modify contract parameters or withdraw funds.
2. Fund Safety
Donated MATIC funds should be stored securely and be accessible only to the beneficiary.
3. Emergency Measures
The contract should have a fail-safe mechanism to allow pausing or halting of operations in case of security breaches or vulnerabilities.
COMPLIANCE REQUIREMENTS
1. Transparency
The contract should provide a publicly accessible interface to view donation records, total donations in MATIC, and the list of donors.
GAS EFFICIENCY (Optional)
1. Gas Optimization
The contract should be designed to minimize gas costs for both donors and the beneficiary when interacting with the contract.

TESTING AND DEPLOYMENT
1. Testing
Comprehensive testing, including unit tests and integration tests, should be conducted on the smart contract code.
2. Deployment
The smart contract must be deployed on the Polygon test network (Mumbai).

SUBMISSION
Please submit the link to your repo on GitHub.

/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { ContractWithStructs } from "./ContractWithStructs";

export class ContractWithStructsFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<ContractWithStructs> {
    return super.deploy(overrides) as Promise<ContractWithStructs>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): ContractWithStructs {
    return super.attach(address) as ContractWithStructs;
  }
  connect(signer: Signer): ContractWithStructsFactory {
    return super.connect(signer) as ContractWithStructsFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ContractWithStructs {
    return new Contract(address, _abi, signerOrProvider) as ContractWithStructs;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "offset",
        type: "uint256",
      },
    ],
    name: "getCounter",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getStuff",
    outputs: [
      {
        components: [
          {
            name: "height",
            type: "uint256",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "account",
            type: "address",
          },
        ],
        name: "_person",
        type: "tuple",
      },
      {
        components: [
          {
            name: "counter",
            type: "uint256",
          },
          {
            components: [
              {
                name: "height",
                type: "uint256",
              },
              {
                name: "name",
                type: "string",
              },
              {
                name: "account",
                type: "address",
              },
            ],
            name: "mother",
            type: "tuple",
          },
          {
            components: [
              {
                name: "height",
                type: "uint256",
              },
              {
                name: "name",
                type: "string",
              },
              {
                name: "account",
                type: "address",
              },
            ],
            name: "father",
            type: "tuple",
          },
        ],
        name: "_thing",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                name: "counter",
                type: "uint256",
              },
              {
                components: [
                  {
                    name: "height",
                    type: "uint256",
                  },
                  {
                    name: "name",
                    type: "string",
                  },
                  {
                    name: "account",
                    type: "address",
                  },
                ],
                name: "mother",
                type: "tuple",
              },
              {
                components: [
                  {
                    name: "height",
                    type: "uint256",
                  },
                  {
                    name: "name",
                    type: "string",
                  },
                  {
                    name: "account",
                    type: "address",
                  },
                ],
                name: "father",
                type: "tuple",
              },
            ],
            name: "things",
            type: "tuple[]",
          },
          {
            name: "no",
            type: "uint256",
          },
        ],
        name: "_things",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getCounter",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "height",
        type: "uint256",
      },
      {
        name: "name",
        type: "string",
      },
      {
        name: "account",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "by",
        type: "uint256",
      },
    ],
    name: "increaseCounter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "increaseCounter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "thing",
    outputs: [
      {
        name: "counter",
        type: "uint256",
      },
      {
        components: [
          {
            name: "height",
            type: "uint256",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "account",
            type: "address",
          },
        ],
        name: "mother",
        type: "tuple",
      },
      {
        components: [
          {
            name: "height",
            type: "uint256",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "account",
            type: "address",
          },
        ],
        name: "father",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: "height",
            type: "uint256",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "account",
            type: "address",
          },
        ],
        name: "_person",
        type: "tuple",
      },
      {
        components: [
          {
            name: "counter",
            type: "uint256",
          },
          {
            components: [
              {
                name: "height",
                type: "uint256",
              },
              {
                name: "name",
                type: "string",
              },
              {
                name: "account",
                type: "address",
              },
            ],
            name: "mother",
            type: "tuple",
          },
          {
            components: [
              {
                name: "height",
                type: "uint256",
              },
              {
                name: "name",
                type: "string",
              },
              {
                name: "account",
                type: "address",
              },
            ],
            name: "father",
            type: "tuple",
          },
        ],
        name: "_thing",
        type: "tuple",
      },
    ],
    name: "setStuff",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50606060405190810160405280600c81526020016040805190810160405280600481526020017f66726564000000000000000000000000000000000000000000000000000000008152508152602001600073ffffffffffffffffffffffffffffffffffffffff1681525060008082015181600001556020820151816001019080519060200190620000a4929190620000f5565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050620001a4565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200013857805160ff191683800117855562000169565b8280016001018555821562000169579182015b82811115620001685782518255916020019190600101906200014b565b5b5090506200017891906200017c565b5090565b620001a191905b808211156200019d57600081600090555060010162000183565b5090565b90565b61163080620001b46000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063214aed451461009357806387405758146100d05780638ada066e146100fd5780638da5cb5b146101285780639e80c07414610155578063b49004e91461017e578063c55e90fe14610195578063cd3f7619146101c2575b600080fd5b34801561009f57600080fd5b506100ba60048036036100b591908101906110d3565b6101eb565b6040516100c79190611403565b60405180910390f35b3480156100dc57600080fd5b506100e56101fc565b6040516100f4939291906113b7565b60405180910390f35b34801561010957600080fd5b50610112610872565b60405161011f9190611403565b60405180910390f35b34801561013457600080fd5b5061013d61087f565b60405161014c9392919061141e565b60405180910390f35b34801561016157600080fd5b5061017c600480360361017791908101906110d3565b61094f565b005b34801561018a57600080fd5b50610193610965565b005b3480156101a157600080fd5b506101aa61097b565b6040516101b99392919061145c565b60405180910390f35b3480156101ce57600080fd5b506101e960048036036101e49190810190611067565b610bad565b005b600081600360000154019050919050565b610204610d26565b61020c610d5e565b606060006003600a826060604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102c45780601f10610299576101008083540402835291602001916102c4565b820191906000526020600020905b8154815290600101906020018083116102a757829003601f168201915b505050505081526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509250816060604051908101604052908160008201548152602001600182016060604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103f05780601f106103c5576101008083540402835291602001916103f0565b820191906000526020600020905b8154815290600101906020018083116103d357829003601f168201915b505050505081526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250508152602001600482016060604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105075780601f106104dc57610100808354040283529160200191610507565b820191906000526020600020905b8154815290600101906020018083116104ea57829003601f168201915b505050505081526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505081525050915080805480602002602001604051908101604052809291908181526020016000905b82821015610861578382906000526020600020906002020160408051908101604052908160008201805480602002602001604051908101604052809291908181526020016000905b8282101561084057838290600052602060002090600702016060604051908101604052908160008201548152602001600182016060604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106b75780601f1061068c576101008083540402835291602001916106b7565b820191906000526020600020905b81548152906001019060200180831161069a57829003601f168201915b505050505081526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250508152602001600482016060604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107ce5780601f106107a3576101008083540402835291602001916107ce565b820191906000526020600020905b8154815290600101906020018083116107b157829003601f168201915b505050505081526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505081525050815260200190600101906105d5565b5050505081526020016001820154815250508152602001906001019061058d565b505050509050925092509250909192565b6000600360000154905090565b6000806000015490806001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561091f5780601f106108f45761010080835404028352916020019161091f565b820191906000526020600020905b81548152906001019060200180831161090257829003601f168201915b5050505050908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905083565b8060036000016000828254019250508190555050565b6001600360000160008282540192505081905550565b6003806000015490806001016060604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a365780601f10610a0b57610100808354040283529160200191610a36565b820191906000526020600020905b815481529060010190602001808311610a1957829003601f168201915b505050505081526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505090806004016060604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b495780601f10610b1e57610100808354040283529160200191610b49565b820191906000526020600020905b815481529060010190602001808311610b2c57829003601f168201915b505050505081526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905083565b8160008082015181600001556020820151816001019080519060200190610bd5929190610d8c565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505080600360008201518160000155602082015181600101600082015181600001556020820151816001019080519060200190610c5c929190610d8c565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050604082015181600401600082015181600001556020820151816001019080519060200190610cd5929190610d8c565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050509050505050565b6060604051908101604052806000815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b60e06040519081016040528060008152602001610d79610e0c565b8152602001610d86610e0c565b81525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610dcd57805160ff1916838001178555610dfb565b82800160010185558215610dfb579182015b82811115610dfa578251825591602001919060010190610ddf565b5b509050610e089190610e44565b5090565b6060604051908101604052806000815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b610e6691905b80821115610e62576000816000905550600101610e4a565b5090565b90565b6000610e758235611579565b905092915050565b600082601f8301121515610e9057600080fd5b8135610ea3610e9e826114ce565b6114a1565b91508082526020830160208301858383011115610ebf57600080fd5b610eca8382846115a3565b50505092915050565b600060608284031215610ee557600080fd5b610eef60606114a1565b90506000610eff84828501611053565b600083015250602082013567ffffffffffffffff811115610f1f57600080fd5b610f2b84828501610e7d565b6020830152506040610f3f84828501610e69565b60408301525092915050565b600060608284031215610f5d57600080fd5b610f6760606114a1565b90506000610f7784828501611053565b600083015250602082013567ffffffffffffffff811115610f9757600080fd5b610fa384828501610e7d565b6020830152506040610fb784828501610e69565b60408301525092915050565b600060608284031215610fd557600080fd5b610fdf60606114a1565b90506000610fef84828501611053565b600083015250602082013567ffffffffffffffff81111561100f57600080fd5b61101b84828501610ed3565b602083015250604082013567ffffffffffffffff81111561103b57600080fd5b61104784828501610ed3565b60408301525092915050565b600061105f8235611599565b905092915050565b6000806040838503121561107a57600080fd5b600083013567ffffffffffffffff81111561109457600080fd5b6110a085828601610f4b565b925050602083013567ffffffffffffffff8111156110bd57600080fd5b6110c985828601610fc3565b9150509250929050565b6000602082840312156110e557600080fd5b60006110f384828501611053565b91505092915050565b6111058161154f565b82525050565b600061111682611514565b8084526020840193508360208202850161112f856114fa565b60005b8481101561116857838303885261114a83835161121d565b925061115582611535565b9150602088019750600181019050611132565b508196508694505050505092915050565b60006111848261151f565b8084526020840193508360208202850161119d85611507565b60005b848110156111d65783830388526111b8838351611351565b92506111c382611542565b91506020880197506001810190506111a0565b508196508694505050505092915050565b60006111f28261152a565b8084526112068160208601602086016115b2565b61120f816115e5565b602085010191505092915050565b6000604083016000830151848203600086015261123a8282611179565b915050602083015161124f60208601826113a8565b508091505092915050565b600060608301600083015161127260008601826113a8565b506020830151848203602086015261128a82826111e7565b915050604083015161129f60408601826110fc565b508091505092915050565b60006060830160008301516112c260008601826113a8565b50602083015184820360208601526112da82826111e7565b91505060408301516112ef60408601826110fc565b508091505092915050565b600060608301600083015161131260008601826113a8565b506020830151848203602086015261132a82826112aa565b9150506040830151848203604086015261134482826112aa565b9150508091505092915050565b600060608301600083015161136960008601826113a8565b506020830151848203602086015261138182826112aa565b9150506040830151848203604086015261139b82826112aa565b9150508091505092915050565b6113b18161156f565b82525050565b600060608201905081810360008301526113d1818661125a565b905081810360208301526113e581856112fa565b905081810360408301526113f9818461110b565b9050949350505050565b600060208201905061141860008301846113a8565b92915050565b600060608201905061143360008301866113a8565b818103602083015261144581856111e7565b905061145460408301846110fc565b949350505050565b600060608201905061147160008301866113a8565b818103602083015261148381856112aa565b9050818103604083015261149781846112aa565b9050949350505050565b6000604051905081810181811067ffffffffffffffff821117156114c457600080fd5b8060405250919050565b600067ffffffffffffffff8211156114e557600080fd5b601f19601f8301169050602081019050919050565b6000602082019050919050565b6000602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156115d05780820151818401526020810190506115b5565b838111156115df576000848401525b50505050565b6000601f19601f83011690509190505600a265627a7a723058200f057892e069fb6597fb5836d129a0d7816e05b58ce4d478dab2ac2fa8239fbe6c6578706572696d656e74616cf50037";
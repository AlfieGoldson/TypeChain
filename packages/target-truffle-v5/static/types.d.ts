/**
 * Globals
 */
/// <reference types="jest" />

declare type EventEmitter = import('events').EventEmitter

declare type BN = import('bn.js')
declare type Web3 = import('web3').default
declare type AbiItem = import('web3-utils').AbiItem
declare type TransactionConfig = import('web3-core').TransactionConfig
declare type PromiEvent<T> = import('web3-core').PromiEvent<T>
declare type TransactionReceipt = import('web3-core').TransactionReceipt
declare type Web3EventOptions = import('web3-eth-contract').EventOptions

declare const web3: Web3

declare const artifacts: Truffle.Artifacts

/**
 * Namespace
 */
declare namespace Truffle {
  type Accounts = string[]

  interface TransactionDetails {
    from?: string
    gas?: BN | number | string
    gasPrice?: BN | number | string
    value?: BN | string
  }

  export interface TransactionLog<EVENTS extends AnyEvent> {
    address: string
    event: EVENTS['name']
    args: EVENTS['args']
    blockHash: string
    blockNumber: number
    logIndex: number
    transactionHash: string
    transactionIndex: number
    type: string
  }

  export interface TransactionResponse<EVENTS extends AnyEvent> {
    tx: string
    receipt: any
    logs: TransactionLog<EVENTS>[]
  }

  export interface AnyEvent {
    name: string
    args: any
  }

  interface Contract<T> extends ContractNew<any[]> {
    deployed(): Promise<T>
    at(address: string): Promise<T>
    link(name: string, address: string): void
    link<U>(contract: Contract<U>): void
    address: string
    contractName: string
  }

  interface EventOptions {
    filter?: Web3EventOptions['filter']
    fromBlock?: Web3EventOptions['fromBlock']
    topics?: Web3EventOptions['topics']
  }

  interface ContractInstance {
    address: string
    contract: any
    transactionHash: string
    abi: AbiItem[]
    allEvents(params?: EventOptions): EventEmitter
    send(value: Required<TransactionConfig>['value'], txParams?: TransactionConfig): PromiEvent<TransactionReceipt>
    sendTransaction(transactionConfig: TransactionConfig): PromiEvent<TransactionReceipt>
  }

  interface ContractNew<ARGs extends any[]> {
    'new'(...args: ARGs): any
  }

  interface Deployer {
    link(library: Truffle.Contract<any>, destination: Truffle.Contract<any>): Deployer
    link(library: Truffle.Contract<any>, destinations: Array<Truffle.Contract<any>>): Deployer
    deploy<T extends any[]>(c: ContractNew<T>, ...args: T): Deployer
  }

  type Migration = (deploy: Deployer, network: string, accounts: Accounts) => void
}

import { Contract } from 'ethers';
import abis from '../../lib/abis/index';
import ContractSettings from '../contractSettings';
const abi = abis.FeePool;

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function FeePool(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['FeePoolProxy'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.exchangeFeeRate = async () => {
    return await this.contract.exchangeFeeRate();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _owner {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.nominateNewOwner = async (_owner, txParams) => {
    txParams = txParams || {};
    return await this.contract.nominateNewOwner(_owner, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.initiationTime = async () => {
    return await this.contract.initiationTime();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _beneficiary {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSelfDestructBeneficiary = async (_beneficiary, txParams) => {
    txParams = txParams || {};
    return await this.contract.setSelfDestructBeneficiary(_beneficiary, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.feePeriodDuration = async () => {
    return await this.contract.feePeriodDuration();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.feeAuthority = async () => {
    return await this.contract.feeAuthority();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.terminateSelfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.terminateSelfDestruct(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.transferFeeRate = async () => {
    return await this.contract.transferFeeRate();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns Object
   **/
  this.recentFeePeriods = async uint256 => {
    return await this.contract.recentFeePeriods(uint256);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.nextFeePeriodId = async () => {
    return await this.contract.nextFeePeriodId();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_TRANSFER_FEE_RATE = async () => {
    return await this.contract.MAX_TRANSFER_FEE_RATE();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.acceptOwnership = async txParams => {
    txParams = txParams || {};
    return await this.contract.acceptOwnership(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns BigNumber
   **/
  this.lastFeeWithdrawal = async address => {
    return await this.contract.lastFeeWithdrawal(address);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _proxy {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setProxy = async (_proxy, txParams) => {
    txParams = txParams || {};
    return await this.contract.setProxy(_proxy, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.havven = async () => {
    return await this.contract.havven();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.selfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.selfDestruct(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.SELFDESTRUCT_DELAY = async () => {
    return await this.contract.SELFDESTRUCT_DELAY();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.selfDestructInitiated = async () => {
    return await this.contract.selfDestructInitiated();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param sender {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setMessageSender = async (sender, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMessageSender(sender, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.initiateSelfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.initiateSelfDestruct(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.selfDestructBeneficiary = async () => {
    return await this.contract.selfDestructBeneficiary();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Number
   **/
  this.FEE_PERIOD_LENGTH = async () => {
    return await this.contract.FEE_PERIOD_LENGTH();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MIN_FEE_PERIOD_DURATION = async () => {
    return await this.contract.MIN_FEE_PERIOD_DURATION();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.FEE_ADDRESS = async () => {
    return await this.contract.FEE_ADDRESS();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.proxy = async () => {
    return await this.contract.proxy();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_FEE_PERIOD_DURATION = async () => {
    return await this.contract.MAX_FEE_PERIOD_DURATION();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_EXCHANGE_FEE_RATE = async () => {
    return await this.contract.MAX_EXCHANGE_FEE_RATE();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _exchangeFeeRate {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setExchangeFeeRate = async (_exchangeFeeRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.setExchangeFeeRate(_exchangeFeeRate, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _transferFeeRate {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setTransferFeeRate = async (_transferFeeRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.setTransferFeeRate(_transferFeeRate, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _feeAuthority {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setFeeAuthority = async (_feeAuthority, txParams) => {
    txParams = txParams || {};
    return await this.contract.setFeeAuthority(_feeAuthority, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _feePeriodDuration {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setFeePeriodDuration = async (_feePeriodDuration, txParams) => {
    txParams = txParams || {};
    return await this.contract.setFeePeriodDuration(_feePeriodDuration, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _havven {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setHavven = async (_havven, txParams) => {
    txParams = txParams || {};
    return await this.contract.setHavven(_havven, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes4}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.feePaid = async (currencyKey, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.feePaid(currencyKey, amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.closeCurrentFeePeriod = async txParams => {
    txParams = txParams || {};
    return await this.contract.closeCurrentFeePeriod(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes4}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.claimFees = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.claimFees(currencyKey, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param value {BigNumber}
   * @returns BigNumber
   **/
  this.transferFeeIncurred = async value => {
    return await this.contract.transferFeeIncurred(value);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param value {BigNumber}
   * @returns BigNumber
   **/
  this.transferredAmountToReceive = async value => {
    return await this.contract.transferredAmountToReceive(value);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param value {BigNumber}
   * @returns BigNumber
   **/
  this.amountReceivedFromTransfer = async value => {
    return await this.contract.amountReceivedFromTransfer(value);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param value {BigNumber}
   * @returns BigNumber
   **/
  this.exchangeFeeIncurred = async value => {
    return await this.contract.exchangeFeeIncurred(value);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param value {BigNumber}
   * @returns BigNumber
   **/
  this.exchangedAmountToReceive = async value => {
    return await this.contract.exchangedAmountToReceive(value);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param value {BigNumber}
   * @returns BigNumber
   **/
  this.amountReceivedFromExchange = async value => {
    return await this.contract.amountReceivedFromExchange(value);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes4}
   * @returns BigNumber
   **/
  this.totalFeesAvailable = async currencyKey => {
    return await this.contract.totalFeesAvailable(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param currencyKey {bytes4}
   * @returns BigNumber
   **/
  this.feesAvailable = async (account, currencyKey) => {
    return await this.contract.feesAvailable(account, currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.currentPenalty = async account => {
    return await this.contract.currentPenalty(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns uint256[6]
   **/
  this.feesByPeriod = async account => {
    return await this.contract.feesByPeriod(account);
  };
}

export default FeePool;

import { Injectable } from '@nestjs/common';
import * as ccxt from 'ccxt';

@Injectable()
export class TradingService {
  private exchange = new ccxt.binance();
  private symbol = 'DOGE/USDT';

  async trade(action: string, amount: number) {
    if (action === 'buy') {
      return this.exchange.createMarketBuyOrder(this.symbol, amount);
    } else if (action === 'sell') {
      return this.exchange.createMarketSellOrder(this.symbol, amount);
    } else {
      throw new Error('Invalid action');
    }
  }
}

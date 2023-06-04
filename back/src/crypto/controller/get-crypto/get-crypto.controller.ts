import { CoinMarketCapAPI } from '@app/crypto/api/coinmarketcap.api';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('cryptos')
export class GetCryptoController {
  constructor(private readonly coinMarketCapAPI: CoinMarketCapAPI) {}

  @Get(':crypto')
  async getCryptoInfo(@Param('crypto') crypto: string): Promise<any> {
    try {
      return await this.coinMarketCapAPI.getCryptoInfo(crypto);
    } catch (error) {
      throw new Error(`Failed to get crypto information: ${error.message}`);
    }
  }

  @Get('cryptos/listings')
  async getCryptocurrencyListings(): Promise<any> {
    try {
      return await this.coinMarketCapAPI.getCryptocurrencyListings();
    } catch (error) {
      throw new Error(
        `Failed to get cryptocurrency listings: ${error.message}`,
      );
    }
  }

  @Get('historical/:crypto/:start/:end')
  async getCryptocurrencyHistoricalData(
    @Param('crypto') crypto: string,
    @Param('start') start: string,
    @Param('end') end: string,
  ): Promise<any> {
    try {
      const startDate = new Date(start);
      const endDate = new Date(end);
      return await this.coinMarketCapAPI.getCryptocurrencyHistoricalData(
        crypto,
        startDate,
        endDate,
      );
    } catch (error) {
      throw new Error(
        `Failed to get cryptocurrency historical data: ${error.message}`,
      );
    }
  }

  @Get('global')
  async getGlobalMarketData(): Promise<any> {
    try {
      return await this.coinMarketCapAPI.getGlobalMarketData();
    } catch (error) {
      throw new Error(`Failed to get global market data: ${error.message}`);
    }
  }
}

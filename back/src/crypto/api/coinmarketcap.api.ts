import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoinMarketCapAPI {
  private readonly baseUrl = 'https://pro-api.coinmarketcap.com/v1';
  private readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async get(endpoint: string): Promise<any> {
    try {
      const url = `${this.baseUrl}/${endpoint}`;
      const response: AxiosResponse<any> = await axios.get(url, {
        headers: {
          'X-CMC_PRO_API_KEY': this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(
        `Failed to fetch data from CoinMarketCap API: ${error.message}`,
      );
    }
  }

  async getCryptoInfo(crypto: string): Promise<any> {
    const endpoint = `cryptocurrency/quotes/latest?symbol=${crypto}`;
    return this.get(endpoint);
  }

  async getCryptocurrencyListings(): Promise<any> {
    const endpoint = 'cryptocurrency/listings/latest';
    return this.get(endpoint);
  }

  async getCryptocurrencyHistoricalData(
    crypto: string,
    start: Date,
    end: Date,
  ): Promise<any> {
    const startTime = start.toISOString();
    const endTime = end.toISOString();
    const endpoint = `cryptocurrency/quotes/historical?symbol=${crypto}&time_start=${startTime}&time_end=${endTime}`;
    return this.get(endpoint);
  }

  async getGlobalMarketData(): Promise<any> {
    const endpoint = 'global-metrics/quotes/latest';
    return this.get(endpoint);
  }
}

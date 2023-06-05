import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GetCryptoController } from './controller/get-crypto/get-crypto.controller';
import { CoinMarketCapAPI } from './api/coinmarketcap.api';
import {
  CryptoCommandServiceService,
  CryptoQueryServiceService,
} from '@app/crypto/services';

@Module({
  imports: [ConfigModule],
  controllers: [GetCryptoController],
  providers: [
    CryptoQueryServiceService,
    CryptoCommandServiceService,
    {
      provide: CoinMarketCapAPI,
      useFactory: (configService: ConfigService) => {
        const apiKey = configService.get<string>('COINMARKETCAP_API_KEY');
        return new CoinMarketCapAPI(apiKey);
      },
      inject: [ConfigService],
    },
  ],
})
export class CryptoModule {}

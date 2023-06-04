import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GetCryptoController } from './controller/get-crypto/get-crypto.controller';
import { CommandServiceService } from './command-service/command-service.service';
import { QueryServiceService } from './query-service/query-service.service';
import { CoinMarketCapAPI } from './api/coinmarketcap.api';

@Module({
  imports: [ConfigModule],
  controllers: [GetCryptoController],
  providers: [
    QueryServiceService,
    CommandServiceService,
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

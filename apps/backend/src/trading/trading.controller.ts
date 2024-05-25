import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { TradingService } from './trading.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

@ApiTags('trading')
@ApiBearerAuth()
@Controller('trading')
export class TradingController {
  constructor(private tradingService: TradingService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiResponse({ status: 201, description: 'Trade executed successfully' })
  @ApiResponse({ status: 400, description: 'Invalid request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async trade(@Body() tradeDto: { action: string; amount: number }) {
    return this.tradingService.trade(tradeDto.action, tradeDto.amount);
  }
}

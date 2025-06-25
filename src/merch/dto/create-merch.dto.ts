import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Currency } from '../../enums/currency.enum';

export class CreateMerchDto {
  @ApiProperty({ example: 'Cool T-shirt' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'Limited edition merch', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 29.99 })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({ enum: Currency, example: Currency.USD })
  @IsEnum(Currency)
  currency: Currency;

  @ApiProperty({ example: 100 })
  @IsInt()
  @Min(0)
  available_stock: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  author_id: number;

  @ApiProperty({ example: 2 })
  @IsInt()
  category_id: number;
}
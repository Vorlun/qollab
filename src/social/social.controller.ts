import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
} from "@nestjs/common";
import { SocialService } from "./social.service";
import { CreateSocialDto } from "./dto/create-social.dto";
import { UpdateSocialDto } from "./dto/update-social.dto";

@Controller("social")
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @Post()
  create(@Body() dto: CreateSocialDto) {
    return this.socialService.create(dto);
  }

  @Get()
  findAll() {
    return this.socialService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.socialService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() dto: UpdateSocialDto) {
    return this.socialService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.socialService.remove(id);
  }
}

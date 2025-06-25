import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Patch,
  Delete,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreateMerchDto } from "./dto/create-merch.dto";
import { MerchService } from "./merch.service";
import {
  ApiTags,
  ApiConsumes,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from "@nestjs/swagger";
import { merchImageStorage } from "../uploads/merch/upload.config";

@ApiTags("Merch")
@Controller("merch")
export class MerchController {
  constructor(private readonly merchService: MerchService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor("image", {
      storage: merchImageStorage,
    })
  )
  @ApiOperation({ summary: "Create a merch item with image upload" })
  @ApiConsumes("multipart/form-data")
  @ApiBody({ type: CreateMerchDto })
  @ApiResponse({ status: 201, description: "Merch successfully created" })
  create(
    @Body() dto: CreateMerchDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.merchService.create(dto, file);
  }

  @Get()
  @ApiOperation({ summary: "Get all merch" })
  @ApiResponse({ status: 200, description: "List of all merch" })
  findAll() {
    return this.merchService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get one merch by ID" })
  @ApiResponse({ status: 200, description: "Single merch item" })
  findOne(@Param("id") id: string) {
    return this.merchService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update merch by ID" })
  update(@Param("id") id: string, @Body() dto: Partial<CreateMerchDto>) {
    return this.merchService.update(+id, dto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete merch by ID" })
  remove(@Param("id") id: string) {
    return this.merchService.remove(+id);
  }
}

import { PartialType } from "@nestjs/mapped-types";
import { CreateMerchCategoryDto } from "./create-merch-category.dto";

export class UpdateMerchCategoryDto extends PartialType(CreateMerchCategoryDto) {}

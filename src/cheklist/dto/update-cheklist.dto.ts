import { PartialType } from '@nestjs/mapped-types';
import { CreateCheklistDto } from './create-cheklist.dto';

export class UpdateCheklistDto extends PartialType(CreateCheklistDto) {}

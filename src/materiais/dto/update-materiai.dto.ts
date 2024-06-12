import { PartialType } from '@nestjs/mapped-types';
import { CreateMateriaiDto } from './create-materiai.dto';

export class UpdateMateriaiDto extends PartialType(CreateMateriaiDto) {}

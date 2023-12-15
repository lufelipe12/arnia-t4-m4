import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { CurrentUserDto } from '../auth/dto/current-user.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(
    @CurrentUser() user: CurrentUserDto,
    @Body() createPetDto: CreatePetDto,
  ) {
    return this.petsService.create(createPetDto, +user.sub);
  }

  @Get()
  findAll(@Query('breed') breed?: string) {
    return this.petsService.findAll(breed);
  }

  @UseGuards(AuthGuard)
  @Get('my-pets')
  findMyPeys(@CurrentUser() user: CurrentUserDto) {
    return this.petsService.findMyPets(+user.sub);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petsService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePetDto: UpdatePetDto,
    @CurrentUser() user: CurrentUserDto,
  ) {
    return this.petsService.update(+id, updatePetDto, +user.sub);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petsService.remove(+id);
  }
}

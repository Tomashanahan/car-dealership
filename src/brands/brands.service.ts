import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      createdAt: new Date().getTime(),
      name: 'Bmw',
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    this.brands.push({
      id: uuid(),
      createdAt: new Date().getTime(),
      ...createBrandDto,
    });
    return this.brands;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);

    if (brand) {
      return brand;
    } else {
      throw new NotFoundException(`The brand with id:${id} wasnt found`);
    }
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let dbBrand = this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        dbBrand = {
          ...brand,
          ...updateBrandDto,
          id,
        };
        return dbBrand;
      }
      return brand;
    });
    return dbBrand;
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return this.brands;
  }
}

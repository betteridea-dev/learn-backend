import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ModuleService {
  constructor(private readonly prisma: PrismaService) {}

  create() {
    throw new BadRequestException(
      'Module creation allowed only through Prisma Admin',
    );
  }

  async findAllByCourse(courseId: number) {
    const modules = await this.prisma.module.findMany({
      where: {
        courseId,
      },
    });

    return modules;
  }

  async findOne(id: number) {
    const module = await this.prisma.module.findUnique({
      where: {
        id,
      },
    });

    return module;
  }

  async update() {
    throw new BadRequestException(
      'Module updation allowed only through Prisma Admin',
    );
  }

  async remove() {
    throw new BadRequestException(
      'Module deletion allowed only through Prisma Admin',
    );
  }
}

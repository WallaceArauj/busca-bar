import { Repository } from 'typeorm';
import { Bar } from './bar.entity';

export class BarRepository extends Repository<Bar> {

    async findByName(name: string): Promise<Bar> {
        return this.findOne({ where: { name } });
    }

}